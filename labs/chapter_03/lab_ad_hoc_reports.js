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

// now we create a query document using the "$in" query operator
query =  { "$and" : 
    [ 
        { "country" : { "$in" : eu } },
        { "dateOfPurchase" : { "$regex" : "2018-" } } 
    ]
}

// and then a projection document
projection = { "_id" : 0, "dateOfPurchase" : 1, "firstName" : 1, "lastName" : 1, "phoneNumber" : 1 }

// now for the query
db.purchases.find(query, projection);

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
    "country":"US",
    "stateProvince" : { "$in" : eastern_states }
},
{
    "_id" : 0,
    "firstName" : 1,
    "lastName" : 1,
    "phoneNumber" : 1
}).sort({ "lastName" : 1 } );

