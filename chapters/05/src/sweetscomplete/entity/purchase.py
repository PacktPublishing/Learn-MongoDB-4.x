# sweetscomplete.entity.purchase

import json
import sweetscomplete.entity.customer as cust
import sweetscomplete.entity.product as prod
from sweetscomplete.entity.base import Base

class Purchase(Base) :

    transactionId   = ""
    CustomerInfo    = None
    MainProductInfo = None
    PurchaseInfo    = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict()) :
        if isinstance(jsonDoc, str)      : jsonDoc = json.loads(jsonDoc)
        if 'transactionId' in jsonDoc    : self.transactionId   = jsonDoc['transactionId']
        if 'CustomerInfo' in jsonDoc     : self.CustomerInfo    = CustomerInfo(jsonDoc['CustomerInfo'])
        if 'MainProductInfo' in jsonDoc  : self.MainProductInfo = prod.MainProductInfo(jsonDoc['MainProductInfo'])
        if 'PurchaseInfo' in jsonDoc     : self.PurchaseInfo    = PurchaseInfo(jsonDoc['PurchaseInfo'])

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'transactionId'   : self.transactionId,
            'CustomerInfo'    : self.CustomerInfo.toDict(),
            'MainProductInfo' : self.MainProductInfo.toDict(),
            'PurchaseInfo'    : self.PurchaseInfo.toDict()
        })

class CustomerInfo(Base) :

    PrimaryContactInfo = None
    Address            = None

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())   :
        if isinstance(jsonDoc, str)        : jsonDoc = json.loads(jsonDoc)
        if 'PrimaryContactInfo' in jsonDoc : self.PrimaryContactInfo = cust.PrimaryContactInfo(jsonDoc['PrimaryContactInfo'])
        if 'Address' in jsonDoc            : self.Address            = cust.Address(jsonDoc['Address'])

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'PrimaryContactInfo' : self.PrimaryContactInfo.toDict(),
            'Address'            : self.Address.toDict()
        })

class PurchaseInfo(Base) :

    dateOfPurchase    = ""
    quantityPurchased = 0
    extendedPrice     = 0.00

    """
    Creates an instance of sweetscomplete.entity.product.Product
    Argument can be either of type 'dict' or a JSON string
    @param dict | string jsonDoc
    """
    def __init__(self, jsonDoc = dict())  :
        if isinstance(jsonDoc, str)       : jsonDoc = json.loads(jsonDoc)
        if 'dateOfPurchase' in jsonDoc    : self.dateOfPurchase    = jsonDoc['dateOfPurchase']
        if 'quantityPurchased' in jsonDoc : self.quantityPurchased = jsonDoc['quantityPurchased']
        if 'extendedPrice' in jsonDoc     : self.extendedPrice     = jsonDoc['extendedPrice']

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'dateOfPurchase'    : self.dateOfPurchase,
            'quantityPurchased' : self.quantityPurchased,
            'extendedPrice'     : self.extendedPrice
        })
