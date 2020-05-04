#!/usr/bin/python3
import os,sys
src_path = os.path.realpath("../../chapters/05/src")
sys.path.append(src_path)

# enable error display
import cgitb
cgitb.enable(display=1, logdir=os.path.realpath("../data"))

# init vars
success        = False
message        = "<b>Please Login Before Purchase</b>"
sess_storage   = os.path.realpath("../data")
from web.responder import Html
html_out = Html('templates/index.html')

# check for form posting
import cgi
form = cgi.FieldStorage()
if 'username' in form and 'password' in form :
    # pull username (email address) and pasword
    username = form['username'].value
    password = form['password'].value
    # do imports for authentication
    from web.auth import SimpleAuth
    from db.mongodb.connection import Connection
    from sweetscomplete.domain.customer import CustomerService
    from sweetscomplete.entity.customer import Customer
    # create CustomerService instance
    conn = Connection('localhost', 27017, Customer)
    cust_service = CustomerService(conn, 'sweetscomplete')
    # perform simple auth
    auth = SimpleAuth(cust_service, sess_storage)
    if  auth.authenticate(username, password) :
        success = True
        html_out.addHeader('Set-Cookie: token=' + auth.getToken() + ';path=/')
        message = "<b>HOORAY!  Successful Login.</b>"
    else :
        message = "<b>SORRY!  Unable to Login.</b>"

# output login form + message
html_out.addInsert('%message%', message)
print(html_out.render())
