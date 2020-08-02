// this illustrates how to split a chunk
// you need to be running a mongo shell on a mongos instance with sufficient rights for this to work

// here is a sample document:
// the shard key chosen is "timezone" + "country code"
/*
{
	"_id" : ObjectId("5e8d4851049ec9ee6b5cfd37"),
	"geonameid" : "3040051",
	"name" : "les Escaldes",
	"asciiname" : "les Escaldes",
	"latitude" : "42.50729",
	"longitude" : "1.53414",
	"feature class" : "P",
	"feature code" : "PPLA",
	"country code" : "AD",
	"cc2" : "",
	"admin1_code" : "08",
	"admin2_code" : "",
	"admin3_code" : "",
	"admin4_code" : "",
	"population" : "15853",
	"elevation" : "",
	"dem" : "1033",
	"timezone" : "Europe/Andorra",
	"modification_date" : "2008-10-15"
}
 */

// first we establish a connection to the "biglittle" database
conn = new Mongo("localhost:27020");
db = conn.getDB("biglittle");

// now we run a query that produces totals by timezone prefix (1st 4 bytes)
doc = [
    { $match : { "timezone" : /^Europe/ }},
    { $addFields : { "count" : 1, "prefix" : {"$substrBytes" : ["$timezone", 0, 8]}}},
    { $group : { _id : "$prefix", "total" : { "$sum" : "$count" }}},
    { $sort  : { "_id" : 1 }}
]
db.world_cities.aggregate(doc);

// run find() commands to test query docs
europe_all = {"timezone": /^Europe/}
europe_lt_m = {$and :[{"timezone": /^Europe/},{"timezone":{"$lt":"Europe/M"}}]}
europe_gte_m = {$and :[{"timezone": /^Europe/},{"timezone":{"$gte":"Europe/M"}}]}
db.world_cities.find(europe_all,{"timezone":1}).count();
db.world_cities.find(europe_lt_m,{"timezone":1}).count();
db.world_cities.find(europe_gte_m,{"timezone":1}).count();

// test the candidate query doc for the split
split_query = {"timezone" : "Europe/Madrid"}
db.world_cities.find(split_query, {"timezone":1}).count();

// split the chunk
config.settings.update({_id: "balancer"}, {$set: {stopped: true}}, true);
sh.splitAt("biglittle.world_cities", split_query);
config.settings.update({_id: "balancer"}, {$set: {stopped: false}});
