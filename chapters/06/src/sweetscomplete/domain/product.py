"""
sweetscomplete.domain.product
Description: service class which interacts with the "product" collection
"""

from sweetscomplete.domain.base import Base
from sweetscomplete.entity.product import Product

class ProductService(Base) :

    keysAndTitles = dict()
    
    """
    Does a database look up based on "productKey"
    Returns a single Product instance
    @param string key
    @return sweetscomplete.entity.product.Product 
    """
    def fetchByKey(self, key) :
        query  = dict({"productKey" : key})
        return self.db.products.find_one(query)

    """
    Does a database lookup based on "skuNumber"
    Returns a single Product instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param string skuNumber
    @param dict projection
    @return sweetscomplete.entity.product.Product 
    """
    def fetchBySku(self, skuNumber, projection = None) :
        query = dict({ "skuNumber" : skuNumber })
        return self.db.products.find_one(query, projection)

    """
    Returns an iteration of Product instances populated only with "productKey" and "title" fields
    @param int skip : how many documents to skip before starting to yield results
    @param int limit : the number of values to return
    @return generator : iteration of partially populated Product objects
    """
    def fetchAllKeysAndTitles(self, skip = 0, limit = 0) :
        projection = dict({"productKey":1,"title":1,"_id":0})
        for doc in self.db.products.find(None, projection, skip, limit) :
            yield doc

    """
    Returns a list of product keys
    @return list : product keys
    """
    def fetchKeys(self) :
        result = dict()
        projection = dict({"productKey":1,"_id":0})
        for doc in self.db.products.find(None, projection) :
            result[doc.getKey()] = doc.getKey()
        return result

    """
    Returns a list of Product instances populated only with "productKey", "title" and "price" fields
    @param int skip : how many documents to skip before starting to yield results
    @param int limit : the number of values to return
    @return list : list of partially populated Product objects
    """
    def fetchAllKeysTitlesPricesForAjax(self, skip = 0, limit = 0) :
        projection = dict({"productKey":1,"title":1,"price":1,"_id":0})
        result = []
        for doc in self.db.products.find(None, projection, skip, limit) :
            result.append(doc)
        return result

    """
    Returns a list of Product instances populated only with "productKey", "category", "title" and "price" fields
    @param int skip : how many documents to skip before starting to yield results
    @param int limit : the number of values to return
    @return list : list of partially populated Product objects
    """
    def fetchAllKeyCategoryTitlePriceForRest(self, skip = 0, limit = 0) :
        projection = dict({"productKey":1,"category":1,"title":1,"price":1,"_id":0})
        result = dict({})
        for doc in self.db.products.find(None, projection, skip, limit) :
            result[doc.getKey()] = doc
        return result

    """
    Returns a single Product instance populated only with "productKey", "category", "title" and "price" fields
    @param string prod_key : product key
    @return Product : one partially populated Product object
    """
    def fetchOneKeyCategoryTitlePriceForRest(self, prod_key) :
        query      = dict({"productKey":prod_key})
        projection = dict({"productKey":1,"category":1,"title":1,"price":1,"_id":0})
        doc        = self.db.products.find_one(query, projection)
        result     = { doc.getKey() : doc }
        return result

    """
    Stores product keys and titles in a dictionary for repeated use
    @return dict self.keysAndTitles: a dictionary of partially populated Product objects
    """
    def fetchAllKeysAndTitlesForSelect(self) :
        if not self.keysAndTitles :
            projection = dict({"productKey":1,"title":1,"price":1,"_id":0})
            for doc in self.db.products.find(None, projection) :
                self.keysAndTitles[doc.getKey()] = doc.get('title')
                self.keysAndTitles[doc.getKey()] += ' [ $' + str(doc.get('price')) + ' ]'
        return self.keysAndTitles
        
    """
    Adds a document to the "products" collection
    @param sweetscomplete.entity.product productEntity
    """
    def addOne(self, productEntity) :
        return self.db.products.insert_one(productEntity)
    
    """
    Adds multiple documents to the "products" collection
    @param dict doc
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
    def editOneByKey(self, prodKey, data) : 
        # formulate query
        query = dict({"productKey" : prodKey})
        updateDoc = dict({"$set" : data})
        """
        NOTE: we are using "update_one()" which returns a pymongo.results.UpdateResult object
              alternatively we could use "find_one_and_update()" and use the "return_document=ReturnDocument.AFTER" 
              option to get the modified product document
        """
        result = self.db.products.update_one(query, updateDoc)
        return self.db.products.find_one(query) if (result.modified_count > 0) else False
    
    """
    Updates multiple documents in the "products" collection
    @param dict query
    @param float % increase (e.g. 1.10 = 10% increase)
    @return int number of documents modified
    """
    def editPrice(self, query, percent_increase) :
        doc = {'$mul' : { 'price' : percent_increase }}
        result = self.db.products.update_many(query, doc)
        return result.modified_count
