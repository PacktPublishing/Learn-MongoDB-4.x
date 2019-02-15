// count of all customers
db.customers.find().count();

// count of customers in english-majority countries (according to UK government)
maj_english = ["AG","AU","BS","BB","BZ","CA","DM","GB","GD",
               "GY","IE","JM","NZ","KN","LC","VC","TT","US"];
db.customers.find(
{
    "$and" : [
        {"Address.country" : { "$nin": maj_english }},
        {"OtherInfo.dateOfBirth" : {"$lt":"1968-01-01"}}
    ]
}).count();

// displays customers from Quebec, showing only fields from the embedded "Address" object, suppressing the "_id" field
db.customers.find({"Address.stateProvince":"QC"},{"Address":1,"_id":0}).pretty();

// suppresses the "PrimaryContactInfo.socialMedia" field ... note all other fields appear
db.customers.find({"Address.stateProvince":"QC"},{"PrimaryContactInfo.socialMedia":0});

// displays customers from Quebec, only showing the phone number and PrimaryContactInfo, suppressing "socialMedia"
db.customers.find(
    {"Address.stateProvince":"QC"},
    {   
        "PrimaryContactInfo.socialMedia":0,
        "Address":0,
        "SecondaryContactInfo":0,
        "LoginInfo":0
    }
).pretty();

// displays count of customers who live in Southeast Asia, who have purchased pies
db.purchases.find(
{
    "ProductInfo.MainProductInfo.category":"pie",
    "CustomerInfo.Address.country":
        {"$in":["BN","ID","KH","LA","MY","PH","SG","TH","VN"]}
}).count();

