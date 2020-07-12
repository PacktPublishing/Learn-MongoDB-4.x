# booksomeplace.entity.user.Customer test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/repo/chapters/07/src"))

import json
import unittest
from booksomeplace.entity.base import Name, Contact, Location
from booksomeplace.entity.user import Customer, OtherContact, OtherInfo, LoginInfo

class TestCustomer(unittest.TestCase) :

    customerFromDict = None
    customerDefaults = None

    testDict = {
        'customerKey'  : '00000000',
        'name'         : Name(),
        'address'      : Location(),
        'contact'      : Contact(),
        'otherContact' : OtherContact(),
        'otherInfo'    : OtherInfo(),
        'login'        : LoginInfo(),
        'totalBooked'  : 100,
        'discount'     : 0.05
    }

    testLocation = {
        'streetAddress'    : '123 Main Street',
        'buildingName'     : '',
        'floor'            : '',
        'roomAptCondoFlat' : '',
        'city'             : 'Bedrock',
        'stateProvince'    : 'ZZ',
        'locality'         : 'Unknown',
        'country'          : 'None',
        'postalCode'       : '00000',
        'latitude'         : '+111.111',
        'longitude'        : '-111.111'
    }

    testName = {
        'title'  : 'Mr',
        'first'  : 'Fred',
        'middle' : 'Folsom',
        'last'   : 'Flintstone',
        'suffix' : 'CM'
    }

    testContact = {
        'email'    : 'fred@slate.gravel.com',
        'phone'    : '+0-000-000-0000',
        'socMedia' : {'google' : 'freddy@gmail.com'}
    }

    testOtherContact = {
        'emails'       : ['betty@flintstone.com', 'freddy@flintstone.com'],
        'phoneNumbers' : [{'home' : '000-000-0000'}, {'work' : '111-111-1111'}],
        'socMedias'    : [{'google' : 'freddy@gmail.com'}, {'skype' : 'fflintstone'}]
    }

    testOtherInfo = {
        'gender'      : 'M',
        'dateOfBirth' : '0000-01-01'
    }

    testLoginInfo = {
        'username' : 'fred',
        'oauth2'   : 'freddy@gmail.com',
        'password' : 'abcdefghijklmnopqrstuvwxyz'
    }


    testJson = '''{
        "customerKey"  : "00000000",
        "address"     : {
            "streetAddress"    : "123 Main Street",
            "buildingName"     : "",
            "floor"            : "",
            "roomAptCondoFlat" : "",
            "city"             : "Bedrock",
            "stateProvince"    : "ZZ",
            "locality"         : "Unknown",
            "country"          : "None",
            "postalCode"       : "00000",
            "latitude"         : "+111.111",
            "longitude"        : "-111.111"
        },
        "name" : {
            "title"  : "Mr",
            "first"  : "Fred",
            "middle" : "Folsom",
            "last"   : "Flintstone",
            "suffix" : "CM"
        },
        "contact" : {
            "email"    : "fred@slate.gravel.com",
            "phone"    : "+0-000-000-0000",
            "socMedia" : {"google" : "freddy@gmail.com"}
        },
        "otherContact" : {
            "emails"       : ["betty@flintstone.com", "freddy@flintstone.com"],
            "phoneNumbers" : [{"home" : "000-000-0000"}, {"work" : "111-111-1111"}],
            "socMedias"    : [{"google" : "freddy@gmail.com"}, {"skype" : "fflintstone"}]
        },
        "otherInfo" : {
            "gender"      : "M",
            "dateOfBirth" : "0000-01-01"
        },
        "login" : {
            "username" : "fred",
            "oauth2"   : "freddy@gmail.com",
            "password" : "abcdefghijklmnopqrstuvwxyz"
        },
        "totalBooked"  : 100,
        "discount"     : 0.05
    }'''

    def setUp(self) :
        self.testDict['name']         = Name(self.testName)
        self.testDict['address']      = Location(self.testLocation)
        self.testDict['contact']      = Contact(self.testContact)
        self.testDict['otherContact'] = OtherContact(self.testOtherContact)
        self.testDict['otherInfo']    = OtherInfo(self.testOtherInfo)
        self.testDict['login']        = LoginInfo(self.testLoginInfo)
        self.customerFromDict = Customer(self.testDict)
        self.customerDefaults = Customer()
        self.maxDiff = None

    def test_customer_key(self) :
        expected = '00000000'
        actual   = self.customerFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_customer_from_dict(self) :
        expected = 'Flintstone'
        name     = self.customerFromDict.get('name')
        actual   = name.get('last')
        self.assertEqual(expected, actual)

    def test_customer_from_blank(self) :
        expected = True
        actual   = isinstance(self.customerDefaults.get('address'), Location)
        self.assertEqual(expected, actual)

    def test_customer_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.customerFromDict.toJson())
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
