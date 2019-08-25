"""
booksomeplace.domain.common
Description: module which interacts with the "common" collection
"""

import pymongo
from pymongo.cursor import CursorType
from booksomeplace.domain.base import Base
from booksomeplace.entity.common import Common

class CommonService(Base) :

    # defaults
    collectName = 'common'

    """
    Does a database look up based on "propertyKey"
    Returns a single Property instance
    @param string key
    @return booksomeplace.entity.property.Property
    """
    def fetchByKey(self, key) :
        query  = {'key':key}
        result = self.collection.find_one(query)
        return result.get('value') if result else None
