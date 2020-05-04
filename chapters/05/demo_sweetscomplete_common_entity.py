# sweetscomplete.entity.common.Common test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

from sweetscomplete.entity.common import Common

# Testing Common
jsonDoc = '{"key":"gender","data":{"M":"male","F":"female","O":"Other"}}'
common  = Common(jsonDoc)

# Output
print("\nObject\n")
print(vars(common))

print("\nJSON\n")
print(common.toJson())
