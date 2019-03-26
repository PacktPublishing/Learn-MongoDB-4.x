# sweetscomplete.entity.customer.Customer read/add/edit/delete

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection

from datetime import date
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.customer import CustomerService

# setting up the connection + collection
conn = db.mongodb.connection.Connection('localhost', 27017, Customer)
service = CustomerService(conn, 'sweetscomplete')

# initialize test data
key        = '00000000000'
doc        = '''\
{
    "customerKey"              : "%key%",
    "firstName"                : "Fred",
    "lastName"                 : "Flintstone",
    "phoneNumber"              : "+0-000-000-0000",
    "email"                    : "fred@first.man.com",
    "socialMedia": {
        "GO": {
            "label": "google",
            "url": "https:\/\/google.com\/fflintstone"
        },
        "LN": {
            "label": "line",
            "url": "https:\/\/line.com\/fred"
        }
    },
    "userName"                 : "fflintstone",
    "password"                 : "password",
    "streetAddressOfBuilding"  : "123 Rocky Way",
    "buildingName"             : "",
    "floor"                    : "1",
    "roomApartmentCondoNumber" : "",
    "city"                     : "Bedrock",
    "stateProvince"            : "MI",
    "locality"                 : "North America",
    "country"                  : "ZZ",
    "postalCode"               : "00000",
    "latitude"                 : 111.1111,
    "longitude"                : 222.2222,
    "secondaryPhoneNumbers"    : ["111-222-3333","444-555-6666"],
    "secondaryEmailAddresses"  : [],
    "dateOfBirth"              : "0000-00-00",
    "gender"                   : "Male"
}'''.replace('%key%',key)

# adding a new customer
print("\nAdding a Single Test Customer")
customer = Customer(doc)
if service.addOne(customer) :
    print("\nCustomer " + key + " added successfully")

# running a query for a single item
print("\nFetch Customer by Key")
doc = service.fetchByKey(key)
if doc :
    print(doc.toJson())

# deleting the test customer
query = dict({"customerKey" : key})
if service.deleteOne(query) :
    print("\nCustomer " + key + " deleted successfully")

# running a query all customers
print("\nList of Customer Names and Keys")
for doc in service.fetchKeysAndNames() :
    print(doc.getFullName() + '  [' + doc.getKey() + ']')
