# sweetscomplete.entity.test_entity_partner

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

# LAB: add the appropriate import statements

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


    # LAB: create a "testJson" string which duplicates the information above
    testJson = '''{
    }'''

    # LAB: finish the "setUp()" method which should create a populated instance self.partnerFromDict
    #      and a blank instance self.partnerDefaults
    def setUp(self) :
        # put your code here
        # leave the following statement alone: it will help you with troubleshooting the test!
        self.maxDiff = None

    # LAB: create a test for the getKey() method
    def test_partner_key(self) :
        expected = '???'
        actual   = '???'
        self.assertEqual(expected, actual)

    # LAB: create a test for the partner's last name
    def test_partner_from_dict(self) :
        # put your code here

    # LAB: create a test for the blank test which asserts that "address" is a "Location" instance
    def test_partner_from_blank(self) :
        # put your code here

    # LAB: create a test for the "toJson()" method
    def test_partner_from_dict_to_json(self) :
        # put your code here

# leave these lines alone: they let you run the test from the command line
def main() :
    unittest.main()

if __name__ == "__main__":
    main()
