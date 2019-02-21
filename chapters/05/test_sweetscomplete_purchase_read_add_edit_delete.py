# sweetscomplete.entity.purchase.Purchase read/add/edit/delete

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import pprint
import db.mongodb.connection

from datetime import date
from sweetscomplete.entity.purchase import Purchase
from sweetscomplete.domain.purchase import PurchaseService

# setting up the connection + collection
test = Purchase()
conn = db.mongodb.connection.Connection()
service = PurchaseService(conn, 'sweetscomplete')

# initialize test data
key            = '00000000000'
dateOfPurchase = date.today().isoformat() 
doc            = '''\
{
    "transactionId"                    : "%key%",
    "CustomerInfo" : {
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
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase"    : "%date%",
        "quantityPurchased" : 333,
        "extendedPrice"     : 1.11
    }
}'''.replace('%key%',key).replace('%date%', dateOfPurchase)

# adding a new purchase
print("\nAdding a Single Test Purchase\n")
purchase = Purchase(doc)
if service.addOne(purchase) :
    print("\nPurchase " + key + " added successfully\n")

# running a query for a single item
print("\nFetch Purchase by Key\n")
doc = service.fetchByKey(key)
if doc :
    print(doc.toJson())

# TODO: updating a single purchase
#purchase = Purchase()
#if service.editOne(purchase) :
#    print("\nPurchase " + key + " updated successfully\n")

# TODO: updating a many purchases
#if service.editAll(docs) :
#    print("\nPurchase " + key + " updated successfully\n")

# running a query for a single item
print("\nUpdated Test Purchase\n")
query = dict({ "PrimaryContactInfo.skuNumber" : "TEST9999" })
doc = service.fetchOne(query)
if doc :
    print("\nSingle Purchase\n")
    print(doc.toJson())

# running a query
print("\nList of Test Purchases\n")
query = dict({ "PrimaryContactInfo.lastName" : "Flintstone" })
for doc in service.fetch(query) :
    print(doc.PrimaryContactInfo.firstName + ' ' + doc.PrimaryContactInfo.lastName)

# deleting the test purchase
query = dict({"purchaseKey" : key})
if service.deleteOne(query) :
    print("\nPurchase " + key + " deleted successfully\n")

# running a query all purchases
print("\nList of Purchase Names and Keys\n")
for doc in service.fetchAllKeysAndNames() :
    print(doc.PrimaryContactInfo.firstName + ' ' + doc.PrimaryContactInfo.lastName + '  [' + doc.purchaseKey + ']')

# deleting all instances of the test purchase
if service.deleteAll(query) :
    print("\nAll Purchases " + key + " deleted successfully\n")

