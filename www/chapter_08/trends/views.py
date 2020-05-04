from django.http import HttpResponse, HttpResponseRedirect
from django.template.loader import render_to_string
from .forms import TrendForm

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../chapters/08/src"))
from config.config import Config
from booksomeplace.domain.booking import BookingService

"""
This view method sets up the screen for the future trends report
@param request
@return HTML
"""
def future(request) :

    # build master form
    params = {
        'trend_city'     : None,
        'trend_region'   : 'England',
        'trend_locality' : None,
        'trend_country'  : 'GB',
        'trend_factor'   : .10,
    }
    context = { 'form' : TrendForm(initial=params) }
    trend_master = render_to_string('trend.html', context)

    # embed form in layout
    page = render_to_string('layout.html', {'contents' : trend_master})
    return HttpResponse(page)

"""
This view method returns a list of revenue totals for 12 months:
6 months - today + 6 months
@param request
@return JSON list
"""
def futureJson(request) :

    # init vars
    import json
    bookSvc = BookingService(Config())
    params  = {
        'trend_city'     : None,
        'trend_region'   : 'England',
        'trend_locality' : None,
        'trend_country'  : 'GB',
        'trend_factor'   : 0.10
    }

    # if this is a POST request process the form data
    if request.method == 'POST':
        params = request.POST

    # get trend data from booking service
    data = bookSvc.getTrendData(params)
    return HttpResponse(json.dumps(data), content_type='application/json')


