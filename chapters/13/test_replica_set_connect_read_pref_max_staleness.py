# tests replica set connection with read preferences and max stale seconds

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
hosts    = ['member1.biglittle.local','member2.biglittle.local','member3.biglittle.local']
replName = 'learn_mongodb'
readPref = 'nearest'
maxStale = 90
client   = MongoClient(hosts, replicaSet=replName, readPreference=readPref, maxStalenessSeconds=maxStale);

# retrieve first document for "biglittle.users" collection
result = client.biglittle.users.find_one({}, {"businessName":1,"address":1})

# display results
pprint.pprint(result)
