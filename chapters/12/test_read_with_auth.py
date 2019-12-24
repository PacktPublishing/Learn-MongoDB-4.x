# tests connection with database

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
client = MongoClient(
    'localhost', 
    username='biglittle_reader',
    password='password',
    authSource='biglittle',
    authMechanism='SCRAM-SHA-256');

# retrieve first document
find_result = client.biglittle.users.find_one({},{"name":1,"address":1})

# display results
print("\nFind Result:")
pprint.pprint(find_result)
