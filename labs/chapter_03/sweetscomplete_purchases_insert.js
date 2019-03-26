conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.purchases.drop();
db.purchases.insertOne(
{
    "transactionId": "20191109SL6822",
    "dateOfPurchase": "2019-11-09 11:03:37",
    "extendedPrice": 15463.029999999999,
    "customerKey": "SONJLOZA0053",
    "firstName": "Sonja",
    "lastName": "Lozano",
    "phoneNumber": "+92-353-608-0053",
    "email": "slozano353@WorldNet.com",
    "streetAddressOfBuilding": "4453 Winding Gulch Drive",
    "city": "Barikot",
    "stateProvince": "Federal Capial &AJK",
    "locality": "Federal Capial &AJK",
    "country": "PK",
    "postalCode": "12560",
    "latitude": "34.7736",
    "longitude": "71.9042",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 261,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 589,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 629,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 825,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 232,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 811,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180811AH0136",
    "dateOfPurchase": "2018-08-11 11:03:37",
    "extendedPrice": 19815.620000000003,
    "customerKey": "ALBAHOLM3191",
    "firstName": "Alba",
    "lastName": "Holmes",
    "phoneNumber": "+61-334-390-3191",
    "email": "aholmes334@Telecom.com",
    "streetAddressOfBuilding": "3605 Little Hill Road",
    "city": "Meerlieu",
    "stateProvince": "VIC",
    "locality": "VIC FAR COUNTRY",
    "country": "AU",
    "postalCode": "3862",
    "latitude": "-38",
    "longitude": "147.4",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 879,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 997,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 567,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 668,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 527,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160726MP4819",
    "dateOfPurchase": "2016-07-26 11:03:37",
    "extendedPrice": 12676.44,
    "customerKey": "MATTPOWE7204",
    "firstName": "Matt",
    "lastName": "Powers",
    "phoneNumber": "+54-329-225-7204",
    "email": "mpowers329@Millicom.com",
    "streetAddressOfBuilding": "5033 Little Bridge Ride",
    "city": "CERRO BLANCO (JUAN JORBA, DPTO. GRAL. PEDERNERA)",
    "stateProvince": "D",
    "locality": "San Luis",
    "country": "AR",
    "postalCode": "5731",
    "latitude": "-33.8625",
    "longitude": "-65.4042",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 140,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 325,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 198,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 659,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 449,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 735,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190429LD5472",
    "dateOfPurchase": "2019-04-29 11:03:37",
    "extendedPrice": 3437.46,
    "customerKey": "LOUIDAVI0857",
    "firstName": "Louie",
    "lastName": "David",
    "phoneNumber": "+91-250-172-0857",
    "email": "ldavid250@Etisalat.com",
    "streetAddressOfBuilding": "3492 Green Canyon Circle",
    "city": "Khwajke",
    "stateProvince": "NA",
    "locality": "Ludhiana",
    "country": "IN",
    "postalCode": "141007",
    "latitude": "30.9724",
    "longitude": "75.9345",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 388,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 291,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 37,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 28,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 186,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161220HG3640",
    "dateOfPurchase": "2016-12-20 11:03:37",
    "extendedPrice": 23739.43,
    "customerKey": "HERBGALL4253",
    "firstName": "Herbert",
    "lastName": "Gallagher",
    "phoneNumber": "+44-248-752-4253",
    "email": "hgallagh248@Etisalat.com",
    "streetAddressOfBuilding": "2803 Short Canyon Road",
    "city": "Holmsgarth",
    "stateProvince": "Scotland",
    "locality": "Shetland Islands",
    "country": "GB",
    "postalCode": "ZE1",
    "latitude": "60.1464",
    "longitude": "-1.2132",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 288,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 701,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 719,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 15,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 534,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181229EN5808",
    "dateOfPurchase": "2018-12-29 11:03:37",
    "extendedPrice": 7114.8,
    "customerKey": "ELWONICH6913",
    "firstName": "Elwood",
    "lastName": "Nicholson",
    "phoneNumber": "+34-161-350-6913",
    "email": "enichols161@Etisalat.com",
    "streetAddressOfBuilding": "3988 Red Canyon Street",
    "city": "Goian",
    "stateProvince": "GA",
    "locality": "Lugo",
    "country": "ES",
    "postalCode": "27614",
    "latitude": "42.8169",
    "longitude": "-7.405",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 908,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 972,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190630HG2839",
    "dateOfPurchase": "2019-06-30 11:03:37",
    "extendedPrice": 10205.19,
    "customerKey": "HERBGALL4253",
    "firstName": "Herbert",
    "lastName": "Gallagher",
    "phoneNumber": "+44-248-752-4253",
    "email": "hgallagh248@Etisalat.com",
    "streetAddressOfBuilding": "2803 Short Canyon Road",
    "city": "Holmsgarth",
    "stateProvince": "Scotland",
    "locality": "Shetland Islands",
    "country": "GB",
    "postalCode": "ZE1",
    "latitude": "60.1464",
    "longitude": "-1.2132",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 137,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 535,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 969,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 571,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 119,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170721WL4063",
    "dateOfPurchase": "2017-07-21 11:03:37",
    "extendedPrice": 10007.55,
    "customerKey": "WILLLOVE3035",
    "firstName": "William",
    "lastName": "Love",
    "phoneNumber": "+681-181-676-3035",
    "email": "wlove181@OTE.com",
    "streetAddressOfBuilding": "721 Winding Stream Avenue",
    "city": "Sigave",
    "stateProvince": "Circonscription de Sigave",
    "locality": "Circonscription de Sigave",
    "country": "WF",
    "postalCode": "98620",
    "latitude": "-14.2667",
    "longitude": "-178.1667",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 828,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 325,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 592,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160926CP9552",
    "dateOfPurchase": "2016-09-26 11:03:37",
    "extendedPrice": 1791,
    "customerKey": "CLINPHIL7774",
    "firstName": "Clint",
    "lastName": "Phillips",
    "phoneNumber": "+691-143-764-7774",
    "email": "cphillip143@Vodafone.com",
    "streetAddressOfBuilding": "9348 Long Hill Ride",
    "city": "Pohnpei",
    "stateProvince": "State of Pohnpei",
    "locality": "State of Pohnpei",
    "country": "FM",
    "postalCode": "96941",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 900,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190925HH4902",
    "dateOfPurchase": "2019-09-25 11:03:37",
    "extendedPrice": 14446.52,
    "customerKey": "HERIHUDS7137",
    "firstName": "Heriberto",
    "lastName": "Hudson",
    "phoneNumber": "+91-310-257-7137",
    "email": "hhudson310@Telia.com",
    "streetAddressOfBuilding": "4510 Little Tree Avenue",
    "city": "Indian Institute Of Technology",
    "stateProvince": "Chennai City Corporation",
    "locality": "Chennai",
    "country": "IN",
    "postalCode": "600036",
    "latitude": "13.0659",
    "longitude": "80.2365",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 541,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 625,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 211,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 657,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 594,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 350,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170714KJ0757",
    "dateOfPurchase": "2017-07-14 11:03:37",
    "extendedPrice": 10875.27,
    "customerKey": "KIRSJACO3439",
    "firstName": "Kirsten",
    "lastName": "Jacobs",
    "phoneNumber": "+380-197-767-3439",
    "email": "kjacobs197@GlasNET.com",
    "streetAddressOfBuilding": "6178 Red Ditch Drive",
    "city": "\u0410\u043b\u0442\u0435\u0441\u0442\u043e\u0432\u0435 (\u0425\u043e\u043b\u043e\u0434\u043d\u043e\u0431\u0430\u043b\u043a\u0456\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Biliaivskyi",
    "locality": "Biliaivskyi",
    "country": "UA",
    "postalCode": "67659",
    "latitude": "46.4832",
    "longitude": "30.2168",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 25,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 702,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 955,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 391,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170112KH0127",
    "dateOfPurchase": "2017-01-12 11:03:37",
    "extendedPrice": 411.82000000000005,
    "customerKey": "KURTHESS8667",
    "firstName": "Kurt",
    "lastName": "Hess",
    "phoneNumber": "+44-122-918-8667",
    "email": "khess122@TM.com",
    "streetAddressOfBuilding": "2502 Big Bridge Drive",
    "city": "Harpsdale",
    "stateProvince": "Scotland",
    "locality": "Highland",
    "country": "GB",
    "postalCode": "KW12",
    "latitude": "58.4197",
    "longitude": "-3.5854",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 118,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190602JS2826",
    "dateOfPurchase": "2019-06-02 11:03:37",
    "extendedPrice": 44519.14,
    "customerKey": "JOHNSTAR4269",
    "firstName": "Johnna",
    "lastName": "Stark",
    "phoneNumber": "+61-306-719-4269",
    "email": "jstark306@VimpelCom.com",
    "streetAddressOfBuilding": "4337 Short Mound Circle",
    "city": "North Baandee",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6412",
    "latitude": "-31.5833",
    "longitude": "117.9667",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 365,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 696,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 418,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 857,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181102JH6675",
    "dateOfPurchase": "2018-11-02 11:03:37",
    "extendedPrice": 8225.08,
    "customerKey": "JUSTHERR3842",
    "firstName": "Justa",
    "lastName": "Herrera",
    "phoneNumber": "+64-239-343-3842",
    "email": "jherrera239@TT.com",
    "streetAddressOfBuilding": "6104 Little Gulch Avenue",
    "city": "Tutira",
    "stateProvince": "F2",
    "locality": "Hawke's Bay",
    "country": "NZ",
    "postalCode": "4162",
    "latitude": "-39.2",
    "longitude": "176.8667",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 47,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 804,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 162,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 280,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 571,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 278,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170825CG4775",
    "dateOfPurchase": "2017-08-25 11:03:37",
    "extendedPrice": 19670.16,
    "customerKey": "CHERGIBB9791",
    "firstName": "Cher",
    "lastName": "Gibbs",
    "phoneNumber": "+1-268-026-9791",
    "email": "cgibbs268@Softbank.com",
    "streetAddressOfBuilding": "5945 Little Mound Drive",
    "city": "Trois-Rivi\u00e8res South",
    "stateProvince": "QC",
    "locality": "Trois-Rivi\u00e8res",
    "country": "CA",
    "postalCode": "G9B",
    "latitude": "46.316",
    "longitude": "-72.6833",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 984,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191221DH2237",
    "dateOfPurchase": "2019-12-21 11:03:37",
    "extendedPrice": 12452.2,
    "customerKey": "DEBBHERM6344",
    "firstName": "Debbra",
    "lastName": "Herman",
    "phoneNumber": "+44-344-994-6344",
    "email": "dherman344@Zain.com",
    "streetAddressOfBuilding": "6896 Long Tree Avenue",
    "city": "Moreton",
    "stateProvince": "England",
    "locality": "Dorset",
    "country": "GB",
    "postalCode": "DT2",
    "latitude": "50.7",
    "longitude": "-2.2833",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 769,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 640,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 871,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171031DR3030",
    "dateOfPurchase": "2017-10-31 11:03:37",
    "extendedPrice": 1640.06,
    "customerKey": "DANARAYM7382",
    "firstName": "Dana",
    "lastName": "Raymond",
    "phoneNumber": "+420-391-555-7382",
    "email": "draymond391@LookData.com",
    "streetAddressOfBuilding": "9632 Green Stream Road",
    "city": "Vesel\u00ed nad Moravou",
    "stateProvince": "Hodon\u00edn",
    "locality": "Hodon\u00edn",
    "country": "CZ",
    "postalCode": "698 01",
    "latitude": "48.95",
    "longitude": "17.4",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 310,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 274,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181008VC5473",
    "dateOfPurchase": "2018-10-08 11:03:37",
    "extendedPrice": 303.36,
    "customerKey": "VASHCARS8772",
    "firstName": "Vashti",
    "lastName": "Carson",
    "phoneNumber": "+1-148-236-8772",
    "email": "vcarson148@Swisscom.com",
    "streetAddressOfBuilding": "5161 Green Mound Ride",
    "city": "West Haldimand (Port Dover)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0A",
    "latitude": "42.9403",
    "longitude": "-79.945",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 384,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190901AM5089",
    "dateOfPurchase": "2019-09-01 11:03:37",
    "extendedPrice": 24440.239999999994,
    "customerKey": "ALFOMATH9785",
    "firstName": "Alfonzo",
    "lastName": "Mathews",
    "phoneNumber": "+1-220-159-9785",
    "email": "amathews220@Etisalat.com",
    "streetAddressOfBuilding": "2702 Blue Mountain Drive",
    "city": "Laval-sur-le-Lac",
    "stateProvince": "QC",
    "locality": "Laval",
    "country": "CA",
    "postalCode": "H7R",
    "latitude": "45.5526",
    "longitude": "-73.8507",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 893,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 581,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 79,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 324,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 931,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 277,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180220JG7190",
    "dateOfPurchase": "2018-02-20 11:03:37",
    "extendedPrice": 4000.6700000000005,
    "customerKey": "JOELGUEV4189",
    "firstName": "Joel",
    "lastName": "Guevara",
    "phoneNumber": "+356-271-912-4189",
    "email": "jguevara271@OpenWorld.com",
    "streetAddressOfBuilding": "6465 Short Mountain Drive",
    "city": "\u0126amrun",
    "stateProvince": "Il-\u0126amrun",
    "locality": "Il-\u0126amrun",
    "country": "MT",
    "postalCode": "HMR",
    "latitude": "35.8869",
    "longitude": "14.4883",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 488,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 158,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 715,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170430DC1450",
    "dateOfPurchase": "2017-04-30 11:03:37",
    "extendedPrice": 28539.61,
    "customerKey": "DENNCAMP5794",
    "firstName": "Dennis",
    "lastName": "Campbell",
    "phoneNumber": "+61-316-812-5794",
    "email": "dcampbel316@SingTel.com",
    "streetAddressOfBuilding": "8638 Green Mountain Ride",
    "city": "Eugowra",
    "stateProvince": "NSW",
    "locality": "NEW CNTRY WEST",
    "country": "AU",
    "postalCode": "2806",
    "latitude": "-33.4273",
    "longitude": "148.3714",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 987,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 502,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190321ED4771",
    "dateOfPurchase": "2019-03-21 11:03:37",
    "extendedPrice": 760.82,
    "customerKey": "EMELDORS1769",
    "firstName": "Emelina",
    "lastName": "Dorsey",
    "phoneNumber": "+91-274-481-1769",
    "email": "edorsey274@NordNet.com",
    "streetAddressOfBuilding": "1256 Blue Creek Ride",
    "city": "Maheji",
    "stateProvince": "Pachora",
    "locality": "Jalgaon",
    "country": "IN",
    "postalCode": "425115",
    "latitude": "20.7935",
    "longitude": "75.4065",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 218,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180821JB0143",
    "dateOfPurchase": "2018-08-21 11:03:37",
    "extendedPrice": 2777.9700000000003,
    "customerKey": "JEREBARR4892",
    "firstName": "Jeremy",
    "lastName": "Barron",
    "phoneNumber": "+1-312-743-4892",
    "email": "jbarron312@AlgoNet.com",
    "streetAddressOfBuilding": "4209 Short Bough Street",
    "city": "Edmonton (Kaskitayo)",
    "stateProvince": "AB",
    "locality": "Edmonton",
    "country": "CA",
    "postalCode": "T6J",
    "latitude": "53.4564",
    "longitude": "-113.521",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 917,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 106,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 157,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 33,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180317MP7782",
    "dateOfPurchase": "2018-03-17 11:03:37",
    "extendedPrice": 23308.33,
    "customerKey": "MARLPOTT3254",
    "firstName": "Marlyn",
    "lastName": "Potts",
    "phoneNumber": "+1-338-344-3254",
    "email": "mpotts338@Safaricom.com",
    "streetAddressOfBuilding": "9983 Long Tree Avenue",
    "city": "Fernwood",
    "stateProvince": "MS",
    "locality": "Pike",
    "country": "US",
    "postalCode": "39635",
    "latitude": "31.1855",
    "longitude": "-90.449",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 423,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 691,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 952,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 337,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191002JO5271",
    "dateOfPurchase": "2019-10-02 11:03:37",
    "extendedPrice": 513.5,
    "customerKey": "JULIOROZ8091",
    "firstName": "Julio",
    "lastName": "Orozco",
    "phoneNumber": "+376-105-604-8091",
    "email": "jorozco105@UUnet.com",
    "streetAddressOfBuilding": "3249 Winding Hill Street",
    "city": "Sant Juli\u00e0 de L\u00f2ria",
    "stateProvince": null,
    "locality": null,
    "country": "AD",
    "postalCode": "AD600",
    "latitude": "42.4667",
    "longitude": "1.5",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 650,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170921SK3184",
    "dateOfPurchase": "2017-09-21 11:03:37",
    "extendedPrice": 18495.54,
    "customerKey": "SHANKELL3730",
    "firstName": "Shanell",
    "lastName": "Kelly",
    "phoneNumber": "+356-277-355-3730",
    "email": "skelly277@Turkcell.com",
    "streetAddressOfBuilding": "8750 Red Ditch Street",
    "city": "Swieqi",
    "stateProvince": "Is-Swieqi",
    "locality": "Is-Swieqi",
    "country": "MT",
    "postalCode": "SWQ",
    "latitude": "35.9217",
    "longitude": "14.4694",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 968,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 955,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 223,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170417DE9905",
    "dateOfPurchase": "2017-04-17 11:03:37",
    "extendedPrice": 13599.689999999999,
    "customerKey": "DARREVER1061",
    "firstName": "Darren",
    "lastName": "Everett",
    "phoneNumber": "+66-235-865-1061",
    "email": "deverett235@AlgoNet.com",
    "streetAddressOfBuilding": "7216 Long Woods Drive",
    "city": "Sida",
    "stateProvince": "Nakhon Ratchasima",
    "locality": "Nakhon Ratchasima",
    "country": "TH",
    "postalCode": "30430",
    "latitude": "14.7",
    "longitude": "102.45",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 788,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 869,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 242,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 337,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 995,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190605GE0834",
    "dateOfPurchase": "2019-06-05 11:03:37",
    "extendedPrice": 17792.250000000004,
    "customerKey": "GUSESQU8440",
    "firstName": "Gus",
    "lastName": "Esquivel",
    "phoneNumber": "+1-356-786-8440",
    "email": "gesquive356@Zain.com",
    "streetAddressOfBuilding": "8158 Little Gulch Drive",
    "city": "Marathon",
    "stateProvince": "TX",
    "locality": "Brewster",
    "country": "US",
    "postalCode": "79842",
    "latitude": "30.1886",
    "longitude": "-103.2214",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 226,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 314,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 95,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180227MB4213",
    "dateOfPurchase": "2018-02-27 11:03:37",
    "extendedPrice": 14871.48,
    "customerKey": "MARCBULL4035",
    "firstName": "Marcelle",
    "lastName": "Bullock",
    "phoneNumber": "+54-297-383-4035",
    "email": "mbullock297@Telecom.com",
    "streetAddressOfBuilding": "936 Blue Creek Street",
    "city": "CERRITO",
    "stateProvince": "Y",
    "locality": "Jujuy",
    "country": "AR",
    "postalCode": "4653",
    "latitude": "-22.1944",
    "longitude": "-65.95",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 934,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 32,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 951,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 642,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 633,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160904SM6424",
    "dateOfPurchase": "2016-09-04 11:03:37",
    "extendedPrice": 7969.45,
    "customerKey": "SHANMAYE6085",
    "firstName": "Shane",
    "lastName": "Mayer",
    "phoneNumber": "+1-384-784-6085",
    "email": "smayer384@Bifty.com",
    "streetAddressOfBuilding": "5315 Long Bridge Drive",
    "city": "Longueuil Central",
    "stateProvince": "QC",
    "locality": "Longueuil",
    "country": "CA",
    "postalCode": "J4J",
    "latitude": "45.5362",
    "longitude": "-73.4721",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 299,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 824,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 368,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 264,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 100,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190320SW4520",
    "dateOfPurchase": "2019-03-20 11:03:37",
    "extendedPrice": 5995.4800000000005,
    "customerKey": "SHARWHIT4848",
    "firstName": "Sharie",
    "lastName": "White",
    "phoneNumber": "+386-149-406-4848",
    "email": "swhite149@SEEDnet.com",
    "streetAddressOfBuilding": "9696 Red Woods Road",
    "city": "Velika Polana",
    "stateProvince": null,
    "locality": null,
    "country": "SI",
    "postalCode": "9225",
    "latitude": "46.5719",
    "longitude": "16.3469",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 229,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 274,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 405,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 302,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160920GM1222",
    "dateOfPurchase": "2016-09-20 11:03:37",
    "extendedPrice": 4791.62,
    "customerKey": "GLENMCLA8639",
    "firstName": "Glenn",
    "lastName": "Mclaughlin",
    "phoneNumber": "+91-116-582-8639",
    "email": "gmclaugh116@BT.com",
    "streetAddressOfBuilding": "2574 Big Mound Street",
    "city": "Jamoo",
    "stateProvince": "Banda",
    "locality": "Banda",
    "country": "IN",
    "postalCode": "210203",
    "latitude": "25.3957",
    "longitude": "80.7243",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 623,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 857,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 277,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 291,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180422CC5063",
    "dateOfPurchase": "2018-04-22 11:03:37",
    "extendedPrice": 4511.18,
    "customerKey": "CORICAST5104",
    "firstName": "Corine",
    "lastName": "Castaneda",
    "phoneNumber": "+1-104-490-5104",
    "email": "ccastane104@TelecomItalia.com",
    "streetAddressOfBuilding": "6024 Long Creek Boulevard",
    "city": "Hamden",
    "stateProvince": "CT",
    "locality": "New Haven",
    "country": "US",
    "postalCode": "06514",
    "latitude": "41.362",
    "longitude": "-72.9361",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 374,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 557,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 532,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 981,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191203AS7703",
    "dateOfPurchase": "2019-12-03 11:03:37",
    "extendedPrice": 14744.890000000001,
    "customerKey": "ALTASANT6271",
    "firstName": "Altagracia",
    "lastName": "Santos",
    "phoneNumber": "+590-101-997-6271",
    "email": "asantos101@NII.com",
    "streetAddressOfBuilding": "5222 Little Mountain Ride",
    "city": "Basse-Terre",
    "stateProvince": "GP",
    "locality": "Guadeloupe",
    "country": "GP",
    "postalCode": "97102 CEDEX",
    "latitude": "15.9985",
    "longitude": "-61.7255",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 854,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 457,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171101DR7286",
    "dateOfPurchase": "2017-11-01 11:03:37",
    "extendedPrice": 13998.25,
    "customerKey": "DINAREYN3524",
    "firstName": "Dinah",
    "lastName": "Reynolds",
    "phoneNumber": "+352-301-058-3524",
    "email": "dreynold301@Movil.com",
    "streetAddressOfBuilding": "5778 Red Bend Circle",
    "city": "Schifflange",
    "stateProvince": "ES",
    "locality": "Schifflange",
    "country": "LU",
    "postalCode": "L-3825",
    "latitude": "49.5062",
    "longitude": "6.028",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 705,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 970,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190118CB9253",
    "dateOfPurchase": "2019-01-18 11:03:37",
    "extendedPrice": 16534.02,
    "customerKey": "CHRIBROW8097",
    "firstName": "Christopher",
    "lastName": "Brown",
    "phoneNumber": "+1-144-985-8097",
    "email": "cbrown144@UI.com",
    "streetAddressOfBuilding": "7513 Blue Mountain Drive",
    "city": "Calgary",
    "stateProvince": "AB",
    "locality": "Calgary",
    "country": "CA",
    "postalCode": "T3S",
    "latitude": "50.9153",
    "longitude": "-113.8932",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 752,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 363,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 792,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 137,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 626,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 672,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190402OP0389",
    "dateOfPurchase": "2019-04-02 11:03:37",
    "extendedPrice": 3762.2200000000003,
    "customerKey": "OLINPITT8328",
    "firstName": "Olinda",
    "lastName": "Pittman",
    "phoneNumber": "+91-292-122-8328",
    "email": "opittman292@OTE.com",
    "streetAddressOfBuilding": "6340 Little Hill Way",
    "city": "Sengpur",
    "stateProvince": "Anklesvar",
    "locality": "Bharuch",
    "country": "IN",
    "postalCode": "393001",
    "latitude": "21.5979",
    "longitude": "73.1087",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 950,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 69,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 929,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161012LP8736",
    "dateOfPurchase": "2016-10-12 11:03:37",
    "extendedPrice": 7952.95,
    "customerKey": "LAURPRAT7526",
    "firstName": "Laura",
    "lastName": "Pratt",
    "phoneNumber": "+1-214-739-7526",
    "email": "lpratt214@NordNet.com",
    "streetAddressOfBuilding": "6148 Little Bridge Street",
    "city": "St. John's Central",
    "stateProvince": "NL",
    "locality": "St. John's ",
    "country": "CA",
    "postalCode": "A1E",
    "latitude": "47.5334",
    "longitude": "-52.7595",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 493,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 686,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 906,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 555,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 193,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160820KO0755",
    "dateOfPurchase": "2016-08-20 11:03:37",
    "extendedPrice": 10511.61,
    "customerKey": "KATHOSBO1475",
    "firstName": "Kathy",
    "lastName": "Osborne",
    "phoneNumber": "+1441-309-657-1475",
    "email": "kosborne309@Belgacom.com",
    "streetAddressOfBuilding": "1918 Little Woods Boulevard",
    "city": "Smith\u2019s",
    "stateProvince": "Smith\u2019s Parish",
    "locality": "Smith\u2019s Parish",
    "country": "BM",
    "postalCode": "HS 02",
    "latitude": "32.354",
    "longitude": "-64.7096",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 216,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 603,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 586,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 241,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 350,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 743,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190908SK6376",
    "dateOfPurchase": "2019-09-08 11:03:37",
    "extendedPrice": 3690.0200000000004,
    "customerKey": "SHANKELL3730",
    "firstName": "Shanell",
    "lastName": "Kelly",
    "phoneNumber": "+356-277-355-3730",
    "email": "skelly277@Turkcell.com",
    "streetAddressOfBuilding": "8750 Red Ditch Street",
    "city": "Swieqi",
    "stateProvince": "Is-Swieqi",
    "locality": "Is-Swieqi",
    "country": "MT",
    "postalCode": "SWQ",
    "latitude": "35.9217",
    "longitude": "14.4694",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 546,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 580,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 544,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180920OS5120",
    "dateOfPurchase": "2018-09-20 11:03:37",
    "extendedPrice": 9630.09,
    "customerKey": "ORVISWEE0979",
    "firstName": "Orville",
    "lastName": "Sweeney",
    "phoneNumber": "+91-258-901-0979",
    "email": "osweeney258@APICnet.com",
    "streetAddressOfBuilding": "654 Blue Gulch Avenue",
    "city": "Khayerbari",
    "stateProvince": "Haldibari",
    "locality": "Cooch Behar",
    "country": "IN",
    "postalCode": "735122",
    "latitude": "25.2463",
    "longitude": "88.0977",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 729,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 172,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 724,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 604,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 421,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161024GR2073",
    "dateOfPurchase": "2016-10-24 11:03:37",
    "extendedPrice": 2830.29,
    "customerKey": "GERTRAMI4797",
    "firstName": "Gertha",
    "lastName": "Ramirez",
    "phoneNumber": "+356-287-880-4797",
    "email": "gramirez287@NII.com",
    "streetAddressOfBuilding": "2754 Little Creek Ride",
    "city": "Fontana",
    "stateProvince": "Il-Fontana",
    "locality": "Il-Fontana",
    "country": "MT",
    "postalCode": "FNT",
    "latitude": "36.0375",
    "longitude": "14.2361",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 372,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 699,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190720GM7402",
    "dateOfPurchase": "2019-07-20 11:03:37",
    "extendedPrice": 881.57,
    "customerKey": "GENEMYER4370",
    "firstName": "Gene",
    "lastName": "Myers",
    "phoneNumber": "+61-106-347-4370",
    "email": "gmyers106@Bifty.com",
    "streetAddressOfBuilding": "6490 Short Ditch Avenue",
    "city": "Fadden",
    "stateProvince": "ACT",
    "locality": "CANBERRA",
    "country": "AU",
    "postalCode": "2904",
    "latitude": "-35.405",
    "longitude": "149.1166",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 443,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190121RC5943",
    "dateOfPurchase": "2019-01-21 11:03:37",
    "extendedPrice": 5060.89,
    "customerKey": "REIDCOLE7288",
    "firstName": "Reid",
    "lastName": "Cole",
    "phoneNumber": "+691-259-281-7288",
    "email": "rcole259@TelecomItalia.com",
    "streetAddressOfBuilding": "2989 Big Ditch Avenue",
    "city": "Yap",
    "stateProvince": "State of Yap",
    "locality": "State of Yap",
    "country": "FM",
    "postalCode": "96943",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 366,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 513,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 115,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 317,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180710RK2176",
    "dateOfPurchase": "2018-07-10 11:03:37",
    "extendedPrice": 395.89,
    "customerKey": "RODKENT6704",
    "firstName": "Rod",
    "lastName": "Kent",
    "phoneNumber": "+7-325-204-6704",
    "email": "rkent325@CenturyLink.com",
    "streetAddressOfBuilding": "7868 Green Bend Way",
    "city": "\u041a\u0430\u0448\u0430\u0440\u044b",
    "stateProvince": "\u0417\u0410\u0414\u041e\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "locality": "\u0417\u0410\u0414\u041e\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "country": "RU",
    "postalCode": "399210",
    "latitude": "52.4667",
    "longitude": "38.95",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 61,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190725BL3057",
    "dateOfPurchase": "2019-07-25 11:03:37",
    "extendedPrice": 6031.610000000001,
    "customerKey": "BIANLIND8466",
    "firstName": "Bianca",
    "lastName": "Lindsey",
    "phoneNumber": "+44-114-825-8466",
    "email": "blindsey114@Belgacom.com",
    "streetAddressOfBuilding": "7166 Long Bough Street",
    "city": "Wharton",
    "stateProvince": "England",
    "locality": "Cheshire",
    "country": "GB",
    "postalCode": "CW7",
    "latitude": "53.195",
    "longitude": "-2.5048",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 454,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 87,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 104,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171119DC9147",
    "dateOfPurchase": "2017-11-19 11:03:37",
    "extendedPrice": 4515.95,
    "customerKey": "DANICANT0900",
    "firstName": "Daniell",
    "lastName": "Cantrell",
    "phoneNumber": "+44-366-491-0900",
    "email": "dcantrel366@Chunghwa.com",
    "streetAddressOfBuilding": "3674 Big Canyon Ride",
    "city": "Woodside",
    "stateProvince": "England",
    "locality": "Hertfordshire",
    "country": "GB",
    "postalCode": "AL9",
    "latitude": "51.7449",
    "longitude": "-0.1984",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 905,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170816OL6367",
    "dateOfPurchase": "2017-08-16 11:03:37",
    "extendedPrice": 1099.22,
    "customerKey": "OCTALARS3958",
    "firstName": "Octavia",
    "lastName": "Larson",
    "phoneNumber": "+61-371-309-3958",
    "email": "olarson371@Telkom.com",
    "streetAddressOfBuilding": "79 Winding Tree Drive",
    "city": "Dorset Vale",
    "stateProvince": "SA",
    "locality": "South Australia",
    "country": "AU",
    "postalCode": "5157",
    "latitude": "-35.0873",
    "longitude": "138.6764",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 230,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 729,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190513PN6706",
    "dateOfPurchase": "2019-05-13 11:03:37",
    "extendedPrice": 18840.95,
    "customerKey": "PABLNORT5757",
    "firstName": "Pablo",
    "lastName": "Norton",
    "phoneNumber": "+508-145-321-5757",
    "email": "pnorton145@Verizon.com",
    "streetAddressOfBuilding": "3876 Little Gulch Way",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 955,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 114,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 743,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 993,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160824AM2269",
    "dateOfPurchase": "2016-08-24 11:03:37",
    "extendedPrice": 14200.230000000001,
    "customerKey": "AHMEMORR7725",
    "firstName": "Ahmed",
    "lastName": "Morrison",
    "phoneNumber": "+880-289-298-7725",
    "email": "amorriso289@Safaricom.com",
    "streetAddressOfBuilding": "1781 Short Gulch Road",
    "city": "Hayemchar",
    "stateProvince": "Hayemchar",
    "locality": "Chandpur",
    "country": "BD",
    "postalCode": "3660",
    "latitude": "23.0768",
    "longitude": "90.681",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 837,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 343,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 810,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 115,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 522,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170712OT9318",
    "dateOfPurchase": "2017-07-12 11:03:37",
    "extendedPrice": 60299.36,
    "customerKey": "OZELTRUO6020",
    "firstName": "Ozella",
    "lastName": "Truong",
    "phoneNumber": "+1-288-442-6020",
    "email": "otruong288@Optus.com",
    "streetAddressOfBuilding": "3757 Big Hill Road",
    "city": "Jerusalem",
    "stateProvince": "OH",
    "locality": "Monroe",
    "country": "US",
    "postalCode": "43747",
    "latitude": "39.8488",
    "longitude": "-81.0921",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 292,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 855,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 747,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 137,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 791,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 742,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191030DL4512",
    "dateOfPurchase": "2019-10-30 11:03:37",
    "extendedPrice": 11.97,
    "customerKey": "DOMILEST8584",
    "firstName": "Dominick",
    "lastName": "Lester",
    "phoneNumber": "+1-124-997-8584",
    "email": "dlester124@KDDI.com",
    "streetAddressOfBuilding": "4140 Big Hill Road",
    "city": "Baie-Comeau Northeast",
    "stateProvince": "QC",
    "locality": "Quebec",
    "country": "CA",
    "postalCode": "G4Z",
    "latitude": "51.0872",
    "longitude": "-68.632",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 3,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181008CI1499",
    "dateOfPurchase": "2018-10-08 11:03:37",
    "extendedPrice": 11178.880000000001,
    "customerKey": "CARRINGR1972",
    "firstName": "Carroll",
    "lastName": "Ingram",
    "phoneNumber": "+61-392-816-1972",
    "email": "cingram392@VimpelCom.com",
    "streetAddressOfBuilding": "9691 Blue Mountain Boulevard",
    "city": "Rocky River",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2358",
    "latitude": "-30.6167",
    "longitude": "151.5",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 528,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 910,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 368,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 106,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190127JB6127",
    "dateOfPurchase": "2019-01-27 11:03:37",
    "extendedPrice": 2027.69,
    "customerKey": "JIMMBAIL3501",
    "firstName": "Jimmy",
    "lastName": "Bailey",
    "phoneNumber": "+44-278-504-3501",
    "email": "jbailey278@CUBENet.com",
    "streetAddressOfBuilding": "2583 Red Creek Street",
    "city": "Sutton",
    "stateProvince": "England",
    "locality": "Cambridgeshire",
    "country": "GB",
    "postalCode": "CB6",
    "latitude": "52.3901",
    "longitude": "0.1176",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 260,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 321,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190929TP0977",
    "dateOfPurchase": "2019-09-29 11:03:37",
    "extendedPrice": 6735.54,
    "customerKey": "TERRPADI2636",
    "firstName": "Terry",
    "lastName": "Padilla",
    "phoneNumber": "+91-204-097-2636",
    "email": "tpadilla204@Orstom.com",
    "streetAddressOfBuilding": "5636 Blue Bend Avenue",
    "city": "Varana",
    "stateProvince": "Sami",
    "locality": "Patan",
    "country": "IN",
    "postalCode": "384245",
    "latitude": "23.5202",
    "longitude": "71.8677",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 4,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 706,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 369,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 46,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 272,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 105,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181129DE7939",
    "dateOfPurchase": "2018-11-29 11:03:37",
    "extendedPrice": 11525.46,
    "customerKey": "DARREVER1061",
    "firstName": "Darren",
    "lastName": "Everett",
    "phoneNumber": "+66-235-865-1061",
    "email": "deverett235@AlgoNet.com",
    "streetAddressOfBuilding": "7216 Long Woods Drive",
    "city": "Sida",
    "stateProvince": "Nakhon Ratchasima",
    "locality": "Nakhon Ratchasima",
    "country": "TH",
    "postalCode": "30430",
    "latitude": "14.7",
    "longitude": "102.45",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 112,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 755,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 88,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 153,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 638,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 668,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171112MV4073",
    "dateOfPurchase": "2017-11-12 11:03:37",
    "extendedPrice": 11879.49,
    "customerKey": "MALCVELA1910",
    "firstName": "Malcom",
    "lastName": "Velazquez",
    "phoneNumber": "+1-290-588-1910",
    "email": "mvelazqu290@AlgoNet.com",
    "streetAddressOfBuilding": "4046 Winding Canyon Ride",
    "city": "Calgary (Inglewood \/ Burnsland \/ Chinatown \/ East Victoria Park \/ Saddledome)",
    "stateProvince": "AB",
    "locality": "Calgary",
    "country": "CA",
    "postalCode": "T2G",
    "latitude": "51.0272",
    "longitude": "-114.0349",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 915,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 186,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 341,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 235,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 423,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 951,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190728SV3101",
    "dateOfPurchase": "2019-07-28 11:03:37",
    "extendedPrice": 1136.6200000000001,
    "customerKey": "SETHVARG7301",
    "firstName": "Seth",
    "lastName": "Vargas",
    "phoneNumber": "+91-169-678-7301",
    "email": "svargas169@CCI.com",
    "streetAddressOfBuilding": "6256 Big Gully Avenue",
    "city": "Ghungchai",
    "stateProvince": "Pooranpur",
    "locality": "Pilibhit",
    "country": "IN",
    "postalCode": "262122",
    "latitude": "28.45",
    "longitude": "80.0833",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 2,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 22,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 197,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 387,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161004RM5762",
    "dateOfPurchase": "2016-10-04 11:03:37",
    "extendedPrice": 3112.23,
    "customerKey": "REANMCCA0519",
    "firstName": "Reanna",
    "lastName": "Mccarthy",
    "phoneNumber": "+44-118-652-0519",
    "email": "rmccarth118@Telecom.com",
    "streetAddressOfBuilding": "304 Blue Mountain Avenue",
    "city": "Newby",
    "stateProvince": "England",
    "locality": "Cumbria",
    "country": "GB",
    "postalCode": "CA10",
    "latitude": "54.5843",
    "longitude": "-2.6369",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 110,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 16,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 74,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 307,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180202GM7974",
    "dateOfPurchase": "2018-02-02 11:03:37",
    "extendedPrice": 3484.13,
    "customerKey": "GERAMARS8203",
    "firstName": "Gerard",
    "lastName": "Marshall",
    "phoneNumber": "+49-229-902-8203",
    "email": "gmarshal229@Sprint.com",
    "streetAddressOfBuilding": "4803 Green Mountain Circle",
    "city": "Weidenberg",
    "stateProvince": "BY",
    "locality": "Upper Franconia",
    "country": "DE",
    "postalCode": "95466",
    "latitude": "49.9416",
    "longitude": "11.7221",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 199,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 284,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 515,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 709,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190410WA7883",
    "dateOfPurchase": "2019-04-10 11:03:37",
    "extendedPrice": 6951.35,
    "customerKey": "WILLAREL3375",
    "firstName": "Will",
    "lastName": "Arellano",
    "phoneNumber": "+44-380-474-3375",
    "email": "warellan380@Telstra.com",
    "streetAddressOfBuilding": "8756 Green Mountain Way",
    "city": "Glororum",
    "stateProvince": "England",
    "locality": "Northumberland",
    "country": "GB",
    "postalCode": "NE69",
    "latitude": "55.6048",
    "longitude": "-1.7181",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 190,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 925,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170603DS4359",
    "dateOfPurchase": "2017-06-03 11:03:37",
    "extendedPrice": 488.63,
    "customerKey": "DUDLSHOR0718",
    "firstName": "Dudley",
    "lastName": "Short",
    "phoneNumber": "+61-300-785-0718",
    "email": "dshort300@TelecomItalia.com",
    "streetAddressOfBuilding": "8027 Blue Hill Way",
    "city": "Elingamite North",
    "stateProvince": "VIC",
    "locality": "Victoria",
    "country": "AU",
    "postalCode": "3266",
    "latitude": "-38.35",
    "longitude": "143.0167",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 454,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 133,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171016TP8561",
    "dateOfPurchase": "2017-10-16 11:03:37",
    "extendedPrice": 2646.58,
    "customerKey": "TERRPADI2636",
    "firstName": "Terry",
    "lastName": "Padilla",
    "phoneNumber": "+91-204-097-2636",
    "email": "tpadilla204@Orstom.com",
    "streetAddressOfBuilding": "5636 Blue Bend Avenue",
    "city": "Varana",
    "stateProvince": "Sami",
    "locality": "Patan",
    "country": "IN",
    "postalCode": "384245",
    "latitude": "23.5202",
    "longitude": "71.8677",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 749,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 293,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 298,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 52,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191018MW1220",
    "dateOfPurchase": "2019-10-18 11:03:37",
    "extendedPrice": 34271.28,
    "customerKey": "MICKWASH4916",
    "firstName": "Mickey",
    "lastName": "Washington",
    "phoneNumber": "+1-390-622-4916",
    "email": "mwashing390@APICnet.com",
    "streetAddressOfBuilding": "6068 Green Ditch Street",
    "city": "Windsor",
    "stateProvince": "NL",
    "locality": "Newfoundland and Labrador",
    "country": "CA",
    "postalCode": "A2B",
    "latitude": "48.9499",
    "longitude": "-55.6649",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 829,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 91,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 799,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 91,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 558,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 4,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180505GP3004",
    "dateOfPurchase": "2018-05-05 11:03:37",
    "extendedPrice": 43783.64,
    "customerKey": "GWENPAUL6261",
    "firstName": "Gwendolyn",
    "lastName": "Paul",
    "phoneNumber": "+687-299-256-6261",
    "email": "gpaul299@Access.com",
    "streetAddressOfBuilding": "8911 Short Canyon Circle",
    "city": "Kouaoua",
    "stateProvince": "Kouaoua",
    "locality": "Kouaoua",
    "country": "NC",
    "postalCode": "98818",
    "latitude": "-21.3957",
    "longitude": "165.8283",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 984,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 860,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 432,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181029RS6518",
    "dateOfPurchase": "2018-10-29 11:03:37",
    "extendedPrice": 12563.94,
    "customerKey": "RICHSAWY9582",
    "firstName": "Richie",
    "lastName": "Sawyer",
    "phoneNumber": "+262-285-477-9582",
    "email": "rsawyer285@Airtel.com",
    "streetAddressOfBuilding": "7543 Short Bridge Street",
    "city": "Salazie",
    "stateProvince": "RE",
    "locality": "R\u00e9union",
    "country": "RE",
    "postalCode": "97433",
    "latitude": "-21.0273",
    "longitude": "55.539",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 272,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 294,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 814,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 826,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190806AH3257",
    "dateOfPurchase": "2019-08-06 11:03:37",
    "extendedPrice": 8637.960000000001,
    "customerKey": "ALBAHOLM3191",
    "firstName": "Alba",
    "lastName": "Holmes",
    "phoneNumber": "+61-334-390-3191",
    "email": "aholmes334@Telecom.com",
    "streetAddressOfBuilding": "3605 Little Hill Road",
    "city": "Meerlieu",
    "stateProvince": "VIC",
    "locality": "VIC FAR COUNTRY",
    "country": "AU",
    "postalCode": "3862",
    "latitude": "-38",
    "longitude": "147.4",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 955,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 485,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 364,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180617VS8797",
    "dateOfPurchase": "2018-06-17 11:03:37",
    "extendedPrice": 796.4,
    "customerKey": "VANSELL2114",
    "firstName": "Van",
    "lastName": "Sellers",
    "phoneNumber": "+1-232-235-2114",
    "email": "vsellers232@Vodafone.com",
    "streetAddressOfBuilding": "9736 Blue Bend Drive",
    "city": "Elliot Lake",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "P5A",
    "latitude": "46.3834",
    "longitude": "-82.6332",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 905,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170731BN3681",
    "dateOfPurchase": "2017-07-31 11:03:37",
    "extendedPrice": 3461.83,
    "customerKey": "BOOKNIXO3999",
    "firstName": "Booker",
    "lastName": "Nixon",
    "phoneNumber": "+1-262-711-3999",
    "email": "bnixon262@Telia.com",
    "streetAddressOfBuilding": "150 Big River Drive",
    "city": "Stronghurst",
    "stateProvince": "IL",
    "locality": "Henderson",
    "country": "US",
    "postalCode": "61480",
    "latitude": "40.7523",
    "longitude": "-90.9257",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 407,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 410,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191017LT2636",
    "dateOfPurchase": "2019-10-17 11:03:37",
    "extendedPrice": 7383.79,
    "customerKey": "LUCITODD3199",
    "firstName": "Lucinda",
    "lastName": "Todd",
    "phoneNumber": "+61-272-097-3199",
    "email": "ltodd272@Verizon.com",
    "streetAddressOfBuilding": "1105 Big Bough Ride",
    "city": "Green Head",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6514",
    "latitude": "-30.0677",
    "longitude": "114.968",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 399,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 773,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 612,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 737,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170127FZ0518",
    "dateOfPurchase": "2017-01-27 11:03:37",
    "extendedPrice": 11433.69,
    "customerKey": "FERMZAVA5969",
    "firstName": "Fermina",
    "lastName": "Zavala",
    "phoneNumber": "+32-115-523-5969",
    "email": "fzavala115@BCE.com",
    "streetAddressOfBuilding": "9678 Big Mountain Boulevard",
    "city": "Landen Waasmont",
    "stateProvince": "VLG",
    "locality": "Vlaams Brabant",
    "country": "BE",
    "postalCode": "3401",
    "latitude": "50.7333",
    "longitude": "5.0667",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 568,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 862,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 951,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180222DM5602",
    "dateOfPurchase": "2018-02-22 11:03:37",
    "extendedPrice": 14807.369999999999,
    "customerKey": "DOYLMCCA8262",
    "firstName": "Doyle",
    "lastName": "Mccarthy",
    "phoneNumber": "+502-139-210-8262",
    "email": "dmccarth139@NII.com",
    "streetAddressOfBuilding": "9065 Long Bough Boulevard",
    "city": "SAN ANTONIO LA PAZ",
    "stateProvince": "DEPTO DE EL PROGRESO",
    "locality": "DEPTO DE EL PROGRESO",
    "country": "GT",
    "postalCode": "02008",
    "latitude": "14.7497",
    "longitude": "-90.2867",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 823,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 782,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 110,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 336,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 712,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191010JB2298",
    "dateOfPurchase": "2019-10-10 11:03:37",
    "extendedPrice": 9812.330000000002,
    "customerKey": "JEREBARR4892",
    "firstName": "Jeremy",
    "lastName": "Barron",
    "phoneNumber": "+1-312-743-4892",
    "email": "jbarron312@AlgoNet.com",
    "streetAddressOfBuilding": "4209 Short Bough Street",
    "city": "Edmonton (Kaskitayo)",
    "stateProvince": "AB",
    "locality": "Edmonton",
    "country": "CA",
    "postalCode": "T6J",
    "latitude": "53.4564",
    "longitude": "-113.521",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 391,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 485,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 678,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 361,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 28,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 454,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170123PP5623",
    "dateOfPurchase": "2017-01-23 11:03:37",
    "extendedPrice": 6221.1,
    "customerKey": "PEARPATE0523",
    "firstName": "Pearlene",
    "lastName": "Patel",
    "phoneNumber": "+421-381-345-0523",
    "email": "ppatel381@APICnet.com",
    "streetAddressOfBuilding": "995 Green Ridge Road",
    "city": "Tonkovce",
    "stateProvince": "TA",
    "locality": "Dunajsk\u00e1 Streda",
    "country": "SK",
    "postalCode": "930 38",
    "latitude": "48.1187",
    "longitude": "17.4431",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 890,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170924BM5190",
    "dateOfPurchase": "2017-09-24 11:03:37",
    "extendedPrice": 1385.53,
    "customerKey": "BRENMORT8223",
    "firstName": "Brendon",
    "lastName": "Morton",
    "phoneNumber": "+44-358-736-8223",
    "email": "bmorton358@Turkcell.com",
    "streetAddressOfBuilding": "1533 Green Creek Circle",
    "city": "East Saltoun",
    "stateProvince": "Scotland",
    "locality": "East Lothian",
    "country": "GB",
    "postalCode": "EH34",
    "latitude": "55.8999",
    "longitude": "-2.8396",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 397,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191110EL5884",
    "dateOfPurchase": "2019-11-10 11:03:37",
    "extendedPrice": 17914.859999999997,
    "customerKey": "ELIALEAC4941",
    "firstName": "Elias",
    "lastName": "Leach",
    "phoneNumber": "+45-183-567-4941",
    "email": "eleach183@Swisscom.com",
    "streetAddressOfBuilding": "7491 Blue River Boulevard",
    "city": "Skanderborg",
    "stateProvince": "Horsens Kommune",
    "locality": "Horsens Kommune",
    "country": "DK",
    "postalCode": "8660",
    "latitude": "56.0399",
    "longitude": "9.9272",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 966,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 771,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 225,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 605,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 265,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160611TH4327",
    "dateOfPurchase": "2016-06-11 11:03:37",
    "extendedPrice": 9100.09,
    "customerKey": "TALIHAYN4865",
    "firstName": "Talia",
    "lastName": "Haynes",
    "phoneNumber": "+213-203-525-4865",
    "email": "thaynes203@TM.com",
    "streetAddressOfBuilding": "7183 Red Gulch Way",
    "city": "Lala Metouba",
    "stateProvince": "Boumerdes",
    "locality": "Boumerdes",
    "country": "DZ",
    "postalCode": "35004",
    "latitude": "36.9023",
    "longitude": "3.8947",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 116,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 610,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 354,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 511,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 592,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 839,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170515JS9768",
    "dateOfPurchase": "2017-05-15 11:03:37",
    "extendedPrice": 2296.42,
    "customerKey": "JOHNSTAR4269",
    "firstName": "Johnna",
    "lastName": "Stark",
    "phoneNumber": "+61-306-719-4269",
    "email": "jstark306@VimpelCom.com",
    "streetAddressOfBuilding": "4337 Short Mound Circle",
    "city": "North Baandee",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6412",
    "latitude": "-31.5833",
    "longitude": "117.9667",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 658,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190705DS8237",
    "dateOfPurchase": "2019-07-05 11:03:37",
    "extendedPrice": 6658.560000000001,
    "customerKey": "DIONSHER9973",
    "firstName": "Dion",
    "lastName": "Sherman",
    "phoneNumber": "+44-354-093-9973",
    "email": "dsherman354@Safaricom.com",
    "streetAddressOfBuilding": "2563 Red Mound Avenue",
    "city": "Braaid",
    "stateProvince": "",
    "locality": "Isle of Man",
    "country": "GB",
    "postalCode": "IM4",
    "latitude": "54.2195",
    "longitude": "-4.7986",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 595,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 742,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 307,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180427BN3802",
    "dateOfPurchase": "2018-04-27 11:03:37",
    "extendedPrice": 19995.19,
    "customerKey": "BOOKNIXO3999",
    "firstName": "Booker",
    "lastName": "Nixon",
    "phoneNumber": "+1-262-711-3999",
    "email": "bnixon262@Telia.com",
    "streetAddressOfBuilding": "150 Big River Drive",
    "city": "Stronghurst",
    "stateProvince": "IL",
    "locality": "Henderson",
    "country": "US",
    "postalCode": "61480",
    "latitude": "40.7523",
    "longitude": "-90.9257",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 423,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 737,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 837,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 462,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 672,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 850,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180903AB3586",
    "dateOfPurchase": "2018-09-03 11:03:37",
    "extendedPrice": 453.12,
    "customerKey": "ABELBARR2892",
    "firstName": "Abel",
    "lastName": "Barron",
    "phoneNumber": "+1670-307-108-2892",
    "email": "abarron307@UI.com",
    "streetAddressOfBuilding": "5233 Red River Way",
    "city": "Saipan",
    "stateProvince": "Saipan",
    "locality": "Saipan",
    "country": "MP",
    "postalCode": "96950",
    "latitude": "15.1685",
    "longitude": "145.7408",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 768,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190817EH5596",
    "dateOfPurchase": "2019-08-17 11:03:37",
    "extendedPrice": 9013.74,
    "customerKey": "ENIDHOLL0618",
    "firstName": "Enid",
    "lastName": "Holland",
    "phoneNumber": "+44-252-956-0618",
    "email": "eholland252@OpenWorld.com",
    "streetAddressOfBuilding": "3465 Short Gulch Street",
    "city": "Gatcombe",
    "stateProvince": "England",
    "locality": "Isle of Wight",
    "country": "GB",
    "postalCode": "PO30",
    "latitude": "50.6916",
    "longitude": "-1.3132",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 397,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 429,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170114CI1201",
    "dateOfPurchase": "2017-01-14 11:03:37",
    "extendedPrice": 25704.11,
    "customerKey": "CARRINGR1972",
    "firstName": "Carroll",
    "lastName": "Ingram",
    "phoneNumber": "+61-392-816-1972",
    "email": "cingram392@VimpelCom.com",
    "streetAddressOfBuilding": "9691 Blue Mountain Boulevard",
    "city": "Rocky River",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2358",
    "latitude": "-30.6167",
    "longitude": "151.5",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 164,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 518,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 948,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 859,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170208RS4991",
    "dateOfPurchase": "2017-02-08 11:03:37",
    "extendedPrice": 428.97,
    "customerKey": "RICHSAWY9582",
    "firstName": "Richie",
    "lastName": "Sawyer",
    "phoneNumber": "+262-285-477-9582",
    "email": "rsawyer285@Airtel.com",
    "streetAddressOfBuilding": "7543 Short Bridge Street",
    "city": "Salazie",
    "stateProvince": "RE",
    "locality": "R\u00e9union",
    "country": "RE",
    "postalCode": "97433",
    "latitude": "-21.0273",
    "longitude": "55.539",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 543,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190808WM5750",
    "dateOfPurchase": "2019-08-08 11:03:37",
    "extendedPrice": 26826.239999999998,
    "customerKey": "WMMORE0896",
    "firstName": "Wm",
    "lastName": "Moreno",
    "phoneNumber": "+63-103-266-0896",
    "email": "wmoreno103@OpenWorld.com",
    "streetAddressOfBuilding": "2714 Winding River Boulevard",
    "city": "Manila CPO-PO Box# 1400 to 1499",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "1054",
    "latitude": "14.0494",
    "longitude": "121.5101",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 804,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 715,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 561,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 628,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 718,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180916EH0079",
    "dateOfPurchase": "2018-09-16 11:03:37",
    "extendedPrice": 7096.04,
    "customerKey": "ENIDHOLL0618",
    "firstName": "Enid",
    "lastName": "Holland",
    "phoneNumber": "+44-252-956-0618",
    "email": "eholland252@OpenWorld.com",
    "streetAddressOfBuilding": "3465 Short Gulch Street",
    "city": "Gatcombe",
    "stateProvince": "England",
    "locality": "Isle of Wight",
    "country": "GB",
    "postalCode": "PO30",
    "latitude": "50.6916",
    "longitude": "-1.3132",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 947,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 864,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 435,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180515SP7396",
    "dateOfPurchase": "2018-05-15 11:03:37",
    "extendedPrice": 6503.68,
    "customerKey": "SCOTPHAN8012",
    "firstName": "Scotty",
    "lastName": "Phan",
    "phoneNumber": "+1-236-627-8012",
    "email": "sphan236@LookData.com",
    "streetAddressOfBuilding": "4021 Red Bough Drive",
    "city": "Kinston",
    "stateProvince": "NC",
    "locality": "Lenoir",
    "country": "US",
    "postalCode": "28503",
    "latitude": "35.3191",
    "longitude": "-77.595",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 879,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 103,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191107RI6687",
    "dateOfPurchase": "2019-11-07 11:03:37",
    "extendedPrice": 3650.8500000000004,
    "customerKey": "REGIIBAR8447",
    "firstName": "Regine",
    "lastName": "Ibarra",
    "phoneNumber": "+373-109-864-8447",
    "email": "ribarra109@Zain.com",
    "streetAddressOfBuilding": "6229 Blue Canyon Street",
    "city": "Bobletici",
    "stateProvince": "Singerei",
    "locality": "Singerei",
    "country": "MD",
    "postalCode": "MD-6219",
    "latitude": "47.4664",
    "longitude": "28.0544",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 915,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181029DZ4377",
    "dateOfPurchase": "2018-10-29 11:03:37",
    "extendedPrice": 1651.8600000000001,
    "customerKey": "DONZHAN7286",
    "firstName": "Don",
    "lastName": "Zhang",
    "phoneNumber": "+351-111-858-7286",
    "email": "dzhang111@AlgoNet.com",
    "streetAddressOfBuilding": "3029 Short River Drive",
    "city": "Barroselas",
    "stateProvince": "Barroselas",
    "locality": "Viana do Castelo",
    "country": "PT",
    "postalCode": "4905-404",
    "latitude": "41.6474",
    "longitude": "-8.7007",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 414,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170405WA5929",
    "dateOfPurchase": "2017-04-05 11:03:37",
    "extendedPrice": 1426.83,
    "customerKey": "WILLAREL3375",
    "firstName": "Will",
    "lastName": "Arellano",
    "phoneNumber": "+44-380-474-3375",
    "email": "warellan380@Telstra.com",
    "streetAddressOfBuilding": "8756 Green Mountain Way",
    "city": "Glororum",
    "stateProvince": "England",
    "locality": "Northumberland",
    "country": "GB",
    "postalCode": "NE69",
    "latitude": "55.6048",
    "longitude": "-1.7181",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 717,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190906TH9987",
    "dateOfPurchase": "2019-09-06 11:03:37",
    "extendedPrice": 3005.81,
    "customerKey": "TIJUHOGA5010",
    "firstName": "Tijuana",
    "lastName": "Hogan",
    "phoneNumber": "+44-119-817-5010",
    "email": "thogan119@Telenor.com",
    "streetAddressOfBuilding": "106 Short Bend Boulevard",
    "city": "Staffin",
    "stateProvince": "Scotland",
    "locality": "Highland",
    "country": "GB",
    "postalCode": "IV51",
    "latitude": "57.6241",
    "longitude": "-6.2066",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 215,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 242,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180428PP9433",
    "dateOfPurchase": "2018-04-28 11:03:37",
    "extendedPrice": 11485.32,
    "customerKey": "PEARPATE0523",
    "firstName": "Pearlene",
    "lastName": "Patel",
    "phoneNumber": "+421-381-345-0523",
    "email": "ppatel381@APICnet.com",
    "streetAddressOfBuilding": "995 Green Ridge Road",
    "city": "Tonkovce",
    "stateProvince": "TA",
    "locality": "Dunajsk\u00e1 Streda",
    "country": "SK",
    "postalCode": "930 38",
    "latitude": "48.1187",
    "longitude": "17.4431",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 864,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 444,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170629EB3617",
    "dateOfPurchase": "2017-06-29 11:03:37",
    "extendedPrice": 17984.969999999998,
    "customerKey": "ETHABUCH8761",
    "firstName": "Etha",
    "lastName": "Buchanan",
    "phoneNumber": "+52-273-719-8761",
    "email": "ebuchana273@Turkcell.com",
    "streetAddressOfBuilding": "6598 Long Gulch Boulevard",
    "city": "La Lagunita",
    "stateProvince": "CHH",
    "locality": "Camargo",
    "country": "MX",
    "postalCode": "33730",
    "latitude": "27.8494",
    "longitude": "-104.6806",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 899,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 4,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190714TE9171",
    "dateOfPurchase": "2019-07-14 11:03:37",
    "extendedPrice": 10999.93,
    "customerKey": "TREAEVAN7486",
    "firstName": "Treasa",
    "lastName": "Evans",
    "phoneNumber": "+351-231-683-7486",
    "email": "tevans231@PLDT.com",
    "streetAddressOfBuilding": "8833 Winding Ditch Street",
    "city": "Corti\u00e7\u00f3is",
    "stateProvince": "Benfica Do Ribatejo",
    "locality": "Almeirim",
    "country": "PT",
    "postalCode": "2080-383",
    "latitude": "39.1374",
    "longitude": "-8.6773",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 457,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 544,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 98,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 730,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161114BS3924",
    "dateOfPurchase": "2016-11-14 11:03:37",
    "extendedPrice": 1506.96,
    "customerKey": "BERNSCHR0928",
    "firstName": "Bernard",
    "lastName": "Schroeder",
    "phoneNumber": "+1-208-654-0928",
    "email": "bschroed208@DaxNet.com",
    "streetAddressOfBuilding": "4832 Little Woods Circle",
    "city": "Saint-Prime",
    "stateProvince": "QC",
    "locality": "Saguenay\/Lac-Saint-Jean",
    "country": "CA",
    "postalCode": "G8J",
    "latitude": "48.5834",
    "longitude": "-72.3324",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 504,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170123HG0806",
    "dateOfPurchase": "2017-01-23 11:03:37",
    "extendedPrice": 6973.110000000001,
    "customerKey": "HERBGALL4253",
    "firstName": "Herbert",
    "lastName": "Gallagher",
    "phoneNumber": "+44-248-752-4253",
    "email": "hgallagh248@Etisalat.com",
    "streetAddressOfBuilding": "2803 Short Canyon Road",
    "city": "Holmsgarth",
    "stateProvince": "Scotland",
    "locality": "Shetland Islands",
    "country": "GB",
    "postalCode": "ZE1",
    "latitude": "60.1464",
    "longitude": "-1.2132",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 780,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 107,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 762,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 780,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190407DS0904",
    "dateOfPurchase": "2019-04-07 11:03:37",
    "extendedPrice": 11422.970000000001,
    "customerKey": "DUDLSHOR0718",
    "firstName": "Dudley",
    "lastName": "Short",
    "phoneNumber": "+61-300-785-0718",
    "email": "dshort300@TelecomItalia.com",
    "streetAddressOfBuilding": "8027 Blue Hill Way",
    "city": "Elingamite North",
    "stateProvince": "VIC",
    "locality": "Victoria",
    "country": "AU",
    "postalCode": "3266",
    "latitude": "-38.35",
    "longitude": "143.0167",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 122,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 881,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 300,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180808JW3005",
    "dateOfPurchase": "2018-08-08 11:03:37",
    "extendedPrice": 5474.49,
    "customerKey": "JEANWOLF9903",
    "firstName": "Jeanna",
    "lastName": "Wolf",
    "phoneNumber": "+687-327-003-9903",
    "email": "jwolf327@Telstra.com",
    "streetAddressOfBuilding": "6446 Big Mound Drive",
    "city": "Ou\u00e5co",
    "stateProvince": "Voh",
    "locality": "Voh",
    "country": "NC",
    "postalCode": "98883",
    "latitude": "-20.8353",
    "longitude": "164.4694",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 483,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 768,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180108BR3201",
    "dateOfPurchase": "2018-01-08 11:03:37",
    "extendedPrice": 4465.4800000000005,
    "customerKey": "BRYCRAYM0106",
    "firstName": "Bryce",
    "lastName": "Raymond",
    "phoneNumber": "+61-216-290-0106",
    "email": "braymond216@Sprint.com",
    "streetAddressOfBuilding": "9607 Little Bough Way",
    "city": "Environa",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2620",
    "latitude": "-35.3914",
    "longitude": "149.2166",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 736,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 316,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190403PN5090",
    "dateOfPurchase": "2019-04-03 11:03:37",
    "extendedPrice": 5185.51,
    "customerKey": "PABLNORT5757",
    "firstName": "Pablo",
    "lastName": "Norton",
    "phoneNumber": "+508-145-321-5757",
    "email": "pnorton145@Verizon.com",
    "streetAddressOfBuilding": "3876 Little Gulch Way",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 799,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170620KA3478",
    "dateOfPurchase": "2017-06-20 11:03:37",
    "extendedPrice": 8116.800000000001,
    "customerKey": "KIESARIA9296",
    "firstName": "Kiesha",
    "lastName": "Arias",
    "phoneNumber": "+299-163-472-9296",
    "email": "karias163@GlasNET.com",
    "streetAddressOfBuilding": "4674 Winding River Way",
    "city": "Qaanaaq",
    "stateProvince": null,
    "locality": null,
    "country": "GL",
    "postalCode": "3971",
    "latitude": "77.4894",
    "longitude": "-69.3322",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 663,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 270,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 778,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 449,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160627GM0845",
    "dateOfPurchase": "2016-06-27 11:03:37",
    "extendedPrice": 1501.5700000000002,
    "customerKey": "GENEMYER4370",
    "firstName": "Gene",
    "lastName": "Myers",
    "phoneNumber": "+61-106-347-4370",
    "email": "gmyers106@Bifty.com",
    "streetAddressOfBuilding": "6490 Short Ditch Avenue",
    "city": "Fadden",
    "stateProvince": "ACT",
    "locality": "CANBERRA",
    "country": "AU",
    "postalCode": "2904",
    "latitude": "-35.405",
    "longitude": "149.1166",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 225,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 814,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190804DM7927",
    "dateOfPurchase": "2019-08-04 11:03:37",
    "extendedPrice": 36458.08,
    "customerKey": "DOYLMCCA8262",
    "firstName": "Doyle",
    "lastName": "Mccarthy",
    "phoneNumber": "+502-139-210-8262",
    "email": "dmccarth139@NII.com",
    "streetAddressOfBuilding": "9065 Long Bough Boulevard",
    "city": "SAN ANTONIO LA PAZ",
    "stateProvince": "DEPTO DE EL PROGRESO",
    "locality": "DEPTO DE EL PROGRESO",
    "country": "GT",
    "postalCode": "02008",
    "latitude": "14.7497",
    "longitude": "-90.2867",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 724,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 847,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 284,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 855,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 832,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180620SB8559",
    "dateOfPurchase": "2018-06-20 11:03:37",
    "extendedPrice": 10025.220000000001,
    "customerKey": "SANGBUSH7436",
    "firstName": "Sang",
    "lastName": "Bush",
    "phoneNumber": "+262-227-134-7436",
    "email": "sbush227@PTCL.com",
    "streetAddressOfBuilding": "5075 Red Ditch Ride",
    "city": "Mamoudzou",
    "stateProvince": "Mamoudzou",
    "locality": "Mamoudzou",
    "country": "YT",
    "postalCode": "97680",
    "latitude": "-12.7823",
    "longitude": "45.2288",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 354,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 521,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 814,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 555,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 616,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 508,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170304CC5131",
    "dateOfPurchase": "2017-03-04 11:03:37",
    "extendedPrice": 835.12,
    "customerKey": "CORNCARS5218",
    "firstName": "Cornell",
    "lastName": "Carson",
    "phoneNumber": "+35818-207-620-5218",
    "email": "ccarson207@cerist.com",
    "streetAddressOfBuilding": "1471 Red Gulch Boulevard",
    "city": "V\u00e5rd\u00f6",
    "stateProvince": "V\u00e5rd\u00f6",
    "locality": "V\u00e5rd\u00f6",
    "country": "AX",
    "postalCode": "22550",
    "latitude": "60.2607",
    "longitude": "20.3725",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 949,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190917CC4214",
    "dateOfPurchase": "2019-09-17 11:03:37",
    "extendedPrice": 29218.81,
    "customerKey": "CHARCONR9005",
    "firstName": "Charlie",
    "lastName": "Conrad",
    "phoneNumber": "+61-320-708-9005",
    "email": "cconrad320@Chunghwa.com",
    "streetAddressOfBuilding": "3435 Short Gulch Circle",
    "city": "Boorabee Park",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2480",
    "latitude": "-28.7522",
    "longitude": "153.2836",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 275,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 437,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 319,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 939,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 549,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181217NV5054",
    "dateOfPurchase": "2018-12-17 11:03:37",
    "extendedPrice": 2835.37,
    "customerKey": "NOEVINC2337",
    "firstName": "Noe",
    "lastName": "Vincent",
    "phoneNumber": "+61-170-047-2337",
    "email": "nvincent170@Telefonica.com",
    "streetAddressOfBuilding": "7838 Long Gulch Boulevard",
    "city": "Arkstone",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2795",
    "latitude": "-33.4549",
    "longitude": "149.6841",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 201,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 512,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170612WB5832",
    "dateOfPurchase": "2017-06-12 11:03:37",
    "extendedPrice": 91.79,
    "customerKey": "WHITBARB9108",
    "firstName": "Whitley",
    "lastName": "Barber",
    "phoneNumber": "+692-241-205-9108",
    "email": "wbarber241@Sprint.com",
    "streetAddressOfBuilding": "9524 Winding Mound Road",
    "city": "Ebeye",
    "stateProvince": "Ailinginae",
    "locality": "Ailinginae",
    "country": "MH",
    "postalCode": "96970",
    "latitude": "11.1405",
    "longitude": "166.4103",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 137,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191117ES4832",
    "dateOfPurchase": "2019-11-17 11:03:37",
    "extendedPrice": 3798.9800000000005,
    "customerKey": "ELVASALA6803",
    "firstName": "Elva",
    "lastName": "Salazar",
    "phoneNumber": "+44-120-007-6803",
    "email": "esalazar120@Etisalat.com",
    "streetAddressOfBuilding": "6426 Blue Ditch Way",
    "city": "Silvercraigs",
    "stateProvince": "Scotland",
    "locality": "Argyll and Bute",
    "country": "GB",
    "postalCode": "PA31",
    "latitude": "56.148",
    "longitude": "-5.4391",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 137,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 916,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 249,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180627LV8037",
    "dateOfPurchase": "2018-06-27 11:03:37",
    "extendedPrice": 855.1400000000001,
    "customerKey": "LOGAVAUG6433",
    "firstName": "Logan",
    "lastName": "Vaughn",
    "phoneNumber": "+1-150-280-6433",
    "email": "lvaughn150@NetCom.com",
    "streetAddressOfBuilding": "7337 Little Stream Drive",
    "city": "Scarborough (Cliffside \/ Cliffcrest \/ Scarborough Village West)",
    "stateProvince": "ON",
    "locality": "Scarborough",
    "country": "CA",
    "postalCode": "M1M",
    "latitude": "43.7247",
    "longitude": "-79.2312",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 286,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181229ED4174",
    "dateOfPurchase": "2018-12-29 11:03:37",
    "extendedPrice": 7392.99,
    "customerKey": "EMELDORS1769",
    "firstName": "Emelina",
    "lastName": "Dorsey",
    "phoneNumber": "+91-274-481-1769",
    "email": "edorsey274@NordNet.com",
    "streetAddressOfBuilding": "1256 Blue Creek Ride",
    "city": "Maheji",
    "stateProvince": "Pachora",
    "locality": "Jalgaon",
    "country": "IN",
    "postalCode": "425115",
    "latitude": "20.7935",
    "longitude": "75.4065",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 198,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 803,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190924GM1725",
    "dateOfPurchase": "2019-09-24 11:03:37",
    "extendedPrice": 3203.44,
    "customerKey": "GERAMARS8203",
    "firstName": "Gerard",
    "lastName": "Marshall",
    "phoneNumber": "+49-229-902-8203",
    "email": "gmarshal229@Sprint.com",
    "streetAddressOfBuilding": "4803 Green Mountain Circle",
    "city": "Weidenberg",
    "stateProvince": "BY",
    "locality": "Upper Franconia",
    "country": "DE",
    "postalCode": "95466",
    "latitude": "49.9416",
    "longitude": "11.7221",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 72,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 69,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 565,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171228KH9544",
    "dateOfPurchase": "2017-12-28 11:03:37",
    "extendedPrice": 17458.56,
    "customerKey": "KURTHESS8667",
    "firstName": "Kurt",
    "lastName": "Hess",
    "phoneNumber": "+44-122-918-8667",
    "email": "khess122@TM.com",
    "streetAddressOfBuilding": "2502 Big Bridge Drive",
    "city": "Harpsdale",
    "stateProvince": "Scotland",
    "locality": "Highland",
    "country": "GB",
    "postalCode": "KW12",
    "latitude": "58.4197",
    "longitude": "-3.5854",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 887,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 935,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 792,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 569,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 161,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180605AC8646",
    "dateOfPurchase": "2018-06-05 11:03:37",
    "extendedPrice": 50800.850000000006,
    "customerKey": "ALEACRAI8082",
    "firstName": "Alease",
    "lastName": "Craig",
    "phoneNumber": "+91-362-122-8082",
    "email": "acraig362@Telus.com",
    "streetAddressOfBuilding": "5980 Big Gulch Street",
    "city": "Cheldiganipalle",
    "stateProvince": "Palamaner",
    "locality": "Chittoor",
    "country": "IN",
    "postalCode": "517424",
    "latitude": "13.9516",
    "longitude": "78.0767",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 930,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 464,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 771,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190411TJ3965",
    "dateOfPurchase": "2019-04-11 11:03:37",
    "extendedPrice": 11416.289999999999,
    "customerKey": "TEDJOHN4177",
    "firstName": "Ted",
    "lastName": "Johnson",
    "phoneNumber": "+1-146-020-4177",
    "email": "tjohnson146@ICom.com",
    "streetAddressOfBuilding": "4486 Long Woods Boulevard",
    "city": "North Las Vegas",
    "stateProvince": "NV",
    "locality": "Clark",
    "country": "US",
    "postalCode": "89085",
    "latitude": "36.3097",
    "longitude": "-115.1981",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 640,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 598,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 169,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 276,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 302,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180830AH7565",
    "dateOfPurchase": "2018-08-30 11:03:37",
    "extendedPrice": 14032.52,
    "customerKey": "ANDRHENS7755",
    "firstName": "Andres",
    "lastName": "Henson",
    "phoneNumber": "+598-365-690-7755",
    "email": "ahenson365@ICom.com",
    "streetAddressOfBuilding": "7119 Red Canyon Drive",
    "city": "Villa Mu\u00f1oz Retiro",
    "stateProvince": "Montevideo",
    "locality": "Montevideo",
    "country": "UY",
    "postalCode": "11800",
    "latitude": "-34.8865",
    "longitude": "-56.1756",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 408,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 724,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 987,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 491,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180301GT7794",
    "dateOfPurchase": "2018-03-01 11:03:37",
    "extendedPrice": 1012.1,
    "customerKey": "GRAITRUO2626",
    "firstName": "Graig",
    "lastName": "Truong",
    "phoneNumber": "+91-162-383-2626",
    "email": "gtruong162@PTCL.com",
    "streetAddressOfBuilding": "2041 Little Mound Road",
    "city": "Dakshin Dhalkar",
    "stateProvince": "Alipurduar",
    "locality": "Jalpaiguri",
    "country": "IN",
    "postalCode": "736208",
    "latitude": "24.1556",
    "longitude": "87.6238",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 290,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191216RC5331",
    "dateOfPurchase": "2019-12-16 11:03:37",
    "extendedPrice": 34003.85,
    "customerKey": "REUBCOMP1587",
    "firstName": "Reuben",
    "lastName": "Compton",
    "phoneNumber": "+66-171-872-1587",
    "email": "rcompton171@Vodafone.com",
    "streetAddressOfBuilding": "8003 Long Bough Boulevard",
    "city": "Muang Pattani",
    "stateProvince": "Pattani",
    "locality": "Pattani",
    "country": "TH",
    "postalCode": "94000",
    "latitude": "6.758",
    "longitude": "101.3775",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 659,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 861,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 516,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 811,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 502,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 916,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180723TS5297",
    "dateOfPurchase": "2018-07-23 11:03:37",
    "extendedPrice": 313.88,
    "customerKey": "TANISOLI9777",
    "firstName": "Tanika",
    "lastName": "Solis",
    "phoneNumber": "+298-341-651-9777",
    "email": "tsolis341@BT.com",
    "streetAddressOfBuilding": "6462 Short Canyon Way",
    "city": "Elduvik",
    "stateProvince": null,
    "locality": null,
    "country": "FO",
    "postalCode": "478",
    "latitude": "62.2833",
    "longitude": "-6.9",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 532,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170826SP6094",
    "dateOfPurchase": "2017-08-26 11:03:37",
    "extendedPrice": 12751.91,
    "customerKey": "SCOTPHAN8012",
    "firstName": "Scotty",
    "lastName": "Phan",
    "phoneNumber": "+1-236-627-8012",
    "email": "sphan236@LookData.com",
    "streetAddressOfBuilding": "4021 Red Bough Drive",
    "city": "Kinston",
    "stateProvince": "NC",
    "locality": "Lenoir",
    "country": "US",
    "postalCode": "28503",
    "latitude": "35.3191",
    "longitude": "-77.595",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 194,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 323,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 834,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 127,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 723,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190913HB3747",
    "dateOfPurchase": "2019-09-13 11:03:37",
    "extendedPrice": 21458.100000000002,
    "customerKey": "HARRBREN5971",
    "firstName": "Harry",
    "lastName": "Brennan",
    "phoneNumber": "+91-230-520-5971",
    "email": "hbrennan230@Rogers.com",
    "streetAddressOfBuilding": "5237 Big Bough Road",
    "city": "Narkul",
    "stateProvince": "Naugarh",
    "locality": "Siddharthnagar",
    "country": "IN",
    "postalCode": "272202",
    "latitude": "27.1231",
    "longitude": "83.1086",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 849,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 96,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 958,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 487,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180530MV0301",
    "dateOfPurchase": "2018-05-30 11:03:37",
    "extendedPrice": 2003.2600000000002,
    "customerKey": "MALCVELA1910",
    "firstName": "Malcom",
    "lastName": "Velazquez",
    "phoneNumber": "+1-290-588-1910",
    "email": "mvelazqu290@AlgoNet.com",
    "streetAddressOfBuilding": "4046 Winding Canyon Ride",
    "city": "Calgary (Inglewood \/ Burnsland \/ Chinatown \/ East Victoria Park \/ Saddledome)",
    "stateProvince": "AB",
    "locality": "Calgary",
    "country": "CA",
    "postalCode": "T2G",
    "latitude": "51.0272",
    "longitude": "-114.0349",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 574,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171206EP5924",
    "dateOfPurchase": "2017-12-06 11:03:37",
    "extendedPrice": 15723.490000000002,
    "customerKey": "ETTAPOLL5811",
    "firstName": "Etta",
    "lastName": "Pollard",
    "phoneNumber": "+46-339-808-5811",
    "email": "epollard339@WorldNet.com",
    "streetAddressOfBuilding": "9492 Long Canyon Ride",
    "city": "\u00d6stersund",
    "stateProvince": "Z",
    "locality": "J\u00e4mtland",
    "country": "SE",
    "postalCode": "839 30",
    "latitude": "63.1792",
    "longitude": "14.6357",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 564,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 823,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 803,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 507,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 304,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190712EB1745",
    "dateOfPurchase": "2019-07-12 11:03:37",
    "extendedPrice": 2620.9900000000002,
    "customerKey": "ELNOBLAN0165",
    "firstName": "Elnora",
    "lastName": "Blankenship",
    "phoneNumber": "+1-286-027-0165",
    "email": "eblanken286@Bifty.com",
    "streetAddressOfBuilding": "6504 Big Tree Circle",
    "city": "Saint-Hippolyte",
    "stateProvince": "QC",
    "locality": "Laurentides",
    "country": "CA",
    "postalCode": "J8A",
    "latitude": "45.9334",
    "longitude": "-74.0159",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 751,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181219JS8074",
    "dateOfPurchase": "2018-12-19 11:03:37",
    "extendedPrice": 160.72,
    "customerKey": "JAZMSMIT2096",
    "firstName": "Jazmin",
    "lastName": "Smith",
    "phoneNumber": "+1-267-801-2096",
    "email": "jsmith267@Softbank.com",
    "streetAddressOfBuilding": "7103 Short Canyon Drive",
    "city": "Shelby",
    "stateProvince": "AL",
    "locality": "Shelby",
    "country": "US",
    "postalCode": "35143",
    "latitude": "33.0785",
    "longitude": "-86.5536",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 328,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180821GM9162",
    "dateOfPurchase": "2018-08-21 11:03:37",
    "extendedPrice": 22689.9,
    "customerKey": "GENEMYER4370",
    "firstName": "Gene",
    "lastName": "Myers",
    "phoneNumber": "+61-106-347-4370",
    "email": "gmyers106@Bifty.com",
    "streetAddressOfBuilding": "6490 Short Ditch Avenue",
    "city": "Fadden",
    "stateProvince": "ACT",
    "locality": "CANBERRA",
    "country": "AU",
    "postalCode": "2904",
    "latitude": "-35.405",
    "longitude": "149.1166",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 754,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 584,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 799,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 638,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 493,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 754,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190502PN2977",
    "dateOfPurchase": "2019-05-02 11:03:37",
    "extendedPrice": 9291.119999999999,
    "customerKey": "PABLNORT5757",
    "firstName": "Pablo",
    "lastName": "Norton",
    "phoneNumber": "+508-145-321-5757",
    "email": "pnorton145@Verizon.com",
    "streetAddressOfBuilding": "3876 Little Gulch Way",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 491,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 279,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 303,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 53,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 62,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180217KS1717",
    "dateOfPurchase": "2018-02-17 11:03:37",
    "extendedPrice": 7005.790000000001,
    "customerKey": "KELLSTEP6031",
    "firstName": "Kelley",
    "lastName": "Stephens",
    "phoneNumber": "+91-378-725-6031",
    "email": "kstephen378@Unicom.com",
    "streetAddressOfBuilding": "498 Green Creek Circle",
    "city": "Bhadas",
    "stateProvince": "Bhulath",
    "locality": "Kapurthala",
    "country": "IN",
    "postalCode": "144622",
    "latitude": "31.5864",
    "longitude": "75.5087",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 226,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 548,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 45,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 852,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180801BL9828",
    "dateOfPurchase": "2018-08-01 11:03:37",
    "extendedPrice": 9636.26,
    "customerKey": "BIANLIND8466",
    "firstName": "Bianca",
    "lastName": "Lindsey",
    "phoneNumber": "+44-114-825-8466",
    "email": "blindsey114@Belgacom.com",
    "streetAddressOfBuilding": "7166 Long Bough Street",
    "city": "Wharton",
    "stateProvince": "England",
    "locality": "Cheshire",
    "country": "GB",
    "postalCode": "CW7",
    "latitude": "53.195",
    "longitude": "-2.5048",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 321,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 731,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 972,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190921DZ5279",
    "dateOfPurchase": "2019-09-21 11:03:37",
    "extendedPrice": 4395.95,
    "customerKey": "DONZHAN7286",
    "firstName": "Don",
    "lastName": "Zhang",
    "phoneNumber": "+351-111-858-7286",
    "email": "dzhang111@AlgoNet.com",
    "streetAddressOfBuilding": "3029 Short River Drive",
    "city": "Barroselas",
    "stateProvince": "Barroselas",
    "locality": "Viana do Castelo",
    "country": "PT",
    "postalCode": "4905-404",
    "latitude": "41.6474",
    "longitude": "-8.7007",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 400,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 400,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 791,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 364,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180910JG9512",
    "dateOfPurchase": "2018-09-10 11:03:37",
    "extendedPrice": 8247.050000000001,
    "customerKey": "JOELGUEV4189",
    "firstName": "Joel",
    "lastName": "Guevara",
    "phoneNumber": "+356-271-912-4189",
    "email": "jguevara271@OpenWorld.com",
    "streetAddressOfBuilding": "6465 Short Mountain Drive",
    "city": "\u0126amrun",
    "stateProvince": "Il-\u0126amrun",
    "locality": "Il-\u0126amrun",
    "country": "MT",
    "postalCode": "HMR",
    "latitude": "35.8869",
    "longitude": "14.4883",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 999,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 416,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 845,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 323,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 815,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 77,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180927DC6966",
    "dateOfPurchase": "2018-09-27 11:03:37",
    "extendedPrice": 59508.26,
    "customerKey": "DENNCAMP5794",
    "firstName": "Dennis",
    "lastName": "Campbell",
    "phoneNumber": "+61-316-812-5794",
    "email": "dcampbel316@SingTel.com",
    "streetAddressOfBuilding": "8638 Green Mountain Ride",
    "city": "Eugowra",
    "stateProvince": "NSW",
    "locality": "NEW CNTRY WEST",
    "country": "AU",
    "postalCode": "2806",
    "latitude": "-33.4273",
    "longitude": "148.3714",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 978,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 837,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 685,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 476,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 752,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 888,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191119HB7872",
    "dateOfPurchase": "2019-11-19 11:03:37",
    "extendedPrice": 9762.17,
    "customerKey": "HARRBREN5971",
    "firstName": "Harry",
    "lastName": "Brennan",
    "phoneNumber": "+91-230-520-5971",
    "email": "hbrennan230@Rogers.com",
    "streetAddressOfBuilding": "5237 Big Bough Road",
    "city": "Narkul",
    "stateProvince": "Naugarh",
    "locality": "Siddharthnagar",
    "country": "IN",
    "postalCode": "272202",
    "latitude": "27.1231",
    "longitude": "83.1086",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 429,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 721,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 303,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 374,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 510,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 986,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180309MP0733",
    "dateOfPurchase": "2018-03-09 11:03:37",
    "extendedPrice": 2805.72,
    "customerKey": "MARLPOTT3254",
    "firstName": "Marlyn",
    "lastName": "Potts",
    "phoneNumber": "+1-338-344-3254",
    "email": "mpotts338@Safaricom.com",
    "streetAddressOfBuilding": "9983 Long Tree Avenue",
    "city": "Fernwood",
    "stateProvince": "MS",
    "locality": "Pike",
    "country": "US",
    "postalCode": "39635",
    "latitude": "31.1855",
    "longitude": "-90.449",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 835,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 282,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 69,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 74,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170330KS4109",
    "dateOfPurchase": "2017-03-30 11:03:37",
    "extendedPrice": 1716.5600000000002,
    "customerKey": "KENYSUMM1295",
    "firstName": "Kenyetta",
    "lastName": "Summers",
    "phoneNumber": "+60-237-402-1295",
    "email": "ksummers237@Vodafone.com",
    "streetAddressOfBuilding": "2507 Blue River Circle",
    "city": "Kuantan",
    "stateProvince": "PHG",
    "locality": "Pahang",
    "country": "MY",
    "postalCode": "25503",
    "latitude": "3.825",
    "longitude": "103.3239",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 344,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191030FZ4657",
    "dateOfPurchase": "2019-10-30 11:03:37",
    "extendedPrice": 2809.05,
    "customerKey": "FERMZAVA5969",
    "firstName": "Fermina",
    "lastName": "Zavala",
    "phoneNumber": "+32-115-523-5969",
    "email": "fzavala115@BCE.com",
    "streetAddressOfBuilding": "9678 Big Mountain Boulevard",
    "city": "Landen Waasmont",
    "stateProvince": "VLG",
    "locality": "Vlaams Brabant",
    "country": "BE",
    "postalCode": "3401",
    "latitude": "50.7333",
    "longitude": "5.0667",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 338,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 723,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 114,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 948,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170814NM8418",
    "dateOfPurchase": "2017-08-14 11:03:37",
    "extendedPrice": 6530.3,
    "customerKey": "NICKMCDO2552",
    "firstName": "Nick",
    "lastName": "Mcdonald",
    "phoneNumber": "+373-153-886-2552",
    "email": "nmcdonal153@Millicom.com",
    "streetAddressOfBuilding": "7047 Blue Stream Boulevard",
    "city": "Darcauti",
    "stateProvince": "Soroca",
    "locality": "Soroca",
    "country": "MD",
    "postalCode": "MD-3018",
    "latitude": "48.2278",
    "longitude": "27.9808",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 295,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 925,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190124JM7566",
    "dateOfPurchase": "2019-01-24 11:03:37",
    "extendedPrice": 4267.33,
    "customerKey": "JEANMOSE1935",
    "firstName": "Jean",
    "lastName": "Moses",
    "phoneNumber": "+1-138-478-1935",
    "email": "jmoses138@SKTelecom.com",
    "streetAddressOfBuilding": "9943 Big Ditch Drive",
    "city": "Guilford",
    "stateProvince": "NY",
    "locality": "Chenango",
    "country": "US",
    "postalCode": "13780",
    "latitude": "42.4269",
    "longitude": "-75.4823",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 9,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 901,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 377,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191113AB6127",
    "dateOfPurchase": "2019-11-13 11:03:37",
    "extendedPrice": 3400.21,
    "customerKey": "ASHEBART3266",
    "firstName": "Ashely",
    "lastName": "Barton",
    "phoneNumber": "+1-136-333-3266",
    "email": "abarton136@VimpelCom.com",
    "streetAddressOfBuilding": "8959 Winding Creek Boulevard",
    "city": "San Rafael",
    "stateProvince": "CA",
    "locality": "Marin",
    "country": "US",
    "postalCode": "94912",
    "latitude": "37.9735",
    "longitude": "-122.5311",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 328,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 886,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 365,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181104HH3846",
    "dateOfPurchase": "2018-11-04 11:03:37",
    "extendedPrice": 7637.07,
    "customerKey": "HILDHOLL2587",
    "firstName": "Hilde",
    "lastName": "Holloway",
    "phoneNumber": "+35818-195-814-2587",
    "email": "hhollowa195@SingTel.com",
    "streetAddressOfBuilding": "1901 Little Bridge Avenue",
    "city": "\u00d6dkarby",
    "stateProvince": "Saltvik",
    "locality": "Saltvik",
    "country": "AX",
    "postalCode": "22320",
    "latitude": "60.3162",
    "longitude": "20.0054",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 721,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 189,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 41,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 283,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 341,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 618,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180528ED2465",
    "dateOfPurchase": "2018-05-28 11:03:37",
    "extendedPrice": 4426.570000000001,
    "customerKey": "EMELDORS1769",
    "firstName": "Emelina",
    "lastName": "Dorsey",
    "phoneNumber": "+91-274-481-1769",
    "email": "edorsey274@NordNet.com",
    "streetAddressOfBuilding": "1256 Blue Creek Ride",
    "city": "Maheji",
    "stateProvince": "Pachora",
    "locality": "Jalgaon",
    "country": "IN",
    "postalCode": "425115",
    "latitude": "20.7935",
    "longitude": "75.4065",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 799,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 44,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191229BW4940",
    "dateOfPurchase": "2019-12-29 11:03:37",
    "extendedPrice": 4638.58,
    "customerKey": "BERRWALT8866",
    "firstName": "Berry",
    "lastName": "Walter",
    "phoneNumber": "+44-342-744-8866",
    "email": "bwalter342@KTC.com",
    "streetAddressOfBuilding": "9061 Long Gully Ride",
    "city": "Windsor and Maidenhead",
    "stateProvince": "England",
    "locality": "Berkshire",
    "country": "GB",
    "postalCode": "SL60",
    "latitude": "51.5186",
    "longitude": "-0.7148",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 460,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 946,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 467,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 117,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170628RA4617",
    "dateOfPurchase": "2017-06-28 11:03:37",
    "extendedPrice": 7811.59,
    "customerKey": "RODARIA1236",
    "firstName": "Rod",
    "lastName": "Arias",
    "phoneNumber": "+91-294-602-1236",
    "email": "rarias294@NII.com",
    "streetAddressOfBuilding": "9931 Red Gulch Street",
    "city": "Anaikudi",
    "stateProvince": "Thiruvaiyaru",
    "locality": "Thanjavur",
    "country": "IN",
    "postalCode": "613204",
    "latitude": "10.8841",
    "longitude": "79.1036",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 440,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 72,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 974,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 805,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160829EL2376",
    "dateOfPurchase": "2016-08-29 11:03:37",
    "extendedPrice": 14757.459999999997,
    "customerKey": "ERNELAMB8303",
    "firstName": "Ernesto",
    "lastName": "Lambert",
    "phoneNumber": "+91-186-604-8303",
    "email": "elambert186@CUBENet.com",
    "streetAddressOfBuilding": "5976 Green Bridge Drive",
    "city": "Deorikala",
    "stateProvince": "Lakhnadon",
    "locality": "Seoni",
    "country": "IN",
    "postalCode": "480886",
    "latitude": "22.5475",
    "longitude": "79.6032",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 608,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 194,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 552,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190807MP9750",
    "dateOfPurchase": "2019-08-07 11:03:37",
    "extendedPrice": 53314.4,
    "customerKey": "MATTPOWE7204",
    "firstName": "Matt",
    "lastName": "Powers",
    "phoneNumber": "+54-329-225-7204",
    "email": "mpowers329@Millicom.com",
    "streetAddressOfBuilding": "5033 Little Bridge Ride",
    "city": "CERRO BLANCO (JUAN JORBA, DPTO. GRAL. PEDERNERA)",
    "stateProvince": "D",
    "locality": "San Luis",
    "country": "AR",
    "postalCode": "5731",
    "latitude": "-33.8625",
    "longitude": "-65.4042",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 738,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 391,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 906,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 175,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180126HM6082",
    "dateOfPurchase": "2018-01-26 11:03:37",
    "extendedPrice": 16972.11,
    "customerKey": "HALMONT5411",
    "firstName": "Hal",
    "lastName": "Montoya",
    "phoneNumber": "+91-308-502-5411",
    "email": "hmontoya308@GlasNET.com",
    "streetAddressOfBuilding": "3080 Green Bough Circle",
    "city": "P.R Hill",
    "stateProvince": "kohima",
    "locality": "Kohima",
    "country": "IN",
    "postalCode": "797120",
    "latitude": "25.869",
    "longitude": "94.3125",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 165,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 923,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 651,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170114JJ1259",
    "dateOfPurchase": "2017-01-14 11:03:37",
    "extendedPrice": 5663.780000000001,
    "customerKey": "JOEJIME4067",
    "firstName": "Joe",
    "lastName": "Jimenez",
    "phoneNumber": "+91-364-879-4067",
    "email": "jjimenez364@UUnet.com",
    "streetAddressOfBuilding": "6150 Big Ridge Avenue",
    "city": "Nihri",
    "stateProvince": "Sunder Nagar",
    "locality": "Mandi",
    "country": "IN",
    "postalCode": "175038",
    "latitude": "31.6142",
    "longitude": "77.0926",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 537,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 966,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 709,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191122EC4620",
    "dateOfPurchase": "2019-11-22 11:03:37",
    "extendedPrice": 9972.01,
    "customerKey": "EARNCAMP9455",
    "firstName": "Earnest",
    "lastName": "Campos",
    "phoneNumber": "+691-261-056-9455",
    "email": "ecampos261@KDDI.com",
    "streetAddressOfBuilding": "2354 Little Mountain Boulevard",
    "city": "Chuuk",
    "stateProvince": "State of Chuuk",
    "locality": "State of Chuuk",
    "country": "FM",
    "postalCode": "96942",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 221,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 742,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 621,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 75,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160701RI1860",
    "dateOfPurchase": "2016-07-01 11:03:37",
    "extendedPrice": 3918.4,
    "customerKey": "REGIIBAR8447",
    "firstName": "Regine",
    "lastName": "Ibarra",
    "phoneNumber": "+373-109-864-8447",
    "email": "ribarra109@Zain.com",
    "streetAddressOfBuilding": "6229 Blue Canyon Street",
    "city": "Bobletici",
    "stateProvince": "Singerei",
    "locality": "Singerei",
    "country": "MD",
    "postalCode": "MD-6219",
    "latitude": "47.4664",
    "longitude": "28.0544",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 183,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 559,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 408,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171105GF7235",
    "dateOfPurchase": "2017-11-05 11:03:37",
    "extendedPrice": 8532.55,
    "customerKey": "GEORFIEL7807",
    "firstName": "Georgann",
    "lastName": "Fields",
    "phoneNumber": "+91-202-944-7807",
    "email": "gfields202@Frontier.com",
    "streetAddressOfBuilding": "7055 Short Creek Circle",
    "city": "Kaji",
    "stateProvince": "Chirawa",
    "locality": "Jhujhunu",
    "country": "IN",
    "postalCode": "333031",
    "latitude": "28.4338",
    "longitude": "75.5982",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 866,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 305,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 752,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 115,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 843,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190911RC2149",
    "dateOfPurchase": "2019-09-11 11:03:37",
    "extendedPrice": 5210.570000000001,
    "customerKey": "REUBCOMP1587",
    "firstName": "Reuben",
    "lastName": "Compton",
    "phoneNumber": "+66-171-872-1587",
    "email": "rcompton171@Vodafone.com",
    "streetAddressOfBuilding": "8003 Long Bough Boulevard",
    "city": "Muang Pattani",
    "stateProvince": "Pattani",
    "locality": "Pattani",
    "country": "TH",
    "postalCode": "94000",
    "latitude": "6.758",
    "longitude": "101.3775",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 237,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 605,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 651,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180629KP7694",
    "dateOfPurchase": "2018-06-29 11:03:37",
    "extendedPrice": 14623.400000000001,
    "customerKey": "KARIPORT5901",
    "firstName": "Karie",
    "lastName": "Portillo",
    "phoneNumber": "+55-219-833-5901",
    "email": "kportill219@UUnet.com",
    "streetAddressOfBuilding": "2823 Long Ridge Drive",
    "city": "Rio Branco do Sul",
    "stateProvince": "Parana",
    "locality": "Parana",
    "country": "BR",
    "postalCode": "83540-000",
    "latitude": "-25.0403",
    "longitude": "-49.3559",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 563,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 857,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 977,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 283,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 880,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170804LL1076",
    "dateOfPurchase": "2017-08-04 11:03:37",
    "extendedPrice": 2780.94,
    "customerKey": "LEESLAMB4609",
    "firstName": "Leesa",
    "lastName": "Lambert",
    "phoneNumber": "+91-194-817-4609",
    "email": "llambert194@Vodafone.com",
    "streetAddressOfBuilding": "2100 Red Mound Street",
    "city": "Jassi",
    "stateProvince": "Baroh(T)",
    "locality": "Kangra",
    "country": "IN",
    "postalCode": "176054",
    "latitude": "32.0031",
    "longitude": "76.1646",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 408,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 810,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191005NM8502",
    "dateOfPurchase": "2019-10-05 11:03:37",
    "extendedPrice": 5777.62,
    "customerKey": "NICKMCDO2552",
    "firstName": "Nick",
    "lastName": "Mcdonald",
    "phoneNumber": "+373-153-886-2552",
    "email": "nmcdonal153@Millicom.com",
    "streetAddressOfBuilding": "7047 Blue Stream Boulevard",
    "city": "Darcauti",
    "stateProvince": "Soroca",
    "locality": "Soroca",
    "country": "MD",
    "postalCode": "MD-3018",
    "latitude": "48.2278",
    "longitude": "27.9808",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 43,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 321,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 503,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 937,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 51,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170903HG9682",
    "dateOfPurchase": "2017-09-03 11:03:37",
    "extendedPrice": 1946.22,
    "customerKey": "HERBGALL4253",
    "firstName": "Herbert",
    "lastName": "Gallagher",
    "phoneNumber": "+44-248-752-4253",
    "email": "hgallagh248@Etisalat.com",
    "streetAddressOfBuilding": "2803 Short Canyon Road",
    "city": "Holmsgarth",
    "stateProvince": "Scotland",
    "locality": "Shetland Islands",
    "country": "GB",
    "postalCode": "ZE1",
    "latitude": "60.1464",
    "longitude": "-1.2132",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 978,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170325JA5154",
    "dateOfPurchase": "2017-03-25 11:03:37",
    "extendedPrice": 13070.529999999999,
    "customerKey": "JACIALEX9340",
    "firstName": "Jacinda",
    "lastName": "Alexander",
    "phoneNumber": "+1-178-155-9340",
    "email": "jalexand178@Turkcell.com",
    "streetAddressOfBuilding": "5621 Green Bough Way",
    "city": "Sherbrooke Central",
    "stateProvince": "QC",
    "locality": "Sherbrooke",
    "country": "CA",
    "postalCode": "J1H",
    "latitude": "45.3891",
    "longitude": "-71.8986",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 722,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 4,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 821,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190718RP6252",
    "dateOfPurchase": "2019-07-18 11:03:37",
    "extendedPrice": 5486.68,
    "customerKey": "RORYPHAN6135",
    "firstName": "Rory",
    "lastName": "Phan",
    "phoneNumber": "+1-336-157-6135",
    "email": "rphan336@Relcom.com",
    "streetAddressOfBuilding": "6689 Red River Boulevard",
    "city": "Gatineau Northwest",
    "stateProvince": "QC",
    "locality": "Gatineau",
    "country": "CA",
    "postalCode": "J8V",
    "latitude": "45.5711",
    "longitude": "-75.7615",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 756,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 256,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160821EB5721",
    "dateOfPurchase": "2016-08-21 11:03:37",
    "extendedPrice": 5382.620000000001,
    "customerKey": "ETHABUCH8761",
    "firstName": "Etha",
    "lastName": "Buchanan",
    "phoneNumber": "+52-273-719-8761",
    "email": "ebuchana273@Turkcell.com",
    "streetAddressOfBuilding": "6598 Long Gulch Boulevard",
    "city": "La Lagunita",
    "stateProvince": "CHH",
    "locality": "Camargo",
    "country": "MX",
    "postalCode": "33730",
    "latitude": "27.8494",
    "longitude": "-104.6806",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 343,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 553,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 640,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 203,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 349,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170621DD7897",
    "dateOfPurchase": "2017-06-21 11:03:37",
    "extendedPrice": 9124.75,
    "customerKey": "DEVIDELG7242",
    "firstName": "Devin",
    "lastName": "Delgado",
    "phoneNumber": "+61-332-156-7242",
    "email": "ddelgado332@MTN.com",
    "streetAddressOfBuilding": "4186 Red Mountain Street",
    "city": "Coomunga",
    "stateProvince": "SA",
    "locality": "South Australia",
    "country": "AU",
    "postalCode": "5607",
    "latitude": "-34.6437",
    "longitude": "135.7074",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 16,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 25,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 322,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 443,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 443,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190825HC7162",
    "dateOfPurchase": "2019-08-25 11:03:37",
    "extendedPrice": 2194,
    "customerKey": "HERBCANO1319",
    "firstName": "Herbert",
    "lastName": "Cano",
    "phoneNumber": "+55-363-060-1319",
    "email": "hcano363@Rogers.com",
    "streetAddressOfBuilding": "2075 Red River Boulevard",
    "city": "Duque de Caxias",
    "stateProvince": "Rio de Janeiro ",
    "locality": "Rio de Janeiro ",
    "country": "BR",
    "postalCode": "25000-000",
    "latitude": "-22.6568",
    "longitude": "-43.2929",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 932,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 68,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171116FZ3335",
    "dateOfPurchase": "2017-11-16 11:03:37",
    "extendedPrice": 4377.33,
    "customerKey": "FELIZUNI3451",
    "firstName": "Felipe",
    "lastName": "Zuniga",
    "phoneNumber": "+1-244-379-3451",
    "email": "fzuniga244@Telkom.com",
    "streetAddressOfBuilding": "2297 Long Tree Boulevard",
    "city": "Minneapolis",
    "stateProvince": "MN",
    "locality": "Hennepin",
    "country": "US",
    "postalCode": "55487",
    "latitude": "44.98",
    "longitude": "-93.2638",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 274,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 74,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 788,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 715,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180213MG6336",
    "dateOfPurchase": "2018-02-13 11:03:37",
    "extendedPrice": 2848.39,
    "customerKey": "MELGILE5687",
    "firstName": "Mel",
    "lastName": "Giles",
    "phoneNumber": "+262-397-761-5687",
    "email": "mgiles397@PTCL.com",
    "streetAddressOfBuilding": "118 Short Hill Ride",
    "city": "Saint-Denis",
    "stateProvince": "RE",
    "locality": "R\u00e9union",
    "country": "RE",
    "postalCode": "97469 CEDEX",
    "latitude": "-20.8823",
    "longitude": "55.4504",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 225,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 436,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191017RG8386",
    "dateOfPurchase": "2019-10-17 11:03:37",
    "extendedPrice": 11669.9,
    "customerKey": "ROLAGILE1128",
    "firstName": "Roland",
    "lastName": "Giles",
    "phoneNumber": "+1-190-173-1128",
    "email": "rgiles190@Telecom.com",
    "streetAddressOfBuilding": "3531 Long Hill Street",
    "city": "Newark",
    "stateProvince": "CA",
    "locality": "Alameda",
    "country": "US",
    "postalCode": "94560",
    "latitude": "37.5368",
    "longitude": "-122.032",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 755,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 563,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 650,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 495,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 287,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 410,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180406SV7934",
    "dateOfPurchase": "2018-04-06 11:03:37",
    "extendedPrice": 4957.17,
    "customerKey": "SETHVARG7301",
    "firstName": "Seth",
    "lastName": "Vargas",
    "phoneNumber": "+91-169-678-7301",
    "email": "svargas169@CCI.com",
    "streetAddressOfBuilding": "6256 Big Gully Avenue",
    "city": "Ghungchai",
    "stateProvince": "Pooranpur",
    "locality": "Pilibhit",
    "country": "IN",
    "postalCode": "262122",
    "latitude": "28.45",
    "longitude": "80.0833",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 436,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 797,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161120AS2383",
    "dateOfPurchase": "2016-11-20 11:03:37",
    "extendedPrice": 17263.420000000002,
    "customerKey": "ASHLSHAN8943",
    "firstName": "Ashley",
    "lastName": "Shannon",
    "phoneNumber": "+594-383-630-8943",
    "email": "ashannon383@Telekom.com",
    "streetAddressOfBuilding": "2147 Blue Bough Way",
    "city": "Kourou",
    "stateProvince": "GF",
    "locality": "Guyane",
    "country": "GF",
    "postalCode": "97382 CEDEX",
    "latitude": "5.1628",
    "longitude": "-52.6427",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 622,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 396,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 459,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 843,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190915OT3523",
    "dateOfPurchase": "2019-09-15 11:03:37",
    "extendedPrice": 315.56,
    "customerKey": "OZELTRUO6020",
    "firstName": "Ozella",
    "lastName": "Truong",
    "phoneNumber": "+1-288-442-6020",
    "email": "otruong288@Optus.com",
    "streetAddressOfBuilding": "3757 Big Hill Road",
    "city": "Jerusalem",
    "stateProvince": "OH",
    "locality": "Monroe",
    "country": "US",
    "postalCode": "43747",
    "latitude": "39.8488",
    "longitude": "-81.0921",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 644,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160813HH3462",
    "dateOfPurchase": "2016-08-13 11:03:37",
    "extendedPrice": 14051.45,
    "customerKey": "HERIHUDS7137",
    "firstName": "Heriberto",
    "lastName": "Hudson",
    "phoneNumber": "+91-310-257-7137",
    "email": "hhudson310@Telia.com",
    "streetAddressOfBuilding": "4510 Little Tree Avenue",
    "city": "Indian Institute Of Technology",
    "stateProvince": "Chennai City Corporation",
    "locality": "Chennai",
    "country": "IN",
    "postalCode": "600036",
    "latitude": "13.0659",
    "longitude": "80.2365",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 945,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 729,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 482,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 261,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 488,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170813PP7987",
    "dateOfPurchase": "2017-08-13 11:03:37",
    "extendedPrice": 935.32,
    "customerKey": "PHILPERR7965",
    "firstName": "Phil",
    "lastName": "Perry",
    "phoneNumber": "+90-201-118-7965",
    "email": "pperry201@Safaricom.com",
    "streetAddressOfBuilding": "7844 Big Ridge Circle",
    "city": "Acipinar",
    "stateProvince": "\u00c7orum",
    "locality": "\u00c7orum",
    "country": "TR",
    "postalCode": "19000",
    "latitude": "40.6458",
    "longitude": "34.7511",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 268,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190918MS9512",
    "dateOfPurchase": "2019-09-18 11:03:37",
    "extendedPrice": 42959.07,
    "customerKey": "MARYSTEI8317",
    "firstName": "Maryanne",
    "lastName": "Stein",
    "phoneNumber": "+354-193-268-8317",
    "email": "mstein193@AIS.com",
    "streetAddressOfBuilding": "2995 Blue River Circle",
    "city": "Sta\u00f0",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "500",
    "latitude": "65.7681",
    "longitude": "-21.864",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 815,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 778,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171106DH4922",
    "dateOfPurchase": "2017-11-06 11:03:37",
    "extendedPrice": 2594.54,
    "customerKey": "DEBBHERM6344",
    "firstName": "Debbra",
    "lastName": "Herman",
    "phoneNumber": "+44-344-994-6344",
    "email": "dherman344@Zain.com",
    "streetAddressOfBuilding": "6896 Long Tree Avenue",
    "city": "Moreton",
    "stateProvince": "England",
    "locality": "Dorset",
    "country": "GB",
    "postalCode": "DT2",
    "latitude": "50.7",
    "longitude": "-2.2833",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 704,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 342,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180911NO7738",
    "dateOfPurchase": "2018-09-11 11:03:37",
    "extendedPrice": 1320.8400000000001,
    "customerKey": "NICHOCHO6493",
    "firstName": "Nicholle",
    "lastName": "Ochoa",
    "phoneNumber": "+1-376-016-6493",
    "email": "nochoa376@Jio.com",
    "streetAddressOfBuilding": "4329 Short Ridge Boulevard",
    "city": "Axtell",
    "stateProvince": "NE",
    "locality": "Kearney",
    "country": "US",
    "postalCode": "68924",
    "latitude": "40.5269",
    "longitude": "-99.1169",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 284,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 704,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190922JO0366",
    "dateOfPurchase": "2019-09-22 11:03:37",
    "extendedPrice": 3330.02,
    "customerKey": "JULIOROZ8091",
    "firstName": "Julio",
    "lastName": "Orozco",
    "phoneNumber": "+376-105-604-8091",
    "email": "jorozco105@UUnet.com",
    "streetAddressOfBuilding": "3249 Winding Hill Street",
    "city": "Sant Juli\u00e0 de L\u00f2ria",
    "stateProvince": null,
    "locality": null,
    "country": "AD",
    "postalCode": "AD600",
    "latitude": "42.4667",
    "longitude": "1.5",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 673,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 439,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 193,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 142,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160807LL5685",
    "dateOfPurchase": "2016-08-07 11:03:37",
    "extendedPrice": 9979.43,
    "customerKey": "LEESLAMB4609",
    "firstName": "Leesa",
    "lastName": "Lambert",
    "phoneNumber": "+91-194-817-4609",
    "email": "llambert194@Vodafone.com",
    "streetAddressOfBuilding": "2100 Red Mound Street",
    "city": "Jassi",
    "stateProvince": "Baroh(T)",
    "locality": "Kangra",
    "country": "IN",
    "postalCode": "176054",
    "latitude": "32.0031",
    "longitude": "76.1646",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 410,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 447,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171030LB8871",
    "dateOfPurchase": "2017-10-30 11:03:37",
    "extendedPrice": 19446.450000000004,
    "customerKey": "LAVEBAKE9600",
    "firstName": "Lavern",
    "lastName": "Baker",
    "phoneNumber": "+44-360-890-9600",
    "email": "lbaker360@Jio.com",
    "streetAddressOfBuilding": "3865 Blue Mound Avenue",
    "city": "Great Lumley",
    "stateProvince": "England",
    "locality": "Durham",
    "country": "GB",
    "postalCode": "DH3",
    "latitude": "54.8383",
    "longitude": "-1.5427",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 48,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 639,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 3,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 39,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 780,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 786,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190613VC4051",
    "dateOfPurchase": "2019-06-13 11:03:37",
    "extendedPrice": 18933.78,
    "customerKey": "VASHCARS8772",
    "firstName": "Vashti",
    "lastName": "Carson",
    "phoneNumber": "+1-148-236-8772",
    "email": "vcarson148@Swisscom.com",
    "streetAddressOfBuilding": "5161 Green Mound Ride",
    "city": "West Haldimand (Port Dover)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0A",
    "latitude": "42.9403",
    "longitude": "-79.945",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 927,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 724,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 791,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180416DW1626",
    "dateOfPurchase": "2018-04-16 11:03:37",
    "extendedPrice": 4270.89,
    "customerKey": "DARRWILK8138",
    "firstName": "Darryl",
    "lastName": "Wilkinson",
    "phoneNumber": "+1-130-544-8138",
    "email": "dwilkins130@Unicom.com",
    "streetAddressOfBuilding": "8015 Little Bough Avenue",
    "city": "Ch\u00e2teauguay North",
    "stateProvince": "QC",
    "locality": "Mont\u00e9r\u00e9gie",
    "country": "CA",
    "postalCode": "J6J",
    "latitude": "45.3691",
    "longitude": "-73.7216",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 611,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180614GF7133",
    "dateOfPurchase": "2018-06-14 11:03:37",
    "extendedPrice": 2330.65,
    "customerKey": "GEORFLOW5134",
    "firstName": "Georgia",
    "lastName": "Flowers",
    "phoneNumber": "+1671-317-328-5134",
    "email": "gflowers317@Vodafone.com",
    "streetAddressOfBuilding": "5774 Red Ditch Avenue",
    "city": "Asan",
    "stateProvince": "Guam",
    "locality": "Guam",
    "country": "GU",
    "postalCode": "96922",
    "latitude": "13.4443",
    "longitude": "144.7863",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 422,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 83,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 30,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190814SG0936",
    "dateOfPurchase": "2019-08-14 11:03:37",
    "extendedPrice": 18355.02,
    "customerKey": "STEFGILM2110",
    "firstName": "Stefan",
    "lastName": "Gilmore",
    "phoneNumber": "+44-158-982-2110",
    "email": "sgilmore158@Movil.com",
    "streetAddressOfBuilding": "6676 Big Tree Street",
    "city": "Cutnall Green",
    "stateProvince": "England",
    "locality": "Worcestershire",
    "country": "GB",
    "postalCode": "WR9",
    "latitude": "52.247",
    "longitude": "-2.1842",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 615,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 837,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 892,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 549,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 705,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180619AB5912",
    "dateOfPurchase": "2018-06-19 11:03:37",
    "extendedPrice": 15185.369999999999,
    "customerKey": "ALLEBURK4071",
    "firstName": "Allena",
    "lastName": "Burke",
    "phoneNumber": "+61-256-880-4071",
    "email": "aburke256@TelecomItalia.com",
    "streetAddressOfBuilding": "1261 Winding Ditch Street",
    "city": "Pullenvale",
    "stateProvince": "QLD",
    "locality": "NORTHGATE CENT",
    "country": "AU",
    "postalCode": "4069",
    "latitude": "-27.5228",
    "longitude": "152.8865",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 504,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 859,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160811JA7377",
    "dateOfPurchase": "2016-08-11 11:03:37",
    "extendedPrice": 7003.5,
    "customerKey": "JESSARMS3013",
    "firstName": "Jess",
    "lastName": "Armstrong",
    "phoneNumber": "+60-295-869-3013",
    "email": "jarmstro295@Jio.com",
    "streetAddressOfBuilding": "7499 Little Woods Boulevard",
    "city": "Ipoh",
    "stateProvince": "PRK",
    "locality": "Perak",
    "country": "MY",
    "postalCode": "30644",
    "latitude": "4.5987",
    "longitude": "101.0899",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 227,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 880,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 581,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 532,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190927TP0852",
    "dateOfPurchase": "2019-09-27 11:03:37",
    "extendedPrice": 7881.76,
    "customerKey": "TERRPADI2636",
    "firstName": "Terry",
    "lastName": "Padilla",
    "phoneNumber": "+91-204-097-2636",
    "email": "tpadilla204@Orstom.com",
    "streetAddressOfBuilding": "5636 Blue Bend Avenue",
    "city": "Varana",
    "stateProvince": "Sami",
    "locality": "Patan",
    "country": "IN",
    "postalCode": "384245",
    "latitude": "23.5202",
    "longitude": "71.8677",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 162,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 748,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 146,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 968,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160909KS6242",
    "dateOfPurchase": "2016-09-09 11:03:37",
    "extendedPrice": 326.34,
    "customerKey": "KENYSUMM1295",
    "firstName": "Kenyetta",
    "lastName": "Summers",
    "phoneNumber": "+60-237-402-1295",
    "email": "ksummers237@Vodafone.com",
    "streetAddressOfBuilding": "2507 Blue River Circle",
    "city": "Kuantan",
    "stateProvince": "PHG",
    "locality": "Pahang",
    "country": "MY",
    "postalCode": "25503",
    "latitude": "3.825",
    "longitude": "103.3239",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 666,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180502RK1785",
    "dateOfPurchase": "2018-05-02 11:03:37",
    "extendedPrice": 5.31,
    "customerKey": "RICAKANE0052",
    "firstName": "Ricardo",
    "lastName": "Kane",
    "phoneNumber": "+61-210-310-0052",
    "email": "rkane210@Optus.com",
    "streetAddressOfBuilding": "7022 Big Tree Road",
    "city": "Delungra",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2403",
    "latitude": "-29.654",
    "longitude": "150.83",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 9,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190514GF7610",
    "dateOfPurchase": "2019-05-14 11:03:37",
    "extendedPrice": 5448.12,
    "customerKey": "GEORFIEL7807",
    "firstName": "Georgann",
    "lastName": "Fields",
    "phoneNumber": "+91-202-944-7807",
    "email": "gfields202@Frontier.com",
    "streetAddressOfBuilding": "7055 Short Creek Circle",
    "city": "Kaji",
    "stateProvince": "Chirawa",
    "locality": "Jhujhunu",
    "country": "IN",
    "postalCode": "333031",
    "latitude": "28.4338",
    "longitude": "75.5982",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 396,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 243,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 202,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 347,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181021VC6667",
    "dateOfPurchase": "2018-10-21 11:03:37",
    "extendedPrice": 64605.47,
    "customerKey": "VASHCARS8772",
    "firstName": "Vashti",
    "lastName": "Carson",
    "phoneNumber": "+1-148-236-8772",
    "email": "vcarson148@Swisscom.com",
    "streetAddressOfBuilding": "5161 Green Mound Ride",
    "city": "West Haldimand (Port Dover)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0A",
    "latitude": "42.9403",
    "longitude": "-79.945",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 773,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 236,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 895,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 322,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 787,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170819ZG9431",
    "dateOfPurchase": "2017-08-19 11:03:37",
    "extendedPrice": 14450.970000000001,
    "customerKey": "ZACHGALL8564",
    "firstName": "Zachery",
    "lastName": "Gallagher",
    "phoneNumber": "+1-254-624-8564",
    "email": "zgallagh254@OTE.com",
    "streetAddressOfBuilding": "4401 Little Ridge Road",
    "city": "Bolton",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "L7E",
    "latitude": "43.8795",
    "longitude": "-79.7379",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 950,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 584,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 416,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 577,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 596,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190913TJ9521",
    "dateOfPurchase": "2019-09-13 11:03:37",
    "extendedPrice": 24062.32,
    "customerKey": "TEDJOHN4177",
    "firstName": "Ted",
    "lastName": "Johnson",
    "phoneNumber": "+1-146-020-4177",
    "email": "tjohnson146@ICom.com",
    "streetAddressOfBuilding": "4486 Long Woods Boulevard",
    "city": "North Las Vegas",
    "stateProvince": "NV",
    "locality": "Clark",
    "country": "US",
    "postalCode": "89085",
    "latitude": "36.3097",
    "longitude": "-115.1981",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 779,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 401,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 809,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 729,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180101MS6730",
    "dateOfPurchase": "2018-01-01 11:03:37",
    "extendedPrice": 5938.87,
    "customerKey": "MARGSALA4767",
    "firstName": "Margie",
    "lastName": "Salas",
    "phoneNumber": "+92-185-131-4767",
    "email": "msalas185@DaxNet.com",
    "streetAddressOfBuilding": "3299 Winding Gulch Drive",
    "city": "Chak 143\/Eb",
    "stateProvince": "Lahore",
    "locality": "Lahore",
    "country": "PK",
    "postalCode": "57451",
    "latitude": "30.225",
    "longitude": "73.2167",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 99,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 565,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 199,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161028TP5551",
    "dateOfPurchase": "2016-10-28 11:03:37",
    "extendedPrice": 6961.6,
    "customerKey": "TERRPADI2636",
    "firstName": "Terry",
    "lastName": "Padilla",
    "phoneNumber": "+91-204-097-2636",
    "email": "tpadilla204@Orstom.com",
    "streetAddressOfBuilding": "5636 Blue Bend Avenue",
    "city": "Varana",
    "stateProvince": "Sami",
    "locality": "Patan",
    "country": "IN",
    "postalCode": "384245",
    "latitude": "23.5202",
    "longitude": "71.8677",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 733,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 870,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 687,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190404MP3275",
    "dateOfPurchase": "2019-04-04 11:03:37",
    "extendedPrice": 4010.3,
    "customerKey": "MATTPOWE7204",
    "firstName": "Matt",
    "lastName": "Powers",
    "phoneNumber": "+54-329-225-7204",
    "email": "mpowers329@Millicom.com",
    "streetAddressOfBuilding": "5033 Little Bridge Ride",
    "city": "CERRO BLANCO (JUAN JORBA, DPTO. GRAL. PEDERNERA)",
    "stateProvince": "D",
    "locality": "San Luis",
    "country": "AR",
    "postalCode": "5731",
    "latitude": "-33.8625",
    "longitude": "-65.4042",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 527,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 812,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 299,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170706CB0818",
    "dateOfPurchase": "2017-07-06 11:03:37",
    "extendedPrice": 16455.37,
    "customerKey": "CHAUBLAC5184",
    "firstName": "Chauncey",
    "lastName": "Blackburn",
    "phoneNumber": "+49-349-939-5184",
    "email": "cblackbu349@Tata.com",
    "streetAddressOfBuilding": "9682 Big Gulch Avenue",
    "city": "Uetz",
    "stateProvince": "ST",
    "locality": "Landkreis Stendal",
    "country": "DE",
    "postalCode": "39517",
    "latitude": "52.3833",
    "longitude": "11.85",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 581,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 669,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 947,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 143,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171008OS9822",
    "dateOfPurchase": "2017-10-08 11:03:37",
    "extendedPrice": 8556.32,
    "customerKey": "OCTASALI1537",
    "firstName": "Octavio",
    "lastName": "Salinas",
    "phoneNumber": "+1-223-165-1537",
    "email": "osalinas223@BCE.com",
    "streetAddressOfBuilding": "4174 Short Tree Boulevard",
    "city": "Cherry Hill",
    "stateProvince": "NJ",
    "locality": "Camden",
    "country": "US",
    "postalCode": "08003",
    "latitude": "39.8805",
    "longitude": "-74.9706",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 797,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 135,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 868,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 329,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 620,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190809RC9405",
    "dateOfPurchase": "2019-08-09 11:03:37",
    "extendedPrice": 10677.43,
    "customerKey": "REUBCOMP1587",
    "firstName": "Reuben",
    "lastName": "Compton",
    "phoneNumber": "+66-171-872-1587",
    "email": "rcompton171@Vodafone.com",
    "streetAddressOfBuilding": "8003 Long Bough Boulevard",
    "city": "Muang Pattani",
    "stateProvince": "Pattani",
    "locality": "Pattani",
    "country": "TH",
    "postalCode": "94000",
    "latitude": "6.758",
    "longitude": "101.3775",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 174,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 179,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 934,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 470,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181229KB5168",
    "dateOfPurchase": "2018-12-29 11:03:37",
    "extendedPrice": 44343.86,
    "customerKey": "KENYBONI6918",
    "firstName": "Kenyatta",
    "lastName": "Bonilla",
    "phoneNumber": "+1-368-306-6918",
    "email": "kbonilla368@Vodafone.com",
    "streetAddressOfBuilding": "5256 Big Ditch Boulevard",
    "city": "Albuquerque",
    "stateProvince": "NM",
    "locality": "Bernalillo",
    "country": "US",
    "postalCode": "87154",
    "latitude": "35.0443",
    "longitude": "-106.6729",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 822,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 118,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 940,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 74,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 740,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170301ES0549",
    "dateOfPurchase": "2017-03-01 11:03:37",
    "extendedPrice": 1147.71,
    "customerKey": "ELVASALA6803",
    "firstName": "Elva",
    "lastName": "Salazar",
    "phoneNumber": "+44-120-007-6803",
    "email": "esalazar120@Etisalat.com",
    "streetAddressOfBuilding": "6426 Blue Ditch Way",
    "city": "Silvercraigs",
    "stateProvince": "Scotland",
    "locality": "Argyll and Bute",
    "country": "GB",
    "postalCode": "PA31",
    "latitude": "56.148",
    "longitude": "-5.4391",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 257,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 431,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190608DC2096",
    "dateOfPurchase": "2019-06-08 11:03:37",
    "extendedPrice": 4788.35,
    "customerKey": "DANICANT0900",
    "firstName": "Daniell",
    "lastName": "Cantrell",
    "phoneNumber": "+44-366-491-0900",
    "email": "dcantrel366@Chunghwa.com",
    "streetAddressOfBuilding": "3674 Big Canyon Ride",
    "city": "Woodside",
    "stateProvince": "England",
    "locality": "Hertfordshire",
    "country": "GB",
    "postalCode": "AL9",
    "latitude": "51.7449",
    "longitude": "-0.1984",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 911,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 198,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 863,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181105MS5284",
    "dateOfPurchase": "2018-11-05 11:03:37",
    "extendedPrice": 3219.04,
    "customerKey": "MARHSAND9128",
    "firstName": "Marhta",
    "lastName": "Sanders",
    "phoneNumber": "+91-200-820-9128",
    "email": "msanders200@OpenWorld.com",
    "streetAddressOfBuilding": "417 Long Hill Boulevard",
    "city": "Mansoori",
    "stateProvince": "Bikaner",
    "locality": "Bikaner",
    "country": "IN",
    "postalCode": "334802",
    "latitude": "27.888",
    "longitude": "74.7458",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 496,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181220OL0126",
    "dateOfPurchase": "2018-12-20 11:03:37",
    "extendedPrice": 9257.730000000001,
    "customerKey": "OCTALARS3958",
    "firstName": "Octavia",
    "lastName": "Larson",
    "phoneNumber": "+61-371-309-3958",
    "email": "olarson371@Telkom.com",
    "streetAddressOfBuilding": "79 Winding Tree Drive",
    "city": "Dorset Vale",
    "stateProvince": "SA",
    "locality": "South Australia",
    "country": "AU",
    "postalCode": "5157",
    "latitude": "-35.0873",
    "longitude": "138.6764",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 699,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 919,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 567,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 491,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191125WL4096",
    "dateOfPurchase": "2019-11-25 11:03:37",
    "extendedPrice": 6475.59,
    "customerKey": "WILLLOVE3035",
    "firstName": "William",
    "lastName": "Love",
    "phoneNumber": "+681-181-676-3035",
    "email": "wlove181@OTE.com",
    "streetAddressOfBuilding": "721 Winding Stream Avenue",
    "city": "Sigave",
    "stateProvince": "Circonscription de Sigave",
    "locality": "Circonscription de Sigave",
    "country": "WF",
    "postalCode": "98620",
    "latitude": "-14.2667",
    "longitude": "-178.1667",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 541,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 452,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 533,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 44,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 732,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 791,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160818TJ3939",
    "dateOfPurchase": "2016-08-18 11:03:37",
    "extendedPrice": 13621.18,
    "customerKey": "TEDJOHN4177",
    "firstName": "Ted",
    "lastName": "Johnson",
    "phoneNumber": "+1-146-020-4177",
    "email": "tjohnson146@ICom.com",
    "streetAddressOfBuilding": "4486 Long Woods Boulevard",
    "city": "North Las Vegas",
    "stateProvince": "NV",
    "locality": "Clark",
    "country": "US",
    "postalCode": "89085",
    "latitude": "36.3097",
    "longitude": "-115.1981",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 495,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 631,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 117,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 571,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 864,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171021CG0958",
    "dateOfPurchase": "2017-10-21 11:03:37",
    "extendedPrice": 4435.030000000001,
    "customerKey": "CAMIGENT4566",
    "firstName": "Camie",
    "lastName": "Gentry",
    "phoneNumber": "+7-167-569-4566",
    "email": "cgentry167@Etisalat.com",
    "streetAddressOfBuilding": "3735 Winding River Boulevard",
    "city": "\u041d\u043e\u0432\u043e\u043b\u0435\u043d\u0438\u043d\u043e",
    "stateProvince": "\u041d\u0423\u041a\u0423\u0422\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "locality": "\u041d\u0423\u041a\u0423\u0422\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "country": "RU",
    "postalCode": "669411",
    "latitude": "53.5519",
    "longitude": "103.295",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 27,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 375,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 65,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 178,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 152,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190711PS0344",
    "dateOfPurchase": "2019-07-11 11:03:37",
    "extendedPrice": 11469.73,
    "customerKey": "PALMSHEP5710",
    "firstName": "Palmira",
    "lastName": "Shepard",
    "phoneNumber": "+299-321-091-5710",
    "email": "pshepard321@NetCom.com",
    "streetAddressOfBuilding": "1959 Blue Hill Drive",
    "city": "Narsarsuaq",
    "stateProvince": null,
    "locality": null,
    "country": "GL",
    "postalCode": "3923",
    "latitude": "61.1667",
    "longitude": "-45.4167",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 541,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 838,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 569,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 329,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170622CG5617",
    "dateOfPurchase": "2017-06-22 11:03:37",
    "extendedPrice": 107.73,
    "customerKey": "CHERGIBB9791",
    "firstName": "Cher",
    "lastName": "Gibbs",
    "phoneNumber": "+1-268-026-9791",
    "email": "cgibbs268@Softbank.com",
    "streetAddressOfBuilding": "5945 Little Mound Drive",
    "city": "Trois-Rivi\u00e8res South",
    "stateProvince": "QC",
    "locality": "Trois-Rivi\u00e8res",
    "country": "CA",
    "postalCode": "G9B",
    "latitude": "46.316",
    "longitude": "-72.6833",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 27,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190216SV5974",
    "dateOfPurchase": "2019-02-16 11:03:37",
    "extendedPrice": 5269.26,
    "customerKey": "SETHVARG7301",
    "firstName": "Seth",
    "lastName": "Vargas",
    "phoneNumber": "+91-169-678-7301",
    "email": "svargas169@CCI.com",
    "streetAddressOfBuilding": "6256 Big Gully Avenue",
    "city": "Ghungchai",
    "stateProvince": "Pooranpur",
    "locality": "Pilibhit",
    "country": "IN",
    "postalCode": "262122",
    "latitude": "28.45",
    "longitude": "80.0833",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 246,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 228,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 800,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191222JC4559",
    "dateOfPurchase": "2019-12-22 11:03:37",
    "extendedPrice": 7865.93,
    "customerKey": "JANYCONL2869",
    "firstName": "Janyce",
    "lastName": "Conley",
    "phoneNumber": "+1787-281-927-2869",
    "email": "jconley281@PLDT.com",
    "streetAddressOfBuilding": "2848 Long Bough Drive",
    "city": "Guanica",
    "stateProvince": "Guanica",
    "locality": "Guanica",
    "country": "PR",
    "postalCode": "00653",
    "latitude": "17.9716",
    "longitude": "-66.908",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 917,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 390,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 950,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170612TH0108",
    "dateOfPurchase": "2017-06-12 11:03:37",
    "extendedPrice": 1472.05,
    "customerKey": "TIJUHOGA5010",
    "firstName": "Tijuana",
    "lastName": "Hogan",
    "phoneNumber": "+44-119-817-5010",
    "email": "thogan119@Telenor.com",
    "streetAddressOfBuilding": "106 Short Bend Boulevard",
    "city": "Staffin",
    "stateProvince": "Scotland",
    "locality": "Highland",
    "country": "GB",
    "postalCode": "IV51",
    "latitude": "57.6241",
    "longitude": "-6.2066",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 295,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161028BN9922",
    "dateOfPurchase": "2016-10-28 11:03:37",
    "extendedPrice": 13281.95,
    "customerKey": "BURLNICH6718",
    "firstName": "Burl",
    "lastName": "Nichols",
    "phoneNumber": "+213-249-329-6718",
    "email": "bnichols249@NordNet.com",
    "streetAddressOfBuilding": "6461 Long Mound Way",
    "city": "Ain Alouane",
    "stateProvince": "Bouira",
    "locality": "Bouira",
    "country": "DZ",
    "postalCode": "10081",
    "latitude": "36.2112",
    "longitude": "4.1099",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 718,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 716,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 671,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191123MS3104",
    "dateOfPurchase": "2019-11-23 11:03:37",
    "extendedPrice": 23411.050000000003,
    "customerKey": "MARHSAND9128",
    "firstName": "Marhta",
    "lastName": "Sanders",
    "phoneNumber": "+91-200-820-9128",
    "email": "msanders200@OpenWorld.com",
    "streetAddressOfBuilding": "417 Long Hill Boulevard",
    "city": "Mansoori",
    "stateProvince": "Bikaner",
    "locality": "Bikaner",
    "country": "IN",
    "postalCode": "334802",
    "latitude": "27.888",
    "longitude": "74.7458",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 458,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 706,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 956,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 765,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 789,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 241,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180421MH1668",
    "dateOfPurchase": "2018-04-21 11:03:37",
    "extendedPrice": 2705.03,
    "customerKey": "MOZEHANS1688",
    "firstName": "Mozella",
    "lastName": "Hansen",
    "phoneNumber": "+1-222-925-1688",
    "email": "mhansen222@Vodafone.com",
    "streetAddressOfBuilding": "5153 Long Creek Street",
    "city": "Elgin (Dorchester)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0L",
    "latitude": "42.7557",
    "longitude": "-81.4533",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 460,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 137,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181125MR0435",
    "dateOfPurchase": "2018-11-25 11:03:37",
    "extendedPrice": 4926.71,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 770,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 715,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 929,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190729WC8004",
    "dateOfPurchase": "2019-07-29 11:03:37",
    "extendedPrice": 13397.72,
    "customerKey": "WELDCHAV2057",
    "firstName": "Weldon",
    "lastName": "Chavez",
    "phoneNumber": "+47-377-325-2057",
    "email": "wchavez377@APICnet.com",
    "streetAddressOfBuilding": "3662 Short Mountain Way",
    "city": "F\u00f8rde",
    "stateProvince": "F\u00f8rde",
    "locality": "F\u00f8rde",
    "country": "NO",
    "postalCode": "6801",
    "latitude": "61.4522",
    "longitude": "5.8572",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 752,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 563,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 171,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 62,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 480,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170304WH1243",
    "dateOfPurchase": "2017-03-04 11:03:37",
    "extendedPrice": 4203.610000000001,
    "customerKey": "WILLHEND2820",
    "firstName": "Willie",
    "lastName": "Henderson",
    "phoneNumber": "+1-240-026-2820",
    "email": "whenders240@OpenWorld.com",
    "streetAddressOfBuilding": "1696 Red Bough Way",
    "city": "Springfield",
    "stateProvince": "MO",
    "locality": "Greene",
    "country": "US",
    "postalCode": "65814",
    "latitude": "37.2581",
    "longitude": "-93.3437",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 280,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 573,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 966,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180604EC3710",
    "dateOfPurchase": "2018-06-04 11:03:37",
    "extendedPrice": 11980.84,
    "customerKey": "ELIDCOOP2375",
    "firstName": "Elida",
    "lastName": "Cooper",
    "phoneNumber": "+57-131-274-2375",
    "email": "ecooper131@Frontier.com",
    "streetAddressOfBuilding": "4192 Red Bend Road",
    "city": "Ventaquemada",
    "stateProvince": "Ventaquemada",
    "locality": "Ventaquemada",
    "country": "CO",
    "postalCode": "153640",
    "latitude": "5.3675",
    "longitude": "-73.5207",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 108,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 731,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 86,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 971,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190804SK7728",
    "dateOfPurchase": "2019-08-04 11:03:37",
    "extendedPrice": 1069.2,
    "customerKey": "SYREKNOX6915",
    "firstName": "Syreeta",
    "lastName": "Knox",
    "phoneNumber": "+508-123-078-6915",
    "email": "sknox123@cerist.com",
    "streetAddressOfBuilding": "6716 Blue Woods Street",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 820,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 440,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180522CP4562",
    "dateOfPurchase": "2018-05-22 11:03:37",
    "extendedPrice": 29189.76,
    "customerKey": "CLINPHIL7774",
    "firstName": "Clint",
    "lastName": "Phillips",
    "phoneNumber": "+691-143-764-7774",
    "email": "cphillip143@Vodafone.com",
    "streetAddressOfBuilding": "9348 Long Hill Ride",
    "city": "Pohnpei",
    "stateProvince": "State of Pohnpei",
    "locality": "State of Pohnpei",
    "country": "FM",
    "postalCode": "96941",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 648,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 51,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 934,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 642,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 869,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170822NM7256",
    "dateOfPurchase": "2017-08-22 11:03:37",
    "extendedPrice": 1086.6,
    "customerKey": "NAMMCCA2234",
    "firstName": "Nam",
    "lastName": "Mccarty",
    "phoneNumber": "+380-159-989-2234",
    "email": "nmccarty159@Vodafone.com",
    "streetAddressOfBuilding": "7562 Winding Stream Avenue",
    "city": "\u041e\u0437\u0435\u0440\u044f\u043d\u043a\u0430 (\u0417\u0430\u0440\u0443\u0434\u044f\u043d\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Zborivskyi",
    "locality": "Zborivskyi",
    "country": "UA",
    "postalCode": "47243",
    "latitude": "49.2504",
    "longitude": "25.1432",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 328,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 547,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 835,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191111MG0575",
    "dateOfPurchase": "2019-11-11 11:03:37",
    "extendedPrice": 6486.33,
    "customerKey": "MERNGARR7865",
    "firstName": "Merna",
    "lastName": "Garrett",
    "phoneNumber": "+380-361-636-7865",
    "email": "mgarrett361@Optus.com",
    "streetAddressOfBuilding": "5112 Short Tree Avenue",
    "city": "\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u043a\u0430 (\u041e\u0440\u0434\u0436\u043e\u043d\u0456\u043a\u0456\u0434\u0437\u0435\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Dniprovskyi",
    "locality": "Dniprovskyi",
    "country": "UA",
    "postalCode": "52061",
    "latitude": "48.3215",
    "longitude": "34.8476",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 769,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 337,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 911,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170416IW2928",
    "dateOfPurchase": "2017-04-16 11:03:37",
    "extendedPrice": 3039.79,
    "customerKey": "ISSAWAGN3368",
    "firstName": "Issac",
    "lastName": "Wagner",
    "phoneNumber": "+1-224-594-3368",
    "email": "iwagner224@Verizon.com",
    "streetAddressOfBuilding": "8688 Big Hill Road",
    "city": "Cedar Rapids",
    "stateProvince": "IA",
    "locality": "Linn",
    "country": "US",
    "postalCode": "52411",
    "latitude": "42.0493",
    "longitude": "-91.7263",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 871,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181208VC7271",
    "dateOfPurchase": "2018-12-08 11:03:37",
    "extendedPrice": 5570.210000000001,
    "customerKey": "VASHCARS8772",
    "firstName": "Vashti",
    "lastName": "Carson",
    "phoneNumber": "+1-148-236-8772",
    "email": "vcarson148@Swisscom.com",
    "streetAddressOfBuilding": "5161 Green Mound Ride",
    "city": "West Haldimand (Port Dover)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0A",
    "latitude": "42.9403",
    "longitude": "-79.945",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 129,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 890,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 394,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 16,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191104JS4487",
    "dateOfPurchase": "2019-11-04 11:03:37",
    "extendedPrice": 1356.41,
    "customerKey": "JOHNSTAR4269",
    "firstName": "Johnna",
    "lastName": "Stark",
    "phoneNumber": "+61-306-719-4269",
    "email": "jstark306@VimpelCom.com",
    "streetAddressOfBuilding": "4337 Short Mound Circle",
    "city": "North Baandee",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6412",
    "latitude": "-31.5833",
    "longitude": "117.9667",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 209,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180530MR0691",
    "dateOfPurchase": "2018-05-30 11:03:37",
    "extendedPrice": 4766.8,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 295,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 775,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190228WB9928",
    "dateOfPurchase": "2019-02-28 11:03:37",
    "extendedPrice": 337.33000000000004,
    "customerKey": "WHITBARB9108",
    "firstName": "Whitley",
    "lastName": "Barber",
    "phoneNumber": "+692-241-205-9108",
    "email": "wbarber241@Sprint.com",
    "streetAddressOfBuilding": "9524 Winding Mound Road",
    "city": "Ebeye",
    "stateProvince": "Ailinginae",
    "locality": "Ailinginae",
    "country": "MH",
    "postalCode": "96970",
    "latitude": "11.1405",
    "longitude": "166.4103",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 427,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190813AB5197",
    "dateOfPurchase": "2019-08-13 11:03:37",
    "extendedPrice": 7504.200000000001,
    "customerKey": "AUREBRAN7182",
    "firstName": "Aurelio",
    "lastName": "Brandt",
    "phoneNumber": "+880-113-627-7182",
    "email": "abrandt113@Chunghwa.com",
    "streetAddressOfBuilding": "6798 Big Tree Drive",
    "city": "Shibpur",
    "stateProvince": "Shibpur",
    "locality": "Narshingdi",
    "country": "BD",
    "postalCode": "1620",
    "latitude": "24.0394",
    "longitude": "90.7392",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 157,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 515,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 826,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 402,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160707KM8918",
    "dateOfPurchase": "2016-07-07 11:03:37",
    "extendedPrice": 20357.41,
    "customerKey": "KEVEMCMA3829",
    "firstName": "Keven",
    "lastName": "Mcmahon",
    "phoneNumber": "+1-270-801-3829",
    "email": "kmcmahon270@Verizon.com",
    "streetAddressOfBuilding": "8787 Green Ridge Ride",
    "city": "Abitibi-T\u00e9miscamingue-Ouest (Guigues)",
    "stateProvince": "QC",
    "locality": "Abitibi-T\u00e9miscamingue",
    "country": "CA",
    "postalCode": "J0Z",
    "latitude": "47.8626",
    "longitude": "-78.824",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 502,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 471,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 78,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 522,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 386,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171118BM9034",
    "dateOfPurchase": "2017-11-18 11:03:37",
    "extendedPrice": 1835.8600000000001,
    "customerKey": "BENNMCCA9467",
    "firstName": "Bennett",
    "lastName": "Mccarty",
    "phoneNumber": "+27-141-414-9467",
    "email": "bmccarty141@PLDT.com",
    "streetAddressOfBuilding": "5307 Blue Tree Way",
    "city": "Phoenix",
    "stateProvince": null,
    "locality": null,
    "country": "ZA",
    "postalCode": "4300",
    "latitude": "-26.0667",
    "longitude": "29.2",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 614,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190509CT8818",
    "dateOfPurchase": "2019-05-09 11:03:37",
    "extendedPrice": 39701.240000000005,
    "customerKey": "CHRITATE7389",
    "firstName": "Christy",
    "lastName": "Tate",
    "phoneNumber": "+1-132-707-7389",
    "email": "ctate132@Movil.com",
    "streetAddressOfBuilding": "8582 Long Gully Drive",
    "city": "Donie",
    "stateProvince": "TX",
    "locality": "Freestone",
    "country": "US",
    "postalCode": "75838",
    "latitude": "31.4873",
    "longitude": "-96.2387",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 841,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 685,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180512AD1674",
    "dateOfPurchase": "2018-05-12 11:03:37",
    "extendedPrice": 7458.18,
    "customerKey": "ANGEDAY2054",
    "firstName": "Angelo",
    "lastName": "Day",
    "phoneNumber": "+60-373-277-2054",
    "email": "aday373@TelecomItalia.com",
    "streetAddressOfBuilding": "42 Green Woods Ride",
    "city": "Pulau Pinang",
    "stateProvince": "PNG",
    "locality": "Pulau Pinang",
    "country": "MY",
    "postalCode": "10910",
    "latitude": "5.4179",
    "longitude": "100.3296",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 339,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 993,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180417IW3662",
    "dateOfPurchase": "2018-04-17 11:03:37",
    "extendedPrice": 16877.5,
    "customerKey": "ISSAWAGN3368",
    "firstName": "Issac",
    "lastName": "Wagner",
    "phoneNumber": "+1-224-594-3368",
    "email": "iwagner224@Verizon.com",
    "streetAddressOfBuilding": "8688 Big Hill Road",
    "city": "Cedar Rapids",
    "stateProvince": "IA",
    "locality": "Linn",
    "country": "US",
    "postalCode": "52411",
    "latitude": "42.0493",
    "longitude": "-91.7263",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 431,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 899,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 620,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190814NR9313",
    "dateOfPurchase": "2019-08-14 11:03:37",
    "extendedPrice": 2994.42,
    "customerKey": "NEALRUSS3089",
    "firstName": "Neal",
    "lastName": "Russo",
    "phoneNumber": "+385-395-758-3089",
    "email": "nrusso395@Orange.com",
    "streetAddressOfBuilding": "1305 Green Mound Road",
    "city": "Rezova\u010dke Kr\u010devine",
    "stateProvince": "Virovitica",
    "locality": "Virovitica",
    "country": "HR",
    "postalCode": "33000",
    "latitude": "45.7833",
    "longitude": "17.4167",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 858,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170103BM5329",
    "dateOfPurchase": "2017-01-03 11:03:37",
    "extendedPrice": 5600.87,
    "customerKey": "BURLMCKA5896",
    "firstName": "Burl",
    "lastName": "Mckay",
    "phoneNumber": "+91-372-007-5896",
    "email": "bmckay372@Movil.com",
    "streetAddressOfBuilding": "8437 Winding Bough Ride",
    "city": "Thimmanallur",
    "stateProvince": "Dindigul",
    "locality": "Dindigul",
    "country": "IN",
    "postalCode": "624308",
    "latitude": "10.0788",
    "longitude": "77.9387",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 863,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160621MR6023",
    "dateOfPurchase": "2016-06-21 11:03:37",
    "extendedPrice": 2140.96,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 910,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 384,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191228LB7301",
    "dateOfPurchase": "2019-12-28 11:03:37",
    "extendedPrice": 12400.99,
    "customerKey": "LIBEBRAN9462",
    "firstName": "Liberty",
    "lastName": "Brandt",
    "phoneNumber": "+590-107-479-9462",
    "email": "lbrandt107@APICnet.com",
    "streetAddressOfBuilding": "1857 Long Mountain Road",
    "city": "Grand-Bourg",
    "stateProvince": "GP",
    "locality": "Guadeloupe",
    "country": "GP",
    "postalCode": "97112",
    "latitude": "15.8835",
    "longitude": "-61.3148",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 380,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 783,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 334,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 708,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 692,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190103FH6758",
    "dateOfPurchase": "2019-01-03 11:03:37",
    "extendedPrice": 2530.69,
    "customerKey": "FERDHERR5213",
    "firstName": "Ferdinand",
    "lastName": "Herrera",
    "phoneNumber": "+61-388-914-5213",
    "email": "fherrera388@BT.com",
    "streetAddressOfBuilding": "1601 Short Gully Way",
    "city": "Tinaroo",
    "stateProvince": "QLD",
    "locality": "NORTH QLD",
    "country": "AU",
    "postalCode": "4872",
    "latitude": "-17.1712",
    "longitude": "145.5494",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 306,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 175,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161127MG4532",
    "dateOfPurchase": "2016-11-27 11:03:37",
    "extendedPrice": 2655.1200000000003,
    "customerKey": "MERNGARR7865",
    "firstName": "Merna",
    "lastName": "Garrett",
    "phoneNumber": "+380-361-636-7865",
    "email": "mgarrett361@Optus.com",
    "streetAddressOfBuilding": "5112 Short Tree Avenue",
    "city": "\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u043a\u0430 (\u041e\u0440\u0434\u0436\u043e\u043d\u0456\u043a\u0456\u0434\u0437\u0435\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Dniprovskyi",
    "locality": "Dniprovskyi",
    "country": "UA",
    "postalCode": "52061",
    "latitude": "48.3215",
    "longitude": "34.8476",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 888,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191031OP9196",
    "dateOfPurchase": "2019-10-31 11:03:37",
    "extendedPrice": 26958.540000000005,
    "customerKey": "OLIVPALM2217",
    "firstName": "Oliver",
    "lastName": "Palmer",
    "phoneNumber": "+91-238-297-2217",
    "email": "opalmer238@Telkom.com",
    "streetAddressOfBuilding": "8692 Green Woods Circle",
    "city": "Karawal Nagar",
    "stateProvince": "NA",
    "locality": "East Delhi",
    "country": "IN",
    "postalCode": "110090",
    "latitude": "28.6114",
    "longitude": "77.2982",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 338,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 634,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 415,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 385,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180309SK8593",
    "dateOfPurchase": "2018-03-09 11:03:37",
    "extendedPrice": 50497.76,
    "customerKey": "SYREKNOX6915",
    "firstName": "Syreeta",
    "lastName": "Knox",
    "phoneNumber": "+508-123-078-6915",
    "email": "sknox123@cerist.com",
    "streetAddressOfBuilding": "6716 Blue Woods Street",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 665,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 249,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 776,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 610,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 764,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 821,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160716JA3296",
    "dateOfPurchase": "2016-07-16 11:03:37",
    "extendedPrice": 6989.770000000001,
    "customerKey": "JESSARMS3013",
    "firstName": "Jess",
    "lastName": "Armstrong",
    "phoneNumber": "+60-295-869-3013",
    "email": "jarmstro295@Jio.com",
    "streetAddressOfBuilding": "7499 Little Woods Boulevard",
    "city": "Ipoh",
    "stateProvince": "PRK",
    "locality": "Perak",
    "country": "MY",
    "postalCode": "30644",
    "latitude": "4.5987",
    "longitude": "101.0899",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 868,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 290,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 369,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 196,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191002JS3148",
    "dateOfPurchase": "2019-10-02 11:03:37",
    "extendedPrice": 3366.9800000000005,
    "customerKey": "JEANSHEP0966",
    "firstName": "Jean",
    "lastName": "Shepard",
    "phoneNumber": "+63-255-684-0966",
    "email": "jshepard255@Zain.com",
    "streetAddressOfBuilding": "6107 Winding Tree Road",
    "city": "Calasiao",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "2418",
    "latitude": "16.0094",
    "longitude": "120.3633",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 558,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 318,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 36,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 394,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160724VH8615",
    "dateOfPurchase": "2016-07-24 11:03:37",
    "extendedPrice": 6235.4400000000005,
    "customerKey": "VITOHERM1630",
    "firstName": "Vito",
    "lastName": "Herman",
    "phoneNumber": "+389-189-077-1630",
    "email": "vherman189@OTE.com",
    "streetAddressOfBuilding": "6744 Red Woods Boulevard",
    "city": "Petrovec",
    "stateProvince": null,
    "locality": null,
    "country": "MK",
    "postalCode": "1043",
    "latitude": "41.9389",
    "longitude": "21.615",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 559,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 299,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 930,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180601LI3241",
    "dateOfPurchase": "2018-06-01 11:03:37",
    "extendedPrice": 25819.02,
    "customerKey": "LESLIBAR4864",
    "firstName": "Lesley",
    "lastName": "Ibarra",
    "phoneNumber": "+44-326-119-4864",
    "email": "libarra326@MaxComm.com",
    "streetAddressOfBuilding": "5490 Long Bend Road",
    "city": "Compton",
    "stateProvince": "England",
    "locality": "Berkshire",
    "country": "GB",
    "postalCode": "RG20",
    "latitude": "51.5158",
    "longitude": "-1.2551",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 646,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 452,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190610EP8218",
    "dateOfPurchase": "2019-06-10 11:03:37",
    "extendedPrice": 7586.620000000001,
    "customerKey": "EDWAPETE3681",
    "firstName": "Edwardo",
    "lastName": "Peterson",
    "phoneNumber": "+34-177-399-3681",
    "email": "epeterso177@APICnet.com",
    "streetAddressOfBuilding": "7535 Little Hill Street",
    "city": "Agrade, A (San Vicente)",
    "stateProvince": "GA",
    "locality": "Lugo",
    "country": "ES",
    "postalCode": "27513",
    "latitude": "42.5991",
    "longitude": "-7.8716",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 427,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 987,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 59,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 665,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180903AB0508",
    "dateOfPurchase": "2018-09-03 11:03:37",
    "extendedPrice": 795.72,
    "customerKey": "ABELBARR2892",
    "firstName": "Abel",
    "lastName": "Barron",
    "phoneNumber": "+1670-307-108-2892",
    "email": "abarron307@UI.com",
    "streetAddressOfBuilding": "5233 Red River Way",
    "city": "Saipan",
    "stateProvince": "Saipan",
    "locality": "Saipan",
    "country": "MP",
    "postalCode": "96950",
    "latitude": "15.1685",
    "longitude": "145.7408",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 228,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190222GM7874",
    "dateOfPurchase": "2019-02-22 11:03:37",
    "extendedPrice": 478.13000000000005,
    "customerKey": "GLENMCLA8639",
    "firstName": "Glenn",
    "lastName": "Mclaughlin",
    "phoneNumber": "+91-116-582-8639",
    "email": "gmclaugh116@BT.com",
    "streetAddressOfBuilding": "2574 Big Mound Street",
    "city": "Jamoo",
    "stateProvince": "Banda",
    "locality": "Banda",
    "country": "IN",
    "postalCode": "210203",
    "latitude": "25.3957",
    "longitude": "80.7243",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 137,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190909EL0343",
    "dateOfPurchase": "2019-09-09 11:03:37",
    "extendedPrice": 53780.42,
    "customerKey": "ERNELAMB8303",
    "firstName": "Ernesto",
    "lastName": "Lambert",
    "phoneNumber": "+91-186-604-8303",
    "email": "elambert186@CUBENet.com",
    "streetAddressOfBuilding": "5976 Green Bridge Drive",
    "city": "Deorikala",
    "stateProvince": "Lakhnadon",
    "locality": "Seoni",
    "country": "IN",
    "postalCode": "480886",
    "latitude": "22.5475",
    "longitude": "79.6032",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 756,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 849,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 262,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 929,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 362,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180409RG1388",
    "dateOfPurchase": "2018-04-09 11:03:37",
    "extendedPrice": 7935.9800000000005,
    "customerKey": "ROLAGILE1128",
    "firstName": "Roland",
    "lastName": "Giles",
    "phoneNumber": "+1-190-173-1128",
    "email": "rgiles190@Telecom.com",
    "streetAddressOfBuilding": "3531 Long Hill Street",
    "city": "Newark",
    "stateProvince": "CA",
    "locality": "Alameda",
    "country": "US",
    "postalCode": "94560",
    "latitude": "37.5368",
    "longitude": "-122.032",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 418,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 892,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 344,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 925,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 604,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180509NV3244",
    "dateOfPurchase": "2018-05-09 11:03:37",
    "extendedPrice": 17023.54,
    "customerKey": "NOEVINC2337",
    "firstName": "Noe",
    "lastName": "Vincent",
    "phoneNumber": "+61-170-047-2337",
    "email": "nvincent170@Telefonica.com",
    "streetAddressOfBuilding": "7838 Long Gulch Boulevard",
    "city": "Arkstone",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2795",
    "latitude": "-33.4549",
    "longitude": "149.6841",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 715,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 605,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 431,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 209,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 887,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190721OM3416",
    "dateOfPurchase": "2019-07-21 11:03:37",
    "extendedPrice": 15993.560000000001,
    "customerKey": "OLAMANN3453",
    "firstName": "Ola",
    "lastName": "Mann",
    "phoneNumber": "+94-137-006-3453",
    "email": "omann137@Chunghwa.com",
    "streetAddressOfBuilding": "8569 Big Woods Circle",
    "city": "Hiyare",
    "stateProvince": "Galle",
    "locality": "Galle",
    "country": "LK",
    "postalCode": "80056",
    "latitude": "6.0647",
    "longitude": "80.3013",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 595,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 327,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 957,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 465,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161109KS4920",
    "dateOfPurchase": "2016-11-09 11:03:37",
    "extendedPrice": 8559.699999999999,
    "customerKey": "KENYSUMM1295",
    "firstName": "Kenyetta",
    "lastName": "Summers",
    "phoneNumber": "+60-237-402-1295",
    "email": "ksummers237@Vodafone.com",
    "streetAddressOfBuilding": "2507 Blue River Circle",
    "city": "Kuantan",
    "stateProvince": "PHG",
    "locality": "Pahang",
    "country": "MY",
    "postalCode": "25503",
    "latitude": "3.825",
    "longitude": "103.3239",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 926,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 756,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 387,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 421,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180212JM1480",
    "dateOfPurchase": "2018-02-12 11:03:37",
    "extendedPrice": 2680.21,
    "customerKey": "JOELMALO1186",
    "firstName": "Joella",
    "lastName": "Malone",
    "phoneNumber": "+441624-331-517-1186",
    "email": "jmalone331@SEEDnet.com",
    "streetAddressOfBuilding": "6347 Big Hill Street",
    "city": "Grenaby",
    "stateProvince": "Isle of Man",
    "locality": "Isle of Man",
    "country": "IM",
    "postalCode": "IM9",
    "latitude": "54.0951",
    "longitude": "-4.6929",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 58,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 621,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190926LD7780",
    "dateOfPurchase": "2019-09-26 11:03:37",
    "extendedPrice": 2444.84,
    "customerKey": "LOUIDAVI0857",
    "firstName": "Louie",
    "lastName": "David",
    "phoneNumber": "+91-250-172-0857",
    "email": "ldavid250@Etisalat.com",
    "streetAddressOfBuilding": "3492 Green Canyon Circle",
    "city": "Khwajke",
    "stateProvince": "NA",
    "locality": "Ludhiana",
    "country": "IN",
    "postalCode": "141007",
    "latitude": "30.9724",
    "longitude": "75.9345",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 655,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 10,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 51,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160720RB4473",
    "dateOfPurchase": "2016-07-20 11:03:37",
    "extendedPrice": 8881.619999999999,
    "customerKey": "RUSSBANK9176",
    "firstName": "Russell",
    "lastName": "Banks",
    "phoneNumber": "+63-375-032-9176",
    "email": "rbanks375@PTCL.com",
    "streetAddressOfBuilding": "8074 Winding Bridge Avenue",
    "city": "San Miguel",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "6323",
    "latitude": "9.9881",
    "longitude": "124.3389",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 168,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 468,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 642,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161205RB7170",
    "dateOfPurchase": "2016-12-05 11:03:37",
    "extendedPrice": 10412.560000000001,
    "customerKey": "REUBBURT4745",
    "firstName": "Reuben",
    "lastName": "Burton",
    "phoneNumber": "+1-188-828-4745",
    "email": "rburton188@Telefonica.com",
    "streetAddressOfBuilding": "8295 Long Mountain Circle",
    "city": "Gully",
    "stateProvince": "MN",
    "locality": "Polk",
    "country": "US",
    "postalCode": "56646",
    "latitude": "47.7697",
    "longitude": "-95.641",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 253,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 413,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 728,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190609JW9857",
    "dateOfPurchase": "2019-06-09 11:03:37",
    "extendedPrice": 13493.249999999998,
    "customerKey": "JEANWOLF9903",
    "firstName": "Jeanna",
    "lastName": "Wolf",
    "phoneNumber": "+687-327-003-9903",
    "email": "jwolf327@Telstra.com",
    "streetAddressOfBuilding": "6446 Big Mound Drive",
    "city": "Ou\u00e5co",
    "stateProvince": "Voh",
    "locality": "Voh",
    "country": "NC",
    "postalCode": "98883",
    "latitude": "-20.8353",
    "longitude": "164.4694",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 675,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170116LB1225",
    "dateOfPurchase": "2017-01-16 11:03:37",
    "extendedPrice": 2505.37,
    "customerKey": "LIBEBRAN9462",
    "firstName": "Liberty",
    "lastName": "Brandt",
    "phoneNumber": "+590-107-479-9462",
    "email": "lbrandt107@APICnet.com",
    "streetAddressOfBuilding": "1857 Long Mountain Road",
    "city": "Grand-Bourg",
    "stateProvince": "GP",
    "locality": "Guadeloupe",
    "country": "GP",
    "postalCode": "97112",
    "latitude": "15.8835",
    "longitude": "-61.3148",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 149,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 278,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 119,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 357,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190125VE3895",
    "dateOfPurchase": "2019-01-25 11:03:37",
    "extendedPrice": 4870.36,
    "customerKey": "VELMESPI3760",
    "firstName": "Velma",
    "lastName": "Espinoza",
    "phoneNumber": "+35818-155-215-3760",
    "email": "vespinoz155@Relcom.com",
    "streetAddressOfBuilding": "5089 Winding Woods Drive",
    "city": "Emkarby",
    "stateProvince": "Finstr\u00f6m",
    "locality": "Finstr\u00f6m",
    "country": "AX",
    "postalCode": "22220",
    "latitude": "60.2394",
    "longitude": "19.848",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 278,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 444,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 362,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191226MS8039",
    "dateOfPurchase": "2019-12-26 11:03:37",
    "extendedPrice": 3371.77,
    "customerKey": "MARGSALA4767",
    "firstName": "Margie",
    "lastName": "Salas",
    "phoneNumber": "+92-185-131-4767",
    "email": "msalas185@DaxNet.com",
    "streetAddressOfBuilding": "3299 Winding Gulch Drive",
    "city": "Chak 143\/Eb",
    "stateProvince": "Lahore",
    "locality": "Lahore",
    "country": "PK",
    "postalCode": "57451",
    "latitude": "30.225",
    "longitude": "73.2167",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 308,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 35,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 374,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 313,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 73,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170513JB5955",
    "dateOfPurchase": "2017-05-13 11:03:37",
    "extendedPrice": 3991.9700000000003,
    "customerKey": "JOSEBALD5849",
    "firstName": "Josefa",
    "lastName": "Baldwin",
    "phoneNumber": "+57-245-450-5849",
    "email": "jbaldwin245@OpenWorld.com",
    "streetAddressOfBuilding": "3312 Long Bough Circle",
    "city": "Barrancabermeja",
    "stateProvince": "Barrancabermeja",
    "locality": "Barrancabermeja",
    "country": "CO",
    "postalCode": "687031",
    "latitude": "7.0653",
    "longitude": "-73.8547",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 317,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 835,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 422,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 145,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190129DZ0911",
    "dateOfPurchase": "2019-01-29 11:03:37",
    "extendedPrice": 6480.77,
    "customerKey": "DONZHAN7286",
    "firstName": "Don",
    "lastName": "Zhang",
    "phoneNumber": "+351-111-858-7286",
    "email": "dzhang111@AlgoNet.com",
    "streetAddressOfBuilding": "3029 Short River Drive",
    "city": "Barroselas",
    "stateProvince": "Barroselas",
    "locality": "Viana do Castelo",
    "country": "PT",
    "postalCode": "4905-404",
    "latitude": "41.6474",
    "longitude": "-8.7007",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 975,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 506,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 117,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190409AB6118",
    "dateOfPurchase": "2019-04-09 11:03:37",
    "extendedPrice": 9817.84,
    "customerKey": "ASHEBART3266",
    "firstName": "Ashely",
    "lastName": "Barton",
    "phoneNumber": "+1-136-333-3266",
    "email": "abarton136@VimpelCom.com",
    "streetAddressOfBuilding": "8959 Winding Creek Boulevard",
    "city": "San Rafael",
    "stateProvince": "CA",
    "locality": "Marin",
    "country": "US",
    "postalCode": "94912",
    "latitude": "37.9735",
    "longitude": "-122.5311",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 75,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 935,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 854,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 499,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 988,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 126,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181115WC4014",
    "dateOfPurchase": "2018-11-15 11:03:37",
    "extendedPrice": 4183.1900000000005,
    "customerKey": "WELDCHAV2057",
    "firstName": "Weldon",
    "lastName": "Chavez",
    "phoneNumber": "+47-377-325-2057",
    "email": "wchavez377@APICnet.com",
    "streetAddressOfBuilding": "3662 Short Mountain Way",
    "city": "F\u00f8rde",
    "stateProvince": "F\u00f8rde",
    "locality": "F\u00f8rde",
    "country": "NO",
    "postalCode": "6801",
    "latitude": "61.4522",
    "longitude": "5.8572",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 652,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 529,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170102SK3807",
    "dateOfPurchase": "2017-01-02 11:03:37",
    "extendedPrice": 1811.3700000000001,
    "customerKey": "SHANKELL3730",
    "firstName": "Shanell",
    "lastName": "Kelly",
    "phoneNumber": "+356-277-355-3730",
    "email": "skelly277@Turkcell.com",
    "streetAddressOfBuilding": "8750 Red Ditch Street",
    "city": "Swieqi",
    "stateProvince": "Is-Swieqi",
    "locality": "Is-Swieqi",
    "country": "MT",
    "postalCode": "SWQ",
    "latitude": "35.9217",
    "longitude": "14.4694",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 363,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190711RC4712",
    "dateOfPurchase": "2019-07-11 11:03:37",
    "extendedPrice": 12255.79,
    "customerKey": "REIDCOLE7288",
    "firstName": "Reid",
    "lastName": "Cole",
    "phoneNumber": "+691-259-281-7288",
    "email": "rcole259@TelecomItalia.com",
    "streetAddressOfBuilding": "2989 Big Ditch Avenue",
    "city": "Yap",
    "stateProvince": "State of Yap",
    "locality": "State of Yap",
    "country": "FM",
    "postalCode": "96943",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 709,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 772,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 447,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 691,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 322,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180923PC2852",
    "dateOfPurchase": "2018-09-23 11:03:37",
    "extendedPrice": 20514.140000000003,
    "customerKey": "PIERCARE0110",
    "firstName": "Pierre",
    "lastName": "Carey",
    "phoneNumber": "+594-117-245-0110",
    "email": "pcarey117@Access.com",
    "streetAddressOfBuilding": "8971 Green Creek Way",
    "city": "Montsin\u00e9ry-Tonnegrande",
    "stateProvince": "GF",
    "locality": "Guyane",
    "country": "GF",
    "postalCode": "97356",
    "latitude": "4.9",
    "longitude": "-52.5",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 821,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 580,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 873,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 898,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 258,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180218VP9774",
    "dateOfPurchase": "2018-02-18 11:03:37",
    "extendedPrice": 3780.61,
    "customerKey": "VERNPATE7142",
    "firstName": "Vernetta",
    "lastName": "Patel",
    "phoneNumber": "+351-359-104-7142",
    "email": "vpatel359@KTC.com",
    "streetAddressOfBuilding": "570 Little Bend Avenue",
    "city": "Lousado",
    "stateProvince": "Lousado",
    "locality": "Vila Nova de Famalic\u00e3o",
    "country": "PT",
    "postalCode": "4760-660",
    "latitude": "41.3501",
    "longitude": "-8.5356",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 570,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 94,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 175,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190323BN7794",
    "dateOfPurchase": "2019-03-23 11:03:37",
    "extendedPrice": 3467.04,
    "customerKey": "BURLNICH6718",
    "firstName": "Burl",
    "lastName": "Nichols",
    "phoneNumber": "+213-249-329-6718",
    "email": "bnichols249@NordNet.com",
    "streetAddressOfBuilding": "6461 Long Mound Way",
    "city": "Ain Alouane",
    "stateProvince": "Bouira",
    "locality": "Bouira",
    "country": "DZ",
    "postalCode": "10081",
    "latitude": "36.2112",
    "longitude": "4.1099",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 496,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161224TP8253",
    "dateOfPurchase": "2016-12-24 11:03:37",
    "extendedPrice": 9436.730000000001,
    "customerKey": "TERRPADI2636",
    "firstName": "Terry",
    "lastName": "Padilla",
    "phoneNumber": "+91-204-097-2636",
    "email": "tpadilla204@Orstom.com",
    "streetAddressOfBuilding": "5636 Blue Bend Avenue",
    "city": "Varana",
    "stateProvince": "Sami",
    "locality": "Patan",
    "country": "IN",
    "postalCode": "384245",
    "latitude": "23.5202",
    "longitude": "71.8677",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 937,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 244,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 941,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 6,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 853,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180305LV0375",
    "dateOfPurchase": "2018-03-05 11:03:37",
    "extendedPrice": 412.11,
    "customerKey": "LOGAVAUG6433",
    "firstName": "Logan",
    "lastName": "Vaughn",
    "phoneNumber": "+1-150-280-6433",
    "email": "lvaughn150@NetCom.com",
    "streetAddressOfBuilding": "7337 Little Stream Drive",
    "city": "Scarborough (Cliffside \/ Cliffcrest \/ Scarborough Village West)",
    "stateProvince": "ON",
    "locality": "Scarborough",
    "country": "CA",
    "postalCode": "M1M",
    "latitude": "43.7247",
    "longitude": "-79.2312",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 313,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 173,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190312GE5578",
    "dateOfPurchase": "2019-03-12 11:03:37",
    "extendedPrice": 6022.17,
    "customerKey": "GUSESQU8440",
    "firstName": "Gus",
    "lastName": "Esquivel",
    "phoneNumber": "+1-356-786-8440",
    "email": "gesquive356@Zain.com",
    "streetAddressOfBuilding": "8158 Little Gulch Drive",
    "city": "Marathon",
    "stateProvince": "TX",
    "locality": "Brewster",
    "country": "US",
    "postalCode": "79842",
    "latitude": "30.1886",
    "longitude": "-103.2214",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 686,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 497,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180309GM4525",
    "dateOfPurchase": "2018-03-09 11:03:37",
    "extendedPrice": 3254.69,
    "customerKey": "GENEMYER4370",
    "firstName": "Gene",
    "lastName": "Myers",
    "phoneNumber": "+61-106-347-4370",
    "email": "gmyers106@Bifty.com",
    "streetAddressOfBuilding": "6490 Short Ditch Avenue",
    "city": "Fadden",
    "stateProvince": "ACT",
    "locality": "CANBERRA",
    "country": "AU",
    "postalCode": "2904",
    "latitude": "-35.405",
    "longitude": "149.1166",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 256,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 232,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 98,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 639,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 893,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 697,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180405IW9457",
    "dateOfPurchase": "2018-04-05 11:03:37",
    "extendedPrice": 4462.94,
    "customerKey": "ISSAWAGN3368",
    "firstName": "Issac",
    "lastName": "Wagner",
    "phoneNumber": "+1-224-594-3368",
    "email": "iwagner224@Verizon.com",
    "streetAddressOfBuilding": "8688 Big Hill Road",
    "city": "Cedar Rapids",
    "stateProvince": "IA",
    "locality": "Linn",
    "country": "US",
    "postalCode": "52411",
    "latitude": "42.0493",
    "longitude": "-91.7263",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 706,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 100,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191101VS3590",
    "dateOfPurchase": "2019-11-01 11:03:37",
    "extendedPrice": 1401.54,
    "customerKey": "VANSELL2114",
    "firstName": "Van",
    "lastName": "Sellers",
    "phoneNumber": "+1-232-235-2114",
    "email": "vsellers232@Vodafone.com",
    "streetAddressOfBuilding": "9736 Blue Bend Drive",
    "city": "Elliot Lake",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "P5A",
    "latitude": "46.3834",
    "longitude": "-82.6332",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 854,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 826,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161004AM2583",
    "dateOfPurchase": "2016-10-04 11:03:37",
    "extendedPrice": 4361.58,
    "customerKey": "AHMEMORR7725",
    "firstName": "Ahmed",
    "lastName": "Morrison",
    "phoneNumber": "+880-289-298-7725",
    "email": "amorriso289@Safaricom.com",
    "streetAddressOfBuilding": "1781 Short Gulch Road",
    "city": "Hayemchar",
    "stateProvince": "Hayemchar",
    "locality": "Chandpur",
    "country": "BD",
    "postalCode": "3660",
    "latitude": "23.0768",
    "longitude": "90.681",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 23,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 275,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 476,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 333,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 85,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161010DC5454",
    "dateOfPurchase": "2016-10-10 11:03:37",
    "extendedPrice": 10338.19,
    "customerKey": "DANICONN6067",
    "firstName": "Daniel",
    "lastName": "Conner",
    "phoneNumber": "+61-164-396-6067",
    "email": "dconner164@Telekom.com",
    "streetAddressOfBuilding": "4073 Big Gulch Way",
    "city": "Proston",
    "stateProvince": "QLD",
    "locality": "TOOWOOMBA SE CNR",
    "country": "AU",
    "postalCode": "4613",
    "latitude": "-26.1607",
    "longitude": "151.6004",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 602,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 706,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 67,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 306,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190530HH5079",
    "dateOfPurchase": "2019-05-30 11:03:37",
    "extendedPrice": 13298.140000000003,
    "customerKey": "HILDHOLL2587",
    "firstName": "Hilde",
    "lastName": "Holloway",
    "phoneNumber": "+35818-195-814-2587",
    "email": "hhollowa195@SingTel.com",
    "streetAddressOfBuilding": "1901 Little Bridge Avenue",
    "city": "\u00d6dkarby",
    "stateProvince": "Saltvik",
    "locality": "Saltvik",
    "country": "AX",
    "postalCode": "22320",
    "latitude": "60.3162",
    "longitude": "20.0054",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 962,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 587,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 740,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 107,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180324RI9632",
    "dateOfPurchase": "2018-03-24 11:03:37",
    "extendedPrice": 13879.050000000001,
    "customerKey": "REGIIBAR8447",
    "firstName": "Regine",
    "lastName": "Ibarra",
    "phoneNumber": "+373-109-864-8447",
    "email": "ribarra109@Zain.com",
    "streetAddressOfBuilding": "6229 Blue Canyon Street",
    "city": "Bobletici",
    "stateProvince": "Singerei",
    "locality": "Singerei",
    "country": "MD",
    "postalCode": "MD-6219",
    "latitude": "47.4664",
    "longitude": "28.0544",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 295,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 475,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 831,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 294,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161103TH2206",
    "dateOfPurchase": "2016-11-03 11:03:38",
    "extendedPrice": 22225.97,
    "customerKey": "TIJUHOGA5010",
    "firstName": "Tijuana",
    "lastName": "Hogan",
    "phoneNumber": "+44-119-817-5010",
    "email": "thogan119@Telenor.com",
    "streetAddressOfBuilding": "106 Short Bend Boulevard",
    "city": "Staffin",
    "stateProvince": "Scotland",
    "locality": "Highland",
    "country": "GB",
    "postalCode": "IV51",
    "latitude": "57.6241",
    "longitude": "-6.2066",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 852,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 584,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 794,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 194,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 279,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190404LI7932",
    "dateOfPurchase": "2019-04-04 11:03:38",
    "extendedPrice": 10124.789999999999,
    "customerKey": "LESLIBAR4864",
    "firstName": "Lesley",
    "lastName": "Ibarra",
    "phoneNumber": "+44-326-119-4864",
    "email": "libarra326@MaxComm.com",
    "streetAddressOfBuilding": "5490 Long Bend Road",
    "city": "Compton",
    "stateProvince": "England",
    "locality": "Berkshire",
    "country": "GB",
    "postalCode": "RG20",
    "latitude": "51.5158",
    "longitude": "-1.2551",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 193,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 106,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 511,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 461,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181116RB7823",
    "dateOfPurchase": "2018-11-16 11:03:38",
    "extendedPrice": 1222.55,
    "customerKey": "RICABRAN9358",
    "firstName": "Ricardo",
    "lastName": "Brandt",
    "phoneNumber": "+61-374-216-9358",
    "email": "rbrandt374@NetCom.com",
    "streetAddressOfBuilding": "1478 Winding Tree Circle",
    "city": "Whitby",
    "stateProvince": "WA",
    "locality": "TANGNEY",
    "country": "AU",
    "postalCode": "6123",
    "latitude": "-32.292",
    "longitude": "116.0124",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 245,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180515BR4784",
    "dateOfPurchase": "2018-05-15 11:03:38",
    "extendedPrice": 9320.36,
    "customerKey": "BRYCRAYM0106",
    "firstName": "Bryce",
    "lastName": "Raymond",
    "phoneNumber": "+61-216-290-0106",
    "email": "braymond216@Sprint.com",
    "streetAddressOfBuilding": "9607 Little Bough Way",
    "city": "Environa",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2620",
    "latitude": "-35.3914",
    "longitude": "149.2166",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 662,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 854,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 348,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191221KJ2372",
    "dateOfPurchase": "2019-12-21 11:03:38",
    "extendedPrice": 1308.72,
    "customerKey": "KIRSJACO3439",
    "firstName": "Kirsten",
    "lastName": "Jacobs",
    "phoneNumber": "+380-197-767-3439",
    "email": "kjacobs197@GlasNET.com",
    "streetAddressOfBuilding": "6178 Red Ditch Drive",
    "city": "\u0410\u043b\u0442\u0435\u0441\u0442\u043e\u0432\u0435 (\u0425\u043e\u043b\u043e\u0434\u043d\u043e\u0431\u0430\u043b\u043a\u0456\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Biliaivskyi",
    "locality": "Biliaivskyi",
    "country": "UA",
    "postalCode": "67659",
    "latitude": "46.4832",
    "longitude": "30.2168",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 328,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190104OS1686",
    "dateOfPurchase": "2019-01-04 11:03:38",
    "extendedPrice": 9361.43,
    "customerKey": "ORVISWEE0979",
    "firstName": "Orville",
    "lastName": "Sweeney",
    "phoneNumber": "+91-258-901-0979",
    "email": "osweeney258@APICnet.com",
    "streetAddressOfBuilding": "654 Blue Gulch Avenue",
    "city": "Khayerbari",
    "stateProvince": "Haldibari",
    "locality": "Cooch Behar",
    "country": "IN",
    "postalCode": "735122",
    "latitude": "25.2463",
    "longitude": "88.0977",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 136,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 997,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 846,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 358,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170908EV4825",
    "dateOfPurchase": "2017-09-08 11:03:38",
    "extendedPrice": 1441.3700000000001,
    "customerKey": "EARLVENT7345",
    "firstName": "Earline",
    "lastName": "Ventura",
    "phoneNumber": "+1-266-605-7345",
    "email": "eventura266@Bifty.com",
    "streetAddressOfBuilding": "9906 Big Mound Drive",
    "city": "East Irvine",
    "stateProvince": "CA",
    "locality": "Orange",
    "country": "US",
    "postalCode": "92650",
    "latitude": "33.6795",
    "longitude": "-117.7609",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 413,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190911JC2557",
    "dateOfPurchase": "2019-09-11 11:03:38",
    "extendedPrice": 12218.99,
    "customerKey": "JANYCONL2869",
    "firstName": "Janyce",
    "lastName": "Conley",
    "phoneNumber": "+1787-281-927-2869",
    "email": "jconley281@PLDT.com",
    "streetAddressOfBuilding": "2848 Long Bough Drive",
    "city": "Guanica",
    "stateProvince": "Guanica",
    "locality": "Guanica",
    "country": "PR",
    "postalCode": "00653",
    "latitude": "17.9716",
    "longitude": "-66.908",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 31,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 406,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 946,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 488,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 545,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 788,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181104PN2975",
    "dateOfPurchase": "2018-11-04 11:03:38",
    "extendedPrice": 5815.110000000001,
    "customerKey": "PABLNORT5757",
    "firstName": "Pablo",
    "lastName": "Norton",
    "phoneNumber": "+508-145-321-5757",
    "email": "pnorton145@Verizon.com",
    "streetAddressOfBuilding": "3876 Little Gulch Way",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 40,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 569,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 380,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181023CG7765",
    "dateOfPurchase": "2018-10-23 11:03:38",
    "extendedPrice": 12279.449999999999,
    "customerKey": "CHARGOOD4456",
    "firstName": "Charita",
    "lastName": "Goodman",
    "phoneNumber": "+44-180-329-4456",
    "email": "cgoodman180@DaxNet.com",
    "streetAddressOfBuilding": "2319 Red Bend Street",
    "city": "Conland",
    "stateProvince": "Scotland",
    "locality": "Aberdeenshire",
    "country": "GB",
    "postalCode": "AB54",
    "latitude": "57.3709",
    "longitude": "-2.8293",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 225,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 508,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 243,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 784,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 451,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 744,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190318HS7548",
    "dateOfPurchase": "2019-03-18 11:03:38",
    "extendedPrice": 7462.15,
    "customerKey": "HARLSPEN6035",
    "firstName": "Harley",
    "lastName": "Spence",
    "phoneNumber": "+56-393-545-6035",
    "email": "hspence393@Airtel.com",
    "streetAddressOfBuilding": "6413 Green Woods Avenue",
    "city": "Cartagena",
    "stateProvince": "Cartagena",
    "locality": "San Antonio Province",
    "country": "CL",
    "postalCode": "2680000",
    "latitude": "-33.5338",
    "longitude": "-71.4424",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 905,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 380,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161112RB7188",
    "dateOfPurchase": "2016-11-12 11:03:38",
    "extendedPrice": 5444.1900000000005,
    "customerKey": "RUBEBEST6106",
    "firstName": "Ruben",
    "lastName": "Best",
    "phoneNumber": "+31-121-150-6106",
    "email": "rbest121@Orstom.com",
    "streetAddressOfBuilding": "990 Blue Bough Boulevard",
    "city": "Schipluiden",
    "stateProvince": "Midden-Delfland",
    "locality": "Midden-Delfland",
    "country": "NL",
    "postalCode": "2636",
    "latitude": "51.9749",
    "longitude": "4.318",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 681,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 225,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 475,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180205MR2268",
    "dateOfPurchase": "2018-02-05 11:03:38",
    "extendedPrice": 14197.710000000001,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 683,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 670,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 906,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 774,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190610NO9211",
    "dateOfPurchase": "2019-06-10 11:03:38",
    "extendedPrice": 21770.92,
    "customerKey": "NICHOCHO6493",
    "firstName": "Nicholle",
    "lastName": "Ochoa",
    "phoneNumber": "+1-376-016-6493",
    "email": "nochoa376@Jio.com",
    "streetAddressOfBuilding": "4329 Short Ridge Boulevard",
    "city": "Axtell",
    "stateProvince": "NE",
    "locality": "Kearney",
    "country": "US",
    "postalCode": "68924",
    "latitude": "40.5269",
    "longitude": "-99.1169",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 156,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 103,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 282,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 385,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 867,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 965,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160615PS6033",
    "dateOfPurchase": "2016-06-15 11:03:38",
    "extendedPrice": 16625.329999999998,
    "customerKey": "PALMSHEP5710",
    "firstName": "Palmira",
    "lastName": "Shepard",
    "phoneNumber": "+299-321-091-5710",
    "email": "pshepard321@NetCom.com",
    "streetAddressOfBuilding": "1959 Blue Hill Drive",
    "city": "Narsarsuaq",
    "stateProvince": null,
    "locality": null,
    "country": "GL",
    "postalCode": "3923",
    "latitude": "61.1667",
    "longitude": "-45.4167",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 242,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 868,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 57,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170228GM6091",
    "dateOfPurchase": "2017-02-28 11:03:38",
    "extendedPrice": 11984.93,
    "customerKey": "GLENMCLA8639",
    "firstName": "Glenn",
    "lastName": "Mclaughlin",
    "phoneNumber": "+91-116-582-8639",
    "email": "gmclaugh116@BT.com",
    "streetAddressOfBuilding": "2574 Big Mound Street",
    "city": "Jamoo",
    "stateProvince": "Banda",
    "locality": "Banda",
    "country": "IN",
    "postalCode": "210203",
    "latitude": "25.3957",
    "longitude": "80.7243",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 49,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 796,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 850,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 811,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 18,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 983,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190908DC8797",
    "dateOfPurchase": "2019-09-08 11:03:38",
    "extendedPrice": 1818.2900000000002,
    "customerKey": "DENNCAMP5794",
    "firstName": "Dennis",
    "lastName": "Campbell",
    "phoneNumber": "+61-316-812-5794",
    "email": "dcampbel316@SingTel.com",
    "streetAddressOfBuilding": "8638 Green Mountain Ride",
    "city": "Eugowra",
    "stateProvince": "NSW",
    "locality": "NEW CNTRY WEST",
    "country": "AU",
    "postalCode": "2806",
    "latitude": "-33.4273",
    "longitude": "148.3714",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 521,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170129HV0066",
    "dateOfPurchase": "2017-01-29 11:03:38",
    "extendedPrice": 21987.440000000002,
    "customerKey": "HALLVANG1075",
    "firstName": "Hallie",
    "lastName": "Vang",
    "phoneNumber": "+1-156-334-1075",
    "email": "hvang156@Jio.com",
    "streetAddressOfBuilding": "1390 Little River Circle",
    "city": "Cleveland",
    "stateProvince": "OH",
    "locality": "Cuyahoga",
    "country": "US",
    "postalCode": "44102",
    "latitude": "41.4735",
    "longitude": "-81.7398",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 549,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 407,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170829SL4798",
    "dateOfPurchase": "2017-08-29 11:03:38",
    "extendedPrice": 9666.73,
    "customerKey": "SONJLOZA0053",
    "firstName": "Sonja",
    "lastName": "Lozano",
    "phoneNumber": "+92-353-608-0053",
    "email": "slozano353@WorldNet.com",
    "streetAddressOfBuilding": "4453 Winding Gulch Drive",
    "city": "Barikot",
    "stateProvince": "Federal Capial &AJK",
    "locality": "Federal Capial &AJK",
    "country": "PK",
    "postalCode": "12560",
    "latitude": "34.7736",
    "longitude": "71.9042",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 872,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 340,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 615,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191120VH3261",
    "dateOfPurchase": "2019-11-20 11:03:38",
    "extendedPrice": 6186.120000000001,
    "customerKey": "VITOHERM1630",
    "firstName": "Vito",
    "lastName": "Herman",
    "phoneNumber": "+389-189-077-1630",
    "email": "vherman189@OTE.com",
    "streetAddressOfBuilding": "6744 Red Woods Boulevard",
    "city": "Petrovec",
    "stateProvince": null,
    "locality": null,
    "country": "MK",
    "postalCode": "1043",
    "latitude": "41.9389",
    "longitude": "21.615",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 840,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 948,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170228DE3749",
    "dateOfPurchase": "2017-02-28 11:03:38",
    "extendedPrice": 5604.67,
    "customerKey": "DARREVER1061",
    "firstName": "Darren",
    "lastName": "Everett",
    "phoneNumber": "+66-235-865-1061",
    "email": "deverett235@AlgoNet.com",
    "streetAddressOfBuilding": "7216 Long Woods Drive",
    "city": "Sida",
    "stateProvince": "Nakhon Ratchasima",
    "locality": "Nakhon Ratchasima",
    "country": "TH",
    "postalCode": "30430",
    "latitude": "14.7",
    "longitude": "102.45",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 427,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 75,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 431,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181204NV5494",
    "dateOfPurchase": "2018-12-04 11:03:38",
    "extendedPrice": 16558.780000000002,
    "customerKey": "NOEVINC2337",
    "firstName": "Noe",
    "lastName": "Vincent",
    "phoneNumber": "+61-170-047-2337",
    "email": "nvincent170@Telefonica.com",
    "streetAddressOfBuilding": "7838 Long Gulch Boulevard",
    "city": "Arkstone",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2795",
    "latitude": "-33.4549",
    "longitude": "149.6841",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 260,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 706,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 448,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 147,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 535,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 126,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190513FZ9295",
    "dateOfPurchase": "2019-05-13 11:03:38",
    "extendedPrice": 3423.55,
    "customerKey": "FERMZAVA5969",
    "firstName": "Fermina",
    "lastName": "Zavala",
    "phoneNumber": "+32-115-523-5969",
    "email": "fzavala115@BCE.com",
    "streetAddressOfBuilding": "9678 Big Mountain Boulevard",
    "city": "Landen Waasmont",
    "stateProvince": "VLG",
    "locality": "Vlaams Brabant",
    "country": "BE",
    "postalCode": "3401",
    "latitude": "50.7333",
    "longitude": "5.0667",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 742,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 393,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 298,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170105MR1816",
    "dateOfPurchase": "2017-01-05 11:03:38",
    "extendedPrice": 16125.499999999998,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 517,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 325,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 575,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 902,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 781,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171231SM5686",
    "dateOfPurchase": "2017-12-31 11:03:38",
    "extendedPrice": 18212.760000000002,
    "customerKey": "SHANMAYE6085",
    "firstName": "Shane",
    "lastName": "Mayer",
    "phoneNumber": "+1-384-784-6085",
    "email": "smayer384@Bifty.com",
    "streetAddressOfBuilding": "5315 Long Bridge Drive",
    "city": "Longueuil Central",
    "stateProvince": "QC",
    "locality": "Longueuil",
    "country": "CA",
    "postalCode": "J4J",
    "latitude": "45.5362",
    "longitude": "-73.4721",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 904,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 517,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 403,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190426NW5541",
    "dateOfPurchase": "2019-04-26 11:03:38",
    "extendedPrice": 21145.77,
    "customerKey": "NICKWALT3888",
    "firstName": "Nicki",
    "lastName": "Walton",
    "phoneNumber": "+61-394-338-3888",
    "email": "nwalton394@NetCom.com",
    "streetAddressOfBuilding": "4824 Short Bridge Circle",
    "city": "Upper Bingara",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2404",
    "latitude": "-30.05",
    "longitude": "150.65",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 423,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180601AB4093",
    "dateOfPurchase": "2018-06-01 11:03:38",
    "extendedPrice": 3123.55,
    "customerKey": "ALLEBURK4071",
    "firstName": "Allena",
    "lastName": "Burke",
    "phoneNumber": "+61-256-880-4071",
    "email": "aburke256@TelecomItalia.com",
    "streetAddressOfBuilding": "1261 Winding Ditch Street",
    "city": "Pullenvale",
    "stateProvince": "QLD",
    "locality": "NORTHGATE CENT",
    "country": "AU",
    "postalCode": "4069",
    "latitude": "-27.5228",
    "longitude": "152.8865",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 895,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160714DC8200",
    "dateOfPurchase": "2016-07-14 11:03:38",
    "extendedPrice": 30943.47,
    "customerKey": "DANICANT0900",
    "firstName": "Daniell",
    "lastName": "Cantrell",
    "phoneNumber": "+44-366-491-0900",
    "email": "dcantrel366@Chunghwa.com",
    "streetAddressOfBuilding": "3674 Big Canyon Ride",
    "city": "Woodside",
    "stateProvince": "England",
    "locality": "Hertfordshire",
    "country": "GB",
    "postalCode": "AL9",
    "latitude": "51.7449",
    "longitude": "-0.1984",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 428,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 291,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 379,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 701,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 566,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 388,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190801EB7005",
    "dateOfPurchase": "2019-08-01 11:03:38",
    "extendedPrice": 5835.83,
    "customerKey": "ELNOBLAN0165",
    "firstName": "Elnora",
    "lastName": "Blankenship",
    "phoneNumber": "+1-286-027-0165",
    "email": "eblanken286@Bifty.com",
    "streetAddressOfBuilding": "6504 Big Tree Circle",
    "city": "Saint-Hippolyte",
    "stateProvince": "QC",
    "locality": "Laurentides",
    "country": "CA",
    "postalCode": "J8A",
    "latitude": "45.9334",
    "longitude": "-74.0159",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 651,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 100,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 766,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171119WA6314",
    "dateOfPurchase": "2017-11-19 11:03:38",
    "extendedPrice": 12866.33,
    "customerKey": "WILLAREL3375",
    "firstName": "Will",
    "lastName": "Arellano",
    "phoneNumber": "+44-380-474-3375",
    "email": "warellan380@Telstra.com",
    "streetAddressOfBuilding": "8756 Green Mountain Way",
    "city": "Glororum",
    "stateProvince": "England",
    "locality": "Northumberland",
    "country": "GB",
    "postalCode": "NE69",
    "latitude": "55.6048",
    "longitude": "-1.7181",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 230,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 183,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 884,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 579,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 331,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171215MD4351",
    "dateOfPurchase": "2017-12-15 11:03:38",
    "extendedPrice": 5326.41,
    "customerKey": "MARLDORS7479",
    "firstName": "Marlo",
    "lastName": "Dorsey",
    "phoneNumber": "+44-102-260-7479",
    "email": "mdorsey102@KDDI.com",
    "streetAddressOfBuilding": "6787 Red Bridge Way",
    "city": "Shortacombe",
    "stateProvince": "England",
    "locality": "Devon",
    "country": "GB",
    "postalCode": "EX20",
    "latitude": "50.7569",
    "longitude": "-4.0388",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 465,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 286,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 861,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 146,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 615,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 30,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190707TH3362",
    "dateOfPurchase": "2019-07-07 11:03:38",
    "extendedPrice": 4604.55,
    "customerKey": "TALIHAYN4865",
    "firstName": "Talia",
    "lastName": "Haynes",
    "phoneNumber": "+213-203-525-4865",
    "email": "thaynes203@TM.com",
    "streetAddressOfBuilding": "7183 Red Gulch Way",
    "city": "Lala Metouba",
    "stateProvince": "Boumerdes",
    "locality": "Boumerdes",
    "country": "DZ",
    "postalCode": "35004",
    "latitude": "36.9023",
    "longitude": "3.8947",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 519,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 726,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170128MR0535",
    "dateOfPurchase": "2017-01-28 11:03:38",
    "extendedPrice": 3037.96,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 244,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 232,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 528,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160629CT2218",
    "dateOfPurchase": "2016-06-29 11:03:38",
    "extendedPrice": 12293.170000000002,
    "customerKey": "CHRITATE7389",
    "firstName": "Christy",
    "lastName": "Tate",
    "phoneNumber": "+1-132-707-7389",
    "email": "ctate132@Movil.com",
    "streetAddressOfBuilding": "8582 Long Gully Drive",
    "city": "Donie",
    "stateProvince": "TX",
    "locality": "Freestone",
    "country": "US",
    "postalCode": "75838",
    "latitude": "31.4873",
    "longitude": "-96.2387",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 877,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 86,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 322,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 600,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 298,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190426UC7294",
    "dateOfPurchase": "2019-04-26 11:03:38",
    "extendedPrice": 14030.82,
    "customerKey": "ULRICURR6658",
    "firstName": "Ulrike",
    "lastName": "Curry",
    "phoneNumber": "+91-234-726-6658",
    "email": "ucurry234@Telekom.com",
    "streetAddressOfBuilding": "2467 Green Bend Way",
    "city": "Sankir",
    "stateProvince": "Keonjhar",
    "locality": "Kendujhar",
    "country": "IN",
    "postalCode": "758013",
    "latitude": "20.6328",
    "longitude": "84.3663",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 996,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 896,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 910,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 916,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161203MG5255",
    "dateOfPurchase": "2016-12-03 11:03:38",
    "extendedPrice": 19085.15,
    "customerKey": "MELGILE5687",
    "firstName": "Mel",
    "lastName": "Giles",
    "phoneNumber": "+262-397-761-5687",
    "email": "mgiles397@PTCL.com",
    "streetAddressOfBuilding": "118 Short Hill Ride",
    "city": "Saint-Denis",
    "stateProvince": "RE",
    "locality": "R\u00e9union",
    "country": "RE",
    "postalCode": "97469 CEDEX",
    "latitude": "-20.8823",
    "longitude": "55.4504",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 500,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 870,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 847,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 513,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 855,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180729TC5655",
    "dateOfPurchase": "2018-07-29 11:03:38",
    "extendedPrice": 3402.75,
    "customerKey": "TOMACORD9130",
    "firstName": "Tomas",
    "lastName": "Cordova",
    "phoneNumber": "+596-379-157-9130",
    "email": "tcordova379@Millicom.com",
    "streetAddressOfBuilding": "9103 Blue Bridge Way",
    "city": "Fort-de-France",
    "stateProvince": "MQ",
    "locality": "Martinique",
    "country": "MQ",
    "postalCode": "97247 CEDEX",
    "latitude": "14.6089",
    "longitude": "-61.0733",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 975,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191219JB3438",
    "dateOfPurchase": "2019-12-19 11:03:38",
    "extendedPrice": 5438.450000000001,
    "customerKey": "JERRBALL8183",
    "firstName": "Jerrold",
    "lastName": "Ballard",
    "phoneNumber": "+91-382-878-8183",
    "email": "jballard382@Vodafone.com",
    "streetAddressOfBuilding": "8120 Red Woods Way",
    "city": "Kona",
    "stateProvince": "Kalakada",
    "locality": "Chittoor",
    "country": "IN",
    "postalCode": "517236",
    "latitude": "13.827",
    "longitude": "78.7893",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 604,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 734,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 117,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180208CV3276",
    "dateOfPurchase": "2018-02-08 11:03:38",
    "extendedPrice": 25070.359999999997,
    "customerKey": "CLAYVILL2992",
    "firstName": "Clayton",
    "lastName": "Villegas",
    "phoneNumber": "+352-389-129-2992",
    "email": "cvillega389@Jio.com",
    "streetAddressOfBuilding": "3630 Short Tree Boulevard",
    "city": "Grevenknapp",
    "stateProvince": "ME",
    "locality": "Boevange-sur-Attert",
    "country": "LU",
    "postalCode": "L-7433",
    "latitude": "49.7631",
    "longitude": "6.0321",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 997,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 402,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 345,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 235,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161214DS5077",
    "dateOfPurchase": "2016-12-14 11:03:38",
    "extendedPrice": 23185.98,
    "customerKey": "DIONSHER9973",
    "firstName": "Dion",
    "lastName": "Sherman",
    "phoneNumber": "+44-354-093-9973",
    "email": "dsherman354@Safaricom.com",
    "streetAddressOfBuilding": "2563 Red Mound Avenue",
    "city": "Braaid",
    "stateProvince": "",
    "locality": "Isle of Man",
    "country": "GB",
    "postalCode": "IM4",
    "latitude": "54.2195",
    "longitude": "-4.7986",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 20,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 356,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 366,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 420,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190913PS3884",
    "dateOfPurchase": "2019-09-13 11:03:38",
    "extendedPrice": 10317.16,
    "customerKey": "PIASMAL5203",
    "firstName": "Pia",
    "lastName": "Small",
    "phoneNumber": "+380-351-544-5203",
    "email": "psmall351@APICnet.com",
    "streetAddressOfBuilding": "2518 Short Gully Drive",
    "city": "\u0417\u0430\u043f\u043b\u0430\u0432\u043a\u0430",
    "stateProvince": "Mahdalynivskyi",
    "locality": "Mahdalynivskyi",
    "country": "UA",
    "postalCode": "51113",
    "latitude": "49.0872",
    "longitude": "34.872",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 332,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 464,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 973,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 965,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180822NS0263",
    "dateOfPurchase": "2018-08-22 11:03:38",
    "extendedPrice": 5243.230000000001,
    "customerKey": "NELSSCHM5727",
    "firstName": "Nelson",
    "lastName": "Schmitt",
    "phoneNumber": "+1-314-794-5727",
    "email": "nschmitt314@TT.com",
    "streetAddressOfBuilding": "448 Green Canyon Ride",
    "city": "Washington",
    "stateProvince": "DC",
    "locality": "District of Columbia",
    "country": "US",
    "postalCode": "20081",
    "latitude": "38.8933",
    "longitude": "-77.0146",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 100,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 365,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 712,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 602,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 228,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170117NR5196",
    "dateOfPurchase": "2017-01-17 11:03:38",
    "extendedPrice": 5369.02,
    "customerKey": "NEALRUSS3089",
    "firstName": "Neal",
    "lastName": "Russo",
    "phoneNumber": "+385-395-758-3089",
    "email": "nrusso395@Orange.com",
    "streetAddressOfBuilding": "1305 Green Mound Road",
    "city": "Rezova\u010dke Kr\u010devine",
    "stateProvince": "Virovitica",
    "locality": "Virovitica",
    "country": "HR",
    "postalCode": "33000",
    "latitude": "45.7833",
    "longitude": "17.4167",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 217,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 64,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 834,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 533,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190501SD2224",
    "dateOfPurchase": "2019-05-01 11:03:38",
    "extendedPrice": 1914.55,
    "customerKey": "STEVDYER6160",
    "firstName": "Steve",
    "lastName": "Dyer",
    "phoneNumber": "+1-282-201-6160",
    "email": "sdyer282@Orstom.com",
    "streetAddressOfBuilding": "1960 Green Bridge Avenue",
    "city": "Luzerne",
    "stateProvince": "PA",
    "locality": "Luzerne",
    "country": "US",
    "postalCode": "18709",
    "latitude": "41.2843",
    "longitude": "-75.8935",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 295,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160805JR3182",
    "dateOfPurchase": "2016-08-05 11:03:38",
    "extendedPrice": 16654.74,
    "customerKey": "JIMMRYAN4714",
    "firstName": "Jimmie",
    "lastName": "Ryan",
    "phoneNumber": "+373-305-653-4714",
    "email": "jryan305@UI.com",
    "streetAddressOfBuilding": "8742 Long Gulch Circle",
    "city": "Moara De Piatra",
    "stateProvince": "Drochia",
    "locality": "Drochia",
    "country": "MD",
    "postalCode": "MD-5222",
    "latitude": "47.895",
    "longitude": "28.0069",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 732,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 678,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 852,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 264,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160708SC1350",
    "dateOfPurchase": "2016-07-08 11:03:38",
    "extendedPrice": 4420.5,
    "customerKey": "SHERCARE9228",
    "firstName": "Sherlyn",
    "lastName": "Carey",
    "phoneNumber": "+44-176-195-9228",
    "email": "scarey176@Relcom.com",
    "streetAddressOfBuilding": "3874 Long Gulch Ride",
    "city": "Bassett's Cross",
    "stateProvince": "England",
    "locality": "Devon",
    "country": "GB",
    "postalCode": "EX20",
    "latitude": "50.7569",
    "longitude": "-4.0388",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 249,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 462,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 699,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191025ES3077",
    "dateOfPurchase": "2019-10-25 11:03:38",
    "extendedPrice": 50212.340000000004,
    "customerKey": "ELVASALA6803",
    "firstName": "Elva",
    "lastName": "Salazar",
    "phoneNumber": "+44-120-007-6803",
    "email": "esalazar120@Etisalat.com",
    "streetAddressOfBuilding": "6426 Blue Ditch Way",
    "city": "Silvercraigs",
    "stateProvince": "Scotland",
    "locality": "Argyll and Bute",
    "country": "GB",
    "postalCode": "PA31",
    "latitude": "56.148",
    "longitude": "-5.4391",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 379,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 599,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 938,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161121RM4880",
    "dateOfPurchase": "2016-11-21 11:03:38",
    "extendedPrice": 14610.18,
    "customerKey": "REANMCCA0519",
    "firstName": "Reanna",
    "lastName": "Mccarthy",
    "phoneNumber": "+44-118-652-0519",
    "email": "rmccarth118@Telecom.com",
    "streetAddressOfBuilding": "304 Blue Mountain Avenue",
    "city": "Newby",
    "stateProvince": "England",
    "locality": "Cumbria",
    "country": "GB",
    "postalCode": "CA10",
    "latitude": "54.5843",
    "longitude": "-2.6369",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 17,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 339,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 822,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 289,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 216,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 819,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161105AB1990",
    "dateOfPurchase": "2016-11-05 11:03:38",
    "extendedPrice": 9665.01,
    "customerKey": "ALLEBURK4071",
    "firstName": "Allena",
    "lastName": "Burke",
    "phoneNumber": "+61-256-880-4071",
    "email": "aburke256@TelecomItalia.com",
    "streetAddressOfBuilding": "1261 Winding Ditch Street",
    "city": "Pullenvale",
    "stateProvince": "QLD",
    "locality": "NORTHGATE CENT",
    "country": "AU",
    "postalCode": "4069",
    "latitude": "-27.5228",
    "longitude": "152.8865",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 226,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 756,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 977,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 774,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190626RK6773",
    "dateOfPurchase": "2019-06-26 11:03:38",
    "extendedPrice": 20947.65,
    "customerKey": "RICAKANE0052",
    "firstName": "Ricardo",
    "lastName": "Kane",
    "phoneNumber": "+61-210-310-0052",
    "email": "rkane210@Optus.com",
    "streetAddressOfBuilding": "7022 Big Tree Road",
    "city": "Delungra",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2403",
    "latitude": "-29.654",
    "longitude": "150.83",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 838,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 898,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 58,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 216,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 778,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 809,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180320LA4356",
    "dateOfPurchase": "2018-03-20 11:03:38",
    "extendedPrice": 2025.94,
    "customerKey": "LEANARRO9219",
    "firstName": "Leandro",
    "lastName": "Arroyo",
    "phoneNumber": "+61-280-489-9219",
    "email": "larroyo280@Telkom.com",
    "streetAddressOfBuilding": "4652 Short Gully Way",
    "city": "Curdie Vale",
    "stateProvince": "VIC",
    "locality": "VIC FAR COUNTRY",
    "country": "AU",
    "postalCode": "3268",
    "latitude": "-38.5167",
    "longitude": "142.8333",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 406,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170521DM8959",
    "dateOfPurchase": "2017-05-21 11:03:38",
    "extendedPrice": 7022.400000000001,
    "customerKey": "DOYLMCCA8262",
    "firstName": "Doyle",
    "lastName": "Mccarthy",
    "phoneNumber": "+502-139-210-8262",
    "email": "dmccarth139@NII.com",
    "streetAddressOfBuilding": "9065 Long Bough Boulevard",
    "city": "SAN ANTONIO LA PAZ",
    "stateProvince": "DEPTO DE EL PROGRESO",
    "locality": "DEPTO DE EL PROGRESO",
    "country": "GT",
    "postalCode": "02008",
    "latitude": "14.7497",
    "longitude": "-90.2867",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 621,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 739,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190806BE9278",
    "dateOfPurchase": "2019-08-06 11:03:38",
    "extendedPrice": 9406.670000000002,
    "customerKey": "BLONELLI4330",
    "firstName": "Blondell",
    "lastName": "Ellis",
    "phoneNumber": "+7-211-296-4330",
    "email": "bellis211@Telkom.com",
    "streetAddressOfBuilding": "2112 Long Ditch Drive",
    "city": "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u041e\u043a\u0442\u044f\u0431\u0440\u044c",
    "stateProvince": "\u041f\u0410\u041b\u041b\u0410\u0421\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "locality": "\u041f\u0410\u041b\u041b\u0410\u0421\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "country": "RU",
    "postalCode": "404236",
    "latitude": "52.3065",
    "longitude": "44.0463",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 967,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 372,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 626,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 788,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161205BL1147",
    "dateOfPurchase": "2016-12-05 11:03:38",
    "extendedPrice": 2127.6600000000003,
    "customerKey": "BIANLIND8466",
    "firstName": "Bianca",
    "lastName": "Lindsey",
    "phoneNumber": "+44-114-825-8466",
    "email": "blindsey114@Belgacom.com",
    "streetAddressOfBuilding": "7166 Long Bough Street",
    "city": "Wharton",
    "stateProvince": "England",
    "locality": "Cheshire",
    "country": "GB",
    "postalCode": "CW7",
    "latitude": "53.195",
    "longitude": "-2.5048",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 6,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 528,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190208WM3229",
    "dateOfPurchase": "2019-02-08 11:03:38",
    "extendedPrice": 11970.33,
    "customerKey": "WESMADD5981",
    "firstName": "Wes",
    "lastName": "Madden",
    "phoneNumber": "+61-182-557-5981",
    "email": "wmadden182@APICnet.com",
    "streetAddressOfBuilding": "5398 Green Stream Ride",
    "city": "Ucarty West",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6460",
    "latitude": "-31.215",
    "longitude": "116.7035",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 988,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 611,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 446,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 626,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 96,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190409HM4116",
    "dateOfPurchase": "2019-04-09 11:03:38",
    "extendedPrice": 25780.46,
    "customerKey": "HALMONT5411",
    "firstName": "Hal",
    "lastName": "Montoya",
    "phoneNumber": "+91-308-502-5411",
    "email": "hmontoya308@GlasNET.com",
    "streetAddressOfBuilding": "3080 Green Bough Circle",
    "city": "P.R Hill",
    "stateProvince": "kohima",
    "locality": "Kohima",
    "country": "IN",
    "postalCode": "797120",
    "latitude": "25.869",
    "longitude": "94.3125",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 978,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 243,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 906,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 827,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180219DH1637",
    "dateOfPurchase": "2018-02-19 11:03:38",
    "extendedPrice": 18052.800000000003,
    "customerKey": "DEBBHERM6344",
    "firstName": "Debbra",
    "lastName": "Herman",
    "phoneNumber": "+44-344-994-6344",
    "email": "dherman344@Zain.com",
    "streetAddressOfBuilding": "6896 Long Tree Avenue",
    "city": "Moreton",
    "stateProvince": "England",
    "locality": "Dorset",
    "country": "GB",
    "postalCode": "DT2",
    "latitude": "50.7",
    "longitude": "-2.2833",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 55,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 963,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 584,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 967,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 741,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181215HV4626",
    "dateOfPurchase": "2018-12-15 11:03:38",
    "extendedPrice": 7959.810000000001,
    "customerKey": "HALLVANG1075",
    "firstName": "Hallie",
    "lastName": "Vang",
    "phoneNumber": "+1-156-334-1075",
    "email": "hvang156@Jio.com",
    "streetAddressOfBuilding": "1390 Little River Circle",
    "city": "Cleveland",
    "stateProvince": "OH",
    "locality": "Cuyahoga",
    "country": "US",
    "postalCode": "44102",
    "latitude": "41.4735",
    "longitude": "-81.7398",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 319,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 307,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 335,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 917,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 147,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 235,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190403EC9282",
    "dateOfPurchase": "2019-04-03 11:03:38",
    "extendedPrice": 1129.55,
    "customerKey": "EARNCAMP9455",
    "firstName": "Earnest",
    "lastName": "Campos",
    "phoneNumber": "+691-261-056-9455",
    "email": "ecampos261@KDDI.com",
    "streetAddressOfBuilding": "2354 Little Mountain Boulevard",
    "city": "Chuuk",
    "stateProvince": "State of Chuuk",
    "locality": "State of Chuuk",
    "country": "FM",
    "postalCode": "96942",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 802,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 193,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 174,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170624OS0430",
    "dateOfPurchase": "2017-06-24 11:03:38",
    "extendedPrice": 11741.92,
    "customerKey": "OCTASALI1537",
    "firstName": "Octavio",
    "lastName": "Salinas",
    "phoneNumber": "+1-223-165-1537",
    "email": "osalinas223@BCE.com",
    "streetAddressOfBuilding": "4174 Short Tree Boulevard",
    "city": "Cherry Hill",
    "stateProvince": "NJ",
    "locality": "Camden",
    "country": "US",
    "postalCode": "08003",
    "latitude": "39.8805",
    "longitude": "-74.9706",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 777,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 304,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 889,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 682,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 756,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170818MD1102",
    "dateOfPurchase": "2017-08-18 11:03:38",
    "extendedPrice": 7797.29,
    "customerKey": "MAEDALT3438",
    "firstName": "Mae",
    "lastName": "Dalton",
    "phoneNumber": "+27-205-045-3438",
    "email": "mdalton205@TelecomItalia.com",
    "streetAddressOfBuilding": "3762 Big Creek Way",
    "city": "Gordon'S Bay",
    "stateProvince": null,
    "locality": null,
    "country": "ZA",
    "postalCode": "7140",
    "latitude": "-34.1667",
    "longitude": "18.8667",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 229,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 808,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 7,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 93,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 489,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 617,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190527KF2294",
    "dateOfPurchase": "2019-05-27 11:03:38",
    "extendedPrice": 7775.4800000000005,
    "customerKey": "KARLFERG6213",
    "firstName": "Karl",
    "lastName": "Ferguson",
    "phoneNumber": "+48-225-442-6213",
    "email": "kferguso225@KTC.com",
    "streetAddressOfBuilding": "2791 Blue Mound Drive",
    "city": "Warszawa",
    "stateProvince": "Warsaw",
    "locality": "Warszawa",
    "country": "PL",
    "postalCode": "00-182",
    "latitude": "52.2525",
    "longitude": "20.9919",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 878,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 674,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161016ZN3229",
    "dateOfPurchase": "2016-10-16 11:03:38",
    "extendedPrice": 7177.02,
    "customerKey": "ZOILNOVA2638",
    "firstName": "Zoila",
    "lastName": "Novak",
    "phoneNumber": "+64-275-834-2638",
    "email": "znovak275@cerist.com",
    "streetAddressOfBuilding": "755 Little Bridge Avenue",
    "city": "Epsom",
    "stateProvince": "E7",
    "locality": "Auckland",
    "country": "NZ",
    "postalCode": "1349",
    "latitude": "-36.8874",
    "longitude": "174.7706",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 587,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 105,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 205,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 302,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 586,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 156,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170909DS9625",
    "dateOfPurchase": "2017-09-09 11:03:38",
    "extendedPrice": 174.87,
    "customerKey": "DIONSHER9973",
    "firstName": "Dion",
    "lastName": "Sherman",
    "phoneNumber": "+44-354-093-9973",
    "email": "dsherman354@Safaricom.com",
    "streetAddressOfBuilding": "2563 Red Mound Avenue",
    "city": "Braaid",
    "stateProvince": "",
    "locality": "Isle of Man",
    "country": "GB",
    "postalCode": "IM4",
    "latitude": "54.2195",
    "longitude": "-4.7986",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 261,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190309SF3735",
    "dateOfPurchase": "2019-03-09 11:03:38",
    "extendedPrice": 17173.820000000003,
    "customerKey": "SYBIFLOY7629",
    "firstName": "Sybil",
    "lastName": "Floyd",
    "phoneNumber": "+91-128-178-7629",
    "email": "sfloyd128@Vivendi.com",
    "streetAddressOfBuilding": "8213 Big Canyon Street",
    "city": "Yusufpur Bazar",
    "stateProvince": "M.bad",
    "locality": "Ghazipur",
    "country": "IN",
    "postalCode": "233227",
    "latitude": "25.5792",
    "longitude": "83.5585",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 582,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 685,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 57,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 734,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 710,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170609AK5658",
    "dateOfPurchase": "2017-06-09 11:03:38",
    "extendedPrice": 13181.380000000001,
    "customerKey": "AGUSKLEI8678",
    "firstName": "Agustin",
    "lastName": "Klein",
    "phoneNumber": "+94-283-744-8678",
    "email": "aklein283@Rogers.com",
    "streetAddressOfBuilding": "8688 Red River Street",
    "city": "Welipenna",
    "stateProvince": "Kalutara",
    "locality": "Kalutara",
    "country": "LK",
    "postalCode": "12108",
    "latitude": "6.465",
    "longitude": "80.1043",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 187,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 716,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 809,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170114JS6487",
    "dateOfPurchase": "2017-01-14 11:03:38",
    "extendedPrice": 8912.4,
    "customerKey": "JAZMSMIT2096",
    "firstName": "Jazmin",
    "lastName": "Smith",
    "phoneNumber": "+1-267-801-2096",
    "email": "jsmith267@Softbank.com",
    "streetAddressOfBuilding": "7103 Short Canyon Drive",
    "city": "Shelby",
    "stateProvince": "AL",
    "locality": "Shelby",
    "country": "US",
    "postalCode": "35143",
    "latitude": "33.0785",
    "longitude": "-86.5536",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 796,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 307,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 867,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190725AC8594",
    "dateOfPurchase": "2019-07-25 11:03:38",
    "extendedPrice": 3786.3200000000006,
    "customerKey": "ALEACRAI8082",
    "firstName": "Alease",
    "lastName": "Craig",
    "phoneNumber": "+91-362-122-8082",
    "email": "acraig362@Telus.com",
    "streetAddressOfBuilding": "5980 Big Gulch Street",
    "city": "Cheldiganipalle",
    "stateProvince": "Palamaner",
    "locality": "Chittoor",
    "country": "IN",
    "postalCode": "517424",
    "latitude": "13.9516",
    "longitude": "78.0767",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 9,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 738,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 95,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 256,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 220,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 340,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180501MS4548",
    "dateOfPurchase": "2018-05-01 11:03:38",
    "extendedPrice": 10967.16,
    "customerKey": "MARHSAND9128",
    "firstName": "Marhta",
    "lastName": "Sanders",
    "phoneNumber": "+91-200-820-9128",
    "email": "msanders200@OpenWorld.com",
    "streetAddressOfBuilding": "417 Long Hill Boulevard",
    "city": "Mansoori",
    "stateProvince": "Bikaner",
    "locality": "Bikaner",
    "country": "IN",
    "postalCode": "334802",
    "latitude": "27.888",
    "longitude": "74.7458",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 941,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 408,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 330,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 923,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 890,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 792,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190205RP6914",
    "dateOfPurchase": "2019-02-05 11:03:38",
    "extendedPrice": 36251.200000000004,
    "customerKey": "RORYPHAN6135",
    "firstName": "Rory",
    "lastName": "Phan",
    "phoneNumber": "+1-336-157-6135",
    "email": "rphan336@Relcom.com",
    "streetAddressOfBuilding": "6689 Red River Boulevard",
    "city": "Gatineau Northwest",
    "stateProvince": "QC",
    "locality": "Gatineau",
    "country": "CA",
    "postalCode": "J8V",
    "latitude": "45.5711",
    "longitude": "-75.7615",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 610,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 327,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 180,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 63,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190807MW3395",
    "dateOfPurchase": "2019-08-07 11:03:38",
    "extendedPrice": 7348.530000000001,
    "customerKey": "MICKWASH4916",
    "firstName": "Mickey",
    "lastName": "Washington",
    "phoneNumber": "+1-390-622-4916",
    "email": "mwashing390@APICnet.com",
    "streetAddressOfBuilding": "6068 Green Ditch Street",
    "city": "Windsor",
    "stateProvince": "NL",
    "locality": "Newfoundland and Labrador",
    "country": "CA",
    "postalCode": "A2B",
    "latitude": "48.9499",
    "longitude": "-55.6649",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 147,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171017DD4943",
    "dateOfPurchase": "2017-10-17 11:03:38",
    "extendedPrice": 60279.97,
    "customerKey": "DEVIDELG7242",
    "firstName": "Devin",
    "lastName": "Delgado",
    "phoneNumber": "+61-332-156-7242",
    "email": "ddelgado332@MTN.com",
    "streetAddressOfBuilding": "4186 Red Mountain Street",
    "city": "Coomunga",
    "stateProvince": "SA",
    "locality": "South Australia",
    "country": "AU",
    "postalCode": "5607",
    "latitude": "-34.6437",
    "longitude": "135.7074",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 400,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 651,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 757,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 371,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 42,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 807,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180424EH2155",
    "dateOfPurchase": "2018-04-24 11:03:38",
    "extendedPrice": 24433.059999999998,
    "customerKey": "ENIDHOLL0618",
    "firstName": "Enid",
    "lastName": "Holland",
    "phoneNumber": "+44-252-956-0618",
    "email": "eholland252@OpenWorld.com",
    "streetAddressOfBuilding": "3465 Short Gulch Street",
    "city": "Gatcombe",
    "stateProvince": "England",
    "locality": "Isle of Wight",
    "country": "GB",
    "postalCode": "PO30",
    "latitude": "50.6916",
    "longitude": "-1.3132",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 848,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 872,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 185,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 353,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 816,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191124HC9975",
    "dateOfPurchase": "2019-11-24 11:03:38",
    "extendedPrice": 36540.08,
    "customerKey": "HERBCANO1319",
    "firstName": "Herbert",
    "lastName": "Cano",
    "phoneNumber": "+55-363-060-1319",
    "email": "hcano363@Rogers.com",
    "streetAddressOfBuilding": "2075 Red River Boulevard",
    "city": "Duque de Caxias",
    "stateProvince": "Rio de Janeiro ",
    "locality": "Rio de Janeiro ",
    "country": "BR",
    "postalCode": "25000-000",
    "latitude": "-22.6568",
    "longitude": "-43.2929",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 536,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 656,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180924EB9355",
    "dateOfPurchase": "2018-09-24 11:03:38",
    "extendedPrice": 5018.74,
    "customerKey": "ETHABUCH8761",
    "firstName": "Etha",
    "lastName": "Buchanan",
    "phoneNumber": "+52-273-719-8761",
    "email": "ebuchana273@Turkcell.com",
    "streetAddressOfBuilding": "6598 Long Gulch Boulevard",
    "city": "La Lagunita",
    "stateProvince": "CHH",
    "locality": "Camargo",
    "country": "MX",
    "postalCode": "33730",
    "latitude": "27.8494",
    "longitude": "-104.6806",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 269,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 101,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 847,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 224,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 195,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170701GI0948",
    "dateOfPurchase": "2017-07-01 11:03:38",
    "extendedPrice": 345.45,
    "customerKey": "GUYINGR9819",
    "firstName": "Guy",
    "lastName": "Ingram",
    "phoneNumber": "+373-399-514-9819",
    "email": "gingram399@Belgacom.com",
    "streetAddressOfBuilding": "2466 Short Ditch Boulevard",
    "city": "Malaiesti",
    "stateProvince": "Orhei",
    "locality": "Orhei",
    "country": "MD",
    "postalCode": "MD-3536",
    "latitude": "47.4631",
    "longitude": "28.6636",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 705,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190913JB9681",
    "dateOfPurchase": "2019-09-13 11:03:38",
    "extendedPrice": 10596.59,
    "customerKey": "JIMMBAIL3501",
    "firstName": "Jimmy",
    "lastName": "Bailey",
    "phoneNumber": "+44-278-504-3501",
    "email": "jbailey278@CUBENet.com",
    "streetAddressOfBuilding": "2583 Red Creek Street",
    "city": "Sutton",
    "stateProvince": "England",
    "locality": "Cambridgeshire",
    "country": "GB",
    "postalCode": "CB6",
    "latitude": "52.3901",
    "longitude": "0.1176",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 767,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 882,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 204,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 544,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 564,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 256,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161225MP3953",
    "dateOfPurchase": "2016-12-25 11:03:38",
    "extendedPrice": 1029.55,
    "customerKey": "MATTPOWE7204",
    "firstName": "Matt",
    "lastName": "Powers",
    "phoneNumber": "+54-329-225-7204",
    "email": "mpowers329@Millicom.com",
    "streetAddressOfBuilding": "5033 Little Bridge Ride",
    "city": "CERRO BLANCO (JUAN JORBA, DPTO. GRAL. PEDERNERA)",
    "stateProvince": "D",
    "locality": "San Luis",
    "country": "AR",
    "postalCode": "5731",
    "latitude": "-33.8625",
    "longitude": "-65.4042",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 295,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180120LW8799",
    "dateOfPurchase": "2018-01-20 11:03:38",
    "extendedPrice": 2118.69,
    "customerKey": "LESLWOOD4437",
    "firstName": "Leslee",
    "lastName": "Woodard",
    "phoneNumber": "+299-191-042-4437",
    "email": "lwoodard191@Swisscom.com",
    "streetAddressOfBuilding": "7031 Green Bend Road",
    "city": "Qaqortoq",
    "stateProvince": null,
    "locality": null,
    "country": "GL",
    "postalCode": "3920",
    "latitude": "60.7167",
    "longitude": "-46.0333",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 531,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191108KM1911",
    "dateOfPurchase": "2019-11-08 11:03:38",
    "extendedPrice": 11058.29,
    "customerKey": "KEVEMCMA3829",
    "firstName": "Keven",
    "lastName": "Mcmahon",
    "phoneNumber": "+1-270-801-3829",
    "email": "kmcmahon270@Verizon.com",
    "streetAddressOfBuilding": "8787 Green Ridge Ride",
    "city": "Abitibi-T\u00e9miscamingue-Ouest (Guigues)",
    "stateProvince": "QC",
    "locality": "Abitibi-T\u00e9miscamingue",
    "country": "CA",
    "postalCode": "J0Z",
    "latitude": "47.8626",
    "longitude": "-78.824",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 900,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 195,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 34,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 902,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171202EP7451",
    "dateOfPurchase": "2017-12-02 11:03:38",
    "extendedPrice": 9651.57,
    "customerKey": "EDWAPETE3681",
    "firstName": "Edwardo",
    "lastName": "Peterson",
    "phoneNumber": "+34-177-399-3681",
    "email": "epeterso177@APICnet.com",
    "streetAddressOfBuilding": "7535 Little Hill Street",
    "city": "Agrade, A (San Vicente)",
    "stateProvince": "GA",
    "locality": "Lugo",
    "country": "ES",
    "postalCode": "27513",
    "latitude": "42.5991",
    "longitude": "-7.8716",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 743,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180928RB9066",
    "dateOfPurchase": "2018-09-28 11:03:38",
    "extendedPrice": 11100.18,
    "customerKey": "REUBBURT4745",
    "firstName": "Reuben",
    "lastName": "Burton",
    "phoneNumber": "+1-188-828-4745",
    "email": "rburton188@Telefonica.com",
    "streetAddressOfBuilding": "8295 Long Mountain Circle",
    "city": "Gully",
    "stateProvince": "MN",
    "locality": "Polk",
    "country": "US",
    "postalCode": "56646",
    "latitude": "47.7697",
    "longitude": "-95.641",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 895,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 723,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 471,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 743,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190602MD4205",
    "dateOfPurchase": "2019-06-02 11:03:38",
    "extendedPrice": 20908.52,
    "customerKey": "MARLDORS7479",
    "firstName": "Marlo",
    "lastName": "Dorsey",
    "phoneNumber": "+44-102-260-7479",
    "email": "mdorsey102@KDDI.com",
    "streetAddressOfBuilding": "6787 Red Bridge Way",
    "city": "Shortacombe",
    "stateProvince": "England",
    "locality": "Devon",
    "country": "GB",
    "postalCode": "EX20",
    "latitude": "50.7569",
    "longitude": "-4.0388",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 173,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 289,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 248,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 388,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180614AY8277",
    "dateOfPurchase": "2018-06-14 11:03:38",
    "extendedPrice": 14711.789999999999,
    "customerKey": "ARDIYU0370",
    "firstName": "Ardith",
    "lastName": "Yu",
    "phoneNumber": "+61-264-856-0370",
    "email": "ayu264@Etisalat.com",
    "streetAddressOfBuilding": "2888 Short Gulch Road",
    "city": "Darwin",
    "stateProvince": "NT",
    "locality": "DARWIN",
    "country": "AU",
    "postalCode": "0800",
    "latitude": "-12.4611",
    "longitude": "130.8418",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 363,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 971,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 716,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 632,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 250,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 69,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180302TH8677",
    "dateOfPurchase": "2018-03-02 11:03:38",
    "extendedPrice": 263.98,
    "customerKey": "TIJUHOGA5010",
    "firstName": "Tijuana",
    "lastName": "Hogan",
    "phoneNumber": "+44-119-817-5010",
    "email": "thogan119@Telenor.com",
    "streetAddressOfBuilding": "106 Short Bend Boulevard",
    "city": "Staffin",
    "stateProvince": "Scotland",
    "locality": "Highland",
    "country": "GB",
    "postalCode": "IV51",
    "latitude": "57.6241",
    "longitude": "-6.2066",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 394,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191219MR5169",
    "dateOfPurchase": "2019-12-19 11:03:38",
    "extendedPrice": 7467.5,
    "customerKey": "MARYROBB7450",
    "firstName": "Mary",
    "lastName": "Robbins",
    "phoneNumber": "+61-218-078-7450",
    "email": "mrobbins218@NordNet.com",
    "streetAddressOfBuilding": "9974 Green Stream Ride",
    "city": "Bellata",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2397",
    "latitude": "-29.9191",
    "longitude": "149.7889",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 108,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 187,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 588,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 895,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 432,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160812KM6523",
    "dateOfPurchase": "2016-08-12 11:03:38",
    "extendedPrice": 9754.82,
    "customerKey": "KEVEMCMA3829",
    "firstName": "Keven",
    "lastName": "Mcmahon",
    "phoneNumber": "+1-270-801-3829",
    "email": "kmcmahon270@Verizon.com",
    "streetAddressOfBuilding": "8787 Green Ridge Ride",
    "city": "Abitibi-T\u00e9miscamingue-Ouest (Guigues)",
    "stateProvince": "QC",
    "locality": "Abitibi-T\u00e9miscamingue",
    "country": "CA",
    "postalCode": "J0Z",
    "latitude": "47.8626",
    "longitude": "-78.824",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 887,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 542,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 300,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 339,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180408RI4143",
    "dateOfPurchase": "2018-04-08 11:03:38",
    "extendedPrice": 5926.67,
    "customerKey": "REGIIBAR8447",
    "firstName": "Regine",
    "lastName": "Ibarra",
    "phoneNumber": "+373-109-864-8447",
    "email": "ribarra109@Zain.com",
    "streetAddressOfBuilding": "6229 Blue Canyon Street",
    "city": "Bobletici",
    "stateProvince": "Singerei",
    "locality": "Singerei",
    "country": "MD",
    "postalCode": "MD-6219",
    "latitude": "47.4664",
    "longitude": "28.0544",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 477,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 311,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 993,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 52,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191210CV5574",
    "dateOfPurchase": "2019-12-10 11:03:38",
    "extendedPrice": 13625.619999999999,
    "customerKey": "CLAYVILL2992",
    "firstName": "Clayton",
    "lastName": "Villegas",
    "phoneNumber": "+352-389-129-2992",
    "email": "cvillega389@Jio.com",
    "streetAddressOfBuilding": "3630 Short Tree Boulevard",
    "city": "Grevenknapp",
    "stateProvince": "ME",
    "locality": "Boevange-sur-Attert",
    "country": "LU",
    "postalCode": "L-7433",
    "latitude": "49.7631",
    "longitude": "6.0321",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 44,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 276,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 627,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 248,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 843,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180219CI7905",
    "dateOfPurchase": "2018-02-19 11:03:38",
    "extendedPrice": 4096.610000000001,
    "customerKey": "CARRINGR1972",
    "firstName": "Carroll",
    "lastName": "Ingram",
    "phoneNumber": "+61-392-816-1972",
    "email": "cingram392@VimpelCom.com",
    "streetAddressOfBuilding": "9691 Blue Mountain Boulevard",
    "city": "Rocky River",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2358",
    "latitude": "-30.6167",
    "longitude": "151.5",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 373,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 246,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 900,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171127LA1186",
    "dateOfPurchase": "2017-11-27 11:03:38",
    "extendedPrice": 5746.67,
    "customerKey": "LANEASHL2832",
    "firstName": "Lane",
    "lastName": "Ashley",
    "phoneNumber": "+1-370-433-2832",
    "email": "lashley370@KTC.com",
    "streetAddressOfBuilding": "7930 Green Canyon Circle",
    "city": "Reeds Spring",
    "stateProvince": "MO",
    "locality": "Stone",
    "country": "US",
    "postalCode": "65737",
    "latitude": "36.6907",
    "longitude": "-93.3447",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 749,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 984,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 940,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191227RP5559",
    "dateOfPurchase": "2019-12-27 11:03:38",
    "extendedPrice": 0,
    "customerKey": "RODRPENA2840",
    "firstName": "Rodrick",
    "lastName": "Pena",
    "phoneNumber": "+91-350-012-2840",
    "email": "rpena350@APICnet.com",
    "streetAddressOfBuilding": "7801 Blue Ridge Boulevard",
    "city": "Mylakkara",
    "stateProvince": "Neyyattinkara",
    "locality": "Thiruvananthapuram",
    "country": "IN",
    "postalCode": "695572",
    "latitude": "8.5042",
    "longitude": "77.0803",
    "productsPurchased": []
});
db.purchases.insertOne(
{
    "transactionId": "20180731JM8118",
    "dateOfPurchase": "2018-07-31 11:03:38",
    "extendedPrice": 396.40999999999997,
    "customerKey": "JEANMOSE1935",
    "firstName": "Jean",
    "lastName": "Moses",
    "phoneNumber": "+1-138-478-1935",
    "email": "jmoses138@SKTelecom.com",
    "streetAddressOfBuilding": "9943 Big Ditch Drive",
    "city": "Guilford",
    "stateProvince": "NY",
    "locality": "Chenango",
    "country": "US",
    "postalCode": "13780",
    "latitude": "42.4269",
    "longitude": "-75.4823",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 809,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170416CV1114",
    "dateOfPurchase": "2017-04-16 11:03:38",
    "extendedPrice": 14646.98,
    "customerKey": "CLAYVILL2992",
    "firstName": "Clayton",
    "lastName": "Villegas",
    "phoneNumber": "+352-389-129-2992",
    "email": "cvillega389@Jio.com",
    "streetAddressOfBuilding": "3630 Short Tree Boulevard",
    "city": "Grevenknapp",
    "stateProvince": "ME",
    "locality": "Boevange-sur-Attert",
    "country": "LU",
    "postalCode": "L-7433",
    "latitude": "49.7631",
    "longitude": "6.0321",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 680,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 646,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 976,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190424EL0564",
    "dateOfPurchase": "2019-04-24 11:03:38",
    "extendedPrice": 31093.780000000002,
    "customerKey": "ERICLUGO6231",
    "firstName": "Eric",
    "lastName": "Lugo",
    "phoneNumber": "+44-168-734-6231",
    "email": "elugo168@Telenor.com",
    "streetAddressOfBuilding": "7767 Blue Woods Avenue",
    "city": "Pentre",
    "stateProvince": "England",
    "locality": "Shropshire",
    "country": "GB",
    "postalCode": "SY4",
    "latitude": "52.7981",
    "longitude": "-2.752",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 622,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190117RM9121",
    "dateOfPurchase": "2019-01-17 11:03:38",
    "extendedPrice": 19611.840000000004,
    "customerKey": "RUEBMORR9151",
    "firstName": "Rueben",
    "lastName": "Morrow",
    "phoneNumber": "+1-296-709-9151",
    "email": "rmorrow296@VimpelCom.com",
    "streetAddressOfBuilding": "6223 Short Woods Drive",
    "city": "Sorel Central",
    "stateProvince": "QC",
    "locality": "Sorel",
    "country": "CA",
    "postalCode": "J3P",
    "latitude": "46.0365",
    "longitude": "-73.0665",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 490,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 404,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 922,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160916AY0894",
    "dateOfPurchase": "2016-09-16 11:03:38",
    "extendedPrice": 1769.11,
    "customerKey": "ARDIYU0370",
    "firstName": "Ardith",
    "lastName": "Yu",
    "phoneNumber": "+61-264-856-0370",
    "email": "ayu264@Etisalat.com",
    "streetAddressOfBuilding": "2888 Short Gulch Road",
    "city": "Darwin",
    "stateProvince": "NT",
    "locality": "DARWIN",
    "country": "AU",
    "postalCode": "0800",
    "latitude": "-12.4611",
    "longitude": "130.8418",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 889,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190708TE1065",
    "dateOfPurchase": "2019-07-08 11:03:38",
    "extendedPrice": 52654.1,
    "customerKey": "TREAEVAN7486",
    "firstName": "Treasa",
    "lastName": "Evans",
    "phoneNumber": "+351-231-683-7486",
    "email": "tevans231@PLDT.com",
    "streetAddressOfBuilding": "8833 Winding Ditch Street",
    "city": "Corti\u00e7\u00f3is",
    "stateProvince": "Benfica Do Ribatejo",
    "locality": "Almeirim",
    "country": "PT",
    "postalCode": "2080-383",
    "latitude": "39.1374",
    "longitude": "-8.6773",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 63,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 168,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 820,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 908,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 714,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 953,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180420CC0902",
    "dateOfPurchase": "2018-04-20 11:03:38",
    "extendedPrice": 2294.25,
    "customerKey": "CORNCARS5218",
    "firstName": "Cornell",
    "lastName": "Carson",
    "phoneNumber": "+35818-207-620-5218",
    "email": "ccarson207@cerist.com",
    "streetAddressOfBuilding": "1471 Red Gulch Boulevard",
    "city": "V\u00e5rd\u00f6",
    "stateProvince": "V\u00e5rd\u00f6",
    "locality": "V\u00e5rd\u00f6",
    "country": "AX",
    "postalCode": "22550",
    "latitude": "60.2607",
    "longitude": "20.3725",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 575,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170404CC5707",
    "dateOfPurchase": "2017-04-04 11:03:38",
    "extendedPrice": 2048.05,
    "customerKey": "CORNCARS5218",
    "firstName": "Cornell",
    "lastName": "Carson",
    "phoneNumber": "+35818-207-620-5218",
    "email": "ccarson207@cerist.com",
    "streetAddressOfBuilding": "1471 Red Gulch Boulevard",
    "city": "V\u00e5rd\u00f6",
    "stateProvince": "V\u00e5rd\u00f6",
    "locality": "V\u00e5rd\u00f6",
    "country": "AX",
    "postalCode": "22550",
    "latitude": "60.2607",
    "longitude": "20.3725",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 95,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 925,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191213JR0761",
    "dateOfPurchase": "2019-12-13 11:03:38",
    "extendedPrice": 7568.36,
    "customerKey": "JIMMRYAN4714",
    "firstName": "Jimmie",
    "lastName": "Ryan",
    "phoneNumber": "+373-305-653-4714",
    "email": "jryan305@UI.com",
    "streetAddressOfBuilding": "8742 Long Gulch Circle",
    "city": "Moara De Piatra",
    "stateProvince": "Drochia",
    "locality": "Drochia",
    "country": "MD",
    "postalCode": "MD-5222",
    "latitude": "47.895",
    "longitude": "28.0069",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 584,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 580,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160803KP8214",
    "dateOfPurchase": "2016-08-03 11:03:38",
    "extendedPrice": 11577.59,
    "customerKey": "KARIPORT5901",
    "firstName": "Karie",
    "lastName": "Portillo",
    "phoneNumber": "+55-219-833-5901",
    "email": "kportill219@UUnet.com",
    "streetAddressOfBuilding": "2823 Long Ridge Drive",
    "city": "Rio Branco do Sul",
    "stateProvince": "Parana",
    "locality": "Parana",
    "country": "BR",
    "postalCode": "83540-000",
    "latitude": "-25.0403",
    "longitude": "-49.3559",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 285,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 365,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 36,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 455,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161211DD2998",
    "dateOfPurchase": "2016-12-11 11:03:38",
    "extendedPrice": 15442.49,
    "customerKey": "DEVIDELG7242",
    "firstName": "Devin",
    "lastName": "Delgado",
    "phoneNumber": "+61-332-156-7242",
    "email": "ddelgado332@MTN.com",
    "streetAddressOfBuilding": "4186 Red Mountain Street",
    "city": "Coomunga",
    "stateProvince": "SA",
    "locality": "South Australia",
    "country": "AU",
    "postalCode": "5607",
    "latitude": "-34.6437",
    "longitude": "135.7074",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 31,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 386,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 981,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 770,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 633,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191207PS9947",
    "dateOfPurchase": "2019-12-07 11:03:38",
    "extendedPrice": 2711.73,
    "customerKey": "PIASMAL5203",
    "firstName": "Pia",
    "lastName": "Small",
    "phoneNumber": "+380-351-544-5203",
    "email": "psmall351@APICnet.com",
    "streetAddressOfBuilding": "2518 Short Gully Drive",
    "city": "\u0417\u0430\u043f\u043b\u0430\u0432\u043a\u0430",
    "stateProvince": "Mahdalynivskyi",
    "locality": "Mahdalynivskyi",
    "country": "UA",
    "postalCode": "51113",
    "latitude": "49.0872",
    "longitude": "34.872",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 777,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171012AS6555",
    "dateOfPurchase": "2017-10-12 11:03:38",
    "extendedPrice": 1052.89,
    "customerKey": "ANGESNYD4769",
    "firstName": "Angele",
    "lastName": "Snyder",
    "phoneNumber": "+44-126-608-4769",
    "email": "asnyder126@DaxNet.com",
    "streetAddressOfBuilding": "6579 Little Woods Avenue",
    "city": "Tregurrian",
    "stateProvince": "England",
    "locality": "Cornwall",
    "country": "GB",
    "postalCode": "TR8",
    "latitude": "50.385",
    "longitude": "-5.0422",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 211,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171231DG0823",
    "dateOfPurchase": "2017-12-31 11:03:38",
    "extendedPrice": 4472.16,
    "customerKey": "DIRKGILM7935",
    "firstName": "Dirk",
    "lastName": "Gilmore",
    "phoneNumber": "+1671-251-275-7935",
    "email": "dgilmore251@NordNet.com",
    "streetAddressOfBuilding": "5192 Red Ditch Road",
    "city": "Tamuning",
    "stateProvince": "Guam",
    "locality": "Guam",
    "country": "GU",
    "postalCode": "96911",
    "latitude": "13.4443",
    "longitude": "144.7863",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 385,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 437,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 639,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 339,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190516MD5829",
    "dateOfPurchase": "2019-05-16 11:03:38",
    "extendedPrice": 3831.8,
    "customerKey": "MARLDORS7479",
    "firstName": "Marlo",
    "lastName": "Dorsey",
    "phoneNumber": "+44-102-260-7479",
    "email": "mdorsey102@KDDI.com",
    "streetAddressOfBuilding": "6787 Red Bridge Way",
    "city": "Shortacombe",
    "stateProvince": "England",
    "locality": "Devon",
    "country": "GB",
    "postalCode": "EX20",
    "latitude": "50.7569",
    "longitude": "-4.0388",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 130,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 403,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 287,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180331RM5516",
    "dateOfPurchase": "2018-03-31 11:03:38",
    "extendedPrice": 9159.98,
    "customerKey": "RUEBMORR9151",
    "firstName": "Rueben",
    "lastName": "Morrow",
    "phoneNumber": "+1-296-709-9151",
    "email": "rmorrow296@VimpelCom.com",
    "streetAddressOfBuilding": "6223 Short Woods Drive",
    "city": "Sorel Central",
    "stateProvince": "QC",
    "locality": "Sorel",
    "country": "CA",
    "postalCode": "J3P",
    "latitude": "46.0365",
    "longitude": "-73.0665",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 638,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 147,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 132,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 305,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190111AT8660",
    "dateOfPurchase": "2019-01-11 11:03:38",
    "extendedPrice": 26929.8,
    "customerKey": "ANTOTOWN6492",
    "firstName": "Antonio",
    "lastName": "Townsend",
    "phoneNumber": "+1-152-978-6492",
    "email": "atownsen152@GreenNet.com",
    "streetAddressOfBuilding": "6461 Big Bough Way",
    "city": "Wayside",
    "stateProvince": "MS",
    "locality": "Washington",
    "country": "US",
    "postalCode": "38780",
    "latitude": "33.269",
    "longitude": "-91.0337",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 618,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 143,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 409,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190308MG0817",
    "dateOfPurchase": "2019-03-08 11:03:38",
    "extendedPrice": 19570.03,
    "customerKey": "MELGILE5687",
    "firstName": "Mel",
    "lastName": "Giles",
    "phoneNumber": "+262-397-761-5687",
    "email": "mgiles397@PTCL.com",
    "streetAddressOfBuilding": "118 Short Hill Ride",
    "city": "Saint-Denis",
    "stateProvince": "RE",
    "locality": "R\u00e9union",
    "country": "RE",
    "postalCode": "97469 CEDEX",
    "latitude": "-20.8823",
    "longitude": "55.4504",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 415,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 828,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 336,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 820,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 170,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180727GH3442",
    "dateOfPurchase": "2018-07-27 11:03:38",
    "extendedPrice": 10106.22,
    "customerKey": "GAYLHORN6380",
    "firstName": "Gayla",
    "lastName": "Horne",
    "phoneNumber": "+1787-215-607-6380",
    "email": "ghorne215@Telus.com",
    "streetAddressOfBuilding": "1442 Winding Bridge Drive",
    "city": "San Juan",
    "stateProvince": "San Juan",
    "locality": "San Juan",
    "country": "PR",
    "postalCode": "00929",
    "latitude": "18.4663",
    "longitude": "-66.1057",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 778,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180822NM5806",
    "dateOfPurchase": "2018-08-22 11:03:38",
    "extendedPrice": 5289.31,
    "customerKey": "NAMMCCA2234",
    "firstName": "Nam",
    "lastName": "Mccarty",
    "phoneNumber": "+380-159-989-2234",
    "email": "nmccarty159@Vodafone.com",
    "streetAddressOfBuilding": "7562 Winding Stream Avenue",
    "city": "\u041e\u0437\u0435\u0440\u044f\u043d\u043a\u0430 (\u0417\u0430\u0440\u0443\u0434\u044f\u043d\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Zborivskyi",
    "locality": "Zborivskyi",
    "country": "UA",
    "postalCode": "47243",
    "latitude": "49.2504",
    "longitude": "25.1432",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 48,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 280,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 569,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 572,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191114YC6893",
    "dateOfPurchase": "2019-11-14 11:03:38",
    "extendedPrice": 2265.01,
    "customerKey": "YADICONW4872",
    "firstName": "Yadira",
    "lastName": "Conway",
    "phoneNumber": "+1-172-993-4872",
    "email": "yconway172@Turkcell.com",
    "streetAddressOfBuilding": "9306 Short Mound Street",
    "city": "Cartierville Southwest",
    "stateProvince": "QC",
    "locality": "Cartierville",
    "country": "CA",
    "postalCode": "H4K",
    "latitude": "45.5171",
    "longitude": "-73.7363",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 81,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 399,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 439,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161121CK6617",
    "dateOfPurchase": "2016-11-21 11:03:38",
    "extendedPrice": 41079.66000000001,
    "customerKey": "CAMEKRUE7476",
    "firstName": "Camellia",
    "lastName": "Krueger",
    "phoneNumber": "+91-206-263-7476",
    "email": "ckrueger206@Telefonica.com",
    "streetAddressOfBuilding": "4253 Short Creek Boulevard",
    "city": "Handanakere",
    "stateProvince": "C.n.hally",
    "locality": "Tumkur",
    "country": "IN",
    "postalCode": "572119",
    "latitude": "13.5034",
    "longitude": "76.4491",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 243,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 638,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 414,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 684,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 117,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 284,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181014CI7609",
    "dateOfPurchase": "2018-10-14 11:03:38",
    "extendedPrice": 3742.2400000000002,
    "customerKey": "CARRINGR1972",
    "firstName": "Carroll",
    "lastName": "Ingram",
    "phoneNumber": "+61-392-816-1972",
    "email": "cingram392@VimpelCom.com",
    "streetAddressOfBuilding": "9691 Blue Mountain Boulevard",
    "city": "Rocky River",
    "stateProvince": "NSW",
    "locality": "New South Wales",
    "country": "AU",
    "postalCode": "2358",
    "latitude": "-30.6167",
    "longitude": "151.5",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 311,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 11,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 325,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 439,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191010OP8251",
    "dateOfPurchase": "2019-10-10 11:03:38",
    "extendedPrice": 7112.97,
    "customerKey": "OLIVPALM2217",
    "firstName": "Oliver",
    "lastName": "Palmer",
    "phoneNumber": "+91-238-297-2217",
    "email": "opalmer238@Telkom.com",
    "streetAddressOfBuilding": "8692 Green Woods Circle",
    "city": "Karawal Nagar",
    "stateProvince": "NA",
    "locality": "East Delhi",
    "country": "IN",
    "postalCode": "110090",
    "latitude": "28.6114",
    "longitude": "77.2982",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 463,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 740,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180304DC7494",
    "dateOfPurchase": "2018-03-04 11:03:38",
    "extendedPrice": 4297.26,
    "customerKey": "DENNCAMP5794",
    "firstName": "Dennis",
    "lastName": "Campbell",
    "phoneNumber": "+61-316-812-5794",
    "email": "dcampbel316@SingTel.com",
    "streetAddressOfBuilding": "8638 Green Mountain Ride",
    "city": "Eugowra",
    "stateProvince": "NSW",
    "locality": "NEW CNTRY WEST",
    "country": "AU",
    "postalCode": "2806",
    "latitude": "-33.4273",
    "longitude": "148.3714",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 190,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 453,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 429,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 269,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170308KG2662",
    "dateOfPurchase": "2017-03-08 11:03:38",
    "extendedPrice": 3552.3100000000004,
    "customerKey": "KATHGORD5304",
    "firstName": "Katheryn",
    "lastName": "Gordon",
    "phoneNumber": "+420-157-142-5304",
    "email": "kgordon157@LookData.com",
    "streetAddressOfBuilding": "2743 Winding Canyon Way",
    "city": "Polom",
    "stateProvince": "Chrudim",
    "locality": "Chrudim",
    "country": "CZ",
    "postalCode": "539 01",
    "latitude": "49.7833",
    "longitude": "15.7667",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 610,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 291,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 256,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 46,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 343,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190629VS7213",
    "dateOfPurchase": "2019-06-29 11:03:38",
    "extendedPrice": 3249.1800000000003,
    "customerKey": "VANSELL2114",
    "firstName": "Van",
    "lastName": "Sellers",
    "phoneNumber": "+1-232-235-2114",
    "email": "vsellers232@Vodafone.com",
    "streetAddressOfBuilding": "9736 Blue Bend Drive",
    "city": "Elliot Lake",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "P5A",
    "latitude": "46.3834",
    "longitude": "-82.6332",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 77,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 605,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180309JJ1742",
    "dateOfPurchase": "2018-03-09 11:03:38",
    "extendedPrice": 1142.24,
    "customerKey": "JOEJIME4067",
    "firstName": "Joe",
    "lastName": "Jimenez",
    "phoneNumber": "+91-364-879-4067",
    "email": "jjimenez364@UUnet.com",
    "streetAddressOfBuilding": "6150 Big Ridge Avenue",
    "city": "Nihri",
    "stateProvince": "Sunder Nagar",
    "locality": "Mandi",
    "country": "IN",
    "postalCode": "175038",
    "latitude": "31.6142",
    "longitude": "77.0926",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 176,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180216RA8473",
    "dateOfPurchase": "2018-02-16 11:03:38",
    "extendedPrice": 19718.760000000002,
    "customerKey": "RODARIA1236",
    "firstName": "Rod",
    "lastName": "Arias",
    "phoneNumber": "+91-294-602-1236",
    "email": "rarias294@NII.com",
    "streetAddressOfBuilding": "9931 Red Gulch Street",
    "city": "Anaikudi",
    "stateProvince": "Thiruvaiyaru",
    "locality": "Thanjavur",
    "country": "IN",
    "postalCode": "613204",
    "latitude": "10.8841",
    "longitude": "79.1036",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 528,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 88,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 651,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 957,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190515RB9900",
    "dateOfPurchase": "2019-05-15 11:03:38",
    "extendedPrice": 8953.48,
    "customerKey": "REUBBURT4745",
    "firstName": "Reuben",
    "lastName": "Burton",
    "phoneNumber": "+1-188-828-4745",
    "email": "rburton188@Telefonica.com",
    "streetAddressOfBuilding": "8295 Long Mountain Circle",
    "city": "Gully",
    "stateProvince": "MN",
    "locality": "Polk",
    "country": "US",
    "postalCode": "56646",
    "latitude": "47.7697",
    "longitude": "-95.641",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 503,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 856,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 366,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 845,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 450,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 82,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170126WA7137",
    "dateOfPurchase": "2017-01-26 11:03:38",
    "extendedPrice": 13691.16,
    "customerKey": "WILLAREL3375",
    "firstName": "Will",
    "lastName": "Arellano",
    "phoneNumber": "+44-380-474-3375",
    "email": "warellan380@Telstra.com",
    "streetAddressOfBuilding": "8756 Green Mountain Way",
    "city": "Glororum",
    "stateProvince": "England",
    "locality": "Northumberland",
    "country": "GB",
    "postalCode": "NE69",
    "latitude": "55.6048",
    "longitude": "-1.7181",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 946,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 994,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 605,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 589,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160712DM6695",
    "dateOfPurchase": "2016-07-12 11:03:38",
    "extendedPrice": 9395.45,
    "customerKey": "DOYLMCCA8262",
    "firstName": "Doyle",
    "lastName": "Mccarthy",
    "phoneNumber": "+502-139-210-8262",
    "email": "dmccarth139@NII.com",
    "streetAddressOfBuilding": "9065 Long Bough Boulevard",
    "city": "SAN ANTONIO LA PAZ",
    "stateProvince": "DEPTO DE EL PROGRESO",
    "locality": "DEPTO DE EL PROGRESO",
    "country": "GT",
    "postalCode": "02008",
    "latitude": "14.7497",
    "longitude": "-90.2867",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 146,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 343,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 142,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 292,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 630,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 440,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190318HB0448",
    "dateOfPurchase": "2019-03-18 11:03:38",
    "extendedPrice": 2867.13,
    "customerKey": "HARRBREN5971",
    "firstName": "Harry",
    "lastName": "Brennan",
    "phoneNumber": "+91-230-520-5971",
    "email": "hbrennan230@Rogers.com",
    "streetAddressOfBuilding": "5237 Big Bough Road",
    "city": "Narkul",
    "stateProvince": "Naugarh",
    "locality": "Siddharthnagar",
    "country": "IN",
    "postalCode": "272202",
    "latitude": "27.1231",
    "longitude": "83.1086",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 287,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170915GH6038",
    "dateOfPurchase": "2017-09-15 11:03:38",
    "extendedPrice": 15190.170000000002,
    "customerKey": "GAYLHORN6380",
    "firstName": "Gayla",
    "lastName": "Horne",
    "phoneNumber": "+1787-215-607-6380",
    "email": "ghorne215@Telus.com",
    "streetAddressOfBuilding": "1442 Winding Bridge Drive",
    "city": "San Juan",
    "stateProvince": "San Juan",
    "locality": "San Juan",
    "country": "PR",
    "postalCode": "00929",
    "latitude": "18.4663",
    "longitude": "-66.1057",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 442,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 754,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 936,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 150,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 705,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170622SV5619",
    "dateOfPurchase": "2017-06-22 11:03:38",
    "extendedPrice": 21210.180000000004,
    "customerKey": "SETHVARG7301",
    "firstName": "Seth",
    "lastName": "Vargas",
    "phoneNumber": "+91-169-678-7301",
    "email": "svargas169@CCI.com",
    "streetAddressOfBuilding": "6256 Big Gully Avenue",
    "city": "Ghungchai",
    "stateProvince": "Pooranpur",
    "locality": "Pilibhit",
    "country": "IN",
    "postalCode": "262122",
    "latitude": "28.45",
    "longitude": "80.0833",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 619,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 471,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 828,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 255,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 337,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190524CC2416",
    "dateOfPurchase": "2019-05-24 11:03:38",
    "extendedPrice": 11309.390000000001,
    "customerKey": "CORECUEV8076",
    "firstName": "Corey",
    "lastName": "Cuevas",
    "phoneNumber": "+1-212-262-8076",
    "email": "ccuevas212@Orange.com",
    "streetAddressOfBuilding": "2323 Short River Drive",
    "city": "Ossineke",
    "stateProvince": "MI",
    "locality": "Alpena",
    "country": "US",
    "postalCode": "49766",
    "latitude": "44.9104",
    "longitude": "-83.4592",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 946,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 982,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 273,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161123FT0183",
    "dateOfPurchase": "2016-11-23 11:03:38",
    "extendedPrice": 2756.78,
    "customerKey": "FOSTTYLE7198",
    "firstName": "Foster",
    "lastName": "Tyler",
    "phoneNumber": "+7-265-073-7198",
    "email": "ftyler265@DaxNet.com",
    "streetAddressOfBuilding": "8490 Little Gully Circle",
    "city": "\u0421\u0442\u0435\u043f\u043d\u043e\u0439",
    "stateProvince": "\u041d\u0410\u0417\u0410\u0420\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "locality": "\u041d\u0410\u0417\u0410\u0420\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "country": "RU",
    "postalCode": "662217",
    "latitude": "54.5022",
    "longitude": "82.9386",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 922,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170706MD8272",
    "dateOfPurchase": "2017-07-06 11:03:38",
    "extendedPrice": 16331.19,
    "customerKey": "MAEDALT3438",
    "firstName": "Mae",
    "lastName": "Dalton",
    "phoneNumber": "+27-205-045-3438",
    "email": "mdalton205@TelecomItalia.com",
    "streetAddressOfBuilding": "3762 Big Creek Way",
    "city": "Gordon'S Bay",
    "stateProvince": null,
    "locality": null,
    "country": "ZA",
    "postalCode": "7140",
    "latitude": "-34.1667",
    "longitude": "18.8667",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 117,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 206,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 511,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 993,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 927,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 647,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191128RF5926",
    "dateOfPurchase": "2019-11-28 11:03:38",
    "extendedPrice": 19926.47,
    "customerKey": "RANDFINL0859",
    "firstName": "Randell",
    "lastName": "Finley",
    "phoneNumber": "+1-160-481-0859",
    "email": "rfinley160@Airtel.com",
    "streetAddressOfBuilding": "4373 Short Gully Street",
    "city": "Huntington",
    "stateProvince": "WV",
    "locality": "Cabell",
    "country": "US",
    "postalCode": "25723",
    "latitude": "38.4192",
    "longitude": "-82.4452",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 701,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 167,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 981,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 971,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 493,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180924DS3639",
    "dateOfPurchase": "2018-09-24 11:03:38",
    "extendedPrice": 10477,
    "customerKey": "DUDLSHOR0718",
    "firstName": "Dudley",
    "lastName": "Short",
    "phoneNumber": "+61-300-785-0718",
    "email": "dshort300@TelecomItalia.com",
    "streetAddressOfBuilding": "8027 Blue Hill Way",
    "city": "Elingamite North",
    "stateProvince": "VIC",
    "locality": "Victoria",
    "country": "AU",
    "postalCode": "3266",
    "latitude": "-38.35",
    "longitude": "143.0167",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 275,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 358,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 757,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 360,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161101DD3943",
    "dateOfPurchase": "2016-11-01 11:03:38",
    "extendedPrice": 22217.72,
    "customerKey": "DEVIDELG7242",
    "firstName": "Devin",
    "lastName": "Delgado",
    "phoneNumber": "+61-332-156-7242",
    "email": "ddelgado332@MTN.com",
    "streetAddressOfBuilding": "4186 Red Mountain Street",
    "city": "Coomunga",
    "stateProvince": "SA",
    "locality": "South Australia",
    "country": "AU",
    "postalCode": "5607",
    "latitude": "-34.6437",
    "longitude": "135.7074",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 995,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 233,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190902ED0804",
    "dateOfPurchase": "2019-09-02 11:03:38",
    "extendedPrice": 1588.02,
    "customerKey": "EMELDORS1769",
    "firstName": "Emelina",
    "lastName": "Dorsey",
    "phoneNumber": "+91-274-481-1769",
    "email": "edorsey274@NordNet.com",
    "streetAddressOfBuilding": "1256 Blue Creek Ride",
    "city": "Maheji",
    "stateProvince": "Pachora",
    "locality": "Jalgaon",
    "country": "IN",
    "postalCode": "425115",
    "latitude": "20.7935",
    "longitude": "75.4065",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 398,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181011MS1165",
    "dateOfPurchase": "2018-10-11 11:03:38",
    "extendedPrice": 6880.58,
    "customerKey": "MACKSALA5120",
    "firstName": "Mack",
    "lastName": "Salazar",
    "phoneNumber": "+61-198-464-5120",
    "email": "msalazar198@SingTel.com",
    "streetAddressOfBuilding": "3067 Red Mountain Boulevard",
    "city": "Normanton",
    "stateProvince": "QLD",
    "locality": "NORTH QLD",
    "country": "AU",
    "postalCode": "4890",
    "latitude": "-17.6718",
    "longitude": "141.0772",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 561,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 804,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 679,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 496,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161111RM0451",
    "dateOfPurchase": "2016-11-11 11:03:38",
    "extendedPrice": 3022.32,
    "customerKey": "RUEBMORR9151",
    "firstName": "Rueben",
    "lastName": "Morrow",
    "phoneNumber": "+1-296-709-9151",
    "email": "rmorrow296@VimpelCom.com",
    "streetAddressOfBuilding": "6223 Short Woods Drive",
    "city": "Sorel Central",
    "stateProvince": "QC",
    "locality": "Sorel",
    "country": "CA",
    "postalCode": "J3P",
    "latitude": "46.0365",
    "longitude": "-73.0665",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 115,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 80,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 641,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 511,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191129NR9717",
    "dateOfPurchase": "2019-11-29 11:03:38",
    "extendedPrice": 31379.74,
    "customerKey": "NEALRUSS3089",
    "firstName": "Neal",
    "lastName": "Russo",
    "phoneNumber": "+385-395-758-3089",
    "email": "nrusso395@Orange.com",
    "streetAddressOfBuilding": "1305 Green Mound Road",
    "city": "Rezova\u010dke Kr\u010devine",
    "stateProvince": "Virovitica",
    "locality": "Virovitica",
    "country": "HR",
    "postalCode": "33000",
    "latitude": "45.7833",
    "longitude": "17.4167",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 606,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 73,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 624,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 573,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180810JA5180",
    "dateOfPurchase": "2018-08-10 11:03:38",
    "extendedPrice": 16946.61,
    "customerKey": "JESSARMS3013",
    "firstName": "Jess",
    "lastName": "Armstrong",
    "phoneNumber": "+60-295-869-3013",
    "email": "jarmstro295@Jio.com",
    "streetAddressOfBuilding": "7499 Little Woods Boulevard",
    "city": "Ipoh",
    "stateProvince": "PRK",
    "locality": "Perak",
    "country": "MY",
    "postalCode": "30644",
    "latitude": "4.5987",
    "longitude": "101.0899",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 339,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160705EL6957",
    "dateOfPurchase": "2016-07-05 11:03:38",
    "extendedPrice": 6045.150000000001,
    "customerKey": "ERICLUGO6231",
    "firstName": "Eric",
    "lastName": "Lugo",
    "phoneNumber": "+44-168-734-6231",
    "email": "elugo168@Telenor.com",
    "streetAddressOfBuilding": "7767 Blue Woods Avenue",
    "city": "Pentre",
    "stateProvince": "England",
    "locality": "Shropshire",
    "country": "GB",
    "postalCode": "SY4",
    "latitude": "52.7981",
    "longitude": "-2.752",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 174,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 436,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 859,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 69,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 47,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191106LL9057",
    "dateOfPurchase": "2019-11-06 11:03:38",
    "extendedPrice": 523.84,
    "customerKey": "LEESLAMB4609",
    "firstName": "Leesa",
    "lastName": "Lambert",
    "phoneNumber": "+91-194-817-4609",
    "email": "llambert194@Vodafone.com",
    "streetAddressOfBuilding": "2100 Red Mound Street",
    "city": "Jassi",
    "stateProvince": "Baroh(T)",
    "locality": "Kangra",
    "country": "IN",
    "postalCode": "176054",
    "latitude": "32.0031",
    "longitude": "76.1646",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 22,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 24,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 390,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180106JB0693",
    "dateOfPurchase": "2018-01-06 11:03:38",
    "extendedPrice": 10266.980000000001,
    "customerKey": "JIMMBAIL3501",
    "firstName": "Jimmy",
    "lastName": "Bailey",
    "phoneNumber": "+44-278-504-3501",
    "email": "jbailey278@CUBENet.com",
    "streetAddressOfBuilding": "2583 Red Creek Street",
    "city": "Sutton",
    "stateProvince": "England",
    "locality": "Cambridgeshire",
    "country": "GB",
    "postalCode": "CB6",
    "latitude": "52.3901",
    "longitude": "0.1176",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 811,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 905,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 232,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 163,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 591,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171016WM8204",
    "dateOfPurchase": "2017-10-16 11:03:38",
    "extendedPrice": 14489.170000000002,
    "customerKey": "WMMORE0896",
    "firstName": "Wm",
    "lastName": "Moreno",
    "phoneNumber": "+63-103-266-0896",
    "email": "wmoreno103@OpenWorld.com",
    "streetAddressOfBuilding": "2714 Winding River Boulevard",
    "city": "Manila CPO-PO Box# 1400 to 1499",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "1054",
    "latitude": "14.0494",
    "longitude": "121.5101",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 525,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 902,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 216,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 462,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 278,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190608GF9837",
    "dateOfPurchase": "2019-06-08 11:03:38",
    "extendedPrice": 65027.42999999999,
    "customerKey": "GEORFIEL7807",
    "firstName": "Georgann",
    "lastName": "Fields",
    "phoneNumber": "+91-202-944-7807",
    "email": "gfields202@Frontier.com",
    "streetAddressOfBuilding": "7055 Short Creek Circle",
    "city": "Kaji",
    "stateProvince": "Chirawa",
    "locality": "Jhujhunu",
    "country": "IN",
    "postalCode": "333031",
    "latitude": "28.4338",
    "longitude": "75.5982",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 354,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 546,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 501,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 909,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 597,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170906CC4676",
    "dateOfPurchase": "2017-09-06 11:03:38",
    "extendedPrice": 7404.91,
    "customerKey": "CORICAST5104",
    "firstName": "Corine",
    "lastName": "Castaneda",
    "phoneNumber": "+1-104-490-5104",
    "email": "ccastane104@TelecomItalia.com",
    "streetAddressOfBuilding": "6024 Long Creek Boulevard",
    "city": "Hamden",
    "stateProvince": "CT",
    "locality": "New Haven",
    "country": "US",
    "postalCode": "06514",
    "latitude": "41.362",
    "longitude": "-72.9361",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 766,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 630,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 585,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 939,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170816MW4824",
    "dateOfPurchase": "2017-08-16 11:03:38",
    "extendedPrice": 38762.32000000001,
    "customerKey": "MOHAWYAT5760",
    "firstName": "Mohammad",
    "lastName": "Wyatt",
    "phoneNumber": "+1-166-892-5760",
    "email": "mwyatt166@Jio.com",
    "streetAddressOfBuilding": "1541 Short Tree Avenue",
    "city": "Calgary (Tuscany \/ Scenic Acres)",
    "stateProvince": "AB",
    "locality": "Calgary",
    "country": "CA",
    "postalCode": "T3L",
    "latitude": "51.1467",
    "longitude": "-114.3133",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 681,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 852,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 235,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190714HV5193",
    "dateOfPurchase": "2019-07-14 11:03:38",
    "extendedPrice": 10051.75,
    "customerKey": "HALLVANG1075",
    "firstName": "Hallie",
    "lastName": "Vang",
    "phoneNumber": "+1-156-334-1075",
    "email": "hvang156@Jio.com",
    "streetAddressOfBuilding": "1390 Little River Circle",
    "city": "Cleveland",
    "stateProvince": "OH",
    "locality": "Cuyahoga",
    "country": "US",
    "postalCode": "44102",
    "latitude": "41.4735",
    "longitude": "-81.7398",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 775,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 130,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 920,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180914TM6482",
    "dateOfPurchase": "2018-09-14 11:03:38",
    "extendedPrice": 1981,
    "customerKey": "TADMCCO1990",
    "firstName": "Tad",
    "lastName": "Mccoy",
    "phoneNumber": "+44-330-442-1990",
    "email": "tmccoy330@CCI.com",
    "streetAddressOfBuilding": "8161 Red Tree Way",
    "city": "Calmsden",
    "stateProvince": "England",
    "locality": "Gloucestershire",
    "country": "GB",
    "postalCode": "GL7",
    "latitude": "51.7132",
    "longitude": "-1.8662",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 475,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 175,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181203MB2893",
    "dateOfPurchase": "2018-12-03 11:03:38",
    "extendedPrice": 5132.17,
    "customerKey": "MARCBULL4035",
    "firstName": "Marcelle",
    "lastName": "Bullock",
    "phoneNumber": "+54-297-383-4035",
    "email": "mbullock297@Telecom.com",
    "streetAddressOfBuilding": "936 Blue Creek Street",
    "city": "CERRITO",
    "stateProvince": "Y",
    "locality": "Jujuy",
    "country": "AR",
    "postalCode": "4653",
    "latitude": "-22.1944",
    "longitude": "-65.95",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 172,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 261,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190616GM6309",
    "dateOfPurchase": "2019-06-16 11:03:38",
    "extendedPrice": 1444.74,
    "customerKey": "GERAMARS8203",
    "firstName": "Gerard",
    "lastName": "Marshall",
    "phoneNumber": "+49-229-902-8203",
    "email": "gmarshal229@Sprint.com",
    "streetAddressOfBuilding": "4803 Green Mountain Circle",
    "city": "Weidenberg",
    "stateProvince": "BY",
    "locality": "Upper Franconia",
    "country": "DE",
    "postalCode": "95466",
    "latitude": "49.9416",
    "longitude": "11.7221",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 726,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180405MH6709",
    "dateOfPurchase": "2018-04-05 11:03:38",
    "extendedPrice": 238.48,
    "customerKey": "MOZEHANS1688",
    "firstName": "Mozella",
    "lastName": "Hansen",
    "phoneNumber": "+1-222-925-1688",
    "email": "mhansen222@Vodafone.com",
    "streetAddressOfBuilding": "5153 Long Creek Street",
    "city": "Elgin (Dorchester)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0L",
    "latitude": "42.7557",
    "longitude": "-81.4533",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 271,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170322AH2436",
    "dateOfPurchase": "2017-03-22 11:03:38",
    "extendedPrice": 61.25,
    "customerKey": "ANDRHENS7755",
    "firstName": "Andres",
    "lastName": "Henson",
    "phoneNumber": "+598-365-690-7755",
    "email": "ahenson365@ICom.com",
    "streetAddressOfBuilding": "7119 Red Canyon Drive",
    "city": "Villa Mu\u00f1oz Retiro",
    "stateProvince": "Montevideo",
    "locality": "Montevideo",
    "country": "UY",
    "postalCode": "11800",
    "latitude": "-34.8865",
    "longitude": "-56.1756",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 125,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191217JS7659",
    "dateOfPurchase": "2019-12-17 11:03:38",
    "extendedPrice": 24936.85,
    "customerKey": "JAZMSMIT2096",
    "firstName": "Jazmin",
    "lastName": "Smith",
    "phoneNumber": "+1-267-801-2096",
    "email": "jsmith267@Softbank.com",
    "streetAddressOfBuilding": "7103 Short Canyon Drive",
    "city": "Shelby",
    "stateProvince": "AL",
    "locality": "Shelby",
    "country": "US",
    "postalCode": "35143",
    "latitude": "33.0785",
    "longitude": "-86.5536",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 664,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 840,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 325,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 986,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170705HB7838",
    "dateOfPurchase": "2017-07-05 11:03:38",
    "extendedPrice": 11171.6,
    "customerKey": "HARRBREN5971",
    "firstName": "Harry",
    "lastName": "Brennan",
    "phoneNumber": "+91-230-520-5971",
    "email": "hbrennan230@Rogers.com",
    "streetAddressOfBuilding": "5237 Big Bough Road",
    "city": "Narkul",
    "stateProvince": "Naugarh",
    "locality": "Siddharthnagar",
    "country": "IN",
    "postalCode": "272202",
    "latitude": "27.1231",
    "longitude": "83.1086",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 412,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 98,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 448,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 244,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 838,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180418BM8360",
    "dateOfPurchase": "2018-04-18 11:03:38",
    "extendedPrice": 3617.75,
    "customerKey": "BURLMCKA5896",
    "firstName": "Burl",
    "lastName": "Mckay",
    "phoneNumber": "+91-372-007-5896",
    "email": "bmckay372@Movil.com",
    "streetAddressOfBuilding": "8437 Winding Bough Ride",
    "city": "Thimmanallur",
    "stateProvince": "Dindigul",
    "locality": "Dindigul",
    "country": "IN",
    "postalCode": "624308",
    "latitude": "10.0788",
    "longitude": "77.9387",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 725,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190704FZ7788",
    "dateOfPurchase": "2019-07-04 11:03:38",
    "extendedPrice": 7495.640000000001,
    "customerKey": "FERMZAVA5969",
    "firstName": "Fermina",
    "lastName": "Zavala",
    "phoneNumber": "+32-115-523-5969",
    "email": "fzavala115@BCE.com",
    "streetAddressOfBuilding": "9678 Big Mountain Boulevard",
    "city": "Landen Waasmont",
    "stateProvince": "VLG",
    "locality": "Vlaams Brabant",
    "country": "BE",
    "postalCode": "3401",
    "latitude": "50.7333",
    "longitude": "5.0667",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 910,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 301,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 546,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 313,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 261,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 715,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171110ED4895",
    "dateOfPurchase": "2017-11-10 11:03:38",
    "extendedPrice": 5157.03,
    "customerKey": "EMELDORS1769",
    "firstName": "Emelina",
    "lastName": "Dorsey",
    "phoneNumber": "+91-274-481-1769",
    "email": "edorsey274@NordNet.com",
    "streetAddressOfBuilding": "1256 Blue Creek Ride",
    "city": "Maheji",
    "stateProvince": "Pachora",
    "locality": "Jalgaon",
    "country": "IN",
    "postalCode": "425115",
    "latitude": "20.7935",
    "longitude": "75.4065",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 397,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180405KS0681",
    "dateOfPurchase": "2018-04-05 11:03:38",
    "extendedPrice": 137.2,
    "customerKey": "KELLSTEP6031",
    "firstName": "Kelley",
    "lastName": "Stephens",
    "phoneNumber": "+91-378-725-6031",
    "email": "kstephen378@Unicom.com",
    "streetAddressOfBuilding": "498 Green Creek Circle",
    "city": "Bhadas",
    "stateProvince": "Bhulath",
    "locality": "Kapurthala",
    "country": "IN",
    "postalCode": "144622",
    "latitude": "31.5864",
    "longitude": "75.5087",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 280,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190601MS2397",
    "dateOfPurchase": "2019-06-01 11:03:38",
    "extendedPrice": 19135.23,
    "customerKey": "MARYSTEI8317",
    "firstName": "Maryanne",
    "lastName": "Stein",
    "phoneNumber": "+354-193-268-8317",
    "email": "mstein193@AIS.com",
    "streetAddressOfBuilding": "2995 Blue River Circle",
    "city": "Sta\u00f0",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "500",
    "latitude": "65.7681",
    "longitude": "-21.864",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 739,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 541,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 781,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 416,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180530EC0701",
    "dateOfPurchase": "2018-05-30 11:03:38",
    "extendedPrice": 41580.79,
    "customerKey": "EARNCAMP9455",
    "firstName": "Earnest",
    "lastName": "Campos",
    "phoneNumber": "+691-261-056-9455",
    "email": "ecampos261@KDDI.com",
    "streetAddressOfBuilding": "2354 Little Mountain Boulevard",
    "city": "Chuuk",
    "stateProvince": "State of Chuuk",
    "locality": "State of Chuuk",
    "country": "FM",
    "postalCode": "96942",
    "latitude": "7.1383",
    "longitude": "151.5031",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 317,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 690,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 795,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 87,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 552,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190105AB5165",
    "dateOfPurchase": "2019-01-05 11:03:38",
    "extendedPrice": 19838.95,
    "customerKey": "ALLEBURK4071",
    "firstName": "Allena",
    "lastName": "Burke",
    "phoneNumber": "+61-256-880-4071",
    "email": "aburke256@TelecomItalia.com",
    "streetAddressOfBuilding": "1261 Winding Ditch Street",
    "city": "Pullenvale",
    "stateProvince": "QLD",
    "locality": "NORTHGATE CENT",
    "country": "AU",
    "postalCode": "4069",
    "latitude": "-27.5228",
    "longitude": "152.8865",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 794,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 895,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 242,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 408,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 866,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190507BL9717",
    "dateOfPurchase": "2019-05-07 11:03:38",
    "extendedPrice": 10979.6,
    "customerKey": "BIANLIND8466",
    "firstName": "Bianca",
    "lastName": "Lindsey",
    "phoneNumber": "+44-114-825-8466",
    "email": "blindsey114@Belgacom.com",
    "streetAddressOfBuilding": "7166 Long Bough Street",
    "city": "Wharton",
    "stateProvince": "England",
    "locality": "Cheshire",
    "country": "GB",
    "postalCode": "CW7",
    "latitude": "53.195",
    "longitude": "-2.5048",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 728,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 622,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 90,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190217GM9762",
    "dateOfPurchase": "2019-02-17 11:03:38",
    "extendedPrice": 10487.65,
    "customerKey": "GLENMCLA8639",
    "firstName": "Glenn",
    "lastName": "Mclaughlin",
    "phoneNumber": "+91-116-582-8639",
    "email": "gmclaugh116@BT.com",
    "streetAddressOfBuilding": "2574 Big Mound Street",
    "city": "Jamoo",
    "stateProvince": "Banda",
    "locality": "Banda",
    "country": "IN",
    "postalCode": "210203",
    "latitude": "25.3957",
    "longitude": "80.7243",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 997,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 32,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 973,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 143,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 967,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170303WM6869",
    "dateOfPurchase": "2017-03-03 11:03:38",
    "extendedPrice": 961.17,
    "customerKey": "WMMORE0896",
    "firstName": "Wm",
    "lastName": "Moreno",
    "phoneNumber": "+63-103-266-0896",
    "email": "wmoreno103@OpenWorld.com",
    "streetAddressOfBuilding": "2714 Winding River Boulevard",
    "city": "Manila CPO-PO Box# 1400 to 1499",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "1054",
    "latitude": "14.0494",
    "longitude": "121.5101",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 483,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190504JM4696",
    "dateOfPurchase": "2019-05-04 11:03:38",
    "extendedPrice": 12152.369999999999,
    "customerKey": "JEANMOSE1935",
    "firstName": "Jean",
    "lastName": "Moses",
    "phoneNumber": "+1-138-478-1935",
    "email": "jmoses138@SKTelecom.com",
    "streetAddressOfBuilding": "9943 Big Ditch Drive",
    "city": "Guilford",
    "stateProvince": "NY",
    "locality": "Chenango",
    "country": "US",
    "postalCode": "13780",
    "latitude": "42.4269",
    "longitude": "-75.4823",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 916,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 1,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 187,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 802,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 213,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 924,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160819EP6676",
    "dateOfPurchase": "2016-08-19 11:03:38",
    "extendedPrice": 97.72,
    "customerKey": "EDWAPETE3681",
    "firstName": "Edwardo",
    "lastName": "Peterson",
    "phoneNumber": "+34-177-399-3681",
    "email": "epeterso177@APICnet.com",
    "streetAddressOfBuilding": "7535 Little Hill Street",
    "city": "Agrade, A (San Vicente)",
    "stateProvince": "GA",
    "locality": "Lugo",
    "country": "ES",
    "postalCode": "27513",
    "latitude": "42.5991",
    "longitude": "-7.8716",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 28,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170508IW9473",
    "dateOfPurchase": "2017-05-08 11:03:38",
    "extendedPrice": 17287.410000000003,
    "customerKey": "IVANWHIT8914",
    "firstName": "Ivan",
    "lastName": "Whitney",
    "phoneNumber": "+358-293-182-8914",
    "email": "iwhitney293@Airtel.com",
    "streetAddressOfBuilding": "4586 Long Mountain Road",
    "city": "S\u00e4ikk\u00e4",
    "stateProvince": "Posio",
    "locality": "It\u00e4-Lappi",
    "country": "FI",
    "postalCode": "97950",
    "latitude": "65.9814",
    "longitude": "28.1902",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 331,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 457,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 607,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 254,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 526,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 834,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190825AM8875",
    "dateOfPurchase": "2019-08-25 11:03:38",
    "extendedPrice": 469.64,
    "customerKey": "AHMEMORR7725",
    "firstName": "Ahmed",
    "lastName": "Morrison",
    "phoneNumber": "+880-289-298-7725",
    "email": "amorriso289@Safaricom.com",
    "streetAddressOfBuilding": "1781 Short Gulch Road",
    "city": "Hayemchar",
    "stateProvince": "Hayemchar",
    "locality": "Chandpur",
    "country": "BD",
    "postalCode": "3660",
    "latitude": "23.0768",
    "longitude": "90.681",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 796,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170222PP6034",
    "dateOfPurchase": "2017-02-22 11:03:38",
    "extendedPrice": 18947.289999999997,
    "customerKey": "PEARPATE0523",
    "firstName": "Pearlene",
    "lastName": "Patel",
    "phoneNumber": "+421-381-345-0523",
    "email": "ppatel381@APICnet.com",
    "streetAddressOfBuilding": "995 Green Ridge Road",
    "city": "Tonkovce",
    "stateProvince": "TA",
    "locality": "Dunajsk\u00e1 Streda",
    "country": "SK",
    "postalCode": "930 38",
    "latitude": "48.1187",
    "longitude": "17.4431",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 312,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 633,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 778,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 995,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 725,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 683,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170829GH7407",
    "dateOfPurchase": "2017-08-29 11:03:38",
    "extendedPrice": 10274.220000000001,
    "customerKey": "GAYLHORN6380",
    "firstName": "Gayla",
    "lastName": "Horne",
    "phoneNumber": "+1787-215-607-6380",
    "email": "ghorne215@Telus.com",
    "streetAddressOfBuilding": "1442 Winding Bridge Drive",
    "city": "San Juan",
    "stateProvince": "San Juan",
    "locality": "San Juan",
    "country": "PR",
    "postalCode": "00929",
    "latitude": "18.4663",
    "longitude": "-66.1057",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 390,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 727,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 980,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 225,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 432,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191107PN3654",
    "dateOfPurchase": "2019-11-07 11:03:38",
    "extendedPrice": 37512.72,
    "customerKey": "PABLNORT5757",
    "firstName": "Pablo",
    "lastName": "Norton",
    "phoneNumber": "+508-145-321-5757",
    "email": "pnorton145@Verizon.com",
    "streetAddressOfBuilding": "3876 Little Gulch Way",
    "city": "Saint-Pierre",
    "stateProvince": "Saint-Pierre",
    "locality": "Saint-Pierre",
    "country": "PM",
    "postalCode": "97500",
    "latitude": "46.7809",
    "longitude": "-56.172",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 664,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 708,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 704,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 2,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 528,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 922,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170814TH3509",
    "dateOfPurchase": "2017-08-14 11:03:38",
    "extendedPrice": 6253.490000000001,
    "customerKey": "TALIHAYN4865",
    "firstName": "Talia",
    "lastName": "Haynes",
    "phoneNumber": "+213-203-525-4865",
    "email": "thaynes203@TM.com",
    "streetAddressOfBuilding": "7183 Red Gulch Way",
    "city": "Lala Metouba",
    "stateProvince": "Boumerdes",
    "locality": "Boumerdes",
    "country": "DZ",
    "postalCode": "35004",
    "latitude": "36.9023",
    "longitude": "3.8947",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 555,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 375,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 437,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180505AS0638",
    "dateOfPurchase": "2018-05-05 11:03:38",
    "extendedPrice": 24412.85,
    "customerKey": "ASHLSHAN8943",
    "firstName": "Ashley",
    "lastName": "Shannon",
    "phoneNumber": "+594-383-630-8943",
    "email": "ashannon383@Telekom.com",
    "streetAddressOfBuilding": "2147 Blue Bough Way",
    "city": "Kourou",
    "stateProvince": "GF",
    "locality": "Guyane",
    "country": "GF",
    "postalCode": "97382 CEDEX",
    "latitude": "5.1628",
    "longitude": "-52.6427",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 335,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 636,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 924,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190704JD2919",
    "dateOfPurchase": "2019-07-04 11:03:38",
    "extendedPrice": 55780.18,
    "customerKey": "JOSIDRAK5045",
    "firstName": "Josiah",
    "lastName": "Drake",
    "phoneNumber": "+441481-247-098-5045",
    "email": "jdrake247@EUnet.com",
    "streetAddressOfBuilding": "3386 Big Hill Circle",
    "city": "St Sampsons",
    "stateProvince": "Guernsey Channel Islands",
    "locality": "Guernsey Channel Islands",
    "country": "GG",
    "postalCode": "GY2",
    "latitude": "49.45",
    "longitude": "-2.6",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 536,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 899,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 358,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 957,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 482,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170703GP1533",
    "dateOfPurchase": "2017-07-03 11:03:38",
    "extendedPrice": 4697.28,
    "customerKey": "GEORPERR2841",
    "firstName": "Georgine",
    "lastName": "Perry",
    "phoneNumber": "+91-228-329-2841",
    "email": "gperry228@OTE.com",
    "streetAddressOfBuilding": "7805 Winding Hill Road",
    "city": "Bhatpura",
    "stateProvince": "Kochinda",
    "locality": "Sambalpur",
    "country": "IN",
    "postalCode": "768107",
    "latitude": "21.6513",
    "longitude": "84.4061",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 672,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170727LB7094",
    "dateOfPurchase": "2017-07-27 11:03:38",
    "extendedPrice": 11029.96,
    "customerKey": "LIBEBRAN9462",
    "firstName": "Liberty",
    "lastName": "Brandt",
    "phoneNumber": "+590-107-479-9462",
    "email": "lbrandt107@APICnet.com",
    "streetAddressOfBuilding": "1857 Long Mountain Road",
    "city": "Grand-Bourg",
    "stateProvince": "GP",
    "locality": "Guadeloupe",
    "country": "GP",
    "postalCode": "97112",
    "latitude": "15.8835",
    "longitude": "-61.3148",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 354,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 292,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 978,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 500,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190704NO4029",
    "dateOfPurchase": "2019-07-04 11:03:38",
    "extendedPrice": 16471.65,
    "customerKey": "NICHOCHO6493",
    "firstName": "Nicholle",
    "lastName": "Ochoa",
    "phoneNumber": "+1-376-016-6493",
    "email": "nochoa376@Jio.com",
    "streetAddressOfBuilding": "4329 Short Ridge Boulevard",
    "city": "Axtell",
    "stateProvince": "NE",
    "locality": "Kearney",
    "country": "US",
    "postalCode": "68924",
    "latitude": "40.5269",
    "longitude": "-99.1169",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 693,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 733,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 306,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 753,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170307SV4396",
    "dateOfPurchase": "2017-03-07 11:03:38",
    "extendedPrice": 24509.93,
    "customerKey": "SETHVARG7301",
    "firstName": "Seth",
    "lastName": "Vargas",
    "phoneNumber": "+91-169-678-7301",
    "email": "svargas169@CCI.com",
    "streetAddressOfBuilding": "6256 Big Gully Avenue",
    "city": "Ghungchai",
    "stateProvince": "Pooranpur",
    "locality": "Pilibhit",
    "country": "IN",
    "postalCode": "262122",
    "latitude": "28.45",
    "longitude": "80.0833",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 990,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 899,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 337,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 285,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 696,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191106LB4508",
    "dateOfPurchase": "2019-11-06 11:03:38",
    "extendedPrice": 6167.46,
    "customerKey": "LIBEBRAN9462",
    "firstName": "Liberty",
    "lastName": "Brandt",
    "phoneNumber": "+590-107-479-9462",
    "email": "lbrandt107@APICnet.com",
    "streetAddressOfBuilding": "1857 Long Mountain Road",
    "city": "Grand-Bourg",
    "stateProvince": "GP",
    "locality": "Guadeloupe",
    "country": "GP",
    "postalCode": "97112",
    "latitude": "15.8835",
    "longitude": "-61.3148",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 755,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 99,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180106JR3816",
    "dateOfPurchase": "2018-01-06 11:03:38",
    "extendedPrice": 2353.13,
    "customerKey": "JIMMRYAN4714",
    "firstName": "Jimmie",
    "lastName": "Ryan",
    "phoneNumber": "+373-305-653-4714",
    "email": "jryan305@UI.com",
    "streetAddressOfBuilding": "8742 Long Gulch Circle",
    "city": "Moara De Piatra",
    "stateProvince": "Drochia",
    "locality": "Drochia",
    "country": "MD",
    "postalCode": "MD-5222",
    "latitude": "47.895",
    "longitude": "28.0069",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 787,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190213YC9832",
    "dateOfPurchase": "2019-02-13 11:03:38",
    "extendedPrice": 578.1999999999999,
    "customerKey": "YADICONW4872",
    "firstName": "Yadira",
    "lastName": "Conway",
    "phoneNumber": "+1-172-993-4872",
    "email": "yconway172@Turkcell.com",
    "streetAddressOfBuilding": "9306 Short Mound Street",
    "city": "Cartierville Southwest",
    "stateProvince": "QC",
    "locality": "Cartierville",
    "country": "CA",
    "postalCode": "H4K",
    "latitude": "45.5171",
    "longitude": "-73.7363",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 980,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190518RK1347",
    "dateOfPurchase": "2019-05-18 11:03:38",
    "extendedPrice": 32510.71,
    "customerKey": "RICAKANE0052",
    "firstName": "Ricardo",
    "lastName": "Kane",
    "phoneNumber": "+61-210-310-0052",
    "email": "rkane210@Optus.com",
    "streetAddressOfBuilding": "7022 Big Tree Road",
    "city": "Delungra",
    "stateProvince": "NSW",
    "locality": "NSW NORTH COAST",
    "country": "AU",
    "postalCode": "2403",
    "latitude": "-29.654",
    "longitude": "150.83",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 398,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 694,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 39,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 490,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 708,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170506RM8131",
    "dateOfPurchase": "2017-05-06 11:03:38",
    "extendedPrice": 6293.01,
    "customerKey": "RUEBMORR9151",
    "firstName": "Rueben",
    "lastName": "Morrow",
    "phoneNumber": "+1-296-709-9151",
    "email": "rmorrow296@VimpelCom.com",
    "streetAddressOfBuilding": "6223 Short Woods Drive",
    "city": "Sorel Central",
    "stateProvince": "QC",
    "locality": "Sorel",
    "country": "CA",
    "postalCode": "J3P",
    "latitude": "46.0365",
    "longitude": "-73.0665",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 876,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 227,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 698,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 59,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 333,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170617HB7627",
    "dateOfPurchase": "2017-06-17 11:03:38",
    "extendedPrice": 5640.39,
    "customerKey": "HARRBREN5971",
    "firstName": "Harry",
    "lastName": "Brennan",
    "phoneNumber": "+91-230-520-5971",
    "email": "hbrennan230@Rogers.com",
    "streetAddressOfBuilding": "5237 Big Bough Road",
    "city": "Narkul",
    "stateProvince": "Naugarh",
    "locality": "Siddharthnagar",
    "country": "IN",
    "postalCode": "272202",
    "latitude": "27.1231",
    "longitude": "83.1086",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 353,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 808,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190409WC7291",
    "dateOfPurchase": "2019-04-09 11:03:38",
    "extendedPrice": 19667.31,
    "customerKey": "WELDCHAV2057",
    "firstName": "Weldon",
    "lastName": "Chavez",
    "phoneNumber": "+47-377-325-2057",
    "email": "wchavez377@APICnet.com",
    "streetAddressOfBuilding": "3662 Short Mountain Way",
    "city": "F\u00f8rde",
    "stateProvince": "F\u00f8rde",
    "locality": "F\u00f8rde",
    "country": "NO",
    "postalCode": "6801",
    "latitude": "61.4522",
    "longitude": "5.8572",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 456,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 721,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 322,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 692,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 743,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 235,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170416CH6592",
    "dateOfPurchase": "2017-04-16 11:03:38",
    "extendedPrice": 9140.900000000001,
    "customerKey": "CARIHANN5988",
    "firstName": "Caridad",
    "lastName": "Hanna",
    "phoneNumber": "+44-398-327-5988",
    "email": "channa398@NII.com",
    "streetAddressOfBuilding": "9878 Blue Creek Road",
    "city": "Keady",
    "stateProvince": "Northern Ireland",
    "locality": "County Armagh",
    "country": "GB",
    "postalCode": "BT60",
    "latitude": "54.25",
    "longitude": "-6.7",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 811,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 476,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 923,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161224LA9269",
    "dateOfPurchase": "2016-12-24 11:03:38",
    "extendedPrice": 3814.44,
    "customerKey": "LANEASHL2832",
    "firstName": "Lane",
    "lastName": "Ashley",
    "phoneNumber": "+1-370-433-2832",
    "email": "lashley370@KTC.com",
    "streetAddressOfBuilding": "7930 Green Canyon Circle",
    "city": "Reeds Spring",
    "stateProvince": "MO",
    "locality": "Stone",
    "country": "US",
    "postalCode": "65737",
    "latitude": "36.6907",
    "longitude": "-93.3447",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 956,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191120ET0465",
    "dateOfPurchase": "2019-11-20 11:03:38",
    "extendedPrice": 7116.4800000000005,
    "customerKey": "EMELTUCK6238",
    "firstName": "Emelda",
    "lastName": "Tucker",
    "phoneNumber": "+1-134-675-6238",
    "email": "etucker134@CCI.com",
    "streetAddressOfBuilding": "6129 Short Woods Street",
    "city": "North Freedom",
    "stateProvince": "WI",
    "locality": "Sauk",
    "country": "US",
    "postalCode": "53951",
    "latitude": "43.4106",
    "longitude": "-89.849",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 180,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 615,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 857,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180130CG8064",
    "dateOfPurchase": "2018-01-30 11:03:38",
    "extendedPrice": 4464.63,
    "customerKey": "CHARGOOD4456",
    "firstName": "Charita",
    "lastName": "Goodman",
    "phoneNumber": "+44-180-329-4456",
    "email": "cgoodman180@DaxNet.com",
    "streetAddressOfBuilding": "2319 Red Bend Street",
    "city": "Conland",
    "stateProvince": "Scotland",
    "locality": "Aberdeenshire",
    "country": "GB",
    "postalCode": "AB54",
    "latitude": "57.3709",
    "longitude": "-2.8293",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 403,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 934,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160709AD3548",
    "dateOfPurchase": "2016-07-09 11:03:38",
    "extendedPrice": 50661.17999999999,
    "customerKey": "ANGEDAY2054",
    "firstName": "Angelo",
    "lastName": "Day",
    "phoneNumber": "+60-373-277-2054",
    "email": "aday373@TelecomItalia.com",
    "streetAddressOfBuilding": "42 Green Woods Ride",
    "city": "Pulau Pinang",
    "stateProvince": "PNG",
    "locality": "Pulau Pinang",
    "country": "MY",
    "postalCode": "10910",
    "latitude": "5.4179",
    "longitude": "100.3296",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 993,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 253,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 598,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 946,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 487,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 955,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190810DM8954",
    "dateOfPurchase": "2019-08-10 11:03:38",
    "extendedPrice": 19165.030000000002,
    "customerKey": "DONNMCGU6886",
    "firstName": "Donnell",
    "lastName": "Mcguire",
    "phoneNumber": "+34-243-577-6886",
    "email": "dmcguire243@Access.com",
    "streetAddressOfBuilding": "6355 Little Mound Street",
    "city": "Santotis",
    "stateProvince": "CL",
    "locality": "Burgos",
    "country": "ES",
    "postalCode": "09549",
    "latitude": "42.816",
    "longitude": "-3.3662",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 266,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 241,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 340,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180418HS0491",
    "dateOfPurchase": "2018-04-18 11:03:38",
    "extendedPrice": 8494.09,
    "customerKey": "HARLSPEN6035",
    "firstName": "Harley",
    "lastName": "Spence",
    "phoneNumber": "+56-393-545-6035",
    "email": "hspence393@Airtel.com",
    "streetAddressOfBuilding": "6413 Green Woods Avenue",
    "city": "Cartagena",
    "stateProvince": "Cartagena",
    "locality": "San Antonio Province",
    "country": "CL",
    "postalCode": "2680000",
    "latitude": "-33.5338",
    "longitude": "-71.4424",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 124,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 98,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 870,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 899,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 500,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161225EL5183",
    "dateOfPurchase": "2016-12-25 11:03:38",
    "extendedPrice": 38422.67,
    "customerKey": "ELIALEAC4941",
    "firstName": "Elias",
    "lastName": "Leach",
    "phoneNumber": "+45-183-567-4941",
    "email": "eleach183@Swisscom.com",
    "streetAddressOfBuilding": "7491 Blue River Boulevard",
    "city": "Skanderborg",
    "stateProvince": "Horsens Kommune",
    "locality": "Horsens Kommune",
    "country": "DK",
    "postalCode": "8660",
    "latitude": "56.0399",
    "longitude": "9.9272",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 987,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 869,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 811,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 716,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190701MH5563",
    "dateOfPurchase": "2019-07-01 11:03:38",
    "extendedPrice": 2184.7400000000002,
    "customerKey": "MOZEHANS1688",
    "firstName": "Mozella",
    "lastName": "Hansen",
    "phoneNumber": "+1-222-925-1688",
    "email": "mhansen222@Vodafone.com",
    "streetAddressOfBuilding": "5153 Long Creek Street",
    "city": "Elgin (Dorchester)",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "N0L",
    "latitude": "42.7557",
    "longitude": "-81.4533",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 626,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170304AB3771",
    "dateOfPurchase": "2017-03-04 11:03:38",
    "extendedPrice": 7670.07,
    "customerKey": "ABELBARR2892",
    "firstName": "Abel",
    "lastName": "Barron",
    "phoneNumber": "+1670-307-108-2892",
    "email": "abarron307@UI.com",
    "streetAddressOfBuilding": "5233 Red River Way",
    "city": "Saipan",
    "stateProvince": "Saipan",
    "locality": "Saipan",
    "country": "MP",
    "postalCode": "96950",
    "latitude": "15.1685",
    "longitude": "145.7408",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 536,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 351,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 312,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 549,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 718,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 127,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170710RM3518",
    "dateOfPurchase": "2017-07-10 11:03:38",
    "extendedPrice": 3856.64,
    "customerKey": "RUEBMORR9151",
    "firstName": "Rueben",
    "lastName": "Morrow",
    "phoneNumber": "+1-296-709-9151",
    "email": "rmorrow296@VimpelCom.com",
    "streetAddressOfBuilding": "6223 Short Woods Drive",
    "city": "Sorel Central",
    "stateProvince": "QC",
    "locality": "Sorel",
    "country": "CA",
    "postalCode": "J3P",
    "latitude": "46.0365",
    "longitude": "-73.0665",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 860,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 10,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 122,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 402,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191205JM2087",
    "dateOfPurchase": "2019-12-05 11:03:38",
    "extendedPrice": 84.83,
    "customerKey": "JALEMALD7418",
    "firstName": "Jaleesa",
    "lastName": "Maldonado",
    "phoneNumber": "+1-184-233-7418",
    "email": "jmaldona184@Softbank.com",
    "streetAddressOfBuilding": "9624 Short Creek Circle",
    "city": "Clarksville",
    "stateProvince": "AR",
    "locality": "Johnson",
    "country": "US",
    "postalCode": "72830",
    "latitude": "35.4908",
    "longitude": "-93.4911",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 17,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180628ZG4338",
    "dateOfPurchase": "2018-06-28 11:03:38",
    "extendedPrice": 12118.7,
    "customerKey": "ZACHGALL8564",
    "firstName": "Zachery",
    "lastName": "Gallagher",
    "phoneNumber": "+1-254-624-8564",
    "email": "zgallagh254@OTE.com",
    "streetAddressOfBuilding": "4401 Little Ridge Road",
    "city": "Bolton",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "L7E",
    "latitude": "43.8795",
    "longitude": "-79.7379",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 776,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 399,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 203,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 49,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 596,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 937,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181212EB5006",
    "dateOfPurchase": "2018-12-12 11:03:38",
    "extendedPrice": 7514.62,
    "customerKey": "ETHABUCH8761",
    "firstName": "Etha",
    "lastName": "Buchanan",
    "phoneNumber": "+52-273-719-8761",
    "email": "ebuchana273@Turkcell.com",
    "streetAddressOfBuilding": "6598 Long Gulch Boulevard",
    "city": "La Lagunita",
    "stateProvince": "CHH",
    "locality": "Camargo",
    "country": "MX",
    "postalCode": "33730",
    "latitude": "27.8494",
    "longitude": "-104.6806",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 225,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 186,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 313,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 60,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 454,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190822MD6248",
    "dateOfPurchase": "2019-08-22 11:03:38",
    "extendedPrice": 7497.42,
    "customerKey": "MARLDORS7479",
    "firstName": "Marlo",
    "lastName": "Dorsey",
    "phoneNumber": "+44-102-260-7479",
    "email": "mdorsey102@KDDI.com",
    "streetAddressOfBuilding": "6787 Red Bridge Way",
    "city": "Shortacombe",
    "stateProvince": "England",
    "locality": "Devon",
    "country": "GB",
    "postalCode": "EX20",
    "latitude": "50.7569",
    "longitude": "-4.0388",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 121,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 787,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161227RP7821",
    "dateOfPurchase": "2016-12-27 11:03:38",
    "extendedPrice": 1852.3500000000001,
    "customerKey": "RUBEPOPE2213",
    "firstName": "Ruben",
    "lastName": "Pope",
    "phoneNumber": "+1-242-799-2213",
    "email": "rpope242@PLDT.com",
    "streetAddressOfBuilding": "2971 Green Stream Ride",
    "city": "Upper Columbia Region (Golden)",
    "stateProvince": "BC",
    "locality": "British Columbia",
    "country": "CA",
    "postalCode": "V0A",
    "latitude": "51.2994",
    "longitude": "-116.939",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 265,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170330JC8248",
    "dateOfPurchase": "2017-03-30 11:03:38",
    "extendedPrice": 23682.5,
    "customerKey": "JANYCONL2869",
    "firstName": "Janyce",
    "lastName": "Conley",
    "phoneNumber": "+1787-281-927-2869",
    "email": "jconley281@PLDT.com",
    "streetAddressOfBuilding": "2848 Long Bough Drive",
    "city": "Guanica",
    "stateProvince": "Guanica",
    "locality": "Guanica",
    "country": "PR",
    "postalCode": "00653",
    "latitude": "17.9716",
    "longitude": "-66.908",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 662,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 992,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 452,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 844,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190518JA5316",
    "dateOfPurchase": "2019-05-18 11:03:38",
    "extendedPrice": 12716.19,
    "customerKey": "JAKEAYER5244",
    "firstName": "Jake",
    "lastName": "Ayers",
    "phoneNumber": "+91-340-690-5244",
    "email": "jayers340@Telefonica.com",
    "streetAddressOfBuilding": "4253 Red Ditch Street",
    "city": "Saunkra",
    "stateProvince": "Nilokheri",
    "locality": "Karnal",
    "country": "IN",
    "postalCode": "132116",
    "latitude": "29.7958",
    "longitude": "76.8709",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 316,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 174,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 869,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 548,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 378,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161215IW8172",
    "dateOfPurchase": "2016-12-15 11:03:38",
    "extendedPrice": 4364.67,
    "customerKey": "IVANWHIT8914",
    "firstName": "Ivan",
    "lastName": "Whitney",
    "phoneNumber": "+358-293-182-8914",
    "email": "iwhitney293@Airtel.com",
    "streetAddressOfBuilding": "4586 Long Mountain Road",
    "city": "S\u00e4ikk\u00e4",
    "stateProvince": "Posio",
    "locality": "It\u00e4-Lappi",
    "country": "FI",
    "postalCode": "97950",
    "latitude": "65.9814",
    "longitude": "28.1902",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 239,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 544,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161205KO2052",
    "dateOfPurchase": "2016-12-05 11:03:38",
    "extendedPrice": 7425.33,
    "customerKey": "KATHOSBO1475",
    "firstName": "Kathy",
    "lastName": "Osborne",
    "phoneNumber": "+1441-309-657-1475",
    "email": "kosborne309@Belgacom.com",
    "streetAddressOfBuilding": "1918 Little Woods Boulevard",
    "city": "Smith\u2019s",
    "stateProvince": "Smith\u2019s Parish",
    "locality": "Smith\u2019s Parish",
    "country": "BM",
    "postalCode": "HS 02",
    "latitude": "32.354",
    "longitude": "-64.7096",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 655,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 651,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 19,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 966,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190514RB3792",
    "dateOfPurchase": "2019-05-14 11:03:38",
    "extendedPrice": 1015.6600000000001,
    "customerKey": "RUBEBEST6106",
    "firstName": "Ruben",
    "lastName": "Best",
    "phoneNumber": "+31-121-150-6106",
    "email": "rbest121@Orstom.com",
    "streetAddressOfBuilding": "990 Blue Bough Boulevard",
    "city": "Schipluiden",
    "stateProvince": "Midden-Delfland",
    "locality": "Midden-Delfland",
    "country": "NL",
    "postalCode": "2636",
    "latitude": "51.9749",
    "longitude": "4.318",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 790,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 238,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 416,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170724DC9888",
    "dateOfPurchase": "2017-07-24 11:03:38",
    "extendedPrice": 16817.550000000003,
    "customerKey": "DANICONN6067",
    "firstName": "Daniel",
    "lastName": "Conner",
    "phoneNumber": "+61-164-396-6067",
    "email": "dconner164@Telekom.com",
    "streetAddressOfBuilding": "4073 Big Gulch Way",
    "city": "Proston",
    "stateProvince": "QLD",
    "locality": "TOOWOOMBA SE CNR",
    "country": "AU",
    "postalCode": "4613",
    "latitude": "-26.1607",
    "longitude": "151.6004",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 333,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 894,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 94,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 939,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 983,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180830DS8746",
    "dateOfPurchase": "2018-08-30 11:03:38",
    "extendedPrice": 17878.74,
    "customerKey": "DUDLSHOR0718",
    "firstName": "Dudley",
    "lastName": "Short",
    "phoneNumber": "+61-300-785-0718",
    "email": "dshort300@TelecomItalia.com",
    "streetAddressOfBuilding": "8027 Blue Hill Way",
    "city": "Elingamite North",
    "stateProvince": "VIC",
    "locality": "Victoria",
    "country": "AU",
    "postalCode": "3266",
    "latitude": "-38.35",
    "longitude": "143.0167",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 588,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 586,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 698,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 834,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190712KB6018",
    "dateOfPurchase": "2019-07-12 11:03:38",
    "extendedPrice": 4384.06,
    "customerKey": "KERRBRIG9627",
    "firstName": "Kerry",
    "lastName": "Briggs",
    "phoneNumber": "+420-343-334-9627",
    "email": "kbriggs343@APICnet.com",
    "streetAddressOfBuilding": "8087 Red Gully Avenue",
    "city": "Lodh\u00e9\u0159ov",
    "stateProvince": "Jind\u0159ich\u016fv Hradec",
    "locality": "Jind\u0159ich\u016fv Hradec",
    "country": "CZ",
    "postalCode": "378 26",
    "latitude": "49.2167",
    "longitude": "14.9667",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 628,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 880,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 347,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 119,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180406MH9834",
    "dateOfPurchase": "2018-04-06 11:03:38",
    "extendedPrice": 1137.72,
    "customerKey": "MOZEHENS5883",
    "firstName": "Mozell",
    "lastName": "Hensley",
    "phoneNumber": "+1-284-043-5883",
    "email": "mhensley284@TelecomItalia.com",
    "streetAddressOfBuilding": "2033 Little Gulch Drive",
    "city": "Waverley",
    "stateProvince": "NS",
    "locality": "Nova Scotia",
    "country": "CA",
    "postalCode": "B2R",
    "latitude": "44.7599",
    "longitude": "-63.5525",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 228,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161011AD3351",
    "dateOfPurchase": "2016-10-11 11:03:38",
    "extendedPrice": 6719.73,
    "customerKey": "ANGEDAY2054",
    "firstName": "Angelo",
    "lastName": "Day",
    "phoneNumber": "+60-373-277-2054",
    "email": "aday373@TelecomItalia.com",
    "streetAddressOfBuilding": "42 Green Woods Ride",
    "city": "Pulau Pinang",
    "stateProvince": "PNG",
    "locality": "Pulau Pinang",
    "country": "MY",
    "postalCode": "10910",
    "latitude": "5.4179",
    "longitude": "100.3296",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 606,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 388,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 633,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190818TS2725",
    "dateOfPurchase": "2019-08-18 11:03:38",
    "extendedPrice": 2015.2600000000002,
    "customerKey": "TANISOLI9777",
    "firstName": "Tanika",
    "lastName": "Solis",
    "phoneNumber": "+298-341-651-9777",
    "email": "tsolis341@BT.com",
    "streetAddressOfBuilding": "6462 Short Canyon Way",
    "city": "Elduvik",
    "stateProvince": null,
    "locality": null,
    "country": "FO",
    "postalCode": "478",
    "latitude": "62.2833",
    "longitude": "-6.9",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 674,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170907OT5587",
    "dateOfPurchase": "2017-09-07 11:03:38",
    "extendedPrice": 7279.55,
    "customerKey": "OZELTRUO6020",
    "firstName": "Ozella",
    "lastName": "Truong",
    "phoneNumber": "+1-288-442-6020",
    "email": "otruong288@Optus.com",
    "streetAddressOfBuilding": "3757 Big Hill Road",
    "city": "Jerusalem",
    "stateProvince": "OH",
    "locality": "Monroe",
    "country": "US",
    "postalCode": "43747",
    "latitude": "39.8488",
    "longitude": "-81.0921",
    "productsPurchased": [
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 524,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 639,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 907,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 115,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 280,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180823TO4702",
    "dateOfPurchase": "2018-08-23 11:03:38",
    "extendedPrice": 18973.820000000003,
    "customerKey": "THEROWEN5806",
    "firstName": "Theron",
    "lastName": "Owens",
    "phoneNumber": "+44-174-737-5806",
    "email": "towens174@SingTel.com",
    "streetAddressOfBuilding": "5108 Blue Mound Circle",
    "city": "Leeming Bar",
    "stateProvince": "England",
    "locality": "North Yorkshire",
    "country": "GB",
    "postalCode": "DL7",
    "latitude": "54.3053",
    "longitude": "-1.5594",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 867,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 754,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 241,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 844,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 161,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 431,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190428GP0871",
    "dateOfPurchase": "2019-04-28 11:03:38",
    "extendedPrice": 1116.16,
    "customerKey": "GEORPERR2841",
    "firstName": "Georgine",
    "lastName": "Perry",
    "phoneNumber": "+91-228-329-2841",
    "email": "gperry228@OTE.com",
    "streetAddressOfBuilding": "7805 Winding Hill Road",
    "city": "Bhatpura",
    "stateProvince": "Kochinda",
    "locality": "Sambalpur",
    "country": "IN",
    "postalCode": "768107",
    "latitude": "21.6513",
    "longitude": "84.4061",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 869,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 107,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161229AC1060",
    "dateOfPurchase": "2016-12-29 11:03:38",
    "extendedPrice": 7872.43,
    "customerKey": "ALEACRAI8082",
    "firstName": "Alease",
    "lastName": "Craig",
    "phoneNumber": "+91-362-122-8082",
    "email": "acraig362@Telus.com",
    "streetAddressOfBuilding": "5980 Big Gulch Street",
    "city": "Cheldiganipalle",
    "stateProvince": "Palamaner",
    "locality": "Chittoor",
    "country": "IN",
    "postalCode": "517424",
    "latitude": "13.9516",
    "longitude": "78.0767",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 245,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 227,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 425,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 260,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180422JA7407",
    "dateOfPurchase": "2018-04-22 11:03:38",
    "extendedPrice": 4350.599999999999,
    "customerKey": "JESSACEV0931",
    "firstName": "Jesse",
    "lastName": "Acevedo",
    "phoneNumber": "+90-303-134-0931",
    "email": "jacevedo303@Swisscom.com",
    "streetAddressOfBuilding": "1630 Short Hill Ride",
    "city": "Do\u011fanhisar",
    "stateProvince": "Do\u011fanhisar",
    "locality": "Do\u011fanhisar",
    "country": "TR",
    "postalCode": "42930",
    "latitude": "38.1463",
    "longitude": "31.6765",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 84,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 790,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 484,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 92,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190810DC8245",
    "dateOfPurchase": "2019-08-10 11:03:38",
    "extendedPrice": 15598.61,
    "customerKey": "DANICANT0900",
    "firstName": "Daniell",
    "lastName": "Cantrell",
    "phoneNumber": "+44-366-491-0900",
    "email": "dcantrel366@Chunghwa.com",
    "streetAddressOfBuilding": "3674 Big Canyon Ride",
    "city": "Woodside",
    "stateProvince": "England",
    "locality": "Hertfordshire",
    "country": "GB",
    "postalCode": "AL9",
    "latitude": "51.7449",
    "longitude": "-0.1984",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 985,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 384,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 770,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160804CC3342",
    "dateOfPurchase": "2016-08-04 11:03:38",
    "extendedPrice": 40576.29,
    "customerKey": "CORECUEV8076",
    "firstName": "Corey",
    "lastName": "Cuevas",
    "phoneNumber": "+1-212-262-8076",
    "email": "ccuevas212@Orange.com",
    "streetAddressOfBuilding": "2323 Short River Drive",
    "city": "Ossineke",
    "stateProvince": "MI",
    "locality": "Alpena",
    "country": "US",
    "postalCode": "49766",
    "latitude": "44.9104",
    "longitude": "-83.4592",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 778,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 523,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 762,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 608,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180123FT3270",
    "dateOfPurchase": "2018-01-23 11:03:38",
    "extendedPrice": 14354.31,
    "customerKey": "FOSTTYLE7198",
    "firstName": "Foster",
    "lastName": "Tyler",
    "phoneNumber": "+7-265-073-7198",
    "email": "ftyler265@DaxNet.com",
    "streetAddressOfBuilding": "8490 Little Gully Circle",
    "city": "\u0421\u0442\u0435\u043f\u043d\u043e\u0439",
    "stateProvince": "\u041d\u0410\u0417\u0410\u0420\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "locality": "\u041d\u0410\u0417\u0410\u0420\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
    "country": "RU",
    "postalCode": "662217",
    "latitude": "54.5022",
    "longitude": "82.9386",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 682,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 1,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 39,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 20,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 527,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190308AM5821",
    "dateOfPurchase": "2019-03-08 11:03:38",
    "extendedPrice": 16322.84,
    "customerKey": "ALFOMATH9785",
    "firstName": "Alfonzo",
    "lastName": "Mathews",
    "phoneNumber": "+1-220-159-9785",
    "email": "amathews220@Etisalat.com",
    "streetAddressOfBuilding": "2702 Blue Mountain Drive",
    "city": "Laval-sur-le-Lac",
    "stateProvince": "QC",
    "locality": "Laval",
    "country": "CA",
    "postalCode": "H7R",
    "latitude": "45.5526",
    "longitude": "-73.8507",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 445,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 495,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 393,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 33,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171212MG1886",
    "dateOfPurchase": "2017-12-12 11:03:38",
    "extendedPrice": 15804.18,
    "customerKey": "MERNGARR7865",
    "firstName": "Merna",
    "lastName": "Garrett",
    "phoneNumber": "+380-361-636-7865",
    "email": "mgarrett361@Optus.com",
    "streetAddressOfBuilding": "5112 Short Tree Avenue",
    "city": "\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u043a\u0430 (\u041e\u0440\u0434\u0436\u043e\u043d\u0456\u043a\u0456\u0434\u0437\u0435\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
    "stateProvince": "Dniprovskyi",
    "locality": "Dniprovskyi",
    "country": "UA",
    "postalCode": "52061",
    "latitude": "48.3215",
    "longitude": "34.8476",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 570,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 984,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 940,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190121MG6858",
    "dateOfPurchase": "2019-01-21 11:03:38",
    "extendedPrice": 14409.729999999998,
    "customerKey": "MELGILE5687",
    "firstName": "Mel",
    "lastName": "Giles",
    "phoneNumber": "+262-397-761-5687",
    "email": "mgiles397@PTCL.com",
    "streetAddressOfBuilding": "118 Short Hill Ride",
    "city": "Saint-Denis",
    "stateProvince": "RE",
    "locality": "R\u00e9union",
    "country": "RE",
    "postalCode": "97469 CEDEX",
    "latitude": "-20.8823",
    "longitude": "55.4504",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 512,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 293,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 560,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 714,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190901CF8034",
    "dateOfPurchase": "2019-09-01 11:03:38",
    "extendedPrice": 10573.86,
    "customerKey": "CORRFRYE3435",
    "firstName": "Corrin",
    "lastName": "Frye",
    "phoneNumber": "+1-322-001-3435",
    "email": "cfrye322@CUBENet.com",
    "streetAddressOfBuilding": "1146 Green Ridge Boulevard",
    "city": "Lone Star",
    "stateProvince": "TX",
    "locality": "Morris",
    "country": "US",
    "postalCode": "75668",
    "latitude": "32.9252",
    "longitude": "-94.7049",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 814,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160731SW1346",
    "dateOfPurchase": "2016-07-31 11:03:38",
    "extendedPrice": 8402.619999999999,
    "customerKey": "SHARWHIT4848",
    "firstName": "Sharie",
    "lastName": "White",
    "phoneNumber": "+386-149-406-4848",
    "email": "swhite149@SEEDnet.com",
    "streetAddressOfBuilding": "9696 Red Woods Road",
    "city": "Velika Polana",
    "stateProvince": null,
    "locality": null,
    "country": "SI",
    "postalCode": "9225",
    "latitude": "46.5719",
    "longitude": "16.3469",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 721,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 11,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 577,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 979,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
