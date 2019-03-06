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
        result = self.db.customers.find_one(query)
        if result :
            return Customer(result)
        else :
            return None

    """
    Does a database lookup based on "query" 
    Returns a single Customer instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return sweetscomplete.entity.customer.Customer 
    """
    def fetchOne(self, query, projection = None) :
        result = self.db.customers.find_one(query, projection)
        if result :
            return Customer(result, False)
        else :
            return None

    """
    Does a database lookup based on "query" 
    Returns a single Customer instance populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict query
    @param dict projection
    @return generator : iteration of sweetscomplete.entity.customer.Customer objects
    """
    def fetch(self, query, projection = None) :
        for doc in self.db.customers.find(query, projection) :
            yield Customer(doc)

    """
    Does a database lookup an returns all customers
    Returns an iteration of Customer instances populated with fields specified by "projection"
    If "projection" param is not supplied, returns all fields
    @param dict projection
    @return generator : iteration of Customer objects
    """
    def fetchAll(self, projection = None) :
        for doc in self.db.customers.find(query, projection) :
            yield Customer(doc)

    """
    Returns an iteration of Customer instances populated only with "customerKey" and "MainCustomerInfo.title" fields
    @return generator : iteration of partially populated Customer objects
    """
    def fetchAllKeysAndNames(self) :
        projection = dict({"customerKey":1,"PrimaryContactInfo.firstName":1,"PrimaryContactInfo.lastName":1,"_id":0})
        for doc in self.db.customers.find(None, projection) :
            yield Customer(doc)

    """
    Adds a document to the "customers" collection
    @param sweetscomplete.entity.customer customerEntity
    """
    def addOne(self, customerEntity) :
        # NOTE: pymongo expects iterable objects, not a JSON string!
        return self.db.customers.insert_one(customerEntity.toDict())
    
    """
    Adds multiple documents to the "customers" collection
    @param dict [docs]
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
    @param dict query
    @param dict doc
    """
    def editOne(self, query, doc) :
        return self.db.customers.update_one(query)

    """
    Updates multiple documents in the "customers" collection
    @param dict query
    @param dict [docs]
    """
    def editAll(self, query, docs) :
        return self.db.customers.update_many(query, docs)

