from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from db.mongodb.connection import Connection
from biglittle.domain.common import CommonService
from biglittle.domain.loan import LoanService
from biglittle.domain.user import UserService
from biglittle.entity.loan import Loan
from biglittle.entity.user import User
from utils.utils import Utils

def index(request) :

    # init vars
    defCurr     = 'USD'
    proposals   = {}
    have_any    = False
    principal   = 0.00
    numPayments = 0
    currency    = defCurr
    config      = Config()
    comSvc      = CommonService(config)
    userSvc     = UserService(config, 'User')
    maxProps    = 3
    utils       = Utils()
    borrowerKey = 'default'

    # check cache to see if there are any messages
    message = utils.read_cache('message', True)
    if not message :
        message = 'Please contact us with your choice'

    # get list of borrowers
    borrowers  = userSvc.fetchBorrowerKeysAndNames()
    # get list of loan payment lengths
    payments   = comSvc.fetchByKey('paymentLen')
    # get list of currencies
    currencies = comSvc.fetchByKey('currency')

    # if this is a POST request process the form data
    if request.method == 'POST':
        # if post, use loanSvc to generate 3 payment schedules
        if 'borrower' in request.POST :
            borrowerKey = request.POST['borrower']
        if 'principal' in request.POST :
            principal = float(request.POST['principal'])
        if 'num_payments' in request.POST :
            numPayments = int(request.POST['num_payments'])
        if 'currency' in request.POST :
            currency = request.POST['currency']
        # proposals (max 3!)
        if principal > 0 :
            # retrieve cache utility
            utils     = Utils()
            have_any  = True
            # pick 3 lenders at random
            loanSvc   = LoanService(config, Loan())
            lenders   = userSvc.pickRandomLenders(maxProps)
            have_any  = True
            proposals = loanSvc.generateMany(float(principal), int(numPayments), currency, borrowerKey, lenders)
            utils.write_cache(borrowerKey, proposals)

    # render results
    params = {
        'payments'   : payments,
        'currencies' : currencies,
        'proposals'  : proposals,
        'have_any'   : have_any,
        'borrowers'  : borrowers,
        'principal'  : principal,
        'numPayments': numPayments,
        'currency'   : currency,
        'borrower'   : borrowerKey,
        'message'    : message
    }
    main   = render_to_string('loan.html', params)
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)

def accept(request) :
    message = 'Sorry! Unable to process your loan request'
    # get utils
    utils = Utils()
    # if this is a POST request process the form data
    if request.method == 'POST':
        # if post, use loanSvc to generate 3 payment schedules
        if 'accept' in request.POST :
            # get lender and borrower from POST
            if 'lender' in request.POST :
                lenderKey = request.POST['lender']
                borrowerKey = request.POST['borrower']
                # retrieve proposals from cache
                proposals = utils.read_cache(borrowerKey)
                # scan through proposals until lenderKey matches
                if lenderKey in proposals :
                    # get loan service
                    config  = Config()
                    loanSvc = LoanService(config, Loan())
                    # retrieve loan out of proposals
                    loan = Loan()
                    loan.populate(proposals[lenderKey])
                    # store document
                    loanSvc.save(loan)
                    message = 'SUCCESS: loan processed!'
    # redirect to loan home
    utils.write_cache('message', message)
    return index(request)
