# booksomeplace.entity.user.Partner test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/repo/chapters/07/src"))

import json
import unittest
from booksomeplace.entity.base import Name, Contact, Location
from booksomeplace.entity.user import Partner, OtherContact, OtherInfo, LoginInfo

class TestPartner(unittest.TestCase) :

    partnerFromDict = None
    partnerDefaults = None

    testDict = {
        'partnerKey'  : '00000000',
        'businessName' : 'Granite Town Quarrel and Gravel Company',
        'revenueSplit' : 0.90,
        'acctBalance'  : 9999.99,
        'name'         : Name(),
        'address'      : Location(),
        'contact'      : Contact(),
        'otherContact' : OtherContact(),
        'otherInfo'    : OtherInfo(),
        'login'        : LoginInfo()
    }

    testLocation = {
        'streetAddress'    : '140 Boulder Avenue',
        'buildingName'     : 'The Granite Building',
        'floor'            : '22',
        'roomAptCondoFlat' : '',
        'city'             : 'Granite Town',
        'stateProvince'    : 'ZZ',
        'locality'         : 'Unknown',
        'country'          : 'None',
        'postalCode'       : '00000',
        'latitude'         : '+111.111',
        'longitude'        : '-111.111'
    }

    testName = {
        'title'  : 'Mr',
        'first'  : 'Rockhead',
        'middle' : 'Sylvester',
        'last'   : 'Slate',
        'suffix' : 'Boss'
    }

    testContact = {
        'email'    : 'rockhead@slate.gravel.com',
        'phone'    : '+0-000-000-0000',
        'socMedia' : {'google' : 'rockhead@gmail.com'}
    }

    testOtherContact = {
        'emails'       : ['flo@slate.com', 'rockhead@slate.com'],
        'phoneNumbers' : [{'home' : '000-000-0000'}, {'work' : '111-111-1111'}],
        'socMedias'    : [{'google' : 'rockhead@gmail.com'}, {'skype' : 'fslate'}]
    }

    testOtherInfo = {
        'gender'      : 'M',
        'dateOfBirth' : '0000-01-01'
    }

    testLoginInfo = {
        'username' : 'rockhead',
        'oauth2'   : 'rockhead@gmail.com',
        'password' : 'abcdefghijklmnopqrstuvwxyz'
    }


    testJson = '''{
        "partnerKey"   : "00000000",
        "businessName" : "Granite Town Quarrel and Gravel Company",
        "revenueSplit" : 0.90,
        "acctBalance"  : 9999.99,
        "address"      : {
            "streetAddress"    : "140 Boulder Avenue",
            "buildingName"     : "The Granite Building",
            "floor"            : "22",
            "roomAptCondoFlat" : "",
            "city"             : "Granite Town",
            "stateProvince"    : "ZZ",
            "locality"         : "Unknown",
            "country"          : "None",
            "postalCode"       : "00000",
            "latitude"         : "+111.111",
            "longitude"        : "-111.111"
        },
        "name" : {
            "title"  : "Mr",
            "first"  : "Rockhead",
            "middle" : "Sylvester",
            "last"   : "Slate",
            "suffix" : "Boss"
        },
        "contact" : {
            "email"    : "rockhead@slate.gravel.com",
            "phone"    : "+0-000-000-0000",
            "socMedia" : {"google" : "rockhead@gmail.com"}
        },
        "otherContact" : {
            "emails"       : ["flo@slate.com", "rockhead@slate.com"],
            "phoneNumbers" : [{"home" : "000-000-0000"}, {"work" : "111-111-1111"}],
            "socMedias"    : [{"google" : "rockhead@gmail.com"}, {"skype" : "fslate"}]
        },
        "otherInfo" : {
            "gender"      : "M",
            "dateOfBirth" : "0000-01-01"
        },
        "login" : {
            "username" : "rockhead",
            "oauth2"   : "rockhead@gmail.com",
            "password" : "abcdefghijklmnopqrstuvwxyz"
        }
    }'''

    def setUp(self) :
        self.testDict['name']         = Name(self.testName)
        self.testDict['address']      = Location(self.testLocation)
        self.testDict['contact']      = Contact(self.testContact)
        self.testDict['otherContact'] = OtherContact(self.testOtherContact)
        self.testDict['otherInfo']    = OtherInfo(self.testOtherInfo)
        self.testDict['login']        = LoginInfo(self.testLoginInfo)
        self.partnerFromDict = Partner(self.testDict)
        self.partnerDefaults = Partner()
        self.maxDiff = None

    def test_partner_key(self) :
        expected = '00000000'
        actual   = self.partnerFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_partner_from_dict(self) :
        expected = 'Slate'
        name     = self.partnerFromDict.get('name')
        actual   = name.get('last')
        self.assertEqual(expected, actual)

    def test_partner_from_blank(self) :
        expected = True
        actual   = isinstance(self.partnerDefaults.get('address'), Location)
        self.assertEqual(expected, actual)

    def test_partner_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.partnerFromDict.toJson())
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
