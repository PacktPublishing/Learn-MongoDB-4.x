"""
booksomeplace.domain.user
Description: module which interacts with the "customers" and "partners" collections
"""

from booksomeplace.domain.base import Base
from booksomeplace.entity.customer import Customer

class CustomerService(Base) :

    # defaults
    collectName = 'customers'

    """
    Does a database look up based on "customerKey"
    Returns a single Customer instance
    @param string key
    @return booksomeplace.entity.customer.Customer
    """
    def fetchByKey(self, key) :
        query  = dict({'customerKey' : key})
        result = self.collection.find_one(query)
        if result :
            return Customer(result)
        else :
            return None
