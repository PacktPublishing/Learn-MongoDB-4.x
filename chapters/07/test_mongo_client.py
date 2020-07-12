# db.mongodb.connection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/repo/chapters/07/src"))

import pprint
from pymongo import MongoClient

host       = 'localhost'
port       = 27017
database   = 'booksomeplace'
client     = MongoClient(host, port)
db         = client[database]

for doc in db.customers.find() : 
    pprint.pprint(doc)

