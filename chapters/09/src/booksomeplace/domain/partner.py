"""
booksomeplace.domain.user
Description: module which interacts with the "partners" and "partners" collections
"""

import pymongo
from pymongo.cursor import CursorType
from booksomeplace.domain.base import Base
from booksomeplace.entity.user import Partner

class PartnerService(Base) :

    # defaults
    collectName = 'partners'

    """
    Does a database look up based on "partnerKey"
    Returns a single Partner instance
    @param string key
    @return booksomeplace.entity.partner.Partner
    """
    def fetchByKey(self, key) :
        query  = dict({'partnerKey' : key})
        result = self.collection.find_one(query)
        if result :
            return Partner(result)
        else :
            return None

    """
    Returns a list of key/value pairs where the key is "partnerKey" and the value is the partner's business name
    @return [{partnerKey : businessName}, etc.]
    """
    def fetchPartnerKeys(self) :
        query      = {}
        projection = {'partnerKey' : 1, 'businessName' : 1}
        sortDef    = [('businessName', pymongo.ASCENDING)]
        skip       = 0
        limit      = 0
        cursor     = self.collection.find(query, projection, skip, limit, False, CursorType.NON_TAILABLE, sortDef)
        temp       = {}
        for doc in cursor :
            temp.update({doc['partnerKey'] : doc['businessName']})
        return temp.items()

    """
    Returns a list of strings which includes the partner's business name + partnerKey
    @return [businessName + '[' + partnerKey + ']', etc.]
    """
    def getKeysAndNamesForAjax(self, name) :
        import re
        regx       = re.compile('^' + name, re.IGNORECASE)
        query      = {'businessName' : regx}
        projection = {'partnerKey' : 1, 'businessName' : 1}
        cursor     = self.collection.find(query, projection)
        temp       = []
        for doc in cursor :
            temp.append(doc['businessName'] + '[' + doc['partnerKey'] + ']')
        return temp


