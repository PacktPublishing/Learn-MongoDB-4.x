# sweetscomplete.entity.customer.Customer read/add/edit/delete

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath('src'))

import random
import pprint
from db.mongodb.connection import Connection
from datetime import date
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.customer import CustomerService
from sweetscomplete.authenticate.auth import SimpleAuth

# seed for random password generation
abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+=-{}|[];:<>?,.'
length = len(abc) - 1

# open CSV file
f = open('sweetscomplete_customers_passwords.csv', 'w')

# setting up the connection + collection + auth
conn    = Connection('localhost', 27017, Customer)
service = CustomerService(conn, 'sweetscomplete')
auth    = SimpleAuth(service, os.path.realpath('.'))

# running a query all customers
print("\nResetting all passwords")
for doc in service.fetchAll() :

    print('Processing: ' + doc.getFullName() + '  [' + doc.getKey() + ']')
    newPass = ''

    # generate random password
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]
    newPass += str(random.randint(0, 99))
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]
    newPass += str(random.randint(0, 99))
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]
    pos = random.randint(0, length)
    newPass += abc[pos:pos+1]    

    # generate hash
    hashPass = auth.genHash(newPass)
    
    # update database
    cust = service.editOneByKey(doc.getKey(), {'password':hashPass})

    # write customer name, email, plain text and hashed passwords to CSV file
    f.write('"' + cust.getFullName() + '","' + cust.get('email') + '","' + newPass + "\"\n")

f.close()
