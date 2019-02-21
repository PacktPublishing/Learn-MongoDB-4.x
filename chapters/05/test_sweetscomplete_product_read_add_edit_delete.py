# sweetscomplete.entity.product.Product read/add/edit/delete

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection

test = Product()

from datetime import date
from sweetscomplete.entity.product import Product
from sweetscomplete.domain.product import ProductService

# setting up the connection + collection
conn = db.mongodb.connection.Connection()
service = ProductService(conn, 'sweetscomplete')

# initialize test data
key        = 'test' + date.today().isoformat().replace('-', '')
doc        = '''\
{
    "productKey":"%key%",
    "productPhoto":"TEST",
    "MainProductInfo": {
        "skuNumber":"TEST0000",
        "category":"test",
        "title":"Test",
        "description":"test",
        "price":"1.11"
    },
    "InventoryInfo" : {
        "unit":"test",
        "costPerUnit":"2.22",
        "unitsOnHand":333
    }
}
'''.replace('%key%',key)

# adding a new product
print("\nAdding a Single Test Product\n")
product = Product(doc)
if service.addOne(product) :
    print("\nProduct " + key + " added successfully\n")

# running a query for a single item
print("\nFetch Product by Key\n")
doc = service.fetchByKey(key)
if doc :
    print(doc.toJson())

# TODO: updating a single product
#product = Product()
#if service.editOne(product) :
#    print("\nProduct " + key + " updated successfully\n")

# TODO: updating a many products
#if service.editAll(docs) :
#    print("\nProduct " + key + " updated successfully\n")

# running a query for a single item
print("\nUpdated Test Product\n")
query = dict({ "MainProductInfo.skuNumber" : "TEST9999" })
doc = service.fetchOne(query)
if doc :
    print("\nSingle Product\n")
    print(doc.toJson())

# running a query
print("\nList of Test Products\n")
query = dict({ "MainProductInfo.skuNumber" : "TEST0000" })
for doc in service.fetch(query) :
    print(doc.MainProductInfo.title)

# deleting the test product
query = dict({"productKey" : key})
if service.deleteOne(query) :
    print("\nProduct " + key + " deleted successfully\n")

# running a query all products
print("\nList of Product Titles and Keys\n")
for doc in service.fetchAllKeysAndTitles() :
    print(doc.MainProductInfo.title + '  [' + doc.productKey + ']')

# deleting all instances of the test product
if service.deleteAll(query) :
    print("\nAll Products " + key + " deleted successfully\n")

