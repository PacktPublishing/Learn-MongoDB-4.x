"""
sweetscomplete.domain.purchase
Description: service class which interacts with the "purchase" collection
"""

from sweetscomplete.domain.base import Base
from sweetscomplete.entity.purchase import Purchase
from bson.objectid import ObjectId

class PurchaseService(Base) :

    """
    Does a database look up based on "purchaseKey"
    Returns a single Purchase instance
    @param string key
    @return sweetscomplete.entity.purchase.Purchase 
    """
    def fetchByKey(self, key) :
        query  = dict({"transactionId" : key})
        result = self.db.purchases.find_one(query)
        if result :
            return Purchase(result)
        else :
            return None

    """
    Does a database lookup based on "query" 
    Returns a single Purchase instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return sweetscomplete.entity.purchase.Purchase 
    """
    def fetchOne(self, query, projection = None) :
        result = self.db.purchases.find_one(query, projection)
        if result :
            return Purchase(result)
        else :
            return None

    """
    Does a database lookup an returns all purchases
    Returns an iteration of Purchase instances populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict projection
    @return generator : iteration of Purchase objects
    """
    def fetchAll(self, projection = None) :
        for doc in self.fetch({}, projection) :
            yield Purchase(doc)

    """
    Returns an iteration of Purchase instances populated only with "purchaseKey" and "MainPurchaseInfo.title" fields
    @return generator : iteration of partially populated Purchase objects
    """
    def fetchAllKeysAndTitles(self) :
        projection = dict({"purchaseKey":1,"MainPurchaseInfo.title":1,"_id":0})
        for doc in self.db.purchases.find(None, projection) :
            yield Purchase(doc)

    """
    Adds a document to the "purchases" collection
    @param sweetscomplete.entity.purchase.Purchase purchaseEntity
    @return ObjectId instance | False if not successful
    """
    def addOne(self, purchaseEntity) :
        result = self.db.purchases.insert_one(purchaseEntity.toDict())
        return result.inserted_id if (isinstance(result.inserted_id, ObjectId)) else False
    
    """
    Adds multiple documents to the "purchases" collection
    @param dict [docs]
    """
    def addMany(self, docs) :
        return self.db.purchases.insert_many(docs)
    
    """
    Deletes a single document from the "purchases" collection
    @param dict query
    """
    def deleteOne(self, query) :
        return self.db.purchases.delete_one(query)

    """
    Deletes multiple documents from the "purchases" collection
    @param dict query
    """
    def deleteAll(self, query) :
        return self.db.purchases.delete_many(query)
