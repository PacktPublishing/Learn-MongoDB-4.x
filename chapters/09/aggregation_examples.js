// NOTE: you can't run these commands directly: cut and paste into the shell

// revenue report by country sorted by country
db.bookings.aggregate([
    { $match : { "bookingInfo.paymentStatus" : "confirmed" } },
    { $group:  { "_id"   : "$customer.customerAddr.country",
                 "total" : { $sum : "$totalPrice" } } },
    { $sort : { "_id" : 1 } }
]);

// alphabetical list of customer full names
db.customers.aggregate(
[
    { $project: {
        last : "$name.last",
        full_name: {
            $concat: [
                { $cond : {
                    if: "$name.title",
                    then: { $concat : ["$name.title", " "] },
                    else: "" } },
                "$name.first",
                " ",
                { $cond : {
                    if: "$name.middle",
                    then: { $concat : [{ $toUpper: {$substrCP:["$name.middle",0,1]}}, ". "] },
                    else: "" } },
                "$name.last" ]
        }
    } },
    { $sort : { "last" : 1 } },
    { $project : { "full_name" : 1, "_id" : 0 } }
]);