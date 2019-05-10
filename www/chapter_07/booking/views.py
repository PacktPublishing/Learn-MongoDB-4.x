# Create your views here.
from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from booksomeplace.domain.property import PropertyService

def index(request):
    config = Config()
    propService = PropertyService(config)
    main = render_to_string('booking.html', { 'top_10' : propService.fetchTop10() })
    page = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(page)
