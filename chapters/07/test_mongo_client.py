# db.mongodb.connection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
from pymongo import MongoClient
from learn.study import Study

host       = 'localhost'
port       = 27017
database   = 'learn'
client     = MongoClient(host, port, Study)
db         = client[database]

for doc in db.study.find() : print(doc.getName())

