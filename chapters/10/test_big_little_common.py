# testing database connection to biglittle.loan collection

# tell python where to find module source code
import pprint
import os,sys
sys.path.append(os.path.realpath("src"))
from config.config import Config
from db.mongodb.connection import Connection

# setting up the connection + collection
conn = Connection('localhost', 27017)
common = conn.getCollection('biglittle.common')

# testing common collection query
result = common.find()
for item in result :
    pprint.pprint(item)

key = 'paymentLen'
query  = {'key':key}
result = common.find_one(query)
print('Value for ' + key + ':')
pprint.pprint(result.get('value'))
