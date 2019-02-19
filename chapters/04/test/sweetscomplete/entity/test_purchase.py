# sweetscomplete.entity.purchase.Purchase test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

import unittest
from datetime import date
import random
import sweetscomplete.entity.purchase as purch
import sweetscomplete.entity.product  as prod
import sweetscomplete.entity.customer as cust

class TestPurchase(unittest.TestCase) :

    # CustomerInfo
    socialMedia   = None
    primary       = None
    geo           = None
    customer_info = None

    # MainProductInfo
    cost           = 1.11
    main_prod_info = None

    # PurchaseInfo
    qty            = 111
    dateOfPurchase = date.today().isoformat() 
    purch_info     = None

    # Purchase
    transId        = (dateOfPurchase + str(random.randint(1000, 9999))).replace('-', '')
    purchase       = None

    def setUp(self) :
        # CustomerInfo
        self.socialMedia    = { "FB" : "https://facebook.com/fred.flintstone", "LI" : "https://linkedin.com/fflintstone" }
        self.primary        = cust.PrimaryContactInfo("Fred","Flintstone","+1-222-333-4444","fred@slate.com",self.socialMedia)
        self.geo            = cust.GeoSpatialInfo(111.11,222.22)
        self.address        = cust.Address("123 Rocky Way","House",None,None,"Bedrock","MI",None,"Prehistoric","00000",self.geo)
        self.customer_info  = purch.CustomerInfo(self.primary, self.address)

        # MainProductInfo
        self.main_prod_info = prod.MainProductInfo(1, "Test", "test", "Test", self.cost)

        # PurchaseInfo
        self.purch_info     = purch.PurchaseInfo(self.dateOfPurchase, self.qty, self.qty * self.cost)

        # Purchase
        self.transId        = (self.dateOfPurchase + str(random.randint(1000, 9999))).replace('-', '')
        self.purchase       = purch.Purchase(self.transId,self.customer_info,self.main_prod_info,self.purch_info)

    def test_primary(self) :
        # assertEqual(expected, actual)
        expected = "Fred"
        actual   = self.primary.firstName
        self.assertEqual(expected, actual)

    def test_geo(self) :
        # assertEqual(expected, actual)
        expected = 111.11
        actual   = self.geo.latitude
        self.assertEqual(expected, actual)

    def test_address(self) :
        # assertEqual(expected, actual)
        expected = "123 Rocky Way"
        actual   = self.address.streetAddressOfBuilding
        self.assertEqual(expected, actual)

    def test_customer_info(self) :
        # assertEqual(expected, actual)
        data = [
            [ "Fred", self.customer_info.PrimaryContactInfo.firstName],
            [ 111.11, self.customer_info.Address.GeoSpatialInfo.latitude],
            [ "123 Rocky Way", self.customer_info.Address.streetAddressOfBuilding],
        ]; 
        for line in data :
            expected, actual = line
            self.assertEqual(expected, actual)

    def test_main_product_info(self) :
        # assertEqual(expected, actual)
        expected = 1
        actual   = self.main_prod_info.skuNumber
        self.assertEqual(expected, actual)

    def test_purchase(self) :
        # assertEqual(expected, actual)
        data = [
            [ self.transId, self.purchase.transactionId],
            [ self.dateOfPurchase, self.purchase.PurchaseInfo.dateOfPurchase],
            [ "Fred", self.purchase.CustomerInfo.PrimaryContactInfo.firstName],
            [ 111.11, self.purchase.CustomerInfo.Address.GeoSpatialInfo.latitude],
            [ "123 Rocky Way", self.purchase.CustomerInfo.Address.streetAddressOfBuilding],
            [ 1, self.purchase.MainProductInfo.skuNumber],
        ]; 
        for line in data :
            expected, actual = line
            self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()
