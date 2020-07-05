conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.purchases.drop();
db.purchases.insertOne(
{
    "transactionId": "20191220KJ5597",
    "dateOfPurchase": "2019-12-20 11:48:07",
    "extendedPrice": 4411.16,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 188,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 696,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180611OM1548",
    "dateOfPurchase": "2018-06-11 11:48:07",
    "extendedPrice": 20864.14,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 622,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 764,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160717BM3178",
    "dateOfPurchase": "2016-07-17 11:48:07",
    "extendedPrice": 3786.65,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 443,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 642,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191122TM4131",
    "dateOfPurchase": "2019-11-22 11:48:07",
    "extendedPrice": 5410.26,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 774,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180627MW4432",
    "dateOfPurchase": "2018-06-27 11:48:07",
    "extendedPrice": 16502.89,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 578,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 825,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 530,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 206,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 458,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 514,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161101EB6506",
    "dateOfPurchase": "2016-11-01 11:48:07",
    "extendedPrice": 0,
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
    "productsPurchased": []
});
db.purchases.insertOne(
{
    "transactionId": "20191218EH3294",
    "dateOfPurchase": "2019-12-18 11:48:07",
    "extendedPrice": 5488.1900000000005,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 288,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 217,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 824,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 2,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170111OT6331",
    "dateOfPurchase": "2017-01-11 11:48:07",
    "extendedPrice": 15889.46,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 472,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 77,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 824,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 595,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190113DG2728",
    "dateOfPurchase": "2019-01-13 11:48:07",
    "extendedPrice": 10251.39,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 724,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 737,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200109TK9508",
    "dateOfPurchase": "2020-01-09 11:48:07",
    "extendedPrice": 0,
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
    "productsPurchased": []
});
db.purchases.insertOne(
{
    "transactionId": "20190303GF7963",
    "dateOfPurchase": "2019-03-03 11:48:07",
    "extendedPrice": 14147,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 212,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 541,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 797,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181128TH9381",
    "dateOfPurchase": "2018-11-28 11:48:07",
    "extendedPrice": 14800.850000000002,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 680,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 663,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 299,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 987,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 298,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 139,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190508YC6146",
    "dateOfPurchase": "2019-05-08 11:48:07",
    "extendedPrice": 1236.5700000000002,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 51,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 403,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180105SW7661",
    "dateOfPurchase": "2018-01-05 11:48:07",
    "extendedPrice": 13424.21,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 658,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 809,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 27,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 941,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 804,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180609JM2697",
    "dateOfPurchase": "2018-06-09 11:48:07",
    "extendedPrice": 3471.15,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 939,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 396,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171203YC8481",
    "dateOfPurchase": "2017-12-03 11:48:07",
    "extendedPrice": 4054.61,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 190,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 349,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181103CC1141",
    "dateOfPurchase": "2018-11-03 11:48:07",
    "extendedPrice": 12983.370000000003,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 178,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 138,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 279,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 917,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 627,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 928,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191229MP5764",
    "dateOfPurchase": "2019-12-29 11:48:07",
    "extendedPrice": 818.09,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 91,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190103GP0615",
    "dateOfPurchase": "2019-01-03 11:48:07",
    "extendedPrice": 2245.2999999999997,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 129,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 684,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190307DH7460",
    "dateOfPurchase": "2019-03-07 11:48:07",
    "extendedPrice": 12546.720000000001,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 231,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 546,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 703,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 273,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 205,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191122PP6114",
    "dateOfPurchase": "2019-11-22 11:48:07",
    "extendedPrice": 568.0500000000001,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 630,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 105,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180521RW1863",
    "dateOfPurchase": "2018-05-21 11:48:07",
    "extendedPrice": 3807.01,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 322,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 448,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 982,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 217,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180423DG7853",
    "dateOfPurchase": "2018-04-23 11:48:07",
    "extendedPrice": 8645.17,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 596,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 62,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 725,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190929FH8912",
    "dateOfPurchase": "2019-09-29 11:48:07",
    "extendedPrice": 14473.85,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 588,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 340,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 787,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170409TM0958",
    "dateOfPurchase": "2017-04-09 11:48:07",
    "extendedPrice": 7402.849999999999,
    "customerKey": "TERRMILL6553",
    "firstName": "Terry",
    "lastName": "Miller",
    "phoneNumber": "+91-352-344-6553",
    "email": "tmiller352@Turkcell.com",
    "streetAddressOfBuilding": "1238 Blue Mountain Road",
    "city": "Lambagaon",
    "stateProvince": "Jasinghpur",
    "locality": "Kangra",
    "country": "IN",
    "postalCode": "176096",
    "latitude": "31.9126",
    "longitude": "76.4971",
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 913,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 155,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 115,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 281,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 33,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180715MV7523",
    "dateOfPurchase": "2018-07-15 11:48:07",
    "extendedPrice": 8520.310000000001,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 537,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 138,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 688,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 590,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191108KS4935",
    "dateOfPurchase": "2019-11-08 11:48:07",
    "extendedPrice": 4972.91,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 363,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 188,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 225,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 723,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180128SF2383",
    "dateOfPurchase": "2018-01-28 11:48:07",
    "extendedPrice": 7291.62,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 753,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 885,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180523ET7617",
    "dateOfPurchase": "2018-05-23 11:48:07",
    "extendedPrice": 21072.010000000002,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 614,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 403,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 849,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 547,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191229PG8153",
    "dateOfPurchase": "2019-12-29 11:48:07",
    "extendedPrice": 8910.85,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 655,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 510,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170521ZN0526",
    "dateOfPurchase": "2017-05-21 11:48:07",
    "extendedPrice": 34922.46000000001,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 605,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 757,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 455,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 632,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180825TK8902",
    "dateOfPurchase": "2018-08-25 11:48:07",
    "extendedPrice": 3769.5600000000004,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 139,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 505,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190531RK1207",
    "dateOfPurchase": "2019-05-31 11:48:07",
    "extendedPrice": 3012.8900000000003,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 105,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 255,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 401,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161130CT4824",
    "dateOfPurchase": "2016-11-30 11:48:07",
    "extendedPrice": 7221.820000000001,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 262,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 963,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 205,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 311,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180903WM7057",
    "dateOfPurchase": "2018-09-03 11:48:07",
    "extendedPrice": 13730.860000000002,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 153,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 577,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 842,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 370,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 332,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190523KS5108",
    "dateOfPurchase": "2019-05-23 11:48:07",
    "extendedPrice": 6733.310000000001,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 9,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 891,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 811,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 946,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181018GM6382",
    "dateOfPurchase": "2018-10-18 11:48:07",
    "extendedPrice": 8560.97,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 928,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 910,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 70,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160716SW5641",
    "dateOfPurchase": "2016-07-16 11:48:07",
    "extendedPrice": 1516.29,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 915,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 306,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190512EB6210",
    "dateOfPurchase": "2019-05-12 11:48:07",
    "extendedPrice": 1867.3200000000002,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 468,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180808JH9460",
    "dateOfPurchase": "2018-08-08 11:48:07",
    "extendedPrice": 16342.12,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 926,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 253,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 740,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 949,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170328HG3813",
    "dateOfPurchase": "2017-03-28 11:48:07",
    "extendedPrice": 7123.369999999999,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 877,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 401,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191104MS7121",
    "dateOfPurchase": "2019-11-04 11:48:07",
    "extendedPrice": 5877.700000000001,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 506,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 824,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170908EB3454",
    "dateOfPurchase": "2017-09-08 11:48:07",
    "extendedPrice": 8556.160000000002,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 397,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 837,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190105GM3598",
    "dateOfPurchase": "2019-01-05 11:48:07",
    "extendedPrice": 56810.37,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 731,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 156,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 358,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 923,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191108IW2149",
    "dateOfPurchase": "2019-11-08 11:48:07",
    "extendedPrice": 7451.34,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 364,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 320,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 527,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 381,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190121MS7927",
    "dateOfPurchase": "2019-01-21 11:48:07",
    "extendedPrice": 2021.2400000000002,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 676,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171229RB9741",
    "dateOfPurchase": "2017-12-29 11:48:07",
    "extendedPrice": 3532.92,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 708,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190713LB5004",
    "dateOfPurchase": "2019-07-13 11:48:07",
    "extendedPrice": 2083.53,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 597,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161011MP4369",
    "dateOfPurchase": "2016-10-11 11:48:07",
    "extendedPrice": 6409.380000000001,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 357,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 99,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 906,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181210JA7674",
    "dateOfPurchase": "2018-12-10 11:48:07",
    "extendedPrice": 23085.049999999996,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 759,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 289,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 779,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 605,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190716EH1690",
    "dateOfPurchase": "2019-07-16 11:48:07",
    "extendedPrice": 11145.77,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 523,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 454,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 300,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 684,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180629LB2376",
    "dateOfPurchase": "2018-06-29 11:48:07",
    "extendedPrice": 17788.230000000003,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 822,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 776,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 648,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 80,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 530,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 221,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171204CI2679",
    "dateOfPurchase": "2017-12-04 11:48:07",
    "extendedPrice": 2991.8500000000004,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 346,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 180,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 669,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191017TS5798",
    "dateOfPurchase": "2019-10-17 11:48:07",
    "extendedPrice": 18123.579999999998,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 79,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 89,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 85,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160819MV3993",
    "dateOfPurchase": "2016-08-19 11:48:07",
    "extendedPrice": 11274.64,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 878,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 728,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 586,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 144,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180615DS4945",
    "dateOfPurchase": "2018-06-15 11:48:07",
    "extendedPrice": 7982.530000000001,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 546,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 858,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 232,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 411,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191107MV3841",
    "dateOfPurchase": "2019-11-07 11:48:07",
    "extendedPrice": 1757.8300000000002,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 234,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 441,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161219JC3138",
    "dateOfPurchase": "2016-12-19 11:48:07",
    "extendedPrice": 12456.75,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 499,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 91,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 855,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180818RS5923",
    "dateOfPurchase": "2018-08-18 11:48:07",
    "extendedPrice": 28342.75,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 393,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 519,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 170,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 293,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190923AS9100",
    "dateOfPurchase": "2019-09-23 11:48:07",
    "extendedPrice": 20789.68,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 628,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 265,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 440,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 250,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 269,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181118CB8664",
    "dateOfPurchase": "2018-11-18 11:48:07",
    "extendedPrice": 9368.75,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 174,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 445,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 366,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 616,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 79,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181227DE4492",
    "dateOfPurchase": "2018-12-27 11:48:07",
    "extendedPrice": 20843.95,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 60,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 639,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 623,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 119,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190419MV8174",
    "dateOfPurchase": "2019-04-19 11:48:07",
    "extendedPrice": 5509.400000000001,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 592,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 468,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181211TH7795",
    "dateOfPurchase": "2018-12-11 11:48:07",
    "extendedPrice": 29071.42,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 693,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 559,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 897,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180616MG2449",
    "dateOfPurchase": "2018-06-16 11:48:07",
    "extendedPrice": 10429.980000000001,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 806,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 664,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 24,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 508,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190518PS2951",
    "dateOfPurchase": "2019-05-18 11:48:07",
    "extendedPrice": 11578.75,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 460,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 781,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 444,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 748,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180305AT2527",
    "dateOfPurchase": "2018-03-05 11:48:07",
    "extendedPrice": 8148.4000000000015,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 506,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 442,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 536,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 576,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180504GH4647",
    "dateOfPurchase": "2018-05-04 11:48:07",
    "extendedPrice": 1222.55,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 245,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190424KA6978",
    "dateOfPurchase": "2019-04-24 11:48:07",
    "extendedPrice": 328.06,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 94,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181031OS3558",
    "dateOfPurchase": "2018-10-31 11:48:07",
    "extendedPrice": 2774.69,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 256,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 4,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 365,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 6,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170402HS3876",
    "dateOfPurchase": "2017-04-02 11:48:07",
    "extendedPrice": 8478.720000000001,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 258,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 488,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 115,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 492,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 534,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 431,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190705JS7306",
    "dateOfPurchase": "2019-07-05 11:48:07",
    "extendedPrice": 11028.27,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 539,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 718,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 796,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190228LB4146",
    "dateOfPurchase": "2019-02-28 11:48:07",
    "extendedPrice": 4071.7,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 54,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 884,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 337,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 172,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161221GP9214",
    "dateOfPurchase": "2016-12-21 11:48:07",
    "extendedPrice": 4535.26,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 379,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 495,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190627BN0497",
    "dateOfPurchase": "2019-06-27 11:48:07",
    "extendedPrice": 60045.64,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 758,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 777,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 173,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 738,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 751,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 189,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160803MR2699",
    "dateOfPurchase": "2016-08-03 11:48:07",
    "extendedPrice": 10043,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 41,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 835,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 320,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 607,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 388,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 869,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180919SK8952",
    "dateOfPurchase": "2018-09-19 11:48:07",
    "extendedPrice": 43084.04,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 606,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 740,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 999,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 540,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191210MP8128",
    "dateOfPurchase": "2019-12-10 11:48:07",
    "extendedPrice": 20877.550000000003,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 126,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 918,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 357,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 989,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 541,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 135,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171025DZ9321",
    "dateOfPurchase": "2017-10-25 11:48:07",
    "extendedPrice": 15301.36,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 380,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 763,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 199,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 622,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170910SB4922",
    "dateOfPurchase": "2017-09-10 11:48:07",
    "extendedPrice": 3138.43,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 157,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190822LT0917",
    "dateOfPurchase": "2019-08-22 11:48:07",
    "extendedPrice": 15774.060000000001,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 954,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 483,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 507,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180722RM1163",
    "dateOfPurchase": "2018-07-22 11:48:07",
    "extendedPrice": 3839,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 173,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 927,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181003VH1749",
    "dateOfPurchase": "2018-10-03 11:48:07",
    "extendedPrice": 5979.200000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 560,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 787,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 783,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190728GE9303",
    "dateOfPurchase": "2019-07-28 11:48:07",
    "extendedPrice": 3256.3,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 884,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 86,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180820LB7094",
    "dateOfPurchase": "2018-08-20 11:48:07",
    "extendedPrice": 10465.86,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 982,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 207,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 825,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190325HG1173",
    "dateOfPurchase": "2019-03-25 11:48:07",
    "extendedPrice": 31261.229999999996,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 822,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 946,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 413,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 846,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190406FZ3689",
    "dateOfPurchase": "2019-04-06 11:48:07",
    "extendedPrice": 5337.2300000000005,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 936,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 191,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190325ED2226",
    "dateOfPurchase": "2019-03-25 11:48:07",
    "extendedPrice": 8631.1,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 356,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 434,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161007CV8365",
    "dateOfPurchase": "2016-10-07 11:48:07",
    "extendedPrice": 15112.45,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 227,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 947,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 644,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 789,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 308,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190522RS4640",
    "dateOfPurchase": "2019-05-22 11:48:07",
    "extendedPrice": 5222.45,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 278,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 583,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 121,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 89,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 624,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170810EC6280",
    "dateOfPurchase": "2017-08-10 11:48:07",
    "extendedPrice": 20999.059999999998,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 242,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 622,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 432,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 445,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 271,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 582,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170520AM2554",
    "dateOfPurchase": "2017-05-20 11:48:07",
    "extendedPrice": 9222.9,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 710,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190531SW3109",
    "dateOfPurchase": "2019-05-31 11:48:07",
    "extendedPrice": 9506.68,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 727,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 518,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 737,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161011BM3630",
    "dateOfPurchase": "2016-10-11 11:48:07",
    "extendedPrice": 17495.63,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 618,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 938,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 658,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 927,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 182,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170505DC9977",
    "dateOfPurchase": "2017-05-05 11:48:07",
    "extendedPrice": 13309.25,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 812,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 965,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 108,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190930JM4312",
    "dateOfPurchase": "2019-09-30 11:48:07",
    "extendedPrice": 6718.75,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 796,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 565,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 564,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170220YC6555",
    "dateOfPurchase": "2017-02-20 11:48:07",
    "extendedPrice": 1484.24,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 231,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 95,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181121WM4049",
    "dateOfPurchase": "2018-11-21 11:48:07",
    "extendedPrice": 11762.3,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 594,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 176,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190911IW4495",
    "dateOfPurchase": "2019-09-11 11:48:07",
    "extendedPrice": 11989.740000000002,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 237,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 464,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 564,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 918,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 943,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180104DH1636",
    "dateOfPurchase": "2018-01-04 11:48:07",
    "extendedPrice": 6061.65,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 47,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 63,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 582,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 338,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 329,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 559,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180730CC2227",
    "dateOfPurchase": "2018-07-30 11:48:07",
    "extendedPrice": 2134.86,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 714,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191021GP1513",
    "dateOfPurchase": "2019-10-21 11:48:07",
    "extendedPrice": 9710.630000000001,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 167,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 111,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 600,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 195,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 165,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 599,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171110OS2156",
    "dateOfPurchase": "2017-11-10 11:48:07",
    "extendedPrice": 5081.58,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 798,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 924,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181102RK0310",
    "dateOfPurchase": "2018-11-02 11:48:07",
    "extendedPrice": 4311.360000000001,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 864,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190509CB8972",
    "dateOfPurchase": "2019-05-09 11:48:07",
    "extendedPrice": 22669.489999999998,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 595,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 173,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 858,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 861,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 804,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170205FZ3185",
    "dateOfPurchase": "2017-02-05 11:48:07",
    "extendedPrice": 2317.36,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 664,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171021TO5391",
    "dateOfPurchase": "2017-10-21 11:48:07",
    "extendedPrice": 430.81,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 643,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190829AB6462",
    "dateOfPurchase": "2019-08-29 11:48:07",
    "extendedPrice": 11347.539999999999,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 54,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 258,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 372,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 568,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180809WM7345",
    "dateOfPurchase": "2018-08-09 11:48:07",
    "extendedPrice": 3213.56,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 644,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161021AB3192",
    "dateOfPurchase": "2016-10-21 11:48:07",
    "extendedPrice": 7252.06,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 906,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 655,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 228,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190721RM6046",
    "dateOfPurchase": "2019-07-21 11:48:07",
    "extendedPrice": 5581.47,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 14,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 736,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 434,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 421,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180820AS3186",
    "dateOfPurchase": "2018-08-20 11:48:07",
    "extendedPrice": 17036.66,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 951,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 249,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 420,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 502,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 52,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 438,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180809CF4021",
    "dateOfPurchase": "2018-08-09 11:48:07",
    "extendedPrice": 10621.18,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 123,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 8,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 731,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 607,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 613,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190815MM5453",
    "dateOfPurchase": "2019-08-15 11:48:07",
    "extendedPrice": 11346.73,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 292,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 241,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 24,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 275,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 286,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 509,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171127BM9902",
    "dateOfPurchase": "2017-11-27 11:48:07",
    "extendedPrice": 4585.42,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 152,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 706,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180531KH5821",
    "dateOfPurchase": "2018-05-31 11:48:07",
    "extendedPrice": 5537.460000000001,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 967,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 502,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 34,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 90,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 157,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191209SG8863",
    "dateOfPurchase": "2019-12-09 11:48:07",
    "extendedPrice": 597.54,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 46,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180830KO4119",
    "dateOfPurchase": "2018-08-30 11:48:07",
    "extendedPrice": 59.85,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 15,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190808HG0331",
    "dateOfPurchase": "2019-08-08 11:48:07",
    "extendedPrice": 13497.34,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 849,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 910,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 764,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170430OP3198",
    "dateOfPurchase": "2017-04-30 11:48:07",
    "extendedPrice": 11909.31,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 732,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 744,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 789,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 86,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180424OC0206",
    "dateOfPurchase": "2018-04-24 11:48:07",
    "extendedPrice": 194.48,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 221,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191208TK0585",
    "dateOfPurchase": "2019-12-08 11:48:07",
    "extendedPrice": 5958.5,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 360,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 137,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 253,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161124AB3629",
    "dateOfPurchase": "2016-11-24 11:48:07",
    "extendedPrice": 6880.320000000001,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 140,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 774,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 435,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 588,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 671,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181027AK4256",
    "dateOfPurchase": "2018-10-27 11:48:07",
    "extendedPrice": 9207.18,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 974,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 19,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 946,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 134,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191024LB6821",
    "dateOfPurchase": "2019-10-24 11:48:07",
    "extendedPrice": 15196.289999999999,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 755,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 118,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161102BN4560",
    "dateOfPurchase": "2016-11-02 11:48:07",
    "extendedPrice": 3224.76,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 924,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170319SV1298",
    "dateOfPurchase": "2017-03-19 11:48:07",
    "extendedPrice": 3432.76,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 429,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 631,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 65,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 219,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190428RC7477",
    "dateOfPurchase": "2019-04-28 11:48:07",
    "extendedPrice": 27.93,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 7,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160909EB2267",
    "dateOfPurchase": "2016-09-09 11:48:07",
    "extendedPrice": 13673.159999999998,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 684,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180725JS5586",
    "dateOfPurchase": "2018-07-25 11:48:07",
    "extendedPrice": 11705.720000000001,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 407,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 85,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 108,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 656,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191207EP1359",
    "dateOfPurchase": "2019-12-07 11:48:07",
    "extendedPrice": 3838.71,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 155,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 330,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 367,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181012MS7359",
    "dateOfPurchase": "2018-10-12 11:48:07",
    "extendedPrice": 65844.84000000001,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 552,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 831,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 610,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 723,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190212TH1067",
    "dateOfPurchase": "2019-02-12 11:48:07",
    "extendedPrice": 1240.8500000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 415,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191203AS3714",
    "dateOfPurchase": "2019-12-03 11:48:07",
    "extendedPrice": 1014.9,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 510,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170513AK8546",
    "dateOfPurchase": "2017-05-13 11:48:07",
    "extendedPrice": 6938.030000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 50,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 408,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 652,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 224,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 103,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180209SL9796",
    "dateOfPurchase": "2018-02-09 11:48:07",
    "extendedPrice": 7280.870000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 326,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 8,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 68,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 811,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190616EC4850",
    "dateOfPurchase": "2019-06-16 11:48:07",
    "extendedPrice": 26193.7,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 575,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 595,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 423,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 144,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 179,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180610SW1720",
    "dateOfPurchase": "2018-06-10 11:48:07",
    "extendedPrice": 53281.87,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 958,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 8,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 26,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 481,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 665,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 875,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170125BM1449",
    "dateOfPurchase": "2017-01-25 11:48:07",
    "extendedPrice": 1438.19,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 481,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191228IW2645",
    "dateOfPurchase": "2019-12-28 11:48:07",
    "extendedPrice": 683.63,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 137,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180113DE5968",
    "dateOfPurchase": "2018-01-13 11:48:07",
    "extendedPrice": 2945.09,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 258,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 833,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180214WH3547",
    "dateOfPurchase": "2018-02-14 11:48:07",
    "extendedPrice": 7698.93,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 348,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 659,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 800,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191021RM0145",
    "dateOfPurchase": "2019-10-21 11:48:08",
    "extendedPrice": 11452.95,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 441,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 522,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 342,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160928CK0023",
    "dateOfPurchase": "2016-09-28 11:48:08",
    "extendedPrice": 3340.7400000000002,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 824,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 694,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161001JW6492",
    "dateOfPurchase": "2016-10-01 11:48:08",
    "extendedPrice": 10327.21,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 602,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 655,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 117,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 387,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190715HB0357",
    "dateOfPurchase": "2019-07-15 11:48:08",
    "extendedPrice": 13309.47,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 986,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 867,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190328WM1136",
    "dateOfPurchase": "2019-03-28 11:48:08",
    "extendedPrice": 5784.48,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 90,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 462,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170903JM2000",
    "dateOfPurchase": "2017-09-03 11:48:08",
    "extendedPrice": 31072.21,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 796,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 918,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 816,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 123,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 993,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190824AD9160",
    "dateOfPurchase": "2019-08-24 11:48:08",
    "extendedPrice": 12205.27,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 874,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 664,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 205,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 43,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 614,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170316LB6342",
    "dateOfPurchase": "2017-03-16 11:48:08",
    "extendedPrice": 829.8199999999999,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 17,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 570,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 647,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 7,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190306SW6778",
    "dateOfPurchase": "2019-03-06 11:48:08",
    "extendedPrice": 9761.52,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 747,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 706,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 15,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190418DC7425",
    "dateOfPurchase": "2019-04-18 11:48:08",
    "extendedPrice": 17057.43,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 834,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 623,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190320DH7861",
    "dateOfPurchase": "2019-03-20 11:48:08",
    "extendedPrice": 14171.250000000002,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 830,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 919,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 711,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 34,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 592,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 265,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190130EG1904",
    "dateOfPurchase": "2019-01-30 11:48:08",
    "extendedPrice": 12698.279999999999,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 918,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 935,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 643,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191201VT3253",
    "dateOfPurchase": "2019-12-01 11:48:08",
    "extendedPrice": 2248.92,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 11,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 495,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 326,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170127RK3136",
    "dateOfPurchase": "2017-01-27 11:48:08",
    "extendedPrice": 6834.12,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 476,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 396,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181031CI6392",
    "dateOfPurchase": "2018-10-31 11:48:08",
    "extendedPrice": 7601.73,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 340,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 167,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 238,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 742,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 675,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190705SF9250",
    "dateOfPurchase": "2019-07-05 11:48:08",
    "extendedPrice": 1960.9,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 325,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 85,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180908RC4039",
    "dateOfPurchase": "2018-09-08 11:48:08",
    "extendedPrice": 926.71,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 78,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 911,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160911GM3354",
    "dateOfPurchase": "2016-09-11 11:48:08",
    "extendedPrice": 7206.9800000000005,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 902,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190410ET8619",
    "dateOfPurchase": "2019-04-10 11:48:08",
    "extendedPrice": 5033.49,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 637,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 714,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190122YC3689",
    "dateOfPurchase": "2019-01-22 11:48:08",
    "extendedPrice": 28191.86,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 984,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 918,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 536,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 379,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181024DC0446",
    "dateOfPurchase": "2018-10-24 11:48:08",
    "extendedPrice": 5318.49,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 185,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 960,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 612,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 760,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190408CP3342",
    "dateOfPurchase": "2019-04-08 11:48:08",
    "extendedPrice": 17432.97,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 776,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 534,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 693,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180530MR0461",
    "dateOfPurchase": "2018-05-30 11:48:08",
    "extendedPrice": 5507.49,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 738,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 695,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160830MD9806",
    "dateOfPurchase": "2016-08-30 11:48:08",
    "extendedPrice": 1358.62,
    "customerKey": "MARADUDL8253",
    "firstName": "Mara",
    "lastName": "Dudley",
    "phoneNumber": "+681-345-539-8253",
    "email": "mdudley345@Swisscom.com",
    "streetAddressOfBuilding": "5394 Little Bough Boulevard",
    "city": "Sigave",
    "stateProvince": "Circonscription de Sigave",
    "locality": "Circonscription de Sigave",
    "country": "WF",
    "postalCode": "98620",
    "latitude": "-14.2667",
    "longitude": "-178.1667",
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 298,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 540,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190814RC3683",
    "dateOfPurchase": "2019-08-14 11:48:08",
    "extendedPrice": 8939.29,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 318,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 602,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 683,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170620JB7285",
    "dateOfPurchase": "2017-06-20 11:48:08",
    "extendedPrice": 7052.75,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 215,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 572,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 614,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180517EP0919",
    "dateOfPurchase": "2018-05-17 11:48:08",
    "extendedPrice": 2126.4,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 87,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 675,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 98,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190625KF2734",
    "dateOfPurchase": "2019-06-25 11:48:08",
    "extendedPrice": 15672.159999999998,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 784,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190307CC5377",
    "dateOfPurchase": "2019-03-07 11:48:08",
    "extendedPrice": 17561.9,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 845,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 161,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 268,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 255,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 691,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181005YC0116",
    "dateOfPurchase": "2018-10-05 11:48:08",
    "extendedPrice": 849.41,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 492,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 187,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190916GE8642",
    "dateOfPurchase": "2019-09-16 11:48:08",
    "extendedPrice": 12111.83,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 594,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 403,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171025CG9204",
    "dateOfPurchase": "2017-10-25 11:48:08",
    "extendedPrice": 15767.330000000002,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 238,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 198,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 349,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 349,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 165,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180731MM2406",
    "dateOfPurchase": "2018-07-31 11:48:08",
    "extendedPrice": 5815.68,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 832,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170209LI0190",
    "dateOfPurchase": "2017-02-09 11:48:08",
    "extendedPrice": 6524.5,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 627,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 609,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 364,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170121GH0619",
    "dateOfPurchase": "2017-01-21 11:48:08",
    "extendedPrice": 2072.1000000000004,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 672,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 18,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191025TJ3801",
    "dateOfPurchase": "2019-10-25 11:48:08",
    "extendedPrice": 5367.2300000000005,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 827,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190205BM8932",
    "dateOfPurchase": "2019-02-05 11:48:08",
    "extendedPrice": 4948.24,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 549,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 19,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170212JW6736",
    "dateOfPurchase": "2017-02-12 11:48:08",
    "extendedPrice": 17036.760000000002,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 749,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 689,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 790,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 546,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190504OB9080",
    "dateOfPurchase": "2019-05-04 11:48:08",
    "extendedPrice": 3668.1900000000005,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 93,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 838,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190318NM2489",
    "dateOfPurchase": "2019-03-18 11:48:08",
    "extendedPrice": 8875.84,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 349,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 598,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 599,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 522,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170719RK5563",
    "dateOfPurchase": "2017-07-19 11:48:08",
    "extendedPrice": 2404.61,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 689,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190802HM5140",
    "dateOfPurchase": "2019-08-02 11:48:08",
    "extendedPrice": 12350.01,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 656,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 617,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 883,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 595,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 942,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 44,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170823DS3678",
    "dateOfPurchase": "2017-08-23 11:48:08",
    "extendedPrice": 11808.220000000001,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 615,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 12,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 691,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171008PB0381",
    "dateOfPurchase": "2017-10-08 11:48:08",
    "extendedPrice": 1978.06,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 994,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190425LB5363",
    "dateOfPurchase": "2019-04-25 11:48:08",
    "extendedPrice": 6009.4800000000005,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 174,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 117,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180124GM7835",
    "dateOfPurchase": "2018-01-24 11:48:08",
    "extendedPrice": 47645.450000000004,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 619,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 834,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 202,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190114SM3910",
    "dateOfPurchase": "2019-01-14 11:48:08",
    "extendedPrice": 1238.76,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 124,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191007KF6192",
    "dateOfPurchase": "2019-10-07 11:48:08",
    "extendedPrice": 14637.24,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 158,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 817,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 288,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 425,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180308AH1934",
    "dateOfPurchase": "2018-03-08 11:48:08",
    "extendedPrice": 4110.22,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 936,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 936,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 274,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171020BW6541",
    "dateOfPurchase": "2017-10-20 11:48:08",
    "extendedPrice": 14558.359999999999,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 561,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 566,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 445,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 100,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 242,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191016GM2145",
    "dateOfPurchase": "2019-10-16 11:48:08",
    "extendedPrice": 226.38,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 462,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180206KG2160",
    "dateOfPurchase": "2018-02-06 11:48:08",
    "extendedPrice": 3902.2200000000003,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 978,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190102VT5122",
    "dateOfPurchase": "2019-01-02 11:48:08",
    "extendedPrice": 15888.29,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 623,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 455,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 406,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 720,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191129EV8085",
    "dateOfPurchase": "2019-11-29 11:48:08",
    "extendedPrice": 9658.980000000001,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 111,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 400,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 629,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 764,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160829JH0979",
    "dateOfPurchase": "2016-08-29 11:48:08",
    "extendedPrice": 16447.789999999997,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 728,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 119,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 918,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 472,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 38,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160810AB0110",
    "dateOfPurchase": "2016-08-10 11:48:08",
    "extendedPrice": 5412.250000000001,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 568,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 494,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 227,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 86,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190530SW1114",
    "dateOfPurchase": "2019-05-30 11:48:08",
    "extendedPrice": 11447.48,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 969,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 883,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 500,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161014SK4542",
    "dateOfPurchase": "2016-10-14 11:48:08",
    "extendedPrice": 8687.43,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 51,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 843,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 70,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 342,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161007JG3351",
    "dateOfPurchase": "2016-10-07 11:48:08",
    "extendedPrice": 6778.31,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 238,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 557,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 310,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 244,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190826BS1028",
    "dateOfPurchase": "2019-08-26 11:48:08",
    "extendedPrice": 13773.26,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 634,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 575,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 985,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 199,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 787,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 94,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180111OF6569",
    "dateOfPurchase": "2018-01-11 11:48:08",
    "extendedPrice": 5556.13,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 67,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 791,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 50,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160720CB8559",
    "dateOfPurchase": "2016-07-20 11:48:08",
    "extendedPrice": 10323.3,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 60,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 379,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 331,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191027EH3004",
    "dateOfPurchase": "2019-10-27 11:48:08",
    "extendedPrice": 8444.4,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 352,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 89,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 748,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 335,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 996,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180830AC2801",
    "dateOfPurchase": "2018-08-30 11:48:08",
    "extendedPrice": 19667.690000000002,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 382,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 986,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 655,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 208,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 713,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 587,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180413ES4993",
    "dateOfPurchase": "2018-04-13 11:48:08",
    "extendedPrice": 17365.559999999998,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 196,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 323,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 941,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 363,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 52,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 552,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160821SW7300",
    "dateOfPurchase": "2016-08-21 11:48:08",
    "extendedPrice": 7908.87,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 655,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 904,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 534,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160801JM4981",
    "dateOfPurchase": "2016-08-01 11:48:08",
    "extendedPrice": 6219.0199999999995,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 323,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 779,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 46,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191012JA0456",
    "dateOfPurchase": "2019-10-12 11:48:08",
    "extendedPrice": 14109.150000000001,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 31,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 826,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 540,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 836,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 379,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 521,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160805BM1994",
    "dateOfPurchase": "2016-08-05 11:48:08",
    "extendedPrice": 11810.210000000001,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 788,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 907,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 424,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170104IV4176",
    "dateOfPurchase": "2017-01-04 11:48:08",
    "extendedPrice": 703.8500000000001,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 184,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 31,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190608MP6237",
    "dateOfPurchase": "2019-06-08 11:48:08",
    "extendedPrice": 4207.92,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 612,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 36,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 780,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161007SD8192",
    "dateOfPurchase": "2016-10-07 11:48:08",
    "extendedPrice": 4517.660000000001,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 291,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 500,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 570,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 154,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 109,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190118AB5866",
    "dateOfPurchase": "2019-01-18 11:48:08",
    "extendedPrice": 7095.55,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 757,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 315,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 523,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 450,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191209MR7481",
    "dateOfPurchase": "2019-12-09 11:48:08",
    "extendedPrice": 13279.22,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 903,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 376,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 162,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 871,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 826,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170120VH0591",
    "dateOfPurchase": "2017-01-20 11:48:08",
    "extendedPrice": 7878.57,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 741,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 358,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 766,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 748,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 547,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171107RP9053",
    "dateOfPurchase": "2017-11-07 11:48:08",
    "extendedPrice": 694.51,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 199,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190619DH5001",
    "dateOfPurchase": "2019-06-19 11:48:08",
    "extendedPrice": 3672.83,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 348,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 293,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180709MM5323",
    "dateOfPurchase": "2018-07-09 11:48:08",
    "extendedPrice": 8413.689999999999,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 297,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 693,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 91,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160707PY5148",
    "dateOfPurchase": "2016-07-07 11:48:08",
    "extendedPrice": 4585.77,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 473,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 415,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 165,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190404MM8557",
    "dateOfPurchase": "2019-04-04 11:48:08",
    "extendedPrice": 9456.04,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 152,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 786,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190312ET9769",
    "dateOfPurchase": "2019-03-12 11:48:08",
    "extendedPrice": 11.97,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 3,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180804PP7450",
    "dateOfPurchase": "2018-08-04 11:48:08",
    "extendedPrice": 10848.1,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 771,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 465,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 625,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 217,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 571,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191114CC4868",
    "dateOfPurchase": "2019-11-14 11:48:08",
    "extendedPrice": 14490.89,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 113,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 705,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 640,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 245,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 258,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160710SK7439",
    "dateOfPurchase": "2016-07-10 11:48:08",
    "extendedPrice": 4994.0199999999995,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 335,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 108,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 737,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 84,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170730PS9235",
    "dateOfPurchase": "2017-07-30 11:48:08",
    "extendedPrice": 71.92,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 8,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190623JB3124",
    "dateOfPurchase": "2019-06-23 11:48:08",
    "extendedPrice": 1996,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 400,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180319CB7734",
    "dateOfPurchase": "2018-03-19 11:48:08",
    "extendedPrice": 0,
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
    "productsPurchased": []
});
db.purchases.insertOne(
{
    "transactionId": "20170118WA3465",
    "dateOfPurchase": "2017-01-18 11:48:08",
    "extendedPrice": 1363.05,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 195,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190614KO2681",
    "dateOfPurchase": "2019-06-14 11:48:08",
    "extendedPrice": 7321.75,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 131,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 830,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 674,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 172,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160720AC6732",
    "dateOfPurchase": "2016-07-20 11:48:08",
    "extendedPrice": 5764.02,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 929,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 286,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 903,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161004GR7565",
    "dateOfPurchase": "2016-10-04 11:48:08",
    "extendedPrice": 15291.61,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 30,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 240,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 614,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190612KJ0835",
    "dateOfPurchase": "2019-06-12 11:48:08",
    "extendedPrice": 16553.25,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 18,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 272,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 107,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 141,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 717,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 920,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170420GF5507",
    "dateOfPurchase": "2017-04-20 11:48:08",
    "extendedPrice": 10851.4,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 849,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 433,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 428,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170804TS9601",
    "dateOfPurchase": "2017-08-04 11:48:08",
    "extendedPrice": 303.6,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 345,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190803KJ2010",
    "dateOfPurchase": "2019-08-03 11:48:08",
    "extendedPrice": 7455.550000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 717,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 995,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 602,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 781,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160728TM3885",
    "dateOfPurchase": "2016-07-28 11:48:08",
    "extendedPrice": 18396.27,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 575,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 268,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 730,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180121SM2093",
    "dateOfPurchase": "2018-01-21 11:48:08",
    "extendedPrice": 2935.09,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 841,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190921EC9614",
    "dateOfPurchase": "2019-09-21 11:48:08",
    "extendedPrice": 6508.76,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 724,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190317LA4574",
    "dateOfPurchase": "2019-03-17 11:48:08",
    "extendedPrice": 21.56,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 44,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190302BM1948",
    "dateOfPurchase": "2019-03-02 11:48:08",
    "extendedPrice": 6756.320000000001,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 744,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 513,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 191,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190714GE3581",
    "dateOfPurchase": "2019-07-14 11:48:08",
    "extendedPrice": 49643.64,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 972,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 264,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170108KB9489",
    "dateOfPurchase": "2017-01-08 11:48:08",
    "extendedPrice": 4976.88,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 712,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181130OS7632",
    "dateOfPurchase": "2018-11-30 11:48:08",
    "extendedPrice": 101895.48000000001,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 842,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 493,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 608,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 104,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 608,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190702JG9406",
    "dateOfPurchase": "2019-07-02 11:48:08",
    "extendedPrice": 8641.3,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 553,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 13,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 354,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180811SW3645",
    "dateOfPurchase": "2018-08-11 11:48:08",
    "extendedPrice": 2613.4700000000003,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 70,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 733,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190116CL1996",
    "dateOfPurchase": "2019-01-16 11:48:08",
    "extendedPrice": 5648.14,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 42,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 756,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 869,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 92,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 253,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191017OM9975",
    "dateOfPurchase": "2019-10-17 11:48:08",
    "extendedPrice": 8586.29,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 648,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 572,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 591,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 934,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 622,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180730RB2793",
    "dateOfPurchase": "2018-07-30 11:48:08",
    "extendedPrice": 718.5600000000001,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 144,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170619RB3509",
    "dateOfPurchase": "2017-06-19 11:48:08",
    "extendedPrice": 9111.67,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 536,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 944,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 95,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 353,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191129KM8341",
    "dateOfPurchase": "2019-11-29 11:48:08",
    "extendedPrice": 8530.87,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 339,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 538,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 936,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190318MW1843",
    "dateOfPurchase": "2019-03-18 11:48:08",
    "extendedPrice": 16534.87,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 947,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 764,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 290,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 766,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 198,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160727JS8571",
    "dateOfPurchase": "2016-07-27 11:48:08",
    "extendedPrice": 2732.67,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 192,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191205RW0105",
    "dateOfPurchase": "2019-12-05 11:48:08",
    "extendedPrice": 4.41,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 9,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180909HL8089",
    "dateOfPurchase": "2018-09-09 11:48:08",
    "extendedPrice": 33163.9,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 692,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 404,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 590,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170815JB5974",
    "dateOfPurchase": "2017-08-15 11:48:08",
    "extendedPrice": 16081.44,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 640,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 258,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190812DL4599",
    "dateOfPurchase": "2019-08-12 11:48:08",
    "extendedPrice": 9100.36,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 287,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 873,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 609,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 837,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 843,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 589,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160724DS0613",
    "dateOfPurchase": "2016-07-24 11:48:08",
    "extendedPrice": 6175.4400000000005,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 394,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 962,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171230BL2944",
    "dateOfPurchase": "2017-12-30 11:48:08",
    "extendedPrice": 22000.22,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 648,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 322,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 703,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 343,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190804JA4560",
    "dateOfPurchase": "2019-08-04 11:48:08",
    "extendedPrice": 394.21000000000004,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 499,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161121JD9761",
    "dateOfPurchase": "2016-11-21 11:48:08",
    "extendedPrice": 12453.54,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 214,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 246,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 803,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 906,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 127,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180421JD4114",
    "dateOfPurchase": "2018-04-21 11:48:08",
    "extendedPrice": 266.45,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 152,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 243,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191216EL8043",
    "dateOfPurchase": "2019-12-16 11:48:08",
    "extendedPrice": 11173.57,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 953,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 489,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 992,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 214,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 257,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 938,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180711UC4607",
    "dateOfPurchase": "2018-07-11 11:48:08",
    "extendedPrice": 2768.61,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 240,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 727,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 134,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170802PP7574",
    "dateOfPurchase": "2017-08-02 11:48:08",
    "extendedPrice": 2350.32,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 255,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 172,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 441,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191021DC6596",
    "dateOfPurchase": "2019-10-21 11:48:08",
    "extendedPrice": 16550.600000000002,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 373,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 459,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 593,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 206,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 860,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190122BW7535",
    "dateOfPurchase": "2019-01-22 11:48:08",
    "extendedPrice": 19431.829999999998,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 589,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 669,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 348,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 32,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 70,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 609,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180731JA0607",
    "dateOfPurchase": "2018-07-31 11:48:08",
    "extendedPrice": 10986.28,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 155,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 611,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 169,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 587,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190923AB2014",
    "dateOfPurchase": "2019-09-23 11:48:08",
    "extendedPrice": 6779.470000000001,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 372,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 953,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 470,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 368,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171016TH9132",
    "dateOfPurchase": "2017-10-16 11:48:08",
    "extendedPrice": 15727.869999999999,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 275,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 660,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 203,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 825,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171020MV2275",
    "dateOfPurchase": "2017-10-20 11:48:08",
    "extendedPrice": 1602.19,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 860,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 143,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 228,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190917FT0804",
    "dateOfPurchase": "2019-09-17 11:48:08",
    "extendedPrice": 25184.199999999997,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 343,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 753,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 841,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 839,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 383,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171130MB2029",
    "dateOfPurchase": "2017-11-30 11:48:08",
    "extendedPrice": 1082.9,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 130,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 715,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161007PG3868",
    "dateOfPurchase": "2016-10-07 11:48:08",
    "extendedPrice": 1811.25,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 20,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 355,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191214CT0680",
    "dateOfPurchase": "2019-12-14 11:48:08",
    "extendedPrice": 13057.160000000002,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 24,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 409,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 779,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 272,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170731KM1743",
    "dateOfPurchase": "2017-07-31 11:48:08",
    "extendedPrice": 861.1200000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 288,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170128MG7218",
    "dateOfPurchase": "2017-01-28 11:48:08",
    "extendedPrice": 7669.43,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 79,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 976,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 520,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 123,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200106OS9887",
    "dateOfPurchase": "2020-01-06 11:48:08",
    "extendedPrice": 2671.7200000000003,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 131,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 683,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 972,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180630SP7267",
    "dateOfPurchase": "2018-06-30 11:48:08",
    "extendedPrice": 5489.39,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 857,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 304,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171121MV9726",
    "dateOfPurchase": "2017-11-21 11:48:08",
    "extendedPrice": 281.14,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 104,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 38,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190810KP7210",
    "dateOfPurchase": "2019-08-10 11:48:08",
    "extendedPrice": 2773.87,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 67,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 209,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160808PB0723",
    "dateOfPurchase": "2016-08-08 11:48:08",
    "extendedPrice": 5531.9,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 523,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 696,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 97,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 350,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171001DW6590",
    "dateOfPurchase": "2017-10-01 11:48:08",
    "extendedPrice": 0,
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
    "productsPurchased": []
});
db.purchases.insertOne(
{
    "transactionId": "20190722NW2269",
    "dateOfPurchase": "2019-07-22 11:48:08",
    "extendedPrice": 33169.66,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 463,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 571,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170117HH3904",
    "dateOfPurchase": "2017-01-17 11:48:08",
    "extendedPrice": 8350.369999999999,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 853,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 556,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 904,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160824MD5231",
    "dateOfPurchase": "2016-08-24 11:48:08",
    "extendedPrice": 3030.3,
    "customerKey": "MARADUDL8253",
    "firstName": "Mara",
    "lastName": "Dudley",
    "phoneNumber": "+681-345-539-8253",
    "email": "mdudley345@Swisscom.com",
    "streetAddressOfBuilding": "5394 Little Bough Boulevard",
    "city": "Sigave",
    "stateProvince": "Circonscription de Sigave",
    "locality": "Circonscription de Sigave",
    "country": "WF",
    "postalCode": "98620",
    "latitude": "-14.2667",
    "longitude": "-178.1667",
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 318,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 257,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 397,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190814AC2655",
    "dateOfPurchase": "2019-08-14 11:48:08",
    "extendedPrice": 5267.84,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 645,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 201,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 430,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170525JR2417",
    "dateOfPurchase": "2017-05-25 11:48:08",
    "extendedPrice": 2634.9500000000003,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 755,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171102VE7320",
    "dateOfPurchase": "2017-11-02 11:48:08",
    "extendedPrice": 41832.14,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 796,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 158,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 107,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 175,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190604TP4861",
    "dateOfPurchase": "2019-06-04 11:48:08",
    "extendedPrice": 126.63000000000001,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 189,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180412SM5563",
    "dateOfPurchase": "2018-04-12 11:48:08",
    "extendedPrice": 6258.57,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 233,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 298,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 785,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 169,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 57,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 591,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180106ET9800",
    "dateOfPurchase": "2018-01-06 11:48:08",
    "extendedPrice": 244.9,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 310,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190529WP6377",
    "dateOfPurchase": "2019-05-29 11:48:08",
    "extendedPrice": 7694.889999999999,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 366,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 565,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190208OS8778",
    "dateOfPurchase": "2019-02-08 11:48:08",
    "extendedPrice": 10113.630000000001,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 782,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 822,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 245,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 545,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 821,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180513PP7165",
    "dateOfPurchase": "2018-05-13 11:48:08",
    "extendedPrice": 5452.590000000001,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 763,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 48,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 585,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 463,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 32,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190623AY9326",
    "dateOfPurchase": "2019-06-23 11:48:08",
    "extendedPrice": 10030.97,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 998,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 418,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 487,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170511TS9365",
    "dateOfPurchase": "2017-05-11 11:48:08",
    "extendedPrice": 9431.380000000001,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 185,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 43,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 984,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160917WM4168",
    "dateOfPurchase": "2016-09-17 11:48:08",
    "extendedPrice": 49982,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 883,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 951,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 634,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190612EC5736",
    "dateOfPurchase": "2019-06-12 11:48:08",
    "extendedPrice": 2809.4500000000003,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 314,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 491,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170507KM9146",
    "dateOfPurchase": "2017-05-07 11:48:08",
    "extendedPrice": 10058.86,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 377,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 245,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 313,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 161,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 871,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 827,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190302CP4047",
    "dateOfPurchase": "2019-03-02 11:48:08",
    "extendedPrice": 17837.29,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 505,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 266,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191109KF8859",
    "dateOfPurchase": "2019-11-09 11:48:08",
    "extendedPrice": 3902.98,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 33,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 769,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180814AR0225",
    "dateOfPurchase": "2018-08-14 11:48:08",
    "extendedPrice": 215.28000000000003,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 72,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180203EV2405",
    "dateOfPurchase": "2018-02-03 11:48:08",
    "extendedPrice": 9626.869999999999,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 851,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 475,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 118,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 579,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191116GM6926",
    "dateOfPurchase": "2019-11-16 11:48:08",
    "extendedPrice": 17646.43,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 161,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 738,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 892,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 437,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170117NW5704",
    "dateOfPurchase": "2017-01-17 11:48:08",
    "extendedPrice": 210.14000000000001,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 266,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180518IV3420",
    "dateOfPurchase": "2018-05-18 11:48:08",
    "extendedPrice": 60787.21000000001,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 114,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 347,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190715DR7020",
    "dateOfPurchase": "2019-07-15 11:48:08",
    "extendedPrice": 8098.220000000001,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 816,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 218,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 82,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 199,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 613,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170829DG0982",
    "dateOfPurchase": "2017-08-29 11:48:08",
    "extendedPrice": 17126.54,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 702,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 352,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 922,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 790,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181203NW4064",
    "dateOfPurchase": "2018-12-03 11:48:08",
    "extendedPrice": 15239.01,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 567,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 628,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 760,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 748,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190626AK4937",
    "dateOfPurchase": "2019-06-26 11:48:08",
    "extendedPrice": 38073.03,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 158,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 417,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 101,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180914IW1633",
    "dateOfPurchase": "2018-09-14 11:48:08",
    "extendedPrice": 10650.54,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 507,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 889,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170917JM8649",
    "dateOfPurchase": "2017-09-17 11:48:08",
    "extendedPrice": 5301.31,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 311,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 805,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 403,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190730AC5884",
    "dateOfPurchase": "2019-07-30 11:48:08",
    "extendedPrice": 9059.720000000001,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 563,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 361,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 865,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 609,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180102CG5255",
    "dateOfPurchase": "2018-01-02 11:48:08",
    "extendedPrice": 20902.159999999996,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 534,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 954,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 149,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 130,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 163,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 911,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180920TH8676",
    "dateOfPurchase": "2018-09-20 11:48:08",
    "extendedPrice": 1465.31,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 18,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 731,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190605EH2047",
    "dateOfPurchase": "2019-06-05 11:48:08",
    "extendedPrice": 13463.019999999999,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 344,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 789,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 962,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 446,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 143,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 424,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161221FZ7237",
    "dateOfPurchase": "2016-12-21 11:48:08",
    "extendedPrice": 5075.18,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 782,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160812LB3877",
    "dateOfPurchase": "2016-08-12 11:48:08",
    "extendedPrice": 4427.91,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 233,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 225,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190824OM5799",
    "dateOfPurchase": "2019-08-24 11:48:08",
    "extendedPrice": 29061.33,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 235,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 763,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 424,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 795,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 800,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180221EN3593",
    "dateOfPurchase": "2018-02-21 11:48:08",
    "extendedPrice": 51701.21,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 226,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 960,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 643,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160711CB1187",
    "dateOfPurchase": "2016-07-11 11:48:08",
    "extendedPrice": 6774.300000000001,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 841,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 547,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 583,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 693,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 853,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190520AK2606",
    "dateOfPurchase": "2019-05-20 11:48:08",
    "extendedPrice": 1444.54,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 19,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 27,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180307FH1025",
    "dateOfPurchase": "2018-03-07 11:48:08",
    "extendedPrice": 3818.7400000000002,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 186,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 989,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 741,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181113CC1438",
    "dateOfPurchase": "2018-11-13 11:48:08",
    "extendedPrice": 1157.13,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 387,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190423JB2842",
    "dateOfPurchase": "2019-04-23 11:48:08",
    "extendedPrice": 6056.7300000000005,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 130,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 261,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 537,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 782,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 383,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 382,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160730LB8929",
    "dateOfPurchase": "2016-07-30 11:48:08",
    "extendedPrice": 10344.449999999999,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 505,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 50,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190110DC1726",
    "dateOfPurchase": "2019-01-10 11:48:08",
    "extendedPrice": 5856.56,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 61,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 391,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 430,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 832,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190422HC9728",
    "dateOfPurchase": "2019-04-22 11:48:08",
    "extendedPrice": 1103.3100000000002,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 369,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181016SM7782",
    "dateOfPurchase": "2018-10-16 11:48:08",
    "extendedPrice": 13797.24,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 276,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181210RP5761",
    "dateOfPurchase": "2018-12-10 11:48:08",
    "extendedPrice": 21594.73,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 661,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 366,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191120WP2349",
    "dateOfPurchase": "2019-11-20 11:48:08",
    "extendedPrice": 9038.79,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 914,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 793,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 340,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180916CC1177",
    "dateOfPurchase": "2018-09-16 11:48:08",
    "extendedPrice": 1070.67,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 107,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 502,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180513RP6810",
    "dateOfPurchase": "2018-05-13 11:48:08",
    "extendedPrice": 15764.68,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 676,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 706,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 729,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 211,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 701,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190911JA9908",
    "dateOfPurchase": "2019-09-11 11:48:08",
    "extendedPrice": 17275.710000000003,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 46,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 374,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 731,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 580,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 198,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190314BL0862",
    "dateOfPurchase": "2019-03-14 11:48:08",
    "extendedPrice": 7225.95,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 41,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 768,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 296,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180128CB7582",
    "dateOfPurchase": "2018-01-28 11:48:08",
    "extendedPrice": 10796.800000000001,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 615,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 523,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 532,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191021OS5903",
    "dateOfPurchase": "2019-10-21 11:48:08",
    "extendedPrice": 4486.54,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 470,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 836,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170401KB0242",
    "dateOfPurchase": "2017-04-01 11:48:08",
    "extendedPrice": 2765.75,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 925,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170929JO4233",
    "dateOfPurchase": "2017-09-29 11:48:08",
    "extendedPrice": 2994.64,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 300,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 892,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200113RB9979",
    "dateOfPurchase": "2020-01-13 11:48:08",
    "extendedPrice": 2484.69,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 831,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171217MR4000",
    "dateOfPurchase": "2017-12-17 11:48:08",
    "extendedPrice": 9133.630000000001,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 752,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 985,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170603IA1877",
    "dateOfPurchase": "2017-06-03 11:48:08",
    "extendedPrice": 27077.1,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 712,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 848,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 781,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 886,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 933,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191110CB9589",
    "dateOfPurchase": "2019-11-10 11:48:08",
    "extendedPrice": 29666.98,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 325,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 902,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 934,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 621,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190401CC6030",
    "dateOfPurchase": "2019-04-01 11:48:08",
    "extendedPrice": 1699.66,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 34,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180520MH5748",
    "dateOfPurchase": "2018-05-20 11:48:08",
    "extendedPrice": 9538.580000000002,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 143,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 599,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191017KB6395",
    "dateOfPurchase": "2019-10-17 11:48:08",
    "extendedPrice": 6863.13,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 687,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180928LB8528",
    "dateOfPurchase": "2018-09-28 11:48:08",
    "extendedPrice": 2352.94,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 772,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 234,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180525AH5962",
    "dateOfPurchase": "2018-05-25 11:48:08",
    "extendedPrice": 4256.490000000001,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 278,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 195,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 858,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190627PG1048",
    "dateOfPurchase": "2019-06-27 11:48:08",
    "extendedPrice": 28269.71,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 702,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 499,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 74,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 402,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 672,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190218AB8375",
    "dateOfPurchase": "2019-02-18 11:48:08",
    "extendedPrice": 7373.2300000000005,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 940,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 308,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 691,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190116PB2225",
    "dateOfPurchase": "2019-01-16 11:48:08",
    "extendedPrice": 265.24,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 76,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191030NR1106",
    "dateOfPurchase": "2019-10-30 11:48:08",
    "extendedPrice": 58269.96,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 747,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 982,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 161,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 507,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181112PS4775",
    "dateOfPurchase": "2018-11-12 11:48:08",
    "extendedPrice": 11024.52,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 7,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 807,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 424,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 226,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 315,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180809RP5202",
    "dateOfPurchase": "2018-08-09 11:48:08",
    "extendedPrice": 2916.29,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 209,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 62,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 850,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191122LD1046",
    "dateOfPurchase": "2019-11-22 11:48:08",
    "extendedPrice": 4277.610000000001,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 495,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 248,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 297,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 889,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190303LB4397",
    "dateOfPurchase": "2019-03-03 11:48:08",
    "extendedPrice": 4011.98,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 735,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 338,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 284,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161128SW7820",
    "dateOfPurchase": "2016-11-28 11:48:08",
    "extendedPrice": 11039.160000000002,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 652,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 611,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 782,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 520,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 23,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 306,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190612MS6997",
    "dateOfPurchase": "2019-06-12 11:48:08",
    "extendedPrice": 4346.23,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 125,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 550,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 269,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 83,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180103PY2711",
    "dateOfPurchase": "2018-01-03 11:48:08",
    "extendedPrice": 16663.7,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 583,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 198,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 760,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 450,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 389,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180916ZG0554",
    "dateOfPurchase": "2018-09-16 11:48:08",
    "extendedPrice": 10051.11,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 715,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 735,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 459,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190415IV6188",
    "dateOfPurchase": "2019-04-15 11:48:08",
    "extendedPrice": 16626.91,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 450,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 682,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 787,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 759,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 6,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160913DM2848",
    "dateOfPurchase": "2016-09-13 11:48:08",
    "extendedPrice": 6611.300000000001,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 343,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 697,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 831,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 299,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160829HC3661",
    "dateOfPurchase": "2016-08-29 11:48:08",
    "extendedPrice": 829.22,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 254,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 772,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190514GP6648",
    "dateOfPurchase": "2019-05-14 11:48:08",
    "extendedPrice": 6009.04,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 44,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 80,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 756,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 416,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170729NS3064",
    "dateOfPurchase": "2017-07-29 11:48:08",
    "extendedPrice": 7318.480000000001,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 426,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 185,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 839,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 202,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180116WA1761",
    "dateOfPurchase": "2018-01-16 11:48:08",
    "extendedPrice": 8717.41,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 67,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 869,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 30,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 236,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 457,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190723HG0825",
    "dateOfPurchase": "2019-07-23 11:48:08",
    "extendedPrice": 2567.03,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 441,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 206,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180630PY9714",
    "dateOfPurchase": "2018-06-30 11:48:08",
    "extendedPrice": 19730.129999999997,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 987,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180718GF6612",
    "dateOfPurchase": "2018-07-18 11:48:08",
    "extendedPrice": 512.7099999999999,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 869,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190411KB9148",
    "dateOfPurchase": "2019-04-11 11:48:08",
    "extendedPrice": 73.29,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 21,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180424TS8709",
    "dateOfPurchase": "2018-04-24 11:48:08",
    "extendedPrice": 4861.570000000001,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 442,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 951,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190227RB6756",
    "dateOfPurchase": "2019-02-27 11:48:08",
    "extendedPrice": 6742.56,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 974,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 670,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190915NS8430",
    "dateOfPurchase": "2019-09-15 11:48:08",
    "extendedPrice": 16256.52,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 342,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 974,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 141,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 501,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170204CL7013",
    "dateOfPurchase": "2017-02-04 11:48:08",
    "extendedPrice": 13898.910000000002,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 838,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 509,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 586,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 315,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 777,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181220MM1434",
    "dateOfPurchase": "2018-12-20 11:48:08",
    "extendedPrice": 19972.079999999998,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 462,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 930,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190504NV7777",
    "dateOfPurchase": "2019-05-04 11:48:08",
    "extendedPrice": 11770.069999999998,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 240,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 864,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 761,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 807,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180630RC4523",
    "dateOfPurchase": "2018-06-30 11:48:08",
    "extendedPrice": 11943.99,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 606,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 285,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 921,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181111MV1447",
    "dateOfPurchase": "2018-11-11 11:48:08",
    "extendedPrice": 13833.039999999999,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 344,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 434,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 52,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 594,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190606VS7744",
    "dateOfPurchase": "2019-06-06 11:48:08",
    "extendedPrice": 671.29,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 92,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 103,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 32,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161028DG9479",
    "dateOfPurchase": "2016-10-28 11:48:08",
    "extendedPrice": 7368.79,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 666,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 205,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171204AH1408",
    "dateOfPurchase": "2017-12-04 11:48:08",
    "extendedPrice": 18135.38,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 63,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 845,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 884,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 672,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 809,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 559,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190710EB9798",
    "dateOfPurchase": "2019-07-10 11:48:08",
    "extendedPrice": 11833.89,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 911,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180912CB7429",
    "dateOfPurchase": "2018-09-12 11:48:08",
    "extendedPrice": 1152.22,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 89,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 233,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 808,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160918HV4397",
    "dateOfPurchase": "2016-09-18 11:48:08",
    "extendedPrice": 1946.22,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 978,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200108VH6328",
    "dateOfPurchase": "2020-01-08 11:48:08",
    "extendedPrice": 16341.309999999998,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 725,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 392,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 546,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171209TC8049",
    "dateOfPurchase": "2017-12-09 11:48:08",
    "extendedPrice": 6349.63,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 486,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 751,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180114JA0853",
    "dateOfPurchase": "2018-01-14 11:48:08",
    "extendedPrice": 6360.34,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 306,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 541,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 190,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 669,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 80,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190509WM1819",
    "dateOfPurchase": "2019-05-09 11:48:08",
    "extendedPrice": 12950.76,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 39,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 985,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161213OC2451",
    "dateOfPurchase": "2016-12-13 11:48:08",
    "extendedPrice": 21328.3,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 374,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 529,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 577,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 79,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 801,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171209NO3429",
    "dateOfPurchase": "2017-12-09 11:48:08",
    "extendedPrice": 9343.45,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 184,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 871,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190514FT9675",
    "dateOfPurchase": "2019-05-14 11:48:08",
    "extendedPrice": 5380.27,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 412,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 586,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 502,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 73,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170331CI2499",
    "dateOfPurchase": "2017-03-31 11:48:08",
    "extendedPrice": 317.59000000000003,
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
    "productsPurchased": {
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 91,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171011EP6714",
    "dateOfPurchase": "2017-10-11 11:48:08",
    "extendedPrice": 8148.370000000001,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 205,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 9,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 649,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190910TH2556",
    "dateOfPurchase": "2019-09-10 11:48:08",
    "extendedPrice": 3180.78,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 632,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 490,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170414AS0541",
    "dateOfPurchase": "2017-04-14 11:48:08",
    "extendedPrice": 717.64,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 12,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 224,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180402EB5308",
    "dateOfPurchase": "2018-04-02 11:48:08",
    "extendedPrice": 14358.16,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 926,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 543,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 865,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 864,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190921BL9735",
    "dateOfPurchase": "2019-09-21 11:48:08",
    "extendedPrice": 4585.070000000001,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 757,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 577,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 612,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180101UC0847",
    "dateOfPurchase": "2018-01-01 11:48:08",
    "extendedPrice": 15236.81,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 538,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 741,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 737,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 916,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 987,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190101KF0907",
    "dateOfPurchase": "2019-01-01 11:48:08",
    "extendedPrice": 14295.599999999999,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 657,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 333,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191108RB0397",
    "dateOfPurchase": "2019-11-08 11:48:08",
    "extendedPrice": 22771.550000000003,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 282,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 708,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 525,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 884,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 990,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170418LB4439",
    "dateOfPurchase": "2017-04-18 11:48:08",
    "extendedPrice": 6976.87,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 412,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 321,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 369,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 151,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180811VH0007",
    "dateOfPurchase": "2018-08-11 11:48:08",
    "extendedPrice": 3686.91,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 783,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 450,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 137,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 796,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190616MG2120",
    "dateOfPurchase": "2019-06-16 11:48:08",
    "extendedPrice": 17078.31,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 413,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 267,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 402,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 407,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 307,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180709SW7958",
    "dateOfPurchase": "2018-07-09 11:48:08",
    "extendedPrice": 11117.289999999999,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 275,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 551,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 751,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 544,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171102CL8845",
    "dateOfPurchase": "2017-11-02 11:48:08",
    "extendedPrice": 15191.440000000002,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 954,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 756,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 562,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190409GM9546",
    "dateOfPurchase": "2019-04-09 11:48:08",
    "extendedPrice": 27694.460000000003,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 554,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171003VE6157",
    "dateOfPurchase": "2017-10-03 11:48:08",
    "extendedPrice": 2465.82,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 618,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161115OB4492",
    "dateOfPurchase": "2016-11-15 11:48:08",
    "extendedPrice": 4724.35,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 454,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 816,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 376,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 207,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190826DM0417",
    "dateOfPurchase": "2019-08-26 11:48:08",
    "extendedPrice": 2854.82,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 818,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190123PW8378",
    "dateOfPurchase": "2019-01-23 11:48:08",
    "extendedPrice": 16609.45,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 30,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 459,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 563,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 205,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 406,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170427JA5935",
    "dateOfPurchase": "2017-04-27 11:48:08",
    "extendedPrice": 10685.68,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 576,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 937,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 119,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191216EN0103",
    "dateOfPurchase": "2019-12-16 11:48:08",
    "extendedPrice": 49904.57000000001,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 798,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 934,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 511,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180311AM7789",
    "dateOfPurchase": "2018-03-11 11:48:08",
    "extendedPrice": 1590.05,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 245,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180721KO8684",
    "dateOfPurchase": "2018-07-21 11:48:08",
    "extendedPrice": 10638.38,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 401,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 401,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 261,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 41,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 768,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191107PG2723",
    "dateOfPurchase": "2019-11-07 11:48:08",
    "extendedPrice": 3499.5800000000004,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 203,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 270,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 543,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190202CC9246",
    "dateOfPurchase": "2019-02-02 11:48:08",
    "extendedPrice": 17134.56,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 985,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 784,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 261,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 237,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 285,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170403FZ4352",
    "dateOfPurchase": "2017-04-03 11:48:08",
    "extendedPrice": 9654.880000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 265,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 85,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 601,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 491,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191105MS0714",
    "dateOfPurchase": "2019-11-05 11:48:08",
    "extendedPrice": 5279.76,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 422,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 288,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 14,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181207EC9960",
    "dateOfPurchase": "2018-12-07 11:48:08",
    "extendedPrice": 31467.7,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 560,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 602,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 641,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 692,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 835,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180404AM4094",
    "dateOfPurchase": "2018-04-04 11:48:08",
    "extendedPrice": 9981.17,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 771,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 739,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 595,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 708,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191125TS1975",
    "dateOfPurchase": "2019-11-25 11:48:08",
    "extendedPrice": 5107.27,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 942,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 931,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170212KS2350",
    "dateOfPurchase": "2017-02-12 11:48:08",
    "extendedPrice": 12359.85,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 244,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 398,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 50,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180223MC5420",
    "dateOfPurchase": "2018-02-23 11:48:08",
    "extendedPrice": 49640.07,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 993,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190905FZ9193",
    "dateOfPurchase": "2019-09-05 11:48:08",
    "extendedPrice": 943.11,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 189,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180313SC3579",
    "dateOfPurchase": "2018-03-13 11:48:08",
    "extendedPrice": 13031.62,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 601,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 816,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 194,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 126,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 815,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161128RI2479",
    "dateOfPurchase": "2016-11-28 11:48:08",
    "extendedPrice": 15887.310000000001,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 895,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 474,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191029OC0069",
    "dateOfPurchase": "2019-10-29 11:48:08",
    "extendedPrice": 0,
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
    "productsPurchased": []
});
db.purchases.insertOne(
{
    "transactionId": "20180710TS0299",
    "dateOfPurchase": "2018-07-10 11:48:08",
    "extendedPrice": 8278.58,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 726,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 689,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 773,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 365,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 419,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171118PY3944",
    "dateOfPurchase": "2017-11-18 11:48:08",
    "extendedPrice": 8711.13,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 643,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 271,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 929,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 194,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200107ZG2789",
    "dateOfPurchase": "2020-01-07 11:48:08",
    "extendedPrice": 21711.3,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 306,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 944,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 820,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180109KF5790",
    "dateOfPurchase": "2018-01-09 11:48:08",
    "extendedPrice": 2427.26,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 374,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180512OS8343",
    "dateOfPurchase": "2018-05-12 11:48:08",
    "extendedPrice": 6656.52,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 451,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 762,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 735,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191129JD4576",
    "dateOfPurchase": "2019-11-29 11:48:08",
    "extendedPrice": 2191.39,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 270,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 255,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 553,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170915PS0196",
    "dateOfPurchase": "2017-09-15 11:48:08",
    "extendedPrice": 23318.93,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 142,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 281,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 795,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170611MB8879",
    "dateOfPurchase": "2017-06-11 11:48:08",
    "extendedPrice": 5244.02,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 923,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 225,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191110HH3486",
    "dateOfPurchase": "2019-11-10 11:48:08",
    "extendedPrice": 12947.41,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 259,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181129LT5996",
    "dateOfPurchase": "2018-11-29 11:48:08",
    "extendedPrice": 6029.0599999999995,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 467,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 927,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180412JA6425",
    "dateOfPurchase": "2018-04-12 11:48:08",
    "extendedPrice": 15450.990000000002,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 524,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 879,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 303,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 699,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 546,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191030TM8831",
    "dateOfPurchase": "2019-10-30 11:48:08",
    "extendedPrice": 1246.44,
    "customerKey": "TERRMILL6553",
    "firstName": "Terry",
    "lastName": "Miller",
    "phoneNumber": "+91-352-344-6553",
    "email": "tmiller352@Turkcell.com",
    "streetAddressOfBuilding": "1238 Blue Mountain Road",
    "city": "Lambagaon",
    "stateProvince": "Jasinghpur",
    "locality": "Kangra",
    "country": "IN",
    "postalCode": "176096",
    "latitude": "31.9126",
    "longitude": "76.4971",
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 156,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181231ZN9655",
    "dateOfPurchase": "2018-12-31 11:48:08",
    "extendedPrice": 9380.51,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 157,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 892,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190316YC1934",
    "dateOfPurchase": "2019-03-16 11:48:08",
    "extendedPrice": 1279.66,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 637,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 90,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190706MW2798",
    "dateOfPurchase": "2019-07-06 11:48:08",
    "extendedPrice": 11453.7,
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
    "productsPurchased": {
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 767,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 827,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180315AC7710",
    "dateOfPurchase": "2018-03-15 11:48:08",
    "extendedPrice": 862.0300000000001,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 247,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170125MH5000",
    "dateOfPurchase": "2017-01-25 11:48:08",
    "extendedPrice": 10081.08,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 839,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 594,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 273,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 250,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 220,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 266,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190910NM6510",
    "dateOfPurchase": "2019-09-10 11:48:08",
    "extendedPrice": 10379.460000000001,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 383,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 679,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180326FT9442",
    "dateOfPurchase": "2018-03-26 11:48:08",
    "extendedPrice": 17816.61,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 255,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 400,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 173,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 242,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 919,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181007DC2354",
    "dateOfPurchase": "2018-10-07 11:48:08",
    "extendedPrice": 5690.9400000000005,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 899,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 647,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 860,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200125RB7096",
    "dateOfPurchase": "2020-01-25 11:48:08",
    "extendedPrice": 4317.030000000001,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 884,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 113,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170805EN4127",
    "dateOfPurchase": "2017-08-05 11:48:08",
    "extendedPrice": 13361.55,
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
    "productsPurchased": {
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 461,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 513,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 282,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 319,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 419,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 977,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180827CL1039",
    "dateOfPurchase": "2018-08-27 11:48:08",
    "extendedPrice": 8680.76,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 920,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 156,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 848,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190515RP8467",
    "dateOfPurchase": "2019-05-15 11:48:08",
    "extendedPrice": 3506.34,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 358,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 208,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171206SM6783",
    "dateOfPurchase": "2017-12-06 11:48:08",
    "extendedPrice": 7919.7300000000005,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 457,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 605,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 841,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 626,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170705GF6631",
    "dateOfPurchase": "2017-07-05 11:48:08",
    "extendedPrice": 2038.16,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 584,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191024KJ0576",
    "dateOfPurchase": "2019-10-24 11:48:08",
    "extendedPrice": 7066.879999999999,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 615,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 477,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 776,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 278,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 959,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181018MS6996",
    "dateOfPurchase": "2018-10-18 11:48:08",
    "extendedPrice": 4651.050000000001,
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
    "productsPurchased": {
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 784,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 661,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180222JS1527",
    "dateOfPurchase": "2018-02-22 11:48:08",
    "extendedPrice": 35914.950000000004,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 434,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 266,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 621,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 664,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190711HS7835",
    "dateOfPurchase": "2019-07-11 11:48:08",
    "extendedPrice": 1211.03,
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
    "productsPurchased": {
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 347,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180205JO7090",
    "dateOfPurchase": "2018-02-05 11:48:08",
    "extendedPrice": 691.89,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 415,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 508,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170425CG6791",
    "dateOfPurchase": "2017-04-25 11:48:08",
    "extendedPrice": 8870.310000000001,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 282,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 634,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 327,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 68,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 508,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190728GP9541",
    "dateOfPurchase": "2019-07-28 11:48:08",
    "extendedPrice": 13863.03,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 925,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 432,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 123,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 665,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 952,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180603LB4871",
    "dateOfPurchase": "2018-06-03 11:48:08",
    "extendedPrice": 723.5500000000001,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 145,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170626LL9191",
    "dateOfPurchase": "2017-06-26 11:48:08",
    "extendedPrice": 22851.920000000002,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 118,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 491,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 888,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 398,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 853,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 760,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190911MP3044",
    "dateOfPurchase": "2019-09-11 11:48:08",
    "extendedPrice": 159.46,
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
    "productsPurchased": {
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 238,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161105DZ6156",
    "dateOfPurchase": "2016-11-05 11:48:08",
    "extendedPrice": 9025.52,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 903,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 826,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 758,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 567,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170731SM8300",
    "dateOfPurchase": "2017-07-31 11:48:08",
    "extendedPrice": 15816.98,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 988,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 882,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 388,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 839,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191119NM9494",
    "dateOfPurchase": "2019-11-19 11:48:08",
    "extendedPrice": 8081.580000000001,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 801,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 378,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 246,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 117,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170311JS8650",
    "dateOfPurchase": "2017-03-11 11:48:08",
    "extendedPrice": 34930.5,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 676,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 20,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 811,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 799,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 503,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170530JS3468",
    "dateOfPurchase": "2017-05-30 11:48:08",
    "extendedPrice": 10708.16,
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
    "productsPurchased": {
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 916,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 899,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 960,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 319,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20191110MS0168",
    "dateOfPurchase": "2019-11-10 11:48:08",
    "extendedPrice": 3833.46,
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
    "productsPurchased": {
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 415,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 412,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 647,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161218TP8656",
    "dateOfPurchase": "2016-12-18 11:48:08",
    "extendedPrice": 7987.04,
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
    "productsPurchased": {
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 145,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 651,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 30,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 244,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 316,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180730OF2199",
    "dateOfPurchase": "2018-07-30 11:48:08",
    "extendedPrice": 7023.610000000001,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 554,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 489,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 208,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20200105JA9785",
    "dateOfPurchase": "2020-01-05 11:48:08",
    "extendedPrice": 7312.709999999999,
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
    "productsPurchased": {
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 74,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 498,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 964,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 512,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 481,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180307EB9787",
    "dateOfPurchase": "2018-03-07 11:48:08",
    "extendedPrice": 5245.97,
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
    "productsPurchased": {
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 217,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 65,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 268,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 911,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171109DC7206",
    "dateOfPurchase": "2017-11-09 11:48:08",
    "extendedPrice": 22725.179999999997,
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
    "productsPurchased": {
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 898,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 934,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 733,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 751,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 486,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 102,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190708KJ5195",
    "dateOfPurchase": "2019-07-08 11:48:08",
    "extendedPrice": 6001.200000000001,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 885,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 495,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180609AC8557",
    "dateOfPurchase": "2018-06-09 11:48:08",
    "extendedPrice": 17776.46,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 763,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 602,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 667,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180725RB7202",
    "dateOfPurchase": "2018-07-25 11:48:08",
    "extendedPrice": 12594.65,
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
    "productsPurchased": {
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 526,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 580,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "layer_cake_cherry_topping": {
            "productKey": "layer_cake_cherry_topping",
            "qtyPurchased": 984,
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "price": 3.99
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 404,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 589,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190712IA8119",
    "dateOfPurchase": "2019-07-12 11:48:08",
    "extendedPrice": 11837.400000000001,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 659,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 448,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 257,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 946,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180126TO6335",
    "dateOfPurchase": "2018-01-26 11:48:08",
    "extendedPrice": 51274.81,
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
    "productsPurchased": {
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 441,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 861,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 721,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 319,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 977,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170810NO3874",
    "dateOfPurchase": "2017-08-10 11:48:08",
    "extendedPrice": 937.92,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 574,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 29,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 41,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190423BN2712",
    "dateOfPurchase": "2019-04-23 11:48:08",
    "extendedPrice": 21832.6,
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
    "productsPurchased": {
        "apple_pie": {
            "productKey": "apple_pie",
            "qtyPurchased": 881,
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "price": 4.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 587,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        },
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 612,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 210,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181118NW7493",
    "dateOfPurchase": "2018-11-18 11:48:08",
    "extendedPrice": 3603.5200000000004,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 419,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 676,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 185,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180522CG0226",
    "dateOfPurchase": "2018-05-22 11:48:08",
    "extendedPrice": 15608.73,
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
    "productsPurchased": {
        "valentines_day_chocolate_pack": {
            "productKey": "valentines_day_chocolate_pack",
            "qtyPurchased": 623,
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "price": 19.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 783,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 121,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190417BW7774",
    "dateOfPurchase": "2019-04-17 11:48:08",
    "extendedPrice": 13839.49,
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
    "productsPurchased": {
        "muffin": {
            "productKey": "muffin",
            "qtyPurchased": 370,
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "price": 1.99
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 428,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "chocolate_bunny": {
            "productKey": "chocolate_bunny",
            "qtyPurchased": 838,
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "price": 6.49
        },
        "cake_with_chocolate_frosting": {
            "productKey": "cake_with_chocolate_frosting",
            "qtyPurchased": 615,
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "price": 8.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20180223CV8425",
    "dateOfPurchase": "2018-02-23 11:48:08",
    "extendedPrice": 5361.32,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 98,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 24,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        },
        "chocolate_covered_donut": {
            "productKey": "chocolate_covered_donut",
            "qtyPurchased": 148,
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "price": 0.67
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 552,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 762,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20170615LB7078",
    "dateOfPurchase": "2017-06-15 11:48:08",
    "extendedPrice": 3238.4500000000003,
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
    "productsPurchased": {
        "glow_in_the_dark_donut": {
            "productKey": "glow_in_the_dark_donut",
            "qtyPurchased": 35,
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "price": 0.79
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 920,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190515BR2390",
    "dateOfPurchase": "2019-05-15 11:48:08",
    "extendedPrice": 7793.33,
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
    "productsPurchased": {
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 194,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 437,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 786,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20171204MS3263",
    "dateOfPurchase": "2017-12-04 11:48:08",
    "extendedPrice": 4140.09,
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
    "productsPurchased": {
        "chocolate_chip_cookie": {
            "productKey": "chocolate_chip_cookie",
            "qtyPurchased": 561,
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "price": 0.88
        },
        "chocolate_bar": {
            "productKey": "chocolate_bar",
            "qtyPurchased": 240,
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "price": 2.99
        },
        "dozen_donuts": {
            "productKey": "dozen_donuts",
            "qtyPurchased": 419,
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "price": 6.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181106YC7117",
    "dateOfPurchase": "2018-11-06 11:48:08",
    "extendedPrice": 4852.28,
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
    "productsPurchased": {
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 701,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 789,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "star_and_sprinkles_donut": {
            "productKey": "star_and_sprinkles_donut",
            "qtyPurchased": 317,
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "price": 0.59
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190425NO7486",
    "dateOfPurchase": "2019-04-25 11:48:08",
    "extendedPrice": 13092.68,
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
    "productsPurchased": {
        "carrot_cake": {
            "productKey": "carrot_cake",
            "qtyPurchased": 902,
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "price": 7.99
        },
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 879,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "peanut_truffle": {
            "productKey": "peanut_truffle",
            "qtyPurchased": 784,
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "price": 3.49
        },
        "schweineoehrchen_cookie": {
            "productKey": "schweineoehrchen_cookie",
            "qtyPurchased": 167,
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "price": 0.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20161115CK4440",
    "dateOfPurchase": "2016-11-15 11:48:08",
    "extendedPrice": 39321.509999999995,
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
    "productsPurchased": {
        "wedding_cake": {
            "productKey": "wedding_cake",
            "qtyPurchased": 730,
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "price": 49.99
        },
        "pumpkin_pie": {
            "productKey": "pumpkin_pie",
            "qtyPurchased": 273,
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "price": 4.99
        },
        "layer_cake": {
            "productKey": "layer_cake",
            "qtyPurchased": 180,
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "price": 2.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 266,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20160817AB3924",
    "dateOfPurchase": "2016-08-17 11:48:08",
    "extendedPrice": 8924.82,
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
    "productsPurchased": {
        "raspberry_truffel": {
            "productKey": "raspberry_truffel",
            "qtyPurchased": 193,
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "price": 3.49
        },
        "black_and_tan_truffel": {
            "productKey": "black_and_tan_truffel",
            "qtyPurchased": 859,
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "price": 3.49
        },
        "cherry_pie": {
            "productKey": "cherry_pie",
            "qtyPurchased": 319,
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "price": 4.99
        },
        "loaf_cake": {
            "productKey": "loaf_cake",
            "qtyPurchased": 364,
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "price": 3.99
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20190521JS7790",
    "dateOfPurchase": "2019-05-21 11:48:08",
    "extendedPrice": 12685.939999999999,
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
    "productsPurchased": {
        "torta_cake": {
            "productKey": "torta_cake",
            "qtyPurchased": 727,
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "price": 12.99
        },
        "double_chocolate_truffel": {
            "productKey": "double_chocolate_truffel",
            "qtyPurchased": 929,
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "price": 3.49
        }
    }
});
db.purchases.insertOne(
{
    "transactionId": "20181029VH2320",
    "dateOfPurchase": "2018-10-29 11:48:08",
    "extendedPrice": 9256.18,
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
    "productsPurchased": {
        "birthday_cake": {
            "productKey": "birthday_cake",
            "qtyPurchased": 682,
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "price": 9.99
        },
        "white_chocolate_truffel": {
            "productKey": "white_chocolate_truffel",
            "qtyPurchased": 700,
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "price": 3.49
        }
    }
});
