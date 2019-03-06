# testing database connection to sweetscomplete.customer collection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection
from sweetscomplete.entity.product import Product

# setting up the connection + collection
conn = db.mongodb.connection.Connection('localhost', 27017, Product)
db   = conn.getDatabase("sweetscomplete")

# testing blank entity
prod = Product(True)
print("\nResult from Query:")
print('Class: ' + str(type(prod)))
print('Key: '   + prod.getKey())
print('Title: ' + prod.getTitle())
print('Category'+ prod.get('category'))
print('JSON:'   + prod.toJson(['productPhoto']))

# testing products collection query
prod = db.products.find_one()
print("\nResult from Query:")
print('Class: ' + str(type(prod)))
print('Key: '   + prod.getKey())
print('Title: ' + prod.getTitle())
print('Category'+ prod.get('category'))
print('JSON:'   + prod.toJson(['productPhoto']))
