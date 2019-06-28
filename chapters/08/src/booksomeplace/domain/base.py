# booksomeplace.domain.base

from db.mongodb.connection import Connection

class Base :

    # connection to specified database
    db          = None
    collection  = None

    # defaults
    dbName      = 'booksomeplace'
    collectName = 'common'

    # @param dict config
    def __init__(self, config) :
        if config.getConfig('db') :
            conn = Connection(config.getConfig('db'))
        else :
            conn = Connection()
        self.db = conn.getDatabase(self.dbName)
        self.collection = conn.getCollection(self.collectName)
