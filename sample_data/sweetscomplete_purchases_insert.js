conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.purchases.drop();
db.purchases.insertOne(
{
    "transactionId": "201812190000",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Vanetta",
            "lastName": "Roberson",
            "phoneNumber": "+94-217-806-4314",
            "email": "vroberso@OpenWorld.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4426 Short Canyon Boulevard",
            "buildingName": "Building F2",
            "floor": 5,
            "roomApartmentCondoNumber": null,
            "city": "Morontuduwa",
            "stateProvince": "Kalutara",
            "locality": "Kalutara",
            "country": "LK",
            "postalCode": "12564",
            "GeoSpatialInfo": {
                "latitude": "6.6594",
                "longitude": "79.9726"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-31 20:17:24",
        "quantityPurchased": 446,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190001",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mai",
            "lastName": "Barton",
            "phoneNumber": "+596-389-098-1577",
            "email": "mbarton@UI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mbarton"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8142 Red Woods Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Fonds-Saint-Denis",
            "stateProvince": "MQ",
            "locality": "Martinique",
            "country": "MQ",
            "postalCode": "97250",
            "GeoSpatialInfo": {
                "latitude": "14.7333",
                "longitude": "-61.1333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-19 20:17:24",
        "quantityPurchased": 670,
        "extendedPrice": 529.3000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190002",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Carletta",
            "lastName": "Dickson",
            "phoneNumber": "+31-299-154-7023",
            "email": "cdickson@Telecom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cdickson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "68 Big Mountain Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Staphorst",
            "stateProvince": "Staphorst",
            "locality": "Staphorst",
            "country": "NL",
            "postalCode": "7954",
            "GeoSpatialInfo": {
                "latitude": "52.6415",
                "longitude": "6.1609"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-06 20:17:24",
        "quantityPurchased": 44,
        "extendedPrice": 153.56
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190003",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Love",
            "lastName": "Swanson",
            "phoneNumber": "+49-291-404-9046",
            "email": "lswanson@Millicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lswanson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lswanson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9523 Red Bend Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "FD",
            "city": "Arenshausen",
            "stateProvince": "TH",
            "locality": "Eichsfeld",
            "country": "DE",
            "postalCode": "37318",
            "GeoSpatialInfo": {
                "latitude": "51.3761",
                "longitude": "9.9687"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-17 20:17:24",
        "quantityPurchased": 247,
        "extendedPrice": 3208.53
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190004",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angeles",
            "lastName": "Lowe",
            "phoneNumber": "+61-380-177-7593",
            "email": "alowe@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/alowe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4200 Big Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Darlington Point",
            "stateProvince": "NSW",
            "locality": "CANBERRA",
            "country": "AU",
            "postalCode": "2706",
            "GeoSpatialInfo": {
                "latitude": "-34.5694",
                "longitude": "145.9987"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-23 20:17:24",
        "quantityPurchased": 612,
        "extendedPrice": 4889.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190005",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Adrien",
            "lastName": "Eaton",
            "phoneNumber": "+55-270-319-8133",
            "email": "aeaton@APICnet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8620 Red Mountain Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nossa Senhora de Lourdes",
            "stateProvince": "Sergipe",
            "locality": "Sergipe",
            "country": "BR",
            "postalCode": "49890-000",
            "GeoSpatialInfo": {
                "latitude": "-10.1024",
                "longitude": "-37.0277"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-14 20:17:24",
        "quantityPurchased": 379,
        "extendedPrice": 3407.21
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190006",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leon",
            "lastName": "Molina",
            "phoneNumber": "+66-214-798-2054",
            "email": "lmolina@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "443 Blue Woods Avenue",
            "buildingName": "Building E1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sai Mun",
            "stateProvince": "Yasothon",
            "locality": "Yasothon",
            "country": "TH",
            "postalCode": "35170",
            "GeoSpatialInfo": {
                "latitude": "15.95",
                "longitude": "104.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-30 20:17:24",
        "quantityPurchased": 463,
        "extendedPrice": 2310.37
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190007",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tim",
            "lastName": "Trejo",
            "phoneNumber": "+7-350-478-1162",
            "email": "ttrejo@GlasNET.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ttrejo"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3945 Short Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u0435\u0442\u0435\u043d\u0433\u043a\u0435\u0441",
            "stateProvince": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "678505",
            "GeoSpatialInfo": {
                "latitude": "67.63",
                "longitude": "135.55"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-25 20:17:24",
        "quantityPurchased": 268,
        "extendedPrice": 801.32
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190008",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Reba",
            "lastName": "Ramos",
            "phoneNumber": "+371-248-566-2273",
            "email": "rramos@OpenWorld.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rramos"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/rramos"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4841 Short Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dorotpole",
            "stateProvince": "Pu\u0161as pag.",
            "locality": "Pu\u0161as pag.",
            "country": "LV",
            "postalCode": "LV-4635",
            "GeoSpatialInfo": {
                "latitude": "56.2352",
                "longitude": "27.2644"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-05 20:17:24",
        "quantityPurchased": 949,
        "extendedPrice": 635.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190009",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Prince",
            "lastName": "Frazier",
            "phoneNumber": "+353-285-885-9490",
            "email": "pfrazier@Movil.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9086 Blue Woods Ride",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": null,
            "city": "Clones",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "H23",
            "GeoSpatialInfo": {
                "latitude": "54.1833",
                "longitude": "-7.2333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-26 20:17:24",
        "quantityPurchased": 410,
        "extendedPrice": 8195.9
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190010",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nevada",
            "lastName": "Wright",
            "phoneNumber": "+687-364-752-9652",
            "email": "nwright@Sprint.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/nwright"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nwright"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3654 Big Gully Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Houa\u00eflou",
            "stateProvince": "Houa\u00eflou",
            "locality": "Houa\u00eflou",
            "country": "NC",
            "postalCode": "98816",
            "GeoSpatialInfo": {
                "latitude": "-21.2865",
                "longitude": "165.6343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-27 20:17:24",
        "quantityPurchased": 273,
        "extendedPrice": 3546.27
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190011",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sherri",
            "lastName": "Hubbard",
            "phoneNumber": "+7-207-805-1439",
            "email": "shubbard@UI.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/shubbard"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/shubbard"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4772 Long Creek Road",
            "buildingName": "Building 42",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041c\u0430\u043b\u0430\u044f \u0414\u0430\u043d\u0438\u043b\u043e\u0432\u043a\u0430",
            "stateProvince": "\u041c\u041e\u0420\u0414\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u041e\u0420\u0414\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "393620",
            "GeoSpatialInfo": {
                "latitude": "52.1814",
                "longitude": "40.7653"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-01 20:17:24",
        "quantityPurchased": 833,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190012",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gale",
            "lastName": "Roman",
            "phoneNumber": "+7-307-757-5154",
            "email": "groman@AIS.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/groman"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/groman"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8600 Short Woods Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0426\u0430\u043f\u043a\u043e\u0432\u043e",
            "stateProvince": "\u0420\u041e\u0421\u0421\u041e\u0428\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0420\u041e\u0421\u0421\u041e\u0428\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "396646",
            "GeoSpatialInfo": {
                "latitude": "50.7042",
                "longitude": "40.5381"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-21 20:17:24",
        "quantityPurchased": 804,
        "extendedPrice": 2403.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190013",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Samuel",
            "lastName": "Curry",
            "phoneNumber": "+385-379-690-0296",
            "email": "scurry@Rogers.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/scurry"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2296 Little Tree Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mihovljan",
            "stateProvince": "Mihovljan",
            "locality": "Mihovljan",
            "country": "HR",
            "postalCode": "49252",
            "GeoSpatialInfo": {
                "latitude": "46.1331",
                "longitude": "15.9722"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-03-25 20:17:24",
        "quantityPurchased": 627,
        "extendedPrice": 551.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190014",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tiana",
            "lastName": "Webb",
            "phoneNumber": "+46-212-131-1148",
            "email": "twebb@TT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/twebb"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/twebb"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6334 Little Canyon Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "9C",
            "city": "Eskilstuna",
            "stateProvince": "D",
            "locality": "Eskilstuna",
            "country": "SE",
            "postalCode": "633 43",
            "GeoSpatialInfo": {
                "latitude": "59.3666",
                "longitude": "16.5077"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-18 20:17:24",
        "quantityPurchased": 464,
        "extendedPrice": 1851.3600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190015",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margret",
            "lastName": "Reese",
            "phoneNumber": "+691-216-077-7724",
            "email": "mreese@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mreese"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mreese"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9833 Short Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Yap",
            "stateProvince": "State of Yap",
            "locality": "State of Yap",
            "country": "FM",
            "postalCode": "96943",
            "GeoSpatialInfo": {
                "latitude": "7.1383",
                "longitude": "151.5031"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-17 20:17:24",
        "quantityPurchased": 589,
        "extendedPrice": 1761.1100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190016",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angel",
            "lastName": "Dawson",
            "phoneNumber": "+32-233-616-4312",
            "email": "adawson@LGUplus.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/adawson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/adawson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5081 Blue Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F5",
            "city": "Lille",
            "stateProvince": "VLG",
            "locality": "Antwerpen",
            "country": "BE",
            "postalCode": "2275",
            "GeoSpatialInfo": {
                "latitude": "51.2333",
                "longitude": "4.8333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-31 20:17:24",
        "quantityPurchased": 182,
        "extendedPrice": 1181.18
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190017",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Heriberto",
            "lastName": "Donaldson",
            "phoneNumber": "+371-390-306-2470",
            "email": "hdonalds@Jio.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hdonalds"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/hdonalds"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/hdonalds"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8206 Big Gulch Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kau\u0161a",
            "stateProvince": "B3",
            "locality": "Riebi\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-5326",
            "GeoSpatialInfo": {
                "latitude": "56.3839",
                "longitude": "26.7685"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-26 20:17:24",
        "quantityPurchased": 632,
        "extendedPrice": 2205.6800000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190018",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tamisha",
            "lastName": "Mays",
            "phoneNumber": "+359-279-049-1487",
            "email": "tmays@SEEDnet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tmays"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "384 Blue Creek Way",
            "buildingName": null,
            "floor": 4,
            "roomApartmentCondoNumber": null,
            "city": "\u0420\u0443\u0441\u043a\u043e\u0432\u0446\u0438 \/ Ruskovci",
            "stateProvince": "VTR",
            "locality": "\u0412\u0435\u043b\u0438\u043a\u043e \u0422\u044a\u0440\u043d\u043e\u0432\u043e \/ Veliko Turnovo",
            "country": "BG",
            "postalCode": "5035",
            "GeoSpatialInfo": {
                "latitude": "42.8333",
                "longitude": "25.6333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-08 20:17:24",
        "quantityPurchased": 891,
        "extendedPrice": 3109.59
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190019",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Phyllis",
            "lastName": "Soto",
            "phoneNumber": "+1787-127-501-6410",
            "email": "psoto@Orange.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/psoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6759 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Guanica",
            "stateProvince": "Guanica",
            "locality": "Guanica",
            "country": "PR",
            "postalCode": "00653",
            "GeoSpatialInfo": {
                "latitude": "17.9716",
                "longitude": "-66.908"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-03 20:17:24",
        "quantityPurchased": 945,
        "extendedPrice": 47240.55
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190020",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Catherina",
            "lastName": "Stevens",
            "phoneNumber": "+61-337-041-4159",
            "email": "cstevens@NordNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4077 Winding Ridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dampier",
            "stateProvince": "WA",
            "locality": "KALGOORLIE",
            "country": "AU",
            "postalCode": "6713",
            "GeoSpatialInfo": {
                "latitude": "-20.6627",
                "longitude": "116.7126"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-05 20:17:24",
        "quantityPurchased": 140,
        "extendedPrice": 978.6
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190021",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Carlo",
            "lastName": "Gilbert",
            "phoneNumber": "+34-180-841-3727",
            "email": "cgilbert@Vivendi.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "3214 Green Bend Ride",
            "buildingName": "Building C6",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Carbajal (Oviedo)",
            "stateProvince": "AS",
            "locality": "Asturias",
            "country": "ES",
            "postalCode": "33195",
            "GeoSpatialInfo": {
                "latitude": "43.3395",
                "longitude": "-5.8262"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-08 20:17:24",
        "quantityPurchased": 828,
        "extendedPrice": 2475.7200000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190022",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lindsay",
            "lastName": "Hill",
            "phoneNumber": "+66-273-632-2043",
            "email": "lhill@Telstra.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lhill"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7208 Winding Canyon Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "0B",
            "city": "Bung Bun",
            "stateProvince": "Sisaket",
            "locality": "Sisaket",
            "country": "TH",
            "postalCode": "33220",
            "GeoSpatialInfo": {
                "latitude": "15.3214",
                "longitude": "104.0572"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-30 20:17:24",
        "quantityPurchased": 508,
        "extendedPrice": 1772.92
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190023",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jimmie",
            "lastName": "Xiong",
            "phoneNumber": "+61-232-479-5587",
            "email": "jxiong@Zain.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8197 Green Bough Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Alyangula",
            "stateProvince": "NT",
            "locality": "DARWIN",
            "country": "AU",
            "postalCode": "0885",
            "GeoSpatialInfo": {
                "latitude": "-13.8541",
                "longitude": "136.4213"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-16 20:17:24",
        "quantityPurchased": 790,
        "extendedPrice": 695.2
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190024",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Don",
            "lastName": "Jennings",
            "phoneNumber": "+34-372-751-3321",
            "email": "djenning@KTC.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/djenning"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8472 Little Gully Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Maras",
            "stateProvince": "GA",
            "locality": "Ourense",
            "country": "ES",
            "postalCode": "32892",
            "GeoSpatialInfo": {
                "latitude": "41.9319",
                "longitude": "-8.06"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-08 20:17:24",
        "quantityPurchased": 957,
        "extendedPrice": 4775.43
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190025",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Monique",
            "lastName": "Clements",
            "phoneNumber": "+375-235-741-7036",
            "email": "mclement@Jio.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8115 Green Hill Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0417\u0430\u0436\u0435\u0432\u0438\u0447\u0438",
            "stateProvince": "Solighorsk",
            "locality": "Solighorsk",
            "country": "BY",
            "postalCode": "223717",
            "GeoSpatialInfo": {
                "latitude": "52.7899",
                "longitude": "27.6397"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-17 20:17:24",
        "quantityPurchased": 198,
        "extendedPrice": 97.02
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190026",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Franklyn",
            "lastName": "Vu",
            "phoneNumber": "+7-267-833-8708",
            "email": "fvu@Telefonica.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/fvu"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "958 Big Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "70",
            "city": "\u041f\u0435\u043d\u0438\u043d\u0433\u0430",
            "stateProvince": "\u041c\u0423\u0415\u0417\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u0423\u0415\u0417\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "186950",
            "GeoSpatialInfo": {
                "latitude": "63.5",
                "longitude": "32.0667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-28 20:17:24",
        "quantityPurchased": 179,
        "extendedPrice": 1609.21
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190027",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dennise",
            "lastName": "Chan",
            "phoneNumber": "+420-116-809-7567",
            "email": "dchan@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dchan"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/dchan"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/dchan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2448 Big Gulch Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "40",
            "city": "Ponava",
            "stateProvince": "Brno-m\u011bsto",
            "locality": "Brno-m\u011bsto",
            "country": "CZ",
            "postalCode": "602 00",
            "GeoSpatialInfo": {
                "latitude": "48.7667",
                "longitude": "14.7833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-30 20:17:24",
        "quantityPurchased": 93,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190028",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "King",
            "lastName": "Levy",
            "phoneNumber": "+91-396-330-1273",
            "email": "klevy@SingTel.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/klevy"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9490 Little Bend Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kathalbagan",
            "stateProvince": "Sadar",
            "locality": "West Tripura",
            "country": "IN",
            "postalCode": "799006",
            "GeoSpatialInfo": {
                "latitude": "23.7271",
                "longitude": "91.3177"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-09 20:17:24",
        "quantityPurchased": 909,
        "extendedPrice": 3626.9100000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190029",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Thornton",
            "phoneNumber": "+39-346-073-5246",
            "email": "jthornto@Airtel.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jthornto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6999 Little Bridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Comignago",
            "stateProvince": "PM",
            "locality": "Novara",
            "country": "IT",
            "postalCode": "28060",
            "GeoSpatialInfo": {
                "latitude": "45.7149",
                "longitude": "8.564"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-31 20:17:24",
        "quantityPurchased": 309,
        "extendedPrice": 923.9100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190030",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lisa",
            "lastName": "Montgomery",
            "phoneNumber": "+92-122-046-3207",
            "email": "lmontgom@Vivendi.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/lmontgom"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lmontgom"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lmontgom"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lmontgom"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4727 Long Ditch Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Baghtail",
            "stateProvince": "Balochisan",
            "locality": "Balochisan",
            "country": "PK",
            "postalCode": "80301",
            "GeoSpatialInfo": {
                "latitude": "28.1833",
                "longitude": "68.0667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-26 20:17:24",
        "quantityPurchased": 498,
        "extendedPrice": 1489.0200000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190031",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mira",
            "lastName": "Esquivel",
            "phoneNumber": "+46-363-442-3705",
            "email": "mesquive@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mesquive"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1137 Short Creek Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bollebygd",
            "stateProvince": "O",
            "locality": "Bollebygd",
            "country": "SE",
            "postalCode": "517 82",
            "GeoSpatialInfo": {
                "latitude": "57.6687",
                "longitude": "12.5727"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-26 20:17:24",
        "quantityPurchased": 909,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190032",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Houston",
            "lastName": "Livingston",
            "phoneNumber": "+262-381-806-2521",
            "email": "hlivings@Rogers.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hlivings"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/hlivings"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/hlivings"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3816 Big Hill Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sainte-Clotilde",
            "stateProvince": "Reunion (general)",
            "locality": "Reunion (general)",
            "country": "RE",
            "postalCode": "97497 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "-20.8916",
                "longitude": "55.4787"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-04-25 20:17:24",
        "quantityPurchased": 64,
        "extendedPrice": 415.36
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190033",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Loris",
            "lastName": "Tyler",
            "phoneNumber": "+441481-136-874-3404",
            "email": "ltyler@BCE.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ltyler"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9415 Blue Canyon Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Vale",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY3",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-12 20:17:24",
        "quantityPurchased": 128,
        "extendedPrice": 1662.72
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190034",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Vaughn",
            "lastName": "Doyle",
            "phoneNumber": "+687-398-694-5436",
            "email": "vdoyle@Telus.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/vdoyle"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/vdoyle"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/vdoyle"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9629 Blue Gulch Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pon\u00e9rihouen",
            "stateProvince": "Pon\u00e9rihouen",
            "locality": "Pon\u00e9rihouen",
            "country": "NC",
            "postalCode": "98823",
            "GeoSpatialInfo": {
                "latitude": "-21.0765",
                "longitude": "165.4005"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-27 20:17:24",
        "quantityPurchased": 187,
        "extendedPrice": 746.13
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190035",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tabetha",
            "lastName": "Griffin",
            "phoneNumber": "+594-328-996-9978",
            "email": "tgriffin@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tgriffin"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tgriffin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4427 Blue Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "81",
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97331 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-19 20:17:24",
        "quantityPurchased": 937,
        "extendedPrice": 2801.63
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190036",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Aubrey",
            "lastName": "Cochran",
            "phoneNumber": "+354-225-682-8335",
            "email": "acochran@BCE.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/acochran"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2324 Winding Tree Boulevard",
            "buildingName": null,
            "floor": 2,
            "roomApartmentCondoNumber": null,
            "city": "Brei\u00f0dalsv\u00edk",
            "stateProvince": null,
            "locality": null,
            "country": "IS",
            "postalCode": "760",
            "GeoSpatialInfo": {
                "latitude": "64.7921",
                "longitude": "-14.0065"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-20 20:17:24",
        "quantityPurchased": 245,
        "extendedPrice": 12247.550000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190037",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gene",
            "lastName": "Dean",
            "phoneNumber": "+380-206-464-6981",
            "email": "gdean@ICom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/gdean"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/gdean"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1480 Green Canyon Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041e\u0434\u043d\u043e\u0440\u043e\u0431\u0456\u0432\u043a\u0430 (\u041e\u0434\u043d\u043e\u0440\u043e\u0431\u0456\u0432\u0441\u044c\u043a\u0430 \u041f\u0435\u0440\u0448\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
            "stateProvince": "Zolochivskyi",
            "locality": "Zolochivskyi",
            "country": "UA",
            "postalCode": "62215",
            "GeoSpatialInfo": {
                "latitude": "50.3696",
                "longitude": "35.9121"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-07 20:17:24",
        "quantityPurchased": 595,
        "extendedPrice": 2076.55
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190038",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Irving",
            "lastName": "Reyna",
            "phoneNumber": "+375-159-855-5549",
            "email": "ireyna@ICom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ireyna"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1874 Red Bough Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041a\u043e\u0437\u043b\u043e\u0432\u043a\u0430",
            "stateProvince": "Svetloghorsk",
            "locality": "Svetloghorsk",
            "country": "BY",
            "postalCode": "247420",
            "GeoSpatialInfo": {
                "latitude": "52.7913",
                "longitude": "29.4083"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-29 20:17:24",
        "quantityPurchased": 805,
        "extendedPrice": 2809.4500000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190039",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeremy",
            "lastName": "Torres",
            "phoneNumber": "+421-223-042-7823",
            "email": "jtorres@TM.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jtorres"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jtorres"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jtorres"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jtorres"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6453 Blue Ridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "A9",
            "city": "\u010caradice",
            "stateProvince": "NI",
            "locality": "Zlat\u00e9 Moravce",
            "country": "SK",
            "postalCode": "953 01",
            "GeoSpatialInfo": {
                "latitude": "48.3589",
                "longitude": "18.5088"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-02 20:17:24",
        "quantityPurchased": 480,
        "extendedPrice": 2395.2000000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190040",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Blair",
            "lastName": "Christian",
            "phoneNumber": "+63-215-692-7879",
            "email": "bchristi@Orstom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/bchristi"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bchristi"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/bchristi"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4842 Little Tree Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Intramuros",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "1002",
            "GeoSpatialInfo": {
                "latitude": "14.2335",
                "longitude": "121.3623"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-18 20:17:24",
        "quantityPurchased": 186,
        "extendedPrice": 928.14
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190041",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angel",
            "lastName": "Dawson",
            "phoneNumber": "+32-233-616-4312",
            "email": "adawson@LGUplus.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/adawson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/adawson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5081 Blue Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F5",
            "city": "Lille",
            "stateProvince": "VLG",
            "locality": "Antwerpen",
            "country": "BE",
            "postalCode": "2275",
            "GeoSpatialInfo": {
                "latitude": "51.2333",
                "longitude": "4.8333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-10 20:17:24",
        "quantityPurchased": 598,
        "extendedPrice": 3881.02
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190042",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilber",
            "lastName": "Mcbride",
            "phoneNumber": "+353-315-300-8779",
            "email": "wmcbride@EUnet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/wmcbride"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/wmcbride"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1567 Big Gully Avenue",
            "buildingName": "Building C1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Crookstown",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "P14",
            "GeoSpatialInfo": {
                "latitude": "53.0153",
                "longitude": "-6.8106"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-07 20:17:24",
        "quantityPurchased": 419,
        "extendedPrice": 2090.81
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190043",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Catherina",
            "lastName": "Stevens",
            "phoneNumber": "+61-337-041-4159",
            "email": "cstevens@NordNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4077 Winding Ridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dampier",
            "stateProvince": "WA",
            "locality": "KALGOORLIE",
            "country": "AU",
            "postalCode": "6713",
            "GeoSpatialInfo": {
                "latitude": "-20.6627",
                "longitude": "116.7126"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-19 20:17:24",
        "quantityPurchased": 309,
        "extendedPrice": 1232.91
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190044",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lacresha",
            "lastName": "Welch",
            "phoneNumber": "+594-322-397-5777",
            "email": "lwelch@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4614 Red Hill Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97309 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-10 20:17:24",
        "quantityPurchased": 801,
        "extendedPrice": 1593.99
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190045",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Edythe",
            "lastName": "Brewer",
            "phoneNumber": "+35818-335-376-2789",
            "email": "ebrewer@NordNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9276 Little Gully Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Geta",
            "stateProvince": "Geta",
            "locality": "Geta",
            "country": "AX",
            "postalCode": "22340",
            "GeoSpatialInfo": {
                "latitude": "60.3791",
                "longitude": "19.8878"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-02 20:17:24",
        "quantityPurchased": 357,
        "extendedPrice": 174.93
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190046",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Domingo",
            "lastName": "Levy",
            "phoneNumber": "+7-373-435-8117",
            "email": "dlevy@Telus.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dlevy"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/dlevy"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/dlevy"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2791 Blue Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041d\u044f\u0433\u0430\u043d\u044c 1",
            "stateProvince": "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "locality": "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "country": "RU",
            "postalCode": "628181",
            "GeoSpatialInfo": {
                "latitude": "62.1406",
                "longitude": "65.3936"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-12 20:17:24",
        "quantityPurchased": 581,
        "extendedPrice": 2318.19
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190047",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kelley",
            "lastName": "Fowler",
            "phoneNumber": "+386-186-376-8951",
            "email": "kfowler@Orange.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kfowler"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/kfowler"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/kfowler"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8582 Big Ditch Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tolmin",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "5220",
            "GeoSpatialInfo": {
                "latitude": "46.183",
                "longitude": "13.7332"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-27 20:17:24",
        "quantityPurchased": 514,
        "extendedPrice": 3592.86
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190048",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Karena",
            "lastName": "Herring",
            "phoneNumber": "+596-338-781-8500",
            "email": "kherring@Belgacom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/kherring"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/kherring"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1869 Blue Woods Ride",
            "buildingName": null,
            "floor": 19,
            "roomApartmentCondoNumber": null,
            "city": "Saint-Pierre",
            "stateProvince": "MQ",
            "locality": "Martinique",
            "country": "MQ",
            "postalCode": "97250",
            "GeoSpatialInfo": {
                "latitude": "14.7438",
                "longitude": "-61.1753"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-12 20:17:24",
        "quantityPurchased": 934,
        "extendedPrice": 1858.66
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190049",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tamisha",
            "lastName": "Mays",
            "phoneNumber": "+359-279-049-1487",
            "email": "tmays@SEEDnet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tmays"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "384 Blue Creek Way",
            "buildingName": null,
            "floor": 4,
            "roomApartmentCondoNumber": null,
            "city": "\u0420\u0443\u0441\u043a\u043e\u0432\u0446\u0438 \/ Ruskovci",
            "stateProvince": "VTR",
            "locality": "\u0412\u0435\u043b\u0438\u043a\u043e \u0422\u044a\u0440\u043d\u043e\u0432\u043e \/ Veliko Turnovo",
            "country": "BG",
            "postalCode": "5035",
            "GeoSpatialInfo": {
                "latitude": "42.8333",
                "longitude": "25.6333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-19 20:17:24",
        "quantityPurchased": 703,
        "extendedPrice": 555.37
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190050",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosena",
            "lastName": "Mckinney",
            "phoneNumber": "+370-169-834-8494",
            "email": "rmckinne@Rogers.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rmckinne"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rmckinne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8689 Green Stream Street",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Mau\u0161\u0173 k.",
            "stateProvince": "Akmen\u0117s r. sav.",
            "locality": "Akmen\u0117s r. sav.",
            "country": "LT",
            "postalCode": "85001",
            "GeoSpatialInfo": {
                "latitude": "56.3167",
                "longitude": "22.9"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-07 20:17:24",
        "quantityPurchased": 247,
        "extendedPrice": 2220.53
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190051",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Renate",
            "lastName": "Gray",
            "phoneNumber": "+371-163-074-5586",
            "email": "rgray@Orstom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rgray"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/rgray"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7088 Green Hill Circle",
            "buildingName": null,
            "floor": 6,
            "roomApartmentCondoNumber": null,
            "city": "U\u017einkalns",
            "stateProvince": "\u016adr\u012b\u0161u pag.",
            "locality": "\u016adr\u012b\u0161u pag.",
            "country": "LV",
            "postalCode": "LV-5601",
            "GeoSpatialInfo": {
                "latitude": "55.9274",
                "longitude": "27.1967"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-17 20:17:24",
        "quantityPurchased": 415,
        "extendedPrice": 5390.85
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190052",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Edmond",
            "lastName": "Blackburn",
            "phoneNumber": "+681-189-470-2983",
            "email": "eblackbu@WorldNet.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/eblackbu"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/eblackbu"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6217 Big Bough Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sigave",
            "stateProvince": "Circonscription de Sigave",
            "locality": "Circonscription de Sigave",
            "country": "WF",
            "postalCode": "98620",
            "GeoSpatialInfo": {
                "latitude": "-14.2667",
                "longitude": "-178.1667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-16 20:17:24",
        "quantityPurchased": 614,
        "extendedPrice": 1835.8600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190053",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Neva",
            "lastName": "Sweeney",
            "phoneNumber": "+441624-183-573-7097",
            "email": "nsweeney@Relcom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nsweeney"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9736 Short River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Lingague",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM9",
            "GeoSpatialInfo": {
                "latitude": "54.0951",
                "longitude": "-4.6929"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-23 20:17:24",
        "quantityPurchased": 80,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190054",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Robby",
            "lastName": "Hensley",
            "phoneNumber": "+7-332-849-5441",
            "email": "rhensley@Bifty.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rhensley"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/rhensley"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3703 Long Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0428\u0438\u043c\u0441\u043a",
            "stateProvince": "\u0428\u0418\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0428\u0418\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "174150",
            "GeoSpatialInfo": {
                "latitude": "58.2167",
                "longitude": "30.7167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-28 20:17:24",
        "quantityPurchased": 647,
        "extendedPrice": 4199.03
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190055",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Don",
            "lastName": "Jennings",
            "phoneNumber": "+34-372-751-3321",
            "email": "djenning@KTC.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/djenning"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8472 Little Gully Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Maras",
            "stateProvince": "GA",
            "locality": "Ourense",
            "country": "ES",
            "postalCode": "32892",
            "GeoSpatialInfo": {
                "latitude": "41.9319",
                "longitude": "-8.06"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-15 20:17:24",
        "quantityPurchased": 239,
        "extendedPrice": 1192.6100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190056",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Renato",
            "lastName": "Travis",
            "phoneNumber": "+60-395-534-9678",
            "email": "rtravis@SKTelecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rtravis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/rtravis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rtravis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6876 Long Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "85",
            "city": "Seremban",
            "stateProvince": "NSN",
            "locality": "Negeri Sembilan",
            "country": "MY",
            "postalCode": "70674",
            "GeoSpatialInfo": {
                "latitude": "2.7186",
                "longitude": "101.949"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-13 20:17:24",
        "quantityPurchased": 339,
        "extendedPrice": 6776.61
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190057",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilber",
            "lastName": "Mcbride",
            "phoneNumber": "+353-315-300-8779",
            "email": "wmcbride@EUnet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/wmcbride"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/wmcbride"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1567 Big Gully Avenue",
            "buildingName": "Building C1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Crookstown",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "P14",
            "GeoSpatialInfo": {
                "latitude": "53.0153",
                "longitude": "-6.8106"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-21 20:17:24",
        "quantityPurchased": 237,
        "extendedPrice": 11847.630000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190058",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tim",
            "lastName": "Trejo",
            "phoneNumber": "+7-350-478-1162",
            "email": "ttrejo@GlasNET.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ttrejo"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3945 Short Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u0435\u0442\u0435\u043d\u0433\u043a\u0435\u0441",
            "stateProvince": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "678505",
            "GeoSpatialInfo": {
                "latitude": "67.63",
                "longitude": "135.55"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-10 20:17:24",
        "quantityPurchased": 883,
        "extendedPrice": 4406.17
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190059",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Phyllis",
            "lastName": "Soto",
            "phoneNumber": "+1787-127-501-6410",
            "email": "psoto@Orange.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/psoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6759 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Guanica",
            "stateProvince": "Guanica",
            "locality": "Guanica",
            "country": "PR",
            "postalCode": "00653",
            "GeoSpatialInfo": {
                "latitude": "17.9716",
                "longitude": "-66.908"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-01 20:17:24",
        "quantityPurchased": 791,
        "extendedPrice": 2760.59
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190060",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Adele",
            "lastName": "Leonard",
            "phoneNumber": "+351-104-876-8991",
            "email": "aleonard@Chunghwa.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/aleonard"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2921 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Vendas Novas",
            "stateProvince": "Vendas Novas",
            "locality": "Vendas Novas",
            "country": "PT",
            "postalCode": "7080-141",
            "GeoSpatialInfo": {
                "latitude": "38.6771",
                "longitude": "-8.4579"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-27 20:17:24",
        "quantityPurchased": 345,
        "extendedPrice": 3101.55
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190061",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Billy",
            "lastName": "Juarez",
            "phoneNumber": "+385-213-345-5499",
            "email": "bjuarez@SingTel.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/bjuarez"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7045 Winding Gully Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mr\u010devo",
            "stateProvince": "Ora\u0161ac",
            "locality": "Ora\u0161ac",
            "country": "HR",
            "postalCode": "20234",
            "GeoSpatialInfo": {
                "latitude": "42.7333",
                "longitude": "17.9833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-06 20:17:24",
        "quantityPurchased": 455,
        "extendedPrice": 22745.45
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190062",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tosha",
            "lastName": "Francis",
            "phoneNumber": "+1787-165-610-5983",
            "email": "tfrancis@NII.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tfrancis"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tfrancis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/tfrancis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/tfrancis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4138 Winding Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ponce",
            "stateProvince": "Ponce",
            "locality": "Ponce",
            "country": "PR",
            "postalCode": "00717",
            "GeoSpatialInfo": {
                "latitude": "18.0111",
                "longitude": "-66.6141"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-25 20:17:24",
        "quantityPurchased": 634,
        "extendedPrice": 374.06
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190063",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jesus",
            "lastName": "Archer",
            "phoneNumber": "+63-171-335-7076",
            "email": "jarcher@Airtel.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jarcher"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jarcher"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "737 Little Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Malinao",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "5606",
            "GeoSpatialInfo": {
                "latitude": "14",
                "longitude": "121.8333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-01 20:17:24",
        "quantityPurchased": 421,
        "extendedPrice": 1258.7900000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190064",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Odis",
            "lastName": "Fuller",
            "phoneNumber": "+880-144-393-3740",
            "email": "ofuller@DaxNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9298 Short Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Gopaldi",
            "stateProvince": "Araihazar",
            "locality": "Narayanganj",
            "country": "BD",
            "postalCode": "1451",
            "GeoSpatialInfo": {
                "latitude": "23.8057",
                "longitude": "90.7103"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-25 20:17:24",
        "quantityPurchased": 348,
        "extendedPrice": 2780.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190065",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Magda",
            "lastName": "Strong",
            "phoneNumber": "+56-268-420-0770",
            "email": "mstrong@Softbank.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mstrong"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mstrong"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mstrong"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1761 Blue Stream Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "La Higuera",
            "stateProvince": "La Higuera",
            "locality": "Provincia de Elqui",
            "country": "CL",
            "postalCode": "1740000",
            "GeoSpatialInfo": {
                "latitude": "-29.3749",
                "longitude": "-70.9014"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-22 20:17:24",
        "quantityPurchased": 432,
        "extendedPrice": 5611.68
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190066",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eneida",
            "lastName": "Higgins",
            "phoneNumber": "+687-238-468-3309",
            "email": "ehiggins@PTCL.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/ehiggins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "517 Red Bend Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Farino",
            "stateProvince": "Farino",
            "locality": "Farino",
            "country": "NC",
            "postalCode": "98880",
            "GeoSpatialInfo": {
                "latitude": "-21.6651",
                "longitude": "165.776"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-22 20:17:24",
        "quantityPurchased": 502,
        "extendedPrice": 4010.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190067",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Johnetta",
            "lastName": "Sullivan",
            "phoneNumber": "+441481-319-030-0404",
            "email": "jsulliva@AIS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jsulliva"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jsulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3052 Red Creek Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Delancey",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY2",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-16 20:17:24",
        "quantityPurchased": 259,
        "extendedPrice": 204.61
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190068",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margery",
            "lastName": "Meza",
            "phoneNumber": "+441624-203-945-7247",
            "email": "mmeza@KPN.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mmeza"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mmeza"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mmeza"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5676 Big Stream Avenue",
            "buildingName": null,
            "floor": 20,
            "roomApartmentCondoNumber": "94",
            "city": "Ballajora",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM7",
            "GeoSpatialInfo": {
                "latitude": "54.3815",
                "longitude": "-4.4273"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-18 20:17:24",
        "quantityPurchased": 536,
        "extendedPrice": 471.68
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190069",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Thomas",
            "lastName": "Sawyer",
            "phoneNumber": "+55-308-812-2221",
            "email": "tsawyer@KTC.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tsawyer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "38 Green Creek Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ibiapina",
            "stateProvince": "Ceara",
            "locality": "Ceara",
            "country": "BR",
            "postalCode": "62360-000",
            "GeoSpatialInfo": {
                "latitude": "-3.9357",
                "longitude": "-40.9276"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-04 20:17:24",
        "quantityPurchased": 255,
        "extendedPrice": 170.85000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190070",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Micah",
            "lastName": "Hood",
            "phoneNumber": "+47-310-048-2931",
            "email": "mhood@ATT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mhood"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mhood"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3475 Big River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bergen",
            "stateProvince": "Bergen",
            "locality": "Bergen",
            "country": "NO",
            "postalCode": "5089",
            "GeoSpatialInfo": {
                "latitude": "60.393",
                "longitude": "5.3242"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-05 20:17:24",
        "quantityPurchased": 209,
        "extendedPrice": 1669.91
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190071",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andreas",
            "lastName": "Peck",
            "phoneNumber": "+353-196-204-6758",
            "email": "apeck@cerist.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/apeck"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "637 Green Bend Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Newcastle West",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "V42",
            "GeoSpatialInfo": {
                "latitude": "52.4492",
                "longitude": "-9.0611"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-18 20:17:24",
        "quantityPurchased": 301,
        "extendedPrice": 899.99
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190072",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Carrol",
            "lastName": "Phillips",
            "phoneNumber": "+370-242-708-7084",
            "email": "cphillip@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/cphillip"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cphillip"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4466 Little Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kidoli\u0161ki\u0173 k.",
            "stateProvince": "Marijampol\u0117s sav.",
            "locality": "Marijampol\u0117s sav.",
            "country": "LT",
            "postalCode": "68001",
            "GeoSpatialInfo": {
                "latitude": "54.5667",
                "longitude": "23.35"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-05 20:17:24",
        "quantityPurchased": 357,
        "extendedPrice": 1245.93
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190073",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bertram",
            "lastName": "Esquivel",
            "phoneNumber": "+54-345-759-4168",
            "email": "besquive@Telecom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/besquive"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/besquive"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4040 Blue Mound Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "BLANCA CHICA",
            "stateProvince": "R",
            "locality": "Rio Negro",
            "country": "AR",
            "postalCode": "8422",
            "GeoSpatialInfo": {
                "latitude": "-41.4417",
                "longitude": "-68.525"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-18 20:17:24",
        "quantityPurchased": 886,
        "extendedPrice": 5750.14
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190074",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Apryl",
            "lastName": "Mathis",
            "phoneNumber": "+66-197-073-2331",
            "email": "amathis@AlgoNet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/amathis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amathis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2361 Big Creek Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tham Punnara",
            "stateProvince": "Nakhon Sie Thammarat",
            "locality": "Nakhon Sie Thammarat",
            "country": "TH",
            "postalCode": "80260",
            "GeoSpatialInfo": {
                "latitude": "8.54",
                "longitude": "99.65"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-10 20:17:24",
        "quantityPurchased": 371,
        "extendedPrice": 18546.29
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190075",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andria",
            "lastName": "Mccall",
            "phoneNumber": "+389-150-126-8897",
            "email": "amccall@SingTel.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amccall"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5641 Little Creek Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Resava",
            "stateProvince": null,
            "locality": null,
            "country": "MK",
            "postalCode": "1434",
            "GeoSpatialInfo": {
                "latitude": "41.3881",
                "longitude": "21.9781"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-09 20:17:24",
        "quantityPurchased": 656,
        "extendedPrice": 2289.44
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190076",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kelley",
            "lastName": "Howard",
            "phoneNumber": "+385-384-261-8607",
            "email": "khoward@Telkom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/khoward"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/khoward"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6841 Big Hill Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stani\u0161i",
            "stateProvince": "Vi\u017einada",
            "locality": "Vi\u017einada",
            "country": "HR",
            "postalCode": "52447",
            "GeoSpatialInfo": {
                "latitude": "45.1881",
                "longitude": "14.1246"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-07-26 20:17:24",
        "quantityPurchased": 144,
        "extendedPrice": 1006.5600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190077",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Prince",
            "lastName": "Frazier",
            "phoneNumber": "+353-285-885-9490",
            "email": "pfrazier@Movil.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9086 Blue Woods Ride",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": null,
            "city": "Clones",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "H23",
            "GeoSpatialInfo": {
                "latitude": "54.1833",
                "longitude": "-7.2333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-03 20:17:24",
        "quantityPurchased": 872,
        "extendedPrice": 2607.28
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190078",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Raleigh",
            "lastName": "Villarreal",
            "phoneNumber": "+506-264-360-4650",
            "email": "rvillarr@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rvillarr"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8897 Big Creek Boulevard",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": "F3",
            "city": "Merced",
            "stateProvince": "Merced",
            "locality": "San Jos\u00e9",
            "country": "CR",
            "postalCode": "10102",
            "GeoSpatialInfo": {
                "latitude": "9.9397",
                "longitude": "-84.0884"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-20 20:17:24",
        "quantityPurchased": 698,
        "extendedPrice": 2785.02
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190079",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elisha",
            "lastName": "Felix",
            "phoneNumber": "+385-156-157-3739",
            "email": "efelix@NordNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1387 Little Mound Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Paru\u017eevac",
            "stateProvince": "Dubrava",
            "locality": "Dubrava",
            "country": "HR",
            "postalCode": "10342",
            "GeoSpatialInfo": {
                "latitude": "45.8333",
                "longitude": "16.5"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-02 20:17:24",
        "quantityPurchased": 41,
        "extendedPrice": 2049.59
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190080",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tim",
            "lastName": "Trejo",
            "phoneNumber": "+7-350-478-1162",
            "email": "ttrejo@GlasNET.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ttrejo"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3945 Short Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u0435\u0442\u0435\u043d\u0433\u043a\u0435\u0441",
            "stateProvince": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "678505",
            "GeoSpatialInfo": {
                "latitude": "67.63",
                "longitude": "135.55"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-03 20:17:24",
        "quantityPurchased": 704,
        "extendedPrice": 2104.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190081",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Delmer",
            "lastName": "Gutierrez",
            "phoneNumber": "+386-194-053-0030",
            "email": "dgutierr@OTE.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/dgutierr"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5917 Short Creek Ride",
            "buildingName": "Building 6C",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Koper",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "6504",
            "GeoSpatialInfo": {
                "latitude": "45.5469",
                "longitude": "13.7294"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-21 20:17:24",
        "quantityPurchased": 815,
        "extendedPrice": 2844.3500000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190082",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Arlie",
            "lastName": "Short",
            "phoneNumber": "+47-120-384-0294",
            "email": "ashort@Unicom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ashort"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ashort"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4609 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "92",
            "city": "Ny-\u00c5lesund",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9173",
            "GeoSpatialInfo": {
                "latitude": "78.9237",
                "longitude": "11.925"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-23 20:17:24",
        "quantityPurchased": 806,
        "extendedPrice": 1603.94
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190083",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Devon",
            "lastName": "Khan",
            "phoneNumber": "+32-219-368-6703",
            "email": "dkhan@Telefonica.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "7835 Short Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dalhem Feneur",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4607",
            "GeoSpatialInfo": {
                "latitude": "50.7",
                "longitude": "5.7167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-13 20:17:24",
        "quantityPurchased": 149,
        "extendedPrice": 1041.51
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190084",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Cathey",
            "lastName": "Petersen",
            "phoneNumber": "+47-152-514-7835",
            "email": "cpeterse@SingTel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/cpeterse"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/cpeterse"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cpeterse"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1196 Long Hill Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Longyearbyen",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9171",
            "GeoSpatialInfo": {
                "latitude": "78.2233",
                "longitude": "15.6469"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-15 20:17:24",
        "quantityPurchased": 284,
        "extendedPrice": 2553.16
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190085",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mabelle",
            "lastName": "Chan",
            "phoneNumber": "+351-155-643-3837",
            "email": "mchan@CCI.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mchan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8359 Big Bend Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Fam\u00f5es",
            "stateProvince": "Fam\u00f5es",
            "locality": "Odivelas",
            "country": "PT",
            "postalCode": "1685-145",
            "GeoSpatialInfo": {
                "latitude": "38.788",
                "longitude": "-9.2103"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-14 20:17:24",
        "quantityPurchased": 128,
        "extendedPrice": 1662.72
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190086",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lacresha",
            "lastName": "Welch",
            "phoneNumber": "+594-322-397-5777",
            "email": "lwelch@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4614 Red Hill Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97309 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-22 20:17:24",
        "quantityPurchased": 277,
        "extendedPrice": 218.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190087",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andria",
            "lastName": "Mccall",
            "phoneNumber": "+389-150-126-8897",
            "email": "amccall@SingTel.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amccall"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5641 Little Creek Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Resava",
            "stateProvince": null,
            "locality": null,
            "country": "MK",
            "postalCode": "1434",
            "GeoSpatialInfo": {
                "latitude": "41.3881",
                "longitude": "21.9781"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-22 20:17:24",
        "quantityPurchased": 570,
        "extendedPrice": 28494.300000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190088",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Harrell",
            "phoneNumber": "+41-137-955-8730",
            "email": "jharrell@TeleSystems.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jharrell"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2096 Red Hill Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "27",
            "city": "Basel",
            "stateProvince": "BL",
            "locality": "Bezirk Arlesheim",
            "country": "CH",
            "postalCode": "4040",
            "GeoSpatialInfo": {
                "latitude": "47.5186",
                "longitude": "7.6174"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-18 20:17:24",
        "quantityPurchased": 503,
        "extendedPrice": 1503.97
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190089",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Thornton",
            "phoneNumber": "+39-346-073-5246",
            "email": "jthornto@Airtel.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jthornto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6999 Little Bridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Comignago",
            "stateProvince": "PM",
            "locality": "Novara",
            "country": "IT",
            "postalCode": "28060",
            "GeoSpatialInfo": {
                "latitude": "45.7149",
                "longitude": "8.564"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-31 20:17:24",
        "quantityPurchased": 407,
        "extendedPrice": 5286.93
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190090",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lucien",
            "lastName": "Parker",
            "phoneNumber": "+32-382-209-2097",
            "email": "lparker@PTCL.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lparker"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9607 Long Stream Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Vresse-sur-Semois Nafraiture",
            "stateProvince": "WAL",
            "locality": "Namur",
            "country": "BE",
            "postalCode": "5550",
            "GeoSpatialInfo": {
                "latitude": "49.9095",
                "longitude": "5.0262"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-13 20:17:24",
        "quantityPurchased": 171,
        "extendedPrice": 596.7900000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190091",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sherilyn",
            "lastName": "Mcdowell",
            "phoneNumber": "+358-289-154-0860",
            "email": "smcdowel@Telus.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5430 Short Stream Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Huhmarkoski",
            "stateProvince": "Kauhava",
            "locality": "Sein\u00e4joki",
            "country": "FI",
            "postalCode": "62240",
            "GeoSpatialInfo": {
                "latitude": "63.1212",
                "longitude": "23.263"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-18 20:17:24",
        "quantityPurchased": 281,
        "extendedPrice": 980.69
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190092",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Natividad",
            "lastName": "Curtis",
            "phoneNumber": "+377-323-860-4044",
            "email": "ncurtis@EUnet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ncurtis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2020 Winding Bridge Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "76",
            "city": "Larvotto",
            "stateProvince": "Larvotto",
            "locality": "Monaco",
            "country": "MC",
            "postalCode": "98000",
            "GeoSpatialInfo": {
                "latitude": "43.7333",
                "longitude": "7.4333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-15 20:17:24",
        "quantityPurchased": 102,
        "extendedPrice": 406.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190093",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jerilyn",
            "lastName": "Bowen",
            "phoneNumber": "+41-286-012-8510",
            "email": "jbowen@MTN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1122 Big Tree Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Arezen",
            "stateProvince": "GR",
            "locality": "Region Surselva",
            "country": "CH",
            "postalCode": "7104",
            "GeoSpatialInfo": {
                "latitude": "46.7823",
                "longitude": "9.3344"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-10 20:17:24",
        "quantityPurchased": 867,
        "extendedPrice": 684.9300000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190094",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "King",
            "lastName": "Levy",
            "phoneNumber": "+91-396-330-1273",
            "email": "klevy@SingTel.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/klevy"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9490 Little Bend Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kathalbagan",
            "stateProvince": "Sadar",
            "locality": "West Tripura",
            "country": "IN",
            "postalCode": "799006",
            "GeoSpatialInfo": {
                "latitude": "23.7271",
                "longitude": "91.3177"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-17 20:17:24",
        "quantityPurchased": 523,
        "extendedPrice": 2609.77
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190095",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Harrell",
            "phoneNumber": "+41-137-955-8730",
            "email": "jharrell@TeleSystems.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jharrell"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2096 Red Hill Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "27",
            "city": "Basel",
            "stateProvince": "BL",
            "locality": "Bezirk Arlesheim",
            "country": "CH",
            "postalCode": "4040",
            "GeoSpatialInfo": {
                "latitude": "47.5186",
                "longitude": "7.6174"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-30 20:17:24",
        "quantityPurchased": 669,
        "extendedPrice": 2334.81
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190096",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Thornton",
            "phoneNumber": "+39-346-073-5246",
            "email": "jthornto@Airtel.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jthornto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6999 Little Bridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Comignago",
            "stateProvince": "PM",
            "locality": "Novara",
            "country": "IT",
            "postalCode": "28060",
            "GeoSpatialInfo": {
                "latitude": "45.7149",
                "longitude": "8.564"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-03 20:17:24",
        "quantityPurchased": 615,
        "extendedPrice": 1838.8500000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190097",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Alphonse",
            "lastName": "Hines",
            "phoneNumber": "+1671-288-177-0578",
            "email": "ahines@SEEDnet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/ahines"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8936 Winding Canyon Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Piti",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96925",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-11 20:17:24",
        "quantityPurchased": 30,
        "extendedPrice": 14.7
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190098",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ellan",
            "lastName": "Sullivan",
            "phoneNumber": "+506-355-176-1383",
            "email": "esulliva@Chunghwa.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/esulliva"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/esulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "248 Short Bough Way",
            "buildingName": null,
            "floor": 14,
            "roomApartmentCondoNumber": null,
            "city": "San Pablo",
            "stateProvince": "San Pablo",
            "locality": "San Pablo",
            "country": "CR",
            "postalCode": "40901",
            "GeoSpatialInfo": {
                "latitude": "9.9994",
                "longitude": "-84.0905"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-23 20:17:24",
        "quantityPurchased": 57,
        "extendedPrice": 170.43
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190099",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilber",
            "lastName": "Mcbride",
            "phoneNumber": "+353-315-300-8779",
            "email": "wmcbride@EUnet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/wmcbride"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/wmcbride"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1567 Big Gully Avenue",
            "buildingName": "Building C1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Crookstown",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "P14",
            "GeoSpatialInfo": {
                "latitude": "53.0153",
                "longitude": "-6.8106"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-15 20:17:24",
        "quantityPurchased": 502,
        "extendedPrice": 25094.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190100",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shakita",
            "lastName": "Novak",
            "phoneNumber": "+441624-130-761-9116",
            "email": "snovak@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/snovak"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/snovak"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/snovak"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/snovak"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7815 Long Bend Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jurby West",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM7",
            "GeoSpatialInfo": {
                "latitude": "54.3815",
                "longitude": "-4.4273"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-01 20:17:24",
        "quantityPurchased": 789,
        "extendedPrice": 5515.110000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190101",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Joel",
            "lastName": "Whitaker",
            "phoneNumber": "+598-105-243-4306",
            "email": "jwhitake@cerist.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4695 Winding Gulch Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "El Eucaliptus",
            "stateProvince": "Paysandu",
            "locality": "Paysandu",
            "country": "UY",
            "postalCode": "60000",
            "GeoSpatialInfo": {
                "latitude": "-31.899",
                "longitude": "-57.2629"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-04-01 20:17:24",
        "quantityPurchased": 800,
        "extendedPrice": 2392
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190102",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sherri",
            "lastName": "Hubbard",
            "phoneNumber": "+7-207-805-1439",
            "email": "shubbard@UI.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/shubbard"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/shubbard"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4772 Long Creek Road",
            "buildingName": "Building 42",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041c\u0430\u043b\u0430\u044f \u0414\u0430\u043d\u0438\u043b\u043e\u0432\u043a\u0430",
            "stateProvince": "\u041c\u041e\u0420\u0414\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u041e\u0420\u0414\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "393620",
            "GeoSpatialInfo": {
                "latitude": "52.1814",
                "longitude": "40.7653"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-04 20:17:24",
        "quantityPurchased": 673,
        "extendedPrice": 6050.27
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190103",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jasper",
            "lastName": "Estrada",
            "phoneNumber": "+1-153-416-8579",
            "email": "jestrada@WorldNet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jestrada"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jestrada"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jestrada"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4427 Blue Gulch Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "New Franken",
            "stateProvince": "WI",
            "locality": "Brown",
            "country": "US",
            "postalCode": "54229",
            "GeoSpatialInfo": {
                "latitude": "44.5592",
                "longitude": "-87.8235"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-21 20:17:24",
        "quantityPurchased": 910,
        "extendedPrice": 18190.899999999998
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190104",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mira",
            "lastName": "Esquivel",
            "phoneNumber": "+46-363-442-3705",
            "email": "mesquive@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mesquive"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1137 Short Creek Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bollebygd",
            "stateProvince": "O",
            "locality": "Bollebygd",
            "country": "SE",
            "postalCode": "517 82",
            "GeoSpatialInfo": {
                "latitude": "57.6687",
                "longitude": "12.5727"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-05 20:17:24",
        "quantityPurchased": 401,
        "extendedPrice": 8015.99
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190105",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Renato",
            "lastName": "Travis",
            "phoneNumber": "+60-395-534-9678",
            "email": "rtravis@SKTelecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rtravis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/rtravis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rtravis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6876 Long Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "85",
            "city": "Seremban",
            "stateProvince": "NSN",
            "locality": "Negeri Sembilan",
            "country": "MY",
            "postalCode": "70674",
            "GeoSpatialInfo": {
                "latitude": "2.7186",
                "longitude": "101.949"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-15 20:17:24",
        "quantityPurchased": 657,
        "extendedPrice": 2292.9300000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190106",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jaime",
            "lastName": "Dyer",
            "phoneNumber": "+375-327-230-9893",
            "email": "jdyer@Vodafone.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jdyer"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jdyer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "37 Big Ridge Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0421\u0438\u0442\u043d\u0438\u0446\u0430",
            "stateProvince": "Louninets",
            "locality": "Louninets",
            "country": "BY",
            "postalCode": "225685",
            "GeoSpatialInfo": {
                "latitude": "52.1993",
                "longitude": "27.3622"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-18 20:17:24",
        "quantityPurchased": 806,
        "extendedPrice": 2812.94
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190107",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angla",
            "lastName": "Craig",
            "phoneNumber": "+57-252-797-7635",
            "email": "acraig@Telecom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/acraig"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1061 Long Hill Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Aguada",
            "stateProvince": "Aguada",
            "locality": "Aguada",
            "country": "CO",
            "postalCode": "685521",
            "GeoSpatialInfo": {
                "latitude": "6.1816",
                "longitude": "-73.531"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-26 20:17:24",
        "quantityPurchased": 69,
        "extendedPrice": 482.31
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190108",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Roxana",
            "lastName": "Palacios",
            "phoneNumber": "+1-190-679-1467",
            "email": "rpalacio@MegaFon.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rpalacio"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rpalacio"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "734 Blue Woods Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Saint Petersburg",
            "stateProvince": "FL",
            "locality": "Pinellas",
            "country": "US",
            "postalCode": "33736",
            "GeoSpatialInfo": {
                "latitude": "27.8918",
                "longitude": "-82.7248"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-14 20:17:24",
        "quantityPurchased": 277,
        "extendedPrice": 1105.23
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190109",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elke",
            "lastName": "Andrews",
            "phoneNumber": "+1671-121-056-7069",
            "email": "eandrews@KDDI.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/eandrews"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1942 Little Tree Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Asan",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96922",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-30 20:17:24",
        "quantityPurchased": 881,
        "extendedPrice": 2634.19
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190110",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louis",
            "lastName": "Caldwell",
            "phoneNumber": "+41-260-401-2914",
            "email": "lcaldwel@AIS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lcaldwel"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lcaldwel"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lcaldwel"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3162 Winding Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "G\u00f6schenen",
            "stateProvince": "UR",
            "locality": "Uri",
            "country": "CH",
            "postalCode": "6487",
            "GeoSpatialInfo": {
                "latitude": "46.6682",
                "longitude": "8.5871"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-20 20:17:24",
        "quantityPurchased": 35,
        "extendedPrice": 139.65
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190111",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Karin",
            "lastName": "Lucero",
            "phoneNumber": "+81-383-509-4177",
            "email": "klucero@KPN.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/klucero"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/klucero"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/klucero"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1385 Winding Bough Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Heiwa 3-Jo",
            "stateProvince": "Nishi Ku",
            "locality": "Sapporo Shi",
            "country": "JP",
            "postalCode": "063-0023",
            "GeoSpatialInfo": {
                "latitude": "42.7901",
                "longitude": "143.6186"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-11 20:17:24",
        "quantityPurchased": 559,
        "extendedPrice": 2789.4100000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190112",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Phyllis",
            "lastName": "Soto",
            "phoneNumber": "+1787-127-501-6410",
            "email": "psoto@Orange.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/psoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6759 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Guanica",
            "stateProvince": "Guanica",
            "locality": "Guanica",
            "country": "PR",
            "postalCode": "00653",
            "GeoSpatialInfo": {
                "latitude": "17.9716",
                "longitude": "-66.908"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-15 20:17:24",
        "quantityPurchased": 965,
        "extendedPrice": 2885.3500000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190113",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeremy",
            "lastName": "Torres",
            "phoneNumber": "+421-223-042-7823",
            "email": "jtorres@TM.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jtorres"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jtorres"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jtorres"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jtorres"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6453 Blue Ridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "A9",
            "city": "\u010caradice",
            "stateProvince": "NI",
            "locality": "Zlat\u00e9 Moravce",
            "country": "SK",
            "postalCode": "953 01",
            "GeoSpatialInfo": {
                "latitude": "48.3589",
                "longitude": "18.5088"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-24 20:17:24",
        "quantityPurchased": 49,
        "extendedPrice": 979.5099999999999
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190114",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Apryl",
            "lastName": "Mathis",
            "phoneNumber": "+66-197-073-2331",
            "email": "amathis@AlgoNet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/amathis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amathis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2361 Big Creek Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tham Punnara",
            "stateProvince": "Nakhon Sie Thammarat",
            "locality": "Nakhon Sie Thammarat",
            "country": "TH",
            "postalCode": "80260",
            "GeoSpatialInfo": {
                "latitude": "8.54",
                "longitude": "99.65"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-12 20:17:24",
        "quantityPurchased": 118,
        "extendedPrice": 588.82
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190115",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Arlie",
            "lastName": "Short",
            "phoneNumber": "+47-120-384-0294",
            "email": "ashort@Unicom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ashort"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ashort"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4609 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "92",
            "city": "Ny-\u00c5lesund",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9173",
            "GeoSpatialInfo": {
                "latitude": "78.9237",
                "longitude": "11.925"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-10 20:17:24",
        "quantityPurchased": 853,
        "extendedPrice": 5962.47
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190116",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jerrod",
            "lastName": "Anthony",
            "phoneNumber": "+375-167-007-9070",
            "email": "janthony@KDDI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/janthony"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/janthony"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/janthony"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/janthony"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2122 Little Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0413\u043e\u0440\u0435\u043b\u0435\u0446",
            "stateProvince": "Poukhovitchi",
            "locality": "Poukhovitchi",
            "country": "BY",
            "postalCode": "222826",
            "GeoSpatialInfo": {
                "latitude": "53.4279",
                "longitude": "27.9306"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-05 20:17:24",
        "quantityPurchased": 341,
        "extendedPrice": 1701.5900000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190117",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Donnette",
            "lastName": "Lane",
            "phoneNumber": "+1671-276-591-6005",
            "email": "dlane@OpenWorld.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/dlane"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "472 Big Canyon Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Yona",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96914",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-12 20:17:24",
        "quantityPurchased": 712,
        "extendedPrice": 2484.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190118",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Adele",
            "lastName": "Leonard",
            "phoneNumber": "+351-104-876-8991",
            "email": "aleonard@Chunghwa.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/aleonard"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2921 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Vendas Novas",
            "stateProvince": "Vendas Novas",
            "locality": "Vendas Novas",
            "country": "PT",
            "postalCode": "7080-141",
            "GeoSpatialInfo": {
                "latitude": "38.6771",
                "longitude": "-8.4579"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-24 20:17:24",
        "quantityPurchased": 87,
        "extendedPrice": 303.63
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190119",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lorna",
            "lastName": "Saunders",
            "phoneNumber": "+63-231-929-2356",
            "email": "lsaunder@Relcom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lsaunder"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1920 Winding Gully Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Moncada",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "2334",
            "GeoSpatialInfo": {
                "latitude": "15.7367",
                "longitude": "120.5744"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-23 20:17:24",
        "quantityPurchased": 127,
        "extendedPrice": 2538.73
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190120",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Clifton",
            "lastName": "Atkinson",
            "phoneNumber": "+39-370-184-9814",
            "email": "catkinso@Sprint.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/catkinso"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2638 Long Tree Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bragioli",
            "stateProvince": "PM",
            "locality": "Cuneo",
            "country": "IT",
            "postalCode": "12070",
            "GeoSpatialInfo": {
                "latitude": "44.4433",
                "longitude": "8.0975"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-03 20:17:24",
        "quantityPurchased": 390,
        "extendedPrice": 1361.1000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190121",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Edmundo",
            "lastName": "Thomas",
            "phoneNumber": "+377-341-962-9702",
            "email": "ethomas@Telefonica.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ethomas"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/ethomas"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/ethomas"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3012 Red Mound Boulevard",
            "buildingName": "Building 85",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Larvotto",
            "stateProvince": "Larvotto",
            "locality": "Monaco",
            "country": "MC",
            "postalCode": "98000",
            "GeoSpatialInfo": {
                "latitude": "43.7333",
                "longitude": "7.4333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-27 20:17:24",
        "quantityPurchased": 173,
        "extendedPrice": 115.91000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190122",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Archie",
            "lastName": "Oneill",
            "phoneNumber": "+691-187-428-8154",
            "email": "aoneill@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/aoneill"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/aoneill"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8915 Winding Bridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Yap",
            "stateProvince": "State of Yap",
            "locality": "State of Yap",
            "country": "FM",
            "postalCode": "96943",
            "GeoSpatialInfo": {
                "latitude": "7.1383",
                "longitude": "151.5031"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-08 20:17:24",
        "quantityPurchased": 826,
        "extendedPrice": 2882.7400000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190123",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jarred",
            "lastName": "Maxwell",
            "phoneNumber": "+441481-356-555-4455",
            "email": "jmaxwell@Vivendi.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jmaxwell"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9872 Green Gulch Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Sampsons",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY2",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-25 20:17:24",
        "quantityPurchased": 228,
        "extendedPrice": 795.72
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190124",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jamaal",
            "lastName": "Potter",
            "phoneNumber": "+354-135-441-2759",
            "email": "jpotter@Airtel.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jpotter"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9842 Long Tree Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "T\u00e1lknafir\u00f0i",
            "stateProvince": null,
            "locality": null,
            "country": "IS",
            "postalCode": "460",
            "GeoSpatialInfo": {
                "latitude": "65.6265",
                "longitude": "-23.8246"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-21 20:17:24",
        "quantityPurchased": 790,
        "extendedPrice": 3152.1000000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190125",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eneida",
            "lastName": "Higgins",
            "phoneNumber": "+687-238-468-3309",
            "email": "ehiggins@PTCL.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/ehiggins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "517 Red Bend Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Farino",
            "stateProvince": "Farino",
            "locality": "Farino",
            "country": "NC",
            "postalCode": "98880",
            "GeoSpatialInfo": {
                "latitude": "-21.6651",
                "longitude": "165.776"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-19 20:17:24",
        "quantityPurchased": 521,
        "extendedPrice": 2599.79
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190126",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tierra",
            "lastName": "Bradshaw",
            "phoneNumber": "+47-146-816-6595",
            "email": "tbradsha@Frontier.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5080 Green Hill Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3E",
            "city": "Dr\u00f8bak",
            "stateProvince": "Frogn",
            "locality": "Frogn",
            "country": "NO",
            "postalCode": "1442",
            "GeoSpatialInfo": {
                "latitude": "59.6633",
                "longitude": "10.6297"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-22 20:17:24",
        "quantityPurchased": 736,
        "extendedPrice": 4776.64
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190127",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Hobert",
            "lastName": "Shepherd",
            "phoneNumber": "+66-119-239-7861",
            "email": "hshepher@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hshepher"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/hshepher"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6568 Green Stream Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kpho",
            "stateProvince": "Pattani",
            "locality": "Pattani",
            "country": "TH",
            "postalCode": "94230",
            "GeoSpatialInfo": {
                "latitude": "6.6078",
                "longitude": "101.6667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-24 20:17:24",
        "quantityPurchased": 480,
        "extendedPrice": 1675.2
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190128",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leon",
            "lastName": "Molina",
            "phoneNumber": "+66-214-798-2054",
            "email": "lmolina@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "443 Blue Woods Avenue",
            "buildingName": "Building E1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sai Mun",
            "stateProvince": "Yasothon",
            "locality": "Yasothon",
            "country": "TH",
            "postalCode": "35170",
            "GeoSpatialInfo": {
                "latitude": "15.95",
                "longitude": "104.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-16 20:17:24",
        "quantityPurchased": 105,
        "extendedPrice": 366.45000000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190129",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kelley",
            "lastName": "Howard",
            "phoneNumber": "+385-384-261-8607",
            "email": "khoward@Telkom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/khoward"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/khoward"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6841 Big Hill Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stani\u0161i",
            "stateProvince": "Vi\u017einada",
            "locality": "Vi\u017einada",
            "country": "HR",
            "postalCode": "52447",
            "GeoSpatialInfo": {
                "latitude": "45.1881",
                "longitude": "14.1246"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-26 20:17:24",
        "quantityPurchased": 831,
        "extendedPrice": 16611.69
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190130",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leon",
            "lastName": "Molina",
            "phoneNumber": "+66-214-798-2054",
            "email": "lmolina@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "443 Blue Woods Avenue",
            "buildingName": "Building E1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sai Mun",
            "stateProvince": "Yasothon",
            "locality": "Yasothon",
            "country": "TH",
            "postalCode": "35170",
            "GeoSpatialInfo": {
                "latitude": "15.95",
                "longitude": "104.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-26 20:17:24",
        "quantityPurchased": 134,
        "extendedPrice": 266.66
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190131",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Love",
            "lastName": "Swanson",
            "phoneNumber": "+49-291-404-9046",
            "email": "lswanson@Millicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lswanson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lswanson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9523 Red Bend Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "FD",
            "city": "Arenshausen",
            "stateProvince": "TH",
            "locality": "Eichsfeld",
            "country": "DE",
            "postalCode": "37318",
            "GeoSpatialInfo": {
                "latitude": "51.3761",
                "longitude": "9.9687"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-03 20:17:24",
        "quantityPurchased": 704,
        "extendedPrice": 2456.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190132",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jill",
            "lastName": "Henderson",
            "phoneNumber": "+1809-240-784-5981",
            "email": "jhenders@BT.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jhenders"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jhenders"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1083 Long Stream Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cerros de Palmarejo",
            "stateProvince": null,
            "locality": null,
            "country": "DO",
            "postalCode": "10805",
            "GeoSpatialInfo": {
                "latitude": "18.7333",
                "longitude": "-71.1833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-06 20:17:24",
        "quantityPurchased": 338,
        "extendedPrice": 1179.6200000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190133",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rayford",
            "lastName": "Ibarra",
            "phoneNumber": "+299-311-571-8573",
            "email": "ribarra@Telus.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/ribarra"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8207 Short Mountain Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Danmarkshavn",
            "stateProvince": null,
            "locality": null,
            "country": "GL",
            "postalCode": "3984",
            "GeoSpatialInfo": {
                "latitude": "76.8",
                "longitude": "-18.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-07 20:17:24",
        "quantityPurchased": 510,
        "extendedPrice": 4584.900000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190134",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lorna",
            "lastName": "Saunders",
            "phoneNumber": "+63-231-929-2356",
            "email": "lsaunder@Relcom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lsaunder"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1920 Winding Gully Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Moncada",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "2334",
            "GeoSpatialInfo": {
                "latitude": "15.7367",
                "longitude": "120.5744"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-09 20:17:24",
        "quantityPurchased": 387,
        "extendedPrice": 1350.63
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190135",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mary",
            "lastName": "Greene",
            "phoneNumber": "+35818-103-375-5689",
            "email": "mgreene@Telecom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mgreene"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3438 Winding Bend Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u00d6dkarby",
            "stateProvince": "Saltvik",
            "locality": "Saltvik",
            "country": "AX",
            "postalCode": "22320",
            "GeoSpatialInfo": {
                "latitude": "60.3162",
                "longitude": "20.0054"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-04 20:17:24",
        "quantityPurchased": 670,
        "extendedPrice": 6693.3
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190136",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kris",
            "lastName": "Middleton",
            "phoneNumber": "+47-287-792-9266",
            "email": "kmiddlet@UI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kmiddlet"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/kmiddlet"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/kmiddlet"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3466 Winding Gully Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Longyearbyen",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9171",
            "GeoSpatialInfo": {
                "latitude": "78.2233",
                "longitude": "15.6469"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-13 20:17:24",
        "quantityPurchased": 273,
        "extendedPrice": 133.77
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190137",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angeles",
            "lastName": "Lowe",
            "phoneNumber": "+61-380-177-7593",
            "email": "alowe@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/alowe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4200 Big Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Darlington Point",
            "stateProvince": "NSW",
            "locality": "CANBERRA",
            "country": "AU",
            "postalCode": "2706",
            "GeoSpatialInfo": {
                "latitude": "-34.5694",
                "longitude": "145.9987"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-20 20:17:24",
        "quantityPurchased": 207,
        "extendedPrice": 1446.93
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190138",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bernarda",
            "lastName": "Faulkner",
            "phoneNumber": "+376-241-474-4995",
            "email": "bfaulkne@GlasNET.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bfaulkne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8270 Winding Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Escaldes-Engordany",
            "stateProvince": null,
            "locality": null,
            "country": "AD",
            "postalCode": "AD700",
            "GeoSpatialInfo": {
                "latitude": "42.5",
                "longitude": "1.5667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-06 20:17:24",
        "quantityPurchased": 913,
        "extendedPrice": 4555.87
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190139",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosina",
            "lastName": "Blake",
            "phoneNumber": "+590-278-283-4810",
            "email": "rblake@Telkom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9341 Blue River Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pointe-\u00e0-Pitre",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97011 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2422",
                "longitude": "-61.5343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-29 20:17:24",
        "quantityPurchased": 19,
        "extendedPrice": 11.209999999999999
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190140",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Harvey",
            "lastName": "Franklin",
            "phoneNumber": "+44-179-390-6723",
            "email": "hfrankli@Sprint.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hfrankli"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/hfrankli"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5987 Winding Woods Way",
            "buildingName": "Building 16",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stewarton",
            "stateProvince": "Scotland",
            "locality": "East Ayrshire",
            "country": "GB",
            "postalCode": "KA3",
            "GeoSpatialInfo": {
                "latitude": "55.6799",
                "longitude": "-4.5144"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-10 20:17:24",
        "quantityPurchased": 978,
        "extendedPrice": 6347.22
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190141",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sherilyn",
            "lastName": "Mcdowell",
            "phoneNumber": "+358-289-154-0860",
            "email": "smcdowel@Telus.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5430 Short Stream Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Huhmarkoski",
            "stateProvince": "Kauhava",
            "locality": "Sein\u00e4joki",
            "country": "FI",
            "postalCode": "62240",
            "GeoSpatialInfo": {
                "latitude": "63.1212",
                "longitude": "23.263"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-16 20:17:24",
        "quantityPurchased": 299,
        "extendedPrice": 176.41
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190142",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Pierre",
            "lastName": "Fry",
            "phoneNumber": "+359-185-345-2080",
            "email": "pfry@OpenWorld.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/pfry"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/pfry"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/pfry"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8854 Green Stream Circle",
            "buildingName": null,
            "floor": 6,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u043e\u0441\u043d\u0435\u043a \/ Bosnek",
            "stateProvince": "PER",
            "locality": "\u041f\u0435\u0440\u043d\u0438\u043a \/ Pernik",
            "country": "BG",
            "postalCode": "2345",
            "GeoSpatialInfo": {
                "latitude": "42.4833",
                "longitude": "23.1833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-20 20:17:24",
        "quantityPurchased": 202,
        "extendedPrice": 1007.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190143",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Marisa",
            "lastName": "Monroe",
            "phoneNumber": "+262-371-290-0167",
            "email": "mmonroe@MegaFon.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mmonroe"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mmonroe"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mmonroe"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mmonroe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3937 Winding Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sada",
            "stateProvince": "Sada",
            "locality": "Sada",
            "country": "YT",
            "postalCode": "97640",
            "GeoSpatialInfo": {
                "latitude": "-12.8505",
                "longitude": "45.1021"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-18 20:17:24",
        "quantityPurchased": 769,
        "extendedPrice": 3068.31
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190144",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rayford",
            "lastName": "Mclaughlin",
            "phoneNumber": "+44-176-175-6936",
            "email": "rmclaugh@Airtel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rmclaugh"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/rmclaugh"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7878 Winding Bend Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Birmingham",
            "stateProvince": "England",
            "locality": "West Midlands",
            "country": "GB",
            "postalCode": "B9",
            "GeoSpatialInfo": {
                "latitude": "52.4783",
                "longitude": "-1.8506"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-03 20:17:24",
        "quantityPurchased": 505,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190145",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Josiah",
            "lastName": "Fischer",
            "phoneNumber": "+33-251-121-0274",
            "email": "jfischer@BCE.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jfischer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5811 Short Bough Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Le Frestoy-Vaux",
            "stateProvince": "Arrondissement de Clermont",
            "locality": "Oise",
            "country": "FR",
            "postalCode": "60420",
            "GeoSpatialInfo": {
                "latitude": "49.5969",
                "longitude": "2.5994"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-19 20:17:24",
        "quantityPurchased": 214,
        "extendedPrice": 746.86
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190146",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Johnetta",
            "lastName": "Sullivan",
            "phoneNumber": "+441481-319-030-0404",
            "email": "jsulliva@AIS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jsulliva"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jsulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3052 Red Creek Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Delancey",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY2",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-12 20:17:24",
        "quantityPurchased": 645,
        "extendedPrice": 316.05
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190147",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Silas",
            "lastName": "Conley",
            "phoneNumber": "+61-342-729-3677",
            "email": "sconley@Telekom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "6006 Blue Tree Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Baandee",
            "stateProvince": "WA",
            "locality": "KALGOORLIE",
            "country": "AU",
            "postalCode": "6412",
            "GeoSpatialInfo": {
                "latitude": "-31.5832",
                "longitude": "117.9536"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-18 20:17:24",
        "quantityPurchased": 883,
        "extendedPrice": 432.67
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190148",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leif",
            "lastName": "Morrison",
            "phoneNumber": "+91-188-572-4694",
            "email": "lmorriso@Belgacom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/lmorriso"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8009 Winding Bend Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Basbita",
            "stateProvince": "Shambhuganj",
            "locality": "Banka",
            "country": "IN",
            "postalCode": "813221",
            "GeoSpatialInfo": {
                "latitude": "26.7605",
                "longitude": "84.9664"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-16 20:17:24",
        "quantityPurchased": 351,
        "extendedPrice": 207.08999999999997
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190149",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angla",
            "lastName": "Craig",
            "phoneNumber": "+57-252-797-7635",
            "email": "acraig@Telecom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/acraig"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1061 Long Hill Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Aguada",
            "stateProvince": "Aguada",
            "locality": "Aguada",
            "country": "CO",
            "postalCode": "685521",
            "GeoSpatialInfo": {
                "latitude": "6.1816",
                "longitude": "-73.531"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-13 20:17:24",
        "quantityPurchased": 362,
        "extendedPrice": 1082.38
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190150",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shaina",
            "lastName": "Riley",
            "phoneNumber": "+371-303-348-5606",
            "email": "sriley@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/sriley"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9017 Long Mound Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nami\u0137i",
            "stateProvince": "Lutri\u0146u pag.",
            "locality": "Lutri\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-3861",
            "GeoSpatialInfo": {
                "latitude": "56.7167",
                "longitude": "22.4"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-21 20:17:24",
        "quantityPurchased": 393,
        "extendedPrice": 310.47
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190151",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angel",
            "lastName": "Dawson",
            "phoneNumber": "+32-233-616-4312",
            "email": "adawson@LGUplus.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/adawson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/adawson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5081 Blue Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F5",
            "city": "Lille",
            "stateProvince": "VLG",
            "locality": "Antwerpen",
            "country": "BE",
            "postalCode": "2275",
            "GeoSpatialInfo": {
                "latitude": "51.2333",
                "longitude": "4.8333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-19 20:17:24",
        "quantityPurchased": 773,
        "extendedPrice": 2697.77
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190152",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Heriberto",
            "lastName": "Donaldson",
            "phoneNumber": "+371-390-306-2470",
            "email": "hdonalds@Jio.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hdonalds"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/hdonalds"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/hdonalds"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8206 Big Gulch Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kau\u0161a",
            "stateProvince": "B3",
            "locality": "Riebi\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-5326",
            "GeoSpatialInfo": {
                "latitude": "56.3839",
                "longitude": "26.7685"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-17 20:17:24",
        "quantityPurchased": 112,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190153",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Esta",
            "lastName": "Glass",
            "phoneNumber": "+66-131-446-2695",
            "email": "eglass@Telus.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/eglass"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7159 Green River Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tha Tako",
            "stateProvince": "Nakhon Sawan",
            "locality": "Nakhon Sawan",
            "country": "TH",
            "postalCode": "60160",
            "GeoSpatialInfo": {
                "latitude": "15.6333",
                "longitude": "100.4833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-13 20:17:24",
        "quantityPurchased": 10,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190154",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Raleigh",
            "lastName": "Villarreal",
            "phoneNumber": "+506-264-360-4650",
            "email": "rvillarr@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rvillarr"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8897 Big Creek Boulevard",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": "F3",
            "city": "Merced",
            "stateProvince": "Merced",
            "locality": "San Jos\u00e9",
            "country": "CR",
            "postalCode": "10102",
            "GeoSpatialInfo": {
                "latitude": "9.9397",
                "longitude": "-84.0884"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-11 20:17:24",
        "quantityPurchased": 529,
        "extendedPrice": 1846.21
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190155",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sarina",
            "lastName": "Best",
            "phoneNumber": "+36-226-291-5578",
            "email": "sbest@TeleSystems.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/sbest"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/sbest"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2906 Blue Tree Circle",
            "buildingName": "Building 2E",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kecsk\u00e9d",
            "stateProvince": "KE",
            "locality": "Kom\u00e1rom-Esztergom",
            "country": "HU",
            "postalCode": "2852",
            "GeoSpatialInfo": {
                "latitude": "47.5167",
                "longitude": "18.3167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-30 20:17:24",
        "quantityPurchased": 612,
        "extendedPrice": 538.5600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190156",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Domingo",
            "lastName": "Levy",
            "phoneNumber": "+7-373-435-8117",
            "email": "dlevy@Telus.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dlevy"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/dlevy"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/dlevy"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2791 Blue Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041d\u044f\u0433\u0430\u043d\u044c 1",
            "stateProvince": "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "locality": "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "country": "RU",
            "postalCode": "628181",
            "GeoSpatialInfo": {
                "latitude": "62.1406",
                "longitude": "65.3936"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-06 20:17:24",
        "quantityPurchased": 504,
        "extendedPrice": 443.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190157",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Arlie",
            "lastName": "Short",
            "phoneNumber": "+47-120-384-0294",
            "email": "ashort@Unicom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ashort"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ashort"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4609 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "92",
            "city": "Ny-\u00c5lesund",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9173",
            "GeoSpatialInfo": {
                "latitude": "78.9237",
                "longitude": "11.925"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-07 20:17:24",
        "quantityPurchased": 639,
        "extendedPrice": 6383.610000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190158",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosena",
            "lastName": "Mckinney",
            "phoneNumber": "+370-169-834-8494",
            "email": "rmckinne@Rogers.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rmckinne"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rmckinne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8689 Green Stream Street",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Mau\u0161\u0173 k.",
            "stateProvince": "Akmen\u0117s r. sav.",
            "locality": "Akmen\u0117s r. sav.",
            "country": "LT",
            "postalCode": "85001",
            "GeoSpatialInfo": {
                "latitude": "56.3167",
                "longitude": "22.9"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-14 20:17:24",
        "quantityPurchased": 852,
        "extendedPrice": 17031.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190159",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tiana",
            "lastName": "Webb",
            "phoneNumber": "+46-212-131-1148",
            "email": "twebb@TT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/twebb"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/twebb"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6334 Little Canyon Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "9C",
            "city": "Eskilstuna",
            "stateProvince": "D",
            "locality": "Eskilstuna",
            "country": "SE",
            "postalCode": "633 43",
            "GeoSpatialInfo": {
                "latitude": "59.3666",
                "longitude": "16.5077"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-06 20:17:24",
        "quantityPurchased": 548,
        "extendedPrice": 4926.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190160",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dena",
            "lastName": "Wilkinson",
            "phoneNumber": "+421-369-281-5698",
            "email": "dwilkins@KDDI.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dwilkins"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/dwilkins"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/dwilkins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3835 Long River Way",
            "buildingName": "Building 51",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0160koruby",
            "stateProvince": "ZI",
            "locality": "Byt\u010da",
            "country": "SK",
            "postalCode": "013 54",
            "GeoSpatialInfo": {
                "latitude": "49.2875",
                "longitude": "18.5201"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-09 20:17:24",
        "quantityPurchased": 588,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190161",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Indira",
            "lastName": "Durham",
            "phoneNumber": "+691-263-728-3764",
            "email": "idurham@Frontier.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/idurham"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/idurham"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/idurham"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3487 Long Canyon Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pohnpei",
            "stateProvince": "State of Pohnpei",
            "locality": "State of Pohnpei",
            "country": "FM",
            "postalCode": "96941",
            "GeoSpatialInfo": {
                "latitude": "7.1383",
                "longitude": "151.5031"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-24 20:17:24",
        "quantityPurchased": 235,
        "extendedPrice": 2112.65
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190162",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louella",
            "lastName": "Hunt",
            "phoneNumber": "+60-149-941-1956",
            "email": "lhunt@MegaFon.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lhunt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7479 Blue Hill Boulevard",
            "buildingName": "Building D1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bemban",
            "stateProvince": "MLK",
            "locality": "Melaka",
            "country": "MY",
            "postalCode": "77200",
            "GeoSpatialInfo": {
                "latitude": "2.2582",
                "longitude": "102.3555"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-02 20:17:24",
        "quantityPurchased": 824,
        "extendedPrice": 2875.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190163",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sharan",
            "lastName": "Beasley",
            "phoneNumber": "+377-139-784-0385",
            "email": "sbeasley@TelecomItalia.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "3552 Red Creek Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Monte-Carlo",
            "stateProvince": "Monte-Carlo",
            "locality": "Monaco",
            "country": "MC",
            "postalCode": "98000",
            "GeoSpatialInfo": {
                "latitude": "43.7333",
                "longitude": "7.4167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-08 20:17:24",
        "quantityPurchased": 913,
        "extendedPrice": 2729.8700000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190164",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tiana",
            "lastName": "Webb",
            "phoneNumber": "+46-212-131-1148",
            "email": "twebb@TT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/twebb"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/twebb"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6334 Little Canyon Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "9C",
            "city": "Eskilstuna",
            "stateProvince": "D",
            "locality": "Eskilstuna",
            "country": "SE",
            "postalCode": "633 43",
            "GeoSpatialInfo": {
                "latitude": "59.3666",
                "longitude": "16.5077"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-04 20:17:24",
        "quantityPurchased": 48,
        "extendedPrice": 383.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190165",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ellan",
            "lastName": "Sullivan",
            "phoneNumber": "+506-355-176-1383",
            "email": "esulliva@Chunghwa.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/esulliva"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/esulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "248 Short Bough Way",
            "buildingName": null,
            "floor": 14,
            "roomApartmentCondoNumber": null,
            "city": "San Pablo",
            "stateProvince": "San Pablo",
            "locality": "San Pablo",
            "country": "CR",
            "postalCode": "40901",
            "GeoSpatialInfo": {
                "latitude": "9.9994",
                "longitude": "-84.0905"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-29 20:17:24",
        "quantityPurchased": 131,
        "extendedPrice": 6548.6900000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190166",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jaime",
            "lastName": "Dyer",
            "phoneNumber": "+375-327-230-9893",
            "email": "jdyer@Vodafone.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jdyer"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jdyer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "37 Big Ridge Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0421\u0438\u0442\u043d\u0438\u0446\u0430",
            "stateProvince": "Louninets",
            "locality": "Louninets",
            "country": "BY",
            "postalCode": "225685",
            "GeoSpatialInfo": {
                "latitude": "52.1993",
                "longitude": "27.3622"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-12 20:17:24",
        "quantityPurchased": 846,
        "extendedPrice": 4221.54
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190167",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Heriberto",
            "lastName": "Donaldson",
            "phoneNumber": "+371-390-306-2470",
            "email": "hdonalds@Jio.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hdonalds"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/hdonalds"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/hdonalds"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8206 Big Gulch Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kau\u0161a",
            "stateProvince": "B3",
            "locality": "Riebi\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-5326",
            "GeoSpatialInfo": {
                "latitude": "56.3839",
                "longitude": "26.7685"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-20 20:17:24",
        "quantityPurchased": 293,
        "extendedPrice": 1462.0700000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190168",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rayford",
            "lastName": "Mclaughlin",
            "phoneNumber": "+44-176-175-6936",
            "email": "rmclaugh@Airtel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rmclaugh"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/rmclaugh"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7878 Winding Bend Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Birmingham",
            "stateProvince": "England",
            "locality": "West Midlands",
            "country": "GB",
            "postalCode": "B9",
            "GeoSpatialInfo": {
                "latitude": "52.4783",
                "longitude": "-1.8506"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-14 20:17:24",
        "quantityPurchased": 225,
        "extendedPrice": 150.75
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190169",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Blair",
            "lastName": "Christian",
            "phoneNumber": "+63-215-692-7879",
            "email": "bchristi@Orstom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/bchristi"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bchristi"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/bchristi"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4842 Little Tree Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Intramuros",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "1002",
            "GeoSpatialInfo": {
                "latitude": "14.2335",
                "longitude": "121.3623"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-25 20:17:24",
        "quantityPurchased": 852,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190170",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Raleigh",
            "lastName": "Villarreal",
            "phoneNumber": "+506-264-360-4650",
            "email": "rvillarr@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rvillarr"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8897 Big Creek Boulevard",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": "F3",
            "city": "Merced",
            "stateProvince": "Merced",
            "locality": "San Jos\u00e9",
            "country": "CR",
            "postalCode": "10102",
            "GeoSpatialInfo": {
                "latitude": "9.9397",
                "longitude": "-84.0884"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-04 20:17:24",
        "quantityPurchased": 961,
        "extendedPrice": 8639.39
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190171",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tosha",
            "lastName": "Francis",
            "phoneNumber": "+1787-165-610-5983",
            "email": "tfrancis@NII.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tfrancis"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tfrancis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/tfrancis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/tfrancis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4138 Winding Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ponce",
            "stateProvince": "Ponce",
            "locality": "Ponce",
            "country": "PR",
            "postalCode": "00717",
            "GeoSpatialInfo": {
                "latitude": "18.0111",
                "longitude": "-66.6141"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-10 20:17:24",
        "quantityPurchased": 892,
        "extendedPrice": 3559.0800000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190172",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jimmie",
            "lastName": "Xiong",
            "phoneNumber": "+61-232-479-5587",
            "email": "jxiong@Zain.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8197 Green Bough Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Alyangula",
            "stateProvince": "NT",
            "locality": "DARWIN",
            "country": "AU",
            "postalCode": "0885",
            "GeoSpatialInfo": {
                "latitude": "-13.8541",
                "longitude": "136.4213"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-28 20:17:24",
        "quantityPurchased": 880,
        "extendedPrice": 43991.200000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190173",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Abby",
            "lastName": "Lawrence",
            "phoneNumber": "+421-274-131-9898",
            "email": "alawrenc@Orstom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/alawrenc"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/alawrenc"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9262 Little Hill Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chvojnica",
            "stateProvince": "TC",
            "locality": "Prievidza",
            "country": "SK",
            "postalCode": "972 13",
            "GeoSpatialInfo": {
                "latitude": "49.0355",
                "longitude": "18.8879"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-12 20:17:24",
        "quantityPurchased": 222,
        "extendedPrice": 1107.78
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190174",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Allena",
            "lastName": "Stuart",
            "phoneNumber": "+35818-360-136-9789",
            "email": "astuart@OTE.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/astuart"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/astuart"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/astuart"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9009 Little Bend Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "V\u00e5rd\u00f6",
            "stateProvince": "V\u00e5rd\u00f6",
            "locality": "V\u00e5rd\u00f6",
            "country": "AX",
            "postalCode": "22550",
            "GeoSpatialInfo": {
                "latitude": "60.2607",
                "longitude": "20.3725"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-23 20:17:24",
        "quantityPurchased": 861,
        "extendedPrice": 421.89
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190175",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mai",
            "lastName": "Barton",
            "phoneNumber": "+596-389-098-1577",
            "email": "mbarton@UI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mbarton"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8142 Red Woods Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Fonds-Saint-Denis",
            "stateProvince": "MQ",
            "locality": "Martinique",
            "country": "MQ",
            "postalCode": "97250",
            "GeoSpatialInfo": {
                "latitude": "14.7333",
                "longitude": "-61.1333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-19 20:17:24",
        "quantityPurchased": 87,
        "extendedPrice": 42.63
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190176",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Brande",
            "lastName": "Douglas",
            "phoneNumber": "+356-391-293-4286",
            "email": "bdouglas@WorldNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "6205 Long Stream Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mellie\u0127a",
            "stateProvince": "Il-Mellie\u0127a",
            "locality": "Il-Mellie\u0127a",
            "country": "MT",
            "postalCode": "MLH",
            "GeoSpatialInfo": {
                "latitude": "35.9583",
                "longitude": "14.3514"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-21 20:17:24",
        "quantityPurchased": 440,
        "extendedPrice": 4395.6
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190177",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lindsay",
            "lastName": "Hill",
            "phoneNumber": "+66-273-632-2043",
            "email": "lhill@Telstra.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lhill"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7208 Winding Canyon Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "0B",
            "city": "Bung Bun",
            "stateProvince": "Sisaket",
            "locality": "Sisaket",
            "country": "TH",
            "postalCode": "33220",
            "GeoSpatialInfo": {
                "latitude": "15.3214",
                "longitude": "104.0572"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-10 20:17:24",
        "quantityPurchased": 844,
        "extendedPrice": 2945.5600000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190178",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bert",
            "lastName": "Cobb",
            "phoneNumber": "+41-239-161-1678",
            "email": "bcobb@Swisscom.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/bcobb"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6905 Little Gulch Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Donatyre",
            "stateProvince": "VD",
            "locality": "Broye-Vully District",
            "country": "CH",
            "postalCode": "1580",
            "GeoSpatialInfo": {
                "latitude": "46.8673",
                "longitude": "7.0393"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-04-08 20:17:24",
        "quantityPurchased": 816,
        "extendedPrice": 4071.84
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190179",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tiana",
            "lastName": "Webb",
            "phoneNumber": "+46-212-131-1148",
            "email": "twebb@TT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/twebb"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/twebb"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6334 Little Canyon Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "9C",
            "city": "Eskilstuna",
            "stateProvince": "D",
            "locality": "Eskilstuna",
            "country": "SE",
            "postalCode": "633 43",
            "GeoSpatialInfo": {
                "latitude": "59.3666",
                "longitude": "16.5077"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-25 20:17:24",
        "quantityPurchased": 175,
        "extendedPrice": 348.25
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190180",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Chadwick",
            "lastName": "Murray",
            "phoneNumber": "+420-195-416-4075",
            "email": "cmurray@LookData.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/cmurray"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cmurray"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/cmurray"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3658 Red Stream Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Osovec",
            "stateProvince": "Beroun",
            "locality": "Beroun",
            "country": "CZ",
            "postalCode": "267 25",
            "GeoSpatialInfo": {
                "latitude": "49.85",
                "longitude": "14.1"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-05 20:17:24",
        "quantityPurchased": 357,
        "extendedPrice": 4637.43
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190181",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dionne",
            "lastName": "Brady",
            "phoneNumber": "+386-181-760-8538",
            "email": "dbrady@SingTel.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9231 Blue Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sorica",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "4229",
            "GeoSpatialInfo": {
                "latitude": "46.2167",
                "longitude": "14.0333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-14 20:17:24",
        "quantityPurchased": 147,
        "extendedPrice": 513.0300000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190182",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tierra",
            "lastName": "Bradshaw",
            "phoneNumber": "+47-146-816-6595",
            "email": "tbradsha@Frontier.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5080 Green Hill Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3E",
            "city": "Dr\u00f8bak",
            "stateProvince": "Frogn",
            "locality": "Frogn",
            "country": "NO",
            "postalCode": "1442",
            "GeoSpatialInfo": {
                "latitude": "59.6633",
                "longitude": "10.6297"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-11-10 20:17:24",
        "quantityPurchased": 71,
        "extendedPrice": 3549.29
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190183",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lillian",
            "lastName": "Wheeler",
            "phoneNumber": "+31-107-434-1438",
            "email": "lwheeler@CCS.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/lwheeler"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1643 Long Tree Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Warffum",
            "stateProvince": "Eemsmond",
            "locality": "Eemsmond",
            "country": "NL",
            "postalCode": "9999",
            "GeoSpatialInfo": {
                "latitude": "53.3443",
                "longitude": "6.5835"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-20 20:17:24",
        "quantityPurchased": 30,
        "extendedPrice": 119.7
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190184",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Catherina",
            "lastName": "Stevens",
            "phoneNumber": "+61-337-041-4159",
            "email": "cstevens@NordNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4077 Winding Ridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dampier",
            "stateProvince": "WA",
            "locality": "KALGOORLIE",
            "country": "AU",
            "postalCode": "6713",
            "GeoSpatialInfo": {
                "latitude": "-20.6627",
                "longitude": "116.7126"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-30 20:17:24",
        "quantityPurchased": 141,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190185",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Neva",
            "lastName": "Sweeney",
            "phoneNumber": "+441624-183-573-7097",
            "email": "nsweeney@Relcom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nsweeney"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9736 Short River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Lingague",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM9",
            "GeoSpatialInfo": {
                "latitude": "54.0951",
                "longitude": "-4.6929"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-10 20:17:24",
        "quantityPurchased": 355,
        "extendedPrice": 1061.45
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190186",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jamaal",
            "lastName": "Potter",
            "phoneNumber": "+354-135-441-2759",
            "email": "jpotter@Airtel.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jpotter"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9842 Long Tree Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "T\u00e1lknafir\u00f0i",
            "stateProvince": null,
            "locality": null,
            "country": "IS",
            "postalCode": "460",
            "GeoSpatialInfo": {
                "latitude": "65.6265",
                "longitude": "-23.8246"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-06 20:17:24",
        "quantityPurchased": 604,
        "extendedPrice": 7845.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190187",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andres",
            "lastName": "Blair",
            "phoneNumber": "+371-259-985-8925",
            "email": "ablair@Safaricom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ablair"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3701 Short Bend Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mazie P\u012bz\u0101ni",
            "stateProvince": "Feima\u0146u pag.",
            "locality": "Feima\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-4623",
            "GeoSpatialInfo": {
                "latitude": "56.2798",
                "longitude": "27.0626"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-11 20:17:24",
        "quantityPurchased": 547,
        "extendedPrice": 481.36
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190188",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mary",
            "lastName": "Greene",
            "phoneNumber": "+35818-103-375-5689",
            "email": "mgreene@Telecom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mgreene"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3438 Winding Bend Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u00d6dkarby",
            "stateProvince": "Saltvik",
            "locality": "Saltvik",
            "country": "AX",
            "postalCode": "22320",
            "GeoSpatialInfo": {
                "latitude": "60.3162",
                "longitude": "20.0054"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-23 20:17:24",
        "quantityPurchased": 257,
        "extendedPrice": 3338.43
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190189",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Julienne",
            "lastName": "Mcfarland",
            "phoneNumber": "+92-244-040-7584",
            "email": "jmcfarla@Millicom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jmcfarla"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9394 Little Woods Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jabu Khel Edbo",
            "stateProvince": "NWFP Peshawar",
            "locality": "NWFP Peshawar",
            "country": "PK",
            "postalCode": "28451",
            "GeoSpatialInfo": {
                "latitude": "32.5583",
                "longitude": "70.7406"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-26 20:17:24",
        "quantityPurchased": 436,
        "extendedPrice": 1739.64
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190190",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Cathey",
            "lastName": "Petersen",
            "phoneNumber": "+47-152-514-7835",
            "email": "cpeterse@SingTel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/cpeterse"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/cpeterse"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cpeterse"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1196 Long Hill Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Longyearbyen",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9171",
            "GeoSpatialInfo": {
                "latitude": "78.2233",
                "longitude": "15.6469"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-19 20:17:24",
        "quantityPurchased": 917,
        "extendedPrice": 6409.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190191",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margarett",
            "lastName": "Campos",
            "phoneNumber": "+81-386-882-4342",
            "email": "mcampos@AIS.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mcampos"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4139 Blue Creek Avenue",
            "buildingName": null,
            "floor": 2,
            "roomApartmentCondoNumber": null,
            "city": "Shimoishibikimachi",
            "stateProvince": "Kanazawa Shi",
            "locality": "Kanazawa Shi",
            "country": "JP",
            "postalCode": "920-0939",
            "GeoSpatialInfo": {
                "latitude": "36.45",
                "longitude": "136.6333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-23 20:17:24",
        "quantityPurchased": 750,
        "extendedPrice": 2617.5
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190192",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Miquel",
            "lastName": "Hawkins",
            "phoneNumber": "+48-193-093-4810",
            "email": "mhawkins@OTE.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mhawkins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3062 Red Woods Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "K\u0142odkowo",
            "stateProvince": "Trzebiat\u00f3w",
            "locality": "Powiat gryficki",
            "country": "PL",
            "postalCode": "72-320",
            "GeoSpatialInfo": {
                "latitude": "54.0078",
                "longitude": "15.2436"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-09 20:17:24",
        "quantityPurchased": 664,
        "extendedPrice": 1985.3600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190193",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Keven",
            "lastName": "Mathis",
            "phoneNumber": "+31-316-329-7270",
            "email": "kmathis@Turkcell.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/kmathis"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/kmathis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8966 Short Canyon Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Raerd",
            "stateProvince": "S\u00fadwest-Frysl\u00e2n",
            "locality": "S\u00fadwest-Frysl\u00e2n",
            "country": "NL",
            "postalCode": "9012",
            "GeoSpatialInfo": {
                "latitude": "53.0983",
                "longitude": "5.7588"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-04-25 20:17:24",
        "quantityPurchased": 411,
        "extendedPrice": 8215.89
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190194",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jaime",
            "lastName": "Dyer",
            "phoneNumber": "+375-327-230-9893",
            "email": "jdyer@Vodafone.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jdyer"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jdyer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "37 Big Ridge Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0421\u0438\u0442\u043d\u0438\u0446\u0430",
            "stateProvince": "Louninets",
            "locality": "Louninets",
            "country": "BY",
            "postalCode": "225685",
            "GeoSpatialInfo": {
                "latitude": "52.1993",
                "longitude": "27.3622"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-06 20:17:24",
        "quantityPurchased": 617,
        "extendedPrice": 12333.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190195",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angeles",
            "lastName": "Lowe",
            "phoneNumber": "+61-380-177-7593",
            "email": "alowe@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/alowe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4200 Big Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Darlington Point",
            "stateProvince": "NSW",
            "locality": "CANBERRA",
            "country": "AU",
            "postalCode": "2706",
            "GeoSpatialInfo": {
                "latitude": "-34.5694",
                "longitude": "145.9987"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-07 20:17:24",
        "quantityPurchased": 612,
        "extendedPrice": 6113.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190196",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tabetha",
            "lastName": "Griffin",
            "phoneNumber": "+594-328-996-9978",
            "email": "tgriffin@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tgriffin"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tgriffin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4427 Blue Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "81",
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97331 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-30 20:17:24",
        "quantityPurchased": 387,
        "extendedPrice": 19346.13
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190197",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shasta",
            "lastName": "Hunter",
            "phoneNumber": "+33-228-243-6534",
            "email": "shunter@TelecomItalia.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/shunter"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/shunter"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9459 Big Mountain Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tarbes",
            "stateProvince": "Arrondissement de Tarbes",
            "locality": "Hautes-Pyr\u00e9n\u00e9es",
            "country": "FR",
            "postalCode": "65000",
            "GeoSpatialInfo": {
                "latitude": "43.2333",
                "longitude": "0.0833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-28 20:17:24",
        "quantityPurchased": 503,
        "extendedPrice": 10054.97
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190198",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jesica",
            "lastName": "Cole",
            "phoneNumber": "+44-375-144-8210",
            "email": "jcole@Tata.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4474 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Great Comberton",
            "stateProvince": "England",
            "locality": "Worcestershire",
            "country": "GB",
            "postalCode": "WR10",
            "GeoSpatialInfo": {
                "latitude": "52.0781",
                "longitude": "-2.0669"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-20 20:17:24",
        "quantityPurchased": 389,
        "extendedPrice": 1357.6100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190199",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sasha",
            "lastName": "Quintana",
            "phoneNumber": "+356-138-412-5061",
            "email": "squintan@Millicom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/squintan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9745 Long Creek Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "2B",
            "city": "Marsalforn",
            "stateProvince": "I\u017c-\u017bebbu\u0121",
            "locality": "I\u017c-\u017bebbu\u0121",
            "country": "MT",
            "postalCode": "MFN",
            "GeoSpatialInfo": {
                "latitude": "36.0667",
                "longitude": "14.2444"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-16 20:17:24",
        "quantityPurchased": 481,
        "extendedPrice": 1438.19
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190200",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jacques",
            "lastName": "Daniels",
            "phoneNumber": "+1340-227-941-1397",
            "email": "jdaniels@Swisscom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jdaniels"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jdaniels"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jdaniels"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3055 Green Mound Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Frederiksted",
            "stateProvince": "St. Croix",
            "locality": "St. Croix",
            "country": "VI",
            "postalCode": "00841",
            "GeoSpatialInfo": {
                "latitude": "17.7648",
                "longitude": "-64.8096"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-09 20:17:24",
        "quantityPurchased": 177,
        "extendedPrice": 3538.2299999999996
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190201",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tierra",
            "lastName": "Bradshaw",
            "phoneNumber": "+47-146-816-6595",
            "email": "tbradsha@Frontier.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5080 Green Hill Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3E",
            "city": "Dr\u00f8bak",
            "stateProvince": "Frogn",
            "locality": "Frogn",
            "country": "NO",
            "postalCode": "1442",
            "GeoSpatialInfo": {
                "latitude": "59.6633",
                "longitude": "10.6297"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-07 20:17:24",
        "quantityPurchased": 624,
        "extendedPrice": 4049.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190202",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Teresia",
            "lastName": "Swanson",
            "phoneNumber": "+371-177-535-8569",
            "email": "tswanson@CUBENet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/tswanson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tswanson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5255 Long Gulch Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sp\u0101r\u012bte",
            "stateProvince": "Ma\u013cinovas pag.",
            "locality": "Ma\u013cinovas pag.",
            "country": "LV",
            "postalCode": "LV-5459",
            "GeoSpatialInfo": {
                "latitude": "55.9955",
                "longitude": "26.6775"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-15 20:17:24",
        "quantityPurchased": 206,
        "extendedPrice": 162.74
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190203",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eneida",
            "lastName": "Higgins",
            "phoneNumber": "+687-238-468-3309",
            "email": "ehiggins@PTCL.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/ehiggins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "517 Red Bend Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Farino",
            "stateProvince": "Farino",
            "locality": "Farino",
            "country": "NC",
            "postalCode": "98880",
            "GeoSpatialInfo": {
                "latitude": "-21.6651",
                "longitude": "165.776"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-03 20:17:24",
        "quantityPurchased": 217,
        "extendedPrice": 757.33
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190204",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lisa",
            "lastName": "Montgomery",
            "phoneNumber": "+92-122-046-3207",
            "email": "lmontgom@Vivendi.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/lmontgom"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lmontgom"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lmontgom"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lmontgom"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4727 Long Ditch Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Baghtail",
            "stateProvince": "Balochisan",
            "locality": "Balochisan",
            "country": "PK",
            "postalCode": "80301",
            "GeoSpatialInfo": {
                "latitude": "28.1833",
                "longitude": "68.0667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-26 20:17:24",
        "quantityPurchased": 812,
        "extendedPrice": 2833.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190205",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Harvey",
            "lastName": "Franklin",
            "phoneNumber": "+44-179-390-6723",
            "email": "hfrankli@Sprint.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hfrankli"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/hfrankli"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5987 Winding Woods Way",
            "buildingName": "Building 16",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stewarton",
            "stateProvince": "Scotland",
            "locality": "East Ayrshire",
            "country": "GB",
            "postalCode": "KA3",
            "GeoSpatialInfo": {
                "latitude": "55.6799",
                "longitude": "-4.5144"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-22 20:17:24",
        "quantityPurchased": 958,
        "extendedPrice": 3343.42
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190206",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Chadwick",
            "lastName": "Murray",
            "phoneNumber": "+420-195-416-4075",
            "email": "cmurray@LookData.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/cmurray"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cmurray"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/cmurray"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3658 Red Stream Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Osovec",
            "stateProvince": "Beroun",
            "locality": "Beroun",
            "country": "CZ",
            "postalCode": "267 25",
            "GeoSpatialInfo": {
                "latitude": "49.85",
                "longitude": "14.1"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-07 20:17:24",
        "quantityPurchased": 336,
        "extendedPrice": 1004.6400000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190207",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Linh",
            "lastName": "Trevino",
            "phoneNumber": "+32-365-763-3790",
            "email": "ltrevino@CUBENet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ltrevino"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ltrevino"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2743 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Aywaille Louveign\u00e9",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4920",
            "GeoSpatialInfo": {
                "latitude": "50.4478",
                "longitude": "5.6793"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-28 20:17:24",
        "quantityPurchased": 452,
        "extendedPrice": 899.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190208",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mohamed",
            "lastName": "Reilly",
            "phoneNumber": "+40-399-854-9793",
            "email": "mreilly@ATT.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mreilly"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2351 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "E5",
            "city": "Calea Chiojdului",
            "stateProvince": "Buz\u0103u",
            "locality": "Buz\u0103u",
            "country": "RO",
            "postalCode": "127431",
            "GeoSpatialInfo": {
                "latitude": "45.3293",
                "longitude": "26.2944"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-18 20:17:24",
        "quantityPurchased": 918,
        "extendedPrice": 807.84
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190209",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Keshia",
            "lastName": "Daniels",
            "phoneNumber": "+386-230-680-0747",
            "email": "kdaniels@Softbank.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kdaniels"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/kdaniels"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9601 Long Gully Street",
            "buildingName": null,
            "floor": 13,
            "roomApartmentCondoNumber": null,
            "city": "Komen",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "6223",
            "GeoSpatialInfo": {
                "latitude": "45.8153",
                "longitude": "13.7483"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-27 20:17:24",
        "quantityPurchased": 699,
        "extendedPrice": 3488.01
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190210",
    "CustomerInfo": {
        "PrimaryContactInfo": null,
        "Address": null
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-18 20:17:24",
        "quantityPurchased": 649,
        "extendedPrice": 2265.01
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190211",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Thanh",
            "lastName": "Clark",
            "phoneNumber": "+1787-343-171-3016",
            "email": "tclark@Telekom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/tclark"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tclark"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/tclark"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4731 Short Bough Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Caguas",
            "stateProvince": "Caguas",
            "locality": "Caguas",
            "country": "PR",
            "postalCode": "00726",
            "GeoSpatialInfo": {
                "latitude": "18.2341",
                "longitude": "-66.0485"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-11-06 20:17:24",
        "quantityPurchased": 896,
        "extendedPrice": 7159.04
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190212",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Philip",
            "lastName": "Schmitt",
            "phoneNumber": "+262-313-755-2603",
            "email": "pschmitt@Softbank.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/pschmitt"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/pschmitt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "773 Winding Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Koungou",
            "stateProvince": "Koungou",
            "locality": "Koungou",
            "country": "YT",
            "postalCode": "97600",
            "GeoSpatialInfo": {
                "latitude": "-12.7336",
                "longitude": "45.2042"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-21 20:17:24",
        "quantityPurchased": 273,
        "extendedPrice": 816.2700000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190213",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "King",
            "lastName": "Levy",
            "phoneNumber": "+91-396-330-1273",
            "email": "klevy@SingTel.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/klevy"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9490 Little Bend Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kathalbagan",
            "stateProvince": "Sadar",
            "locality": "West Tripura",
            "country": "IN",
            "postalCode": "799006",
            "GeoSpatialInfo": {
                "latitude": "23.7271",
                "longitude": "91.3177"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-17 20:17:24",
        "quantityPurchased": 641,
        "extendedPrice": 5121.59
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190214",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Necole",
            "lastName": "Cordova",
            "phoneNumber": "+386-393-091-2148",
            "email": "ncordova@Orange.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ncordova"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/ncordova"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "708 Green Bend Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Spodnji Duplek",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "2241",
            "GeoSpatialInfo": {
                "latitude": "46.5031",
                "longitude": "15.7453"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-22 20:17:24",
        "quantityPurchased": 32,
        "extendedPrice": 111.68
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190215",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elisha",
            "lastName": "Diaz",
            "phoneNumber": "+298-236-154-2019",
            "email": "ediaz@Airtel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ediaz"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5525 Red Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F1",
            "city": "Funningsfj\u00f8rdur",
            "stateProvince": null,
            "locality": null,
            "country": "FO",
            "postalCode": "477",
            "GeoSpatialInfo": {
                "latitude": "62.2333",
                "longitude": "-6.9167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-25 20:17:24",
        "quantityPurchased": 332,
        "extendedPrice": 660.68
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190216",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Reba",
            "lastName": "Ramos",
            "phoneNumber": "+371-248-566-2273",
            "email": "rramos@OpenWorld.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rramos"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/rramos"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4841 Short Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dorotpole",
            "stateProvince": "Pu\u0161as pag.",
            "locality": "Pu\u0161as pag.",
            "country": "LV",
            "postalCode": "LV-4635",
            "GeoSpatialInfo": {
                "latitude": "56.2352",
                "longitude": "27.2644"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-12 20:17:24",
        "quantityPurchased": 791,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190217",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louis",
            "lastName": "Caldwell",
            "phoneNumber": "+41-260-401-2914",
            "email": "lcaldwel@AIS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lcaldwel"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lcaldwel"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lcaldwel"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3162 Winding Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "G\u00f6schenen",
            "stateProvince": "UR",
            "locality": "Uri",
            "country": "CH",
            "postalCode": "6487",
            "GeoSpatialInfo": {
                "latitude": "46.6682",
                "longitude": "8.5871"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-17 20:17:24",
        "quantityPurchased": 98,
        "extendedPrice": 57.82
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190218",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nathan",
            "lastName": "Bernal",
            "phoneNumber": "+94-157-009-8177",
            "email": "nbernal@TT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/nbernal"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9411 Red Ridge Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ramboda",
            "stateProvince": "Nuwara Eliya",
            "locality": "Nuwara Eliya",
            "country": "LK",
            "postalCode": "20590",
            "GeoSpatialInfo": {
                "latitude": "7.0457",
                "longitude": "80.6876"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-29 20:17:24",
        "quantityPurchased": 971,
        "extendedPrice": 854.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190219",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rena",
            "lastName": "Pace",
            "phoneNumber": "+55-174-703-7269",
            "email": "rpace@ICom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5310 Winding Woods Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Uruguaiana",
            "stateProvince": "Rio Grande do Sul",
            "locality": "Rio Grande do Sul",
            "country": "BR",
            "postalCode": "97500-000",
            "GeoSpatialInfo": {
                "latitude": "-29.828",
                "longitude": "-56.6322"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-07 20:17:24",
        "quantityPurchased": 224,
        "extendedPrice": 1117.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190220",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Joan",
            "lastName": "Lindsey",
            "phoneNumber": "+56-166-828-8618",
            "email": "jlindsey@EUnet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jlindsey"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jlindsey"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jlindsey"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jlindsey"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3527 Green Ditch Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Los Sauces",
            "stateProvince": "Los Sauces",
            "locality": "Provincia de Malleco",
            "country": "CL",
            "postalCode": "4760000",
            "GeoSpatialInfo": {
                "latitude": "-37.9831",
                "longitude": "-72.7968"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-14 20:17:24",
        "quantityPurchased": 580,
        "extendedPrice": 5214.2
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190221",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Estrella",
            "lastName": "Cunningham",
            "phoneNumber": "+351-134-708-7462",
            "email": "ecunning@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ecunning"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/ecunning"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8411 Long River Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tondela",
            "stateProvince": "Tondela",
            "locality": "Tondela",
            "country": "PT",
            "postalCode": "3460-588",
            "GeoSpatialInfo": {
                "latitude": "40.5168",
                "longitude": "-8.0809"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-08 20:17:24",
        "quantityPurchased": 8,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190222",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Magan",
            "lastName": "Bradford",
            "phoneNumber": "+47-304-125-2479",
            "email": "mbradfor@Telefonica.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mbradfor"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4499 Winding Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Oslo",
            "stateProvince": "Oslo",
            "locality": "Oslo",
            "country": "NO",
            "postalCode": "0270",
            "GeoSpatialInfo": {
                "latitude": "59.9127",
                "longitude": "10.7461"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-10 20:17:24",
        "quantityPurchased": 680,
        "extendedPrice": 1353.2
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190223",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margret",
            "lastName": "Reese",
            "phoneNumber": "+691-216-077-7724",
            "email": "mreese@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mreese"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mreese"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9833 Short Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Yap",
            "stateProvince": "State of Yap",
            "locality": "State of Yap",
            "country": "FM",
            "postalCode": "96943",
            "GeoSpatialInfo": {
                "latitude": "7.1383",
                "longitude": "151.5031"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-05 20:17:24",
        "quantityPurchased": 841,
        "extendedPrice": 2935.09
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190224",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Houston",
            "lastName": "Livingston",
            "phoneNumber": "+262-381-806-2521",
            "email": "hlivings@Rogers.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hlivings"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/hlivings"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/hlivings"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3816 Big Hill Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sainte-Clotilde",
            "stateProvince": "Reunion (general)",
            "locality": "Reunion (general)",
            "country": "RE",
            "postalCode": "97497 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "-20.8916",
                "longitude": "55.4787"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-04-24 20:17:24",
        "quantityPurchased": 947,
        "extendedPrice": 464.03
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190225",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jesica",
            "lastName": "Cole",
            "phoneNumber": "+44-375-144-8210",
            "email": "jcole@Tata.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4474 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Great Comberton",
            "stateProvince": "England",
            "locality": "Worcestershire",
            "country": "GB",
            "postalCode": "WR10",
            "GeoSpatialInfo": {
                "latitude": "52.0781",
                "longitude": "-2.0669"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-10 20:17:24",
        "quantityPurchased": 289,
        "extendedPrice": 1008.61
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190226",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eneida",
            "lastName": "Higgins",
            "phoneNumber": "+687-238-468-3309",
            "email": "ehiggins@PTCL.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/ehiggins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "517 Red Bend Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Farino",
            "stateProvince": "Farino",
            "locality": "Farino",
            "country": "NC",
            "postalCode": "98880",
            "GeoSpatialInfo": {
                "latitude": "-21.6651",
                "longitude": "165.776"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-14 20:17:24",
        "quantityPurchased": 539,
        "extendedPrice": 7001.61
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190227",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Natividad",
            "lastName": "Curtis",
            "phoneNumber": "+377-323-860-4044",
            "email": "ncurtis@EUnet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ncurtis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2020 Winding Bridge Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "76",
            "city": "Larvotto",
            "stateProvince": "Larvotto",
            "locality": "Monaco",
            "country": "MC",
            "postalCode": "98000",
            "GeoSpatialInfo": {
                "latitude": "43.7333",
                "longitude": "7.4333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-19 20:17:24",
        "quantityPurchased": 557,
        "extendedPrice": 27844.43
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190228",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Azucena",
            "lastName": "Fischer",
            "phoneNumber": "+351-352-676-7555",
            "email": "afischer@Turkcell.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/afischer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6673 Green Ditch Boulevard",
            "buildingName": null,
            "floor": 17,
            "roomApartmentCondoNumber": null,
            "city": "S\u00e3o Mamede de Infesta",
            "stateProvince": "S\u00e3o Mamede De Infesta",
            "locality": "Matosinhos",
            "country": "PT",
            "postalCode": "4465-114",
            "GeoSpatialInfo": {
                "latitude": "41.2004",
                "longitude": "-8.6025"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-07 20:17:24",
        "quantityPurchased": 876,
        "extendedPrice": 692.0400000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190229",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Clifton",
            "lastName": "Atkinson",
            "phoneNumber": "+39-370-184-9814",
            "email": "catkinso@Sprint.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/catkinso"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2638 Long Tree Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bragioli",
            "stateProvince": "PM",
            "locality": "Cuneo",
            "country": "IT",
            "postalCode": "12070",
            "GeoSpatialInfo": {
                "latitude": "44.4433",
                "longitude": "8.0975"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-06 20:17:24",
        "quantityPurchased": 620,
        "extendedPrice": 489.8
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190230",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mabelle",
            "lastName": "Chan",
            "phoneNumber": "+351-155-643-3837",
            "email": "mchan@CCI.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mchan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8359 Big Bend Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Fam\u00f5es",
            "stateProvince": "Fam\u00f5es",
            "locality": "Odivelas",
            "country": "PT",
            "postalCode": "1685-145",
            "GeoSpatialInfo": {
                "latitude": "38.788",
                "longitude": "-9.2103"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-18 20:17:24",
        "quantityPurchased": 520,
        "extendedPrice": 2594.8
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190231",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lorelei",
            "lastName": "Odonnell",
            "phoneNumber": "+47-124-152-8875",
            "email": "lodonnel@EUnet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lodonnel"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lodonnel"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5886 Short Bough Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jan Mayen",
            "stateProvince": "Jan Mayen",
            "locality": "Jan Mayen",
            "country": "SJ",
            "postalCode": "8099",
            "GeoSpatialInfo": {
                "latitude": "70.9498",
                "longitude": "-8.638"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-19 20:17:24",
        "quantityPurchased": 748,
        "extendedPrice": 5976.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190232",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Carlo",
            "lastName": "Gilbert",
            "phoneNumber": "+34-180-841-3727",
            "email": "cgilbert@Vivendi.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "3214 Green Bend Ride",
            "buildingName": "Building C6",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Carbajal (Oviedo)",
            "stateProvince": "AS",
            "locality": "Asturias",
            "country": "ES",
            "postalCode": "33195",
            "GeoSpatialInfo": {
                "latitude": "43.3395",
                "longitude": "-5.8262"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-25 20:17:24",
        "quantityPurchased": 13,
        "extendedPrice": 45.370000000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190233",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kirby",
            "lastName": "Farmer",
            "phoneNumber": "+441481-243-517-0029",
            "email": "kfarmer@Telenor.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kfarmer"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/kfarmer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "23 Red Mound Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Martin",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY4",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-27 20:17:24",
        "quantityPurchased": 352,
        "extendedPrice": 1756.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190234",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Magan",
            "lastName": "Bradford",
            "phoneNumber": "+47-304-125-2479",
            "email": "mbradfor@Telefonica.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mbradfor"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4499 Winding Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Oslo",
            "stateProvince": "Oslo",
            "locality": "Oslo",
            "country": "NO",
            "postalCode": "0270",
            "GeoSpatialInfo": {
                "latitude": "59.9127",
                "longitude": "10.7461"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-09 20:17:24",
        "quantityPurchased": 409,
        "extendedPrice": 274.03000000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190235",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andreas",
            "lastName": "Peck",
            "phoneNumber": "+353-196-204-6758",
            "email": "apeck@cerist.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/apeck"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "637 Green Bend Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Newcastle West",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "V42",
            "GeoSpatialInfo": {
                "latitude": "52.4492",
                "longitude": "-9.0611"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-24 20:17:24",
        "quantityPurchased": 160,
        "extendedPrice": 558.4000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190236",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Phyllis",
            "lastName": "Soto",
            "phoneNumber": "+1787-127-501-6410",
            "email": "psoto@Orange.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/psoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6759 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Guanica",
            "stateProvince": "Guanica",
            "locality": "Guanica",
            "country": "PR",
            "postalCode": "00653",
            "GeoSpatialInfo": {
                "latitude": "17.9716",
                "longitude": "-66.908"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-22 20:17:24",
        "quantityPurchased": 968,
        "extendedPrice": 851.84
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190237",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tabetha",
            "lastName": "Griffin",
            "phoneNumber": "+594-328-996-9978",
            "email": "tgriffin@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tgriffin"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tgriffin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4427 Blue Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "81",
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97331 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-05 20:17:24",
        "quantityPurchased": 702,
        "extendedPrice": 3502.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190238",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jayson",
            "lastName": "Leblanc",
            "phoneNumber": "+7-249-835-4466",
            "email": "jleblanc@Telefonica.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jleblanc"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7422 Winding Stream Circle",
            "buildingName": null,
            "floor": 12,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u041e\u0437\u0435\u0440\u043a\u0438",
            "stateProvince": "\u041a\u041e\u0420\u0421\u0410\u041a\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041a\u041e\u0420\u0421\u0410\u041a\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "303588",
            "GeoSpatialInfo": {
                "latitude": "53.2996",
                "longitude": "36.4084"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-02 20:17:24",
        "quantityPurchased": 811,
        "extendedPrice": 2830.3900000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190239",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Brett",
            "lastName": "Riley",
            "phoneNumber": "+1671-348-051-7641",
            "email": "briley@BCE.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4785 Short Mound Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Agana Heights",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96919",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-29 20:17:24",
        "quantityPurchased": 808,
        "extendedPrice": 5243.92
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190240",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kurtis",
            "lastName": "Hurley",
            "phoneNumber": "+27-387-479-7840",
            "email": "khurley@TelecomItalia.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "6803 Big Bridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Lansdowne",
            "stateProvince": null,
            "locality": null,
            "country": "ZA",
            "postalCode": "7764",
            "GeoSpatialInfo": {
                "latitude": "-33.9778",
                "longitude": "18.5167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-24 20:17:24",
        "quantityPurchased": 755,
        "extendedPrice": 664.4
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190241",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kris",
            "lastName": "Middleton",
            "phoneNumber": "+47-287-792-9266",
            "email": "kmiddlet@UI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kmiddlet"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/kmiddlet"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/kmiddlet"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3466 Winding Gully Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Longyearbyen",
            "stateProvince": "Spitsbergen",
            "locality": "Spitsbergen",
            "country": "SJ",
            "postalCode": "9171",
            "GeoSpatialInfo": {
                "latitude": "78.2233",
                "longitude": "15.6469"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-07 20:17:24",
        "quantityPurchased": 141,
        "extendedPrice": 492.09000000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190242",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Micah",
            "lastName": "Hood",
            "phoneNumber": "+47-310-048-2931",
            "email": "mhood@ATT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mhood"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mhood"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3475 Big River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bergen",
            "stateProvince": "Bergen",
            "locality": "Bergen",
            "country": "NO",
            "postalCode": "5089",
            "GeoSpatialInfo": {
                "latitude": "60.393",
                "longitude": "5.3242"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-04-20 20:17:24",
        "quantityPurchased": 750,
        "extendedPrice": 2617.5
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190243",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Armando",
            "lastName": "Tanner",
            "phoneNumber": "+7-362-180-1905",
            "email": "atanner@Oi.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/atanner"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9754 Short Mound Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "01",
            "city": "\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u043a\u0430\u044f",
            "stateProvince": "\u041f\u0420\u0418\u041c\u041e\u0420\u0421\u041a\u041e-\u0410\u0425\u0422\u0410\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041f\u0420\u0418\u041c\u041e\u0420\u0421\u041a\u041e-\u0410\u0425\u0422\u0410\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "353899",
            "GeoSpatialInfo": {
                "latitude": "45.8431",
                "longitude": "38.6139"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-31 20:17:24",
        "quantityPurchased": 551,
        "extendedPrice": 2749.4900000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190244",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Vivien",
            "lastName": "Goodwin",
            "phoneNumber": "+7-336-919-0919",
            "email": "vgoodwin@Orstom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/vgoodwin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5606 Winding Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434 136",
            "stateProvince": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "locality": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "country": "RU",
            "postalCode": "400136",
            "GeoSpatialInfo": {
                "latitude": "49.544",
                "longitude": "44.2679"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-22 20:17:24",
        "quantityPurchased": 367,
        "extendedPrice": 245.89000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190245",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilber",
            "lastName": "Mcbride",
            "phoneNumber": "+353-315-300-8779",
            "email": "wmcbride@EUnet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/wmcbride"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/wmcbride"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1567 Big Gully Avenue",
            "buildingName": "Building C1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Crookstown",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "P14",
            "GeoSpatialInfo": {
                "latitude": "53.0153",
                "longitude": "-6.8106"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-17 20:17:24",
        "quantityPurchased": 704,
        "extendedPrice": 344.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190246",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elisha",
            "lastName": "Diaz",
            "phoneNumber": "+298-236-154-2019",
            "email": "ediaz@Airtel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ediaz"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5525 Red Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F1",
            "city": "Funningsfj\u00f8rdur",
            "stateProvince": null,
            "locality": null,
            "country": "FO",
            "postalCode": "477",
            "GeoSpatialInfo": {
                "latitude": "62.2333",
                "longitude": "-6.9167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-14 20:17:24",
        "quantityPurchased": 539,
        "extendedPrice": 1881.1100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190247",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nevada",
            "lastName": "Wright",
            "phoneNumber": "+687-364-752-9652",
            "email": "nwright@Sprint.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/nwright"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nwright"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3654 Big Gully Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Houa\u00eflou",
            "stateProvince": "Houa\u00eflou",
            "locality": "Houa\u00eflou",
            "country": "NC",
            "postalCode": "98816",
            "GeoSpatialInfo": {
                "latitude": "-21.2865",
                "longitude": "165.6343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-15 20:17:24",
        "quantityPurchased": 298,
        "extendedPrice": 593.02
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190248",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Julienne",
            "lastName": "Mcfarland",
            "phoneNumber": "+92-244-040-7584",
            "email": "jmcfarla@Millicom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jmcfarla"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9394 Little Woods Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jabu Khel Edbo",
            "stateProvince": "NWFP Peshawar",
            "locality": "NWFP Peshawar",
            "country": "PK",
            "postalCode": "28451",
            "GeoSpatialInfo": {
                "latitude": "32.5583",
                "longitude": "70.7406"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-27 20:17:24",
        "quantityPurchased": 488,
        "extendedPrice": 3899.12
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190249",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Alesia",
            "lastName": "Garcia",
            "phoneNumber": "+66-117-487-5471",
            "email": "agarcia@TM.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/agarcia"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/agarcia"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/agarcia"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "71 Winding Creek Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chaiwan",
            "stateProvince": "Udon Thani",
            "locality": "Udon Thani",
            "country": "TH",
            "postalCode": "41290",
            "GeoSpatialInfo": {
                "latitude": "17.1336",
                "longitude": "102.9675"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-22 20:17:24",
        "quantityPurchased": 1,
        "extendedPrice": 0.67
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190250",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Stanton",
            "lastName": "Chan",
            "phoneNumber": "+687-140-946-3417",
            "email": "schan@Tata.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/schan"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/schan"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/schan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1687 Winding Bough Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "W\u00e9",
            "stateProvince": "Lifou",
            "locality": "Lifou",
            "country": "NC",
            "postalCode": "98820",
            "GeoSpatialInfo": {
                "latitude": "-20.9169",
                "longitude": "167.2646"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-04-30 20:17:24",
        "quantityPurchased": 906,
        "extendedPrice": 18110.94
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190251",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Billy",
            "lastName": "Juarez",
            "phoneNumber": "+385-213-345-5499",
            "email": "bjuarez@SingTel.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/bjuarez"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7045 Winding Gully Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mr\u010devo",
            "stateProvince": "Ora\u0161ac",
            "locality": "Ora\u0161ac",
            "country": "HR",
            "postalCode": "20234",
            "GeoSpatialInfo": {
                "latitude": "42.7333",
                "longitude": "17.9833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-04 20:17:24",
        "quantityPurchased": 631,
        "extendedPrice": 4095.19
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190252",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Phyllis",
            "lastName": "Soto",
            "phoneNumber": "+1787-127-501-6410",
            "email": "psoto@Orange.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/psoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6759 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Guanica",
            "stateProvince": "Guanica",
            "locality": "Guanica",
            "country": "PR",
            "postalCode": "00653",
            "GeoSpatialInfo": {
                "latitude": "17.9716",
                "longitude": "-66.908"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-26 20:17:24",
        "quantityPurchased": 121,
        "extendedPrice": 71.39
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190253",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Linh",
            "lastName": "Trevino",
            "phoneNumber": "+32-365-763-3790",
            "email": "ltrevino@CUBENet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ltrevino"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ltrevino"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2743 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Aywaille Louveign\u00e9",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4920",
            "GeoSpatialInfo": {
                "latitude": "50.4478",
                "longitude": "5.6793"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-14 20:17:24",
        "quantityPurchased": 232,
        "extendedPrice": 809.6800000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190254",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jerrod",
            "lastName": "Anthony",
            "phoneNumber": "+375-167-007-9070",
            "email": "janthony@KDDI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/janthony"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/janthony"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/janthony"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/janthony"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2122 Little Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0413\u043e\u0440\u0435\u043b\u0435\u0446",
            "stateProvince": "Poukhovitchi",
            "locality": "Poukhovitchi",
            "country": "BY",
            "postalCode": "222826",
            "GeoSpatialInfo": {
                "latitude": "53.4279",
                "longitude": "27.9306"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-15 20:17:24",
        "quantityPurchased": 145,
        "extendedPrice": 1013.5500000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190255",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wanetta",
            "lastName": "Lin",
            "phoneNumber": "+39-162-293-5140",
            "email": "wlin@Movil.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/wlin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4496 Green Bridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stignano",
            "stateProvince": "CI",
            "locality": "Reggio Di Calabria",
            "country": "IT",
            "postalCode": "89040",
            "GeoSpatialInfo": {
                "latitude": "38.417",
                "longitude": "16.4701"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-08 20:17:24",
        "quantityPurchased": 747,
        "extendedPrice": 366.03
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190256",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kirby",
            "lastName": "Farmer",
            "phoneNumber": "+441481-243-517-0029",
            "email": "kfarmer@Telenor.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kfarmer"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/kfarmer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "23 Red Mound Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Martin",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY4",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-21 20:17:24",
        "quantityPurchased": 326,
        "extendedPrice": 159.74
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190257",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Miquel",
            "lastName": "Hawkins",
            "phoneNumber": "+48-193-093-4810",
            "email": "mhawkins@OTE.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mhawkins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3062 Red Woods Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "K\u0142odkowo",
            "stateProvince": "Trzebiat\u00f3w",
            "locality": "Powiat gryficki",
            "country": "PL",
            "postalCode": "72-320",
            "GeoSpatialInfo": {
                "latitude": "54.0078",
                "longitude": "15.2436"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-01 20:17:24",
        "quantityPurchased": 385,
        "extendedPrice": 1343.65
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190258",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Esta",
            "lastName": "Glass",
            "phoneNumber": "+66-131-446-2695",
            "email": "eglass@Telus.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/eglass"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7159 Green River Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tha Tako",
            "stateProvince": "Nakhon Sawan",
            "locality": "Nakhon Sawan",
            "country": "TH",
            "postalCode": "60160",
            "GeoSpatialInfo": {
                "latitude": "15.6333",
                "longitude": "100.4833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-13 20:17:24",
        "quantityPurchased": 484,
        "extendedPrice": 24195.16
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190259",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jacques",
            "lastName": "Daniels",
            "phoneNumber": "+1340-227-941-1397",
            "email": "jdaniels@Swisscom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jdaniels"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jdaniels"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jdaniels"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3055 Green Mound Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Frederiksted",
            "stateProvince": "St. Croix",
            "locality": "St. Croix",
            "country": "VI",
            "postalCode": "00841",
            "GeoSpatialInfo": {
                "latitude": "17.7648",
                "longitude": "-64.8096"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-18 20:17:24",
        "quantityPurchased": 63,
        "extendedPrice": 314.37
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190260",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Apryl",
            "lastName": "Mathis",
            "phoneNumber": "+66-197-073-2331",
            "email": "amathis@AlgoNet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/amathis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amathis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2361 Big Creek Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tham Punnara",
            "stateProvince": "Nakhon Sie Thammarat",
            "locality": "Nakhon Sie Thammarat",
            "country": "TH",
            "postalCode": "80260",
            "GeoSpatialInfo": {
                "latitude": "8.54",
                "longitude": "99.65"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-02 20:17:24",
        "quantityPurchased": 648,
        "extendedPrice": 317.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190261",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leonor",
            "lastName": "Booth",
            "phoneNumber": "+63-366-555-1577",
            "email": "lbooth@Bifty.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "7509 Big Mound Way",
            "buildingName": null,
            "floor": 3,
            "roomApartmentCondoNumber": null,
            "city": "Morong",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "1960",
            "GeoSpatialInfo": {
                "latitude": "14.6789",
                "longitude": "120.2661"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-18 20:17:24",
        "quantityPurchased": 878,
        "extendedPrice": 2625.2200000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190262",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Hobert",
            "lastName": "Shepherd",
            "phoneNumber": "+66-119-239-7861",
            "email": "hshepher@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hshepher"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/hshepher"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6568 Green Stream Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kpho",
            "stateProvince": "Pattani",
            "locality": "Pattani",
            "country": "TH",
            "postalCode": "94230",
            "GeoSpatialInfo": {
                "latitude": "6.6078",
                "longitude": "101.6667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-22 20:17:24",
        "quantityPurchased": 461,
        "extendedPrice": 1378.39
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190263",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Abby",
            "lastName": "Lawrence",
            "phoneNumber": "+421-274-131-9898",
            "email": "alawrenc@Orstom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/alawrenc"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/alawrenc"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9262 Little Hill Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chvojnica",
            "stateProvince": "TC",
            "locality": "Prievidza",
            "country": "SK",
            "postalCode": "972 13",
            "GeoSpatialInfo": {
                "latitude": "49.0355",
                "longitude": "18.8879"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-01 20:17:24",
        "quantityPurchased": 63,
        "extendedPrice": 251.37
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190264",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Devon",
            "lastName": "Khan",
            "phoneNumber": "+32-219-368-6703",
            "email": "dkhan@Telefonica.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "7835 Short Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dalhem Feneur",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4607",
            "GeoSpatialInfo": {
                "latitude": "50.7",
                "longitude": "5.7167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-17 20:17:24",
        "quantityPurchased": 466,
        "extendedPrice": 927.34
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190265",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Levi",
            "lastName": "Gould",
            "phoneNumber": "+377-293-935-4592",
            "email": "lgould@Telkom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lgould"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6958 Long Creek Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Plage du Larvotto",
            "stateProvince": "Larvotto",
            "locality": "Monaco",
            "country": "MC",
            "postalCode": "98000",
            "GeoSpatialInfo": {
                "latitude": "43.7333",
                "longitude": "7.4333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-21 20:17:24",
        "quantityPurchased": 200,
        "extendedPrice": 698
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190266",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mohamed",
            "lastName": "Reilly",
            "phoneNumber": "+40-399-854-9793",
            "email": "mreilly@ATT.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mreilly"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2351 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "E5",
            "city": "Calea Chiojdului",
            "stateProvince": "Buz\u0103u",
            "locality": "Buz\u0103u",
            "country": "RO",
            "postalCode": "127431",
            "GeoSpatialInfo": {
                "latitude": "45.3293",
                "longitude": "26.2944"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-30 20:17:24",
        "quantityPurchased": 992,
        "extendedPrice": 1974.08
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190267",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gail",
            "lastName": "Ibarra",
            "phoneNumber": "+213-359-425-2178",
            "email": "gibarra@Belgacom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/gibarra"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/gibarra"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/gibarra"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/gibarra"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8548 Long Mound Avenue",
            "buildingName": null,
            "floor": 11,
            "roomApartmentCondoNumber": "0C",
            "city": "El Khalfi",
            "stateProvince": "Adrar",
            "locality": "Adrar",
            "country": "DZ",
            "postalCode": "01007",
            "GeoSpatialInfo": {
                "latitude": "27.0718",
                "longitude": "-0.1158"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-10 20:17:24",
        "quantityPurchased": 780,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190268",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lacresha",
            "lastName": "Welch",
            "phoneNumber": "+594-322-397-5777",
            "email": "lwelch@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4614 Red Hill Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97309 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-06 20:17:24",
        "quantityPurchased": 901,
        "extendedPrice": 3144.4900000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190269",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lucien",
            "lastName": "Parker",
            "phoneNumber": "+32-382-209-2097",
            "email": "lparker@PTCL.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lparker"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9607 Long Stream Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Vresse-sur-Semois Nafraiture",
            "stateProvince": "WAL",
            "locality": "Namur",
            "country": "BE",
            "postalCode": "5550",
            "GeoSpatialInfo": {
                "latitude": "49.9095",
                "longitude": "5.0262"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-28 20:17:24",
        "quantityPurchased": 488,
        "extendedPrice": 4875.12
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190270",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Keshia",
            "lastName": "Daniels",
            "phoneNumber": "+386-230-680-0747",
            "email": "kdaniels@Softbank.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kdaniels"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/kdaniels"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9601 Long Gully Street",
            "buildingName": null,
            "floor": 13,
            "roomApartmentCondoNumber": null,
            "city": "Komen",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "6223",
            "GeoSpatialInfo": {
                "latitude": "45.8153",
                "longitude": "13.7483"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-31 20:17:24",
        "quantityPurchased": 634,
        "extendedPrice": 374.06
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190271",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mohamed",
            "lastName": "Reilly",
            "phoneNumber": "+40-399-854-9793",
            "email": "mreilly@ATT.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mreilly"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2351 Short River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "E5",
            "city": "Calea Chiojdului",
            "stateProvince": "Buz\u0103u",
            "locality": "Buz\u0103u",
            "country": "RO",
            "postalCode": "127431",
            "GeoSpatialInfo": {
                "latitude": "45.3293",
                "longitude": "26.2944"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-16 20:17:24",
        "quantityPurchased": 702,
        "extendedPrice": 3502.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190272",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bernita",
            "lastName": "Jarvis",
            "phoneNumber": "+590-262-394-3560",
            "email": "bjarvis@BCE.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bjarvis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bjarvis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9975 Long Woods Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jarry",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97191 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2359",
                "longitude": "-61.558"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-04-01 20:17:24",
        "quantityPurchased": 805,
        "extendedPrice": 3211.9500000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190273",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dionne",
            "lastName": "Brady",
            "phoneNumber": "+386-181-760-8538",
            "email": "dbrady@SingTel.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9231 Blue Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sorica",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "4229",
            "GeoSpatialInfo": {
                "latitude": "46.2167",
                "longitude": "14.0333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-09 20:17:24",
        "quantityPurchased": 302,
        "extendedPrice": 1053.98
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190274",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angeles",
            "lastName": "Lowe",
            "phoneNumber": "+61-380-177-7593",
            "email": "alowe@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/alowe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4200 Big Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Darlington Point",
            "stateProvince": "NSW",
            "locality": "CANBERRA",
            "country": "AU",
            "postalCode": "2706",
            "GeoSpatialInfo": {
                "latitude": "-34.5694",
                "longitude": "145.9987"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-10 20:17:24",
        "quantityPurchased": 704,
        "extendedPrice": 2456.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190275",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Joan",
            "lastName": "Lindsey",
            "phoneNumber": "+56-166-828-8618",
            "email": "jlindsey@EUnet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jlindsey"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jlindsey"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jlindsey"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jlindsey"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3527 Green Ditch Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Los Sauces",
            "stateProvince": "Los Sauces",
            "locality": "Provincia de Malleco",
            "country": "CL",
            "postalCode": "4760000",
            "GeoSpatialInfo": {
                "latitude": "-37.9831",
                "longitude": "-72.7968"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-03 20:17:24",
        "quantityPurchased": 62,
        "extendedPrice": 433.38
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190276",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Silas",
            "lastName": "Conley",
            "phoneNumber": "+61-342-729-3677",
            "email": "sconley@Telekom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "6006 Blue Tree Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Baandee",
            "stateProvince": "WA",
            "locality": "KALGOORLIE",
            "country": "AU",
            "postalCode": "6412",
            "GeoSpatialInfo": {
                "latitude": "-31.5832",
                "longitude": "117.9536"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-25 20:17:24",
        "quantityPurchased": 722,
        "extendedPrice": 7212.78
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190277",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dennise",
            "lastName": "Chan",
            "phoneNumber": "+420-116-809-7567",
            "email": "dchan@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dchan"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/dchan"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/dchan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2448 Big Gulch Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "40",
            "city": "Ponava",
            "stateProvince": "Brno-m\u011bsto",
            "locality": "Brno-m\u011bsto",
            "country": "CZ",
            "postalCode": "602 00",
            "GeoSpatialInfo": {
                "latitude": "48.7667",
                "longitude": "14.7833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-25 20:17:24",
        "quantityPurchased": 950,
        "extendedPrice": 836
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190278",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kirby",
            "lastName": "Farmer",
            "phoneNumber": "+441481-243-517-0029",
            "email": "kfarmer@Telenor.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kfarmer"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/kfarmer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "23 Red Mound Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Martin",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY4",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-06 20:17:24",
        "quantityPurchased": 37,
        "extendedPrice": 332.63
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190279",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elsy",
            "lastName": "Bentley",
            "phoneNumber": "+34-265-300-3394",
            "email": "ebentley@NTT.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9315 Winding Tree Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Villamayor Del Condado",
            "stateProvince": "CL",
            "locality": "Le\u00f3n",
            "country": "ES",
            "postalCode": "24155",
            "GeoSpatialInfo": {
                "latitude": "42.6539",
                "longitude": "-5.4301"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-08 20:17:24",
        "quantityPurchased": 198,
        "extendedPrice": 1285.02
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190280",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louella",
            "lastName": "Hunt",
            "phoneNumber": "+60-149-941-1956",
            "email": "lhunt@MegaFon.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lhunt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7479 Blue Hill Boulevard",
            "buildingName": "Building D1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bemban",
            "stateProvince": "MLK",
            "locality": "Melaka",
            "country": "MY",
            "postalCode": "77200",
            "GeoSpatialInfo": {
                "latitude": "2.2582",
                "longitude": "102.3555"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-29 20:17:24",
        "quantityPurchased": 195,
        "extendedPrice": 171.6
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190281",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Micah",
            "lastName": "Hood",
            "phoneNumber": "+47-310-048-2931",
            "email": "mhood@ATT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mhood"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mhood"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3475 Big River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bergen",
            "stateProvince": "Bergen",
            "locality": "Bergen",
            "country": "NO",
            "postalCode": "5089",
            "GeoSpatialInfo": {
                "latitude": "60.393",
                "longitude": "5.3242"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-07 20:17:24",
        "quantityPurchased": 931,
        "extendedPrice": 6042.1900000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190282",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margarett",
            "lastName": "Campos",
            "phoneNumber": "+81-386-882-4342",
            "email": "mcampos@AIS.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mcampos"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4139 Blue Creek Avenue",
            "buildingName": null,
            "floor": 2,
            "roomApartmentCondoNumber": null,
            "city": "Shimoishibikimachi",
            "stateProvince": "Kanazawa Shi",
            "locality": "Kanazawa Shi",
            "country": "JP",
            "postalCode": "920-0939",
            "GeoSpatialInfo": {
                "latitude": "36.45",
                "longitude": "136.6333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-17 20:17:24",
        "quantityPurchased": 464,
        "extendedPrice": 3707.36
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190283",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Randee",
            "lastName": "Castillo",
            "phoneNumber": "+54-132-187-7938",
            "email": "rcastill@Orstom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4884 Short Mountain Avenue",
            "buildingName": "Building 10",
            "floor": 4,
            "roomApartmentCondoNumber": null,
            "city": "RETAMO (LA PAZ, DPTO. LA PAZ)",
            "stateProvince": "M",
            "locality": "Mendoza",
            "country": "AR",
            "postalCode": "5590",
            "GeoSpatialInfo": {
                "latitude": "-33.5444",
                "longitude": "-67.3111"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-04 20:17:24",
        "quantityPurchased": 878,
        "extendedPrice": 4381.22
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190284",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tosha",
            "lastName": "Francis",
            "phoneNumber": "+1787-165-610-5983",
            "email": "tfrancis@NII.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tfrancis"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tfrancis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/tfrancis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/tfrancis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4138 Winding Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ponce",
            "stateProvince": "Ponce",
            "locality": "Ponce",
            "country": "PR",
            "postalCode": "00717",
            "GeoSpatialInfo": {
                "latitude": "18.0111",
                "longitude": "-66.6141"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-08 20:17:24",
        "quantityPurchased": 508,
        "extendedPrice": 1772.92
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190285",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angeles",
            "lastName": "Lowe",
            "phoneNumber": "+61-380-177-7593",
            "email": "alowe@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/alowe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4200 Big Bough Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Darlington Point",
            "stateProvince": "NSW",
            "locality": "CANBERRA",
            "country": "AU",
            "postalCode": "2706",
            "GeoSpatialInfo": {
                "latitude": "-34.5694",
                "longitude": "145.9987"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-12 20:17:24",
        "quantityPurchased": 73,
        "extendedPrice": 729.27
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190286",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dionne",
            "lastName": "Brady",
            "phoneNumber": "+386-181-760-8538",
            "email": "dbrady@SingTel.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9231 Blue Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sorica",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "4229",
            "GeoSpatialInfo": {
                "latitude": "46.2167",
                "longitude": "14.0333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-19 20:17:24",
        "quantityPurchased": 77,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190287",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Forest",
            "lastName": "Parks",
            "phoneNumber": "+359-377-151-9583",
            "email": "fparks@Etisalat.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/fparks"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4181 Long Canyon Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0414\u044a\u0431\u043e\u0432\u0438\u0446\u0430 \/ Dubovica",
            "stateProvince": "BGS",
            "locality": "\u0421\u0443\u043d\u0433\u0443\u0440\u043b\u0430\u0440\u0435 \/ Sungurlare",
            "country": "BG",
            "postalCode": "8449",
            "GeoSpatialInfo": {
                "latitude": "42.8167",
                "longitude": "26.6333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-05 20:17:24",
        "quantityPurchased": 704,
        "extendedPrice": 4568.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190288",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Julienne",
            "lastName": "Mcfarland",
            "phoneNumber": "+92-244-040-7584",
            "email": "jmcfarla@Millicom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jmcfarla"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9394 Little Woods Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jabu Khel Edbo",
            "stateProvince": "NWFP Peshawar",
            "locality": "NWFP Peshawar",
            "country": "PK",
            "postalCode": "28451",
            "GeoSpatialInfo": {
                "latitude": "32.5583",
                "longitude": "70.7406"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-09 20:17:24",
        "quantityPurchased": 492,
        "extendedPrice": 3931.08
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190289",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elias",
            "lastName": "Brown",
            "phoneNumber": "+423-326-045-1466",
            "email": "ebrown@Safaricom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1203 Red Woods Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Eschen",
            "stateProvince": "Eschen",
            "locality": "Eschen",
            "country": "LI",
            "postalCode": "9492",
            "GeoSpatialInfo": {
                "latitude": "47.209",
                "longitude": "9.5223"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-08 20:17:24",
        "quantityPurchased": 113,
        "extendedPrice": 224.87
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190290",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leon",
            "lastName": "Molina",
            "phoneNumber": "+66-214-798-2054",
            "email": "lmolina@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "443 Blue Woods Avenue",
            "buildingName": "Building E1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sai Mun",
            "stateProvince": "Yasothon",
            "locality": "Yasothon",
            "country": "TH",
            "postalCode": "35170",
            "GeoSpatialInfo": {
                "latitude": "15.95",
                "longitude": "104.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-07-14 20:17:24",
        "quantityPurchased": 65,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190291",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gabriel",
            "lastName": "Thomas",
            "phoneNumber": "+590-175-842-9384",
            "email": "gthomas@LGUplus.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/gthomas"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/gthomas"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/gthomas"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/gthomas"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9570 Little Stream Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Basse-Terre",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97109 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "15.9985",
                "longitude": "-61.7255"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-02 20:17:24",
        "quantityPurchased": 950,
        "extendedPrice": 836
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190292",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louella",
            "lastName": "Hunt",
            "phoneNumber": "+60-149-941-1956",
            "email": "lhunt@MegaFon.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lhunt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7479 Blue Hill Boulevard",
            "buildingName": "Building D1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bemban",
            "stateProvince": "MLK",
            "locality": "Melaka",
            "country": "MY",
            "postalCode": "77200",
            "GeoSpatialInfo": {
                "latitude": "2.2582",
                "longitude": "102.3555"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-22 20:17:24",
        "quantityPurchased": 287,
        "extendedPrice": 2867.13
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190293",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Adrien",
            "lastName": "Eaton",
            "phoneNumber": "+55-270-319-8133",
            "email": "aeaton@APICnet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8620 Red Mountain Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nossa Senhora de Lourdes",
            "stateProvince": "Sergipe",
            "locality": "Sergipe",
            "country": "BR",
            "postalCode": "49890-000",
            "GeoSpatialInfo": {
                "latitude": "-10.1024",
                "longitude": "-37.0277"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-25 20:17:24",
        "quantityPurchased": 233,
        "extendedPrice": 3026.67
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190294",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Marya",
            "lastName": "Meyers",
            "phoneNumber": "+43-109-251-2797",
            "email": "mmeyers@Vodafone.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mmeyers"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mmeyers"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3295 Green Canyon Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Steinbichl",
            "stateProvince": "Frauenstein",
            "locality": "Politischer Bezirk Sankt Veit an der Glan",
            "country": "AT",
            "postalCode": "9300",
            "GeoSpatialInfo": {
                "latitude": "46.8",
                "longitude": "14.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-12 20:17:24",
        "quantityPurchased": 920,
        "extendedPrice": 3210.8
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190295",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ross",
            "lastName": "Snyder",
            "phoneNumber": "+378-283-259-0147",
            "email": "rsnyder@Swisscom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rsnyder"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5779 Red Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "E4",
            "city": "San Giovanni",
            "stateProvince": null,
            "locality": null,
            "country": "SM",
            "postalCode": "47893",
            "GeoSpatialInfo": {
                "latitude": "43.9419",
                "longitude": "12.4474"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-22 20:17:24",
        "quantityPurchased": 104,
        "extendedPrice": 91.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190296",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilber",
            "lastName": "Mcbride",
            "phoneNumber": "+353-315-300-8779",
            "email": "wmcbride@EUnet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/wmcbride"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/wmcbride"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1567 Big Gully Avenue",
            "buildingName": "Building C1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Crookstown",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "P14",
            "GeoSpatialInfo": {
                "latitude": "53.0153",
                "longitude": "-6.8106"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-06 20:17:24",
        "quantityPurchased": 823,
        "extendedPrice": 2460.77
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190297",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosina",
            "lastName": "Blake",
            "phoneNumber": "+590-278-283-4810",
            "email": "rblake@Telkom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9341 Blue River Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pointe-\u00e0-Pitre",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97011 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2422",
                "longitude": "-61.5343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-03 20:17:24",
        "quantityPurchased": 645,
        "extendedPrice": 567.6
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190298",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosina",
            "lastName": "Blake",
            "phoneNumber": "+590-278-283-4810",
            "email": "rblake@Telkom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9341 Blue River Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pointe-\u00e0-Pitre",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97011 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2422",
                "longitude": "-61.5343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-20 20:17:24",
        "quantityPurchased": 483,
        "extendedPrice": 236.67
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190299",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lang",
            "lastName": "Shaffer",
            "phoneNumber": "+375-141-319-5007",
            "email": "lshaffer@TeleSystems.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lshaffer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4484 Blue Bridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "46",
            "city": "\u0417\u0430\u0441\u043a\u043e\u0440\u043a\u0438",
            "stateProvince": "Polotsk",
            "locality": "Polotsk",
            "country": "BY",
            "postalCode": "211655",
            "GeoSpatialInfo": {
                "latitude": "55.3789",
                "longitude": "28.647"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-17 20:17:24",
        "quantityPurchased": 25,
        "extendedPrice": 324.75
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190300",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Hobert",
            "lastName": "Shepherd",
            "phoneNumber": "+66-119-239-7861",
            "email": "hshepher@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hshepher"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/hshepher"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6568 Green Stream Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kpho",
            "stateProvince": "Pattani",
            "locality": "Pattani",
            "country": "TH",
            "postalCode": "94230",
            "GeoSpatialInfo": {
                "latitude": "6.6078",
                "longitude": "101.6667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-19 20:17:24",
        "quantityPurchased": 497,
        "extendedPrice": 2480.03
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190301",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jonelle",
            "lastName": "Shaw",
            "phoneNumber": "+594-182-742-5189",
            "email": "jshaw@LookData.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jshaw"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jshaw"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jshaw"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1950 Winding Mound Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kourou",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97310",
            "GeoSpatialInfo": {
                "latitude": "5.1628",
                "longitude": "-52.6427"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-14 20:17:24",
        "quantityPurchased": 890,
        "extendedPrice": 525.1
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190302",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elke",
            "lastName": "Andrews",
            "phoneNumber": "+1671-121-056-7069",
            "email": "eandrews@KDDI.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/eandrews"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1942 Little Tree Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Asan",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96922",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-22 20:17:24",
        "quantityPurchased": 835,
        "extendedPrice": 492.65
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190303",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Orval",
            "lastName": "Tapia",
            "phoneNumber": "+423-257-905-8602",
            "email": "otapia@DaxNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5614 Big Bough Boulevard",
            "buildingName": "Building 90",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nendeln",
            "stateProvince": "Eschen",
            "locality": "Eschen",
            "country": "LI",
            "postalCode": "9485",
            "GeoSpatialInfo": {
                "latitude": "47.1984",
                "longitude": "9.5501"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-26 20:17:24",
        "quantityPurchased": 912,
        "extendedPrice": 5918.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190304",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Indira",
            "lastName": "Durham",
            "phoneNumber": "+691-263-728-3764",
            "email": "idurham@Frontier.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/idurham"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/idurham"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/idurham"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3487 Long Canyon Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pohnpei",
            "stateProvince": "State of Pohnpei",
            "locality": "State of Pohnpei",
            "country": "FM",
            "postalCode": "96941",
            "GeoSpatialInfo": {
                "latitude": "7.1383",
                "longitude": "151.5031"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-30 20:17:24",
        "quantityPurchased": 342,
        "extendedPrice": 300.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190305",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dakota",
            "lastName": "Fitzpatrick",
            "phoneNumber": "+1671-329-221-1739",
            "email": "dfitzpat@Relcom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "955 Little Creek Avenue",
            "buildingName": null,
            "floor": 3,
            "roomApartmentCondoNumber": null,
            "city": "Dededo",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96912",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-11-29 20:17:24",
        "quantityPurchased": 820,
        "extendedPrice": 401.8
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190306",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Pierre",
            "lastName": "Nunez",
            "phoneNumber": "+46-296-970-4444",
            "email": "pnunez@Etisalat.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/pnunez"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1871 Blue Bend Ride",
            "buildingName": "Building 27",
            "floor": 17,
            "roomApartmentCondoNumber": null,
            "city": "Malm\u00f6",
            "stateProvince": "M",
            "locality": "Sk\u00e5ne",
            "country": "SE",
            "postalCode": "208 01",
            "GeoSpatialInfo": {
                "latitude": "55.6059",
                "longitude": "13.0007"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-02 20:17:24",
        "quantityPurchased": 719,
        "extendedPrice": 2509.31
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190307",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Apryl",
            "lastName": "Mathis",
            "phoneNumber": "+66-197-073-2331",
            "email": "amathis@AlgoNet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/amathis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amathis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2361 Big Creek Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tham Punnara",
            "stateProvince": "Nakhon Sie Thammarat",
            "locality": "Nakhon Sie Thammarat",
            "country": "TH",
            "postalCode": "80260",
            "GeoSpatialInfo": {
                "latitude": "8.54",
                "longitude": "99.65"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-22 20:17:24",
        "quantityPurchased": 855,
        "extendedPrice": 11106.45
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190308",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Renato",
            "lastName": "Travis",
            "phoneNumber": "+60-395-534-9678",
            "email": "rtravis@SKTelecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rtravis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/rtravis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rtravis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6876 Long Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "85",
            "city": "Seremban",
            "stateProvince": "NSN",
            "locality": "Negeri Sembilan",
            "country": "MY",
            "postalCode": "70674",
            "GeoSpatialInfo": {
                "latitude": "2.7186",
                "longitude": "101.949"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-16 20:17:24",
        "quantityPurchased": 776,
        "extendedPrice": 15512.239999999998
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190309",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Else",
            "lastName": "Cordova",
            "phoneNumber": "+48-224-614-3862",
            "email": "ecordova@OTE.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ecordova"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8938 Winding Mountain Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Trze\u015b\u0144",
            "stateProvince": "Mielec",
            "locality": "Powiat mielecki",
            "country": "PL",
            "postalCode": "39-300",
            "GeoSpatialInfo": {
                "latitude": "50.3339",
                "longitude": "21.4996"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-07 20:17:24",
        "quantityPurchased": 254,
        "extendedPrice": 1267.46
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190310",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Hobert",
            "lastName": "Shepherd",
            "phoneNumber": "+66-119-239-7861",
            "email": "hshepher@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hshepher"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/hshepher"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6568 Green Stream Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kpho",
            "stateProvince": "Pattani",
            "locality": "Pattani",
            "country": "TH",
            "postalCode": "94230",
            "GeoSpatialInfo": {
                "latitude": "6.6078",
                "longitude": "101.6667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-20 20:17:24",
        "quantityPurchased": 274,
        "extendedPrice": 956.2600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190311",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Thornton",
            "phoneNumber": "+39-346-073-5246",
            "email": "jthornto@Airtel.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jthornto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6999 Little Bridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Comignago",
            "stateProvince": "PM",
            "locality": "Novara",
            "country": "IT",
            "postalCode": "28060",
            "GeoSpatialInfo": {
                "latitude": "45.7149",
                "longitude": "8.564"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-24 20:17:24",
        "quantityPurchased": 533,
        "extendedPrice": 4258.67
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190312",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Randee",
            "lastName": "Castillo",
            "phoneNumber": "+54-132-187-7938",
            "email": "rcastill@Orstom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4884 Short Mountain Avenue",
            "buildingName": "Building 10",
            "floor": 4,
            "roomApartmentCondoNumber": null,
            "city": "RETAMO (LA PAZ, DPTO. LA PAZ)",
            "stateProvince": "M",
            "locality": "Mendoza",
            "country": "AR",
            "postalCode": "5590",
            "GeoSpatialInfo": {
                "latitude": "-33.5444",
                "longitude": "-67.3111"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-31 20:17:24",
        "quantityPurchased": 343,
        "extendedPrice": 1197.0700000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190313",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gene",
            "lastName": "Dean",
            "phoneNumber": "+380-206-464-6981",
            "email": "gdean@ICom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/gdean"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/gdean"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1480 Green Canyon Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041e\u0434\u043d\u043e\u0440\u043e\u0431\u0456\u0432\u043a\u0430 (\u041e\u0434\u043d\u043e\u0440\u043e\u0431\u0456\u0432\u0441\u044c\u043a\u0430 \u041f\u0435\u0440\u0448\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
            "stateProvince": "Zolochivskyi",
            "locality": "Zolochivskyi",
            "country": "UA",
            "postalCode": "62215",
            "GeoSpatialInfo": {
                "latitude": "50.3696",
                "longitude": "35.9121"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-25 20:17:24",
        "quantityPurchased": 66,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190314",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Chaya",
            "lastName": "Gates",
            "phoneNumber": "+389-272-352-6889",
            "email": "cgates@MaxComm.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cgates"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4797 Short Bend Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Struga",
            "stateProvince": null,
            "locality": null,
            "country": "MK",
            "postalCode": "6330",
            "GeoSpatialInfo": {
                "latitude": "41.1781",
                "longitude": "20.6761"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-28 20:17:24",
        "quantityPurchased": 170,
        "extendedPrice": 8498.300000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190315",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andreas",
            "lastName": "Peck",
            "phoneNumber": "+353-196-204-6758",
            "email": "apeck@cerist.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/apeck"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "637 Green Bend Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Newcastle West",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "V42",
            "GeoSpatialInfo": {
                "latitude": "52.4492",
                "longitude": "-9.0611"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-15 20:17:24",
        "quantityPurchased": 176,
        "extendedPrice": 614.24
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190316",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Milo",
            "lastName": "Brown",
            "phoneNumber": "+45-321-222-7718",
            "email": "mbrown@ATT.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mbrown"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mbrown"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mbrown"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4834 Little River Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "K\u00f8benhavn K",
            "stateProvince": "K\u00f8benhavns Kommune",
            "locality": "K\u00f8benhavns Kommune",
            "country": "DK",
            "postalCode": "1165",
            "GeoSpatialInfo": {
                "latitude": "55.6759",
                "longitude": "12.5655"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-27 20:17:24",
        "quantityPurchased": 867,
        "extendedPrice": 6927.33
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190317",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rena",
            "lastName": "Pace",
            "phoneNumber": "+55-174-703-7269",
            "email": "rpace@ICom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5310 Winding Woods Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Uruguaiana",
            "stateProvince": "Rio Grande do Sul",
            "locality": "Rio Grande do Sul",
            "country": "BR",
            "postalCode": "97500-000",
            "GeoSpatialInfo": {
                "latitude": "-29.828",
                "longitude": "-56.6322"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-13 20:17:24",
        "quantityPurchased": 263,
        "extendedPrice": 1312.3700000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190318",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Porfirio",
            "lastName": "Osborne",
            "phoneNumber": "+441534-374-588-0440",
            "email": "posborne@CenturyLink.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/posborne"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/posborne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "176 Winding Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "DC",
            "city": "St Lawrence",
            "stateProvince": "Jersey Channel Islands",
            "locality": "Jersey Channel Islands",
            "country": "JE",
            "postalCode": "JE3",
            "GeoSpatialInfo": {
                "latitude": "49.2",
                "longitude": "-2.1333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-15 20:17:24",
        "quantityPurchased": 277,
        "extendedPrice": 218.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190319",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nathanial",
            "lastName": "Stokes",
            "phoneNumber": "+7-118-712-6961",
            "email": "nstokes@NordNet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/nstokes"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/nstokes"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4065 Green Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0414\u0432\u043e\u0440\u0438\u0449\u0438",
            "stateProvince": "\u041c\u0410\u041b\u041e\u0412\u0418\u0428\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u0410\u041b\u041e\u0412\u0418\u0428\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "174282",
            "GeoSpatialInfo": {
                "latitude": "58.2",
                "longitude": "35.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-25 20:17:24",
        "quantityPurchased": 936,
        "extendedPrice": 3266.6400000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190320",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jude",
            "lastName": "Bond",
            "phoneNumber": "+64-294-589-3440",
            "email": "jbond@Telefonica.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jbond"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jbond"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9054 Short Gully Boulevard",
            "buildingName": null,
            "floor": 17,
            "roomApartmentCondoNumber": null,
            "city": "Grafton",
            "stateProvince": "E7",
            "locality": "Auckland",
            "country": "NZ",
            "postalCode": "1145",
            "GeoSpatialInfo": {
                "latitude": "-36.8603",
                "longitude": "174.7657"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-02 20:17:24",
        "quantityPurchased": 851,
        "extendedPrice": 5522.99
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190321",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Magan",
            "lastName": "Bradford",
            "phoneNumber": "+47-304-125-2479",
            "email": "mbradfor@Telefonica.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mbradfor"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4499 Winding Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Oslo",
            "stateProvince": "Oslo",
            "locality": "Oslo",
            "country": "NO",
            "postalCode": "0270",
            "GeoSpatialInfo": {
                "latitude": "59.9127",
                "longitude": "10.7461"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-01 20:17:24",
        "quantityPurchased": 256,
        "extendedPrice": 225.28
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190322",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mabelle",
            "lastName": "Chan",
            "phoneNumber": "+351-155-643-3837",
            "email": "mchan@CCI.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mchan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8359 Big Bend Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Fam\u00f5es",
            "stateProvince": "Fam\u00f5es",
            "locality": "Odivelas",
            "country": "PT",
            "postalCode": "1685-145",
            "GeoSpatialInfo": {
                "latitude": "38.788",
                "longitude": "-9.2103"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-22 20:17:24",
        "quantityPurchased": 717,
        "extendedPrice": 2860.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190323",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Caitlyn",
            "lastName": "Jensen",
            "phoneNumber": "+35818-184-514-1246",
            "email": "cjensen@Orstom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/cjensen"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3154 Green Mound Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "D8",
            "city": "Mariehamn",
            "stateProvince": "Mariehamn",
            "locality": "Mariehamn",
            "country": "AX",
            "postalCode": "22101",
            "GeoSpatialInfo": {
                "latitude": "60.0628",
                "longitude": "19.9533"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-16 20:17:24",
        "quantityPurchased": 151,
        "extendedPrice": 979.99
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190324",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tabetha",
            "lastName": "Griffin",
            "phoneNumber": "+594-328-996-9978",
            "email": "tgriffin@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tgriffin"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tgriffin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4427 Blue Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "81",
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97331 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-04 20:17:24",
        "quantityPurchased": 266,
        "extendedPrice": 2657.34
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190325",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Miquel",
            "lastName": "Hawkins",
            "phoneNumber": "+48-193-093-4810",
            "email": "mhawkins@OTE.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mhawkins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3062 Red Woods Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "K\u0142odkowo",
            "stateProvince": "Trzebiat\u00f3w",
            "locality": "Powiat gryficki",
            "country": "PL",
            "postalCode": "72-320",
            "GeoSpatialInfo": {
                "latitude": "54.0078",
                "longitude": "15.2436"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-13 20:17:24",
        "quantityPurchased": 839,
        "extendedPrice": 8381.61
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190326",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Alexander",
            "lastName": "Campos",
            "phoneNumber": "+590-298-827-7091",
            "email": "acampos@Belgacom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/acampos"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/acampos"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4014 Green Woods Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jarry",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97197 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2359",
                "longitude": "-61.558"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-15 20:17:24",
        "quantityPurchased": 267,
        "extendedPrice": 1332.3300000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190327",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Johnetta",
            "lastName": "Sullivan",
            "phoneNumber": "+441481-319-030-0404",
            "email": "jsulliva@AIS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jsulliva"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jsulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3052 Red Creek Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Delancey",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY2",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-12 20:17:24",
        "quantityPurchased": 275,
        "extendedPrice": 184.25
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190328",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rozanne",
            "lastName": "Mcdowell",
            "phoneNumber": "+36-200-555-2212",
            "email": "rmcdowel@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1688 Big Gully Avenue",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Hidas",
            "stateProvince": "BA",
            "locality": "Baranya",
            "country": "HU",
            "postalCode": "7696",
            "GeoSpatialInfo": {
                "latitude": "46.2667",
                "longitude": "18.5"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-30 20:17:24",
        "quantityPurchased": 431,
        "extendedPrice": 211.19
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190329",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Buster",
            "lastName": "Blair",
            "phoneNumber": "+262-173-425-7859",
            "email": "bblair@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/bblair"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/bblair"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bblair"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bblair"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/bblair"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5686 Short Gully Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dembeni",
            "stateProvince": "Dembeni",
            "locality": "Dembeni",
            "country": "YT",
            "postalCode": "97660",
            "GeoSpatialInfo": {
                "latitude": "-12.8436",
                "longitude": "45.1844"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-10 20:17:24",
        "quantityPurchased": 872,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190330",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Irina",
            "lastName": "Gates",
            "phoneNumber": "+687-324-979-1630",
            "email": "igates@Jio.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/igates"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4292 Winding Woods Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pa\u00efta",
            "stateProvince": "Pa\u00efta",
            "locality": "Pa\u00efta",
            "country": "NC",
            "postalCode": "98889",
            "GeoSpatialInfo": {
                "latitude": "-22.131",
                "longitude": "166.3572"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-28 20:17:24",
        "quantityPurchased": 666,
        "extendedPrice": 1325.34
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190331",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Angel",
            "lastName": "Dawson",
            "phoneNumber": "+32-233-616-4312",
            "email": "adawson@LGUplus.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/adawson"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/adawson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5081 Blue Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F5",
            "city": "Lille",
            "stateProvince": "VLG",
            "locality": "Antwerpen",
            "country": "BE",
            "postalCode": "2275",
            "GeoSpatialInfo": {
                "latitude": "51.2333",
                "longitude": "4.8333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-04 20:17:24",
        "quantityPurchased": 80,
        "extendedPrice": 279.20000000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190332",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ethan",
            "lastName": "Williams",
            "phoneNumber": "+441481-218-067-2691",
            "email": "ewilliam@Etisalat.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ewilliam"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "409 Red Gulch Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Castel",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY5",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-28 20:17:24",
        "quantityPurchased": 27,
        "extendedPrice": 94.23
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190333",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margarett",
            "lastName": "Campos",
            "phoneNumber": "+81-386-882-4342",
            "email": "mcampos@AIS.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mcampos"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4139 Blue Creek Avenue",
            "buildingName": null,
            "floor": 2,
            "roomApartmentCondoNumber": null,
            "city": "Shimoishibikimachi",
            "stateProvince": "Kanazawa Shi",
            "locality": "Kanazawa Shi",
            "country": "JP",
            "postalCode": "920-0939",
            "GeoSpatialInfo": {
                "latitude": "36.45",
                "longitude": "136.6333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-18 20:17:24",
        "quantityPurchased": 467,
        "extendedPrice": 23345.33
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190334",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elisha",
            "lastName": "Diaz",
            "phoneNumber": "+298-236-154-2019",
            "email": "ediaz@Airtel.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ediaz"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5525 Red Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "F1",
            "city": "Funningsfj\u00f8rdur",
            "stateProvince": null,
            "locality": null,
            "country": "FO",
            "postalCode": "477",
            "GeoSpatialInfo": {
                "latitude": "62.2333",
                "longitude": "-6.9167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-16 20:17:24",
        "quantityPurchased": 57,
        "extendedPrice": 27.93
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190335",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rozanne",
            "lastName": "Mcdowell",
            "phoneNumber": "+36-200-555-2212",
            "email": "rmcdowel@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1688 Big Gully Avenue",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Hidas",
            "stateProvince": "BA",
            "locality": "Baranya",
            "country": "HU",
            "postalCode": "7696",
            "GeoSpatialInfo": {
                "latitude": "46.2667",
                "longitude": "18.5"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-22 20:17:24",
        "quantityPurchased": 984,
        "extendedPrice": 4910.16
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190336",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Orval",
            "lastName": "Tapia",
            "phoneNumber": "+423-257-905-8602",
            "email": "otapia@DaxNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5614 Big Bough Boulevard",
            "buildingName": "Building 90",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nendeln",
            "stateProvince": "Eschen",
            "locality": "Eschen",
            "country": "LI",
            "postalCode": "9485",
            "GeoSpatialInfo": {
                "latitude": "47.1984",
                "longitude": "9.5501"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-07 20:17:24",
        "quantityPurchased": 799,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190337",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Renato",
            "lastName": "Travis",
            "phoneNumber": "+60-395-534-9678",
            "email": "rtravis@SKTelecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rtravis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/rtravis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rtravis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6876 Long Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "85",
            "city": "Seremban",
            "stateProvince": "NSN",
            "locality": "Negeri Sembilan",
            "country": "MY",
            "postalCode": "70674",
            "GeoSpatialInfo": {
                "latitude": "2.7186",
                "longitude": "101.949"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-09 20:17:24",
        "quantityPurchased": 356,
        "extendedPrice": 1776.44
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190338",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Neva",
            "lastName": "Sweeney",
            "phoneNumber": "+441624-183-573-7097",
            "email": "nsweeney@Relcom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nsweeney"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9736 Short River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Lingague",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM9",
            "GeoSpatialInfo": {
                "latitude": "54.0951",
                "longitude": "-4.6929"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-27 20:17:24",
        "quantityPurchased": 348,
        "extendedPrice": 1214.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190339",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tierra",
            "lastName": "Bradshaw",
            "phoneNumber": "+47-146-816-6595",
            "email": "tbradsha@Frontier.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5080 Green Hill Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3E",
            "city": "Dr\u00f8bak",
            "stateProvince": "Frogn",
            "locality": "Frogn",
            "country": "NO",
            "postalCode": "1442",
            "GeoSpatialInfo": {
                "latitude": "59.6633",
                "longitude": "10.6297"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-06 20:17:24",
        "quantityPurchased": 378,
        "extendedPrice": 298.62
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190340",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kelley",
            "lastName": "Howard",
            "phoneNumber": "+385-384-261-8607",
            "email": "khoward@Telkom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/khoward"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/khoward"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6841 Big Hill Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stani\u0161i",
            "stateProvince": "Vi\u017einada",
            "locality": "Vi\u017einada",
            "country": "HR",
            "postalCode": "52447",
            "GeoSpatialInfo": {
                "latitude": "45.1881",
                "longitude": "14.1246"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-31 20:17:24",
        "quantityPurchased": 959,
        "extendedPrice": 4785.41
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190341",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Keshia",
            "lastName": "Daniels",
            "phoneNumber": "+386-230-680-0747",
            "email": "kdaniels@Softbank.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kdaniels"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/kdaniels"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9601 Long Gully Street",
            "buildingName": null,
            "floor": 13,
            "roomApartmentCondoNumber": null,
            "city": "Komen",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "6223",
            "GeoSpatialInfo": {
                "latitude": "45.8153",
                "longitude": "13.7483"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-07-03 20:17:24",
        "quantityPurchased": 535,
        "extendedPrice": 2134.65
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190342",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Devon",
            "lastName": "Khan",
            "phoneNumber": "+32-219-368-6703",
            "email": "dkhan@Telefonica.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "7835 Short Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dalhem Feneur",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4607",
            "GeoSpatialInfo": {
                "latitude": "50.7",
                "longitude": "5.7167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-23 20:17:24",
        "quantityPurchased": 526,
        "extendedPrice": 1046.74
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190343",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilmer",
            "lastName": "Stevens",
            "phoneNumber": "+61-170-171-3339",
            "email": "wstevens@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5212 Little River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Glenelg Jetty Road",
            "stateProvince": "SA",
            "locality": "South Australia",
            "country": "AU",
            "postalCode": "5045",
            "GeoSpatialInfo": {
                "latitude": "-34.9833",
                "longitude": "138.5167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-15 20:17:24",
        "quantityPurchased": 100,
        "extendedPrice": 349
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190344",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jude",
            "lastName": "Bond",
            "phoneNumber": "+64-294-589-3440",
            "email": "jbond@Telefonica.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jbond"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jbond"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9054 Short Gully Boulevard",
            "buildingName": null,
            "floor": 17,
            "roomApartmentCondoNumber": null,
            "city": "Grafton",
            "stateProvince": "E7",
            "locality": "Auckland",
            "country": "NZ",
            "postalCode": "1145",
            "GeoSpatialInfo": {
                "latitude": "-36.8603",
                "longitude": "174.7657"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-21 20:17:24",
        "quantityPurchased": 320,
        "extendedPrice": 1116.8000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190345",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sarina",
            "lastName": "Best",
            "phoneNumber": "+36-226-291-5578",
            "email": "sbest@TeleSystems.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/sbest"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/sbest"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2906 Blue Tree Circle",
            "buildingName": "Building 2E",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kecsk\u00e9d",
            "stateProvince": "KE",
            "locality": "Kom\u00e1rom-Esztergom",
            "country": "HU",
            "postalCode": "2852",
            "GeoSpatialInfo": {
                "latitude": "47.5167",
                "longitude": "18.3167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-06 20:17:24",
        "quantityPurchased": 48,
        "extendedPrice": 383.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190346",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sherilyn",
            "lastName": "Mcdowell",
            "phoneNumber": "+358-289-154-0860",
            "email": "smcdowel@Telus.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5430 Short Stream Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Huhmarkoski",
            "stateProvince": "Kauhava",
            "locality": "Sein\u00e4joki",
            "country": "FI",
            "postalCode": "62240",
            "GeoSpatialInfo": {
                "latitude": "63.1212",
                "longitude": "23.263"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-30 20:17:24",
        "quantityPurchased": 35,
        "extendedPrice": 244.65
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190347",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Vivien",
            "lastName": "Goodwin",
            "phoneNumber": "+7-336-919-0919",
            "email": "vgoodwin@Orstom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/vgoodwin"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5606 Winding Creek Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434 136",
            "stateProvince": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "locality": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
            "country": "RU",
            "postalCode": "400136",
            "GeoSpatialInfo": {
                "latitude": "49.544",
                "longitude": "44.2679"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-18 20:17:24",
        "quantityPurchased": 732,
        "extendedPrice": 5116.68
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190348",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nathanial",
            "lastName": "Stokes",
            "phoneNumber": "+7-118-712-6961",
            "email": "nstokes@NordNet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/nstokes"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/nstokes"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4065 Green Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0414\u0432\u043e\u0440\u0438\u0449\u0438",
            "stateProvince": "\u041c\u0410\u041b\u041e\u0412\u0418\u0428\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u0410\u041b\u041e\u0412\u0418\u0428\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "174282",
            "GeoSpatialInfo": {
                "latitude": "58.2",
                "longitude": "35.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-21 20:17:24",
        "quantityPurchased": 531,
        "extendedPrice": 2118.69
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190349",
    "CustomerInfo": {
        "PrimaryContactInfo": null,
        "Address": null
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-13 20:17:24",
        "quantityPurchased": 504,
        "extendedPrice": 2514.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190350",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nevada",
            "lastName": "Wright",
            "phoneNumber": "+687-364-752-9652",
            "email": "nwright@Sprint.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/nwright"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nwright"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3654 Big Gully Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Houa\u00eflou",
            "stateProvince": "Houa\u00eflou",
            "locality": "Houa\u00eflou",
            "country": "NC",
            "postalCode": "98816",
            "GeoSpatialInfo": {
                "latitude": "-21.2865",
                "longitude": "165.6343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-03 20:17:24",
        "quantityPurchased": 371,
        "extendedPrice": 248.57000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190351",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Carrol",
            "lastName": "Phillips",
            "phoneNumber": "+370-242-708-7084",
            "email": "cphillip@NTT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/cphillip"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cphillip"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4466 Little Ditch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kidoli\u0161ki\u0173 k.",
            "stateProvince": "Marijampol\u0117s sav.",
            "locality": "Marijampol\u0117s sav.",
            "country": "LT",
            "postalCode": "68001",
            "GeoSpatialInfo": {
                "latitude": "54.5667",
                "longitude": "23.35"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-14 20:17:24",
        "quantityPurchased": 513,
        "extendedPrice": 5124.87
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190352",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Marisa",
            "lastName": "Monroe",
            "phoneNumber": "+262-371-290-0167",
            "email": "mmonroe@MegaFon.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mmonroe"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mmonroe"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mmonroe"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mmonroe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3937 Winding Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sada",
            "stateProvince": "Sada",
            "locality": "Sada",
            "country": "YT",
            "postalCode": "97640",
            "GeoSpatialInfo": {
                "latitude": "-12.8505",
                "longitude": "45.1021"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-20 20:17:24",
        "quantityPurchased": 249,
        "extendedPrice": 146.91
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190353",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Catherina",
            "lastName": "Stevens",
            "phoneNumber": "+61-337-041-4159",
            "email": "cstevens@NordNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4077 Winding Ridge Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dampier",
            "stateProvince": "WA",
            "locality": "KALGOORLIE",
            "country": "AU",
            "postalCode": "6713",
            "GeoSpatialInfo": {
                "latitude": "-20.6627",
                "longitude": "116.7126"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-11-28 20:17:24",
        "quantityPurchased": 72,
        "extendedPrice": 251.28000000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190354",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Elias",
            "lastName": "Brown",
            "phoneNumber": "+423-326-045-1466",
            "email": "ebrown@Safaricom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1203 Red Woods Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Eschen",
            "stateProvince": "Eschen",
            "locality": "Eschen",
            "country": "LI",
            "postalCode": "9492",
            "GeoSpatialInfo": {
                "latitude": "47.209",
                "longitude": "9.5223"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-09 20:17:24",
        "quantityPurchased": 224,
        "extendedPrice": 445.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190355",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dannie",
            "lastName": "Sierra",
            "phoneNumber": "+52-295-108-5597",
            "email": "dsierra@APICnet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dsierra"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/dsierra"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2292 Short Hill Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pilares de Nacozari",
            "stateProvince": "SON",
            "locality": "Nacozari de Garc\u00eda",
            "country": "MX",
            "postalCode": "84352",
            "GeoSpatialInfo": {
                "latitude": "30.6667",
                "longitude": "-109.3"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-16 20:17:24",
        "quantityPurchased": 685,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190356",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Terry",
            "lastName": "Zamora",
            "phoneNumber": "+594-164-429-0692",
            "email": "tzamora@MTN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4928 Blue Bend Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Apatou",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97317",
            "GeoSpatialInfo": {
                "latitude": "5.1553",
                "longitude": "-54.3431"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-27 20:17:24",
        "quantityPurchased": 167,
        "extendedPrice": 111.89
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190357",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Roxana",
            "lastName": "Palacios",
            "phoneNumber": "+1-190-679-1467",
            "email": "rpalacio@MegaFon.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rpalacio"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rpalacio"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "734 Blue Woods Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Saint Petersburg",
            "stateProvince": "FL",
            "locality": "Pinellas",
            "country": "US",
            "postalCode": "33736",
            "GeoSpatialInfo": {
                "latitude": "27.8918",
                "longitude": "-82.7248"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-28 20:17:24",
        "quantityPurchased": 833,
        "extendedPrice": 558.11
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190358",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leif",
            "lastName": "Morrison",
            "phoneNumber": "+91-188-572-4694",
            "email": "lmorriso@Belgacom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/lmorriso"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8009 Winding Bend Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Basbita",
            "stateProvince": "Shambhuganj",
            "locality": "Banka",
            "country": "IN",
            "postalCode": "813221",
            "GeoSpatialInfo": {
                "latitude": "26.7605",
                "longitude": "84.9664"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-27 20:17:24",
        "quantityPurchased": 345,
        "extendedPrice": 6896.549999999999
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190359",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nikia",
            "lastName": "Zuniga",
            "phoneNumber": "+55-325-932-6057",
            "email": "nzuniga@Telenor.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/nzuniga"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/nzuniga"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/nzuniga"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nzuniga"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4964 Big Woods Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "94",
            "city": "Iracema do Oeste",
            "stateProvince": "Parana",
            "locality": "Parana",
            "country": "BR",
            "postalCode": "85833-000",
            "GeoSpatialInfo": {
                "latitude": "-24.4367",
                "longitude": "-53.3384"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-04-27 20:17:24",
        "quantityPurchased": 512,
        "extendedPrice": 1786.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190360",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Raleigh",
            "lastName": "Villarreal",
            "phoneNumber": "+506-264-360-4650",
            "email": "rvillarr@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rvillarr"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8897 Big Creek Boulevard",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": "F3",
            "city": "Merced",
            "stateProvince": "Merced",
            "locality": "San Jos\u00e9",
            "country": "CR",
            "postalCode": "10102",
            "GeoSpatialInfo": {
                "latitude": "9.9397",
                "longitude": "-84.0884"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-16 20:17:24",
        "quantityPurchased": 550,
        "extendedPrice": 2744.5
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190361",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Oswaldo",
            "lastName": "Castaneda",
            "phoneNumber": "+81-258-566-4481",
            "email": "ocastane@CUBENet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8707 Blue Hill Road",
            "buildingName": null,
            "floor": 15,
            "roomApartmentCondoNumber": null,
            "city": "Inukatacho",
            "stateProvince": "Hikone Shi",
            "locality": "Hikone Shi",
            "country": "JP",
            "postalCode": "522-0236",
            "GeoSpatialInfo": {
                "latitude": "35.072",
                "longitude": "136.2128"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-03-28 20:17:24",
        "quantityPurchased": 80,
        "extendedPrice": 319.20000000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190362",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rozanne",
            "lastName": "Mcdowell",
            "phoneNumber": "+36-200-555-2212",
            "email": "rmcdowel@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "1688 Big Gully Avenue",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Hidas",
            "stateProvince": "BA",
            "locality": "Baranya",
            "country": "HU",
            "postalCode": "7696",
            "GeoSpatialInfo": {
                "latitude": "46.2667",
                "longitude": "18.5"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-23 20:17:24",
        "quantityPurchased": 975,
        "extendedPrice": 6815.25
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190363",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Oswaldo",
            "lastName": "Castaneda",
            "phoneNumber": "+81-258-566-4481",
            "email": "ocastane@CUBENet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8707 Blue Hill Road",
            "buildingName": null,
            "floor": 15,
            "roomApartmentCondoNumber": null,
            "city": "Inukatacho",
            "stateProvince": "Hikone Shi",
            "locality": "Hikone Shi",
            "country": "JP",
            "postalCode": "522-0236",
            "GeoSpatialInfo": {
                "latitude": "35.072",
                "longitude": "136.2128"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-26 20:17:24",
        "quantityPurchased": 125,
        "extendedPrice": 2498.75
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190364",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Holly",
            "lastName": "Guzman",
            "phoneNumber": "+423-250-722-6484",
            "email": "hguzman@Telecom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/hguzman"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/hguzman"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6553 Little Ridge Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Triesen",
            "stateProvince": "Triesen",
            "locality": "Triesen",
            "country": "LI",
            "postalCode": "9495",
            "GeoSpatialInfo": {
                "latitude": "47.0805",
                "longitude": "9.5515"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-18 20:17:24",
        "quantityPurchased": 409,
        "extendedPrice": 1631.91
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190365",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leonor",
            "lastName": "Booth",
            "phoneNumber": "+63-366-555-1577",
            "email": "lbooth@Bifty.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "7509 Big Mound Way",
            "buildingName": null,
            "floor": 3,
            "roomApartmentCondoNumber": null,
            "city": "Morong",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "1960",
            "GeoSpatialInfo": {
                "latitude": "14.6789",
                "longitude": "120.2661"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-01 20:17:24",
        "quantityPurchased": 811,
        "extendedPrice": 543.37
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190366",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Armando",
            "lastName": "Melton",
            "phoneNumber": "+41-110-535-5526",
            "email": "amelton@MTN.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/amelton"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/amelton"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/amelton"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7356 Green Mound Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cresciano",
            "stateProvince": "TI",
            "locality": "Riviera District",
            "country": "CH",
            "postalCode": "6705",
            "GeoSpatialInfo": {
                "latitude": "46.2787",
                "longitude": "9.0026"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-24 20:17:24",
        "quantityPurchased": 517,
        "extendedPrice": 346.39000000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190367",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jonelle",
            "lastName": "Shaw",
            "phoneNumber": "+594-182-742-5189",
            "email": "jshaw@LookData.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jshaw"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jshaw"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jshaw"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1950 Winding Mound Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kourou",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97310",
            "GeoSpatialInfo": {
                "latitude": "5.1628",
                "longitude": "-52.6427"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-15 20:17:24",
        "quantityPurchased": 182,
        "extendedPrice": 143.78
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190368",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dominique",
            "lastName": "Conrad",
            "phoneNumber": "+49-358-283-1387",
            "email": "dconrad@Chunghwa.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/dconrad"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "346 Blue Hill Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Medow",
            "stateProvince": "MV",
            "locality": "Vorpommern-Greifswald",
            "country": "DE",
            "postalCode": "17391",
            "GeoSpatialInfo": {
                "latitude": "53.839",
                "longitude": "13.5305"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-31 20:17:24",
        "quantityPurchased": 452,
        "extendedPrice": 2933.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190369",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leslie",
            "lastName": "Maynard",
            "phoneNumber": "+423-114-196-1441",
            "email": "lmaynard@Orstom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lmaynard"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lmaynard"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7406 Big Mound Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nendeln",
            "stateProvince": "Eschen",
            "locality": "Eschen",
            "country": "LI",
            "postalCode": "9485",
            "GeoSpatialInfo": {
                "latitude": "47.1984",
                "longitude": "9.5501"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-06 20:17:24",
        "quantityPurchased": 97,
        "extendedPrice": 678.03
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190370",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lacresha",
            "lastName": "Welch",
            "phoneNumber": "+594-322-397-5777",
            "email": "lwelch@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4614 Red Hill Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cayenne",
            "stateProvince": "GF",
            "locality": "Guyane",
            "country": "GF",
            "postalCode": "97309 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "4.9333",
                "longitude": "-52.3333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-02 20:17:24",
        "quantityPurchased": 618,
        "extendedPrice": 4319.82
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190371",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosina",
            "lastName": "Blake",
            "phoneNumber": "+590-278-283-4810",
            "email": "rblake@Telkom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9341 Blue River Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pointe-\u00e0-Pitre",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97011 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2422",
                "longitude": "-61.5343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-28 20:17:24",
        "quantityPurchased": 297,
        "extendedPrice": 3858.03
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190372",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Linh",
            "lastName": "Trevino",
            "phoneNumber": "+32-365-763-3790",
            "email": "ltrevino@CUBENet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ltrevino"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ltrevino"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2743 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Aywaille Louveign\u00e9",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4920",
            "GeoSpatialInfo": {
                "latitude": "50.4478",
                "longitude": "5.6793"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-27 20:17:24",
        "quantityPurchased": 191,
        "extendedPrice": 1335.0900000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190373",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bernarda",
            "lastName": "Faulkner",
            "phoneNumber": "+376-241-474-4995",
            "email": "bfaulkne@GlasNET.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bfaulkne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8270 Winding Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Escaldes-Engordany",
            "stateProvince": null,
            "locality": null,
            "country": "AD",
            "postalCode": "AD700",
            "GeoSpatialInfo": {
                "latitude": "42.5",
                "longitude": "1.5667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-10 20:17:24",
        "quantityPurchased": 905,
        "extendedPrice": 796.4
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190374",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Hobert",
            "lastName": "Shepherd",
            "phoneNumber": "+66-119-239-7861",
            "email": "hshepher@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hshepher"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/hshepher"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6568 Green Stream Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kpho",
            "stateProvince": "Pattani",
            "locality": "Pattani",
            "country": "TH",
            "postalCode": "94230",
            "GeoSpatialInfo": {
                "latitude": "6.6078",
                "longitude": "101.6667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-08 20:17:24",
        "quantityPurchased": 187,
        "extendedPrice": 559.13
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190375",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louella",
            "lastName": "Hunt",
            "phoneNumber": "+60-149-941-1956",
            "email": "lhunt@MegaFon.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lhunt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7479 Blue Hill Boulevard",
            "buildingName": "Building D1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bemban",
            "stateProvince": "MLK",
            "locality": "Melaka",
            "country": "MY",
            "postalCode": "77200",
            "GeoSpatialInfo": {
                "latitude": "2.2582",
                "longitude": "102.3555"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-17 20:17:24",
        "quantityPurchased": 65,
        "extendedPrice": 649.35
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190376",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Odis",
            "lastName": "Fuller",
            "phoneNumber": "+880-144-393-3740",
            "email": "ofuller@DaxNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9298 Short Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Gopaldi",
            "stateProvince": "Araihazar",
            "locality": "Narayanganj",
            "country": "BD",
            "postalCode": "1451",
            "GeoSpatialInfo": {
                "latitude": "23.8057",
                "longitude": "90.7103"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-15 20:17:24",
        "quantityPurchased": 62,
        "extendedPrice": 185.38000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190377",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Marisa",
            "lastName": "Monroe",
            "phoneNumber": "+262-371-290-0167",
            "email": "mmonroe@MegaFon.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mmonroe"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mmonroe"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mmonroe"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mmonroe"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3937 Winding Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sada",
            "stateProvince": "Sada",
            "locality": "Sada",
            "country": "YT",
            "postalCode": "97640",
            "GeoSpatialInfo": {
                "latitude": "-12.8505",
                "longitude": "45.1021"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-12 20:17:24",
        "quantityPurchased": 515,
        "extendedPrice": 1539.8500000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190378",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Hsiu",
            "lastName": "Rogers",
            "phoneNumber": "+378-353-496-3532",
            "email": "hrogers@TeleSystems.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/hrogers"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/hrogers"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9145 Short Bough Avenue",
            "buildingName": "Building 4B",
            "floor": 20,
            "roomApartmentCondoNumber": null,
            "city": "Chiesanuova",
            "stateProvince": null,
            "locality": null,
            "country": "SM",
            "postalCode": "47894",
            "GeoSpatialInfo": {
                "latitude": "43.9167",
                "longitude": "12.4167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-16 20:17:24",
        "quantityPurchased": 178,
        "extendedPrice": 105.02
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190379",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shasta",
            "lastName": "Hunter",
            "phoneNumber": "+33-228-243-6534",
            "email": "shunter@TelecomItalia.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/shunter"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/shunter"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9459 Big Mountain Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tarbes",
            "stateProvince": "Arrondissement de Tarbes",
            "locality": "Hautes-Pyr\u00e9n\u00e9es",
            "country": "FR",
            "postalCode": "65000",
            "GeoSpatialInfo": {
                "latitude": "43.2333",
                "longitude": "0.0833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-17 20:17:24",
        "quantityPurchased": 403,
        "extendedPrice": 801.97
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190380",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eldon",
            "lastName": "Casey",
            "phoneNumber": "+54-245-073-0201",
            "email": "ecasey@VimpelCom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ecasey"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6462 Big Bend Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "SAN NICOLAS ESTAFETA N\u00ba7",
            "stateProvince": "B",
            "locality": "Buenos Aires",
            "country": "AR",
            "postalCode": "2900",
            "GeoSpatialInfo": {
                "latitude": "-33.3303",
                "longitude": "-60.2269"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-13 20:17:24",
        "quantityPurchased": 433,
        "extendedPrice": 5624.67
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190381",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mack",
            "lastName": "Esparza",
            "phoneNumber": "+299-191-755-1958",
            "email": "mesparza@Telecom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "628 Long Ditch Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Uummannaq",
            "stateProvince": null,
            "locality": null,
            "country": "GL",
            "postalCode": "3961",
            "GeoSpatialInfo": {
                "latitude": "70.6747",
                "longitude": "-52.1264"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-26 20:17:24",
        "quantityPurchased": 632,
        "extendedPrice": 2205.6800000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190382",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Johnetta",
            "lastName": "Sullivan",
            "phoneNumber": "+441481-319-030-0404",
            "email": "jsulliva@AIS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jsulliva"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jsulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3052 Red Creek Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Delancey",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY2",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-14 20:17:24",
        "quantityPurchased": 69,
        "extendedPrice": 482.31
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190383",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Vanetta",
            "lastName": "Roberson",
            "phoneNumber": "+94-217-806-4314",
            "email": "vroberso@OpenWorld.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4426 Short Canyon Boulevard",
            "buildingName": "Building F2",
            "floor": 5,
            "roomApartmentCondoNumber": null,
            "city": "Morontuduwa",
            "stateProvince": "Kalutara",
            "locality": "Kalutara",
            "country": "LK",
            "postalCode": "12564",
            "GeoSpatialInfo": {
                "latitude": "6.6594",
                "longitude": "79.9726"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-11 20:17:24",
        "quantityPurchased": 219,
        "extendedPrice": 764.3100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190384",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mack",
            "lastName": "Esparza",
            "phoneNumber": "+299-191-755-1958",
            "email": "mesparza@Telecom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "628 Long Ditch Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Uummannaq",
            "stateProvince": null,
            "locality": null,
            "country": "GL",
            "postalCode": "3961",
            "GeoSpatialInfo": {
                "latitude": "70.6747",
                "longitude": "-52.1264"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-09 20:17:24",
        "quantityPurchased": 512,
        "extendedPrice": 1786.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190385",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Irving",
            "lastName": "Reyna",
            "phoneNumber": "+375-159-855-5549",
            "email": "ireyna@ICom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ireyna"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1874 Red Bough Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041a\u043e\u0437\u043b\u043e\u0432\u043a\u0430",
            "stateProvince": "Svetloghorsk",
            "locality": "Svetloghorsk",
            "country": "BY",
            "postalCode": "247420",
            "GeoSpatialInfo": {
                "latitude": "52.7913",
                "longitude": "29.4083"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-07-14 20:17:24",
        "quantityPurchased": 104,
        "extendedPrice": 674.96
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190386",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Armando",
            "lastName": "Tanner",
            "phoneNumber": "+7-362-180-1905",
            "email": "atanner@Oi.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/atanner"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9754 Short Mound Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "01",
            "city": "\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u043a\u0430\u044f",
            "stateProvince": "\u041f\u0420\u0418\u041c\u041e\u0420\u0421\u041a\u041e-\u0410\u0425\u0422\u0410\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041f\u0420\u0418\u041c\u041e\u0420\u0421\u041a\u041e-\u0410\u0425\u0422\u0410\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "353899",
            "GeoSpatialInfo": {
                "latitude": "45.8431",
                "longitude": "38.6139"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-10-12 20:17:24",
        "quantityPurchased": 703,
        "extendedPrice": 344.46999999999997
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190387",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ellan",
            "lastName": "Sullivan",
            "phoneNumber": "+506-355-176-1383",
            "email": "esulliva@Chunghwa.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/esulliva"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/esulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "248 Short Bough Way",
            "buildingName": null,
            "floor": 14,
            "roomApartmentCondoNumber": null,
            "city": "San Pablo",
            "stateProvince": "San Pablo",
            "locality": "San Pablo",
            "country": "CR",
            "postalCode": "40901",
            "GeoSpatialInfo": {
                "latitude": "9.9994",
                "longitude": "-84.0905"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-12 20:17:24",
        "quantityPurchased": 734,
        "extendedPrice": 4763.66
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190388",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Micah",
            "lastName": "Hood",
            "phoneNumber": "+47-310-048-2931",
            "email": "mhood@ATT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mhood"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mhood"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3475 Big River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bergen",
            "stateProvince": "Bergen",
            "locality": "Bergen",
            "country": "NO",
            "postalCode": "5089",
            "GeoSpatialInfo": {
                "latitude": "60.393",
                "longitude": "5.3242"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-05 20:17:24",
        "quantityPurchased": 558,
        "extendedPrice": 273.42
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190389",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kelley",
            "lastName": "Howard",
            "phoneNumber": "+385-384-261-8607",
            "email": "khoward@Telkom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/khoward"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/khoward"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6841 Big Hill Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stani\u0161i",
            "stateProvince": "Vi\u017einada",
            "locality": "Vi\u017einada",
            "country": "HR",
            "postalCode": "52447",
            "GeoSpatialInfo": {
                "latitude": "45.1881",
                "longitude": "14.1246"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-09 20:17:24",
        "quantityPurchased": 27,
        "extendedPrice": 1349.73
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190390",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Augusta",
            "lastName": "Berry",
            "phoneNumber": "+687-192-526-1187",
            "email": "aberry@LGUplus.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/aberry"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "160 Red Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pont des Fran\u00e7ais",
            "stateProvince": "Le Mont-Dore",
            "locality": "Le Mont-Dore",
            "country": "NC",
            "postalCode": "98874",
            "GeoSpatialInfo": {
                "latitude": "-22.2167",
                "longitude": "166.4833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-07 20:17:24",
        "quantityPurchased": 610,
        "extendedPrice": 2433.9
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190391",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shannon",
            "lastName": "Bryant",
            "phoneNumber": "+351-210-340-0364",
            "email": "sbryant@NTT.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "910 Green Gulch Circle",
            "buildingName": "Building 9A",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Castelo Branco",
            "stateProvince": "Castelo Branco",
            "locality": "Castelo Branco",
            "country": "PT",
            "postalCode": "6000-481",
            "GeoSpatialInfo": {
                "latitude": "39.8222",
                "longitude": "-7.4909"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-10 20:17:24",
        "quantityPurchased": 663,
        "extendedPrice": 391.16999999999996
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190392",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jayson",
            "lastName": "Leblanc",
            "phoneNumber": "+7-249-835-4466",
            "email": "jleblanc@Telefonica.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jleblanc"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7422 Winding Stream Circle",
            "buildingName": null,
            "floor": 12,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u041e\u0437\u0435\u0440\u043a\u0438",
            "stateProvince": "\u041a\u041e\u0420\u0421\u0410\u041a\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041a\u041e\u0420\u0421\u0410\u041a\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "303588",
            "GeoSpatialInfo": {
                "latitude": "53.2996",
                "longitude": "36.4084"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-14 20:17:24",
        "quantityPurchased": 696,
        "extendedPrice": 2429.04
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190393",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leon",
            "lastName": "Molina",
            "phoneNumber": "+66-214-798-2054",
            "email": "lmolina@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "443 Blue Woods Avenue",
            "buildingName": "Building E1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sai Mun",
            "stateProvince": "Yasothon",
            "locality": "Yasothon",
            "country": "TH",
            "postalCode": "35170",
            "GeoSpatialInfo": {
                "latitude": "15.95",
                "longitude": "104.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-15 20:17:24",
        "quantityPurchased": 272,
        "extendedPrice": 949.2800000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190394",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sonny",
            "lastName": "Paul",
            "phoneNumber": "+385-126-497-8969",
            "email": "spaul@Ooredoo.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/spaul"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/spaul"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/spaul"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/spaul"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/spaul"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7465 Little Mountain Road",
            "buildingName": null,
            "floor": 19,
            "roomApartmentCondoNumber": null,
            "city": "Razloge",
            "stateProvince": "Crni Lug",
            "locality": "Crni Lug",
            "country": "HR",
            "postalCode": "51317",
            "GeoSpatialInfo": {
                "latitude": "45.4828",
                "longitude": "14.7014"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-26 20:17:24",
        "quantityPurchased": 787,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190395",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Long",
            "lastName": "Odonnell",
            "phoneNumber": "+55-317-363-8797",
            "email": "lodonnel@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lodonnel"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7279 Green Bend Drive",
            "buildingName": "Building 36",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chorroch\u00f3",
            "stateProvince": "Bahia",
            "locality": "Bahia",
            "country": "BR",
            "postalCode": "48660-000",
            "GeoSpatialInfo": {
                "latitude": "-9.3055",
                "longitude": "-39.1565"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-05 20:17:24",
        "quantityPurchased": 434,
        "extendedPrice": 1514.66
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190396",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jerrod",
            "lastName": "Anthony",
            "phoneNumber": "+375-167-007-9070",
            "email": "janthony@KDDI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/janthony"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/janthony"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/janthony"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/janthony"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2122 Little Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0413\u043e\u0440\u0435\u043b\u0435\u0446",
            "stateProvince": "Poukhovitchi",
            "locality": "Poukhovitchi",
            "country": "BY",
            "postalCode": "222826",
            "GeoSpatialInfo": {
                "latitude": "53.4279",
                "longitude": "27.9306"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-13 20:17:24",
        "quantityPurchased": 777,
        "extendedPrice": 458.42999999999995
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190397",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nevada",
            "lastName": "Wright",
            "phoneNumber": "+687-364-752-9652",
            "email": "nwright@Sprint.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/nwright"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nwright"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3654 Big Gully Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Houa\u00eflou",
            "stateProvince": "Houa\u00eflou",
            "locality": "Houa\u00eflou",
            "country": "NC",
            "postalCode": "98816",
            "GeoSpatialInfo": {
                "latitude": "-21.2865",
                "longitude": "165.6343"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-03 20:17:25",
        "quantityPurchased": 719,
        "extendedPrice": 2868.81
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190398",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Libby",
            "lastName": "Greer",
            "phoneNumber": "+352-158-815-3306",
            "email": "lgreer@Airtel.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lgreer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4798 Green Stream Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Oberanven",
            "stateProvince": "LU",
            "locality": "Niederanven",
            "country": "LU",
            "postalCode": "L-6976",
            "GeoSpatialInfo": {
                "latitude": "49.6571",
                "longitude": "6.2425"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-31 20:17:25",
        "quantityPurchased": 505,
        "extendedPrice": 2519.9500000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190399",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ellan",
            "lastName": "Sullivan",
            "phoneNumber": "+506-355-176-1383",
            "email": "esulliva@Chunghwa.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/esulliva"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/esulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "248 Short Bough Way",
            "buildingName": null,
            "floor": 14,
            "roomApartmentCondoNumber": null,
            "city": "San Pablo",
            "stateProvince": "San Pablo",
            "locality": "San Pablo",
            "country": "CR",
            "postalCode": "40901",
            "GeoSpatialInfo": {
                "latitude": "9.9994",
                "longitude": "-84.0905"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-29 20:17:25",
        "quantityPurchased": 866,
        "extendedPrice": 4321.34
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190400",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jesica",
            "lastName": "Cole",
            "phoneNumber": "+44-375-144-8210",
            "email": "jcole@Tata.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4474 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Great Comberton",
            "stateProvince": "England",
            "locality": "Worcestershire",
            "country": "GB",
            "postalCode": "WR10",
            "GeoSpatialInfo": {
                "latitude": "52.0781",
                "longitude": "-2.0669"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-03-04 20:17:25",
        "quantityPurchased": 849,
        "extendedPrice": 2963.01
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190401",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gail",
            "lastName": "Ibarra",
            "phoneNumber": "+213-359-425-2178",
            "email": "gibarra@Belgacom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/gibarra"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/gibarra"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/gibarra"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/gibarra"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8548 Long Mound Avenue",
            "buildingName": null,
            "floor": 11,
            "roomApartmentCondoNumber": "0C",
            "city": "El Khalfi",
            "stateProvince": "Adrar",
            "locality": "Adrar",
            "country": "DZ",
            "postalCode": "01007",
            "GeoSpatialInfo": {
                "latitude": "27.0718",
                "longitude": "-0.1158"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-19 20:17:25",
        "quantityPurchased": 515,
        "extendedPrice": 1797.3500000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190402",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bernarda",
            "lastName": "Faulkner",
            "phoneNumber": "+376-241-474-4995",
            "email": "bfaulkne@GlasNET.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bfaulkne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8270 Winding Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Escaldes-Engordany",
            "stateProvince": null,
            "locality": null,
            "country": "AD",
            "postalCode": "AD700",
            "GeoSpatialInfo": {
                "latitude": "42.5",
                "longitude": "1.5667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOUB231",
            "category": "chocolate",
            "title": "Double Chocolate Truffel",
            "description": "Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-13 20:17:25",
        "quantityPurchased": 921,
        "extendedPrice": 3214.2900000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190403",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Luanna",
            "lastName": "Marsh",
            "phoneNumber": "+375-148-966-1018",
            "email": "lmarsh@CCI.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lmarsh"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1468 Blue Tree Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u041f\u043e\u0434\u043e\u043b\u044c\u0446\u044b",
            "stateProvince": "Ostrovets",
            "locality": "Ostrovets",
            "country": "BY",
            "postalCode": "231232",
            "GeoSpatialInfo": {
                "latitude": "54.7904",
                "longitude": "26.002"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-02-23 20:17:25",
        "quantityPurchased": 369,
        "extendedPrice": 1103.3100000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190404",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jarod",
            "lastName": "Soto",
            "phoneNumber": "+506-330-269-5940",
            "email": "jsoto@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jsoto"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jsoto"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jsoto"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jsoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8396 Short Mound Boulevard",
            "buildingName": "Building EA",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Matama",
            "stateProvince": "Matama",
            "locality": "Lim\u00f3n",
            "country": "CR",
            "postalCode": "70104",
            "GeoSpatialInfo": {
                "latitude": "9.869",
                "longitude": "-83.1211"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BLAC207",
            "category": "chocolate",
            "title": "Black And Tan Truffel",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla. Vestibulum a sem volutpat, pellentesque eros et, placerat justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-30 20:17:25",
        "quantityPurchased": 878,
        "extendedPrice": 3064.2200000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190405",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lisa",
            "lastName": "Montgomery",
            "phoneNumber": "+92-122-046-3207",
            "email": "lmontgom@Vivendi.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/lmontgom"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lmontgom"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lmontgom"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/lmontgom"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4727 Long Ditch Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Baghtail",
            "stateProvince": "Balochisan",
            "locality": "Balochisan",
            "country": "PK",
            "postalCode": "80301",
            "GeoSpatialInfo": {
                "latitude": "28.1833",
                "longitude": "68.0667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-29 20:17:25",
        "quantityPurchased": 417,
        "extendedPrice": 3748.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190406",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilmer",
            "lastName": "Stevens",
            "phoneNumber": "+61-170-171-3339",
            "email": "wstevens@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5212 Little River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Glenelg Jetty Road",
            "stateProvince": "SA",
            "locality": "South Australia",
            "country": "AU",
            "postalCode": "5045",
            "GeoSpatialInfo": {
                "latitude": "-34.9833",
                "longitude": "138.5167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-04-11 20:17:25",
        "quantityPurchased": 634,
        "extendedPrice": 3163.6600000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190407",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Buster",
            "lastName": "Blair",
            "phoneNumber": "+262-173-425-7859",
            "email": "bblair@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/bblair"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/bblair"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bblair"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bblair"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/bblair"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5686 Short Gully Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dembeni",
            "stateProvince": "Dembeni",
            "locality": "Dembeni",
            "country": "YT",
            "postalCode": "97660",
            "GeoSpatialInfo": {
                "latitude": "-12.8436",
                "longitude": "45.1844"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-14 20:17:25",
        "quantityPurchased": 314,
        "extendedPrice": 1252.8600000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190408",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tim",
            "lastName": "Trejo",
            "phoneNumber": "+7-350-478-1162",
            "email": "ttrejo@GlasNET.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ttrejo"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3945 Short Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u0435\u0442\u0435\u043d\u0433\u043a\u0435\u0441",
            "stateProvince": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0412\u0415\u0420\u0425\u041e\u042f\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "678505",
            "GeoSpatialInfo": {
                "latitude": "67.63",
                "longitude": "135.55"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-07 20:17:25",
        "quantityPurchased": 28,
        "extendedPrice": 16.52
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190409",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ellan",
            "lastName": "Sullivan",
            "phoneNumber": "+506-355-176-1383",
            "email": "esulliva@Chunghwa.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/esulliva"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/esulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "248 Short Bough Way",
            "buildingName": null,
            "floor": 14,
            "roomApartmentCondoNumber": null,
            "city": "San Pablo",
            "stateProvince": "San Pablo",
            "locality": "San Pablo",
            "country": "CR",
            "postalCode": "40901",
            "GeoSpatialInfo": {
                "latitude": "9.9994",
                "longitude": "-84.0905"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-03-30 20:17:25",
        "quantityPurchased": 404,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190410",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Morton",
            "lastName": "Huffman",
            "phoneNumber": "+299-151-542-5167",
            "email": "mhuffman@CUBENet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mhuffman"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mhuffman"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8983 Red Stream Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sl\u00e6depatruljen Sirius",
            "stateProvince": null,
            "locality": null,
            "country": "GL",
            "postalCode": "3992",
            "GeoSpatialInfo": {
                "latitude": "67.2561",
                "longitude": "-48.0617"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-15 20:17:25",
        "quantityPurchased": 252,
        "extendedPrice": 221.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190411",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dena",
            "lastName": "Wilkinson",
            "phoneNumber": "+421-369-281-5698",
            "email": "dwilkins@KDDI.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/dwilkins"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/dwilkins"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/dwilkins"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3835 Long River Way",
            "buildingName": "Building 51",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0160koruby",
            "stateProvince": "ZI",
            "locality": "Byt\u010da",
            "country": "SK",
            "postalCode": "013 54",
            "GeoSpatialInfo": {
                "latitude": "49.2875",
                "longitude": "18.5201"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-01 20:17:25",
        "quantityPurchased": 555,
        "extendedPrice": 2769.4500000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190412",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sadye",
            "lastName": "Orozco",
            "phoneNumber": "+352-123-577-7122",
            "email": "sorozco@GlasNET.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "544 Little Bend Street",
            "buildingName": "Building 1B",
            "floor": null,
            "roomApartmentCondoNumber": "44",
            "city": "Howald",
            "stateProvince": "LU",
            "locality": "Hesperange",
            "country": "LU",
            "postalCode": "L-5821",
            "GeoSpatialInfo": {
                "latitude": "49.5827",
                "longitude": "6.1471"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-02 20:17:25",
        "quantityPurchased": 73,
        "extendedPrice": 43.07
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190413",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eldon",
            "lastName": "Casey",
            "phoneNumber": "+54-245-073-0201",
            "email": "ecasey@VimpelCom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ecasey"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6462 Big Bend Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "SAN NICOLAS ESTAFETA N\u00ba7",
            "stateProvince": "B",
            "locality": "Buenos Aires",
            "country": "AR",
            "postalCode": "2900",
            "GeoSpatialInfo": {
                "latitude": "-33.3303",
                "longitude": "-60.2269"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-13 20:17:25",
        "quantityPurchased": 908,
        "extendedPrice": 717.32
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190414",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rhonda",
            "lastName": "Costa",
            "phoneNumber": "+33-351-059-3885",
            "email": "rcosta@CUBENet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "2524 Little Tree Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tou\u00ebt-sur-Var",
            "stateProvince": "Arrondissement de Nice",
            "locality": "Alpes-Maritimes",
            "country": "FR",
            "postalCode": "06710",
            "GeoSpatialInfo": {
                "latitude": "43.9472",
                "longitude": "7.0055"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-14 20:17:25",
        "quantityPurchased": 645,
        "extendedPrice": 32243.550000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190415",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Franklyn",
            "lastName": "Vu",
            "phoneNumber": "+7-267-833-8708",
            "email": "fvu@Telefonica.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/fvu"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "958 Big Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "70",
            "city": "\u041f\u0435\u043d\u0438\u043d\u0433\u0430",
            "stateProvince": "\u041c\u0423\u0415\u0417\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u0423\u0415\u0417\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "186950",
            "GeoSpatialInfo": {
                "latitude": "63.5",
                "longitude": "32.0667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-13 20:17:25",
        "quantityPurchased": 339,
        "extendedPrice": 227.13000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190416",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Milo",
            "lastName": "Brown",
            "phoneNumber": "+45-321-222-7718",
            "email": "mbrown@ATT.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mbrown"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/mbrown"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mbrown"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4834 Little River Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "K\u00f8benhavn K",
            "stateProvince": "K\u00f8benhavns Kommune",
            "locality": "K\u00f8benhavns Kommune",
            "country": "DK",
            "postalCode": "1165",
            "GeoSpatialInfo": {
                "latitude": "55.6759",
                "longitude": "12.5655"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-27 20:17:25",
        "quantityPurchased": 78,
        "extendedPrice": 38.22
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190417",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jill",
            "lastName": "Henderson",
            "phoneNumber": "+1809-240-784-5981",
            "email": "jhenders@BT.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jhenders"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jhenders"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1083 Long Stream Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Cerros de Palmarejo",
            "stateProvince": null,
            "locality": null,
            "country": "DO",
            "postalCode": "10805",
            "GeoSpatialInfo": {
                "latitude": "18.7333",
                "longitude": "-71.1833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-09 20:17:25",
        "quantityPurchased": 232,
        "extendedPrice": 155.44
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190418",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Azucena",
            "lastName": "Fischer",
            "phoneNumber": "+351-352-676-7555",
            "email": "afischer@Turkcell.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/afischer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6673 Green Ditch Boulevard",
            "buildingName": null,
            "floor": 17,
            "roomApartmentCondoNumber": null,
            "city": "S\u00e3o Mamede de Infesta",
            "stateProvince": "S\u00e3o Mamede De Infesta",
            "locality": "Matosinhos",
            "country": "PT",
            "postalCode": "4465-114",
            "GeoSpatialInfo": {
                "latitude": "41.2004",
                "longitude": "-8.6025"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-14 20:17:25",
        "quantityPurchased": 24,
        "extendedPrice": 83.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190419",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Morton",
            "lastName": "Huffman",
            "phoneNumber": "+299-151-542-5167",
            "email": "mhuffman@CUBENet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mhuffman"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mhuffman"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8983 Red Stream Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sl\u00e6depatruljen Sirius",
            "stateProvince": null,
            "locality": null,
            "country": "GL",
            "postalCode": "3992",
            "GeoSpatialInfo": {
                "latitude": "67.2561",
                "longitude": "-48.0617"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-05 20:17:25",
        "quantityPurchased": 20,
        "extendedPrice": 179.8
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190420",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Carletta",
            "lastName": "Dickson",
            "phoneNumber": "+31-299-154-7023",
            "email": "cdickson@Telecom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/cdickson"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "68 Big Mountain Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Staphorst",
            "stateProvince": "Staphorst",
            "locality": "Staphorst",
            "country": "NL",
            "postalCode": "7954",
            "GeoSpatialInfo": {
                "latitude": "52.6415",
                "longitude": "6.1609"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-09 20:17:25",
        "quantityPurchased": 669,
        "extendedPrice": 3338.31
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190421",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Long",
            "lastName": "Graves",
            "phoneNumber": "+370-208-392-3736",
            "email": "lgraves@TeleSystems.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/lgraves"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4512 Green Gulch Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Borei\u0161i\u0173 k.",
            "stateProvince": "Jonavos r. sav.",
            "locality": "Jonavos r. sav.",
            "country": "LT",
            "postalCode": "55052",
            "GeoSpatialInfo": {
                "latitude": "55.1833",
                "longitude": "24.4333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-15 20:17:25",
        "quantityPurchased": 645,
        "extendedPrice": 8378.55
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190422",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Quyen",
            "lastName": "Pierce",
            "phoneNumber": "+33-378-156-8911",
            "email": "qpierce@CCS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/qpierce"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5327 Green Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Colombes",
            "stateProvince": "Arrondissement de Nanterre",
            "locality": "Hauts-de-Seine",
            "country": "FR",
            "postalCode": "92713 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "48.9188",
                "longitude": "2.254"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-11-10 20:17:25",
        "quantityPurchased": 113,
        "extendedPrice": 1015.87
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190423",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mira",
            "lastName": "Esquivel",
            "phoneNumber": "+46-363-442-3705",
            "email": "mesquive@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mesquive"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1137 Short Creek Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bollebygd",
            "stateProvince": "O",
            "locality": "Bollebygd",
            "country": "SE",
            "postalCode": "517 82",
            "GeoSpatialInfo": {
                "latitude": "57.6687",
                "longitude": "12.5727"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-03 20:17:25",
        "quantityPurchased": 219,
        "extendedPrice": 1092.81
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190424",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tosha",
            "lastName": "Francis",
            "phoneNumber": "+1787-165-610-5983",
            "email": "tfrancis@NII.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tfrancis"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/tfrancis"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/tfrancis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/tfrancis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4138 Winding Gully Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ponce",
            "stateProvince": "Ponce",
            "locality": "Ponce",
            "country": "PR",
            "postalCode": "00717",
            "GeoSpatialInfo": {
                "latitude": "18.0111",
                "longitude": "-66.6141"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-05 20:17:25",
        "quantityPurchased": 167,
        "extendedPrice": 1334.33
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190425",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shenika",
            "lastName": "Cunningham",
            "phoneNumber": "+375-385-415-5912",
            "email": "scunning@Unicom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "3122 Long Ditch Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0421\u0430\u043c\u043e\u0445\u0432\u0430\u043b\u043e\u0432\u0438\u0447\u0438",
            "stateProvince": "Minsk",
            "locality": "Minsk",
            "country": "BY",
            "postalCode": "223013",
            "GeoSpatialInfo": {
                "latitude": "53.7396",
                "longitude": "27.5037"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-19 20:17:25",
        "quantityPurchased": 651,
        "extendedPrice": 5852.49
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190426",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nathanial",
            "lastName": "Stokes",
            "phoneNumber": "+7-118-712-6961",
            "email": "nstokes@NordNet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/nstokes"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/nstokes"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4065 Green Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0414\u0432\u043e\u0440\u0438\u0449\u0438",
            "stateProvince": "\u041c\u0410\u041b\u041e\u0412\u0418\u0428\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u041c\u0410\u041b\u041e\u0412\u0418\u0428\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "174282",
            "GeoSpatialInfo": {
                "latitude": "58.2",
                "longitude": "35.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-20 20:17:25",
        "quantityPurchased": 355,
        "extendedPrice": 2836.4500000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190427",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Edmundo",
            "lastName": "Thomas",
            "phoneNumber": "+377-341-962-9702",
            "email": "ethomas@Telefonica.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ethomas"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/ethomas"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/ethomas"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3012 Red Mound Boulevard",
            "buildingName": "Building 85",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Larvotto",
            "stateProvince": "Larvotto",
            "locality": "Monaco",
            "country": "MC",
            "postalCode": "98000",
            "GeoSpatialInfo": {
                "latitude": "43.7333",
                "longitude": "7.4333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-10 20:17:25",
        "quantityPurchased": 279,
        "extendedPrice": 136.71
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190428",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Harvey",
            "lastName": "Franklin",
            "phoneNumber": "+44-179-390-6723",
            "email": "hfrankli@Sprint.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/hfrankli"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/hfrankli"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5987 Winding Woods Way",
            "buildingName": "Building 16",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Stewarton",
            "stateProvince": "Scotland",
            "locality": "East Ayrshire",
            "country": "GB",
            "postalCode": "KA3",
            "GeoSpatialInfo": {
                "latitude": "55.6799",
                "longitude": "-4.5144"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-21 20:17:25",
        "quantityPurchased": 788,
        "extendedPrice": 10236.12
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190429",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bernarda",
            "lastName": "Faulkner",
            "phoneNumber": "+376-241-474-4995",
            "email": "bfaulkne@GlasNET.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bfaulkne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8270 Winding Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Escaldes-Engordany",
            "stateProvince": null,
            "locality": null,
            "country": "AD",
            "postalCode": "AD700",
            "GeoSpatialInfo": {
                "latitude": "42.5",
                "longitude": "1.5667"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC322",
            "category": "cookie",
            "title": "Chocolate Chip Cookie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "0.88"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-12-24 20:17:25",
        "quantityPurchased": 464,
        "extendedPrice": 408.32
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190430",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosalinda",
            "lastName": "Mccann",
            "phoneNumber": "+34-302-224-0812",
            "email": "rmccann@Telia.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/rmccann"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/rmccann"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8677 Long Creek Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bustablado (Cabezon De La Sal)",
            "stateProvince": "CB",
            "locality": "Cantabria",
            "country": "ES",
            "postalCode": "39507",
            "GeoSpatialInfo": {
                "latitude": "43.3082",
                "longitude": "-4.2357"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-07-10 20:17:25",
        "quantityPurchased": 613,
        "extendedPrice": 361.66999999999996
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190431",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Brande",
            "lastName": "Douglas",
            "phoneNumber": "+356-391-293-4286",
            "email": "bdouglas@WorldNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "6205 Long Stream Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mellie\u0127a",
            "stateProvince": "Il-Mellie\u0127a",
            "locality": "Il-Mellie\u0127a",
            "country": "MT",
            "postalCode": "MLH",
            "GeoSpatialInfo": {
                "latitude": "35.9583",
                "longitude": "14.3514"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-10-06 20:17:25",
        "quantityPurchased": 701,
        "extendedPrice": 2796.9900000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190432",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Pierre",
            "lastName": "Fry",
            "phoneNumber": "+359-185-345-2080",
            "email": "pfry@OpenWorld.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/pfry"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/pfry"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/pfry"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8854 Green Stream Circle",
            "buildingName": null,
            "floor": 6,
            "roomApartmentCondoNumber": null,
            "city": "\u0411\u043e\u0441\u043d\u0435\u043a \/ Bosnek",
            "stateProvince": "PER",
            "locality": "\u041f\u0435\u0440\u043d\u0438\u043a \/ Pernik",
            "country": "BG",
            "postalCode": "2345",
            "GeoSpatialInfo": {
                "latitude": "42.4833",
                "longitude": "23.1833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-24 20:17:25",
        "quantityPurchased": 155,
        "extendedPrice": 103.85000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190433",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jerrod",
            "lastName": "Anthony",
            "phoneNumber": "+375-167-007-9070",
            "email": "janthony@KDDI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/janthony"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/janthony"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/janthony"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/janthony"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2122 Little Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0413\u043e\u0440\u0435\u043b\u0435\u0446",
            "stateProvince": "Poukhovitchi",
            "locality": "Poukhovitchi",
            "country": "BY",
            "postalCode": "222826",
            "GeoSpatialInfo": {
                "latitude": "53.4279",
                "longitude": "27.9306"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-22 20:17:25",
        "quantityPurchased": 664,
        "extendedPrice": 1321.36
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190434",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Keri",
            "lastName": "Monroe",
            "phoneNumber": "+1671-301-158-6539",
            "email": "kmonroe@ICom.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9945 Short Bend Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Asan",
            "stateProvince": "Guam",
            "locality": "Guam",
            "country": "GU",
            "postalCode": "96922",
            "GeoSpatialInfo": {
                "latitude": "13.4443",
                "longitude": "144.7863"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-27 20:17:25",
        "quantityPurchased": 638,
        "extendedPrice": 2226.6200000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190435",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jesica",
            "lastName": "Cole",
            "phoneNumber": "+44-375-144-8210",
            "email": "jcole@Tata.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4474 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Great Comberton",
            "stateProvince": "England",
            "locality": "Worcestershire",
            "country": "GB",
            "postalCode": "WR10",
            "GeoSpatialInfo": {
                "latitude": "52.0781",
                "longitude": "-2.0669"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "VALE270",
            "category": "chocolate",
            "title": "Valentines Day Chocolate Pack",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "19.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-08-01 20:17:25",
        "quantityPurchased": 247,
        "extendedPrice": 4937.53
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190436",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Yuki",
            "lastName": "Summers",
            "phoneNumber": "+213-300-254-8469",
            "email": "ysummers@Etisalat.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ysummers"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ysummers"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6609 Red Woods Ride",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Ihamziouene",
            "stateProvince": "Tizi-Ouzou",
            "locality": "Tizi-Ouzou",
            "country": "DZ",
            "postalCode": "15010",
            "GeoSpatialInfo": {
                "latitude": "36.8617",
                "longitude": "4.365"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-07-03 20:17:25",
        "quantityPurchased": 308,
        "extendedPrice": 1228.92
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190437",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Margery",
            "lastName": "Meza",
            "phoneNumber": "+441624-203-945-7247",
            "email": "mmeza@KPN.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/mmeza"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/mmeza"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/mmeza"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5676 Big Stream Avenue",
            "buildingName": null,
            "floor": 20,
            "roomApartmentCondoNumber": "94",
            "city": "Ballajora",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM7",
            "GeoSpatialInfo": {
                "latitude": "54.3815",
                "longitude": "-4.4273"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-07-13 20:17:25",
        "quantityPurchased": 341,
        "extendedPrice": 2724.59
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190438",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Caitlyn",
            "lastName": "Jensen",
            "phoneNumber": "+35818-184-514-1246",
            "email": "cjensen@Orstom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/cjensen"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3154 Green Mound Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "D8",
            "city": "Mariehamn",
            "stateProvince": "Mariehamn",
            "locality": "Mariehamn",
            "country": "AX",
            "postalCode": "22101",
            "GeoSpatialInfo": {
                "latitude": "60.0628",
                "longitude": "19.9533"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-04 20:17:25",
        "quantityPurchased": 876,
        "extendedPrice": 3495.2400000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190439",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Morton",
            "lastName": "Huffman",
            "phoneNumber": "+299-151-542-5167",
            "email": "mhuffman@CUBENet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mhuffman"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/mhuffman"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8983 Red Stream Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sl\u00e6depatruljen Sirius",
            "stateProvince": null,
            "locality": null,
            "country": "GL",
            "postalCode": "3992",
            "GeoSpatialInfo": {
                "latitude": "67.2561",
                "longitude": "-48.0617"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-06-13 20:17:25",
        "quantityPurchased": 940,
        "extendedPrice": 46990.6
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190440",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Idella",
            "lastName": "Kim",
            "phoneNumber": "+63-280-908-9691",
            "email": "ikim@Tata.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ikim"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1222 Little Canyon Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pasig Ortigas CTR-PO Box# 2500 to 2599",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "1665",
            "GeoSpatialInfo": {
                "latitude": "14.5934",
                "longitude": "121.0281"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-04-21 20:17:25",
        "quantityPurchased": 788,
        "extendedPrice": 5114.12
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190441",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Audria",
            "lastName": "Esquivel",
            "phoneNumber": "+441534-357-791-1401",
            "email": "aesquive@VimpelCom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/aesquive"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/aesquive"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6023 Winding Mound Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Brelades",
            "stateProvince": "Jersey Channel Islands",
            "locality": "Jersey Channel Islands",
            "country": "JE",
            "postalCode": "JE3",
            "GeoSpatialInfo": {
                "latitude": "49.2",
                "longitude": "-2.1333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-15 20:17:25",
        "quantityPurchased": 350,
        "extendedPrice": 1221.5
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190442",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gale",
            "lastName": "Roman",
            "phoneNumber": "+7-307-757-5154",
            "email": "groman@AIS.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/groman"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/groman"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8600 Short Woods Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0426\u0430\u043f\u043a\u043e\u0432\u043e",
            "stateProvince": "\u0420\u041e\u0421\u0421\u041e\u0428\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0420\u041e\u0421\u0421\u041e\u0428\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "396646",
            "GeoSpatialInfo": {
                "latitude": "50.7042",
                "longitude": "40.5381"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-13 20:17:25",
        "quantityPurchased": 665,
        "extendedPrice": 2320.8500000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190443",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Dionne",
            "lastName": "Brady",
            "phoneNumber": "+386-181-760-8538",
            "email": "dbrady@SingTel.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9231 Blue Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sorica",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "4229",
            "GeoSpatialInfo": {
                "latitude": "46.2167",
                "longitude": "14.0333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-04 20:17:25",
        "quantityPurchased": 225,
        "extendedPrice": 897.75
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190444",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeffrey",
            "lastName": "Harrell",
            "phoneNumber": "+41-137-955-8730",
            "email": "jharrell@TeleSystems.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jharrell"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2096 Red Hill Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "27",
            "city": "Basel",
            "stateProvince": "BL",
            "locality": "Bezirk Arlesheim",
            "country": "CH",
            "postalCode": "4040",
            "GeoSpatialInfo": {
                "latitude": "47.5186",
                "longitude": "7.6174"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-26 20:17:25",
        "quantityPurchased": 747,
        "extendedPrice": 3727.53
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190445",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Louella",
            "lastName": "Hunt",
            "phoneNumber": "+60-149-941-1956",
            "email": "lhunt@MegaFon.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lhunt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7479 Blue Hill Boulevard",
            "buildingName": "Building D1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Bemban",
            "stateProvince": "MLK",
            "locality": "Melaka",
            "country": "MY",
            "postalCode": "77200",
            "GeoSpatialInfo": {
                "latitude": "2.2582",
                "longitude": "102.3555"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-28 20:17:25",
        "quantityPurchased": 271,
        "extendedPrice": 2436.29
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190446",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jarod",
            "lastName": "Soto",
            "phoneNumber": "+506-330-269-5940",
            "email": "jsoto@Telecom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jsoto"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jsoto"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jsoto"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jsoto"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8396 Short Mound Boulevard",
            "buildingName": "Building EA",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Matama",
            "stateProvince": "Matama",
            "locality": "Lim\u00f3n",
            "country": "CR",
            "postalCode": "70104",
            "GeoSpatialInfo": {
                "latitude": "9.869",
                "longitude": "-83.1211"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-16 20:17:25",
        "quantityPurchased": 46,
        "extendedPrice": 183.54000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190447",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Leon",
            "lastName": "Molina",
            "phoneNumber": "+66-214-798-2054",
            "email": "lmolina@Orange.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "443 Blue Woods Avenue",
            "buildingName": "Building E1",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sai Mun",
            "stateProvince": "Yasothon",
            "locality": "Yasothon",
            "country": "TH",
            "postalCode": "35170",
            "GeoSpatialInfo": {
                "latitude": "15.95",
                "longitude": "104.2167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-22 20:17:25",
        "quantityPurchased": 192,
        "extendedPrice": 94.08
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190448",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ferdinand",
            "lastName": "Montgomery",
            "phoneNumber": "+7-160-267-4050",
            "email": "fmontgom@AlgoNet.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/fmontgom"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/fmontgom"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7972 Little Stream Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0420\u0430\u0434\u043e\u0432\u0438\u0446\u043a\u0438\u0439",
            "stateProvince": "\u0428\u0410\u0422\u0423\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "locality": "\u0428\u0410\u0422\u0423\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
            "country": "RU",
            "postalCode": "140753",
            "GeoSpatialInfo": {
                "latitude": "55.1292",
                "longitude": "39.7964"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-21 20:17:25",
        "quantityPurchased": 767,
        "extendedPrice": 2676.8300000000004
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190449",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gail",
            "lastName": "Ibarra",
            "phoneNumber": "+213-359-425-2178",
            "email": "gibarra@Belgacom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/gibarra"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/gibarra"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/gibarra"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/gibarra"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8548 Long Mound Avenue",
            "buildingName": null,
            "floor": 11,
            "roomApartmentCondoNumber": "0C",
            "city": "El Khalfi",
            "stateProvince": "Adrar",
            "locality": "Adrar",
            "country": "DZ",
            "postalCode": "01007",
            "GeoSpatialInfo": {
                "latitude": "27.0718",
                "longitude": "-0.1158"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-24 20:17:25",
        "quantityPurchased": 581,
        "extendedPrice": 4642.1900000000005
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190450",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jerrod",
            "lastName": "Anthony",
            "phoneNumber": "+375-167-007-9070",
            "email": "janthony@KDDI.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/janthony"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/janthony"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/janthony"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/janthony"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2122 Little Mound Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u0413\u043e\u0440\u0435\u043b\u0435\u0446",
            "stateProvince": "Poukhovitchi",
            "locality": "Poukhovitchi",
            "country": "BY",
            "postalCode": "222826",
            "GeoSpatialInfo": {
                "latitude": "53.4279",
                "longitude": "27.9306"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-14 20:17:25",
        "quantityPurchased": 989,
        "extendedPrice": 49440.11
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190451",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jude",
            "lastName": "Bond",
            "phoneNumber": "+64-294-589-3440",
            "email": "jbond@Telefonica.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jbond"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/jbond"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9054 Short Gully Boulevard",
            "buildingName": null,
            "floor": 17,
            "roomApartmentCondoNumber": null,
            "city": "Grafton",
            "stateProvince": "E7",
            "locality": "Auckland",
            "country": "NZ",
            "postalCode": "1145",
            "GeoSpatialInfo": {
                "latitude": "-36.8603",
                "longitude": "174.7657"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-15 20:17:25",
        "quantityPurchased": 749,
        "extendedPrice": 3737.51
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190452",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Rosena",
            "lastName": "Mckinney",
            "phoneNumber": "+370-169-834-8494",
            "email": "rmckinne@Rogers.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rmckinne"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/rmckinne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8689 Green Stream Street",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Mau\u0161\u0173 k.",
            "stateProvince": "Akmen\u0117s r. sav.",
            "locality": "Akmen\u0117s r. sav.",
            "country": "LT",
            "postalCode": "85001",
            "GeoSpatialInfo": {
                "latitude": "56.3167",
                "longitude": "22.9"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC219",
            "category": "chocolate",
            "title": "Chocolate Bunny",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "6.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-09 20:17:25",
        "quantityPurchased": 823,
        "extendedPrice": 5341.27
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190453",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Thomas",
            "lastName": "Sawyer",
            "phoneNumber": "+55-308-812-2221",
            "email": "tsawyer@KTC.com",
            "socialMedia": {
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tsawyer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "38 Green Creek Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ibiapina",
            "stateProvince": "Ceara",
            "locality": "Ceara",
            "country": "BR",
            "postalCode": "62360-000",
            "GeoSpatialInfo": {
                "latitude": "-3.9357",
                "longitude": "-40.9276"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-03-04 20:17:25",
        "quantityPurchased": 355,
        "extendedPrice": 1771.45
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190454",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Trevor",
            "lastName": "Villa",
            "phoneNumber": "+386-161-342-4653",
            "email": "tvilla@Turkcell.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/tvilla"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/tvilla"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/tvilla"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3669 Big Tree Street",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Polhov Gradec",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "1355",
            "GeoSpatialInfo": {
                "latitude": "46.0669",
                "longitude": "14.3161"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-12-26 20:17:25",
        "quantityPurchased": 157,
        "extendedPrice": 105.19000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190455",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Brande",
            "lastName": "Douglas",
            "phoneNumber": "+356-391-293-4286",
            "email": "bdouglas@WorldNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "6205 Long Stream Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mellie\u0127a",
            "stateProvince": "Il-Mellie\u0127a",
            "locality": "Il-Mellie\u0127a",
            "country": "MT",
            "postalCode": "MLH",
            "GeoSpatialInfo": {
                "latitude": "35.9583",
                "longitude": "14.3514"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-03 20:17:25",
        "quantityPurchased": 732,
        "extendedPrice": 431.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190456",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jarred",
            "lastName": "Maxwell",
            "phoneNumber": "+441481-356-555-4455",
            "email": "jmaxwell@Vivendi.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/jmaxwell"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9872 Green Gulch Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Sampsons",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY2",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-10 20:17:25",
        "quantityPurchased": 88,
        "extendedPrice": 439.12
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190457",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Vaughn",
            "lastName": "Doyle",
            "phoneNumber": "+687-398-694-5436",
            "email": "vdoyle@Telus.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/vdoyle"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/vdoyle"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/vdoyle"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9629 Blue Gulch Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Pon\u00e9rihouen",
            "stateProvince": "Pon\u00e9rihouen",
            "locality": "Pon\u00e9rihouen",
            "country": "NC",
            "postalCode": "98823",
            "GeoSpatialInfo": {
                "latitude": "-21.0765",
                "longitude": "165.4005"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-26 20:17:25",
        "quantityPurchased": 142,
        "extendedPrice": 708.58
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190458",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Linh",
            "lastName": "Trevino",
            "phoneNumber": "+32-365-763-3790",
            "email": "ltrevino@CUBENet.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ltrevino"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ltrevino"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2743 Red Bend Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Aywaille Louveign\u00e9",
            "stateProvince": "WAL",
            "locality": "Li\u00e8ge",
            "country": "BE",
            "postalCode": "4920",
            "GeoSpatialInfo": {
                "latitude": "50.4478",
                "longitude": "5.6793"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-03 20:17:25",
        "quantityPurchased": 30,
        "extendedPrice": 59.7
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190459",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Long",
            "lastName": "Odonnell",
            "phoneNumber": "+55-317-363-8797",
            "email": "lodonnel@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lodonnel"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7279 Green Bend Drive",
            "buildingName": "Building 36",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chorroch\u00f3",
            "stateProvince": "Bahia",
            "locality": "Bahia",
            "country": "BR",
            "postalCode": "48660-000",
            "GeoSpatialInfo": {
                "latitude": "-9.3055",
                "longitude": "-39.1565"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "RASP258",
            "category": "chocolate",
            "title": "Raspberry Truffel",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-06 20:17:25",
        "quantityPurchased": 982,
        "extendedPrice": 3427.1800000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190460",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Nathan",
            "lastName": "Bernal",
            "phoneNumber": "+94-157-009-8177",
            "email": "nbernal@TT.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/nbernal"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9411 Red Ridge Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Ramboda",
            "stateProvince": "Nuwara Eliya",
            "locality": "Nuwara Eliya",
            "country": "LK",
            "postalCode": "20590",
            "GeoSpatialInfo": {
                "latitude": "7.0457",
                "longitude": "80.6876"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "BIRT104",
            "category": "cake",
            "title": "Birthday Cake",
            "description": "Nam gravida libero ac malesuada cursus. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Aenean sit amet massa ac dolor interdum varius. Pellentesque vel risus placerat, consequat leo suscipit, dapibus nulla.",
            "price": "9.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-30 20:17:25",
        "quantityPurchased": 86,
        "extendedPrice": 859.14
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190461",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shasta",
            "lastName": "Hunter",
            "phoneNumber": "+33-228-243-6534",
            "email": "shunter@TelecomItalia.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/shunter"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/shunter"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9459 Big Mountain Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tarbes",
            "stateProvince": "Arrondissement de Tarbes",
            "locality": "Hautes-Pyr\u00e9n\u00e9es",
            "country": "FR",
            "postalCode": "65000",
            "GeoSpatialInfo": {
                "latitude": "43.2333",
                "longitude": "0.0833"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WEDD173",
            "category": "cake",
            "title": "Wedding Cake",
            "description": "Quisque et magna malesuada, fermentum nisl sed, imperdiet nunc. Maecenas interdum ex id venenatis luctus. Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci.",
            "price": "49.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-08-08 20:17:25",
        "quantityPurchased": 513,
        "extendedPrice": 25644.870000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190462",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jesica",
            "lastName": "Cole",
            "phoneNumber": "+44-375-144-8210",
            "email": "jcole@Tata.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "4474 Winding Woods Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "3A",
            "city": "Great Comberton",
            "stateProvince": "England",
            "locality": "Worcestershire",
            "country": "GB",
            "postalCode": "WR10",
            "GeoSpatialInfo": {
                "latitude": "52.0781",
                "longitude": "-2.0669"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-30 20:17:25",
        "quantityPurchased": 326,
        "extendedPrice": 218.42000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190463",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sona",
            "lastName": "Rios",
            "phoneNumber": "+55-204-481-4245",
            "email": "srios@NetCom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/srios"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/srios"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9308 Short Gully Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jaragu\u00e1 do Sul",
            "stateProvince": "Santa Catarina ",
            "locality": "Santa Catarina ",
            "country": "BR",
            "postalCode": "89250-000",
            "GeoSpatialInfo": {
                "latitude": "-26.4281",
                "longitude": "-49.1467"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-30 20:17:25",
        "quantityPurchased": 125,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190464",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ollie",
            "lastName": "Graves",
            "phoneNumber": "+48-205-239-0731",
            "email": "ograves@Relcom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/ograves"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6817 Short Bough Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jach\u00f3wka",
            "stateProvince": "Budz\u00f3w",
            "locality": "Powiat suski",
            "country": "PL",
            "postalCode": "34-211",
            "GeoSpatialInfo": {
                "latitude": "49.7589",
                "longitude": "19.699"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-05-13 20:17:25",
        "quantityPurchased": 811,
        "extendedPrice": 2424.8900000000003
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190465",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lenore",
            "lastName": "Rivera",
            "phoneNumber": "+46-247-465-0424",
            "email": "lrivera@Telstra.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/lrivera"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9877 Winding Woods Circle",
            "buildingName": "Building 6E",
            "floor": 15,
            "roomApartmentCondoNumber": null,
            "city": "Borl\u00e4nge",
            "stateProvince": "W",
            "locality": "Borl\u00e4nge",
            "country": "SE",
            "postalCode": "784 35",
            "GeoSpatialInfo": {
                "latitude": "60.4858",
                "longitude": "15.4371"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LOAF146",
            "category": "cake",
            "title": "Loaf Cake",
            "description": "Donec sed dui hendrerit nulla iaculis vestibulum. Morbi consectetur urna sit amet facilisis gravida. In a magna pretium, laoreet neque eget, consectetur justo.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-16 20:17:25",
        "quantityPurchased": 156,
        "extendedPrice": 622.44
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190466",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Andres",
            "lastName": "Blair",
            "phoneNumber": "+371-259-985-8925",
            "email": "ablair@Safaricom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ablair"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3701 Short Bend Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mazie P\u012bz\u0101ni",
            "stateProvince": "Feima\u0146u pag.",
            "locality": "Feima\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-4623",
            "GeoSpatialInfo": {
                "latitude": "56.2798",
                "longitude": "27.0626"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-10-12 20:17:25",
        "quantityPurchased": 773,
        "extendedPrice": 3857.27
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190467",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Estrella",
            "lastName": "Cunningham",
            "phoneNumber": "+351-134-708-7462",
            "email": "ecunning@MTN.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/ecunning"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/ecunning"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8411 Long River Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tondela",
            "stateProvince": "Tondela",
            "locality": "Tondela",
            "country": "PT",
            "postalCode": "3460-588",
            "GeoSpatialInfo": {
                "latitude": "40.5168",
                "longitude": "-8.0809"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-09-25 20:17:25",
        "quantityPurchased": 674,
        "extendedPrice": 2689.26
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190468",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Apryl",
            "lastName": "Mathis",
            "phoneNumber": "+66-197-073-2331",
            "email": "amathis@AlgoNet.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/amathis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/amathis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "2361 Big Creek Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Tham Punnara",
            "stateProvince": "Nakhon Sie Thammarat",
            "locality": "Nakhon Sie Thammarat",
            "country": "TH",
            "postalCode": "80260",
            "GeoSpatialInfo": {
                "latitude": "8.54",
                "longitude": "99.65"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PUMP555",
            "category": "pie",
            "title": "Pumpkin Pie",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-23 20:17:25",
        "quantityPurchased": 930,
        "extendedPrice": 4640.7
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190469",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Trinidad",
            "lastName": "Patrick",
            "phoneNumber": "+60-108-244-2499",
            "email": "tpatrick@Zain.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/tpatrick"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7194 Long Gulch Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Alor Setar",
            "stateProvince": "KDH",
            "locality": "Kedah",
            "country": "MY",
            "postalCode": "05644",
            "GeoSpatialInfo": {
                "latitude": "6.1194",
                "longitude": "100.3677"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-05 20:17:25",
        "quantityPurchased": 569,
        "extendedPrice": 381.23
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190470",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Pennie",
            "lastName": "Garrison",
            "phoneNumber": "+39-339-406-1467",
            "email": "pgarriso@Optus.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/pgarriso"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/pgarriso"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5933 Big Woods Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "1D",
            "city": "San Concordio Di Moriano",
            "stateProvince": "TC",
            "locality": "Lucca",
            "country": "IT",
            "postalCode": "55100",
            "GeoSpatialInfo": {
                "latitude": "43.8944",
                "longitude": "10.4979"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-04-06 20:17:25",
        "quantityPurchased": 949,
        "extendedPrice": 635.83
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190471",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Blair",
            "lastName": "Christian",
            "phoneNumber": "+63-215-692-7879",
            "email": "bchristi@Orstom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/bchristi"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bchristi"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/bchristi"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "4842 Little Tree Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Intramuros",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "1002",
            "GeoSpatialInfo": {
                "latitude": "14.2335",
                "longitude": "121.3623"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CAKE110",
            "category": "cake",
            "title": "Cake With Chocolate Frosting",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Praesent pretium justo at neque egestas mattis.",
            "price": "8.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-05-12 20:17:25",
        "quantityPurchased": 939,
        "extendedPrice": 8441.61
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190472",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ellan",
            "lastName": "Sullivan",
            "phoneNumber": "+506-355-176-1383",
            "email": "esulliva@Chunghwa.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/esulliva"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/esulliva"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "248 Short Bough Way",
            "buildingName": null,
            "floor": 14,
            "roomApartmentCondoNumber": null,
            "city": "San Pablo",
            "stateProvince": "San Pablo",
            "locality": "San Pablo",
            "country": "CR",
            "postalCode": "40901",
            "GeoSpatialInfo": {
                "latitude": "9.9994",
                "longitude": "-84.0905"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CARR113",
            "category": "cake",
            "title": "Carrot Cake",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam.",
            "price": "7.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-09-18 20:17:25",
        "quantityPurchased": 145,
        "extendedPrice": 1158.55
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190473",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Chad",
            "lastName": "Bryant",
            "phoneNumber": "+81-100-216-1524",
            "email": "cbryant@Telkom.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/cbryant"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/cbryant"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8877 Green Hill Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Shigacho",
            "stateProvince": "Misato Machi",
            "locality": "Toda Gun",
            "country": "JP",
            "postalCode": "987-0014",
            "GeoSpatialInfo": {
                "latitude": "38.5348",
                "longitude": "141.0346"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "GLOW437",
            "category": "donut",
            "title": "Glow In The Dark Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.79"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-06-10 20:17:25",
        "quantityPurchased": 989,
        "extendedPrice": 781.3100000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190474",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Neva",
            "lastName": "Sweeney",
            "phoneNumber": "+441624-183-573-7097",
            "email": "nsweeney@Relcom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/nsweeney"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9736 Short River Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Lingague",
            "stateProvince": "Isle of Man",
            "locality": "Isle of Man",
            "country": "IM",
            "postalCode": "IM9",
            "GeoSpatialInfo": {
                "latitude": "54.0951",
                "longitude": "-4.6929"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-01-31 20:17:25",
        "quantityPurchased": 531,
        "extendedPrice": 2649.69
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190475",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Bernita",
            "lastName": "Jarvis",
            "phoneNumber": "+590-262-394-3560",
            "email": "bjarvis@BCE.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/bjarvis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bjarvis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9975 Long Woods Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Jarry",
            "stateProvince": "GP",
            "locality": "Guadeloupe",
            "country": "GP",
            "postalCode": "97191 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "16.2359",
                "longitude": "-61.558"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-21 20:17:25",
        "quantityPurchased": 429,
        "extendedPrice": 1711.71
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190476",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Ressie",
            "lastName": "Holloway",
            "phoneNumber": "+598-312-047-4237",
            "email": "rhollowa@Softbank.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/rhollowa"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7936 Long Canyon Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Las Flores - Estacion",
            "stateProvince": "Maldonado",
            "locality": "Maldonado",
            "country": "UY",
            "postalCode": "20200",
            "GeoSpatialInfo": {
                "latitude": "-34.7984",
                "longitude": "-55.4908"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-07-01 20:17:25",
        "quantityPurchased": 742,
        "extendedPrice": 1476.58
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190477",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Stanton",
            "lastName": "Chan",
            "phoneNumber": "+687-140-946-3417",
            "email": "schan@Tata.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/schan"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/schan"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/schan"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1687 Winding Bough Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "W\u00e9",
            "stateProvince": "Lifou",
            "locality": "Lifou",
            "country": "NC",
            "postalCode": "98820",
            "GeoSpatialInfo": {
                "latitude": "-20.9169",
                "longitude": "167.2646"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-02-19 20:17:25",
        "quantityPurchased": 812,
        "extendedPrice": 4051.88
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190478",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Long",
            "lastName": "Odonnell",
            "phoneNumber": "+55-317-363-8797",
            "email": "lodonnel@cerist.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/lodonnel"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "7279 Green Bend Drive",
            "buildingName": "Building 36",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chorroch\u00f3",
            "stateProvince": "Bahia",
            "locality": "Bahia",
            "country": "BR",
            "postalCode": "48660-000",
            "GeoSpatialInfo": {
                "latitude": "-9.3055",
                "longitude": "-39.1565"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-09-04 20:17:25",
        "quantityPurchased": 525,
        "extendedPrice": 309.75
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190479",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Tanika",
            "lastName": "Lloyd",
            "phoneNumber": "+386-271-772-5051",
            "email": "tlloyd@Airtel.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "8854 Green Stream Circle",
            "buildingName": "Building EA",
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Raka",
            "stateProvince": null,
            "locality": null,
            "country": "SI",
            "postalCode": "8274",
            "GeoSpatialInfo": {
                "latitude": "45.9297",
                "longitude": "15.3842"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-03-27 20:17:25",
        "quantityPurchased": 370,
        "extendedPrice": 1291.3000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190480",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mitch",
            "lastName": "Durham",
            "phoneNumber": "+63-142-421-8126",
            "email": "mdurham@AlgoNet.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "2361 Little Bough Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Rosario",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "6416",
            "GeoSpatialInfo": {
                "latitude": "13.63",
                "longitude": "121.2197"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-12 20:17:25",
        "quantityPurchased": 184,
        "extendedPrice": 2390.16
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190481",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Prince",
            "lastName": "Frazier",
            "phoneNumber": "+353-285-885-9490",
            "email": "pfrazier@Movil.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "9086 Blue Woods Ride",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": null,
            "city": "Clones",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "H23",
            "GeoSpatialInfo": {
                "latitude": "54.1833",
                "longitude": "-7.2333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE143",
            "category": "cake",
            "title": "Layer Cake",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Vivamus pharetra sapien at sem ultrices semper. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Aenean sit amet massa ac dolor interdum varius. Praesent bibendum mi et augue lacinia auctor. Vivamus ac magna nec lacus varius pretium et vitae velit.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-06-17 20:17:25",
        "quantityPurchased": 267,
        "extendedPrice": 798.33
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190482",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Eldon",
            "lastName": "Casey",
            "phoneNumber": "+54-245-073-0201",
            "email": "ecasey@VimpelCom.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ecasey"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6462 Big Bend Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "SAN NICOLAS ESTAFETA N\u00ba7",
            "stateProvince": "B",
            "locality": "Buenos Aires",
            "country": "AR",
            "postalCode": "2900",
            "GeoSpatialInfo": {
                "latitude": "-33.3303",
                "longitude": "-60.2269"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "TORT167",
            "category": "cake",
            "title": "Torta Cake",
            "description": "Maecenas interdum ex id venenatis luctus. Nam gravida libero ac malesuada cursus.",
            "price": "12.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-25 20:17:25",
        "quantityPurchased": 796,
        "extendedPrice": 10340.04
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190483",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Yuki",
            "lastName": "Summers",
            "phoneNumber": "+213-300-254-8469",
            "email": "ysummers@Etisalat.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/ysummers"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ysummers"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6609 Red Woods Ride",
            "buildingName": null,
            "floor": 7,
            "roomApartmentCondoNumber": null,
            "city": "Ihamziouene",
            "stateProvince": "Tizi-Ouzou",
            "locality": "Tizi-Ouzou",
            "country": "DZ",
            "postalCode": "15010",
            "GeoSpatialInfo": {
                "latitude": "36.8617",
                "longitude": "4.365"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "STAR464",
            "category": "donut",
            "title": "Star And Sprinkles Donut",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.59"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-10-05 20:17:25",
        "quantityPurchased": 253,
        "extendedPrice": 149.26999999999998
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190484",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Else",
            "lastName": "Cordova",
            "phoneNumber": "+48-224-614-3862",
            "email": "ecordova@OTE.com",
            "socialMedia": {
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/ecordova"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8938 Winding Mountain Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Trze\u015b\u0144",
            "stateProvince": "Mielec",
            "locality": "Powiat mielecki",
            "country": "PL",
            "postalCode": "39-300",
            "GeoSpatialInfo": {
                "latitude": "50.3339",
                "longitude": "21.4996"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-05-31 20:17:25",
        "quantityPurchased": 293,
        "extendedPrice": 1169.0700000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190485",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Raleigh",
            "lastName": "Villarreal",
            "phoneNumber": "+506-264-360-4650",
            "email": "rvillarr@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/rvillarr"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "8897 Big Creek Boulevard",
            "buildingName": null,
            "floor": 1,
            "roomApartmentCondoNumber": "F3",
            "city": "Merced",
            "stateProvince": "Merced",
            "locality": "San Jos\u00e9",
            "country": "CR",
            "postalCode": "10102",
            "GeoSpatialInfo": {
                "latitude": "9.9397",
                "longitude": "-84.0884"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC228",
            "category": "chocolate",
            "title": "Chocolate Bar",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies.",
            "price": "2.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-11-17 20:17:25",
        "quantityPurchased": 310,
        "extendedPrice": 926.9000000000001
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190486",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Quyen",
            "lastName": "Pierce",
            "phoneNumber": "+33-378-156-8911",
            "email": "qpierce@CCS.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/qpierce"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "5327 Green Ditch Boulevard",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Colombes",
            "stateProvince": "Arrondissement de Nanterre",
            "locality": "Hauts-de-Seine",
            "country": "FR",
            "postalCode": "92713 CEDEX",
            "GeoSpatialInfo": {
                "latitude": "48.9188",
                "longitude": "2.254"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "PEAN252",
            "category": "chocolate",
            "title": "Peanut Truffle",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper. Vivamus semper justo sed dictum aliquam.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-14 20:17:25",
        "quantityPurchased": 68,
        "extendedPrice": 237.32000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190487",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Brendon",
            "lastName": "Gray",
            "phoneNumber": "+61-340-956-4913",
            "email": "bgray@SKTelecom.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/bgray"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1227 Winding Hill Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Mariginiup",
            "stateProvince": "WA",
            "locality": "Western Australia",
            "country": "AU",
            "postalCode": "6078",
            "GeoSpatialInfo": {
                "latitude": "-31.7111",
                "longitude": "115.8432"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-13 20:17:25",
        "quantityPurchased": 201,
        "extendedPrice": 134.67000000000002
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190488",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Lorna",
            "lastName": "Saunders",
            "phoneNumber": "+63-231-929-2356",
            "email": "lsaunder@Relcom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/lsaunder"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "1920 Winding Gully Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Moncada",
            "stateProvince": null,
            "locality": null,
            "country": "PH",
            "postalCode": "2334",
            "GeoSpatialInfo": {
                "latitude": "15.7367",
                "longitude": "120.5744"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-01-06 20:17:25",
        "quantityPurchased": 403,
        "extendedPrice": 2010.97
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190489",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Sherril",
            "lastName": "Dennis",
            "phoneNumber": "+353-368-136-8626",
            "email": "sdennis@cerist.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/sdennis"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/sdennis"
                },
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/sdennis"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6046 Green Bridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Dublin 8",
            "stateProvince": null,
            "locality": null,
            "country": "IE",
            "postalCode": "D08",
            "GeoSpatialInfo": {
                "latitude": "53.3346",
                "longitude": "-6.2733"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHER516",
            "category": "pie",
            "title": "Cherry Pie",
            "description": "Vivamus semper justo sed dictum aliquam. Maecenas eget lectus ultrices, porta eros a, blandit nisi. Phasellus vel velit eget nibh porttitor feugiat id ac massa.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-09-26 20:17:25",
        "quantityPurchased": 125,
        "extendedPrice": 623.75
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190490",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Abby",
            "lastName": "Lawrence",
            "phoneNumber": "+421-274-131-9898",
            "email": "alawrenc@Orstom.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/alawrenc"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/alawrenc"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9262 Little Hill Circle",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Chvojnica",
            "stateProvince": "TC",
            "locality": "Prievidza",
            "country": "SK",
            "postalCode": "972 13",
            "GeoSpatialInfo": {
                "latitude": "49.0355",
                "longitude": "18.8879"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": null
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-08-15 20:17:25",
        "quantityPurchased": 417,
        "extendedPrice": 0
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190491",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Wilmer",
            "lastName": "Stevens",
            "phoneNumber": "+61-170-171-3339",
            "email": "wstevens@KPN.com",
            "socialMedia": []
        },
        "Address": {
            "streetAddressOfBuilding": "5212 Little River Way",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Glenelg Jetty Road",
            "stateProvince": "SA",
            "locality": "South Australia",
            "country": "AU",
            "postalCode": "5045",
            "GeoSpatialInfo": {
                "latitude": "-34.9833",
                "longitude": "138.5167"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "SCHW361",
            "category": "cookie",
            "title": "Schweineoehrchen Cookie",
            "description": "Vivamus semper justo sed dictum aliquam. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Donec ac purus sed justo egestas ultricies. Mauris interdum elit nec dolor volutpat, sit amet sollicitudin eros facilisis.",
            "price": "0.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-02-12 20:17:25",
        "quantityPurchased": 452,
        "extendedPrice": 221.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190492",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Jeremy",
            "lastName": "Torres",
            "phoneNumber": "+421-223-042-7823",
            "email": "jtorres@TM.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/jtorres"
                },
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/jtorres"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/jtorres"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/jtorres"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "6453 Blue Ridge Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "A9",
            "city": "\u010caradice",
            "stateProvince": "NI",
            "locality": "Zlat\u00e9 Moravce",
            "country": "SK",
            "postalCode": "953 01",
            "GeoSpatialInfo": {
                "latitude": "48.3589",
                "longitude": "18.5088"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "APPL501",
            "category": "pie",
            "title": "Apple Pie",
            "description": "Praesent hendrerit tellus eget nibh lobortis, ut scelerisque mi mattis. Morbi consectetur urna sit amet facilisis gravida. Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus. In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus.",
            "price": "4.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-06-29 20:17:25",
        "quantityPurchased": 951,
        "extendedPrice": 4745.49
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190493",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Shaina",
            "lastName": "Riley",
            "phoneNumber": "+371-303-348-5606",
            "email": "sriley@Unicom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/sriley"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9017 Long Mound Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Nami\u0137i",
            "stateProvince": "Lutri\u0146u pag.",
            "locality": "Lutri\u0146u pag.",
            "country": "LV",
            "postalCode": "LV-3861",
            "GeoSpatialInfo": {
                "latitude": "56.7167",
                "longitude": "22.4"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-11-08 20:17:25",
        "quantityPurchased": 689,
        "extendedPrice": 1371.11
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190494",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Porfirio",
            "lastName": "Osborne",
            "phoneNumber": "+441534-374-588-0440",
            "email": "posborne@CenturyLink.com",
            "socialMedia": {
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/posborne"
                },
                "LN": {
                    "label": "line",
                    "url": "https:\/\/line.com\/posborne"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "176 Winding Mountain Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": "DC",
            "city": "St Lawrence",
            "stateProvince": "Jersey Channel Islands",
            "locality": "Jersey Channel Islands",
            "country": "JE",
            "postalCode": "JE3",
            "GeoSpatialInfo": {
                "latitude": "49.2",
                "longitude": "-2.1333"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "LAYE140",
            "category": "cake",
            "title": "Layer Cake Cherry Topping",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. Maecenas interdum ex id venenatis luctus.",
            "price": "3.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-12-15 20:17:25",
        "quantityPurchased": 424,
        "extendedPrice": 1691.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190495",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Kirby",
            "lastName": "Farmer",
            "phoneNumber": "+441481-243-517-0029",
            "email": "kfarmer@Telenor.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/kfarmer"
                },
                "FB": {
                    "label": "facebook",
                    "url": "https:\/\/facebook.com\/kfarmer"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "23 Red Mound Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "St Martin",
            "stateProvince": "Guernsey Channel Islands",
            "locality": "Guernsey Channel Islands",
            "country": "GG",
            "postalCode": "GY4",
            "GeoSpatialInfo": {
                "latitude": "49.45",
                "longitude": "-2.6"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "CHOC425",
            "category": "donut",
            "title": "Chocolate Covered Donut",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Nam gravida libero ac malesuada cursus. Vivamus pharetra sapien at sem ultrices semper.",
            "price": "0.67"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-07-14 20:17:25",
        "quantityPurchased": 28,
        "extendedPrice": 18.76
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190496",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "King",
            "lastName": "Levy",
            "phoneNumber": "+91-396-330-1273",
            "email": "klevy@SingTel.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/klevy"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9490 Little Bend Drive",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Kathalbagan",
            "stateProvince": "Sadar",
            "locality": "West Tripura",
            "country": "IN",
            "postalCode": "799006",
            "GeoSpatialInfo": {
                "latitude": "23.7271",
                "longitude": "91.3177"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2018-01-22 20:17:25",
        "quantityPurchased": 352,
        "extendedPrice": 2460.48
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190497",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Gregory",
            "lastName": "Rosas",
            "phoneNumber": "+687-361-002-5755",
            "email": "grosas@NTT.com",
            "socialMedia": {
                "SK": {
                    "label": "skype",
                    "url": "https:\/\/skype.com\/grosas"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "9813 Green Stream Avenue",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Sarram\u00e9a",
            "stateProvince": "Sarram\u00e9a",
            "locality": "Sarram\u00e9a",
            "country": "NC",
            "postalCode": "98880",
            "GeoSpatialInfo": {
                "latitude": "-21.6421",
                "longitude": "165.8451"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "DOZE434",
            "category": "donut",
            "title": "Dozen Donuts",
            "description": "Nam gravida libero ac malesuada cursus. Vivamus semper justo sed dictum aliquam. Praesent pretium justo at neque egestas mattis. Nullam quis tortor accumsan, sagittis sem in, porttitor orci. Phasellus vel velit eget nibh porttitor feugiat id ac massa. Donec ac purus sed justo egestas ultricies.",
            "price": "6.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2016-05-11 20:17:25",
        "quantityPurchased": 193,
        "extendedPrice": 1349.07
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190498",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Philip",
            "lastName": "Schmitt",
            "phoneNumber": "+262-313-755-2603",
            "email": "pschmitt@Softbank.com",
            "socialMedia": {
                "GO": {
                    "label": "google",
                    "url": "https:\/\/google.com\/pschmitt"
                },
                "LI": {
                    "label": "linkedin",
                    "url": "https:\/\/linkedin.com\/pschmitt"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "773 Winding Creek Road",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "Koungou",
            "stateProvince": "Koungou",
            "locality": "Koungou",
            "country": "YT",
            "postalCode": "97600",
            "GeoSpatialInfo": {
                "latitude": "-12.7336",
                "longitude": "45.2042"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "MUFF149",
            "category": "cake",
            "title": "Muffin",
            "description": "In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit. Maecenas eget lectus ultrices, porta eros a, blandit nisi.",
            "price": "1.99"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2019-04-10 20:17:25",
        "quantityPurchased": 328,
        "extendedPrice": 652.72
    }
});
db.purchases.insertOne(
{
    "transactionId": "201812190499",
    "CustomerInfo": {
        "PrimaryContactInfo": {
            "firstName": "Mary",
            "lastName": "Greene",
            "phoneNumber": "+35818-103-375-5689",
            "email": "mgreene@Telecom.com",
            "socialMedia": {
                "TW": {
                    "label": "twitter",
                    "url": "https:\/\/twitter.com\/mgreene"
                }
            }
        },
        "Address": {
            "streetAddressOfBuilding": "3438 Winding Bend Ride",
            "buildingName": null,
            "floor": null,
            "roomApartmentCondoNumber": null,
            "city": "\u00d6dkarby",
            "stateProvince": "Saltvik",
            "locality": "Saltvik",
            "country": "AX",
            "postalCode": "22320",
            "GeoSpatialInfo": {
                "latitude": "60.3162",
                "longitude": "20.0054"
            }
        }
    },
    "ProductInfo": {
        "MainProductInfo": {
            "skuNumber": "WHIT276",
            "category": "chocolate",
            "title": "White Chocolate Truffel",
            "description": "Cras sit amet eros congue, rhoncus sem sed, consequat arcu. In a magna pretium, laoreet neque eget, consectetur justo. Vivamus pharetra sapien at sem ultrices semper. Ut quis massa sit amet enim faucibus suscipit ac viverra elit.",
            "price": "3.49"
        }
    },
    "PurchaseInfo": {
        "dateOfPurchase": "2017-08-24 20:17:25",
        "quantityPurchased": 122,
        "extendedPrice": 425.78000000000003
    }
});
