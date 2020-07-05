// NOTE: You can't run this script directly.
//       Use "booksomeplace" and then copy and past each query into the "mongo" shell to view results.

// find bookings for the year 2019
db.bookings.find(
    { "$and":[
        { "bookingInfo.arrivalDate":{"$regex":"^2019"},
          "bookingInfo.paymentStatus":"confirmed"
        }
    ] },
   {"totalPrice":1,"bookingInfo.arrivalDate":1}
);

// generate revenue report for 2019 by quarter
db.bookings.aggregate(
[
    { $match :
        { "$and":[
            { "bookingInfo.arrivalDate":{"$regex":"^2019"},
              "bookingInfo.paymentStatus":"confirmed"
            }
        ] }
    },
   { $bucket:
       {
            groupBy: "$bookingInfo.arrivalDate",
            boundaries: [ '2019-01-01', '2019-04-01', '2019-07-01', '2019-10-01' ],
            default: "2019-10-01",
            output: {
                "totals": { $sum : "$totalPrice" },
                "amounts" : { $push : "$totalPrice" }
            }
        }
    }
]);

// list bookings by room type
// first get a list of room types from the "common" collection
// returns: { "value" : [ "premium", "standard", "poolside", "groundFloor" ] }
db.common.find({"key":"roomType"},{"value":1,"_id":0});

// then, for each room type, run this query:
db.bookings.find(
	{"rooms":{$elemMatch:{"roomType":"premium"}}},
	{"rooms":1}
);
db.bookings.find(
	{"rooms":{$elemMatch:{"roomType":"standard"}}},
	{"rooms":1}
);
// etc.

// using $unwind
db.bookings.aggregate(
  [
	{$unwind : "$rooms"},
	{$project: {"bookingKey":1,"rooms":1,"_id":0}}
  ]
);

// generate sales report for 2019 by room type
db.bookings.aggregate(
  [
	{ $match :
		{ "$and": [
			{ "bookingInfo.arrivalDate":{"$regex":"^2019"},
			  "bookingInfo.paymentStatus":"confirmed"
			}
		] }
	},
	{ $unwind    : "$rooms" },
	{ $project   : { "rooms" : 1 }},
	{ $sort      : { "rooms.roomType" : 1 }},
	{ $addFields : 
		{ "total_by_type" : { $multiply : [ "$rooms.price", "$rooms.qty"] }}
	},
	{ $group : { 
		_id : { "type" : "$rooms.roomType" }, 
		"count": { $sum: "$rooms.qty"}, 
		"total_sales": { $sum: "$total_by_type"}}
	}
  ]
);
