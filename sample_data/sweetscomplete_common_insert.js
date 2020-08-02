conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.common.drop();
db.common.insertMany(
[
    {
        "key" : "gender",
        "data" : { "M" : "male", "F" : "female", "X" : "Other" }
    },
    {
        "key" : "socialMedia",
        "data" : {"FB":"facebook", "GO":"google", "LI":"linkedin", "LN":"line", "SK":"skype", "TW":"twitter"}
    },
    {
        "key" : "categories",
        "data" : ["cake","chocolate","pie","cookie","donut"]
    },
    {
        "key"  : "unit",
        "data" : ["box","tin","piece","item"]
    }
]);
