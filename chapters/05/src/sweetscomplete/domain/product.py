"""
sweetscomplete.domain.product
Description: service class which interacts with the "product" collection
"""

from sweetscomplete.domain.base import Base
from sweetscomplete.entity.product import Product

class ProductService(Base) :

    """
    Does a database look up based on "productKey"
    Returns a single Product instance
    @param string key
    @return sweetscomplete.entity.product.Product 
    """
    def fetchByKey(self, key) :
        query  = dict({"productKey" : key})
        result = self.db.products.find_one(query)
        if result :
            return Product(result)
        else :
            return None

    """
    Does a database lookup based on "query" 
    Returns a single Product instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return sweetscomplete.entity.product.Product 
    """
    def fetchOne(self, query, projection = None) :
        result = self.db.products.find_one(query, projection)
        if result :
            return Product(result, False)
        else :
            return None

    """
    Does a database lookup based on "query" 
    Returns a single Product instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return generator : iteration of sweetscomplete.entity.product.Product objects
    """
    def fetch(self, query, projection = None) :
        for doc in self.db.products.find(query, projection) :
            yield Product(doc)

    """
    Does a database lookup an returns all products
    Returns an iteration of Product instances populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict projection
    @return generator : iteration of Product objects
    """
    def fetchAll(self, projection = None) :
        for doc in self.db.products.find(query, projection) :
            yield Product(doc)

    """
    Returns an iteration of Product instances populated only with "productKey" and "MainProductInfo.title" fields
    @return generator : iteration of partially populated Product objects
    """
    def fetchAllKeysAndTitles(self) :
        projection = dict({"productKey":1,"MainProductInfo.title":1,"_id":0})
        for doc in self.db.products.find(None, projection) :
            yield Product(doc)

    """
    Adds a document to the "products" collection
    @param sweetscomplete.entity.product productEntity
    """
    def addOne(self, productEntity) :
        # NOTE: pymongo expects iterable objects, not a JSON string!
        return self.db.products.insert_one(productEntity.toDict())
    
    """
    Adds multiple documents to the "products" collection
    @param dict [docs]
    """
    def addAll(self, docs) :
        return self.db.products.insert_many(docs)
    
    """
    Deletes a single document from the "products" collection
    @param dict query
    """
    def deleteOne(self, query) :
        return self.db.products.delete_one(query)

    """
    Deletes multiple documents from the "products" collection
    @param dict query
    """
    def deleteAll(self, query) :
        return self.db.products.delete_many(query)

    """
    Updates a single document in the "products" collection
    @param dict query
    @param dict doc
    """
    def editOne(self, query, doc) :
        return self.db.products.update_one(query)

    """
    Updates multiple documents in the "products" collection
    @param dict query
    @param dict [docs]
    """
    def editAll(self, query, docs) :
        return self.db.products.update_many(query, docs)

