# tests connection with database

# sample data
data = {
    'first_name' : 'Fred',
    'last_name'  : 'Flintstone'
}

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
# NOTE: assumes you have the docker container described in this chapter up and running
client = MongoClient('learning.mongodb.local:27017')

# create point to database: "test"
test_db = client.test

# remove any existing documents
test_db.test_collection.delete_many({})

# add a document to the "test_collection" collection
# return the last auto-generated ID
insert_result = test_db.test_collection.insert_one(data).inserted_id

# retrieve the new document
find_result = test_db.test_collection.find_one({"_id":insert_result})

# display results
print("\nInsert Result:")
pprint.pprint(insert_result)
print("\nFind Result:")
pprint.pprint(find_result)
