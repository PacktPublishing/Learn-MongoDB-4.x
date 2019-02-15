# sweetscomplete.entity.product.Product test

# include config file
import config.config
config.config.set_include_path("../src", True)

import sweetscomplete.entity.common as c

# Testing Common
keys = [
    c.Common("gender", dict({ "M" : "male", "F" : "female", "O" : "Other" })),
    c.Common("socialMedia", dict({"FB":"facebook", "GO":"google", "LI":"linkedin", "LN":"line", "SK":"skype", "TW":"twitter"})),
    c.Common("categories", ["cake","chocolate","pie","cookie","donut"]),
    c.Common("unit", ["box","tin","piece","item"])
];

for value in keys :
    print(vars(value))
