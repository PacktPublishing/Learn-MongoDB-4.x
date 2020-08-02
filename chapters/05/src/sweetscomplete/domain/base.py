# sweetscomplete.domain.base

class Base :
    
    # connection to specified database
    db = None
    conn = None
        
    # @param db.mongodb.connection.Connection conn
    # @param string database
    def __init__(self, conn, database) :
        self.conn = conn
        self.db   = conn.getDatabase(database)
