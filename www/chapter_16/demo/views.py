import pymongo
from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from db.mongodb.connection import Connection
from biglittle.domain.loan import LoanService
from biglittle.entity.loan import Loan

# delete when done debugging
from utils.utils import Utils

def index(request) :
    config      = Config()
    loanSvc     = LoanService(config, 'Loan')
    amounts     = loanSvc.fetchLoanAmounts()

    # render view
    params = {
        'output' : output, 
        'target' : target 
    }
    main = render_to_string('demo.html', params)
    home = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)
