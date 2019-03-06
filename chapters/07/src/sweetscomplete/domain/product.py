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
    Does a database lookup based on "skuNumber"
    Returns a single Product instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param string skuNumber
    @param dict projection
    @return sweetscomplete.entity.product.Product 
    """
    def fetchBySku(self, skuNumber, projection = None) :
        query = dict({ "PrimaryContactInfo.skuNumber" : skuNumber })
        result = self.db.products.find_one(query, projection)
        if result :
            return Product(result)
        else :
            return None

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
    Accepts an product key and dictionary update document as arguments
    Will not modify the "productKey"
    Returns the number of documents affected
    @param string prodKey
    @param dict data
    @return sweetscomplete.entity.product.Product if update successful | False otherwise
    """
    def editOneByProductKey(self, prodKey, data) : 
        # formulate query
        query = dict({"productKey" : prodKey})
        # formulate update document
        values = dict()
        for key, value in data.items() : values[key] = value
        updateDoc = dict({"$set" : values})
        """
        NOTE: we are using "update_one()" which returns a pymongo.results.UpdateResult object
              alternatively we could use "find_one_and_update()" and use the "return_document=ReturnDocument.AFTER" 
              option to get the modified product document
        """
        result = self.db.products.update_one(query, updateDoc)
        return Product(self.db.products.find_one(query)) if (result.modified_count > 0) else False
    
    """
    Updates multiple documents in the "products" collection
    @param dict query
    @param float % increase (e.g. 1.10 = 10% increase)
    @return int number of documents modified
    """
    def editPrice(self, query, percent_increase) :
        doc = {'$mul' : { 'MainProductInfo.price' : percent_increase }}
        result = self.db.products.update_many(query, doc)
        return result.modified_count
