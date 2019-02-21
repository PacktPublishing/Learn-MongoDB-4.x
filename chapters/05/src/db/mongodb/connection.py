# db.mongodb.connection

from pymongo import MongoClient

class Connection :
    
    db     = None
    client = None
    uri    = 'mongodb://localhost:27017/'
        
    def __init__(self, uri = None) :
        if uri :
            self.uri = uri
        self.client = MongoClient(self.uri)

    def getDatabase(self, database) :
        self.db = self.client[database]
        return self.db
        
    # if collection includes a ".", assumes part before "." is the database
    def getCollection(self, collection) :
        if collection.find(".") :
            database, collection = collection.split(".",1)
            self.getDatabase(database)
        return self.db[collection]
