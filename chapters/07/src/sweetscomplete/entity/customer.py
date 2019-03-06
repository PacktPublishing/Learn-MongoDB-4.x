# sweetscomplete.entity.customer

import json
from sweetscomplete.entity.base import Base

class Customer(Base) :

    customerKey          = ""
    PrimaryContactInfo   = None
    LoginInfo            = None
    Address              = None
    SecondaryContactInfo = None  
    OtherInfo            = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())       :
        if isinstance(jsonDoc, str)          : jsonDoc = json.loads(jsonDoc)
        if 'customerKey' in jsonDoc          : self.customerKey          = jsonDoc['customerKey']
        if 'PrimaryContactInfo' in jsonDoc   : self.PrimaryContactInfo   = PrimaryContactInfo(jsonDoc['PrimaryContactInfo'])
        if 'LoginInfo' in jsonDoc            : self.LoginInfo            = LoginInfo(jsonDoc['LoginInfo'])
        if 'Address' in jsonDoc              : self.Address              = Address(jsonDoc['Address'])
        if 'SecondaryContactInfo' in jsonDoc : self.SecondaryContactInfo = SecondaryContactInfo(jsonDoc['SecondaryContactInfo'])
        if 'OtherInfo' in jsonDoc            : self.OtherInfo            = OtherInfo(jsonDoc['OtherInfo'])
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'customerKey'          : self.customerKey,
            'PrimaryContactInfo'   : self.PrimaryContactInfo.toDict(),
            'LoginInfo'            : self.LoginInfo.toDict(),
            'Address'              : self.Address.toDict(),
            'SecondaryContactInfo' : self.PrimaryContactInfo.toDict(),
            'OtherInfo'            : self.OtherInfo.toDict()
        })

class PrimaryContactInfo(Base) :

    firstName   = ""
    lastName    = ""
    phoneNumber = ""
    email       = ""
    socialMedia = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)    : jsonDoc = json.loads(jsonDoc)
        if 'firstName' in jsonDoc      : self.firstName   = jsonDoc['firstName']
        if 'lastName' in jsonDoc       : self.lastName    = jsonDoc['lastName']
        if 'phoneNumber' in jsonDoc    : self.phoneNumber = jsonDoc['phoneNumber']
        if 'email' in jsonDoc          : self.email       = jsonDoc['email']
        if 'socialMedia' in jsonDoc    : self.socialMedia = jsonDoc['socialMedia']
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'firstName'      : self.firstName,
            'lastName'       : self.lastName,
            'phoneNumber'    : self.phoneNumber,
            'email'          : self.email,
            'socialMedia'    : self.socialMedia
        })

class Address(Base) :

    streetAddressOfBuilding  = ""
    buildingName             = ""
    floor                    = ""
    roomApartmentCondoNumber = ""
    city                     = ""
    stateProvince            = ""
    locality                 = ""
    country                  = ""
    postalCode               = ""
    GeoSpatialInfo           = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())  :
        if isinstance(jsonDoc, str)             : jsonDoc = json.loads(jsonDoc)
        if 'streetAddressOfBuilding' in jsonDoc : self.streetAddressOfBuilding  = jsonDoc['streetAddressOfBuilding']
        if 'buildingName' in jsonDoc            : self.buildingName             = jsonDoc['buildingName']
        if 'floor' in jsonDoc                   : self.floor                    = jsonDoc['floor']
        if 'roomApartmentCondoNumber' in jsonDoc: self.roomApartmentCondoNumber = jsonDoc['roomApartmentCondoNumber']
        if 'city' in jsonDoc                    : self.city                     = jsonDoc['city']
        if 'stateProvince' in jsonDoc           : self.stateProvince            = jsonDoc['stateProvince']
        if 'locality' in jsonDoc                : self.locality                 = jsonDoc['locality']
        if 'country' in jsonDoc                 : self.country                  = jsonDoc['country']
        if 'postalCode' in jsonDoc              : self.postalCode               = jsonDoc['postalCode']
        if 'GeoSpatialInfo' in jsonDoc          : self.GeoSpatialInfo           = GeoSpatialInfo(jsonDoc['GeoSpatialInfo'])
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'streetAddressOfBuilding'     : self.streetAddressOfBuilding,
            'buildingName'                : self.buildingName,
            'floor'                       : self.floor,           
            'roomApartmentCondoNumber'    : self.roomApartmentCondoNumber,
            'city'                        : self.city,
            'stateProvince'               : self.stateProvince,
            'locality'                    : self.locality,
            'country'                     : self.country,
            'postalCode'                  : self.postalCode
        })
    
class GeoSpatialInfo(Base) :

    latitude  = 0.00
    longitude = 0.00

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)    : jsonDoc = json.loads(jsonDoc)
        if 'latitude' in jsonDoc       : self.latitude  = jsonDoc['latitude']
        if 'longitude' in jsonDoc      : self.longitude = jsonDoc['longitude']
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'latitude'  : self.latitude,
            'longitude' : self.longitude
        })

class LoginInfo(Base) :

    userName = ""
    password = ""

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)    : jsonDoc = json.loads(jsonDoc)
        if 'userName' in jsonDoc       : self.userName = jsonDoc['userName']
        if 'password' in jsonDoc       : self.password = jsonDoc['password']
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'userName' : self.userName,
            'password' : self.password
        })

class SecondaryContactInfo(Base) :

    secondaryPhoneNumbers   = []
    secondaryEmailAddresses = []

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)             : jsonDoc = json.loads(jsonDoc)
        if 'secondaryPhoneNumbers' in jsonDoc   : self.secondaryPhoneNumbers   = jsonDoc['secondaryPhoneNumbers']
        if 'secondaryEmailAddresses' in jsonDoc : self.secondaryEmailAddresses = jsonDoc['secondaryEmailAddresses']
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'secondaryPhoneNumbers'   : self.secondaryPhoneNumbers,
            'secondaryEmailAddresses' : self.secondaryEmailAddresses
        })

class OtherInfo(Base) :

    dateOfBirth = ""
    gender      = ""

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())  :
        if isinstance(jsonDoc, str) : jsonDoc = json.loads(jsonDoc)
        if 'dateOfBirth' in jsonDoc : self.dateOfBirth = jsonDoc['dateOfBirth']
        if 'gender' in jsonDoc      : self.gender      = jsonDoc['gender']
        
    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'dateOfBirth' : self.dateOfBirth,
            'gender'      : self.gender
        })
