"""
web.session
Description: simple login mechanism which stores user info in a text file, keyed by a token stored in a cookie
"""

import os
import json
from http.cookies import SimpleCookie
from sweetscomplete.entity.customer import Customer

class Session :

    cookieName = 'token'
    cookie     = None
    token      = None
    baseDir    = ''    
    maxSize    = 16384
    # max diff for old sess files is 24 hours
    maxDiff    = 60 * 60 * 24
    
    """
    @param string baseDir
    """
    def __init__(self, baseDir) :
        self.baseDir = baseDir
        self.cleanOldSessFiles()
        
    def genToken(self) :
        # generates random token for session
        import random
        import hashlib
        num1 = random.randint(0, 999999)
        num2 = random.randint(0, 999999)
        tok  = (str(num1) + str(num2)).encode('utf-8')
        self.token = hashlib.md5(tok).hexdigest()
        return self.token
                
    def getToken(self) :
        if not self.token :
            self.token = self.getTokenFromCookie()
        return self.token

    def getTokenFromCookie(self) :
        # sets the token into a cookie
        if not 'HTTP_COOKIE' in os.environ : return False
        cookie = SimpleCookie()
        cookie.load(os.environ['HTTP_COOKIE'])
        return cookie[self.cookieName].value if (self.cookieName in cookie) else False

    """
    Builds session file name from baseDir and token
    Accounts for trailing slash by replacing any instances of "//" in filename with "/"
    @return string sessFileName
    """
    def buildSessFilename(self) :
        # retrieve token
        token = self.getToken()
        if not token : return False
        sessFileName = self.baseDir + '/' + token + '.sess'
        sessFileName.replace('//', '/')
        return sessFileName

    """
    @param mixed info : info to be stored in session
    @return boolean   : True if write operation was successful
    """
    def writeSessInfo(self, info) :
        result = False
        # build authfilename from token
        sessFileName = self.buildSessFilename()
        # store JSON encoded Customer entity in auth file
        if sessFileName :
            f = open(sessFileName, 'w')
            # store entire info as JSON
            result = f.write(json.dumps(info))
            f.close()
        return result
        
    """
    @param False | dict info  : all session info
    """
    def readSessInfo(self) :
        # build authfilename from token
        sessFileName = self.buildSessFilename()
        # bail out if file doesn't exist
        if not os.path.exists(sessFileName) : return dict()
        # otherwise, read from file and return Customer instance
        f = open(sessFileName, 'r')
        info = f.read(self.maxSize)
        f.close()
        return json.loads(info)

    """
    @param string key   : key for info to be stored
    @param JSON info    : info to be stored in session
    @param string token : session token
    @return boolean     : True if write operation was successful
    """
    def setSessInfoByKey(self, key, info) :
        result = False
        sessInfo = self.readSessInfo()
        sessInfo[key] = info
        return self.writeSessInfo(sessInfo)
        
    """
    @param string key   : key for info to be stored
    @param False | dict info  : session info for this key
    """
    def getSessInfoByKey(self, key) :
        import json
        info = self.readSessInfo()
        if not info : return False
        return info[key] if key in info else False

    """
    @param string token : used to make sure tokens match
    @return True | False : depending on whether or not session was destroyed
    """
    def destroySession(self, token) :
        if token == self.getToken() :
            sessFileName = self.buildSessFilename()
            return os.remove(sessFileName)
        else :
            return False

    """
    Cleans out old session files past 1 day
    """
    def cleanOldSessFiles(self) :
        import glob
        import time
        now = time.time()
        fileSpec = self.baseDir + '/*.sess'
        fileSpec.replace('//', '/')
        sessFileList = glob.glob(fileSpec)
        for filename in sessFileList :
            ctime = os.path.getctime(filename)
            diff  = now - ctime
            if diff > self.maxDiff :
                os.remove(filename)
