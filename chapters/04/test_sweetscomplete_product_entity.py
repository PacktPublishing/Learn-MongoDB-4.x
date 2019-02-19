# sweetscomplete.entity.product.Product test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import sweetscomplete.entity.product

# Testing Product
main    = sweetscomplete.entity.product.MainProductInfo(1, "Test", "test", "Test", 1.11)
invent  = sweetscomplete.entity.product.InventoryInfo("items", 1.11, 99)
product = sweetscomplete.entity.product.Product("test_test","base64encodedTest",main,invent)

print(vars(product))
print(vars(product.MainProductInfo))
print(vars(product.InventoryInfo))
