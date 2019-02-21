customer = 
{
    "customerKey"              : "phone number without special characters",
    "PrimaryContactInfo": {
        "firstName"                : "customer given name",
        "lastName"                 : "customer surname",
        "phoneNumber"              : "phone number in international format",
        "email"                    : "email address",
        "socialMedia"              : "array of entries for Facebook, Twitter, etc.",
    },
    "LoginInfo": {
        "userName"                 : "login name",
        "password"                 : "password hashed using BCRYPT"
    },
    "Address": {
        "streetAddressOfBuilding"  : "street number and name",
        "buildingName"             : "name of building if applicable",
        "floor"                    : "number of floor if applicable",
        "roomApartmentCondoNumber" : "apartment, room or condo number if applicable",
        "city"                     : "city",
        "stateProvince"            : "state or province",
        "locality"                 : "local geographical identifier, e.g. county",
        "country"                  : "ISO2 country code",
        "postalCode"               : "postal code",
        "GeoSpatialInfo": {
            "latitude"             : "ISO 6709 representation for latitude",
            "longitude"            : "ISO 6709 representation for longitude"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers"    : "array of phone numbers in international format",
        "secondaryEmailAddresses"  : "array of email addresses"
    },
    "OtherInfo": {
        "dateOfBirth"              : "YYYY-MM-DD format",
        "gender"                   : "Male, Female, Other"
    }
}
