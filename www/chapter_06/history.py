#!/usr/bin/python

# tell python where to find source code
import os,sys
src_path = os.path.realpath("../../chapters/06/src")
sys.path.append(src_path)

# enable error display
import cgitb
cgitb.enable(display=1, logdir=".")

# custom imports
from config.config import Config
from web.responder.html import HtmlResponder
from web.auth import SimpleAuth
from db.mongodb.connection import Connection
from sweetscomplete.domain.customer import CustomerService
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.purchase import PurchaseService
from sweetscomplete.entity.purchase import Purchase

# create CustomerService instance using configuration class
config        = Config()
db_config     = config.getConfig('db')
cust_conn     = Connection(db_config['host'], db_config['port'], Customer)
cust_service  = CustomerService(cust_conn, db_config['database'])
purch_conn    = Connection(db_config['host'], db_config['port'], Purchase)
purch_service = PurchaseService(purch_conn, db_config['database'])

# init vars
auth         = SimpleAuth(cust_service, config.getConfig('session_storage'))
cust         = auth.getIdentity()
response     = HtmlResponder('templates/history.html')

# get page number
import cgi
info = cgi.FieldStorage()

if 'page' in info :
    pageNum = int(info['page'].value)
else :
    pageNum = 0

response.addInsert('%message%', 'You are currently viewing page: ' + str(pageNum))

# output
if cust :
    response.addInsert('%name%', cust.getFullName())
    # display paginated purchase history
    page_config = config.getConfig('pagination')
    limit = page_config['lines']
    skip = int(pageNum * limit)
    purchHist  = purch_service.fetchPaginatedByCustKey(
        cust.getKey(), skip, limit)
    if not purchHist :
        response.addInsert('%history%', 'No recent purchase found')
    else :
        historyHtml = response.buildPurchaseHistory(
            purchHist, pageNum, page_config['baseUrl'])
        response.addInsert('%history%', historyHtml)
else :
    response.addInsert('%name%', 'guest')
    response.addInsert('%history%', 'Need to login to view purchase history')

print(response.render())

