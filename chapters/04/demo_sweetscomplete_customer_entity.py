# sweetscomplete.entity.customer.Customer test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath('src'))

from sweetscomplete.entity.customer import Customer

# Testing Customer
doc = dict({
    'customerKey'             : '00000000',
    'firstName'               : 'Fred',
    'lastName'                : 'Flintstone',
    'phoneNumber'             : '+1-222-333-4444',
    'email'                   : 'fred@slate.com',
    'socialMedia'             : {'FB':'https://facebook.com/fred.flintstone','LI':'https://linkedin.com/fflintstone'},
    'streetAddressOfBuilding' : '123 Rocky Way',
    'buildingName'            : 'House',
    'city'                    : 'Bedrock',
    'stateProvince'           : 'ZZ',
    'locality'                : 'Pre Historic',
    'country'                 : 'ZZ',
    'postalCode'              : '00000',
    'latitude'                : 11.1111,
    'longitude'               : -11.1111,
    'userName'                : 'freddy',
    'password'                : '12345',
    'secondaryPhoneNumbers'   : ['+1-333-444-5555'],
    'secondaryEmailAddresses' : ['freddy@flintstone.com','ace@bowling.com'],
    'dateOfBirth'             : '0000-00-00',
    'gender'                  : 'M'
})

"""
# test blank product entity
customer = Customer(True)
print("\nBlank Customer Entity")
print('Name: '  + customer.getFullName())
print('Email: ' + customer.get('email'))
print(customer.toJson())
"""

# test purchase entity initialized from dictionary
customer = Customer(doc)
print("\nCustomer Entity Initialized from Dictionary")
print('Name: '  + customer.getFullName())
print('Email: ' + customer.get('email'))
print(customer.toJson())
