# sweetscomplete.entity.common.Common test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/repo/chapters/07/src"))

from booksomeplace.entity.base import Name

# Testing Name
params = {
    "title"  : 'Mr',
    "first"  : 'Fred',
    "middle" : 'Folsom',
    "last"   : 'Flintstone',
    "suffix" : 'CM'
}

# Create instance
name = Name(params)

# Output
import pprint
print("\nObject\n")
pprint.pprint(name)

print("\nJSON\n")
print(name.toJson())
