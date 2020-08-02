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
// this creates an index on the chosen shard key fields from the biglittle.world_cities collection
conn = new Mongo("localhost:27018");
db = conn.getDB("biglittle");
db.world_cities.createIndex( { "timezone": 1, "country code": 1 } );

// for this to work you must be connected to a "mongos" instance with sufficient cluster admin rights
sh.addShard("repl_shard_1/shard1.biglittle.local:27018");
sh.addShard("repl_shard_2/shard2.biglittle.local:27018");
sh.addShard("repl_shard_3/shard3.biglittle.local:27018");

// shard the collection
collection = "biglittle.world_cities";
shardKey   = { "timezone" : 1 };
sh.shardCollection(collection, shardKey);
