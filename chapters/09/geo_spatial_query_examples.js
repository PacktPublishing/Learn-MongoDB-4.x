// NOTE: you cannot run this script directly
//       in order to see the effect, cut and paste this code directly into a "mongo" shell

// list properties for India sorted by city in reverse
db.properties.aggregate(
    { "$match"   : { "address.country" : "IN" } },
    { "$project" : { "address.city" : 1, "address.geo_spatial" : 1, "_id" : 0 } },
    { "$sort"    : { "address.city" : -1 } }
);

// perform a geo-spatial query of world_cities near the property located in "Yelgoi"
db.world_cities.find(
    { "country code" : "IN",
      "geo_spatial" :
        { "$near" : {
            "$geometry" : {
                "type" : "Point",
                "coordinates" : [77.8956, 18.0806]
            },
            "$maxDistance" : 100000
        }
    }
},{ "name" : 1, "geo_spatial" : 1, "_id" : 0 });
