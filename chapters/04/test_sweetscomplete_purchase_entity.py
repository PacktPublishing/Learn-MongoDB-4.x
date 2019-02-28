# sweetscomplete.entity.purchase.Purchase test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

from datetime import date
import random
from sweetscomplete.entity.purchase import Purchase, CustomerInfo, ProdsPurchased
from sweetscomplete.entity.product  import Product, MainProductInfo, InventoryInfo
from sweetscomplete.entity.customer import Customer, PrimaryContactInfo, Address, GeoSpatialInfo

# CustomerInfo
socialMedia = { "FB" : "https://facebook.com/fred.flintstone", "LI" : "https://linkedin.com/fflintstone" }
geo         = GeoSpatialInfo(111.11,222.22)
primary     = PrimaryContactInfo("Fred","Flintstone","+1-222-333-4444","fred@slate.com",socialMedia)
address     = Address("123 Rocky Way","House",None,None,"Bedrock","MI",None,"Prehistoric","00000",geo)
cust_info   = CustomerInfo('ABC123', primary, address)

# PurchaseInfo
prods_purchased = [
    ProdsPurchased('AAA111', 111,  MainProductInfo(1, "Test", "test", "Test", 1.11)),
    ProdsPurchased('BBB222', 222,  MainProductInfo(2, "Test", "test", "Test", 2.22)),
    ProdsPurchased('CCC333', 333,  MainProductInfo(3, "Test", "test", "Test", 3.33))
]

# Calc extended price
ext_price = 0.00
for item in prods_purchased :
    ext_price += item.qtyPurchased * item.productInfo.price


# Purchase
date_of_purch = date.today().isoformat() 
transId       = (date_of_purch + str(random.randint(1000, 9999))).replace('-', '')
purchase       = Purchase(transId, cust_info, date_of_purch, ext_price, prods_purchased)

print(vars(purchase))
print(vars(purchase.customerInfo))
print(vars(purchase.customerInfo.PrimaryContactInfo))
print(vars(purchase.customerInfo.Address))
print(vars(purchase.customerInfo.Address.GeoSpatialInfo))
for item in purchase.productsPurchased :
    print(vars(item))
    print(vars(item.productInfo))
