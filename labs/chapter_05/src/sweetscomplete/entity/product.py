# sweetscomplete/entity/product

import json
from sweetscomplete.entity.base import Base

class Product(Base) :

    productKey      = ""
    productPhoto    = ""
    MainProductInfo = None
    InventoryInfo   = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())  :
        if isinstance(jsonDoc, str)     : jsonDoc = json.loads(jsonDoc)
        if 'productKey' in jsonDoc      : self.productKey = jsonDoc['productKey']
        if 'productPhoto' in jsonDoc    : self.productPhoto = jsonDoc['productPhoto']
        if 'MainProductInfo' in jsonDoc : self.MainProductInfo = MainProductInfo(jsonDoc['MainProductInfo'])
        if 'InventoryInfo' in jsonDoc   : self.InventoryInfo = InventoryInfo(jsonDoc['InventoryInfo'])

    # produces a dictionary from the current state of the object
    def toDict(self) :
        result = dict()
        if self.productKey      : result['productKey'] = self.productKey
        if self.productPhoto    : result['productPhoto'] = self.productPhoto
        if self.MainProductInfo : result['MainProductInfo'] = self.MainProductInfo.toDict()
        if self.InventoryInfo   : result['InventoryInfo'] = self.InventoryInfo.toDict()
        return result    
    
class MainProductInfo(Base) :

    skuNumber    = 0
    category     = ""
    title        = ""
    description  = ""
    price        = 0.00

    """
    Creates an instance of sweetscomplete.entity.product.MainProductInfo
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)    : jsonDoc = json.loads(jsonDoc)
        if 'skuNumber' in jsonDoc      : self.skuNumber = jsonDoc['skuNumber']
        if 'category' in jsonDoc       : self.category = jsonDoc['category']
        if 'title' in jsonDoc          : self.title = jsonDoc['title']
        if 'description' in jsonDoc    : self.description = jsonDoc['description']
        if 'price' in jsonDoc          : self.price = jsonDoc['price']

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'skuNumber'   : self.skuNumber,
            'category'    : self.category,
            'title'       : self.title,
            'description' : self.description,
            'price'       : self.price
        })


class InventoryInfo(Base) :

    unit        = ""
    costPerUnit = 0.00
    unitsOnHand = 0.00

    """
    Creates an instance of sweetscomplete.entity.product.InventoryInfo
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)    : jsonDoc = json.loads(jsonDoc)
        if 'unit' in jsonDoc           : self.unit = jsonDoc['unit']
        if 'costPerUnit' in jsonDoc    : self.costPerUnit = jsonDoc['costPerUnit']
        if 'unitsOnHand' in jsonDoc    : self.unitsOnHand = jsonDoc['unitsOnHand']

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'unit'        : self.unit,
            'costPerUnit' : self.costPerUnit,
            'unitsOnHand' : self.unitsOnHand
        })
