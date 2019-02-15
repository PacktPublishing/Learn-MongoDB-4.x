// displays Facebook social media entry for all customers
db.customers.find(
    { "PrimaryContactInfo.socialMedia.FB" : { $exists : true } },
    { "PrimaryContactInfo.socialMedia.FB": 1, "_id" : 0 }
);
