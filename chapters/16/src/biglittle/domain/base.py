# biglittle.domain.base

from db.mongodb.connection import Connection
from biglittle.entity.user import User
from biglittle.entity.loan import Loan

class Base :

    # connection to specified database
    db          = None
    collection  = None

    # defaults
    dbName      = 'biglittle'
    collectName = 'biglittle.common'

    # pub/sub
    publisher   = None

    # list
    config      = None

    """
    @param dict config
    @param string result_class
    @param biglittle.events.publisher.Publisher
    @return void
    """
    def __init__(self, config, result_class = None, publisher = None) :
        if config.getConfig('db') :
            db_conf = config.getConfig('db')
            if result_class == 'User' :
                conn = Connection(db_conf['host'],db_conf['port'], User)
                self.collectName = 'biglittle.' + result_class.lower()
            elif result_class == 'Loan' :
                conn = Connection(db_conf['host'],db_conf['port'], Loan)
                self.collectName = 'biglittle.' + result_class.lower()
            else :
                conn = Connection(db_conf['host'],db_conf['port'])
        else :
            conn = Connection()
        self.db = conn.getDatabase(self.dbName)
        self.publisher = publisher
        self.collection = conn.getCollection(self.collectName)
        self.config = config

    def getDatabase(self) :
        return self.db
