# tests connection with database from a replica set member

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
hosts    = ['member1.biglittle.local','member2.biglittle.local','member3.biglittle.local']
replName = 'learn_mongodb'
client   = MongoClient(hosts, replicaSet=replName);

# retrieve first document for "biglittle.users" collection
result = client.biglittle.users.find_one({}, {"businessName":1,"address":1})

# display results
pprint.pprint(result)
