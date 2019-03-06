# testing database connection to sweetscomplete.customer collection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection
from sweetscomplete.entity.customer import Customer

# setting up the connection + collection
conn = db.mongodb.connection.Connection('localhost', 27017, Customer)
db   = conn.getDatabase("sweetscomplete")

# testing blank entity
cust = Customer(True)
print("\Blank Entity:")
print('Class: ' + str(type(cust)))
print('Key: '   + cust.getKey())
print('Name: '  + cust.getFullName())
print('Email: ' + cust.get('email'))
print('JSON:'   + cust.toJson())

# testing customer collection query
cust = db.customers.find_one()
print("\nResult from Query:")
print('Class: ' + str(type(cust)))
print('Key: '   + cust.getKey())
print('Name: '  + cust.getFullName())
print('Email: ' + cust.get('email'))
print('JSON:'   + cust.toJson())
