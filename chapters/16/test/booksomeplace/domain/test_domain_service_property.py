# booksomeplace.entity.customer.Name test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))

import json
import unittest
from config.config import Config
from booksomeplace.domain.property import PropertyService
from booksomeplace.entity.property import Property, PropInfo, Review, RoomType

class TestPropertyService(unittest.TestCase) :

    config      = None
    propService = None

    def setUp(self) :
        self.config = Config()
        self.propService = PropertyService(self.config)

    def test_property_service_fetchTop10_returns_10(self) :
        result   = self.propService.fetchTop10()
        expected = 10
        actual   = len(result)
        self.assertEqual(expected, actual)

    def test_property_service_fetchTop10_returns_list_of_property_instances(self) :
        result   = self.propService.fetchTop10()
        first    = result[0]
        # check to see if 1st result is of type Property
        expected = Property()
        actual   = first
        self.assertEqual(type(expected), type(actual))

    def test_property_service_fetchTop10_includes_propinfo(self) :
        result   = self.propService.fetchTop10()
        first    = result[0]
        # check to for PropInfo
        expected = PropInfo()
        actual   = first['propInfo']
        self.assertEqual(type(expected), type(actual))

    def test_property_service_fetchTop10_includes_roomtype(self) :
        result   = self.propService.fetchTop10()
        first    = result[0]
        room     = first['rooms']
        # check to for RoomType
        expected = RoomType()
        actual   = room[0]
        self.assertEqual(type(expected), type(actual))

def main() :
    unittest.main()

if __name__ == "__main__":
    main()
