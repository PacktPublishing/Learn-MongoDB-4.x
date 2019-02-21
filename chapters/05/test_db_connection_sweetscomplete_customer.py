# testing database connection to sweetscomplete.customer collection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection
import sweetscomplete.entity.customer as cust

# setting up the connection + collection
conn = db.mongodb.connection.Connection()
db   = conn.getDatabase("sweetscomplete")

# Testing Customer Collection Query
pprint.pprint(db.customers.find_one())
