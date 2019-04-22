#!/usr/bin/python

# tell python where to find source code
import os,sys
src_path = os.path.realpath('../../chapters/06/src')
sys.path.append(src_path)

# custom imports
from config.config import Config
from web.responder.json import JsonResponder
from web.auth import SimpleAuth
from db.mongodb.connection import Connection
from sweetscomplete.domain.product import ProductService
from sweetscomplete.entity.product import Product

# create CustomerService instance
config       = Config()
db_config    = config.getConfig('db')
prod_conn    = Connection(db_config['host'], db_config['port'], Product)
prod_service = ProductService(prod_conn, db_config['database'])

# JSON output
response = JsonResponder()
data     = prod_service.fetchAllKeysTitlesPricesForAjax()
response.addProductKeyTitlePrice('data', data)
print(response.render())
