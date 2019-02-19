# sweetscomplete.entity.purchase.Purchase test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

from datetime import date
import random
import sweetscomplete.entity.purchase as purch
import sweetscomplete.entity.product  as prod
import sweetscomplete.entity.customer as cust

# CustomerInfo
socialMedia   = { "FB" : "https://facebook.com/fred.flintstone", "LI" : "https://linkedin.com/fflintstone" }
geo           = cust.GeoSpatialInfo(111.11,222.22)
primary       = cust.PrimaryContactInfo("Fred","Flintstone","+1-222-333-4444","fred@slate.com",socialMedia)
address       = cust.Address("123 Rocky Way","House",None,None,"Bedrock","MI",None,"Prehistoric","00000",geo)
customer_info = purch.CustomerInfo(primary, address)

# ProductInfo
cost         = 1.11
product_info = prod.MainProductInfo(1, "Test", "test", "Test", cost)

# PurchaseInfo
qty            = 111
dateOfPurchase = date.today().isoformat() 
purch_info     = purch.PurchaseInfo(dateOfPurchase, qty, qty * cost)

# Purchase
transId        = (dateOfPurchase + str(random.randint(1000, 9999))).replace('-', '')
purchase       = purch.Purchase(transId,customer_info,product_info,purch_info)

print(vars(purchase))
print(vars(purchase.CustomerInfo))
print(vars(purchase.CustomerInfo.PrimaryContactInfo))
print(vars(purchase.CustomerInfo.Address))
print(vars(purchase.CustomerInfo.Address.GeoSpatialInfo))
print(vars(purchase.MainProductInfo))
print(vars(purchase.PurchaseInfo))
