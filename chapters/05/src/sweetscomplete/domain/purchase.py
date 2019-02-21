"""
sweetscomplete.domain.purchase
Description: service class which interacts with the "purchase" collection
"""

from sweetscomplete.domain.base import Base
from sweetscomplete.entity.purchase import Purchase

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
            return Purchase(result, False)
        else :
            return None

    """
    Does a database lookup based on "query" 
    Returns a single Purchase instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return generator : iteration of sweetscomplete.entity.purchase.Purchase objects
    """
    def fetch(self, query, projection = None) :
        for doc in self.db.purchases.find(query, projection) :
            yield Purchase(doc)

    """
    Does a database lookup an returns all purchases
    Returns an iteration of Purchase instances populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict projection
    @return generator : iteration of Purchase objects
    """
    def fetchAll(self, projection = None) :
        for doc in self.db.purchases.find(query, projection) :
            yield Purchase(doc)

    """
    Returns an iteration of Purchase instances populated only with "transactionId", customer name, product title, purchase date
    @return generator : iteration of partially populated Purchase objects
    """
    def fetchAllKeysAndNames(self) :
        projection = dict({
            "transactionId":1,
            "CustomerInfo.PrimaryContactInfo.firstName":1,
            "CustomerInfo.PrimaryContactInfo.lastName":1,
            "MainProductInfo.title":1,
            "PurchaseInfo.dateOfPurchase":1,
            "_id":0})
        for doc in self.db.purchases.find(None, projection) :
            yield Purchase(doc)

    """
    Adds a document to the "purchases" collection
    @param sweetscomplete.entity.purchase purchaseEntity
    """
    def addOne(self, purchaseEntity) :
        # NOTE: pymongo expects iterable objects, not a JSON string!
        return self.db.purchases.insert_one(purchaseEntity.toDict())
    
    """
    Adds multiple documents to the "purchases" collection
    @param dict [docs]
    """
    def addAll(self, docs) :
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

    """
    Updates a single document in the "purchases" collection
    @param dict query
    @param dict doc
    """
    def editOne(self, query, doc) :
        return self.db.purchases.update_one(query)

    """
    Updates multiple documents in the "purchases" collection
    @param dict query
    @param dict [docs]
    """
    def editAll(self, query, docs) :
        return self.db.purchases.update_many(query, docs)

