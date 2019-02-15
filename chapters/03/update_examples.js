// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("sweetscomplete");

// NOTE: this command only works when in the shell
use sweetscomplete;

// first: confirm customer exists at this email address:
db.customers.find(
    { "PrimaryContactInfo.email" : "jcole@Tata.com" },
    { "PrimaryContactInfo" : 1 }
).pretty();

// change customer's email address
db.customers.updateOne(
    {"PrimaryContactInfo.email" : "jcole@Tata.com"},
    { $set: {
        "PrimaryContactInfo.email" : "jesica.cole@infosys.com",
        "PrimaryContactInfo.phoneNumber" : "+44-222-333-4444" }
    }
);

// define the "Error" product JavaScript var
error_product =
{
    "productKey": "error",
    "productPhoto": "",
    "MainProductInfo": {
        "skuNumber": "ERROR",
        "category": "error",
        "title": "Error",
        "description": "Error",
        "price": "0.00"
    },
    "InventoryInfo": {
        "unit": "error",
        "costPerUnit": "0.00",
        "numberOfUnitsOnHand": 0
    }
};

// insert into "products"
db.products.insertOne(error_product);

// create "Error" product info JavaScript var
error_main_product_info =
{
    "skuNumber": "ERROR",
    "category": "error",
    "title": "Error",
    "description": "Error",
    "price": "0.00"
};

// count purchases where product info is null
db.purchases.find({"ProductInfo.MainProductInfo":null}).count();

// set missing "MainProductInfo" to "error_product" JavaScript variable
db.purchases.updateMany(
    { "ProductInfo.MainProductInfo" : null },
    { $set : { "ProductInfo.MainProductInfo" : error_main_product_info } }
);

// confirm that the "null"s are gone
db.purchases.find({"ProductInfo.MainProductInfo":null}).count();

// confirm the number of "ERROR" sku numbers
db.purchases.find({"ProductInfo.MainProductInfo.skuNumber":"ERROR"}).count();
