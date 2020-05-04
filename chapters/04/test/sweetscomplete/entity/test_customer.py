# sweetscomplete.entity.custmoer.Customer test

# tell python where to find module source code
import os,sys
include_path = os.path.realpath('./src')
if not os.path.exists(include_path) :
    include_path = os.path.realpath('../src')
    if not os.path.exists(include_path) :
        include_path = os.path.realpath('../../src')
        if not os.path.exists(include_path) :
            include_path = os.path.realpath('../../../src')
sys.path.append(include_path)
import json
import unittest
from sweetscomplete.entity.customer import Customer

class TestCustomer(unittest.TestCase) :

    customerFromDict = None
    customerDefaults = None
    customerFromJson = None

    testDict = dict({
        'customerKey'             : '00000000',
        'firstName'               : 'Fred',
        'lastName'                : 'Flintstone',
        'phoneNumber'             : '+1-222-333-4444',
        'email'                   : 'fred@slate.com',
        'socialMedia'             : {'FB':'https://facebook.com/fred.flintstone','LI':'https://linkedin.com/fflintstone'},
        'streetAddressOfBuilding' : '123 Rocky Way',
        'buildingName'            : 'House',
        'city'                    : 'Bedrock',
        'stateProvince'           : 'ZZ',
        'locality'                : 'Pre Historic',
        'country'                 : 'ZZ',
        'postalCode'              : '00000',
        'latitude'                : 11.1111,
        'longitude'               : -11.1111,
        'userName'                : 'freddy',
        'password'                : '12345',
        'secondaryPhoneNumbers'   : ['+1-333-444-5555'],
        'secondaryEmailAddresses' : ['freddy@flintstone.com','ace@bowling.com'],
        'dateOfBirth'             : '0000-00-00',
        'gender'                  : 'M'
    })

    testJson = '''{
        "customerKey"             : "00000000",
        "firstName"               : "Fred",
        "lastName"                : "Flintstone",
        "phoneNumber"             : "+1-222-333-4444",
        "email"                   : "fred@slate.com",
        "socialMedia"             : {"FB":"https://facebook.com/fred.flintstone","LI":"https://linkedin.com/fflintstone"},
        "streetAddressOfBuilding" : "123 Rocky Way",
        "buildingName"            : "House",
        "city"                    : "Bedrock",
        "stateProvince"           : "ZZ",
        "locality"                : "Pre Historic",
        "country"                 : "ZZ",
        "postalCode"              : "00000",
        "latitude"                : 11.1111,
        "longitude"               : -11.1111,
        "userName"                : "freddy",
        "password"                : "12345",
        "secondaryPhoneNumbers"   : ["+1-333-444-5555"],
        "secondaryEmailAddresses" : ["freddy@flintstone.com","ace@bowling.com"],
        "dateOfBirth"             : "0000-00-00",
        "gender"                  : "M"
    }'''

    def setUp(self) :
        self.customerFromDict = Customer(self.testDict)
        self.customerDefaults = Customer(True)
        self.customerFromJson = Customer(self.testJson)

    def test_customer_from_dict(self) :
        expected = '00000000'
        actual   = self.customerFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_customer_from_dict_get_and_set(self) :
        self.customerFromDict.set('skuNumber', '99999999')
        expected = '99999999'
        actual   = self.customerFromDict.get('skuNumber')
        self.assertEqual(expected, actual)

    def test_customer_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.customerFromDict.toJson())
        self.assertEqual(expected, actual)

    def test_customer_from_json(self) :
        expected = '00000000'
        actual   = self.customerFromJson.getKey()
        self.assertEqual(expected, actual)

    def test_customer_from_blank(self) :
        expected = ''
        actual   = self.customerDefaults.getKey()
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
