# db.mongodb.connection

from pymongo import MongoClient

class Connection :
    
    db     = None
    client = None
        
    def __init__(self, host = 'localhost', port = 27017, result_class = None) :
        if result_class :
            self.client = MongoClient(host, port, result_class)
        else :
            self.client = MongoClient(host, port)

    def getDatabase(self, database) :
        self.db = self.client[database]
        return self.db
        
    # if collection includes a ".", assumes part before "." is the database
    def getCollection(self, collection) :
        if collection.find(".") :
            database, collection = collection.split(".",1)
            self.getDatabase(database)
        return self.db[collection]
