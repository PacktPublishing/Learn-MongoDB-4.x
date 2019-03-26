"""
sweetscomplete.domain.purchase
Description: service class which interacts with the "purchase" collection
"""

from sweetscomplete.domain.base import Base
from sweetscomplete.entity.purchase import Purchase
from bson.objectid import ObjectId
from pymongo.cursor import CursorType

class PurchaseService(Base) :

    """
    GENERIC QUERY APPROACH
    Does a database look up based on query document and projection
    Returns an iteration of Purchase instanPces
    If "projection" is not supplied, returns all fields
    @param dict query : {field1:expression,field2:expression,etc.}
    @param dict proj  : {field1: 1 | 0, field2: 1 | 0, etc.}
    @param list sort  : [(field1, 1 | -1), (field2, 1 | -1), etc.]
    @return generator : iteration of partially populated Purchase objects
    """
    def genericFetch(self, query, proj = dict(), order = None) :
        # filter=None, projection=None, skip=0, limit=0, no_cursor_timeout=False, cursor_type=CursorType.NON_TAILABLE, sort=None
        # Note that we supply defaults for skip, limit, no_cursor_timeout and cursor_type
        for doc in self.db.purchases.find(query, proj, 0, 0, False, CursorType.NON_TAILABLE, order) :
            yield doc

    """
    CUSTOM QUERY APPROACH
    Produces documents which are used in an annual sales report broken down by month
    @param int year
    @return generator : iteration of partially populated Purchase objects
    """
    def salesReportByCountry(self, year) :
        from bson.regex import Regex
        pattern = '^' + str(year)
        regex   = Regex(pattern)
        query   = dict({'dateOfPurchase':{'$regex':regex}})
        proj    = dict({'dateOfPurchase':1,'extendedPrice':1,'country':1,'_id':0})
        order   = [('country', 1),('dateOfPurchase', 1)]
        results = {}
        ## put results from generic fetch into nested dictionaries
        for doc in self.genericFetch(query, proj, order) :
            country = doc['country']
            dop     = doc['dateOfPurchase']
            month   = str(dop[5:7])
            if country in results :
                temp = results[country]
                if month in temp :
                    price = temp[month] + doc['extendedPrice']
                else :
                    price = doc['extendedPrice']
                temp.update({month:price})            
            else :
                results.update({country:{month:doc['extendedPrice']}})
        return results
        
    """
    Does a database look up based on query document and projection
    Returns an iteration of Purchase instances
    If "projection" is not supplied, returns all fields
    @param dict query : {field1:expression,field2:expression,etc.}
    @param dict proj  : {field1: 1 | 0, field2: 1 | 0, etc.}
    @param int skip   : how many documents to skip before starting to yield results
    @param int limit  : limits how many rows are shown
    @return generator : iteration of partially populated Purchase objects
    """
    def fetch(self, query, proj = dict(), skip = 0, limit = 0) :
        for doc in self.db.purchases.find(query, proj, skip, limit) :
            yield doc

    """
    Does a database look up based on "purchaseKey"
    Returns a single Purchase instance
    @param string key
    @return sweetscomplete.entity.purchase.Purchase 
    """
    def fetchByKey(self, key) :
        query  = dict({"transactionId" : key})
        return self.db.purchases.find_one(query)

    """
    Returns an iteration of Purchase instances populated only with the listed fields
    @param int skip   : how many documents to skip before starting to yield results
    @param int limit  : limits how many rows are shown
    @return generator : iteration of partially populated Purchase objects
    """
    def fetchPurchInfo(self, skip = 0, limit = 0) :
        projection = dict({"transactionId":1,"dateOfPurchase":1,"extendedPrice":1,"firstName":1,"lastName":1,"_id":0})
        for doc in self.db.purchases.find(None, projection, skip, limit) :
            yield doc

    """
    Retrieves last purchase for customer
    @param string custKey
    @return sweetscomplete.entity.purchase.Purchase object
    """
    def fetchLastPurchaseForCust(self, custKey) :
        query  = dict({"customerKey" : custKey})
        projection = None
        return self.db.purchases.find_one(query, projection, 0, 0, False, CursorType.NON_TAILABLE, [('dateOfPurchase', -1)])
        
    """
    Adds a document to the "purchases" collection
    @param sweetscomplete.entity.purchase.Purchase purchaseEntity
    @return ObjectId instance | False if not successful
    """
    def addOne(self, purchaseEntity) :
        # calculate extended price
        extPrice = 0.00
        for key, purchProd in purchaseEntity['productsPurchased'].items() :
            extPrice += purchProd['qtyPurchased'] * purchProd['price']
        purchaseEntity['extendedPrice'] = extPrice
        result = self.db.purchases.insert_one(purchaseEntity)
        return result.inserted_id if (isinstance(result.inserted_id, ObjectId)) else False
    
    """
    Adds multiple documents to the "purchases" collection
    @param dict docs
    """
    def addMany(self, docs) :
        return self.db.purchases.insert_many(docs)
    
    """
    Updates a single document in the "purchases" collection
    Accepts an purchase key and dictionary update document as arguments
    Will not modify the "purchaseKey"
    Returns the number of documents affected
    @param string key
    @param dict data
    @return sweetscomplete.entity.purchase.Purchase if update successful | False otherwise
    """
    def editOneByKey(self, key, data) : 
        # formulate query
        query = dict({"transactionId" : key})
        updateDoc = dict({"$set" : data})
        """
        NOTE: we are using "update_one()" which returns a pymongo.results.UpdateResult object
              alternatively we could use "find_one_and_update()" and use the "return_document=ReturnDocument.AFTER" 
              option to get the modified purchase document
        """
        result = self.db.purchases.update_one(query, updateDoc)
        return self.db.purchases.find_one(query) if (result.modified_count > 0) else False
    
    """
    Deletes a single document from the "purchases" collection based on key (transactionId)
    @param string key
    @param dict query
    """
    def deleteByKey(self, key) :
        query = dict({"transactionId" : key})
        return self.db.purchases.delete_one(query)

    """
    Deletes multiple documents from the "purchases" collection
    @param dict query
    """
    def deleteAll(self, query) :
        return self.db.purchases.delete_many(query)
