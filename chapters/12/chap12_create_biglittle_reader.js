doc = {
  user: "biglittle_reader",
  pwd: passwordPrompt(),
  roles: [ { role: "read", db: "biglittle" } ],
  authenticationRestrictions: [
     {
       clientSource: ["127.0.0.1"],
       serverAddress: ["127.0.0.1"]
     }
  ],
  mechanisms: [ "SCRAM-SHA-256" ],
  passwordDigestor: "server"
}
db.createUser(doc);

