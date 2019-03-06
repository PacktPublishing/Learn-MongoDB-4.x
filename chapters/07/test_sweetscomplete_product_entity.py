# sweetscomplete.entity.product.Product test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import sweetscomplete.entity.product

# Testing Product
doc = '{"productKey":"apple_pie","productPhoto":"base64 encoded JPG","MainProductInfo":{"skuNumber":"APPL501","category":"pie","title":"Apple Pie","description":"very long and detailed description","price":"4.99"},"InventoryInfo":{"unit":"tin","costPerUnit":"4.99","unitsOnHand":161}}'
product = sweetscomplete.entity.product.Product(doc)

print("\nObject\n")
print(vars(product))
print(vars(product.MainProductInfo))
print(vars(product.InventoryInfo))

print("\nJSON from product\n")
print(product.toJson())
