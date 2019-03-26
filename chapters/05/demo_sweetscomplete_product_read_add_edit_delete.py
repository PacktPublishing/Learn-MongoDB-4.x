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

# updating a single product
updateDoc = {
    'productPhoto' :'REVISED PHOTO',
    'price'        : 2.22
};

result = service.editOneByKey(key, updateDoc)
if not result :
    print("\nUnable to find this product key: " + key)
else :
    print("\nProduct " + key + " updated successfully")
    print(result.toJson())

# bad key should not perform updates
badkey = 'badkey'
result = service.editOneByKey(badkey, updateDoc)
if not result :
    print("\nUnable to find this product key: " + badkey)
else :
    print("\nProduct " + badkey + " updated successfully")
    print(result.toJson())

# increasing the cost per unit of Test products
query = dict({"productKey" : key})
result = service.editPrice(query, 1.10)
if  result > 0:
    print("\n" + str(result) + " products updated successfully")

# running a fetch based on skuNumber
print("\nFetch by skuNumber")
doc = service.fetchBySku("TEST0000")
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

# deleting all instances of the test product (just in case!)
if service.deleteAll(query) :
    print("\nAll Products " + key + " deleted successfully")

