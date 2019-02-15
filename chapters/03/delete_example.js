// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("sweetscomplete");

// NOTE: this command only works when in the shell
use sweetscomplete;

// define an array of EU country codes
eu = [  "AL", "AD", "AM", "AT", "BY", "BE", "BA", "BG", "CH", "CY", "CZ", "DE",
        "DK", "EE", "ES", "FO", "FI", "FR", "GB", "GE", "GI", "GR", "HU", "HR",
        "IE", "IS", "IT", "LT", "LU", "LV", "MC", "MK", "MT", "NO", "NL", "PL",
        "PT", "RO", "RU", "SE", "SI", "SK", "SM", "TR", "UA", "VA"
];

// define a filter which locates "ERROR" products in EU countries
filter = {
    "CustomerInfo.Address.country" : { $in : eu },
    "ProductInfo.MainProductInfo.skuNumber":"ERROR"
};

// create a "projection" for the "find()" command only
projection = {
    "CustomerInfo.Address.country" : 1,
    "ProductInfo.MainProductInfo.skuNumber" : 1
    ,"_id":0
};

// run a "find()" command to make sure the filter affects the right countries
db.purchases.find(filter,projection);
db.purchases.find(filter,projection).count();

// now you can run the "deleteMany()" using the same filter
db.purchases.deleteMany(filter);
