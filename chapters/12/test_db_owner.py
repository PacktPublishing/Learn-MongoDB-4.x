# tests rights of "biglittle_owner"

# import needed classes
import pprint
import pymongo
from pymongo import MongoClient

# set up client
client = MongoClient(
    'localhost',
    username='biglittle_owner',
    password='password',
    authSource='biglittle',
    authMechanism='SCRAM-SHA-256');

# create an indexes on "borrowerKey" and "lenderKey"
client.biglittle.loans.create_index([('borrowerKey', pymongo.ASCENDING),('lenderKey', pymongo.ASCENDING)])

# get a count of loans
count_result = client.biglittle.loans.count_documents({});

# gather statistics on loans collection
stats = client.biglittle.command('collstats', 'loans')

# display results
print("\nNumber of Documents: " + str(count_result))
pprint.pprint(stats)
