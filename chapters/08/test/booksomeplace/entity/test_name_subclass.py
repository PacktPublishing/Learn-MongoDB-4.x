# booksomeplace.entity.customer.Name test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

import json
import unittest
from booksomeplace.entity.base import Name

class TestName(unittest.TestCase) :

    nameFromDict = None
    nameDefaults = None

    testDict = {
        'title'  : 'Mr',
        'first'  : 'Fred',
        'middle' : 'Folsom',
        'last'   : 'Flintstone',
        'suffix' : 'CM'
    }

    testJson = '''{
        "title"  : "Mr",
        "first"  : "Fred",
        "middle" : "Folsom",
        "last"   : "Flintstone",
        "suffix" : "CM"
    }'''

    def setUp(self) :
        self.nameFromDict = Name(self.testDict)
        self.nameDefaults = Name()

    def test_customer_from_dict(self) :
        expected = 'Flintstone'
        actual   = self.nameFromDict.get('last')
        self.assertEqual(expected, actual)

    def test_customer_from_dict_get_and_set(self) :
        self.nameFromDict.set('title', 'Caveman')
        expected = 'Caveman'
        actual   = self.nameFromDict.get('title')
        self.assertEqual(expected, actual)

    def test_customer_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.nameFromDict.toJson())
        self.assertEqual(expected, actual)

    def test_customer_from_blank(self) :
        expected = ''
        actual   = self.nameDefaults.get('title')
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
