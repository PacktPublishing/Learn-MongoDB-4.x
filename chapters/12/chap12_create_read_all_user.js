doc = {
  user: "read_all",
  pwd: "password",
  roles: [ "readAnyDatabase" ],
  mechanisms: [ "SCRAM-SHA-256" ]
}
db.createUser(doc);

