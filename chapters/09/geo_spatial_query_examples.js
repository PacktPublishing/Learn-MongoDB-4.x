// NOTE: you cannot run this script directly
//       in order to see the effect, cut and paste this code directly into a "mongo" shell


// list properties for India sorted by city in reverse
use booksomeplace;
db.properties.aggregate(
    { "$match"   : { "address.country" : "IN" } },
    { "$project" : { "address.city" : 1, "address.longitude" : 1, "address.latitude" : 1, "_id" : 0 } },
    { "$sort"    : { "address.city" : -1 } }
);

// from the list produce, choose a longitude and latitude coordinate pair
LON = ???
LAT = ???

// use aggregation to add a field consisting of legacy coordinate pairs
db.world_cities.aggregate(
    { "$match": {} },
    {
        "$addFields": {
            "geo_spatial_sphere" :
            [
                { "$toDouble" : "$longitude" },
                { "$toDouble" : "$latitude" }
            ],
        }
    },
    { "$out" : "world_cities" }
);

// creates a 2d geo-spatial sphere index
db.world_cities.createIndex( { "geo_spatial_sphere" : "2dsphere" } );

// run a query based upon the longitude and latitude selected above
db.world_cities.find(
    { "geo_spatial_sphere" :
        { "$near" : {
            "$geometry" : {
                "type" : "Point",
                "coordinates" : [LON, LAT]
            },
            "$maxDistance" : 100000
        }
    }
},{ "name" : 1, "geo_spatial_sphere" : 1, "_id" : 0 });

