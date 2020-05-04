#!/usr/bin/python3

# tell python where to find source code
import os,sys
src_path = os.path.realpath('../../chapters/05/src')
sys.path.append(src_path)

# enable error display
import cgitb
cgitb.enable(display=1, logdir='../data')

# custom imports
from web.responder import Html
from web.auth import SimpleAuth
from db.mongodb.connection import Connection
from sweetscomplete.domain.customer import CustomerService
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.product import ProductService
from sweetscomplete.entity.product import Product

# create CustomerService instance
cust_conn    = Connection('localhost', 27017, Customer)
cust_service = CustomerService(cust_conn, 'sweetscomplete')
prod_conn    = Connection('localhost', 27017, Product)
prod_service = ProductService(prod_conn, 'sweetscomplete')

# init vars
sess_storage   = os.path.realpath("../data")
auth           = SimpleAuth(cust_service, sess_storage)
html_out = Html('templates/select.html')
html_out.addInsert('%message%', '<br>')

# output
cust = auth.getIdentity()
if cust :
    # display customer name
    html_out.addInsert('%name%', cust.getFullName())
    # add products to dropdown
    keysAndTitles = prod_service.fetchAllKeysAndTitlesForSelect()
    # limit purchases to 6 line items
    for x in range(0, 6) :
        htmlSelect = html_out.buildSelect('dropdown' + str(x+1), keysAndTitles)
        html_out.addInsert('%dropdown' + str(x+1) + '%', htmlSelect)
else :
    html_out.addInsert('%name%', 'guest')

print(html_out.render())
