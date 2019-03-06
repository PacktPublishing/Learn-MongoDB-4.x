# sweetscomplete.entity.product.Product

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath('src'))

import pprint
from datetime import date
from sweetscomplete.entity.product import Product

# initialize test data
key = 'TEST' + date.today().isoformat().replace('-', '')
doc = dict({
    'productKey'  : key,
    'productPhoto': 'TEST',
    'skuNumber'   : 'TEST0000',
    'category'    : 'test',
    'title'       : 'Test',
    'description' : 'test',
    'price'       : 1.11,
    'unit'        : 'test',
    'costPerUnit' : 2.22,
    'unitsOnHand' : 333
})

# test blank product entity
product = Product(True)
print("\nBlank Product Entity")
print('Title: '   + product.getTitle())
print('Category: ' + product.get('category'))
print(product.toJson())

# test product entity initialized from a dictionary
product = Product(doc)
print("\Product Entity Initialized from Dictionary")
print('Title: '   + product.getTitle())
print('Category: ' + product.get('category'))
print(product.toJson())
