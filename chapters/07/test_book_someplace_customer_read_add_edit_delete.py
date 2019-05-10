# sweetscomplete.entity.customer.Customer read/add/edit/delete

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection

test = Customer()

from datetime import date
from sweetscomplete.entity.customer import Customer
from sweetscomplete.domain.customer import CustomerService

# setting up the connection + collection
conn = db.mongodb.connection.Connection()
service = CustomerService(conn, 'sweetscomplete')

# initialize test data
key        = '00000000000'
doc        = '''\
{
    "customerKey"                  : "%key%",
    "PrimaryContactInfo": {
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
        }
    },
    "LoginInfo": {
        "userName"                 : "fflintstone",
        "password"                 : "password"
    },
    "Address": {
        "streetAddressOfBuilding"  : "123 Rocky Way",
        "buildingName"             : "",
        "floor"                    : "1",
        "roomApartmentCondoNumber" : "",
        "city"                     : "Bedrock",
        "stateProvince"            : "MI",
        "locality"                 : "North America",
        "country"                  : "ZZ",
        "postalCode"               : "00000",
        "GeoSpatialInfo": {
            "latitude"             : 111.1111,
            "longitude"            : 222.2222
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers"    : ["111-222-3333","444-555-6666"],
        "secondaryEmailAddresses"  : []
    },
    "OtherInfo": {
        "dateOfBirth"              : "0000-00-00",
        "gender"                   : "Male"
    }
}'''.replace('%key%',key)

# adding a new customer
print("\nAdding a Single Test Customer\n")
customer = Customer(doc)
if service.addOne(customer) :
    print("\nCustomer " + key + " added successfully\n")

# running a query for a single item
print("\nFetch Customer by Key\n")
doc = service.fetchByKey(key)
if doc :
    print(doc.toJson())

# TODO: updating a single customer
#customer = Customer()
#if service.editOne(customer) :
#    print("\nCustomer " + key + " updated successfully\n")

# TODO: updating a many customers
#if service.editAll(docs) :
#    print("\nCustomer " + key + " updated successfully\n")

# running a query for a single item
print("\nUpdated Test Customer\n")
query = dict({ "PrimaryContactInfo.skuNumber" : "TEST9999" })
doc = service.fetchOne(query)
if doc :
    print("\nSingle Customer\n")
    print(doc.toJson())

# running a query
print("\nList of Test Customers\n")
query = dict({ "PrimaryContactInfo.lastName" : "Flintstone" })
for doc in service.fetch(query) :
    print(doc.PrimaryContactInfo.firstName + ' ' + doc.PrimaryContactInfo.lastName)

# deleting the test customer
query = dict({"customerKey" : key})
if service.deleteOne(query) :
    print("\nCustomer " + key + " deleted successfully\n")

# running a query all customers
print("\nList of Customer Names and Keys\n")
for doc in service.fetchAllKeysAndNames() :
    print(doc.PrimaryContactInfo.firstName + ' ' + doc.PrimaryContactInfo.lastName + '  [' + doc.customerKey + ']')

# deleting all instances of the test customer
if service.deleteAll(query) :
    print("\nAll Customers " + key + " deleted successfully\n")

