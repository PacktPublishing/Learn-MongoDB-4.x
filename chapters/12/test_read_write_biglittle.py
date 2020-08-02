# tests read/write with database "biglittle"

# sample data
data = {
    'first_name' : 'Fred',
    'last_name'  : 'Flintstone'
}

# import needed classes
import pprint
from pymongo import MongoClient

# set up client with read/write to "biglittle"
client = MongoClient(
    'localhost', 
    username='bgReadWrite',
    password='password',
    authSource='biglittle',
    authMechanism='SCRAM-SHA-256');

# remove any existing documents for test collection
client.biglittle.test_collection.delete_many({})

# add a document to the "test_collection" collection
insert_result = client.biglittle.test_collection.insert_one(data)

# retrieve the same document
find_result = client.biglittle.test_collection.find_one()

# display results
print("\nInsert Result:")
pprint.pprint(insert_result)
print("\nFind Result:")
pprint.pprint(find_result)
