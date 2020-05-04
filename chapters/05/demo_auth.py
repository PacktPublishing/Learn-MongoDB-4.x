# rekey passwords

# imports
import pprint
import bcrypt
import json
import base64
from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.database import Database

# init vars
db = 'sweetscomplete'
coll = 'customers'

# set up database connection
client = MongoClient()
database = Database(client, db)
collection = Collection(database, coll)

# get first customer
cust = collection.find_one({'email': 'pyoder100@CCI.com'})
pprint.pprint(cust)

pwd_db = cust['password']
pwd_form = 'password'
result = bcrypt.checkpw(pwd_form.encode('utf-8'), pwd_db.encode('utf-8'))
if result :
    print('OK')
else :
    print('NOT')
