# sweetscomplete.entity.product.Product test

# include config file
import config.config
config.config.set_include_path("../src", True)

import sweetscomplete.entity.product

# Testing Product
main    = sweetscomplete.entity.product.MainProductInfo(1, "Test", "test", "Test", 1.11)
invent  = sweetscomplete.entity.product.InventoryInfo("items", 1.11, 99)
product = sweetscomplete.entity.product.Product("test_test","base64encodedTest",main,invent)

print(vars(product))
print(vars(product.main_product_info))
print(vars(product.inventory_info))
