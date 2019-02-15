conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.common.drop();
db.common.insertOne(
{
    "key" : "gender",
    "data" : { "M" : "male", "F" : "female" }
});
db.common.insertOne(
{
    "key" : "socialMedia",
    "data" : {"GO":"google", "TW":"twitter", "FB":"facebook", "LN":"line", "SK":"skype","LI":"linkedin"}
});
db.common.insertOne(
{
    "key" : "categories",
    "data" : ["cake","chocolate","pie","cookie","donut"]
});
db.common.insertOne(
{
    "key"  : "unit",
    "data" : ["box","tin","piece","item"]
});
