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
from db.mongodb.connection import Connection
from sweetscomplete.domain.product import ProductService
from sweetscomplete.entity.product import Product

# create CustomerService instance
config       = Config()
db_config    = config.getConfig('db')
prod_conn    = Connection(db_config['host'], db_config['port'], Product)
prod_service = ProductService(prod_conn, db_config['database'])

# HTML output
message  = 'SORRY! Unable to find information on this product'        
response = HtmlResponder('templates/details.html')

# check for form posting
import cgi
form = cgi.FieldStorage()

if 'product' in form :
    
    # get product key
    key = form['product'].value
    
    # lookup product
    product = prod_service.fetchByKey(key)    
    if product :
        title   = product.get('title')
        message = 'Details on ' + title
        imgTag  = response.buildBase64Image('photo', 'png', product.get('productPhoto'))
        response.addInsert('%photo%', imgTag)
        response.addInsert('%title%', title)
        response.addInsert('%productKey%', product.get('productKey'))
        response.addInsert('%skuNumber%', product.get('skuNumber'))
        response.addInsert('%category%', product.get('category'))
        response.addInsert('%price%', product.get('price'))
        response.addInsert('%unit%', product.get('unit'))
        response.addInsert('%unitsOnHand%', product.get('unitsOnHand'))
        response.addInsert('%description%', product.get('description'))
        response.addInsert('%message%', message)
        print(response.render())

    else :
        print("Location: /chapter_06/index.py\r\n")
        print()
        quit()

else :

    print("Location: /chapter_06/index.py\r\n")
    print()
    quit()
            
