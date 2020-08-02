// Do not run this directly from the "mongo" shell
// You need to first go into the "mongo" shell, and copy and paste this code to see its effect

// function which does the "map"
map_func    = function () { emit(this.property.propertyAddr.country, this.totalPrice); }
reduce_func = function (key, prices) { return Array.sum(prices); }
query_doc   = { "bookingInfo.paymentStatus" : "confirmed", "bookingInfo.arrivalDate" : /^2019/ }
output_to   = "country_totals"

// using mapReduce() as collection method
db.bookings.mapReduce(map_func, reduce_func, { query: query_doc, out: output_to });

// alternate syntax
sort_doc = { "property.propertyAddr.country" : 1 }
db.runCommand( {
    mapReduce: "bookings",
    map:       map_func,
    reduce:    reduce_func,
    out:       output_to,
    query:     query_doc,
    sort:      sort_doc
});

// run this command to see results:
db.country_totals.find();

// confirm by manually adding up totals for country "AR"
db.bookings.find(
    { "bookingInfo.paymentStatus" : "confirmed",
      "bookingInfo.arrivalDate" : /^2019/,
      "property.propertyAddr.country" : "AR"},
    {"totalPrice":1}
);
