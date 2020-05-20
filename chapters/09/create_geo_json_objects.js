// NOTE: you cannot run this script directly
//       in order to see the effect, cut and paste this code directly into a "mongo" shell


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
