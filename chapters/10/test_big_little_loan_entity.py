# testing database connection to biglittle.loan collection

# tell python where to find module source code
import pprint
import os,sys
sys.path.append(os.path.realpath("src"))

from db.mongodb.connection import Connection

# setting up the connection + collection
#conn        = Connection('localhost', 27017, Product)
conn = Connection('localhost', 27017)
loan = conn.getCollection("biglittle.loans")

# testing products collection query
result = loan.find_one()
pprint.pprint(result)
