# testing database connection to sweetscomplete.customer collection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

from db.mongodb.connection import Connection
from sweetscomplete.entity.product import Product

# setting up the connection + collection
conn        = Connection('localhost', 27017, Product)
prodCollect = conn.getCollection("sweetscomplete.products")

# testing products collection query
result = prodCollect.find_one()
print("\nResult from Query:")
print('Class:    ' + str(type(result)))
print('Key:      ' + result.getKey())
print('Title:    ' + result.getTitle())
print('Category: ' + result.get('category'))
print('JSON:     ' + result.toJson(['productPhoto']))
