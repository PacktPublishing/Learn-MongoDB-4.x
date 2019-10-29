from django.template.loader import render_to_string
from django.http import HttpResponse
from config.config import Config
from db.mongodb.connection import Connection

def index(request):
    config = Config()
    conn   = Connection(config.getConfig('db'))
    db     = conn.getDatabase('biglittle')
    main   = render_to_string('home.html')
    home   = render_to_string('layout.html', {'contents' : main})
    return HttpResponse(home)
