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
conn = db.mongodb.connection.Connection()
service = PurchaseService(conn, 'sweetscomplete')

# initialize test data
key            = '00000000000'
dateOfPurchase = date.today().isoformat() 
doc            = '''\
{
	"transactionId" : "%key%",
	"dateOfPurchase" : "%date%",
	"CustomerInfo" : {
		"PrimaryContactInfo" : {
			"firstName" : "Fred",
			"lastName" : "Flintstone",
			"phoneNumber" : "+000-000-000-0000",
			"email" : "fflintstone@slate.granite.com",
			"socialMedia" : {
				"GO" : {
					"label" : "google",
					"url" : "https://google.com/fred"
				},
				"LI" : {
					"label" : "linkedin",
					"url" : "https://linkedin.com/fflintstone"
				}
			}
		},
		"Address" : {
			"streetAddressOfBuilding" : "4014 Green Woods Street",
			"buildingName" : null,
			"floor" : null,
			"roomApartmentCondoNumber" : null,
			"city" : "Bedrock",
			"stateProvince" : "ZZ",
			"locality" : "Unknown",
			"country" : "ZZ",
			"postalCode" : "00000 AAAA",
			"GeoSpatialInfo" : {
				"latitude" : "16.2359",
				"longitude" : "-61.558"
			}
		}
	},
	"productsPurchased" : [
		{
			"productKey" : "torta_cake",
			"qtyPurchased" : 590,
			"MainProductInfo" : {
				"skuNumber" : "TORT167",
				"category" : "cake",
				"title" : "Torta Cake",
				"description" : "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
				"price" : 12.99
			}
		},
		{
			"productKey" : "chocolate_chip_cookie",
			"qtyPurchased" : 387,
			"MainProductInfo" : {
				"skuNumber" : "CHOC322",
				"category" : "cookie",
				"title" : "Chocolate Chip Cookie",
				"description" : "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
				"price" : 0.88
			}
		},
		{
			"productKey" : "muffin",
			"qtyPurchased" : 995,
			"MainProductInfo" : {
				"skuNumber" : "MUFF149",
				"category" : "cake",
				"title" : "Muffin",
				"description" : "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
				"price" : 1.99
			}
		},
		{
			"productKey" : "torta_cake",
			"qtyPurchased" : 190,
			"MainProductInfo" : {
				"skuNumber" : "TORT167",
				"category" : "cake",
				"title" : "Torta Cake",
				"description" : "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
				"price" : 12.99
			}
		},
		{
			"productKey" : "valentines_day_chocolate_pack",
			"qtyPurchased" : 434,
			"MainProductInfo" : {
				"skuNumber" : "VALE270",
				"category" : "chocolate",
				"title" : "Valentines Day Chocolate Pack",
				"description" : "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
				"price" : 19.99
			}
		}
	]
}'''.replace('%key%',key).replace('%date%', dateOfPurchase)

# adding a new purchase
print("Adding a Single Test Purchase")
if service.addOne(Purchase(doc)) :
    print("Purchase " + key + " added successfully")

# running a query for a single item
print("\nFetch Purchase by Key")
doc = service.fetchByKey(key)
if doc :
    print(doc.toJson())
else :
    print("Unable to find purchase " + key + "\n")
    
"""
# updating a single purchase
updateDoc = {
    'purchasePhoto' :'REVISED PHOTO',
    'MainPurchaseInfo.price' : 2.22
};

result = service.editOneByPurchaseKey(key, updateDoc)
if not result :
    print("\nUnable to find this purchase key: " + key + "\n")
else :
    print("\nPurchase " + key + " updated successfully\n")
    print(result.toJson())

# bad key should not perform updates
badkey = 'badkey'
result = service.editOneByPurchaseKey(badkey, updateDoc)
if not result :
    print("\nUnable to find this purchase key: " + badkey + "\n")
else :
    print("\nPurchase " + badkey + " updated successfully\n")
    print(result.toJson())

# increasing the cost per unit of Test purchases
query = dict({"purchaseKey" : key})
result = service.editPrice(query, 1.10)
if  result > 0:
    print("\n" + str(result) + " purchases updated successfully\n")

# running a fetch based on transaction ID
print("\nFetch by Transaction ID\n")
doc = service.fetchBySku("TEST0000")
if doc :
    print(doc.toJson())

# deleting the test purchase
query = dict({"purchaseKey" : key})
if service.deleteOne(query) :
    print("\nPurchase " + key + " deleted successfully\n")

# running a query all purchases
print("\nList of Purchase Titles and Keys\n")
for doc in service.fetchAllKeysAndTitles() :
    print(doc.MainPurchaseInfo.title + '  [' + doc.purchaseKey + ']')

# deleting all instances of the test purchase
if service.deleteAll(query) :
    print("\nAll Purchases " + key + " deleted successfully\n")

"""
