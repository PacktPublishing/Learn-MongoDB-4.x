# booksomeplace.entity.booking.Booking test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/repo/chapters/07/src"))

import json
import unittest
from booksomeplace.entity.base import Name, Contact, Location
from booksomeplace.entity.user import OtherInfo
from booksomeplace.entity.booking import Booking, CustBooking, PropBooking, BookingInfo, CustParty, RoomBooking

class TestBooking(unittest.TestCase) :

    bookingFromDict = None
    bookingDefaults = None

    testDict = {
        'bookingKey'   : '20190501AAAA1111',
        'customer'     : CustBooking(),
        'property'     : PropBooking(),
        'bookingInfo'  : BookingInfo(),
        'rooms'        : [],
        'totalPrice'   : 999.99
    }

    testCustBooking = {
        'customerKey'     : '00000000',
        'customerName'    : Name(),
        'customerAddr'    : Location(),
        'customerContact' : Contact(),
        'custParty'       : []
    }

    testCustName = {
        'title'  : 'Ms',
        'first'  : 'Wilma',
        'middle' : 'Slaghoople',
        'last'   : 'Flintstone',
        'suffix' : ''
    }

    testCustLocation = {
        'streetAddress'    : '345 Cave Stone Road',
        'buildingName'     : '',
        'floor'            : '',
        'roomAptCondoFlat' : '',
        'city'             : 'Bedrock',
        'stateProvince'    : 'ZZ',
        'locality'         : 'Unknown',
        'country'          : 'None',
        'postalCode'       : '00000',
        'latitude'         : '+111.1111',
        'longitude'        : '-111.1111'
    }

    testCustContact = {
        'email'    : 'wilma@flintstone.com',
        'phone'    : '+0-000-000-0000',
        'socMedia' : {'google' : 'wilma@gmail.com'}
    }

    testCustParty : [
        { 'name'  : Name(), 'other' : OtherInfo() },
        { 'name'  : Name(), 'other' : OtherInfo() }
    ]

    testCustPartyName1 = {
        'title'  : 'Mr',
        'first'  : 'Frederick',
        'middle' : 'Joseph',
        'last'   : 'Flintstone',
        'suffix' : 'Caveman'
    }

    testCustPartyName2 = {
        'title'  : 'Baby',
        'first'  : 'Bam',
        'middle' : 'Bam',
        'last'   : 'Flintstone',
        'suffix' : ''
    }

    testOtherInfo1 = {
        'gender'      : 'M',
        'dateOfBirth' : '0000-00-00'
    }

    testOtherInfo2 = {
        'gender'      : 'M',
        'dateOfBirth' : '0030-01-01'
    }

    testPropBooking = {
        'propertyKey'     : 'ZZZZ9999',
        'propertyName'    : 'The Slate Resort',
        'propertyAddr'    : Location(),
        'propertyContact' : Contact()
    }

    testPropLocation = {
        'streetAddress'    : '140 Boulder Avenue',
        'buildingName'     : 'The Slate Resort',
        'floor'            : '',
        'roomAptCondoFlat' : '',
        'city'             : 'Granite Town',
        'stateProvince'    : 'XX',
        'locality'         : 'Unknown',
        'country'          : 'None',
        'postalCode'       : '00001',
        'latitude'         : '+222.2222',
        'longitude'        : '-222.2222'
    }

    testPropContact = {
        'email'    : 'rockhead@slate.gravel.com',
        'phone'    : '+0-000-000-0000',
        'socMedia' : {'google' : 'rockhead@gmail.com'}
    }

    testBookingInfo = {
        'arrivalDate'       : '0040-03-15',
        'departureDate'     : '0040-04-01',
        'checkoutTime'      : '12:00',
        'refundableUntil'   : '0040-03-28',
        'reservationStatus' : 'pending',
        'paymentStatus'     : 'pending'
    }

    testRoomBooking = {
        'roomType'    : 'poolside',
        'roomTypeKey' : '0001',
        'price'       : 99.99,
        'qty'         : 1
    }

    testJson = '''{
        "bookingKey" : "20190501AAAA1111",
        "customer"   : {
            "customerKey"    : "00000000",
            "customerName"   : {
                "title"  : "Ms",
                "first"  : "Wilma",
                "middle" : "Slaghoople",
                "last"   : "Flintstone",
                "suffix" : ""
            },
            "customerAddr"    : {
                "streetAddress"    : "345 Cave Stone Road",
                "buildingName"     : "",
                "floor"            : "",
                "roomAptCondoFlat" : "",
                "city"             : "Bedrock",
                "stateProvince"    : "ZZ",
                "locality"         : "Unknown",
                "country"          : "None",
                "postalCode"       : "00000",
                "latitude"         : "+111.1111",
                "longitude"        : "-111.1111"
            },
            "customerContact" : {
                "email"    : "wilma@flintstone.com",
                "phone"    : "+0-000-000-0000",
                "socMedia" : {"google" : "wilma@gmail.com"}
            },
            "custParty"       : [
                {
                    "name"  : {
                        "title"  : "Mr",
                        "first"  : "Frederick",
                        "middle" : "Joseph",
                        "last"   : "Flintstone",
                        "suffix" : "Caveman"
                    },
                    "other" : {
                        "gender"      : "M",
                        "dateOfBirth" : "0000-00-00"
                    }
                },
                {
                    "name" : {
                            "title"  : "Baby",
                            "first"  : "Bam",
                            "middle" : "Bam",
                            "last"   : "Flintstone",
                            "suffix" : ""
                    },
                    "other" : {
                        "gender"      : "M",
                        "dateOfBirth" : "0030-01-01"
                    }
                }
            ]
        },
        "property" : {
            "propertyKey"  : "ZZZZ9999",
            "propertyName" : "The Slate Resort",
            "propertyAddr" : {
                "streetAddress"    : "140 Boulder Avenue",
                "buildingName"     : "The Slate Resort",
                "floor"            : "",
                "roomAptCondoFlat" : "",
                "city"             : "Granite Town",
                "stateProvince"    : "XX",
                "locality"         : "Unknown",
                "country"          : "None",
                "postalCode"       : "00001",
                "latitude"         : "+222.2222",
                "longitude"        : "-222.2222"
            },
            "propertyContact" : {
                "email"    : "rockhead@slate.gravel.com",
                "phone"    : "+0-000-000-0000",
                "socMedia" : {"google" : "rockhead@gmail.com"}
            }
        },
        "bookingInfo"  : {
            "arrivalDate"       : "0040-03-15",
            "departureDate"     : "0040-04-01",
            "checkoutTime"      : "12:00",
            "refundableUntil"   : "0040-03-28",
            "reservationStatus" : "pending",
            "paymentStatus"     : "pending"
        },
        "rooms" : [
            {
                "roomType"    : "poolside",
                "roomTypeKey" : "0001",
                "price"       : 99.99,
                "qty"         : 1
            }
        ],
        "totalPrice" : 999.99
    }'''

    def setUp(self) :
        custBooking = {
            'customerKey'     : '00000000',
            'customerName'    : Name(self.testCustName),
            'customerAddr'    : Location(self.testCustLocation),
            'customerContact' : Contact(self.testCustContact),
            'custParty'       : [
                CustParty({'name':Name(self.testCustPartyName1), 'other':OtherInfo(self.testOtherInfo1)}),
                CustParty({'name':Name(self.testCustPartyName2), 'other':OtherInfo(self.testOtherInfo2)})
            ]
        }
        propBooking = {
            'propertyKey'     : 'ZZZZ9999',
            'propertyName'    : 'The Slate Resort',
            'propertyAddr'    : Location(self.testPropLocation),
            'propertyContact' : Contact(self.testPropContact),
        }
        self.testDict = {
            'bookingKey'   : '20190501AAAA1111',
            'customer'     : custBooking,
            'property'     : propBooking,
            'bookingInfo'  : BookingInfo(self.testBookingInfo),
            'rooms'        : [RoomBooking(self.testRoomBooking)],
            'totalPrice'   : 999.99
        }
        self.bookingFromDict = Booking(self.testDict)
        self.bookingDefaults = Booking()
        self.maxDiff = None

    def test_booking_key(self) :
        expected = '20190501AAAA1111'
        actual   = self.bookingFromDict.getKey()
        self.assertEqual(expected, actual)

    def test_booking_from_dict(self) :
        expected = 'Flintstone'
        custBook = self.bookingFromDict.get('customer')
        custName = custBook.get('customerName')
        actual   = custName.get('last')
        self.assertEqual(expected, actual)

    def test_booking_from_blank(self) :
        expected = True
        actual   = isinstance(self.bookingDefaults.get('property'), PropBooking)
        self.assertEqual(expected, actual)

    def test_booking_from_dict_to_json(self) :
        expected = json.loads(self.testJson)
        actual   = json.loads(self.bookingFromDict.toJson())
        self.assertEqual(expected, actual)

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
