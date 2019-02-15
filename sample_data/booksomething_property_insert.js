conn = new Mongo();
db = conn.getDB("booksomething");
db.property.drop();
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Thompson",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 4621
    },
    "PrimaryContactInfo": {
        "firstName": "Kathrin",
        "lastName": "Quinn",
        "phoneNumber": "+91-100-188-0570",
        "email": "kquinn@Zain.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kquinn"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "876 Red Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Adhyatmic Nagar",
        "stateProvince": "Ghaziabad",
        "locality": "Ghaziabad",
        "country": "IN",
        "postalCode": "201015",
        "GeoSpatialInfo": {
            "Latitude": "28.6921",
            "Longitude": "77.5562"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 820,
            "bedType": [
                "double",
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 24,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 3838
    },
    "PrimaryContactInfo": {
        "firstName": "Danyell",
        "lastName": "Davila",
        "phoneNumber": "+371-101-720-8626",
        "email": "ddavila@TelecomItalia.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ddavila"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9580 Red Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Neik\u0161\u0101ni",
        "stateProvince": "Svari\u0146u pag.",
        "locality": "Svari\u0146u pag.",
        "country": "LV",
        "postalCode": "LV-5698",
        "GeoSpatialInfo": {
            "Latitude": "56.1021",
            "Longitude": "27.7184"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 520,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 46,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 57,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Valley Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 1878
    },
    "PrimaryContactInfo": {
        "firstName": "Cordell",
        "lastName": "Pineda",
        "phoneNumber": "+91-102-064-5493",
        "email": "cpineda@KDDI.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cpineda"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cpineda"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cpineda"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1576 Little Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "30",
        "city": "Deuli Pukuria",
        "stateProvince": "Deuli",
        "locality": "North 24 Parganas",
        "country": "IN",
        "postalCode": "743439",
        "GeoSpatialInfo": {
            "Latitude": "23.4323",
            "Longitude": "88.373"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 214,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 373,
            "bedType": [
                "double",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 1973
    },
    "PrimaryContactInfo": {
        "firstName": "Keshia",
        "lastName": "Zavala",
        "phoneNumber": "+66-103-612-6545",
        "email": "kzavala@Ooredoo.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kzavala"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kzavala"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kzavala"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kzavala"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5596 Red Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tha Wang Pha",
        "stateProvince": "Nan",
        "locality": "Nan",
        "country": "TH",
        "postalCode": "55140",
        "GeoSpatialInfo": {
            "Latitude": "19.1",
            "Longitude": "100.8167"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 45,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "7 Days Inn",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 2397
    },
    "PrimaryContactInfo": {
        "firstName": "Philip",
        "lastName": "Austin",
        "phoneNumber": "+61-104-437-1533",
        "email": "paustin@ATT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/paustin"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5369 Short Mound Circle",
        "buildingName": "Building 31",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oldina",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7325",
        "GeoSpatialInfo": {
            "Latitude": "-41.0833",
            "Longitude": "145.6833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 594,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 389,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 551,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 812
    },
    "PrimaryContactInfo": {
        "firstName": "Jacques",
        "lastName": "Moss",
        "phoneNumber": "+299-105-149-9598",
        "email": "jmoss@Oi.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jmoss"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3704 Red Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kangilinnguit",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3930",
        "GeoSpatialInfo": {
            "Latitude": "61.23",
            "Longitude": "-48.09"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 486,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 956,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 704,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2013
    },
    "PrimaryContactInfo": {
        "firstName": "Jaime",
        "lastName": "Daniel",
        "phoneNumber": "+61-106-544-7293",
        "email": "jdaniel@Vodafone.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jdaniel"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jdaniel"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3845 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ilarwill",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2463",
        "GeoSpatialInfo": {
            "Latitude": "-29.4818",
            "Longitude": "153.1846"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 420,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 374,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Canadas Best Value Inns",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 1820
    },
    "PrimaryContactInfo": {
        "firstName": "Alexa",
        "lastName": "Stokes",
        "phoneNumber": "+385-107-547-0401",
        "email": "astokes@Telenor.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/astokes"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/astokes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9745 Green Hill Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u010ce\u010dava\u010dki Vu\u010djak",
        "stateProvince": "Orljavac",
        "locality": "Orljavac",
        "country": "HR",
        "postalCode": "34320",
        "GeoSpatialInfo": {
            "Latitude": "45.4502",
            "Longitude": "17.505"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 601,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 52,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Secluded Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4167
    },
    "PrimaryContactInfo": {
        "firstName": "Nery",
        "lastName": "Donaldson",
        "phoneNumber": "+91-108-509-4105",
        "email": "ndonalds@Oi.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ndonalds"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5343 Blue Woods Circle",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": "39",
        "city": "Goluwala",
        "stateProvince": "Hanumangarh",
        "locality": "Hanumangarh",
        "country": "IN",
        "postalCode": "335802",
        "GeoSpatialInfo": {
            "Latitude": "29.6297",
            "Longitude": "74.0534"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 237,
            "bedType": [
                "double",
                "double",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Settle Inn",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 1294
    },
    "PrimaryContactInfo": {
        "firstName": "Yulanda",
        "lastName": "Dawson",
        "phoneNumber": "+49-109-578-1969",
        "email": "ydawson@TM.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ydawson"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ydawson"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ydawson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1170 Green Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Weinolsheim",
        "stateProvince": "RP",
        "locality": "Landkreis Mainz-Bingen",
        "country": "DE",
        "postalCode": "55278",
        "GeoSpatialInfo": {
            "Latitude": "49.8158",
            "Longitude": "8.2728"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 506,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Motel 168",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 1786
    },
    "PrimaryContactInfo": {
        "firstName": "Carolyne",
        "lastName": "Benson",
        "phoneNumber": "+61-110-067-6376",
        "email": "cbenson@NII.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cbenson"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cbenson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9551 Short Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "South Coogee",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2034",
        "GeoSpatialInfo": {
            "Latitude": "-33.9205",
            "Longitude": "151.2552"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 986,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 952,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 4418
    },
    "PrimaryContactInfo": {
        "firstName": "Corey",
        "lastName": "Galindo",
        "phoneNumber": "+52-111-119-6531",
        "email": "cgalindo@OTE.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cgalindo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4050 Little Mound Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Loreto Portillo",
        "stateProvince": "SON",
        "locality": "Cajeme",
        "country": "MX",
        "postalCode": "85203",
        "GeoSpatialInfo": {
            "Latitude": "27.4945",
            "Longitude": "-109.9546"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 833,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 603,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "The Sebel",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 3722
    },
    "PrimaryContactInfo": {
        "firstName": "Apolonia",
        "lastName": "Sharp",
        "phoneNumber": "+91-112-127-6548",
        "email": "asharp@MTN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/asharp"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/asharp"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2013 Long Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Madanapuram",
        "stateProvince": "Gantyada",
        "locality": "Vizianagaram",
        "country": "IN",
        "postalCode": "535160",
        "GeoSpatialInfo": {
            "Latitude": "18.1593",
            "Longitude": "83.212"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 999,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 92,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Red Carpet Inn",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 1644
    },
    "PrimaryContactInfo": {
        "firstName": "Sammy",
        "lastName": "Stone",
        "phoneNumber": "+1441-113-098-2951",
        "email": "sstone@Belgacom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sstone"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3461 Winding Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St. George's",
        "stateProvince": "Saint George\u2019s Parish",
        "locality": "Saint George\u2019s Parish",
        "country": "BM",
        "postalCode": "GE 04",
        "GeoSpatialInfo": {
            "Latitude": "32.3726",
            "Longitude": "-64.6944"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 545,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 352,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quiet Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 501
    },
    "PrimaryContactInfo": {
        "firstName": "Dotty",
        "lastName": "Sierra",
        "phoneNumber": "+61-114-696-9574",
        "email": "dsierra@Optus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dsierra"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dsierra"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dsierra"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2103 Big Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "6C",
        "city": "Stockrington",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2322",
        "GeoSpatialInfo": {
            "Latitude": "-32.8072",
            "Longitude": "151.6739"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 511,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tommie",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 3699
    },
    "PrimaryContactInfo": {
        "firstName": "Sharie",
        "lastName": "Hayes",
        "phoneNumber": "+45-115-187-7062",
        "email": "shayes@CCS.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/shayes"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/shayes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8685 Green Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Frederiksberg C",
        "stateProvince": "Frederiksberg Kommune",
        "locality": "Frederiksberg Kommune",
        "country": "DK",
        "postalCode": "1867",
        "GeoSpatialInfo": {
            "Latitude": "55.6794",
            "Longitude": "12.5346"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 524,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 148,
            "bedType": [
                "single",
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel JAL",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 2805
    },
    "PrimaryContactInfo": {
        "firstName": "Isabella",
        "lastName": "Townsend",
        "phoneNumber": "+1-116-272-8927",
        "email": "itownsen@CUBENet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/itownsen"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/itownsen"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/itownsen"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "903 Short Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sainte-Th\u00e9r\u00e8se-de-Blainville Southwest",
        "stateProvince": "QC",
        "locality": "Sainte-Th\u00e9r\u00e8se-de-Blainville",
        "country": "CA",
        "postalCode": "J7H",
        "GeoSpatialInfo": {
            "Latitude": "45.6209",
            "Longitude": "-73.8728"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 386,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Peaceful Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 3588
    },
    "PrimaryContactInfo": {
        "firstName": "Ciera",
        "lastName": "Wiggins",
        "phoneNumber": "+47-117-556-8220",
        "email": "cwiggins@Safaricom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4223 Red Mound Drive",
        "buildingName": "Building 87",
        "floor": 9,
        "roomApartmentCondoNumber": null,
        "city": "Longyearbyen",
        "stateProvince": "Spitsbergen",
        "locality": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9171",
        "GeoSpatialInfo": {
            "Latitude": "78.2233",
            "Longitude": "15.6469"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 832,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 771,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 341,
            "bedType": [
                "queen",
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 818,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Ziva",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 1074
    },
    "PrimaryContactInfo": {
        "firstName": "Alfonzo",
        "lastName": "Foster",
        "phoneNumber": "+44-118-313-3650",
        "email": "afoster@Tata.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/afoster"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5579 Little Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Meinciau",
        "stateProvince": "Wales",
        "locality": "Carmarthenshire",
        "country": "GB",
        "postalCode": "SA17",
        "GeoSpatialInfo": {
            "Latitude": "51.7731",
            "Longitude": "-4.2317"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 874,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 581,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 966,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 1959
    },
    "PrimaryContactInfo": {
        "firstName": "Silas",
        "lastName": "Meadows",
        "phoneNumber": "+351-119-886-1103",
        "email": "smeadows@Telenor.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/smeadows"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "684 Big Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cochadas",
        "stateProvince": "Tocha",
        "locality": "Cantanhede",
        "country": "PT",
        "postalCode": "3060-659",
        "GeoSpatialInfo": {
            "Latitude": "40.3667",
            "Longitude": "-8.7333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 747,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 176,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 591,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 640,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Valley Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4098
    },
    "PrimaryContactInfo": {
        "firstName": "Maynard",
        "lastName": "Wise",
        "phoneNumber": "+44-120-219-0124",
        "email": "mwise@NordNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mwise"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6938 Little Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "2D",
        "city": "Flaxby",
        "stateProvince": "England",
        "locality": "North Yorkshire",
        "country": "GB",
        "postalCode": "HG5",
        "GeoSpatialInfo": {
            "Latitude": "54.0142",
            "Longitude": "-1.3957"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 150,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 904,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 360,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 3600
    },
    "PrimaryContactInfo": {
        "firstName": "Tony",
        "lastName": "Sellers",
        "phoneNumber": "+44-122-065-0359",
        "email": "tsellers@Rogers.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tsellers"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/tsellers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3178 Long Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Asselby",
        "stateProvince": "England",
        "locality": "East Riding of Yorkshire",
        "country": "GB",
        "postalCode": "DN14",
        "GeoSpatialInfo": {
            "Latitude": "53.7427",
            "Longitude": "-0.8849"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 748,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 3319
    },
    "PrimaryContactInfo": {
        "firstName": "Keenan",
        "lastName": "Oneill",
        "phoneNumber": "+31-123-899-6409",
        "email": "koneill@AlgoNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/koneill"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/koneill"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/koneill"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8959 Long Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Zenderen",
        "stateProvince": "Borne",
        "locality": "Borne",
        "country": "NL",
        "postalCode": "7625",
        "GeoSpatialInfo": {
            "Latitude": "52.3231",
            "Longitude": "6.7237"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 272,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 308,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 912,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Country Inns & Suites",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 3414
    },
    "PrimaryContactInfo": {
        "firstName": "Santo",
        "lastName": "Obrien",
        "phoneNumber": "+91-124-677-5245",
        "email": "sobrien@NTT.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1860 Big Tree Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Barkheda Sikandar",
        "stateProvince": "Rehli",
        "locality": "Sagar",
        "country": "IN",
        "postalCode": "470227",
        "GeoSpatialInfo": {
            "Latitude": "23.6738",
            "Longitude": "78.8586"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 824,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 571,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 630,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 766,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Days Inn",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 4067
    },
    "PrimaryContactInfo": {
        "firstName": "Vashti",
        "lastName": "Johns",
        "phoneNumber": "+33-125-321-4851",
        "email": "vjohns@Telefonica.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vjohns"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3810 Big Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Serviers-et-Labaume",
        "stateProvince": "Arrondissement de N\u00eemes",
        "locality": "Gard",
        "country": "FR",
        "postalCode": "30700",
        "GeoSpatialInfo": {
            "Latitude": "44.0353",
            "Longitude": "4.3552"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 157,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 38,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 925,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 280,
            "bedType": [
                "king",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 3011
    },
    "PrimaryContactInfo": {
        "firstName": "Darrell",
        "lastName": "Dillon",
        "phoneNumber": "+1-126-918-4522",
        "email": "ddillon@Jio.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ddillon"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ddillon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2668 Short Mountain Drive",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": "D9",
        "city": "Oshawa Southeast",
        "stateProvince": "ON",
        "locality": "Oshawa",
        "country": "CA",
        "postalCode": "L1H",
        "GeoSpatialInfo": {
            "Latitude": "43.9721",
            "Longitude": "-78.8837"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 743,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 104,
            "bedType": [
                "single",
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 835,
            "bedType": [
                "king",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Executive Residency",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 966
    },
    "PrimaryContactInfo": {
        "firstName": "Denver",
        "lastName": "Mccullough",
        "phoneNumber": "+33-127-944-7859",
        "email": "dmccullo@LookData.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dmccullo"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dmccullo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5809 Long Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tours",
        "stateProvince": "Arrondissement de Tours",
        "locality": "Indre-et-Loire",
        "country": "FR",
        "postalCode": "37010 CEDEX 1",
        "GeoSpatialInfo": {
            "Latitude": "47.3833",
            "Longitude": "0.6833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 315,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 848,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 962,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 3167
    },
    "PrimaryContactInfo": {
        "firstName": "Freeman",
        "lastName": "Park",
        "phoneNumber": "+1-128-108-5908",
        "email": "fpark@TM.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8852 Green Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Villeray Northeast",
        "stateProvince": "QC",
        "locality": "Villeray",
        "country": "CA",
        "postalCode": "H2E",
        "GeoSpatialInfo": {
            "Latitude": "45.5514",
            "Longitude": "-73.6116"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 817,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 3750
    },
    "PrimaryContactInfo": {
        "firstName": "Rocky",
        "lastName": "Donovan",
        "phoneNumber": "+594-129-027-3164",
        "email": "rdonovan@CCI.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rdonovan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2996 Short Bough Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Laurent-du-Maroni",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97393 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "5.501",
            "Longitude": "-54.0294"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 983,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 178,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 641,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Super 8",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 1423
    },
    "PrimaryContactInfo": {
        "firstName": "Tillie",
        "lastName": "Humphrey",
        "phoneNumber": "+61-130-454-7752",
        "email": "thumphre@ICom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/thumphre"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6866 Long Stream Avenue",
        "buildingName": "Building 6D",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ida Bay",
        "stateProvince": "TAS",
        "locality": "Tasmania",
        "country": "AU",
        "postalCode": "7109",
        "GeoSpatialInfo": {
            "Latitude": "-43.1269",
            "Longitude": "147.0275"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 831,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ginger",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2667
    },
    "PrimaryContactInfo": {
        "firstName": "Malik",
        "lastName": "Burch",
        "phoneNumber": "+1-131-472-2609",
        "email": "mburch@GlasNET.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mburch"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mburch"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mburch"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6599 Big Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Clermont",
        "stateProvince": "QC",
        "locality": "Capitale-Nationale",
        "country": "CA",
        "postalCode": "G4A",
        "GeoSpatialInfo": {
            "Latitude": "47.7184",
            "Longitude": "-70.2276"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 928,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 254,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 506,
            "bedType": [
                "queen",
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Sleepy Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 1522
    },
    "PrimaryContactInfo": {
        "firstName": "Santiago",
        "lastName": "Krueger",
        "phoneNumber": "+91-132-801-0832",
        "email": "skrueger@Airtel.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/skrueger"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/skrueger"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/skrueger"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5726 Short Bend Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "EA",
        "city": "Masjid Moth",
        "stateProvince": "New Delhi",
        "locality": "South Delhi",
        "country": "IN",
        "postalCode": "110048",
        "GeoSpatialInfo": {
            "Latitude": "28.5638",
            "Longitude": "77.2236"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 207,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 906,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 994,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Extended Stay Hotel",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 2810
    },
    "PrimaryContactInfo": {
        "firstName": "Kristen",
        "lastName": "Mcmahon",
        "phoneNumber": "+375-133-514-2991",
        "email": "kmcmahon@Ooredoo.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kmcmahon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6661 Winding Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041c\u0430\u043b\u044b\u0439 \u041c\u0430\u043b\u044b\u0448\u0435\u0432",
        "stateProvince": "Jitkovitchi",
        "locality": "Jitkovitchi",
        "country": "BY",
        "postalCode": "247987",
        "GeoSpatialInfo": {
            "Latitude": "52.1383",
            "Longitude": "27.7018"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 711,
            "bedType": [
                "double",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 186,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Glo",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3820
    },
    "PrimaryContactInfo": {
        "firstName": "Lee",
        "lastName": "Simpson",
        "phoneNumber": "+1-134-174-7101",
        "email": "lsimpson@Vivendi.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9735 Winding Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Twin Mountain",
        "stateProvince": "NH",
        "locality": "Coos",
        "country": "US",
        "postalCode": "03595",
        "GeoSpatialInfo": {
            "Latitude": "44.2689",
            "Longitude": "-71.5471"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 589,
            "bedType": [
                "queen",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 573,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 3875
    },
    "PrimaryContactInfo": {
        "firstName": "Shanna",
        "lastName": "Boyd",
        "phoneNumber": "+44-135-091-8149",
        "email": "sboyd@MTN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sboyd"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sboyd"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/sboyd"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sboyd"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8985 Red Canyon Street",
        "buildingName": null,
        "floor": 16,
        "roomApartmentCondoNumber": null,
        "city": "Llanfairynghornwy",
        "stateProvince": "Wales",
        "locality": "Isle of Anglesey",
        "country": "GB",
        "postalCode": "LL65",
        "GeoSpatialInfo": {
            "Latitude": "53.2787",
            "Longitude": "-4.5278"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 785,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 213,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jen Kerry Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2866
    },
    "PrimaryContactInfo": {
        "firstName": "Austin",
        "lastName": "Moore",
        "phoneNumber": "+1-136-979-4906",
        "email": "amoore@Telia.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/amoore"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/amoore"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "786 Green Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Abitibi-T\u00e9miscamingue-Ouest (Guigues)",
        "stateProvince": "QC",
        "locality": "Abitibi-T\u00e9miscamingue",
        "country": "CA",
        "postalCode": "J0Z",
        "GeoSpatialInfo": {
            "Latitude": "47.8626",
            "Longitude": "-78.824"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 152,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 365,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Louvre Hotels",
        "propertyType": "motel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 1190
    },
    "PrimaryContactInfo": {
        "firstName": "Vaughn",
        "lastName": "Pitts",
        "phoneNumber": "+1787-137-071-8883",
        "email": "vpitts@Tata.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vpitts"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/vpitts"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vpitts"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7796 Blue Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rio Grande",
        "stateProvince": "Rio Grande",
        "locality": "Rio Grande",
        "country": "PR",
        "postalCode": "00745",
        "GeoSpatialInfo": {
            "Latitude": "18.3802",
            "Longitude": "-65.8313"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 966,
            "bedType": [
                "king",
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 344,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 156,
            "bedType": [
                "king",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 3293
    },
    "PrimaryContactInfo": {
        "firstName": "Dinorah",
        "lastName": "Lozano",
        "phoneNumber": "+91-138-038-0381",
        "email": "dlozano@ICom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dlozano"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dlozano"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8158 Winding Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "DE",
        "city": "Ghasian",
        "stateProvince": "Patnagarh",
        "locality": "Balangir",
        "country": "IN",
        "postalCode": "767025",
        "GeoSpatialInfo": {
            "Latitude": "20.9387",
            "Longitude": "83.2178"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 870,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Thompson",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 1830
    },
    "PrimaryContactInfo": {
        "firstName": "Paris",
        "lastName": "Mercado",
        "phoneNumber": "+687-139-566-9053",
        "email": "pmercado@Vivendi.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9664 Long Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kon\u00e9",
        "stateProvince": "Kon\u00e9",
        "locality": "Kon\u00e9",
        "country": "NC",
        "postalCode": "98859",
        "GeoSpatialInfo": {
            "Latitude": "-21.0595",
            "Longitude": "164.8658"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 108,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 476,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 472,
            "bedType": [
                "king",
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 1466
    },
    "PrimaryContactInfo": {
        "firstName": "Melvin",
        "lastName": "Horne",
        "phoneNumber": "+61-140-701-9024",
        "email": "mhorne@Softbank.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mhorne"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6741 Winding Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Richmond Hill",
        "stateProvince": "QLD",
        "locality": "NORTH QLD",
        "country": "AU",
        "postalCode": "4820",
        "GeoSpatialInfo": {
            "Latitude": "-20.0041",
            "Longitude": "145.9004"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 905,
            "bedType": [
                "single",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 586,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 3046
    },
    "PrimaryContactInfo": {
        "firstName": "Cordie",
        "lastName": "Vega",
        "phoneNumber": "+354-141-413-3654",
        "email": "cvega@Verizon.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cvega"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1300 Green Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hafnarfir\u00f0i",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "221",
        "GeoSpatialInfo": {
            "Latitude": "64.0573",
            "Longitude": "-21.9474"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 770,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Red",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 2176
    },
    "PrimaryContactInfo": {
        "firstName": "Elvira",
        "lastName": "Strickland",
        "phoneNumber": "+91-142-591-8720",
        "email": "estrickl@TelecomItalia.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/estrickl"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "285 Winding Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ozarala",
        "stateProvince": "Thasra",
        "locality": "Kheda",
        "country": "IN",
        "postalCode": "388225",
        "GeoSpatialInfo": {
            "Latitude": "22.9465",
            "Longitude": "73.2224"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 417,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 221,
            "bedType": [
                "single",
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lexington Hotels & Inns",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 1819
    },
    "PrimaryContactInfo": {
        "firstName": "Quincy",
        "lastName": "Simon",
        "phoneNumber": "+262-143-582-2479",
        "email": "qsimon@Vivendi.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/qsimon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5604 Short Bridge Street",
        "buildingName": "Building DB",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dzaoudzi",
        "stateProvince": "Dzaoudzi",
        "locality": "Dzaoudzi",
        "country": "YT",
        "postalCode": "97615",
        "GeoSpatialInfo": {
            "Latitude": "-12.7783",
            "Longitude": "45.2837"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 939,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 516,
            "bedType": [
                "king",
                "double",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 3540
    },
    "PrimaryContactInfo": {
        "firstName": "Lorean",
        "lastName": "Gallegos",
        "phoneNumber": "+1-144-665-4184",
        "email": "lgallego@LGUplus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lgallego"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lgallego"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8788 Short Bridge Road",
        "buildingName": null,
        "floor": 20,
        "roomApartmentCondoNumber": "F6",
        "city": "Harrisburg",
        "stateProvince": "PA",
        "locality": "Dauphin",
        "country": "US",
        "postalCode": "17110",
        "GeoSpatialInfo": {
            "Latitude": "40.303",
            "Longitude": "-76.8862"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 970,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 923,
            "bedType": [
                "double",
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 907,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Raffles",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 1777
    },
    "PrimaryContactInfo": {
        "firstName": "Reyes",
        "lastName": "Jacobson",
        "phoneNumber": "+1441-145-797-9837",
        "email": "rjacobso@Belgacom.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rjacobso"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9154 Green Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Warwick",
        "stateProvince": "Warwick Parish",
        "locality": "Warwick Parish",
        "country": "BM",
        "postalCode": "WK 02",
        "GeoSpatialInfo": {
            "Latitude": "32.2658",
            "Longitude": "-64.8072"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 376,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Park Inn",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 4829
    },
    "PrimaryContactInfo": {
        "firstName": "Jeremiah",
        "lastName": "Jackson",
        "phoneNumber": "+1-146-405-4803",
        "email": "jjackson@Telenor.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jjackson"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jjackson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5426 Big Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Duvernay",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H7E",
        "GeoSpatialInfo": {
            "Latitude": "45.6225",
            "Longitude": "-73.6949"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 575,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 895,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 539
    },
    "PrimaryContactInfo": {
        "firstName": "Christeen",
        "lastName": "Grimes",
        "phoneNumber": "+376-147-227-7229",
        "email": "cgrimes@Softbank.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cgrimes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1849 Red Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Escaldes-Engordany",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD700",
        "GeoSpatialInfo": {
            "Latitude": "42.5",
            "Longitude": "1.5667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 738,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 205,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Howard Johnson",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2950
    },
    "PrimaryContactInfo": {
        "firstName": "Theo",
        "lastName": "Barrera",
        "phoneNumber": "+61-148-150-4571",
        "email": "tbarrera@Etisalat.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tbarrera"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3660 Big Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Marulan",
        "stateProvince": "NSW",
        "locality": "CAMPBELLTOWN",
        "country": "AU",
        "postalCode": "2579",
        "GeoSpatialInfo": {
            "Latitude": "-34.7084",
            "Longitude": "150.0097"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 577,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 520,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "SureStay Plus",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3832
    },
    "PrimaryContactInfo": {
        "firstName": "Cecil",
        "lastName": "Hines",
        "phoneNumber": "+420-149-872-4172",
        "email": "chines@KDDI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/chines"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/chines"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/chines"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6323 Big Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mn\u00ed\u0161ek pod Brdy",
        "stateProvince": "Praha-z\u00e1pad",
        "locality": "Praha-z\u00e1pad",
        "country": "CZ",
        "postalCode": "252 10",
        "GeoSpatialInfo": {
            "Latitude": "49.8667",
            "Longitude": "14.2667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 310,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 524,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mountain Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 3309
    },
    "PrimaryContactInfo": {
        "firstName": "Woodrow",
        "lastName": "Brooks",
        "phoneNumber": "+91-150-703-2697",
        "email": "wbrooks@KPN.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wbrooks"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wbrooks"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8527 Long Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "0C",
        "city": "Siatheri",
        "stateProvince": "Baheri",
        "locality": "Bareilly",
        "country": "IN",
        "postalCode": "243201",
        "GeoSpatialInfo": {
            "Latitude": "28.8152",
            "Longitude": "79.4224"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 561,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nanyuan",
        "propertyType": "motel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 1639
    },
    "PrimaryContactInfo": {
        "firstName": "Charleen",
        "lastName": "Stokes",
        "phoneNumber": "+441624-151-455-2179",
        "email": "cstokes@NordNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cstokes"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cstokes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7147 Red Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ronague",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM9",
        "GeoSpatialInfo": {
            "Latitude": "54.0951",
            "Longitude": "-4.6929"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 439,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 211,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Extended Stay Hotel",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 4666
    },
    "PrimaryContactInfo": {
        "firstName": "Keven",
        "lastName": "Morales",
        "phoneNumber": "+91-152-939-3108",
        "email": "kmorales@Safaricom.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kmorales"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9449 Green Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Anepur",
        "stateProvince": "Maripeda",
        "locality": "Warangal",
        "country": "IN",
        "postalCode": "506315",
        "GeoSpatialInfo": {
            "Latitude": "17.6824",
            "Longitude": "79.8574"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 680,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 3569
    },
    "PrimaryContactInfo": {
        "firstName": "Eldridge",
        "lastName": "Stafford",
        "phoneNumber": "+356-153-120-3558",
        "email": "estaffor@APICnet.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/estaffor"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "685 Green River Drive",
        "buildingName": null,
        "floor": 10,
        "roomApartmentCondoNumber": null,
        "city": "Mellie\u0127a",
        "stateProvince": "Il-Mellie\u0127a",
        "locality": "Il-Mellie\u0127a",
        "country": "MT",
        "postalCode": "MLH",
        "GeoSpatialInfo": {
            "Latitude": "35.9583",
            "Longitude": "14.3514"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 32,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 165,
            "bedType": [
                "king",
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 913,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Goldmet Inn",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 4907
    },
    "PrimaryContactInfo": {
        "firstName": "Spring",
        "lastName": "Brandt",
        "phoneNumber": "+91-154-123-6617",
        "email": "sbrandt@Vodafone.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sbrandt"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sbrandt"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6844 Big Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nagaram",
        "stateProvince": "Thungathurthy",
        "locality": "Nalgonda",
        "country": "IN",
        "postalCode": "508279",
        "GeoSpatialInfo": {
            "Latitude": "17.3943",
            "Longitude": "79.4878"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 27,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 242,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Park Plaza",
        "propertyType": "motel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 1252
    },
    "PrimaryContactInfo": {
        "firstName": "Ivy",
        "lastName": "Shepard",
        "phoneNumber": "+34-155-169-4119",
        "email": "ishepard@BCE.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ishepard"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ishepard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2851 Little Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Herramelluri",
        "stateProvince": "RI",
        "locality": "La Rioja",
        "country": "ES",
        "postalCode": "26213",
        "GeoSpatialInfo": {
            "Latitude": "42.503",
            "Longitude": "-3.0195"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 361,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 2687
    },
    "PrimaryContactInfo": {
        "firstName": "Berry",
        "lastName": "Munoz",
        "phoneNumber": "+1-156-089-6012",
        "email": "bmunoz@MTN.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bmunoz"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bmunoz"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2816 Red Woods Boulevard",
        "buildingName": "Building 4C",
        "floor": null,
        "roomApartmentCondoNumber": "74",
        "city": "Gila Bend",
        "stateProvince": "AZ",
        "locality": "Maricopa",
        "country": "US",
        "postalCode": "85337",
        "GeoSpatialInfo": {
            "Latitude": "32.9306",
            "Longitude": "-112.7468"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 947,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Kimpton Regent",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 2520
    },
    "PrimaryContactInfo": {
        "firstName": "Consuelo",
        "lastName": "King",
        "phoneNumber": "+1-157-495-5957",
        "email": "cking@Econnect.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cking"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cking"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "18 Green Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eldridge",
        "stateProvince": "MO",
        "locality": "Laclede",
        "country": "US",
        "postalCode": "65463",
        "GeoSpatialInfo": {
            "Latitude": "37.8346",
            "Longitude": "-92.7382"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 268,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 229,
            "bedType": [
                "king",
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Best Western Premier",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 1186
    },
    "PrimaryContactInfo": {
        "firstName": "Chung",
        "lastName": "Acevedo",
        "phoneNumber": "+91-158-069-7752",
        "email": "cacevedo@Vodafone.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cacevedo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3954 Blue Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chirpura",
        "stateProvince": "Gwalior",
        "locality": "Gwalior",
        "country": "IN",
        "postalCode": "475001",
        "GeoSpatialInfo": {
            "Latitude": "25.0936",
            "Longitude": "78.8057"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 571,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 692
    },
    "PrimaryContactInfo": {
        "firstName": "Daryl",
        "lastName": "Galvan",
        "phoneNumber": "+91-159-509-8093",
        "email": "dgalvan@Etisalat.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dgalvan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1286 Short River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Zakoora",
        "stateProvince": "Srinagar",
        "locality": "Srinagar",
        "country": "IN",
        "postalCode": "190024",
        "GeoSpatialInfo": {
            "Latitude": "34.1286",
            "Longitude": "74.8108"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 888,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 431,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 461,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Regency",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 556
    },
    "PrimaryContactInfo": {
        "firstName": "Geri",
        "lastName": "Moyer",
        "phoneNumber": "+91-160-256-0830",
        "email": "gmoyer@TT.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/gmoyer"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gmoyer"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9192 Green Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mogilipalem",
        "stateProvince": "NA",
        "locality": "Karim Nagar",
        "country": "IN",
        "postalCode": "505474",
        "GeoSpatialInfo": {
            "Latitude": "18.4377",
            "Longitude": "79.3565"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 163,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 608,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 540,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Fairfield Inn",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 2398
    },
    "PrimaryContactInfo": {
        "firstName": "Jere",
        "lastName": "Whitney",
        "phoneNumber": "+441481-161-212-8717",
        "email": "jwhitney@Telenor.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jwhitney"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jwhitney"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1514 Red Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Delancey",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY2",
        "GeoSpatialInfo": {
            "Latitude": "49.45",
            "Longitude": "-2.6"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 320,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 579,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Peaceful Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4652
    },
    "PrimaryContactInfo": {
        "firstName": "Jacque",
        "lastName": "Schmidt",
        "phoneNumber": "+44-162-803-3001",
        "email": "jschmidt@Telia.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jschmidt"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jschmidt"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6283 Winding Gulch Circle",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": "0D",
        "city": "Dunswell",
        "stateProvince": "England",
        "locality": "East Riding of Yorkshire",
        "country": "GB",
        "postalCode": "HU6",
        "GeoSpatialInfo": {
            "Latitude": "53.8011",
            "Longitude": "-0.3714"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 226,
            "bedType": [
                "queen",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 4614
    },
    "PrimaryContactInfo": {
        "firstName": "Jaclyn",
        "lastName": "Acevedo",
        "phoneNumber": "+299-163-754-0185",
        "email": "jacevedo@KPN.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jacevedo"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jacevedo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4157 Long Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nuussuaq",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3905",
        "GeoSpatialInfo": {
            "Latitude": "74.1167",
            "Longitude": "-57.0667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 796,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 226,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "M\u00f6venpick",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 2924
    },
    "PrimaryContactInfo": {
        "firstName": "Reed",
        "lastName": "Burch",
        "phoneNumber": "+44-164-432-5432",
        "email": "rburch@Turkcell.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rburch"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "355 Winding Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sauchen",
        "stateProvince": "Scotland",
        "locality": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB51",
        "GeoSpatialInfo": {
            "Latitude": "57.2761",
            "Longitude": "-2.4489"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 133,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 575,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 408,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 804,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quorvus Collection",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 4819
    },
    "PrimaryContactInfo": {
        "firstName": "Reginia",
        "lastName": "Snyder",
        "phoneNumber": "+91-166-698-4117",
        "email": "rsnyder@TT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rsnyder"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1487 Green Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Karimganj Bazar",
        "stateProvince": "NA",
        "locality": "Karimganj",
        "country": "IN",
        "postalCode": "788711",
        "GeoSpatialInfo": {
            "Latitude": "24.8602",
            "Longitude": "92.3351"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 758,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 242,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Wingate",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2136
    },
    "PrimaryContactInfo": {
        "firstName": "Ricardo",
        "lastName": "Harding",
        "phoneNumber": "+66-167-828-9960",
        "email": "rharding@MegaFon.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rharding"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rharding"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8013 Green Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Muang Phichit",
        "stateProvince": "Phichit",
        "locality": "Phichit",
        "country": "TH",
        "postalCode": "66000",
        "GeoSpatialInfo": {
            "Latitude": "16.4333",
            "Longitude": "100.3667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 904,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 26,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mountain Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4317
    },
    "PrimaryContactInfo": {
        "firstName": "Hassan",
        "lastName": "Ochoa",
        "phoneNumber": "+1-168-393-1256",
        "email": "hochoa@Vivendi.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6413 Long Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "0E",
        "city": "FPO AA",
        "stateProvince": null,
        "locality": null,
        "country": "US",
        "postalCode": "96373",
        "GeoSpatialInfo": {
            "Latitude": "26.3835",
            "Longitude": "127.8414"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 569,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 684,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 872,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 1588
    },
    "PrimaryContactInfo": {
        "firstName": "Carl",
        "lastName": "Crane",
        "phoneNumber": "+1670-169-236-1246",
        "email": "ccrane@Tata.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ccrane"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "645 Winding Bough Street",
        "buildingName": "Building 10",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saipan",
        "stateProvince": "Saipan",
        "locality": "Saipan",
        "country": "MP",
        "postalCode": "96950",
        "GeoSpatialInfo": {
            "Latitude": "15.1685",
            "Longitude": "145.7408"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 514,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "InterContinental",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1796
    },
    "PrimaryContactInfo": {
        "firstName": "Darci",
        "lastName": "Pratt",
        "phoneNumber": "+44-170-629-6835",
        "email": "dpratt@GlasNET.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4007 Little Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Closworth",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "BA22",
        "GeoSpatialInfo": {
            "Latitude": "50.897",
            "Longitude": "-2.6462"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 611,
            "bedType": [
                "single",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 3442
    },
    "PrimaryContactInfo": {
        "firstName": "Erasmo",
        "lastName": "Terry",
        "phoneNumber": "+377-171-197-8507",
        "email": "eterry@Telekom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/eterry"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/eterry"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7469 Little Stream Street",
        "buildingName": null,
        "floor": 4,
        "roomApartmentCondoNumber": null,
        "city": "Commune de Monaco",
        "stateProvince": "Monaco",
        "locality": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "GeoSpatialInfo": {
            "Latitude": "43.7333",
            "Longitude": "7.4"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 862,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 895,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 676,
            "bedType": [
                "single",
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Suite Novotel",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 2550
    },
    "PrimaryContactInfo": {
        "firstName": "Tarra",
        "lastName": "Phan",
        "phoneNumber": "+44-172-421-7081",
        "email": "tphan@AIS.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8827 Blue Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fishpond Bottom",
        "stateProvince": "England",
        "locality": "Dorset",
        "country": "GB",
        "postalCode": "DT6",
        "GeoSpatialInfo": {
            "Latitude": "50.739",
            "Longitude": "-2.7756"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 892,
            "bedType": [
                "king",
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 836,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 621,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Dolce",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 653
    },
    "PrimaryContactInfo": {
        "firstName": "Cristopher",
        "lastName": "Oconnor",
        "phoneNumber": "+378-173-222-2138",
        "email": "coconnor@VimpelCom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/coconnor"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9307 Long Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rovereta",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47891",
        "GeoSpatialInfo": {
            "Latitude": "43.9818",
            "Longitude": "12.4953"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 495,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 268,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 625,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Awesome Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4644
    },
    "PrimaryContactInfo": {
        "firstName": "Luann",
        "lastName": "Alexander",
        "phoneNumber": "+61-174-203-1965",
        "email": "lalexand@Access.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lalexand"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lalexand"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lalexand"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lalexand"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5861 Blue Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "7A",
        "city": "Brunswick",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6224",
        "GeoSpatialInfo": {
            "Latitude": "-33.2324",
            "Longitude": "115.8628"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 887,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 926,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt House",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 2134
    },
    "PrimaryContactInfo": {
        "firstName": "Vonda",
        "lastName": "Obrien",
        "phoneNumber": "+35818-175-568-2680",
        "email": "vobrien@SEEDnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vobrien"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vobrien"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vobrien"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/vobrien"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5555 Red River Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mariehamn",
        "stateProvince": "Mariehamn",
        "locality": "Mariehamn",
        "country": "AX",
        "postalCode": "22101",
        "GeoSpatialInfo": {
            "Latitude": "60.0628",
            "Longitude": "19.9533"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 504,
            "bedType": [
                "queen",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 725,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ginger",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2558
    },
    "PrimaryContactInfo": {
        "firstName": "Jack",
        "lastName": "Cole",
        "phoneNumber": "+91-176-205-0447",
        "email": "jcole@Telstra.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7007 Little Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kinia",
        "stateProvince": "Baihar",
        "locality": "Balaghat",
        "country": "IN",
        "postalCode": "481051",
        "GeoSpatialInfo": {
            "Latitude": "21.9833",
            "Longitude": "80.628"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 326,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 790,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quiet Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 3325
    },
    "PrimaryContactInfo": {
        "firstName": "Lawrence",
        "lastName": "Jones",
        "phoneNumber": "+380-177-481-0782",
        "email": "ljones@ICom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ljones"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6521 Winding Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0412\u043e\u0440\u043e\u043d\u044c\u043a\u0456\u0432",
        "stateProvince": "Boryspilskyi",
        "locality": "Boryspilskyi",
        "country": "UA",
        "postalCode": "08352",
        "GeoSpatialInfo": {
            "Latitude": "50.5358",
            "Longitude": "31.6618"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 127,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 976,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Scottish Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 3677
    },
    "PrimaryContactInfo": {
        "firstName": "Jan",
        "lastName": "Bryan",
        "phoneNumber": "+1-178-858-3069",
        "email": "jbryan@LGUplus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jbryan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7156 Little Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sackville",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E4L",
        "GeoSpatialInfo": {
            "Latitude": "45.9188",
            "Longitude": "-64.3845"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 275,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 325,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson",
        "propertyType": "motel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 486
    },
    "PrimaryContactInfo": {
        "firstName": "Piper",
        "lastName": "Morrison",
        "phoneNumber": "+63-179-115-7462",
        "email": "pmorriso@Etisalat.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/pmorriso"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/pmorriso"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "461 Big Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cortez",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "8313",
        "GeoSpatialInfo": {
            "Latitude": "11.5369",
            "Longitude": "122.3983"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 873,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 630,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 579,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 311,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Valley Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3379
    },
    "PrimaryContactInfo": {
        "firstName": "Heidy",
        "lastName": "Oneal",
        "phoneNumber": "+61-180-684-2007",
        "email": "honeal@Optus.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/honeal"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/honeal"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/honeal"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "948 Big Mountain Circle",
        "buildingName": null,
        "floor": 5,
        "roomApartmentCondoNumber": "DC",
        "city": "Pacific Pines",
        "stateProvince": "QLD",
        "locality": "GOLD COAST",
        "country": "AU",
        "postalCode": "4211",
        "GeoSpatialInfo": {
            "Latitude": "-27.9399",
            "Longitude": "153.3144"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 338,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 733,
            "bedType": [
                "king",
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 418,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 2707
    },
    "PrimaryContactInfo": {
        "firstName": "Rheba",
        "lastName": "Hart",
        "phoneNumber": "+81-181-218-5206",
        "email": "rhart@Movil.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rhart"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4541 Little Stream Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Takae Nishi",
        "stateProvince": "Oita Shi",
        "locality": "Oita Shi",
        "country": "JP",
        "postalCode": "870-1117",
        "GeoSpatialInfo": {
            "Latitude": "32.8833",
            "Longitude": "131.3167"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 582,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 507,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 84,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Joie de Vivre",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 3953
    },
    "PrimaryContactInfo": {
        "firstName": "Ian",
        "lastName": "Walter",
        "phoneNumber": "+61-182-495-5986",
        "email": "iwalter@CCI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/iwalter"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/iwalter"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5632 Winding Ridge Way",
        "buildingName": "Building 7B",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mittagong",
        "stateProvince": "NSW",
        "locality": "CAMPBELLTOWN",
        "country": "AU",
        "postalCode": "2575",
        "GeoSpatialInfo": {
            "Latitude": "-34.45",
            "Longitude": "150.4457"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 693,
            "bedType": [
                "queen",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 117,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tommie",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 2218
    },
    "PrimaryContactInfo": {
        "firstName": "Hector",
        "lastName": "Alfaro",
        "phoneNumber": "+1-184-233-8099",
        "email": "halfaro@KDDI.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/halfaro"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9014 Long Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ware Shoals",
        "stateProvince": "SC",
        "locality": "Greenwood",
        "country": "US",
        "postalCode": "29692",
        "GeoSpatialInfo": {
            "Latitude": "34.4025",
            "Longitude": "-82.2678"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 360,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 238,
            "bedType": [
                "king",
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Marriott Golf",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 1581
    },
    "PrimaryContactInfo": {
        "firstName": "Hershel",
        "lastName": "Knapp",
        "phoneNumber": "+91-185-097-4012",
        "email": "hknapp@Movil.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/hknapp"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/hknapp"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "615 Little Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Balia",
        "stateProvince": "Kendrapara",
        "locality": "Kendrapara",
        "country": "IN",
        "postalCode": "754224",
        "GeoSpatialInfo": {
            "Latitude": "21.7842",
            "Longitude": "84.6626"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 101,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3023
    },
    "PrimaryContactInfo": {
        "firstName": "Felicitas",
        "lastName": "Peck",
        "phoneNumber": "+44-186-131-1316",
        "email": "fpeck@Relcom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/fpeck"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4673 Winding Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "EB",
        "city": "Liverpool",
        "stateProvince": "England",
        "locality": "Merseyside",
        "country": "GB",
        "postalCode": "L7",
        "GeoSpatialInfo": {
            "Latitude": "53.4106",
            "Longitude": "-2.9779"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 769,
            "bedType": [
                "king",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Zilara",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 405
    },
    "PrimaryContactInfo": {
        "firstName": "Janita",
        "lastName": "Arroyo",
        "phoneNumber": "+370-187-286-0478",
        "email": "jarroyo@Ooredoo.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jarroyo"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jarroyo"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jarroyo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4255 Big Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St\u016bpkalnio k.",
        "stateProvince": "Kelm\u0117s r. sav.",
        "locality": "Kelm\u0117s r. sav.",
        "country": "LT",
        "postalCode": "86026",
        "GeoSpatialInfo": {
            "Latitude": "55.6031",
            "Longitude": "22.6903"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 865,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 719,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Thompson",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 3883
    },
    "PrimaryContactInfo": {
        "firstName": "Claribel",
        "lastName": "Valencia",
        "phoneNumber": "+91-188-848-2534",
        "email": "cvalenci@PTCL.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cvalenci"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9254 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gudalur",
        "stateProvince": "Sankari",
        "locality": "Salem",
        "country": "IN",
        "postalCode": "637103",
        "GeoSpatialInfo": {
            "Latitude": "9.6783",
            "Longitude": "77.2495"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 800,
            "bedType": [
                "double",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 812,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 201,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Valley Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 624
    },
    "PrimaryContactInfo": {
        "firstName": "Chia",
        "lastName": "Brown",
        "phoneNumber": "+63-189-599-4110",
        "email": "cbrown@Telus.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cbrown"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cbrown"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cbrown"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4142 Winding Mountain Boulevard",
        "buildingName": null,
        "floor": 3,
        "roomApartmentCondoNumber": null,
        "city": "819: Not used",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "1812",
        "GeoSpatialInfo": {
            "Latitude": "14.6487",
            "Longitude": "121.1217"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 470,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 334,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 4811
    },
    "PrimaryContactInfo": {
        "firstName": "Jene",
        "lastName": "Farley",
        "phoneNumber": "+91-190-832-7513",
        "email": "jfarley@Optus.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "46 Little Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sholapuram",
        "stateProvince": "Tiruvidaimarudur",
        "locality": "Thanjavur",
        "country": "IN",
        "postalCode": "612503",
        "GeoSpatialInfo": {
            "Latitude": "11.0574",
            "Longitude": "79.4085"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 339,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "ExecuStay",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 1399
    },
    "PrimaryContactInfo": {
        "firstName": "Buford",
        "lastName": "Montes",
        "phoneNumber": "+389-191-691-7102",
        "email": "bmontes@Rogers.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bmontes"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bmontes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9299 Winding Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Caska",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1413",
        "GeoSpatialInfo": {
            "Latitude": "41.6506",
            "Longitude": "21.6622"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 78,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 784,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3803
    },
    "PrimaryContactInfo": {
        "firstName": "Bette",
        "lastName": "Farley",
        "phoneNumber": "+1-192-993-7771",
        "email": "bfarley@GreenNet.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bfarley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bfarley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9326 Winding Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "6E",
        "city": "Hastings",
        "stateProvince": "OK",
        "locality": "Jefferson",
        "country": "US",
        "postalCode": "73548",
        "GeoSpatialInfo": {
            "Latitude": "34.2251",
            "Longitude": "-98.1075"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 244,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 585,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 344,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Ziva",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 121
    },
    "PrimaryContactInfo": {
        "firstName": "Herb",
        "lastName": "Knapp",
        "phoneNumber": "+358-193-675-6215",
        "email": "hknapp@Orange.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/hknapp"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/hknapp"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/hknapp"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/hknapp"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6253 Green River Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Skaftung                      ",
        "stateProvince": "Kristinestad",
        "locality": "Syd\u00f6sterbotten",
        "country": "FI",
        "postalCode": "64480",
        "GeoSpatialInfo": {
            "Latitude": "62.1332",
            "Longitude": "21.3304"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 802,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Centric",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 2048
    },
    "PrimaryContactInfo": {
        "firstName": "Karl",
        "lastName": "Lang",
        "phoneNumber": "+61-194-442-2637",
        "email": "klang@Safaricom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/klang"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3379 Short Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gungahlin",
        "stateProvince": "ACT",
        "locality": "CANBERRA",
        "country": "AU",
        "postalCode": "2912",
        "GeoSpatialInfo": {
            "Latitude": "-35.1867",
            "Longitude": "149.1362"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 1000,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 657,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4671
    },
    "PrimaryContactInfo": {
        "firstName": "Julene",
        "lastName": "Haley",
        "phoneNumber": "+441481-195-602-1283",
        "email": "jhaley@LookData.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jhaley"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jhaley"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jhaley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8150 Short Creek Avenue",
        "buildingName": "Building 1E",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sark",
        "stateProvince": "Channel Islands",
        "locality": "Channel Islands",
        "country": "GG",
        "postalCode": "GY10",
        "GeoSpatialInfo": {
            "Latitude": "49.71",
            "Longitude": "-2.2"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 868,
            "bedType": [
                "single",
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 884,
            "bedType": [
                "double",
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Autograph Collection",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 2451
    },
    "PrimaryContactInfo": {
        "firstName": "Berta",
        "lastName": "Shepherd",
        "phoneNumber": "+91-196-586-0531",
        "email": "bshepher@SKTelecom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bshepher"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bshepher"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6763 Green Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Didwana",
        "stateProvince": "Didwana",
        "locality": "Nagaur",
        "country": "IN",
        "postalCode": "341303",
        "GeoSpatialInfo": {
            "Latitude": "27.401",
            "Longitude": "74.5754"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 306,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 429,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "W Westin",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3665
    },
    "PrimaryContactInfo": {
        "firstName": "Gregory",
        "lastName": "Griffin",
        "phoneNumber": "+81-197-879-7870",
        "email": "ggriffin@Vodafone.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ggriffin"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ggriffin"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7101 Winding Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nakaokoppe",
        "stateProvince": "Nishiokoppe Mura",
        "locality": "Mombetsu Gun",
        "country": "JP",
        "postalCode": "098-1503",
        "GeoSpatialInfo": {
            "Latitude": "44.3833",
            "Longitude": "142.9833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 851,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 779,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 634,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 1039
    },
    "PrimaryContactInfo": {
        "firstName": "Marianne",
        "lastName": "Leach",
        "phoneNumber": "+1-198-383-3946",
        "email": "mleach@Vivendi.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mleach"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9752 Winding Bend Street",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": "DF",
        "city": "Alma Southwest",
        "stateProvince": "QC",
        "locality": "Saguenay\/Lac-Saint-Jean",
        "country": "CA",
        "postalCode": "G8C",
        "GeoSpatialInfo": {
            "Latitude": "48.5278",
            "Longitude": "-71.6364"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 61,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 848,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 277,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 818,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Wingate",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 3789
    },
    "PrimaryContactInfo": {
        "firstName": "Li",
        "lastName": "Booth",
        "phoneNumber": "+590-199-490-0711",
        "email": "lbooth@Telstra.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lbooth"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lbooth"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "283 Red Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Basse-Terre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97106 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "15.9985",
            "Longitude": "-61.7255"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 862,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 392,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Downtowner Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 4363
    },
    "PrimaryContactInfo": {
        "firstName": "Amee",
        "lastName": "Oneal",
        "phoneNumber": "+91-200-067-8758",
        "email": "aoneal@KPN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/aoneal"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aoneal"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7563 Red Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dachhan",
        "stateProvince": "Doda",
        "locality": "Doda",
        "country": "IN",
        "postalCode": "182202",
        "GeoSpatialInfo": {
            "Latitude": "33.058",
            "Longitude": "75.6012"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 233,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4589
    },
    "PrimaryContactInfo": {
        "firstName": "Saturnina",
        "lastName": "Barron",
        "phoneNumber": "+262-201-787-2944",
        "email": "sbarron@Turkcell.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sbarron"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1418 Winding Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Pierre",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97851 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "-21.3393",
            "Longitude": "55.4781"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 417,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 519,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 630,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Homewood Suites",
        "propertyType": "hotel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 254
    },
    "PrimaryContactInfo": {
        "firstName": "Denver",
        "lastName": "Quintana",
        "phoneNumber": "+1-202-953-4631",
        "email": "dquintan@PTCL.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dquintan"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dquintan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "501 Red Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Vegreville",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T9C",
        "GeoSpatialInfo": {
            "Latitude": "53.5001",
            "Longitude": "-112.0518"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 121,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 926,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 736,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 2635
    },
    "PrimaryContactInfo": {
        "firstName": "Alverta",
        "lastName": "Colon",
        "phoneNumber": "+441624-203-659-0894",
        "email": "acolon@Millicom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/acolon"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/acolon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9875 Red Tree Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "The Cronk",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7",
        "GeoSpatialInfo": {
            "Latitude": "54.3815",
            "Longitude": "-4.4273"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 461,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 3342
    },
    "PrimaryContactInfo": {
        "firstName": "Conrad",
        "lastName": "Cook",
        "phoneNumber": "+61-204-503-7912",
        "email": "ccook@Safaricom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ccook"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ccook"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6367 Winding Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "B5",
        "city": "Green Hill",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4865",
        "GeoSpatialInfo": {
            "Latitude": "-17.1114",
            "Longitude": "145.754"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 264,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 415,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 513,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel Indigo",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 3343
    },
    "PrimaryContactInfo": {
        "firstName": "Nelly",
        "lastName": "Klein",
        "phoneNumber": "+1-206-745-8696",
        "email": "nklein@CUBENet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/nklein"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1454 Long Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Washington",
        "stateProvince": "DC",
        "locality": "District of Columbia",
        "country": "US",
        "postalCode": "20555",
        "GeoSpatialInfo": {
            "Latitude": "38.9",
            "Longitude": "-77.0401"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 64,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 428,
            "bedType": [
                "single",
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 154,
            "bedType": [
                "king",
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 896,
            "bedType": [
                "king",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 1962
    },
    "PrimaryContactInfo": {
        "firstName": "Greg",
        "lastName": "Ramsey",
        "phoneNumber": "+64-207-668-3773",
        "email": "gramsey@Bifty.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "455 Winding Stream Street",
        "buildingName": null,
        "floor": 5,
        "roomApartmentCondoNumber": null,
        "city": "Surfdale",
        "stateProvince": "E7",
        "locality": "Auckland",
        "country": "NZ",
        "postalCode": "1081",
        "GeoSpatialInfo": {
            "Latitude": "-36.7911",
            "Longitude": "175.0257"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 569,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "LXR Motto",
        "propertyType": "hotel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 1139
    },
    "PrimaryContactInfo": {
        "firstName": "Williams",
        "lastName": "Ochoa",
        "phoneNumber": "+44-208-621-2850",
        "email": "wochoa@AlgoNet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wochoa"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1635 Blue Gully Avenue",
        "buildingName": "Building 25",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ballysillan Upper",
        "stateProvince": "Northern Ireland",
        "locality": "Belfast Greater",
        "country": "GB",
        "postalCode": "BT14",
        "GeoSpatialInfo": {
            "Latitude": "54.5833",
            "Longitude": "-5.9333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 69,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Canadas Best Value Inns",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 3962
    },
    "PrimaryContactInfo": {
        "firstName": "Reba",
        "lastName": "Stone",
        "phoneNumber": "+441481-209-999-1108",
        "email": "rstone@Vodafone.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rstone"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rstone"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rstone"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8046 Big Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Sampsons",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY2",
        "GeoSpatialInfo": {
            "Latitude": "49.45",
            "Longitude": "-2.6"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 639,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 189,
            "bedType": [
                "king",
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4546
    },
    "PrimaryContactInfo": {
        "firstName": "Alex",
        "lastName": "Jenkins",
        "phoneNumber": "+44-210-017-5220",
        "email": "ajenkins@Relcom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ajenkins"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "404 Green Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "82",
        "city": "Kingston",
        "stateProvince": "Scotland",
        "locality": "Moray",
        "country": "GB",
        "postalCode": "IV32",
        "GeoSpatialInfo": {
            "Latitude": "57.6667",
            "Longitude": "-3.1"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 504,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 826,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 794,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 700
    },
    "PrimaryContactInfo": {
        "firstName": "Gabriele",
        "lastName": "Bates",
        "phoneNumber": "+63-211-690-4394",
        "email": "gbates@APICnet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3021 Short Bend Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nangka",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "1808",
        "GeoSpatialInfo": {
            "Latitude": "10.8556",
            "Longitude": "123.0419"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 839,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Glo",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3756
    },
    "PrimaryContactInfo": {
        "firstName": "Josef",
        "lastName": "Mcconnell",
        "phoneNumber": "+1-212-823-0820",
        "email": "jmcconne@Unicom.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jmcconne"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5089 Big Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Edmonton (Riverbend)",
        "stateProvince": "AB",
        "locality": "Edmonton",
        "country": "CA",
        "postalCode": "T6R",
        "GeoSpatialInfo": {
            "Latitude": "53.4567",
            "Longitude": "-113.5801"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 818,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 616,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 124,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Restful Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 2532
    },
    "PrimaryContactInfo": {
        "firstName": "Otilia",
        "lastName": "Parker",
        "phoneNumber": "+36-213-924-1874",
        "email": "oparker@KDDI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6565 Big Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "B\u00e1csbokod",
        "stateProvince": "BK",
        "locality": "B\u00e1cs-Kiskun",
        "country": "HU",
        "postalCode": "6453",
        "GeoSpatialInfo": {
            "Latitude": "46.1219",
            "Longitude": "19.1589"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 670,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 569,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tommie",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 329
    },
    "PrimaryContactInfo": {
        "firstName": "Chad",
        "lastName": "Durham",
        "phoneNumber": "+1-214-505-0448",
        "email": "cdurham@Telenor.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cdurham"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cdurham"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cdurham"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cdurham"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9955 Winding Bough Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Girdler",
        "stateProvince": "KY",
        "locality": "Knox",
        "country": "US",
        "postalCode": "40943",
        "GeoSpatialInfo": {
            "Latitude": "36.9691",
            "Longitude": "-83.8539"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 869,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 397,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 3548
    },
    "PrimaryContactInfo": {
        "firstName": "Sonia",
        "lastName": "Brown",
        "phoneNumber": "+441481-215-560-6879",
        "email": "sbrown@CUBENet.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/sbrown"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5206 Green Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Castel",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY5",
        "GeoSpatialInfo": {
            "Latitude": "49.45",
            "Longitude": "-2.6"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 275,
            "bedType": [
                "single",
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 173,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 1461
    },
    "PrimaryContactInfo": {
        "firstName": "Sammie",
        "lastName": "Mccall",
        "phoneNumber": "+44-216-526-1640",
        "email": "smccall@Sprint.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/smccall"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3403 Little Bend Boulevard",
        "buildingName": null,
        "floor": 4,
        "roomApartmentCondoNumber": "31",
        "city": "Norwick",
        "stateProvince": "Scotland",
        "locality": "Shetland Islands",
        "country": "GB",
        "postalCode": "ZE2",
        "GeoSpatialInfo": {
            "Latitude": "60.38",
            "Longitude": "-1.2787"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 648,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Metropolo Vienna",
        "propertyType": "motel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 2428
    },
    "PrimaryContactInfo": {
        "firstName": "Daphine",
        "lastName": "Sanchez",
        "phoneNumber": "+441624-217-977-2737",
        "email": "dsanchez@Bifty.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dsanchez"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9213 Winding Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Foxdale",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM4",
        "GeoSpatialInfo": {
            "Latitude": "54.1929",
            "Longitude": "-4.4832"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 689,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 936,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "SureStay Collection",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3546
    },
    "PrimaryContactInfo": {
        "firstName": "Cherly",
        "lastName": "Chase",
        "phoneNumber": "+1-218-567-6828",
        "email": "cchase@CenturyLink.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cchase"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6164 Winding Gully Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "North Vancouver South Central",
        "stateProvince": "BC",
        "locality": "Vancouver",
        "country": "CA",
        "postalCode": "V7L",
        "GeoSpatialInfo": {
            "Latitude": "49.316",
            "Longitude": "-123.0576"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 557,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 318,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 272,
            "bedType": [
                "double",
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 3604
    },
    "PrimaryContactInfo": {
        "firstName": "Brigitte",
        "lastName": "Barber",
        "phoneNumber": "+32-219-143-2743",
        "email": "bbarber@SEEDnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bbarber"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bbarber"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bbarber"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bbarber"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bbarber"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8607 Blue Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hamoir",
        "stateProvince": "WAL",
        "locality": "Li\u00e8ge",
        "country": "BE",
        "postalCode": "4180",
        "GeoSpatialInfo": {
            "Latitude": "50.4333",
            "Longitude": "5.5333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 81,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "F1",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 3314
    },
    "PrimaryContactInfo": {
        "firstName": "Chet",
        "lastName": "Cain",
        "phoneNumber": "+91-220-546-5147",
        "email": "ccain@MegaFon.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ccain"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ccain"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5931 Red Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Garh-Monoharpur",
        "stateProvince": "Garh-monoharpur",
        "locality": "West Midnapore",
        "country": "IN",
        "postalCode": "721451",
        "GeoSpatialInfo": {
            "Latitude": "22.3836",
            "Longitude": "87.8747"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 34,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 227,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 970,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Zilara",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 3680
    },
    "PrimaryContactInfo": {
        "firstName": "Jacinto",
        "lastName": "Schroeder",
        "phoneNumber": "+1340-221-505-1218",
        "email": "jschroed@KTC.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2108 Blue Bend Way",
        "buildingName": "Building B9",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Thomas",
        "stateProvince": "St. Thomas",
        "locality": "St. Thomas",
        "country": "VI",
        "postalCode": "00802",
        "GeoSpatialInfo": {
            "Latitude": "18.3387",
            "Longitude": "-64.916"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 54,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 553,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 636,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 4573
    },
    "PrimaryContactInfo": {
        "firstName": "Winter",
        "lastName": "Parsons",
        "phoneNumber": "+61-222-357-5115",
        "email": "wparsons@Telus.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wparsons"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8059 Winding Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "51",
        "city": "Fitzgerald River National Park",
        "stateProvince": "WA",
        "locality": "Western Australia",
        "country": "AU",
        "postalCode": "6346",
        "GeoSpatialInfo": {
            "Latitude": "-34.0016",
            "Longitude": "119.598"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 790,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2292
    },
    "PrimaryContactInfo": {
        "firstName": "Britney",
        "lastName": "Tapia",
        "phoneNumber": "+359-223-776-1755",
        "email": "btapia@Swisscom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/btapia"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/btapia"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2810 Long Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041f\u043e\u043b\u043a\u043e\u0432\u043d\u0438\u043a \u0414\u044f\u043a\u043e\u0432\u043e \/ Polkovnik Djakovo",
        "stateProvince": "DOB",
        "locality": "\u041a\u0440\u0443\u0448\u0430\u0440\u0438 \/ Krushari",
        "country": "BG",
        "postalCode": "9401",
        "GeoSpatialInfo": {
            "Latitude": "43.85",
            "Longitude": "27.7833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 652,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 984,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Blu",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 33
    },
    "PrimaryContactInfo": {
        "firstName": "Alexia",
        "lastName": "Sellers",
        "phoneNumber": "+1-224-817-2137",
        "email": "asellers@CCS.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/asellers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1456 Green Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Inverness",
        "stateProvince": "FL",
        "locality": "Citrus",
        "country": "US",
        "postalCode": "34451",
        "GeoSpatialInfo": {
            "Latitude": "28.8358",
            "Longitude": "-82.3304"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 707,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 475,
            "bedType": [
                "king",
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 232,
            "bedType": [
                "king",
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Take a Break Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 2729
    },
    "PrimaryContactInfo": {
        "firstName": "Lavette",
        "lastName": "Hart",
        "phoneNumber": "+1671-225-407-1127",
        "email": "lhart@Chunghwa.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lhart"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9702 Big Stream Circle",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Asan",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96922",
        "GeoSpatialInfo": {
            "Latitude": "13.4443",
            "Longitude": "144.7863"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 291,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 20,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "BW Premier Collection",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 2113
    },
    "PrimaryContactInfo": {
        "firstName": "Cynthia",
        "lastName": "Mccarthy",
        "phoneNumber": "+1-226-446-0632",
        "email": "cmccarth@Chunghwa.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cmccarth"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cmccarth"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cmccarth"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4963 Big Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kelowna East Central",
        "stateProvince": "BC",
        "locality": "Kelowna",
        "country": "CA",
        "postalCode": "V1X",
        "GeoSpatialInfo": {
            "Latitude": "50.0528",
            "Longitude": "-119.2858"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 247,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 153,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 267,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 886,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 1936
    },
    "PrimaryContactInfo": {
        "firstName": "Mirella",
        "lastName": "Simmons",
        "phoneNumber": "+1809-227-812-3413",
        "email": "msimmons@Telia.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/msimmons"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6102 Blue River Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cancino II",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11512",
        "GeoSpatialInfo": {
            "Latitude": "18.5",
            "Longitude": "-69.8333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 54,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Getaway Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 4190
    },
    "PrimaryContactInfo": {
        "firstName": "Odilia",
        "lastName": "Andrade",
        "phoneNumber": "+61-228-747-6572",
        "email": "oandrade@Telecom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/oandrade"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/oandrade"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7755 Blue Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "70",
        "city": "Launceston",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7250",
        "GeoSpatialInfo": {
            "Latitude": "-41.4388",
            "Longitude": "147.1347"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 919,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Andaz Grand Hyatt",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 734
    },
    "PrimaryContactInfo": {
        "firstName": "Robt",
        "lastName": "Magana",
        "phoneNumber": "+299-229-381-1179",
        "email": "rmagana@SEEDnet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rmagana"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rmagana"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9589 Green Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tasiilaq",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3913",
        "GeoSpatialInfo": {
            "Latitude": "65.6",
            "Longitude": "-37.6333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 791,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Four Points",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3417
    },
    "PrimaryContactInfo": {
        "firstName": "Catheryn",
        "lastName": "Shaffer",
        "phoneNumber": "+1-230-421-9953",
        "email": "cshaffer@Unicom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7805 Long Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Blauvelt",
        "stateProvince": "NY",
        "locality": "Rockland",
        "country": "US",
        "postalCode": "10913",
        "GeoSpatialInfo": {
            "Latitude": "41.0626",
            "Longitude": "-73.9629"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 222,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 214,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 2824
    },
    "PrimaryContactInfo": {
        "firstName": "Buck",
        "lastName": "Houston",
        "phoneNumber": "+31-231-672-7549",
        "email": "bhouston@Orstom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bhouston"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bhouston"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2463 Little Stream Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Papendrecht",
        "stateProvince": "Papendrecht",
        "locality": "Papendrecht",
        "country": "NL",
        "postalCode": "3351",
        "GeoSpatialInfo": {
            "Latitude": "51.8312",
            "Longitude": "4.6809"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 222,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 798,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2767
    },
    "PrimaryContactInfo": {
        "firstName": "Ingeborg",
        "lastName": "Landry",
        "phoneNumber": "+1-232-965-7916",
        "email": "ilandry@Safaricom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ilandry"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "386 Winding Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Maria Stein",
        "stateProvince": "OH",
        "locality": "Mercer",
        "country": "US",
        "postalCode": "45860",
        "GeoSpatialInfo": {
            "Latitude": "40.4062",
            "Longitude": "-84.5076"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 479,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 247,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 2526
    },
    "PrimaryContactInfo": {
        "firstName": "Sabine",
        "lastName": "Rice",
        "phoneNumber": "+91-234-435-6521",
        "email": "srice@Verizon.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1655 Short Bough Way",
        "buildingName": "Building CE",
        "floor": 18,
        "roomApartmentCondoNumber": "C1",
        "city": "Chhindwara",
        "stateProvince": "Chhindwara",
        "locality": "Chhindwara",
        "country": "IN",
        "postalCode": "480001",
        "GeoSpatialInfo": {
            "Latitude": "22.057",
            "Longitude": "78.9396"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 924,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 582,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Marriott Golf",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 243
    },
    "PrimaryContactInfo": {
        "firstName": "Trudi",
        "lastName": "Franco",
        "phoneNumber": "+63-235-962-4239",
        "email": "tfranco@Telekom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tfranco"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6295 Short Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Santa Mesa P.O. Box",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "1035",
        "GeoSpatialInfo": {
            "Latitude": "14.0494",
            "Longitude": "121.5101"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 849,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 912,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 1914
    },
    "PrimaryContactInfo": {
        "firstName": "Rolf",
        "lastName": "Schmidt",
        "phoneNumber": "+1-236-998-7713",
        "email": "rschmidt@EUnet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9138 Blue Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Loretteville North",
        "stateProvince": "QC",
        "locality": "Loretteville",
        "country": "CA",
        "postalCode": "G2A",
        "GeoSpatialInfo": {
            "Latitude": "46.8751",
            "Longitude": "-71.392"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 337,
            "bedType": [
                "king",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 980,
            "bedType": [
                "double",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 3201
    },
    "PrimaryContactInfo": {
        "firstName": "Carter",
        "lastName": "Jackson",
        "phoneNumber": "+681-237-189-7893",
        "email": "cjackson@PLDT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cjackson"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cjackson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cjackson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6522 Blue Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620",
        "GeoSpatialInfo": {
            "Latitude": "-14.2667",
            "Longitude": "-178.1667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 271,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travelodge",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 1146
    },
    "PrimaryContactInfo": {
        "firstName": "Darell",
        "lastName": "Roach",
        "phoneNumber": "+1-238-739-8190",
        "email": "droach@Telstra.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/droach"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/droach"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/droach"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/droach"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4698 Blue Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Prince Rupert",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V8J",
        "GeoSpatialInfo": {
            "Latitude": "54.3161",
            "Longitude": "-130.3201"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 888,
            "bedType": [
                "queen",
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 4727
    },
    "PrimaryContactInfo": {
        "firstName": "Britt",
        "lastName": "Ho",
        "phoneNumber": "+880-239-357-3679",
        "email": "bho@TM.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bho"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5851 Short Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shuvgachha",
        "stateProvince": "Kazipur",
        "locality": "Sirajganj",
        "country": "BD",
        "postalCode": "6711",
        "GeoSpatialInfo": {
            "Latitude": "24.6115",
            "Longitude": "89.6328"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 302,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 732,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 3993
    },
    "PrimaryContactInfo": {
        "firstName": "Shirly",
        "lastName": "Salas",
        "phoneNumber": "+1-240-887-4716",
        "email": "ssalas@Verizon.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ssalas"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ssalas"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1415 Short Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "EF",
        "city": "St. Catharines Southeast",
        "stateProvince": "ON",
        "locality": "St. Catharines ",
        "country": "CA",
        "postalCode": "L2V",
        "GeoSpatialInfo": {
            "Latitude": "43.1142",
            "Longitude": "-79.2035"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 783,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "DoubleTree",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 214
    },
    "PrimaryContactInfo": {
        "firstName": "Josette",
        "lastName": "Shepherd",
        "phoneNumber": "+1-241-818-1673",
        "email": "jshepher@NII.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9371 Long Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Winnipeg (St. James-Assiniboia NE \/ YWG)",
        "stateProvince": "MB",
        "locality": "Winnipeg",
        "country": "CA",
        "postalCode": "R3H",
        "GeoSpatialInfo": {
            "Latitude": "49.9033",
            "Longitude": "-97.2074"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 289,
            "bedType": [
                "single",
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Clarion",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 1925
    },
    "PrimaryContactInfo": {
        "firstName": "Timothy",
        "lastName": "Christian",
        "phoneNumber": "+91-242-027-7564",
        "email": "tchristi@Verizon.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/tchristi"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/tchristi"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tchristi"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tchristi"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7721 Winding Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kumbharmath",
        "stateProvince": "Malvsn",
        "locality": "Sindhudurg",
        "country": "IN",
        "postalCode": "416606",
        "GeoSpatialInfo": {
            "Latitude": "17.5927",
            "Longitude": "74.687"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 557,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 302,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 3802
    },
    "PrimaryContactInfo": {
        "firstName": "Lesley",
        "lastName": "Stokes",
        "phoneNumber": "+1441-243-200-2363",
        "email": "lstokes@BCE.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lstokes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5967 Red Ridge Avenue",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": null,
        "city": "Paget",
        "stateProvince": "Paget Parish",
        "locality": "Paget Parish",
        "country": "BM",
        "postalCode": "PG 02",
        "GeoSpatialInfo": {
            "Latitude": "32.2783",
            "Longitude": "-64.7817"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 909,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 583,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Executive Residency",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3867
    },
    "PrimaryContactInfo": {
        "firstName": "Donald",
        "lastName": "Pena",
        "phoneNumber": "+91-244-699-0539",
        "email": "dpena@KTC.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dpena"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2222 Big Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Arasalu",
        "stateProvince": "Hosanagara",
        "locality": "Shimoga",
        "country": "IN",
        "postalCode": "577426",
        "GeoSpatialInfo": {
            "Latitude": "13.9989",
            "Longitude": "75.306"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 409,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 915,
            "bedType": [
                "king",
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 606,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 441,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Scottish Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 4821
    },
    "PrimaryContactInfo": {
        "firstName": "Peter",
        "lastName": "Hardy",
        "phoneNumber": "+66-245-280-3051",
        "email": "phardy@Sprint.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/phardy"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8389 Red Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nong Saeng",
        "stateProvince": "Udon Thani",
        "locality": "Udon Thani",
        "country": "TH",
        "postalCode": "41340",
        "GeoSpatialInfo": {
            "Latitude": "17.1336",
            "Longitude": "102.9675"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 390,
            "bedType": [
                "queen",
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 533,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 2690
    },
    "PrimaryContactInfo": {
        "firstName": "Jannie",
        "lastName": "Delacruz",
        "phoneNumber": "+1-246-856-1349",
        "email": "jdelacru@AlgoNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jdelacru"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jdelacru"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jdelacru"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1942 Blue Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "93",
        "city": "Etobicoke (Mimico NW \/ The Queensway West \/ South of Bloor \/ Kingsway Park South West \/ Royal York South West)",
        "stateProvince": "ON",
        "locality": "Etobicoke",
        "country": "CA",
        "postalCode": "M8Z",
        "GeoSpatialInfo": {
            "Latitude": "43.6256",
            "Longitude": "-79.5231"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 279,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 462,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Formula 1",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 219
    },
    "PrimaryContactInfo": {
        "firstName": "Margarito",
        "lastName": "Salinas",
        "phoneNumber": "+40-247-167-2451",
        "email": "msalinas@AIS.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/msalinas"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5411 Short Bridge Ride",
        "buildingName": "Building 83",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Poiana (Brusturi)",
        "stateProvince": "Neam\u0163",
        "locality": "Neam\u0163",
        "country": "RO",
        "postalCode": "617111",
        "GeoSpatialInfo": {
            "Latitude": "47.2976",
            "Longitude": "26.3607"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 777,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 454,
            "bedType": [
                "king",
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 661,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 3193
    },
    "PrimaryContactInfo": {
        "firstName": "Rolande",
        "lastName": "Gilmore",
        "phoneNumber": "+1-248-616-9101",
        "email": "rgilmore@Bifty.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rgilmore"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rgilmore"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7738 Short Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Swannanoa",
        "stateProvince": "NC",
        "locality": "Buncombe",
        "country": "US",
        "postalCode": "28778",
        "GeoSpatialInfo": {
            "Latitude": "35.6172",
            "Longitude": "-82.407"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 570,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 129,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 3117
    },
    "PrimaryContactInfo": {
        "firstName": "Yoko",
        "lastName": "Brennan",
        "phoneNumber": "+46-249-281-1903",
        "email": "ybrennan@TT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ybrennan"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ybrennan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9761 Long Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u00c5rsta",
        "stateProvince": "AB",
        "locality": "Stockholm",
        "country": "SE",
        "postalCode": "120 44",
        "GeoSpatialInfo": {
            "Latitude": "59.3",
            "Longitude": "18.05"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 973,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 331,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Metropolo Vienna",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 801
    },
    "PrimaryContactInfo": {
        "firstName": "Sol",
        "lastName": "Hardy",
        "phoneNumber": "+1-250-005-8322",
        "email": "shardy@MaxComm.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/shardy"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/shardy"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5284 Green Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Peabody",
        "stateProvince": "MA",
        "locality": "Essex",
        "country": "US",
        "postalCode": "01960",
        "GeoSpatialInfo": {
            "Latitude": "42.5326",
            "Longitude": "-70.9612"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 126,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Downtowner Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 2118
    },
    "PrimaryContactInfo": {
        "firstName": "Francisco",
        "lastName": "Aguilar",
        "phoneNumber": "+441481-251-505-7341",
        "email": "faguilar@UUnet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/faguilar"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/faguilar"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8840 Short Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sark",
        "stateProvince": "Channel Islands",
        "locality": "Channel Islands",
        "country": "GG",
        "postalCode": "GY10",
        "GeoSpatialInfo": {
            "Latitude": "49.71",
            "Longitude": "-2.2"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 615,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 424,
            "bedType": [
                "single",
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 2040
    },
    "PrimaryContactInfo": {
        "firstName": "Archie",
        "lastName": "Monroe",
        "phoneNumber": "+44-252-061-3647",
        "email": "amonroe@Econnect.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/amonroe"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9041 Long Mound Ride",
        "buildingName": null,
        "floor": 12,
        "roomApartmentCondoNumber": "F3",
        "city": "Hubberholme",
        "stateProvince": "England",
        "locality": "North Yorkshire",
        "country": "GB",
        "postalCode": "BD23",
        "GeoSpatialInfo": {
            "Latitude": "54.0356",
            "Longitude": "-2.1106"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 509,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 747,
            "bedType": [
                "double",
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2444
    },
    "PrimaryContactInfo": {
        "firstName": "Madaline",
        "lastName": "Castro",
        "phoneNumber": "+43-253-980-0092",
        "email": "mcastro@CUBENet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mcastro"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mcastro"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3826 Red Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Schmiedhof",
        "stateProvince": "Gurten",
        "locality": "Politischer Bezirk Ried im Innkreis",
        "country": "AT",
        "postalCode": "4942",
        "GeoSpatialInfo": {
            "Latitude": "48.2305",
            "Longitude": "13.3789"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 650,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 233,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 386,
            "bedType": [
                "single",
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Joie de Vivre",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 2863
    },
    "PrimaryContactInfo": {
        "firstName": "Abbie",
        "lastName": "Hendricks",
        "phoneNumber": "+61-254-155-2316",
        "email": "ahendric@Movil.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ahendric"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ahendric"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7830 Winding Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wongwibinda",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2350",
        "GeoSpatialInfo": {
            "Latitude": "-30.2928",
            "Longitude": "152.1661"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 909,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 386,
            "bedType": [
                "king",
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 792,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 727,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 1110
    },
    "PrimaryContactInfo": {
        "firstName": "Willis",
        "lastName": "Vance",
        "phoneNumber": "+590-255-066-1189",
        "email": "wvance@LookData.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wvance"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1236 Winding Bend Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Goyave",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97128",
        "GeoSpatialInfo": {
            "Latitude": "16.1352",
            "Longitude": "-61.574"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 53,
            "bedType": [
                "king",
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 776,
            "bedType": [
                "single",
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 272,
            "bedType": [
                "king",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 839,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 121
    },
    "PrimaryContactInfo": {
        "firstName": "Delpha",
        "lastName": "Delacruz",
        "phoneNumber": "+91-256-492-0904",
        "email": "ddelacru@KTC.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4135 Long Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kauwadongri",
        "stateProvince": "Mandla",
        "locality": "Mandla",
        "country": "IN",
        "postalCode": "481663",
        "GeoSpatialInfo": {
            "Latitude": "22.772",
            "Longitude": "80.5234"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 835,
            "bedType": [
                "single",
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Clarion",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 1604
    },
    "PrimaryContactInfo": {
        "firstName": "Dennis",
        "lastName": "Carey",
        "phoneNumber": "+376-257-874-7087",
        "email": "dcarey@UI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1833 Blue Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sant Juli\u00e0 de L\u00f2ria",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD600",
        "GeoSpatialInfo": {
            "Latitude": "42.4667",
            "Longitude": "1.5"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 367,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 87,
            "bedType": [
                "double",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 259
    },
    "PrimaryContactInfo": {
        "firstName": "Tricia",
        "lastName": "Kane",
        "phoneNumber": "+44-258-140-2230",
        "email": "tkane@PLDT.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tkane"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7626 Green Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "9A",
        "city": "Denstone",
        "stateProvince": "England",
        "locality": "Staffordshire",
        "country": "GB",
        "postalCode": "ST14",
        "GeoSpatialInfo": {
            "Latitude": "52.9633",
            "Longitude": "-1.8524"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 84,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 3954
    },
    "PrimaryContactInfo": {
        "firstName": "Irena",
        "lastName": "Jenkins",
        "phoneNumber": "+57-259-073-5623",
        "email": "ijenkins@EUnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ijenkins"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ijenkins"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ijenkins"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ijenkins"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8710 Long Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Suba",
        "stateProvince": "Bogot\u00e1  D.C.",
        "locality": "Bogot\u00e1  D.C.",
        "country": "CO",
        "postalCode": "111151",
        "GeoSpatialInfo": {
            "Latitude": "4.7494",
            "Longitude": "-74.1178"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 983,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 478,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 908,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 730,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Bestay",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 2821
    },
    "PrimaryContactInfo": {
        "firstName": "Ping",
        "lastName": "Robinson",
        "phoneNumber": "+1-260-018-9237",
        "email": "probinso@EUnet.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/probinso"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/probinso"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/probinso"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "615 Long Woods Street",
        "buildingName": "Building CD",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "South Glens Falls",
        "stateProvince": "NY",
        "locality": "Saratoga",
        "country": "US",
        "postalCode": "12803",
        "GeoSpatialInfo": {
            "Latitude": "43.2836",
            "Longitude": "-73.6294"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 990,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 341,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 2369
    },
    "PrimaryContactInfo": {
        "firstName": "Jeannetta",
        "lastName": "Parsons",
        "phoneNumber": "+386-261-640-5387",
        "email": "jparsons@cerist.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jparsons"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jparsons"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jparsons"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jparsons"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1965 Long Stream Street",
        "buildingName": null,
        "floor": 5,
        "roomApartmentCondoNumber": null,
        "city": "\u0160empas",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "5261",
        "GeoSpatialInfo": {
            "Latitude": "45.9303",
            "Longitude": "13.7436"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 710,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 106,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Bestay",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 3854
    },
    "PrimaryContactInfo": {
        "firstName": "Greg",
        "lastName": "Campos",
        "phoneNumber": "+91-262-151-2485",
        "email": "gcampos@Bifty.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/gcampos"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gcampos"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gcampos"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1323 Winding Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Balaramprasad",
        "stateProvince": "Hindol",
        "locality": "Dhenkanal",
        "country": "IN",
        "postalCode": "759019",
        "GeoSpatialInfo": {
            "Latitude": "20.8679",
            "Longitude": "85.1713"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 930,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 279,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 419,
            "bedType": [
                "queen",
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 663,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel JAL",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 4313
    },
    "PrimaryContactInfo": {
        "firstName": "Brooks",
        "lastName": "Ayers",
        "phoneNumber": "+590-263-482-6718",
        "email": "bayers@Swisscom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bayers"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bayers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6097 Green Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Basse-Terre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97108 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "15.9985",
            "Longitude": "-61.7255"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 570,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 631,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 774,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Rose Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 2697
    },
    "PrimaryContactInfo": {
        "firstName": "Johana",
        "lastName": "Dominguez",
        "phoneNumber": "+44-264-122-2379",
        "email": "jdomingu@Telus.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jdomingu"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9966 Winding Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E6",
        "city": "Gathurst",
        "stateProvince": "England",
        "locality": "Merseyside",
        "country": "GB",
        "postalCode": "WN5",
        "GeoSpatialInfo": {
            "Latitude": "53.4979",
            "Longitude": "-2.7081"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 392,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 496,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 960
    },
    "PrimaryContactInfo": {
        "firstName": "Clarisa",
        "lastName": "Estes",
        "phoneNumber": "+386-265-339-7802",
        "email": "cestes@TT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cestes"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cestes"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cestes"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cestes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4960 Short Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Vuhred",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "2365",
        "GeoSpatialInfo": {
            "Latitude": "46.5947",
            "Longitude": "15.2375"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 917,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 448,
            "bedType": [
                "queen",
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Joie de Vivre",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 2869
    },
    "PrimaryContactInfo": {
        "firstName": "Alex",
        "lastName": "Lam",
        "phoneNumber": "+61-266-443-9334",
        "email": "alam@Vodafone.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/alam"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/alam"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/alam"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9286 Short River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Green Hills",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2365",
        "GeoSpatialInfo": {
            "Latitude": "-32.9176",
            "Longitude": "149.5836"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 20,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 175,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 529,
            "bedType": [
                "double",
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 486
    },
    "PrimaryContactInfo": {
        "firstName": "Vina",
        "lastName": "Sherman",
        "phoneNumber": "+370-267-495-0042",
        "email": "vsherman@Telia.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vsherman"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/vsherman"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4126 Winding Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Par\u0105\u017e\u0117s k.",
        "stateProvince": "Kretingos r. sav.",
        "locality": "Kretingos r. sav.",
        "country": "LT",
        "postalCode": "97011",
        "GeoSpatialInfo": {
            "Latitude": "55.9701",
            "Longitude": "21.3861"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 916,
            "bedType": [
                "queen",
                "queen",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 253,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 593,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 271,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 4167
    },
    "PrimaryContactInfo": {
        "firstName": "Lashon",
        "lastName": "Singleton",
        "phoneNumber": "+44-268-580-3094",
        "email": "lsinglet@ICom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lsinglet"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lsinglet"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3085 Little Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Beedon",
        "stateProvince": "England",
        "locality": "Berkshire",
        "country": "GB",
        "postalCode": "RG20",
        "GeoSpatialInfo": {
            "Latitude": "51.4944",
            "Longitude": "-1.297"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 27,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 902,
            "bedType": [
                "queen",
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 545,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Metropolo Vienna",
        "propertyType": "motel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 4306
    },
    "PrimaryContactInfo": {
        "firstName": "Nery",
        "lastName": "Sampson",
        "phoneNumber": "+692-269-036-9837",
        "email": "nsampson@Oi.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/nsampson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/nsampson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4783 Red Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "GeoSpatialInfo": {
            "Latitude": "11.1405",
            "Longitude": "166.4103"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 998,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 251,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 3887
    },
    "PrimaryContactInfo": {
        "firstName": "Marlena",
        "lastName": "Gaines",
        "phoneNumber": "+91-270-536-2250",
        "email": "mgaines@Telkom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mgaines"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5995 Little Bough Drive",
        "buildingName": null,
        "floor": 19,
        "roomApartmentCondoNumber": "09",
        "city": "Sitapura Industrial Area",
        "stateProvince": "Jaipur",
        "locality": "Jaipur",
        "country": "IN",
        "postalCode": "302022",
        "GeoSpatialInfo": {
            "Latitude": "26.9295",
            "Longitude": "75.7962"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 494,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 123,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Canadas Best Value Inns",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 937
    },
    "PrimaryContactInfo": {
        "firstName": "Lindsey",
        "lastName": "Simon",
        "phoneNumber": "+598-271-259-5073",
        "email": "lsimon@Unicom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lsimon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5703 Green Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Villa Felicidad",
        "stateProvince": "Canelones",
        "locality": "Canelones",
        "country": "UY",
        "postalCode": "15900",
        "GeoSpatialInfo": {
            "Latitude": "-34.6422",
            "Longitude": "-56.2407"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 281,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jianguo",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 613
    },
    "PrimaryContactInfo": {
        "firstName": "Foster",
        "lastName": "Trujillo",
        "phoneNumber": "+44-272-898-8725",
        "email": "ftrujill@UUnet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ftrujill"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ftrujill"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5995 Winding Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Huntington",
        "stateProvince": "Wales",
        "locality": "Hereford and Worcester",
        "country": "GB",
        "postalCode": "HR5",
        "GeoSpatialInfo": {
            "Latitude": "52.1833",
            "Longitude": "-3.1"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 714,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4775
    },
    "PrimaryContactInfo": {
        "firstName": "Monet",
        "lastName": "Golden",
        "phoneNumber": "+389-273-543-9822",
        "email": "mgolden@Telecom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mgolden"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mgolden"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mgolden"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8070 Blue Bend Avenue",
        "buildingName": "Building 55",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lozovo",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "2208",
        "GeoSpatialInfo": {
            "Latitude": "41.7839",
            "Longitude": "21.9056"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 836,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jianguo",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 3694
    },
    "PrimaryContactInfo": {
        "firstName": "Jacque",
        "lastName": "Cain",
        "phoneNumber": "+1-274-404-8648",
        "email": "jcain@Vodafone.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jcain"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jcain"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "737 Red Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Calgary South (Altadore \/ Bankview \/ Richmond)",
        "stateProvince": "AB",
        "locality": "Calgary",
        "country": "CA",
        "postalCode": "T2T",
        "GeoSpatialInfo": {
            "Latitude": "51.0242",
            "Longitude": "-114.1004"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 577,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 45,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 493,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jen Kerry Hotels",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 559
    },
    "PrimaryContactInfo": {
        "firstName": "Yolando",
        "lastName": "Park",
        "phoneNumber": "+441624-275-621-6579",
        "email": "ypark@Telia.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ypark"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3226 Long Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jurby West",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7",
        "GeoSpatialInfo": {
            "Latitude": "54.3815",
            "Longitude": "-4.4273"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 534,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 737,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3946
    },
    "PrimaryContactInfo": {
        "firstName": "Yelena",
        "lastName": "Gregory",
        "phoneNumber": "+1-276-391-8610",
        "email": "ygregory@Tata.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ygregory"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8494 Red Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "81",
        "city": "Chicoutimi East",
        "stateProvince": "QC",
        "locality": "Chicoutimi",
        "country": "CA",
        "postalCode": "G7H",
        "GeoSpatialInfo": {
            "Latitude": "48.4187",
            "Longitude": "-71.0417"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 460,
            "bedType": [
                "king",
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2414
    },
    "PrimaryContactInfo": {
        "firstName": "Dominic",
        "lastName": "Butler",
        "phoneNumber": "+61-278-946-1338",
        "email": "dbutler@Airtel.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dbutler"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dbutler"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dbutler"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7906 Long Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dungarubba",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2480",
        "GeoSpatialInfo": {
            "Latitude": "-28.9833",
            "Longitude": "153.3833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 46,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 191,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 426,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Getaway Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4157
    },
    "PrimaryContactInfo": {
        "firstName": "Roland",
        "lastName": "Bennett",
        "phoneNumber": "+81-279-970-7141",
        "email": "rbennett@GreenNet.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rbennett"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rbennett"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7690 Red Bridge Road",
        "buildingName": null,
        "floor": 16,
        "roomApartmentCondoNumber": null,
        "city": "Nangai Ochiai",
        "stateProvince": "Daisen Shi",
        "locality": "Daisen Shi",
        "country": "JP",
        "postalCode": "019-1875",
        "GeoSpatialInfo": {
            "Latitude": "39.5176",
            "Longitude": "140.4374"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 333,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 865,
            "bedType": [
                "single",
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Louvre Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 4461
    },
    "PrimaryContactInfo": {
        "firstName": "Rex",
        "lastName": "Stout",
        "phoneNumber": "+1-280-414-2502",
        "email": "rstout@MTN.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rstout"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6033 Long Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pickering North",
        "stateProvince": "ON",
        "locality": "Pickering",
        "country": "CA",
        "postalCode": "L1Y",
        "GeoSpatialInfo": {
            "Latitude": "43.9555",
            "Longitude": "-79.1194"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 962,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 955,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 3458
    },
    "PrimaryContactInfo": {
        "firstName": "Elvie",
        "lastName": "Wyatt",
        "phoneNumber": "+47-281-199-4406",
        "email": "ewyatt@KTC.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ewyatt"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3994 Winding Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hopen",
        "stateProvince": "Hopen",
        "locality": "Hopen",
        "country": "SJ",
        "postalCode": "9174",
        "GeoSpatialInfo": {
            "Latitude": "76.5756",
            "Longitude": "25.1971"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 569,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 319,
            "bedType": [
                "double",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 4756
    },
    "PrimaryContactInfo": {
        "firstName": "Lynn",
        "lastName": "Daniel",
        "phoneNumber": "+44-282-433-6413",
        "email": "ldaniel@Turkcell.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ldaniel"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ldaniel"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3434 Red Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "D7",
        "city": "Howsham",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "LN7",
        "GeoSpatialInfo": {
            "Latitude": "53.5333",
            "Longitude": "-0.4333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 645,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 362,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "The Sebel",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 4759
    },
    "PrimaryContactInfo": {
        "firstName": "Adele",
        "lastName": "Williams",
        "phoneNumber": "+441481-283-696-8214",
        "email": "awilliam@UUnet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/awilliam"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4846 Red Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Castel",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY5",
        "GeoSpatialInfo": {
            "Latitude": "49.45",
            "Longitude": "-2.6"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 928,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 76,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Super 8",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 3775
    },
    "PrimaryContactInfo": {
        "firstName": "Dominga",
        "lastName": "Anderson",
        "phoneNumber": "+1-284-839-8143",
        "email": "danderso@Verizon.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/danderso"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4707 Green Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jamestown",
        "stateProvince": "KS",
        "locality": "Cloud",
        "country": "US",
        "postalCode": "66948",
        "GeoSpatialInfo": {
            "Latitude": "39.6021",
            "Longitude": "-97.8631"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 564,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 705
    },
    "PrimaryContactInfo": {
        "firstName": "Bonnie",
        "lastName": "Hudson",
        "phoneNumber": "+375-285-494-8567",
        "email": "bhudson@AlgoNet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bhudson"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bhudson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "847 Short Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041f\u0443\u0442\u0447\u0438\u043d\u043e",
        "stateProvince": "Dzerjinsk",
        "locality": "Dzerjinsk",
        "country": "BY",
        "postalCode": "222741",
        "GeoSpatialInfo": {
            "Latitude": "53.7964",
            "Longitude": "27.0287"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 950,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 864,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 593,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "7 Days Inn",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 754
    },
    "PrimaryContactInfo": {
        "firstName": "Lyman",
        "lastName": "Wiley",
        "phoneNumber": "+1-286-919-6543",
        "email": "lwiley@Access.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lwiley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7445 Green Stream Drive",
        "buildingName": "Building F2",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Halsey",
        "stateProvince": "OR",
        "locality": "Linn",
        "country": "US",
        "postalCode": "97348",
        "GeoSpatialInfo": {
            "Latitude": "44.3862",
            "Longitude": "-123.1251"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 63,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 115,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 583,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 753,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "JW Marriott",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 1840
    },
    "PrimaryContactInfo": {
        "firstName": "Florentino",
        "lastName": "Herman",
        "phoneNumber": "+54-287-486-2538",
        "email": "fherman@Telefonica.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/fherman"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "186 Red Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "LOS OSOS",
        "stateProvince": "S",
        "locality": "Santa Fe",
        "country": "AR",
        "postalCode": "3051",
        "GeoSpatialInfo": {
            "Latitude": "-29.9",
            "Longitude": "-59.8333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 90,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 847,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Peaceful Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 4676
    },
    "PrimaryContactInfo": {
        "firstName": "Darin",
        "lastName": "Nunez",
        "phoneNumber": "+91-288-927-9583",
        "email": "dnunez@CCS.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1075 Red Stream Circle",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": "37",
        "city": "Gogannamatham",
        "stateProvince": "Mamidikuduru",
        "locality": "East Godavari",
        "country": "IN",
        "postalCode": "533248",
        "GeoSpatialInfo": {
            "Latitude": "16.7934",
            "Longitude": "80.9546"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 657,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 99,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 468,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Motel 168",
        "propertyType": "motel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 3974
    },
    "PrimaryContactInfo": {
        "firstName": "Delbert",
        "lastName": "Solis",
        "phoneNumber": "+880-289-649-4070",
        "email": "dsolis@ICom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dsolis"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dsolis"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7228 Little Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Siddirganj",
        "stateProvince": "Siddirganj",
        "locality": "Narayanganj",
        "country": "BD",
        "postalCode": "1430",
        "GeoSpatialInfo": {
            "Latitude": "23.7197",
            "Longitude": "90.5634"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 964,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel JAL",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 1211
    },
    "PrimaryContactInfo": {
        "firstName": "Cassidy",
        "lastName": "Munoz",
        "phoneNumber": "+1-290-918-0549",
        "email": "cmunoz@KPN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cmunoz"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cmunoz"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3857 Green Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Knoxville",
        "stateProvince": "TN",
        "locality": "Knox",
        "country": "US",
        "postalCode": "37917",
        "GeoSpatialInfo": {
            "Latitude": "35.998",
            "Longitude": "-83.9152"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 285,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 746,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 639,
            "bedType": [
                "king",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Rose Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 2023
    },
    "PrimaryContactInfo": {
        "firstName": "Berry",
        "lastName": "Mathews",
        "phoneNumber": "+54-291-330-8790",
        "email": "bmathews@CCS.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bmathews"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1056 Winding Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "ISLA LARGA",
        "stateProvince": "X",
        "locality": "Cordoba",
        "country": "AR",
        "postalCode": "5129",
        "GeoSpatialInfo": {
            "Latitude": "-31.0556",
            "Longitude": "-63.6"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 867,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 429,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Grand Mercure",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 377
    },
    "PrimaryContactInfo": {
        "firstName": "Cleo",
        "lastName": "Wade",
        "phoneNumber": "+1-292-149-2946",
        "email": "cwade@Relcom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cwade"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cwade"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4542 Winding Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St. Catharines Northeast",
        "stateProvince": "ON",
        "locality": "St. Catharines ",
        "country": "CA",
        "postalCode": "L2M",
        "GeoSpatialInfo": {
            "Latitude": "43.196",
            "Longitude": "-79.2161"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 440,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 575,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 680,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Rodeway Inn",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 3380
    },
    "PrimaryContactInfo": {
        "firstName": "Frederick",
        "lastName": "Nichols",
        "phoneNumber": "+1670-293-618-0759",
        "email": "fnichols@Movil.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/fnichols"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6229 Green Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tinian",
        "stateProvince": "Tinian",
        "locality": "Tinian",
        "country": "MP",
        "postalCode": "96952",
        "GeoSpatialInfo": {
            "Latitude": "15.029",
            "Longitude": "145.616"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 218,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 1074
    },
    "PrimaryContactInfo": {
        "firstName": "Deidra",
        "lastName": "Novak",
        "phoneNumber": "+1-294-210-6678",
        "email": "dnovak@Turkcell.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dnovak"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9887 Little Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "48",
        "city": "Jamestown",
        "stateProvince": "CO",
        "locality": "Boulder",
        "country": "US",
        "postalCode": "80455",
        "GeoSpatialInfo": {
            "Latitude": "40.1155",
            "Longitude": "-105.3886"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 751,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 187,
            "bedType": [
                "king",
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jen Kerry Hotels",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 682
    },
    "PrimaryContactInfo": {
        "firstName": "Elliott",
        "lastName": "Kane",
        "phoneNumber": "+56-295-452-6272",
        "email": "ekane@Frontier.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4304 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Antofagasta",
        "stateProvince": "Antofagasta",
        "locality": "Provincia de Antofagasta",
        "country": "CL",
        "postalCode": "1240000",
        "GeoSpatialInfo": {
            "Latitude": "-24.2739",
            "Longitude": "-69.4097"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 395,
            "bedType": [
                "queen",
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 871,
            "bedType": [
                "single",
                "double",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Bestay",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 3693
    },
    "PrimaryContactInfo": {
        "firstName": "Woodrow",
        "lastName": "Sweeney",
        "phoneNumber": "+1-296-668-0606",
        "email": "wsweeney@Telus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/wsweeney"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/wsweeney"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/wsweeney"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wsweeney"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wsweeney"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7617 Green Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Noonan",
        "stateProvince": "ND",
        "locality": "Divide",
        "country": "US",
        "postalCode": "58765",
        "GeoSpatialInfo": {
            "Latitude": "48.8856",
            "Longitude": "-103.0098"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 846,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 840,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Restful Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 2038
    },
    "PrimaryContactInfo": {
        "firstName": "Jacquiline",
        "lastName": "Phan",
        "phoneNumber": "+33-297-460-8354",
        "email": "jphan@Airtel.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1428 Red Mountain Road",
        "buildingName": null,
        "floor": 9,
        "roomApartmentCondoNumber": null,
        "city": "Cond\u00e9court",
        "stateProvince": "Arrondissement de Pontoise",
        "locality": "Val-d'Oise",
        "country": "FR",
        "postalCode": "95450",
        "GeoSpatialInfo": {
            "Latitude": "49.0404",
            "Longitude": "1.942"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 862,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 213,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ritz-Carlton Destination Club",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 1148
    },
    "PrimaryContactInfo": {
        "firstName": "Mila",
        "lastName": "Mcclain",
        "phoneNumber": "+44-298-303-1056",
        "email": "mmcclain@NII.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mmcclain"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mmcclain"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mmcclain"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7517 Winding Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bishop's Itchington",
        "stateProvince": "England",
        "locality": "Warwickshire",
        "country": "GB",
        "postalCode": "CV33",
        "GeoSpatialInfo": {
            "Latitude": "52.2545",
            "Longitude": "-1.4803"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 735,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 796,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ginger",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 1795
    },
    "PrimaryContactInfo": {
        "firstName": "Ronny",
        "lastName": "Mullins",
        "phoneNumber": "+66-299-096-2409",
        "email": "rmullins@LGUplus.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rmullins"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7041 Long Gully Street",
        "buildingName": "Building DA",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kuchinarai",
        "stateProvince": "Kalasin",
        "locality": "Kalasin",
        "country": "TH",
        "postalCode": "46110",
        "GeoSpatialInfo": {
            "Latitude": "16.5333",
            "Longitude": "104.0667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 439,
            "bedType": [
                "king",
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 725,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Awesome Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 180
    },
    "PrimaryContactInfo": {
        "firstName": "Roman",
        "lastName": "Glenn",
        "phoneNumber": "+1-300-282-9579",
        "email": "rglenn@PLDT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rglenn"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rglenn"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "911 Big Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "CF",
        "city": "Hull Southeast",
        "stateProvince": "QC",
        "locality": "Hull",
        "country": "CA",
        "postalCode": "J8X",
        "GeoSpatialInfo": {
            "Latitude": "45.44",
            "Longitude": "-75.7119"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 844,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Conrad Hotels",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 1234
    },
    "PrimaryContactInfo": {
        "firstName": "Merrie",
        "lastName": "Yang",
        "phoneNumber": "+389-301-235-1110",
        "email": "myang@TelecomItalia.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/myang"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/myang"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2767 Short Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Labunista",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "6336",
        "GeoSpatialInfo": {
            "Latitude": "41.2686",
            "Longitude": "20.5961"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 901,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 59,
            "bedType": [
                "queen",
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 804,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "TownePlace Suites",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 1672
    },
    "PrimaryContactInfo": {
        "firstName": "Taylor",
        "lastName": "Ho",
        "phoneNumber": "+1-302-941-2510",
        "email": "tho@Access.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tho"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8764 Big Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Brooklyn",
        "stateProvince": "NY",
        "locality": "Kings",
        "country": "US",
        "postalCode": "11252",
        "GeoSpatialInfo": {
            "Latitude": "40.6451",
            "Longitude": "-73.945"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 916,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 594,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 703,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Rose Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 3803
    },
    "PrimaryContactInfo": {
        "firstName": "Hershel",
        "lastName": "Noble",
        "phoneNumber": "+56-303-221-3759",
        "email": "hnoble@Telefonica.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/hnoble"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/hnoble"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "400 Winding Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Puente Alto",
        "stateProvince": "Puente Alto",
        "locality": "Provincia de Cordillera",
        "country": "CL",
        "postalCode": "8150000",
        "GeoSpatialInfo": {
            "Latitude": "-33.591",
            "Longitude": "-70.5575"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 896,
            "bedType": [
                "single",
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Crowne Plaza",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1878
    },
    "PrimaryContactInfo": {
        "firstName": "Gilma",
        "lastName": "Le",
        "phoneNumber": "+91-304-668-2454",
        "email": "gle@Jio.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/gle"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gle"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gle"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gle"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3550 Little Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chilikdhara",
        "stateProvince": "Ghatagaon",
        "locality": "Kendujhar",
        "country": "IN",
        "postalCode": "758080",
        "GeoSpatialInfo": {
            "Latitude": "20.2852",
            "Longitude": "85.2407"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 108,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 630,
            "bedType": [
                "single",
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Downtowner Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 1080
    },
    "PrimaryContactInfo": {
        "firstName": "Bell",
        "lastName": "Mejia",
        "phoneNumber": "+1-305-925-9617",
        "email": "bmejia@MTN.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6708 Little Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Groton",
        "stateProvince": "CT",
        "locality": "New London",
        "country": "US",
        "postalCode": "06340",
        "GeoSpatialInfo": {
            "Latitude": "41.3572",
            "Longitude": "-72.0579"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 805,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 906,
            "bedType": [
                "single",
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 156,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 2290
    },
    "PrimaryContactInfo": {
        "firstName": "Harley",
        "lastName": "Oconnell",
        "phoneNumber": "+1-306-511-7015",
        "email": "hoconnel@Vivendi.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/hoconnel"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "472 Long Tree Drive",
        "buildingName": null,
        "floor": 4,
        "roomApartmentCondoNumber": "AB",
        "city": "Bayfield",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E4M",
        "GeoSpatialInfo": {
            "Latitude": "46.0919",
            "Longitude": "-64.0173"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 797,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 503,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quality Inn",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 2523
    },
    "PrimaryContactInfo": {
        "firstName": "Margy",
        "lastName": "Parker",
        "phoneNumber": "+94-307-092-7763",
        "email": "mparker@Vodafone.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mparker"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2223 Red Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wahalkada",
        "stateProvince": "Anuradhapura",
        "locality": "Anuradhapura",
        "country": "LK",
        "postalCode": "50564",
        "GeoSpatialInfo": {
            "Latitude": "8.3807",
            "Longitude": "80.4436"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 727,
            "bedType": [
                "king",
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 611,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 271,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Even",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 3920
    },
    "PrimaryContactInfo": {
        "firstName": "Graham",
        "lastName": "Christensen",
        "phoneNumber": "+44-308-171-0958",
        "email": "gchriste@SKTelecom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/gchriste"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gchriste"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5037 Short Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dorridge",
        "stateProvince": "England",
        "locality": "West Midlands",
        "country": "GB",
        "postalCode": "B93",
        "GeoSpatialInfo": {
            "Latitude": "52.3726",
            "Longitude": "-1.7532"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 327,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 401,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 711,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 2196
    },
    "PrimaryContactInfo": {
        "firstName": "Man",
        "lastName": "Parrish",
        "phoneNumber": "+352-309-649-0693",
        "email": "mparrish@Zain.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "496 Long Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Friedbusch",
        "stateProvince": "DI",
        "locality": "Bourscheid",
        "country": "LU",
        "postalCode": "L-9183",
        "GeoSpatialInfo": {
            "Latitude": "49.9504",
            "Longitude": "6.0557"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 590,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Avid",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 207
    },
    "PrimaryContactInfo": {
        "firstName": "Alex",
        "lastName": "Brock",
        "phoneNumber": "+44-310-862-7083",
        "email": "abrock@NII.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/abrock"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2508 Red Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Solsgirth",
        "stateProvince": "Scotland",
        "locality": "Perth and Kinross",
        "country": "GB",
        "postalCode": "FK14",
        "GeoSpatialInfo": {
            "Latitude": "56.1832",
            "Longitude": "-3.6261"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 631,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Best Western Plus",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 139
    },
    "PrimaryContactInfo": {
        "firstName": "Katelyn",
        "lastName": "Rasmussen",
        "phoneNumber": "+441624-311-367-2193",
        "email": "krasmuss@UI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8153 Winding Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ramsey",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM8",
        "GeoSpatialInfo": {
            "Latitude": "54.2948",
            "Longitude": "-4.3895"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 651,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 53,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Getaway Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 1059
    },
    "PrimaryContactInfo": {
        "firstName": "Sofia",
        "lastName": "Craig",
        "phoneNumber": "+91-312-938-6363",
        "email": "scraig@UI.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/scraig"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8118 Red Creek Road",
        "buildingName": "Building 92",
        "floor": null,
        "roomApartmentCondoNumber": "A2",
        "city": "Vekariya",
        "stateProvince": "NA",
        "locality": "Junagadh",
        "country": "IN",
        "postalCode": "362130",
        "GeoSpatialInfo": {
            "Latitude": "21.9302",
            "Longitude": "70.4775"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 432,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 79,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 63,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Best Western Premier",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 4840
    },
    "PrimaryContactInfo": {
        "firstName": "Herb",
        "lastName": "Pena",
        "phoneNumber": "+1441-313-483-9969",
        "email": "hpena@PTCL.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/hpena"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/hpena"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/hpena"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3279 Green Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Devonshire",
        "stateProvince": "Devonshire Parish",
        "locality": "Devonshire Parish",
        "country": "BM",
        "postalCode": "FL 01",
        "GeoSpatialInfo": {
            "Latitude": "32.3264",
            "Longitude": "-64.7411"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 539,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 638,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 757,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jinjiang Inn",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 3179
    },
    "PrimaryContactInfo": {
        "firstName": "Nickolas",
        "lastName": "Long",
        "phoneNumber": "+1-314-730-9368",
        "email": "nlong@Verizon.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6468 Blue Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Youngstown",
        "stateProvince": "OH",
        "locality": "Mahoning",
        "country": "US",
        "postalCode": "44515",
        "GeoSpatialInfo": {
            "Latitude": "41.0979",
            "Longitude": "-80.7598"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 50,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 303,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 880,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mountain Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 4195
    },
    "PrimaryContactInfo": {
        "firstName": "Tomas",
        "lastName": "Mueller",
        "phoneNumber": "+358-315-613-1678",
        "email": "tmueller@Telekom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/tmueller"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "57 Short Gully Circle",
        "buildingName": null,
        "floor": 9,
        "roomApartmentCondoNumber": null,
        "city": "Pornainen",
        "stateProvince": "Pornainen",
        "locality": "Helsinki",
        "country": "FI",
        "postalCode": "07171",
        "GeoSpatialInfo": {
            "Latitude": "60.4665",
            "Longitude": "25.3891"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 515,
            "bedType": [
                "queen",
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 791,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "BW Premier Collection",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 2165
    },
    "PrimaryContactInfo": {
        "firstName": "Towanda",
        "lastName": "Gregory",
        "phoneNumber": "+1-316-901-9379",
        "email": "tgregory@Sprint.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tgregory"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tgregory"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8143 Green Stream Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Morristown",
        "stateProvince": "OH",
        "locality": "Belmont",
        "country": "US",
        "postalCode": "43759",
        "GeoSpatialInfo": {
            "Latitude": "40.0631",
            "Longitude": "-81.0743"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 176,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 58,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 167,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2206
    },
    "PrimaryContactInfo": {
        "firstName": "Willian",
        "lastName": "Espinoza",
        "phoneNumber": "+92-317-584-8916",
        "email": "wespinoz@ICom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/wespinoz"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/wespinoz"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wespinoz"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3477 Winding Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gulistan",
        "stateProvince": "NWFP Peshawar",
        "locality": "NWFP Peshawar",
        "country": "PK",
        "postalCode": "26191",
        "GeoSpatialInfo": {
            "Latitude": "30.6072",
            "Longitude": "66.5839"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 424,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 239,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 11
    },
    "PrimaryContactInfo": {
        "firstName": "Jeniffer",
        "lastName": "Walters",
        "phoneNumber": "+91-318-151-3476",
        "email": "jwalters@NII.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "5670 Green Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "42",
        "city": "Majhariya Sheikh",
        "stateProvince": "Bettiah",
        "locality": "West Champaran",
        "country": "IN",
        "postalCode": "845454",
        "GeoSpatialInfo": {
            "Latitude": "26.7356",
            "Longitude": "84.642"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 714,
            "bedType": [
                "king",
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 478,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 322,
            "bedType": [
                "queen",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Vib",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 1263
    },
    "PrimaryContactInfo": {
        "firstName": "Carter",
        "lastName": "Bullock",
        "phoneNumber": "+506-319-802-0839",
        "email": "cbullock@ATT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cbullock"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1439 Big Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "San Isidro",
        "stateProvince": "San Isidro",
        "locality": "Atenas",
        "country": "CR",
        "postalCode": "20504",
        "GeoSpatialInfo": {
            "Latitude": "9.9955",
            "Longitude": "-84.4332"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 970,
            "bedType": [
                "king",
                "king",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 3468
    },
    "PrimaryContactInfo": {
        "firstName": "Hyacinth",
        "lastName": "Vargas",
        "phoneNumber": "+1-320-844-5564",
        "email": "hvargas@Sprint.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4062 Red Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Edmonton (North Clover Bar)",
        "stateProvince": "AB",
        "locality": "Edmonton",
        "country": "CA",
        "postalCode": "T6S",
        "GeoSpatialInfo": {
            "Latitude": "53.5806",
            "Longitude": "-113.3374"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 638,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 101,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 851,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 3685
    },
    "PrimaryContactInfo": {
        "firstName": "Noel",
        "lastName": "Lara",
        "phoneNumber": "+370-321-433-4614",
        "email": "nlara@Chunghwa.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3758 Little Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kur\u0161\u0117nai",
        "stateProvince": "\u0160iauli\u0173 r. sav.",
        "locality": "\u0160iauli\u0173 r. sav.",
        "country": "LT",
        "postalCode": "81001",
        "GeoSpatialInfo": {
            "Latitude": "56.0032",
            "Longitude": "22.9366"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 299,
            "bedType": [
                "queen",
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 23,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 157
    },
    "PrimaryContactInfo": {
        "firstName": "Forest",
        "lastName": "Bernal",
        "phoneNumber": "+44-322-491-6704",
        "email": "fbernal@CenturyLink.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/fbernal"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8578 Long Tree Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ardtalnaig",
        "stateProvince": "Scotland",
        "locality": "Perth and Kinross",
        "country": "GB",
        "postalCode": "PH15",
        "GeoSpatialInfo": {
            "Latitude": "56.5277",
            "Longitude": "-4.1121"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 417,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 354,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 814,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Raffles",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 4243
    },
    "PrimaryContactInfo": {
        "firstName": "Denise",
        "lastName": "Hood",
        "phoneNumber": "+34-323-185-5495",
        "email": "dhood@MTN.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dhood"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1928 Long Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Las Entradas",
        "stateProvince": "CB",
        "locality": "Cantabria",
        "country": "ES",
        "postalCode": "39849",
        "GeoSpatialInfo": {
            "Latitude": "43.341",
            "Longitude": "-3.4217"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 424,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Awesome Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 3825
    },
    "PrimaryContactInfo": {
        "firstName": "Reid",
        "lastName": "Corona",
        "phoneNumber": "+1-324-702-9008",
        "email": "rcorona@Orange.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rcorona"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rcorona"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1857 Red Bridge Street",
        "buildingName": null,
        "floor": 9,
        "roomApartmentCondoNumber": "D0",
        "city": "Burlington East",
        "stateProvince": "ON",
        "locality": "Burlington",
        "country": "CA",
        "postalCode": "L7N",
        "GeoSpatialInfo": {
            "Latitude": "43.3512",
            "Longitude": "-79.784"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 571,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 865,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "SureStay",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 1395
    },
    "PrimaryContactInfo": {
        "firstName": "Afton",
        "lastName": "Wall",
        "phoneNumber": "+1787-325-383-2136",
        "email": "awall@KPN.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/awall"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/awall"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/awall"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5332 Little Gully Avenue",
        "buildingName": "Building 74",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Arroyo",
        "stateProvince": "Arroyo",
        "locality": "Arroyo",
        "country": "PR",
        "postalCode": "00714",
        "GeoSpatialInfo": {
            "Latitude": "17.9658",
            "Longitude": "-66.0613"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 549,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Yitel",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 1101
    },
    "PrimaryContactInfo": {
        "firstName": "Mica",
        "lastName": "Gibson",
        "phoneNumber": "+1-326-783-3348",
        "email": "mgibson@BCE.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mgibson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1633 Long Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Delson",
        "stateProvince": "QC",
        "locality": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J5B",
        "GeoSpatialInfo": {
            "Latitude": "45.3668",
            "Longitude": "-73.5492"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 846,
            "bedType": [
                "single",
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 875,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Louvre Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 4548
    },
    "PrimaryContactInfo": {
        "firstName": "John",
        "lastName": "Huber",
        "phoneNumber": "+91-328-439-4073",
        "email": "jhuber@SEEDnet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "884 Red Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mundlapadu",
        "stateProvince": "Krishna",
        "locality": "Krishna",
        "country": "IN",
        "postalCode": "521190",
        "GeoSpatialInfo": {
            "Latitude": "15.3311",
            "Longitude": "78.8977"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 478,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 167,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 1357
    },
    "PrimaryContactInfo": {
        "firstName": "Joseph",
        "lastName": "Haley",
        "phoneNumber": "+36-329-780-2025",
        "email": "jhaley@TM.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jhaley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jhaley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8346 Blue Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sz\u00e1gy",
        "stateProvince": "BA",
        "locality": "Baranya",
        "country": "HU",
        "postalCode": "7383",
        "GeoSpatialInfo": {
            "Latitude": "46.2333",
            "Longitude": "17.95"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 523,
            "bedType": [
                "king",
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 458
    },
    "PrimaryContactInfo": {
        "firstName": "Kenna",
        "lastName": "Lopez",
        "phoneNumber": "+1-330-950-1893",
        "email": "klopez@DaxNet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9478 Little Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "55",
        "city": "Village Mills",
        "stateProvince": "TX",
        "locality": "Hardin",
        "country": "US",
        "postalCode": "77663",
        "GeoSpatialInfo": {
            "Latitude": "30.5185",
            "Longitude": "-94.4458"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 437,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 85,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 741,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Fairfield Inn",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 629
    },
    "PrimaryContactInfo": {
        "firstName": "Orval",
        "lastName": "Vo",
        "phoneNumber": "+1670-331-260-3690",
        "email": "ovo@SKTelecom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ovo"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ovo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3733 Big Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tinian",
        "stateProvince": "Tinian",
        "locality": "Tinian",
        "country": "MP",
        "postalCode": "96952",
        "GeoSpatialInfo": {
            "Latitude": "15.029",
            "Longitude": "145.616"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 989,
            "bedType": [
                "queen",
                "queen",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 120,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 59,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Gateway",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 376
    },
    "PrimaryContactInfo": {
        "firstName": "Alonso",
        "lastName": "Hubbard",
        "phoneNumber": "+1-332-699-0622",
        "email": "ahubbard@Vodafone.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ahubbard"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ahubbard"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ahubbard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2911 Little Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Timmins North",
        "stateProvince": "ON",
        "locality": "Timmins",
        "country": "CA",
        "postalCode": "P4P",
        "GeoSpatialInfo": {
            "Latitude": "48.4985",
            "Longitude": "-81.3448"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 862,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 2500
    },
    "PrimaryContactInfo": {
        "firstName": "Shelli",
        "lastName": "Butler",
        "phoneNumber": "+1787-333-888-9195",
        "email": "sbutler@GreenNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sbutler"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sbutler"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sbutler"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9927 Big Bough Avenue",
        "buildingName": null,
        "floor": 10,
        "roomApartmentCondoNumber": null,
        "city": "Juana Diaz",
        "stateProvince": "Juana Diaz",
        "locality": "Juana Diaz",
        "country": "PR",
        "postalCode": "00795",
        "GeoSpatialInfo": {
            "Latitude": "18.0525",
            "Longitude": "-66.5066"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 283,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 424,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Bestay",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 186
    },
    "PrimaryContactInfo": {
        "firstName": "Sherika",
        "lastName": "Estrada",
        "phoneNumber": "+1-334-247-0355",
        "email": "sestrada@LookData.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sestrada"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8667 Short Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lloydminster",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T9V",
        "GeoSpatialInfo": {
            "Latitude": "53.2717",
            "Longitude": "-110.0853"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 65,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 235,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Park Plaza",
        "propertyType": "motel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 4769
    },
    "PrimaryContactInfo": {
        "firstName": "Mark",
        "lastName": "Barry",
        "phoneNumber": "+441624-335-332-4345",
        "email": "mbarry@TT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mbarry"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mbarry"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mbarry"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9764 Red Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dreemskerry",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7",
        "GeoSpatialInfo": {
            "Latitude": "54.3815",
            "Longitude": "-4.4273"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 495,
            "bedType": [
                "double",
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Restful Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 52
    },
    "PrimaryContactInfo": {
        "firstName": "Cedrick",
        "lastName": "Cain",
        "phoneNumber": "+1-336-277-2261",
        "email": "ccain@KPN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ccain"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ccain"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ccain"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5734 Long Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "00",
        "city": "Longueuil Southeast",
        "stateProvince": "QC",
        "locality": "Longueuil",
        "country": "CA",
        "postalCode": "J4L",
        "GeoSpatialInfo": {
            "Latitude": "45.5181",
            "Longitude": "-73.4576"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 64,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jinjiang Inn",
        "propertyType": "motel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 711
    },
    "PrimaryContactInfo": {
        "firstName": "Bobbie",
        "lastName": "Patrick",
        "phoneNumber": "+370-337-334-1997",
        "email": "bpatrick@Orstom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bpatrick"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "496 Long Bend Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Vilnius",
        "stateProvince": "Vilniaus m. sav.",
        "locality": "Vilniaus m. sav.",
        "country": "LT",
        "postalCode": "10243",
        "GeoSpatialInfo": {
            "Latitude": "54.7541",
            "Longitude": "25.4287"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 336,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 762,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quorvus Collection",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 2864
    },
    "PrimaryContactInfo": {
        "firstName": "Roman",
        "lastName": "Vasquez",
        "phoneNumber": "+91-338-793-3398",
        "email": "rvasquez@TT.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rvasquez"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rvasquez"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8592 Short Mound Street",
        "buildingName": "Building 1B",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Utraj",
        "stateProvince": "Karjan",
        "locality": "Vadodara",
        "country": "IN",
        "postalCode": "391250",
        "GeoSpatialInfo": {
            "Latitude": "22.3552",
            "Longitude": "73.0205"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 730,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 426,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 975,
            "bedType": [
                "queen",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 100
    },
    "PrimaryContactInfo": {
        "firstName": "Stanley",
        "lastName": "Keith",
        "phoneNumber": "+596-339-289-6850",
        "email": "skeith@Access.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/skeith"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1787 Short Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97261 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "14.6089",
            "Longitude": "-61.0733"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 780,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 335,
            "bedType": [
                "queen",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Blu",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 1163
    },
    "PrimaryContactInfo": {
        "firstName": "Tyrone",
        "lastName": "Ayers",
        "phoneNumber": "+61-340-339-4230",
        "email": "tayers@MTN.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tayers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7842 Winding Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bullawa Creek",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2390",
        "GeoSpatialInfo": {
            "Latitude": "-30.3068",
            "Longitude": "150.0012"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 941,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 992,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 885
    },
    "PrimaryContactInfo": {
        "firstName": "Krysten",
        "lastName": "Bernard",
        "phoneNumber": "+47-341-720-8794",
        "email": "kbernard@NordNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kbernard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5018 Little Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bj\u00f8rn\u00f8ya",
        "stateProvince": "Bj\u00f8rn\u00f8ya",
        "locality": "Bj\u00f8rn\u00f8ya",
        "country": "SJ",
        "postalCode": "9176",
        "GeoSpatialInfo": {
            "Latitude": "74.4435",
            "Longitude": "19.0063"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 519,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 3377
    },
    "PrimaryContactInfo": {
        "firstName": "Delfina",
        "lastName": "Wu",
        "phoneNumber": "+91-342-764-1563",
        "email": "dwu@TelecomItalia.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dwu"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6196 Long Hill Street",
        "buildingName": null,
        "floor": 16,
        "roomApartmentCondoNumber": "5D",
        "city": "Panamarathupatti",
        "stateProvince": "Salem",
        "locality": "Salem",
        "country": "IN",
        "postalCode": "636204",
        "GeoSpatialInfo": {
            "Latitude": "12.7359",
            "Longitude": "80.1422"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 959,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Passport Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 1304
    },
    "PrimaryContactInfo": {
        "firstName": "Johnie",
        "lastName": "Fisher",
        "phoneNumber": "+691-343-627-5951",
        "email": "jfisher@AIS.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jfisher"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jfisher"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5843 Green Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chuuk",
        "stateProvince": "State of Chuuk",
        "locality": "State of Chuuk",
        "country": "FM",
        "postalCode": "96942",
        "GeoSpatialInfo": {
            "Latitude": "7.1383",
            "Longitude": "151.5031"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 970,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 616,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 570,
            "bedType": [
                "double",
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 155,
            "bedType": [
                "king",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Red Carpet Inn",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 1982
    },
    "PrimaryContactInfo": {
        "firstName": "Mika",
        "lastName": "Navarro",
        "phoneNumber": "+91-344-304-5795",
        "email": "mnavarro@LookData.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mnavarro"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mnavarro"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9858 Red Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tandwa",
        "stateProvince": "Meral",
        "locality": "Palamau",
        "country": "IN",
        "postalCode": "822128",
        "GeoSpatialInfo": {
            "Latitude": "24.1788",
            "Longitude": "84.1939"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 310,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 332,
            "bedType": [
                "single",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quiet Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 2746
    },
    "PrimaryContactInfo": {
        "firstName": "Ashley",
        "lastName": "Hill",
        "phoneNumber": "+590-345-185-5962",
        "email": "ahill@KDDI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ahill"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ahill"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9742 Red Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pointe-\u00e0-Pitre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97154 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "16.2422",
            "Longitude": "-61.5343"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 745,
            "bedType": [
                "double",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 678,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 201,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 849,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Gaylord Grand Residences",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 4910
    },
    "PrimaryContactInfo": {
        "firstName": "Bo",
        "lastName": "House",
        "phoneNumber": "+61-346-635-1589",
        "email": "bhouse@TT.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bhouse"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1412 Short Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Muntham",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3315",
        "GeoSpatialInfo": {
            "Latitude": "-37.5833",
            "Longitude": "141.5667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 706,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 578,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 3949
    },
    "PrimaryContactInfo": {
        "firstName": "Carol",
        "lastName": "Jimenez",
        "phoneNumber": "+370-347-404-1297",
        "email": "cjimenez@Rogers.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cjimenez"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9882 Blue Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u017dyg\u0173 k.",
        "stateProvince": "Kretingos r. sav.",
        "locality": "Kretingos r. sav.",
        "country": "LT",
        "postalCode": "97001",
        "GeoSpatialInfo": {
            "Latitude": "55.8758",
            "Longitude": "21.2508"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 927,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 80,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 302,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 744
    },
    "PrimaryContactInfo": {
        "firstName": "Asa",
        "lastName": "Woodard",
        "phoneNumber": "+1-348-262-4186",
        "email": "awoodard@Access.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/awoodard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "838 Green Gully Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "F0",
        "city": "Dawes",
        "stateProvince": "WV",
        "locality": "Kanawha",
        "country": "US",
        "postalCode": "25054",
        "GeoSpatialInfo": {
            "Latitude": "38.1429",
            "Longitude": "-81.4521"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 450,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 996,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 710,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Red",
        "propertyType": "motel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 3674
    },
    "PrimaryContactInfo": {
        "firstName": "Verda",
        "lastName": "Gallagher",
        "phoneNumber": "+81-349-514-7354",
        "email": "vgallagh@Airtel.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/vgallagh"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2111 Winding Woods Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shimonammamachi",
        "stateProvince": "Kanuma Shi",
        "locality": "Kanuma Shi",
        "country": "JP",
        "postalCode": "322-0341",
        "GeoSpatialInfo": {
            "Latitude": "36.6596",
            "Longitude": "139.8226"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 400,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 830,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jianguo",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 2534
    },
    "PrimaryContactInfo": {
        "firstName": "Lourdes",
        "lastName": "Solis",
        "phoneNumber": "+91-350-770-4638",
        "email": "lsolis@CenturyLink.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lsolis"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "803 Blue River Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Manoor",
        "stateProvince": "Umari",
        "locality": "Nanded",
        "country": "IN",
        "postalCode": "431807",
        "GeoSpatialInfo": {
            "Latitude": "19.3247",
            "Longitude": "77.5489"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 771,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 490,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 793,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 1926
    },
    "PrimaryContactInfo": {
        "firstName": "Johna",
        "lastName": "Greene",
        "phoneNumber": "+376-351-136-3222",
        "email": "jgreene@Telekom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jgreene"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9397 Little Tree Street",
        "buildingName": "Building C4",
        "floor": 18,
        "roomApartmentCondoNumber": null,
        "city": "Ordino",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD300",
        "GeoSpatialInfo": {
            "Latitude": "42.6",
            "Longitude": "1.55"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 388,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 1552
    },
    "PrimaryContactInfo": {
        "firstName": "Carola",
        "lastName": "Dixon",
        "phoneNumber": "+91-352-591-9148",
        "email": "cdixon@Telkom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3583 Big Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kiragasur",
        "stateProvince": "T Narasipura",
        "locality": "Mysore",
        "country": "IN",
        "postalCode": "571124",
        "GeoSpatialInfo": {
            "Latitude": "12.7243",
            "Longitude": "76.6172"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 449,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 973
    },
    "PrimaryContactInfo": {
        "firstName": "Coleman",
        "lastName": "Bernard",
        "phoneNumber": "+44-353-176-0391",
        "email": "cbernard@Econnect.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cbernard"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cbernard"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cbernard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8450 Long Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Walsgrave on Sowe",
        "stateProvince": "England",
        "locality": "West Midlands",
        "country": "GB",
        "postalCode": "CV2",
        "GeoSpatialInfo": {
            "Latitude": "52.4255",
            "Longitude": "-1.4453"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 948,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 421,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 2327
    },
    "PrimaryContactInfo": {
        "firstName": "Lenora",
        "lastName": "Gray",
        "phoneNumber": "+44-354-155-1078",
        "email": "lgray@Bifty.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lgray"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lgray"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lgray"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lgray"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6502 Winding Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "33",
        "city": "Goodge Street",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "W1",
        "GeoSpatialInfo": {
            "Latitude": "51.4822",
            "Longitude": "-0.0337"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 462,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Joie de Vivre",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 3216
    },
    "PrimaryContactInfo": {
        "firstName": "Willard",
        "lastName": "Mccormick",
        "phoneNumber": "+353-355-384-0444",
        "email": "wmccormi@ICom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/wmccormi"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wmccormi"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wmccormi"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2992 Long Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cavan",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "H12",
        "GeoSpatialInfo": {
            "Latitude": "53.9908",
            "Longitude": "-7.3606"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 128,
            "bedType": [
                "queen",
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Econo Lodge",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 3151
    },
    "PrimaryContactInfo": {
        "firstName": "Isaiah",
        "lastName": "Hutchinson",
        "phoneNumber": "+1-356-165-0278",
        "email": "ihutchin@Access.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3966 Winding River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ahuntsic Southwest",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H3L",
        "GeoSpatialInfo": {
            "Latitude": "45.5467",
            "Longitude": "-73.6718"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 456,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 4132
    },
    "PrimaryContactInfo": {
        "firstName": "Prince",
        "lastName": "Drake",
        "phoneNumber": "+32-357-510-0967",
        "email": "pdrake@MaxComm.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/pdrake"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4342 Green Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Denderleeuw",
        "stateProvince": "VLG",
        "locality": "Oost-Vlaanderen",
        "country": "BE",
        "postalCode": "9472",
        "GeoSpatialInfo": {
            "Latitude": "50.8833",
            "Longitude": "4.0667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 598,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 260,
            "bedType": [
                "double",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mama Shelter",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 3205
    },
    "PrimaryContactInfo": {
        "firstName": "Rick",
        "lastName": "Baker",
        "phoneNumber": "+44-358-854-2640",
        "email": "rbaker@Belgacom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6367 Long River Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Leanach",
        "stateProvince": "Scotland",
        "locality": "Argyll and Bute",
        "country": "GB",
        "postalCode": "PA27",
        "GeoSpatialInfo": {
            "Latitude": "56.1365",
            "Longitude": "-5.1062"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 636,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 957,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Gateway",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2046
    },
    "PrimaryContactInfo": {
        "firstName": "Kasey",
        "lastName": "Huang",
        "phoneNumber": "+44-359-560-0322",
        "email": "khuang@Orange.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/khuang"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6447 Blue River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Knaven",
        "stateProvince": "Scotland",
        "locality": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB42",
        "GeoSpatialInfo": {
            "Latitude": "57.4785",
            "Longitude": "-1.9286"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 251,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 97,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4575
    },
    "PrimaryContactInfo": {
        "firstName": "Loan",
        "lastName": "Pugh",
        "phoneNumber": "+91-360-849-1034",
        "email": "lpugh@MTN.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lpugh"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lpugh"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4164 Short River Drive",
        "buildingName": null,
        "floor": 13,
        "roomApartmentCondoNumber": "E2",
        "city": "Ankri-Serampore",
        "stateProvince": "Chandannagar",
        "locality": "Hooghly",
        "country": "IN",
        "postalCode": "712401",
        "GeoSpatialInfo": {
            "Latitude": "22.7546",
            "Longitude": "88.2692"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 577,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Best Western",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 849
    },
    "PrimaryContactInfo": {
        "firstName": "Donovan",
        "lastName": "King",
        "phoneNumber": "+359-361-698-7666",
        "email": "dking@Millicom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dking"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dking"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6750 Big Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0411\u0440\u0430\u043a\u044c\u043e\u0432\u0446\u0438 \/ Brak'ovci",
        "stateProvince": "SFO",
        "locality": "\u0413\u043e\u0434\u0435\u0447 \/ Godech",
        "country": "BG",
        "postalCode": "2251",
        "GeoSpatialInfo": {
            "Latitude": "43.0614",
            "Longitude": "23.16"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 167,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 740,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 57,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "EDITION Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 83
    },
    "PrimaryContactInfo": {
        "firstName": "Ollie",
        "lastName": "Brown",
        "phoneNumber": "+44-362-510-8332",
        "email": "obrown@ICom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/obrown"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/obrown"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7204 Green Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Scolton",
        "stateProvince": "Wales",
        "locality": "Pembrokeshire",
        "country": "GB",
        "postalCode": "SA62",
        "GeoSpatialInfo": {
            "Latitude": "51.8338",
            "Longitude": "-4.976"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 744,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 330,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 947,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 335
    },
    "PrimaryContactInfo": {
        "firstName": "Jolanda",
        "lastName": "Roy",
        "phoneNumber": "+352-363-174-7992",
        "email": "jroy@AlgoNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jroy"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jroy"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jroy"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "483 Red Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dudelange",
        "stateProvince": "ES",
        "locality": "Dudelange",
        "country": "LU",
        "postalCode": "L-3512",
        "GeoSpatialInfo": {
            "Latitude": "49.4702",
            "Longitude": "6.0835"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 648,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Clarion",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 2317
    },
    "PrimaryContactInfo": {
        "firstName": "Dylan",
        "lastName": "Dominguez",
        "phoneNumber": "+91-364-463-8111",
        "email": "ddomingu@Telia.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ddomingu"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6948 Green Hill Ride",
        "buildingName": "Building A5",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "T.B.P.Colony",
        "stateProvince": "Yemmiganur",
        "locality": "Kurnool",
        "country": "IN",
        "postalCode": "518360",
        "GeoSpatialInfo": {
            "Latitude": "15.6393",
            "Longitude": "77.7259"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 728,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 647,
            "bedType": [
                "queen",
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 96,
            "bedType": [
                "double",
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Avid",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 3873
    },
    "PrimaryContactInfo": {
        "firstName": "Brad",
        "lastName": "Ferguson",
        "phoneNumber": "+441624-365-664-6559",
        "email": "bferguso@EUnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bferguso"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bferguso"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bferguso"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8205 Winding Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Crosby",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM4",
        "GeoSpatialInfo": {
            "Latitude": "54.1929",
            "Longitude": "-4.4832"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 63,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 891,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 166,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 656
    },
    "PrimaryContactInfo": {
        "firstName": "Russ",
        "lastName": "Bartlett",
        "phoneNumber": "+91-366-641-4359",
        "email": "rbartlet@Telus.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rbartlet"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3006 Big Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "82",
        "city": "Devache Gothane",
        "stateProvince": "Rajapur",
        "locality": "Ratnagiri",
        "country": "IN",
        "postalCode": "416702",
        "GeoSpatialInfo": {
            "Latitude": "16.9677",
            "Longitude": "73.5218"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 323,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 168,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 868,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Candlewood Suites",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 3671
    },
    "PrimaryContactInfo": {
        "firstName": "Rickey",
        "lastName": "Macdonald",
        "phoneNumber": "+423-367-966-2096",
        "email": "rmacdona@LookData.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rmacdona"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rmacdona"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rmacdona"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rmacdona"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5565 Short Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eschen",
        "stateProvince": "Eschen",
        "locality": "Eschen",
        "country": "LI",
        "postalCode": "9492",
        "GeoSpatialInfo": {
            "Latitude": "47.209",
            "Longitude": "9.5223"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 810,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Settle Inn",
        "propertyType": "hotel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 4484
    },
    "PrimaryContactInfo": {
        "firstName": "Jan",
        "lastName": "Zhang",
        "phoneNumber": "+91-368-471-1617",
        "email": "jzhang@Telkom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jzhang"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2851 Winding Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Vadva",
        "stateProvince": "Nakhatrana",
        "locality": "Kachchh",
        "country": "IN",
        "postalCode": "370445",
        "GeoSpatialInfo": {
            "Latitude": "22.7098",
            "Longitude": "69.8073"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 286,
            "bedType": [
                "queen",
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 157,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 958,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 2449
    },
    "PrimaryContactInfo": {
        "firstName": "Keneth",
        "lastName": "Brennan",
        "phoneNumber": "+49-369-332-9425",
        "email": "kbrennan@SEEDnet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kbrennan"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kbrennan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7608 Big Ridge Street",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": null,
        "city": "Rostock",
        "stateProvince": "MV",
        "locality": "Kreisfreie Stadt Rostock",
        "country": "DE",
        "postalCode": "18059",
        "GeoSpatialInfo": {
            "Latitude": "54.0679",
            "Longitude": "12.1186"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 590,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 266,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Park Hyatt",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 2231
    },
    "PrimaryContactInfo": {
        "firstName": "Nathalie",
        "lastName": "Brewer",
        "phoneNumber": "+91-370-145-5966",
        "email": "nbrewer@Movil.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "590 Green Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bamnhi Bhawal",
        "stateProvince": "Niwas",
        "locality": "Mandla",
        "country": "IN",
        "postalCode": "481662",
        "GeoSpatialInfo": {
            "Latitude": "22.8231",
            "Longitude": "79.5717"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 570,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Park Hyatt",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 1031
    },
    "PrimaryContactInfo": {
        "firstName": "Trenton",
        "lastName": "Logan",
        "phoneNumber": "+1809-371-289-0642",
        "email": "tlogan@SEEDnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/tlogan"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tlogan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9742 Big Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Carlos Alvarez",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11202",
        "GeoSpatialInfo": {
            "Latitude": "18.5667",
            "Longitude": "-69.9167"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 886,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 735,
            "bedType": [
                "double",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 200,
            "bedType": [
                "single",
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 2345
    },
    "PrimaryContactInfo": {
        "firstName": "Luther",
        "lastName": "Mcfarland",
        "phoneNumber": "+1-372-524-7167",
        "email": "lmcfarla@Bifty.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lmcfarla"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lmcfarla"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1574 Little Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "6A",
        "city": "Walker",
        "stateProvince": "MO",
        "locality": "Vernon",
        "country": "US",
        "postalCode": "64790",
        "GeoSpatialInfo": {
            "Latitude": "37.893",
            "Longitude": "-94.2293"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 423,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Gateway",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2904
    },
    "PrimaryContactInfo": {
        "firstName": "Glenda",
        "lastName": "Molina",
        "phoneNumber": "+91-374-599-6167",
        "email": "gmolina@Telkom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/gmolina"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gmolina"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/gmolina"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gmolina"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8326 Short Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Udaipur",
        "stateProvince": "Chamba",
        "locality": "Chamba",
        "country": "IN",
        "postalCode": "176314",
        "GeoSpatialInfo": {
            "Latitude": "32.5916",
            "Longitude": "76.1001"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 551,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 292,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 364,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 2157
    },
    "PrimaryContactInfo": {
        "firstName": "Lanell",
        "lastName": "Huerta",
        "phoneNumber": "+91-375-237-9283",
        "email": "lhuerta@Telkom.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lhuerta"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5886 Short Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shivalaya Mandir Lingsey",
        "stateProvince": "Rhenock",
        "locality": "East Sikkim",
        "country": "IN",
        "postalCode": "737133",
        "GeoSpatialInfo": {
            "Latitude": "27.1974",
            "Longitude": "88.6357"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 90,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 2482
    },
    "PrimaryContactInfo": {
        "firstName": "Amos",
        "lastName": "Trujillo",
        "phoneNumber": "+1-376-869-2329",
        "email": "atrujill@Orstom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/atrujill"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2510 Short Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "El Paso",
        "stateProvince": "TX",
        "locality": "El Paso",
        "country": "US",
        "postalCode": "88526",
        "GeoSpatialInfo": {
            "Latitude": "31.6948",
            "Longitude": "-106.3"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 202,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 929,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travelodge",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 3187
    },
    "PrimaryContactInfo": {
        "firstName": "Fritz",
        "lastName": "Greene",
        "phoneNumber": "+590-377-932-2778",
        "email": "fgreene@Airtel.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/fgreene"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5387 Short Tree Road",
        "buildingName": "Building 1D",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pointe-\u00e0-Pitre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97168 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "16.2422",
            "Longitude": "-61.5343"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 128,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 713,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 894,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 534,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 4878
    },
    "PrimaryContactInfo": {
        "firstName": "Elba",
        "lastName": "Ayers",
        "phoneNumber": "+61-378-379-1295",
        "email": "eayers@Tata.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/eayers"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/eayers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8190 Red Bridge Road",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": "1F",
        "city": "Waterholes",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3875",
        "GeoSpatialInfo": {
            "Latitude": "-37.7479",
            "Longitude": "147.4935"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 878,
            "bedType": [
                "queen",
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 184,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 978,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 387,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hawthorn Suites",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 4989
    },
    "PrimaryContactInfo": {
        "firstName": "Sanford",
        "lastName": "Hughes",
        "phoneNumber": "+47-379-741-6221",
        "email": "shughes@KDDI.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/shughes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6785 Short Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oslo",
        "stateProvince": "Oslo",
        "locality": "Oslo",
        "country": "NO",
        "postalCode": "0323",
        "GeoSpatialInfo": {
            "Latitude": "59.9127",
            "Longitude": "10.7461"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 820,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Bulgari",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3801
    },
    "PrimaryContactInfo": {
        "firstName": "Willena",
        "lastName": "Gillespie",
        "phoneNumber": "+91-380-897-3653",
        "email": "wgillesp@WorldNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/wgillesp"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3138 Winding Tree Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Naurangia",
        "stateProvince": "NA",
        "locality": "Kushinagar",
        "country": "IN",
        "postalCode": "274305",
        "GeoSpatialInfo": {
            "Latitude": "26.7097",
            "Longitude": "83.0315"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 854,
            "bedType": [
                "single",
                "queen",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 779,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quiet Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 2583
    },
    "PrimaryContactInfo": {
        "firstName": "Thersa",
        "lastName": "Sutton",
        "phoneNumber": "+420-381-979-5634",
        "email": "tsutton@KPN.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7765 Blue Tree Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nov\u00e1 D\u011bdina",
        "stateProvince": "Olomouc",
        "locality": "Olomouc",
        "country": "CZ",
        "postalCode": "783 91",
        "GeoSpatialInfo": {
            "Latitude": "49.8",
            "Longitude": "17.1167"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 480,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Motel 168",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 3447
    },
    "PrimaryContactInfo": {
        "firstName": "Delaine",
        "lastName": "Lucas",
        "phoneNumber": "+61-382-694-4443",
        "email": "dlucas@BT.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dlucas"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2639 Big Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kureen",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4885",
        "GeoSpatialInfo": {
            "Latitude": "-17.3333",
            "Longitude": "145.6"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 812,
            "bedType": [
                "king",
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 551,
            "bedType": [
                "king",
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 2527
    },
    "PrimaryContactInfo": {
        "firstName": "Ricky",
        "lastName": "Pruitt",
        "phoneNumber": "+40-383-671-3258",
        "email": "rpruitt@Telkom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rpruitt"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rpruitt"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9308 Winding Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Turda",
        "stateProvince": "Cluj",
        "locality": "Cluj",
        "country": "RO",
        "postalCode": "401126",
        "GeoSpatialInfo": {
            "Latitude": "46.5667",
            "Longitude": "23.7833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 829,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4866
    },
    "PrimaryContactInfo": {
        "firstName": "Antwan",
        "lastName": "Atkins",
        "phoneNumber": "+44-384-983-9220",
        "email": "aatkins@KTC.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/aatkins"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/aatkins"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1427 Blue Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "80",
        "city": "Keeres Green",
        "stateProvince": "England",
        "locality": "Essex",
        "country": "GB",
        "postalCode": "CM6",
        "GeoSpatialInfo": {
            "Latitude": "51.8501",
            "Longitude": "0.3092"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 301,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 920,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 936,
            "bedType": [
                "king",
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "DoubleTree",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 2019
    },
    "PrimaryContactInfo": {
        "firstName": "Cami",
        "lastName": "Mccoy",
        "phoneNumber": "+35818-385-067-0257",
        "email": "cmccoy@Telus.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cmccoy"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2009 Short Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mariehamn",
        "stateProvince": "Mariehamn",
        "locality": "Mariehamn",
        "country": "AX",
        "postalCode": "22101",
        "GeoSpatialInfo": {
            "Latitude": "60.0628",
            "Longitude": "19.9533"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 65,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 917,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 4690
    },
    "PrimaryContactInfo": {
        "firstName": "Royal",
        "lastName": "Carrillo",
        "phoneNumber": "+61-386-364-8136",
        "email": "rcarrill@Vodafone.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rcarrill"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6613 Big Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Brookstead",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4364",
        "GeoSpatialInfo": {
            "Latitude": "-27.7607",
            "Longitude": "151.4456"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 421,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 444,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 594,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Restful Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 3132
    },
    "PrimaryContactInfo": {
        "firstName": "Estell",
        "lastName": "Sawyer",
        "phoneNumber": "+386-387-160-2638",
        "email": "esawyer@OpenWorld.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2733 Long Stream Ride",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": null,
        "city": "Smlednik",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "1216",
        "GeoSpatialInfo": {
            "Latitude": "46.1642",
            "Longitude": "14.4325"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 248,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jinglun",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 2375
    },
    "PrimaryContactInfo": {
        "firstName": "Magali",
        "lastName": "Orozco",
        "phoneNumber": "+61-388-221-8543",
        "email": "morozco@LookData.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/morozco"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7362 Green Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Quindanning",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6391",
        "GeoSpatialInfo": {
            "Latitude": "-33.0466",
            "Longitude": "116.5698"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 400,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ramada",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 345
    },
    "PrimaryContactInfo": {
        "firstName": "Thomas",
        "lastName": "Tapia",
        "phoneNumber": "+386-389-402-1330",
        "email": "ttapia@Telenor.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2933 Blue Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dvor",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "8361",
        "GeoSpatialInfo": {
            "Latitude": "45.8139",
            "Longitude": "14.9711"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 656,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 585,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 2319
    },
    "PrimaryContactInfo": {
        "firstName": "Grisel",
        "lastName": "Ball",
        "phoneNumber": "+91-390-290-9498",
        "email": "gball@CUBENet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/gball"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7214 Red Mound Ride",
        "buildingName": "Building 3C",
        "floor": null,
        "roomApartmentCondoNumber": "32",
        "city": "Jangalapalle",
        "stateProvince": "Jammalamdugu",
        "locality": "Cuddapah",
        "country": "IN",
        "postalCode": "516411",
        "GeoSpatialInfo": {
            "Latitude": "14.5842",
            "Longitude": "77.6309"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 164,
            "bedType": [
                "double",
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Wyndham",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2094
    },
    "PrimaryContactInfo": {
        "firstName": "Humberto",
        "lastName": "Kennedy",
        "phoneNumber": "+39-391-134-4443",
        "email": "hkennedy@Unicom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/hkennedy"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/hkennedy"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2476 Short Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gnocca",
        "stateProvince": "VN",
        "locality": "Rovigo",
        "country": "IT",
        "postalCode": "45018",
        "GeoSpatialInfo": {
            "Latitude": "44.8872",
            "Longitude": "12.3358"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 320,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 117,
            "bedType": [
                "king",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 918,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 95,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Suburban",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 299
    },
    "PrimaryContactInfo": {
        "firstName": "Tia",
        "lastName": "Lawson",
        "phoneNumber": "+91-392-645-4226",
        "email": "tlawson@Telia.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tlawson"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tlawson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4566 Red Mound Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shahada Town",
        "stateProvince": "Shahade",
        "locality": "Nandurbar",
        "country": "IN",
        "postalCode": "425409",
        "GeoSpatialInfo": {
            "Latitude": "21.3514",
            "Longitude": "74.435"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 123,
            "bedType": [
                "single",
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 771,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 658,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Peaceful Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 2125
    },
    "PrimaryContactInfo": {
        "firstName": "Karri",
        "lastName": "Dixon",
        "phoneNumber": "+353-393-744-3860",
        "email": "kdixon@Telefonica.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kdixon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6927 Blue Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Blackrock",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "A94",
        "GeoSpatialInfo": {
            "Latitude": "53.3015",
            "Longitude": "-6.1778"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 801,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Microtel",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2963
    },
    "PrimaryContactInfo": {
        "firstName": "Marine",
        "lastName": "Morrow",
        "phoneNumber": "+91-394-857-1618",
        "email": "mmorrow@Movil.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mmorrow"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmorrow"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mmorrow"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8843 Red Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ghiri",
        "stateProvince": "Pauri",
        "locality": "Pauri Garhwal",
        "country": "IN",
        "postalCode": "246159",
        "GeoSpatialInfo": {
            "Latitude": "30.039",
            "Longitude": "78.7987"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 162,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 958,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 676,
            "bedType": [
                "double",
                "king",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 3399
    },
    "PrimaryContactInfo": {
        "firstName": "Yvette",
        "lastName": "Orozco",
        "phoneNumber": "+1-395-186-5147",
        "email": "yorozco@Etisalat.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/yorozco"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/yorozco"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8297 Short Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Winkler",
        "stateProvince": "MB",
        "locality": "Manitoba",
        "country": "CA",
        "postalCode": "R6W",
        "GeoSpatialInfo": {
            "Latitude": "49.1817",
            "Longitude": "-97.941"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 760,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 919,
            "bedType": [
                "queen",
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 979,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3407
    },
    "PrimaryContactInfo": {
        "firstName": "Eneida",
        "lastName": "Fry",
        "phoneNumber": "+91-396-354-4803",
        "email": "efry@AIS.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/efry"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3684 Long Stream Avenue",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": "6A",
        "city": "Chowtapalli",
        "stateProvince": "Subled",
        "locality": "Khammam",
        "country": "IN",
        "postalCode": "507161",
        "GeoSpatialInfo": {
            "Latitude": "17.6227",
            "Longitude": "79.1825"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 859,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 711,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 3823
    },
    "PrimaryContactInfo": {
        "firstName": "Antone",
        "lastName": "Lamb",
        "phoneNumber": "+1-397-596-8273",
        "email": "alamb@Vodafone.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9098 Big Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Enfield",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B2T",
        "GeoSpatialInfo": {
            "Latitude": "44.8749",
            "Longitude": "-63.4689"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 566,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 370,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 1023
    },
    "PrimaryContactInfo": {
        "firstName": "Clement",
        "lastName": "Hanson",
        "phoneNumber": "+61-398-365-6765",
        "email": "chanson@Orstom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/chanson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8574 Big Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lascelles",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3487",
        "GeoSpatialInfo": {
            "Latitude": "-35.6167",
            "Longitude": "142.5833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 811,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 608,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Restful Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 984
    },
    "PrimaryContactInfo": {
        "firstName": "Gwyn",
        "lastName": "Huerta",
        "phoneNumber": "+32-399-508-4986",
        "email": "ghuerta@APICnet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ghuerta"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ghuerta"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7321 Green Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Frasnes-lez-Anvaing Buissenal",
        "stateProvince": "WAL",
        "locality": "Hainaut",
        "country": "BE",
        "postalCode": "7911",
        "GeoSpatialInfo": {
            "Latitude": "50.5523",
            "Longitude": "3.7431"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 809,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 171,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 89,
            "bedType": [
                "queen",
                "queen",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Gateway",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2298
    },
    "PrimaryContactInfo": {
        "firstName": "Monte",
        "lastName": "Walters",
        "phoneNumber": "+61-400-373-4967",
        "email": "mwalters@DaxNet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1757 Red Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "North Shore",
        "stateProvince": "VIC",
        "locality": "VIC COUNTRY",
        "country": "AU",
        "postalCode": "3214",
        "GeoSpatialInfo": {
            "Latitude": "-38.1",
            "Longitude": "144.3667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 109,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 632,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "The Sebel",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 2005
    },
    "PrimaryContactInfo": {
        "firstName": "Lorene",
        "lastName": "Garner",
        "phoneNumber": "+262-401-738-7374",
        "email": "lgarner@AlgoNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lgarner"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lgarner"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lgarner"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4978 Big Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mamoudzou",
        "stateProvince": "Mamoudzou",
        "locality": "Mamoudzou",
        "country": "YT",
        "postalCode": "97650",
        "GeoSpatialInfo": {
            "Latitude": "-12.7823",
            "Longitude": "45.2288"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 926,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 388,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 2965
    },
    "PrimaryContactInfo": {
        "firstName": "Tonya",
        "lastName": "Noble",
        "phoneNumber": "+1-402-819-4278",
        "email": "tnoble@Oi.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tnoble"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tnoble"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tnoble"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2797 Long Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "0D",
        "city": "West Toronto (Brockton \/ Parkdale Village \/ Exhibition Place)",
        "stateProvince": "ON",
        "locality": "Toronto",
        "country": "CA",
        "postalCode": "M6K",
        "GeoSpatialInfo": {
            "Latitude": "43.6383",
            "Longitude": "-79.4301"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 886,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 30,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Motel 168",
        "propertyType": "motel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 2440
    },
    "PrimaryContactInfo": {
        "firstName": "Altagracia",
        "lastName": "Barnes",
        "phoneNumber": "+354-403-203-5440",
        "email": "abarnes@NordNet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/abarnes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8486 Winding Gulch Street",
        "buildingName": "Building F3",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Neskaupsta\u00f0",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "740",
        "GeoSpatialInfo": {
            "Latitude": "65.1482",
            "Longitude": "-13.6837"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 673,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 136,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 467,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 657
    },
    "PrimaryContactInfo": {
        "firstName": "Babara",
        "lastName": "Sharp",
        "phoneNumber": "+1-404-761-7621",
        "email": "bsharp@NetCom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bsharp"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5993 Blue Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St. Albert",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T8T",
        "GeoSpatialInfo": {
            "Latitude": "53.6867",
            "Longitude": "-113.7102"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 556,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 541,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 618,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 4856
    },
    "PrimaryContactInfo": {
        "firstName": "Leslie",
        "lastName": "Wheeler",
        "phoneNumber": "+353-405-581-6801",
        "email": "lwheeler@EUnet.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lwheeler"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7023 Little Gully Road",
        "buildingName": null,
        "floor": 20,
        "roomApartmentCondoNumber": null,
        "city": "Castlerea",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "F45",
        "GeoSpatialInfo": {
            "Latitude": "53.7667",
            "Longitude": "-8.5"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 688,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Yitel",
        "propertyType": "hotel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 1606
    },
    "PrimaryContactInfo": {
        "firstName": "Ashly",
        "lastName": "Berg",
        "phoneNumber": "+91-406-978-1797",
        "email": "aberg@KTC.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/aberg"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4650 Big Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Best Staff Colony",
        "stateProvince": "NA",
        "locality": "Mumbai",
        "country": "IN",
        "postalCode": "400075",
        "GeoSpatialInfo": {
            "Latitude": "19.0737",
            "Longitude": "72.9009"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 685,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 867,
            "bedType": [
                "single",
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 814,
            "bedType": [
                "king",
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "BW Signature Collection",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3757
    },
    "PrimaryContactInfo": {
        "firstName": "Danilo",
        "lastName": "Frost",
        "phoneNumber": "+56-407-483-0422",
        "email": "dfrost@Turkcell.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dfrost"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dfrost"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3572 Long Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Curic\u00f3",
        "stateProvince": "Curic\u00f3",
        "locality": "Provincia de Curic\u00f3",
        "country": "CL",
        "postalCode": "3340000",
        "GeoSpatialInfo": {
            "Latitude": "-35.1991",
            "Longitude": "-70.8957"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 123,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 896,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 514,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 966
    },
    "PrimaryContactInfo": {
        "firstName": "Al",
        "lastName": "Reeves",
        "phoneNumber": "+44-408-436-6316",
        "email": "areeves@Ooredoo.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/areeves"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/areeves"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/areeves"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/areeves"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "985 Blue Woods Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "F9",
        "city": "Pontnewydd",
        "stateProvince": "Wales",
        "locality": "Torfaen",
        "country": "GB",
        "postalCode": "NP44",
        "GeoSpatialInfo": {
            "Latitude": "51.6644",
            "Longitude": "-3.0275"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 335,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 247,
            "bedType": [
                "double",
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 130,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel Indigo",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1236
    },
    "PrimaryContactInfo": {
        "firstName": "Todd",
        "lastName": "Ho",
        "phoneNumber": "+40-409-201-1657",
        "email": "tho@TT.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9182 Little Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Satu Mare",
        "stateProvince": "Satu Mare",
        "locality": "Satu Mare",
        "country": "RO",
        "postalCode": "440061",
        "GeoSpatialInfo": {
            "Latitude": "47.7993",
            "Longitude": "22.8625"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 724,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 527,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "7 Days Inn",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 2900
    },
    "PrimaryContactInfo": {
        "firstName": "Ginette",
        "lastName": "Reese",
        "phoneNumber": "+1-410-140-4797",
        "email": "greese@Bifty.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/greese"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/greese"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2383 Red Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kingston (Reddendale \/ Cataraqui \/ Collins Bay)",
        "stateProvince": "ON",
        "locality": "Kingston",
        "country": "CA",
        "postalCode": "K7M",
        "GeoSpatialInfo": {
            "Latitude": "44.2411",
            "Longitude": "-76.5788"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 70,
            "bedType": [
                "queen",
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel JAL",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 4862
    },
    "PrimaryContactInfo": {
        "firstName": "Frankie",
        "lastName": "Gutierrez",
        "phoneNumber": "+91-412-229-1274",
        "email": "fgutierr@TeleSystems.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/fgutierr"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3471 Green Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Keragodu",
        "stateProvince": "Holeanarasipur",
        "locality": "Hassan",
        "country": "IN",
        "postalCode": "573211",
        "GeoSpatialInfo": {
            "Latitude": "12.7185",
            "Longitude": "76.1791"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 947,
            "bedType": [
                "single",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 994,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Novotel",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 2619
    },
    "PrimaryContactInfo": {
        "firstName": "Major",
        "lastName": "Mclaughlin",
        "phoneNumber": "+81-413-179-1239",
        "email": "mmclaugh@CCI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9017 Short Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Suehirocho",
        "stateProvince": "Ibaraki Shi",
        "locality": "Ibaraki Shi",
        "country": "JP",
        "postalCode": "567-0821",
        "GeoSpatialInfo": {
            "Latitude": "34.6253",
            "Longitude": "135.5127"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 60,
            "bedType": [
                "queen",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 894,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 866
    },
    "PrimaryContactInfo": {
        "firstName": "Caryl",
        "lastName": "Butler",
        "phoneNumber": "+1-414-713-3603",
        "email": "cbutler@TeleSystems.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cbutler"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9228 Short Bridge Way",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": "6F",
        "city": "Orlando",
        "stateProvince": "FL",
        "locality": "Orange",
        "country": "US",
        "postalCode": "32821",
        "GeoSpatialInfo": {
            "Latitude": "28.3957",
            "Longitude": "-81.4666"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 41,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 496,
            "bedType": [
                "single",
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Fairfield Inn",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 1581
    },
    "PrimaryContactInfo": {
        "firstName": "Darci",
        "lastName": "Koch",
        "phoneNumber": "+92-415-396-0591",
        "email": "dkoch@UUnet.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dkoch"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2180 Long Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Thimka",
        "stateProvince": "Norhern Punajb Rawalpindi",
        "locality": "Norhern Punajb Rawalpindi",
        "country": "PK",
        "postalCode": "50781",
        "GeoSpatialInfo": {
            "Latitude": "32.6083",
            "Longitude": "74.1553"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 719,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Days Inn",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 3533
    },
    "PrimaryContactInfo": {
        "firstName": "Kyle",
        "lastName": "Beasley",
        "phoneNumber": "+1-416-659-5978",
        "email": "kbeasley@NetCom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kbeasley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kbeasley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6501 Long Creek Ride",
        "buildingName": "Building C1",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "North York (Bedford Park \/ Lawrence Park West \/ Lawrence Manor East)",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "M5M",
        "GeoSpatialInfo": {
            "Latitude": "43.7335",
            "Longitude": "-79.4177"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 321,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 53,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Sleepy Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 2604
    },
    "PrimaryContactInfo": {
        "firstName": "Joaquin",
        "lastName": "Montoya",
        "phoneNumber": "+44-417-213-9354",
        "email": "jmontoya@ICom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jmontoya"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jmontoya"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jmontoya"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jmontoya"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1729 Winding River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Great Torrington",
        "stateProvince": "England",
        "locality": "Devon",
        "country": "GB",
        "postalCode": "EX38",
        "GeoSpatialInfo": {
            "Latitude": "50.9531",
            "Longitude": "-4.144"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 611,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 798,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Zilara",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 291
    },
    "PrimaryContactInfo": {
        "firstName": "Cindie",
        "lastName": "Chavez",
        "phoneNumber": "+1-418-710-4648",
        "email": "cchavez@Oi.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7449 Winding Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "San Jose",
        "stateProvince": "CA",
        "locality": "Santa Clara",
        "country": "US",
        "postalCode": "95117",
        "GeoSpatialInfo": {
            "Latitude": "37.3108",
            "Longitude": "-121.9623"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 448,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 61,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Even",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 829
    },
    "PrimaryContactInfo": {
        "firstName": "Richie",
        "lastName": "Wright",
        "phoneNumber": "+880-419-583-4060",
        "email": "rwright@Oi.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rwright"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rwright"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rwright"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rwright"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rwright"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2203 Green Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kamalpur",
        "stateProvince": "Dhamrai",
        "locality": "Dhaka",
        "country": "BD",
        "postalCode": "1351",
        "GeoSpatialInfo": {
            "Latitude": "23.9994",
            "Longitude": "90.8099"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 218,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 797,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Getaway Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 2615
    },
    "PrimaryContactInfo": {
        "firstName": "Tammie",
        "lastName": "Ramirez",
        "phoneNumber": "+1-420-886-4902",
        "email": "tramirez@UI.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tramirez"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1458 Short Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "00",
        "city": "Wishek",
        "stateProvince": "ND",
        "locality": "McIntosh",
        "country": "US",
        "postalCode": "58495",
        "GeoSpatialInfo": {
            "Latitude": "46.1917",
            "Longitude": "-99.6131"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 592,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 428,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jin Jiang Hotels",
        "propertyType": "motel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 1615
    },
    "PrimaryContactInfo": {
        "firstName": "Mariano",
        "lastName": "Cox",
        "phoneNumber": "+880-421-017-3201",
        "email": "mcox@CUBENet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mcox"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mcox"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5876 Short Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dhania TSO",
        "stateProvince": "Jatrabari",
        "locality": "Dhaka",
        "country": "BD",
        "postalCode": "1232",
        "GeoSpatialInfo": {
            "Latitude": "23.7117",
            "Longitude": "90.4463"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 861,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 167,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 1960
    },
    "PrimaryContactInfo": {
        "firstName": "Britt",
        "lastName": "Schroeder",
        "phoneNumber": "+1-422-783-5496",
        "email": "bschroed@Rogers.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6028 Big Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fall River",
        "stateProvince": "MA",
        "locality": "Bristol",
        "country": "US",
        "postalCode": "02722",
        "GeoSpatialInfo": {
            "Latitude": "41.7015",
            "Longitude": "-71.155"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 722,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 896,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 704,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cozy Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 3188
    },
    "PrimaryContactInfo": {
        "firstName": "Viki",
        "lastName": "Poole",
        "phoneNumber": "+594-423-732-9719",
        "email": "vpoole@Movil.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1997 Winding Bend Way",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Maripasoula",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97370",
        "GeoSpatialInfo": {
            "Latitude": "3.6416",
            "Longitude": "-54.0317"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 574,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 901,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Clarion",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 2077
    },
    "PrimaryContactInfo": {
        "firstName": "Eleni",
        "lastName": "Parsons",
        "phoneNumber": "+91-424-723-0433",
        "email": "eparsons@APICnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/eparsons"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/eparsons"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/eparsons"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5928 Short Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Baksanda",
        "stateProvince": "Chapra",
        "locality": "Saran",
        "country": "IN",
        "postalCode": "841219",
        "GeoSpatialInfo": {
            "Latitude": "25.8909",
            "Longitude": "84.9992"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 551,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 102,
            "bedType": [
                "double",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 735,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 468,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Conrad Hotels",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 740
    },
    "PrimaryContactInfo": {
        "firstName": "Eldridge",
        "lastName": "Villa",
        "phoneNumber": "+54-425-816-8494",
        "email": "evilla@OpenWorld.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/evilla"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/evilla"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1632 Long Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "PERGAMINO ESTAFETA N\u00ba7",
        "stateProvince": "B",
        "locality": "Buenos Aires",
        "country": "AR",
        "postalCode": "2700",
        "GeoSpatialInfo": {
            "Latitude": "-33.9023",
            "Longitude": "-60.5473"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 240,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 279,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 1417
    },
    "PrimaryContactInfo": {
        "firstName": "Lourie",
        "lastName": "Kaur",
        "phoneNumber": "+61-426-048-9870",
        "email": "lkaur@Orange.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lkaur"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8017 Little Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "46",
        "city": "Charles Darwin University",
        "stateProvince": "NT",
        "locality": "DARWIN",
        "country": "AU",
        "postalCode": "0909",
        "GeoSpatialInfo": {
            "Latitude": "-12.3731",
            "Longitude": "130.8681"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 43,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 922,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 4205
    },
    "PrimaryContactInfo": {
        "firstName": "Perry",
        "lastName": "Huerta",
        "phoneNumber": "+441624-427-456-0870",
        "email": "phuerta@Orange.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/phuerta"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5110 Big Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Foxdale",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM4",
        "GeoSpatialInfo": {
            "Latitude": "54.1929",
            "Longitude": "-4.4832"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 514,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 761,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 612
    },
    "PrimaryContactInfo": {
        "firstName": "Corene",
        "lastName": "Golden",
        "phoneNumber": "+91-428-515-5787",
        "email": "cgolden@Optus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cgolden"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cgolden"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cgolden"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cgolden"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1505 Red Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Srirampur",
        "stateProvince": "Ranpur",
        "locality": "Nayagarh",
        "country": "IN",
        "postalCode": "752084",
        "GeoSpatialInfo": {
            "Latitude": "20.3402",
            "Longitude": "84.8472"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 816,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 363,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 223,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 201
    },
    "PrimaryContactInfo": {
        "firstName": "Roberto",
        "lastName": "Kent",
        "phoneNumber": "+31-429-939-7162",
        "email": "rkent@MaxComm.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rkent"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rkent"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rkent"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5403 Red Gully Road",
        "buildingName": "Building E5",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Spijk",
        "stateProvince": "Lingewaal",
        "locality": "Lingewaal",
        "country": "NL",
        "postalCode": "4211",
        "GeoSpatialInfo": {
            "Latitude": "51.8558",
            "Longitude": "5.0125"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 593,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Joie de Vivre",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 609
    },
    "PrimaryContactInfo": {
        "firstName": "Leonila",
        "lastName": "Odom",
        "phoneNumber": "+61-430-113-5400",
        "email": "lodom@CUBENet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lodom"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lodom"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7836 Green Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Torrington",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4350",
        "GeoSpatialInfo": {
            "Latitude": "-27.5424",
            "Longitude": "151.8879"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 425,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 407,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Extended Stay Hotel",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 1223
    },
    "PrimaryContactInfo": {
        "firstName": "Bernie",
        "lastName": "Enriquez",
        "phoneNumber": "+354-431-892-4103",
        "email": "benrique@Swisscom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/benrique"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "427 Red Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Vestmannaeyjum",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "902",
        "GeoSpatialInfo": {
            "Latitude": "63.4406",
            "Longitude": "-20.267"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 66,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Amazing Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 4722
    },
    "PrimaryContactInfo": {
        "firstName": "Valentin",
        "lastName": "Miller",
        "phoneNumber": "+61-432-390-7348",
        "email": "vmiller@Telkom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9212 Short Bough Boulevard",
        "buildingName": null,
        "floor": 12,
        "roomApartmentCondoNumber": "FC",
        "city": "Faulconbridge",
        "stateProvince": "NSW",
        "locality": "PENRITH",
        "country": "AU",
        "postalCode": "2776",
        "GeoSpatialInfo": {
            "Latitude": "-33.7",
            "Longitude": "150.5333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 344,
            "bedType": [
                "single",
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 198,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 592,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Best Western Premier",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 4451
    },
    "PrimaryContactInfo": {
        "firstName": "Lauren",
        "lastName": "Ford",
        "phoneNumber": "+1441-433-590-6303",
        "email": "lford@cerist.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lford"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8272 Short Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pembroke",
        "stateProvince": "Pembroke Parish",
        "locality": "Pembroke Parish",
        "country": "BM",
        "postalCode": "HM 13",
        "GeoSpatialInfo": {
            "Latitude": "32.3002",
            "Longitude": "-64.792"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 201,
            "bedType": [
                "queen",
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 791,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 374,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 723,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt House",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 1785
    },
    "PrimaryContactInfo": {
        "firstName": "Peggy",
        "lastName": "Oneal",
        "phoneNumber": "+44-434-445-4589",
        "email": "poneal@Econnect.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9606 Winding Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rhyd-Ddu",
        "stateProvince": "Wales",
        "locality": "Gwynedd",
        "country": "GB",
        "postalCode": "LL55",
        "GeoSpatialInfo": {
            "Latitude": "53.1339",
            "Longitude": "-4.2049"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 396,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 764,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 511,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 913,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 2897
    },
    "PrimaryContactInfo": {
        "firstName": "Bunny",
        "lastName": "Brooks",
        "phoneNumber": "+35818-435-843-4851",
        "email": "bbrooks@LGUplus.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bbrooks"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bbrooks"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7843 Big Stream Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Br\u00e4nd\u00f6",
        "stateProvince": "Br\u00e4nd\u00f6",
        "locality": "Br\u00e4nd\u00f6",
        "country": "AX",
        "postalCode": "22920",
        "GeoSpatialInfo": {
            "Latitude": "60.4138",
            "Longitude": "21.039"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 181,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Gateway",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 105
    },
    "PrimaryContactInfo": {
        "firstName": "Kent",
        "lastName": "Villarreal",
        "phoneNumber": "+91-436-328-9644",
        "email": "kvillarr@Telekom.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kvillarr"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3260 Big Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Aghar",
        "stateProvince": "Patan",
        "locality": "Patan",
        "country": "IN",
        "postalCode": "384265",
        "GeoSpatialInfo": {
            "Latitude": "23.5533",
            "Longitude": "73.0004"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 751,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 4092
    },
    "PrimaryContactInfo": {
        "firstName": "Piper",
        "lastName": "Wolf",
        "phoneNumber": "+39-437-581-2136",
        "email": "pwolf@LGUplus.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/pwolf"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1588 Short River Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Polla",
        "stateProvince": "CM",
        "locality": "Salerno",
        "country": "IT",
        "postalCode": "84035",
        "GeoSpatialInfo": {
            "Latitude": "40.5143",
            "Longitude": "15.4971"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 884,
            "bedType": [
                "king",
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 523
    },
    "PrimaryContactInfo": {
        "firstName": "Alphonse",
        "lastName": "Cortes",
        "phoneNumber": "+1-438-432-5575",
        "email": "acortes@KDDI.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/acortes"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "763 Green Bough Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "50",
        "city": "Senneville",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H9K",
        "GeoSpatialInfo": {
            "Latitude": "45.4577",
            "Longitude": "-73.9162"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 230,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Kimpton Regent",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 4603
    },
    "PrimaryContactInfo": {
        "firstName": "Elroy",
        "lastName": "Ali",
        "phoneNumber": "+370-439-148-8164",
        "email": "eali@Frontier.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7459 Big Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Adomaiti\u0161k\u0117s k.",
        "stateProvince": "Jurbarko r. sav.",
        "locality": "Jurbarko r. sav.",
        "country": "LT",
        "postalCode": "74057",
        "GeoSpatialInfo": {
            "Latitude": "55.1",
            "Longitude": "23.1333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 771,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 541,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 317,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Passport Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 3828
    },
    "PrimaryContactInfo": {
        "firstName": "Elijah",
        "lastName": "Schroeder",
        "phoneNumber": "+44-440-031-9079",
        "email": "eschroed@Airtel.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/eschroed"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3269 Green Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wymering",
        "stateProvince": "England",
        "locality": "Hampshire",
        "country": "GB",
        "postalCode": "PO6",
        "GeoSpatialInfo": {
            "Latitude": "50.8505",
            "Longitude": "-1.0755"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 482,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 369
    },
    "PrimaryContactInfo": {
        "firstName": "Chris",
        "lastName": "Jensen",
        "phoneNumber": "+880-441-844-9816",
        "email": "cjensen@SKTelecom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cjensen"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cjensen"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cjensen"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cjensen"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3986 Winding Mound Ride",
        "buildingName": null,
        "floor": 12,
        "roomApartmentCondoNumber": null,
        "city": "Patharail",
        "stateProvince": "Delduar",
        "locality": "Tangail",
        "country": "BD",
        "postalCode": "1912",
        "GeoSpatialInfo": {
            "Latitude": "23.8667",
            "Longitude": "89.95"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 964,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 975,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "The Luxury Collection",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 479
    },
    "PrimaryContactInfo": {
        "firstName": "Jovan",
        "lastName": "Underwood",
        "phoneNumber": "+44-442-143-1274",
        "email": "junderwo@PLDT.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/junderwo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2709 Little Mound Road",
        "buildingName": "Building DE",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Stifford's Bridge",
        "stateProvince": "England",
        "locality": "Worcestershire",
        "country": "GB",
        "postalCode": "WR13",
        "GeoSpatialInfo": {
            "Latitude": "52.0923",
            "Longitude": "-2.3356"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 944,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 679,
            "bedType": [
                "queen",
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 214,
            "bedType": [
                "queen",
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 975,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 4696
    },
    "PrimaryContactInfo": {
        "firstName": "Rosalva",
        "lastName": "Horton",
        "phoneNumber": "+47-443-466-6257",
        "email": "rhorton@Telecom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rhorton"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rhorton"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8898 Long Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ny-\u00c5lesund",
        "stateProvince": "Spitsbergen",
        "locality": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9173",
        "GeoSpatialInfo": {
            "Latitude": "78.9237",
            "Longitude": "11.925"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 204,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 628,
            "bedType": [
                "single",
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 3129
    },
    "PrimaryContactInfo": {
        "firstName": "Angelia",
        "lastName": "Shelton",
        "phoneNumber": "+44-444-215-2112",
        "email": "ashelton@Telkom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3961 Little Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "D3",
        "city": "Asgarby",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "NG34",
        "GeoSpatialInfo": {
            "Latitude": "52.9991",
            "Longitude": "-0.3348"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 697,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 372,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 461,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "RL Knights Inn",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 4844
    },
    "PrimaryContactInfo": {
        "firstName": "Quinn",
        "lastName": "Frank",
        "phoneNumber": "+41-445-122-6707",
        "email": "qfrank@TeleSystems.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/qfrank"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/qfrank"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7544 Long Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Finsterhennen",
        "stateProvince": "BE",
        "locality": "Seeland District",
        "country": "CH",
        "postalCode": "2577",
        "GeoSpatialInfo": {
            "Latitude": "47.0248",
            "Longitude": "7.1754"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 624,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 505,
            "bedType": [
                "double",
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 812,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Traders Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 1305
    },
    "PrimaryContactInfo": {
        "firstName": "Cathie",
        "lastName": "Richardson",
        "phoneNumber": "+1-446-786-1276",
        "email": "crichard@Vivendi.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/crichard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1364 Long Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Alliston",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "L9R",
        "GeoSpatialInfo": {
            "Latitude": "44.1501",
            "Longitude": "-79.8663"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 826,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 425,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 1368
    },
    "PrimaryContactInfo": {
        "firstName": "Azucena",
        "lastName": "Coffey",
        "phoneNumber": "+90-447-732-7288",
        "email": "acoffey@GlasNET.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/acoffey"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/acoffey"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7624 Blue Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "M\u00fcsellim",
        "stateProvince": "Muratli",
        "locality": "Muratli",
        "country": "TR",
        "postalCode": "59700",
        "GeoSpatialInfo": {
            "Latitude": "41.1226",
            "Longitude": "27.5449"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 610,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 310,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Scottish Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 2238
    },
    "PrimaryContactInfo": {
        "firstName": "Coralee",
        "lastName": "Mullen",
        "phoneNumber": "+91-448-498-5037",
        "email": "cmullen@Econnect.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cmullen"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cmullen"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cmullen"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cmullen"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8707 Blue Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Velgonda",
        "stateProvince": "Veepangandla",
        "locality": "Mahabub Nagar",
        "country": "IN",
        "postalCode": "509105",
        "GeoSpatialInfo": {
            "Latitude": "16.3435",
            "Longitude": "78.2022"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 884,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 66,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 869,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 4857
    },
    "PrimaryContactInfo": {
        "firstName": "Alexis",
        "lastName": "Cross",
        "phoneNumber": "+49-449-006-8212",
        "email": "across@Zain.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/across"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/across"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/across"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/across"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1727 Winding Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oberirsen",
        "stateProvince": "RP",
        "locality": "Landkreis Altenkirchen",
        "country": "DE",
        "postalCode": "57635",
        "GeoSpatialInfo": {
            "Latitude": "50.7167",
            "Longitude": "7.5833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 720,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 386,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 965,
            "bedType": [
                "single",
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quiet Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 779
    },
    "PrimaryContactInfo": {
        "firstName": "Evan",
        "lastName": "Mcintyre",
        "phoneNumber": "+1-450-256-0829",
        "email": "emcintyr@Vodafone.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9631 Little Tree Drive",
        "buildingName": null,
        "floor": 7,
        "roomApartmentCondoNumber": "3D",
        "city": "Sylvania",
        "stateProvince": "PA",
        "locality": "Bradford",
        "country": "US",
        "postalCode": "16945",
        "GeoSpatialInfo": {
            "Latitude": "41.8051",
            "Longitude": "-76.8569"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 978,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 589,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ginger",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 3158
    },
    "PrimaryContactInfo": {
        "firstName": "Kasey",
        "lastName": "Weaver",
        "phoneNumber": "+1787-451-064-3753",
        "email": "kweaver@Orange.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kweaver"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7460 Blue Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Isabela",
        "stateProvince": "Isabela",
        "locality": "Isabela",
        "country": "PR",
        "postalCode": "00662",
        "GeoSpatialInfo": {
            "Latitude": "18.5008",
            "Longitude": "-67.0243"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 246,
            "bedType": [
                "king",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 73,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 194
    },
    "PrimaryContactInfo": {
        "firstName": "Chad",
        "lastName": "Patrick",
        "phoneNumber": "+1-452-102-9555",
        "email": "cpatrick@Telkom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3148 Blue Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Napoleonville",
        "stateProvince": "LA",
        "locality": "Assumption",
        "country": "US",
        "postalCode": "70390",
        "GeoSpatialInfo": {
            "Latitude": "29.9288",
            "Longitude": "-91.0266"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 485,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 260,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 554,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 2477
    },
    "PrimaryContactInfo": {
        "firstName": "Marvel",
        "lastName": "Booth",
        "phoneNumber": "+687-453-748-4147",
        "email": "mbooth@UUnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mbooth"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mbooth"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9763 Big Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Touho",
        "stateProvince": "Touho",
        "locality": "Touho",
        "country": "NC",
        "postalCode": "98831",
        "GeoSpatialInfo": {
            "Latitude": "-20.786",
            "Longitude": "165.2423"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 747,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 608,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 513
    },
    "PrimaryContactInfo": {
        "firstName": "Katlyn",
        "lastName": "Gilbert",
        "phoneNumber": "+61-454-990-4255",
        "email": "kgilbert@OpenWorld.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kgilbert"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kgilbert"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6193 Blue River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Coffs Harbour Jetty",
        "stateProvince": "NSW",
        "locality": "NSW NORTH COAST",
        "country": "AU",
        "postalCode": "2450",
        "GeoSpatialInfo": {
            "Latitude": "-30.0947",
            "Longitude": "152.6671"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 202,
            "bedType": [
                "queen",
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Passport Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 4697
    },
    "PrimaryContactInfo": {
        "firstName": "Desmond",
        "lastName": "Bender",
        "phoneNumber": "+60-455-721-2488",
        "email": "dbender@SEEDnet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dbender"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dbender"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dbender"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5141 Blue Mound Drive",
        "buildingName": "Building 1F",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Marang",
        "stateProvince": "TRG",
        "locality": "Terengganu",
        "country": "MY",
        "postalCode": "21600",
        "GeoSpatialInfo": {
            "Latitude": "5.2424",
            "Longitude": "103.126"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 648,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 385
    },
    "PrimaryContactInfo": {
        "firstName": "Andrea",
        "lastName": "Garza",
        "phoneNumber": "+44-456-940-5952",
        "email": "agarza@CCS.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/agarza"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/agarza"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7855 Long Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "D0",
        "city": "Hepscott",
        "stateProvince": "England",
        "locality": "Northumberland",
        "country": "GB",
        "postalCode": "NE61",
        "GeoSpatialInfo": {
            "Latitude": "55.1498",
            "Longitude": "-1.6477"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 399,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 368,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Holiday Inn Express",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1923
    },
    "PrimaryContactInfo": {
        "firstName": "Dania",
        "lastName": "Mckenzie",
        "phoneNumber": "+371-457-820-4784",
        "email": "dmckenzi@MaxComm.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9272 Long Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jaunsaurie\u0161i",
        "stateProvince": "C3",
        "locality": "Salaspils pag.",
        "country": "LV",
        "postalCode": "LV-2118",
        "GeoSpatialInfo": {
            "Latitude": "56.9262",
            "Longitude": "24.377"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 578,
            "bedType": [
                "single",
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ascend Collection",
        "propertyType": "hotel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 548
    },
    "PrimaryContactInfo": {
        "firstName": "Darline",
        "lastName": "Russo",
        "phoneNumber": "+91-458-986-3874",
        "email": "drusso@Telus.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4692 Winding Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kadoli",
        "stateProvince": "Sengaon",
        "locality": "Hingoli",
        "country": "IN",
        "postalCode": "431703",
        "GeoSpatialInfo": {
            "Latitude": "20.9122",
            "Longitude": "77.0168"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 747,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 2322
    },
    "PrimaryContactInfo": {
        "firstName": "Dylan",
        "lastName": "Townsend",
        "phoneNumber": "+359-459-556-6992",
        "email": "dtownsen@CCS.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "15 Big Creek Avenue",
        "buildingName": null,
        "floor": 11,
        "roomApartmentCondoNumber": null,
        "city": "\u0410\u043d\u0442\u0438\u043c\u043e\u0432\u043e \/ Antimovo",
        "stateProvince": "SLS",
        "locality": "\u0422\u0443\u0442\u0440\u0430\u043a\u0430\u043d \/ Tutrakan",
        "country": "BG",
        "postalCode": "7628",
        "GeoSpatialInfo": {
            "Latitude": "43.9833",
            "Longitude": "26.6833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 522,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 384,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Wingate",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 4940
    },
    "PrimaryContactInfo": {
        "firstName": "Rich",
        "lastName": "Cardenas",
        "phoneNumber": "+91-460-364-0883",
        "email": "rcardena@Airtel.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rcardena"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8601 Big Tree Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Manko",
        "stateProvince": "Bisra",
        "locality": "Sundergarh",
        "country": "IN",
        "postalCode": "770037",
        "GeoSpatialInfo": {
            "Latitude": "21.8597",
            "Longitude": "84.7472"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 633,
            "bedType": [
                "queen",
                "double",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Moxy Hotels",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 419
    },
    "PrimaryContactInfo": {
        "firstName": "Yael",
        "lastName": "Thomas",
        "phoneNumber": "+7-461-191-9233",
        "email": "ythomas@GlasNET.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ythomas"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ythomas"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ythomas"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ythomas"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ythomas"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1837 Long Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0418\u0440\u0431\u0438\u0442 6",
        "stateProvince": "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
        "locality": "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
        "country": "RU",
        "postalCode": "623856",
        "GeoSpatialInfo": {
            "Latitude": "57.6757",
            "Longitude": "63.0362"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 372,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 906,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 4515
    },
    "PrimaryContactInfo": {
        "firstName": "Leeann",
        "lastName": "Chandler",
        "phoneNumber": "+44-462-407-2796",
        "email": "lchandle@Vodafone.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lchandle"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lchandle"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8189 Long Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "A2",
        "city": "Garshall Green",
        "stateProvince": "England",
        "locality": "Staffordshire",
        "country": "GB",
        "postalCode": "ST18",
        "GeoSpatialInfo": {
            "Latitude": "52.785",
            "Longitude": "-2.0683"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 857,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 565,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 293,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 442,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Super 8",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 3701
    },
    "PrimaryContactInfo": {
        "firstName": "Mitchell",
        "lastName": "Donaldson",
        "phoneNumber": "+91-464-701-9383",
        "email": "mdonalds@Chunghwa.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mdonalds"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7990 Green Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pegadapalli",
        "stateProvince": "Pegadapalli",
        "locality": "Karim Nagar",
        "country": "IN",
        "postalCode": "505532",
        "GeoSpatialInfo": {
            "Latitude": "18.7017",
            "Longitude": "79.0728"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 359,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 937,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 797,
            "bedType": [
                "queen",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Lakeside Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 1581
    },
    "PrimaryContactInfo": {
        "firstName": "Francina",
        "lastName": "Russell",
        "phoneNumber": "+389-465-504-1206",
        "email": "frussell@Airtel.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "5197 Red Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Izvor",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1414",
        "GeoSpatialInfo": {
            "Latitude": "41.5547",
            "Longitude": "21.6972"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 301,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Master Host Inns",
        "propertyType": "hotel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 2901
    },
    "PrimaryContactInfo": {
        "firstName": "Mathew",
        "lastName": "Richardson",
        "phoneNumber": "+1-466-194-8667",
        "email": "mrichard@KDDI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mrichard"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mrichard"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mrichard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1191 Long Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint Elmo",
        "stateProvince": "AL",
        "locality": "Mobile",
        "country": "US",
        "postalCode": "36568",
        "GeoSpatialInfo": {
            "Latitude": "30.5035",
            "Longitude": "-88.2542"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 229,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 374,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "AmericInn",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2144
    },
    "PrimaryContactInfo": {
        "firstName": "Terrell",
        "lastName": "Barnett",
        "phoneNumber": "+36-467-822-6106",
        "email": "tbarnett@BCE.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4903 Short Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ny\u00edr\u00e1br\u00e1ny",
        "stateProvince": "HB",
        "locality": "Hajd\u00fa-Bihar",
        "country": "HU",
        "postalCode": "4264",
        "GeoSpatialInfo": {
            "Latitude": "47.55",
            "Longitude": "22.0333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 479,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 778,
            "bedType": [
                "single",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Take a Break Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 1804
    },
    "PrimaryContactInfo": {
        "firstName": "Bruno",
        "lastName": "Acevedo",
        "phoneNumber": "+1-468-444-0071",
        "email": "bacevedo@Telenor.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bacevedo"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bacevedo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5893 Short Ditch Avenue",
        "buildingName": "Building 22",
        "floor": 11,
        "roomApartmentCondoNumber": "1E",
        "city": "Zephyr Cove",
        "stateProvince": "NV",
        "locality": "Douglas",
        "country": "US",
        "postalCode": "89448",
        "GeoSpatialInfo": {
            "Latitude": "39.0204",
            "Longitude": "-119.9114"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 917,
            "bedType": [
                "double",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 589,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 957,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Styles",
        "propertyType": "motel",
        "propertyBrand": "Accor",
        "numberOfRooms": 1182
    },
    "PrimaryContactInfo": {
        "firstName": "Jewel",
        "lastName": "Evans",
        "phoneNumber": "+380-469-508-1962",
        "email": "jevans@SEEDnet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jevans"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7179 Winding Gully Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041a\u0432\u0456\u0442\u043a\u043e\u0432\u0435",
        "stateProvince": "Ivanivskyi",
        "locality": "Ivanivskyi",
        "country": "UA",
        "postalCode": "75424",
        "GeoSpatialInfo": {
            "Latitude": "46.6525",
            "Longitude": "34.3718"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 198,
            "bedType": [
                "queen",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 134,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 2845
    },
    "PrimaryContactInfo": {
        "firstName": "Frederick",
        "lastName": "Little",
        "phoneNumber": "+1-470-677-2570",
        "email": "flittle@NII.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/flittle"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/flittle"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1661 Short Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gretna",
        "stateProvince": "LA",
        "locality": "Jefferson Parish",
        "country": "US",
        "postalCode": "70054",
        "GeoSpatialInfo": {
            "Latitude": "29.9146",
            "Longitude": "-90.054"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 751,
            "bedType": [
                "double",
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Sleepy Lodge",
        "propertyType": "L",
        "propertyBrand": "",
        "numberOfRooms": 391
    },
    "PrimaryContactInfo": {
        "firstName": "Clinton",
        "lastName": "Houston",
        "phoneNumber": "+57-471-584-5882",
        "email": "chouston@Telenor.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/chouston"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/chouston"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3148 Little River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mercaderes",
        "stateProvince": "Mercaderes",
        "locality": "Mercaderes",
        "country": "CO",
        "postalCode": "195067",
        "GeoSpatialInfo": {
            "Latitude": "1.8017",
            "Longitude": "-77.1703"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 688,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 96,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "St. Regis",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3041
    },
    "PrimaryContactInfo": {
        "firstName": "Garth",
        "lastName": "David",
        "phoneNumber": "+44-472-051-8350",
        "email": "gdavid@Chunghwa.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/gdavid"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7920 Long Woods Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Alticry",
        "stateProvince": "Scotland",
        "locality": "Dumfries and Galloway",
        "country": "GB",
        "postalCode": "DG8",
        "GeoSpatialInfo": {
            "Latitude": "54.895",
            "Longitude": "-4.4794"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 398,
            "bedType": [
                "double",
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "ExecuStay",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3870
    },
    "PrimaryContactInfo": {
        "firstName": "Carol",
        "lastName": "Murray",
        "phoneNumber": "+1441-473-883-7360",
        "email": "cmurray@MaxComm.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cmurray"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7618 Red Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sandys",
        "stateProvince": "Sandys Parish",
        "locality": "Sandys Parish",
        "country": "BM",
        "postalCode": "MA 02",
        "GeoSpatialInfo": {
            "Latitude": "32.2934",
            "Longitude": "-64.8683"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 394,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 295,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 206,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 953
    },
    "PrimaryContactInfo": {
        "firstName": "Micheline",
        "lastName": "Rosario",
        "phoneNumber": "+1-474-354-1533",
        "email": "mrosario@Access.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mrosario"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6025 Long Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "F6",
        "city": "Winchester",
        "stateProvince": "NH",
        "locality": "Cheshire",
        "country": "US",
        "postalCode": "03470",
        "GeoSpatialInfo": {
            "Latitude": "42.7788",
            "Longitude": "-72.344"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 833,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 164,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 534,
            "bedType": [
                "queen",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Vib",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 195
    },
    "PrimaryContactInfo": {
        "firstName": "Gaynelle",
        "lastName": "Solomon",
        "phoneNumber": "+1809-475-911-7917",
        "email": "gsolomon@PTCL.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gsolomon"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gsolomon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7458 Long Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Reparto Samaria",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10702",
        "GeoSpatialInfo": {
            "Latitude": "19.15",
            "Longitude": "-70.2833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 715,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 983,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tommie",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 498
    },
    "PrimaryContactInfo": {
        "firstName": "Kristyn",
        "lastName": "Doyle",
        "phoneNumber": "+61-476-092-9908",
        "email": "kdoyle@KTC.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kdoyle"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kdoyle"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6788 Long Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Swan Bay",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7252",
        "GeoSpatialInfo": {
            "Latitude": "-41.1315",
            "Longitude": "147.01"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 199,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Restful Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 223
    },
    "PrimaryContactInfo": {
        "firstName": "Mauro",
        "lastName": "Acosta",
        "phoneNumber": "+441481-477-776-3394",
        "email": "macosta@Vivendi.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2588 Green River Road",
        "buildingName": null,
        "floor": 6,
        "roomApartmentCondoNumber": null,
        "city": "Sark",
        "stateProvince": "Channel Islands",
        "locality": "Channel Islands",
        "country": "GG",
        "postalCode": "GY10",
        "GeoSpatialInfo": {
            "Latitude": "49.71",
            "Longitude": "-2.2"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 829,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mama Shelter",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 4391
    },
    "PrimaryContactInfo": {
        "firstName": "Jerald",
        "lastName": "Gomez",
        "phoneNumber": "+1-478-890-9603",
        "email": "jgomez@Telenor.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jgomez"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "414 Little Mound Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Suburb Maryland Fac",
        "stateProvince": "MD",
        "locality": "Montgomery",
        "country": "US",
        "postalCode": "20897",
        "GeoSpatialInfo": {
            "Latitude": "39.144",
            "Longitude": "-77.2076"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 718,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Joie de Vivre",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 518
    },
    "PrimaryContactInfo": {
        "firstName": "Jamal",
        "lastName": "Reynolds",
        "phoneNumber": "+352-479-051-4216",
        "email": "jreynold@Chunghwa.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jreynold"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9963 Little Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wiltz",
        "stateProvince": "WI",
        "locality": "Wiltz",
        "country": "LU",
        "postalCode": "L-9513",
        "GeoSpatialInfo": {
            "Latitude": "49.97",
            "Longitude": "5.9375"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 477,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 281,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 4359
    },
    "PrimaryContactInfo": {
        "firstName": "Ulysses",
        "lastName": "Logan",
        "phoneNumber": "+44-480-213-5982",
        "email": "ulogan@Movil.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ulogan"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9558 Little Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "C7",
        "city": "Dunnabie",
        "stateProvince": "Scotland",
        "locality": "Dumfries and Galloway",
        "country": "GB",
        "postalCode": "DG11",
        "GeoSpatialInfo": {
            "Latitude": "55.0826",
            "Longitude": "-3.271"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 288,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 206,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tommie",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 153
    },
    "PrimaryContactInfo": {
        "firstName": "Thora",
        "lastName": "Phelps",
        "phoneNumber": "+44-482-209-5317",
        "email": "tphelps@UI.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tphelps"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tphelps"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1976 Blue Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Skares",
        "stateProvince": "Scotland",
        "locality": "East Ayrshire",
        "country": "GB",
        "postalCode": "KA18",
        "GeoSpatialInfo": {
            "Latitude": "55.4548",
            "Longitude": "-4.2245"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 515,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 518,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 638,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mountain Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 3630
    },
    "PrimaryContactInfo": {
        "firstName": "Emilio",
        "lastName": "Coffey",
        "phoneNumber": "+33-483-048-9440",
        "email": "ecoffey@SKTelecom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ecoffey"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5809 Short Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Denis-sur-Scie",
        "stateProvince": "Arrondissement de Dieppe",
        "locality": "Seine-Maritime",
        "country": "FR",
        "postalCode": "76890",
        "GeoSpatialInfo": {
            "Latitude": "49.7052",
            "Longitude": "1.0949"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 573,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Delta Design",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 4750
    },
    "PrimaryContactInfo": {
        "firstName": "Freddy",
        "lastName": "Banks",
        "phoneNumber": "+1-484-313-6767",
        "email": "fbanks@KPN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/fbanks"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/fbanks"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3878 Blue Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Central Alberta (Stettler)",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T0C",
        "GeoSpatialInfo": {
            "Latitude": "52.1431",
            "Longitude": "-111.6941"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 410,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 940,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 921,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nanyuan",
        "propertyType": "motel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 1131
    },
    "PrimaryContactInfo": {
        "firstName": "Gia",
        "lastName": "Waters",
        "phoneNumber": "+57-485-689-8288",
        "email": "gwaters@NTT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/gwaters"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/gwaters"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9744 Green Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cocorna",
        "stateProvince": "Cocorn\u00e1",
        "locality": "Cocorn\u00e1",
        "country": "CO",
        "postalCode": "054447",
        "GeoSpatialInfo": {
            "Latitude": "6.0573",
            "Longitude": "-75.1852"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 146,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Sleepy Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 4355
    },
    "PrimaryContactInfo": {
        "firstName": "Destiny",
        "lastName": "Hampton",
        "phoneNumber": "+1-486-715-4860",
        "email": "dhampton@TT.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dhampton"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6100 Blue Gulch Road",
        "buildingName": null,
        "floor": 6,
        "roomApartmentCondoNumber": "2D",
        "city": "Kentville",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B4N",
        "GeoSpatialInfo": {
            "Latitude": "45.0834",
            "Longitude": "-64.4988"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 420,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 625,
            "bedType": [
                "queen",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Passport Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 2805
    },
    "PrimaryContactInfo": {
        "firstName": "Blythe",
        "lastName": "Hines",
        "phoneNumber": "+90-487-246-0027",
        "email": "bhines@Telecom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bhines"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bhines"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bhines"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1011 Big Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ba\u015fak",
        "stateProvince": "Silopi",
        "locality": "Silopi",
        "country": "TR",
        "postalCode": "73400",
        "GeoSpatialInfo": {
            "Latitude": "37.2808",
            "Longitude": "42.465"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 822,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 147,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 892,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 785,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Metropolo Vienna",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 3271
    },
    "PrimaryContactInfo": {
        "firstName": "Debra",
        "lastName": "Mcclure",
        "phoneNumber": "+44-488-356-8474",
        "email": "dmcclure@Chunghwa.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7305 Big Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mauchline",
        "stateProvince": "Scotland",
        "locality": "East Ayrshire",
        "country": "GB",
        "postalCode": "KA5",
        "GeoSpatialInfo": {
            "Latitude": "55.516",
            "Longitude": "-4.3793"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 687,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 4379
    },
    "PrimaryContactInfo": {
        "firstName": "Rufus",
        "lastName": "Webb",
        "phoneNumber": "+356-489-441-1741",
        "email": "rwebb@PTCL.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rwebb"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rwebb"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rwebb"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7970 Little Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mtarfa",
        "stateProvince": "L-Imtarfa",
        "locality": "L-Imtarfa",
        "country": "MT",
        "postalCode": "MTF",
        "GeoSpatialInfo": {
            "Latitude": "35.8906",
            "Longitude": "14.3972"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 72,
            "bedType": [
                "king",
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 114,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 565,
            "bedType": [
                "double",
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tommie",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 4102
    },
    "PrimaryContactInfo": {
        "firstName": "Nancey",
        "lastName": "Cantrell",
        "phoneNumber": "+44-490-145-0178",
        "email": "ncantrel@PLDT.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ncantrel"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9951 Green Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Laneast",
        "stateProvince": "England",
        "locality": "Cornwall",
        "country": "GB",
        "postalCode": "PL15",
        "GeoSpatialInfo": {
            "Latitude": "50.6392",
            "Longitude": "-4.5026"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 774,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 990,
            "bedType": [
                "queen",
                "queen",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 636,
            "bedType": [
                "double",
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 463,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 1641
    },
    "PrimaryContactInfo": {
        "firstName": "Marcelene",
        "lastName": "Frederick",
        "phoneNumber": "+32-491-429-5182",
        "email": "mfrederi@NordNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mfrederi"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mfrederi"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4495 Blue Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Koksijde",
        "stateProvince": "VLG",
        "locality": "West-Vlaanderen",
        "country": "BE",
        "postalCode": "8670",
        "GeoSpatialInfo": {
            "Latitude": "51.1",
            "Longitude": "2.65"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 951,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 547,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 107,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 868,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3848
    },
    "PrimaryContactInfo": {
        "firstName": "Brigid",
        "lastName": "Estrada",
        "phoneNumber": "+1-492-063-8445",
        "email": "bestrada@GlasNET.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bestrada"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bestrada"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9763 Red Stream Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "78",
        "city": "Finland",
        "stateProvince": "MN",
        "locality": "Lake",
        "country": "US",
        "postalCode": "55603",
        "GeoSpatialInfo": {
            "Latitude": "47.4197",
            "Longitude": "-91.2096"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 499,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Downtowner Inns",
        "propertyType": "motel",
        "propertyBrand": "Hospitality International",
        "numberOfRooms": 1870
    },
    "PrimaryContactInfo": {
        "firstName": "Jessia",
        "lastName": "Perkins",
        "phoneNumber": "+596-493-470-5686",
        "email": "jperkins@AlgoNet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jperkins"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9946 Big Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Schoelcher",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97279 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "14.6177",
            "Longitude": "-61.099"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 48,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 642,
            "bedType": [
                "single",
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 212,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 70,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Glo",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 3601
    },
    "PrimaryContactInfo": {
        "firstName": "Randolph",
        "lastName": "Nichols",
        "phoneNumber": "+61-494-646-1145",
        "email": "rnichols@Telus.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4039 Green Mound Street",
        "buildingName": "Building 00",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sandsprings",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6532",
        "GeoSpatialInfo": {
            "Latitude": "-28.3989",
            "Longitude": "115.0313"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 382,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 248,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 126,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 288
    },
    "PrimaryContactInfo": {
        "firstName": "Corliss",
        "lastName": "Vargas",
        "phoneNumber": "+81-495-141-0983",
        "email": "cvargas@Rogers.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7553 Winding River Drive",
        "buildingName": null,
        "floor": 5,
        "roomApartmentCondoNumber": null,
        "city": "Nagasaki",
        "stateProvince": "Yamato Cho",
        "locality": "Kamimashiki Gun",
        "country": "JP",
        "postalCode": "861-3908",
        "GeoSpatialInfo": {
            "Latitude": "32.7023",
            "Longitude": "131.1714"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 578,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Adagio",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 1883
    },
    "PrimaryContactInfo": {
        "firstName": "Zelma",
        "lastName": "Anthony",
        "phoneNumber": "+44-496-836-9869",
        "email": "zanthony@MegaFon.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/zanthony"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2027 Short Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Duirinish",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "IV40",
        "GeoSpatialInfo": {
            "Latitude": "57.3182",
            "Longitude": "-5.6784"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 672,
            "bedType": [
                "double",
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 188,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 417,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "EDITION Hotels",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 2928
    },
    "PrimaryContactInfo": {
        "firstName": "Vincenzo",
        "lastName": "Hayden",
        "phoneNumber": "+299-497-486-8686",
        "email": "vhayden@Chunghwa.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vhayden"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vhayden"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/vhayden"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7433 Winding Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Alluitsup Paa",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3919",
        "GeoSpatialInfo": {
            "Latitude": "60.45",
            "Longitude": "-45.55"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 595,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 289,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 976,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 862,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Peaceful Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 3428
    },
    "PrimaryContactInfo": {
        "firstName": "Eugene",
        "lastName": "Guevara",
        "phoneNumber": "+91-498-009-0509",
        "email": "eguevara@UI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4101 Winding Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "AC",
        "city": "Sanchore",
        "stateProvince": "Sanchore",
        "locality": "Jalor",
        "country": "IN",
        "postalCode": "343041",
        "GeoSpatialInfo": {
            "Latitude": "24.7536",
            "Longitude": "71.7728"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 419,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 986,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Best Western Premier",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 85
    },
    "PrimaryContactInfo": {
        "firstName": "Jerrold",
        "lastName": "Patton",
        "phoneNumber": "+598-499-123-5031",
        "email": "jpatton@Relcom.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jpatton"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7981 Short Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sarandi Campana",
        "stateProvince": "Colonia",
        "locality": "Colonia",
        "country": "UY",
        "postalCode": "70800",
        "GeoSpatialInfo": {
            "Latitude": "-34.0361",
            "Longitude": "-57.9562"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 985,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 144,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Blu",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 1224
    },
    "PrimaryContactInfo": {
        "firstName": "Dyan",
        "lastName": "Pope",
        "phoneNumber": "+91-500-942-4130",
        "email": "dpope@Vodafone.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dpope"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4293 Little River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Diddige",
        "stateProvince": "NA",
        "locality": "Davangere",
        "country": "IN",
        "postalCode": "577513",
        "GeoSpatialInfo": {
            "Latitude": "14.5902",
            "Longitude": "76.1735"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 830,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 633,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Getaway Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 487
    },
    "PrimaryContactInfo": {
        "firstName": "Zachery",
        "lastName": "Weeks",
        "phoneNumber": "+91-501-232-8999",
        "email": "zweeks@UI.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/zweeks"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "57 Little Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rania Gobindapur",
        "stateProvince": "NA",
        "locality": "South 24 Parganas",
        "country": "IN",
        "postalCode": "743318",
        "GeoSpatialInfo": {
            "Latitude": "22.3885",
            "Longitude": "88.1156"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 731,
            "bedType": [
                "single",
                "king",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "JW Marriott",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3922
    },
    "PrimaryContactInfo": {
        "firstName": "Danna",
        "lastName": "Dunn",
        "phoneNumber": "+44-502-089-5271",
        "email": "ddunn@GreenNet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6012 Red Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chobham",
        "stateProvince": "England",
        "locality": "Surrey",
        "country": "GB",
        "postalCode": "GU24",
        "GeoSpatialInfo": {
            "Latitude": "51.3458",
            "Longitude": "-0.6046"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 410,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 994,
            "bedType": [
                "king",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hampton",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 675
    },
    "PrimaryContactInfo": {
        "firstName": "Herschel",
        "lastName": "Gaines",
        "phoneNumber": "+92-503-920-5164",
        "email": "hgaines@BCE.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/hgaines"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7461 Green Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shuntala",
        "stateProvince": "NWFP Peshawar",
        "locality": "NWFP Peshawar",
        "country": "PK",
        "postalCode": "18601",
        "GeoSpatialInfo": {
            "Latitude": "34.9714",
            "Longitude": "71.6664"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 516,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 873,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mountain Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 3426
    },
    "PrimaryContactInfo": {
        "firstName": "Aurore",
        "lastName": "Zhang",
        "phoneNumber": "+91-504-995-0409",
        "email": "azhang@Telekom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/azhang"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/azhang"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8511 Short Hill Circle",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": "5D",
        "city": "Khatbin Sahi",
        "stateProvince": "Cuttack Sadar",
        "locality": "Cuttack",
        "country": "IN",
        "postalCode": "753008",
        "GeoSpatialInfo": {
            "Latitude": "21.0295",
            "Longitude": "86.2171"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 648,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2293
    },
    "PrimaryContactInfo": {
        "firstName": "Claris",
        "lastName": "Dunn",
        "phoneNumber": "+880-505-842-5704",
        "email": "cdunn@MTN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cdunn"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cdunn"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cdunn"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "141 Long Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nagarbari SO",
        "stateProvince": "Kalihati",
        "locality": "Tangail",
        "country": "BD",
        "postalCode": "1976",
        "GeoSpatialInfo": {
            "Latitude": "24.3824",
            "Longitude": "90.0006"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 612,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 4226
    },
    "PrimaryContactInfo": {
        "firstName": "Delicia",
        "lastName": "Allen",
        "phoneNumber": "+1-506-258-0758",
        "email": "dallen@Millicom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dallen"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dallen"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5786 Red Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bogalusa",
        "stateProvince": "LA",
        "locality": "Washington",
        "country": "US",
        "postalCode": "70429",
        "GeoSpatialInfo": {
            "Latitude": "30.791",
            "Longitude": "-89.8487"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 762,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 847,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 1630
    },
    "PrimaryContactInfo": {
        "firstName": "Samuel",
        "lastName": "Perry",
        "phoneNumber": "+61-508-490-9569",
        "email": "sperry@Sprint.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sperry"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sperry"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4354 Long Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kapaldo",
        "stateProvince": "QLD",
        "locality": "BRIS CITY CNTRY",
        "country": "AU",
        "postalCode": "4630",
        "GeoSpatialInfo": {
            "Latitude": "-25.0425",
            "Longitude": "151.1353"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 489,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 795,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 657,
            "bedType": [
                "double",
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jianguo",
        "propertyType": "motel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 4578
    },
    "PrimaryContactInfo": {
        "firstName": "Valentine",
        "lastName": "Richardson",
        "phoneNumber": "+352-509-879-4459",
        "email": "vrichard@PLDT.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8291 Little Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oberkorn",
        "stateProvince": "ES",
        "locality": "Differdange",
        "country": "LU",
        "postalCode": "L-4540",
        "GeoSpatialInfo": {
            "Latitude": "49.5172",
            "Longitude": "5.8946"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 298,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 862,
            "bedType": [
                "single",
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Take a Break Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 2161
    },
    "PrimaryContactInfo": {
        "firstName": "Rufina",
        "lastName": "Adkins",
        "phoneNumber": "+1-510-109-1817",
        "email": "radkins@MaxComm.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/radkins"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/radkins"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5675 Short Hill Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "CE",
        "city": "Inkom",
        "stateProvince": "ID",
        "locality": "Bannock",
        "country": "US",
        "postalCode": "83245",
        "GeoSpatialInfo": {
            "Latitude": "42.7964",
            "Longitude": "-112.2465"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 976,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 818,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 351,
            "bedType": [
                "queen",
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Cambria Hotels & Suites",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 3818
    },
    "PrimaryContactInfo": {
        "firstName": "Leisa",
        "lastName": "Mccarty",
        "phoneNumber": "+378-511-191-3385",
        "email": "lmccarty@LGUplus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lmccarty"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lmccarty"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "765 Long Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Acquaviva",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47892",
        "GeoSpatialInfo": {
            "Latitude": "43.95",
            "Longitude": "12.4167"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 755,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 677,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ginger",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 2762
    },
    "PrimaryContactInfo": {
        "firstName": "Walker",
        "lastName": "Kirby",
        "phoneNumber": "+1-512-175-8755",
        "email": "wkirby@UI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/wkirby"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wkirby"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wkirby"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7112 Big River Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chelsea",
        "stateProvince": "QC",
        "locality": "Outaouais",
        "country": "CA",
        "postalCode": "J9B",
        "GeoSpatialInfo": {
            "Latitude": "45.5001",
            "Longitude": "-75.7827"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 207,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 626,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 4218
    },
    "PrimaryContactInfo": {
        "firstName": "Rose",
        "lastName": "Lang",
        "phoneNumber": "+60-513-553-8119",
        "email": "rlang@SKTelecom.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rlang"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8307 Short Hill Drive",
        "buildingName": null,
        "floor": 3,
        "roomApartmentCondoNumber": null,
        "city": "Lurah Bilut",
        "stateProvince": "PHG",
        "locality": "Pahang",
        "country": "MY",
        "postalCode": "28800",
        "GeoSpatialInfo": {
            "Latitude": "3.6623",
            "Longitude": "101.9202"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 286,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 189,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pullman",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 244
    },
    "PrimaryContactInfo": {
        "firstName": "Rolando",
        "lastName": "Randall",
        "phoneNumber": "+1-514-352-2431",
        "email": "rrandall@DaxNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rrandall"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rrandall"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rrandall"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2124 Green Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bowmanville West",
        "stateProvince": "ON",
        "locality": "Bowmanville",
        "country": "CA",
        "postalCode": "L1C",
        "GeoSpatialInfo": {
            "Latitude": "43.9714",
            "Longitude": "-78.7095"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 237,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 1177
    },
    "PrimaryContactInfo": {
        "firstName": "Lois",
        "lastName": "Buck",
        "phoneNumber": "+31-515-064-3696",
        "email": "lbuck@Vivendi.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lbuck"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "712 Big Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Zeist",
        "stateProvince": "Zeist",
        "locality": "Zeist",
        "country": "NL",
        "postalCode": "3707",
        "GeoSpatialInfo": {
            "Latitude": "52.095",
            "Longitude": "5.2545"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 512,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 471,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Take a Break Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 1137
    },
    "PrimaryContactInfo": {
        "firstName": "Coral",
        "lastName": "Carlson",
        "phoneNumber": "+61-516-352-1228",
        "email": "ccarlson@Zain.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ccarlson"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ccarlson"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9879 Little Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E1",
        "city": "Upper Mount Gravatt",
        "stateProvince": "QLD",
        "locality": "UNDERWOOD SOUTH",
        "country": "AU",
        "postalCode": "4122",
        "GeoSpatialInfo": {
            "Latitude": "-27.5613",
            "Longitude": "153.0845"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 538,
            "bedType": [
                "double",
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel JAL",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 859
    },
    "PrimaryContactInfo": {
        "firstName": "Exie",
        "lastName": "Randolph",
        "phoneNumber": "+594-517-119-0827",
        "email": "erandolp@Vivendi.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/erandolp"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/erandolp"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "788 Short Bend Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "R\u00e9gina",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97353",
        "GeoSpatialInfo": {
            "Latitude": "4.313",
            "Longitude": "-52.1308"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 203,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 930,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "InterContinental",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1255
    },
    "PrimaryContactInfo": {
        "firstName": "Augustine",
        "lastName": "Lamb",
        "phoneNumber": "+1-518-924-5553",
        "email": "alamb@TeleSystems.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1709 Big Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Calgary Northeast",
        "stateProvince": "AB",
        "locality": "Calgary",
        "country": "CA",
        "postalCode": "T3N",
        "GeoSpatialInfo": {
            "Latitude": "51.1626",
            "Longitude": "-113.9537"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 172,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 97,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Voyage Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 2458
    },
    "PrimaryContactInfo": {
        "firstName": "Pat",
        "lastName": "Cardenas",
        "phoneNumber": "+45-519-569-6481",
        "email": "pcardena@TeleSystems.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/pcardena"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "106 Red Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "K\u00f8benhavn K",
        "stateProvince": "K\u00f8benhavns Kommune",
        "locality": "K\u00f8benhavns Kommune",
        "country": "DK",
        "postalCode": "1423",
        "GeoSpatialInfo": {
            "Latitude": "55.6759",
            "Longitude": "12.5655"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 315,
            "bedType": [
                "double",
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 299,
            "bedType": [
                "king",
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Crowne Plaza",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 2987
    },
    "PrimaryContactInfo": {
        "firstName": "Adena",
        "lastName": "Bradshaw",
        "phoneNumber": "+1-520-897-3419",
        "email": "abradsha@PLDT.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6616 Big Bend Way",
        "buildingName": "Building 65",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hauppauge",
        "stateProvince": "NY",
        "locality": "Suffolk",
        "country": "US",
        "postalCode": "11788",
        "GeoSpatialInfo": {
            "Latitude": "40.8231",
            "Longitude": "-73.1958"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 131,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 125,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Settle Inn",
        "propertyType": "motel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 2746
    },
    "PrimaryContactInfo": {
        "firstName": "Fred",
        "lastName": "Conley",
        "phoneNumber": "+7-521-058-1523",
        "email": "fconley@Rogers.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/fconley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4222 Little Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041e\u0440\u0435\u0445\u043e\u0432\u0430\u044f \u0413\u043e\u0440\u0430",
        "stateProvince": "\u0427\u0415\u0420\u041d\u0423\u0428\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0427\u0415\u0420\u041d\u0423\u0428\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "617825",
        "GeoSpatialInfo": {
            "Latitude": "56.4747",
            "Longitude": "56.3244"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 873,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 480,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 4117
    },
    "PrimaryContactInfo": {
        "firstName": "Francis",
        "lastName": "Moon",
        "phoneNumber": "+91-522-965-4569",
        "email": "fmoon@EUnet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/fmoon"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5645 Long Tree Avenue",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": "8D",
        "city": "Jelana",
        "stateProvince": "Vav",
        "locality": "Banaskantha",
        "country": "IN",
        "postalCode": "385575",
        "GeoSpatialInfo": {
            "Latitude": "24.2266",
            "Longitude": "71.2601"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 915,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 441,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 842,
            "bedType": [
                "double",
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 4674
    },
    "PrimaryContactInfo": {
        "firstName": "Blake",
        "lastName": "Blankenship",
        "phoneNumber": "+590-523-391-6228",
        "email": "bblanken@CCI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9194 Little Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jarry",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97191 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "16.2359",
            "Longitude": "-61.558"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 84,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 557,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Red",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 4995
    },
    "PrimaryContactInfo": {
        "firstName": "Jaquelyn",
        "lastName": "Doyle",
        "phoneNumber": "+1-524-236-6599",
        "email": "jdoyle@Optus.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jdoyle"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4899 Red Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Richmond North",
        "stateProvince": "BC",
        "locality": "Richmond",
        "country": "CA",
        "postalCode": "V6X",
        "GeoSpatialInfo": {
            "Latitude": "49.1836",
            "Longitude": "-123.1168"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 741,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 50,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 797,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Serviced Apartments",
        "propertyType": "SAPT",
        "propertyBrand": "",
        "numberOfRooms": 4362
    },
    "PrimaryContactInfo": {
        "firstName": "Ingrid",
        "lastName": "Reynolds",
        "phoneNumber": "+692-525-106-8876",
        "email": "ireynold@PLDT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ireynold"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ireynold"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1647 Red Bend Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "GeoSpatialInfo": {
            "Latitude": "11.1405",
            "Longitude": "166.4103"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 919,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Staybridge Suites",
        "propertyType": "hotel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 4467
    },
    "PrimaryContactInfo": {
        "firstName": "Brain",
        "lastName": "Rios",
        "phoneNumber": "+61-526-513-9274",
        "email": "brios@Vivendi.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8299 Blue Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Boogan",
        "stateProvince": "QLD",
        "locality": "NORTH QLD",
        "country": "AU",
        "postalCode": "4871",
        "GeoSpatialInfo": {
            "Latitude": "-17.6111",
            "Longitude": "146.0133"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 842,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Ascend Collection",
        "propertyType": "motel",
        "propertyBrand": "Choice Hotels",
        "numberOfRooms": 2981
    },
    "PrimaryContactInfo": {
        "firstName": "Abel",
        "lastName": "Allison",
        "phoneNumber": "+371-527-924-6357",
        "email": "aallison@BCE.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/aallison"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4710 Little River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Opi\u0146ki",
        "stateProvince": "Nautr\u0113nu pag.",
        "locality": "Nautr\u0113nu pag.",
        "country": "LV",
        "postalCode": "LV-4652",
        "GeoSpatialInfo": {
            "Latitude": "56.71",
            "Longitude": "27.3496"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 399,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 424,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 2974
    },
    "PrimaryContactInfo": {
        "firstName": "Cleveland",
        "lastName": "Hammond",
        "phoneNumber": "+91-528-468-7668",
        "email": "chammond@BCE.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/chammond"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1315 Winding Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "75",
        "city": "Pachhapur",
        "stateProvince": "Hukeri",
        "locality": "Belgaum",
        "country": "IN",
        "postalCode": "591122",
        "GeoSpatialInfo": {
            "Latitude": "16.0955",
            "Longitude": "74.6875"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 189,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Staybridge Suites",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 4293
    },
    "PrimaryContactInfo": {
        "firstName": "Daniel",
        "lastName": "Campbell",
        "phoneNumber": "+352-529-835-8140",
        "email": "dcampbel@Zain.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dcampbel"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9833 Short Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Garnich",
        "stateProvince": "CA",
        "locality": "Garnich",
        "country": "LU",
        "postalCode": "L-8355",
        "GeoSpatialInfo": {
            "Latitude": "49.6133",
            "Longitude": "5.9528"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 556,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 116,
            "bedType": [
                "queen",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 547,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Suite Novotel",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 2158
    },
    "PrimaryContactInfo": {
        "firstName": "Louis",
        "lastName": "Hines",
        "phoneNumber": "+1-530-825-8313",
        "email": "lhines@NTT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lhines"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lhines"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2428 Big Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Campbellton",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E3N",
        "GeoSpatialInfo": {
            "Latitude": "48.0075",
            "Longitude": "-66.6727"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 501,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 704,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Castle Bed And Breakfast",
        "propertyType": "BB",
        "propertyBrand": "",
        "numberOfRooms": 406
    },
    "PrimaryContactInfo": {
        "firstName": "Marceline",
        "lastName": "Morrow",
        "phoneNumber": "+692-531-200-8470",
        "email": "mmorrow@Telefonica.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mmorrow"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6948 Red Ridge Circle",
        "buildingName": null,
        "floor": 13,
        "roomApartmentCondoNumber": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "GeoSpatialInfo": {
            "Latitude": "11.1405",
            "Longitude": "166.4103"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 89,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 463,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Park Hyatt",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 2209
    },
    "PrimaryContactInfo": {
        "firstName": "Hong",
        "lastName": "Small",
        "phoneNumber": "+61-532-072-8750",
        "email": "hsmall@Zain.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hsmall"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/hsmall"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1990 Little Bend Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bugle Ranges",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5251",
        "GeoSpatialInfo": {
            "Latitude": "-35.1327",
            "Longitude": "138.8716"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 700,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 889,
            "bedType": [
                "queen",
                "queen",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 442,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Candlewood Suites",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 4558
    },
    "PrimaryContactInfo": {
        "firstName": "Christian",
        "lastName": "Garrett",
        "phoneNumber": "+213-533-821-3661",
        "email": "cgarrett@KTC.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cgarrett"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7679 Green Ditch Drive",
        "buildingName": "Building 77",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ksiba",
        "stateProvince": "Adrar",
        "locality": "Adrar",
        "country": "DZ",
        "postalCode": "01026",
        "GeoSpatialInfo": {
            "Latitude": "27.9365",
            "Longitude": "-0.243"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 833,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Hostel",
        "propertyType": "HS",
        "propertyBrand": "",
        "numberOfRooms": 2646
    },
    "PrimaryContactInfo": {
        "firstName": "Felton",
        "lastName": "Hodges",
        "phoneNumber": "+1-534-712-4284",
        "email": "fhodges@MTN.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/fhodges"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/fhodges"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/fhodges"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6254 Little Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "9B",
        "city": "West Palm Beach",
        "stateProvince": "FL",
        "locality": "Palm Beach",
        "country": "US",
        "postalCode": "33422",
        "GeoSpatialInfo": {
            "Latitude": "26.7153",
            "Longitude": "-80.0534"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 172,
            "bedType": [
                "double",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 478,
            "bedType": [
                "king",
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Kimpton Regent",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 3232
    },
    "PrimaryContactInfo": {
        "firstName": "David",
        "lastName": "Lucas",
        "phoneNumber": "+32-535-130-5112",
        "email": "dlucas@PTCL.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4585 Little Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bertogne",
        "stateProvince": "WAL",
        "locality": "Luxembourg",
        "country": "BE",
        "postalCode": "6686",
        "GeoSpatialInfo": {
            "Latitude": "50.085",
            "Longitude": "5.6684"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 839,
            "bedType": [
                "queen",
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 108,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Super 8",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2936
    },
    "PrimaryContactInfo": {
        "firstName": "Tasha",
        "lastName": "Herman",
        "phoneNumber": "+1-536-350-3970",
        "email": "therman@Frontier.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/therman"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6456 Little Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ottawa (Lower Town \/ Sandy Hill \/ University of Ottawa)",
        "stateProvince": "ON",
        "locality": "Ottawa",
        "country": "CA",
        "postalCode": "K1N",
        "GeoSpatialInfo": {
            "Latitude": "45.4289",
            "Longitude": "-75.6844"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 701,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 339
    },
    "PrimaryContactInfo": {
        "firstName": "Darleen",
        "lastName": "Monroe",
        "phoneNumber": "+692-537-655-1241",
        "email": "dmonroe@Verizon.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dmonroe"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dmonroe"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4402 Short River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "GeoSpatialInfo": {
            "Latitude": "11.1405",
            "Longitude": "166.4103"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 609,
            "bedType": [
                "queen",
                "double",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 702,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 754,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 448,
            "bedType": [
                "double",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Louvre Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 1822
    },
    "PrimaryContactInfo": {
        "firstName": "Alexis",
        "lastName": "Zamora",
        "phoneNumber": "+1-538-303-5124",
        "email": "azamora@Optus.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/azamora"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8337 Blue Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Marieville",
        "stateProvince": "QC",
        "locality": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J3M",
        "GeoSpatialInfo": {
            "Latitude": "45.4334",
            "Longitude": "-73.1659"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 614,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 423,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 192,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 529
    },
    "PrimaryContactInfo": {
        "firstName": "Jarod",
        "lastName": "Estrada",
        "phoneNumber": "+441534-539-394-2634",
        "email": "jestrada@NII.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jestrada"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7178 Little Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Brelades",
        "stateProvince": "Jersey Channel Islands",
        "locality": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE3",
        "GeoSpatialInfo": {
            "Latitude": "49.2",
            "Longitude": "-2.1333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 819,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 519,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Quiet Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 4583
    },
    "PrimaryContactInfo": {
        "firstName": "Chris",
        "lastName": "Trejo",
        "phoneNumber": "+1-540-469-3907",
        "email": "ctrejo@OTE.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ctrejo"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8495 Winding Mountain Ride",
        "buildingName": null,
        "floor": 5,
        "roomApartmentCondoNumber": "99",
        "city": "Biddeford Pool",
        "stateProvince": "ME",
        "locality": "York",
        "country": "US",
        "postalCode": "04006",
        "GeoSpatialInfo": {
            "Latitude": "43.4448",
            "Longitude": "-70.3414"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 759,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 658,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Thompson",
        "propertyType": "motel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 4147
    },
    "PrimaryContactInfo": {
        "firstName": "Shayne",
        "lastName": "Leal",
        "phoneNumber": "+63-541-367-6567",
        "email": "sleal@KDDI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sleal"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sleal"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3789 Green Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Arayat",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "2012",
        "GeoSpatialInfo": {
            "Latitude": "15.1508",
            "Longitude": "120.7731"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 922,
            "bedType": [
                "king",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 936,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Nikko Okura",
        "propertyType": "hotel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 3528
    },
    "PrimaryContactInfo": {
        "firstName": "Lino",
        "lastName": "Conway",
        "phoneNumber": "+91-542-228-9594",
        "email": "lconway@Ooredoo.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lconway"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2082 Long Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bhainsari",
        "stateProvince": "Hardoi",
        "locality": "Hardoi",
        "country": "IN",
        "postalCode": "241404",
        "GeoSpatialInfo": {
            "Latitude": "27.6706",
            "Longitude": "79.1958"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 390,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Rose Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 1403
    },
    "PrimaryContactInfo": {
        "firstName": "Aretha",
        "lastName": "Peck",
        "phoneNumber": "+48-543-055-0885",
        "email": "apeck@Frontier.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/apeck"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5643 Long Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Warszawa",
        "stateProvince": "Warsaw",
        "locality": "Warszawa",
        "country": "PL",
        "postalCode": "01-318",
        "GeoSpatialInfo": {
            "Latitude": "52.2342",
            "Longitude": "20.9011"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 293,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "city view",
            "price": 690,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Vib",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 378
    },
    "PrimaryContactInfo": {
        "firstName": "Lourdes",
        "lastName": "Boyer",
        "phoneNumber": "+1-544-457-7943",
        "email": "lboyer@Chunghwa.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lboyer"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lboyer"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lboyer"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9661 Long Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Grenada",
        "stateProvince": "MS",
        "locality": "Grenada",
        "country": "US",
        "postalCode": "38901",
        "GeoSpatialInfo": {
            "Latitude": "33.7751",
            "Longitude": "-89.8087"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 648,
            "bedType": [
                "queen",
                "double",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 893,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Fairyland Hotel",
        "propertyType": "motel",
        "propertyBrand": "BTG Homeinns",
        "numberOfRooms": 2972
    },
    "PrimaryContactInfo": {
        "firstName": "Estella",
        "lastName": "Bullock",
        "phoneNumber": "+49-545-711-1978",
        "email": "ebullock@KPN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ebullock"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3509 Long Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Heidmoor",
        "stateProvince": "SH",
        "locality": "Kreis Segeberg",
        "country": "DE",
        "postalCode": "24632",
        "GeoSpatialInfo": {
            "Latitude": "53.8333",
            "Longitude": "9.85"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 596,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 461,
            "bedType": [
                "king",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 1158
    },
    "PrimaryContactInfo": {
        "firstName": "Jewell",
        "lastName": "Nixon",
        "phoneNumber": "+91-546-418-4508",
        "email": "jnixon@Tata.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "3998 Green Gully Ride",
        "buildingName": "Building 19",
        "floor": null,
        "roomApartmentCondoNumber": "F5",
        "city": "Kodanginaickenpatti",
        "stateProvince": "Dindigul",
        "locality": "Dindigul",
        "country": "IN",
        "postalCode": "624215",
        "GeoSpatialInfo": {
            "Latitude": "11.2134",
            "Longitude": "77.9474"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 880,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 669,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 619,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 807,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "BW Signature Collection",
        "propertyType": "motel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 1700
    },
    "PrimaryContactInfo": {
        "firstName": "Donnetta",
        "lastName": "Hensley",
        "phoneNumber": "+41-547-695-2563",
        "email": "dhensley@Airtel.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dhensley"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dhensley"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5876 Big Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Peney-le-Jorat",
        "stateProvince": "VD",
        "locality": "Gros-de-Vaud District",
        "country": "CH",
        "postalCode": "1059",
        "GeoSpatialInfo": {
            "Latitude": "46.6323",
            "Longitude": "6.7288"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "mountain view",
            "price": 744,
            "bedType": [
                "king",
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Dolce",
        "propertyType": "hotel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2682
    },
    "PrimaryContactInfo": {
        "firstName": "Maximo",
        "lastName": "Boone",
        "phoneNumber": "+1-548-801-2160",
        "email": "mboone@NetCom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2956 Big Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Downtown Montreal Northeast",
        "stateProvince": "QC",
        "locality": "Montreal",
        "country": "CA",
        "postalCode": "H2Z",
        "GeoSpatialInfo": {
            "Latitude": "45.5052",
            "Longitude": "-73.5622"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 66,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 963,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Mountain Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 3069
    },
    "PrimaryContactInfo": {
        "firstName": "Chang",
        "lastName": "Trevino",
        "phoneNumber": "+298-549-295-2589",
        "email": "ctrevino@BT.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ctrevino"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ctrevino"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "661 Big Woods Street",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Dalur",
        "stateProvince": null,
        "locality": null,
        "country": "FO",
        "postalCode": "235",
        "GeoSpatialInfo": {
            "Latitude": "61.7833",
            "Longitude": "-6.6667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "penthouse",
            "price": 592,
            "bedType": [
                "queen",
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 936,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 442,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 663,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "GuestHouse Hotel",
        "propertyType": "hotel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 3641
    },
    "PrimaryContactInfo": {
        "firstName": "Venice",
        "lastName": "Bowers",
        "phoneNumber": "+91-550-647-4663",
        "email": "vbowers@Telus.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vbowers"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/vbowers"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/vbowers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6240 Little Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bodka",
        "stateProvince": "NA",
        "locality": "Junagadh",
        "country": "IN",
        "postalCode": "362610",
        "GeoSpatialInfo": {
            "Latitude": "23.2115",
            "Longitude": "70.9135"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 961,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 819,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 864,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 465,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hilton Grand Vacations",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 2423
    },
    "PrimaryContactInfo": {
        "firstName": "Earle",
        "lastName": "Campos",
        "phoneNumber": "+352-551-208-3165",
        "email": "ecampos@TT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ecampos"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ecampos"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5690 Little Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Grevenmacher",
        "stateProvince": "GR",
        "locality": "Grevenmacher",
        "country": "LU",
        "postalCode": "L-6759",
        "GeoSpatialInfo": {
            "Latitude": "49.679",
            "Longitude": "6.441"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 554,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 592,
            "bedType": [
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 451,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 1126
    },
    "PrimaryContactInfo": {
        "firstName": "Pat",
        "lastName": "Palmer",
        "phoneNumber": "+44-552-183-1872",
        "email": "ppalmer@PLDT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ppalmer"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ppalmer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ppalmer"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ppalmer"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1110 Blue Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "EB",
        "city": "Bont Newydd",
        "stateProvince": "Wales",
        "locality": "Gwynedd",
        "country": "GB",
        "postalCode": "LL40",
        "GeoSpatialInfo": {
            "Latitude": "52.7991",
            "Longitude": "-3.9134"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 152,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 673,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Pan Pacific",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 2201
    },
    "PrimaryContactInfo": {
        "firstName": "Shanelle",
        "lastName": "Meadows",
        "phoneNumber": "+1441-553-453-5859",
        "email": "smeadows@Zain.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/smeadows"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/smeadows"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1479 Big Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sandys",
        "stateProvince": "Sandys Parish",
        "locality": "Sandys Parish",
        "country": "BM",
        "postalCode": "MA 01",
        "GeoSpatialInfo": {
            "Latitude": "32.2934",
            "Longitude": "-64.8683"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 198,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt House",
        "propertyType": "hotel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 230
    },
    "PrimaryContactInfo": {
        "firstName": "Britta",
        "lastName": "Hardin",
        "phoneNumber": "+1-554-591-3630",
        "email": "bhardin@ATT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bhardin"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bhardin"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bhardin"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6621 Big Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Brimfield",
        "stateProvince": "MA",
        "locality": "Hampden",
        "country": "US",
        "postalCode": "01010",
        "GeoSpatialInfo": {
            "Latitude": "42.1165",
            "Longitude": "-72.1885"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 360,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 165,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Destination Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 1068
    },
    "PrimaryContactInfo": {
        "firstName": "Loise",
        "lastName": "Leach",
        "phoneNumber": "+43-555-955-8861",
        "email": "lleach@NetCom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lleach"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9950 Blue Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Unterberg",
        "stateProvince": "Abtenau",
        "locality": "Politischer Bezirk Hallein",
        "country": "AT",
        "postalCode": "5441",
        "GeoSpatialInfo": {
            "Latitude": "47.5552",
            "Longitude": "13.3178"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 894,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 570,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson Blu",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 564
    },
    "PrimaryContactInfo": {
        "firstName": "Serina",
        "lastName": "Fernandez",
        "phoneNumber": "+1-556-086-0067",
        "email": "sfernand@MaxComm.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "7947 Green Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Roark",
        "stateProvince": "KY",
        "locality": "Leslie",
        "country": "US",
        "postalCode": "40979",
        "GeoSpatialInfo": {
            "Latitude": "37.0226",
            "Longitude": "-83.5152"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 770,
            "bedType": [
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jen Kerry Hotels",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 2055
    },
    "PrimaryContactInfo": {
        "firstName": "Magdalene",
        "lastName": "Richardson",
        "phoneNumber": "+598-557-748-9195",
        "email": "mrichard@SKTelecom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mrichard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8715 Little Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ega\u00f1a",
        "stateProvince": "Soriano",
        "locality": "Soriano",
        "country": "UY",
        "postalCode": "75200",
        "GeoSpatialInfo": {
            "Latitude": "-33.6023",
            "Longitude": "-57.6269"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 447,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 971,
            "bedType": [
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 589,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 3146
    },
    "PrimaryContactInfo": {
        "firstName": "Mirta",
        "lastName": "Sellers",
        "phoneNumber": "+91-558-953-7582",
        "email": "msellers@Softbank.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/msellers"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9938 Short Bend Road",
        "buildingName": null,
        "floor": 19,
        "roomApartmentCondoNumber": "D6",
        "city": "Pipra Sohat",
        "stateProvince": "Nautanawa",
        "locality": "Maharajganj",
        "country": "IN",
        "postalCode": "273162",
        "GeoSpatialInfo": {
            "Latitude": "27.2028",
            "Longitude": "83.3674"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 992,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 581,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "penthouse",
            "price": 949,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Holiday Inn Express",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1145
    },
    "PrimaryContactInfo": {
        "firstName": "Arthur",
        "lastName": "Henry",
        "phoneNumber": "+44-559-862-0530",
        "email": "ahenry@KDDI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8482 Red Hill Ride",
        "buildingName": "Building F5",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "London",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "WC1E",
        "GeoSpatialInfo": {
            "Latitude": "51.5085",
            "Longitude": "-0.1257"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "poolside",
            "price": 872,
            "bedType": [
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "hotel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 699
    },
    "PrimaryContactInfo": {
        "firstName": "Shemika",
        "lastName": "Duke",
        "phoneNumber": "+91-560-570-9048",
        "email": "sduke@BCE.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sduke"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sduke"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9567 Short Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Semalkhedi",
        "stateProvince": "Susner",
        "locality": "Shajapur",
        "country": "IN",
        "postalCode": "465447",
        "GeoSpatialInfo": {
            "Latitude": "23.9146",
            "Longitude": "76.1849"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 277,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jin Jiang Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 4570
    },
    "PrimaryContactInfo": {
        "firstName": "Fidela",
        "lastName": "Skinner",
        "phoneNumber": "+61-562-151-3219",
        "email": "fskinner@Ooredoo.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9416 Winding Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Macarthur",
        "stateProvince": "ACT",
        "locality": "CANBERRA",
        "country": "AU",
        "postalCode": "2904",
        "GeoSpatialInfo": {
            "Latitude": "-35.4089",
            "Longitude": "149.127"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 628,
            "bedType": [
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 194,
            "bedType": [
                "queen",
                "single",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "poolside",
            "price": 349,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Wingate",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2891
    },
    "PrimaryContactInfo": {
        "firstName": "Nana",
        "lastName": "English",
        "phoneNumber": "+34-563-151-7887",
        "email": "nenglish@Rogers.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/nenglish"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nenglish"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/nenglish"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/nenglish"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "925 Blue Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "La Planadera",
        "stateProvince": "AS",
        "locality": "Asturias",
        "country": "ES",
        "postalCode": "33859",
        "GeoSpatialInfo": {
            "Latitude": "43.4007",
            "Longitude": "-6.176"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 585,
            "bedType": [
                "single",
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "poolside",
            "price": 578,
            "bedType": [
                "double",
                "single",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Travel Hotel",
        "propertyType": "H",
        "propertyBrand": "",
        "numberOfRooms": 2263
    },
    "PrimaryContactInfo": {
        "firstName": "Janise",
        "lastName": "Nicholson",
        "phoneNumber": "+1-564-545-8029",
        "email": "jnichols@Zain.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jnichols"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jnichols"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6968 Short Stream Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "A5",
        "city": "Lindsay",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "K9V",
        "GeoSpatialInfo": {
            "Latitude": "44.3501",
            "Longitude": "-78.7329"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 863,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hampton",
        "propertyType": "motel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 2721
    },
    "PrimaryContactInfo": {
        "firstName": "Dick",
        "lastName": "Williams",
        "phoneNumber": "+691-565-384-9760",
        "email": "dwilliam@Orange.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dwilliam"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dwilliam"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dwilliam"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9397 Short Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pohnpei",
        "stateProvince": "State of Pohnpei",
        "locality": "State of Pohnpei",
        "country": "FM",
        "postalCode": "96941",
        "GeoSpatialInfo": {
            "Latitude": "7.1383",
            "Longitude": "151.5031"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 480,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 383,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 759,
            "bedType": [
                "queen",
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Thompson",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 2929
    },
    "PrimaryContactInfo": {
        "firstName": "Lakeisha",
        "lastName": "Christensen",
        "phoneNumber": "+1-566-437-4598",
        "email": "lchriste@Econnect.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lchriste"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lchriste"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8693 Green Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pitcairn",
        "stateProvince": "PA",
        "locality": "Allegheny",
        "country": "US",
        "postalCode": "15140",
        "GeoSpatialInfo": {
            "Latitude": "40.4048",
            "Longitude": "-79.777"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 466,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "penthouse",
            "price": 186,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 463,
            "bedType": [
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Peaceful Apartments",
        "propertyType": "APT",
        "propertyBrand": "",
        "numberOfRooms": 1812
    },
    "PrimaryContactInfo": {
        "firstName": "Chloe",
        "lastName": "Odonnell",
        "phoneNumber": "+594-567-143-8490",
        "email": "codonnel@CCI.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/codonnel"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "5039 Big Ditch Ride",
        "buildingName": null,
        "floor": 17,
        "roomApartmentCondoNumber": null,
        "city": "Cayenne",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97334 CEDEX",
        "GeoSpatialInfo": {
            "Latitude": "4.9333",
            "Longitude": "-52.3333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 413,
            "bedType": [
                "single",
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 90,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 336,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "GuestHouse Hotel",
        "propertyType": "hotel",
        "propertyBrand": "Red Lion",
        "numberOfRooms": 1080
    },
    "PrimaryContactInfo": {
        "firstName": "Joan",
        "lastName": "May",
        "phoneNumber": "+1-568-298-0696",
        "email": "jmay@DaxNet.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jmay"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jmay"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jmay"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jmay"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3823 Green Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Canmore",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T1W",
        "GeoSpatialInfo": {
            "Latitude": "51.0876",
            "Longitude": "-115.3461"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 661,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 571,
            "bedType": [
                "double",
                "double",
                "queen"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson",
        "propertyType": "motel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 4290
    },
    "PrimaryContactInfo": {
        "firstName": "Kristian",
        "lastName": "Wallace",
        "phoneNumber": "+35818-569-208-4189",
        "email": "kwallace@Airtel.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kwallace"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2682 Short Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sund",
        "stateProvince": "Sund",
        "locality": "Sund",
        "country": "AX",
        "postalCode": "22530",
        "GeoSpatialInfo": {
            "Latitude": "60.2275",
            "Longitude": "20.1999"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 264,
            "bedType": [
                "single",
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 703,
            "bedType": [
                "king",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 218,
            "bedType": [
                "queen",
                "single"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Garden Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 4387
    },
    "PrimaryContactInfo": {
        "firstName": "Wayne",
        "lastName": "Thornton",
        "phoneNumber": "+1-570-145-8543",
        "email": "wthornto@Verizon.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "6281 Winding Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E8",
        "city": "Hanover",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "N4N",
        "GeoSpatialInfo": {
            "Latitude": "44.1501",
            "Longitude": "-81.033"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 904,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 598,
            "bedType": [
                "single",
                "king",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Super 8",
        "propertyType": "motel",
        "propertyBrand": "Wyndham",
        "numberOfRooms": 2139
    },
    "PrimaryContactInfo": {
        "firstName": "Boyd",
        "lastName": "Hubbard",
        "phoneNumber": "+49-571-388-3525",
        "email": "bhubbard@Ooredoo.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2900 Long Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Immenhausen",
        "stateProvince": "HE",
        "locality": "Regierungsbezirk Kassel",
        "country": "DE",
        "postalCode": "34376",
        "GeoSpatialInfo": {
            "Latitude": "51.4429",
            "Longitude": "9.5231"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "penthouse",
            "price": 260,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "family",
            "roomLocation": "lakeside",
            "price": 655,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "hotel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 503
    },
    "PrimaryContactInfo": {
        "firstName": "Oscar",
        "lastName": "Koch",
        "phoneNumber": "+1-572-376-1408",
        "email": "okoch@Unicom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/okoch"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/okoch"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3265 Green River Street",
        "buildingName": "Building CA",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bouctouche",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E4S",
        "GeoSpatialInfo": {
            "Latitude": "46.4684",
            "Longitude": "-64.739"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 987,
            "bedType": [
                "double",
                "double",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 168,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Getaway Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 2527
    },
    "PrimaryContactInfo": {
        "firstName": "Tamera",
        "lastName": "Waller",
        "phoneNumber": "+380-573-354-0548",
        "email": "twaller@CCS.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/twaller"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3762 Winding Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0412\u0456\u043b\u044c\u0448\u0430\u043d\u043a\u0430",
        "stateProvince": "Zhovkivskyi",
        "locality": "Zhovkivskyi",
        "country": "UA",
        "postalCode": "80321",
        "GeoSpatialInfo": {
            "Latitude": "51.9838",
            "Longitude": "32.5397"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 420,
            "bedType": [
                "king",
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Renaissance",
        "propertyType": "hotel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 4752
    },
    "PrimaryContactInfo": {
        "firstName": "Karma",
        "lastName": "Burnett",
        "phoneNumber": "+1-574-543-7218",
        "email": "kburnett@Optus.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2999 Long Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hollywood",
        "stateProvince": "FL",
        "locality": "Broward",
        "country": "US",
        "postalCode": "33022",
        "GeoSpatialInfo": {
            "Latitude": "26.0134",
            "Longitude": "-80.1442"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 847,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 903,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "poolside",
            "price": 160,
            "bedType": [
                "king",
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "motel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 3753
    },
    "PrimaryContactInfo": {
        "firstName": "Rusty",
        "lastName": "Mack",
        "phoneNumber": "+7-575-252-8679",
        "email": "rmack@Vodafone.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rmack"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rmack"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "944 Big Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041a\u0438\u0440\u043e\u0432 8",
        "stateProvince": "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
        "locality": "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
        "country": "RU",
        "postalCode": "610008",
        "GeoSpatialInfo": {
            "Latitude": "58.6343",
            "Longitude": "49.9015"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "city view",
            "price": 688,
            "bedType": [
                "double",
                "single",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Famous Condo",
        "propertyType": "C",
        "propertyBrand": "",
        "numberOfRooms": 2355
    },
    "PrimaryContactInfo": {
        "firstName": "Joan",
        "lastName": "Stark",
        "phoneNumber": "+61-576-076-2450",
        "email": "jstark@PLDT.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1058 Green Bend Street",
        "buildingName": null,
        "floor": 11,
        "roomApartmentCondoNumber": "DB",
        "city": "Werribee",
        "stateProvince": "VIC",
        "locality": "MELB NORTH WEST",
        "country": "AU",
        "postalCode": "3030",
        "GeoSpatialInfo": {
            "Latitude": "-37.9",
            "Longitude": "144.6667"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 703,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 239,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 428,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Shangri-La",
        "propertyType": "motel",
        "propertyBrand": "Shangri-La Hotels",
        "numberOfRooms": 3223
    },
    "PrimaryContactInfo": {
        "firstName": "Carlita",
        "lastName": "Perry",
        "phoneNumber": "+1-577-128-2844",
        "email": "cperry@Access.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cperry"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cperry"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cperry"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3812 Blue Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sun City Center",
        "stateProvince": "FL",
        "locality": "Hillsborough",
        "country": "US",
        "postalCode": "33573",
        "GeoSpatialInfo": {
            "Latitude": "27.7147",
            "Longitude": "-82.3538"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 766,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 764,
            "bedType": [
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "SureStay Plus",
        "propertyType": "hotel",
        "propertyBrand": "Best Western",
        "numberOfRooms": 4292
    },
    "PrimaryContactInfo": {
        "firstName": "Maire",
        "lastName": "Singleton",
        "phoneNumber": "+91-578-463-7292",
        "email": "msinglet@Telenor.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "9734 Short Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Raikode",
        "stateProvince": "NA",
        "locality": "Mahabub Nagar",
        "country": "IN",
        "postalCode": "509353",
        "GeoSpatialInfo": {
            "Latitude": "17.8384",
            "Longitude": "77.7466"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 484,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "family",
            "roomLocation": "riverside",
            "price": 335,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Tranquil Inn",
        "propertyType": "I",
        "propertyBrand": "",
        "numberOfRooms": 4399
    },
    "PrimaryContactInfo": {
        "firstName": "Marty",
        "lastName": "Snyder",
        "phoneNumber": "+46-579-713-0169",
        "email": "msnyder@Orstom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/msnyder"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/msnyder"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/msnyder"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "7163 Green Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "V\u00e4xj\u00f6",
        "stateProvince": "G",
        "locality": "V\u00e4xj\u00f6",
        "country": "SE",
        "postalCode": "351 12",
        "GeoSpatialInfo": {
            "Latitude": "56.8777",
            "Longitude": "14.8091"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 35,
            "bedType": [
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 676,
            "bedType": [
                "single",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 381,
            "bedType": [
                "single",
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Taj Vivanta",
        "propertyType": "hotel",
        "propertyBrand": "Taj Hotels",
        "numberOfRooms": 3309
    },
    "PrimaryContactInfo": {
        "firstName": "Clair",
        "lastName": "Hansen",
        "phoneNumber": "+1-580-276-2588",
        "email": "chansen@GreenNet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/chansen"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "8338 Short Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Goulds",
        "stateProvince": "NL",
        "locality": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A1S",
        "GeoSpatialInfo": {
            "Latitude": "47.4212",
            "Longitude": "-52.8077"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "lakeside",
            "price": 867,
            "bedType": [
                "queen",
                "single",
                "king"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 147,
            "bedType": [
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Parkroyal",
        "propertyType": "motel",
        "propertyBrand": "Pan Pacific",
        "numberOfRooms": 4083
    },
    "PrimaryContactInfo": {
        "firstName": "Corrie",
        "lastName": "Fowler",
        "phoneNumber": "+90-581-652-1776",
        "email": "cfowler@GlasNET.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cfowler"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3363 Little River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ye\u015filb\u00fck",
        "stateProvince": "\u015eiran",
        "locality": "\u015eiran",
        "country": "TR",
        "postalCode": "29700",
        "GeoSpatialInfo": {
            "Latitude": "40.2186",
            "Longitude": "38.9825"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 68,
            "bedType": [
                "king",
                "king"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "standard",
            "roomLocation": "lakeside",
            "price": 342,
            "bedType": [
                "double",
                "single",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Valley Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 2187
    },
    "PrimaryContactInfo": {
        "firstName": "Kisha",
        "lastName": "Krueger",
        "phoneNumber": "+1-582-181-0404",
        "email": "kkrueger@AlgoNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kkrueger"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kkrueger"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "325 Short Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "86",
        "city": "Granger",
        "stateProvince": "WA",
        "locality": "Yakima",
        "country": "US",
        "postalCode": "98932",
        "GeoSpatialInfo": {
            "Latitude": "46.348",
            "Longitude": "-120.1818"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "city view",
            "price": 31,
            "bedType": [
                "king",
                "queen",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 338,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Holiday Inn Express",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 1345
    },
    "PrimaryContactInfo": {
        "firstName": "Ariel",
        "lastName": "Steele",
        "phoneNumber": "+52-583-864-5024",
        "email": "asteele@CCS.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/asteele"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "3368 Red Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Los Llanos",
        "stateProvince": "PUE",
        "locality": "Atlixco",
        "country": "MX",
        "postalCode": "74220",
        "GeoSpatialInfo": {
            "Latitude": "18.6188",
            "Longitude": "-98.385"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "riverside",
            "price": 794,
            "bedType": [
                "double",
                "single",
                "double"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "city view",
            "price": 228,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 213,
            "bedType": [
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Jin Jiang Hotels",
        "propertyType": "hotel",
        "propertyBrand": "Jinjiang",
        "numberOfRooms": 4768
    },
    "PrimaryContactInfo": {
        "firstName": "Stevie",
        "lastName": "Terry",
        "phoneNumber": "+91-584-750-2895",
        "email": "sterry@APICnet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8580 Blue Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Borada",
        "stateProvince": "Nasirabad",
        "locality": "Ajmer",
        "country": "IN",
        "postalCode": "305412",
        "GeoSpatialInfo": {
            "Latitude": "25.8114",
            "Longitude": "74.6299"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 537,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "penthouse",
            "price": 516,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 1860
    },
    "PrimaryContactInfo": {
        "firstName": "Adalberto",
        "lastName": "Castro",
        "phoneNumber": "+57-585-114-0066",
        "email": "acastro@PLDT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/acastro"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/acastro"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/acastro"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "503 Red Canyon Way",
        "buildingName": "Building 5E",
        "floor": 17,
        "roomApartmentCondoNumber": null,
        "city": "Buritica",
        "stateProvince": "Buritic\u00e1",
        "locality": "Buritic\u00e1",
        "country": "CO",
        "postalCode": "057038",
        "GeoSpatialInfo": {
            "Latitude": "6.7187",
            "Longitude": "-75.9073"
        }
    },
    "RoomInfo": [
        {
            "roomType": "VIP",
            "roomLocation": "poolside",
            "price": 441,
            "bedType": [
                "queen",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Radisson",
        "propertyType": "hotel",
        "propertyBrand": "Radisson",
        "numberOfRooms": 2556
    },
    "PrimaryContactInfo": {
        "firstName": "Arielle",
        "lastName": "Briggs",
        "phoneNumber": "+1-586-360-4936",
        "email": "abriggs@Econnect.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "2156 Little Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "South International Falls",
        "stateProvince": "MN",
        "locality": "Koochiching",
        "country": "US",
        "postalCode": "56679",
        "GeoSpatialInfo": {
            "Latitude": "48.5866",
            "Longitude": "-93.399"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "city view",
            "price": 363,
            "bedType": [
                "double",
                "single",
                "single"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "VIP",
            "roomLocation": "mountain view",
            "price": 135,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hyatt Centric",
        "propertyType": "motel",
        "propertyBrand": "Hyatt",
        "numberOfRooms": 4203
    },
    "PrimaryContactInfo": {
        "firstName": "Drusilla",
        "lastName": "Rojas",
        "phoneNumber": "+262-587-453-2558",
        "email": "drojas@Econnect.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8427 Long Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "M'Tsangamouji",
        "stateProvince": "M'Tsangamouji",
        "locality": "M'Tsangamouji",
        "country": "YT",
        "postalCode": "97650",
        "GeoSpatialInfo": {
            "Latitude": "-12.7594",
            "Longitude": "45.0836"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 348,
            "bedType": [
                "double",
                "queen",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "penthouse",
            "price": 962,
            "bedType": [
                "queen",
                "double",
                "king"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Valley Resort",
        "propertyType": "R",
        "propertyBrand": "",
        "numberOfRooms": 3032
    },
    "PrimaryContactInfo": {
        "firstName": "Tiffaney",
        "lastName": "Drake",
        "phoneNumber": "+1-588-902-2169",
        "email": "tdrake@OTE.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tdrake"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/tdrake"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tdrake"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "4810 Green Tree Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "21",
        "city": "St. John's Southwest",
        "stateProvince": "NL",
        "locality": "St. John's ",
        "country": "CA",
        "postalCode": "A1H",
        "GeoSpatialInfo": {
            "Latitude": "47.483",
            "Longitude": "-52.8415"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "mountain view",
            "price": 286,
            "bedType": [
                "queen",
                "king"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Holiday Inn Express",
        "propertyType": "motel",
        "propertyBrand": "InterContinental",
        "numberOfRooms": 386
    },
    "PrimaryContactInfo": {
        "firstName": "Sherwood",
        "lastName": "Richmond",
        "phoneNumber": "+596-589-188-0844",
        "email": "srichmon@UI.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "1882 Short Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Le Carbet",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97221",
        "GeoSpatialInfo": {
            "Latitude": "14.7103",
            "Longitude": "-61.1824"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 410,
            "bedType": [
                "double",
                "double"
            ],
            "breakfast": "extra"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Novotel",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 45
    },
    "PrimaryContactInfo": {
        "firstName": "Arthur",
        "lastName": "Pruitt",
        "phoneNumber": "+91-590-601-5721",
        "email": "apruitt@Oi.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/apruitt"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/apruitt"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "416 Big Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Umdihar",
        "stateProvince": "Nongpoh",
        "locality": "Ri Bhoi",
        "country": "IN",
        "postalCode": "793102",
        "GeoSpatialInfo": {
            "Latitude": "25.9023",
            "Longitude": "91.8769"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 676,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Romantic Guest House",
        "propertyType": "GH",
        "propertyBrand": "",
        "numberOfRooms": 2052
    },
    "PrimaryContactInfo": {
        "firstName": "Debi",
        "lastName": "Young",
        "phoneNumber": "+81-591-866-3742",
        "email": "dyoung@ICom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dyoung"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dyoung"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "2562 Green Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ogurogawa",
        "stateProvince": "Inawashiro Machi",
        "locality": "Yama Gun",
        "country": "JP",
        "postalCode": "969-3111",
        "GeoSpatialInfo": {
            "Latitude": "37.2409",
            "Longitude": "140.6524"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 410,
            "bedType": [
                "queen",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "riverside",
            "price": 914,
            "bedType": [
                "king",
                "king",
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Formule 1",
        "propertyType": "hotel",
        "propertyBrand": "Accor",
        "numberOfRooms": 2180
    },
    "PrimaryContactInfo": {
        "firstName": "Kenton",
        "lastName": "Shepherd",
        "phoneNumber": "+61-592-166-5532",
        "email": "kshepher@TT.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kshepher"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kshepher"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "1554 Little Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dalgety",
        "stateProvince": "NSW",
        "locality": "CANBERRA",
        "country": "AU",
        "postalCode": "2628",
        "GeoSpatialInfo": {
            "Latitude": "-36.5",
            "Longitude": "148.8333"
        }
    },
    "RoomInfo": [
        {
            "roomType": "standard",
            "roomLocation": "mountain view",
            "price": 325,
            "bedType": [
                "king",
                "king",
                "double"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "standard",
            "roomLocation": "riverside",
            "price": 599,
            "bedType": [
                "single",
                "king",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "riverside",
            "price": 248,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Hotel JAL",
        "propertyType": "motel",
        "propertyBrand": "Okura Nikko",
        "numberOfRooms": 1514
    },
    "PrimaryContactInfo": {
        "firstName": "Wilfred",
        "lastName": "Jensen",
        "phoneNumber": "+1809-593-263-8521",
        "email": "wjensen@Telkom.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "4832 Short Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Maria Auxiliadora",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10305",
        "GeoSpatialInfo": {
            "Latitude": "18.5",
            "Longitude": "-69.8833"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "city view",
            "price": 75,
            "bedType": [
                "king",
                "king",
                "queen"
            ],
            "breakfast": "extra"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 778,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "VIP",
            "roomLocation": "riverside",
            "price": 460,
            "bedType": [
                "double",
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Riverside Motel",
        "propertyType": "M",
        "propertyBrand": "",
        "numberOfRooms": 1356
    },
    "PrimaryContactInfo": {
        "firstName": "Emmie",
        "lastName": "Evans",
        "phoneNumber": "+91-594-670-8095",
        "email": "eevans@Oi.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/eevans"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/eevans"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/eevans"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "738 Little Tree Street",
        "buildingName": null,
        "floor": 16,
        "roomApartmentCondoNumber": "25",
        "city": "Parbatta",
        "stateProvince": "Khagaria",
        "locality": "Khagaria",
        "country": "IN",
        "postalCode": "851216",
        "GeoSpatialInfo": {
            "Latitude": "25.3268",
            "Longitude": "86.7643"
        }
    },
    "RoomInfo": [
        {
            "roomType": "premium",
            "roomLocation": "poolside",
            "price": 310,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Embassy Suites",
        "propertyType": "hotel",
        "propertyBrand": "Hilton",
        "numberOfRooms": 3901
    },
    "PrimaryContactInfo": {
        "firstName": "Loan",
        "lastName": "Woodard",
        "phoneNumber": "+1-596-962-8879",
        "email": "lwoodard@CUBENet.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lwoodard"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "9914 Red Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fresno",
        "stateProvince": "CA",
        "locality": "Fresno",
        "country": "US",
        "postalCode": "93711",
        "GeoSpatialInfo": {
            "Latitude": "36.8303",
            "Longitude": "-119.8319"
        }
    },
    "RoomInfo": [
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 551,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Alila Destination",
        "propertyType": "hotel",
        "propertyBrand": "Two Roads",
        "numberOfRooms": 4634
    },
    "PrimaryContactInfo": {
        "firstName": "Alonzo",
        "lastName": "Vance",
        "phoneNumber": "+44-598-028-1106",
        "email": "avance@TelecomItalia.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/avance"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/avance"
            }
        }
    },
    "Address": {
        "streetAddressOfBuilding": "6845 Little Stream Street",
        "buildingName": "Building F6",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Swarland",
        "stateProvince": "England",
        "locality": "Northumberland",
        "country": "GB",
        "postalCode": "NE65",
        "GeoSpatialInfo": {
            "Latitude": "55.324",
            "Longitude": "-1.7448"
        }
    },
    "RoomInfo": [
        {
            "roomType": "family",
            "roomLocation": "mountain view",
            "price": 380,
            "bedType": [
                "single",
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "premium",
            "roomLocation": "lakeside",
            "price": 965,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "lakeside",
            "price": 997,
            "bedType": [
                "double"
            ],
            "breakfast": "included"
        }
    ]
});
db.property.insertOne(
{
    "PropertyInfo": {
        "propertyName": "Autograph Collection",
        "propertyType": "motel",
        "propertyBrand": "Marriott",
        "numberOfRooms": 3234
    },
    "PrimaryContactInfo": {
        "firstName": "Ileen",
        "lastName": "Rowland",
        "phoneNumber": "+47-599-997-9934",
        "email": "irowland@AlgoNet.com",
        "socialMedia": []
    },
    "Address": {
        "streetAddressOfBuilding": "8142 Long Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Borre",
        "stateProvince": "Horten",
        "locality": "Horten",
        "country": "NO",
        "postalCode": "3184",
        "GeoSpatialInfo": {
            "Latitude": "59.3819",
            "Longitude": "10.4565"
        }
    },
    "RoomInfo": [
        {
            "roomType": "double",
            "roomLocation": "lakeside",
            "price": 280,
            "bedType": [
                "queen"
            ],
            "breakfast": "included"
        },
        {
            "roomType": "suite",
            "roomLocation": "mountain view",
            "price": 736,
            "bedType": [
                "single"
            ],
            "breakfast": "included"
        }
    ]
});
