#!/usr/bin/python

# tell python where to find source code
import os,sys
src_path = os.path.realpath('../../chapters/06/src')
sys.path.append(src_path)

# enable error display
import cgitb
cgitb.enable(display=1, logdir='../data')

# custom imports
from config.config import Config
from web.responder.html import HtmlResponder
from web.auth import SimpleAuth
from db.mongodb.connection import Connection
from sweetscomplete.domain.customer import CustomerService
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.product import ProductService
from sweetscomplete.entity.product import Product

# create CustomerService instance
config       = Config()
db_config    = config.getConfig('db')
cust_conn    = Connection(db_config['host'], db_config['port'], Customer)
cust_service = CustomerService(cust_conn, db_config['database'])
prod_conn    = Connection(db_config['host'], db_config['port'], Product)
prod_service = ProductService(prod_conn, db_config['database'])

# init vars
auth     = SimpleAuth(cust_service, config.getConfig('session_storage'))
cust     = auth.getIdentity()

# HTML output
response = HtmlResponder('templates/select.html')
response.addInsert('%message%', '<br>')
response.addInsert('%ajax_url%', config.getConfig('ajax_url'))

# output
if cust :
    # display customer name
    response.addInsert('%name%', cust.getFullName())
else :
    response.addInsert('%name%', 'guest')

print(response.render())
