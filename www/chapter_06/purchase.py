#!/usr/bin/python

# tell python where to find source code
import os,sys
src_path = os.path.realpath("../../chapters/06/src")
sys.path.append(src_path)

# enable error display
import cgitb
cgitb.enable(display=1, logdir=".")

# custom imports
from web.responder.html import HtmlResponder
from web.auth import SimpleAuth
from db.mongodb.connection import Connection
from sweetscomplete.domain.customer import CustomerService
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.product import ProductService
from sweetscomplete.entity.product import Product
from sweetscomplete.entity.product_purchased import ProductPurchased
from sweetscomplete.domain.purchase import PurchaseService
from sweetscomplete.entity.purchase import Purchase

# create CustomerService instance
cust_conn     = Connection('localhost', 27017, Customer)
cust_service  = CustomerService(cust_conn, 'sweetscomplete')
prod_conn     = Connection('localhost', 27017, Product)
prod_service  = ProductService(prod_conn, 'sweetscomplete')
purch_conn    = Connection('localhost', 27017, Purchase)
purch_service = PurchaseService(purch_conn, 'sweetscomplete')

# init vars
sess_storage = os.path.realpath("../data")
auth         = SimpleAuth(cust_service, sess_storage)
cust         = auth.getIdentity()
response     = HtmlResponder('templates/purchase.html')

# go to login page if not authenticated
if not cust :
    print("Location: /chapter_06/index.py\r\n")
    print()
    quit()

# check for form posting
import cgi
form = cgi.FieldStorage()

if 'purchase' in form :

    # establish date of purchase and purchase key
    import datetime
    import random
    today = datetime.datetime.today()
    dateOfPurchase = today.strftime('%Y-%m-%d %H:%M:%S')
    ymd   = today.strftime('%Y%m%d')
    fname = cust.get('firstName')
    lname = cust.get('lastName')
    transactionId  = ymd + fname[0:4] + lname[0:4] + str(random.randint(0, 9999))
    
    # create Purchase entity
    purchase = Purchase()
    purchase.set('transactionId',  transactionId)
    purchase.set('dateOfPurchase', dateOfPurchase)

    # add customer info
    purchase.set('customerKey',   cust.getKey())
    purchase.set('firstName',     cust.get('firstName'))
    purchase.set('lastName',      cust.get('lastName'))
    purchase.set('phoneNumber',   cust.get('phoneNumber'))
    purchase.set('email',         cust.get('email'))
    purchase.set('streetAddressOfBuilding', 
                 cust.get('streetAddressOfBuilding'))
    purchase.set('city',          cust.get('city'))
    purchase.set('stateProvince', cust.get('stateProvince'))
    purchase.set('locality',      cust.get('locality'))
    purchase.set('country',       cust.get('country'))
    purchase.set('postalCode',    cust.get('postalCode'))
    purchase.set('latitude',      cust.get('latitude'))
    purchase.set('longitude',     cust.get('longitude'))

    # get dictionary of product keys + create empty "productsPurchased" dictionary
    prodKeys = prod_service.fetchKeys()
    productsPurchased = dict()
    
    # loop through dropdowns and build productsPurchased list
    for key, value in prodKeys.items() :
        qtyKey = 'qty_' + key
        if qtyKey in form :
            item = form[qtyKey]
            if isinstance(item, list) :
                item = item[0]
            qty = int(item.value)
            if  qty > 0 :
                prodInfo = prod_service.fetchByKey(key)
                if prodInfo :
                    prodPurch = ProductPurchased(prodInfo.toJson())
                    prodPurch.set('qtyPurchased', qty)
                    productsPurchased[key] = prodPurch
        
    # set list of ProductPurchased objects into the Purchase object
    purchase.set('productsPurchased', productsPurchased)

    # save to the database
    purch_service.addOne(purchase)
    
# output
if cust :
    response.addInsert('%name%', cust.getFullName())
    # display list of products purchased today
    lastPurch  = purch_service.fetchLastPurchaseForCust(cust.getKey())
    if not lastPurch :
        response.addInsert('%purchase%', 'No recent purchase found')
    else :
        mostRecent = response.buildLastPurchase(lastPurch)
        response.addInsert('%purchase%', mostRecent)
        # cancel option
        if 'cancel' in form :
            if purch_service.deleteByKey(lastPurch.getKey()) :
                response.addInsert('%message%', '<b>Purchase cancelled.</b>')
            else :
                response.addInsert('%message%', '<b>Sorry! Unable to cancel purchase.</b>')
        else :        
            response.addInsert('%message%', '<b>Thanks for your purchase!</b>')
else :
    response.addInsert('%name%', 'guest')

print(response.render())

