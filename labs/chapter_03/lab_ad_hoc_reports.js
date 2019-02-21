// Lab: Generating Ad Hoc Reports
// NOTE: this lab assumes you have run the scripts to insert sample data into the "sweetscomplete" database

// To paste code snippets into the mongo shell, proceed as follows:
// 1. From this file select the text you wish to copy and paste
// 2. Hit CTL+C to copy (or right click your mouse and select "copy")
// 3. Switch to the mongo command shell
// 4. Hit SHIFT+CTL+V to paste (or right click your mouse and select "paste")

// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("sweetscomplete");

// NOTE: this command only works when in the shell
use sweetscomplete;

// LAB #1:
// A count of European Union customers who have purchased chocolate products in the year 2018

// first we produce an array of EU country codes
eu = [  "AL", "AD", "AM", "AT", "BY", "BE", "BA", "BG", "CH", "CY", "CZ", "DE",
        "DK", "EE", "ES", "FO", "FI", "FR", "GB", "GE", "GI", "GR", "HU", "HR",
        "IE", "IS", "IT", "LT", "LU", "LV", "MC", "MK", "MT", "NO", "NL", "PL",
        "PT", "RO", "RU", "SE", "SI", "SK", "SM", "TR", "UA", "VA"
];

// now we can create the query using the "$in" query operator
db.purchases.find(
{
    "$and" : [
        { "CustomerInfo.Address.country" : { "$in" : eu } },
        { "MainProductInfo.category" : "chocolate" }
    ]
}).count();

// LAB #2:
// A list of the customers, sorted alphabetically by last name, along with the primary phone number and email address of 
// all customers located in USA states east of the Mississippi River

// first we produce an array of USA state codes east of the Mississippi River
eastern_states = [  "AL", "AR", "CT", "DE", "DC", "FL", "GA", "IL", "IN", "KY", "LA", 
                    "ME", "MD", "MA", "MI", "MN", "MS", "NH", "NJ", "NY", "NC", "OH", 
                    "PA", "RI", "SC", "TN", "VT", "VA", "WV", "WI" 
];

// now we can formulate a "find()" command using the "$in" query operator
db.customers.find(
{
    "Address.country":"US",
    "Address.stateProvince":{"$in":eastern_states}
},
{
    "PrimaryContactInfo.firstName" : 1,
    "PrimaryContactInfo.lastName" : 1,
    "phone" : 1,
    "_id" : 0
}).sort({ "PrimaryContactInfo.lastName":1 } );

