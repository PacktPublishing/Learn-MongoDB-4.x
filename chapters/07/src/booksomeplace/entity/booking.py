# booksomeplace.entity.booking

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))
from booksomeplace.entity.base import Base, Name, Location, Contact
from booksomeplace.entity.user import OtherInfo

class PropBooking(Base) :
    fields = {
        'propertyKey'     : '',
        'propertyName'    : '',
        'propertyAddr'    : Location(),
        'propertyContact' : Contact()
    }

class CustParty(Base) :
    fields = {
        'name'  : Name(),
        'other' : OtherInfo()
    }

class CustBooking(Base) :
    fields = {
        'customerKey'     : '',
        'customerName'    : Name(),
        'customerAddr'    : Location(),
        'customerContact' : Contact(),
        'custParty'       : []
    }

class BookingInfo(Base) :
    fields = {
        'arrivalDate'       : '',
        'departureDate'     : '',
        'checkoutTime'      : '',
        'refundableUntil'   : '',
        'reservationStatus' : '',
        'paymentStatus'     : '',
    }

class RoomBooking(Base) :
    fields = {
        # note: "type" here is from Common.roomType
        'roomType'    : '',
        'roomTypeKey' : '',
        'price'       : 0.00,
        'qty'         : 0
    }

class Booking(Base) :
    fields = {
        'bookingKey'   : '',
        'customer'     : CustBooking(),
        'property'     : PropBooking(),
        'bookingInfo'  : BookingInfo(),
        'rooms'        : [],
        'totalPrice'   : 0.00
    }

    def getKey(self) :
        return self['bookingKey']
