// sample query using the $lookup aggregation pipeline operator
conn = new Mongo();
db = conn.getDB("biglittle");

// example using the $lookup pipeline operator and the "userKey" field
db.users.aggregate(
[
    { $match  : { "userType" : "lender" }},
    { $project : { "userKey" : 1, "businessName" : 1, "address" : 1 }},
    { $lookup : { "from" : "loans", "localField" : "userKey", "foreignField" : "lenderKey", "as" : "loans" }},
    { $addFields : { "total" : { "$sum" : "$loans.loanInfo.principal" }}},
    { $sort : { "total" : -1 }}
]);
