# tests connection with database using user with "readAnyDatabase" role + TLS

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
client = MongoClient(
    username='read_all',
    password='password',
    authSource='admin',
    authMechanism='SCRAM-SHA-256',
    host='server.biglittle.local', 
    tls=True,
    tlsCAFile='/etc/.certs/test-ca.pem',
    tlsCertificateKeyFile='/home/ked/test-client.pem');

# retrieve first document for "biglittle.users" collection
result_biglittle = client.biglittle.users.find_one({},{"name":1,"address":1})

# display results
print("\nFind Result:")
pprint.pprint(result_biglittle)
