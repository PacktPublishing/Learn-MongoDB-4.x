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
conn = db.mongodb.connection.Connection('localhost',27017,Purchase)
service = PurchaseService(conn, 'sweetscomplete')

# initialize test data
dontShow       = ['productsPurchased']
key            = '00000000000'
dateOfPurchase = date.today().isoformat() 
doc            = '''\
{
	"transactionId"           : "%key%",
	"dateOfPurchase"          : "%date%",
    "customerKey"             : "FREDFLIN0000",
    "firstName"               : "Fred",
    "lastName"                : "Flintstone",
    "phoneNumber"             : "+000-000-000-0000",
    "email"                   : "fflintstone@slate.granite.com",
    "streetAddressOfBuilding" : "4014 Green Woods Street",
    "buildingName"            : null,
    "floor"                   : null,
    "roomApartmentCondoNumber": null,
    "city"                    : "Bedrock",
    "stateProvince"           : "ZZ",
    "locality"                : "Unknown",
    "country"                 : "ZZ",
    "postalCode"              : "00000 AAAA",
    "latitude"                : "16.2359",
    "longitude"               : "-61.558",
	"productsPurchased" : [
		{
			"productKey" : "torta_cake",
			"qtyPurchased" : 590,
            "skuNumber" : "TORT167",
            "category" : "cake",
            "title" : "Torta Cake",
            "description" : "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price" : 12.99
		},
		{
			"productKey" : "chocolate_chip_cookie",
			"qtyPurchased" : 387,
            "skuNumber" : "CHOC322",
            "category" : "cookie",
            "title" : "Chocolate Chip Cookie",
            "description" : "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price" : 0.88
		},
		{
			"productKey" : "muffin",
			"qtyPurchased" : 995,
            "skuNumber" : "MUFF149",
            "category" : "cake",
            "title" : "Muffin",
            "description" : "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price" : 1.99
		},
		{
			"productKey" : "torta_cake",
			"qtyPurchased" : 190,
            "skuNumber" : "TORT167",
            "category" : "cake",
            "title" : "Torta Cake",
            "description" : "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price" : 12.99
		},
		{
			"productKey" : "valentines_day_chocolate_pack",
			"qtyPurchased" : 434,
            "skuNumber" : "VALE270",
            "category" : "chocolate",
            "title" : "Valentines Day Chocolate Pack",
            "description" : "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price" : 19.99
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
    print(doc.toJson(dontShow))
else :
    print("Unable to find purchase " + key)
    
# deleting the test purchase
if service.deleteByKey(key) :
    print("\nPurchase " + key + " deleted successfully")

# running a query on purchases
print("\nList of Purchase Keys, Dates and Customer Names")
for doc in service.fetchPurchInfo() :
    print(doc.getKey() + ' ' + doc['dateOfPurchase'] + ' ' + doc.getCustomerName())
