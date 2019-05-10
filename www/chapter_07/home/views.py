# Create your views here.
from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from db.mongodb.connection import Connection

def index(request):
    config = Config()
    conn   = Connection(config.getConfig('db'))
    db     = conn.getDatabase()
    html   = '<h1>Welcome to Book Someplace!</h1>'
    html  += '<hr>'
    html  += '<ul>'
    import pprint
    for item in db.common.find() :
        html  += '<li>' +  pprint.saferepr(item) + '</li>'
    html  += '</ul>'
    main   = render_to_string('home.html')
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)
