# booksomeplace.entity.customer.Name test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/repo/chapters/07/src"))

import json
import unittest
from booksomeplace.entity.base import Name, Contact, Location
from booksomeplace.entity.property import Property, PropInfo, Review, RoomType

class TestProperty(unittest.TestCase) :

    propertyFromDict = None
    propertyDefaults = None

    testDict = {
        'propertyKey' : 'AAAA1111',
        'partnerKey'  : 'BBBB2222',
        'propName'    : 'Test',
        'propInfo'    : PropInfo(),
        'address'     : Location(),
        'contactName' : Name(),
        'contactInfo' : Contact(),
        'rooms'       : [],
        'reviews'     : [],
        'rating'      : 3,
        'totalBooked' : 100
    }

    testPropInfo = {
        'type'        : 'hotel',
        'chain'       : 'Accor',
        'photos'      : ['image1.jpg','image2.jpg'],
        'facilities'  : ['free parking','wifi'],
        'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'currency'    : 'GBP',
        'taxFee'      : 0.11
    }

    testLocation = {
        'streetAddress'    : '123 Main Street',
        'buildingName'     : 'The Gravel Building',
        'floor'            : '22',
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

    testRoomType1 = {
        'roomTypeKey'  : 'aa11',
        'type'         : 'Pool Side',
        'view'         : 'Pool',
        'description'  : 'Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake.',
        'beds'         : ['single','single'],
        'numAvailable' : 22,
        'numBooked'    : 11,
        'price'        : 44.44
    }

    testRoomType2 = {
        'roomTypeKey'  : 'bb22',
        'type'         : 'Standard',
        'view'         : 'City',
        'description'  : 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla.',
        'beds'         : ['king'],
        'numAvailable' : 12,
        'numBooked'    : 6,
        'price'        : 33.33
    }

    testReview = {
        'customerKey' : 'AAAABBBB0000',
        'staff'       : 1,
        'cleanliness' : 2,
        'facilities'  : 3,
        'comfort'     : 4,
        'goodStuff'   : "All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. Be careful, or I will spill the beans on your placeholder text. I’m the best thing that ever happened to placeholder text. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?!",
        'badStuff'    : 'Despite the constant negative ipsum covfefe. Lorem Ispum is a choke artist. It chokes!'
    }

    testJson = '''{
        "propertyKey" : "AAAA1111",
        "partnerKey"  : "BBBB2222",
        "propName"    : "Test",
        "propInfo"    : {
            "type"        : "hotel",
            "chain"       : "Accor",
            "photos"      : ["image1.jpg","image2.jpg"],
            "facilities"  : ["free parking","wifi"],
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "currency"    : "GBP",
            "taxFee"      : 0.11
        },
        "address"     : {
            "streetAddress"    : "123 Main Street",
            "buildingName"     : "The Gravel Building",
            "floor"            : "22",
            "roomAptCondoFlat" : "",
            "city"             : "Bedrock",
            "stateProvince"    : "ZZ",
            "locality"         : "Unknown",
            "country"          : "None",
            "postalCode"       : "00000",
            "latitude"         : "+111.111",
            "longitude"        : "-111.111"
        },
        "contactName" : {
            "title"  : "Mr",
            "first"  : "Fred",
            "middle" : "Folsom",
            "last"   : "Flintstone",
            "suffix" : "CM"
        },
        "contactInfo" : {
            "email"    : "fred@slate.gravel.com",
            "phone"    : "+0-000-000-0000",
            "socMedia" : {"google" : "freddy@gmail.com"}
        },
        "rooms"       : [
            {
                "roomTypeKey"  : "aa11",
                "type"         : "Pool Side",
                "view"         : "Pool",
                "description"  : "Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake.",
                "beds"         : ["single","single"],
                "numAvailable" : 22,
                "numBooked"    : 11,
                "price"        : 44.44
            },
            {
                "roomTypeKey"  : "bb22",
                "type"         : "Standard",
                "view"         : "City",
                "description"  : "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla.",
                "beds"         : ["king"],
                "numAvailable" : 12,
                "numBooked"    : 6,
                "price"        : 33.33
            }
        ],
        "reviews"     : [
            {
                "customerKey" : "AAAABBBB0000",
                "staff"       : 1,
                "cleanliness" : 2,
                "facilities"  : 3,
                "comfort"     : 4,
                "goodStuff"   : "All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. Be careful, or I will spill the beans on your placeholder text. I’m the best thing that ever happened to placeholder text. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?!",
                "badStuff"    : "Despite the constant negative ipsum covfefe. Lorem Ispum is a choke artist. It chokes!"
            }
        ],
        "rating" : 3,
        "totalBooked" : 100
    }'''

    def setUp(self) :
        self.propertyDefaults = Property()
        self.testDict['propInfo']    = PropInfo(self.testPropInfo)
        self.testDict['address']     = Location(self.testLocation)
        self.testDict['contactName'] = Name(self.testName)
        self.testDict['contactInfo'] = Contact(self.testContact)
        self.testDict['rooms'] = [
            RoomType(self.testRoomType1),
            RoomType(self.testRoomType2)
        ]
        self.testDict['reviews'] = [ Review(self.testReview) ]
        self.propertyFromDict = Property(self.testDict)
        self.maxDiff = None

    def test_property_key(self) :
        expected = 'AAAA1111'
        actual   = self.propertyFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_property_from_dict(self) :
        expected = 'Flintstone'
        name     = self.propertyFromDict.get('contactName')
        actual   = name.get('last')
        self.assertEqual(expected, actual)

    def test_property_from_dict_book_room(self) :
        roomList  = self.propertyFromDict.get('rooms')
        # test booking room type 1
        expected  = 21
        actual    = roomList[0].bookOneRoom()
        self.assertEqual(expected, actual)
        # test booking room type 2
        expected  = 11
        actual    = roomList[1].bookOneRoom()
        self.assertEqual(expected, actual)

    def test_property_from_blank(self) :
        expected = True
        actual   = isinstance(self.propertyDefaults.get('propInfo'), PropInfo)
        self.assertEqual(expected, actual)

    def test_property_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.propertyFromDict.toJson())
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
