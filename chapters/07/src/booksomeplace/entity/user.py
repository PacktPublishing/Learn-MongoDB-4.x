# booksomeplace.entity.user

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))
from booksomeplace.entity.base import Base, Name, Contact, Location

class OtherContact(Base) :
    fields = {
        'emails'       : [],
        'phoneNumbers' : [],
        'socMedias'    : []
    }

class OtherInfo(Base) :
    fields = {
        'gender'      : '',
        'dateOfBirth' : ''
    }

class LoginInfo(Base) :
    fields = {
        'username' : '',
        'oauth2'   : '',
        'password' : ''
    }

class Customer(Base) :
    fields = {
        'customerKey'  : '',
        'name'         : Name(),
        'address'      : Location(),
        'contact'      : Contact(),
        'otherContact' : OtherContact(),
        'otherInfo'    : OtherInfo(),
        'login'        : LoginInfo(),
        'totalBooked'  : 0,
        'discount'     : 0
    }

    def getKey(self) :
        return self['customerKey']

class Partner(Base) :
    fields = {
        'partnerKey'   : '',
        'businessName' : '',
        'revenueSplit' : 0.00,
        'acctBalance'  : 0.00,
        'name'         : Name(),
        'address'      : Location(),
        'contact'      : Contact(),
        'otherContact' : OtherContact(),
        'otherInfo'    : OtherInfo(),
        'login'        : LoginInfo()
    }

    def getKey(self) :
        return self['partnerKey']
