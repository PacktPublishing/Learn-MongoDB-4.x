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

// create zones == continents + oceans
sh.addShardToZone("repl_shard_1", "americas");
sh.addShardToZone("repl_shard_1", "atlantic");
sh.addShardToZone("repl_shard_2", "africa");
sh.addShardToZone("repl_shard_2", "europe");
sh.addShardToZone("repl_shard_3", "asia");
sh.addShardToZone("repl_shard_3", "australia");
sh.addShardToZone("repl_shard_3", "indian");
sh.addShardToZone("repl_shard_3", "pacific");

// assign ranges to zones
target = "biglittle.world_cities";
sh.updateZoneKeyRange(target, {"timezone":MinKey}, {"timezone":"America/Anchorage"}, "africa");
sh.updateZoneKeyRange(target, {"timezone":"America/Anchorage"}, {"timezone":"Arctic/Longyearbyen"}, "americas");
sh.updateZoneKeyRange(target, {"timezone":"Arctic/Longyearbyen"},{"timezone":"Asia/Aden"}, "atlantic");
sh.updateZoneKeyRange(target, {"timezone":"Asia/Aden"}, {"timezone":"Australia/Adelaide"}, "asia");
sh.updateZoneKeyRange(target, {"timezone":"Australia/Adelaide"}, {"timezone":"Europe/Amsterdam"}, "australia");
sh.updateZoneKeyRange(target, {"timezone":"Europe/Amsterdam"}, {"timezone":"Indian/Antananarivo"}, "europe");
sh.updateZoneKeyRange(target, {"timezone":"Indian/Antananarivo"},{"timezone":"Pacific/Apia"}, "indian");
sh.updateZoneKeyRange(target, {"timezone":"Pacific/Apia"}, {"timezone":MaxKey}, "pacific");
