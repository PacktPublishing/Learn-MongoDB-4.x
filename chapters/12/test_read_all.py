# tests connection with database

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
client = MongoClient(
    'localhost', 
    username='read_all',
    password='password',
    authSource='admin',
    authMechanism='SCRAM-SHA-256');

# retrieve first document for "biglittle.users" collection
result_biglittle = client.biglittle.users.find_one({},{"name":1,"address":1})
result_sweets    = client.sweetscomplete.customers.find_one({},{"firstName":1,"lastName":1,"city":1,"locality":1,"country":1})

# display results
print("\nFind Result:")
pprint.pprint(result_biglittle)
pprint.pprint(result_sweets)
