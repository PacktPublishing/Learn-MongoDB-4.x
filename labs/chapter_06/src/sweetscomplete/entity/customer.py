# sweetscomplete.entity.customer

from sweetscomplete.entity.base import Base

class Customer(Base) :
    fields = dict({
        'customerKey'              : '',
        # primary contact info
        'firstName'                : '',
        'lastName'                 : '',
        'phoneNumber'              : '',
        'email'                    : '',
        # address info
        'streetAddressOfBuilding'  : '',
        'buildingName'             : '',
        'floor'                    : '',
        'roomApartmentCondoNumber' : '',
        'city'                     : '',
        'stateProvince'            : '',
        'locality'                 : '',
        'country'                  : '',
        'postalCode'               : '',
        # geo spatial info
        'latitude'                 : 0.00,
        'longitude'                : 0.00,
        # login info
        'userName'                 : '',
        'password'                 : '',
        # secondary contact info
        'secondaryPhoneNumbers'    : [],
        'secondaryEmailAddresses'  : [],
        'socialMedia'              : None,
        # other info
        'dateOfBirth'              : '',
        'gender'                   : ''
    })
    def getKey(self) :
        return self['customerKey']
    def setKey(self, key) :
        self['customerKey'] = key
    def getFullName(self) :
        return self['firstName'] + ' ' + self['lastName']
