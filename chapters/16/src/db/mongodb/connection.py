# db.mongodb.connection

from pymongo import MongoClient

class Connection :

    client = None
    db = None

    def __init__(self, host, port, entity = None) :
        if entity :
            self.client = MongoClient(host, port, document_class=entity)
        else :
            self.client = MongoClient(host, port)

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
