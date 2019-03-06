# sweetscomplete.entity.purchase.Purchase test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import sweetscomplete.entity.purchase as purch

jsonDoc = '{ "transactionId":"201812190000","CustomerInfo":{ "PrimaryContactInfo":{ "firstName":"Vanetta","lastName":"Roberson","phoneNumber":"+94-217-806-4314","email":"vroberso@OpenWorld.com","socialMedia":[] },"Address":{ "streetAddressOfBuilding":"4426 Short Canyon Boulevard","buildingName":"Building F2","floor":5,"roomApartmentCondoNumber":null,"city":"Morontuduwa","stateProvince":"Kalutara","locality":"Kalutara","country":"LK","postalCode":"12564","GeoSpatialInfo":{ "latitude":"6.6594","longitude":"79.9726" } } },"MainProductInfo":{ "skuNumber":"CHER516","category":"pie","title":"Cherry Pie","description":"Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices,porta eros a,blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.","price":"4.99" },"PurchaseInfo":{ "dateOfPurchase":"2019-01-31 20:17:24","quantityPurchased":446,"extendedPrice":0 }}'
purchase = purch.Purchase(jsonDoc)

print("\nObject\n")
print(vars(purchase))
print(vars(purchase.CustomerInfo))
print(vars(purchase.CustomerInfo.PrimaryContactInfo))
print(vars(purchase.CustomerInfo.Address))
print(vars(purchase.CustomerInfo.Address.GeoSpatialInfo))
print(vars(purchase.MainProductInfo))
print(vars(purchase.PurchaseInfo))

print("\nJSON\n")
print(purchase.toJson())
