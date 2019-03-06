# sweetscomplete.entity.purchase.Purchase test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

import json
import unittest
from sweetscomplete.entity.purchase import Purchase

class TestPurchase(unittest.TestCase) :

    purchaseFromDict = None
    purchaseDefaults = None
    purchaseFromJson = None
    
    testDict = dict({
        # purchase info
        'transactionId'           : '00000000',
        'dateOfPurchase'          : '2020-01-01',
        'extendedPrice'           : 1724.94,
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
        'productsPurchased'       : [
            {'productKey':'AAA111','qtyPurchased':111,'skuNumber':'11111','category':'AAA','title':'TEST AAA','price':1.11},
            {'productKey':'BBB222','qtyPurchased':222,'skuNumber':'22222','category':'BBB','title':'TEST BBB','price':2.22},
            {'productKey':'CCC333','qtyPurchased':333,'skuNumber':'33333','category':'CCC','title':'TEST CCC','price':3.33}
        ]
    })

    testJson = '''{
        "transactionId"           : "00000000",
        "dateOfPurchase"          : "2020-01-01",
        "extendedPrice"           : 1724.94,
        "customerKey"             : "00000000",
        "firstName"               : "Fred",
        "lastName"                : "Flintstone",
        "phoneNumber"             : "+1-222-333-4444",
        "email"                   : "fred@slate.com",
        "streetAddressOfBuilding" : "123 Rocky Way",
        "city"                    : "Bedrock",
        "stateProvince"           : "ZZ",
        "country"                 : "ZZ",
        "postalCode"              : "00000",
        "latitude"                : 11.1111,
        "longitude"               : -11.1111,
        "productsPurchased"       : [
            {"productKey":"AAA111","qtyPurchased":111,"skuNumber":"11111","category":"AAA","title":"TEST AAA","price":1.11},
            {"productKey":"BBB222","qtyPurchased":222,"skuNumber":"22222","category":"BBB","title":"TEST BBB","price":2.22},
            {"productKey":"CCC333","qtyPurchased":333,"skuNumber":"33333","category":"CCC","title":"TEST CCC","price":3.33}
        ]
    }'''

    def setUp(self) :
        self.purchaseFromDict = Purchase(self.testDict)
        self.purchaseDefaults = Purchase(True)
        self.purchaseFromJson = Purchase(self.testJson)
        
    def test_purchase_from_dict(self) :
        expected = '00000000'
        actual   = self.purchaseFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_purchase_from_dict_get_and_set(self) :
        self.purchaseFromDict.set('skuNumber', '99999999')
        expected = '99999999'
        actual   = self.purchaseFromDict.get('skuNumber')
        self.assertEqual(expected, actual)

    def test_purchase_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.purchaseFromDict.toJson())
        self.assertEqual(expected, actual)

    def test_purchase_from_json(self) :
        expected = '00000000'
        actual   = self.purchaseFromJson.getKey()
        self.assertEqual(expected, actual)

    def test_purchase_from_blank(self) :
        expected = ''
        actual   = self.purchaseDefaults.getKey()
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
