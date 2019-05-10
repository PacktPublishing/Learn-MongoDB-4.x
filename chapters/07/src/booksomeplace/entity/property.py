# booksomeplace.entity.property

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))
from booksomeplace.entity.base import Base, Name, Contact, Location

class PropInfo(Base) :
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

class Property(Base) :
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
