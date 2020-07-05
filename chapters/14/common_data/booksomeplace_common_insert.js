conn = new Mongo();
db = conn.getDB("booksomeplace");
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
    "key": "propertyType",
    "value": [
        "hotel",
        "motel",
        "inn",
        "guest house",
        "hostel",
        "resort",
        "serviced apartment",
        "condo",
        "b & b",
        "lodge"
    ]
});
db.common.insertOne(
{
    "key": "facilityType",
    "value": [
        "outdoor pool",
        "indoor pool",
        "free parking",
        "high speed WiFi",
        "fitness center",
        "business center",
        "pharmacy",
        "sauna",
        "jacuzzi",
        "buffet breakfast"
    ]
});
db.common.insertOne(
{
    "key": "chain",
    "value": [
        "Accor",
        "Hyatt",
        "Hilton"
    ]
});
db.common.insertOne(
{
    "key": "roomType",
    "value": [
        "premium",
        "standard",
        "poolside",
        "groundFloor"
    ]
});
db.common.insertOne(
{
    "key": "bedType",
    "value": [
        "single",
        "single",
        "double",
        "double",
        "queen",
        "king"
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
    "key": "rsvStatus",
    "value": [
        "pending",
        "confirmed",
        "cancelled"
    ]
});
db.common.insertOne(
{
    "key": "payStatus",
    "value": [
        "pending",
        "confirmed",
        "refunded"
    ]
});
