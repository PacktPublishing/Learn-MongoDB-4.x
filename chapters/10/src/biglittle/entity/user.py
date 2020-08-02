# biglittle.entity.user

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath('../../../src'))
from biglittle.entity.base import Base

class Name(Base) :
    formFieldPrefix = 'name_'
    fields = {
        'title'  : '',
        'first'  : '',
        'middle' : '',
        'last'   : '',
        'suffix' : ''
    }

class Location(Base) :
    formFieldPrefix = 'location_'
    fields = {
        'streetAddress'    : '',
        'buildingName'     : '',
        'floor'            : '',
        'roomAptCondoFlat' : '',
        'city'             : '',
        'stateProvince'    : '',
        'locality'         : '',
        'country'          : '',
        'postalCode'       : '',
        'latitude'         : '',
        'longitude'        : ''
    }

class Contact(Base) :
    formFieldPrefix = 'contact_'
    fields = {
        'email'    : '',
        'phone'    : '',
        'socMedia' : {}
    }

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

class User(Base) :
    fields = {
        '_id'          : '',
        'userKey'      : '',
        'userType'     : '',
        'businessName' : '',
        'name'         : Name(),
        'address'      : Location(),
        'contact'      : Contact(),
        'otherContact' : OtherContact(),
        'otherInfo'    : OtherInfo(),
        'login'        : LoginInfo()
    }

    def getId(self) :
        return self['_id']

    def getKey(self) :
        return self['userKey']

    def getName(self) :
        return Name(self['name'])

    def getFullName(self) :
        name = self.getName()
        return name.get('first') + ' ' + name.get('last')
