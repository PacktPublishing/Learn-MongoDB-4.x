# booksomeplace.entity.property

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))
from booksomeplace.entity.base import Base, Name, Contact, Location

class PropInfo(Base) :
    formFieldPrefix = 'prop_info_'
    fields = {
        'type'        : '',
        'chain'       : '',
        'photos'      : [],
        'facilities'  : [],
        'description' : '',
        'currency'    : '',
        'taxFee'      : 0.00
    }

class Review(Base) :
    formFieldPrefix = 'review_'
    fields = {
        'customerKey' : '',
        'staff'       : 0,
        'cleanliness' : 0,
        'facilities'  : 0,
        'comfort'     : 0,
        'goodStuff'   : '',
        'badStuff'    : ''
    }

class RoomType(Base) :
    formFieldPrefix = 'room_type_'
    fields = {
        'roomTypeKey'  : '',
        'type'         : '',
        'view'         : '',
        'description'  : '',
        'beds'         : [],
        'numAvailable' : 0,
        'numBooked'    : 0,
        'price'        : 0.00
    }

    def bookOneRoom(self) :
        if self['numAvailable'] != 0 :
            self['numAvailable'] -= 1
            self['numBooked']    += 1
        return self['numAvailable']

    def checkoutOneRoom(self) :
        self['numAvailable'] += 1
        self['numBooked']    -= 1
        return self['numAvailable']

    def generateRoomTypeKey(self) :
        import random
        # generate property key
        first4 = self['type']
        first4 = first4.replace(' ', '')
        first4 = first4[0:4]
        first4 = first4.ljust(4, '_')
        self['roomTypeKey'] = first4.upper() + str(random.randint(1000, 9999))
        return self['roomTypeKey']

class Property(Base) :
    formFieldPrefix = 'property_'
    fields = {
        'propertyKey' : '',
        'partnerKey'  : '',
        'propName'    : '',
        'propInfo'    : PropInfo(),
        'address'     : Location(),
        'contactName' : Name(),
        'contactInfo' : Contact(),
        'rooms'       : [],
        'reviews'     : [],
        'rating'      : 0,
        'totalBooked' : 0
    }

    def getKey(self) :
        return self['propertyKey']

    def generatePropertyKey(self) :
        import random
        # generate property key
        first4 = self['propName']
        first4 = first4.replace(' ', '')
        first4 = first4[0:4]
        first4 = first4.ljust(4, '_')
        self['propertyKey'] = first4.upper() + str(random.randint(1000, 9999))
        return self['propertyKey']
