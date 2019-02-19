# sweetscomplete.entity.custmoer.Customer test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

import unittest
import sweetscomplete.entity.customer as cust

class TestCustomer(unittest.TestCase) :

    socialMedia = None
    primary     = None
    login       = None
    geo         = None
    address     = None
    secondary   = None
    other       = None
    customer    = None
        
    def setUp(self) :
        self.socialMedia = { "FB" : "https://facebook.com/fred.flintstone", "LI" : "https://linkedin.com/fflintstone" }
        self.primary     = cust.PrimaryContactInfo("Fred","Flintstone","+1-222-333-4444","fred@slate.com",self.socialMedia)
        self.login       = cust.LoginInfo("fflintstone","BCRYPT hashed password")
        self.geo         = cust.GeoSpatialInfo(111.11,222.22)
        self.address     = cust.Address("123 Rocky Way","House",None,None,"Bedrock","MI",None,"Prehistoric","00000",self.geo)
        self.secondary   = cust.SecondaryContactInfo(["+1-333-444-5555"],["freddy@flintstone.com","ace@bowling.com"])
        self.other       = cust.OtherInfo("0000-00-00", "M")
        self.customer    = cust.Customer("12223334444",self.primary,self.login,self.address,self.secondary,self.other)

    def test_primary(self) :
        # assertEqual(expected, actual)
        expected = "Fred"
        actual   = self.primary.firstName
        self.assertEqual(expected, actual)
        expected = True
        actual   = isinstance(self.primary.socialMedia, (tuple,list,dict))
        self.assertEqual(expected, actual)
        expected = "https://facebook.com/fred.flintstone"
        actual   = self.primary.socialMedia["FB"]
        self.assertEqual(expected, actual)


    def test_login(self) :
        # assertEqual(expected, actual)
        expected = "fflintstone"
        actual   = self.login.userName
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

    def test_secondary(self) :
        # assertEqual(expected, actual)
        expected = True
        actual   = isinstance(self.secondary.secondaryEmailAddresses, (tuple,list))
        self.assertEqual(expected, actual)
        expected = 2
        actual   = len(self.secondary.secondaryEmailAddresses)
        self.assertEqual(expected, actual)

    def test_other(self) :
        # assertEqual(expected, actual)
        expected = "M"
        actual   = self.other.gender
        self.assertEqual(expected, actual)

    def test_customer(self) :
        # assertEqual(expected, actual)
        data = [
            [ '12223334444', self.customer.customerKey ],
            [ "Fred", self.customer.PrimaryContactInfo.firstName],
            [ "fflintstone", self.customer.LoginInfo.userName],
            [ 111.11, self.customer.Address.GeoSpatialInfo.latitude],
            [ "123 Rocky Way", self.customer.Address.streetAddressOfBuilding],
            [ 2, len(self.customer.SecondaryContactInfo.secondaryEmailAddresses)],
            [ "M", self.customer.OtherInfo.gender],
            [ "https://facebook.com/fred.flintstone", self.primary.socialMedia["FB"]]
        ]; 
        for line in data :
            expected, actual = line
            self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()
