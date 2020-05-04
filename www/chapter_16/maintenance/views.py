from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from db.mongodb.connection import Connection
from biglittle.domain.user import UserService
from biglittle.domain.loan import LoanService
from biglittle.entity.loan import Loan,LoanInfo,Payment
from biglittle.entity.user import User
from utils.utils import Utils
from biglittle.events.publisher import Publisher
from gridfs import GridFS
import os

def index(request) :

    # init vars
    loan         = Loan()
    amtPaid      = 0.00
    amtDue       = 0.00
    totalPaid    = 0.00
    totalDue     = 0.00
    message      = ''
    borrower     = None
    borrowerKey  = None
    borrowerName = ''
    payments     = []
    overpayment  = 0.00
    loan_docs    = []

    # init domain services
    config   = Config()
    userSvc  = UserService(config, 'User')
    utils    = Utils()

    # check cache to see if there are any messages
    message = utils.read_cache('message', True)

    # get list of borrowers
    borrowers  = userSvc.fetchBorrowerKeysAndNames()

    # render results
    params = {
        'loan'         : loan,
        'payments'     : payments,
        'borrowers'    : borrowers,
        'borrowerName' : borrowerName,
        'borrowerKey'  : borrowerKey,
        'amountDue'    : amtDue,
        'overpayment'  : overpayment,
        'totalPaid'    : totalPaid,
        'totalDue'     : totalDue,
        'loan_docs'    : loan_docs,
        'message'      : message
    }
    main   = render_to_string('maintenance.html', params)
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)

def payments(request) :

    # init vars
    loan         = None
    amtPaid      = 0.00
    amtDue       = 0.00
    totalPaid    = 0.00
    totalDue     = 0.00
    message      = ''
    borrower     = None
    borrowerKey  = None
    borrowerName = ''
    overpayment  = 0.00
    loan_docs    = []

    # init payments
    payment  = Payment()
    payments = [payment.populate()]

    # init services
    publisher = Publisher()
    config    = Config()
    userSvc   = UserService(config, 'User', publisher)
    loanSvc   = LoanService(config, 'Loan', publisher)
    utils     = Utils()

    # set up attachments
    publisher.attach(publisher.EVENT_LOAN_UPDATE_BORROWER, userSvc.updateBorrowerListener)

    # check cache to see if there are any messages
    message = utils.read_cache('message', True)

    # get list of borrowers
    borrowers = userSvc.fetchBorrowerKeysAndNames()

    # if this is a POST request process the form data
    if request.method == 'POST':
        if 'borrowerKey' in request.POST :
            borrowerKey = request.POST['borrowerKey']
            utils.write_cache('borrowerKey', borrowerKey)
        if 'amount_paid' in request.POST :
            amtPaid = float(request.POST['amount_paid'])
    else :
        borrowerKey = utils.read_cache('borrowerKey')

    # use user service to get borrower's name
    if borrowerKey :
        borrower = userSvc.fetchUserByBorrowerKey(borrowerKey)
        # look for loan documents to be uploaded to GridFS
        grid = GridFS(loanSvc.getDatabase())
        if request.FILES and 'loan_doc' in request.FILES :
            fn = request.FILES['loan_doc']
            newFn = borrowerKey + '/' + os.path.basename(fn.name)
            grid.put(fn, filename=newFn)
            message = 'File uploaded'
        # get list of documents currently loaded
        loan_docs = []
        temp = grid.list()
        for name in temp :
            if name.find(borrowerKey) >= 0 :
                loan_docs.append(os.path.basename(name))

    # if borrower instance is in play, process the payment
    if borrower :
        borrowerName = borrower.getFullName()
        totalDue     = borrower.get('amountDue').to_decimal()
        totalPaid    = borrower.get('amountPaid').to_decimal()
        # use loan service to get loan info
        loan = loanSvc.fetchLoanByBorrowerKey(borrowerKey)
        if loan :
            # collect info
            overpayment = loan.get('overpayment')
            loanInfo = loan.getLoanInfo()
            amtDue = loanInfo.getMonthlyPayment()
            # process payment
            if amtPaid > 0 :
                if loanSvc.processPayment(borrowerKey, amtPaid, loan) :
                    message = 'Payment processed'
                    loan = loanSvc.fetchLoanByBorrowerKey(borrowerKey)
                else :
                    message = 'Problem processing payment'
            # convert loan document from BSON to Decimal for presentation
            loan.convertBsonToDecimal()
            payments = loan.getPayments()
            overpayment = loan.get('overpayment')
            loanInfo = loan.getLoanInfo()
            amtDue = loanInfo.getMonthlyPayment()

    # render results
    params = {
        'loan'         : loan,
        'payments'     : payments,
        'borrowers'    : borrowers,
        'borrowerName' : borrowerName,
        'borrowerKey'  : borrowerKey,
        'amountDue'    : amtDue,
        'overpayment'  : overpayment,
        'totalPaid'    : totalPaid,
        'totalDue'     : totalDue,
        'loan_docs'    : loan_docs,
        'message'      : message
    }
    main   = render_to_string('maintenance.html', params)
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)

def totals(request) :
    # init vars
    config      = Config()
    userSvc     = UserService(config, 'User')

    # get totals
    totals  = userSvc.fetchTotalsByLender()

    # render results
    params = {
        'totals'   : totals,
        'counter'  : 0
    }
    main   = render_to_string('totals.html', params)
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)

def past_due(request) :
    pass

def handle_uploaded_file(fn, borrowerKey, db):
    import os
