# tests connection with database

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
client = MongoClient('localhost');

# retrieve all documents
find_result = client.biglittle.users.find_one({},{"name":1,"address":1})

# display results
print("\nFind Result:")
pprint.pprint(find_result)
