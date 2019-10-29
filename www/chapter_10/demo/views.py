from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from db.mongodb.connection import Connection
from biglittle.domain.common import CommonService
from biglittle.domain.loan import LoanService
from biglittle.domain.user import UserService
from biglittle.entity.loan import Loan
from biglittle.entity.user import User

# delete when done debugging
from utils.utils import Utils

def index(request) :
    params = {}
    main   = render_to_string('demo.html', params)
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)
