# sweetscomplete.entity.customer.Customer test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import sweetscomplete.entity.customer as cust

# Testing Customer
socialMedia = { "FB" : "https://facebook.com/fred.flintstone", "LI" : "https://linkedin.com/fflintstone" }
primary     = cust.PrimaryContactInfo("Fred","Flintstone","+1-222-333-4444","fred@slate.com",socialMedia)
login       = cust.LoginInfo("fflintstone","BCRYPT hashed password")
geo         = cust.GeoSpatialInfo(111.11,222.22)
address     = cust.Address("123 Rocky Way","House",None,None,"Bedrock","MI",None,"Prehistoric","00000",geo)
secondary   = cust.SecondaryContactInfo(["+1-333-444-5555"],["freddy@flintstone.com","ace@bowling.com"])
other       = cust.OtherInfo("0000-00-00", "M")
customer    = cust.Customer("12223334444",primary,login,address,secondary,other)

# Output
print(vars(customer))
print(vars(customer.PrimaryContactInfo))
print(vars(customer.LoginInfo))
print(vars(customer.Address))
print(vars(customer.Address.GeoSpatialInfo))
print(vars(customer.SecondaryContactInfo))
print(vars(customer.OtherInfo))

