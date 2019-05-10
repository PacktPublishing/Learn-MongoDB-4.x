"""
booksomeplace.domain.property
Description: module which interacts with the "properties" collection
"""

import pymongo
from pymongo.cursor import CursorType
from booksomeplace.domain.base import Base
from booksomeplace.entity.base import Name, Contact, Location
from booksomeplace.entity.property import Property, PropInfo, Review, RoomType

class PropertyService(Base) :

    # defaults
    collectName = 'properties'

    """
    Does a database look up based on "propertyKey"
    Returns a single Property instance
    @param string key
    @return booksomeplace.entity.property.Property
    """
    def fetchByKey(self, key) :
        query  = {'propertyKey':key}
        result = self.collection.find_one(query)
        if result :
            return self.assemble(result)
        else :
            return None

    """
    Returns the "Top 10" properties: based on "ratings" + "totalBooked"
    Emulates this query:
    db.properties.find({"rating":{"$gt":4}},{}).sort({"totalBooked":-1}).limit(10);
    @return pymongo.cursor.Cursor of 10 booksomeplace.entity.property.Property instances
    """
    def fetchTop10(self) :
        query      = {'rating':{'$gt':4}}
        projection = None
        sortDef    = [('totalBooked', pymongo.DESCENDING)]
        skip       = 0
        limit      = 10
        result     = self.collection.find(query, projection, skip, limit, False, CursorType.NON_TAILABLE, sortDef)
        properties = []
        if result :
            for doc in result :
                properties.append(self.assemble(doc))
        return properties

    def assemble(self, doc) :
        prop = Property(doc)
        if 'propInfo' in doc :
            prop['propInfo']    = PropInfo(doc['propInfo'])
        if 'address' in doc :
            prop['address']     = Location(doc['address'])
        if 'contactName' in doc :
            prop['contactName'] = Name(doc['contactName'])
        if 'contactInfo' in doc :
            prop['contactInfo'] = Contact(doc['contactInfo'])
        if 'rooms' in doc :
            prop['rooms'] = []
            for room in doc['rooms'] :
                prop['rooms'].append(RoomType(room))
        if 'reviews' in doc :
            prop['reviews'] = []
            for review in doc['reviews'] :
                prop['reviews'].append(Review(room))
        return prop
