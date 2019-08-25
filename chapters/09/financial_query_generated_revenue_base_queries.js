// NOTE: You can't run this script directly.
//       Use "booksomeplace" and then copy and past each query into the "mongo" shell to view results.

db.bookings.find(
    { "$and":[
        { "bookingInfo.arrivalDate":{"$regex":"^2018"},
          "bookingInfo.paymentStatus":"confirmed"
        }
    ] },
   {"totalPrice":1,"bookingInfo.arrivalDate":1}
);

db.bookings.aggregate(
[
    { $match :
        { "$and":[
            { "bookingInfo.arrivalDate":{"$regex":"^2018"},
              "bookingInfo.paymentStatus":"confirmed"
            }
        ] }
    },
   { $bucket:
       {
            groupBy: "$bookingInfo.arrivalDate",
            boundaries: [ '2018-01-01', '2018-04-01', '2018-07-01', '2018-10-01' ],
            default: "2018-10-01",
            output: {
                "totals": { $sum : "$totalPrice" },
                "amounts" : { $push : "$totalPrice" }
            }
        }
    }
]);