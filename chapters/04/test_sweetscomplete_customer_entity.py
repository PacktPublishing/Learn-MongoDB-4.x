# sweetscomplete.entity.customer.Customer test

# include config file
import config.config
config.config.set_include_path("../src", True)

import sweetscomplete.entity.customer

# Testing Customer
socialMedia = { "FB" : "https://facebook.com/fred.flintstone", "LI" : "https://linkedin.com/fflintstone" }
primary     = sweetscomplete.entity.customer.PrimaryContactInfo("Fred","Flintstone","+1-222-333-4444","fred@slate.com",socialMedia)
login       = sweetscomplete.entity.customer.LoginInfo("fflintstone","BCRYPT hashed password")
geo         = sweetscomplete.entity.customer.GeoSpatialInfo(111.11,222.22)
address     = sweetscomplete.entity.customer.Address("123 Rocky Way","House",None,None,"Bedrock","MI",None,"Prehistoric","00000",geo)
secondary   = sweetscomplete.entity.customer.SecondaryContactInfo(["+1-333-444-5555"],["freddy@flintstone.com","ace@bowling.com"])
other       = sweetscomplete.entity.customer.OtherInfo("0000-00-00", "M")
customer    = sweetscomplete.entity.customer.Customer("12223334444",primary,login,address,secondary,other)
print(vars(customer))
print(vars(customer.primary_contact_info))
print(vars(customer.login_info))
print(vars(customer.address))
print(vars(customer.address.geo_spatial_info))
print(vars(customer.secondary_contact_info))
print(vars(customer.other_info))

