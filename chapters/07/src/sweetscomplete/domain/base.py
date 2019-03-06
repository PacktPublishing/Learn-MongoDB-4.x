# sweetscomplete.domain.base

class Base :
    
    # connection to specified database
    db = None
    
    # @param db.mongodb.connection conn
    # @param sweetscomplete.entity.*
    # @param string database
    # @param string collection
    def __init__(self, conn, database) :
        self.db = conn.getDatabase(database)
