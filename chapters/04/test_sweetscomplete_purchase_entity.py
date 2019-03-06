# sweetscomplete.entity.purchase.Purchase test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

from datetime import date
import random
from sweetscomplete.entity.purchase import Purchase

# purchase info
transId    = 'TEST00000000'
purch_date = date.today().isoformat() 

# products purchased
prods_purchased = [
    {'productKey':'AAA111','qtyPurchased':111,'skuNumber':'11111','category':'AAA','title':'TEST AAA','price':1.11},
    {'productKey':'BBB222','qtyPurchased':222,'skuNumber':'22222','category':'BBB','title':'TEST BBB','price':2.22},
    {'productKey':'CCC333','qtyPurchased':333,'skuNumber':'33333','category':'CCC','title':'TEST CCC','price':3.33}
]

# Calc extended price
ext_price = 0.00
for item in prods_purchased :
    ext_price += item['qtyPurchased'] * item['price']


# purchase document
doc = dict({
    # purchase info
    'transactionId'           : transId,
    'dateOfPurchase'          : purch_date,
    'extendedPrice'           : ext_price,
    # customer info
    'customerKey'             : '00000000',
    'firstName'               : 'Fred',
    'lastName'                : 'Flintstone',
    'phoneNumber'             : '+1-222-333-4444',
    'email'                   : 'fred@slate.com',
    'streetAddressOfBuilding' : '123 Rocky Way',
    'city'                    : 'Bedrock',
    'stateProvince'           : 'ZZ',
    'country'                 : 'ZZ',
    'postalCode'              : '00000',
    'latitude'                : 11.1111,
    'longitude'               : -11.1111,
    # products purchased
    'productsPurchased'       : prods_purchased
})

# test blank product entity
purchase = Purchase(True)
print("\nBlank Purchase Entity")
print('Transaction ID: ' + purchase.getKey())
print('Date: ' + purchase.get('dateOfPurchase'))
print(purchase.toJson())

# test purchase entity initialized from dictionary
purchase = Purchase(doc)
print("\Purchase Entity Initialized from Dictionary")
print('Transaction ID: ' + purchase.getKey())
print('Date: ' + purchase.get('dateOfPurchase'))
print(purchase.toJson())
