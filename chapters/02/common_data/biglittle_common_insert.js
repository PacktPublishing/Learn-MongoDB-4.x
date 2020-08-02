conn = new Mongo();
db = conn.getDB("biglittle");
db.common.drop();
db.common.insertOne(
{
    "key": "title",
    "value": [
        "Mr",
        "Ms",
        "Dr"
    ]
});
db.common.insertOne(
{
    "key": "userType",
    "value": [
        "lender",
        "borrower"
    ]
});
db.common.insertOne(
{
    "key": "phoneType",
    "value": [
        "home",
        "work",
        "mobile",
        "fax"
    ]
});
db.common.insertOne(
{
    "key": "socMediaType",
    "value": [
        "google",
        "twitter",
        "facebook",
        "skype",
        "line",
        "linkedin"
    ]
});
db.common.insertOne(
{
    "key": "genderType",
    "value": [
        "male",
        "female",
        "other"
    ]
});
db.common.insertOne(
{
    "key": "currency",
    "value": [
        "AUD",
        "CAD",
        "EUR",
        "GBP",
        "INR",
        "NZD",
        "SGD",
        "USD"
    ]
});
db.common.insertOne(
{
    "key": "payStatus",
    "value": [
        "scheduled",
        "received",
        "overdue"
    ]
});
db.common.insertOne(
{
    "key": "paymentLen",
    "value": [ 12, 24, 36, 48, 60, 72 ]
});
