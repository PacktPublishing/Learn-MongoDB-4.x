// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("sweetscomplete");

// NOTE: this command only works when in the shell
use sweetscomplete;

// first: confirm customer exists at this email address:
db.customers.findOne({ "email" : "omann137@Chunghwa.com" });

// issue the update, as follows:
db.customers.updateOne(
	{"email" : "omann137@Chunghwa.com"},
	{ $set: {
		"email" : "ola.mann22@somenet.com",
		"phoneNumber" : "+94-111-222-3333" 
		}
	}
);

// get a list where "buildingName" is NULL; make a note of the 1st customer key
db.customers.find({"buildingName":{"$type":"null"}},{"customerKey":1,"buildingName":1});
// make a note of the 1st customer key: e.g.
key = "PATRYODE9823"
// update the first buildingName to ""
db.customers.updateOne(
    {"buildingName":{"$type":"null"},"customerKey":key},
    {"$set":{"buildingName":""}}
);
// retrieve the customer key noted above and confirm the change
db.customers.findOne(
    {"buildingName":{"$type":"null"},"customerKey":key},
    {"customerKey":1,"buildingName":1}
);

// get a count where "buildingName" is NULL
db.customers.find({"buildingName":{"$type":"null"}}).count();
// update buildingName to "" where "buildingName" is NULL
db.customers.updateMany({"buildingName":{"$type":"null"}},{"$set":{"buildingName":""}});
