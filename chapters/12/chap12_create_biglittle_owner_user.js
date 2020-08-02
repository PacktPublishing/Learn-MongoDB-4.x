doc = {
  user: "biglittle_owner",
  pwd: "password",
  roles: [ { role : "dbOwner", db : "biglittle" } ],
  mechanisms: [ "SCRAM-SHA-256" ]
}
db.createUser(doc);

