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
        if customer :
            pwd_db   = customer.get('password')
            pwd_form = password
            success = bcrypt.checkpw(pwd_form.encode('utf-8'), pwd_db.encode('utf-8'))
        return customer if success else False

    """
    @param string password : plain text
    @return string hashed password
    """
    def genHash(self, password) :
        newPass = bcrypt.hashpw(bytes(password),bcrypt.gensalt())
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

    """
    @param string email
    @param string password : plain text
    @return False | Customer : customer entity restored from JSON
    """
    def authenticate(self, email, password) :
        cust = self.authByEmail(email, password)
        # if auth is successful, get token, and store customer info in authfile
        if (cust) :
            # generate token
            token = self.session.genToken()
            # store customer key in session file
            return self.session.setSessInfoByKey(self.custSessKey, cust.getKey())
        else :
            return False
