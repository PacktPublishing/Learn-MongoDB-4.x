"""
biglittle.domain.common
Description: module which interacts with the "common" collection
"""

import pymongo
from pymongo.cursor import CursorType
from biglittle.domain.base import Base
from biglittle.entity.common import Common

class CommonService(Base) :

    # defaults
    collectName = 'biglittle.common'

    """
    Does a database look up based on "searchKey"
    @param string searchKey
    @return dict
    """
    def fetchByKey(self, searchKey) :
        query  = {'key':searchKey}
        result = self.collection.find_one(query)
        return result.get('value') if result else None
