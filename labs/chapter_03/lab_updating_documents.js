// updating documents

// NOTE: the "use" command only works when in the shell
use sweetscomplete;

// run a query which finds all customer documents where the "floor" field is NULL
// NOTE: make a note of the "customerKey" for the first document on the list
//       in this example it is "PATRYODE9823"
//       but it may be different on your version of the database!
db.customers.find({"floor":{"$type":"null"}},{"customerKey":1,"floor":1});

// update a single document first to test your update syntax
db.customers.updateOne({"floor":{"$type":"null"}},{"$set":{"floor":""}});

// confirm the 1st customer document was changed using the customerKey noted above
db.customers.findOne({"customerKey":"PATRYODE9823",},{"customerKey":1,"floor":1});

// do a count of documents which remain to be updated
db.customers.find({"floor":{"$type":"null"}}).count();

// perform the update many and confirm the count
db.customers.updateMany({"floor":{"$type":"null"}},{"$set":{"floor":""}});

// if you run into a problem, you can reload the "customers" collection from "sweetscomplete_customers_insert.js"

// now you can repeat the above process for the "roomApartmentCondoNumber" field
db.customers.find({"roomApartmentCondoNumber":{"$type":"null"}},{"customerKey":1,"roomApartmentCondoNumber":1});
db.customers.updateOne({"roomApartmentCondoNumber":{"$type":"null"}},{"$set":{"roomApartmentCondoNumber":""}});
db.customers.findOne({"customerKey":"PATRYODE9823",},{"customerKey":1,"roomApartmentCondoNumber":1});
db.customers.find({"roomApartmentCondoNumber":{"$type":"null"}}).count();
db.customers.updateMany({"roomApartmentCondoNumber":{"$type":"null"}},{"$set":{"roomApartmentCondoNumber":""}});

