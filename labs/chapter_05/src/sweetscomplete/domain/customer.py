"""
sweetscomplete.domain.customer
Description: service class which interacts with the "customer" collection
"""

from sweetscomplete.domain.base import Base
from sweetscomplete.entity.customer import Customer

class CustomerService(Base) :

    """
    Does a database look up based on "customerKey"
    Returns a single Customer instance
    @param string key
    @return sweetscomplete.entity.customer.Customer 
    """
    def fetchByKey(self, key) :
        query  = dict({"customerKey" : key})
        return self.db.customers.find_one(query)

    """
    Does a database look up based on "email"
    Returns a single Customer instance
    @param string key
    @return sweetscomplete.entity.customer.Customer 
    """
    def fetchByEmail(self, email) :
        query  = dict({"email" : email})
        result = self.db.customers.find_one(query)
        return result if isinstance(result, Customer) else False

    """
    Does a database lookup based on "query" 
    Returns a single Customer instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return sweetscomplete.entity.customer.Customer 
    """
    def fetchOne(self, query, projection = None) :
        return self.db.customers.find_one(query, projection)

    """
    Does a database lookup based on "query" 
    Returns a single Customer instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    "limit" and "skip" are used for pagination (equals SQL LIMIT and OFFSET key words)
      * If "limit" param is not supplies returns all documents
      * If "skip" param is supplied, skips this many documents before yielding results
    @param dict query
    @param dict projection
    @param int skip   : how many documents to skip before starting to yield results
    @param int limit  : the number of values to return
    @return generator : iteration of sweetscomplete.entity.customer.Customer objects
    """
    def fetch(self, query = None, projection = None, skip = 0, limit = 0) :
        for doc in self.db.customers.find(query, projection, skip, limit) :
            yield doc

    def fetchAll(self) :
        return self.fetch()

    """
    Returns an iteration of Customer instances populated only with "customerKey" and "title" fields
    @param int skip   : how many documents to skip before starting to yield results
    @param int limit  : limits how many rows are shown
    @return generator : iteration of partially populated Customer objects
    """
    def fetchKeysAndNames(self, skip = 0, limit = 0) :
        projection = dict({"customerKey":1,"firstName":1,"lastName":1,"_id":0})
        return self.fetch(None, projection, skip, limit)

    """
    Adds a document to the "customers" collection
    @param sweetscomplete.entity.customer customerEntity
    """
    def addOne(self, customerEntity) :
        # NOTE: pymongo expects iterable objects, not a JSON string!
        return self.db.customers.insert_one(customerEntity)
    
    """
    Adds multiple documents to the "customers" collection
    @param dict doc
    """
    def addAll(self, docs) :
        return self.db.customers.insert_many(docs)
    
    """
    Deletes a single document from the "customers" collection
    @param dict query
    """
    def deleteOne(self, query) :
        return self.db.customers.delete_one(query)

    """
    Deletes multiple documents from the "customers" collection
    @param dict query
    """
    def deleteAll(self, query) :
        return self.db.customers.delete_many(query)

    """
    Updates a single document in the "customers" collection
    Accepts a customer key and dictionary update document as arguments
    Will not modify the "customerKey"
    Returns the number of documents affected
    @param string custKey
    @param dict data
    @return sweetscomplete.entity.customer.Customer if update successful | False otherwise
    """
    def editOneByKey(self, custKey, data) : 
        # formulate query
        query = dict({"customerKey" : custKey})
        updateDoc = dict({"$set" : data})
        """
        NOTE: we are using "update_one()" which returns a pymongo.results.UpdateResult object
              alternatively we could use "find_one_and_update()" and use the "return_document=ReturnDocument.AFTER" 
              option to get the modified customer document
        """
        result = self.db.customers.update_one(query, updateDoc)
        return self.db.customers.find_one(query) if (result.modified_count > 0) else False

    """
    Updates multiple documents in the "customers" collection
    @param dict query
    @param dict docs
    """
    def editAll(self, query, doc) :
        return self.db.customers.update_many(query, doc)
