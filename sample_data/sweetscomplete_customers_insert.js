conn = new Mongo();
db = conn.getDB("sweetscomplete");
db.customers.drop();
db.customers.insertOne(
{
    "customerKey": "81_100_216_1524",
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
    "LoginInfo": {
        "userName": "cbryant",
        "password": "$2y$10$0hNtObXWHbEhxMMb4rcxdOVQuLXok5H9XWbgoDDOV8PpdkLjaahvK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-682-472-0994",
            "+81-634-737-4992"
        ],
        "secondaryEmailAddresses": [
            "cbryant@Telekom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1962-10-29",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "36_101_167_6900",
    "PrimaryContactInfo": {
        "firstName": "Althea",
        "lastName": "Hartman",
        "phoneNumber": "+36-101-167-6900",
        "email": "ahartman@Tata.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ahartman",
        "password": "$2y$10$j.pRSKiuKbFRKiMuoMxKZe429Pt7cgH1UVQeQE2DVhPPE.tteUeOm"
    },
    "Address": {
        "streetAddressOfBuilding": "758 Blue Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Budapest",
        "stateProvince": "BU",
        "locality": "Budapest",
        "country": "HU",
        "postalCode": "1202",
        "GeoSpatialInfo": {
            "latitude": "47.5",
            "longitude": "19.0833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+36-649-749-8812",
            "+36-255-232-0444"
        ],
        "secondaryEmailAddresses": [
            "ahartman@Airtel.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1962-3-27",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "35818_103_375_5689",
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
    "LoginInfo": {
        "userName": "mgreene",
        "password": "$2y$10$UZ4Tqd.YGuOXLnrnglYX.O5JKAOW6B3k0B34VMgt7eSQuiSMwTTAS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-620-829-0543",
            "+35818-710-407-5731"
        ],
        "secondaryEmailAddresses": [
            "mgreene@Vodafone.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-6-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "351_104_876_8991",
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
    "LoginInfo": {
        "userName": "aleonard",
        "password": "$2y$10$1TiVGgNyPvYXJJJkDhouG.1ME27b5q4bJBeX8L0USX.uJg2YKWriq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-158-104-5744",
            "+351-880-408-6387"
        ],
        "secondaryEmailAddresses": [
            "aleonard@NTT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1960-11-13",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "598_105_243_4306",
    "PrimaryContactInfo": {
        "firstName": "Joel",
        "lastName": "Whitaker",
        "phoneNumber": "+598-105-243-4306",
        "email": "jwhitake@cerist.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "jwhitake",
        "password": "$2y$10$b1IMMFK051WSfxRWPdu7dO6RvMFgk8OIuZcR\/7dsUpgazSNHwHYja"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+598-901-058-6942",
            "+598-818-584-0699"
        ],
        "secondaryEmailAddresses": [
            "jwhitake@DaxNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-2-15",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "31_107_434_1438",
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
    "LoginInfo": {
        "userName": "lwheeler",
        "password": "$2y$10$ZRfUXo2fon.WYTRIGYUagOAB9jEIgwgVqZXCW9tC.XROhtOX7xLC."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+31-226-007-7142",
            "+31-371-148-1361"
        ],
        "secondaryEmailAddresses": [
            "lwheeler@MegaFon.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1937-3-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "60_108_244_2499",
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
    "LoginInfo": {
        "userName": "tpatrick",
        "password": "$2y$10$jv.JKy4w5E45dIxVZ98ZtOZ4m2sHFGZvdMWVNIcVvYfZbOGAPPPb."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-948-000-5915",
            "+60-800-705-8262"
        ],
        "secondaryEmailAddresses": [
            "tpatrick@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-10-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "43_109_251_2797",
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
    "LoginInfo": {
        "userName": "mmeyers",
        "password": "$2y$10$UzRTHeECajVriRAel05keeE7uGBZSCazp2BZ6GuakWXzdSPFpaTQa"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+43-457-663-1327",
            "+43-400-024-2024"
        ],
        "secondaryEmailAddresses": [
            "mmeyers@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1939-5-17",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "41_110_535_5526",
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
    "LoginInfo": {
        "userName": "amelton",
        "password": "$2y$10$3H7SfNbyZiZWUI5542mWlO3nmJogQTyiu01Kt.Zy0zdcSSX48r3QS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-375-924-8690",
            "+41-911-769-5138"
        ],
        "secondaryEmailAddresses": [
            "amelton@NordNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2001-4-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "420_112_162_2217",
    "PrimaryContactInfo": {
        "firstName": "Rocco",
        "lastName": "Mullen",
        "phoneNumber": "+420-112-162-2217",
        "email": "rmullen@ATT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rmullen"
            }
        }
    },
    "LoginInfo": {
        "userName": "rmullen",
        "password": "$2y$10$Fxv3HD3iOk5L9NOIDzCFYeNlcF7Uw8.OApuxTDigdylihB\/LHN6L."
    },
    "Address": {
        "streetAddressOfBuilding": "6703 Little Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ma\u0148ovice",
        "stateProvince": "Plze\u0148-jih",
        "locality": "Plze\u0148-jih",
        "country": "CZ",
        "postalCode": "335 01",
        "GeoSpatialInfo": {
            "latitude": "49.45",
            "longitude": "13.6"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+420-984-758-3567",
            "+420-834-136-1058"
        ],
        "secondaryEmailAddresses": [
            "rmullen@CUBENet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-4-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "423_114_196_1441",
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
    "LoginInfo": {
        "userName": "lmaynard",
        "password": "$2y$10$w1PblbuI8wkMfdnyZSrBZ.BKlceBcmGjPVHkxgibYtcCKGbhLZjU."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-252-442-3069",
            "+423-600-745-4065"
        ],
        "secondaryEmailAddresses": [
            "lmaynard@GlasNET.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1950-1-12",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "420_116_809_7567",
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
    "LoginInfo": {
        "userName": "dchan",
        "password": "$2y$10$PqRfNHRaGlE7TxrZdOUoXeDWC7YSiTORfhBO\/1ZYo4yKDR73DqImu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+420-448-429-8863",
            "+420-220-944-1847"
        ],
        "secondaryEmailAddresses": [
            "dchan@KPN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1942-3-22",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_117_487_5471",
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
    "LoginInfo": {
        "userName": "agarcia",
        "password": "$2y$10$I3b2yLQnyc9JpDz0Lxc4Yeya2nHTmtdb3Tm.OZ8SR4OZRSZlLSaAm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-512-018-5579",
            "+66-318-156-2546"
        ],
        "secondaryEmailAddresses": [
            "agarcia@NordNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-3-9",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_118_712_6961",
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
    "LoginInfo": {
        "userName": "nstokes",
        "password": "$2y$10$JmoGrMfb.zzkQky7BasxzOfxCqmM3Z3La0Z9q0zCYh7Chbqpx\/RPe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-703-226-5936",
            "+7-130-488-1825"
        ],
        "secondaryEmailAddresses": [
            "nstokes@TT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1931-12-19",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_119_239_7861",
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
    "LoginInfo": {
        "userName": "hshepher",
        "password": "$2y$10$418U5c\/AcXAqhBkAT6pOz.ueemZITuS1SuX\/Av\/hx4Kh60qMA5gTG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-487-027-6193",
            "+66-894-588-2398"
        ],
        "secondaryEmailAddresses": [
            "hshepher@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1964-12-27",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_120_384_0294",
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
    "LoginInfo": {
        "userName": "ashort",
        "password": "$2y$10$qLHBosLuCLzj.t\/CPHw.8ez18H7WADNu8KGa8RHbklMAK4eiOwRHO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-756-685-8944",
            "+47-712-704-4863"
        ],
        "secondaryEmailAddresses": [
            "ashort@Telecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1971-9-30",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1671_121_056_7069",
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
    "LoginInfo": {
        "userName": "eandrews",
        "password": "$2y$10$Z8xDnWmBDgUaurb1NXOhIeoSNCsy.Cv.Mr16ko.Ob78FVZ60eGapi"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-944-665-2229",
            "+1671-326-181-9533"
        ],
        "secondaryEmailAddresses": [
            "eandrews@UUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1940-7-7",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "92_122_046_3207",
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
    "LoginInfo": {
        "userName": "lmontgom",
        "password": "$2y$10$hpRnl.MlkJA3PXGQv3Ls\/O6orEnMdzXjepT5fFhv\/Rer6980Jah9e"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+92-636-977-4351",
            "+92-296-038-7138"
        ],
        "secondaryEmailAddresses": [
            "lmontgom@Telkom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1976-2-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "352_123_577_7122",
    "PrimaryContactInfo": {
        "firstName": "Sadye",
        "lastName": "Orozco",
        "phoneNumber": "+352-123-577-7122",
        "email": "sorozco@GlasNET.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "sorozco",
        "password": "$2y$10$gKjcWKmj\/UIWJ6C105kxBuE.NWcIKTc7UPI6c\/DBosY8YVrywUe4C"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+352-461-046-4762",
            "+352-428-992-5069"
        ],
        "secondaryEmailAddresses": [
            "sorozco@UUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1955-9-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_124_152_8875",
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
    "LoginInfo": {
        "userName": "lodonnel",
        "password": "$2y$10$zETkUK6sh24dGRnw0nmAIez64iyfO4qEfCI9Oe06K4t.e6AJrP7JG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-875-835-6488",
            "+47-351-664-4128"
        ],
        "secondaryEmailAddresses": [
            "lodonnel@Unicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1954-12-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "359_125_135_1853",
    "PrimaryContactInfo": {
        "firstName": "Dell",
        "lastName": "Haynes",
        "phoneNumber": "+359-125-135-1853",
        "email": "dhaynes@AlgoNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dhaynes"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dhaynes"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dhaynes"
            }
        }
    },
    "LoginInfo": {
        "userName": "dhaynes",
        "password": "$2y$10$O7MxJhSMzOUQgbo8QLUyX.1iopz35p4rF2RaWSaA.jzow.JpsALBy"
    },
    "Address": {
        "streetAddressOfBuilding": "2536 Short Creek Road",
        "buildingName": "Building 85",
        "floor": null,
        "roomApartmentCondoNumber": "CB",
        "city": "\u0422\u044a\u043d\u043a\u043e\u0442\u043e \/ Tunkoto",
        "stateProvince": "SML",
        "locality": "\u041c\u0430\u0434\u0430\u043d \/ Madan",
        "country": "BG",
        "postalCode": "4914",
        "GeoSpatialInfo": {
            "latitude": "41.5",
            "longitude": "24.9667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-992-216-7724",
            "+359-610-386-8741"
        ],
        "secondaryEmailAddresses": [
            "dhaynes@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1962-4-8",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "385_126_497_8969",
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
    "LoginInfo": {
        "userName": "spaul",
        "password": "$2y$10$5ouvk0g9Ee4a89vTj08xNesfwFcyW0AoJAkBDjtR.YkzxF.EJ6Vz."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-729-945-7163",
            "+385-169-993-9850"
        ],
        "secondaryEmailAddresses": [
            "spaul@Telstra.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1940-1-24",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1787_127_501_6410",
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
    "LoginInfo": {
        "userName": "psoto",
        "password": "$2y$10$CDTQnghDK3Gk1MGx4LHTF.X9BWHlVeYQ6jGh5ms56E3XpJB3Pwk2q"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1787-471-276-0537",
            "+1787-274-874-5077"
        ],
        "secondaryEmailAddresses": [
            "psoto@NII.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1960-5-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "262_128_275_4895",
    "PrimaryContactInfo": {
        "firstName": "Leana",
        "lastName": "Schroeder",
        "phoneNumber": "+262-128-275-4895",
        "email": "lschroed@DaxNet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lschroed"
            }
        }
    },
    "LoginInfo": {
        "userName": "lschroed",
        "password": "$2y$10$gfr5C3jTYBnH0lLvWvTNE.pGeH.tUf7j2iK9rNQiLu0f.AO5Z5Sne"
    },
    "Address": {
        "streetAddressOfBuilding": "3759 Winding Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Denis",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97462 CEDEX",
        "GeoSpatialInfo": {
            "latitude": "-20.8823",
            "longitude": "55.4504"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-542-517-2200",
            "+262-900-217-8089"
        ],
        "secondaryEmailAddresses": [
            "lschroed@TeleSystems.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1945-11-4",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "441624_130_761_9116",
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
    "LoginInfo": {
        "userName": "snovak",
        "password": "$2y$10$uw8UxNq7YQ8YlRoiz9G6CueGkKffBEPewEAaNC9hK56fP5bLsZfXO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441624-660-683-5608",
            "+441624-438-693-9211"
        ],
        "secondaryEmailAddresses": [
            "snovak@Rogers.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1976-9-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_131_446_2695",
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
    "LoginInfo": {
        "userName": "eglass",
        "password": "$2y$10$veSoTC9VtPnWqJ1dVrQP.eYCBmqyGOo9LwOqv5UZetpRgFfNxx3\/e"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-192-017-2291",
            "+66-566-953-1139"
        ],
        "secondaryEmailAddresses": [
            "eglass@CCS.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2000-4-21",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "54_132_187_7938",
    "PrimaryContactInfo": {
        "firstName": "Randee",
        "lastName": "Castillo",
        "phoneNumber": "+54-132-187-7938",
        "email": "rcastill@Orstom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "rcastill",
        "password": "$2y$10$SOFi02A6HJH9Xo1krS9o4eQrDbCjlmZb5Z0bth5JibNe3yPBtAEei"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+54-875-835-7662",
            "+54-253-959-4016"
        ],
        "secondaryEmailAddresses": [
            "rcastill@NII.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1970-9-12",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "351_134_708_7462",
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
    "LoginInfo": {
        "userName": "ecunning",
        "password": "$2y$10$KpTJHQygHbfBwTqTQ8ltYuBUyB6GeIUdkRkPWRnj4LGIR1XEdjYjC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-34-392-7461",
            "+351-462-954-5549"
        ],
        "secondaryEmailAddresses": [
            "ecunning@MegaFon.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1947-6-8",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "354_135_441_2759",
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
    "LoginInfo": {
        "userName": "jpotter",
        "password": "$2y$10$6fuhploMyZLdekXyzPzHrOWb7I9KnH63iS5S4HVCYBxHh3MjtWjIG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+354-929-763-4192",
            "+354-997-069-2402"
        ],
        "secondaryEmailAddresses": [
            "jpotter@Bifty.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1958-7-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "441481_136_874_3404",
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
    "LoginInfo": {
        "userName": "ltyler",
        "password": "$2y$10$.T0ZbQe3FLJ7o6epKnLwDujOmQXsaO9rGMrE0MCbGu7XNsT3yVqRy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-161-831-4031",
            "+441481-552-574-4758"
        ],
        "secondaryEmailAddresses": [
            "ltyler@OTE.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1959-11-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "41_137_955_8730",
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
    "LoginInfo": {
        "userName": "jharrell",
        "password": "$2y$10$Jq4ncwlOkXj8RXHgYaeG.euGI.aoAdnKJLyWcCGCQBkAEZFLtXfVO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-259-388-5326",
            "+41-182-673-5766"
        ],
        "secondaryEmailAddresses": [
            "jharrell@KTC.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1989-5-25",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "356_138_412_5061",
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
    "LoginInfo": {
        "userName": "squintan",
        "password": "$2y$10$YR3T2z16lFrQMpkuEdqiXe5RznMVRVLH4zhBtcnWAlzbHtJJsKpqq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+356-668-509-0137",
            "+356-395-946-8939"
        ],
        "secondaryEmailAddresses": [
            "squintan@Telefonica.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2000-3-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "377_139_784_0385",
    "PrimaryContactInfo": {
        "firstName": "Sharan",
        "lastName": "Beasley",
        "phoneNumber": "+377-139-784-0385",
        "email": "sbeasley@TelecomItalia.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "sbeasley",
        "password": "$2y$10$77oSF0ao0jholbI40.idge58d\/yP3iClF61CnPYx7DglGtyBD28ai"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+377-721-895-5343",
            "+377-344-935-7869"
        ],
        "secondaryEmailAddresses": [
            "sbeasley@Telia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1993-12-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_140_946_3417",
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
    "LoginInfo": {
        "userName": "schan",
        "password": "$2y$10$gerCoepH7\/iZ4WCr28lJE.qZCG\/gKTJIn86hNb8L0\/rQ3Jovc1VF6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-656-012-4994",
            "+687-86-293-4652"
        ],
        "secondaryEmailAddresses": [
            "schan@TM.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1988-3-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_141_319_5007",
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
    "LoginInfo": {
        "userName": "lshaffer",
        "password": "$2y$10$1vtKoMNQZYwO6JDY0Rqj4.ugbcFROQwVRMmS2ne09DbePEKbb1zCG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-637-990-2185",
            "+375-300-983-2191"
        ],
        "secondaryEmailAddresses": [
            "lshaffer@Orange.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1976-7-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_142_421_8126",
    "PrimaryContactInfo": {
        "firstName": "Mitch",
        "lastName": "Durham",
        "phoneNumber": "+63-142-421-8126",
        "email": "mdurham@AlgoNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "mdurham",
        "password": "$2y$10$Qls\/k5w3KEq32EP\/MSqzEuWXZbH2QmhyDVdw1WWEGiLzWvh\/GCFvq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-462-245-7113",
            "+63-281-727-1680"
        ],
        "secondaryEmailAddresses": [
            "mdurham@KDDI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1972-4-7",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "213_143_582_4981",
    "PrimaryContactInfo": {
        "firstName": "Daina",
        "lastName": "Garner",
        "phoneNumber": "+213-143-582-4981",
        "email": "dgarner@ATT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dgarner"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dgarner"
            }
        }
    },
    "LoginInfo": {
        "userName": "dgarner",
        "password": "$2y$10$MjGAjXYj4OkOnDakRLryNOehgpBksJWSuEW13wmfZ2EouN\/FOe\/Di"
    },
    "Address": {
        "streetAddressOfBuilding": "2675 Blue Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Zemmoura",
        "stateProvince": "Relizane",
        "locality": "Relizane",
        "country": "DZ",
        "postalCode": "48008",
        "GeoSpatialInfo": {
            "latitude": "35.6799",
            "longitude": "0.7919"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+213-628-407-1899",
            "+213-321-930-4365"
        ],
        "secondaryEmailAddresses": [
            "dgarner@AlgoNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1967-6-11",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "880_144_393_3740",
    "PrimaryContactInfo": {
        "firstName": "Odis",
        "lastName": "Fuller",
        "phoneNumber": "+880-144-393-3740",
        "email": "ofuller@DaxNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ofuller",
        "password": "$2y$10$RraeybY7DiXjMkQt\/6dV7.wHHqTjE6Kmjn0f3mh0u3kmfaHSVIkwy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+880-670-146-5704",
            "+880-745-552-4319"
        ],
        "secondaryEmailAddresses": [
            "ofuller@PLDT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-5-12",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "81_145_606_0363",
    "PrimaryContactInfo": {
        "firstName": "Bryant",
        "lastName": "Brady",
        "phoneNumber": "+81-145-606-0363",
        "email": "bbrady@Telefonica.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bbrady"
            }
        }
    },
    "LoginInfo": {
        "userName": "bbrady",
        "password": "$2y$10$TQ97SsbSuro7T8sMDj9qrOWIhVexc4Bi6F2L50CVBsBHU4W79iI0a"
    },
    "Address": {
        "streetAddressOfBuilding": "5378 Short Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hara",
        "stateProvince": "Sanjo Shi",
        "locality": "Sanjo Shi",
        "country": "JP",
        "postalCode": "955-0158",
        "GeoSpatialInfo": {
            "latitude": "37.5157",
            "longitude": "139.024"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-694-253-0567",
            "+81-589-937-7500"
        ],
        "secondaryEmailAddresses": [
            "bbrady@Airtel.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1956-8-14",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_146_816_6595",
    "PrimaryContactInfo": {
        "firstName": "Tierra",
        "lastName": "Bradshaw",
        "phoneNumber": "+47-146-816-6595",
        "email": "tbradsha@Frontier.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "tbradsha",
        "password": "$2y$10$nCdyw5ozqQi.A5Nii5uf9OnnYgP2fJZCucC9KlERIfh428OeEBuQS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-397-476-3015",
            "+47-963-174-4668"
        ],
        "secondaryEmailAddresses": [
            "tbradsha@Movil.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1998-7-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_148_966_1018",
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
    "LoginInfo": {
        "userName": "lmarsh",
        "password": "$2y$10$NaxDtuCdqFJfC1TCKjoDFuLwQ1l1Z\/LY5u009PjE5EtY6DZ76i1Le"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-609-058-9349",
            "+375-560-360-5140"
        ],
        "secondaryEmailAddresses": [
            "lmarsh@Millicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1970-1-11",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "60_149_941_1956",
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
    "LoginInfo": {
        "userName": "lhunt",
        "password": "$2y$10$J.Bc5x0M4Lq8d55By4qjYO9N511\/i\/sndgxORkil9CQEgvJrf.Rbu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-114-137-9817",
            "+60-493-143-0501"
        ],
        "secondaryEmailAddresses": [
            "lhunt@Relcom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1976-2-5",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "389_150_126_8897",
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
    "LoginInfo": {
        "userName": "amccall",
        "password": "$2y$10$IebOU.4.nJTEMd5f.jw8te.gcM8EwI2ZZkrBeMSZb6A8lBvhvZBV2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+389-535-857-1205",
            "+389-330-495-0506"
        ],
        "secondaryEmailAddresses": [
            "amccall@Verizon.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1994-2-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "299_151_542_5167",
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
    "LoginInfo": {
        "userName": "mhuffman",
        "password": "$2y$10$\/9pJovqbDumRx\/7Or1ky9uDB8MsMXYBttSh1l1YwD6tXEjycqnw5a"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+299-834-898-8547",
            "+299-848-621-3999"
        ],
        "secondaryEmailAddresses": [
            "mhuffman@TM.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1972-5-1",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_152_514_7835",
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
    "LoginInfo": {
        "userName": "cpeterse",
        "password": "$2y$10$\/\/riax14DX5z\/MMsW13CWOQi701xgWjFWpBY\/Fy4MEd4ElFDDTXZW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-580-857-8528",
            "+47-707-248-0822"
        ],
        "secondaryEmailAddresses": [
            "cpeterse@GlasNET.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1969-11-6",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "1_153_416_8579",
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
    "LoginInfo": {
        "userName": "jestrada",
        "password": "$2y$10$GlQ.A4gMvTKjhK7HdVzPzO2cgf3ik.12ayouqG3cGYkzn8V6nKzFS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-906-618-2393",
            "+1-597-051-7857"
        ],
        "secondaryEmailAddresses": [
            "jestrada@WorldNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1973-9-20",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "351_155_643_3837",
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
    "LoginInfo": {
        "userName": "mchan",
        "password": "$2y$10$e9em2oypSsPsUdSI1sKOXOaOrPXvrF0RvggDyGa8Wpvxrg7vXbkzK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-983-982-3754",
            "+351-267-902-9240"
        ],
        "secondaryEmailAddresses": [
            "mchan@UI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1979-4-11",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "385_156_157_3739",
    "PrimaryContactInfo": {
        "firstName": "Elisha",
        "lastName": "Felix",
        "phoneNumber": "+385-156-157-3739",
        "email": "efelix@NordNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "efelix",
        "password": "$2y$10$p9NLNwsb0.kqhka9ZF\/XIODdHK\/0ROzcCVFrMiHWylMXA1kCZ0yLW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-381-617-4920",
            "+385-523-747-9161"
        ],
        "secondaryEmailAddresses": [
            "efelix@Rogers.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1998-1-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "94_157_009_8177",
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
    "LoginInfo": {
        "userName": "nbernal",
        "password": "$2y$10$Ur\/EvjGi9DBEgcm47kQHu.dN65RNLcy6BV4LRS18Kh1veoiu9mLJe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+94-712-669-1430",
            "+94-204-058-6279"
        ],
        "secondaryEmailAddresses": [
            "nbernal@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2001-4-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "352_158_815_3306",
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
    "LoginInfo": {
        "userName": "lgreer",
        "password": "$2y$10$U4\/9DeAfn8TSlbaOW9LFJ.pqnGljakF4zdmLII8tHKDNrAob6mQd."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+352-828-507-1792",
            "+352-429-026-5691"
        ],
        "secondaryEmailAddresses": [
            "lgreer@PTCL.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1963-5-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_159_855_5549",
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
    "LoginInfo": {
        "userName": "ireyna",
        "password": "$2y$10$kUo\/NwoeZJmfvLBO.HMr2uzk6jYTxfRBB\/uAmqRy5eZwdUpZIGQji"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-861-222-8615",
            "+375-300-142-5766"
        ],
        "secondaryEmailAddresses": [
            "ireyna@Safaricom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-5-25",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_160_267_4050",
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
    "LoginInfo": {
        "userName": "fmontgom",
        "password": "$2y$10$kf8AFE8FcJgG7HY.zwBUVu4ALrfFerJgmCchDuOORciU9lNQXAFQS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-14-470-2801",
            "+7-820-228-3022"
        ],
        "secondaryEmailAddresses": [
            "fmontgom@SKTelecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1988-11-30",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_161_342_4653",
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
    "LoginInfo": {
        "userName": "tvilla",
        "password": "$2y$10$A9R6mqXGSlvMzSMKSUczk.EoCEu1L9egcn6vPzDZeU8j96PzsOOim"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-340-328-1443",
            "+386-114-342-7322"
        ],
        "secondaryEmailAddresses": [
            "tvilla@NII.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1932-8-16",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "39_162_293_5140",
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
    "LoginInfo": {
        "userName": "wlin",
        "password": "$2y$10$WQZoRf17lcJAbYKzhy15tOlHIYA38op6w8lFj4EioA6P..3omStFS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-56-883-7697",
            "+39-694-849-3439"
        ],
        "secondaryEmailAddresses": [
            "wlin@KTC.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1969-8-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "371_163_074_5586",
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
    "LoginInfo": {
        "userName": "rgray",
        "password": "$2y$10$OlgF8QX4QUFgE1h4b24ep.Dw\/lLICVmWmfrBNkZCN1ERC4LBzj.ka"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-596-464-5944",
            "+371-822-255-3942"
        ],
        "secondaryEmailAddresses": [
            "rgray@Tata.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1932-1-16",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "594_164_429_0692",
    "PrimaryContactInfo": {
        "firstName": "Terry",
        "lastName": "Zamora",
        "phoneNumber": "+594-164-429-0692",
        "email": "tzamora@MTN.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "tzamora",
        "password": "$2y$10$tsB7MLldAtd33.LqykrC1Ol7b6TQMkSDfxDWfSz\/m8gHZvN24yHWi"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-67-594-3345",
            "+594-994-002-8409"
        ],
        "secondaryEmailAddresses": [
            "tzamora@TM.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1945-7-3",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1787_165_610_5983",
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
    "LoginInfo": {
        "userName": "tfrancis",
        "password": "$2y$10$dRR7T7ja23RjidfKwHGWX.HIcCDoUhUE1Fh20nBdTIPQRqEI4Fg7y"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1787-845-857-1652",
            "+1787-737-884-2324"
        ],
        "secondaryEmailAddresses": [
            "tfrancis@PTCL.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1948-5-6",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "56_166_828_8618",
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
    "LoginInfo": {
        "userName": "jlindsey",
        "password": "$2y$10$0dCXUEvpa6tmEgXHgem3\/On8dE8PdaMSiypSCsj.BCWcc5FscvI.i"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+56-774-284-6348",
            "+56-936-014-4915"
        ],
        "secondaryEmailAddresses": [
            "jlindsey@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-11-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_167_007_9070",
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
    "LoginInfo": {
        "userName": "janthony",
        "password": "$2y$10$DXFDdCeIMd7EmNJ313iLCu1.JJOYU\/7X2EaIPm1cwC\/S4yq1kq2KG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-321-331-9196",
            "+375-744-295-8743"
        ],
        "secondaryEmailAddresses": [
            "janthony@NordNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1961-12-13",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1_168_494_8685",
    "PrimaryContactInfo": {
        "firstName": "Nikki",
        "lastName": "Holmes",
        "phoneNumber": "+1-168-494-8685",
        "email": "nholmes@Telenor.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nholmes"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nholmes"
            }
        }
    },
    "LoginInfo": {
        "userName": "nholmes",
        "password": "$2y$10$IbXc5KAmeC0V5H0H7AVJAuKXMKjE7V8bLBkw3\/V5H\/wFtfusrQZ6i"
    },
    "Address": {
        "streetAddressOfBuilding": "5960 Big Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chapman",
        "stateProvince": "KS",
        "locality": "Dickinson",
        "country": "US",
        "postalCode": "67431",
        "GeoSpatialInfo": {
            "latitude": "38.9722",
            "longitude": "-97.017"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-766-984-9833",
            "+1-182-015-5892"
        ],
        "secondaryEmailAddresses": [
            "nholmes@NetCom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1986-2-16",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "370_169_834_8494",
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
    "LoginInfo": {
        "userName": "rmckinne",
        "password": "$2y$10$\/fDZ9QSxbdP9zSpg7IxL7.WMkc5fZB5tZY9p8ajDvydLAMmjsXQ3W"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-70-395-4044",
            "+370-320-446-0222"
        ],
        "secondaryEmailAddresses": [
            "rmckinne@Telefonica.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-9-20",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "61_170_171_3339",
    "PrimaryContactInfo": {
        "firstName": "Wilmer",
        "lastName": "Stevens",
        "phoneNumber": "+61-170-171-3339",
        "email": "wstevens@KPN.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "wstevens",
        "password": "$2y$10$K1rg0zy\/2eXsFPaD3xBqVOtNYnqQiYEqMba62nf5NbmGVSJuiXO72"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-14-720-5958",
            "+61-783-921-4558"
        ],
        "secondaryEmailAddresses": [
            "wstevens@TT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1950-7-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_171_335_7076",
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
    "LoginInfo": {
        "userName": "jarcher",
        "password": "$2y$10$kcwb\/sDlL0lu8htgUK9BLOQZAw28vxoLxrILk0WprNJcrMj5.cckS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-440-403-1161",
            "+63-780-425-7259"
        ],
        "secondaryEmailAddresses": [
            "jarcher@ATT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1972-3-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "262_173_425_7859",
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
    "LoginInfo": {
        "userName": "bblair",
        "password": "$2y$10$hHgovJCgjRGJZnMpfsl.ZOQgCHloNPYEYMXyfmyUlcI7lZGBLExQ2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-1-577-0264",
            "+262-88-663-2890"
        ],
        "secondaryEmailAddresses": [
            "bblair@UI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1963-10-3",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "55_174_703_7269",
    "PrimaryContactInfo": {
        "firstName": "Rena",
        "lastName": "Pace",
        "phoneNumber": "+55-174-703-7269",
        "email": "rpace@ICom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "rpace",
        "password": "$2y$10$3R2YkE\/6kzSl0x9pZldLUeFtf44Qm9S5JZEC9\/rLySz55vXHmY2H."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-818-022-7275",
            "+55-588-303-5847"
        ],
        "secondaryEmailAddresses": [
            "rpace@SEEDnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1970-8-20",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "590_175_842_9384",
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
    "LoginInfo": {
        "userName": "gthomas",
        "password": "$2y$10$Ar3397KhlXhdXCfcHagR9ebDOq5XchEg8.CcOt29njLj9\/0lrZt7C"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-687-587-8369",
            "+590-247-482-7718"
        ],
        "secondaryEmailAddresses": [
            "gthomas@Turkcell.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1971-4-7",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "44_176_175_6936",
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
    "LoginInfo": {
        "userName": "rmclaugh",
        "password": "$2y$10$G7FoA0wORIoLXUIPZP8ncOshlow5Ny.5E.SsziD.rvg1IESkOdanC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-931-991-2770",
            "+44-906-022-7708"
        ],
        "secondaryEmailAddresses": [
            "rmclaugh@OTE.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1994-6-5",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "371_177_535_8569",
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
    "LoginInfo": {
        "userName": "tswanson",
        "password": "$2y$10$ttwdemCIF0hQxZKT8ia0iOUWmjcZsaJilZKOtqEiLOxNJ9.s.VYaC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-418-864-9273",
            "+371-318-681-6184"
        ],
        "secondaryEmailAddresses": [
            "tswanson@Bifty.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1956-7-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "373_178_042_4404",
    "PrimaryContactInfo": {
        "firstName": "Sherell",
        "lastName": "Atkins",
        "phoneNumber": "+373-178-042-4404",
        "email": "satkins@Chunghwa.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "satkins",
        "password": "$2y$10$eg2JloxkHcRM9\/Ixz2QJSOjd5uJeC6Va74ZjCBZwTPbCn7c2AHpc6"
    },
    "Address": {
        "streetAddressOfBuilding": "5553 Little Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "37",
        "city": "Colibabovca",
        "stateProvince": "Leova",
        "locality": "Leova",
        "country": "MD",
        "postalCode": "MD-6316",
        "GeoSpatialInfo": {
            "latitude": "46.6467",
            "longitude": "28.4311"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+373-19-403-8034",
            "+373-145-973-1030"
        ],
        "secondaryEmailAddresses": [
            "satkins@LookData.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1994-12-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "44_179_390_6723",
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
    "LoginInfo": {
        "userName": "hfrankli",
        "password": "$2y$10$G9TjhdonuZKHkbC19PMXveoQNO0WvVdbrf6VDcBIWahFB3fm3rd1C"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-927-469-6369",
            "+44-594-274-1141"
        ],
        "secondaryEmailAddresses": [
            "hfrankli@Telia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1941-9-19",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "34_180_841_3727",
    "PrimaryContactInfo": {
        "firstName": "Carlo",
        "lastName": "Gilbert",
        "phoneNumber": "+34-180-841-3727",
        "email": "cgilbert@Vivendi.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "cgilbert",
        "password": "$2y$10$w7East\/TR8RkuTVHPMF67OppTgvD2uXfnVR63YJgK\/RN9feYsMK3e"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-889-262-6804",
            "+34-310-801-8961"
        ],
        "secondaryEmailAddresses": [
            "cgilbert@Unicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1980-4-20",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_181_760_8538",
    "PrimaryContactInfo": {
        "firstName": "Dionne",
        "lastName": "Brady",
        "phoneNumber": "+386-181-760-8538",
        "email": "dbrady@SingTel.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "dbrady",
        "password": "$2y$10$DJPIj3lxmMSFceDpQx3\/W.LiDP5ObtUUtJfLDDTh5.bFjYsYamZfe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-834-306-0839",
            "+386-988-055-0675"
        ],
        "secondaryEmailAddresses": [
            "dbrady@PLDT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1992-6-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "594_182_742_5189",
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
    "LoginInfo": {
        "userName": "jshaw",
        "password": "$2y$10$WPFsLlU30GA.kLKy3kVCSeyAbIOn6Nafhfi\/PG6lEYMBJq5E90Znu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-346-472-1048",
            "+594-643-840-9393"
        ],
        "secondaryEmailAddresses": [
            "jshaw@CenturyLink.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1995-1-7",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "441624_183_573_7097",
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
    "LoginInfo": {
        "userName": "nsweeney",
        "password": "$2y$10$vVpsh4olrmLL5iSSXl\/feucz.v8AnrIcLIbUjuoAFpaEYnpyrL\/Ru"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441624-135-970-1904",
            "+441624-836-237-0997"
        ],
        "secondaryEmailAddresses": [
            "nsweeney@ICom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1948-2-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "35818_184_514_1246",
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
    "LoginInfo": {
        "userName": "cjensen",
        "password": "$2y$10$BTfrlrPlo93XJ8t.1gJZd.0WHZMZXKWMB2z6zZ.5QYz40\/0WpFZSy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-355-723-3152",
            "+35818-866-102-0941"
        ],
        "secondaryEmailAddresses": [
            "cjensen@MTN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1938-2-22",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "359_185_345_2080",
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
    "LoginInfo": {
        "userName": "pfry",
        "password": "$2y$10$kUD1EomOt6NSRAYDHCLFc.hVgZAnrwvWQKpS5w9z9Om1Gtw\/hTk\/S"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-734-814-6208",
            "+359-813-246-0241"
        ],
        "secondaryEmailAddresses": [
            "pfry@OpenWorld.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-11-27",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_186_376_8951",
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
    "LoginInfo": {
        "userName": "kfowler",
        "password": "$2y$10$n7jQ3uFryUv3w8vn1tMgt.yK2RXBXqe7Gqva9x8zc8Y0iDnBqSwOu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-148-273-9271",
            "+386-358-104-7084"
        ],
        "secondaryEmailAddresses": [
            "kfowler@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1941-11-29",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "691_187_428_8154",
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
    "LoginInfo": {
        "userName": "aoneill",
        "password": "$2y$10$zgtBxLZg\/YMkfTXEwo3m2eWCQcbdE8OCgcCF6l0xl2bGzNmc67HP6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+691-745-252-9800",
            "+691-369-392-0905"
        ],
        "secondaryEmailAddresses": [
            "aoneill@TM.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1973-11-27",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "91_188_572_4694",
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
    "LoginInfo": {
        "userName": "lmorriso",
        "password": "$2y$10$OunJLAQsKTi8QlEDRBquLuUQLFGLbv.bYWs5bZyIme9KO3exkYrLW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-494-268-5991",
            "+91-144-496-6373"
        ],
        "secondaryEmailAddresses": [
            "lmorriso@Frontier.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1999-5-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "681_189_470_2983",
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
    "LoginInfo": {
        "userName": "eblackbu",
        "password": "$2y$10$i9fNpLzf9QFlWJ654UDMzOnjXyeJ2n0RZdYF4E2NpKpMqgv2OBqUW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+681-343-588-6807",
            "+681-166-545-3162"
        ],
        "secondaryEmailAddresses": [
            "eblackbu@NordNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-5-16",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1_190_679_1467",
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
    "LoginInfo": {
        "userName": "rpalacio",
        "password": "$2y$10$p6TahVCcN3iKBNy1nQ8yTOw2xPtjqoFXMyFvq6p95ST9azztap04S"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-594-353-6740",
            "+1-858-131-7740"
        ],
        "secondaryEmailAddresses": [
            "rpalacio@MaxComm.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1995-1-21",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "299_191_755_1958",
    "PrimaryContactInfo": {
        "firstName": "Mack",
        "lastName": "Esparza",
        "phoneNumber": "+299-191-755-1958",
        "email": "mesparza@Telecom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "mesparza",
        "password": "$2y$10$vo9j0sJQ2tWhIExBmcAys.T28T33aKeWJtDs\/lWPf3u1Tw52jlKdW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+299-944-602-4735",
            "+299-700-027-1352"
        ],
        "secondaryEmailAddresses": [
            "mesparza@MTN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1987-3-4",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_192_526_1187",
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
    "LoginInfo": {
        "userName": "aberry",
        "password": "$2y$10$VFtfcWDj2flYzvGeJb9.2Ofsu93FJT0jhzSdWqb8M5Lugv6ayg12u"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-728-849-0682",
            "+687-322-520-0585"
        ],
        "secondaryEmailAddresses": [
            "aberry@DaxNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-3-25",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "48_193_093_4810",
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
    "LoginInfo": {
        "userName": "mhawkins",
        "password": "$2y$10$YQhBkZkFjZsR0pigvITwd.5uayHtqcqAvNf9UH5IZsqGf2dt4k7py"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-394-399-8471",
            "+48-913-367-6471"
        ],
        "secondaryEmailAddresses": [
            "mhawkins@ATT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1957-2-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_194_053_0030",
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
    "LoginInfo": {
        "userName": "dgutierr",
        "password": "$2y$10$S2jJs6zHZ3iNdH..Jcu6duYEJcszss8\/Hv4eAZfBCriIy23uJbRHC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-88-979-9071",
            "+386-491-665-0979"
        ],
        "secondaryEmailAddresses": [
            "dgutierr@UUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1935-10-11",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "420_195_416_4075",
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
    "LoginInfo": {
        "userName": "cmurray",
        "password": "$2y$10$WJhPVtqeRIXpNpVws5fp\/.vqbf67oMr3KwDyJmjUTQdghrvZBnl\/G"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+420-270-814-4633",
            "+420-781-716-7875"
        ],
        "secondaryEmailAddresses": [
            "cmurray@Airtel.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1952-5-10",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "353_196_204_6758",
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
    "LoginInfo": {
        "userName": "apeck",
        "password": "$2y$10$XlVNLO1WLBK5aFjXQbYyiuGXNH5omaL1uYID\/OkZUU4wZdQjPB0LK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+353-931-399-8442",
            "+353-12-292-3992"
        ],
        "secondaryEmailAddresses": [
            "apeck@BCE.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1987-4-21",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_197_073_2331",
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
    "LoginInfo": {
        "userName": "amathis",
        "password": "$2y$10$YuCH26IydvqvW6Kzo7Jboe3u2Xmomsu8nA6wH8In7DshIpwo5xXh6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-630-471-9819",
            "+66-247-927-3402"
        ],
        "secondaryEmailAddresses": [
            "amathis@Jio.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1964-7-17",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "1441_198_865_1869",
    "PrimaryContactInfo": {
        "firstName": "Lincoln",
        "lastName": "Shelton",
        "phoneNumber": "+1441-198-865-1869",
        "email": "lshelton@CCI.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lshelton"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lshelton"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lshelton"
            }
        }
    },
    "LoginInfo": {
        "userName": "lshelton",
        "password": "$2y$10$yxW7ylOVQY9A5oKthjlw3OS7qRccy65GCbXgBikQ7dlrrz2MOEVQe"
    },
    "Address": {
        "streetAddressOfBuilding": "9447 Red Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Town of St. George",
        "stateProvince": "Saint George",
        "locality": "Saint George",
        "country": "BM",
        "postalCode": "GE 03",
        "GeoSpatialInfo": {
            "latitude": "32.3842",
            "longitude": "-64.6764"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1441-727-361-4827",
            "+1441-143-612-5348"
        ],
        "secondaryEmailAddresses": [
            "lshelton@Chunghwa.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1947-3-11",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "91_199_392_2056",
    "PrimaryContactInfo": {
        "firstName": "Brandon",
        "lastName": "Pace",
        "phoneNumber": "+91-199-392-2056",
        "email": "bpace@Telkom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bpace"
            }
        }
    },
    "LoginInfo": {
        "userName": "bpace",
        "password": "$2y$10$IZKaF3lXf2Uh6AwovzOj8u0egsgsuwARf7SCcS4.CMMoRu4eo.sjm"
    },
    "Address": {
        "streetAddressOfBuilding": "8475 Red Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sangvi Kd",
        "stateProvince": "NA",
        "locality": "Akola",
        "country": "IN",
        "postalCode": "444006",
        "GeoSpatialInfo": {
            "latitude": "20.4565",
            "longitude": "77.6103"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-619-955-7917",
            "+91-57-907-6154"
        ],
        "secondaryEmailAddresses": [
            "bpace@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1930-1-23",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "36_200_555_2212",
    "PrimaryContactInfo": {
        "firstName": "Rozanne",
        "lastName": "Mcdowell",
        "phoneNumber": "+36-200-555-2212",
        "email": "rmcdowel@Orange.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "rmcdowel",
        "password": "$2y$10$LpyV5JfLQhDTp7HlbrHmSeUmIgGmVRBDvuPEktep5BXUHaBkzJEeW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+36-410-242-5139",
            "+36-622-455-5694"
        ],
        "secondaryEmailAddresses": [
            "rmcdowel@Etisalat.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1931-7-9",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "213_201_152_6991",
    "PrimaryContactInfo": {
        "firstName": "Dessie",
        "lastName": "Mueller",
        "phoneNumber": "+213-201-152-6991",
        "email": "dmueller@BCE.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dmueller"
            }
        }
    },
    "LoginInfo": {
        "userName": "dmueller",
        "password": "$2y$10$LlZjPCgXar.w5ugRS0Vo3uLOLYppqeP8K\/QKJLl3GBZmphUlgEhIO"
    },
    "Address": {
        "streetAddressOfBuilding": "9832 Long Tree Way",
        "buildingName": "Building 22",
        "floor": 17,
        "roomApartmentCondoNumber": "8D",
        "city": "Azails",
        "stateProvince": "Tlemcen",
        "locality": "Tlemcen",
        "country": "DZ",
        "postalCode": "13080",
        "GeoSpatialInfo": {
            "latitude": "34.6816",
            "longitude": "-1.479"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+213-298-552-5587",
            "+213-216-102-2979"
        ],
        "secondaryEmailAddresses": [
            "dmueller@SEEDnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-10-7",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "441624_203_945_7247",
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
    "LoginInfo": {
        "userName": "mmeza",
        "password": "$2y$10$ZG3Q1KT6nElsCEP6L6CX0OyF34issis9gt8HYrYkrQ\/g\/TSU3Sguq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441624-653-721-8039",
            "+441624-906-044-5497"
        ],
        "secondaryEmailAddresses": [
            "mmeza@Optus.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2002-2-25",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "55_204_481_4245",
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
    "LoginInfo": {
        "userName": "srios",
        "password": "$2y$10$AFd9sGyNZXP\/5duXuJmGa.UuWTd3H6nTn8CbOFo7midhOhcQq0uI2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-969-406-7215",
            "+55-680-854-3632"
        ],
        "secondaryEmailAddresses": [
            "srios@Millicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1968-1-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "48_205_239_0731",
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
    "LoginInfo": {
        "userName": "ograves",
        "password": "$2y$10$LuPzxhspJc4jmGH04z13OuRm59vTL4Qn2sgAHNIRm.a8z\/O5uzWJG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-937-761-1068",
            "+48-908-814-5517"
        ],
        "secondaryEmailAddresses": [
            "ograves@Telkom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-11-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "380_206_464_6981",
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
    "LoginInfo": {
        "userName": "gdean",
        "password": "$2y$10$f\/7tjqEtIWqUECWlNNxgvOd1Z2DEKn56csoz3s\/xFUUVUI.jKCFxm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+380-605-086-6899",
            "+380-119-993-3678"
        ],
        "secondaryEmailAddresses": [
            "gdean@Telenor.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1959-9-14",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_207_805_1439",
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
    "LoginInfo": {
        "userName": "shubbard",
        "password": "$2y$10$Ddz24Gc4rUO818qBz2Spx.uJcXxHgwAM0a3MhjKSiQ2igfaGg2Yhu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-237-414-9288",
            "+7-502-181-2572"
        ],
        "secondaryEmailAddresses": [
            "shubbard@KPN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1954-8-28",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "370_208_392_3736",
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
    "LoginInfo": {
        "userName": "lgraves",
        "password": "$2y$10$DToSkYG374tLtxJgHq8RmOIyQzEUm2PceffVZfQcz3dm8jRydvuZe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-653-547-3836",
            "+370-196-031-2064"
        ],
        "secondaryEmailAddresses": [
            "lgraves@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-4-19",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "35818_209_073_7912",
    "PrimaryContactInfo": {
        "firstName": "Abel",
        "lastName": "Guerrero",
        "phoneNumber": "+35818-209-073-7912",
        "email": "aguerrer@KPN.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/aguerrer"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aguerrer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/aguerrer"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/aguerrer"
            }
        }
    },
    "LoginInfo": {
        "userName": "aguerrer",
        "password": "$2y$10$T.y64EajJSXLU4Re2WJiQ.zwbpr7Ljl46QVuM47fh9qsBO6jJfxui"
    },
    "Address": {
        "streetAddressOfBuilding": "8929 Long River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fisk\u00f6",
        "stateProvince": "Br\u00e4nd\u00f6",
        "locality": "Br\u00e4nd\u00f6",
        "country": "AX",
        "postalCode": "22930",
        "GeoSpatialInfo": {
            "latitude": "60.4525",
            "longitude": "21.0695"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-321-029-7506",
            "+35818-291-019-6246"
        ],
        "secondaryEmailAddresses": [
            "aguerrer@MegaFon.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1938-4-13",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "351_210_340_0364",
    "PrimaryContactInfo": {
        "firstName": "Shannon",
        "lastName": "Bryant",
        "phoneNumber": "+351-210-340-0364",
        "email": "sbryant@NTT.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "sbryant",
        "password": "$2y$10$jhEqT4ka2nMpGRrGtprOMuzbKo8G2nywQ0XuZlb\/uoNS2fkaCMNHu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-13-284-2857",
            "+351-492-115-6300"
        ],
        "secondaryEmailAddresses": [
            "sbryant@Turkcell.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1958-4-6",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "46_212_131_1148",
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
    "LoginInfo": {
        "userName": "twebb",
        "password": "$2y$10$6jQ\/Anl9CwQztYq77AXg3uTr0XCywiWmmrbdHVcYw2Tc5EwxtDSri"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+46-83-272-0059",
            "+46-536-723-9777"
        ],
        "secondaryEmailAddresses": [
            "twebb@KDDI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1972-2-15",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "385_213_345_5499",
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
    "LoginInfo": {
        "userName": "bjuarez",
        "password": "$2y$10$ayd6zLPuGjhWzQP.ptdTuOGT7uO2hgoyGrBYRPCVyncAKHaygb7MS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-252-892-5520",
            "+385-372-300-0181"
        ],
        "secondaryEmailAddresses": [
            "bjuarez@Orstom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1960-3-4",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_214_798_2054",
    "PrimaryContactInfo": {
        "firstName": "Leon",
        "lastName": "Molina",
        "phoneNumber": "+66-214-798-2054",
        "email": "lmolina@Orange.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "lmolina",
        "password": "$2y$10$oJFRXaYloCCs61D.4QXeV.Kl9.I.xNEt3H2eVx42PV8CqYKRmmVNa"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-173-663-8452",
            "+66-857-608-3211"
        ],
        "secondaryEmailAddresses": [
            "lmolina@Jio.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1989-1-3",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_215_692_7879",
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
    "LoginInfo": {
        "userName": "bchristi",
        "password": "$2y$10$37Tkxfp9Q8xajrfeQBNwuOm2kvoiizF8MdfZpW385MdU2M4JoQc.C"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-784-539-6943",
            "+63-808-326-8340"
        ],
        "secondaryEmailAddresses": [
            "bchristi@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-11-4",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "691_216_077_7724",
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
    "LoginInfo": {
        "userName": "mreese",
        "password": "$2y$10$1E8w7t5mKkpKY8B64hHYkuQGjqR4mdV4G470Y2JCiAxSyUTcEKTY2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+691-372-430-4332",
            "+691-626-178-7019"
        ],
        "secondaryEmailAddresses": [
            "mreese@Telefonica.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1971-3-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "94_217_806_4314",
    "PrimaryContactInfo": {
        "firstName": "Vanetta",
        "lastName": "Roberson",
        "phoneNumber": "+94-217-806-4314",
        "email": "vroberso@OpenWorld.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "vroberso",
        "password": "$2y$10$rpfcOmZ\/AnrIYB8QtO90Ku3N7hBLb5ZPo5x3ms4ZNY.VkXnCbrEb6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+94-49-789-6057",
            "+94-944-461-3244"
        ],
        "secondaryEmailAddresses": [
            "vroberso@SEEDnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1988-10-7",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "441481_218_067_2691",
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
    "LoginInfo": {
        "userName": "ewilliam",
        "password": "$2y$10$TnU2UbD\/8iBhtS19rchv5eEskpuGAaI9epbZkRflJhAMGWU5lqJOm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-345-875-6422",
            "+441481-628-158-1671"
        ],
        "secondaryEmailAddresses": [
            "ewilliam@Telecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1974-3-27",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "32_219_368_6703",
    "PrimaryContactInfo": {
        "firstName": "Devon",
        "lastName": "Khan",
        "phoneNumber": "+32-219-368-6703",
        "email": "dkhan@Telefonica.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "dkhan",
        "password": "$2y$10$bBfWfWJXD75MsoSc8c2ri.lF9m1NiZCAxVg79r\/nW9.cLAiZyJdiG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+32-893-613-1065",
            "+32-355-991-9857"
        ],
        "secondaryEmailAddresses": [
            "dkhan@EUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1995-8-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_221_125_8339",
    "PrimaryContactInfo": {
        "firstName": "Lonny",
        "lastName": "Sullivan",
        "phoneNumber": "+66-221-125-8339",
        "email": "lsulliva@Vodafone.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lsulliva"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lsulliva"
            }
        }
    },
    "LoginInfo": {
        "userName": "lsulliva",
        "password": "$2y$10$OZyiFHePtDnEoWo4MQzPy.ZnC7aj\/LD1Yz03DsJUfdwy2dCiwqxQ2"
    },
    "Address": {
        "streetAddressOfBuilding": "8779 Little Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chiang Klang",
        "stateProvince": "Nan",
        "locality": "Nan",
        "country": "TH",
        "postalCode": "55160",
        "GeoSpatialInfo": {
            "latitude": "19.3",
            "longitude": "100.8667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-301-247-4540",
            "+66-694-901-2547"
        ],
        "secondaryEmailAddresses": [
            "lsulliva@Vodafone.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-6-6",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "421_223_042_7823",
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
    "LoginInfo": {
        "userName": "jtorres",
        "password": "$2y$10$h32S7uTN4jYkktMra1GpZeeV36UfVRf7AMpJjVgl3JibDezVkHcZy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-294-076-5402",
            "+421-596-128-5095"
        ],
        "secondaryEmailAddresses": [
            "jtorres@Safaricom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1999-2-18",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "48_224_614_3862",
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
    "LoginInfo": {
        "userName": "ecordova",
        "password": "$2y$10$M\/etb53TJoTtGaBRFtICJet6qhwybmzMSxvRYCYeGTk3AaN0mwFIm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-677-101-3920",
            "+48-497-096-0155"
        ],
        "secondaryEmailAddresses": [
            "ecordova@PTCL.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-1-21",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "354_225_682_8335",
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
    "LoginInfo": {
        "userName": "acochran",
        "password": "$2y$10$vZ5G0Jb\/poJVbMqGYlEDD.wlDTBP0SI54N5zVPJhDS4o1yvPWl5ri"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+354-676-753-8432",
            "+354-818-573-1114"
        ],
        "secondaryEmailAddresses": [
            "acochran@Vivendi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1969-4-25",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "36_226_291_5578",
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
    "LoginInfo": {
        "userName": "sbest",
        "password": "$2y$10$HBNLZngMsYV.kr34ecYi2.kRUd.8wUjpbYphBr3vw9IZ1IlUype6e"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+36-472-135-6864",
            "+36-247-257-0119"
        ],
        "secondaryEmailAddresses": [
            "sbest@TT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1939-12-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "1340_227_941_1397",
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
    "LoginInfo": {
        "userName": "jdaniels",
        "password": "$2y$10$spZSD18eRCLNQb7h8zYW7.kYlzF62qDtftj7h5tBabJRPhEo7.UNy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1340-165-865-3868",
            "+1340-86-674-2310"
        ],
        "secondaryEmailAddresses": [
            "jdaniels@NetCom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-2-21",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "33_228_243_6534",
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
    "LoginInfo": {
        "userName": "shunter",
        "password": "$2y$10$AijqQA4IlumkTxw6aL.YV.dE8PiF\/H5RQokFgKMuAtuxQX5Nz\/Ei2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+33-926-896-4175",
            "+33-64-254-7919"
        ],
        "secondaryEmailAddresses": [
            "shunter@WorldNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1996-9-6",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_229_913_2162",
    "PrimaryContactInfo": {
        "firstName": "Sherly",
        "lastName": "Dodson",
        "phoneNumber": "+63-229-913-2162",
        "email": "sdodson@GlasNET.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sdodson"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sdodson"
            }
        }
    },
    "LoginInfo": {
        "userName": "sdodson",
        "password": "$2y$10$r5Nl5\/lEhMQS2imivojOf.DFPFt\/EHeW5AKlpOXCmO.IOGbzSbloG"
    },
    "Address": {
        "streetAddressOfBuilding": "3335 Little Woods Ride",
        "buildingName": "Building 98",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nasugbu",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "4231",
        "GeoSpatialInfo": {
            "latitude": "14.0739",
            "longitude": "120.6336"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-517-276-9251",
            "+63-86-199-3757"
        ],
        "secondaryEmailAddresses": [
            "sdodson@Bifty.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1939-7-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_230_680_0747",
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
    "LoginInfo": {
        "userName": "kdaniels",
        "password": "$2y$10$8edf.iybhelGW2JeEl1bLu47G0.Gqvxi32vYT8dFPJRBbZ77VzW3G"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-875-477-1718",
            "+386-346-990-3181"
        ],
        "secondaryEmailAddresses": [
            "kdaniels@NTT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1968-7-28",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_231_929_2356",
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
    "LoginInfo": {
        "userName": "lsaunder",
        "password": "$2y$10$UW15WurtwziGlcpQwNj31u2MFtxThO5AJ19q3XKOfpQACbCuZr.Gm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-435-976-2458",
            "+63-983-387-1051"
        ],
        "secondaryEmailAddresses": [
            "lsaunder@Telstra.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1937-2-28",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "61_232_479_5587",
    "PrimaryContactInfo": {
        "firstName": "Jimmie",
        "lastName": "Xiong",
        "phoneNumber": "+61-232-479-5587",
        "email": "jxiong@Zain.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "jxiong",
        "password": "$2y$10$BQsJmXYogfEAiAEce\/j.LeokbbDbIOUPyfyPMsxBTphXfAAKWnss6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-702-273-5877",
            "+61-783-062-6884"
        ],
        "secondaryEmailAddresses": [
            "jxiong@Vodafone.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-9-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "32_233_616_4312",
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
    "LoginInfo": {
        "userName": "adawson",
        "password": "$2y$10$\/W\/.P0DqR1vlG47AhgpBgOCoPkzqj8.TTLKK14BqxRRAg8PfLqgCi"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+32-528-334-8307",
            "+32-123-823-6056"
        ],
        "secondaryEmailAddresses": [
            "adawson@PTCL.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1995-3-24",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "298_234_020_3385",
    "PrimaryContactInfo": {
        "firstName": "Refugio",
        "lastName": "Hurley",
        "phoneNumber": "+298-234-020-3385",
        "email": "rhurley@Telecom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rhurley"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rhurley"
            }
        }
    },
    "LoginInfo": {
        "userName": "rhurley",
        "password": "$2y$10$96JE3HYNbHhOXPDo5B5o4Oyts8M3PZkwFFkfcqHGfw5KTH\/0sWUjq"
    },
    "Address": {
        "streetAddressOfBuilding": "2442 Short Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "G\u00f8ta",
        "stateProvince": null,
        "locality": null,
        "country": "FO",
        "postalCode": "510",
        "GeoSpatialInfo": {
            "latitude": "62.2",
            "longitude": "-6.7333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+298-138-870-2994",
            "+298-593-162-5585"
        ],
        "secondaryEmailAddresses": [
            "rhurley@Chunghwa.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1956-1-23",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_235_741_7036",
    "PrimaryContactInfo": {
        "firstName": "Monique",
        "lastName": "Clements",
        "phoneNumber": "+375-235-741-7036",
        "email": "mclement@Jio.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "mclement",
        "password": "$2y$10$Omq33fhywlvPolc9MNzfO..EOQaM8Nu.CqcqAv7vugAa.3nJMzif6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-195-991-1745",
            "+375-935-281-9961"
        ],
        "secondaryEmailAddresses": [
            "mclement@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-4-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "298_236_154_2019",
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
    "LoginInfo": {
        "userName": "ediaz",
        "password": "$2y$10$IXZFMD7\/K17dBltzsbYxueNkent\/kinIm9xx4EUwv4R0LDdz2sWL6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+298-136-738-3844",
            "+298-757-710-8673"
        ],
        "secondaryEmailAddresses": [
            "ediaz@Access.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1956-11-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "60_237_187_7038",
    "PrimaryContactInfo": {
        "firstName": "Eldon",
        "lastName": "Ahmed",
        "phoneNumber": "+60-237-187-7038",
        "email": "eahmed@ICom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "eahmed",
        "password": "$2y$10$iumjgERzbGsuQqcid0L3N.zCIv8i7XOc9bn8fKhr3Rc7kBzAIiH96"
    },
    "Address": {
        "streetAddressOfBuilding": "5171 Little Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kuala Terengganu",
        "stateProvince": "TRG",
        "locality": "Terengganu",
        "country": "MY",
        "postalCode": "20928",
        "GeoSpatialInfo": {
            "latitude": "5.3117",
            "longitude": "103.1199"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-744-200-8057",
            "+60-994-916-9759"
        ],
        "secondaryEmailAddresses": [
            "eahmed@Turkcell.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-1-19",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_238_468_3309",
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
    "LoginInfo": {
        "userName": "ehiggins",
        "password": "$2y$10$wVC0sc\/lK90M62.XNM0roOXwYYaHCrnTbPpoJVx\/4wR.yJ37du.bO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-950-282-8879",
            "+687-593-650-0960"
        ],
        "secondaryEmailAddresses": [
            "ehiggins@Telia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1959-8-27",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "41_239_161_1678",
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
    "LoginInfo": {
        "userName": "bcobb",
        "password": "$2y$10$9\/QrDL1LIZVAdkSFzy4KUuXviCfmP8O8pPe5rMRvyfi3hJqc974rK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-707-991-4993",
            "+41-659-546-5495"
        ],
        "secondaryEmailAddresses": [
            "bcobb@Frontier.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1933-8-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1809_240_784_5981",
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
    "LoginInfo": {
        "userName": "jhenders",
        "password": "$2y$10$h\/G7x1flzBfSn5T2o0PZYORJzTBozmt3E\/kQ2wMdhayQ43J2xGDCm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1809-972-870-0814",
            "+1809-631-162-4130"
        ],
        "secondaryEmailAddresses": [
            "jhenders@Belgacom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1935-5-9",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "376_241_474_4995",
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
    "LoginInfo": {
        "userName": "bfaulkne",
        "password": "$2y$10$f6ICwApd97COiSEAOHxEGOQpfB0Ln7dIa7uC9h3xkrPrUVBvMVcXS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+376-949-602-9953",
            "+376-150-097-3889"
        ],
        "secondaryEmailAddresses": [
            "bfaulkne@Vivendi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-9-21",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "370_242_708_7084",
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
    "LoginInfo": {
        "userName": "cphillip",
        "password": "$2y$10$kacWE1rQEgerdqJEXFFSuu3fzw2CvZbZxy.\/.CncDtoHDGR8wNMBe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-400-603-9145",
            "+370-791-318-5487"
        ],
        "secondaryEmailAddresses": [
            "cphillip@GreenNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-2-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "441481_243_517_0029",
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
    "LoginInfo": {
        "userName": "kfarmer",
        "password": "$2y$10$l9.Vj98sTSDEFbcErp9QSOobYMbCEgMwJkYYE2i\/6UyvaCaEo.JQy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-366-562-2570",
            "+441481-81-998-6684"
        ],
        "secondaryEmailAddresses": [
            "kfarmer@EUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1954-9-16",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "92_244_040_7584",
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
    "LoginInfo": {
        "userName": "jmcfarla",
        "password": "$2y$10$NU7x2GTuHkqDrtDF7ZXix.ZOVASE5QxFo\/MWk3OmElbHA8ZSGqdwe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+92-402-418-5529",
            "+92-256-518-2609"
        ],
        "secondaryEmailAddresses": [
            "jmcfarla@BCE.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1953-12-29",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "54_245_073_0201",
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
    "LoginInfo": {
        "userName": "ecasey",
        "password": "$2y$10$.Q7PAIf9xAAstYkNUna8Sujp\/JLQZzL5dJaD90jcDoN1P1iK\/.pga"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+54-607-330-8924",
            "+54-807-200-5691"
        ],
        "secondaryEmailAddresses": [
            "ecasey@Orange.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1987-1-29",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "39_246_202_6312",
    "PrimaryContactInfo": {
        "firstName": "Rigoberto",
        "lastName": "Bauer",
        "phoneNumber": "+39-246-202-6312",
        "email": "rbauer@Oi.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rbauer"
            }
        }
    },
    "LoginInfo": {
        "userName": "rbauer",
        "password": "$2y$10$Edpg0Rxwk1aYHisNju41weenwftt0VDmUA\/zbaFYjxP58HM8Rd9lC"
    },
    "Address": {
        "streetAddressOfBuilding": "2947 Short Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mongiana",
        "stateProvince": "CI",
        "locality": "Vibo Valentia",
        "country": "IT",
        "postalCode": "89823",
        "GeoSpatialInfo": {
            "latitude": "38.5148",
            "longitude": "16.3194"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-401-415-3395",
            "+39-593-454-0462"
        ],
        "secondaryEmailAddresses": [
            "rbauer@Tata.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1950-12-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "46_247_465_0424",
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
    "LoginInfo": {
        "userName": "lrivera",
        "password": "$2y$10$Vc6L8LHsXOP9ap\/EkbZXx.OCbw7b\/hibiJXVu0zBLEyLV15f0XxT."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+46-489-120-2979",
            "+46-914-997-2110"
        ],
        "secondaryEmailAddresses": [
            "lrivera@LGUplus.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1948-5-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "371_248_566_2273",
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
    "LoginInfo": {
        "userName": "rramos",
        "password": "$2y$10$M2KSVMzY05xLE.cJ723nAuiRx87m\/.jJutorLIzEOMNkaqM1qI02O"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-735-997-6732",
            "+371-172-497-5547"
        ],
        "secondaryEmailAddresses": [
            "rramos@Orange.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1977-2-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_249_835_4466",
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
    "LoginInfo": {
        "userName": "jleblanc",
        "password": "$2y$10$aL8\/.eGWYRqAeyA18tnQ7ePcsoIaGd3fZ7DAg4jqv8hlKJ1c2bXJa"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-154-056-2624",
            "+7-927-601-0167"
        ],
        "secondaryEmailAddresses": [
            "jleblanc@UI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1935-10-10",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "423_250_722_6484",
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
    "LoginInfo": {
        "userName": "hguzman",
        "password": "$2y$10$3R9sTkfTDgMq94AS45hZkOBbkpmRQ2U1cup9EYbF58sHdGig5\/8eO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-819-850-8387",
            "+423-783-529-0406"
        ],
        "secondaryEmailAddresses": [
            "hguzman@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1984-2-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "33_251_121_0274",
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
    "LoginInfo": {
        "userName": "jfischer",
        "password": "$2y$10$D\/D7C9uMKfM79PUemg1Gk.q.yknYK2DLV\/jWWX.QpJL2Za7dORfxq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+33-150-442-6681",
            "+33-896-808-4589"
        ],
        "secondaryEmailAddresses": [
            "jfischer@Tata.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1968-10-5",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "57_252_797_7635",
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
    "LoginInfo": {
        "userName": "acraig",
        "password": "$2y$10$JZ7wpsEjZlNDPBmQ8LRVm.qzLah9ci6y9hcqvmuusBYHbeL.917Qm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+57-688-272-7170",
            "+57-887-792-9714"
        ],
        "secondaryEmailAddresses": [
            "acraig@KPN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1996-12-6",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "1441_253_304_5182",
    "PrimaryContactInfo": {
        "firstName": "Aron",
        "lastName": "Herring",
        "phoneNumber": "+1441-253-304-5182",
        "email": "aherring@NTT.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/aherring"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aherring"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/aherring"
            }
        }
    },
    "LoginInfo": {
        "userName": "aherring",
        "password": "$2y$10$vSglWpA5VVIvqZB7SAz1OOslhOpjLn7nRapeCZVozt95X1gwJw9EC"
    },
    "Address": {
        "streetAddressOfBuilding": "3302 Green Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pembroke",
        "stateProvince": "Pembroke Parish",
        "locality": "Pembroke Parish",
        "country": "BM",
        "postalCode": "HM 05",
        "GeoSpatialInfo": {
            "latitude": "32.3002",
            "longitude": "-64.792"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1441-984-032-9046",
            "+1441-847-431-3732"
        ],
        "secondaryEmailAddresses": [
            "aherring@Unicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1972-11-13",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "502_255_722_8564",
    "PrimaryContactInfo": {
        "firstName": "Katelin",
        "lastName": "Crane",
        "phoneNumber": "+502-255-722-8564",
        "email": "kcrane@Millicom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kcrane"
            }
        }
    },
    "LoginInfo": {
        "userName": "kcrane",
        "password": "$2y$10$YDC89YdZEw9DKRC.0XfCuuHd0lON.ggg99VNtsZcEnW1gbx9pubLy"
    },
    "Address": {
        "streetAddressOfBuilding": "5710 Green Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "A7",
        "city": "SAN GABRIEL PANTZUY (SAN MIGUEL CHICAJ)",
        "stateProvince": "DEPTO DE BAJA VERAPAZ",
        "locality": "DEPTO DE BAJA VERAPAZ",
        "country": "GT",
        "postalCode": "15012",
        "GeoSpatialInfo": {
            "latitude": "15.0516",
            "longitude": "-90.4148"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+502-588-288-9938",
            "+502-544-693-3391"
        ],
        "secondaryEmailAddresses": [
            "kcrane@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-9-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_256_915_7220",
    "PrimaryContactInfo": {
        "firstName": "Linn",
        "lastName": "Dixon",
        "phoneNumber": "+386-256-915-7220",
        "email": "ldixon@UI.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ldixon"
            }
        }
    },
    "LoginInfo": {
        "userName": "ldixon",
        "password": "$2y$10$t2DJBbtY\/PtWQpN.Z2rCZu7KHvA6Ve\/ckchtqXffD6bywlJrAcOsC"
    },
    "Address": {
        "streetAddressOfBuilding": "5232 Red Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Preddvor",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "4205",
        "GeoSpatialInfo": {
            "latitude": "46.3025",
            "longitude": "14.4231"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-772-758-7075",
            "+386-53-486-4854"
        ],
        "secondaryEmailAddresses": [
            "ldixon@GreenNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-11-17",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "423_257_905_8602",
    "PrimaryContactInfo": {
        "firstName": "Orval",
        "lastName": "Tapia",
        "phoneNumber": "+423-257-905-8602",
        "email": "otapia@DaxNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "otapia",
        "password": "$2y$10$rp039YWAHk6J0u7NMczZSug0bi06l9L9oLAVU0NsLer0TDpP8xVZ2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-647-628-5009",
            "+423-578-066-6271"
        ],
        "secondaryEmailAddresses": [
            "otapia@Bifty.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1961-10-4",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "81_258_566_4481",
    "PrimaryContactInfo": {
        "firstName": "Oswaldo",
        "lastName": "Castaneda",
        "phoneNumber": "+81-258-566-4481",
        "email": "ocastane@CUBENet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ocastane",
        "password": "$2y$10$5AA64LpN2sf3P1jRFj5pKOiU7FvwRPiyv\/vQj6CAoJDFT5iSNmaZO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-225-888-2149",
            "+81-852-005-2703"
        ],
        "secondaryEmailAddresses": [
            "ocastane@Airtel.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-3-21",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "371_259_985_8925",
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
    "LoginInfo": {
        "userName": "ablair",
        "password": "$2y$10$QJ4yWkcmTQrQYTThijpEp..atvJseRLUD4D0diBykAba.qP7jXlY."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-282-485-1821",
            "+371-975-368-3611"
        ],
        "secondaryEmailAddresses": [
            "ablair@Turkcell.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1958-4-24",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "41_260_401_2914",
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
    "LoginInfo": {
        "userName": "lcaldwel",
        "password": "$2y$10$2pNQH.IjcACP4KeHeZlrGeiFppS8N8bpD2pA.KzKH4AcWOijhl3zG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-469-736-9491",
            "+41-951-009-1961"
        ],
        "secondaryEmailAddresses": [
            "lcaldwel@ATT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1933-9-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1_261_510_2766",
    "PrimaryContactInfo": {
        "firstName": "Shena",
        "lastName": "Jackson",
        "phoneNumber": "+1-261-510-2766",
        "email": "sjackson@Oi.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sjackson"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sjackson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sjackson"
            }
        }
    },
    "LoginInfo": {
        "userName": "sjackson",
        "password": "$2y$10$jCMX4mlPvyZUaE5lDqvQf.PzLAvQk7.zCiZIH\/Z\/HywqF8LazJ6Je"
    },
    "Address": {
        "streetAddressOfBuilding": "4703 Long Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hondo",
        "stateProvince": "NM",
        "locality": "Lincoln",
        "country": "US",
        "postalCode": "88336",
        "GeoSpatialInfo": {
            "latitude": "33.3876",
            "longitude": "-105.2708"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-136-585-2112",
            "+1-872-182-8057"
        ],
        "secondaryEmailAddresses": [
            "sjackson@Telefonica.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1983-6-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "590_262_394_3560",
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
    "LoginInfo": {
        "userName": "bjarvis",
        "password": "$2y$10$R.wHQAJf8weCfZGnPOdwOuGmf.6bZQi7USPkXU9rO1wHR77ZqSKva"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-234-522-3355",
            "+590-28-124-4184"
        ],
        "secondaryEmailAddresses": [
            "bjarvis@AIS.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1932-8-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "691_263_728_3764",
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
    "LoginInfo": {
        "userName": "idurham",
        "password": "$2y$10$Vd0zXypqZRaO6Eo.22DLJe1506LtgZm6UWg\/fjbi0\/\/GDaztisYy."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+691-447-103-2118",
            "+691-711-779-4110"
        ],
        "secondaryEmailAddresses": [
            "idurham@Softbank.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-3-20",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "506_264_360_4650",
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
    "LoginInfo": {
        "userName": "rvillarr",
        "password": "$2y$10$EVi2bRgej.2Bhs4k0oeXDu6zm8bmI6n5V8qIXKvoAVfIfNhgk3N2C"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+506-77-349-4627",
            "+506-92-158-7451"
        ],
        "secondaryEmailAddresses": [
            "rvillarr@CCS.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1953-11-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "34_265_300_3394",
    "PrimaryContactInfo": {
        "firstName": "Elsy",
        "lastName": "Bentley",
        "phoneNumber": "+34-265-300-3394",
        "email": "ebentley@NTT.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ebentley",
        "password": "$2y$10$Izdv8cWoBZpxftSQ.wysj.plYgvQRfztGlNxUjajFiaQj78MJK9rG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-6-451-7694",
            "+34-499-749-5110"
        ],
        "secondaryEmailAddresses": [
            "ebentley@OpenWorld.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1958-10-26",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "92_266_028_3859",
    "PrimaryContactInfo": {
        "firstName": "Johnny",
        "lastName": "Greer",
        "phoneNumber": "+92-266-028-3859",
        "email": "jgreer@CUBENet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "jgreer",
        "password": "$2y$10$H9Mj0HfW9n6ajyVqxQXGke1BmpW59vTnJYpsuAhNMysqQHD0noSha"
    },
    "Address": {
        "streetAddressOfBuilding": "5392 Big Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Noorabad",
        "stateProvince": "Hyderabad",
        "locality": "Hyderabad",
        "country": "PK",
        "postalCode": "77041",
        "GeoSpatialInfo": {
            "latitude": "26.6412",
            "longitude": "68.3241"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+92-60-500-7062",
            "+92-522-645-7359"
        ],
        "secondaryEmailAddresses": [
            "jgreer@Telus.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1944-9-21",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_267_833_8708",
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
    "LoginInfo": {
        "userName": "fvu",
        "password": "$2y$10$9\/a6ttYBZYWcjM9odtIJSeioZKtro0hZRaZNm8K8r7.tZIOQyTxYG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-398-574-1795",
            "+7-993-913-5226"
        ],
        "secondaryEmailAddresses": [
            "fvu@TeleSystems.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-3-17",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "56_268_420_0770",
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
    "LoginInfo": {
        "userName": "mstrong",
        "password": "$2y$10$Pf8m44y4olHjyyAqwwkuheWDP3oLMJeXGQFvATPJ75vAmAd1ygPDW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+56-934-175-5725",
            "+56-266-078-0000"
        ],
        "secondaryEmailAddresses": [
            "mstrong@Vodafone.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1940-4-11",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "40_269_885_4382",
    "PrimaryContactInfo": {
        "firstName": "Katheryn",
        "lastName": "Bass",
        "phoneNumber": "+40-269-885-4382",
        "email": "kbass@Telenor.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kbass"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kbass"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kbass"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kbass"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kbass"
            }
        }
    },
    "LoginInfo": {
        "userName": "kbass",
        "password": "$2y$10$WEpGC99oXT8CiDLniqwWueeiJ.36\/R2RRKOnOx2Rkff2lZsSPEoTC"
    },
    "Address": {
        "streetAddressOfBuilding": "519 Short Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pite\u015fti",
        "stateProvince": "Arge\u015f",
        "locality": "Arge\u015f",
        "country": "RO",
        "postalCode": "110094",
        "GeoSpatialInfo": {
            "latitude": "44.85",
            "longitude": "24.8667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+40-824-394-4858",
            "+40-191-318-4194"
        ],
        "secondaryEmailAddresses": [
            "kbass@Telecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1948-5-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "55_270_319_8133",
    "PrimaryContactInfo": {
        "firstName": "Adrien",
        "lastName": "Eaton",
        "phoneNumber": "+55-270-319-8133",
        "email": "aeaton@APICnet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "aeaton",
        "password": "$2y$10$brf.pWR7cHW72z\/X696lWu3QbHMQ0e32keXrdQLLNBVGSwFJnC\/36"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-505-299-7555",
            "+55-137-742-7955"
        ],
        "secondaryEmailAddresses": [
            "aeaton@PTCL.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1950-4-13",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_271_772_5051",
    "PrimaryContactInfo": {
        "firstName": "Tanika",
        "lastName": "Lloyd",
        "phoneNumber": "+386-271-772-5051",
        "email": "tlloyd@Airtel.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "tlloyd",
        "password": "$2y$10$WvGQh6Xy5VtbZuJbG25O4eBZwKYb.5Dz7l3oBOJOfN2iFL7zdBbVi"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-549-542-9604",
            "+386-827-768-4840"
        ],
        "secondaryEmailAddresses": [
            "tlloyd@DaxNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1949-12-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "389_272_352_6889",
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
    "LoginInfo": {
        "userName": "cgates",
        "password": "$2y$10$ZZakn63Kmt4hGXoL.GOzm.aqGVTO40zxHZDmo8NXtd.xb0peX6Cbu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+389-211-846-7054",
            "+389-631-454-6484"
        ],
        "secondaryEmailAddresses": [
            "cgates@WorldNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1957-1-9",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "66_273_632_2043",
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
    "LoginInfo": {
        "userName": "lhill",
        "password": "$2y$10$0opOWSLkp9ohYnvvSy6Sh.DTnwG05kToy.l.41TNp5k5OpSEjivpu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-414-718-3226",
            "+66-646-795-6412"
        ],
        "secondaryEmailAddresses": [
            "lhill@Verizon.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-7-5",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "421_274_131_9898",
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
    "LoginInfo": {
        "userName": "alawrenc",
        "password": "$2y$10$cimY4qdX038fxybMGhaOs.tlyW72JbQsurdy3vL0tZrHZ9mzCNis6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-137-572-9921",
            "+421-373-742-4943"
        ],
        "secondaryEmailAddresses": [
            "alawrenc@KPN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-6-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "352_275_139_5930",
    "PrimaryContactInfo": {
        "firstName": "Werner",
        "lastName": "Booth",
        "phoneNumber": "+352-275-139-5930",
        "email": "wbooth@Swisscom.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/wbooth"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wbooth"
            }
        }
    },
    "LoginInfo": {
        "userName": "wbooth",
        "password": "$2y$10$NS31M5dYlP\/mLVj6zmTg8eJWXLX6SgcuEKxkr1qwfuROtQOlhmxvK"
    },
    "Address": {
        "streetAddressOfBuilding": "5086 Little Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mersch",
        "stateProvince": "ME",
        "locality": "Mersch",
        "country": "LU",
        "postalCode": "L-7536",
        "GeoSpatialInfo": {
            "latitude": "49.7439",
            "longitude": "6.102"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+352-866-700-8891",
            "+352-918-300-9687"
        ],
        "secondaryEmailAddresses": [
            "wbooth@Telstra.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1996-3-13",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1671_276_591_6005",
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
    "LoginInfo": {
        "userName": "dlane",
        "password": "$2y$10$8SZrG8Nxb59UDmedD3fMUurYtCGCjGseYdzR\/PA59uCt.cirxGRUK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-281-198-7701",
            "+1671-644-431-9377"
        ],
        "secondaryEmailAddresses": [
            "dlane@CCI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1938-7-28",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "35818_277_825_2404",
    "PrimaryContactInfo": {
        "firstName": "Luke",
        "lastName": "Mejia",
        "phoneNumber": "+35818-277-825-2404",
        "email": "lmejia@PTCL.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lmejia"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lmejia"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lmejia"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lmejia"
            }
        }
    },
    "LoginInfo": {
        "userName": "lmejia",
        "password": "$2y$10$.cORmmYASrF02KpD2FLTp.w\/GWnvzm3P8KDDyyXCjBgatD7mMdgc."
    },
    "Address": {
        "streetAddressOfBuilding": "870 Winding Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lemland",
        "stateProvince": "Lemland",
        "locality": "Lemland",
        "country": "AX",
        "postalCode": "22610",
        "GeoSpatialInfo": {
            "latitude": "60.0491",
            "longitude": "20.1232"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-375-703-0421",
            "+35818-369-716-4001"
        ],
        "secondaryEmailAddresses": [
            "lmejia@PLDT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1980-1-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "590_278_283_4810",
    "PrimaryContactInfo": {
        "firstName": "Rosina",
        "lastName": "Blake",
        "phoneNumber": "+590-278-283-4810",
        "email": "rblake@Telkom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "rblake",
        "password": "$2y$10$G4l9HgTPxaJWPHAYUwx7j.qbkN82LGV3XyPq0wIBGGG\/mEXQSLUl2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-530-081-6758",
            "+590-382-742-2763"
        ],
        "secondaryEmailAddresses": [
            "rblake@Millicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-5-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "359_279_049_1487",
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
    "LoginInfo": {
        "userName": "tmays",
        "password": "$2y$10$elBbOXCgNyPkhK9RuInKl.Nv7Jq3Cx1Oi3rwe5rgkeOxf0gqDFOAy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-252-906-5604",
            "+359-888-062-5082"
        ],
        "secondaryEmailAddresses": [
            "tmays@Vodafone.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1930-6-15",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_280_908_9691",
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
    "LoginInfo": {
        "userName": "ikim",
        "password": "$2y$10$Lc8UrvC4iZxH3vcaUNzUU.AESYfo3vuS2sEOrpN3kxAcLY4WD7cmS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-60-619-2673",
            "+63-834-797-9338"
        ],
        "secondaryEmailAddresses": [
            "ikim@Vivendi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1964-8-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "54_281_082_5234",
    "PrimaryContactInfo": {
        "firstName": "Renate",
        "lastName": "Frye",
        "phoneNumber": "+54-281-082-5234",
        "email": "rfrye@Sprint.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "rfrye",
        "password": "$2y$10$iPvGKECcRFrrYVLse\/NF5uojiGNc2sy0Pv7.FdsD2kh0DtAlFrTvC"
    },
    "Address": {
        "streetAddressOfBuilding": "8561 Little Creek Road",
        "buildingName": "Building FD",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "BARRIO SAN BERNARDO",
        "stateProvince": "T",
        "locality": "Tucuman",
        "country": "AR",
        "postalCode": "4000",
        "GeoSpatialInfo": {
            "latitude": "-26.8083",
            "longitude": "-65.2333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+54-752-530-8621",
            "+54-297-795-0174"
        ],
        "secondaryEmailAddresses": [
            "rfrye@Vodafone.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-1-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "262_282_564_2188",
    "PrimaryContactInfo": {
        "firstName": "Zaida",
        "lastName": "Young",
        "phoneNumber": "+262-282-564-2188",
        "email": "zyoung@GreenNet.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/zyoung"
            }
        }
    },
    "LoginInfo": {
        "userName": "zyoung",
        "password": "$2y$10$fkKesplyo3z2nT3UT1\/.Y.DtYmqrFt5KQWb4PRo7sMZ\/yoET4\/Yl6"
    },
    "Address": {
        "streetAddressOfBuilding": "4779 Big Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Pierre",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97459 CEDEX",
        "GeoSpatialInfo": {
            "latitude": "-21.3393",
            "longitude": "55.4781"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-775-936-3244",
            "+262-484-492-8182"
        ],
        "secondaryEmailAddresses": [
            "zyoung@Orange.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1949-2-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "378_283_259_0147",
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
    "LoginInfo": {
        "userName": "rsnyder",
        "password": "$2y$10$REtAenUYGtNRcGj2LP2K6uEQ2\/gwugoGDp6nVta3WG4FSFsh9tXpm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+378-130-069-7811",
            "+378-325-034-2806"
        ],
        "secondaryEmailAddresses": [
            "rsnyder@UUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1968-11-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "353_285_885_9490",
    "PrimaryContactInfo": {
        "firstName": "Prince",
        "lastName": "Frazier",
        "phoneNumber": "+353-285-885-9490",
        "email": "pfrazier@Movil.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "pfrazier",
        "password": "$2y$10$EPIzzKB4q1YXMMvThAzYjO00i0QrUnpWL5Y35QllTuSVH4rEESjti"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+353-139-674-2153",
            "+353-59-464-7021"
        ],
        "secondaryEmailAddresses": [
            "pfrazier@NII.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1949-10-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "41_286_012_8510",
    "PrimaryContactInfo": {
        "firstName": "Jerilyn",
        "lastName": "Bowen",
        "phoneNumber": "+41-286-012-8510",
        "email": "jbowen@MTN.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "jbowen",
        "password": "$2y$10$0sFi2ntpv9tp6VDeI4TCWOYSet37GjmHi\/VJYI1tPaocNbsoTlIHO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-464-028-8335",
            "+41-163-836-2097"
        ],
        "secondaryEmailAddresses": [
            "jbowen@Oi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1965-7-5",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_287_792_9266",
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
    "LoginInfo": {
        "userName": "kmiddlet",
        "password": "$2y$10$HkDHJulNVH74TYhrIV.z4OHbfOsL5gC2.Ddi6OraNSASygR1A19ku"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-132-148-7086",
            "+47-553-208-8465"
        ],
        "secondaryEmailAddresses": [
            "kmiddlet@Telekom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1985-6-17",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1671_288_177_0578",
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
    "LoginInfo": {
        "userName": "ahines",
        "password": "$2y$10$Xp4uT1vauT9kMjolHdelVuDz6iENCiwftJASMwVUrOG7oAgVMTg2i"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-207-656-3518",
            "+1671-944-593-8554"
        ],
        "secondaryEmailAddresses": [
            "ahines@KPN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1992-1-16",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "358_289_154_0860",
    "PrimaryContactInfo": {
        "firstName": "Sherilyn",
        "lastName": "Mcdowell",
        "phoneNumber": "+358-289-154-0860",
        "email": "smcdowel@Telus.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "smcdowel",
        "password": "$2y$10$YU6RLL8TJVdRaMlkFNZcgevF5XG19d395hsay6T6KuaPmP8WBHdYq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+358-368-942-3138",
            "+358-200-781-9670"
        ],
        "secondaryEmailAddresses": [
            "smcdowel@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1977-4-3",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "49_291_404_9046",
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
    "LoginInfo": {
        "userName": "lswanson",
        "password": "$2y$10$.751hmEX4cEkaFQ6xd3nTuhxxZK3COqNkdNhn6A8JC99nBfI1e\/jW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+49-230-520-1838",
            "+49-169-758-0985"
        ],
        "secondaryEmailAddresses": [
            "lswanson@LGUplus.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2001-7-26",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "377_293_935_4592",
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
    "LoginInfo": {
        "userName": "lgould",
        "password": "$2y$10$.vVvesu0Lf33c3uYObjg7eCazhWCOEpIYms139unID5QFkmNGsoL2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+377-863-794-9390",
            "+377-98-639-6887"
        ],
        "secondaryEmailAddresses": [
            "lgould@Telenor.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1932-2-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "64_294_589_3440",
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
    "LoginInfo": {
        "userName": "jbond",
        "password": "$2y$10$PGNh.1tjdtiLrxZdTVHQ\/.FgrQAdIbJ7MiAxWS\/pSv88xN2QauMnq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-164-767-5200",
            "+64-661-931-3847"
        ],
        "secondaryEmailAddresses": [
            "jbond@SKTelecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1955-9-25",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "52_295_108_5597",
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
    "LoginInfo": {
        "userName": "dsierra",
        "password": "$2y$10$dZDb9Jjr7aeB4DYNMEvIUOYm80Z9m6q8r\/rK4Fg.FgGMZs8oJuSbK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-425-315-4104",
            "+52-408-654-6466"
        ],
        "secondaryEmailAddresses": [
            "dsierra@Rogers.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-5-24",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "46_296_970_4444",
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
    "LoginInfo": {
        "userName": "pnunez",
        "password": "$2y$10$dzfX0RUvcWJWR2yqojvqg.1SJO.aVUEcYupDtRT4QEfDdJkdH0Rqu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+46-482-966-6291",
            "+46-307-794-0426"
        ],
        "secondaryEmailAddresses": [
            "pnunez@OpenWorld.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2001-5-15",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "94_297_862_3823",
    "PrimaryContactInfo": {
        "firstName": "Mimi",
        "lastName": "Thornton",
        "phoneNumber": "+94-297-862-3823",
        "email": "mthornto@APICnet.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mthornto"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mthornto"
            }
        }
    },
    "LoginInfo": {
        "userName": "mthornto",
        "password": "$2y$10$SR.ZWmmuFr8vDGo.mKORx.f78.Zrw92j2mO\/98gwSOYbo3yWOBY2a"
    },
    "Address": {
        "streetAddressOfBuilding": "8408 Big Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ranorawa",
        "stateProvince": "Anuradhapura",
        "locality": "Anuradhapura",
        "country": "LK",
        "postalCode": "50212",
        "GeoSpatialInfo": {
            "latitude": "7.9267",
            "longitude": "80.1213"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+94-995-468-5543",
            "+94-221-865-8422"
        ],
        "secondaryEmailAddresses": [
            "mthornto@Telecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-6-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "590_298_827_7091",
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
    "LoginInfo": {
        "userName": "acampos",
        "password": "$2y$10$bkAGbpAqxS\/dSn\/5S9mLS.7HFpGkrT60GS1b.X9GSQsFoTEV9apgC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-158-282-3075",
            "+590-181-679-7313"
        ],
        "secondaryEmailAddresses": [
            "acampos@MaxComm.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1930-12-30",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "31_299_154_7023",
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
    "LoginInfo": {
        "userName": "cdickson",
        "password": "$2y$10$FMeD3ninYQR6TmKNl3qRxuspCu0vGZypbc\/J1xujpoFKGU7tHYLxS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+31-755-253-1218",
            "+31-910-421-1613"
        ],
        "secondaryEmailAddresses": [
            "cdickson@DaxNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1962-11-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "213_300_254_8469",
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
    "LoginInfo": {
        "userName": "ysummers",
        "password": "$2y$10$hXiNe3qffPB1\/Hia3Kj7juObAFYPuSDxWeutSyYWNGbaE0Uc2NBXS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+213-787-201-9170",
            "+213-669-617-4116"
        ],
        "secondaryEmailAddresses": [
            "ysummers@BT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1947-1-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "1671_301_158_6539",
    "PrimaryContactInfo": {
        "firstName": "Keri",
        "lastName": "Monroe",
        "phoneNumber": "+1671-301-158-6539",
        "email": "kmonroe@ICom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "kmonroe",
        "password": "$2y$10$zYK4GsR27m6q32.rGIe8AeXdepMurNKCcsISlLL7MKAB8urF2nOTW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-154-325-6681",
            "+1671-90-887-9549"
        ],
        "secondaryEmailAddresses": [
            "kmonroe@Telekom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1975-12-4",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "34_302_224_0812",
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
    "LoginInfo": {
        "userName": "rmccann",
        "password": "$2y$10$kBuJjQiWrQXtmhpIK9iEhuPwgNMQ3Vcuof2tJGdSs8Nv1bLZQWcIe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-246-307-3616",
            "+34-811-140-5849"
        ],
        "secondaryEmailAddresses": [
            "rmccann@MTN.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1986-12-23",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "371_303_348_5606",
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
    "LoginInfo": {
        "userName": "sriley",
        "password": "$2y$10$FfHMzq3j4trI8drJA1rbEeB2GIS.uI1UY1X6IhNUj5z3HCPI1YF4W"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-52-031-1957",
            "+371-469-502-7180"
        ],
        "secondaryEmailAddresses": [
            "sriley@GlasNET.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-7-9",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_304_125_2479",
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
    "LoginInfo": {
        "userName": "mbradfor",
        "password": "$2y$10$aA0y0\/yeiMmZ9R61DQ6TIOEdXQIl7HZWiKmhigkEPhh3suDT44pjq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-80-123-0561",
            "+47-885-323-7277"
        ],
        "secondaryEmailAddresses": [
            "mbradfor@Unicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-3-4",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "380_305_067_5183",
    "PrimaryContactInfo": {
        "firstName": "Millard",
        "lastName": "Browning",
        "phoneNumber": "+380-305-067-5183",
        "email": "mbrownin@Vodafone.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mbrownin"
            }
        }
    },
    "LoginInfo": {
        "userName": "mbrownin",
        "password": "$2y$10$KZ8q4GQHSF8Kem6oe6MNjuUKZgR6EzKUqttxrCnPNVmsD0FHW8fwO"
    },
    "Address": {
        "streetAddressOfBuilding": "9986 Blue Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0421\u0443\u0434\u043a\u043e\u0432\u0438\u0447\u0456",
        "stateProvince": "Mostyskyi",
        "locality": "Mostyskyi",
        "country": "UA",
        "postalCode": "81386",
        "GeoSpatialInfo": {
            "latitude": "49.6647",
            "longitude": "23.223"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+380-875-978-5429",
            "+380-246-058-3488"
        ],
        "secondaryEmailAddresses": [
            "mbrownin@TT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1940-1-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_307_757_5154",
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
    "LoginInfo": {
        "userName": "groman",
        "password": "$2y$10$1Oi2RWgdmu73Ut7I4PV2leljwtKh8OA.QE1eNPlgGMJzkxmHQqU6m"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-746-282-2304",
            "+7-859-343-7539"
        ],
        "secondaryEmailAddresses": [
            "groman@Softbank.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-9-9",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "55_308_812_2221",
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
    "LoginInfo": {
        "userName": "tsawyer",
        "password": "$2y$10$Em4qHk.H0UKo8ef9ycVy5.BlEP8nU7FjPRY7FrOZqsoxYucZNW1fe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-51-218-3878",
            "+55-900-949-2260"
        ],
        "secondaryEmailAddresses": [
            "tsawyer@NII.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1987-8-10",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "47_310_048_2931",
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
    "LoginInfo": {
        "userName": "mhood",
        "password": "$2y$10$I8mSOdhARHdlSddTvmy4F.WfTfiLlVzFqW0fJ6RVqoCrVXzZyJvXW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-975-737-7937",
            "+47-125-866-3660"
        ],
        "secondaryEmailAddresses": [
            "mhood@PTCL.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1979-9-12",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "299_311_571_8573",
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
    "LoginInfo": {
        "userName": "ribarra",
        "password": "$2y$10$UZ8vVuV5WNr2PEpqyvPUpu.4v6fui2\/pP\/aixpk9U9Wv.uS151R8C"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+299-59-626-2139",
            "+299-114-981-5121"
        ],
        "secondaryEmailAddresses": [
            "ribarra@EUnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1950-3-14",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "598_312_047_4237",
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
    "LoginInfo": {
        "userName": "rhollowa",
        "password": "$2y$10$BN4vc8UNG97sDUjo1UArN.27\/912.hleVuxTipreqbK83yWeCSoQ6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+598-775-601-0295",
            "+598-61-553-0455"
        ],
        "secondaryEmailAddresses": [
            "rhollowa@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1969-12-6",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "262_313_755_2603",
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
    "LoginInfo": {
        "userName": "pschmitt",
        "password": "$2y$10$hd0nDLap3ndUkjWRrCHM8OLaFLd3y5lXayx93hZxhZWnG1cZ1in82"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-267-327-6576",
            "+262-587-145-1188"
        ],
        "secondaryEmailAddresses": [
            "pschmitt@CCI.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1932-8-20",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "52_314_051_7844",
    "PrimaryContactInfo": {
        "firstName": "Noel",
        "lastName": "Kirby",
        "phoneNumber": "+52-314-051-7844",
        "email": "nkirby@BT.com",
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/nkirby"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nkirby"
            }
        }
    },
    "LoginInfo": {
        "userName": "nkirby",
        "password": "$2y$10$BebL.\/t6vxAYoGPR2MZ82.W3U3wJwwdan901msKPaHtE7eKulfcHi"
    },
    "Address": {
        "streetAddressOfBuilding": "5911 Big Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Privada Universidad",
        "stateProvince": "SON",
        "locality": "Hermosillo",
        "country": "MX",
        "postalCode": "83198",
        "GeoSpatialInfo": {
            "latitude": "29.3384",
            "longitude": "-110.812"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-12-005-7831",
            "+52-812-700-4839"
        ],
        "secondaryEmailAddresses": [
            "nkirby@Softbank.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1962-6-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "353_315_300_8779",
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
    "LoginInfo": {
        "userName": "wmcbride",
        "password": "$2y$10$dEXjox19AscDbaZkftjOrO4.60zq3LuzLrovBUb8AN1fckfM2o1tq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+353-497-106-0062",
            "+353-141-794-5451"
        ],
        "secondaryEmailAddresses": [
            "wmcbride@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1999-12-5",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "31_316_329_7270",
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
    "LoginInfo": {
        "userName": "kmathis",
        "password": "$2y$10$wwDCspc0Ffvsca2nBlG.n.jqSjSk7ejPjnbaCCXJ.3Cj3RB5RUnOu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+31-196-991-7789",
            "+31-739-304-0057"
        ],
        "secondaryEmailAddresses": [
            "kmathis@Vivendi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1971-2-20",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "55_317_363_8797",
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
    "LoginInfo": {
        "userName": "lodonnel",
        "password": "$2y$10$yAaXimZBcl8Qa8wyZSMa.ed7WQr\/RCRkrBLjBNq2DeRnV1qhnyHvm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-348-982-3047",
            "+55-598-643-9121"
        ],
        "secondaryEmailAddresses": [
            "lodonnel@Orstom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-11-12",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "373_318_310_3345",
    "PrimaryContactInfo": {
        "firstName": "Livia",
        "lastName": "Richards",
        "phoneNumber": "+373-318-310-3345",
        "email": "lrichard@Millicom.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lrichard"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lrichard"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lrichard"
            }
        }
    },
    "LoginInfo": {
        "userName": "lrichard",
        "password": "$2y$10$aROx2Qu3lU9Pj0vz2kBT6ObgavBGGysNQtWerfi1IK1qwf68Ruz1S"
    },
    "Address": {
        "streetAddressOfBuilding": "5445 Winding Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Miclesti",
        "stateProvince": "Criuleni",
        "locality": "Criuleni",
        "country": "MD",
        "postalCode": "MD-4831",
        "GeoSpatialInfo": {
            "latitude": "47.2386",
            "longitude": "28.8067"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+373-312-144-4898",
            "+373-536-736-0309"
        ],
        "secondaryEmailAddresses": [
            "lrichard@Chunghwa.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1964-3-8",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "441481_319_030_0404",
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
    "LoginInfo": {
        "userName": "jsulliva",
        "password": "$2y$10$m3D7HLXUisHWpgaphVXKg.2MpGmuNs\/qLXf3lVjCu1uDtbNxVsqKC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-20-202-7819",
            "+441481-743-743-9789"
        ],
        "secondaryEmailAddresses": [
            "jsulliva@KTC.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1944-6-20",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "45_321_222_7718",
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
    "LoginInfo": {
        "userName": "mbrown",
        "password": "$2y$10$T99u\/3n0yxFE8eLcWvHLRuuCI.gBCBTfpH7HNW6q\/GBdmBcerwfp."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+45-622-619-8547",
            "+45-826-433-3603"
        ],
        "secondaryEmailAddresses": [
            "mbrown@Rogers.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1992-12-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "594_322_397_5777",
    "PrimaryContactInfo": {
        "firstName": "Lacresha",
        "lastName": "Welch",
        "phoneNumber": "+594-322-397-5777",
        "email": "lwelch@KPN.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "lwelch",
        "password": "$2y$10$4V48J8xUvHAvO6NtHNFd8OCGamA2lUa9mAMbJWn\/5f7R9puTnOcyC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-869-911-5678",
            "+594-548-766-4229"
        ],
        "secondaryEmailAddresses": [
            "lwelch@OTE.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1963-9-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "377_323_860_4044",
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
    "LoginInfo": {
        "userName": "ncurtis",
        "password": "$2y$10$K42PmIuEz0y04CsgpexzY.7nBoflgmi8P81wVVgGn8d5LW3mUzSjC"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+377-268-432-0026",
            "+377-934-585-6859"
        ],
        "secondaryEmailAddresses": [
            "ncurtis@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1932-1-17",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_324_979_1630",
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
    "LoginInfo": {
        "userName": "igates",
        "password": "$2y$10$lP395yv6HcMp1tVIDZq4nOe2Z\/1.8TUlGMpwY9TTMulywyZaNm04."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-648-705-1007",
            "+687-957-244-2515"
        ],
        "secondaryEmailAddresses": [
            "igates@Telekom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-8-11",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "55_325_932_6057",
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
    "LoginInfo": {
        "userName": "nzuniga",
        "password": "$2y$10$6qKMEz7f1faLibCp7Q6tXulLL2vPPS3z8OTsyxwNJl3vfym.EUNmK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-2-018-8031",
            "+55-390-582-1551"
        ],
        "secondaryEmailAddresses": [
            "nzuniga@Orstom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1985-12-5",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "423_326_045_1466",
    "PrimaryContactInfo": {
        "firstName": "Elias",
        "lastName": "Brown",
        "phoneNumber": "+423-326-045-1466",
        "email": "ebrown@Safaricom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ebrown",
        "password": "$2y$10$Pn.ZMuADLWAMJp6K2rRRyO5tsB\/1jYl62UNCF22z9lXX1dxLrZ5i6"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-826-353-0320",
            "+423-535-083-3744"
        ],
        "secondaryEmailAddresses": [
            "ebrown@NetCom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1981-10-28",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_327_230_9893",
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
    "LoginInfo": {
        "userName": "jdyer",
        "password": "$2y$10$H0mo4vCoVpMqisv5hYrZnO2BrTU7b8QioQ663TxSeGvjbjsEMc\/u2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-777-215-5753",
            "+375-653-491-4488"
        ],
        "secondaryEmailAddresses": [
            "jdyer@BCE.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-4-23",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "594_328_996_9978",
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
    "LoginInfo": {
        "userName": "tgriffin",
        "password": "$2y$10$8fjuwaxYBnULpOIoHYicCuCdvq6pH\/GOk7g6d6yogcRrwIsQygFlW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-289-621-1933",
            "+594-77-585-7314"
        ],
        "secondaryEmailAddresses": [
            "tgriffin@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-4-1",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "1671_329_221_1739",
    "PrimaryContactInfo": {
        "firstName": "Dakota",
        "lastName": "Fitzpatrick",
        "phoneNumber": "+1671-329-221-1739",
        "email": "dfitzpat@Relcom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "dfitzpat",
        "password": "$2y$10$Gs91P5HKvYPpSq8P6ENB7OWh0FMMPz\/SE5OzEy.EpV7g8xsjtle\/G"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-771-832-5873",
            "+1671-366-457-2141"
        ],
        "secondaryEmailAddresses": [
            "dfitzpat@AlgoNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1983-12-8",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "506_330_269_5940",
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
    "LoginInfo": {
        "userName": "jsoto",
        "password": "$2y$10$b1SmHQfY.fixWSozcWxrT.HM71Y2VoBi7nnADQVQq69WiXeQKZbkK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+506-783-269-0449",
            "+506-663-045-7227"
        ],
        "secondaryEmailAddresses": [
            "jsoto@Bifty.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1934-3-15",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "81_331_270_6628",
    "PrimaryContactInfo": {
        "firstName": "Maybelle",
        "lastName": "Fuentes",
        "phoneNumber": "+81-331-270-6628",
        "email": "mfuentes@Orstom.com",
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mfuentes"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mfuentes"
            }
        }
    },
    "LoginInfo": {
        "userName": "mfuentes",
        "password": "$2y$10$OKLRidID3c.OPsS4jDbIS.gP1QP6vbuXCzgxpSvHzlhBv6jhm3k5a"
    },
    "Address": {
        "streetAddressOfBuilding": "5913 Green Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "5C",
        "city": "Yukinokannongo",
        "stateProvince": "Murayama Shi",
        "locality": "Murayama Shi",
        "country": "JP",
        "postalCode": "995-0207",
        "GeoSpatialInfo": {
            "latitude": "38.5272",
            "longitude": "140.3338"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-421-327-5038",
            "+81-808-390-8225"
        ],
        "secondaryEmailAddresses": [
            "mfuentes@Telia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-4-22",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_332_849_5441",
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
    "LoginInfo": {
        "userName": "rhensley",
        "password": "$2y$10$NDydYbLkLolORdxg9TY1Le2cQtlcc2u3EtrW6Deng7B\/RAOD2cg02"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-798-145-6505",
            "+7-106-235-0841"
        ],
        "secondaryEmailAddresses": [
            "rhensley@Safaricom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1992-9-22",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_334_832_7641",
    "PrimaryContactInfo": {
        "firstName": "Lenard",
        "lastName": "Ayers",
        "phoneNumber": "+7-334-832-7641",
        "email": "layers@LGUplus.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/layers"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/layers"
            }
        }
    },
    "LoginInfo": {
        "userName": "layers",
        "password": "$2y$10$UpRzDrs0Tl3uLyj7lltaW.AqrUwbXvYwbDdV0QrWm\/0tSvFSkZkay"
    },
    "Address": {
        "streetAddressOfBuilding": "3903 Big Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041d\u043e\u0432\u043e\u043e\u0431\u0438\u043d\u043a\u0430",
        "stateProvince": "\u041f\u0415\u0422\u0420\u041e\u041f\u0410\u0412\u041b\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u041f\u0415\u0422\u0420\u041e\u041f\u0410\u0412\u041b\u041e\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "659663",
        "GeoSpatialInfo": {
            "latitude": "52.2323",
            "longitude": "84.0584"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-965-110-7808",
            "+7-138-446-3205"
        ],
        "secondaryEmailAddresses": [
            "layers@Airtel.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-8-20",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "35818_335_376_2789",
    "PrimaryContactInfo": {
        "firstName": "Edythe",
        "lastName": "Brewer",
        "phoneNumber": "+35818-335-376-2789",
        "email": "ebrewer@NordNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ebrewer",
        "password": "$2y$10$Wq\/CK.gcQTKj4EmYE7asz.cV68yTBcG\/Rrb4kRi0D5nFKnu26mOta"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-325-604-9412",
            "+35818-520-084-5468"
        ],
        "secondaryEmailAddresses": [
            "ebrewer@DaxNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1955-3-8",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_336_919_0919",
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
    "LoginInfo": {
        "userName": "vgoodwin",
        "password": "$2y$10$J5fLM2F4UYTqUCT4dqW77e350GrY8dWSeuFGSpRStOiToRF3G1GLK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-231-331-5818",
            "+7-968-022-4405"
        ],
        "secondaryEmailAddresses": [
            "vgoodwin@TelecomItalia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1970-2-25",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "61_337_041_4159",
    "PrimaryContactInfo": {
        "firstName": "Catherina",
        "lastName": "Stevens",
        "phoneNumber": "+61-337-041-4159",
        "email": "cstevens@NordNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "cstevens",
        "password": "$2y$10$nZ9\/MBDKO1Bkpk3mCAtW\/ePDFQKLHwuSKLmD9YnWrJvNsOayAFevm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-791-441-6368",
            "+61-686-703-3230"
        ],
        "secondaryEmailAddresses": [
            "cstevens@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1941-6-30",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "596_338_781_8500",
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
    "LoginInfo": {
        "userName": "kherring",
        "password": "$2y$10$qVoFWv66wdgdTF0wCG7L8OiKV5FLOQivHUClX9ECkvlHtCEO4vUnK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+596-625-641-0034",
            "+596-474-994-9126"
        ],
        "secondaryEmailAddresses": [
            "kherring@CCS.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1938-6-21",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "39_339_406_1467",
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
    "LoginInfo": {
        "userName": "pgarriso",
        "password": "$2y$10$C6TgOf0dsQAcmSxTrZBsSeEEiw7XRll1\/CgGc9M4QdEmsc\/oi5bza"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-146-647-5069",
            "+39-150-856-1618"
        ],
        "secondaryEmailAddresses": [
            "pgarriso@Safaricom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1967-3-6",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "61_340_956_4913",
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
    "LoginInfo": {
        "userName": "bgray",
        "password": "$2y$10$vYw\/M1dvEmJ7t3P9kp7nYOCtZMtB8JIDIUB1IzbVu3TQwrO.IAg7u"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-38-596-1172",
            "+61-955-306-6924"
        ],
        "secondaryEmailAddresses": [
            "bgray@MaxComm.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1945-2-5",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "377_341_962_9702",
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
    "LoginInfo": {
        "userName": "ethomas",
        "password": "$2y$10$6p702nmx6PdmavBS0ynE\/.E6nzO73o1N8iNgCrEzF7Lpjvu9TvSMa"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+377-57-408-1365",
            "+377-212-879-9783"
        ],
        "secondaryEmailAddresses": [
            "ethomas@TeleSystems.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1994-3-28",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "61_342_729_3677",
    "PrimaryContactInfo": {
        "firstName": "Silas",
        "lastName": "Conley",
        "phoneNumber": "+61-342-729-3677",
        "email": "sconley@Telekom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "sconley",
        "password": "$2y$10$cZoNj6cRhEmK8dL0YJK09.BoXy0eHXYWeF9RnVkR5Rrd8ZEMX.0yO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-628-588-9021",
            "+61-247-229-6682"
        ],
        "secondaryEmailAddresses": [
            "sconley@Jio.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-7-3",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1787_343_171_3016",
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
    "LoginInfo": {
        "userName": "tclark",
        "password": "$2y$10$zRwzWK.\/HF87fqOd.ifM.OCn3MQHFrjk0R3e6GQmNiZ2NV.WUTdSe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1787-301-952-1796",
            "+1787-970-140-5904"
        ],
        "secondaryEmailAddresses": [
            "tclark@CUBENet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1936-9-15",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "54_345_759_4168",
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
    "LoginInfo": {
        "userName": "besquive",
        "password": "$2y$10$rRjt.pYx0Et4yKj9eEumLuXlimBZb.QC6Wm\/.KSJw44nNqDkyM5RO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+54-217-180-9045",
            "+54-323-747-4263"
        ],
        "secondaryEmailAddresses": [
            "besquive@Telecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1982-9-19",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "39_346_073_5246",
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
    "LoginInfo": {
        "userName": "jthornto",
        "password": "$2y$10$Q.aNiOYUwCCWPHIuwROvbe6mltJgjUXsayRFn7bkX36wMPjLWwLgO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-367-642-3889",
            "+39-835-198-9655"
        ],
        "secondaryEmailAddresses": [
            "jthornto@AIS.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1941-11-22",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "594_347_095_5759",
    "PrimaryContactInfo": {
        "firstName": "Zachariah",
        "lastName": "Preston",
        "phoneNumber": "+594-347-095-5759",
        "email": "zpreston@Unicom.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/zpreston"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/zpreston"
            }
        }
    },
    "LoginInfo": {
        "userName": "zpreston",
        "password": "$2y$10$RkLRlfSCCWd.INKmA7QgMODOs1cGnBAnKNeZpNpvzqYZVpRr4Hjmy"
    },
    "Address": {
        "streetAddressOfBuilding": "6007 Green Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cayenne",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97399 CEDEX",
        "GeoSpatialInfo": {
            "latitude": "4.9333",
            "longitude": "-52.3333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-117-873-7994",
            "+594-157-068-8044"
        ],
        "secondaryEmailAddresses": [
            "zpreston@Zain.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1985-6-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1671_348_051_7641",
    "PrimaryContactInfo": {
        "firstName": "Brett",
        "lastName": "Riley",
        "phoneNumber": "+1671-348-051-7641",
        "email": "briley@BCE.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "briley",
        "password": "$2y$10$hYq5whINHgG1HDiwLX9kc.DCMXvPAFy\/5RmCLmwyzVYiWP5PUg2r2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-437-746-2792",
            "+1671-213-803-8089"
        ],
        "secondaryEmailAddresses": [
            "briley@LookData.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1985-4-30",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_350_478_1162",
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
    "LoginInfo": {
        "userName": "ttrejo",
        "password": "$2y$10$03ZpYustevdmg5Qeh\/YO6uRM35DBKOZev1UK0mszocIoOsFhKWiHm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-606-880-5760",
            "+7-207-489-5044"
        ],
        "secondaryEmailAddresses": [
            "ttrejo@ICom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-3-27",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "33_351_059_3885",
    "PrimaryContactInfo": {
        "firstName": "Rhonda",
        "lastName": "Costa",
        "phoneNumber": "+33-351-059-3885",
        "email": "rcosta@CUBENet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "rcosta",
        "password": "$2y$10$v0c9DnUgO6KLhIWYHShlhOQMcCUTMS8Iq3iTPZLtEZOjC7JIsAHZu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+33-773-665-8580",
            "+33-569-532-7818"
        ],
        "secondaryEmailAddresses": [
            "rcosta@Millicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1949-10-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "351_352_676_7555",
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
    "LoginInfo": {
        "userName": "afischer",
        "password": "$2y$10$h19i35Gv5lzgi4uiS1Te8ej2rBB.Tjpq4K\/vMXJO9hNvSIPOJnMHm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-186-068-7022",
            "+351-625-642-8726"
        ],
        "secondaryEmailAddresses": [
            "afischer@Tata.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1994-11-27",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "378_353_496_3532",
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
    "LoginInfo": {
        "userName": "hrogers",
        "password": "$2y$10$c1FSu3.hrFRWisIQMIB\/H.ceT6NoLHgbMGUgRRVWQi3SWLNyYmmQS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+378-245-927-6486",
            "+378-131-774-9271"
        ],
        "secondaryEmailAddresses": [
            "hrogers@TM.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-1-11",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "48_354_530_4660",
    "PrimaryContactInfo": {
        "firstName": "Whitney",
        "lastName": "Blackburn",
        "phoneNumber": "+48-354-530-4660",
        "email": "wblackbu@Tata.com",
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/wblackbu"
            }
        }
    },
    "LoginInfo": {
        "userName": "wblackbu",
        "password": "$2y$10$CJ4LDqyU972RMfyBjrRJ0uPLA7qs28u0Vni6dNSLQtuxllniKG2AK"
    },
    "Address": {
        "streetAddressOfBuilding": "3695 Red Hill Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Straszewo",
        "stateProvince": "Gmina Koneck",
        "locality": "Powiat aleksandrowski",
        "country": "PL",
        "postalCode": "87-708",
        "GeoSpatialInfo": {
            "latitude": "52.7986",
            "longitude": "18.651"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-593-116-9724",
            "+48-360-156-7932"
        ],
        "secondaryEmailAddresses": [
            "wblackbu@Relcom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-6-26",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "506_355_176_1383",
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
    "LoginInfo": {
        "userName": "esulliva",
        "password": "$2y$10$ipN8EvyUWWvCRmLUh\/VwyuR2r\/zXksbk.vlUaqI6LB4kKpLmtPnnu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+506-686-843-1558",
            "+506-657-585-8115"
        ],
        "secondaryEmailAddresses": [
            "esulliva@Sprint.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1952-9-18",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "441481_356_555_4455",
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
    "LoginInfo": {
        "userName": "jmaxwell",
        "password": "$2y$10$gr3ZEk5.WKXHMCujWC5fv.598oVSJM.IU1QzdTu6djdJypHxErJcS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-139-526-1300",
            "+441481-218-414-5164"
        ],
        "secondaryEmailAddresses": [
            "jmaxwell@Oi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1968-11-19",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "441534_357_791_1401",
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
    "LoginInfo": {
        "userName": "aesquive",
        "password": "$2y$10$BYNfP4NOwxFA5mhcunLMb.rmwMitCMsMCeEHWvLTPPrWnmiOlKmDG"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441534-237-764-1233",
            "+441534-829-087-1020"
        ],
        "secondaryEmailAddresses": [
            "aesquive@DaxNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-8-4",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "49_358_283_1387",
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
    "LoginInfo": {
        "userName": "dconrad",
        "password": "$2y$10$Qrat52iPooriN7Xo42Gl.esx3e\/EJ6NEL7TbVuZ4\/8q9bN7b6mlbi"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+49-394-186-2482",
            "+49-256-795-5809"
        ],
        "secondaryEmailAddresses": [
            "dconrad@Airtel.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1981-11-2",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "213_359_425_2178",
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
    "LoginInfo": {
        "userName": "gibarra",
        "password": "$2y$10$IsIaGRO5NPrQvWHZQKGsgO6aiBaOPTCjiBctYQSit7UpzAiXFvDoO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+213-650-763-3718",
            "+213-22-764-4606"
        ],
        "secondaryEmailAddresses": [
            "gibarra@MaxComm.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1951-8-23",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "35818_360_136_9789",
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
    "LoginInfo": {
        "userName": "astuart",
        "password": "$2y$10$dY4\/zCfKjbhhN.BSe15JU.9A2EfmBC90R84tsepwXc\/cuGwiJbTVu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-429-629-5058",
            "+35818-215-248-5862"
        ],
        "secondaryEmailAddresses": [
            "astuart@Telecom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1993-12-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_361_002_5755",
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
    "LoginInfo": {
        "userName": "grosas",
        "password": "$2y$10$HzyKhr35x2vhnQ1IdQfSuey8P5v.2BGSVdIfj9pQYgoT9pTT9gQk2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-501-009-1197",
            "+687-60-599-3790"
        ],
        "secondaryEmailAddresses": [
            "grosas@Orange.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1946-1-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_362_180_1905",
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
    "LoginInfo": {
        "userName": "atanner",
        "password": "$2y$10$MyMueJ1KadPEQS6abr2Grubl7WHezPTcYg5sS2LPJHhuJqLPnZBbS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-828-135-1054",
            "+7-460-015-7930"
        ],
        "secondaryEmailAddresses": [
            "atanner@Chunghwa.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-6-3",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "46_363_442_3705",
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
    "LoginInfo": {
        "userName": "mesquive",
        "password": "$2y$10$TWhop7AEznEPkpThawDXxuPhlaheB15hxQjeGOWXdmPmfL8DrK0ce"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+46-10-347-1710",
            "+46-680-477-1482"
        ],
        "secondaryEmailAddresses": [
            "mesquive@NordNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-1-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_364_752_9652",
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
    "LoginInfo": {
        "userName": "nwright",
        "password": "$2y$10$8AT4B9UgUQ3kWQ1cO9AwJuXqHvEuYilaq1ff5HPRVyIwU7OtbmNIK"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-445-689-5135",
            "+687-414-321-4758"
        ],
        "secondaryEmailAddresses": [
            "nwright@Softbank.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1983-10-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "32_365_763_3790",
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
    "LoginInfo": {
        "userName": "ltrevino",
        "password": "$2y$10$pdQuOUuyNfojIwQr1YAeN.YqJNUf9cixxwtTRESTmGeEH6rd9WUaW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+32-263-075-8178",
            "+32-398-805-4741"
        ],
        "secondaryEmailAddresses": [
            "ltrevino@Frontier.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1970-10-15",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "63_366_555_1577",
    "PrimaryContactInfo": {
        "firstName": "Leonor",
        "lastName": "Booth",
        "phoneNumber": "+63-366-555-1577",
        "email": "lbooth@Bifty.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "lbooth",
        "password": "$2y$10$jl.HKnKxW.SScEWgXruuPuk3N1ZZq6H9baPCNORh2kegf3EsNYOQ2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-274-642-1542",
            "+63-998-811-5128"
        ],
        "secondaryEmailAddresses": [
            "lbooth@LookData.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1970-4-30",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "353_368_136_8626",
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
    "LoginInfo": {
        "userName": "sdennis",
        "password": "$2y$10$UtiouwkQNS9qxrYpTVh0VexHzMpQjafZspYUD1TK4K7IR50WQ5oY2"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+353-512-593-2885",
            "+353-425-227-8987"
        ],
        "secondaryEmailAddresses": [
            "sdennis@Frontier.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-5-24",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "421_369_281_5698",
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
    "LoginInfo": {
        "userName": "dwilkins",
        "password": "$2y$10$rLwEsVWR.2JYzLtCCVOR2.l26YkMZyAqoF4HmEq6BBiJFQsnhev4i"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-125-881-2360",
            "+421-548-610-7077"
        ],
        "secondaryEmailAddresses": [
            "dwilkins@VimpelCom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1986-8-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "39_370_184_9814",
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
    "LoginInfo": {
        "userName": "catkinso",
        "password": "$2y$10$zEcpp8\/nn9kcR2KEzILD9OPAzYe9jV.0n2rAka6QKofgVqqS5h.Ou"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-568-908-0835",
            "+39-277-348-2624"
        ],
        "secondaryEmailAddresses": [
            "catkinso@Oi.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1993-6-14",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "262_371_290_0167",
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
    "LoginInfo": {
        "userName": "mmonroe",
        "password": "$2y$10$KAyJOqos1BJjsUHCRVvy\/.woWS4UX9bmORQx5pWR9YZApSIXSP8Eq"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-378-581-7859",
            "+262-946-628-2640"
        ],
        "secondaryEmailAddresses": [
            "mmonroe@Ooredoo.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1977-4-29",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "34_372_751_3321",
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
    "LoginInfo": {
        "userName": "djenning",
        "password": "$2y$10$isQYCPhKoeehgSF6JXDcEOfo93Jy\/8ESSBPIVJZk3toc8KlMjqMhu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-623-665-4222",
            "+34-460-521-9273"
        ],
        "secondaryEmailAddresses": [
            "djenning@Zain.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1988-10-13",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "7_373_435_8117",
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
    "LoginInfo": {
        "userName": "dlevy",
        "password": "$2y$10$78W07GqvTJIe8NQsHMHJHuv2tT4LJiSFf5BmBFur4DPx2iirBpVw."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-706-831-2414",
            "+7-162-991-4651"
        ],
        "secondaryEmailAddresses": [
            "dlevy@Jio.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1998-6-17",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "441534_374_588_0440",
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
    "LoginInfo": {
        "userName": "posborne",
        "password": "$2y$10$F4XIuRkFbHD5mQrlaQxXUuxtW3ZmdxkD2TmHnlwtYLBIVdNLpVfNO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441534-705-878-0435",
            "+441534-784-449-9138"
        ],
        "secondaryEmailAddresses": [
            "posborne@Etisalat.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1945-2-25",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "44_375_144_8210",
    "PrimaryContactInfo": {
        "firstName": "Jesica",
        "lastName": "Cole",
        "phoneNumber": "+44-375-144-8210",
        "email": "jcole@Tata.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "jcole",
        "password": "$2y$10$fncB8o5JFqXs9nmkevbYOuqqm7wGn9Iu.8T7JfDZpFcQgC4nuXb16"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-91-483-2708",
            "+44-407-724-8523"
        ],
        "secondaryEmailAddresses": [
            "jcole@MaxComm.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1944-1-19",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "376_376_295_1124",
    "PrimaryContactInfo": {
        "firstName": "Desmond",
        "lastName": "Duffy",
        "phoneNumber": "+376-376-295-1124",
        "email": "dduffy@Orange.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "dduffy",
        "password": "$2y$10$onW97LkwqAh6dqj1A71slez7lPRg45ZGcWHR7KA0axXRN\/d5ul.fS"
    },
    "Address": {
        "streetAddressOfBuilding": "8514 Green River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "30",
        "city": "Andorra la Vella",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD500",
        "GeoSpatialInfo": {
            "latitude": "42.5",
            "longitude": "1.5"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+376-396-981-2800",
            "+376-253-863-2771"
        ],
        "secondaryEmailAddresses": [
            "dduffy@Belgacom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1981-6-17",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "359_377_151_9583",
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
    "LoginInfo": {
        "userName": "fparks",
        "password": "$2y$10$UmUlVj12ytmZBcl5C0XZRemU4A6X\/VZSDbBUb\/4OUUvnEEf43q6O."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-85-466-4722",
            "+359-63-771-2678"
        ],
        "secondaryEmailAddresses": [
            "fparks@Telia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1940-6-30",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "33_378_156_8911",
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
    "LoginInfo": {
        "userName": "qpierce",
        "password": "$2y$10$k2YVZ\/vt7WfJaCbwtDoPfeSes4evQ7jloQLMgfOVc\/4ucd1kgcApm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+33-86-981-7032",
            "+33-898-738-8877"
        ],
        "secondaryEmailAddresses": [
            "qpierce@NetCom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1962-3-8",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "385_379_690_0296",
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
    "LoginInfo": {
        "userName": "scurry",
        "password": "$2y$10$9IxNtun.4ndGDiaHpGE2m.Q9X7DQrnKCa8wWg6lIA\/\/A64ha0Jlqy"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-223-059-9677",
            "+385-440-234-5615"
        ],
        "secondaryEmailAddresses": [
            "scurry@CCS.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1947-7-25",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "61_380_177_7593",
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
    "LoginInfo": {
        "userName": "alowe",
        "password": "$2y$10$gkuLusdz2mQ\/CboiC0fo3epfh4nW7KxrpDr5dm\/T4guntmBIBRnKW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-863-975-2185",
            "+61-708-114-3783"
        ],
        "secondaryEmailAddresses": [
            "alowe@Telkom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1950-10-22",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "262_381_806_2521",
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
    "LoginInfo": {
        "userName": "hlivings",
        "password": "$2y$10$unRZ2YjLNZ85S5HMQkw\/VeHdwH5HLVzANireWVve8VlXT4Rp\/M8X."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-305-755-9000",
            "+262-375-087-9413"
        ],
        "secondaryEmailAddresses": [
            "hlivings@LGUplus.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1977-10-18",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "32_382_209_2097",
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
    "LoginInfo": {
        "userName": "lparker",
        "password": "$2y$10$dd4N\/lKYp8OuNZR4rSXiqOyFve2G0Z3\/JhwdkBZAP7uNdTZRXRXbm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+32-648-958-5074",
            "+32-471-907-7409"
        ],
        "secondaryEmailAddresses": [
            "lparker@ATT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1947-12-20",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "81_383_509_4177",
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
    "LoginInfo": {
        "userName": "klucero",
        "password": "$2y$10$.fy.kvstpBUse7BJvUDX\/eognxxzJKPYvrQago4iPzvPURfMAl9oW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-486-011-9788",
            "+81-587-343-6908"
        ],
        "secondaryEmailAddresses": [
            "klucero@Unicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1966-4-10",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "385_384_261_8607",
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
    "LoginInfo": {
        "userName": "khoward",
        "password": "$2y$10$jUDiHcLBEwAUQs0K7RXD4epA8GKkeguieBMDggSgWez1SvWvAIake"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-314-185-3746",
            "+385-482-717-9855"
        ],
        "secondaryEmailAddresses": [
            "khoward@APICnet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1991-1-11",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "375_385_415_5912",
    "PrimaryContactInfo": {
        "firstName": "Shenika",
        "lastName": "Cunningham",
        "phoneNumber": "+375-385-415-5912",
        "email": "scunning@Unicom.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "scunning",
        "password": "$2y$10$d\/LUbhaHYbI\/o.uONJsUtOQulGbJMrEnUZUtFVSSFG1N7YAKNQMXS"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-111-447-3966",
            "+375-962-440-7605"
        ],
        "secondaryEmailAddresses": [
            "scunning@BT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1997-2-13",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "81_386_882_4342",
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
    "LoginInfo": {
        "userName": "mcampos",
        "password": "$2y$10$oOkLMqYOyJ0lzDwFHrGvPev1Ef1YSAE5lgRRS.1ciAuqd6mLTGLvm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-676-207-3972",
            "+81-357-210-3091"
        ],
        "secondaryEmailAddresses": [
            "mcampos@TelecomItalia.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "2001-2-2",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "27_387_479_7840",
    "PrimaryContactInfo": {
        "firstName": "Kurtis",
        "lastName": "Hurley",
        "phoneNumber": "+27-387-479-7840",
        "email": "khurley@TelecomItalia.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "khurley",
        "password": "$2y$10$xR4UNriA7\/3w0WoW0J4VGOocC1vRfnb8wgHjKmM.GL5AU9.mqbl6i"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+27-305-623-8258",
            "+27-471-120-1535"
        ],
        "secondaryEmailAddresses": [
            "khurley@Telstra.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1929-2-23",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1809_388_772_5172",
    "PrimaryContactInfo": {
        "firstName": "Jani",
        "lastName": "Pollard",
        "phoneNumber": "+1809-388-772-5172",
        "email": "jpollard@KDDI.com",
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jpollard"
            }
        }
    },
    "LoginInfo": {
        "userName": "jpollard",
        "password": "$2y$10$BRITnhS2v1d8NkTIyiiKleqNaYtCR\/gdIdpAaqYHx5vaT4w3y3biu"
    },
    "Address": {
        "streetAddressOfBuilding": "5620 Little Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cabirma del Este I",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11513",
        "GeoSpatialInfo": {
            "latitude": "18.5083",
            "longitude": "-69.9361"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1809-586-783-3585",
            "+1809-5-634-1613"
        ],
        "secondaryEmailAddresses": [
            "jpollard@Etisalat.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1994-12-20",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "596_389_098_1577",
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
    "LoginInfo": {
        "userName": "mbarton",
        "password": "$2y$10$fNVvp3HZiIFT01olBJSk6.OOoqEERi3MaQpQyIncgTP53IRSbJ8tO"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+596-97-622-4691",
            "+596-59-494-1371"
        ],
        "secondaryEmailAddresses": [
            "mbarton@Tata.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1929-3-18",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "371_390_306_2470",
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
    "LoginInfo": {
        "userName": "hdonalds",
        "password": "$2y$10$TGo8.5iIzDXRgLk8P7xLmuir7.HZ2gSnt13O313Ki3A2usITDor7O"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-65-214-8102",
            "+371-184-761-9054"
        ],
        "secondaryEmailAddresses": [
            "hdonalds@Sprint.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1996-10-21",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "356_391_293_4286",
    "PrimaryContactInfo": {
        "firstName": "Brande",
        "lastName": "Douglas",
        "phoneNumber": "+356-391-293-4286",
        "email": "bdouglas@WorldNet.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "bdouglas",
        "password": "$2y$10$pDWpr8h.s.k3dvACD1ac\/eqdOm5\/fTdxv86TQt4iKvV1bdTabP4ee"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+356-76-522-2820",
            "+356-978-779-2422"
        ],
        "secondaryEmailAddresses": [
            "bdouglas@GreenNet.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1999-7-7",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "377_392_319_8268",
    "PrimaryContactInfo": {
        "firstName": "Sylvester",
        "lastName": "Stephens",
        "phoneNumber": "+377-392-319-8268",
        "email": "sstephen@OTE.com",
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/sstephen"
            }
        }
    },
    "LoginInfo": {
        "userName": "sstephen",
        "password": "$2y$10$GSp.M\/gy9O.XOU.\/OPCBje9a6q72x0IDKXg3mqpC2SFYmcbct6yNa"
    },
    "Address": {
        "streetAddressOfBuilding": "7122 Red Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jardin Japonais",
        "stateProvince": "Larvotto",
        "locality": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "GeoSpatialInfo": {
            "latitude": "43.7333",
            "longitude": "7.4167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+377-305-875-0081",
            "+377-34-112-0290"
        ],
        "secondaryEmailAddresses": [
            "sstephen@TeleSystems.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1943-12-25",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "386_393_091_2148",
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
    "LoginInfo": {
        "userName": "ncordova",
        "password": "$2y$10$C8ViR1WCenEYO7tX6eCh4.6rlMFljLai.v2mmqm1ERZ2F8l7EUspm"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-910-795-7984",
            "+386-586-908-6487"
        ],
        "secondaryEmailAddresses": [
            "ncordova@Unicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1954-12-17",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "48_394_878_9041",
    "PrimaryContactInfo": {
        "firstName": "Myrle",
        "lastName": "Jimenez",
        "phoneNumber": "+48-394-878-9041",
        "email": "mjimenez@Econnect.com",
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mjimenez"
            }
        }
    },
    "LoginInfo": {
        "userName": "mjimenez",
        "password": "$2y$10$naIAoe4Y0LlAuIA4V67.BeY916NB6K.bnT4PXNOTSUggrao4ghV1e"
    },
    "Address": {
        "streetAddressOfBuilding": "9239 Big Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wycza\u0142kowo",
        "stateProvince": "Gmina T\u0142uchowo",
        "locality": "Powiat lipnowski",
        "country": "PL",
        "postalCode": "87-605",
        "GeoSpatialInfo": {
            "latitude": "52.7554",
            "longitude": "19.445"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-972-596-8216",
            "+48-467-703-6786"
        ],
        "secondaryEmailAddresses": [
            "mjimenez@NetCom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1938-10-14",
        "gender": "F"
    }
});
db.customers.insertOne(
{
    "customerKey": "60_395_534_9678",
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
    "LoginInfo": {
        "userName": "rtravis",
        "password": "$2y$10$fCNkY.rdW6vT6cn3v5HWYOvrmavsQlTYc8zPu0EHyKdAFrMKTvNCe"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-108-831-5842",
            "+60-893-430-7356"
        ],
        "secondaryEmailAddresses": [
            "rtravis@Safaricom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1935-11-11",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "91_396_330_1273",
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
    "LoginInfo": {
        "userName": "klevy",
        "password": "$2y$10$Potx.Diaa.8w7RIcsTG8guF6\/4utw6JK5oKUg44GCc62bUj9QfvUu"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-834-599-1329",
            "+91-166-768-6427"
        ],
        "secondaryEmailAddresses": [
            "klevy@Econnect.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1978-5-10",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "1_397_684_2558",
    "PrimaryContactInfo": {
        "firstName": "Augustus",
        "lastName": "Hogan",
        "phoneNumber": "+1-397-684-2558",
        "email": "ahogan@Airtel.com",
        "socialMedia": []
    },
    "LoginInfo": {
        "userName": "ahogan",
        "password": "$2y$10$I11shjp0kaeGui\/Ke5EecOPhdPzfM\/kJVkjKAHN8OfizWaU4EEH\/."
    },
    "Address": {
        "streetAddressOfBuilding": "2178 Little Woods Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "42",
        "city": "Estrie-Ouest (Fulford)",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "J0E",
        "GeoSpatialInfo": {
            "latitude": "45.2831",
            "longitude": "-72.5244"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-793-713-6397",
            "+1-83-893-2012"
        ],
        "secondaryEmailAddresses": [
            "ahogan@Swisscom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1987-5-7",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "687_398_694_5436",
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
    "LoginInfo": {
        "userName": "vdoyle",
        "password": "$2y$10$BjFqbLXDQPN4OsQMC1bBJuz61BUXvsT7tQOCiYX3MLyNSlNho5yyW"
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-638-921-1892",
            "+687-524-530-2950"
        ],
        "secondaryEmailAddresses": [
            "vdoyle@NTT.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1990-8-11",
        "gender": "M"
    }
});
db.customers.insertOne(
{
    "customerKey": "40_399_854_9793",
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
    "LoginInfo": {
        "userName": "mreilly",
        "password": "$2y$10$UAwgJtxXOeqYCOBtAK.K2OPD6B\/ebYK6atIGwtsA71x\/VwyXX3yL."
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
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+40-76-787-5653",
            "+40-255-028-3868"
        ],
        "secondaryEmailAddresses": [
            "mreilly@Millicom.net"
        ]
    },
    "OtherInfo": {
        "dateOfBirth": "1963-9-28",
        "gender": "M"
    }
});
