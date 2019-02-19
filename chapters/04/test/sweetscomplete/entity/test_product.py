# sweetscomplete.entity.product.Product test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

import unittest
import sweetscomplete.entity.product as prod

class TestProduct(unittest.TestCase) :

    main_info    = None
    invent_info  = None
    product      = None
        
    def setUp(self) :
        self.main_info    = prod.MainProductInfo(1, "Test", "test", "Test", 1.11)
        self.invent_info  = prod.InventoryInfo("items", 1.11, 99)
        self.product      = prod.Product("test_test","base64encodedTest",self.main_info,self.invent_info)

    def test_main(self) :
        # assertEqual(expected, actual)
        expected = 1.11
        actual   = self.main_info.price
        self.assertEqual(expected, actual)

    def test_invent(self) :
        # assertEqual(expected, actual)
        expected = 99
        actual   = self.invent_info.unitsOnHand
        self.assertEqual(expected, actual)

    def test_product(self) :
        # assertEqual(expected, actual)
        data = [
            [ 'test_test', self.product.productKey ],
            [ 1.11,        self.product.MainProductInfo.price ],
            [ 99,          self.product.InventoryInfo.unitsOnHand ],
        ]; 
        for line in data :
            expected, actual = line
            self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()
