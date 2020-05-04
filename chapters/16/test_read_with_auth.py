# tests connection with database
# import needed classes
import pprint
from pymongo import MongoClient
import os,sys
sys.path.append(os.path.realpath("src"))
from config.config import Config
from db.mongodb.connection import Connection

# set up client
config = Config()
conn = Connection(config.getConfig('db'))
client = conn.getClient()

# truncate the test collection
client.biglittle.test.delete_many({});

# add a new entry to the "test" collection
client.biglittle.test.insert_one({"id":12345,"name":"Fred Flintstone"});

# retrieve first document
find_result = client.biglittle.test.find_one()

# display results
print("\nTest Find Result:")
pprint.pprint(find_result)
