# testing database connection to sweetscomplete.customer collection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import db.mongodb.connection
from sweetscomplete.entity.purchase import Purchase

# setting up the connection + collection
conn = db.mongodb.connection.Connection('localhost', 27017, Purchase)
db   = conn.getDatabase("sweetscomplete")

# testing purchases collection query
purch = db.purchases.find_one()
print("\nResult from Query:")
print('Class:    ' + str(type(purch)))
print('Key:      ' + purch.getKey())
print('Customer: ' + purch.getCustomerName())
print('Date:     ' + purch.get('dateOfPurchase'))
print('JSON:     ' + purch.toJson())
