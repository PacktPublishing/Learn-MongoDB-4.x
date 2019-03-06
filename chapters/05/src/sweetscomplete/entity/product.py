# sweetscomplete.entity.product

from sweetscomplete.entity.base import Base

class Product(Base) :
    fields = dict({
        'productKey'   : '',
        'productPhoto' : '',
        'skuNumber'    : '',
        'category'     : '',
        'title'        : '',
        'description'  : '',
        'price'        : 0.00,
        'unit'         : '',
        'costPerUnit'  : 0.00,
        'unitsOnHand'  : 0.00
    })
    def getKey(self) :
        return self['productKey']
    def setKey(self, key) :
        self['productKey'] = key
    def getTitle(self) :
        return self['title']
