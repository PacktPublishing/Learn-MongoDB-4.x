// NOTE: you can't run this code!  These are for reference only.

// Sub Class Definitions

Name = {
    "title"    : <formal titles, e.g. Mr, Ms, Dr, etc.>,
    "first"    : <first name, also referred to as "given" name>,
    "middle"   : <middle name, optional>,
    "last"     : <last name, also referred to as "surname" or "family name">,
    "suffix"   : <any additional name information included after the last name>
}

Location = {
    "streetAddress"   : <number and name of street>,
    "buildingName"    : <name of building>,
    "floor"           : <number of name of the floor>,
    "roomAptCondoFlat": <room/apt/condo/flat number>,
    "city"            : <city name>,
    "stateProvince"   : <state or province>,
    "locality"        : <other local identifying information>,
    "country"         : <ISO2 country code>,
    "postalCode"      : <postal code>,
    "latitude"        : <latitude>,
    "longitude"       : <longitude>
}

Contact = {
    "email"    : <primary email address>,
    "phone"    : <primary phone number>,
    "socMedia" : <preferred social media contact>,
}

OtherContact = {
    "emails"       : [email_address2, email_address3, etc.],
    "phoneNumbers" : [{<phoneType> : phone2}, {<phoneType> : phone3}, etc.],
    "socMedias"    : [{<socMediaType> : URL2}, {<socMediaType> : URL2}, etc. ]
}

OtherInfo = {
    "gender"      : <genderType>,
    "dateOfBirth" : <yyyy-mm-dd>
}

LoginInfo = {
    "username" : <name used to login>,
    "oauth2"   : <OAUTH2 login credentials>,
    "password" : <BCRYPT password>
}

PropInfo = {
    "type"        : <propertyType>,
    "chain"       : <chain>,
    "photos"      : <stored using GridFS>,
    "facilities"  : [<facilityType>,<facilityType>,etc.],
    "description" : <string>,
    "currency"    : <currencyType>,
    "taxFee"      : <float>
}

Review = {
    "customerKey" : <string>,
    "staff"       : <int 1 to 5>,
    "cleanliness" : <int 1 to 5>,
    "facilities"  : <int 1 to 5>,
    "comfort"     : <int 1 to 5>,
    "goodStuff"   : <text>,
    "badStuff"    : <text>
}

RoomType = {
    "roomTypeKey"  : <string>,
    "type"         : <roomType>,
    "view"         : <string>,
    "description"  : <string>,
    "beds"         : [<bedType>,<bedType>,etc.],
    "numAvailable" : <int>,
    "numBooked"    : <int>,
    "price"        : <float>
}

BookingInfo = {
    "arrivalDate"       : <yyyy-mm-dd hh:mm>,
    "departureDate"     : <yyyy-mm-dd hh:mm>,
    "checkoutTime"      : <hh:mm>,
    "refundableUntil"   : <yyyy-mm-dd hh:mm>,
    "reservationStatus" : <rsvStatus>,
    "paymentStatus"     : <payStatus>,
}

CustParty = {
    "name"  : <Name>,
    "other" : <OtherInfo>
}

CustBooking = {
    "customerKey"     : <string>,
    "customerName"    : <Name>,
    "customerAddr"    : <Location>,
    "customerContact" : <Contact>,
    "custParty"       : [<CustParty>,<CustParty>,etc.]
}

PropBooking = {
    "propertyKey"     : <string>,
    "propertyName"    : <string>,
    "propertyAddr"    : <Location>
    "propertyContact" : <Contact>
}

RoomBooking = {
    "roomType"    : <string>,
    "roomTypeKey" : <string>,
    "price"       : <float>,
    "qty"         : <int>
}


// Collection Definitions

Customer = {
    "customerKey"  : <string>,
    "name"         : <Name>,
    "address"      : <Location>,
    "contact"      : <Contact>,
    "otherContact" : <OtherContact>,
    "otherInfo"    : <OtherInfo>,
    "login"        : <LoginInfo>,
    "totalBooked"  : 0,
    "discount"     : 0
}

Partner = {
    "partnerKey"   : <string>,
    "businessName" : <string>,
    "revenueSplit" : <float>,
    "acctBalance"  : <float>,
    "name"         : <Name>,
    "address"      : <Location>,
    "contact"      : <Contact>,
    "otherContact" : <OtherContact>,
    "otherInfo"    : <OtherInfo>,
    "login"        : <LoginInfo>
}

Property = {
    "propertyKey" : <string>,
    "partnerKey"  : <string>,
    "propName"    : <name of this property>,
    "propInfo"    : <PropInfo>,
    "address"     : <Location>,
    "contactName" : <Name>,
    "contactInfo" : <Contact>,
    "rooms"       : [<RoomType>,<RoomType>,etc.],
    "reviews"     : [<Review>,<Review>,etc.],
    "rating"      : <int>,
    "totalBooked" : <int>
}

Booking = {
    "bookingKey"   : <string>,
    "customer"     : <CustBooking>,
    "property"     : <PropBooking>,
    "bookingInfo"  : <BookingInfo>,
    "rooms"        : [<RoomBooking>,<RoomBooking>,etc.],
    "totalPrice"   : <float>
}

Common = [
    { "title"        : ['Mr','Ms','Dr',etc.] }
    { "phoneType"    : ['home', 'work', 'mobile', 'fax'] },
    { "socMediaType" : ['google','twitter','facebook','skype','line' etc.] },
    { "genderType"   : [{'M' : 'Male'},{'F' : 'Female'},{'X' : 'Other'}] },
    { "propertyType" : ['hotel','motel','inn','guest house','hostel','resort',etc.] },
    { "facilityType" : ['outdoor pool','indoor pool','free parking','WiFi',etc.],
    { "chain"        : ['Accor','Hyatt','Hilton',etc.] },
    { "roomType"     : ['premium','standard','poolside',etc.] },
    { "bedType"      : ['single','double','single','double','queen','king'] },
    { "rsvStatus"    : ['pending','confirmed','cancelled'] },
    { "payStatus"    : ['pending','confirmed','refunded'] },
    { "currency"     : ['AUD','CAD','EUR','GBP','INR','NZD','SGD','USD'] },
]

Translation = [
    { 'en' : [
        { 'Mr' : 'Mr' },
        { 'Ms' : 'Ms' },
        { 'Dr' : 'Dr' },
        { 'home' : 'home' },
        { 'work' : 'work' },
        { 'mobile' : 'mobile' },
        { 'fax' : 'fax' },
        { 'M'  : 'Male' },
        { 'F' : 'Female'},
        { 'X' : 'Other' },
        { 'hotel' : 'hotel' },
        { 'motel' : 'motel' },
        { 'inn' : 'inn' },
        { 'guest house' : 'guest house' },
        { 'hostel' : 'hostel' },
        { 'resort' : 'resort' },
        { 'outdoor pool' : 'outdoor pool' },
        { 'indoor pool' : 'indoor pool' },
        { 'free parking' : 'free parking' },
        { 'WiFi': 'WiFi' },
        { 'premium' : 'premium' },
        { 'standard' : 'standard' },
        { 'poolside' : 'poolside' },
        { 'single' : 'single' },
        { 'double' : 'double' },
        { 'queen' : 'queen' },
        { 'king' : 'king' },
        { 'pending' : 'pending' },
        { 'confirmed' : 'confirmed' },
        { 'cancelled' : 'cancelled' },
        { 'refunded' : 'refunded' }
        ]
    }
]
