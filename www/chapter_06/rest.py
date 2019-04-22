#!/usr/bin/python

# tell python where to find source code
import os,sys
src_path = os.path.realpath('../../chapters/06/src')
sys.path.append(src_path)

# custom imports
import cgi
from config.config import Config
from web.responder.rest import RestResponder
from db.mongodb.connection import Connection
from sweetscomplete.domain.product import ProductService
from sweetscomplete.entity.product import Product

# create CustomerService instance
config       = Config()
db_config    = config.getConfig('db')
prod_conn    = Connection(db_config['host'], db_config['port'], Product)
prod_service = ProductService(prod_conn, db_config['database'])

# grab request info
data          = None
error         = None
link          = '/'
status        = 200
params        = cgi.FieldStorage()

# determine request method
if 'REQUEST_METHOD' in os.environ :
    method = os.environ['REQUEST_METHOD']
    if method == 'GET' :
        # look for product key
        if 'key' in params :
            data = prod_service.fetchOneKeyCategoryTitlePriceForRest(params['key'].value)
        else :
            data = prod_service.fetchAllKeyCategoryTitlePriceForRest()
        if not data :
            error = 'No results'
            status = 404
    else :
        error = 'Set HTTP method to GET'
        status = 501
else :
    error = 'Unable to determine request method'
    status = 400
    
# JSON output
response = RestResponder(os.environ, data, error, status)
print(response.render())
