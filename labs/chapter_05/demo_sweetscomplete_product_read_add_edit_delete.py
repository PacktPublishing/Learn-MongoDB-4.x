# sweetscomplete.entity.product.Product read/add/edit/delete

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection

from datetime import date
from sweetscomplete.entity.product import Product
from sweetscomplete.domain.product import ProductService

# setting up the connection + collection
conn = db.mongodb.connection.Connection('localhost',27017,Product)
service = ProductService(conn, 'sweetscomplete')

# initialize test data
key        = '00000000'
doc        = '''\
{
    "productKey"  : "%key%",
    "productPhoto": "TEST",
    "skuNumber"   : "TEST0000",
    "category"    : "test",
    "title"       : "Test",
    "description" : "test",
    "price"       : 1.11,
    "unit"        : "test",
    "costPerUnit" : 2.22,
    "unitsOnHand" : 333
}
'''.replace('%key%',key)

# adding a new product
print("\nAdding a Single Test Product")
product = Product(doc)
if service.addOne(product) :
    print("\nProduct " + key + " added successfully")

# running a query for a single item
print("\nFetch Product by Key")
doc = service.fetchByKey(key)
if doc :
    print(doc.toJson())

# deleting the test product
query = dict({"productKey" : key})
if service.deleteOne(query) :
    print("\nProduct " + key + " deleted successfully")

# running a query all products
print("\nList of Product Titles and Keys")
for doc in service.fetchAllKeysAndTitles() :
    print(doc['title'] + '  [' + doc['productKey'] + ']')
