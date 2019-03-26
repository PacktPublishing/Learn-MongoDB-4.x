# sweetscomplete.entity.product.Product test

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath('src'))

import pprint
from sweetscomplete.entity.common import Common

# Testing Common
keys = [
    Common({'key':'gender', 'data':{ 'M' : 'male', 'F' : 'female', 'O' : 'Other' }}),
    Common({'key':'socialMedia', 'data':{'FB':'facebook', 'GO':'google', 'LI':'linkedin', 'LN':'line', 'SK':'skype', 'TW':'twitter'}}),
    Common({'key':'categories', 'data':['cake','chocolate','pie','cookie','donut']}),
    Common({'key':'unit', 'data':['box','tin','piece','item']})
];

for item in keys :
    print('Key: ' + item.getKey() + "\nValue: ")
    pprint.pprint(item.getData())
