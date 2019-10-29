// sample query that creates a unique index on the users.userKey field
conn = new Mongo();
db = conn.getDB("biglittle");
db.users.createIndex( { "userKey" : 1 }, { "unique" : true } );