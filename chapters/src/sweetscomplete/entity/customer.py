# sweetscomplete.entity.customer

class Customer :
    customerKey            = ""
    primary_contact_info   = None
    login_info             = None
    address                = None
    secondary_contact_info = None  
    other_info             = None
    def __init__(self, customerKey, primary_contact_info, login_info, address, secondary_contact_info, other_info) :
        self.customerKey            = customerKey
        self.primary_contact_info   = primary_contact_info
        self.login_info             = login_info
        self.address                = address
        self.secondary_contact_info = secondary_contact_info
        self.other_info             = other_info

class PrimaryContactInfo :
    firstName   = ""
    lastName    = ""
    phoneNumber = ""
    email       = ""
    socialMedia = None
    def __init__(self, firstName, lastName, phoneNumber, email, socialMedia) :
        self.firstName   = firstName
        self.lastName    = lastName
        self.phoneNumber = phoneNumber
        self.email       = email
        self.socialMedia = socialMedia

class Address :
    streetAddressOfBuilding  = ""
    buildingName             = ""
    floor                    = ""
    roomApartmentCondoNumber = ""
    city                     = ""
    stateProvince            = ""
    locality                 = ""
    country                  = ""
    postalCode               = ""
    geo_spatial_info         = None
    def __init__(self, streetAddressOfBuilding, buildingName, floor, roomApartmentCondoNumber, 
                 city, stateProvince, locality, country, postalCode, geo_spatial_info) :
        self.streetAddressOfBuilding  = streetAddressOfBuilding
        self.buildingName             = buildingName
        self.floor                    = floor
        self.roomApartmentCondoNumber = roomApartmentCondoNumber
        self.city                     = city
        self.stateProvince            = stateProvince
        self.locality                 = locality
        self.country                  = country
        self.postalCode               = postalCode
        self.geo_spatial_info         = geo_spatial_info
    
class GeoSpatialInfo :
    latitude  = 0.00
    longitude = 0.00
    def __init__(self, latitude, longitude) :
        self.latitude  = latitude
        self.longitude = longitude

class LoginInfo :
    userName = ""
    password = ""
    def __init__(self, userName, password) :
        self.userName = userName
        self.password = password

class SecondaryContactInfo :
    secondaryPhoneNumbers   = []
    secondaryEmailAddresses = []
    def __init__(self, secondaryPhoneNumbers, secondaryEmailAddresses) :
        self.secondaryPhoneNumbers   = secondaryPhoneNumbers
        self.secondaryEmailAddresses = secondaryEmailAddresses

class OtherInfo :
    dateOfBirth = ""
    gender      = ""
    def __init__(self, dateOfBirth, gender) :
        self.dateOfBirth = dateOfBirth
        self.gender      = gender
