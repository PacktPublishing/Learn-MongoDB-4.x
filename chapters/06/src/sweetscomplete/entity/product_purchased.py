# sweetscomplete.entity.product_purchased

from sweetscomplete.entity.base import Base

class ProductPurchased(Base) :
    fields = dict({
    	'productKey'   : '',
        'qtyPurchased' : 0,
        'skuNumber'    : '',
        'category'     : '',
        'title'        : '',
        'price'        : 0.00
    })
    def getKey(self) :
        return self['productKey']
    def setKey(self, key) :
        self['productKey'] = key

