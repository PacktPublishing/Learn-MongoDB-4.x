// NOTE: you cannot run this script directly
//       in order to see the effect, cut and paste this code directly into a "mongo" shell

// FLAT --------------------------------------------------------------------
// creates a GeoJSON field "geo_spatial"  in the "world_cities" collection
db.world_cities.aggregate(
    { "$match": {} },
    {
        "$addFields": {
            "geo_spatial_flat" :
            [
                { "$toDouble" : "$longitude" },
                { "$toDouble" : "$latitude" }
            ]
        }
    },
    { "$out" : "world_cities" }
);

// creates a flat 2d geo-spatial index
db.world_cities.createIndex( { "geo_spatial_flat" : "2d" } );

// SPHERE --------------------------------------------------------------------
// creates a GeoJSON field "geo_spatial" under "address" in the "properties" collection
db.properties.aggregate(
    { "$match": {} },
    {
        "$addFields": {
            "address.geo_spatial":{
                "type":"Point",
                "coordinates":
                [
                    { "$toDouble" : "$address.longitude" },
                    { "$toDouble" : "$address.latitude" }
                ]
            }
        }
    },
    { "$out" : "properties" }
);

// creates a spherical 2dsphere geo-spatial index
db.properties.createIndex( { "address.geo_spatial" : "2dsphere" } );
