# sweetscomplete.entity.customer.Customer test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import sweetscomplete.entity.customer as cust

# Testing Customer
jsonDoc  = '{"customerKey": "81_100_216_1524","PrimaryContactInfo": {"firstName": "Chad","lastName": "Bryant","phoneNumber": "+81-100-216-1524","email": "cbryant@Telkom.com","socialMedia": {"GO": {"label": "google","url": "https:\/\/google.com\/cbryant"},"LN": {"label": "line","url": "https:\/\/line.com\/cbryant"}}},"LoginInfo": {"userName": "cbryant","password": "$2y$10$0hNtObXWHbEhxMMb4rcxdOVQuLXok5H9XWbgoDDOV8PpdkLjaahvK"},"Address": {"streetAddressOfBuilding": "8877 Green Hill Drive","buildingName": null,"floor": null,"roomApartmentCondoNumber": null,"city": "Shigacho","stateProvince": "Misato Machi","locality": "Toda Gun","country": "JP","postalCode": "987-0014","GeoSpatialInfo": {"latitude": "38.5348","longitude": "141.0346"}},"SecondaryContactInfo": {"secondaryPhoneNumbers": ["+81-682-472-0994","+81-634-737-4992"],"secondaryEmailAddresses": ["cbryant@Telekom.net"]},"OtherInfo": {"dateOfBirth": "1962-10-29","gender": "M"}}'
customer = cust.Customer(jsonDoc)

# Output
print("\nObject\n")
print(vars(customer))
print(vars(customer.PrimaryContactInfo))
print(vars(customer.LoginInfo))
print(vars(customer.Address))
print(vars(customer.Address.GeoSpatialInfo))
print(vars(customer.SecondaryContactInfo))
print(vars(customer.OtherInfo))

print("\nJSON\n")
print(customer.toJson())
