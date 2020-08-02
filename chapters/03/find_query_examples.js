// be sure to restore the sample data before running these queries

// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("sweetscomplete");

// NOTE: this command only works when in the shell
use sweetscomplete;

// simple query
db.customers.findOne({"phoneNumber":"+44-118-652-0519"});

// count of all customers
db.customers.find().count();

// count of customers in english-majority countries (according to UK government)
maj_english = ["AG","AU","BS","BB","BZ","CA","DM","GB","GD",
               "GY","IE","JM","NZ","KN","LC","VC","TT","US"];
db.customers.find(
{
    "$and" : [
        {"country" : { "$nin": maj_english }},
        {"dateOfBirth" : {"$lt":"1968-01-01"}}
    ]
}).count();

// displays customers from Quebec, suppressing the "_id" field
query = { "stateProvince" : "QC" }
projection = { "_id":0, "firstName":1, "lastName":1, "email":1, "stateProvince":1, "country":1 }
db.customers.find(query,projection).pretty();
