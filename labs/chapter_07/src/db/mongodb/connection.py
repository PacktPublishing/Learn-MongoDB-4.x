# db.mongodb.connection

from pymongo import MongoClient

class Connection :

    db     = None
    client = None
    config = None

    host = 'localhost'
    port = 27017

    """
    @param dict config : database configuration
    """
    def __init__(self, config = None) :
        self.config = config
        if config and 'host' in config :
            if 'port' in config :
                self.client = MongoClient(config['host'], config['port'])
            else :
                self.client = MongoClient(config['host'], self.port)
        else :
            self.client = MongoClient(self.host, self.port)
        if 'database' in config :
            self.db = self.client[config['database']]

    def getClient(self) :
        return self.client

    def getDatabase(self, database = None) :
        if not self.db :
            self.db = self.client[database]
        return self.db

    def getCollection(self, collection, database = None) :
        if not self.db :
            self.getDatabase(database)
        return self.db[collection]
