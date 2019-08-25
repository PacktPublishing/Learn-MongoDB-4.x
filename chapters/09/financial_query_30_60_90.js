// sample query
// cannot run this directly using the "mongo" shell,
// but you can copy and paste this into the "mongo" shell to see results

target = "2019-12-01";
project = {
    "$project" : {
        "arrivalDate"   : "$bookingInfo.arrivalDate",
        "paymentStatus" : "$bookingInfo.paymentStatus",
        "totalPrice"    : 1,
    }
}
match = {
    "$match" : {
        "$and":[
            { "paymentStatus" : "pending" },
            { "arrivalDate"   : { "$regex" : "^2019" }},
            { "arrivalDate"   : { "$lt"    : target }}
        ]
    }
}
sort = { "$sort" : { "arrivalDate" : 1 } }
bucket = {
    "$bucket" : {
        "groupBy"    : "$arrivalDate",
        "boundaries" : [ "2019-03-01", "2019-06-01", "2019-09-01" ],
        "default"    : "Other",
        "output"     : {
            "totals"  : { "$sum" : "$totalPrice" },
            "amounts" : { "$push" : "$totalPrice" },
            "dates"   : { "$push" : "$arrivalDate" }
        }
    }
}
pipeline  = [ project, match, sort, bucket ];
db.bookings.aggregation(pipeline);
