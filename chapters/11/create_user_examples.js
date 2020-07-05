// examples of creating users
// NOTE: you can't run this code!  These are for reference only.

// create a "super" user
conn = new Mongo();
db = conn.getDB("admin");
superMan = {
  user  : "superMan",
  pwd   : "password",
  roles : [ { role : "userAdminAnyDatabase", db : "admin" },
              "readWriteAnyDatabase" ]
}
db.createUser(superMan);

// set iteration to 10000
db.adminCommand( { setParameter: 1, scramSHA256IterationCount: 10000 } );
// create a user using SCRAM-SHA-256
scramUser = {
  user  : "scramUser",
  pwd   : "password",
  roles : [ { "readAnyDatabase" } ],
  mechanisms: [ "SCRAM-SHA-256" ]
}
db.createUser(scramUser);
// set iteration back to default
db.adminCommand( { setParameter: 1, scramSHA256IterationCount: 15000 } );


// create user with "read" rights on "biglittle"
bgReader = {
  user  : "bgReader",
  pwd   : "password",
  roles : [ { role:"read", db:"biglittle" } ],
  mechanisms: [ "SCRAM-SHA-256" ]
}
db.createUser(bgReader);

// create user with "readWriteAnyDatabase" rights
use admin;
rwAll = {
  user  : "rwAll",
  pwd   : "password",
  roles : [ "readWriteAnyDatabase" ],
  mechanisms: [ "SCRAM-SHA-256" ]
}
db.createUser(rwAll);

// test rwAll
use sweetscomplete;
db.test.insertOne({"entry_date" : "2020-06-01"});

use biglittle;
db.users.findOne({},{"name":1});
