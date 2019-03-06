conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.purchases.drop();
db.purchases.insertOne(
{
    "transactionId": "20190324KT6237",
    "dateOfPurchase": "2019-03-24 11:48:56",
    "extendedPrice": 3032.8100000000004,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 869,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160731JD3563",
    "dateOfPurchase": "2016-07-31 11:48:56",
    "extendedPrice": 1242.44,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 356,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181221PW6109",
    "dateOfPurchase": "2018-12-21 11:48:56",
    "extendedPrice": 8991.98,
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
            "productKey": "apple_pie",
            "qtyPurchased": 863,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 939,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190429ZF3221",
    "dateOfPurchase": "2019-04-29 11:48:56",
    "extendedPrice": 8381.23,
    "customerKey": "MARCMCDO5112",
    "firstName": "Marcelle",
    "lastName": "Mcdowell",
    "phoneNumber": "+1-260-562-5112",
    "email": "mmcdowel260@CUBENet.com",
    "streetAddressOfBuilding": "5202 Green Stream Avenue",
    "city": "Gravenhurst",
    "stateProvince": "ON",
    "locality": "Ontario",
    "country": "CA",
    "postalCode": "P1P",
    "latitude": "44.9168",
    "longitude": "-79.3663",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 193,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 409,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 81,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 247,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 291,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 546,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180126UK7149",
    "dateOfPurchase": "2018-01-26 11:48:56",
    "extendedPrice": 15187.68,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 902,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 468,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 847,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 650,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 585,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180603WC0713",
    "dateOfPurchase": "2018-06-03 11:48:56",
    "extendedPrice": 38120.15,
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
            "productKey": "wedding_cake",
            "qtyPurchased": 453,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 231,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 810,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 834,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 877,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190820EI1583",
    "dateOfPurchase": "2019-08-20 11:48:56",
    "extendedPrice": 10442.980000000001,
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
            "productKey": "torta_cake",
            "qtyPurchased": 152,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 976,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 482,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 492,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180727NK9772",
    "dateOfPurchase": "2018-07-27 11:48:56",
    "extendedPrice": 1422.83,
    "customerKey": "LYNDBRAD9305",
    "firstName": "Lyndsay",
    "lastName": "Bradley",
    "phoneNumber": "+502-125-521-9305",
    "email": "lbradley125@Telecom.com",
    "streetAddressOfBuilding": "8868 Long Creek Way",
    "city": "EL REFUGIO (LOS AMATES)",
    "stateProvince": "DEPTO DE IZABAL",
    "locality": "DEPTO DE IZABAL",
    "country": "GT",
    "postalCode": "18016",
    "latitude": "15.5667",
    "longitude": "-88.9233",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 436,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 193,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 736,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160805UO6373",
    "dateOfPurchase": "2016-08-05 11:48:56",
    "extendedPrice": 2156.24,
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
            "productKey": "muffin",
            "qtyPurchased": 817,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 899,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190507HK8321",
    "dateOfPurchase": "2019-05-07 11:48:56",
    "extendedPrice": 5478.500000000001,
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
            "qtyPurchased": 698,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 974,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 273,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 45,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181124VR2308",
    "dateOfPurchase": "2018-11-24 11:48:56",
    "extendedPrice": 28940.04,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 595,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 20,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 577,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 759,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 345,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170622MW4351",
    "dateOfPurchase": "2017-06-22 11:48:56",
    "extendedPrice": 8156.370000000001,
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
            "productKey": "apple_pie",
            "qtyPurchased": 422,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 760,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 681,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190426YW9449",
    "dateOfPurchase": "2019-04-26 11:48:56",
    "extendedPrice": 13899.630000000001,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 417,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 403,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 905,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 314,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 846,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170119T4763",
    "dateOfPurchase": "2017-01-19 11:48:56",
    "extendedPrice": 7445.58,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 285,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 885,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 795,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 57,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161031DR3636",
    "dateOfPurchase": "2016-10-31 11:48:56",
    "extendedPrice": 1402.98,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 402,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191105HI6745",
    "dateOfPurchase": "2019-11-05 11:48:56",
    "extendedPrice": 8927.400000000001,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 760,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 500,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180505HT9551",
    "dateOfPurchase": "2018-05-05 11:48:56",
    "extendedPrice": 6837.14,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 854,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 986,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170706QV4648",
    "dateOfPurchase": "2017-07-06 11:48:56",
    "extendedPrice": 2792.9500000000003,
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
            "productKey": "torta_cake",
            "qtyPurchased": 35,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 670,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190714ON3809",
    "dateOfPurchase": "2019-07-14 11:48:56",
    "extendedPrice": 4444.660000000001,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 827,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 140,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 195,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 387,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 118,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
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
    "transactionId": "20160921TS1114",
    "dateOfPurchase": "2016-09-21 11:48:56",
    "extendedPrice": 7698.3200000000015,
    "customerKey": "CHINLIU0298",
    "firstName": "Chin",
    "lastName": "Liu",
    "phoneNumber": "+1-196-776-0298",
    "email": "cliu196@VimpelCom.com",
    "streetAddressOfBuilding": "7654 Winding Stream Street",
    "city": "Noorvik",
    "stateProvince": "AK",
    "locality": "Northwest Arctic",
    "country": "US",
    "postalCode": "99763",
    "latitude": "66.8364",
    "longitude": "-161.0441",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 58,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 96,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 767,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 897,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171208TD5885",
    "dateOfPurchase": "2017-12-08 11:48:56",
    "extendedPrice": 8166,
    "customerKey": "ERICGALV5308",
    "firstName": "Erica",
    "lastName": "Galvan",
    "phoneNumber": "+61-348-907-5308",
    "email": "egalvan348@Tata.com",
    "streetAddressOfBuilding": "5045 Short Woods Street",
    "city": "Whiteman",
    "stateProvince": "WA",
    "locality": "STIRLING",
    "country": "AU",
    "postalCode": "6068",
    "latitude": "-31.8245",
    "longitude": "115.9416",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 368,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 232,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190422RT9560",
    "dateOfPurchase": "2019-04-22 11:48:56",
    "extendedPrice": 2643.1600000000003,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 884,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180217LG7635",
    "dateOfPurchase": "2018-02-17 11:48:56",
    "extendedPrice": 6691.67,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 736,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 44,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 141,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 842,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181031MW1045",
    "dateOfPurchase": "2018-10-31 11:48:56",
    "extendedPrice": 8505.019999999999,
    "customerKey": "PAULWEIS3249",
    "firstName": "Paul",
    "lastName": "Weiss",
    "phoneNumber": "+61-396-352-3249",
    "email": "pweiss396@Bifty.com",
    "streetAddressOfBuilding": "5351 Blue Bend Boulevard",
    "city": "Altona North",
    "stateProvince": "VIC",
    "locality": "FOOTSCRAY",
    "country": "AU",
    "postalCode": "3025",
    "latitude": "-37.8349",
    "longitude": "144.8474",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 720,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 436,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 25,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 342,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191019RA9834",
    "dateOfPurchase": "2019-10-19 11:48:56",
    "extendedPrice": 4326.81,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 619,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181210ML3302",
    "dateOfPurchase": "2018-12-10 11:48:56",
    "extendedPrice": 11346.23,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 878,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 321,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 466,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 512,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190607WE7736",
    "dateOfPurchase": "2019-06-07 11:48:56",
    "extendedPrice": 2695.13,
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
            "productKey": "apple_pie",
            "qtyPurchased": 434,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 53,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170618XF0311",
    "dateOfPurchase": "2017-06-18 11:48:56",
    "extendedPrice": 35276.01,
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
            "qtyPurchased": 730,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 406,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 999,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 961,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 133,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171217O8583",
    "dateOfPurchase": "2017-12-17 11:48:56",
    "extendedPrice": 22980.73,
    "customerKey": "MYRLVALE0225",
    "firstName": "Myrl",
    "lastName": "Valenzuela",
    "phoneNumber": "+39-213-122-0225",
    "email": "mvalenzu213@ICom.com",
    "streetAddressOfBuilding": "8813 Winding Bend Ride",
    "city": "San Paolo Di Noto",
    "stateProvince": "SC",
    "locality": "Siracusa",
    "country": "IT",
    "postalCode": "96017",
    "latitude": "36.8388",
    "longitude": "15.0259",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 758,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 774,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 683,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 387,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 925,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190308HR8577",
    "dateOfPurchase": "2019-03-08 11:48:56",
    "extendedPrice": 5818.709999999999,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 913,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 179,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 235,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 771,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160720BO4217",
    "dateOfPurchase": "2016-07-20 11:48:56",
    "extendedPrice": 6403.02,
    "customerKey": "IKEVU4860",
    "firstName": "Ike",
    "lastName": "Vu",
    "phoneNumber": "+1340-385-505-4860",
    "email": "ivu385@Telstra.com",
    "streetAddressOfBuilding": "7683 Red Bridge Road",
    "city": "St John",
    "stateProvince": "St. John",
    "locality": "St. John",
    "country": "VI",
    "postalCode": "00830",
    "latitude": "18.3282",
    "longitude": "-64.7407",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 315,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 15,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 918,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180825MW4609",
    "dateOfPurchase": "2018-08-25 11:48:56",
    "extendedPrice": 11655.32,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 273,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 575,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190319ZH6452",
    "dateOfPurchase": "2019-03-19 11:48:56",
    "extendedPrice": 4962.530000000001,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 550,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 673,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 174,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180422HE4815",
    "dateOfPurchase": "2018-04-22 11:48:56",
    "extendedPrice": 8372.960000000001,
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
            "productKey": "apple_pie",
            "qtyPurchased": 803,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 414,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180904GG2991",
    "dateOfPurchase": "2018-09-04 11:48:56",
    "extendedPrice": 10420.64,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 517,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 571,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 46,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 696,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190903H3579",
    "dateOfPurchase": "2019-09-03 11:48:56",
    "extendedPrice": 8983.480000000001,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 7,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 532,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 851,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 672,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171127UV5468",
    "dateOfPurchase": "2017-11-27 11:48:56",
    "extendedPrice": 15145.77,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 474,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 688,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 997,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 72,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161023LQ4326",
    "dateOfPurchase": "2016-10-23 11:48:56",
    "extendedPrice": 17740.920000000006,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 886,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 931,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 894,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 637,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 20,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190319LU7018",
    "dateOfPurchase": "2019-03-19 11:48:56",
    "extendedPrice": 12459.73,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 139,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 115,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 619,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 321,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 318,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180314MT5251",
    "dateOfPurchase": "2018-03-14 11:48:56",
    "extendedPrice": 19786.19,
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
            "productKey": "layer_cake",
            "qtyPurchased": 460,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 921,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170524GO6561",
    "dateOfPurchase": "2017-05-24 11:48:56",
    "extendedPrice": 7990.9800000000005,
    "customerKey": "VIDAHURL6027",
    "firstName": "Vida",
    "lastName": "Hurley",
    "phoneNumber": "+46-199-655-6027",
    "email": "vhurley199@AlgoNet.com",
    "streetAddressOfBuilding": "80 Blue Tree Road",
    "city": "Lidk\u00f6ping",
    "stateProvince": "O",
    "locality": "Lidk\u00f6ping",
    "country": "SE",
    "postalCode": "531 57",
    "latitude": "58.5052",
    "longitude": "13.1577",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 440,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 407,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 256,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 249,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 538,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 412,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191230BA3738",
    "dateOfPurchase": "2019-12-30 11:48:56",
    "extendedPrice": 5084.09,
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
            "productKey": "muffin",
            "qtyPurchased": 234,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 2,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 655,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180906QB4153",
    "dateOfPurchase": "2018-09-06 11:48:56",
    "extendedPrice": 9683.200000000003,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 686,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 749,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 731,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 684,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160716MY8921",
    "dateOfPurchase": "2016-07-16 11:48:56",
    "extendedPrice": 13750.59,
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
            "productKey": "torta_cake",
            "qtyPurchased": 681,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 448,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 312,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191119YG5696",
    "dateOfPurchase": "2019-11-19 11:48:56",
    "extendedPrice": 16198.71,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 485,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 780,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 464,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170730NO8557",
    "dateOfPurchase": "2017-07-30 11:48:56",
    "extendedPrice": 4955.110000000001,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 503,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 986,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180313AP4624",
    "dateOfPurchase": "2018-03-13 11:48:56",
    "extendedPrice": 760.01,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 697,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 98,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191123WE6498",
    "dateOfPurchase": "2019-11-23 11:48:56",
    "extendedPrice": 1049.49,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 351,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170729IF1200",
    "dateOfPurchase": "2017-07-29 11:48:56",
    "extendedPrice": 34164.2,
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
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 151,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 695,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 507,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 600,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 177,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 550,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170602XQ2026",
    "dateOfPurchase": "2017-06-02 11:48:56",
    "extendedPrice": 15473.76,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 787,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 258,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 66,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 412,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 499,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 202,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190906FB5094",
    "dateOfPurchase": "2019-09-06 11:48:56",
    "extendedPrice": 6975.050000000001,
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
            "productKey": "apple_pie",
            "qtyPurchased": 611,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 984,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181028WT1488",
    "dateOfPurchase": "2018-10-28 11:48:56",
    "extendedPrice": 810.21,
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
            "productKey": "muffin",
            "qtyPurchased": 24,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 255,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180320RJ5017",
    "dateOfPurchase": "2018-03-20 11:48:56",
    "extendedPrice": 4451.56,
    "customerKey": "ODILBROC4799",
    "firstName": "Odilia",
    "lastName": "Brock",
    "phoneNumber": "+44-276-739-4799",
    "email": "obrock276@Vodafone.com",
    "streetAddressOfBuilding": "4055 Short Bough Road",
    "city": "Leyland",
    "stateProvince": "England",
    "locality": "Lancashire",
    "country": "GB",
    "postalCode": "PR25",
    "latitude": "53.6979",
    "longitude": "-2.6876",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 281,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 409,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 844,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190621JZ4059",
    "dateOfPurchase": "2019-06-21 11:48:56",
    "extendedPrice": 31554.260000000002,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 513,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 690,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 371,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161123QH1156",
    "dateOfPurchase": "2016-11-23 11:48:56",
    "extendedPrice": 7220.910000000001,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 710,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 444,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 775,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 71,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 661,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 236,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180401DQ3172",
    "dateOfPurchase": "2018-04-01 11:48:56",
    "extendedPrice": 844.26,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 94,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 560,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190422Q6217",
    "dateOfPurchase": "2019-04-22 11:48:56",
    "extendedPrice": 4606.2300000000005,
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
            "productKey": "apple_pie",
            "qtyPurchased": 638,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 33,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 110,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 296,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190125N5104",
    "dateOfPurchase": "2019-01-25 11:48:56",
    "extendedPrice": 9942.789999999999,
    "customerKey": "DWAYGILL8361",
    "firstName": "Dwayne",
    "lastName": "Gill",
    "phoneNumber": "+1-324-953-8361",
    "email": "dgill324@PLDT.com",
    "streetAddressOfBuilding": "2393 Little Hill Avenue",
    "city": "Topeka",
    "stateProvince": "KS",
    "locality": "Shawnee",
    "country": "US",
    "postalCode": "66636",
    "latitude": "39.0483",
    "longitude": "-95.678",
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 405,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 288,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 568,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 370,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 286,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180421GJ3451",
    "dateOfPurchase": "2018-04-21 11:48:56",
    "extendedPrice": 3402.75,
    "customerKey": "PATRYODE9823",
    "firstName": "Patrina",
    "lastName": "Yoder",
    "phoneNumber": "+1-100-329-9823",
    "email": "pyoder100@CCI.com",
    "streetAddressOfBuilding": "2885 Short Tree Drive",
    "city": "Washington",
    "stateProvince": "DC",
    "locality": "District of Columbia",
    "country": "US",
    "postalCode": "20228",
    "latitude": "38.8951",
    "longitude": "-77.0364",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 521,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 79,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 375,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190821DA5603",
    "dateOfPurchase": "2019-08-21 11:48:56",
    "extendedPrice": 9118.710000000001,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 248,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 737,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 312,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 886,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 314,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180101BD6021",
    "dateOfPurchase": "2018-01-01 11:48:56",
    "extendedPrice": 10819.580000000002,
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
            "qtyPurchased": 618,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 670,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 418,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 193,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 836,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 927,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180113XB0934",
    "dateOfPurchase": "2018-01-13 11:48:56",
    "extendedPrice": 8500.5,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 595,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 855,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191104HM2011",
    "dateOfPurchase": "2019-11-04 11:48:56",
    "extendedPrice": 10339,
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
            "productKey": "apple_pie",
            "qtyPurchased": 134,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 737,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 393,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 846,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 480,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161203PJ9534",
    "dateOfPurchase": "2016-12-03 11:48:56",
    "extendedPrice": 4666.24,
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
            "qtyPurchased": 66,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 560,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 50,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180619XZ6800",
    "dateOfPurchase": "2018-06-19 11:48:56",
    "extendedPrice": 21178.22,
    "customerKey": "MINHPATT9610",
    "firstName": "Minh",
    "lastName": "Patton",
    "phoneNumber": "+64-337-330-9610",
    "email": "mpatton337@APICnet.com",
    "streetAddressOfBuilding": "3569 Little Tree Ride",
    "city": "Whataroa",
    "stateProvince": "G3",
    "locality": "West Coast",
    "country": "NZ",
    "postalCode": "7857",
    "latitude": "-43.2833",
    "longitude": "170.4167",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 613,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 666,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 213,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 301,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 226,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 189,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190329DD1644",
    "dateOfPurchase": "2019-03-29 11:48:56",
    "extendedPrice": 25463.86,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 387,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 819,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 435,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 673,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180504RS3555",
    "dateOfPurchase": "2018-05-04 11:48:56",
    "extendedPrice": 11337.66,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 415,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 48,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 871,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171017Q1536",
    "dateOfPurchase": "2017-10-17 11:48:56",
    "extendedPrice": 2917.6400000000003,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 836,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191023JG7678",
    "dateOfPurchase": "2019-10-23 11:48:56",
    "extendedPrice": 60744.49,
    "customerKey": "HAROLIM5260",
    "firstName": "Harold",
    "lastName": "Lim",
    "phoneNumber": "+44-246-494-5260",
    "email": "hlim246@MaxComm.com",
    "streetAddressOfBuilding": "7994 Long River Way",
    "city": "Upper Arncott",
    "stateProvince": "England",
    "locality": "Oxfordshire",
    "country": "GB",
    "postalCode": "OX6",
    "latitude": "51.9152",
    "longitude": "-1.184",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 738,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 334,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 734,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 930,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 179,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 136,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180915OS8828",
    "dateOfPurchase": "2018-09-15 11:48:56",
    "extendedPrice": 1651.8600000000001,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 414,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170617RD3943",
    "dateOfPurchase": "2017-06-17 11:48:56",
    "extendedPrice": 2691.19,
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
            "qtyPurchased": 629,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 921,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190504AW5050",
    "dateOfPurchase": "2019-05-04 11:48:56",
    "extendedPrice": 14208.82,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 484,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 391,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 379,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 416,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180725Y7503",
    "dateOfPurchase": "2018-07-25 11:48:56",
    "extendedPrice": 5737.12,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 936,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 497,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 136,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 448,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 889,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170404T3927",
    "dateOfPurchase": "2017-04-04 11:48:56",
    "extendedPrice": 2954.6500000000005,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 399,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 29,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 82,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 159,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 318,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190313QP2944",
    "dateOfPurchase": "2019-03-13 11:48:56",
    "extendedPrice": 70938.21,
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
            "productKey": "wedding_cake",
            "qtyPurchased": 698,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 435,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 487,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 438,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 559,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 712,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180813KK4127",
    "dateOfPurchase": "2018-08-13 11:48:56",
    "extendedPrice": 2493.2000000000003,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 91,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 471,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 228,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180511YF0610",
    "dateOfPurchase": "2018-05-11 11:48:56",
    "extendedPrice": 15585.75,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 510,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 567,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 975,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 723,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190329PD5430",
    "dateOfPurchase": "2019-03-29 11:48:56",
    "extendedPrice": 16621.55,
    "customerKey": "STERWELC0850",
    "firstName": "Sterling",
    "lastName": "Welch",
    "phoneNumber": "+386-347-425-0850",
    "email": "swelch347@PLDT.com",
    "streetAddressOfBuilding": "6780 Big River Street",
    "city": "Pobegi",
    "stateProvince": null,
    "locality": null,
    "country": "SI",
    "postalCode": "6276",
    "latitude": "45.5394",
    "longitude": "13.7961",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 613,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 935,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
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
    "transactionId": "20180104ZH6881",
    "dateOfPurchase": "2018-01-04 11:48:56",
    "extendedPrice": 1232.47,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 430,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 358,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 215,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170429QF2509",
    "dateOfPurchase": "2017-04-29 11:48:56",
    "extendedPrice": 3076.9600000000005,
    "customerKey": "PAULWEIS3249",
    "firstName": "Paul",
    "lastName": "Weiss",
    "phoneNumber": "+61-396-352-3249",
    "email": "pweiss396@Bifty.com",
    "streetAddressOfBuilding": "5351 Blue Bend Boulevard",
    "city": "Altona North",
    "stateProvince": "VIC",
    "locality": "FOOTSCRAY",
    "country": "AU",
    "postalCode": "3025",
    "latitude": "-37.8349",
    "longitude": "144.8474",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 53,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 34,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 767,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190518QY6306",
    "dateOfPurchase": "2019-05-18 11:48:56",
    "extendedPrice": 5448.75,
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
            "productKey": "layer_cake",
            "qtyPurchased": 533,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 92,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 339,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 436,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 125,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170323WI2248",
    "dateOfPurchase": "2017-03-23 11:48:56",
    "extendedPrice": 1373.1,
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
            "qtyPurchased": 690,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181114MM1635",
    "dateOfPurchase": "2018-11-14 11:48:56",
    "extendedPrice": 2970.85,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 680,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 182,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 53,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190620EN0305",
    "dateOfPurchase": "2019-06-20 11:48:56",
    "extendedPrice": 8288.980000000001,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 175,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 657,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 116,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 904,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 409,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 392,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181021BE9811",
    "dateOfPurchase": "2018-10-21 11:48:56",
    "extendedPrice": 7143.650000000001,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 568,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 339,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 178,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181018NW6246",
    "dateOfPurchase": "2018-10-18 11:48:56",
    "extendedPrice": 37.169999999999995,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 63,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191222Z4567",
    "dateOfPurchase": "2019-12-22 11:48:56",
    "extendedPrice": 15813.220000000001,
    "customerKey": "ASHLBAUT2627",
    "firstName": "Ashleigh",
    "lastName": "Bautista",
    "phoneNumber": "+44-298-211-2627",
    "email": "abautist298@Chunghwa.com",
    "streetAddressOfBuilding": "7561 Little Mountain Road",
    "city": "Sayers Common",
    "stateProvince": "England",
    "locality": "West Sussex",
    "country": "GB",
    "postalCode": "BN6",
    "latitude": "50.9227",
    "longitude": "-0.1523",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 774,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
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
            "productKey": "apple_pie",
            "qtyPurchased": 816,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 944,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160916UB9752",
    "dateOfPurchase": "2016-09-16 11:48:56",
    "extendedPrice": 6676.76,
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
            "productKey": "layer_cake",
            "qtyPurchased": 377,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 545,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 523,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 529,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170505KR3895",
    "dateOfPurchase": "2017-05-05 11:48:56",
    "extendedPrice": 5663.820000000001,
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
            "productKey": "apple_pie",
            "qtyPurchased": 512,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 637,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 369,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190803VM6477",
    "dateOfPurchase": "2019-08-03 11:48:56",
    "extendedPrice": 1320.7800000000002,
    "customerKey": "IKEVU4860",
    "firstName": "Ike",
    "lastName": "Vu",
    "phoneNumber": "+1340-385-505-4860",
    "email": "ivu385@Telstra.com",
    "streetAddressOfBuilding": "7683 Red Bridge Road",
    "city": "St John",
    "stateProvince": "St. John",
    "locality": "St. John",
    "country": "VI",
    "postalCode": "00830",
    "latitude": "18.3282",
    "longitude": "-64.7407",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 174,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 234,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180518JL1803",
    "dateOfPurchase": "2018-05-18 11:48:56",
    "extendedPrice": 16746.83,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 634,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 919,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 489,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 619,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 426,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160720KJ0358",
    "dateOfPurchase": "2016-07-20 11:48:56",
    "extendedPrice": 3221.9100000000003,
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
            "productKey": "apple_pie",
            "qtyPurchased": 630,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 99,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190719RO2020",
    "dateOfPurchase": "2019-07-19 11:48:56",
    "extendedPrice": 229.54000000000002,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 46,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170728ND8042",
    "dateOfPurchase": "2017-07-28 11:48:56",
    "extendedPrice": 120.36,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 204,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181016XU4074",
    "dateOfPurchase": "2018-10-16 11:48:56",
    "extendedPrice": 8726.69,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 378,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 570,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 563,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191209NA9843",
    "dateOfPurchase": "2019-12-09 11:48:56",
    "extendedPrice": 20264.11,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 858,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 915,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 379,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 802,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 876,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 109,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190119KM6884",
    "dateOfPurchase": "2019-01-19 11:48:56",
    "extendedPrice": 2041.65,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 585,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170528U2638",
    "dateOfPurchase": "2017-05-28 11:48:56",
    "extendedPrice": 6546.110000000001,
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
            "productKey": "torta_cake",
            "qtyPurchased": 25,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 792,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 107,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 574,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 541,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191005VL4782",
    "dateOfPurchase": "2019-10-05 11:48:56",
    "extendedPrice": 4728.05,
    "customerKey": "ODILBROC4799",
    "firstName": "Odilia",
    "lastName": "Brock",
    "phoneNumber": "+44-276-739-4799",
    "email": "obrock276@Vodafone.com",
    "streetAddressOfBuilding": "4055 Short Bough Road",
    "city": "Leyland",
    "stateProvince": "England",
    "locality": "Lancashire",
    "country": "GB",
    "postalCode": "PR25",
    "latitude": "53.6979",
    "longitude": "-2.6876",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 284,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 491,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 15,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 238,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 697,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170304BM5369",
    "dateOfPurchase": "2017-03-04 11:48:56",
    "extendedPrice": 4180.35,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 465,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181002WL7952",
    "dateOfPurchase": "2018-10-02 11:48:56",
    "extendedPrice": 9304.74,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 83,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 435,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 688,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190827NT4642",
    "dateOfPurchase": "2019-08-27 11:48:56",
    "extendedPrice": 9921.34,
    "customerKey": "STERWELC0850",
    "firstName": "Sterling",
    "lastName": "Welch",
    "phoneNumber": "+386-347-425-0850",
    "email": "swelch347@PLDT.com",
    "streetAddressOfBuilding": "6780 Big River Street",
    "city": "Pobegi",
    "stateProvince": null,
    "locality": null,
    "country": "SI",
    "postalCode": "6276",
    "latitude": "45.5394",
    "longitude": "13.7961",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 953,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 363,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 350,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160714TQ3018",
    "dateOfPurchase": "2016-07-14 11:48:56",
    "extendedPrice": 1331.31,
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
            "productKey": "muffin",
            "qtyPurchased": 669,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170311PA2803",
    "dateOfPurchase": "2017-03-11 11:48:56",
    "extendedPrice": 3996,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 400,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190511CQ6126",
    "dateOfPurchase": "2019-05-11 11:48:56",
    "extendedPrice": 2708.46,
    "customerKey": "LOUMASS5334",
    "firstName": "Lou",
    "lastName": "Massey",
    "phoneNumber": "+1-304-086-5334",
    "email": "lmassey304@NTT.com",
    "streetAddressOfBuilding": "1952 Little Bough Circle",
    "city": "Cincinnati",
    "stateProvince": "OH",
    "locality": "Hamilton",
    "country": "US",
    "postalCode": "45240",
    "latitude": "39.2851",
    "longitude": "-84.5288",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 249,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 637,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181119XW1484",
    "dateOfPurchase": "2018-11-19 11:48:56",
    "extendedPrice": 653.84,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 743,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190112DA0307",
    "dateOfPurchase": "2019-01-12 11:48:56",
    "extendedPrice": 5808.39,
    "customerKey": "ELLITHOM7844",
    "firstName": "Elliot",
    "lastName": "Thompson",
    "phoneNumber": "+91-192-926-7844",
    "email": "ethompso192@Telecom.com",
    "streetAddressOfBuilding": "9376 Winding Creek Way",
    "city": "Seminary",
    "stateProvince": "Amberpet",
    "locality": "Hyderabad",
    "country": "IN",
    "postalCode": "500013",
    "latitude": "17.3172",
    "longitude": "79.408",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 326,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 488,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 897,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190602TT4656",
    "dateOfPurchase": "2019-06-02 11:48:56",
    "extendedPrice": 3450.17,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 489,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 614,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181031HS3048",
    "dateOfPurchase": "2018-10-31 11:48:56",
    "extendedPrice": 1018.09,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 187,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 144,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180427DR9497",
    "dateOfPurchase": "2018-04-27 11:48:56",
    "extendedPrice": 14634.92,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 889,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 565,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 82,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 528,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 644,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191215CN3038",
    "dateOfPurchase": "2019-12-15 11:48:56",
    "extendedPrice": 5057.18,
    "customerKey": "ELVIHESS5906",
    "firstName": "Elvie",
    "lastName": "Hess",
    "phoneNumber": "+61-318-939-5906",
    "email": "ehess318@LGUplus.com",
    "streetAddressOfBuilding": "6407 Blue Hill Boulevard",
    "city": "Alexandra Bridge",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6288",
    "latitude": "-34.1742",
    "longitude": "115.2399",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 199,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 857,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 526,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160720FY8105",
    "dateOfPurchase": "2016-07-20 11:48:56",
    "extendedPrice": 6700.84,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 710,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 533,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 323,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180124QH6834",
    "dateOfPurchase": "2018-01-24 11:48:56",
    "extendedPrice": 30109.57,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 844,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 591,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190705PX9115",
    "dateOfPurchase": "2019-07-05 11:48:56",
    "extendedPrice": 1873.6100000000001,
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
            "productKey": "apple_pie",
            "qtyPurchased": 344,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 45,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170414AQ6134",
    "dateOfPurchase": "2017-04-14 11:48:56",
    "extendedPrice": 14113.840000000002,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 981,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 739,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 813,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 882,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180309EK3748",
    "dateOfPurchase": "2018-03-09 11:48:56",
    "extendedPrice": 2290.26,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 399,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 175,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190418RL0349",
    "dateOfPurchase": "2019-04-18 11:48:56",
    "extendedPrice": 28333.04,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 697,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 962,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 774,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 896,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181015NI6589",
    "dateOfPurchase": "2018-10-15 11:48:56",
    "extendedPrice": 15357.47,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 615,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 979,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 867,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 134,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 508,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180908TM8205",
    "dateOfPurchase": "2018-09-08 11:48:56",
    "extendedPrice": 4209.530000000001,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 256,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 791,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 350,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190708IS6242",
    "dateOfPurchase": "2019-07-08 11:48:56",
    "extendedPrice": 21283.850000000002,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 833,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 18,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 414,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160614GM7883",
    "dateOfPurchase": "2016-06-14 11:48:56",
    "extendedPrice": 12354.670000000002,
    "customerKey": "OSCAFRED6841",
    "firstName": "Oscar",
    "lastName": "Frederick",
    "phoneNumber": "+34-151-888-6841",
    "email": "ofrederi151@Telecom.com",
    "streetAddressOfBuilding": "578 Red Creek Road",
    "city": "Venta Valero",
    "stateProvince": "AN",
    "locality": "C\u00f3rdoba",
    "country": "ES",
    "postalCode": "14813",
    "latitude": "37.4071",
    "longitude": "-4.0109",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 37,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 130,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 937,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 329,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170718KN7627",
    "dateOfPurchase": "2017-07-18 11:48:56",
    "extendedPrice": 5487.150000000001,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 785,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190630IZ3671",
    "dateOfPurchase": "2019-06-30 11:48:56",
    "extendedPrice": 12660.42,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 873,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 202,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 233,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 700,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180704ME6492",
    "dateOfPurchase": "2018-07-04 11:48:56",
    "extendedPrice": 2998.38,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 462,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170501LB9095",
    "dateOfPurchase": "2017-05-01 11:48:56",
    "extendedPrice": 10224.34,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 12,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 266,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 15,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 656,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 573,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 294,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190311C1042",
    "dateOfPurchase": "2019-03-11 11:48:56",
    "extendedPrice": 4223.139999999999,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 823,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 737,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 6,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180826UD7634",
    "dateOfPurchase": "2018-08-26 11:48:56",
    "extendedPrice": 23307.62,
    "customerKey": "ROCCBOOT2514",
    "firstName": "Rocco",
    "lastName": "Booth",
    "phoneNumber": "+44-173-750-2514",
    "email": "rbooth173@UUnet.com",
    "streetAddressOfBuilding": "5186 Red Creek Ride",
    "city": "Bedford",
    "stateProvince": "England",
    "locality": "Bedfordshire",
    "country": "GB",
    "postalCode": "MK40",
    "latitude": "52.1346",
    "longitude": "-0.4663",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 458,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 900,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 844,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 836,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180228II3625",
    "dateOfPurchase": "2018-02-28 11:48:56",
    "extendedPrice": 9917.02,
    "customerKey": "PATRYODE9823",
    "firstName": "Patrina",
    "lastName": "Yoder",
    "phoneNumber": "+1-100-329-9823",
    "email": "pyoder100@CCI.com",
    "streetAddressOfBuilding": "2885 Short Tree Drive",
    "city": "Washington",
    "stateProvince": "DC",
    "locality": "District of Columbia",
    "country": "US",
    "postalCode": "20228",
    "latitude": "38.8951",
    "longitude": "-77.0364",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 652,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 239,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 130,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 994,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 133,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190506YE3576",
    "dateOfPurchase": "2019-05-06 11:48:56",
    "extendedPrice": 7992,
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
            "qtyPurchased": 800,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181129QF9734",
    "dateOfPurchase": "2018-11-29 11:48:56",
    "extendedPrice": 6225.26,
    "customerKey": "OSCAFRED6841",
    "firstName": "Oscar",
    "lastName": "Frederick",
    "phoneNumber": "+34-151-888-6841",
    "email": "ofrederi151@Telecom.com",
    "streetAddressOfBuilding": "578 Red Creek Road",
    "city": "Venta Valero",
    "stateProvince": "AN",
    "locality": "C\u00f3rdoba",
    "country": "ES",
    "postalCode": "14813",
    "latitude": "37.4071",
    "longitude": "-4.0109",
    "productsPurchased": [
        {
            "productKey": "apple_pie",
            "qtyPurchased": 67,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 652,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181025IW0633",
    "dateOfPurchase": "2018-10-25 11:48:56",
    "extendedPrice": 453.12,
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
    "transactionId": "20190517VK3643",
    "dateOfPurchase": "2019-05-17 11:48:56",
    "extendedPrice": 21028.85,
    "customerKey": "MARGCHAP7112",
    "firstName": "Marg",
    "lastName": "Chapman",
    "phoneNumber": "+1-142-751-7112",
    "email": "mchapman142@KTC.com",
    "streetAddressOfBuilding": "5660 Long Mountain Drive",
    "city": "Ottawa (Vanier)",
    "stateProvince": "ON",
    "locality": "Ottawa",
    "country": "CA",
    "postalCode": "K1L",
    "latitude": "45.44",
    "longitude": "-75.663",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 993,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 566,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 270,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 924,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171208GW0914",
    "dateOfPurchase": "2017-12-08 11:48:56",
    "extendedPrice": 10776.69,
    "customerKey": "ROCCBOOT2514",
    "firstName": "Rocco",
    "lastName": "Booth",
    "phoneNumber": "+44-173-750-2514",
    "email": "rbooth173@UUnet.com",
    "streetAddressOfBuilding": "5186 Red Creek Ride",
    "city": "Bedford",
    "stateProvince": "England",
    "locality": "Bedfordshire",
    "country": "GB",
    "postalCode": "MK40",
    "latitude": "52.1346",
    "longitude": "-0.4663",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 511,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 745,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 67,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 692,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 116,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170904ST7738",
    "dateOfPurchase": "2017-09-04 11:48:56",
    "extendedPrice": 11657.61,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 184,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 313,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190618KV4343",
    "dateOfPurchase": "2019-06-18 11:48:56",
    "extendedPrice": 9189.45,
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
            "qtyPurchased": 514,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 446,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 323,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 592,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161008OR7142",
    "dateOfPurchase": "2016-10-08 11:48:56",
    "extendedPrice": 6064.42,
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
            "productKey": "wedding_cake",
            "qtyPurchased": 7,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 880,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 157,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 129,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 585,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170626DC9734",
    "dateOfPurchase": "2017-06-26 11:48:56",
    "extendedPrice": 3742.92,
    "customerKey": "IKEADAM7878",
    "firstName": "Ike",
    "lastName": "Adams",
    "phoneNumber": "+44-112-840-7878",
    "email": "iadams112@GlasNET.com",
    "streetAddressOfBuilding": "9515 Blue Ditch Way",
    "city": "Long Preston",
    "stateProvince": "England",
    "locality": "North Yorkshire",
    "country": "GB",
    "postalCode": "BD23",
    "latitude": "54.0194",
    "longitude": "-2.2568",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 350,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 456,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 502,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190727GJ8015",
    "dateOfPurchase": "2019-07-27 11:48:56",
    "extendedPrice": 47919.38,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 307,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 688,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 572,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 787,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 408,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160722WP6424",
    "dateOfPurchase": "2016-07-22 11:48:56",
    "extendedPrice": 1079.77,
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
            "productKey": "muffin",
            "qtyPurchased": 463,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 180,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170508LB2492",
    "dateOfPurchase": "2017-05-08 11:48:56",
    "extendedPrice": 4695.3,
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
    "transactionId": "20190530PK5636",
    "dateOfPurchase": "2019-05-30 11:48:56",
    "extendedPrice": 19838.160000000003,
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
            "productKey": "muffin",
            "qtyPurchased": 447,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 254,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 806,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 291,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 217,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 119,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190223LQ6127",
    "dateOfPurchase": "2019-02-23 11:48:56",
    "extendedPrice": 1044.75,
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
            "qtyPurchased": 227,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 298,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170310ZD1002",
    "dateOfPurchase": "2017-03-10 11:48:56",
    "extendedPrice": 37198.82,
    "customerKey": "WENDPETE5831",
    "firstName": "Wendolyn",
    "lastName": "Peters",
    "phoneNumber": "+63-279-205-5831",
    "email": "wpeters279@Tata.com",
    "streetAddressOfBuilding": "2534 Red Mountain Ride",
    "city": "Polomolok",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "9504",
    "latitude": "6.2219",
    "longitude": "125.0603",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 560,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 983,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 901,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 438,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 736,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191215QL6915",
    "dateOfPurchase": "2019-12-15 11:48:56",
    "extendedPrice": 10883.37,
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
            "productKey": "muffin",
            "qtyPurchased": 41,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 487,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 840,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 895,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180418W3067",
    "dateOfPurchase": "2018-04-18 11:48:56",
    "extendedPrice": 1485.99,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 516,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 159,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170423VF9106",
    "dateOfPurchase": "2017-04-23 11:48:56",
    "extendedPrice": 4405.04,
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
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 800,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 569,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 687,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191013WE2407",
    "dateOfPurchase": "2019-10-13 11:48:56",
    "extendedPrice": 34296.46,
    "customerKey": "MORTRASM0853",
    "firstName": "Morton",
    "lastName": "Rasmussen",
    "phoneNumber": "+1-386-880-0853",
    "email": "mrasmuss386@Telus.com",
    "streetAddressOfBuilding": "7466 Little Woods Boulevard",
    "city": "North Jay",
    "stateProvince": "ME",
    "locality": "Franklin",
    "country": "US",
    "postalCode": "04262",
    "latitude": "44.5473",
    "longitude": "-70.2381",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 612,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 742,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171004OK9577",
    "dateOfPurchase": "2017-10-04 11:48:56",
    "extendedPrice": 6370.05,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 137,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 92,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 66,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190208ES4574",
    "dateOfPurchase": "2019-02-08 11:48:56",
    "extendedPrice": 8677.54,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 878,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 404,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 275,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 139,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191102QQ6016",
    "dateOfPurchase": "2019-11-02 11:48:56",
    "extendedPrice": 785.25,
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 225,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180219NA3774",
    "dateOfPurchase": "2018-02-19 11:48:56",
    "extendedPrice": 7509.660000000001,
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
            "qtyPurchased": 256,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 491,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 937,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170916XU1127",
    "dateOfPurchase": "2017-09-16 11:48:56",
    "extendedPrice": 656.12,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 188,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190425QT3141",
    "dateOfPurchase": "2019-04-25 11:48:56",
    "extendedPrice": 466.44000000000005,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 156,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171126QJ9614",
    "dateOfPurchase": "2017-11-26 11:48:56",
    "extendedPrice": 845.7900000000001,
    "customerKey": "ELVIHESS5906",
    "firstName": "Elvie",
    "lastName": "Hess",
    "phoneNumber": "+61-318-939-5906",
    "email": "ehess318@LGUplus.com",
    "streetAddressOfBuilding": "6407 Blue Hill Boulevard",
    "city": "Alexandra Bridge",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6288",
    "latitude": "-34.1742",
    "longitude": "115.2399",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 743,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 55,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170829DA0569",
    "dateOfPurchase": "2017-08-29 11:48:56",
    "extendedPrice": 31794.21,
    "customerKey": "ODILBROC4799",
    "firstName": "Odilia",
    "lastName": "Brock",
    "phoneNumber": "+44-276-739-4799",
    "email": "obrock276@Vodafone.com",
    "streetAddressOfBuilding": "4055 Short Bough Road",
    "city": "Leyland",
    "stateProvince": "England",
    "locality": "Lancashire",
    "country": "GB",
    "postalCode": "PR25",
    "latitude": "53.6979",
    "longitude": "-2.6876",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 600,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 75,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 154,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190729AS1440",
    "dateOfPurchase": "2019-07-29 11:48:56",
    "extendedPrice": 11927.649999999998,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 219,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 513,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 983,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170605JH8025",
    "dateOfPurchase": "2017-06-05 11:48:56",
    "extendedPrice": 8602.21,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 206,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 237,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 286,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181107UE4205",
    "dateOfPurchase": "2018-11-07 11:48:56",
    "extendedPrice": 10866.41,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 719,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 853,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 83,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 922,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 686,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 416,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190609GQ4248",
    "dateOfPurchase": "2019-06-09 11:48:56",
    "extendedPrice": 6634.88,
    "customerKey": "KYLESELL3321",
    "firstName": "Kylee",
    "lastName": "Sellers",
    "phoneNumber": "+1-110-662-3321",
    "email": "ksellers110@APICnet.com",
    "streetAddressOfBuilding": "4299 Long Ridge Boulevard",
    "city": "Austin",
    "stateProvince": "TX",
    "locality": "Travis",
    "country": "US",
    "postalCode": "78732",
    "latitude": "30.3752",
    "longitude": "-97.9007",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 309,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 822,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 643,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 29,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161202RH6773",
    "dateOfPurchase": "2016-12-02 11:48:56",
    "extendedPrice": 5276.120000000001,
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
            "productKey": "apple_pie",
            "qtyPurchased": 637,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 601,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180713KI8358",
    "dateOfPurchase": "2018-07-13 11:48:56",
    "extendedPrice": 34690.87,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 558,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 655,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191024YY6446",
    "dateOfPurchase": "2019-10-24 11:48:56",
    "extendedPrice": 4146.6900000000005,
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
            "productKey": "apple_pie",
            "qtyPurchased": 831,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170730IM3668",
    "dateOfPurchase": "2017-07-30 11:48:56",
    "extendedPrice": 3336.96,
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
            "qtyPurchased": 352,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 996,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180731VM5569",
    "dateOfPurchase": "2018-07-31 11:48:56",
    "extendedPrice": 19930.03,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 997,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190930BQ5900",
    "dateOfPurchase": "2019-09-30 11:48:56",
    "extendedPrice": 7799.43,
    "customerKey": "BARNPERS1289",
    "firstName": "Barney",
    "lastName": "Person",
    "phoneNumber": "+1-135-112-1289",
    "email": "bperson135@APICnet.com",
    "streetAddressOfBuilding": "1649 Short Bridge Circle",
    "city": "Moose Jaw West",
    "stateProvince": "SK",
    "locality": "Moose Jaw ",
    "country": "CA",
    "postalCode": "S6K",
    "latitude": "50.454",
    "longitude": "-105.6418",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 300,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 375,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 305,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 277,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190118ZO7595",
    "dateOfPurchase": "2019-01-18 11:48:56",
    "extendedPrice": 6825.58,
    "customerKey": "LOUMASS5334",
    "firstName": "Lou",
    "lastName": "Massey",
    "phoneNumber": "+1-304-086-5334",
    "email": "lmassey304@NTT.com",
    "streetAddressOfBuilding": "1952 Little Bough Circle",
    "city": "Cincinnati",
    "stateProvince": "OH",
    "locality": "Hamilton",
    "country": "US",
    "postalCode": "45240",
    "latitude": "39.2851",
    "longitude": "-84.5288",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 667,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 225,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160715GV5901",
    "dateOfPurchase": "2016-07-15 11:48:56",
    "extendedPrice": 12494.85,
    "customerKey": "MINHPATT9610",
    "firstName": "Minh",
    "lastName": "Patton",
    "phoneNumber": "+64-337-330-9610",
    "email": "mpatton337@APICnet.com",
    "streetAddressOfBuilding": "3569 Little Tree Ride",
    "city": "Whataroa",
    "stateProvince": "G3",
    "locality": "West Coast",
    "country": "NZ",
    "postalCode": "7857",
    "latitude": "-43.2833",
    "longitude": "170.4167",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 404,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 9,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 461,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 433,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 558,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190805UB1393",
    "dateOfPurchase": "2019-08-05 11:48:56",
    "extendedPrice": 2463.94,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 706,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171013JS9390",
    "dateOfPurchase": "2017-10-13 11:48:56",
    "extendedPrice": 10112.98,
    "customerKey": "LYNWBOOK9603",
    "firstName": "Lynwood",
    "lastName": "Booker",
    "phoneNumber": "+354-355-215-9603",
    "email": "lbooker355@Vodafone.com",
    "streetAddressOfBuilding": "7825 Little Stream Drive",
    "city": "Bl\u00f6ndu\u00f3si",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "540",
    "latitude": "65.6593",
    "longitude": "-20.2808",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 650,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 933,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 361,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 966,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 566,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180607AV5695",
    "dateOfPurchase": "2018-06-07 11:48:56",
    "extendedPrice": 3047.61,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 339,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190317LX1830",
    "dateOfPurchase": "2019-03-17 11:48:56",
    "extendedPrice": 34876.69,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 726,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 340,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 497,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 168,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170503IL1209",
    "dateOfPurchase": "2017-05-03 11:48:56",
    "extendedPrice": 13472.690000000002,
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
            "qtyPurchased": 122,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 205,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 879,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 879,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 856,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180109PY6851",
    "dateOfPurchase": "2018-01-09 11:48:56",
    "extendedPrice": 5261.43,
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
            "qtyPurchased": 512,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 645,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190418RT2469",
    "dateOfPurchase": "2019-04-18 11:48:56",
    "extendedPrice": 4191.97,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 780,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 724,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 449,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170220QX0386",
    "dateOfPurchase": "2017-02-20 11:48:56",
    "extendedPrice": 27562.25,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 525,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 644,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 721,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 336,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
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
    "transactionId": "20170509QZ2958",
    "dateOfPurchase": "2017-05-09 11:48:56",
    "extendedPrice": 6469.38,
    "customerKey": "ABELROY2989",
    "firstName": "Abel",
    "lastName": "Roy",
    "phoneNumber": "+356-187-940-2989",
    "email": "aroy187@Relcom.com",
    "streetAddressOfBuilding": "8007 Winding Mound Drive",
    "city": "Kirkop",
    "stateProvince": "Kirkop",
    "locality": "Kirkop",
    "country": "MT",
    "postalCode": "KKP",
    "latitude": "35.8442",
    "longitude": "14.4842",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 294,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 668,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 431,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 474,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 265,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190526QL3319",
    "dateOfPurchase": "2019-05-26 11:48:56",
    "extendedPrice": 26934.42,
    "customerKey": "LYNWBOOK9603",
    "firstName": "Lynwood",
    "lastName": "Booker",
    "phoneNumber": "+354-355-215-9603",
    "email": "lbooker355@Vodafone.com",
    "streetAddressOfBuilding": "7825 Little Stream Drive",
    "city": "Bl\u00f6ndu\u00f3si",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "540",
    "latitude": "65.6593",
    "longitude": "-20.2808",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 873,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 525,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181204YH1229",
    "dateOfPurchase": "2018-12-04 11:48:56",
    "extendedPrice": 5954.81,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 706,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 47,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 317,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 73,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 276,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161007ZS3419",
    "dateOfPurchase": "2016-10-07 11:48:56",
    "extendedPrice": 16153.650000000001,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 232,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 379,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 881,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 91,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 152,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191213KT5255",
    "dateOfPurchase": "2019-12-13 11:48:56",
    "extendedPrice": 18210.31,
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
            "productKey": "apple_pie",
            "qtyPurchased": 959,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 53,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 651,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 879,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 577,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180306Y1470",
    "dateOfPurchase": "2018-03-06 11:48:56",
    "extendedPrice": 29727.190000000006,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 619,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
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
            "productKey": "layer_cake",
            "qtyPurchased": 996,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 315,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 119,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 378,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170204NB9745",
    "dateOfPurchase": "2017-02-04 11:48:56",
    "extendedPrice": 565.16,
    "customerKey": "VIDAHURL6027",
    "firstName": "Vida",
    "lastName": "Hurley",
    "phoneNumber": "+46-199-655-6027",
    "email": "vhurley199@AlgoNet.com",
    "streetAddressOfBuilding": "80 Blue Tree Road",
    "city": "Lidk\u00f6ping",
    "stateProvince": "O",
    "locality": "Lidk\u00f6ping",
    "country": "SE",
    "postalCode": "531 57",
    "latitude": "58.5052",
    "longitude": "13.1577",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 284,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190815EF0973",
    "dateOfPurchase": "2019-08-15 11:48:56",
    "extendedPrice": 56781.700000000004,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 29,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 723,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 735,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 802,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 803,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 585,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160929KP8106",
    "dateOfPurchase": "2016-09-29 11:48:56",
    "extendedPrice": 37203.82,
    "customerKey": "SHANMACK9021",
    "firstName": "Shanae",
    "lastName": "Mack",
    "phoneNumber": "+63-387-779-9021",
    "email": "smack387@KTC.com",
    "streetAddressOfBuilding": "4769 Red Gully Avenue",
    "city": "Pila",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "4010",
    "latitude": "14.2331",
    "longitude": "121.3639",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 823,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 695,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160823IZ1141",
    "dateOfPurchase": "2016-08-23 11:48:56",
    "extendedPrice": 14100.97,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 733,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 271,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 525,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 524,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190609HV1746",
    "dateOfPurchase": "2019-06-09 11:48:56",
    "extendedPrice": 17385.16,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 401,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 970,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 513,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 731,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 223,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 464,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160715VH1583",
    "dateOfPurchase": "2016-07-15 11:48:56",
    "extendedPrice": 3823.7500000000005,
    "customerKey": "PAMEBUCK1021",
    "firstName": "Pamela",
    "lastName": "Buck",
    "phoneNumber": "+92-319-981-1021",
    "email": "pbuck319@CCS.com",
    "streetAddressOfBuilding": "2025 Long Mound Ride",
    "city": "Samli Dheri",
    "stateProvince": "NWFP Peshawar",
    "locality": "NWFP Peshawar",
    "country": "PK",
    "postalCode": "22181",
    "latitude": "34.2858",
    "longitude": "73.3933",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 526,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 963,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180724JR8513",
    "dateOfPurchase": "2018-07-24 11:48:56",
    "extendedPrice": 10763.11,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 408,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 525,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 743,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 934,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 759,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191127EO7716",
    "dateOfPurchase": "2019-11-27 11:48:56",
    "extendedPrice": 1092.57,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 59,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 907,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180204SF9780",
    "dateOfPurchase": "2018-02-04 11:48:56",
    "extendedPrice": 1979.38,
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
            "productKey": "layer_cake",
            "qtyPurchased": 662,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180109EL3729",
    "dateOfPurchase": "2018-01-09 11:48:56",
    "extendedPrice": 7715.51,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 68,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 439,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 680,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 41,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 671,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191106DB4426",
    "dateOfPurchase": "2019-11-06 11:48:56",
    "extendedPrice": 38525.19,
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
            "productKey": "muffin",
            "qtyPurchased": 954,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 115,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 712,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170614PF2094",
    "dateOfPurchase": "2017-06-14 11:48:56",
    "extendedPrice": 1348.1599999999999,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 747,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 785,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160825ME6881",
    "dateOfPurchase": "2016-08-25 11:48:56",
    "extendedPrice": 6671.84,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 652,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 454,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 310,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190909FQ9671",
    "dateOfPurchase": "2019-09-09 11:48:56",
    "extendedPrice": 12209.920000000002,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 626,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 583,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 308,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 355,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 323,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160618QU9298",
    "dateOfPurchase": "2016-06-18 11:48:56",
    "extendedPrice": 29200.100000000002,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 575,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 141,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 915,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 576,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 548,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180304YY8382",
    "dateOfPurchase": "2018-03-04 11:48:56",
    "extendedPrice": 51542.72,
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
            "productKey": "wedding_cake",
            "qtyPurchased": 980,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 133,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 465,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191008KG2946",
    "dateOfPurchase": "2019-10-08 11:48:56",
    "extendedPrice": 3898.48,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 276,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 201,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 151,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 82,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 240,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171002LY8421",
    "dateOfPurchase": "2017-10-02 11:48:56",
    "extendedPrice": 15823.96,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 124,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 160,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 585,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 668,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 954,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 453,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170317IQ1068",
    "dateOfPurchase": "2017-03-17 11:48:56",
    "extendedPrice": 4220.9,
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
            "qtyPurchased": 750,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 160,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191230SR6030",
    "dateOfPurchase": "2019-12-30 11:48:56",
    "extendedPrice": 11900.85,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 713,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 845,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 807,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 876,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 284,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160817ON2694",
    "dateOfPurchase": "2016-08-17 11:48:56",
    "extendedPrice": 28138.120000000003,
    "customerKey": "IKEVU4860",
    "firstName": "Ike",
    "lastName": "Vu",
    "phoneNumber": "+1340-385-505-4860",
    "email": "ivu385@Telstra.com",
    "streetAddressOfBuilding": "7683 Red Bridge Road",
    "city": "St John",
    "stateProvince": "St. John",
    "locality": "St. John",
    "country": "VI",
    "postalCode": "00830",
    "latitude": "18.3282",
    "longitude": "-64.7407",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 184,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 469,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 395,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 962,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 828,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160930CG1585",
    "dateOfPurchase": "2016-09-30 11:48:56",
    "extendedPrice": 1567.3100000000002,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 36,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 443,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191222ZK1150",
    "dateOfPurchase": "2019-12-22 11:48:56",
    "extendedPrice": 8545.75,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 318,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 104,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 79,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 644,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 80,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170601TE8217",
    "dateOfPurchase": "2017-06-01 11:48:56",
    "extendedPrice": 36210.4,
    "customerKey": "MYRLVALE0225",
    "firstName": "Myrl",
    "lastName": "Valenzuela",
    "phoneNumber": "+39-213-122-0225",
    "email": "mvalenzu213@ICom.com",
    "streetAddressOfBuilding": "8813 Winding Bend Ride",
    "city": "San Paolo Di Noto",
    "stateProvince": "SC",
    "locality": "Siracusa",
    "country": "IT",
    "postalCode": "96017",
    "latitude": "36.8388",
    "longitude": "15.0259",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 703,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 357,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181119JF8018",
    "dateOfPurchase": "2018-11-19 11:48:56",
    "extendedPrice": 2997.9100000000003,
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 859,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191204KK5624",
    "dateOfPurchase": "2019-12-04 11:48:56",
    "extendedPrice": 3674.0299999999997,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 181,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 16,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160701XC3136",
    "dateOfPurchase": "2016-07-01 11:48:56",
    "extendedPrice": 6328.85,
    "customerKey": "CLAIGATE7723",
    "firstName": "Clair",
    "lastName": "Gates",
    "phoneNumber": "+91-302-265-7723",
    "email": "cgates302@WorldNet.com",
    "streetAddressOfBuilding": "5863 Big Creek Drive",
    "city": "Saryanj",
    "stateProvince": "Arki",
    "locality": "Solan",
    "country": "IN",
    "postalCode": "173235",
    "latitude": "31.2838",
    "longitude": "77.1229",
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 408,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 276,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170521XY9405",
    "dateOfPurchase": "2017-05-21 11:48:56",
    "extendedPrice": 3598.1900000000005,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 410,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 202,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 419,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190404XY0193",
    "dateOfPurchase": "2019-04-04 11:48:56",
    "extendedPrice": 19094.430000000004,
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
            "productKey": "apple_pie",
            "qtyPurchased": 722,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 624,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 234,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 658,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 162,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190109AR0683",
    "dateOfPurchase": "2019-01-09 11:48:56",
    "extendedPrice": 8431.210000000001,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 692,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 261,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 303,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 173,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181204NI2638",
    "dateOfPurchase": "2018-12-04 11:48:56",
    "extendedPrice": 164.60999999999999,
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
            "qtyPurchased": 279,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191001JB8460",
    "dateOfPurchase": "2019-10-01 11:48:56",
    "extendedPrice": 23310.2,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 991,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 805,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 376,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 857,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 777,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 484,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170408QU8783",
    "dateOfPurchase": "2017-04-08 11:48:56",
    "extendedPrice": 47218.84,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 499,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 857,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 498,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 767,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 765,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180510EL5045",
    "dateOfPurchase": "2018-05-10 11:48:56",
    "extendedPrice": 5958.710000000001,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 239,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 526,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 548,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 44,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 121,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 477,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191020KO2787",
    "dateOfPurchase": "2019-10-20 11:48:56",
    "extendedPrice": 8128.31,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 954,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 965,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161201SH5622",
    "dateOfPurchase": "2016-12-01 11:48:56",
    "extendedPrice": 8521.24,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 122,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 157,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 570,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
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
            "productKey": "carrot_cake",
            "qtyPurchased": 191,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 912,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171217J9065",
    "dateOfPurchase": "2017-12-17 11:48:56",
    "extendedPrice": 19883.68,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 318,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 394,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190527O6800",
    "dateOfPurchase": "2019-05-27 11:48:56",
    "extendedPrice": 6080.52,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 508,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 336,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 299,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 655,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180428AW2216",
    "dateOfPurchase": "2018-04-28 11:48:56",
    "extendedPrice": 5154.02,
    "customerKey": "ELVIHESS5906",
    "firstName": "Elvie",
    "lastName": "Hess",
    "phoneNumber": "+61-318-939-5906",
    "email": "ehess318@LGUplus.com",
    "streetAddressOfBuilding": "6407 Blue Hill Boulevard",
    "city": "Alexandra Bridge",
    "stateProvince": "WA",
    "locality": "KALGOORLIE",
    "country": "AU",
    "postalCode": "6288",
    "latitude": "-34.1742",
    "longitude": "115.2399",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 325,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 773,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170803XT5731",
    "dateOfPurchase": "2017-08-03 11:48:56",
    "extendedPrice": 4083.3,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 323,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 847,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190701KZ7184",
    "dateOfPurchase": "2019-07-01 11:48:56",
    "extendedPrice": 660.62,
    "customerKey": "ABELROY2989",
    "firstName": "Abel",
    "lastName": "Roy",
    "phoneNumber": "+356-187-940-2989",
    "email": "aroy187@Relcom.com",
    "streetAddressOfBuilding": "8007 Winding Mound Drive",
    "city": "Kirkop",
    "stateProvince": "Kirkop",
    "locality": "Kirkop",
    "country": "MT",
    "postalCode": "KKP",
    "latitude": "35.8442",
    "longitude": "14.4842",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 986,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181216VD2844",
    "dateOfPurchase": "2018-12-16 11:48:56",
    "extendedPrice": 25075.570000000003,
    "customerKey": "SHANMACK9021",
    "firstName": "Shanae",
    "lastName": "Mack",
    "phoneNumber": "+63-387-779-9021",
    "email": "smack387@KTC.com",
    "streetAddressOfBuilding": "4769 Red Gully Avenue",
    "city": "Pila",
    "stateProvince": null,
    "locality": null,
    "country": "PH",
    "postalCode": "4010",
    "latitude": "14.2331",
    "longitude": "121.3639",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 898,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 440,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 643,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 545,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 967,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170919FD8643",
    "dateOfPurchase": "2017-09-19 11:48:56",
    "extendedPrice": 1278.72,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 128,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190422QT8390",
    "dateOfPurchase": "2019-04-22 11:48:56",
    "extendedPrice": 6317.9400000000005,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 241,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 993,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 194,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 164,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 711,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 713,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161215BL2083",
    "dateOfPurchase": "2016-12-15 11:48:56",
    "extendedPrice": 2094.46,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 162,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 19,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 767,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 82,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170502HM6965",
    "dateOfPurchase": "2017-05-02 11:48:56",
    "extendedPrice": 9119.6,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 871,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 619,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190718SS1408",
    "dateOfPurchase": "2019-07-18 11:48:56",
    "extendedPrice": 3007.5,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 261,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 339,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180820IP7346",
    "dateOfPurchase": "2018-08-20 11:48:56",
    "extendedPrice": 11784.14,
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
            "productKey": "torta_cake",
            "qtyPurchased": 250,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 773,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 175,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 638,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181020GH3055",
    "dateOfPurchase": "2018-10-20 11:48:56",
    "extendedPrice": 1310.3600000000001,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 164,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190306PC0311",
    "dateOfPurchase": "2019-03-06 11:48:56",
    "extendedPrice": 7802.460000000001,
    "customerKey": "OSCAFRED6841",
    "firstName": "Oscar",
    "lastName": "Frederick",
    "phoneNumber": "+34-151-888-6841",
    "email": "ofrederi151@Telecom.com",
    "streetAddressOfBuilding": "578 Red Creek Road",
    "city": "Venta Valero",
    "stateProvince": "AN",
    "locality": "C\u00f3rdoba",
    "country": "ES",
    "postalCode": "14813",
    "latitude": "37.4071",
    "longitude": "-4.0109",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 630,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 284,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 959,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 943,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170819UK7641",
    "dateOfPurchase": "2017-08-19 11:48:56",
    "extendedPrice": 17798.94,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 684,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 331,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 348,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 898,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 745,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170111Y3873",
    "dateOfPurchase": "2017-01-11 11:48:56",
    "extendedPrice": 13883.98,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 286,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 596,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 713,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 758,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 297,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191022KB8908",
    "dateOfPurchase": "2019-10-22 11:48:56",
    "extendedPrice": 4362.41,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 282,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 677,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180526LI9653",
    "dateOfPurchase": "2018-05-26 11:48:56",
    "extendedPrice": 5645.08,
    "customerKey": "PAULWEIS3249",
    "firstName": "Paul",
    "lastName": "Weiss",
    "phoneNumber": "+61-396-352-3249",
    "email": "pweiss396@Bifty.com",
    "streetAddressOfBuilding": "5351 Blue Bend Boulevard",
    "city": "Altona North",
    "stateProvince": "VIC",
    "locality": "FOOTSCRAY",
    "country": "AU",
    "postalCode": "3025",
    "latitude": "-37.8349",
    "longitude": "144.8474",
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 456,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 920,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181115KM5082",
    "dateOfPurchase": "2018-11-15 11:48:56",
    "extendedPrice": 4859.820000000001,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 688,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 530,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190911AW7368",
    "dateOfPurchase": "2019-09-11 11:48:56",
    "extendedPrice": 172.97,
    "customerKey": "SHAKWONG7880",
    "firstName": "Shakita",
    "lastName": "Wong",
    "phoneNumber": "+1441-323-976-7880",
    "email": "swong323@TT.com",
    "streetAddressOfBuilding": "2702 Red Gulch Street",
    "city": "Pembroke",
    "stateProvince": "Pembroke Parish",
    "locality": "Pembroke Parish",
    "country": "BM",
    "postalCode": "HM 14",
    "latitude": "32.3002",
    "longitude": "-64.792",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 353,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180505Y2981",
    "dateOfPurchase": "2018-05-05 11:48:56",
    "extendedPrice": 7082.09,
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
            "productKey": "layer_cake",
            "qtyPurchased": 423,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 340,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 928,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171222YR5841",
    "dateOfPurchase": "2017-12-22 11:48:56",
    "extendedPrice": 4888.17,
    "customerKey": "MARGCHAP7112",
    "firstName": "Marg",
    "lastName": "Chapman",
    "phoneNumber": "+1-142-751-7112",
    "email": "mchapman142@KTC.com",
    "streetAddressOfBuilding": "5660 Long Mountain Drive",
    "city": "Ottawa (Vanier)",
    "stateProvince": "ON",
    "locality": "Ottawa",
    "country": "CA",
    "postalCode": "K1L",
    "latitude": "45.44",
    "longitude": "-75.663",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 20,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 326,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 537,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190720IV4106",
    "dateOfPurchase": "2019-07-20 11:48:56",
    "extendedPrice": 3227.4500000000003,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 41,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 614,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161007WC8840",
    "dateOfPurchase": "2016-10-07 11:48:56",
    "extendedPrice": 3109.53,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 215,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 167,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 353,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 482,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170218TZ3791",
    "dateOfPurchase": "2017-02-18 11:48:56",
    "extendedPrice": 4626.6900000000005,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 283,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 439,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 560,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 378,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 241,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190803PF1622",
    "dateOfPurchase": "2019-08-03 11:48:56",
    "extendedPrice": 6698.74,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 187,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 458,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 804,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 169,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170124SZ5953",
    "dateOfPurchase": "2017-01-24 11:48:56",
    "extendedPrice": 7263.61,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 840,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 755,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 514,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 852,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 643,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 122,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180120OQ2483",
    "dateOfPurchase": "2018-01-20 11:48:56",
    "extendedPrice": 4725.27,
    "customerKey": "DALLCHAN7054",
    "firstName": "Dallas",
    "lastName": "Chang",
    "phoneNumber": "+91-154-545-7054",
    "email": "dchang154@GlasNET.com",
    "streetAddressOfBuilding": "2155 Green Canyon Way",
    "city": "Achankulam",
    "stateProvince": "Sivakasi",
    "locality": "Virudhunagar",
    "country": "IN",
    "postalCode": "626141",
    "latitude": "10.282",
    "longitude": "79.3122",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 473,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190604FY0790",
    "dateOfPurchase": "2019-06-04 11:48:56",
    "extendedPrice": 4340.47,
    "customerKey": "CARLBEST9197",
    "firstName": "Carlo",
    "lastName": "Best",
    "phoneNumber": "+1-226-315-9197",
    "email": "cbest226@Zain.com",
    "streetAddressOfBuilding": "9892 Winding Creek Road",
    "city": "Delta East",
    "stateProvince": "BC",
    "locality": "Delta",
    "country": "CA",
    "postalCode": "V4E",
    "latitude": "49.1197",
    "longitude": "-122.9056",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 553,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 2,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 148,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180102TH6771",
    "dateOfPurchase": "2018-01-02 11:48:56",
    "extendedPrice": 5195.31,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 41,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 618,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 239,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 271,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 455,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 169,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170819HC2623",
    "dateOfPurchase": "2017-08-19 11:48:56",
    "extendedPrice": 4261.8,
    "customerKey": "INEZJENN8173",
    "firstName": "Inez",
    "lastName": "Jennings",
    "phoneNumber": "+1-328-224-8173",
    "email": "ijenning328@Telus.com",
    "streetAddressOfBuilding": "8795 Winding Stream Boulevard",
    "city": "Morristown",
    "stateProvince": "OH",
    "locality": "Belmont",
    "country": "US",
    "postalCode": "43759",
    "latitude": "40.0631",
    "longitude": "-81.0743",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 393,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 801,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 678,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 498,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191027SH6661",
    "dateOfPurchase": "2019-10-27 11:48:56",
    "extendedPrice": 22922.479999999996,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 194,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 98,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 915,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 846,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 749,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170110OT7340",
    "dateOfPurchase": "2017-01-10 11:48:56",
    "extendedPrice": 5215.3099999999995,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 879,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 590,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 600,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180408QH1203",
    "dateOfPurchase": "2018-04-08 11:48:56",
    "extendedPrice": 470.89,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 961,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190723Q7903",
    "dateOfPurchase": "2019-07-23 11:48:56",
    "extendedPrice": 3567.8500000000004,
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
    "transactionId": "20170929XX0724",
    "dateOfPurchase": "2017-09-29 11:48:56",
    "extendedPrice": 6642.610000000001,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 513,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 995,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 191,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 378,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180211BL5132",
    "dateOfPurchase": "2018-02-11 11:48:56",
    "extendedPrice": 20416.520000000004,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 639,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 580,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 295,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 878,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 669,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 737,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190606QO8605",
    "dateOfPurchase": "2019-06-06 11:48:56",
    "extendedPrice": 7567.799999999999,
    "customerKey": "HAROLIM5260",
    "firstName": "Harold",
    "lastName": "Lim",
    "phoneNumber": "+44-246-494-5260",
    "email": "hlim246@MaxComm.com",
    "streetAddressOfBuilding": "7994 Long River Way",
    "city": "Upper Arncott",
    "stateProvince": "England",
    "locality": "Oxfordshire",
    "country": "GB",
    "postalCode": "OX6",
    "latitude": "51.9152",
    "longitude": "-1.184",
    "productsPurchased": [
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 697,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 373,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160625TQ1007",
    "dateOfPurchase": "2016-06-25 11:48:56",
    "extendedPrice": 16880.68,
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
            "qtyPurchased": 866,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 557,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 757,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 352,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170920GB1091",
    "dateOfPurchase": "2017-09-20 11:48:56",
    "extendedPrice": 5238.139999999999,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 316,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 325,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 367,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 670,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 554,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 260,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191111KW6496",
    "dateOfPurchase": "2019-11-11 11:48:56",
    "extendedPrice": 10329.07,
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
            "productKey": "layer_cake",
            "qtyPurchased": 582,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 57,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 744,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 908,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 752,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180113SL0785",
    "dateOfPurchase": "2018-01-13 11:48:56",
    "extendedPrice": 13678.7,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 715,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 652,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 163,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170511LN7872",
    "dateOfPurchase": "2017-05-11 11:48:56",
    "extendedPrice": 1651.1,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 242,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 779,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190829RO2214",
    "dateOfPurchase": "2019-08-29 11:48:56",
    "extendedPrice": 25620.82,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 430,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 614,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 532,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 487,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 275,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180816KM7969",
    "dateOfPurchase": "2018-08-16 11:48:56",
    "extendedPrice": 669.68,
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
            "qtyPurchased": 761,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171108OT8872",
    "dateOfPurchase": "2017-11-08 11:48:56",
    "extendedPrice": 7027.2,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 79,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 751,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190402TT8125",
    "dateOfPurchase": "2019-04-02 11:48:56",
    "extendedPrice": 18104.649999999998,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 406,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 770,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 155,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160919HV1548",
    "dateOfPurchase": "2016-09-19 11:48:56",
    "extendedPrice": 1633.3200000000002,
    "customerKey": "LYNWBOOK9603",
    "firstName": "Lynwood",
    "lastName": "Booker",
    "phoneNumber": "+354-355-215-9603",
    "email": "lbooker355@Vodafone.com",
    "streetAddressOfBuilding": "7825 Little Stream Drive",
    "city": "Bl\u00f6ndu\u00f3si",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "540",
    "latitude": "65.6593",
    "longitude": "-20.2808",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 468,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161228ZY1508",
    "dateOfPurchase": "2016-12-28 11:48:56",
    "extendedPrice": 25586.99,
    "customerKey": "KIRBHARD8140",
    "firstName": "Kirby",
    "lastName": "Hardin",
    "phoneNumber": "+354-263-405-8140",
    "email": "khardin263@TT.com",
    "streetAddressOfBuilding": "1255 Winding Tree Circle",
    "city": "\u00deorl\u00e1ksh\u00f6fn",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "815",
    "latitude": "63.8559",
    "longitude": "-21.3834",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 87,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 405,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 49,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 376,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 684,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190824MM7937",
    "dateOfPurchase": "2019-08-24 11:48:56",
    "extendedPrice": 7637.06,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 47,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 197,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 354,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 816,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170405LT2286",
    "dateOfPurchase": "2017-04-05 11:48:56",
    "extendedPrice": 5120.610000000001,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 789,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171212JD9094",
    "dateOfPurchase": "2017-12-12 11:48:56",
    "extendedPrice": 1884.8200000000002,
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
            "productKey": "muffin",
            "qtyPurchased": 199,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 649,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 302,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190605RD9056",
    "dateOfPurchase": "2019-06-05 11:48:56",
    "extendedPrice": 3263.25,
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
            "productKey": "apple_pie",
            "qtyPurchased": 526,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 953,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170225OX8376",
    "dateOfPurchase": "2017-02-25 11:48:56",
    "extendedPrice": 31556.74,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 856,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 912,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 78,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 857,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 95,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170410OY7539",
    "dateOfPurchase": "2017-04-10 11:48:56",
    "extendedPrice": 10439.990000000002,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 942,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 440,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 416,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 203,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190325SO4946",
    "dateOfPurchase": "2019-03-25 11:48:56",
    "extendedPrice": 14654.89,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 185,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 670,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 356,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180708CM5083",
    "dateOfPurchase": "2018-07-08 11:48:56",
    "extendedPrice": 4064.9500000000007,
    "customerKey": "INEZJENN8173",
    "firstName": "Inez",
    "lastName": "Jennings",
    "phoneNumber": "+1-328-224-8173",
    "email": "ijenning328@Telus.com",
    "streetAddressOfBuilding": "8795 Winding Stream Boulevard",
    "city": "Morristown",
    "stateProvince": "OH",
    "locality": "Belmont",
    "country": "US",
    "postalCode": "43759",
    "latitude": "40.0631",
    "longitude": "-81.0743",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 265,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 248,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 492,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171120KD1963",
    "dateOfPurchase": "2017-11-20 11:48:56",
    "extendedPrice": 7437.370000000001,
    "customerKey": "ORLACARP4251",
    "firstName": "Orlando",
    "lastName": "Carpenter",
    "phoneNumber": "+92-127-449-4251",
    "email": "ocarpent127@GlasNET.com",
    "streetAddressOfBuilding": "4881 Little Creek Ride",
    "city": "Mandero Jopar",
    "stateProvince": "Hyderabad",
    "locality": "Hyderabad",
    "country": "PK",
    "postalCode": "69101",
    "latitude": "25.3222",
    "longitude": "69.8035",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 244,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 769,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 228,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 406,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 184,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190322DQ4292",
    "dateOfPurchase": "2019-03-22 11:48:56",
    "extendedPrice": 11942.17,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 750,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 509,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 830,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 264,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180414NG2778",
    "dateOfPurchase": "2018-04-14 11:48:56",
    "extendedPrice": 4765.45,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 955,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170719NX0846",
    "dateOfPurchase": "2017-07-19 11:48:56",
    "extendedPrice": 3772.1400000000003,
    "customerKey": "DALLCHAN7054",
    "firstName": "Dallas",
    "lastName": "Chang",
    "phoneNumber": "+91-154-545-7054",
    "email": "dchang154@GlasNET.com",
    "streetAddressOfBuilding": "2155 Green Canyon Way",
    "city": "Achankulam",
    "stateProvince": "Sivakasi",
    "locality": "Virudhunagar",
    "country": "IN",
    "postalCode": "626141",
    "latitude": "10.282",
    "longitude": "79.3122",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 478,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 334,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 74,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190604RD5696",
    "dateOfPurchase": "2019-06-04 11:48:56",
    "extendedPrice": 30.57,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 31,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 20,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180504KC5125",
    "dateOfPurchase": "2018-05-04 11:48:56",
    "extendedPrice": 432.76000000000005,
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 124,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181227IE2093",
    "dateOfPurchase": "2018-12-27 11:48:56",
    "extendedPrice": 1880.65,
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
            "productKey": "muffin",
            "qtyPurchased": 801,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 152,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 402,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190419PI5565",
    "dateOfPurchase": "2019-04-19 11:48:56",
    "extendedPrice": 66632.81,
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
            "productKey": "wedding_cake",
            "qtyPurchased": 941,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 410,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 968,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170228QL1720",
    "dateOfPurchase": "2017-02-28 11:48:56",
    "extendedPrice": 27962.71,
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
            "qtyPurchased": 844,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 266,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 499,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 198,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 334,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 888,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170913M7502",
    "dateOfPurchase": "2017-09-13 11:48:56",
    "extendedPrice": 8254.92,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 858,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 247,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 559,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 277,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190706EL6118",
    "dateOfPurchase": "2019-07-06 11:48:56",
    "extendedPrice": 5413.610000000001,
    "customerKey": "ERICGALV5308",
    "firstName": "Erica",
    "lastName": "Galvan",
    "phoneNumber": "+61-348-907-5308",
    "email": "egalvan348@Tata.com",
    "streetAddressOfBuilding": "5045 Short Woods Street",
    "city": "Whiteman",
    "stateProvince": "WA",
    "locality": "STIRLING",
    "country": "AU",
    "postalCode": "6068",
    "latitude": "-31.8245",
    "longitude": "115.9416",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 223,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 26,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 228,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 730,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181018GL8725",
    "dateOfPurchase": "2018-10-18 11:48:56",
    "extendedPrice": 9607.14,
    "customerKey": "PORTGOOD9044",
    "firstName": "Porter",
    "lastName": "Goodman",
    "phoneNumber": "+389-357-582-9044",
    "email": "pgoodman357@Telkom.com",
    "streetAddressOfBuilding": "8868 Blue Bridge Avenue",
    "city": "Dobroste",
    "stateProvince": null,
    "locality": null,
    "country": "MK",
    "postalCode": "1211",
    "latitude": "42.1033",
    "longitude": "21.0778",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 301,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 72,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 961,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 192,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 510,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170415XV6385",
    "dateOfPurchase": "2017-04-15 11:48:57",
    "extendedPrice": 32245.510000000002,
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
            "qtyPurchased": 439,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 610,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190725DS8324",
    "dateOfPurchase": "2019-07-25 11:48:57",
    "extendedPrice": 13663.300000000001,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 999,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 777,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 619,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 962,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 353,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180929VX2159",
    "dateOfPurchase": "2018-09-29 11:48:57",
    "extendedPrice": 19197.350000000002,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 562,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 232,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 640,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 463,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 448,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180402DV4031",
    "dateOfPurchase": "2018-04-02 11:48:57",
    "extendedPrice": 2921.13,
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
            "qtyPurchased": 837,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190530NW4427",
    "dateOfPurchase": "2019-05-30 11:48:57",
    "extendedPrice": 5694.33,
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
            "qtyPurchased": 625,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 506,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 325,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 461,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171018VO5076",
    "dateOfPurchase": "2017-10-18 11:48:57",
    "extendedPrice": 9274.6,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 921,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 468,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 363,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 388,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160923EC1077",
    "dateOfPurchase": "2016-09-23 11:48:57",
    "extendedPrice": 767.8000000000001,
    "customerKey": "MAMMSMAL0234",
    "firstName": "Mammie",
    "lastName": "Small",
    "phoneNumber": "+213-311-606-0234",
    "email": "msmall311@GreenNet.com",
    "streetAddressOfBuilding": "5739 Winding Gully Boulevard",
    "city": "Ras Bouira",
    "stateProvince": "Bouira",
    "locality": "Bouira",
    "country": "DZ",
    "postalCode": "10000",
    "latitude": "36.3536",
    "longitude": "3.8415",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 220,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190908PB5724",
    "dateOfPurchase": "2019-09-08 11:48:57",
    "extendedPrice": 11591.310000000001,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 866,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 453,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161003K3630",
    "dateOfPurchase": "2016-10-03 11:48:57",
    "extendedPrice": 3202.7200000000003,
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 557,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 421,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181119RV0533",
    "dateOfPurchase": "2018-11-19 11:48:57",
    "extendedPrice": 40049.58,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 679,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 713,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191230BU5177",
    "dateOfPurchase": "2019-12-30 11:48:57",
    "extendedPrice": 12389.22,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 162,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 916,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170222ZE9411",
    "dateOfPurchase": "2017-02-22 11:48:57",
    "extendedPrice": 16847.21,
    "customerKey": "LOUMASS5334",
    "firstName": "Lou",
    "lastName": "Massey",
    "phoneNumber": "+1-304-086-5334",
    "email": "lmassey304@NTT.com",
    "streetAddressOfBuilding": "1952 Little Bough Circle",
    "city": "Cincinnati",
    "stateProvince": "OH",
    "locality": "Hamilton",
    "country": "US",
    "postalCode": "45240",
    "latitude": "39.2851",
    "longitude": "-84.5288",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 810,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 558,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 805,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 206,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170406RP3038",
    "dateOfPurchase": "2017-04-06 11:48:57",
    "extendedPrice": 8832.09,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 461,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 751,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 314,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 613,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190911VB3177",
    "dateOfPurchase": "2019-09-11 11:48:57",
    "extendedPrice": 16742.95,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 917,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
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
            "productKey": "loaf_cake",
            "qtyPurchased": 484,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 524,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 211,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181209PQ6548",
    "dateOfPurchase": "2018-12-09 11:48:57",
    "extendedPrice": 18876.989999999998,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 713,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 588,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170823OD1502",
    "dateOfPurchase": "2017-08-23 11:48:57",
    "extendedPrice": 16093.560000000001,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 637,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 425,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 782,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 700,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190511VF8943",
    "dateOfPurchase": "2019-05-11 11:48:57",
    "extendedPrice": 2447.28,
    "customerKey": "KORYACOS2964",
    "firstName": "Kory",
    "lastName": "Acosta",
    "phoneNumber": "+31-179-666-2964",
    "email": "kacosta179@SEEDnet.com",
    "streetAddressOfBuilding": "4725 Short Canyon Way",
    "city": "Winschoten",
    "stateProvince": "Oldambt",
    "locality": "Oldambt",
    "country": "NL",
    "postalCode": "9674",
    "latitude": "53.1457",
    "longitude": "7.0189",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 355,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 741,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 218,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 146,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171106PW8648",
    "dateOfPurchase": "2017-11-06 11:48:57",
    "extendedPrice": 2915.88,
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 699,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 711,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170429JL3595",
    "dateOfPurchase": "2017-04-29 11:48:57",
    "extendedPrice": 1541.91,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 309,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190813RE5793",
    "dateOfPurchase": "2019-08-13 11:48:57",
    "extendedPrice": 8935.29,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 49,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 936,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 714,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 39,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 592,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170116KG6227",
    "dateOfPurchase": "2017-01-16 11:48:57",
    "extendedPrice": 11291.6,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 921,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 419,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180808AC4919",
    "dateOfPurchase": "2018-08-08 11:48:57",
    "extendedPrice": 4582.78,
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
            "productKey": "muffin",
            "qtyPurchased": 402,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 362,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 928,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 630,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190307QD2397",
    "dateOfPurchase": "2019-03-07 11:48:57",
    "extendedPrice": 624.1,
    "customerKey": "DWAYGILL8361",
    "firstName": "Dwayne",
    "lastName": "Gill",
    "phoneNumber": "+1-324-953-8361",
    "email": "dgill324@PLDT.com",
    "streetAddressOfBuilding": "2393 Little Hill Avenue",
    "city": "Topeka",
    "stateProvince": "KS",
    "locality": "Shawnee",
    "country": "US",
    "postalCode": "66636",
    "latitude": "39.0483",
    "longitude": "-95.678",
    "productsPurchased": [
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 456,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 598,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170819RZ2911",
    "dateOfPurchase": "2017-08-19 11:48:57",
    "extendedPrice": 16354.789999999999,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 490,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 407,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 88,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 636,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190109NK8126",
    "dateOfPurchase": "2019-01-09 11:48:57",
    "extendedPrice": 12942.390000000001,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 671,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 448,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 442,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190927BU8764",
    "dateOfPurchase": "2019-09-27 11:48:57",
    "extendedPrice": 349.18,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 442,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160704HE2816",
    "dateOfPurchase": "2016-07-04 11:48:57",
    "extendedPrice": 11037.9,
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
            "productKey": "torta_cake",
            "qtyPurchased": 734,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 3,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 373,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170806TT2879",
    "dateOfPurchase": "2017-08-06 11:48:57",
    "extendedPrice": 7776.07,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 571,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 82,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 806,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 384,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190818OE0837",
    "dateOfPurchase": "2019-08-18 11:48:57",
    "extendedPrice": 15865.230000000001,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 696,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 493,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 672,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180222GB1934",
    "dateOfPurchase": "2018-02-22 11:48:57",
    "extendedPrice": 35229.71,
    "customerKey": "MINHPATT9610",
    "firstName": "Minh",
    "lastName": "Patton",
    "phoneNumber": "+64-337-330-9610",
    "email": "mpatton337@APICnet.com",
    "streetAddressOfBuilding": "3569 Little Tree Ride",
    "city": "Whataroa",
    "stateProvince": "G3",
    "locality": "West Coast",
    "country": "NZ",
    "postalCode": "7857",
    "latitude": "-43.2833",
    "longitude": "170.4167",
    "productsPurchased": [
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 439,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
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
            "qtyPurchased": 682,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 81,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 942,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160731OC3182",
    "dateOfPurchase": "2016-07-31 11:48:57",
    "extendedPrice": 2420.67,
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
            "qtyPurchased": 574,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 623,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190825X7123",
    "dateOfPurchase": "2019-08-25 11:48:57",
    "extendedPrice": 2494.76,
    "customerKey": "ODILBROC4799",
    "firstName": "Odilia",
    "lastName": "Brock",
    "phoneNumber": "+44-276-739-4799",
    "email": "obrock276@Vodafone.com",
    "streetAddressOfBuilding": "4055 Short Bough Road",
    "city": "Leyland",
    "stateProvince": "England",
    "locality": "Lancashire",
    "country": "GB",
    "postalCode": "PR25",
    "latitude": "53.6979",
    "longitude": "-2.6876",
    "productsPurchased": [
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 283,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 118,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 313,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160706TJ5376",
    "dateOfPurchase": "2016-07-06 11:48:57",
    "extendedPrice": 881.22,
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
            "qtyPurchased": 7,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 171,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170620GB0587",
    "dateOfPurchase": "2017-06-20 11:48:57",
    "extendedPrice": 16561.17,
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
            "qtyPurchased": 868,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 84,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 552,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 372,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 86,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 771,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191027HP4831",
    "dateOfPurchase": "2019-10-27 11:48:57",
    "extendedPrice": 17283.05,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 489,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 475,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 250,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 662,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 440,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160928BW0959",
    "dateOfPurchase": "2016-09-28 11:48:57",
    "extendedPrice": 13788.16,
    "customerKey": "LOUMASS5334",
    "firstName": "Lou",
    "lastName": "Massey",
    "phoneNumber": "+1-304-086-5334",
    "email": "lmassey304@NTT.com",
    "streetAddressOfBuilding": "1952 Little Bough Circle",
    "city": "Cincinnati",
    "stateProvince": "OH",
    "locality": "Hamilton",
    "country": "US",
    "postalCode": "45240",
    "latitude": "39.2851",
    "longitude": "-84.5288",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 303,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 275,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 900,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 506,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161108DH0235",
    "dateOfPurchase": "2016-11-08 11:48:57",
    "extendedPrice": 4658,
    "customerKey": "CARLBEST9197",
    "firstName": "Carlo",
    "lastName": "Best",
    "phoneNumber": "+1-226-315-9197",
    "email": "cbest226@Zain.com",
    "streetAddressOfBuilding": "9892 Winding Creek Road",
    "city": "Delta East",
    "stateProvince": "BC",
    "locality": "Delta",
    "country": "CA",
    "postalCode": "V4E",
    "latitude": "49.1197",
    "longitude": "-122.9056",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 464,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 936,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190401QR9706",
    "dateOfPurchase": "2019-04-01 11:48:57",
    "extendedPrice": 192.85,
    "customerKey": "TRUDKING0248",
    "firstName": "Trudi",
    "lastName": "King",
    "phoneNumber": "+880-221-324-0248",
    "email": "tking221@AIS.com",
    "streetAddressOfBuilding": "5568 Winding Canyon Ride",
    "city": "M.C. College",
    "stateProvince": "Mirzapur",
    "locality": "Tangail",
    "country": "BD",
    "postalCode": "1942",
    "latitude": "24.0977",
    "longitude": "90.1303",
    "productsPurchased": [
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 159,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 79,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181120QL3167",
    "dateOfPurchase": "2018-11-20 11:48:57",
    "extendedPrice": 14320.86,
    "customerKey": "THALBROC1299",
    "firstName": "Thalia",
    "lastName": "Brock",
    "phoneNumber": "+378-269-990-1299",
    "email": "tbrock269@KDDI.com",
    "streetAddressOfBuilding": "1424 Long Ditch Way",
    "city": "San Giovanni",
    "stateProvince": null,
    "locality": null,
    "country": "SM",
    "postalCode": "47893",
    "latitude": "43.9419",
    "longitude": "12.4474",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 286,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 377,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 121,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 23,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 353,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 954,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161230CX4728",
    "dateOfPurchase": "2016-12-30 11:48:57",
    "extendedPrice": 17443.63,
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
            "productKey": "torta_cake",
            "qtyPurchased": 848,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 962,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 377,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190625CM6586",
    "dateOfPurchase": "2019-06-25 11:48:57",
    "extendedPrice": 5453.400000000001,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 805,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 239,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 437,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160706RQ7771",
    "dateOfPurchase": "2016-07-06 11:48:57",
    "extendedPrice": 2375.54,
    "customerKey": "DALLCHAN7054",
    "firstName": "Dallas",
    "lastName": "Chang",
    "phoneNumber": "+91-154-545-7054",
    "email": "dchang154@GlasNET.com",
    "streetAddressOfBuilding": "2155 Green Canyon Way",
    "city": "Achankulam",
    "stateProvince": "Sivakasi",
    "locality": "Virudhunagar",
    "country": "IN",
    "postalCode": "626141",
    "latitude": "10.282",
    "longitude": "79.3122",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 399,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 197,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180304OT4014",
    "dateOfPurchase": "2018-03-04 11:48:57",
    "extendedPrice": 13615.170000000002,
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
            "productKey": "apple_pie",
            "qtyPurchased": 714,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 987,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 977,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 355,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190920OX9549",
    "dateOfPurchase": "2019-09-20 11:48:57",
    "extendedPrice": 14186.5,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 427,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 706,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 571,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 933,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 210,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180827LG4711",
    "dateOfPurchase": "2018-08-27 11:48:57",
    "extendedPrice": 12267.8,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 350,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 532,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 232,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 391,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 975,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180207NR1728",
    "dateOfPurchase": "2018-02-07 11:48:57",
    "extendedPrice": 5256.6,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 215,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 891,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 358,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 936,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190622TJ9258",
    "dateOfPurchase": "2019-06-22 11:48:57",
    "extendedPrice": 1902.17,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 82,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 538,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 105,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160930FP5276",
    "dateOfPurchase": "2016-09-30 11:48:57",
    "extendedPrice": 21693.010000000002,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 355,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 209,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 871,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 510,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 578,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 876,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160915NC2413",
    "dateOfPurchase": "2016-09-15 11:48:57",
    "extendedPrice": 3244.66,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 836,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 292,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 454,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190728ZN9760",
    "dateOfPurchase": "2019-07-28 11:48:57",
    "extendedPrice": 234.82,
    "customerKey": "RONNWEAV4284",
    "firstName": "Ronny",
    "lastName": "Weaver",
    "phoneNumber": "+213-175-465-4284",
    "email": "rweaver175@UUnet.com",
    "streetAddressOfBuilding": "2833 Green Ridge Circle",
    "city": "Sobt",
    "stateProvince": "Mascara",
    "locality": "Mascara",
    "country": "DZ",
    "postalCode": "29016",
    "latitude": "35.4384",
    "longitude": "0.6206",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 398,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161118JP0325",
    "dateOfPurchase": "2016-11-18 11:48:57",
    "extendedPrice": 3049.3900000000003,
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
            "productKey": "wedding_cake",
            "qtyPurchased": 61,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180514GR9604",
    "dateOfPurchase": "2018-05-14 11:48:57",
    "extendedPrice": 9445.240000000002,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 723,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 339,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 550,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 314,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191214OU4487",
    "dateOfPurchase": "2019-12-14 11:48:57",
    "extendedPrice": 17805.329999999998,
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
            "productKey": "apple_pie",
            "qtyPurchased": 847,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 530,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 831,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 976,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 148,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 145,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171213JD3518",
    "dateOfPurchase": "2017-12-13 11:48:57",
    "extendedPrice": 5191.880000000001,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 83,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 578,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 323,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 955,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161127NZ9851",
    "dateOfPurchase": "2016-11-27 11:48:57",
    "extendedPrice": 9139.72,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 837,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 864,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 77,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190808KK1108",
    "dateOfPurchase": "2019-08-08 11:48:57",
    "extendedPrice": 1851.16,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 74,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 95,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 301,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160624N9567",
    "dateOfPurchase": "2016-06-24 11:48:57",
    "extendedPrice": 8840.76,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 543,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 111,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 600,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 969,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 225,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170829TT6041",
    "dateOfPurchase": "2017-08-29 11:48:57",
    "extendedPrice": 28042.82,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 655,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 148,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 616,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 690,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 959,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190830DE3371",
    "dateOfPurchase": "2019-08-30 11:48:57",
    "extendedPrice": 6443.55,
    "customerKey": "KASEJENS3146",
    "firstName": "Kasey",
    "lastName": "Jensen",
    "phoneNumber": "+44-140-479-3146",
    "email": "kjensen140@Telia.com",
    "streetAddressOfBuilding": "3620 Long Mound Circle",
    "city": "Southwark",
    "stateProvince": "England",
    "locality": "Greater London",
    "country": "GB",
    "postalCode": "SE1P",
    "latitude": "51.5",
    "longitude": "-0.0833",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 645,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180612SQ5468",
    "dateOfPurchase": "2018-06-12 11:48:57",
    "extendedPrice": 10658.09,
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
            "qtyPurchased": 53,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 686,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 725,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 848,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 529,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180129MU8297",
    "dateOfPurchase": "2018-01-29 11:48:57",
    "extendedPrice": 5250.24,
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
            "productKey": "torta_cake",
            "qtyPurchased": 293,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 483,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190526LB8579",
    "dateOfPurchase": "2019-05-26 11:48:57",
    "extendedPrice": 9127.04,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 342,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 840,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 374,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180502IQ0853",
    "dateOfPurchase": "2018-05-02 11:48:57",
    "extendedPrice": 2006.2900000000002,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 671,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170423AV9324",
    "dateOfPurchase": "2017-04-23 11:48:57",
    "extendedPrice": 3385.7,
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
            "productKey": "muffin",
            "qtyPurchased": 309,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 424,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 42,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 55,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190701CX4958",
    "dateOfPurchase": "2019-07-01 11:48:57",
    "extendedPrice": 10034.24,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 803,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 673,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171205NB8976",
    "dateOfPurchase": "2017-12-05 11:48:57",
    "extendedPrice": 9172.57,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 405,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 378,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 238,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 822,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170707LH2508",
    "dateOfPurchase": "2017-07-07 11:48:57",
    "extendedPrice": 15173.73,
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
            "qtyPurchased": 498,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 644,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 589,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 726,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 470,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190330QH6923",
    "dateOfPurchase": "2019-03-30 11:48:57",
    "extendedPrice": 10012.09,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 644,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 146,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 791,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 760,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181017YF0138",
    "dateOfPurchase": "2018-10-17 11:48:57",
    "extendedPrice": 13254.51,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 65,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 878,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 579,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 764,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 213,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "201709180228",
    "dateOfPurchase": "2017-09-18 11:48:57",
    "extendedPrice": 11464.220000000001,
    "customerKey": "DAVIHOWE0711",
    "firstName": "Davis",
    "lastName": "Howell",
    "phoneNumber": "+44-108-564-0711",
    "email": "dhowell108@MegaFon.com",
    "streetAddressOfBuilding": "6054 Red Stream Ride",
    "city": "West Felton",
    "stateProvince": "England",
    "locality": "Shropshire",
    "country": "GB",
    "postalCode": "SY11",
    "latitude": "52.8249",
    "longitude": "-2.9735",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 648,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 609,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 821,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190329NV8948",
    "dateOfPurchase": "2019-03-29 11:48:57",
    "extendedPrice": 31035.150000000005,
    "customerKey": "VIDAHURL6027",
    "firstName": "Vida",
    "lastName": "Hurley",
    "phoneNumber": "+46-199-655-6027",
    "email": "vhurley199@AlgoNet.com",
    "streetAddressOfBuilding": "80 Blue Tree Road",
    "city": "Lidk\u00f6ping",
    "stateProvince": "O",
    "locality": "Lidk\u00f6ping",
    "country": "SE",
    "postalCode": "531 57",
    "latitude": "58.5052",
    "longitude": "13.1577",
    "productsPurchased": [
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 713,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 945,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 249,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 459,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 727,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 842,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181013TL1901",
    "dateOfPurchase": "2018-10-13 11:48:57",
    "extendedPrice": 35260.75,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 660,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 648,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 67,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170520HM5409",
    "dateOfPurchase": "2017-05-20 11:48:57",
    "extendedPrice": 1890.63,
    "customerKey": "ABELROY2989",
    "firstName": "Abel",
    "lastName": "Roy",
    "phoneNumber": "+356-187-940-2989",
    "email": "aroy187@Relcom.com",
    "streetAddressOfBuilding": "8007 Winding Mound Drive",
    "city": "Kirkop",
    "stateProvince": "Kirkop",
    "locality": "Kirkop",
    "country": "MT",
    "postalCode": "KKP",
    "latitude": "35.8442",
    "longitude": "14.4842",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 235,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 502,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190417GE8242",
    "dateOfPurchase": "2019-04-17 11:48:57",
    "extendedPrice": 64363.39,
    "customerKey": "PAMEBUCK1021",
    "firstName": "Pamela",
    "lastName": "Buck",
    "phoneNumber": "+92-319-981-1021",
    "email": "pbuck319@CCS.com",
    "streetAddressOfBuilding": "2025 Long Mound Ride",
    "city": "Samli Dheri",
    "stateProvince": "NWFP Peshawar",
    "locality": "NWFP Peshawar",
    "country": "PK",
    "postalCode": "22181",
    "latitude": "34.2858",
    "longitude": "73.3933",
    "productsPurchased": [
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 31,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 272,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 878,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 652,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 989,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 839,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170613XF5442",
    "dateOfPurchase": "2017-06-13 11:48:57",
    "extendedPrice": 12527.67,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 126,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 512,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 254,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 705,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 978,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180827GX3877",
    "dateOfPurchase": "2018-08-27 11:48:57",
    "extendedPrice": 2498.07,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 497,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 646,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190515CZ2722",
    "dateOfPurchase": "2019-05-15 11:48:57",
    "extendedPrice": 11348.670000000002,
    "customerKey": "VIDAHURL6027",
    "firstName": "Vida",
    "lastName": "Hurley",
    "phoneNumber": "+46-199-655-6027",
    "email": "vhurley199@AlgoNet.com",
    "streetAddressOfBuilding": "80 Blue Tree Road",
    "city": "Lidk\u00f6ping",
    "stateProvince": "O",
    "locality": "Lidk\u00f6ping",
    "country": "SE",
    "postalCode": "531 57",
    "latitude": "58.5052",
    "longitude": "13.1577",
    "productsPurchased": [
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 17,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 36,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 857,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 727,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 422,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 284,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170128NG3438",
    "dateOfPurchase": "2017-01-28 11:48:57",
    "extendedPrice": 10358.16,
    "customerKey": "PORTGOOD9044",
    "firstName": "Porter",
    "lastName": "Goodman",
    "phoneNumber": "+389-357-582-9044",
    "email": "pgoodman357@Telkom.com",
    "streetAddressOfBuilding": "8868 Blue Bridge Avenue",
    "city": "Dobroste",
    "stateProvince": null,
    "locality": null,
    "country": "MK",
    "postalCode": "1211",
    "latitude": "42.1033",
    "longitude": "21.0778",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 794,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 90,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180708L1622",
    "dateOfPurchase": "2018-07-08 11:48:57",
    "extendedPrice": 3561.9800000000005,
    "customerKey": "HAROLIM5260",
    "firstName": "Harold",
    "lastName": "Lim",
    "phoneNumber": "+44-246-494-5260",
    "email": "hlim246@MaxComm.com",
    "streetAddressOfBuilding": "7994 Long River Way",
    "city": "Upper Arncott",
    "stateProvince": "England",
    "locality": "Oxfordshire",
    "country": "GB",
    "postalCode": "OX6",
    "latitude": "51.9152",
    "longitude": "-1.184",
    "productsPurchased": [
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 445,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 268,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 639,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190717PP8466",
    "dateOfPurchase": "2019-07-17 11:48:57",
    "extendedPrice": 541.03,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 917,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160720PZ5281",
    "dateOfPurchase": "2016-07-20 11:48:57",
    "extendedPrice": 518.02,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 878,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161225QF9052",
    "dateOfPurchase": "2016-12-25 11:48:57",
    "extendedPrice": 23934.32,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 233,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 47,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 591,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 239,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 341,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 325,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191121FI7803",
    "dateOfPurchase": "2019-11-21 11:48:57",
    "extendedPrice": 3910.3600000000006,
    "customerKey": "CHINLIU0298",
    "firstName": "Chin",
    "lastName": "Liu",
    "phoneNumber": "+1-196-776-0298",
    "email": "cliu196@VimpelCom.com",
    "streetAddressOfBuilding": "7654 Winding Stream Street",
    "city": "Noorvik",
    "stateProvince": "AK",
    "locality": "Northwest Arctic",
    "country": "US",
    "postalCode": "99763",
    "latitude": "66.8364",
    "longitude": "-161.0441",
    "productsPurchased": [
        {
            "productKey": "muffin",
            "qtyPurchased": 661,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 371,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 532,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180624OS6210",
    "dateOfPurchase": "2018-06-24 11:48:57",
    "extendedPrice": 6498.369999999999,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 177,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 187,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 390,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 471,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 81,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170314AX0734",
    "dateOfPurchase": "2017-03-14 11:48:57",
    "extendedPrice": 300.08,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 341,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190919ON2850",
    "dateOfPurchase": "2019-09-19 11:48:57",
    "extendedPrice": 43718.450000000004,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 800,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 795,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 676,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 460,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 559,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 315,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180527MW1923",
    "dateOfPurchase": "2018-05-27 11:48:57",
    "extendedPrice": 9269.89,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 166,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 627,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 825,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 133,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170531VK9298",
    "dateOfPurchase": "2017-05-31 11:48:57",
    "extendedPrice": 23462.710000000003,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 742,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 390,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 197,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190317DP6907",
    "dateOfPurchase": "2019-03-17 11:48:57",
    "extendedPrice": 13877.740000000002,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 241,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 998,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 272,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 265,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170114VL4484",
    "dateOfPurchase": "2017-01-14 11:48:57",
    "extendedPrice": 8037.4800000000005,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 61,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 992,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 207,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 79,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 692,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180226SC2315",
    "dateOfPurchase": "2018-02-26 11:48:57",
    "extendedPrice": 17715.83,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 378,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 530,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 640,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 637,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 965,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 867,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191211QN9182",
    "dateOfPurchase": "2019-12-11 11:48:57",
    "extendedPrice": 15716.3,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 999,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 305,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 989,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 901,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 966,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161105HH1527",
    "dateOfPurchase": "2016-11-05 11:48:57",
    "extendedPrice": 9139.04,
    "customerKey": "MARGCHAP7112",
    "firstName": "Marg",
    "lastName": "Chapman",
    "phoneNumber": "+1-142-751-7112",
    "email": "mchapman142@KTC.com",
    "streetAddressOfBuilding": "5660 Long Mountain Drive",
    "city": "Ottawa (Vanier)",
    "stateProvince": "ON",
    "locality": "Ottawa",
    "country": "CA",
    "postalCode": "K1L",
    "latitude": "45.44",
    "longitude": "-75.663",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 328,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 945,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 172,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 698,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 253,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170327IF4138",
    "dateOfPurchase": "2017-03-27 11:48:57",
    "extendedPrice": 14937.240000000002,
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
            "productKey": "apple_pie",
            "qtyPurchased": 143,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 579,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 864,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 543,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 697,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190914XU7422",
    "dateOfPurchase": "2019-09-14 11:48:57",
    "extendedPrice": 4075.8600000000006,
    "customerKey": "LYNDBRAD9305",
    "firstName": "Lyndsay",
    "lastName": "Bradley",
    "phoneNumber": "+502-125-521-9305",
    "email": "lbradley125@Telecom.com",
    "streetAddressOfBuilding": "8868 Long Creek Way",
    "city": "EL REFUGIO (LOS AMATES)",
    "stateProvince": "DEPTO DE IZABAL",
    "locality": "DEPTO DE IZABAL",
    "country": "GT",
    "postalCode": "18016",
    "latitude": "15.5667",
    "longitude": "-88.9233",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 522,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 492,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170911GN5393",
    "dateOfPurchase": "2017-09-11 11:48:57",
    "extendedPrice": 25401.140000000003,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 730,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 434,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 749,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 951,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 408,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 744,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180329RS0911",
    "dateOfPurchase": "2018-03-29 11:48:57",
    "extendedPrice": 8343.52,
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
            "qtyPurchased": 649,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 202,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 232,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 69,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 507,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 425,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191203CP9576",
    "dateOfPurchase": "2019-12-03 11:48:57",
    "extendedPrice": 8999.650000000001,
    "customerKey": "THALBROC1299",
    "firstName": "Thalia",
    "lastName": "Brock",
    "phoneNumber": "+378-269-990-1299",
    "email": "tbrock269@KDDI.com",
    "streetAddressOfBuilding": "1424 Long Ditch Way",
    "city": "San Giovanni",
    "stateProvince": null,
    "locality": null,
    "country": "SM",
    "postalCode": "47893",
    "latitude": "43.9419",
    "longitude": "12.4474",
    "productsPurchased": [
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 199,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 771,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 252,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 163,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170626FY2503",
    "dateOfPurchase": "2017-06-26 11:48:57",
    "extendedPrice": 9320.86,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 289,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 622,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 725,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 874,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181017HL7288",
    "dateOfPurchase": "2018-10-17 11:48:57",
    "extendedPrice": 5161.800000000001,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 765,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 767,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 145,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 506,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190719TV4985",
    "dateOfPurchase": "2019-07-19 11:48:57",
    "extendedPrice": 1911.09,
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
            "qtyPurchased": 476,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 15,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161125CR7210",
    "dateOfPurchase": "2016-11-25 11:48:57",
    "extendedPrice": 11877.370000000003,
    "customerKey": "CLAIGATE7723",
    "firstName": "Clair",
    "lastName": "Gates",
    "phoneNumber": "+91-302-265-7723",
    "email": "cgates302@WorldNet.com",
    "streetAddressOfBuilding": "5863 Big Creek Drive",
    "city": "Saryanj",
    "stateProvince": "Arki",
    "locality": "Solan",
    "country": "IN",
    "postalCode": "173235",
    "latitude": "31.2838",
    "longitude": "77.1229",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 284,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 572,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 376,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 993,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 648,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161118PJ0967",
    "dateOfPurchase": "2016-11-18 11:48:57",
    "extendedPrice": 3259.6600000000003,
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
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 934,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190723CV1785",
    "dateOfPurchase": "2019-07-23 11:48:57",
    "extendedPrice": 3834.7299999999996,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 128,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 883,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 858,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160815EN9194",
    "dateOfPurchase": "2016-08-15 11:48:57",
    "extendedPrice": 2217.2300000000005,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 16,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 927,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 494,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180126QG9127",
    "dateOfPurchase": "2018-01-26 11:48:57",
    "extendedPrice": 1429.19,
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
            "productKey": "layer_cake",
            "qtyPurchased": 91,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 290,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191208IK6195",
    "dateOfPurchase": "2019-12-08 11:48:57",
    "extendedPrice": 5191.46,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 633,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 47,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 274,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170903OG8786",
    "dateOfPurchase": "2017-09-03 11:48:57",
    "extendedPrice": 5067.8,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 178,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 703,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 279,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190216SS3179",
    "dateOfPurchase": "2019-02-16 11:48:57",
    "extendedPrice": 20871.46,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 551,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 881,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 672,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190802WC6278",
    "dateOfPurchase": "2019-08-02 11:48:57",
    "extendedPrice": 4835.31,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 357,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 612,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161123GT4122",
    "dateOfPurchase": "2016-11-23 11:48:57",
    "extendedPrice": 18436.21,
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 434,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 221,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 684,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 756,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 996,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170223QF0593",
    "dateOfPurchase": "2017-02-23 11:48:57",
    "extendedPrice": 25829.939999999995,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 642,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 777,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 387,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190504R4775",
    "dateOfPurchase": "2019-05-04 11:48:57",
    "extendedPrice": 10158.52,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 484,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 643,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 233,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 597,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 856,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 443,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180804KT8648",
    "dateOfPurchase": "2018-08-04 11:48:57",
    "extendedPrice": 446.03999999999996,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 756,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180803UG6882",
    "dateOfPurchase": "2018-08-03 11:48:57",
    "extendedPrice": 5969.960000000001,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 597,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 857,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190728LR3433",
    "dateOfPurchase": "2019-07-28 11:48:57",
    "extendedPrice": 14116.54,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 939,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 596,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 761,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171108LW3941",
    "dateOfPurchase": "2017-11-08 11:48:57",
    "extendedPrice": 6999.290000000001,
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
            "productKey": "muffin",
            "qtyPurchased": 775,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 456,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 598,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 202,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181125LP3738",
    "dateOfPurchase": "2018-11-25 11:48:57",
    "extendedPrice": 996.94,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 96,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 31,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 79,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190818HP3184",
    "dateOfPurchase": "2019-08-18 11:48:57",
    "extendedPrice": 9014.75,
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
            "productKey": "apple_pie",
            "qtyPurchased": 556,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 591,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 778,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160831ZO6870",
    "dateOfPurchase": "2016-08-31 11:48:57",
    "extendedPrice": 7827.34,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 889,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 345,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 799,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 33,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181122BD5521",
    "dateOfPurchase": "2018-11-22 11:48:57",
    "extendedPrice": 2223.6400000000003,
    "customerKey": "ROCCBOOT2514",
    "firstName": "Rocco",
    "lastName": "Booth",
    "phoneNumber": "+44-173-750-2514",
    "email": "rbooth173@UUnet.com",
    "streetAddressOfBuilding": "5186 Red Creek Ride",
    "city": "Bedford",
    "stateProvince": "England",
    "locality": "Bedfordshire",
    "country": "GB",
    "postalCode": "MK40",
    "latitude": "52.1346",
    "longitude": "-0.4663",
    "productsPurchased": [
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 523,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 813,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191008KN4802",
    "dateOfPurchase": "2019-10-08 11:48:57",
    "extendedPrice": 10474.759999999998,
    "customerKey": "SHAKWONG7880",
    "firstName": "Shakita",
    "lastName": "Wong",
    "phoneNumber": "+1441-323-976-7880",
    "email": "swong323@TT.com",
    "streetAddressOfBuilding": "2702 Red Gulch Street",
    "city": "Pembroke",
    "stateProvince": "Pembroke Parish",
    "locality": "Pembroke Parish",
    "country": "BM",
    "postalCode": "HM 14",
    "latitude": "32.3002",
    "longitude": "-64.792",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 524,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181217JK2851",
    "dateOfPurchase": "2018-12-17 11:48:57",
    "extendedPrice": 8132.320000000001,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 281,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 572,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 899,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 996,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 87,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 221,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160808QZ7749",
    "dateOfPurchase": "2016-08-08 11:48:57",
    "extendedPrice": 5297.14,
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
            "productKey": "layer_cake",
            "qtyPurchased": 305,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 447,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 363,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 258,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 68,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 757,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190518BT1645",
    "dateOfPurchase": "2019-05-18 11:48:57",
    "extendedPrice": 5127.530000000001,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 656,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
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
    "transactionId": "20170502CY5499",
    "dateOfPurchase": "2017-05-02 11:48:57",
    "extendedPrice": 18442.22,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 839,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 794,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 775,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 972,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 794,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170408J6008",
    "dateOfPurchase": "2017-04-08 11:48:57",
    "extendedPrice": 7547.570000000001,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 768,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 605,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 679,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 171,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190922ON2837",
    "dateOfPurchase": "2019-09-22 11:48:57",
    "extendedPrice": 21656.16,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 1,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 85,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 904,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 942,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 122,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171105VH6879",
    "dateOfPurchase": "2017-11-05 11:48:57",
    "extendedPrice": 1839.23,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 527,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170920FP1646",
    "dateOfPurchase": "2017-09-20 11:48:57",
    "extendedPrice": 4537.79,
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
            "qtyPurchased": 406,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 237,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 778,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191225B8069",
    "dateOfPurchase": "2019-12-25 11:48:57",
    "extendedPrice": 2864.82,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 718,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171216EK1528",
    "dateOfPurchase": "2017-12-16 11:48:57",
    "extendedPrice": 2944.1,
    "customerKey": "ODILBROC4799",
    "firstName": "Odilia",
    "lastName": "Brock",
    "phoneNumber": "+44-276-739-4799",
    "email": "obrock276@Vodafone.com",
    "streetAddressOfBuilding": "4055 Short Bough Road",
    "city": "Leyland",
    "stateProvince": "England",
    "locality": "Lancashire",
    "country": "GB",
    "postalCode": "PR25",
    "latitude": "53.6979",
    "longitude": "-2.6876",
    "productsPurchased": [
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 590,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180125FU0660",
    "dateOfPurchase": "2018-01-25 11:48:57",
    "extendedPrice": 20541.5,
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
            "qtyPurchased": 990,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 677,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 600,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 795,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 948,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190527AJ9132",
    "dateOfPurchase": "2019-05-27 11:48:57",
    "extendedPrice": 6327.17,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 835,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 548,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180629HH7962",
    "dateOfPurchase": "2018-06-29 11:48:57",
    "extendedPrice": 24358.04,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 158,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 264,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 470,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161027D6267",
    "dateOfPurchase": "2016-10-27 11:48:57",
    "extendedPrice": 5956.24,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 707,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 59,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 214,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 666,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 135,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 325,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191102YP0142",
    "dateOfPurchase": "2019-11-02 11:48:57",
    "extendedPrice": 13641.439999999999,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 806,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 911,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 826,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 200,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 319,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 717,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160927TF9559",
    "dateOfPurchase": "2016-09-27 11:48:57",
    "extendedPrice": 952.7700000000001,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 273,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180629AQ4137",
    "dateOfPurchase": "2018-06-29 11:48:57",
    "extendedPrice": 18725.57,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 491,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 105,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 399,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 93,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 855,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190329NA3657",
    "dateOfPurchase": "2019-03-29 11:48:57",
    "extendedPrice": 19459.55,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 36,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 583,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 700,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 210,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 566,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161105SK2872",
    "dateOfPurchase": "2016-11-05 11:48:57",
    "extendedPrice": 3483.3500000000004,
    "customerKey": "LYNWBOOK9603",
    "firstName": "Lynwood",
    "lastName": "Booker",
    "phoneNumber": "+354-355-215-9603",
    "email": "lbooker355@Vodafone.com",
    "streetAddressOfBuilding": "7825 Little Stream Drive",
    "city": "Bl\u00f6ndu\u00f3si",
    "stateProvince": null,
    "locality": null,
    "country": "IS",
    "postalCode": "540",
    "latitude": "65.6593",
    "longitude": "-20.2808",
    "productsPurchased": [
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 424,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 121,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180212AB7349",
    "dateOfPurchase": "2018-02-12 11:48:57",
    "extendedPrice": 5067.290000000001,
    "customerKey": "ABELROY2989",
    "firstName": "Abel",
    "lastName": "Roy",
    "phoneNumber": "+356-187-940-2989",
    "email": "aroy187@Relcom.com",
    "streetAddressOfBuilding": "8007 Winding Mound Drive",
    "city": "Kirkop",
    "stateProvince": "Kirkop",
    "locality": "Kirkop",
    "country": "MT",
    "postalCode": "KKP",
    "latitude": "35.8442",
    "longitude": "14.4842",
    "productsPurchased": [
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 870,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 626,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 325,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191126BO7487",
    "dateOfPurchase": "2019-11-26 11:48:57",
    "extendedPrice": 4440.370000000001,
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
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 788,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 370,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 505,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181217MU2441",
    "dateOfPurchase": "2018-12-17 11:48:57",
    "extendedPrice": 6710.400000000001,
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
            "qtyPurchased": 960,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170831TB9310",
    "dateOfPurchase": "2017-08-31 11:48:57",
    "extendedPrice": 19256.399999999998,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 578,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 156,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 495,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 131,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190510YT8282",
    "dateOfPurchase": "2019-05-10 11:48:57",
    "extendedPrice": 6836.579999999999,
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
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 342,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170722GY9788",
    "dateOfPurchase": "2017-07-22 11:48:57",
    "extendedPrice": 9043.14,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 904,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 296,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 486,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160808BC8714",
    "dateOfPurchase": "2016-08-08 11:48:57",
    "extendedPrice": 1465.8000000000002,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 420,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190728YN1356",
    "dateOfPurchase": "2019-07-28 11:48:57",
    "extendedPrice": 11708.2,
    "customerKey": "KASEJENS3146",
    "firstName": "Kasey",
    "lastName": "Jensen",
    "phoneNumber": "+44-140-479-3146",
    "email": "kjensen140@Telia.com",
    "streetAddressOfBuilding": "3620 Long Mound Circle",
    "city": "Southwark",
    "stateProvince": "England",
    "locality": "Greater London",
    "country": "GB",
    "postalCode": "SE1P",
    "latitude": "51.5",
    "longitude": "-0.0833",
    "productsPurchased": [
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 633,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 312,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 950,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 612,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 623,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170403GL4400",
    "dateOfPurchase": "2017-04-03 11:48:57",
    "extendedPrice": 25072.37,
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
            "productKey": "torta_cake",
            "qtyPurchased": 799,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 94,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 454,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 473,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 590,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 653,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170101FI1364",
    "dateOfPurchase": "2017-01-01 11:48:57",
    "extendedPrice": 9946.84,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 965,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 762,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 509,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191213CJ4655",
    "dateOfPurchase": "2019-12-13 11:48:57",
    "extendedPrice": 3633.79,
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
            "qtyPurchased": 754,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 635,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 32,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181026RH2236",
    "dateOfPurchase": "2018-10-26 11:48:57",
    "extendedPrice": 10867.259999999998,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 444,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 809,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 361,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180910HN3957",
    "dateOfPurchase": "2018-09-10 11:48:57",
    "extendedPrice": 42248.23,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 103,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 703,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 733,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 338,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190311IX8000",
    "dateOfPurchase": "2019-03-11 11:48:57",
    "extendedPrice": 4163.15,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 856,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 109,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 166,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 338,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170911YR9214",
    "dateOfPurchase": "2017-09-11 11:48:57",
    "extendedPrice": 23584.08,
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
            "productKey": "torta_cake",
            "qtyPurchased": 479,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 409,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 426,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 585,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 443,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160619KV8080",
    "dateOfPurchase": "2016-06-19 11:48:57",
    "extendedPrice": 11615.35,
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
            "productKey": "torta_cake",
            "qtyPurchased": 536,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 817,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
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
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 864,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190802MR7107",
    "dateOfPurchase": "2019-08-02 11:48:57",
    "extendedPrice": 4222.610000000001,
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
            "productKey": "layer_cake",
            "qtyPurchased": 377,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 383,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 279,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190127HK3187",
    "dateOfPurchase": "2019-01-27 11:48:57",
    "extendedPrice": 3106.3100000000004,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 791,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 516,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170414IF7431",
    "dateOfPurchase": "2017-04-14 11:48:57",
    "extendedPrice": 10907.04,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 224,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 954,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 951,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 215,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 852,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190816PU6686",
    "dateOfPurchase": "2019-08-16 11:48:57",
    "extendedPrice": 69.58,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 142,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160826L6277",
    "dateOfPurchase": "2016-08-26 11:48:57",
    "extendedPrice": 8283.37,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 702,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 63,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 448,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181015IE7669",
    "dateOfPurchase": "2018-10-15 11:48:57",
    "extendedPrice": 4913.92,
    "customerKey": "KYLESELL3321",
    "firstName": "Kylee",
    "lastName": "Sellers",
    "phoneNumber": "+1-110-662-3321",
    "email": "ksellers110@APICnet.com",
    "streetAddressOfBuilding": "4299 Long Ridge Boulevard",
    "city": "Austin",
    "stateProvince": "TX",
    "locality": "Travis",
    "country": "US",
    "postalCode": "78732",
    "latitude": "30.3752",
    "longitude": "-97.9007",
    "productsPurchased": [
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 783,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 371,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 254,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190306SC1369",
    "dateOfPurchase": "2019-03-06 11:48:57",
    "extendedPrice": 2036.19,
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
            "productKey": "chocolate_bar",
            "qtyPurchased": 681,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170927PQ1293",
    "dateOfPurchase": "2017-09-27 11:48:57",
    "extendedPrice": 9168.99,
    "customerKey": "VIRGTREV3152",
    "firstName": "Virgil",
    "lastName": "Trevino",
    "phoneNumber": "+94-133-624-3152",
    "email": "vtrevino133@LGUplus.com",
    "streetAddressOfBuilding": "706 Red Woods Street",
    "city": "Sirajnagar",
    "stateProvince": "Trincomalee",
    "locality": "Trincomalee",
    "country": "LK",
    "postalCode": "31314",
    "latitude": "8.3466",
    "longitude": "81.0037",
    "productsPurchased": [
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 101,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 766,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 164,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 172,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 298,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170316HA8101",
    "dateOfPurchase": "2017-03-16 11:48:57",
    "extendedPrice": 15818.869999999999,
    "customerKey": "STERWELC0850",
    "firstName": "Sterling",
    "lastName": "Welch",
    "phoneNumber": "+386-347-425-0850",
    "email": "swelch347@PLDT.com",
    "streetAddressOfBuilding": "6780 Big River Street",
    "city": "Pobegi",
    "stateProvince": null,
    "locality": null,
    "country": "SI",
    "postalCode": "6276",
    "latitude": "45.5394",
    "longitude": "13.7961",
    "productsPurchased": [
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 465,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 533,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 32,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 491,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 92,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 500,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190613Z7361",
    "dateOfPurchase": "2019-06-13 11:48:57",
    "extendedPrice": 41931.9,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 619,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 988,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 36,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 925,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 972,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 710,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160902EN3654",
    "dateOfPurchase": "2016-09-02 11:48:57",
    "extendedPrice": 2820.5600000000004,
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
            "productKey": "layer_cake",
            "qtyPurchased": 599,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 295,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161228KU7887",
    "dateOfPurchase": "2016-12-28 11:48:57",
    "extendedPrice": 3121.55,
    "customerKey": "STERWELC0850",
    "firstName": "Sterling",
    "lastName": "Welch",
    "phoneNumber": "+386-347-425-0850",
    "email": "swelch347@PLDT.com",
    "streetAddressOfBuilding": "6780 Big River Street",
    "city": "Pobegi",
    "stateProvince": null,
    "locality": null,
    "country": "SI",
    "postalCode": "6276",
    "latitude": "45.5394",
    "longitude": "13.7961",
    "productsPurchased": [
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 656,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 897,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190407HS2647",
    "dateOfPurchase": "2019-04-07 11:48:57",
    "extendedPrice": 5280.070000000001,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 451,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 89,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 355,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 577,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 837,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180925ZK4746",
    "dateOfPurchase": "2018-09-25 11:48:57",
    "extendedPrice": 9003.83,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 654,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 354,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 926,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 123,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 120,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160617LD6407",
    "dateOfPurchase": "2016-06-17 11:48:57",
    "extendedPrice": 2338.3,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 670,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190510NY9935",
    "dateOfPurchase": "2019-05-10 11:48:57",
    "extendedPrice": 20132.120000000003,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 97,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 883,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 148,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 731,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 937,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 142,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170831QK9961",
    "dateOfPurchase": "2017-08-31 11:48:57",
    "extendedPrice": 66565.47,
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
            "productKey": "peanut_truffle",
            "qtyPurchased": 939,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 431,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 772,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 640,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 171,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161023XE4544",
    "dateOfPurchase": "2016-10-23 11:48:57",
    "extendedPrice": 14313.800000000001,
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
            "productKey": "birthday_cake",
            "qtyPurchased": 144,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 869,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 557,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190521PJ3412",
    "dateOfPurchase": "2019-05-21 11:48:57",
    "extendedPrice": 4690.13,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 587,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170828TC8420",
    "dateOfPurchase": "2017-08-28 11:48:57",
    "extendedPrice": 2127.3900000000003,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 198,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 163,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180714EN3814",
    "dateOfPurchase": "2018-07-14 11:48:57",
    "extendedPrice": 3980.51,
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
            "productKey": "carrot_cake",
            "qtyPurchased": 408,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 241,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190910LG3622",
    "dateOfPurchase": "2019-09-10 11:48:57",
    "extendedPrice": 2728.08,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 180,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 612,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170430FU3129",
    "dateOfPurchase": "2017-04-30 11:48:57",
    "extendedPrice": 8727.25,
    "customerKey": "ELLITHOM7844",
    "firstName": "Elliot",
    "lastName": "Thompson",
    "phoneNumber": "+91-192-926-7844",
    "email": "ethompso192@Telecom.com",
    "streetAddressOfBuilding": "9376 Winding Creek Way",
    "city": "Seminary",
    "stateProvince": "Amberpet",
    "locality": "Hyderabad",
    "country": "IN",
    "postalCode": "500013",
    "latitude": "17.3172",
    "longitude": "79.408",
    "productsPurchased": [
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 252,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 504,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 483,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 486,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 184,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170223FL5153",
    "dateOfPurchase": "2017-02-23 11:48:57",
    "extendedPrice": 20329.96,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 530,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 813,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 281,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 791,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 814,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 125,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191117CS4116",
    "dateOfPurchase": "2019-11-17 11:48:57",
    "extendedPrice": 4421.54,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 346,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 869,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 123,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20160922TD1591",
    "dateOfPurchase": "2016-09-22 11:48:57",
    "extendedPrice": 8454.460000000001,
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
            "productKey": "layer_cake",
            "qtyPurchased": 702,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 290,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "layer_cake",
            "qtyPurchased": 240,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 941,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 581,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180619ZS9889",
    "dateOfPurchase": "2018-06-19 11:48:57",
    "extendedPrice": 16673.16,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 552,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 658,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 855,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 706,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 463,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191221KL7248",
    "dateOfPurchase": "2019-12-21 11:48:57",
    "extendedPrice": 670.1300000000001,
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
            "productKey": "torta_cake",
            "qtyPurchased": 41,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 46,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190121GX9767",
    "dateOfPurchase": "2019-01-21 11:48:57",
    "extendedPrice": 3513.29,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 617,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 986,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 821,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170510FL1222",
    "dateOfPurchase": "2017-05-10 11:48:57",
    "extendedPrice": 16582.91,
    "customerKey": "CHINLIU0298",
    "firstName": "Chin",
    "lastName": "Liu",
    "phoneNumber": "+1-196-776-0298",
    "email": "cliu196@VimpelCom.com",
    "streetAddressOfBuilding": "7654 Winding Stream Street",
    "city": "Noorvik",
    "stateProvince": "AK",
    "locality": "Northwest Arctic",
    "country": "US",
    "postalCode": "99763",
    "latitude": "66.8364",
    "longitude": "-161.0441",
    "productsPurchased": [
        {
            "productKey": "torta_cake",
            "qtyPurchased": 561,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 559,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 869,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 170,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191009FN0659",
    "dateOfPurchase": "2019-10-09 11:48:57",
    "extendedPrice": 8418.59,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 100,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 910,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 255,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 526,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171219C5201",
    "dateOfPurchase": "2017-12-19 11:48:57",
    "extendedPrice": 16130.550000000003,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 256,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 191,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 843,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 156,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 964,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 431,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180815MC9392",
    "dateOfPurchase": "2018-08-15 11:48:57",
    "extendedPrice": 14811.199999999999,
    "customerKey": "THRESING6635",
    "firstName": "Thresa",
    "lastName": "Singleton",
    "phoneNumber": "+389-147-519-6635",
    "email": "tsinglet147@Swisscom.com",
    "streetAddressOfBuilding": "6000 Winding Stream Ride",
    "city": "Vozarci",
    "stateProvince": null,
    "locality": null,
    "country": "MK",
    "postalCode": "1424",
    "latitude": "41.43",
    "longitude": "21.9247",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 162,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 447,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 239,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 929,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 53,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190714EG1516",
    "dateOfPurchase": "2019-07-14 11:48:57",
    "extendedPrice": 545.36,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 478,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "loaf_cake",
            "qtyPurchased": 66,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190130WW6480",
    "dateOfPurchase": "2019-01-30 11:48:57",
    "extendedPrice": 5239.3099999999995,
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
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 290,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 388,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 132,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 786,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 557,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 746,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161017YN5602",
    "dateOfPurchase": "2016-10-17 11:48:57",
    "extendedPrice": 11169.87,
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
            "productKey": "layer_cake",
            "qtyPurchased": 68,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 414,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 25,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 874,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cherry_pie",
            "qtyPurchased": 201,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 681,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190626MM8913",
    "dateOfPurchase": "2019-06-26 11:48:57",
    "extendedPrice": 3764.34,
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
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 472,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 460,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": "0.67"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 964,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 66,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 378,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 266,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180208WT6839",
    "dateOfPurchase": "2018-02-08 11:48:57",
    "extendedPrice": 15422.630000000001,
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
            "productKey": "loaf_cake",
            "qtyPurchased": 942,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": "3.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 743,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 668,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 170,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 254,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170127LK7671",
    "dateOfPurchase": "2017-01-27 11:48:57",
    "extendedPrice": 12968.41,
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
            "productKey": "raspberry_truffel",
            "qtyPurchased": 536,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 835,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 928,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "chocolate_bar",
            "qtyPurchased": 216,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 469,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 817,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190709RB3078",
    "dateOfPurchase": "2019-07-09 11:48:57",
    "extendedPrice": 4984.85,
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
            "productKey": "dozen_donuts",
            "qtyPurchased": 664,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 701,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170910RZ2326",
    "dateOfPurchase": "2017-09-10 11:48:57",
    "extendedPrice": 595.01,
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
            "productKey": "layer_cake",
            "qtyPurchased": 199,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181127OM6913",
    "dateOfPurchase": "2018-11-27 11:48:57",
    "extendedPrice": 10070.8,
    "customerKey": "CHANTRAV0971",
    "firstName": "Chana",
    "lastName": "Travis",
    "phoneNumber": "+91-346-370-0971",
    "email": "ctravis346@Econnect.com",
    "streetAddressOfBuilding": "5365 Big Stream Road",
    "city": "Bettagere",
    "stateProvince": "Mudigere",
    "locality": "Chickmagalur",
    "country": "IN",
    "postalCode": "577113",
    "latitude": "13.1098",
    "longitude": "75.5716",
    "productsPurchased": [
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 525,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 771,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 691,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 21,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "peanut_truffle",
            "qtyPurchased": 94,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": "3.49"
        },
        {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 747,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": "3.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190714AH8214",
    "dateOfPurchase": "2019-07-14 11:48:57",
    "extendedPrice": 5344.290000000001,
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
            "productKey": "pumpkin_pie",
            "qtyPurchased": 711,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 360,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20180615QG6062",
    "dateOfPurchase": "2018-06-15 11:48:57",
    "extendedPrice": 13797.700000000003,
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
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 726,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "carrot_cake",
            "qtyPurchased": 739,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": "7.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 505,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 104,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 456,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20190906IU6005",
    "dateOfPurchase": "2019-09-06 11:48:57",
    "extendedPrice": 11540.14,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 664,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 596,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": "3.49"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 890,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 323,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 153,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": "19.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20181117TN0021",
    "dateOfPurchase": "2018-11-17 11:48:57",
    "extendedPrice": 25459.190000000002,
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
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 418,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": "0.49"
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
            "productKey": "wedding_cake",
            "qtyPurchased": 322,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 801,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": "3.49"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 654,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        },
        {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 520,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": "4.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170409CA8519",
    "dateOfPurchase": "2017-04-09 11:48:57",
    "extendedPrice": 2451.1899999999996,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 87,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        },
        {
            "productKey": "wedding_cake",
            "qtyPurchased": 6,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": "49.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 688,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191207AN4854",
    "dateOfPurchase": "2019-12-07 11:48:57",
    "extendedPrice": 6337.95,
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
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 705,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170121EG4927",
    "dateOfPurchase": "2017-01-21 11:48:57",
    "extendedPrice": 8628.29,
    "customerKey": "CHANTRAV0971",
    "firstName": "Chana",
    "lastName": "Travis",
    "phoneNumber": "+91-346-370-0971",
    "email": "ctravis346@Econnect.com",
    "streetAddressOfBuilding": "5365 Big Stream Road",
    "city": "Bettagere",
    "stateProvince": "Mudigere",
    "locality": "Chickmagalur",
    "country": "IN",
    "postalCode": "577113",
    "latitude": "13.1098",
    "longitude": "75.5716",
    "productsPurchased": [
        {
            "productKey": "layer_cake",
            "qtyPurchased": 524,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": "2.99"
        },
        {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 343,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 578,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        },
        {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 397,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": "0.79"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 816,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20170720IS9570",
    "dateOfPurchase": "2017-07-20 11:48:57",
    "extendedPrice": 1684.3899999999999,
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
            "productKey": "cherry_pie",
            "qtyPurchased": 322,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": "4.99"
        },
        {
            "productKey": "muffin",
            "qtyPurchased": 39,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": "1.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191124CJ1064",
    "dateOfPurchase": "2019-11-24 11:48:57",
    "extendedPrice": 1959.98,
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
    "transactionId": "20170606LQ9827",
    "dateOfPurchase": "2017-06-06 11:48:57",
    "extendedPrice": 11428.03,
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
            "productKey": "chocolate_bunny",
            "qtyPurchased": 812,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        },
        {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 685,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": "8.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20171229UI7239",
    "dateOfPurchase": "2017-12-29 11:48:57",
    "extendedPrice": 11993.359999999999,
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
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 347,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": "0.88"
        },
        {
            "productKey": "torta_cake",
            "qtyPurchased": 347,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": "12.99"
        },
        {
            "productKey": "apple_pie",
            "qtyPurchased": 102,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        },
        {
            "productKey": "birthday_cake",
            "qtyPurchased": 50,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": "9.99"
        },
        {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 951,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": "6.49"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20191025GP3122",
    "dateOfPurchase": "2019-10-25 11:48:57",
    "extendedPrice": 5652.88,
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
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 158,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": "0.59"
        },
        {
            "productKey": "dozen_donuts",
            "qtyPurchased": 478,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": "6.99"
        },
        {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 556,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": "3.99"
        }
    ]
});
db.purchases.insertOne(
{
    "transactionId": "20161008Q9056",
    "dateOfPurchase": "2016-10-08 11:48:57",
    "extendedPrice": 1716.5600000000002,
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
            "productKey": "apple_pie",
            "qtyPurchased": 344,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": "4.99"
        }
    ]
});
