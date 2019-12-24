doc = {
  user  : "biglittle_admin",
  pwd   : "password",
  roles : [ { role : "userAdmin", db : "biglittle" } ],
  mechanisms: [ "SCRAM-SHA-256" ]
}
db.createUser(doc);
