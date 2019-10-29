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
client = MongoClient('localhost')

# create point to database: "test"
test_db = client.test

# remove any existing documents
test_db.test_collection.delete_many({})

# add a document to the "test_collection" collection
insert_result = test_db.test_collection.insert_one(data)

# retrieve the same document
find_result = test_db.test_collection.find_one()

# display results
print("\nInsert Result:")
pprint.pprint(insert_result)
print("\nFind Result:")
pprint.pprint(find_result)
