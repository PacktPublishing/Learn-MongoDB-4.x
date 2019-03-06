# sweetscomplete.entity.purchase

import json
import sweetscomplete.entity.customer as cust
import sweetscomplete.entity.product as prod
from sweetscomplete.entity.base import Base

class Purchase(Base) :

    transactionId      = ''
    dateOfPurchase     = ''
    extendedPrice      = 0.00
    CustomerInfo       = None
    productsPurchased  = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())  :
        if isinstance(jsonDoc, str)       : jsonDoc = json.loads(jsonDoc)
        self.extendedPrice = 0.00
        if 'transactionId' in jsonDoc     : self.transactionId  = jsonDoc['transactionId']
        if 'dateOfPurchase' in jsonDoc    : self.dateOfPurchase = jsonDoc['dateOfPurchase']
        if 'CustomerInfo' in jsonDoc      : self.CustomerInfo   = CustomerInfo(jsonDoc['CustomerInfo'])
        if 'productsPurchased' in jsonDoc : 
            self.productsPurchased = []
            for item in jsonDoc['productsPurchased'] :
                prodPurchase = ProdsPurchased(item)
                self.productsPurchased.append(prodPurchase)
                self.extendedPrice += prodPurchase.qtyPurchased * prodPurchase.MainProductInfo.price

    # produces a dictionary from the current state of the object
    def toDict(self) :
        unwindProdsPurch = []
        for item in self.productsPurchased :
            unwindProdsPurch.append(item.toDict())
        return dict({
            'transactionId'     : self.transactionId,
            'dateOfPurchase'    : self.dateOfPurchase,
            'extendedPrice'     : self.extendedPrice,
            'CustomerInfo'      : self.CustomerInfo.toDict(),
            'productsPurchased' : unwindProdsPurch
        })

class CustomerInfo(Base) :

    customerKey        = ''
    PrimaryContactInfo = None
    Address            = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())   :
        if isinstance(jsonDoc, str)        : jsonDoc = json.loads(jsonDoc)
        if 'customerKey' in jsonDoc        : self.customerKey        = jsonDoc['customerKey']
        if 'PrimaryContactInfo' in jsonDoc : self.PrimaryContactInfo = cust.PrimaryContactInfo(jsonDoc['PrimaryContactInfo'])
        if 'Address' in jsonDoc            : self.Address            = cust.Address(jsonDoc['Address'])

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'customerKey'        : self.customerKey,
            'PrimaryContactInfo' : self.PrimaryContactInfo.toDict(),
            'Address'            : self.Address.toDict()
        })

class ProdsPurchased(Base) :

    productKey      = ''
    qtyPurchased    = 0.00
    MainProductInfo = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)      : jsonDoc = json.loads(jsonDoc)
        if 'productKey' in jsonDoc       : self.productKey      = jsonDoc['productKey']
        if 'qtyPurchased' in jsonDoc     : self.qtyPurchased    = jsonDoc['qtyPurchased']
        if 'MainProductInfo' in jsonDoc  : self.MainProductInfo = prod.MainProductInfo(jsonDoc['MainProductInfo'])

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'productKey'      : self.productKey,
            'qtyPurchased'    : self.qtyPurchased,
            'MainProductInfo' : self.MainProductInfo.toDict()
        })
