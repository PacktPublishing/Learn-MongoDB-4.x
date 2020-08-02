// Document Structures for BigLittle Micro Finance Ltd.
// NOTE: you can't run this code!  These are for reference only.

// Sub Class Definitions

Name = {
    "title"    : Common::title,
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
    "locality1"       : <state/province/country/etc.>,
    "locality2"       : <other local identifying information>,
    "country"         : <ISO2 country code>,
    "postalCode"      : <postal code>,
    "geoSpatial"      : [<longitude>,<latitude>]
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

// formula:
// Monthly payment amount = P * ((r(1+r)^n)/((1+r)^n-1))
// P == principal
// n == number of months
// r == rate
Payment = {
    "amountDue"  : <NumberDecimal>,
    "amountPaid" : <NumberDecimal>,
    "dueDate"    : <Date>,
    "recvDate"   : <Date>,
    "status"     : Common::payStatus
}

// principal     : amount is in stated currency
// numPayments   : months
// annualRate    : annual interest rate percent
// effectiveRate : effective monthly rate (annualRate / 100 / 12)
// monthlyPymt   : monthly payment
// Formula:
//     monthlyPymt = principal * ( effectiveRate / (1 - (1 + effectiveRate)**-numPayments))
// Interest-only, "variable" rate, and balloon payment loans not supported
LoanInfo = {
    "principal"     : <NumberDecimal>,
    "numPayments"   : <int>,
    "annualRate"    : <NumberDecimal>,
    "effectiveRate" : <NumberDecimal>,
    "currency"      : Common::currency,
    "monthlyPymt"   : <NumberDecimal>
}

// Collection Definitions

User = {
    "userKey"      : <string>,
    "userType"     : Common::userType,
    "amountDue"    : <NumberDecimal>,
    "amountPaid"   : <NumberDecimal>,
    "name"         : <Name>,
    "address"      : <Location>,
    "contact"      : <Contact>,
    "login"        : <LoginInfo>,
    "otherContact" : <OtherContact>,
    "otherInfo"    : <OtherInfo>,
    "businessName" : <string>
}

Loan = {
    "loanKey"        : <string>,
    "borrowerKey"    : <string>,
    "lenderKey"      : <string>,
    "loanInfo"       : <LoanInfo>,
    "overpayment"    : <NumberDecimal>,
    "payments"       : [<Payment>,<Payment>,etc.]
}

Common = [
    { "title"        : ["Mr","Ms","Dr",etc.] },
    { "userType"     : ["borrower","lender"] },
    { "phoneType"    : ["home", "work", "mobile", "fax"] },
    { "socMediaType" : ["google","twitter","facebook","skype","line" etc.] },
    { "genderType"   : [{"M" : "Male"},{"F" : "Female"},{"X" : "Other"}] },
    { "currency"     : ["AUD","CAD","EUR","GBP","INR","NZD","SGD","USD"] },
    { "payStatus"    : ["scheduled","received","overdue"] },
]
