# tests replica set connection with write concerns

# import needed classes
import pprint
from pymongo import MongoClient

# sample data
insertData = [
    { "fname":"Fred","lname":"Flintstone"},
    { "fname":"Wilma","lname":"Flintstone"},
    { "fname":"Barney","lname":"Rubble"},
    { "fname":"Betty","lname":"Rubble"}
]

# set up client
hosts    = ['member1.biglittle.local','member2.biglittle.local','member3.biglittle.local']
replName = 'learn_mongodb'
writePref = 'majority'
writeMs   = 100
client    = MongoClient(hosts, replicaSet=replName, w=writePref, wTimeoutMs=writeMs, fsync=True);

# drop the "test" collection
client.biglittle.test.drop()

# add a new document to the "test" collection
client.biglittle.test.insert_many(insertData)

# retrieve results
result = client.biglittle.test.find()

# display results
for doc in result :
    pprint.pprint(doc)
