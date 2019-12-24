# tests rights of "biglittle_admin"

# import needed classes
import sys
import pprint
from pymongo import MongoClient

# set up client
client = MongoClient(
    'localhost',
    username   = 'biglittle_owner',
    password   = 'password',
    authSource = 'biglittle',
    authMechanism = 'SCRAM-SHA-256');

if len(sys.argv) != 4 :
	print("Usage: test_db_admin.py <username> <password> <r|rw>\n")
	sys.exit()

if sys.argv[3] == 'rw' :
	newRole = 'readWrite'
else :
	newRole = 'read'

# for fields and values see https://docs.mongodb.com/manual/reference/command/createUser/#createuser
roleDoc = [ { "role" : newRole, "db" : "biglittle" } ]
mechDoc = [ "SCRAM-SHA-256" ]

# create user
result = client.biglittle.command("createUser", createUser=sys.argv[1], pwd=sys.argv[2], roles=roleDoc, mechanisms=mechDoc)
print ("\nResult:\n")
pprint.pprint(result);
