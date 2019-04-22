"""
web.auth
Description: simple login mechanism which stores user info in a text file, keyed by a token stored in a cookie
"""

import bcrypt

from web.session import Session
from sweetscomplete.domain.customer import CustomerService
from sweetscomplete.entity.customer import Customer

class SimpleAuth :

    service     = None
    session     = None    
    custSessKey = 'custKey'
    identity    = None
    
    """
    @param sweetscomplete.domain.customer.CustomerService service
    @param string baseDir
    """
    def __init__(self, service, baseDir) :
        self.service  = service
        self.session = Session(baseDir)

    def getSession(self) :
        return self.session

    """
    @param string email
    @param string password : plain text
    """
    def authByEmail(self, email, password) :
        success  = False
        customer = self.service.fetchByEmail(email)
        if customer  and isinstance(customer, Customer) :
            success = bcrypt.checkpw(password.encode('utf8'), customer.get('password').encode('utf8'))
        return customer if success else False
 
    """
    @param string password : plain text
    @return string hashed password
    """
    def genHash(self, password) :
        newPass = bcrypt.hashpw(password.encode('utf8'),bcrypt.gensalt())
        return newPass
 
    """
    @return string token
    """
    def getToken(self) :
        return self.session.getToken()

    """
    @return False | Customer : customer entity restored from JSON
    """
    def getIdentity(self) :
        if not self.session.getToken() :
            return False
        if not self.identity :
            custKey = self.session.getSessInfoByKey(self.custSessKey)
            # lookup customer info
            self.identity = self.service.fetchByKey(custKey)
        return self.identity

    def authenticate(self, username, password) :
        cust = self.authByEmail(username, password)
        # if auth is successful, get token, and store customer info in authfile
        if (cust) :
            # generate token
            token = self.session.genToken()
            # store customer key in session file
            return self.session.setSessInfoByKey(self.custSessKey, cust.getKey())
        else :
            return False
