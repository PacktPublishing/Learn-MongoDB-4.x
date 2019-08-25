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
    Does a database look up based on provided query and projection
    @param JSON document query
    @param JSON document projection
    @param JSON document sort
    @return dict
    """
    def fetch(self, query, projection, sort) :
        return self.collection.find(query, projection, skip=0, limit=0, no_cursor_timeout=False, cursor_type=CursorType.NON_TAILABLE, sort=sort)

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
    Does a database look up based on "partnerKey"
    Returns a list of property keys and names
    @param string key : partner key
    @return [(<propertyKey>,<propertyName>),etc.]
    """
    def fetchByPartnerKey(self, key) :
        query  = {'partnerKey' : key}
        proj   = {'propertyKey' : 1, 'propName' : 1, '_id' : 0}
        result = self.collection.find(query, proj)
        data   = []
        if result :
            for doc in result :
                data.append(doc)
        return data

    """
    Does a database look up based on "propertyKey"
    Returns contact name and information for this property
    @param string key : property key
    @return {'contactName' : <Name>, 'contactInfo' : <Contact>}
    """
    def fetchContactInfoByKey(self, key) :
        query  = {'propertyKey' : key}
        proj   = {'contactName' : 1, 'contactInfo' : 1, '_id' : 0}
        result = self.collection.find_one(query, proj)
        return result

    """
    Does a database look up based on "propertyKey"
    Returns room information for this property
    @param string key : property key
    @return list of [RoomType,RoomType,etc.]
    """
    def fetchRoomsByPropertyKey(self, key) :
        result = []
        query  = {'propertyKey' : key}
        proj   = {'rooms' : 1, '_id' : 0}
        temp   = self.collection.find_one(query, proj)
        if temp and ('rooms' in temp) :
            result = temp['rooms']
        return result

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

    """
    Builds instances of subclasses and "assembles" dictionary into Property instance
    @param dict doc
    @return booksomeplace.entity.property.Property instance
    """
    def assemble(self, doc) :
        prop = Property(doc)
        if 'propInfo' in doc :
            prop['propInfo'] = PropInfo(doc['propInfo'])
        if 'address' in doc :
            prop['address'] = Location(doc['address'])
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

    """
    Saves Property instance to the database
    @param booksomeplace.entity.property.Property prop
    @return boolean True | False depending on success or failure
    """
    def save(self, prop) :
        # need to generate the key before saving!
        prop.generatePropertyKey()
        return self.collection.insert_one(prop)

    """
    Saves room type into database Property document
    Generates a room type key
    @param booksomeplace.entity.property.RoomType
    @return boolean True | False depending on success or failure
    """
    def saveRoom(self, roomType, prop_key) :
        # retrieve the property
        success = False
        prop = self.fetchByKey(prop_key)
        if prop :
            # generate room type key
            roomType.generateRoomTypeKey()
            # formulate the update document
            updateDoc = {'$push' : { 'rooms' : roomType }}
            query = {'propertyKey' : prop.getKey()}
            # perform the update
            success = self.collection.update_one(query, updateDoc)
        return success

    """
    Updates Property instance in the database
    @param booksomeplace.entity.property.Property prop
    @return boolean True | False depending on success or failure
    """
    def edit(self, prop) :
        # generate query filter
        query = {'propertyKey' : prop.getKey()}
        # save generate update document
        return self.collection.update_one(query, prop.getUpdateDoc())

    def logStuff(self, label, item) :
        import os
        import pprint
        from time import strftime, gmtime
        fn = os.path.realpath('/home/jed/Repos/learn-mongodb/www/data') + '/info.log'
        fh = open(fn, 'w')
        fh.write(strftime('%Y-%m-%d %H:%M:%S', gmtime()) + ':' + label + "\n")
        fh.write(pprint.pformat(item) + "\n")
        fh.close()
        return True

    """
    Deletes a property from the properties collection based on "propertyKey"
    @param string key : property key
    @return boolean True : if the operation was successful; False otherwise
    """
    def deleteByKey(self, key) :
        query  = {'propertyKey':key}
        return self.collection.delete_one(query)
