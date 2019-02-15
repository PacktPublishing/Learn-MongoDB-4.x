conn = new Mongo();
db = conn.getDB("booksomething");
db.user.drop();
db.user.insertOne(
{
    "email": "bayers100@Millicom.com",
    "userType": "partner",
    "businessName": "Fat Cats Industries Inc",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Buford",
        "lastName": "Ayers",
        "phoneNumber": "+1-100-621-3271",
        "email": "bayers100@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "39.2954",
            "longitude": "-80.2427"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-982-215-4905"
        ],
        "secondaryEmailAddresses": [
            "bayers@OpenWorld.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bayers"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-12-16"
    },
    "LoginInfo": {
        "username": "bayers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7349 Little Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bridgeport",
        "stateProvince": "WV",
        "locality": "Harrison",
        "country": "US",
        "postalCode": "26330"
    }
});
db.user.insertOne(
{
    "email": "bboyer101@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Branden",
        "lastName": "Boyer",
        "phoneNumber": "+56-101-570-3190",
        "email": "bboyer101@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "-36.7869",
            "longitude": "-73.1052"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bboyer@NTT.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-8-20"
    },
    "LoginInfo": {
        "username": "bboyer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6405 Short Tree Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hualp\u00e9n",
        "stateProvince": "Hualp\u00e9n",
        "locality": "Provincia de Concepci\u00f3n",
        "country": "CL",
        "postalCode": "4600000"
    }
});
db.user.insertOne(
{
    "email": "lmills102@Safaricom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lacresha",
        "lastName": "Mills",
        "phoneNumber": "+1-102-067-1395",
        "email": "lmills102@Safaricom.com",
        "GeoSpatialInfo": {
            "latitude": "38.6865",
            "longitude": "-120.8145"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-525-731-7674"
        ],
        "secondaryEmailAddresses": [
            "lmills@NordNet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lmills"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-9-22"
    },
    "LoginInfo": {
        "username": "lmills",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7521 Big Woods Boulevard",
        "buildingName": "Building 5E",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Diamond Springs",
        "stateProvince": "CA",
        "locality": "El Dorado",
        "country": "US",
        "postalCode": "95619"
    }
});
db.user.insertOne(
{
    "email": "mvance103@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Monty",
        "lastName": "Vance",
        "phoneNumber": "+389-103-198-6487",
        "email": "mvance103@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "41.6833",
            "longitude": "22.8083"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mvance@ATT.net",
            "mvance@Optus.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-6-3"
    },
    "LoginInfo": {
        "username": "mvance",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1937 Winding Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rusinovo",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "2315"
    }
});
db.user.insertOne(
{
    "email": "ifitzpat104@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ivey",
        "lastName": "Fitzpatrick",
        "phoneNumber": "+44-104-508-4964",
        "email": "ifitzpat104@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "56.1437",
            "longitude": "-3.9315"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-563-397-6656"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ifitzpat"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ifitzpat"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-10-22"
    },
    "LoginInfo": {
        "username": "ifitzpat",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7272 Short Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nyadd",
        "stateProvince": "Scotland",
        "locality": "Stirling",
        "country": "GB",
        "postalCode": "FK9"
    }
});
db.user.insertOne(
{
    "email": "swyatt105@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shannon",
        "lastName": "Wyatt",
        "phoneNumber": "+385-105-225-6591",
        "email": "swyatt105@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "45.1444",
            "longitude": "14.8211"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-234-255-8063",
            "+385-180-289-4129",
            "+385-30-403-2991"
        ],
        "secondaryEmailAddresses": [
            "swyatt@Rogers.net",
            "swyatt@GlasNET.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/swyatt"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-5-22"
    },
    "LoginInfo": {
        "username": "swyatt",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6223 Short Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Donji Zagon",
        "stateProvince": "Ledenice",
        "locality": "Ledenice",
        "country": "HR",
        "postalCode": "51251"
    }
});
db.user.insertOne(
{
    "email": "fellis106@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Fermin",
        "lastName": "Ellis",
        "phoneNumber": "+1-106-723-2543",
        "email": "fellis106@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "31.7865",
            "longitude": "-96.4202"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/fellis"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-12-2"
    },
    "LoginInfo": {
        "username": "fellis",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5284 Winding Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wortham",
        "stateProvince": "TX",
        "locality": "Freestone",
        "country": "US",
        "postalCode": "76693"
    }
});
db.user.insertOne(
{
    "email": "mramirez107@Safaricom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Maurine",
        "lastName": "Ramirez",
        "phoneNumber": "+590-107-585-3390",
        "email": "mramirez107@Safaricom.com",
        "GeoSpatialInfo": {
            "latitude": "16.2422",
            "longitude": "-61.5343"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-551-529-0941",
            "+590-760-942-1056"
        ],
        "secondaryEmailAddresses": [
            "mramirez@Telecom.net",
            "mramirez@MTN.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mramirez"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mramirez"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-11-14"
    },
    "LoginInfo": {
        "username": "mramirez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7119 Green Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pointe-\u00e0-Pitre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97155 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "clindsey108@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cesar",
        "lastName": "Lindsey",
        "phoneNumber": "+1-108-724-6376",
        "email": "clindsey108@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "51.0334",
            "longitude": "-113.8187"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-600-654-6710"
        ],
        "secondaryEmailAddresses": [
            "clindsey@VimpelCom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-12-25"
    },
    "LoginInfo": {
        "username": "clindsey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8646 Red Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chestermere",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T1X"
    }
});
db.user.insertOne(
{
    "email": "klong109@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kathern",
        "lastName": "Long",
        "phoneNumber": "+55-109-036-7127",
        "email": "klong109@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "-23.7101",
            "longitude": "-53.7936"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "klong@Belgacom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/klong"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/klong"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-8-23"
    },
    "LoginInfo": {
        "username": "klong",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1432 Big Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Esperan\u00e7a Nova",
        "stateProvince": "Parana",
        "locality": "Parana",
        "country": "BR",
        "postalCode": "87545-000"
    }
});
db.user.insertOne(
{
    "email": "nrowe110@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nathaniel",
        "lastName": "Rowe",
        "phoneNumber": "+1-110-241-1190",
        "email": "nrowe110@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "49.5067",
            "longitude": "-56.2616"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nrowe"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-12-19"
    },
    "LoginInfo": {
        "username": "nrowe",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5130 Short Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Northern Newfoundland (Springdale)",
        "stateProvince": "NL",
        "locality": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A0J"
    }
});
db.user.insertOne(
{
    "email": "mmcdanie111@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Marcel",
        "lastName": "Mcdaniel",
        "phoneNumber": "+358-111-819-9117",
        "email": "mmcdanie111@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "61.4019",
            "longitude": "25.64"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mmcdanie"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmcdanie"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mmcdanie"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-3-12"
    },
    "LoginInfo": {
        "username": "mmcdanie",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4353 Winding Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nikkaroinen",
        "stateProvince": "Sysm\u00e4",
        "locality": "Lahti",
        "country": "FI",
        "postalCode": "19320"
    }
});
db.user.insertOne(
{
    "email": "bsalas112@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brain",
        "lastName": "Salas",
        "phoneNumber": "+1-112-213-0429",
        "email": "bsalas112@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "45.6168",
            "longitude": "-73.7825"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-758-767-5263"
        ],
        "secondaryEmailAddresses": [
            "bsalas@MegaFon.net",
            "bsalas@SEEDnet.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bsalas"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bsalas"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bsalas"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bsalas"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-9-13"
    },
    "LoginInfo": {
        "username": "bsalas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7628 Big Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sainte-Rose",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H7L"
    }
});
db.user.insertOne(
{
    "email": "rbailey113@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Romana",
        "lastName": "Bailey",
        "phoneNumber": "+262-113-393-9602",
        "email": "rbailey113@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "-12.7044",
            "longitude": "45.1223"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-908-536-9809"
        ],
        "secondaryEmailAddresses": [
            "rbailey@GreenNet.net",
            "rbailey@Telefonica.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rbailey"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rbailey"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-6-6"
    },
    "LoginInfo": {
        "username": "rbailey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7273 Red Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bandraboua",
        "stateProvince": "Bandraboua",
        "locality": "Bandraboua",
        "country": "YT",
        "postalCode": "97650"
    }
});
db.user.insertOne(
{
    "email": "vmosley114@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vanessa",
        "lastName": "Mosley",
        "phoneNumber": "+1-114-371-9909",
        "email": "vmosley114@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "35.8334",
            "longitude": "-78.5799"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vmosley"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-11-15"
    },
    "LoginInfo": {
        "username": "vmosley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9529 Red Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Raleigh",
        "stateProvince": "NC",
        "locality": "Wake",
        "country": "US",
        "postalCode": "27604"
    }
});
db.user.insertOne(
{
    "email": "smorgan115@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shondra",
        "lastName": "Morgan",
        "phoneNumber": "+1-115-023-0769",
        "email": "smorgan115@BT.com",
        "GeoSpatialInfo": {
            "latitude": "48.4062",
            "longitude": "-118.1249"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-348-937-7796",
            "+1-301-901-0294",
            "+1-537-387-6077"
        ],
        "secondaryEmailAddresses": [
            "smorgan@Telus.net",
            "smorgan@Econnect.net",
            "smorgan@Bifty.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/smorgan"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/smorgan"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-3-28"
    },
    "LoginInfo": {
        "username": "smorgan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6419 Green Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rice",
        "stateProvince": "WA",
        "locality": "Stevens",
        "country": "US",
        "postalCode": "99167"
    }
});
db.user.insertOne(
{
    "email": "alawson116@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Andree",
        "lastName": "Lawson",
        "phoneNumber": "+61-116-562-4400",
        "email": "alawson116@NII.com",
        "GeoSpatialInfo": {
            "latitude": "-33.3773",
            "longitude": "149.5465"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-289-384-6290",
            "+61-866-910-2787"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/alawson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/alawson"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-11-11"
    },
    "LoginInfo": {
        "username": "alawson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8078 Short Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eglinton",
        "stateProvince": "NSW",
        "locality": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2795"
    }
});
db.user.insertOne(
{
    "email": "sspears117@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sharlene",
        "lastName": "Spears",
        "phoneNumber": "+385-117-121-0614",
        "email": "sspears117@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "45.6833",
            "longitude": "15.55"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-850-027-8536"
        ],
        "secondaryEmailAddresses": [
            "sspears@Telekom.net",
            "sspears@Movil.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-6-19"
    },
    "LoginInfo": {
        "username": "sspears",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6660 Winding Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Brebrovac",
        "stateProvince": "Jastrebarsko",
        "locality": "Jastrebarsko",
        "country": "HR",
        "postalCode": "10450"
    }
});
db.user.insertOne(
{
    "email": "echarles118@Zain.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Edmundo",
        "lastName": "Charles",
        "phoneNumber": "+1-118-206-1235",
        "email": "echarles118@Zain.com",
        "GeoSpatialInfo": {
            "latitude": "39.9905",
            "longitude": "-78.2453"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "echarles@AlgoNet.net",
            "echarles@TM.net",
            "echarles@Optus.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/echarles"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/echarles"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-2-2"
    },
    "LoginInfo": {
        "username": "echarles",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6375 Long Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Breezewood",
        "stateProvince": "PA",
        "locality": "Bedford",
        "country": "US",
        "postalCode": "15533"
    }
});
db.user.insertOne(
{
    "email": "wvalenci119@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Wesley",
        "lastName": "Valencia",
        "phoneNumber": "+1441-119-955-4118",
        "email": "wvalenci119@TM.com",
        "GeoSpatialInfo": {
            "latitude": "32.2783",
            "longitude": "-64.7817"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1441-964-904-6850",
            "+1441-145-925-7657"
        ],
        "secondaryEmailAddresses": [
            "wvalenci@Movil.net",
            "wvalenci@Vodafone.net",
            "wvalenci@NII.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/wvalenci"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-7-1"
    },
    "LoginInfo": {
        "username": "wvalenci",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2839 Winding Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Paget",
        "stateProvince": "Paget Parish",
        "locality": "Paget Parish",
        "country": "BM",
        "postalCode": "PG 01"
    }
});
db.user.insertOne(
{
    "email": "bmcguire120@SKTelecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Britt",
        "lastName": "Mcguire",
        "phoneNumber": "+61-120-626-8294",
        "email": "bmcguire120@SKTelecom.com",
        "GeoSpatialInfo": {
            "latitude": "-28.7538",
            "longitude": "152.9205"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bmcguire@Vodafone.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bmcguire"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-4-19"
    },
    "LoginInfo": {
        "username": "bmcguire",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1787 Big Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Doubtful Creek",
        "stateProvince": "NSW",
        "locality": "NSW NORTH COAST",
        "country": "AU",
        "postalCode": "2470"
    }
});
db.user.insertOne(
{
    "email": "csanford121@Etisalat.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cassey",
        "lastName": "Sanford",
        "phoneNumber": "+47-121-419-8081",
        "email": "csanford121@Etisalat.com",
        "GeoSpatialInfo": {
            "latitude": "70.9498",
            "longitude": "-8.638"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-974-289-6270"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/csanford"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/csanford"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/csanford"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-8-1"
    },
    "LoginInfo": {
        "username": "csanford",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4485 Little Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jan Mayen",
        "stateProvince": "Jan Mayen",
        "locality": "Jan Mayen",
        "country": "SJ",
        "postalCode": "8099"
    }
});
db.user.insertOne(
{
    "email": "faustin122@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Franchesca",
        "lastName": "Austin",
        "phoneNumber": "+44-122-780-0024",
        "email": "faustin122@UI.com",
        "GeoSpatialInfo": {
            "latitude": "55.2377",
            "longitude": "-3.6863"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-806-077-8536"
        ],
        "secondaryEmailAddresses": [
            "faustin@KDDI.net",
            "faustin@AlgoNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/faustin"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-6-12"
    },
    "LoginInfo": {
        "username": "faustin",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6066 Winding Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Clonrae",
        "stateProvince": "Scotland",
        "locality": "Dumfries and Galloway",
        "country": "GB",
        "postalCode": "DG3"
    }
});
db.user.insertOne(
{
    "email": "dmccullo123@Orange.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Danilo",
        "lastName": "Mccullough",
        "phoneNumber": "+691-123-919-3693",
        "email": "dmccullo123@Orange.com",
        "GeoSpatialInfo": {
            "latitude": "7.1383",
            "longitude": "151.5031"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dmccullo"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dmccullo"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-2-23"
    },
    "LoginInfo": {
        "username": "dmccullo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1395 Winding Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Yap",
        "stateProvince": "State of Yap",
        "locality": "State of Yap",
        "country": "FM",
        "postalCode": "96943"
    }
});
db.user.insertOne(
{
    "email": "breilly124@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Buster",
        "lastName": "Reilly",
        "phoneNumber": "+44-124-974-0529",
        "email": "breilly124@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "51.4581",
            "longitude": "-0.5867"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-482-187-2022"
        ],
        "secondaryEmailAddresses": [
            "breilly@Airtel.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/breilly"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/breilly"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-9-28"
    },
    "LoginInfo": {
        "username": "breilly",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4006 Blue Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Old Windsor",
        "stateProvince": "England",
        "locality": "Berkshire",
        "country": "GB",
        "postalCode": "SL4"
    }
});
db.user.insertOne(
{
    "email": "apaul125@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alfonzo",
        "lastName": "Paul",
        "phoneNumber": "+41-125-403-5910",
        "email": "apaul125@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "46.7903",
            "longitude": "9.2014"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-12-290-6984"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/apaul"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-11-17"
    },
    "LoginInfo": {
        "username": "apaul",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9978 Big Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E9",
        "city": "Ladir",
        "stateProvince": "GR",
        "locality": "Region Surselva",
        "country": "CH",
        "postalCode": "7155"
    }
});
db.user.insertOne(
{
    "email": "eguevara126@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ethyl",
        "lastName": "Guevara",
        "phoneNumber": "+61-126-631-0711",
        "email": "eguevara126@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "-37.1767",
            "longitude": "146.0635"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-840-300-8789"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-1-4"
    },
    "LoginInfo": {
        "username": "eguevara",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1998 Little Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Goughs Bay",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3723"
    }
});
db.user.insertOne(
{
    "email": "gpineda127@Etisalat.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Grady",
        "lastName": "Pineda",
        "phoneNumber": "+54-127-853-8548",
        "email": "gpineda127@Etisalat.com",
        "GeoSpatialInfo": {
            "latitude": "-32.0367",
            "longitude": "-64.6267"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+54-64-581-7957"
        ],
        "secondaryEmailAddresses": [
            "gpineda@Telekom.net",
            "gpineda@Relcom.net",
            "gpineda@VimpelCom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-1-20"
    },
    "LoginInfo": {
        "username": "gpineda",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "757 Green Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "EMBALSE RIO LOS MOLINOS",
        "stateProvince": "X",
        "locality": "Cordoba",
        "country": "AR",
        "postalCode": "5192"
    }
});
db.user.insertOne(
{
    "email": "vgregory128@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vincent",
        "lastName": "Gregory",
        "phoneNumber": "+1-128-817-4615",
        "email": "vgregory128@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "58.3269",
            "longitude": "-72.1637"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "vgregory@Softbank.net",
            "vgregory@NTT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vgregory"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vgregory"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-8-11"
    },
    "LoginInfo": {
        "username": "vgregory",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6534 Winding Mountain Street",
        "buildingName": "Building 3E",
        "floor": null,
        "roomApartmentCondoNumber": "EC",
        "city": "Nunavik (Kuujjuaq)",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "J0M"
    }
});
db.user.insertOne(
{
    "email": "croy129@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Clayton",
        "lastName": "Roy",
        "phoneNumber": "+35818-129-432-9796",
        "email": "croy129@UI.com",
        "GeoSpatialInfo": {
            "latitude": "60.2203",
            "longitude": "19.6263"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-273-393-7730",
            "+35818-262-805-2469",
            "+35818-173-334-7602"
        ],
        "secondaryEmailAddresses": [
            "croy@Belgacom.net",
            "croy@Verizon.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/croy"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-3-11"
    },
    "LoginInfo": {
        "username": "croy",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4665 Red Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ecker\u00f6",
        "stateProvince": "Ecker\u00f6",
        "locality": "Ecker\u00f6",
        "country": "AX",
        "postalCode": "22270"
    }
});
db.user.insertOne(
{
    "email": "mcastill130@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Malika",
        "lastName": "Castillo",
        "phoneNumber": "+1-130-420-6701",
        "email": "mcastill130@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "49.2275",
            "longitude": "-122.9301"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-641-617-1508",
            "+1-563-120-3801"
        ],
        "secondaryEmailAddresses": [
            "mcastill@TM.net",
            "mcastill@Telia.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-1-25"
    },
    "LoginInfo": {
        "username": "mcastill",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7535 Big Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Burnaby (East Big Bend \/ Stride Avenue \/ Edmonds \/ Cariboo-Armstrong)",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V3N"
    }
});
db.user.insertOne(
{
    "email": "gsutton131@SKTelecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gene",
        "lastName": "Sutton",
        "phoneNumber": "+1340-131-788-3179",
        "email": "gsutton131@SKTelecom.com",
        "GeoSpatialInfo": {
            "latitude": "17.7648",
            "longitude": "-64.8096"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1340-350-077-2357"
        ],
        "secondaryEmailAddresses": [
            "gsutton@Telia.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gsutton"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gsutton"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-4-3"
    },
    "LoginInfo": {
        "username": "gsutton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3501 Winding Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Frederiksted",
        "stateProvince": "St. Croix",
        "locality": "St. Croix",
        "country": "VI",
        "postalCode": "00841"
    }
});
db.user.insertOne(
{
    "email": "amayer132@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Albertha",
        "lastName": "Mayer",
        "phoneNumber": "+1-132-786-7725",
        "email": "amayer132@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "43.7464",
            "longitude": "-79.2323"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "amayer@Oi.net",
            "amayer@Movil.net",
            "amayer@GlasNET.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/amayer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/amayer"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-7-17"
    },
    "LoginInfo": {
        "username": "amayer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5641 Short Hill Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Scarborough (Eglinton)",
        "stateProvince": "ON",
        "locality": "Scarborough",
        "country": "CA",
        "postalCode": "M1J"
    }
});
db.user.insertOne(
{
    "email": "ebooker133@EUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Emmett",
        "lastName": "Booker",
        "phoneNumber": "+56-133-603-4677",
        "email": "ebooker133@EUnet.com",
        "GeoSpatialInfo": {
            "latitude": "-36.6803",
            "longitude": "-72.199"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+56-773-077-7526"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ebooker"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-10-18"
    },
    "LoginInfo": {
        "username": "ebooker",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9996 Big Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chill\u00e1n Viejo",
        "stateProvince": "Chill\u00e1n Viejo",
        "locality": "Provincia de \u00d1uble",
        "country": "CL",
        "postalCode": "3820000"
    }
});
db.user.insertOne(
{
    "email": "cclark134@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Clementina",
        "lastName": "Clark",
        "phoneNumber": "+1-134-315-7606",
        "email": "cclark134@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "45.5834",
            "longitude": "-70.8823"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-340-120-2706"
        ],
        "secondaryEmailAddresses": [
            "cclark@SKTelecom.net",
            "cclark@CCI.net",
            "cclark@Telus.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-3-17"
    },
    "LoginInfo": {
        "username": "cclark",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2933 Little River Circle",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Lac-Megantic",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "G6B"
    }
});
db.user.insertOne(
{
    "email": "mtanner135@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Manual",
        "lastName": "Tanner",
        "phoneNumber": "+421-135-986-2535",
        "email": "mtanner135@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "48.7445",
            "longitude": "22.1814"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-364-383-3081",
            "+421-846-686-7088"
        ],
        "secondaryEmailAddresses": [
            "mtanner@CCI.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mtanner"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-8-13"
    },
    "LoginInfo": {
        "username": "mtanner",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "170 Red River Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sobrance",
        "stateProvince": "KI",
        "locality": "Sobrance",
        "country": "SK",
        "postalCode": "073 01"
    }
});
db.user.insertOne(
{
    "email": "cwells136@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carri",
        "lastName": "Wells",
        "phoneNumber": "+61-136-891-3249",
        "email": "cwells136@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "-36.0398",
            "longitude": "146.9396"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-762-336-5429",
            "+61-289-527-9033"
        ],
        "secondaryEmailAddresses": [
            "cwells@ICom.net",
            "cwells@NII.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cwells"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-2-15"
    },
    "LoginInfo": {
        "username": "cwells",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8083 Winding Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lavington",
        "stateProvince": "NSW",
        "locality": "CANBERRA",
        "country": "AU",
        "postalCode": "2641"
    }
});
db.user.insertOne(
{
    "email": "chiggins137@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cristobal",
        "lastName": "Higgins",
        "phoneNumber": "+506-137-737-8403",
        "email": "chiggins137@NII.com",
        "GeoSpatialInfo": {
            "latitude": "10.3501",
            "longitude": "-84.5882"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+506-507-319-3546",
            "+506-850-377-5838"
        ],
        "secondaryEmailAddresses": [
            "chiggins@Telekom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-8-13"
    },
    "LoginInfo": {
        "username": "chiggins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2857 Little Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "95",
        "city": "La Tigra",
        "stateProvince": "La Tigra",
        "locality": "San Carlos",
        "country": "CR",
        "postalCode": "21008"
    }
});
db.user.insertOne(
{
    "email": "lstanley138@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lezlie",
        "lastName": "Stanley",
        "phoneNumber": "+1-138-091-2849",
        "email": "lstanley138@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "40.7808",
            "longitude": "-73.9772"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-926-819-5390",
            "+1-130-850-8711"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lstanley"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lstanley"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-1-18"
    },
    "LoginInfo": {
        "username": "lstanley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8811 Green Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "14",
        "city": "New York",
        "stateProvince": "NY",
        "locality": "New York",
        "country": "US",
        "postalCode": "10159"
    }
});
db.user.insertOne(
{
    "email": "awells139@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ahmad",
        "lastName": "Wells",
        "phoneNumber": "+81-139-976-4530",
        "email": "awells139@TM.com",
        "GeoSpatialInfo": {
            "latitude": "32.2208",
            "longitude": "130.9197"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "awells@CCI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/awells"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-12-14"
    },
    "LoginInfo": {
        "username": "awells",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1411 Big Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Uehigashi",
        "stateProvince": "Asagiri Cho",
        "locality": "Kuma Gun",
        "country": "JP",
        "postalCode": "868-0421"
    }
});
db.user.insertOne(
{
    "email": "aford140@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Andre",
        "lastName": "Ford",
        "phoneNumber": "+1-140-229-6139",
        "email": "aford140@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "33.5703",
            "longitude": "-80.7081"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-189-169-7063",
            "+1-18-013-7365"
        ],
        "secondaryEmailAddresses": [
            "aford@CenturyLink.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/aford"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/aford"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-7-7"
    },
    "LoginInfo": {
        "username": "aford",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "690 Short Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cameron",
        "stateProvince": "SC",
        "locality": "Calhoun",
        "country": "US",
        "postalCode": "29030"
    }
});
db.user.insertOne(
{
    "email": "acopelan141@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Arlen",
        "lastName": "Copeland",
        "phoneNumber": "+385-141-995-1710",
        "email": "acopelan141@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "43.285",
            "longitude": "16.8756"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-674-212-2457"
        ],
        "secondaryEmailAddresses": [
            "acopelan@ICom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/acopelan"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/acopelan"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-10-9"
    },
    "LoginInfo": {
        "username": "acopelan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2058 Green Gulch Road",
        "buildingName": null,
        "floor": 17,
        "roomApartmentCondoNumber": null,
        "city": "Sumartin",
        "stateProvince": "Sumartin",
        "locality": "Sumartin",
        "country": "HR",
        "postalCode": "21426"
    }
});
db.user.insertOne(
{
    "email": "rrodrigu142@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rhoda",
        "lastName": "Rodriguez",
        "phoneNumber": "+61-142-356-2662",
        "email": "rrodrigu142@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "-31.7083",
            "longitude": "152.6444"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-642-662-5497",
            "+61-766-986-7377"
        ],
        "secondaryEmailAddresses": [
            "rrodrigu@PTCL.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rrodrigu"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-7-11"
    },
    "LoginInfo": {
        "username": "rrodrigu",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8551 Blue Mountain Circle",
        "buildingName": "Building BD",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Thrumster",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2444"
    }
});
db.user.insertOne(
{
    "email": "gknight144@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Geneva",
        "lastName": "Knight",
        "phoneNumber": "+61-144-369-0951",
        "email": "gknight144@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "-31.4318",
            "longitude": "152.8012"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-770-819-6154",
            "+61-922-152-0789",
            "+61-893-165-6418"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gknight"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-4-10"
    },
    "LoginInfo": {
        "username": "gknight",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "230 Red Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sancrox",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2446"
    }
});
db.user.insertOne(
{
    "email": "bjaramil145@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Boyd",
        "lastName": "Jaramillo",
        "phoneNumber": "+421-145-041-7701",
        "email": "bjaramil145@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "48.6089",
            "longitude": "21.2294"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-218-680-6521",
            "+421-214-075-9619",
            "+421-490-890-1795"
        ],
        "secondaryEmailAddresses": [
            "bjaramil@Relcom.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bjaramil"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-9-12"
    },
    "LoginInfo": {
        "username": "bjaramil",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "288 Little Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Soko\u013eany",
        "stateProvince": "KI",
        "locality": "Ko\u0161ice-okolie",
        "country": "SK",
        "postalCode": "044 57"
    }
});
db.user.insertOne(
{
    "email": "wbass146@Zain.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Winnie",
        "lastName": "Bass",
        "phoneNumber": "+91-146-318-4580",
        "email": "wbass146@Zain.com",
        "GeoSpatialInfo": {
            "latitude": "24.2529",
            "longitude": "88.039"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-984-202-8705"
        ],
        "secondaryEmailAddresses": [
            "wbass@UUnet.net",
            "wbass@Sprint.net",
            "wbass@Airtel.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/wbass"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/wbass"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wbass"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-2-18"
    },
    "LoginInfo": {
        "username": "wbass",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7561 Green Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Damodartola",
        "stateProvince": "Kaliachak-ii",
        "locality": "Malda",
        "country": "IN",
        "postalCode": "732207"
    }
});
db.user.insertOne(
{
    "email": "nbridges147@Vivendi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Naida",
        "lastName": "Bridges",
        "phoneNumber": "+421-147-061-6422",
        "email": "nbridges147@Vivendi.com",
        "GeoSpatialInfo": {
            "latitude": "48.1187",
            "longitude": "17.4431"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-670-934-6930",
            "+421-16-507-3237"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nbridges"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/nbridges"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nbridges"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-1-18"
    },
    "LoginInfo": {
        "username": "nbridges",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6849 Green Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tonkovce",
        "stateProvince": "TA",
        "locality": "Dunajsk\u00e1 Streda",
        "country": "SK",
        "postalCode": "930 38"
    }
});
db.user.insertOne(
{
    "email": "rhurst148@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ronald",
        "lastName": "Hurst",
        "phoneNumber": "+1-148-489-4288",
        "email": "rhurst148@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "38.5223",
            "longitude": "-88.537"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-983-318-3518"
        ],
        "secondaryEmailAddresses": [
            "rhurst@CUBENet.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rhurst"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rhurst"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-10-16"
    },
    "LoginInfo": {
        "username": "rhurst",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5219 Little Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Johnsonville",
        "stateProvince": "IL",
        "locality": "Wayne",
        "country": "US",
        "postalCode": "62850"
    }
});
db.user.insertOne(
{
    "email": "lmcphers149@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lacy",
        "lastName": "Mcpherson",
        "phoneNumber": "+46-149-109-1252",
        "email": "lmcphers149@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "63.1667",
            "longitude": "15.6"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+46-435-756-4751",
            "+46-426-889-6734",
            "+46-823-227-8767"
        ],
        "secondaryEmailAddresses": [
            "lmcphers@Zain.net",
            "lmcphers@Telia.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lmcphers"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lmcphers"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lmcphers"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-2-20"
    },
    "LoginInfo": {
        "username": "lmcphers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4518 Big Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Stugun",
        "stateProvince": "Z",
        "locality": "\u00d6stersund",
        "country": "SE",
        "postalCode": "830 76"
    }
});
db.user.insertOne(
{
    "email": "mmurphy150@Telia.com",
    "userType": "partner",
    "businessName": "Serious Industries Inc",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mckinley",
        "lastName": "Murphy",
        "phoneNumber": "+1-150-961-8551",
        "email": "mmurphy150@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "45.3176",
            "longitude": "-65.9271"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mmurphy@Optus.net",
            "mmurphy@GlasNET.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mmurphy"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mmurphy"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmurphy"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-2-8"
    },
    "LoginInfo": {
        "username": "mmurphy",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7688 Blue Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint John Lakewood",
        "stateProvince": "NB",
        "locality": "Saint John ",
        "country": "CA",
        "postalCode": "E2N"
    }
});
db.user.insertOne(
{
    "email": "eodom151@Oi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Emogene",
        "lastName": "Odom",
        "phoneNumber": "+213-151-715-0238",
        "email": "eodom151@Oi.com",
        "GeoSpatialInfo": {
            "latitude": "36.6534",
            "longitude": "4.1433"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+213-421-000-8730"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-6-3"
    },
    "LoginInfo": {
        "username": "eodom",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5277 Green Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ait Hague",
        "stateProvince": "Tizi-Ouzou",
        "locality": "Tizi-Ouzou",
        "country": "DZ",
        "postalCode": "15039"
    }
});
db.user.insertOne(
{
    "email": "snewton152@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Staci",
        "lastName": "Newton",
        "phoneNumber": "+1-152-886-2418",
        "email": "snewton152@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "45.689",
            "longitude": "-73.8671"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-971-470-1136",
            "+1-28-321-9538"
        ],
        "secondaryEmailAddresses": [
            "snewton@CenturyLink.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/snewton"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/snewton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-8-9"
    },
    "LoginInfo": {
        "username": "snewton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "324 Green Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sainte-Th\u00e9r\u00e8se-de-Blainville Northwest",
        "stateProvince": "QC",
        "locality": "Sainte-Th\u00e9r\u00e8se-de-Blainville",
        "country": "CA",
        "postalCode": "J7C"
    }
});
db.user.insertOne(
{
    "email": "codonnel153@TeleSystems.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chauncey",
        "lastName": "Odonnell",
        "phoneNumber": "+1441-153-647-5258",
        "email": "codonnel153@TeleSystems.com",
        "GeoSpatialInfo": {
            "latitude": "32.2508",
            "longitude": "-64.8564"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1441-667-041-0759",
            "+1441-800-353-1738"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/codonnel"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-6-17"
    },
    "LoginInfo": {
        "username": "codonnel",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9742 Little Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Southampton",
        "stateProvince": "Southampton Parish",
        "locality": "Southampton Parish",
        "country": "BM",
        "postalCode": "WK 03"
    }
});
db.user.insertOne(
{
    "email": "fstaffor154@Telefonica.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Faye",
        "lastName": "Stafford",
        "phoneNumber": "+1-154-176-4537",
        "email": "fstaffor154@Telefonica.com",
        "GeoSpatialInfo": {
            "latitude": "45.5834",
            "longitude": "-70.8823"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "fstaffor@Telecom.net",
            "fstaffor@Turkcell.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/fstaffor"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/fstaffor"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-12-23"
    },
    "LoginInfo": {
        "username": "fstaffor",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3992 Green River Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E9",
        "city": "Lac-Megantic",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "G6B"
    }
});
db.user.insertOne(
{
    "email": "lmoses155@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Laurence",
        "lastName": "Moses",
        "phoneNumber": "+34-155-935-6472",
        "email": "lmoses155@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "43.2528",
            "longitude": "-8.3868"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-499-203-5372",
            "+34-353-302-4648"
        ],
        "secondaryEmailAddresses": [
            "lmoses@PLDT.net",
            "lmoses@BCE.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lmoses"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-9-9"
    },
    "LoginInfo": {
        "username": "lmoses",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2838 Long Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Silva, A (Rodis)",
        "stateProvince": "GA",
        "locality": "A Coru\u00f1a",
        "country": "ES",
        "postalCode": "15186"
    }
});
db.user.insertOne(
{
    "email": "thuang156@Telekom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Theo",
        "lastName": "Huang",
        "phoneNumber": "+1-156-938-3539",
        "email": "thuang156@Telekom.com",
        "GeoSpatialInfo": {
            "latitude": "40.7763",
            "longitude": "-73.9529"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-10-710-4456"
        ],
        "secondaryEmailAddresses": [
            "thuang@Rogers.net",
            "thuang@EUnet.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/thuang"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/thuang"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-2-7"
    },
    "LoginInfo": {
        "username": "thuang",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "444 Little Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "New York",
        "stateProvince": "NY",
        "locality": "New York",
        "country": "US",
        "postalCode": "10028"
    }
});
db.user.insertOne(
{
    "email": "phamilto157@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Phung",
        "lastName": "Hamilton",
        "phoneNumber": "+423-157-922-3518",
        "email": "phamilto157@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "47.2249",
            "longitude": "9.5135"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-806-075-4447",
            "+423-346-046-6491"
        ],
        "secondaryEmailAddresses": [
            "phamilto@Telenor.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/phamilto"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-5-1"
    },
    "LoginInfo": {
        "username": "phamilto",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "549 Green Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gamprin-Bendern",
        "stateProvince": "Gamprin",
        "locality": "Gamprin",
        "country": "LI",
        "postalCode": "9487"
    }
});
db.user.insertOne(
{
    "email": "dponce158@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Debbie",
        "lastName": "Ponce",
        "phoneNumber": "+61-158-226-0939",
        "email": "dponce158@TM.com",
        "GeoSpatialInfo": {
            "latitude": "-34.9",
            "longitude": "117.05"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-710-933-6466"
        ],
        "secondaryEmailAddresses": [
            "dponce@PTCL.net",
            "dponce@Optus.net",
            "dponce@TM.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dponce"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-12-1"
    },
    "LoginInfo": {
        "username": "dponce",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8833 Blue River Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kentdale",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6333"
    }
});
db.user.insertOne(
{
    "email": "bvance159@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brooks",
        "lastName": "Vance",
        "phoneNumber": "+262-159-444-1277",
        "email": "bvance159@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "-20.9373",
            "longitude": "55.2919"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-5-27"
    },
    "LoginInfo": {
        "username": "bvance",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4132 Big River Way",
        "buildingName": "Building 26",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Le Port",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97821 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "dvo160@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Daria",
        "lastName": "Vo",
        "phoneNumber": "+91-160-162-0405",
        "email": "dvo160@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "19.7466",
            "longitude": "73.0878"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-227-756-5599"
        ],
        "secondaryEmailAddresses": [
            "dvo@DaxNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dvo"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-12-3"
    },
    "LoginInfo": {
        "username": "dvo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8204 Green Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chamble",
        "stateProvince": "Wada",
        "locality": "Thane",
        "country": "IN",
        "postalCode": "421312"
    }
});
db.user.insertOne(
{
    "email": "dhall161@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Digna",
        "lastName": "Hall",
        "phoneNumber": "+681-161-466-5790",
        "email": "dhall161@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "-14.2667",
            "longitude": "-178.1667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "dhall@SKTelecom.net",
            "dhall@CCS.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dhall"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dhall"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-11-18"
    },
    "LoginInfo": {
        "username": "dhall",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "384 Red Gully Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620"
    }
});
db.user.insertOne(
{
    "email": "bcurry162@GreenNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Bev",
        "lastName": "Curry",
        "phoneNumber": "+1-162-244-3647",
        "email": "bcurry162@GreenNet.com",
        "GeoSpatialInfo": {
            "latitude": "44.6003",
            "longitude": "-64.7443"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bcurry@SEEDnet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bcurry"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bcurry"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-12-29"
    },
    "LoginInfo": {
        "username": "bcurry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8599 Big Ridge Way",
        "buildingName": null,
        "floor": 8,
        "roomApartmentCondoNumber": null,
        "city": "West Lunenburg County (New Germany)",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B0R"
    }
});
db.user.insertOne(
{
    "email": "egiles163@Orstom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Edwin",
        "lastName": "Giles",
        "phoneNumber": "+353-163-124-3350",
        "email": "egiles163@Orstom.com",
        "GeoSpatialInfo": {
            "latitude": "53.354",
            "longitude": "-6.2545"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+353-65-394-7723",
            "+353-389-993-1955"
        ],
        "secondaryEmailAddresses": [
            "egiles@GreenNet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/egiles"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-12-9"
    },
    "LoginInfo": {
        "username": "egiles",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6368 Red Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dublin 1",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "D01"
    }
});
db.user.insertOne(
{
    "email": "hmeadows164@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hilde",
        "lastName": "Meadows",
        "phoneNumber": "+91-164-228-0420",
        "email": "hmeadows164@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "14.5338",
            "longitude": "77.3863"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-753-490-6485",
            "+91-921-903-6872"
        ],
        "secondaryEmailAddresses": [
            "hmeadows@Rogers.net",
            "hmeadows@BCE.net",
            "hmeadows@OpenWorld.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hmeadows"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/hmeadows"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-8-30"
    },
    "LoginInfo": {
        "username": "hmeadows",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5363 Green Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "F9",
        "city": "Atmakur(Atp)",
        "stateProvince": "Atmakur",
        "locality": "Ananthapur",
        "country": "IN",
        "postalCode": "515751"
    }
});
db.user.insertOne(
{
    "email": "lstrickl165@SKTelecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lorna",
        "lastName": "Strickland",
        "phoneNumber": "+64-165-404-1336",
        "email": "lstrickl165@SKTelecom.com",
        "GeoSpatialInfo": {
            "latitude": "-39.6833",
            "longitude": "175.3333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lstrickl@ICom.net",
            "lstrickl@MegaFon.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lstrickl"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lstrickl"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-8-23"
    },
    "LoginInfo": {
        "username": "lstrickl",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8203 Big Mound Street",
        "buildingName": "Building 15",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kakatahi",
        "stateProvince": "F3",
        "locality": "Manawatu-Wanganui",
        "country": "NZ",
        "postalCode": "4573"
    }
});
db.user.insertOne(
{
    "email": "dmullins166@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dannette",
        "lastName": "Mullins",
        "phoneNumber": "+91-166-994-1283",
        "email": "dmullins166@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "9.1968",
            "longitude": "76.8041"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-577-110-4282",
            "+91-27-122-0580"
        ],
        "secondaryEmailAddresses": [
            "dmullins@Etisalat.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dmullins"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dmullins"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dmullins"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-11-28"
    },
    "LoginInfo": {
        "username": "dmullins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6880 Blue Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kariamplavu",
        "stateProvince": "Mallappally",
        "locality": "Pathanamthitta",
        "country": "IN",
        "postalCode": "689615"
    }
});
db.user.insertOne(
{
    "email": "mleonard167@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Myrtle",
        "lastName": "Leonard",
        "phoneNumber": "+596-167-622-1085",
        "email": "mleonard167@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "14.707",
            "longitude": "-61.1462"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+596-906-689-8442"
        ],
        "secondaryEmailAddresses": [
            "mleonard@SKTelecom.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mleonard"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-2-21"
    },
    "LoginInfo": {
        "username": "mleonard",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9840 Short Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Le Morne-Vert",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97226"
    }
});
db.user.insertOne(
{
    "email": "gmccormi168@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gertha",
        "lastName": "Mccormick",
        "phoneNumber": "+44-168-203-1939",
        "email": "gmccormi168@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "54.65",
            "longitude": "-6.6167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-570-873-3117",
            "+44-370-339-7803"
        ],
        "secondaryEmailAddresses": [
            "gmccormi@Telecom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gmccormi"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-6-1"
    },
    "LoginInfo": {
        "username": "gmccormi",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9028 Short Bend Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Coagh",
        "stateProvince": "Northern Ireland",
        "locality": "County Tyrone",
        "country": "GB",
        "postalCode": "BT80"
    }
});
db.user.insertOne(
{
    "email": "lwilson170@Unicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Loren",
        "lastName": "Wilson",
        "phoneNumber": "+61-170-104-4828",
        "email": "lwilson170@Unicom.com",
        "GeoSpatialInfo": {
            "latitude": "-31.9758",
            "longitude": "151.9086"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-427-488-2071"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lwilson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-8-12"
    },
    "LoginInfo": {
        "username": "lwilson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4818 Little Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bowman Farm",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2422"
    }
});
db.user.insertOne(
{
    "email": "mharmon171@Telkom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Michelina",
        "lastName": "Harmon",
        "phoneNumber": "+1441-171-096-8235",
        "email": "mharmon171@Telkom.com",
        "GeoSpatialInfo": {
            "latitude": "32.354",
            "longitude": "-64.7096"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mharmon@ATT.net",
            "mharmon@Belgacom.net",
            "mharmon@OpenWorld.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mharmon"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mharmon"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-4-3"
    },
    "LoginInfo": {
        "username": "mharmon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1790 Green Bough Ride",
        "buildingName": "Building 31",
        "floor": null,
        "roomApartmentCondoNumber": "2B",
        "city": "Smith\u2019s",
        "stateProvince": "Smith\u2019s Parish",
        "locality": "Smith\u2019s Parish",
        "country": "BM",
        "postalCode": "HS 02"
    }
});
db.user.insertOne(
{
    "email": "jenglish172@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Judi",
        "lastName": "English",
        "phoneNumber": "+44-172-229-8376",
        "email": "jenglish172@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "55.5807",
            "longitude": "-2.4127"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jenglish@Telstra.net",
            "jenglish@TM.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jenglish"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jenglish"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-7-13"
    },
    "LoginInfo": {
        "username": "jenglish",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3109 Short Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cessford",
        "stateProvince": "Scotland",
        "locality": "Scottish Borders",
        "country": "GB",
        "postalCode": "TD5"
    }
});
db.user.insertOne(
{
    "email": "egriffin173@Bifty.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ellis",
        "lastName": "Griffin",
        "phoneNumber": "+39-173-084-8533",
        "email": "egriffin173@Bifty.com",
        "GeoSpatialInfo": {
            "latitude": "45.6808",
            "longitude": "12.7314"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-149-748-8921",
            "+39-935-133-4807"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/egriffin"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-6-9"
    },
    "LoginInfo": {
        "username": "egriffin",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5667 Big Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sant'Elena",
        "stateProvince": "VN",
        "locality": "Venezia",
        "country": "IT",
        "postalCode": "30122"
    }
});
db.user.insertOne(
{
    "email": "estephen174@ICom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Edmund",
        "lastName": "Stephenson",
        "phoneNumber": "+44-174-899-3464",
        "email": "estephen174@ICom.com",
        "GeoSpatialInfo": {
            "latitude": "52.35",
            "longitude": "-1.5167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-170-187-9332",
            "+44-22-300-7291",
            "+44-324-415-3212"
        ],
        "secondaryEmailAddresses": [
            "estephen@CenturyLink.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/estephen"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-4-5"
    },
    "LoginInfo": {
        "username": "estephen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8513 Big Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Stoneleigh",
        "stateProvince": "England",
        "locality": "Warwickshire",
        "country": "GB",
        "postalCode": "CV8"
    }
});
db.user.insertOne(
{
    "email": "jwhite175@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jarod",
        "lastName": "White",
        "phoneNumber": "+370-175-203-4511",
        "email": "jwhite175@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "55.9167",
            "longitude": "25.4833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-825-160-7845"
        ],
        "secondaryEmailAddresses": [
            "jwhite@Vivendi.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jwhite"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jwhite"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-7-19"
    },
    "LoginInfo": {
        "username": "jwhite",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7795 Green Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Meldeiki\u0161kio k.",
        "stateProvince": "Roki\u0161kio r. sav.",
        "locality": "Roki\u0161kio r. sav.",
        "country": "LT",
        "postalCode": "42031"
    }
});
db.user.insertOne(
{
    "email": "whiggins176@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Wilbert",
        "lastName": "Higgins",
        "phoneNumber": "+1-176-853-8699",
        "email": "whiggins176@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "43.4338",
            "longitude": "-88.0623"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-541-597-7884",
            "+1-162-748-6220",
            "+1-498-251-1797"
        ],
        "secondaryEmailAddresses": [
            "whiggins@Movil.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/whiggins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-10-3"
    },
    "LoginInfo": {
        "username": "whiggins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2501 Winding Bend Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Newburg",
        "stateProvince": "WI",
        "locality": "Washington",
        "country": "US",
        "postalCode": "53060"
    }
});
db.user.insertOne(
{
    "email": "mmunoz178@Telefonica.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Melina",
        "lastName": "Munoz",
        "phoneNumber": "+61-178-798-8519",
        "email": "mmunoz178@Telefonica.com",
        "GeoSpatialInfo": {
            "latitude": "-33.8678",
            "longitude": "151.2073"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-850-776-6415",
            "+61-24-980-5951",
            "+61-110-157-5833"
        ],
        "secondaryEmailAddresses": [
            "mmunoz@Sprint.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmunoz"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-7-18"
    },
    "LoginInfo": {
        "username": "mmunoz",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3045 Little Bend Drive",
        "buildingName": "Building E4",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sydney",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "1177"
    }
});
db.user.insertOne(
{
    "email": "gwalter179@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Grady",
        "lastName": "Walter",
        "phoneNumber": "+1441-179-049-4193",
        "email": "gwalter179@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "32.2934",
            "longitude": "-64.8683"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "gwalter@Rogers.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/gwalter"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gwalter"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-1-26"
    },
    "LoginInfo": {
        "username": "gwalter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "594 Green Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sandys",
        "stateProvince": "Sandys Parish",
        "locality": "Sandys Parish",
        "country": "BM",
        "postalCode": "MA 03"
    }
});
db.user.insertOne(
{
    "email": "rpayne180@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Randal",
        "lastName": "Payne",
        "phoneNumber": "+91-180-613-6425",
        "email": "rpayne180@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "26.7254",
            "longitude": "82.7103"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-722-163-8881",
            "+91-586-141-6625",
            "+91-50-013-1989"
        ],
        "secondaryEmailAddresses": [
            "rpayne@MTN.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rpayne"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-9-11"
    },
    "LoginInfo": {
        "username": "rpayne",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7819 Green Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pagar",
        "stateProvince": "Basti Sadar",
        "locality": "Basti",
        "country": "IN",
        "postalCode": "272123"
    }
});
db.user.insertOne(
{
    "email": "fcobb181@GreenNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Francisco",
        "lastName": "Cobb",
        "phoneNumber": "+356-181-693-5280",
        "email": "fcobb181@GreenNet.com",
        "GeoSpatialInfo": {
            "latitude": "35.8911",
            "longitude": "14.5328"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+356-892-101-8776"
        ],
        "secondaryEmailAddresses": [
            "fcobb@NTT.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/fcobb"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/fcobb"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-4-23"
    },
    "LoginInfo": {
        "username": "fcobb",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1482 Big Gully Road",
        "buildingName": "Building 67",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kalkara",
        "stateProvince": "Il-Kalkara",
        "locality": "Il-Kalkara",
        "country": "MT",
        "postalCode": "KKR"
    }
});
db.user.insertOne(
{
    "email": "lclay182@Orstom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lashanda",
        "lastName": "Clay",
        "phoneNumber": "+1-182-454-3559",
        "email": "lclay182@Orstom.com",
        "GeoSpatialInfo": {
            "latitude": "45.6501",
            "longitude": "-74.3325"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-722-829-0645",
            "+1-284-778-5018",
            "+1-463-532-4165"
        ],
        "secondaryEmailAddresses": [
            "lclay@Telekom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lclay"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lclay"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-7-24"
    },
    "LoginInfo": {
        "username": "lclay",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3017 Blue Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lachute",
        "stateProvince": "QC",
        "locality": "Laurentides",
        "country": "CA",
        "postalCode": "J8H"
    }
});
db.user.insertOne(
{
    "email": "vpearson183@Unicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Valentin",
        "lastName": "Pearson",
        "phoneNumber": "+351-183-890-7719",
        "email": "vpearson183@Unicom.com",
        "GeoSpatialInfo": {
            "latitude": "32.6969",
            "longitude": "-16.9939"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-194-257-8069"
        ],
        "secondaryEmailAddresses": [
            "vpearson@Telecom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vpearson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-8-23"
    },
    "LoginInfo": {
        "username": "vpearson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4108 Red Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jardim da Serra",
        "stateProvince": "Jardim Da Serra",
        "locality": "C\u00e2mara de Lobos",
        "country": "PT",
        "postalCode": "9325-136"
    }
});
db.user.insertOne(
{
    "email": "swinters184@KTC.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sandy",
        "lastName": "Winters",
        "phoneNumber": "+44-184-789-1730",
        "email": "swinters184@KTC.com",
        "GeoSpatialInfo": {
            "latitude": "57.0961",
            "longitude": "-2.5445"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-295-836-2676"
        ],
        "secondaryEmailAddresses": [
            "swinters@UUnet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/swinters"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-5-27"
    },
    "LoginInfo": {
        "username": "swinters",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2906 Short Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bridge of Dye",
        "stateProvince": "Scotland",
        "locality": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB31"
    }
});
db.user.insertOne(
{
    "email": "cedwards185@GreenNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Collin",
        "lastName": "Edwards",
        "phoneNumber": "+376-185-755-7059",
        "email": "cedwards185@GreenNet.com",
        "GeoSpatialInfo": {
            "latitude": "42.5",
            "longitude": "1.5667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+376-666-697-0061"
        ],
        "secondaryEmailAddresses": [
            "cedwards@PLDT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cedwards"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-3-17"
    },
    "LoginInfo": {
        "username": "cedwards",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8979 Blue Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Escaldes-Engordany",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD700"
    }
});
db.user.insertOne(
{
    "email": "lmueller186@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lorretta",
        "lastName": "Mueller",
        "phoneNumber": "+44-186-090-0056",
        "email": "lmueller186@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "52.2118",
            "longitude": "0.1006"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-882-039-2950",
            "+44-343-797-3454"
        ],
        "secondaryEmailAddresses": [
            "lmueller@MaxComm.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lmueller"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lmueller"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-11-28"
    },
    "LoginInfo": {
        "username": "lmueller",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7461 Long Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bourn",
        "stateProvince": "England",
        "locality": "Cambridgeshire",
        "country": "GB",
        "postalCode": "CB3"
    }
});
db.user.insertOne(
{
    "email": "rmccormi187@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Roscoe",
        "lastName": "Mccormick",
        "phoneNumber": "+386-187-871-4154",
        "email": "rmccormi187@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "45.9539",
            "longitude": "14.7453"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rmccormi@VimpelCom.net",
            "rmccormi@TM.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rmccormi"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-2-24"
    },
    "LoginInfo": {
        "username": "rmccormi",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9735 Big Mountain Avenue",
        "buildingName": null,
        "floor": 9,
        "roomApartmentCondoNumber": null,
        "city": "Vi\u0161nja Gora",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "1294"
    }
});
db.user.insertOne(
{
    "email": "dsavage188@OTE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Delorse",
        "lastName": "Savage",
        "phoneNumber": "+91-188-664-3681",
        "email": "dsavage188@OTE.com",
        "GeoSpatialInfo": {
            "latitude": "26.9855",
            "longitude": "93.7217"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-806-727-9734",
            "+91-215-342-0413"
        ],
        "secondaryEmailAddresses": [
            "dsavage@Econnect.net",
            "dsavage@Telenor.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dsavage"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dsavage"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-7-20"
    },
    "LoginInfo": {
        "username": "dsavage",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "472 Green Bend Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Makumkilla",
        "stateProvince": "Margherita",
        "locality": "Tinsukia",
        "country": "IN",
        "postalCode": "786187"
    }
});
db.user.insertOne(
{
    "email": "nyang189@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Neal",
        "lastName": "Yang",
        "phoneNumber": "+371-189-495-8038",
        "email": "nyang189@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "56.5847",
            "longitude": "27.2385"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+371-466-344-3136",
            "+371-873-398-4850"
        ],
        "secondaryEmailAddresses": [
            "nyang@Rogers.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nyang"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-1-13"
    },
    "LoginInfo": {
        "username": "nyang",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3820 Red Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "L\u012bp\u016bri",
        "stateProvince": "Audri\u0146u pag.",
        "locality": "Audri\u0146u pag.",
        "country": "LV",
        "postalCode": "LV-4611"
    }
});
db.user.insertOne(
{
    "email": "creilly190@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Corie",
        "lastName": "Reilly",
        "phoneNumber": "+1-190-214-8347",
        "email": "creilly190@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "45.3281",
            "longitude": "-75.6719"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-54-994-0212"
        ],
        "secondaryEmailAddresses": [
            "creilly@Telstra.net",
            "creilly@Telecom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/creilly"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/creilly"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/creilly"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-10-2"
    },
    "LoginInfo": {
        "username": "creilly",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5794 Little Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ottawa (Riverside Park \/ Hunt Club West \/ Riverside South \/ YOW)",
        "stateProvince": "ON",
        "locality": "Ottawa",
        "country": "CA",
        "postalCode": "K1V"
    }
});
db.user.insertOne(
{
    "email": "lwoodard191@MegaFon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Leon",
        "lastName": "Woodard",
        "phoneNumber": "+40-191-843-5836",
        "email": "lwoodard191@MegaFon.com",
        "GeoSpatialInfo": {
            "latitude": "44.4378",
            "longitude": "26.0174"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+40-169-556-0173",
            "+40-775-189-9321"
        ],
        "secondaryEmailAddresses": [
            "lwoodard@Telenor.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lwoodard"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-11-26"
    },
    "LoginInfo": {
        "username": "lwoodard",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1003 Short Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bucure\u015fti 16",
        "stateProvince": "Sector 6",
        "locality": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "060877"
    }
});
db.user.insertOne(
{
    "email": "mowen192@Oi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Melody",
        "lastName": "Owen",
        "phoneNumber": "+91-192-563-1609",
        "email": "mowen192@Oi.com",
        "GeoSpatialInfo": {
            "latitude": "25.568",
            "longitude": "87.0083"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-313-349-5218",
            "+91-241-545-8920",
            "+91-290-619-9275"
        ],
        "secondaryEmailAddresses": [
            "mowen@CUBENet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mowen"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mowen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-8-25"
    },
    "LoginInfo": {
        "username": "mowen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9520 Little Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Durgapur",
        "stateProvince": "NA",
        "locality": "Madhepura",
        "country": "IN",
        "postalCode": "852116"
    }
});
db.user.insertOne(
{
    "email": "dfox193@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Duncan",
        "lastName": "Fox",
        "phoneNumber": "+48-193-015-0532",
        "email": "dfox193@NII.com",
        "GeoSpatialInfo": {
            "latitude": "54.561",
            "longitude": "16.8945"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-611-239-6947"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dfox"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-10-10"
    },
    "LoginInfo": {
        "username": "dfox",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "773 Short Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Grabno",
        "stateProvince": "Ustka",
        "locality": "Powiat s\u0142upski",
        "country": "PL",
        "postalCode": "76-270"
    }
});
db.user.insertOne(
{
    "email": "jhouse194@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jamison",
        "lastName": "House",
        "phoneNumber": "+44-194-716-8585",
        "email": "jhouse194@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "52.1039",
            "longitude": "-2.8458"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-450-099-0086",
            "+44-431-820-0141"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-4-16"
    },
    "LoginInfo": {
        "username": "jhouse",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3722 Long Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mansell Lacy",
        "stateProvince": "England",
        "locality": "Herefordshire",
        "country": "GB",
        "postalCode": "HR4"
    }
});
db.user.insertOne(
{
    "email": "abranch195@Bifty.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Arron",
        "lastName": "Branch",
        "phoneNumber": "+39-195-747-7629",
        "email": "abranch195@Bifty.com",
        "GeoSpatialInfo": {
            "latitude": "39.6188",
            "longitude": "8.9588"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "abranch@Bifty.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/abranch"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-2-2"
    },
    "LoginInfo": {
        "username": "abranch",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3958 Little Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Villamar",
        "stateProvince": "SD",
        "locality": "Sud Sardegna",
        "country": "IT",
        "postalCode": "09020"
    }
});
db.user.insertOne(
{
    "email": "smckenzi196@OpenWorld.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sanford",
        "lastName": "Mckenzie",
        "phoneNumber": "+44-196-383-2735",
        "email": "smckenzi196@OpenWorld.com",
        "GeoSpatialInfo": {
            "latitude": "53.1973",
            "longitude": "-2.8832"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "smckenzi@CCS.net",
            "smckenzi@OpenWorld.net",
            "smckenzi@Vivendi.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/smckenzi"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/smckenzi"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/smckenzi"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-10-12"
    },
    "LoginInfo": {
        "username": "smckenzi",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6363 Big Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cheshire West and Chester",
        "stateProvince": "England",
        "locality": "Cheshire",
        "country": "GB",
        "postalCode": "CH88"
    }
});
db.user.insertOne(
{
    "email": "jpadilla197@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Janee",
        "lastName": "Padilla",
        "phoneNumber": "+63-197-995-5543",
        "email": "jpadilla197@NII.com",
        "GeoSpatialInfo": {
            "latitude": "8.4983",
            "longitude": "124.3056"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-670-218-8059"
        ],
        "secondaryEmailAddresses": [
            "jpadilla@Telekom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jpadilla"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-10-23"
    },
    "LoginInfo": {
        "username": "jpadilla",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9860 Long Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Initao",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "9022"
    }
});
db.user.insertOne(
{
    "email": "lyoung198@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lino",
        "lastName": "Young",
        "phoneNumber": "+44-198-969-9453",
        "email": "lyoung198@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "53.8977",
            "longitude": "-1.9486"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-744-384-4877",
            "+44-76-761-2408"
        ],
        "secondaryEmailAddresses": [
            "lyoung@Turkcell.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lyoung"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-12-5"
    },
    "LoginInfo": {
        "username": "lyoung",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7561 Winding Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Riddlesden",
        "stateProvince": "England",
        "locality": "West Yorkshire",
        "country": "GB",
        "postalCode": "BD20"
    }
});
db.user.insertOne(
{
    "email": "jhunter199@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Joe",
        "lastName": "Hunter",
        "phoneNumber": "+1787-199-796-9832",
        "email": "jhunter199@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "17.9716",
            "longitude": "-66.908"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1787-179-418-7335",
            "+1787-238-145-9526",
            "+1787-822-408-5574"
        ],
        "secondaryEmailAddresses": [
            "jhunter@cerist.net",
            "jhunter@BT.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jhunter"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-3-13"
    },
    "LoginInfo": {
        "username": "jhunter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6335 Little Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Guanica",
        "stateProvince": "Guanica",
        "locality": "Guanica",
        "country": "PR",
        "postalCode": "00653"
    }
});
db.user.insertOne(
{
    "email": "aschultz200@LGUplus.com",
    "userType": "partner",
    "businessName": "Friendly Industries Inc",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alease",
        "lastName": "Schultz",
        "phoneNumber": "+61-200-630-3003",
        "email": "aschultz200@LGUplus.com",
        "GeoSpatialInfo": {
            "latitude": "-33.8678",
            "longitude": "151.2073"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-838-774-1536"
        ],
        "secondaryEmailAddresses": [
            "aschultz@Unicom.net",
            "aschultz@CCI.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aschultz"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-5-25"
    },
    "LoginInfo": {
        "username": "aschultz",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8130 Winding Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sydney",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "1134"
    }
});
db.user.insertOne(
{
    "email": "dlugo201@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dorathy",
        "lastName": "Lugo",
        "phoneNumber": "+60-201-421-9952",
        "email": "dlugo201@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "5.8456",
            "longitude": "118.0571"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-719-500-6954",
            "+60-172-103-1190"
        ],
        "secondaryEmailAddresses": [
            "dlugo@NTT.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dlugo"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-1-13"
    },
    "LoginInfo": {
        "username": "dlugo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "529 Long Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sandakan",
        "stateProvince": "SBH",
        "locality": "Sabah",
        "country": "MY",
        "postalCode": "90703"
    }
});
db.user.insertOne(
{
    "email": "jsalinas202@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jacquelynn",
        "lastName": "Salinas",
        "phoneNumber": "+61-202-731-3419",
        "email": "jsalinas202@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "-32.3021",
            "longitude": "152.3171"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jsalinas@Frontier.net",
            "jsalinas@Telenor.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-8-1"
    },
    "LoginInfo": {
        "username": "jsalinas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1964 Winding River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wootton",
        "stateProvince": "NSW",
        "locality": "HUNTER",
        "country": "AU",
        "postalCode": "2423"
    }
});
db.user.insertOne(
{
    "email": "hdonovan203@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hilton",
        "lastName": "Donovan",
        "phoneNumber": "+385-203-020-1384",
        "email": "hdonovan203@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "45.3764",
            "longitude": "13.6664"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+385-952-612-5650"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hdonovan"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/hdonovan"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/hdonovan"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-7-18"
    },
    "LoginInfo": {
        "username": "hdonovan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "950 Red River Way",
        "buildingName": null,
        "floor": 20,
        "roomApartmentCondoNumber": null,
        "city": "Baredine",
        "stateProvince": "Buje (Buie)",
        "locality": "Buje (Buie)",
        "country": "HR",
        "postalCode": "52460"
    }
});
db.user.insertOne(
{
    "email": "cmathis204@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Casandra",
        "lastName": "Mathis",
        "phoneNumber": "+61-204-608-3195",
        "email": "cmathis204@BT.com",
        "GeoSpatialInfo": {
            "latitude": "-17.4122",
            "longitude": "129.6861"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-652-827-6547",
            "+61-618-447-8825"
        ],
        "secondaryEmailAddresses": [
            "cmathis@Zain.net",
            "cmathis@Orstom.net",
            "cmathis@Orstom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cmathis"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cmathis"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-7-18"
    },
    "LoginInfo": {
        "username": "cmathis",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3695 Blue Woods Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Durack",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6743"
    }
});
db.user.insertOne(
{
    "email": "scaldero206@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sharika",
        "lastName": "Calderon",
        "phoneNumber": "+1-206-878-6258",
        "email": "scaldero206@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "41.6018",
            "longitude": "-87.8899"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-794-700-0424"
        ],
        "secondaryEmailAddresses": [
            "scaldero@KTC.net",
            "scaldero@MegaFon.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/scaldero"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/scaldero"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-8-22"
    },
    "LoginInfo": {
        "username": "scaldero",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2812 Blue Hill Way",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": null,
        "city": "Orland Park",
        "stateProvince": "IL",
        "locality": "Cook",
        "country": "US",
        "postalCode": "60467"
    }
});
db.user.insertOne(
{
    "email": "gsnyder207@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gaston",
        "lastName": "Snyder",
        "phoneNumber": "+1787-207-881-5798",
        "email": "gsnyder207@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "17.9841",
            "longitude": "-66.1138"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "gsnyder@TelecomItalia.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-9-30"
    },
    "LoginInfo": {
        "username": "gsnyder",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3290 Short Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Guayama",
        "stateProvince": "Guayanilla",
        "locality": "Guayanilla",
        "country": "PR",
        "postalCode": "00785"
    }
});
db.user.insertOne(
{
    "email": "lpierce208@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Leanne",
        "lastName": "Pierce",
        "phoneNumber": "+61-208-362-6971",
        "email": "lpierce208@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "-20.844",
            "longitude": "144.2003"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lpierce@Vodafone.net",
            "lpierce@KTC.net",
            "lpierce@Telkom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lpierce"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-6-2"
    },
    "LoginInfo": {
        "username": "lpierce",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6806 Big Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Porcupine",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4821"
    }
});
db.user.insertOne(
{
    "email": "oshah209@TelecomItalia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Olen",
        "lastName": "Shah",
        "phoneNumber": "+31-209-136-4293",
        "email": "oshah209@TelecomItalia.com",
        "GeoSpatialInfo": {
            "latitude": "52.4968",
            "longitude": "4.938"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+31-20-493-8367"
        ],
        "secondaryEmailAddresses": [
            "oshah@WorldNet.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/oshah"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1929-11-9"
    },
    "LoginInfo": {
        "username": "oshah",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9743 Blue Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Purmerend",
        "stateProvince": "Purmerend",
        "locality": "Purmerend",
        "country": "NL",
        "postalCode": "1448"
    }
});
db.user.insertOne(
{
    "email": "mgood210@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Marisha",
        "lastName": "Good",
        "phoneNumber": "+61-210-445-7131",
        "email": "mgood210@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "-17.5507",
            "longitude": "133.5407"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-793-838-7504",
            "+61-522-880-9124",
            "+61-130-667-4208"
        ],
        "secondaryEmailAddresses": [
            "mgood@Movil.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mgood"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mgood"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mgood"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-10-3"
    },
    "LoginInfo": {
        "username": "mgood",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5082 Big Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Elliott",
        "stateProvince": "NT",
        "locality": "ALICE SPRINGS",
        "country": "AU",
        "postalCode": "0862"
    }
});
db.user.insertOne(
{
    "email": "nharvey211@Relcom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nancy",
        "lastName": "Harvey",
        "phoneNumber": "+49-211-345-5296",
        "email": "nharvey211@Relcom.com",
        "GeoSpatialInfo": {
            "latitude": "52.9778",
            "longitude": "11.0624"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+49-968-735-9769",
            "+49-49-173-4798",
            "+49-321-275-3388"
        ],
        "secondaryEmailAddresses": [
            "nharvey@GlasNET.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/nharvey"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/nharvey"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-6-29"
    },
    "LoginInfo": {
        "username": "nharvey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6760 Little River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "K\u00fcsten",
        "stateProvince": "NI",
        "locality": "L\u00fcchow-Dannenberg",
        "country": "DE",
        "postalCode": "29482"
    }
});
db.user.insertOne(
{
    "email": "njordan212@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nicki",
        "lastName": "Jordan",
        "phoneNumber": "+1-212-036-1894",
        "email": "njordan212@NII.com",
        "GeoSpatialInfo": {
            "latitude": "36.5326",
            "longitude": "-105.2756"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-890-554-8092",
            "+1-847-271-4863"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/njordan"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/njordan"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-4-14"
    },
    "LoginInfo": {
        "username": "njordan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7695 Long Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eagle Nest",
        "stateProvince": "NM",
        "locality": "Colfax",
        "country": "US",
        "postalCode": "87718"
    }
});
db.user.insertOne(
{
    "email": "rmelton213@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Raphael",
        "lastName": "Melton",
        "phoneNumber": "+358-213-229-1700",
        "email": "rmelton213@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "61.1937",
            "longitude": "28.7683"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+358-812-597-8375"
        ],
        "secondaryEmailAddresses": [
            "rmelton@Telstra.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rmelton"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-2-14"
    },
    "LoginInfo": {
        "username": "rmelton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8640 Red Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Imatra",
        "stateProvince": "Imatra",
        "locality": "Imatra",
        "country": "FI",
        "postalCode": "55120"
    }
});
db.user.insertOne(
{
    "email": "wsalazar214@Telefonica.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Willis",
        "lastName": "Salazar",
        "phoneNumber": "+1-214-627-1274",
        "email": "wsalazar214@Telefonica.com",
        "GeoSpatialInfo": {
            "latitude": "41.0887",
            "longitude": "-88.4159"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "wsalazar@SEEDnet.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-7-28"
    },
    "LoginInfo": {
        "username": "wsalazar",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1069 Big Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dwight",
        "stateProvince": "IL",
        "locality": "Livingston",
        "country": "US",
        "postalCode": "60420"
    }
});
db.user.insertOne(
{
    "email": "emercado215@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Edgardo",
        "lastName": "Mercado",
        "phoneNumber": "+35818-215-669-8027",
        "email": "emercado215@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "60.4588",
            "longitude": "21.1607"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-543-373-5857"
        ],
        "secondaryEmailAddresses": [
            "emercado@NII.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/emercado"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-4-26"
    },
    "LoginInfo": {
        "username": "emercado",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9887 Green Tree Avenue",
        "buildingName": "Building D9",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u00c5va",
        "stateProvince": "Br\u00e4nd\u00f6",
        "locality": "Br\u00e4nd\u00f6",
        "country": "AX",
        "postalCode": "22940"
    }
});
db.user.insertOne(
{
    "email": "bnielsen216@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brendan",
        "lastName": "Nielsen",
        "phoneNumber": "+61-216-885-1673",
        "email": "bnielsen216@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "-32.4947",
            "longitude": "119.4469"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bnielsen@AIS.net",
            "bnielsen@APICnet.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bnielsen"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bnielsen"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-3-6"
    },
    "LoginInfo": {
        "username": "bnielsen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1482 Winding Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Forrestania",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6359"
    }
});
db.user.insertOne(
{
    "email": "ghebert217@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Geralyn",
        "lastName": "Hebert",
        "phoneNumber": "+1-217-051-7241",
        "email": "ghebert217@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "41.5038",
            "longitude": "-82.8708"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-997-720-4457"
        ],
        "secondaryEmailAddresses": [
            "ghebert@APICnet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ghebert"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ghebert"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ghebert"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ghebert"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ghebert"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-12-4"
    },
    "LoginInfo": {
        "username": "ghebert",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2203 Red River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gypsum",
        "stateProvince": "OH",
        "locality": "Ottawa",
        "country": "US",
        "postalCode": "43433"
    }
});
db.user.insertOne(
{
    "email": "pdodson218@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Pei",
        "lastName": "Dodson",
        "phoneNumber": "+44-218-460-3762",
        "email": "pdodson218@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "52.3812",
            "longitude": "-1.0373"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-480-661-3931"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-12-11"
    },
    "LoginInfo": {
        "username": "pdodson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6534 Long Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cold Ashby",
        "stateProvince": "England",
        "locality": "Northamptonshire",
        "country": "GB",
        "postalCode": "NN6"
    }
});
db.user.insertOne(
{
    "email": "ddavenpo219@Frontier.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dorsey",
        "lastName": "Davenport",
        "phoneNumber": "+60-219-574-0840",
        "email": "ddavenpo219@Frontier.com",
        "GeoSpatialInfo": {
            "latitude": "6.1201",
            "longitude": "100.3918"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-532-933-8232"
        ],
        "secondaryEmailAddresses": [
            "ddavenpo@Econnect.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ddavenpo"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ddavenpo"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-11-9"
    },
    "LoginInfo": {
        "username": "ddavenpo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2923 Red Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "D0",
        "city": "Alor Setar",
        "stateProvince": "KDH",
        "locality": "Kedah",
        "country": "MY",
        "postalCode": "05630"
    }
});
db.user.insertOne(
{
    "email": "lwilson220@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lavera",
        "lastName": "Wilson",
        "phoneNumber": "+1-220-543-5461",
        "email": "lwilson220@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "50.0528",
            "longitude": "-119.2858"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-986-997-9456"
        ],
        "secondaryEmailAddresses": [
            "lwilson@ICom.net",
            "lwilson@Access.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lwilson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lwilson"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lwilson"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-4-21"
    },
    "LoginInfo": {
        "username": "lwilson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1956 Blue Bough Road",
        "buildingName": "Building 5D",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kelowna East Central",
        "stateProvince": "BC",
        "locality": "Kelowna",
        "country": "CA",
        "postalCode": "V1X"
    }
});
db.user.insertOne(
{
    "email": "rbowers221@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Raleigh",
        "lastName": "Bowers",
        "phoneNumber": "+44-221-869-4065",
        "email": "rbowers221@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "53.0739",
            "longitude": "-0.9619"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-73-773-3072"
        ],
        "secondaryEmailAddresses": [
            "rbowers@KPN.net",
            "rbowers@KTC.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rbowers"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rbowers"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-3-8"
    },
    "LoginInfo": {
        "username": "rbowers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3937 Winding Bend Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Morton",
        "stateProvince": "England",
        "locality": "Nottinghamshire",
        "country": "GB",
        "postalCode": "NG25"
    }
});
db.user.insertOne(
{
    "email": "cesparza222@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Caroline",
        "lastName": "Esparza",
        "phoneNumber": "+1-222-051-1443",
        "email": "cesparza222@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "45.5478",
            "longitude": "-73.7368"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-504-792-7160",
            "+1-132-263-3222"
        ],
        "secondaryEmailAddresses": [
            "cesparza@Millicom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cesparza"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cesparza"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cesparza"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-3-30"
    },
    "LoginInfo": {
        "username": "cesparza",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8626 Big Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chomedey East",
        "stateProvince": "QC",
        "locality": "Chomedey",
        "country": "CA",
        "postalCode": "H7V"
    }
});
db.user.insertOne(
{
    "email": "etorres223@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Edmond",
        "lastName": "Torres",
        "phoneNumber": "+48-223-163-2452",
        "email": "etorres223@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "53.822",
            "longitude": "20.9954"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-767-893-0680",
            "+48-785-696-7281"
        ],
        "secondaryEmailAddresses": [
            "etorres@GreenNet.net",
            "etorres@NetCom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/etorres"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/etorres"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-9-29"
    },
    "LoginInfo": {
        "username": "etorres",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4504 Little Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rudziska",
        "stateProvince": "Biskupiec",
        "locality": "Powiat olszty\u0144ski",
        "country": "PL",
        "postalCode": "11-300"
    }
});
db.user.insertOne(
{
    "email": "jgrimes224@SEEDnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jimmie",
        "lastName": "Grimes",
        "phoneNumber": "+61-224-626-2941",
        "email": "jgrimes224@SEEDnet.com",
        "GeoSpatialInfo": {
            "latitude": "-16.239",
            "longitude": "145.3059"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-230-535-3391"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jgrimes"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-6-23"
    },
    "LoginInfo": {
        "username": "jgrimes",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4318 Winding Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Upper Daintree",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4873"
    }
});
db.user.insertOne(
{
    "email": "vbryan226@Access.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vance",
        "lastName": "Bryan",
        "phoneNumber": "+91-226-894-3606",
        "email": "vbryan226@Access.com",
        "GeoSpatialInfo": {
            "latitude": "29.5589",
            "longitude": "79.341"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-276-854-1652"
        ],
        "secondaryEmailAddresses": [
            "vbryan@MTN.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/vbryan"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vbryan"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-6-30"
    },
    "LoginInfo": {
        "username": "vbryan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1098 Long Woods Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sethi Belgaon",
        "stateProvince": "Betal Ghat",
        "locality": "Nainital",
        "country": "IN",
        "postalCode": "263134"
    }
});
db.user.insertOne(
{
    "email": "lcooper227@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lisabeth",
        "lastName": "Cooper",
        "phoneNumber": "+55-227-206-4581",
        "email": "lcooper227@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "-6.4714",
            "longitude": "-37.6402"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lcooper"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-7-23"
    },
    "LoginInfo": {
        "username": "lcooper",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8773 Blue Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Riacho dos Cavalos",
        "stateProvince": "Paraiba",
        "locality": "Paraiba",
        "country": "BR",
        "postalCode": "58870-000"
    }
});
db.user.insertOne(
{
    "email": "blove228@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brendan",
        "lastName": "Love",
        "phoneNumber": "+44-228-707-1352",
        "email": "blove228@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "55.5619",
            "longitude": "-5.1967"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-378-165-7971"
        ],
        "secondaryEmailAddresses": [
            "blove@BCE.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-6-14"
    },
    "LoginInfo": {
        "username": "blove",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9284 Short Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Knockenkelly",
        "stateProvince": "Scotland",
        "locality": "North Ayrshire",
        "country": "GB",
        "postalCode": "KA27"
    }
});
db.user.insertOne(
{
    "email": "jperry229@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jeff",
        "lastName": "Perry",
        "phoneNumber": "+262-229-833-5019",
        "email": "jperry229@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "-20.8823",
            "longitude": "55.4504"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-201-441-0342"
        ],
        "secondaryEmailAddresses": [
            "jperry@Vivendi.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jperry"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jperry"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-3-16"
    },
    "LoginInfo": {
        "username": "jperry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9937 Green Bridge Avenue",
        "buildingName": "Building 1D",
        "floor": 4,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Denis",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97475 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "agreer230@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Amos",
        "lastName": "Greer",
        "phoneNumber": "+1-230-014-6532",
        "email": "agreer230@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "49.3397",
            "longitude": "-123.1912"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-697-339-8825"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-7-28"
    },
    "LoginInfo": {
        "username": "agreer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7776 Winding Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "West Vancouver South",
        "stateProvince": "BC",
        "locality": "Vancouver",
        "country": "CA",
        "postalCode": "V7V"
    }
});
db.user.insertOne(
{
    "email": "jburgess231@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Johnson",
        "lastName": "Burgess",
        "phoneNumber": "+380-231-882-6834",
        "email": "jburgess231@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "49.6751",
            "longitude": "27.9634"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+380-788-043-9004"
        ],
        "secondaryEmailAddresses": [
            "jburgess@Turkcell.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jburgess"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jburgess"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jburgess"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-5-8"
    },
    "LoginInfo": {
        "username": "jburgess",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "273 Long Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041c\u0438\u0442\u0438\u043d\u0446\u0456",
        "stateProvince": "Krasylivskyi",
        "locality": "Krasylivskyi",
        "country": "UA",
        "postalCode": "31062"
    }
});
db.user.insertOne(
{
    "email": "mhenry232@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Minna",
        "lastName": "Henry",
        "phoneNumber": "+1-232-964-6786",
        "email": "mhenry232@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "41.3047",
            "longitude": "-73.1294"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mhenry@Telecom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mhenry"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mhenry"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-6-18"
    },
    "LoginInfo": {
        "username": "mhenry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "231 Red Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shelton",
        "stateProvince": "CT",
        "locality": "Fairfield",
        "country": "US",
        "postalCode": "06484"
    }
});
db.user.insertOne(
{
    "email": "rkeith233@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rolf",
        "lastName": "Keith",
        "phoneNumber": "+39-233-556-6268",
        "email": "rkeith233@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "40.3186",
            "longitude": "15.7875"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-673-399-5362"
        ],
        "secondaryEmailAddresses": [
            "rkeith@OTE.net",
            "rkeith@Etisalat.net",
            "rkeith@Sprint.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rkeith"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rkeith"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rkeith"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rkeith"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rkeith"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-9-19"
    },
    "LoginInfo": {
        "username": "rkeith",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1389 Big Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tramutola",
        "stateProvince": "BC",
        "locality": "Potenza",
        "country": "IT",
        "postalCode": "85057"
    }
});
db.user.insertOne(
{
    "email": "aunderwo234@Telefonica.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Abbie",
        "lastName": "Underwood",
        "phoneNumber": "+44-234-464-0812",
        "email": "aunderwo234@Telefonica.com",
        "GeoSpatialInfo": {
            "latitude": "52.3357",
            "longitude": "-2.0598"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-908-166-9914",
            "+44-236-656-2040"
        ],
        "secondaryEmailAddresses": [
            "aunderwo@SingTel.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/aunderwo"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/aunderwo"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-4-24"
    },
    "LoginInfo": {
        "username": "aunderwo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1127 Long Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bromsgrove",
        "stateProvince": "England",
        "locality": "Worcestershire",
        "country": "GB",
        "postalCode": "B61"
    }
});
db.user.insertOne(
{
    "email": "mvaughn235@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Merilyn",
        "lastName": "Vaughn",
        "phoneNumber": "+421-235-743-5633",
        "email": "mvaughn235@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "48.5697",
            "longitude": "19.3864"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+421-697-855-1031",
            "+421-124-468-5744"
        ],
        "secondaryEmailAddresses": [
            "mvaughn@Rogers.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mvaughn"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-8-15"
    },
    "LoginInfo": {
        "username": "mvaughn",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7064 Red Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u017delobudza",
        "stateProvince": "BC",
        "locality": "Detva",
        "country": "SK",
        "postalCode": "962 12"
    }
});
db.user.insertOne(
{
    "email": "esantiag236@SEEDnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Exie",
        "lastName": "Santiago",
        "phoneNumber": "+1-236-880-9425",
        "email": "esantiag236@SEEDnet.com",
        "GeoSpatialInfo": {
            "latitude": "45.8306",
            "longitude": "-73.9191"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-488-059-3877",
            "+1-503-118-8478"
        ],
        "secondaryEmailAddresses": [
            "esantiag@Unicom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/esantiag"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/esantiag"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-11-17"
    },
    "LoginInfo": {
        "username": "esantiag",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4589 Big Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Sophie",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "J5J"
    }
});
db.user.insertOne(
{
    "email": "ebond237@Softbank.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Earle",
        "lastName": "Bond",
        "phoneNumber": "+64-237-852-5924",
        "email": "ebond237@Softbank.com",
        "GeoSpatialInfo": {
            "latitude": "-37.8",
            "longitude": "174.8833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-590-506-5871"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ebond"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ebond"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-4-21"
    },
    "LoginInfo": {
        "username": "ebond",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3933 Big Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Raglan",
        "stateProvince": "G1",
        "locality": "Waikato",
        "country": "NZ",
        "postalCode": "3297"
    }
});
db.user.insertOne(
{
    "email": "aconner238@Telkom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Arlen",
        "lastName": "Conner",
        "phoneNumber": "+61-238-085-7433",
        "email": "aconner238@Telkom.com",
        "GeoSpatialInfo": {
            "latitude": "-35.3469",
            "longitude": "138.6203"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-685-811-5770"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aconner"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/aconner"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-4-13"
    },
    "LoginInfo": {
        "username": "aconner",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3430 Blue Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mount Compass",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5210"
    }
});
db.user.insertOne(
{
    "email": "abentley239@Softbank.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alene",
        "lastName": "Bentley",
        "phoneNumber": "+52-239-319-6923",
        "email": "abentley239@Softbank.com",
        "GeoSpatialInfo": {
            "latitude": "18.1648",
            "longitude": "-93.6779"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-223-914-1227",
            "+52-694-710-4938"
        ],
        "secondaryEmailAddresses": [
            "abentley@DaxNet.net",
            "abentley@Swisscom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/abentley"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/abentley"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-1-12"
    },
    "LoginInfo": {
        "username": "abentley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7795 Long Canyon Road",
        "buildingName": "Building 14",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nueva Esperanza",
        "stateProvince": "TAB",
        "locality": "C\u00e1rdenas",
        "country": "MX",
        "postalCode": "86478"
    }
});
db.user.insertOne(
{
    "email": "ffinley240@Frontier.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Felton",
        "lastName": "Finley",
        "phoneNumber": "+1-240-636-8144",
        "email": "ffinley240@Frontier.com",
        "GeoSpatialInfo": {
            "latitude": "34.2433",
            "longitude": "-117.2811"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-698-883-5189"
        ],
        "secondaryEmailAddresses": [
            "ffinley@ICom.net",
            "ffinley@Relcom.net",
            "ffinley@Swisscom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ffinley"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ffinley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ffinley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-7-2"
    },
    "LoginInfo": {
        "username": "ffinley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2838 Short Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Crestline",
        "stateProvince": "CA",
        "locality": "San Bernardino",
        "country": "US",
        "postalCode": "92325"
    }
});
db.user.insertOne(
{
    "email": "sdurham241@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sharolyn",
        "lastName": "Durham",
        "phoneNumber": "+376-241-881-1370",
        "email": "sdurham241@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "42.5667",
            "longitude": "1.4833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+376-316-223-0065"
        ],
        "secondaryEmailAddresses": [
            "sdurham@Etisalat.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sdurham"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/sdurham"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-3-21"
    },
    "LoginInfo": {
        "username": "sdurham",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6127 Green Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "La Massana",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD400"
    }
});
db.user.insertOne(
{
    "email": "rmeyers242@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rueben",
        "lastName": "Meyers",
        "phoneNumber": "+91-242-216-6031",
        "email": "rmeyers242@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "31.1797",
            "longitude": "75.6257"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rmeyers@VimpelCom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rmeyers"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rmeyers"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-11-11"
    },
    "LoginInfo": {
        "username": "rmeyers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1413 Short Bend Way",
        "buildingName": "Building 69",
        "floor": null,
        "roomApartmentCondoNumber": "B3",
        "city": "Kang Arryan",
        "stateProvince": "Phagwara Ho",
        "locality": "Jalandhar",
        "country": "IN",
        "postalCode": "144035"
    }
});
db.user.insertOne(
{
    "email": "bmercado243@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Bryant",
        "lastName": "Mercado",
        "phoneNumber": "+63-243-745-9267",
        "email": "bmercado243@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "13.6969",
            "longitude": "123.4933"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-173-288-3630",
            "+63-434-363-9664",
            "+63-528-131-4948"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bmercado"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bmercado"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bmercado"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-5-4"
    },
    "LoginInfo": {
        "username": "bmercado",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2547 Blue Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Goa",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "4422"
    }
});
db.user.insertOne(
{
    "email": "rhoover244@LGUplus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rob",
        "lastName": "Hoover",
        "phoneNumber": "+1-244-544-7347",
        "email": "rhoover244@LGUplus.com",
        "GeoSpatialInfo": {
            "latitude": "45.3876",
            "longitude": "-75.6593"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rhoover@Access.net",
            "rhoover@Swisscom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rhoover"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-11-22"
    },
    "LoginInfo": {
        "username": "rhoover",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5070 Green Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ottawa (Alta Vista)",
        "stateProvince": "ON",
        "locality": "Ottawa",
        "country": "CA",
        "postalCode": "K1H"
    }
});
db.user.insertOne(
{
    "email": "rparra245@Telstra.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rickie",
        "lastName": "Parra",
        "phoneNumber": "+262-245-465-6971",
        "email": "rparra245@Telstra.com",
        "GeoSpatialInfo": {
            "latitude": "-12.7044",
            "longitude": "45.1223"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rparra@Chunghwa.net",
            "rparra@Tata.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-11-10"
    },
    "LoginInfo": {
        "username": "rparra",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9579 Red Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bandraboua",
        "stateProvince": "Bandraboua",
        "locality": "Bandraboua",
        "country": "YT",
        "postalCode": "97650"
    }
});
db.user.insertOne(
{
    "email": "lcross246@OTE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Liza",
        "lastName": "Cross",
        "phoneNumber": "+61-246-701-8012",
        "email": "lcross246@OTE.com",
        "GeoSpatialInfo": {
            "latitude": "-37.0301",
            "longitude": "143.7073"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-88-832-8360",
            "+61-826-630-5418",
            "+61-381-168-5211"
        ],
        "secondaryEmailAddresses": [
            "lcross@ICom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lcross"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lcross"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lcross"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-1-8"
    },
    "LoginInfo": {
        "username": "lcross",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1009 Red Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Craigie",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3465"
    }
});
db.user.insertOne(
{
    "email": "aconley247@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ahmad",
        "lastName": "Conley",
        "phoneNumber": "+35818-247-570-2475",
        "email": "aconley247@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "60.1617",
            "longitude": "19.9602"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-327-482-8702"
        ],
        "secondaryEmailAddresses": [
            "aconley@KDDI.net",
            "aconley@PTCL.net",
            "aconley@OpenWorld.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/aconley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-7-23"
    },
    "LoginInfo": {
        "username": "aconley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6016 Short Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "5F",
        "city": "Jomala",
        "stateProvince": "Jomala",
        "locality": "Jomala",
        "country": "AX",
        "postalCode": "22150"
    }
});
db.user.insertOne(
{
    "email": "lbarton248@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Luella",
        "lastName": "Barton",
        "phoneNumber": "+1-248-958-1153",
        "email": "lbarton248@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "37.7805",
            "longitude": "-82.8416"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-11-25"
    },
    "LoginInfo": {
        "username": "lbarton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1434 Winding Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hagerhill",
        "stateProvince": "KY",
        "locality": "Johnson",
        "country": "US",
        "postalCode": "41222"
    }
});
db.user.insertOne(
{
    "email": "charper249@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Christian",
        "lastName": "Harper",
        "phoneNumber": "+378-249-138-1692",
        "email": "charper249@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "43.9",
            "longitude": "12.5"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+378-521-227-7697",
            "+378-897-943-3826"
        ],
        "secondaryEmailAddresses": [
            "charper@Econnect.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/charper"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-8-12"
    },
    "LoginInfo": {
        "username": "charper",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6336 Long Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Montegiardino",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47898"
    }
});
db.user.insertOne(
{
    "email": "rsalgado250@SingTel.com",
    "userType": "partner",
    "businessName": "Friendly Business Inc",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rene",
        "lastName": "Salgado",
        "phoneNumber": "+1-250-465-7701",
        "email": "rsalgado250@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "51.1264",
            "longitude": "-114.1419"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-855-245-2668",
            "+1-233-362-2919"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-1-15"
    },
    "LoginInfo": {
        "username": "rsalgado",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6226 Long Tree Way",
        "buildingName": null,
        "floor": 14,
        "roomApartmentCondoNumber": null,
        "city": "Calgary (Dalhousie \/ Edgemont \/ Hamptons \/ Hidden Valley)",
        "stateProvince": "AB",
        "locality": "Calgary",
        "country": "CA",
        "postalCode": "T3A"
    }
});
db.user.insertOne(
{
    "email": "lparks251@SKTelecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Len",
        "lastName": "Parks",
        "phoneNumber": "+64-251-490-4253",
        "email": "lparks251@SKTelecom.com",
        "GeoSpatialInfo": {
            "latitude": "-36.8485",
            "longitude": "174.7635"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-133-758-9650",
            "+64-573-185-2164"
        ],
        "secondaryEmailAddresses": [
            "lparks@KDDI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lparks"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lparks"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-10-30"
    },
    "LoginInfo": {
        "username": "lparks",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7532 Short Woods Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Auckland",
        "stateProvince": "E7",
        "locality": "Auckland",
        "country": "NZ",
        "postalCode": "1150"
    }
});
db.user.insertOne(
{
    "email": "zduncan252@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Zane",
        "lastName": "Duncan",
        "phoneNumber": "+61-252-516-7730",
        "email": "zduncan252@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "-31.9522",
            "longitude": "115.8614"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-285-447-3570"
        ],
        "secondaryEmailAddresses": [
            "zduncan@TeleSystems.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/zduncan"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/zduncan"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/zduncan"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-3-13"
    },
    "LoginInfo": {
        "username": "zduncan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1087 Red Bend Circle",
        "buildingName": "Building F6",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Perth",
        "stateProvince": "WA",
        "locality": "Western Australia",
        "country": "AU",
        "postalCode": "6830"
    }
});
db.user.insertOne(
{
    "email": "gbond253@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Garth",
        "lastName": "Bond",
        "phoneNumber": "+262-253-483-7583",
        "email": "gbond253@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "-21.3393",
            "longitude": "55.4781"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-80-303-8314",
            "+262-444-066-4604"
        ],
        "secondaryEmailAddresses": [
            "gbond@UUnet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gbond"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-4-26"
    },
    "LoginInfo": {
        "username": "gbond",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9466 Winding Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Pierre",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97853 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "ckramer254@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Caren",
        "lastName": "Kramer",
        "phoneNumber": "+61-254-574-8993",
        "email": "ckramer254@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "-20.6558",
            "longitude": "141.7413"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-649-143-3346"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ckramer"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-8-5"
    },
    "LoginInfo": {
        "username": "ckramer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2480 Green Hill Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Julia Creek",
        "stateProvince": "QLD",
        "locality": "NORTH QLD",
        "country": "AU",
        "postalCode": "4823"
    }
});
db.user.insertOne(
{
    "email": "svelazqu255@SEEDnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shirly",
        "lastName": "Velazquez",
        "phoneNumber": "+64-255-025-9605",
        "email": "svelazqu255@SEEDnet.com",
        "GeoSpatialInfo": {
            "latitude": "-44.0667",
            "longitude": "171.1333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-711-352-1122",
            "+64-333-096-0705",
            "+64-801-694-0391"
        ],
        "secondaryEmailAddresses": [
            "svelazqu@BCE.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/svelazqu"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-8-3"
    },
    "LoginInfo": {
        "username": "svelazqu",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "776 Long Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Te Moana",
        "stateProvince": "E9",
        "locality": "Canterbury",
        "country": "NZ",
        "postalCode": "7991"
    }
});
db.user.insertOne(
{
    "email": "rvu256@ATT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Reginald",
        "lastName": "Vu",
        "phoneNumber": "+1-256-344-0516",
        "email": "rvu256@ATT.com",
        "GeoSpatialInfo": {
            "latitude": "45.4113",
            "longitude": "-71.9586"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-735-808-9511",
            "+1-923-294-7262"
        ],
        "secondaryEmailAddresses": [
            "rvu@LookData.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rvu"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-7-20"
    },
    "LoginInfo": {
        "username": "rvu",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6281 Blue Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sherbrooke Northwest",
        "stateProvince": "QC",
        "locality": "Sherbrooke",
        "country": "CA",
        "postalCode": "J1L"
    }
});
db.user.insertOne(
{
    "email": "rwade257@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Royce",
        "lastName": "Wade",
        "phoneNumber": "+354-257-593-4436",
        "email": "rwade257@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "63.7893",
            "longitude": "-18.0527"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+354-800-035-6084",
            "+354-159-163-5095",
            "+354-661-002-2855"
        ],
        "secondaryEmailAddresses": [
            "rwade@SingTel.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rwade"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rwade"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-5-25"
    },
    "LoginInfo": {
        "username": "rwade",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5164 Green River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kirkjub\u00e6jarklaustri",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "880"
    }
});
db.user.insertOne(
{
    "email": "mhess258@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Maxwell",
        "lastName": "Hess",
        "phoneNumber": "+61-258-368-9011",
        "email": "mhess258@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "-37.0333",
            "longitude": "142.2"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mhess@CCI.net",
            "mhess@LGUplus.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mhess"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-3-5"
    },
    "LoginInfo": {
        "username": "mhess",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7253 Green Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Brimpaen",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3401"
    }
});
db.user.insertOne(
{
    "email": "oenglish260@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Otha",
        "lastName": "English",
        "phoneNumber": "+91-260-759-2835",
        "email": "oenglish260@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "18.8375",
            "longitude": "73.255"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "oenglish@OpenWorld.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-10-16"
    },
    "LoginInfo": {
        "username": "oenglish",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1453 Blue Mountain Avenue",
        "buildingName": "Building 49",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sawarsai",
        "stateProvince": "Pen",
        "locality": "Raigarh(MH)",
        "country": "IN",
        "postalCode": "402107"
    }
});
db.user.insertOne(
{
    "email": "gmccann261@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Georgetta",
        "lastName": "Mccann",
        "phoneNumber": "+687-261-931-7005",
        "email": "gmccann261@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "-22.1496",
            "longitude": "166.4473"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-813-372-3806"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-4-3"
    },
    "LoginInfo": {
        "username": "gmccann",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7124 Winding Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dumb\u00e9a",
        "stateProvince": "Dumb\u00e9a",
        "locality": "Dumb\u00e9a",
        "country": "NC",
        "postalCode": "98839"
    }
});
db.user.insertOne(
{
    "email": "varroyo262@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vashti",
        "lastName": "Arroyo",
        "phoneNumber": "+61-262-024-2394",
        "email": "varroyo262@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "-15.4869",
            "longitude": "128.1243"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-246-186-2619",
            "+61-517-863-7353"
        ],
        "secondaryEmailAddresses": [
            "varroyo@Optus.net",
            "varroyo@KDDI.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-10-21"
    },
    "LoginInfo": {
        "username": "varroyo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3856 Short Canyon Street",
        "buildingName": "Building A3",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wyndham",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6740"
    }
});
db.user.insertOne(
{
    "email": "dcontrer263@Orange.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Devora",
        "lastName": "Contreras",
        "phoneNumber": "+502-263-133-6557",
        "email": "dcontrer263@Orange.com",
        "GeoSpatialInfo": {
            "latitude": "14.2333",
            "longitude": "-89.9667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+502-286-948-2012"
        ],
        "secondaryEmailAddresses": [
            "dcontrer@NTT.net",
            "dcontrer@KDDI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dcontrer"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dcontrer"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-7-14"
    },
    "LoginInfo": {
        "username": "dcontrer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9587 Long Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "VALLE NUEVO JALPATAGUA",
        "stateProvince": "DEPTO DE JUTIAPA",
        "locality": "DEPTO DE JUTIAPA",
        "country": "GT",
        "postalCode": "22020"
    }
});
db.user.insertOne(
{
    "email": "cvelasqu264@ATT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Collen",
        "lastName": "Velasquez",
        "phoneNumber": "+44-264-095-3810",
        "email": "cvelasqu264@ATT.com",
        "GeoSpatialInfo": {
            "latitude": "51.0325",
            "longitude": "-2.6906"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-9-22"
    },
    "LoginInfo": {
        "username": "cvelasqu",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7073 Long Mound Way",
        "buildingName": "Building 10",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kingsdon",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "TA11"
    }
});
db.user.insertOne(
{
    "email": "skemp265@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Simon",
        "lastName": "Kemp",
        "phoneNumber": "+880-265-262-4571",
        "email": "skemp265@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "24.1484",
            "longitude": "89.6499"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+880-806-935-8343",
            "+880-47-317-0261"
        ],
        "secondaryEmailAddresses": [
            "skemp@KTC.net",
            "skemp@Ooredoo.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-2-28"
    },
    "LoginInfo": {
        "username": "skemp",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4242 Blue Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jamirta",
        "stateProvince": "Shahjadpur",
        "locality": "Sirajganj",
        "country": "BD",
        "postalCode": "6772"
    }
});
db.user.insertOne(
{
    "email": "brollins266@TeleSystems.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Buena",
        "lastName": "Rollins",
        "phoneNumber": "+1-266-446-2066",
        "email": "brollins266@TeleSystems.com",
        "GeoSpatialInfo": {
            "latitude": "45.9976",
            "longitude": "-64.8483"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-905-650-2668"
        ],
        "secondaryEmailAddresses": [
            "brollins@Tata.net",
            "brollins@GlasNET.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/brollins"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-1-22"
    },
    "LoginInfo": {
        "username": "brollins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4346 Blue Gulch Circle",
        "buildingName": "Building 6B",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Coverdale",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E1J"
    }
});
db.user.insertOne(
{
    "email": "jho267@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jolynn",
        "lastName": "Ho",
        "phoneNumber": "+94-267-673-5905",
        "email": "jho267@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "7.4572",
            "longitude": "81.2808"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+94-147-615-5596"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jho"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jho"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-12-8"
    },
    "LoginInfo": {
        "username": "jho",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2603 Long Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Serankada",
        "stateProvince": "Ampara",
        "locality": "Ampara",
        "country": "LK",
        "postalCode": "32101"
    }
});
db.user.insertOne(
{
    "email": "lferguso268@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lauren",
        "lastName": "Ferguson",
        "phoneNumber": "+44-268-146-8547",
        "email": "lferguso268@UI.com",
        "GeoSpatialInfo": {
            "latitude": "51.5367",
            "longitude": "-0.0944"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-656-341-9488"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lferguso"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-11-11"
    },
    "LoginInfo": {
        "username": "lferguso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "637 Big Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "2C",
        "city": "Newington Green",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "N1"
    }
});
db.user.insertOne(
{
    "email": "rbradley269@SEEDnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rivka",
        "lastName": "Bradley",
        "phoneNumber": "+441481-269-805-0493",
        "email": "rbradley269@SEEDnet.com",
        "GeoSpatialInfo": {
            "latitude": "49.45",
            "longitude": "-2.6"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-944-048-1769",
            "+441481-709-876-3314"
        ],
        "secondaryEmailAddresses": [
            "rbradley@Airtel.net",
            "rbradley@Safaricom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rbradley"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rbradley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rbradley"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-11-8"
    },
    "LoginInfo": {
        "username": "rbradley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1333 Little Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Martin",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY4"
    }
});
db.user.insertOne(
{
    "email": "oharriso270@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Odell",
        "lastName": "Harrison",
        "phoneNumber": "+61-270-828-8852",
        "email": "oharriso270@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "-20.7324",
            "longitude": "143.1436"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "oharriso@WorldNet.net",
            "oharriso@Relcom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/oharriso"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-2-8"
    },
    "LoginInfo": {
        "username": "oharriso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7732 Little Woods Street",
        "buildingName": "Building B9",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Richmond",
        "stateProvince": "QLD",
        "locality": "NORTH QLD",
        "country": "AU",
        "postalCode": "4822"
    }
});
db.user.insertOne(
{
    "email": "cstewart271@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cliff",
        "lastName": "Stewart",
        "phoneNumber": "+34-271-851-0870",
        "email": "cstewart271@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "39.6873",
            "longitude": "2.5141"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-14-274-4179",
            "+34-640-729-1099"
        ],
        "secondaryEmailAddresses": [
            "cstewart@CCS.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cstewart"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-11-18"
    },
    "LoginInfo": {
        "username": "cstewart",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "670 Red Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Banyalbufar",
        "stateProvince": "IB",
        "locality": "Baleares",
        "country": "ES",
        "postalCode": "07191"
    }
});
db.user.insertOne(
{
    "email": "eholt272@MaxComm.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Enola",
        "lastName": "Holt",
        "phoneNumber": "+44-272-096-9968",
        "email": "eholt272@MaxComm.com",
        "GeoSpatialInfo": {
            "latitude": "56.8662",
            "longitude": "-2.66"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-171-911-0515",
            "+44-593-795-6457"
        ],
        "secondaryEmailAddresses": [
            "eholt@Tata.net",
            "eholt@BT.net",
            "eholt@Zain.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/eholt"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-6-9"
    },
    "LoginInfo": {
        "username": "eholt",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5426 Winding Stream Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Arrat",
        "stateProvince": "Scotland",
        "locality": "Angus",
        "country": "GB",
        "postalCode": "DD9"
    }
});
db.user.insertOne(
{
    "email": "rolson273@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rex",
        "lastName": "Olson",
        "phoneNumber": "+44-273-306-9692",
        "email": "rolson273@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "51.0378",
            "longitude": "-2.8161"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rolson@Safaricom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rolson"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rolson"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rolson"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rolson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-5-1"
    },
    "LoginInfo": {
        "username": "rolson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5541 Blue Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bramwell",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "TA10"
    }
});
db.user.insertOne(
{
    "email": "jhart274@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Janelle",
        "lastName": "Hart",
        "phoneNumber": "+91-274-510-3598",
        "email": "jhart274@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "12.9291",
            "longitude": "79.3322"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-347-858-8156"
        ],
        "secondaryEmailAddresses": [
            "jhart@Orstom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-7-6"
    },
    "LoginInfo": {
        "username": "jhart",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "81 Little Ridge Avenue",
        "buildingName": null,
        "floor": 3,
        "roomApartmentCondoNumber": null,
        "city": "Ranipet Bazar",
        "stateProvince": "Walaja",
        "locality": "Vellore",
        "country": "IN",
        "postalCode": "632401"
    }
});
db.user.insertOne(
{
    "email": "czimmerm275@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cletus",
        "lastName": "Zimmerman",
        "phoneNumber": "+31-275-749-2043",
        "email": "czimmerm275@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "51.9987",
            "longitude": "4.1785"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+31-102-127-1961",
            "+31-894-026-1879",
            "+31-229-147-3816"
        ],
        "secondaryEmailAddresses": [
            "czimmerm@AlgoNet.net",
            "czimmerm@UI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/czimmerm"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/czimmerm"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-3-10"
    },
    "LoginInfo": {
        "username": "czimmerm",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5047 Little Woods Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "'s-Gravenzande",
        "stateProvince": "Westland",
        "locality": "Westland",
        "country": "NL",
        "postalCode": "2693"
    }
});
db.user.insertOne(
{
    "email": "dhowell276@LookData.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Delmar",
        "lastName": "Howell",
        "phoneNumber": "+1-276-818-6370",
        "email": "dhowell276@LookData.com",
        "GeoSpatialInfo": {
            "latitude": "46.8779",
            "longitude": "-71.3408"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-718-484-4846"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dhowell"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dhowell"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dhowell"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-4-27"
    },
    "LoginInfo": {
        "username": "dhowell",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4930 Green Canyon Street",
        "buildingName": "Building 60",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-\u00c9mile",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "G3E"
    }
});
db.user.insertOne(
{
    "email": "rdelacru277@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rosalinda",
        "lastName": "Delacruz",
        "phoneNumber": "+54-277-639-9341",
        "email": "rdelacru277@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "-31.0222",
            "longitude": "-59.85"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+54-52-773-2484",
            "+54-459-722-7248",
            "+54-60-503-3653"
        ],
        "secondaryEmailAddresses": [
            "rdelacru@TT.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rdelacru"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rdelacru"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-6-7"
    },
    "LoginInfo": {
        "username": "rdelacru",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8927 Long Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "ALCETE",
        "stateProvince": "E",
        "locality": "Entre Rios",
        "country": "AR",
        "postalCode": "3127"
    }
});
db.user.insertOne(
{
    "email": "joneill278@Optus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jonathon",
        "lastName": "Oneill",
        "phoneNumber": "+61-278-366-8067",
        "email": "joneill278@Optus.com",
        "GeoSpatialInfo": {
            "latitude": "-26.4572",
            "longitude": "151.9623"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-855-463-6336"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/joneill"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-11-30"
    },
    "LoginInfo": {
        "username": "joneill",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6109 Big Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wattle Camp",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4615"
    }
});
db.user.insertOne(
{
    "email": "lbest279@SEEDnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lilly",
        "lastName": "Best",
        "phoneNumber": "+27-279-368-5401",
        "email": "lbest279@SEEDnet.com",
        "GeoSpatialInfo": {
            "latitude": "-25.35",
            "longitude": "26.5333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+27-399-571-9586",
            "+27-199-875-1134"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lbest"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-2-21"
    },
    "LoginInfo": {
        "username": "lbest",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3649 Little Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Madikwe",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "2849"
    }
});
db.user.insertOne(
{
    "email": "acordova280@Etisalat.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ariel",
        "lastName": "Cordova",
        "phoneNumber": "+1-280-297-6877",
        "email": "acordova280@Etisalat.com",
        "GeoSpatialInfo": {
            "latitude": "34.1155",
            "longitude": "-118.0857"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-5-412-5171"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/acordova"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/acordova"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/acordova"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-12-18"
    },
    "LoginInfo": {
        "username": "acordova",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8380 Big Mound Way",
        "buildingName": "Building 1A",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "San Gabriel",
        "stateProvince": "CA",
        "locality": "Los Angeles",
        "country": "US",
        "postalCode": "91775"
    }
});
db.user.insertOne(
{
    "email": "achung281@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alberta",
        "lastName": "Chung",
        "phoneNumber": "+681-281-882-3165",
        "email": "achung281@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "-14.2667",
            "longitude": "-178.1667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "achung@PLDT.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/achung"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-8-1"
    },
    "LoginInfo": {
        "username": "achung",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4010 Big Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620"
    }
});
db.user.insertOne(
{
    "email": "rgonzale282@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Raleigh",
        "lastName": "Gonzales",
        "phoneNumber": "+1-282-109-4038",
        "email": "rgonzale282@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "44.6139",
            "longitude": "-63.5946"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-665-064-2496",
            "+1-964-572-7309"
        ],
        "secondaryEmailAddresses": [
            "rgonzale@WorldNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rgonzale"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rgonzale"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rgonzale"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rgonzale"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-2-25"
    },
    "LoginInfo": {
        "username": "rgonzale",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4510 Short Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Halifax North West Arm",
        "stateProvince": "NS",
        "locality": "Halifax",
        "country": "CA",
        "postalCode": "B3P"
    }
});
db.user.insertOne(
{
    "email": "srich283@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Santo",
        "lastName": "Rich",
        "phoneNumber": "+594-283-886-8817",
        "email": "srich283@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "5.1628",
            "longitude": "-52.6427"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-457-084-1735"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/srich"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-10-17"
    },
    "LoginInfo": {
        "username": "srich",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4590 Green Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kourou",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97373 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "hgarcia284@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hank",
        "lastName": "Garcia",
        "phoneNumber": "+91-284-701-4396",
        "email": "hgarcia284@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "27.5401",
            "longitude": "78.786"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "hgarcia@Oi.net",
            "hgarcia@Vodafone.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/hgarcia"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1959-9-11"
    },
    "LoginInfo": {
        "username": "hgarcia",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6895 Little Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sarvodaya Ashram",
        "stateProvince": "Etah",
        "locality": "Etah",
        "country": "IN",
        "postalCode": "207001"
    }
});
db.user.insertOne(
{
    "email": "csalazar285@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Clifton",
        "lastName": "Salazar",
        "phoneNumber": "+370-285-580-8098",
        "email": "csalazar285@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "55.4148",
            "longitude": "23.141"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-196-274-2113"
        ],
        "secondaryEmailAddresses": [
            "csalazar@cerist.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/csalazar"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/csalazar"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-8-25"
    },
    "LoginInfo": {
        "username": "csalazar",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2265 Big Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dirvoni\u0161ki\u0173 k.",
        "stateProvince": "Raseini\u0173 r. sav.",
        "locality": "Raseini\u0173 r. sav.",
        "country": "LT",
        "postalCode": "60061"
    }
});
db.user.insertOne(
{
    "email": "mkline286@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Magan",
        "lastName": "Kline",
        "phoneNumber": "+91-286-830-3292",
        "email": "mkline286@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "23.6308",
            "longitude": "78.6359"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-355-848-2963",
            "+91-299-530-0787"
        ],
        "secondaryEmailAddresses": [
            "mkline@LookData.net",
            "mkline@Bifty.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mkline"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-10-8"
    },
    "LoginInfo": {
        "username": "mkline",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "455 Little Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chandoria",
        "stateProvince": "Begamganj",
        "locality": "Raisen",
        "country": "IN",
        "postalCode": "464881"
    }
});
db.user.insertOne(
{
    "email": "snixon287@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sidney",
        "lastName": "Nixon",
        "phoneNumber": "+56-287-775-8279",
        "email": "snixon287@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "-32.7938",
            "longitude": "-70.829"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+56-948-332-7812"
        ],
        "secondaryEmailAddresses": [
            "snixon@TelecomItalia.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/snixon"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-12-6"
    },
    "LoginInfo": {
        "username": "snixon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4668 Green Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Panquehue",
        "stateProvince": "Panquehue",
        "locality": "Provincia de San Felipe de Aconcagua",
        "country": "CL",
        "postalCode": "2210000"
    }
});
db.user.insertOne(
{
    "email": "amoon288@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Andres",
        "lastName": "Moon",
        "phoneNumber": "+1-288-917-8643",
        "email": "amoon288@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "43.8113",
            "longitude": "-79.193"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-794-054-1524"
        ],
        "secondaryEmailAddresses": [
            "amoon@Telekom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-4-6"
    },
    "LoginInfo": {
        "username": "amoon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4864 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Scarborough (Malvern \/ Rouge River)",
        "stateProvince": "ON",
        "locality": "Scarborough",
        "country": "CA",
        "postalCode": "M1B"
    }
});
db.user.insertOne(
{
    "email": "mleonard289@MaxComm.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Merrill",
        "lastName": "Leonard",
        "phoneNumber": "+375-289-692-2878",
        "email": "mleonard289@MaxComm.com",
        "GeoSpatialInfo": {
            "latitude": "53.9",
            "longitude": "27.5667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mleonard@WorldNet.net",
            "mleonard@DaxNet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mleonard"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mleonard"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-9-19"
    },
    "LoginInfo": {
        "username": "mleonard",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9185 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Minsk",
        "stateProvince": "Minsk",
        "locality": "Minsk",
        "country": "BY",
        "postalCode": "220033"
    }
});
db.user.insertOne(
{
    "email": "dmclean290@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Demetrius",
        "lastName": "Mclean",
        "phoneNumber": "+1-290-525-9964",
        "email": "dmclean290@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "45.902",
            "longitude": "-66.7057"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-84-548-3761",
            "+1-421-192-5729"
        ],
        "secondaryEmailAddresses": [
            "dmclean@VimpelCom.net",
            "dmclean@MaxComm.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dmclean"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-4-5"
    },
    "LoginInfo": {
        "username": "dmclean",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3332 Little Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fredericton Southwest, New Maryland",
        "stateProvince": "NB",
        "locality": "Fredericton",
        "country": "CA",
        "postalCode": "E3C"
    }
});
db.user.insertOne(
{
    "email": "phowe291@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Phillis",
        "lastName": "Howe",
        "phoneNumber": "+356-291-958-3457",
        "email": "phowe291@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "36.0333",
            "longitude": "14.2611"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+356-395-716-6892"
        ],
        "secondaryEmailAddresses": [
            "phowe@CCI.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/phowe"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/phowe"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-2-7"
    },
    "LoginInfo": {
        "username": "phowe",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8601 Big Woods Road",
        "buildingName": null,
        "floor": 6,
        "roomApartmentCondoNumber": null,
        "city": "Xewkija",
        "stateProvince": "Ix-Xewkija",
        "locality": "Ix-Xewkija",
        "country": "MT",
        "postalCode": "XWK"
    }
});
db.user.insertOne(
{
    "email": "amckinne292@KTC.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Arminda",
        "lastName": "Mckinney",
        "phoneNumber": "+44-292-565-8785",
        "email": "amckinne292@KTC.com",
        "GeoSpatialInfo": {
            "latitude": "55.1734",
            "longitude": "-1.6255"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/amckinne"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-4-23"
    },
    "LoginInfo": {
        "username": "amckinne",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6768 Winding Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bothal",
        "stateProvince": "England",
        "locality": "Northumberland",
        "country": "GB",
        "postalCode": "NE61"
    }
});
db.user.insertOne(
{
    "email": "kschneid293@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kamala",
        "lastName": "Schneider",
        "phoneNumber": "+502-293-090-7116",
        "email": "kschneid293@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "15.0516",
            "longitude": "-90.4148"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+502-923-906-0202"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kschneid"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-4-20"
    },
    "LoginInfo": {
        "username": "kschneid",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6649 Big Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "SALTAN (GRANADOS)",
        "stateProvince": "DEPTO DE BAJA VERAPAZ",
        "locality": "DEPTO DE BAJA VERAPAZ",
        "country": "GT",
        "postalCode": "15011"
    }
});
db.user.insertOne(
{
    "email": "lchavez294@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lindsey",
        "lastName": "Chavez",
        "phoneNumber": "+1-294-987-9439",
        "email": "lchavez294@TM.com",
        "GeoSpatialInfo": {
            "latitude": "40.432",
            "longitude": "-88.5247"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-484-916-4488",
            "+1-253-915-3290",
            "+1-61-434-7679"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-11-4"
    },
    "LoginInfo": {
        "username": "lchavez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1541 Short Gully Road",
        "buildingName": null,
        "floor": 12,
        "roomApartmentCondoNumber": "20",
        "city": "Saybrook",
        "stateProvince": "IL",
        "locality": "McLean",
        "country": "US",
        "postalCode": "61770"
    }
});
db.user.insertOne(
{
    "email": "ecruz295@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elana",
        "lastName": "Cruz",
        "phoneNumber": "+41-295-483-7985",
        "email": "ecruz295@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "46.5146",
            "longitude": "8.6738"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ecruz"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-12-19"
    },
    "LoginInfo": {
        "username": "ecruz",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3942 Big Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Piotta",
        "stateProvince": "TI",
        "locality": "Leventina District",
        "country": "CH",
        "postalCode": "6776"
    }
});
db.user.insertOne(
{
    "email": "gbradley296@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Giuseppe",
        "lastName": "Bradley",
        "phoneNumber": "+1-296-384-4132",
        "email": "gbradley296@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "40.6026",
            "longitude": "-79.3537"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-908-059-5656",
            "+1-889-562-8622"
        ],
        "secondaryEmailAddresses": [
            "gbradley@Telekom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/gbradley"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gbradley"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/gbradley"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gbradley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-9-5"
    },
    "LoginInfo": {
        "username": "gbradley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4841 Red Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "West Lebanon",
        "stateProvince": "PA",
        "locality": "Indiana",
        "country": "US",
        "postalCode": "15783"
    }
});
db.user.insertOne(
{
    "email": "tperkins297@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Thersa",
        "lastName": "Perkins",
        "phoneNumber": "+47-297-696-5548",
        "email": "tperkins297@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "59.2",
            "longitude": "10.9333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-874-415-6082",
            "+47-647-317-1245"
        ],
        "secondaryEmailAddresses": [
            "tperkins@CCS.net",
            "tperkins@BCE.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tperkins"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-9-23"
    },
    "LoginInfo": {
        "username": "tperkins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7075 Short Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kr\u00e5ker\u00f8y",
        "stateProvince": "Fredrikstad",
        "locality": "Fredrikstad",
        "country": "NO",
        "postalCode": "1679"
    }
});
db.user.insertOne(
{
    "email": "ccrawfor298@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chauncey",
        "lastName": "Crawford",
        "phoneNumber": "+61-298-936-8425",
        "email": "ccrawfor298@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "-26.5",
            "longitude": "149.8"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-256-602-8021"
        ],
        "secondaryEmailAddresses": [
            "ccrawfor@TelecomItalia.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-4-12"
    },
    "LoginInfo": {
        "username": "ccrawfor",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3855 Green Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bogandilla",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4425"
    }
});
db.user.insertOne(
{
    "email": "mhensley299@Access.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Miguel",
        "lastName": "Hensley",
        "phoneNumber": "+420-299-211-7674",
        "email": "mhensley299@Access.com",
        "GeoSpatialInfo": {
            "latitude": "50.0667",
            "longitude": "13.3833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mhensley@Telus.net",
            "mhensley@Telus.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mhensley"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mhensley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-7-10"
    },
    "LoginInfo": {
        "username": "mhensley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6649 Blue Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pastuchovice",
        "stateProvince": "Plze\u0148-sever",
        "locality": "Plze\u0148-sever",
        "country": "CZ",
        "postalCode": "331 65"
    }
});
db.user.insertOne(
{
    "email": "achung300@KPN.com",
    "userType": "partner",
    "businessName": "Fat Cats Trust LLC",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Aldo",
        "lastName": "Chung",
        "phoneNumber": "+91-300-296-4634",
        "email": "achung300@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "23.1129",
            "longitude": "73.4686"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "achung@PTCL.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/achung"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/achung"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-8-28"
    },
    "LoginInfo": {
        "username": "achung",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3240 Long Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lakdi Poyada",
        "stateProvince": "Lunawada",
        "locality": "Panch Mahals",
        "country": "IN",
        "postalCode": "388270"
    }
});
db.user.insertOne(
{
    "email": "bbartlet301@OTE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Buster",
        "lastName": "Bartlett",
        "phoneNumber": "+687-301-284-3770",
        "email": "bbartlet301@OTE.com",
        "GeoSpatialInfo": {
            "latitude": "-20.9467",
            "longitude": "164.6854"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-8-734-3837"
        ],
        "secondaryEmailAddresses": [
            "bbartlet@GlasNET.net",
            "bbartlet@Millicom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bbartlet"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bbartlet"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bbartlet"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-7-4"
    },
    "LoginInfo": {
        "username": "bbartlet",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "262 Big Bridge Drive",
        "buildingName": null,
        "floor": 16,
        "roomApartmentCondoNumber": "FB",
        "city": "Voh",
        "stateProvince": "Voh",
        "locality": "Voh",
        "country": "NC",
        "postalCode": "98833"
    }
});
db.user.insertOne(
{
    "email": "cponce302@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Colton",
        "lastName": "Ponce",
        "phoneNumber": "+44-302-185-3912",
        "email": "cponce302@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "51.0197",
            "longitude": "-2.4389"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-39-390-1967"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cponce"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cponce"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-3-6"
    },
    "LoginInfo": {
        "username": "cponce",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1613 Winding River Boulevard",
        "buildingName": null,
        "floor": 10,
        "roomApartmentCondoNumber": null,
        "city": "South Cheriton",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "BA8"
    }
});
db.user.insertOne(
{
    "email": "mbeck303@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mahalia",
        "lastName": "Beck",
        "phoneNumber": "+27-303-819-2586",
        "email": "mbeck303@TM.com",
        "GeoSpatialInfo": {
            "latitude": "-23.7167",
            "longitude": "29.3167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+27-345-374-8862",
            "+27-145-080-6006",
            "+27-946-303-4933"
        ],
        "secondaryEmailAddresses": [
            "mbeck@UUnet.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mbeck"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-3-1"
    },
    "LoginInfo": {
        "username": "mbeck",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6056 Big Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pietersburg",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "0704"
    }
});
db.user.insertOne(
{
    "email": "dleon304@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dori",
        "lastName": "Leon",
        "phoneNumber": "+1-304-403-5249",
        "email": "dleon304@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "49.9168",
            "longitude": "-74.3659"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-427-131-8165"
        ],
        "secondaryEmailAddresses": [
            "dleon@TM.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dleon"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-7-11"
    },
    "LoginInfo": {
        "username": "dleon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1691 Big Woods Circle",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Chibougamau",
        "stateProvince": "QC",
        "locality": "Nord-du-Qu\u00e9bec",
        "country": "CA",
        "postalCode": "G8P"
    }
});
db.user.insertOne(
{
    "email": "hbauer305@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Harry",
        "lastName": "Bauer",
        "phoneNumber": "+590-305-069-6019",
        "email": "hbauer305@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "16.2422",
            "longitude": "-61.5343"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-821-703-6615",
            "+590-391-184-6401"
        ],
        "secondaryEmailAddresses": [
            "hbauer@Oi.net",
            "hbauer@Access.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hbauer"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/hbauer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/hbauer"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-10-25"
    },
    "LoginInfo": {
        "username": "hbauer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2881 Short Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pointe-\u00e0-Pitre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97019 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "dmeadows306@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dino",
        "lastName": "Meadows",
        "phoneNumber": "+91-306-945-1000",
        "email": "dmeadows306@BT.com",
        "GeoSpatialInfo": {
            "latitude": "23.8189",
            "longitude": "87.8988"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-60-441-4050"
        ],
        "secondaryEmailAddresses": [
            "dmeadows@Ooredoo.net",
            "dmeadows@Orange.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dmeadows"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dmeadows"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-10-23"
    },
    "LoginInfo": {
        "username": "dmeadows",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "530 Red Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rajnagar Bishwambar",
        "stateProvince": "Namkhana",
        "locality": "South 24 Parganas",
        "country": "IN",
        "postalCode": "743357"
    }
});
db.user.insertOne(
{
    "email": "afiguero307@Frontier.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Amelia",
        "lastName": "Figueroa",
        "phoneNumber": "+262-307-988-7335",
        "email": "afiguero307@Frontier.com",
        "GeoSpatialInfo": {
            "latitude": "-12.9128",
            "longitude": "45.1926"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-902-506-9960"
        ],
        "secondaryEmailAddresses": [
            "afiguero@LookData.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/afiguero"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-10-24"
    },
    "LoginInfo": {
        "username": "afiguero",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5408 Big Hill Road",
        "buildingName": null,
        "floor": 5,
        "roomApartmentCondoNumber": null,
        "city": "Bandr\u00e9l\u00e9",
        "stateProvince": "Bandrele",
        "locality": "Bandrele",
        "country": "YT",
        "postalCode": "97660"
    }
});
db.user.insertOne(
{
    "email": "malvarad308@Optus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mathew",
        "lastName": "Alvarado",
        "phoneNumber": "+1-308-407-6623",
        "email": "malvarad308@Optus.com",
        "GeoSpatialInfo": {
            "latitude": "31.0572",
            "longitude": "-87.4873"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "malvarad@Safaricom.net",
            "malvarad@Safaricom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-12-9"
    },
    "LoginInfo": {
        "username": "malvarad",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3568 Green Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Atmore",
        "stateProvince": "AL",
        "locality": "Escambia",
        "country": "US",
        "postalCode": "36502"
    }
});
db.user.insertOne(
{
    "email": "kmedina309@KTC.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kris",
        "lastName": "Medina",
        "phoneNumber": "+61-309-410-0884",
        "email": "kmedina309@KTC.com",
        "GeoSpatialInfo": {
            "latitude": "-36.8601",
            "longitude": "143.7336"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-468-823-5475",
            "+61-118-011-5894"
        ],
        "secondaryEmailAddresses": [
            "kmedina@WorldNet.net",
            "kmedina@Telefonica.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kmedina"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-9-12"
    },
    "LoginInfo": {
        "username": "kmedina",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5502 Red Ridge Avenue",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": null,
        "city": "Dunolly",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3472"
    }
});
db.user.insertOne(
{
    "email": "tsnow310@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tyesha",
        "lastName": "Snow",
        "phoneNumber": "+1-310-062-1348",
        "email": "tsnow310@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "43.5836",
            "longitude": "-79.561"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-710-188-0297",
            "+1-492-596-1402"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tsnow"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tsnow"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tsnow"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-5-21"
    },
    "LoginInfo": {
        "username": "tsnow",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9344 Little Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "20",
        "city": "Mississauga (Central Lakeview)",
        "stateProvince": "ON",
        "locality": "Mississauga",
        "country": "CA",
        "postalCode": "L5E"
    }
});
db.user.insertOne(
{
    "email": "mkrueger311@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Milan",
        "lastName": "Krueger",
        "phoneNumber": "+441624-311-796-6973",
        "email": "mkrueger311@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "54.3815",
            "longitude": "-4.4273"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441624-967-469-7454"
        ],
        "secondaryEmailAddresses": [
            "mkrueger@Orange.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mkrueger"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mkrueger"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-2-10"
    },
    "LoginInfo": {
        "username": "mkrueger",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4666 Red Bough Street",
        "buildingName": null,
        "floor": 6,
        "roomApartmentCondoNumber": null,
        "city": "Dreemskerry",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7"
    }
});
db.user.insertOne(
{
    "email": "wbean312@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Wendolyn",
        "lastName": "Bean",
        "phoneNumber": "+1-312-066-1170",
        "email": "wbean312@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "49.2436",
            "longitude": "-122.7865"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-20-759-0923"
        ],
        "secondaryEmailAddresses": [
            "wbean@Chunghwa.net",
            "wbean@cerist.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/wbean"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wbean"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-10-4"
    },
    "LoginInfo": {
        "username": "wbean",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6868 Big Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Port Coquitlam South",
        "stateProvince": "BC",
        "locality": "Port Coquitlam ",
        "country": "CA",
        "postalCode": "V3C"
    }
});
db.user.insertOne(
{
    "email": "sbuchana313@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sung",
        "lastName": "Buchanan",
        "phoneNumber": "+262-313-206-8267",
        "email": "sbuchana313@TM.com",
        "GeoSpatialInfo": {
            "latitude": "-21.1706",
            "longitude": "55.2882"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-103-434-3969",
            "+262-771-646-3725"
        ],
        "secondaryEmailAddresses": [
            "sbuchana@Chunghwa.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sbuchana"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-3-27"
    },
    "LoginInfo": {
        "username": "sbuchana",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "453 Blue Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Leu",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97436"
    }
});
db.user.insertOne(
{
    "email": "kvang314@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kareem",
        "lastName": "Vang",
        "phoneNumber": "+44-314-728-4526",
        "email": "kvang314@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "59.892",
            "longitude": "-1.3122"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-563-697-4855",
            "+44-184-290-1376"
        ],
        "secondaryEmailAddresses": [
            "kvang@KDDI.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kvang"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kvang"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-6-5"
    },
    "LoginInfo": {
        "username": "kvang",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3401 Big Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Toab",
        "stateProvince": "Scotland",
        "locality": "Shetland Islands",
        "country": "GB",
        "postalCode": "ZE3"
    }
});
db.user.insertOne(
{
    "email": "aperson315@Telstra.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ahmed",
        "lastName": "Person",
        "phoneNumber": "+1-315-961-4195",
        "email": "aperson315@Telstra.com",
        "GeoSpatialInfo": {
            "latitude": "53.1363",
            "longitude": "-103.0999"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "aperson@Optus.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aperson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-8-3"
    },
    "LoginInfo": {
        "username": "aperson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2872 Long Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eastern Saskatchewan (Melfort)",
        "stateProvince": "SK",
        "locality": "Saskatchewan",
        "country": "CA",
        "postalCode": "S0E"
    }
});
db.user.insertOne(
{
    "email": "csanford316@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Claudine",
        "lastName": "Sanford",
        "phoneNumber": "+91-316-754-8993",
        "email": "csanford316@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "28.0463",
            "longitude": "77.6279"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-515-747-7215"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/csanford"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/csanford"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-7-30"
    },
    "LoginInfo": {
        "username": "csanford",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1924 Short Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Khandeha",
        "stateProvince": "Aligarh",
        "locality": "Aligarh",
        "country": "IN",
        "postalCode": "202137"
    }
});
db.user.insertOne(
{
    "email": "yeaton317@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Yessenia",
        "lastName": "Eaton",
        "phoneNumber": "+44-317-983-1334",
        "email": "yeaton317@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "51.006",
            "longitude": "-2.6331"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-893-459-5474",
            "+44-825-256-5694"
        ],
        "secondaryEmailAddresses": [
            "yeaton@Econnect.net",
            "yeaton@Verizon.net",
            "yeaton@MaxComm.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/yeaton"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/yeaton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-6-12"
    },
    "LoginInfo": {
        "username": "yeaton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "617 Blue Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pendomer",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "BA22"
    }
});
db.user.insertOne(
{
    "email": "nlynn318@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nikole",
        "lastName": "Lynn",
        "phoneNumber": "+1-318-650-6875",
        "email": "nlynn318@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "43.0696",
            "longitude": "-79.0818"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-172-227-2495"
        ],
        "secondaryEmailAddresses": [
            "nlynn@OTE.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nlynn"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nlynn"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-11-23"
    },
    "LoginInfo": {
        "username": "nlynn",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6119 Long Bough Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Niagara Falls Southeast",
        "stateProvince": "ON",
        "locality": "Niagara Falls ",
        "country": "CA",
        "postalCode": "L2G"
    }
});
db.user.insertOne(
{
    "email": "ezhang319@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Eddie",
        "lastName": "Zhang",
        "phoneNumber": "+1809-319-564-6795",
        "email": "ezhang319@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "18.3722",
            "longitude": "-70.3722"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1809-669-216-7914",
            "+1809-863-176-3543"
        ],
        "secondaryEmailAddresses": [
            "ezhang@KPN.net",
            "ezhang@Access.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-12-10"
    },
    "LoginInfo": {
        "username": "ezhang",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7327 Short Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Barrio Hnas. Mirabal",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11302"
    }
});
db.user.insertOne(
{
    "email": "mrivera320@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mac",
        "lastName": "Rivera",
        "phoneNumber": "+61-320-853-0192",
        "email": "mrivera320@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "-37.8167",
            "longitude": "143.0833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-815-741-6122"
        ],
        "secondaryEmailAddresses": [
            "mrivera@TelecomItalia.net",
            "mrivera@MegaFon.net",
            "mrivera@NII.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mrivera"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-11-30"
    },
    "LoginInfo": {
        "username": "mrivera",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1541 Big Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pura Pura",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3271"
    }
});
db.user.insertOne(
{
    "email": "hmorrow321@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hayley",
        "lastName": "Morrow",
        "phoneNumber": "+52-321-679-5350",
        "email": "hmorrow321@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "19.6611",
            "longitude": "-98.2289"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-515-168-6265",
            "+52-416-339-5713",
            "+52-865-749-7126"
        ],
        "secondaryEmailAddresses": [
            "hmorrow@Telecom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hmorrow"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/hmorrow"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-5-6"
    },
    "LoginInfo": {
        "username": "hmorrow",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "545 Blue Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "El Rosario",
        "stateProvince": "TLA",
        "locality": "Tlaxco",
        "country": "MX",
        "postalCode": "90256"
    }
});
db.user.insertOne(
{
    "email": "fharding322@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Forest",
        "lastName": "Harding",
        "phoneNumber": "+44-322-031-1988",
        "email": "fharding322@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "58.0299",
            "longitude": "-3.9009"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/fharding"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/fharding"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-4-5"
    },
    "LoginInfo": {
        "username": "fharding",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7215 Blue Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kilbraur",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "KW9"
    }
});
db.user.insertOne(
{
    "email": "apeters323@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Anderson",
        "lastName": "Peters",
        "phoneNumber": "+90-323-770-8293",
        "email": "apeters323@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "40.8709",
            "longitude": "39.8217"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "apeters@GreenNet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/apeters"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-7-21"
    },
    "LoginInfo": {
        "username": "apeters",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4734 Green Hill Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "G\u00fclyurdu",
        "stateProvince": "Yomra",
        "locality": "Yomra",
        "country": "TR",
        "postalCode": "61250"
    }
});
db.user.insertOne(
{
    "email": "gmosley324@Telekom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Georgianna",
        "lastName": "Mosley",
        "phoneNumber": "+1-324-629-6628",
        "email": "gmosley324@Telekom.com",
        "GeoSpatialInfo": {
            "latitude": "47.6207",
            "longitude": "-52.8318"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-14-353-0167"
        ],
        "secondaryEmailAddresses": [
            "gmosley@Telstra.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gmosley"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-5-16"
    },
    "LoginInfo": {
        "username": "gmosley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5298 Winding Gully Way",
        "buildingName": null,
        "floor": 6,
        "roomApartmentCondoNumber": null,
        "city": "Portugal Cove-St. Philips",
        "stateProvince": "NL",
        "locality": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A1M"
    }
});
db.user.insertOne(
{
    "email": "dmcfarla325@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dave",
        "lastName": "Mcfarland",
        "phoneNumber": "+41-325-742-0198",
        "email": "dmcfarla325@BT.com",
        "GeoSpatialInfo": {
            "latitude": "46.7854",
            "longitude": "7.0158"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-632-366-6964",
            "+41-320-550-7580"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dmcfarla"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dmcfarla"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dmcfarla"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-1-2"
    },
    "LoginInfo": {
        "username": "dmcfarla",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "493 Long River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Prez-vers-Nor\u00e9az",
        "stateProvince": "FR",
        "locality": "Sarine District",
        "country": "CH",
        "postalCode": "1746"
    }
});
db.user.insertOne(
{
    "email": "dpacheco326@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dustin",
        "lastName": "Pacheco",
        "phoneNumber": "+91-326-171-0891",
        "email": "dpacheco326@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "26.5004",
            "longitude": "91.4784"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-452-681-7080"
        ],
        "secondaryEmailAddresses": [
            "dpacheco@Telekom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dpacheco"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dpacheco"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-4-25"
    },
    "LoginInfo": {
        "username": "dpacheco",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3406 Winding Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nizdhamdhama",
        "stateProvince": "Nizdhamdhama",
        "locality": "Nalbari",
        "country": "IN",
        "postalCode": "781349"
    }
});
db.user.insertOne(
{
    "email": "aberry327@Softbank.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ashli",
        "lastName": "Berry",
        "phoneNumber": "+598-327-240-0682",
        "email": "aberry327@Softbank.com",
        "GeoSpatialInfo": {
            "latitude": "-31.3475",
            "longitude": "-57.1208"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/aberry"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/aberry"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/aberry"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-9-25"
    },
    "LoginInfo": {
        "username": "aberry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2625 Red Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pueblo Farias",
        "stateProvince": "Salto",
        "locality": "Salto",
        "country": "UY",
        "postalCode": "50000"
    }
});
db.user.insertOne(
{
    "email": "eweiss328@Vivendi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ellis",
        "lastName": "Weiss",
        "phoneNumber": "+91-328-883-5202",
        "email": "eweiss328@Vivendi.com",
        "GeoSpatialInfo": {
            "latitude": "32.8945",
            "longitude": "74.7328"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-504-883-8836",
            "+91-546-621-9207"
        ],
        "secondaryEmailAddresses": [
            "eweiss@ICom.net",
            "eweiss@SEEDnet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/eweiss"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/eweiss"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/eweiss"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-7-5"
    },
    "LoginInfo": {
        "username": "eweiss",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9045 Little Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chak Kirpalpur",
        "stateProvince": "Jammu",
        "locality": "Jammu",
        "country": "IN",
        "postalCode": "181202"
    }
});
db.user.insertOne(
{
    "email": "iwiley329@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Irmgard",
        "lastName": "Wiley",
        "phoneNumber": "+1-329-499-4520",
        "email": "iwiley329@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "34.2625",
            "longitude": "-118.427"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-985-569-6541"
        ],
        "secondaryEmailAddresses": [
            "iwiley@Millicom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-8-7"
    },
    "LoginInfo": {
        "username": "iwiley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9379 Big Hill Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pacoima",
        "stateProvince": "CA",
        "locality": "Los Angeles",
        "country": "US",
        "postalCode": "91333"
    }
});
db.user.insertOne(
{
    "email": "ljones330@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Leonie",
        "lastName": "Jones",
        "phoneNumber": "+44-330-943-1124",
        "email": "ljones330@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "56.9722",
            "longitude": "-5.8233"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-617-345-4197",
            "+44-428-585-1155"
        ],
        "secondaryEmailAddresses": [
            "ljones@NII.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ljones"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ljones"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ljones"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ljones"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-6-1"
    },
    "LoginInfo": {
        "username": "ljones",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7833 Short Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Morar",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "PH40"
    }
});
db.user.insertOne(
{
    "email": "dhull331@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Douglas",
        "lastName": "Hull",
        "phoneNumber": "+262-331-747-0424",
        "email": "dhull331@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "-21.2831",
            "longitude": "55.518"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-642-820-1390",
            "+262-218-186-4221"
        ],
        "secondaryEmailAddresses": [
            "dhull@Telstra.net",
            "dhull@TelecomItalia.net",
            "dhull@Orange.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dhull"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-4-1"
    },
    "LoginInfo": {
        "username": "dhull",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6947 Green Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Le Tampon",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97831 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "dashley332@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Danette",
        "lastName": "Ashley",
        "phoneNumber": "+1-332-920-1042",
        "email": "dashley332@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "42.4776",
            "longitude": "-114.1606"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-490-534-7620",
            "+1-226-232-7836"
        ],
        "secondaryEmailAddresses": [
            "dashley@Telecom.net",
            "dashley@LGUplus.net",
            "dashley@VimpelCom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dashley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dashley"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-5-7"
    },
    "LoginInfo": {
        "username": "dashley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1616 Winding Hill Street",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": null,
        "city": "Murtaugh",
        "stateProvince": "ID",
        "locality": "Twin Falls",
        "country": "US",
        "postalCode": "83344"
    }
});
db.user.insertOne(
{
    "email": "bblack333@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Bradley",
        "lastName": "Black",
        "phoneNumber": "+358-333-353-2489",
        "email": "bblack333@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "61.483",
            "longitude": "21.7202"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+358-699-441-0935",
            "+358-683-632-3674"
        ],
        "secondaryEmailAddresses": [
            "bblack@BT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bblack"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bblack"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-11-22"
    },
    "LoginInfo": {
        "username": "bblack",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6551 Red Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pori",
        "stateProvince": "Pori",
        "locality": "Pori",
        "country": "FI",
        "postalCode": "28600"
    }
});
db.user.insertOne(
{
    "email": "ogood334@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Orville",
        "lastName": "Good",
        "phoneNumber": "+1-334-187-9925",
        "email": "ogood334@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "41.9776",
            "longitude": "-101.9636"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "ogood@Vodafone.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ogood"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ogood"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-11-24"
    },
    "LoginInfo": {
        "username": "ogood",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5185 Big Bridge Circle",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": "11",
        "city": "Ashby",
        "stateProvince": "NE",
        "locality": "Grant",
        "country": "US",
        "postalCode": "69333"
    }
});
db.user.insertOne(
{
    "email": "zmorrow335@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Zachery",
        "lastName": "Morrow",
        "phoneNumber": "+441534-335-382-3892",
        "email": "zmorrow335@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "49.2",
            "longitude": "-2.1333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441534-740-779-7012",
            "+441534-431-940-2051"
        ],
        "secondaryEmailAddresses": [
            "zmorrow@PLDT.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/zmorrow"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-4-9"
    },
    "LoginInfo": {
        "username": "zmorrow",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9025 Green Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Helier",
        "stateProvince": "Jersey Channel Islands",
        "locality": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE2"
    }
});
db.user.insertOne(
{
    "email": "fcastane336@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Florentino",
        "lastName": "Castaneda",
        "phoneNumber": "+1-336-822-1617",
        "email": "fcastane336@UI.com",
        "GeoSpatialInfo": {
            "latitude": "43.1313",
            "longitude": "-79.2317"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-396-724-0087",
            "+1-522-848-0694"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/fcastane"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-3-30"
    },
    "LoginInfo": {
        "username": "fcastane",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2805 Short Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St. Catharines South",
        "stateProvince": "ON",
        "locality": "St. Catharines ",
        "country": "CA",
        "postalCode": "L2T"
    }
});
db.user.insertOne(
{
    "email": "broach337@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brett",
        "lastName": "Roach",
        "phoneNumber": "+43-337-351-2076",
        "email": "broach337@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "46.8444",
            "longitude": "16.0497"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+43-970-312-0922"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/broach"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/broach"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-4-16"
    },
    "LoginInfo": {
        "username": "broach",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2022 Red Woods Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bonisdorf",
        "stateProvince": "Neuhaus am Klausenbach",
        "locality": "Politischer Bezirk Jennersdorf",
        "country": "AT",
        "postalCode": "8385"
    }
});
db.user.insertOne(
{
    "email": "epatrick338@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Estela",
        "lastName": "Patrick",
        "phoneNumber": "+91-338-942-0780",
        "email": "epatrick338@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "29.85",
            "longitude": "75.2085"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-118-282-7339"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-3-6"
    },
    "LoginInfo": {
        "username": "epatrick",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3664 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "47",
        "city": "Jaurkian",
        "stateProvince": "Mansa",
        "locality": "Mansa",
        "country": "IN",
        "postalCode": "151505"
    }
});
db.user.insertOne(
{
    "email": "lalexand339@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lyda",
        "lastName": "Alexander",
        "phoneNumber": "+56-339-304-2164",
        "email": "lalexand339@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "-36.6803",
            "longitude": "-72.199"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+56-125-554-5124",
            "+56-821-514-2592",
            "+56-251-558-9625"
        ],
        "secondaryEmailAddresses": [
            "lalexand@Optus.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-1-1"
    },
    "LoginInfo": {
        "username": "lalexand",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2103 Blue Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chill\u00e1n Viejo",
        "stateProvince": "Chill\u00e1n Viejo",
        "locality": "Provincia de \u00d1uble",
        "country": "CL",
        "postalCode": "3820000"
    }
});
db.user.insertOne(
{
    "email": "cbooth340@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carman",
        "lastName": "Booth",
        "phoneNumber": "+1-340-320-6041",
        "email": "cbooth340@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "35.3859",
            "longitude": "-94.3985"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-9-16"
    },
    "LoginInfo": {
        "username": "cbooth",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8132 Short Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fort Smith",
        "stateProvince": "AR",
        "locality": "Sebastian",
        "country": "US",
        "postalCode": "72905"
    }
});
db.user.insertOne(
{
    "email": "mtang341@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Monique",
        "lastName": "Tang",
        "phoneNumber": "+880-341-507-1434",
        "email": "mtang341@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "23.9372",
            "longitude": "88.9979"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+880-715-912-4016"
        ],
        "secondaryEmailAddresses": [
            "mtang@NTT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mtang"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-3-6"
    },
    "LoginInfo": {
        "username": "mtang",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8573 Blue Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mirpur",
        "stateProvince": "Mirpur",
        "locality": "Kustia",
        "country": "BD",
        "postalCode": "7030"
    }
});
db.user.insertOne(
{
    "email": "flara342@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Fermin",
        "lastName": "Lara",
        "phoneNumber": "+91-342-364-7514",
        "email": "flara342@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "22.9503",
            "longitude": "76.2659"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-305-086-3490"
        ],
        "secondaryEmailAddresses": [
            "flara@MTN.net",
            "flara@EUnet.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-11-6"
    },
    "LoginInfo": {
        "username": "flara",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1686 Long Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "7C",
        "city": "Padliya",
        "stateProvince": "Dewas",
        "locality": "Dewas",
        "country": "IN",
        "postalCode": "455001"
    }
});
db.user.insertOne(
{
    "email": "cking343@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Christian",
        "lastName": "King",
        "phoneNumber": "+376-343-257-9623",
        "email": "cking343@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "42.6",
            "longitude": "1.55"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+376-637-096-1847",
            "+376-353-913-8129"
        ],
        "secondaryEmailAddresses": [
            "cking@Access.net",
            "cking@CenturyLink.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cking"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-3-20"
    },
    "LoginInfo": {
        "username": "cking",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1849 Winding Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "56",
        "city": "Ordino",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD300"
    }
});
db.user.insertOne(
{
    "email": "cclarke344@Orange.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Celine",
        "lastName": "Clarke",
        "phoneNumber": "+1-344-989-2096",
        "email": "cclarke344@Orange.com",
        "GeoSpatialInfo": {
            "latitude": "40.0647",
            "longitude": "-76.4343"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-663-480-2456",
            "+1-840-781-8931"
        ],
        "secondaryEmailAddresses": [
            "cclarke@Telia.net",
            "cclarke@Ooredoo.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cclarke"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-5-4"
    },
    "LoginInfo": {
        "username": "cclarke",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4480 Short Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Silver Spring",
        "stateProvince": "PA",
        "locality": "Lancaster",
        "country": "US",
        "postalCode": "17575"
    }
});
db.user.insertOne(
{
    "email": "alam345@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Aron",
        "lastName": "Lam",
        "phoneNumber": "+7-345-824-9319",
        "email": "alam345@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "53.8667",
            "longitude": "52.9333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-404-294-7383",
            "+7-960-886-1853"
        ],
        "secondaryEmailAddresses": [
            "alam@Bifty.net",
            "alam@Telenor.net",
            "alam@Verizon.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/alam"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1959-4-29"
    },
    "LoginInfo": {
        "username": "alam",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7883 Blue Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0421\u0442\u0430\u0440\u044b\u0435 \u0423\u0437\u0435\u043b\u0438",
        "stateProvince": "\u0411\u0423\u0413\u0423\u0420\u0423\u0421\u041b\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0411\u0423\u0413\u0423\u0420\u0423\u0421\u041b\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "461625"
    }
});
db.user.insertOne(
{
    "email": "jberg346@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jesusa",
        "lastName": "Berg",
        "phoneNumber": "+1-346-439-9011",
        "email": "jberg346@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "49.8425",
            "longitude": "-97.2182"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-53-355-3518",
            "+1-759-503-3292"
        ],
        "secondaryEmailAddresses": [
            "jberg@EUnet.net",
            "jberg@Telekom.net",
            "jberg@Orange.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jberg"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jberg"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-1-20"
    },
    "LoginInfo": {
        "username": "jberg",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1894 Short Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Winnipeg (Fort Garry NW \/ Tuxedo)",
        "stateProvince": "MB",
        "locality": "Winnipeg",
        "country": "CA",
        "postalCode": "R3P"
    }
});
db.user.insertOne(
{
    "email": "rgill347@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Robert",
        "lastName": "Gill",
        "phoneNumber": "+1-347-107-2611",
        "email": "rgill347@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "34.1077",
            "longitude": "-109.294"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rgill@Vivendi.net",
            "rgill@GreenNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rgill"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rgill"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-6-30"
    },
    "LoginInfo": {
        "username": "rgill",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7251 Blue Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eagar",
        "stateProvince": "AZ",
        "locality": "Apache",
        "country": "US",
        "postalCode": "85925"
    }
});
db.user.insertOne(
{
    "email": "ktate348@Orange.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Karine",
        "lastName": "Tate",
        "phoneNumber": "+91-348-180-6461",
        "email": "ktate348@Orange.com",
        "GeoSpatialInfo": {
            "latitude": "22.0907",
            "longitude": "82.5458"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-165-825-4236"
        ],
        "secondaryEmailAddresses": [
            "ktate@Tata.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ktate"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ktate"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-6-27"
    },
    "LoginInfo": {
        "username": "ktate",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5990 Green Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bhelwan",
        "stateProvince": "Kunkuri",
        "locality": "Jashpur",
        "country": "IN",
        "postalCode": "496245"
    }
});
db.user.insertOne(
{
    "email": "gsmith349@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gregoria",
        "lastName": "Smith",
        "phoneNumber": "+596-349-085-5439",
        "email": "gsmith349@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "14.6089",
            "longitude": "-61.0733"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "gsmith@Orstom.net",
            "gsmith@KTC.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gsmith"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gsmith"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/gsmith"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-2-18"
    },
    "LoginInfo": {
        "username": "gsmith",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3774 Red Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97209 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "ebond350@Turkcell.com",
    "userType": "partner",
    "businessName": "Serious Business LLC",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elias",
        "lastName": "Bond",
        "phoneNumber": "+1-350-810-7487",
        "email": "ebond350@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "37.8044",
            "longitude": "-122.2708"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-715-756-6011",
            "+1-295-373-0731"
        ],
        "secondaryEmailAddresses": [
            "ebond@Belgacom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ebond"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ebond"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-2-1"
    },
    "LoginInfo": {
        "username": "ebond",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6736 Blue Ridge Way",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": null,
        "city": "Oakland",
        "stateProvince": "CA",
        "locality": "Alameda",
        "country": "US",
        "postalCode": "94659"
    }
});
db.user.insertOne(
{
    "email": "cbeasley351@OpenWorld.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Colby",
        "lastName": "Beasley",
        "phoneNumber": "+48-351-995-9501",
        "email": "cbeasley351@OpenWorld.com",
        "GeoSpatialInfo": {
            "latitude": "50.6865",
            "longitude": "21.2063"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-180-039-4281"
        ],
        "secondaryEmailAddresses": [
            "cbeasley@NTT.net",
            "cbeasley@SEEDnet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cbeasley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-12-13"
    },
    "LoginInfo": {
        "username": "cbeasley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1348 Little Bend Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "1E",
        "city": "Wierzbka",
        "stateProvince": "Bogoria",
        "locality": "Stasz\u00f3w County",
        "country": "PL",
        "postalCode": "28-210"
    }
});
db.user.insertOne(
{
    "email": "lhines352@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lindsay",
        "lastName": "Hines",
        "phoneNumber": "+1-352-941-6290",
        "email": "lhines352@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "56.2701",
            "longitude": "-96.9118"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-847-020-8249"
        ],
        "secondaryEmailAddresses": [
            "lhines@Rogers.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lhines"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lhines"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-7-15"
    },
    "LoginInfo": {
        "username": "lhines",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9801 Big Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Northern Manitoba (Norway House)",
        "stateProvince": "MB",
        "locality": "Manitoba",
        "country": "CA",
        "postalCode": "R0B"
    }
});
db.user.insertOne(
{
    "email": "lblevins354@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lesley",
        "lastName": "Blevins",
        "phoneNumber": "+1-354-591-4229",
        "email": "lblevins354@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "37.7631",
            "longitude": "-122.4586"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lblevins@GreenNet.net",
            "lblevins@Vodafone.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lblevins"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lblevins"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lblevins"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lblevins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-9-6"
    },
    "LoginInfo": {
        "username": "lblevins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "60 Red Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "San Francisco",
        "stateProvince": "CA",
        "locality": "City and County of San Francisco",
        "country": "US",
        "postalCode": "94143"
    }
});
db.user.insertOne(
{
    "email": "rgillesp355@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Raul",
        "lastName": "Gillespie",
        "phoneNumber": "+1787-355-906-8941",
        "email": "rgillesp355@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "18.3575",
            "longitude": "-66.111"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rgillesp"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-11-25"
    },
    "LoginInfo": {
        "username": "rgillesp",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3235 Red Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Guaynabo",
        "stateProvince": "San Juan",
        "locality": "San Juan",
        "country": "PR",
        "postalCode": "00968"
    }
});
db.user.insertOne(
{
    "email": "hcortez356@TT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hershel",
        "lastName": "Cortez",
        "phoneNumber": "+1-356-981-9047",
        "email": "hcortez356@TT.com",
        "GeoSpatialInfo": {
            "latitude": "42.8856",
            "longitude": "-71.947"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-825-293-9150"
        ],
        "secondaryEmailAddresses": [
            "hcortez@CUBENet.net",
            "hcortez@Softbank.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-7-25"
    },
    "LoginInfo": {
        "username": "hcortez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5728 Little Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Peterborough",
        "stateProvince": "NH",
        "locality": "Hillsborough",
        "country": "US",
        "postalCode": "03458"
    }
});
db.user.insertOne(
{
    "email": "astanley357@Econnect.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Arron",
        "lastName": "Stanley",
        "phoneNumber": "+262-357-433-8383",
        "email": "astanley357@Econnect.com",
        "GeoSpatialInfo": {
            "latitude": "-20.8823",
            "longitude": "55.4504"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-329-241-2829",
            "+262-982-144-9246"
        ],
        "secondaryEmailAddresses": [
            "astanley@Telenor.net",
            "astanley@UI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/astanley"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/astanley"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/astanley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-6-10"
    },
    "LoginInfo": {
        "username": "astanley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2395 Short Mountain Circle",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Denis",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97475 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "idorsey358@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ivan",
        "lastName": "Dorsey",
        "phoneNumber": "+61-358-292-6782",
        "email": "idorsey358@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "-12.6978",
            "longitude": "130.8459"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-904-413-3640"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/idorsey"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-5-14"
    },
    "LoginInfo": {
        "username": "idorsey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5503 Winding Woods Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "East Arm",
        "stateProvince": "NT",
        "locality": "Northern Territory",
        "country": "AU",
        "postalCode": "0822"
    }
});
db.user.insertOne(
{
    "email": "ddunlap360@EUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Derrick",
        "lastName": "Dunlap",
        "phoneNumber": "+91-360-448-7548",
        "email": "ddunlap360@EUnet.com",
        "GeoSpatialInfo": {
            "latitude": "24.7441",
            "longitude": "92.7721"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-293-721-6365",
            "+91-318-047-2436"
        ],
        "secondaryEmailAddresses": [
            "ddunlap@AIS.net",
            "ddunlap@LGUplus.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ddunlap"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ddunlap"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-4-25"
    },
    "LoginInfo": {
        "username": "ddunlap",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5323 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hatikhal Bazar",
        "stateProvince": "NA",
        "locality": "Cachar",
        "country": "IN",
        "postalCode": "788116"
    }
});
db.user.insertOne(
{
    "email": "ghorn361@Telkom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gertrud",
        "lastName": "Horn",
        "phoneNumber": "+354-361-350-9956",
        "email": "ghorn361@Telkom.com",
        "GeoSpatialInfo": {
            "latitude": "64.1667",
            "longitude": "-21.6977"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+354-65-391-6832"
        ],
        "secondaryEmailAddresses": [
            "ghorn@cerist.net",
            "ghorn@Telefonica.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ghorn"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-8-22"
    },
    "LoginInfo": {
        "username": "ghorn",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "148 Red Creek Street",
        "buildingName": "Building 1B",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mosfellsb\u00e6",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "270"
    }
});
db.user.insertOne(
{
    "email": "nhall362@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nicholle",
        "lastName": "Hall",
        "phoneNumber": "+1-362-828-6135",
        "email": "nhall362@UI.com",
        "GeoSpatialInfo": {
            "latitude": "51.0876",
            "longitude": "-115.3461"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "nhall@TT.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-10-8"
    },
    "LoginInfo": {
        "username": "nhall",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "379 Little River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Canmore",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T1W"
    }
});
db.user.insertOne(
{
    "email": "state363@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sherwood",
        "lastName": "Tate",
        "phoneNumber": "+1340-363-837-9302",
        "email": "state363@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "18.3223",
            "longitude": "-64.9637"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1340-226-885-5412",
            "+1340-944-019-8815",
            "+1340-138-475-8848"
        ],
        "secondaryEmailAddresses": [
            "state@KTC.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-1-10"
    },
    "LoginInfo": {
        "username": "state",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8994 Short Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Thomas",
        "stateProvince": "St. Thomas",
        "locality": "St. Thomas",
        "country": "VI",
        "postalCode": "00804"
    }
});
db.user.insertOne(
{
    "email": "azimmerm364@LGUplus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Archie",
        "lastName": "Zimmerman",
        "phoneNumber": "+61-364-997-8455",
        "email": "azimmerm364@LGUplus.com",
        "GeoSpatialInfo": {
            "latitude": "-34.4167",
            "longitude": "148.25"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-384-315-9760",
            "+61-817-082-9404"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-11-21"
    },
    "LoginInfo": {
        "username": "azimmerm",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6804 Short Ridge Drive",
        "buildingName": "Building 88",
        "floor": null,
        "roomApartmentCondoNumber": "1E",
        "city": "Wombat",
        "stateProvince": "NSW",
        "locality": "CANBERRA",
        "country": "AU",
        "postalCode": "2587"
    }
});
db.user.insertOne(
{
    "email": "mfry365@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Meridith",
        "lastName": "Fry",
        "phoneNumber": "+52-365-007-0492",
        "email": "mfry365@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "19.9622",
            "longitude": "-101.0006"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-753-599-7448",
            "+52-274-566-2360"
        ],
        "secondaryEmailAddresses": [
            "mfry@Frontier.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mfry"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-8-7"
    },
    "LoginInfo": {
        "username": "mfry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1164 Big Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Valle Escondido",
        "stateProvince": "GUA",
        "locality": "Morole\u00f3n",
        "country": "MX",
        "postalCode": "38864"
    }
});
db.user.insertOne(
{
    "email": "khumphre366@MaxComm.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kasie",
        "lastName": "Humphrey",
        "phoneNumber": "+91-366-929-7262",
        "email": "khumphre366@MaxComm.com",
        "GeoSpatialInfo": {
            "latitude": "20.1102",
            "longitude": "85.3322"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-10-3"
    },
    "LoginInfo": {
        "username": "khumphre",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1140 Blue Woods Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gahaga Narasinghpur",
        "stateProvince": "Kendrapara",
        "locality": "Kendrapara",
        "country": "IN",
        "postalCode": "754210"
    }
});
db.user.insertOne(
{
    "email": "adeleon367@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alvaro",
        "lastName": "Deleon",
        "phoneNumber": "+359-367-282-6044",
        "email": "adeleon367@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "42.8667",
            "longitude": "25.3167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-620-495-7446"
        ],
        "secondaryEmailAddresses": [
            "adeleon@Softbank.net",
            "adeleon@Telekom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/adeleon"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/adeleon"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/adeleon"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/adeleon"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-5-13"
    },
    "LoginInfo": {
        "username": "adeleon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2630 Little Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0411\u0430\u043b\u0430\u043d\u0438\u0442\u0435 \/ Balanite",
        "stateProvince": "GAB",
        "locality": "\u0413\u0430\u0431\u0440\u043e\u0432\u043e \/ Gabrovo",
        "country": "BG",
        "postalCode": "5300"
    }
});
db.user.insertOne(
{
    "email": "nbowen368@MegaFon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nida",
        "lastName": "Bowen",
        "phoneNumber": "+44-368-263-6867",
        "email": "nbowen368@MegaFon.com",
        "GeoSpatialInfo": {
            "latitude": "53.3516",
            "longitude": "-2.0938"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "nbowen@KTC.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/nbowen"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/nbowen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-1-22"
    },
    "LoginInfo": {
        "username": "nbowen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8997 Green Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Thornsett",
        "stateProvince": "England",
        "locality": "Cheshire",
        "country": "GB",
        "postalCode": "SK12"
    }
});
db.user.insertOne(
{
    "email": "qreyna369@TeleSystems.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Quincy",
        "lastName": "Reyna",
        "phoneNumber": "+92-369-633-6016",
        "email": "qreyna369@TeleSystems.com",
        "GeoSpatialInfo": {
            "latitude": "32.6445",
            "longitude": "70.8126"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+92-778-594-6405"
        ],
        "secondaryEmailAddresses": [
            "qreyna@Bifty.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/qreyna"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-2-19"
    },
    "LoginInfo": {
        "username": "qreyna",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4085 Red Woods Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dhaboola",
        "stateProvince": "Norhern Punajb Rawalpindi",
        "locality": "Norhern Punajb Rawalpindi",
        "country": "PK",
        "postalCode": "43091"
    }
});
db.user.insertOne(
{
    "email": "ygentry370@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Yadira",
        "lastName": "Gentry",
        "phoneNumber": "+44-370-896-6393",
        "email": "ygentry370@BT.com",
        "GeoSpatialInfo": {
            "latitude": "53.8885",
            "longitude": "-1.7568"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-222-550-8348",
            "+44-274-096-4736",
            "+44-852-815-8436"
        ],
        "secondaryEmailAddresses": [
            "ygentry@PLDT.net",
            "ygentry@Telecom.net",
            "ygentry@Sprint.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ygentry"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ygentry"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-10-28"
    },
    "LoginInfo": {
        "username": "ygentry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9827 Red Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "60",
        "city": "Burley in Wharfdale",
        "stateProvince": "England",
        "locality": "West Yorkshire",
        "country": "GB",
        "postalCode": "LS29"
    }
});
db.user.insertOne(
{
    "email": "dfrederi371@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Desirae",
        "lastName": "Frederick",
        "phoneNumber": "+389-371-608-3643",
        "email": "dfrederi371@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "42.0106",
            "longitude": "20.9714"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "dfrederi@Optus.net",
            "dfrederi@Vodafone.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-8-1"
    },
    "LoginInfo": {
        "username": "dfrederi",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3001 Green Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "C4",
        "city": "Tetovo",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1200"
    }
});
db.user.insertOne(
{
    "email": "jmacias372@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jayson",
        "lastName": "Macias",
        "phoneNumber": "+1-372-082-1675",
        "email": "jmacias372@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "43.4032",
            "longitude": "-79.7186"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-803-717-5182",
            "+1-315-889-1923"
        ],
        "secondaryEmailAddresses": [
            "jmacias@MaxComm.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jmacias"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jmacias"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-8-7"
    },
    "LoginInfo": {
        "username": "jmacias",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1721 Little Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oakville South",
        "stateProvince": "ON",
        "locality": "Oakville",
        "country": "CA",
        "postalCode": "L6L"
    }
});
db.user.insertOne(
{
    "email": "stodd373@Vivendi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Savannah",
        "lastName": "Todd",
        "phoneNumber": "+41-373-360-5884",
        "email": "stodd373@Vivendi.com",
        "GeoSpatialInfo": {
            "latitude": "46.3035",
            "longitude": "6.1633"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-903-427-0431",
            "+41-48-933-1579",
            "+41-229-833-8398"
        ],
        "secondaryEmailAddresses": [
            "stodd@Optus.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/stodd"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-8-29"
    },
    "LoginInfo": {
        "username": "stodd",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9065 Long Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mies",
        "stateProvince": "VD",
        "locality": "Nyon District",
        "country": "CH",
        "postalCode": "1295"
    }
});
db.user.insertOne(
{
    "email": "sreilly374@Telstra.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shea",
        "lastName": "Reilly",
        "phoneNumber": "+61-374-003-3835",
        "email": "sreilly374@Telstra.com",
        "GeoSpatialInfo": {
            "latitude": "-26.3093",
            "longitude": "151.7816"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-413-627-2916",
            "+61-978-244-6869",
            "+61-975-039-5024"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sreilly"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/sreilly"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-8-24"
    },
    "LoginInfo": {
        "username": "sreilly",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8662 Long River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Charlestown",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4608"
    }
});
db.user.insertOne(
{
    "email": "dsimon375@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dana",
        "lastName": "Simon",
        "phoneNumber": "+687-375-131-1942",
        "email": "dsimon375@NII.com",
        "GeoSpatialInfo": {
            "latitude": "-22.1496",
            "longitude": "166.4473"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "dsimon@Optus.net",
            "dsimon@VimpelCom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dsimon"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dsimon"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dsimon"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dsimon"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-1-11"
    },
    "LoginInfo": {
        "username": "dsimon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2537 Short Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dumb\u00e9a",
        "stateProvince": "Dumb\u00e9a",
        "locality": "Dumb\u00e9a",
        "country": "NC",
        "postalCode": "98835"
    }
});
db.user.insertOne(
{
    "email": "kglover376@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Korey",
        "lastName": "Glover",
        "phoneNumber": "+91-376-658-4560",
        "email": "kglover376@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "16.5408",
            "longitude": "80.1446"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "kglover@Optus.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kglover"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kglover"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kglover"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kglover"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-4-5"
    },
    "LoginInfo": {
        "username": "kglover",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "158 Short Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ananthavaram",
        "stateProvince": "Krosuru",
        "locality": "Guntur",
        "country": "IN",
        "postalCode": "522410"
    }
});
db.user.insertOne(
{
    "email": "jmalone377@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Josphine",
        "lastName": "Malone",
        "phoneNumber": "+373-377-900-1837",
        "email": "jmalone377@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "47.3653",
            "longitude": "28.2881"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jmalone@NII.net",
            "jmalone@KPN.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-5-15"
    },
    "LoginInfo": {
        "username": "jmalone",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9763 Long Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oniscani",
        "stateProvince": "Calarasi",
        "locality": "Calarasi",
        "country": "MD",
        "postalCode": "MD-4429"
    }
});
db.user.insertOne(
{
    "email": "tcollins378@SEEDnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tristan",
        "lastName": "Collins",
        "phoneNumber": "+1-378-629-9708",
        "email": "tcollins378@SEEDnet.com",
        "GeoSpatialInfo": {
            "latitude": "46.2956",
            "longitude": "-122.6477"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-703-096-1228"
        ],
        "secondaryEmailAddresses": [
            "tcollins@GlasNET.net",
            "tcollins@Telecom.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tcollins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-4-5"
    },
    "LoginInfo": {
        "username": "tcollins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7974 Big Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Toutle",
        "stateProvince": "WA",
        "locality": "Cowlitz",
        "country": "US",
        "postalCode": "98649"
    }
});
db.user.insertOne(
{
    "email": "gfry379@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gene",
        "lastName": "Fry",
        "phoneNumber": "+39-379-219-2501",
        "email": "gfry379@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "45.4918",
            "longitude": "9.2981"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-1-20"
    },
    "LoginInfo": {
        "username": "gfry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "68 Big River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Segrate",
        "stateProvince": "LM",
        "locality": "Milano",
        "country": "IT",
        "postalCode": "20090"
    }
});
db.user.insertOne(
{
    "email": "rlowery380@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Roger",
        "lastName": "Lowery",
        "phoneNumber": "+1-380-633-5366",
        "email": "rlowery380@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "48.3429",
            "longitude": "-65.5961"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rlowery@TeleSystems.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rlowery"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rlowery"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rlowery"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rlowery"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-1-20"
    },
    "LoginInfo": {
        "username": "rlowery",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2843 Winding River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gasp\u00e9sie-Sud (New Richmond)",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "G0C"
    }
});
db.user.insertOne(
{
    "email": "mrussell381@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Marquis",
        "lastName": "Russell",
        "phoneNumber": "+378-381-036-5067",
        "email": "mrussell381@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "43.9419",
            "longitude": "12.4474"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+378-107-250-3701"
        ],
        "secondaryEmailAddresses": [
            "mrussell@PLDT.net",
            "mrussell@DaxNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mrussell"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mrussell"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mrussell"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-9-6"
    },
    "LoginInfo": {
        "username": "mrussell",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1047 Big Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "BA",
        "city": "Ventoso",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47893"
    }
});
db.user.insertOne(
{
    "email": "tfrank382@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Troy",
        "lastName": "Frank",
        "phoneNumber": "+61-382-079-8694",
        "email": "tfrank382@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "-27.5072",
            "longitude": "152.9208"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-538-320-5517",
            "+61-194-445-1363"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tfrank"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/tfrank"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/tfrank"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-8-7"
    },
    "LoginInfo": {
        "username": "tfrank",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2499 Green Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kenmore DC",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4069"
    }
});
db.user.insertOne(
{
    "email": "favila383@ICom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Florencia",
        "lastName": "Avila",
        "phoneNumber": "+49-383-366-5129",
        "email": "favila383@ICom.com",
        "GeoSpatialInfo": {
            "latitude": "50.6447",
            "longitude": "8.0853"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/favila"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-8-20"
    },
    "LoginInfo": {
        "username": "favila",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1001 Winding Canyon Road",
        "buildingName": "Building 9F",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Waigandshain",
        "stateProvince": "RP",
        "locality": "Westerwaldkreis",
        "country": "DE",
        "postalCode": "56477"
    }
});
db.user.insertOne(
{
    "email": "acohen384@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Abram",
        "lastName": "Cohen",
        "phoneNumber": "+61-384-312-6927",
        "email": "acohen384@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "-34.8864",
            "longitude": "146.9996"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "acohen@NTT.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/acohen"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/acohen"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-8-6"
    },
    "LoginInfo": {
        "username": "acohen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8089 Little Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Murrulebale",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2652"
    }
});
db.user.insertOne(
{
    "email": "mshort385@GreenNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mable",
        "lastName": "Short",
        "phoneNumber": "+502-385-558-7033",
        "email": "mshort385@GreenNet.com",
        "GeoSpatialInfo": {
            "latitude": "14.9667",
            "longitude": "-89.5333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+502-380-567-1981",
            "+502-97-367-6006"
        ],
        "secondaryEmailAddresses": [
            "mshort@TT.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mshort"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-3-16"
    },
    "LoginInfo": {
        "username": "mshort",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8596 Little Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "98",
        "city": "ZACAPA",
        "stateProvince": "DEPTO DE ZACAPA",
        "locality": "DEPTO DE ZACAPA",
        "country": "GT",
        "postalCode": "19001"
    }
});
db.user.insertOne(
{
    "email": "alindsey386@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Adrienne",
        "lastName": "Lindsey",
        "phoneNumber": "+61-386-355-1760",
        "email": "alindsey386@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "-33.9822",
            "longitude": "151.14"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-329-169-9238"
        ],
        "secondaryEmailAddresses": [
            "alindsey@CUBENet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/alindsey"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/alindsey"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/alindsey"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/alindsey"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1994-10-3"
    },
    "LoginInfo": {
        "username": "alindsey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9877 Red Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ramsgate",
        "stateProvince": "NSW",
        "locality": "ST GEORGE",
        "country": "AU",
        "postalCode": "2217"
    }
});
db.user.insertOne(
{
    "email": "pandrade387@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ping",
        "lastName": "Andrade",
        "phoneNumber": "+39-387-632-4864",
        "email": "pandrade387@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "43.5689",
            "longitude": "11.4651"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-330-717-6513",
            "+39-223-970-9476"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-10-7"
    },
    "LoginInfo": {
        "username": "pandrade",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2939 Green Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "56",
        "city": "Meleto",
        "stateProvince": "TC",
        "locality": "Arezzo",
        "country": "IT",
        "postalCode": "52022"
    }
});
db.user.insertOne(
{
    "email": "mreeves388@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Melba",
        "lastName": "Reeves",
        "phoneNumber": "+1-388-589-9346",
        "email": "mreeves388@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "40.9471",
            "longitude": "-74.2466"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-166-871-2089",
            "+1-246-559-7308"
        ],
        "secondaryEmailAddresses": [
            "mreeves@PLDT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mreeves"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mreeves"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mreeves"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-10-9"
    },
    "LoginInfo": {
        "username": "mreeves",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9538 Blue Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Wayne",
        "stateProvince": "NJ",
        "locality": "Passaic",
        "country": "US",
        "postalCode": "07470"
    }
});
db.user.insertOne(
{
    "email": "bchapman389@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Bobbie",
        "lastName": "Chapman",
        "phoneNumber": "+596-389-135-3024",
        "email": "bchapman389@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "14.6177",
            "longitude": "-61.099"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+596-465-545-2095",
            "+596-416-626-5125"
        ],
        "secondaryEmailAddresses": [
            "bchapman@Movil.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bchapman"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bchapman"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bchapman"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-7-15"
    },
    "LoginInfo": {
        "username": "bchapman",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9275 Winding Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Schoelcher",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97279 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "cgibbs390@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Celestina",
        "lastName": "Gibbs",
        "phoneNumber": "+1-390-343-8351",
        "email": "cgibbs390@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "43.1923",
            "longitude": "-79.2559"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-107-243-3512"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cgibbs"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-7-20"
    },
    "LoginInfo": {
        "username": "cgibbs",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6346 Winding Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St. Catharines Northwest",
        "stateProvince": "ON",
        "locality": "St. Catharines ",
        "country": "CA",
        "postalCode": "L2N"
    }
});
db.user.insertOne(
{
    "email": "vli391@Oi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Valentine",
        "lastName": "Li",
        "phoneNumber": "+81-391-042-6778",
        "email": "vli391@Oi.com",
        "GeoSpatialInfo": {
            "latitude": "34.5798",
            "longitude": "133.6869"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-687-995-4067",
            "+81-986-500-9851"
        ],
        "secondaryEmailAddresses": [
            "vli@LGUplus.net",
            "vli@Rogers.net",
            "vli@Rogers.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-8-8"
    },
    "LoginInfo": {
        "username": "vli",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5265 Little Stream Circle",
        "buildingName": "Building E5",
        "floor": null,
        "roomApartmentCondoNumber": "28",
        "city": "Ogaya",
        "stateProvince": "Nishiawakura Son",
        "locality": "Aida Gun",
        "country": "JP",
        "postalCode": "707-0501"
    }
});
db.user.insertOne(
{
    "email": "whenders392@TelecomItalia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Wilton",
        "lastName": "Henderson",
        "phoneNumber": "+61-392-059-4026",
        "email": "whenders392@TelecomItalia.com",
        "GeoSpatialInfo": {
            "latitude": "-37.7882",
            "longitude": "144.93"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-902-107-8715",
            "+61-425-858-2972"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/whenders"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/whenders"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-2-15"
    },
    "LoginInfo": {
        "username": "whenders",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5020 Winding Canyon Avenue",
        "buildingName": "Building 42",
        "floor": 6,
        "roomApartmentCondoNumber": null,
        "city": "Flemington",
        "stateProvince": "VIC",
        "locality": "FOOTSCRAY",
        "country": "AU",
        "postalCode": "3031"
    }
});
db.user.insertOne(
{
    "email": "kchristi393@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kathie",
        "lastName": "Christian",
        "phoneNumber": "+423-393-468-1623",
        "email": "kchristi393@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "47.209",
            "longitude": "9.5223"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-987-782-4071"
        ],
        "secondaryEmailAddresses": [
            "kchristi@Optus.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kchristi"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kchristi"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kchristi"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kchristi"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-1-30"
    },
    "LoginInfo": {
        "username": "kchristi",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1422 Winding Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Eschen",
        "stateProvince": "Eschen",
        "locality": "Eschen",
        "country": "LI",
        "postalCode": "9492"
    }
});
db.user.insertOne(
{
    "email": "mmason394@Telekom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Milton",
        "lastName": "Mason",
        "phoneNumber": "+61-394-823-8917",
        "email": "mmason394@Telekom.com",
        "GeoSpatialInfo": {
            "latitude": "-29.2204",
            "longitude": "115.0801"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-587-718-2881",
            "+61-578-469-7272"
        ],
        "secondaryEmailAddresses": [
            "mmason@Telkom.net",
            "mmason@Rogers.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mmason"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-7-2"
    },
    "LoginInfo": {
        "username": "mmason",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1770 Long Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "FE",
        "city": "Irwin",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6525"
    }
});
db.user.insertOne(
{
    "email": "eschwart395@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Erwin",
        "lastName": "Schwartz",
        "phoneNumber": "+56-395-082-0037",
        "email": "eschwart395@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "-33.0358",
            "longitude": "-71.1107"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+56-499-402-9745"
        ],
        "secondaryEmailAddresses": [
            "eschwart@LGUplus.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/eschwart"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1959-9-21"
    },
    "LoginInfo": {
        "username": "eschwart",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3712 Winding Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Olmu\u00e9",
        "stateProvince": "Olmu\u00e9",
        "locality": "Provincia de Marga Marga",
        "country": "CL",
        "postalCode": "2330000"
    }
});
db.user.insertOne(
{
    "email": "tolson396@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Theo",
        "lastName": "Olson",
        "phoneNumber": "+91-396-004-0836",
        "email": "tolson396@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "21.6758",
            "longitude": "83.5792"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-224-914-7855"
        ],
        "secondaryEmailAddresses": [
            "tolson@TT.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/tolson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tolson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-5-18"
    },
    "LoginInfo": {
        "username": "tolson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7490 Short Creek Street",
        "buildingName": "Building 27",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jamseth",
        "stateProvince": "Paikmal",
        "locality": "Bargarh",
        "country": "IN",
        "postalCode": "768050"
    }
});
db.user.insertOne(
{
    "email": "ispears397@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ileana",
        "lastName": "Spears",
        "phoneNumber": "+692-397-679-5713",
        "email": "ispears397@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "11.1405",
            "longitude": "166.4103"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "ispears@NII.net",
            "ispears@Airtel.net",
            "ispears@DaxNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ispears"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ispears"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ispears"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-2-16"
    },
    "LoginInfo": {
        "username": "ispears",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3297 Short Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970"
    }
});
db.user.insertOne(
{
    "email": "csexton398@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chas",
        "lastName": "Sexton",
        "phoneNumber": "+1-398-478-9301",
        "email": "csexton398@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "40.3014",
            "longitude": "-109.8637"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "csexton@Zain.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/csexton"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/csexton"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-3-1"
    },
    "LoginInfo": {
        "username": "csexton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1539 Blue River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fort Duchesne",
        "stateProvince": "UT",
        "locality": "Uintah",
        "country": "US",
        "postalCode": "84026"
    }
});
db.user.insertOne(
{
    "email": "kbishop399@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kenyetta",
        "lastName": "Bishop",
        "phoneNumber": "+351-399-753-9511",
        "email": "kbishop399@UI.com",
        "GeoSpatialInfo": {
            "latitude": "39.007",
            "longitude": "-9.2887"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-879-187-8760",
            "+351-395-104-6946",
            "+351-40-620-9254"
        ],
        "secondaryEmailAddresses": [
            "kbishop@MTN.net",
            "kbishop@DaxNet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kbishop"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kbishop"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-2-21"
    },
    "LoginInfo": {
        "username": "kbishop",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "62 Winding Gully Ride",
        "buildingName": null,
        "floor": 10,
        "roomApartmentCondoNumber": null,
        "city": "Azueira",
        "stateProvince": "Azueira",
        "locality": "Mafra",
        "country": "PT",
        "postalCode": "2665-007"
    }
});
db.user.insertOne(
{
    "email": "mmullins400@MTN.com",
    "userType": "partner",
    "businessName": "Friendly Business LLC",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mariano",
        "lastName": "Mullins",
        "phoneNumber": "+1-400-991-6971",
        "email": "mmullins400@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "45.591",
            "longitude": "-73.4361"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-111-297-1179"
        ],
        "secondaryEmailAddresses": [
            "mmullins@Tata.net",
            "mmullins@Telkom.net",
            "mmullins@PTCL.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmullins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-4-27"
    },
    "LoginInfo": {
        "username": "mmullins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2399 Long Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Boucherville",
        "stateProvince": "QC",
        "locality": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J4B"
    }
});
db.user.insertOne(
{
    "email": "jbeck401@Safaricom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jolie",
        "lastName": "Beck",
        "phoneNumber": "+692-401-309-3473",
        "email": "jbeck401@Safaricom.com",
        "GeoSpatialInfo": {
            "latitude": "11.1405",
            "longitude": "166.4103"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+692-615-359-7835",
            "+692-489-921-4011"
        ],
        "secondaryEmailAddresses": [
            "jbeck@Oi.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-3-5"
    },
    "LoginInfo": {
        "username": "jbeck",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3138 Red River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970"
    }
});
db.user.insertOne(
{
    "email": "lvang402@Bifty.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Loyd",
        "lastName": "Vang",
        "phoneNumber": "+1-402-848-1681",
        "email": "lvang402@Bifty.com",
        "GeoSpatialInfo": {
            "latitude": "49.9377",
            "longitude": "-97.2162"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-16-784-5094",
            "+1-407-836-1281"
        ],
        "secondaryEmailAddresses": [
            "lvang@BT.net",
            "lvang@Safaricom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lvang"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lvang"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lvang"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-1-15"
    },
    "LoginInfo": {
        "username": "lvang",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "981 Long Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Winnipeg (Inkster West)",
        "stateProvince": "MB",
        "locality": "Winnipeg",
        "country": "CA",
        "postalCode": "R2R"
    }
});
db.user.insertOne(
{
    "email": "hbravo403@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Heath",
        "lastName": "Bravo",
        "phoneNumber": "+94-403-347-2811",
        "email": "hbravo403@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "6.6167",
            "longitude": "80.1667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+94-51-407-7935",
            "+94-264-536-8432"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/hbravo"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hbravo"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/hbravo"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-7-24"
    },
    "LoginInfo": {
        "username": "hbravo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5887 Winding Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mahagama",
        "stateProvince": "Kalutara",
        "locality": "Kalutara",
        "country": "LK",
        "postalCode": "12210"
    }
});
db.user.insertOne(
{
    "email": "dguzman404@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Daron",
        "lastName": "Guzman",
        "phoneNumber": "+61-404-017-9925",
        "email": "dguzman404@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "-37.2626",
            "longitude": "142.9809"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "dguzman@Softbank.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-6-23"
    },
    "LoginInfo": {
        "username": "dguzman",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7102 Little Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bulgana",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3377"
    }
});
db.user.insertOne(
{
    "email": "kfowler405@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kristel",
        "lastName": "Fowler",
        "phoneNumber": "+423-405-632-0148",
        "email": "kfowler405@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "47.1984",
            "longitude": "9.5501"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-635-362-4148",
            "+423-285-902-9078"
        ],
        "secondaryEmailAddresses": [
            "kfowler@Unicom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kfowler"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-5-14"
    },
    "LoginInfo": {
        "username": "kfowler",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9814 Little Mountain Drive",
        "buildingName": "Building 12",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nendeln",
        "stateProvince": "Eschen",
        "locality": "Eschen",
        "country": "LI",
        "postalCode": "9485"
    }
});
db.user.insertOne(
{
    "email": "ialvarad406@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Isiah",
        "lastName": "Alvarado",
        "phoneNumber": "+1-406-191-4831",
        "email": "ialvarad406@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "40.3807",
            "longitude": "-75.0082"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-169-408-6358",
            "+1-853-107-1722"
        ],
        "secondaryEmailAddresses": [
            "ialvarad@Unicom.net",
            "ialvarad@TeleSystems.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ialvarad"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ialvarad"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ialvarad"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-7-2"
    },
    "LoginInfo": {
        "username": "ialvarad",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5682 Big Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Solebury",
        "stateProvince": "PA",
        "locality": "Bucks",
        "country": "US",
        "postalCode": "18963"
    }
});
db.user.insertOne(
{
    "email": "wsmith407@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Walter",
        "lastName": "Smith",
        "phoneNumber": "+41-407-810-9068",
        "email": "wsmith407@TM.com",
        "GeoSpatialInfo": {
            "latitude": "47.177",
            "longitude": "8.2091"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-97-675-3976",
            "+41-421-767-2097"
        ],
        "secondaryEmailAddresses": [
            "wsmith@PLDT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/wsmith"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/wsmith"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-9-13"
    },
    "LoginInfo": {
        "username": "wsmith",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9318 Big Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Neudorf",
        "stateProvince": "LU",
        "locality": "Sursee District",
        "country": "CH",
        "postalCode": "6025"
    }
});
db.user.insertOne(
{
    "email": "scollier408@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shellie",
        "lastName": "Collier",
        "phoneNumber": "+61-408-034-4273",
        "email": "scollier408@UI.com",
        "GeoSpatialInfo": {
            "latitude": "-35.35",
            "longitude": "139"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-369-626-1227",
            "+61-746-361-0397"
        ],
        "secondaryEmailAddresses": [
            "scollier@ATT.net",
            "scollier@APICnet.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/scollier"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/scollier"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-11-24"
    },
    "LoginInfo": {
        "username": "scollier",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "561 Winding River Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Angas Plains",
        "stateProvince": "SA",
        "locality": "South Australia",
        "country": "AU",
        "postalCode": "5255"
    }
});
db.user.insertOne(
{
    "email": "reverett409@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rene",
        "lastName": "Everett",
        "phoneNumber": "+358-409-855-8118",
        "email": "reverett409@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "60.9945",
            "longitude": "25.7571"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+358-541-015-4322"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-9-21"
    },
    "LoginInfo": {
        "username": "reverett",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3454 Red Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lahti",
        "stateProvince": "Lahti",
        "locality": "Lahti",
        "country": "FI",
        "postalCode": "15300"
    }
});
db.user.insertOne(
{
    "email": "jprince410@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jerry",
        "lastName": "Prince",
        "phoneNumber": "+44-410-322-5654",
        "email": "jprince410@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "58.05",
            "longitude": "-4.2"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-668-861-7387",
            "+44-56-941-3570"
        ],
        "secondaryEmailAddresses": [
            "jprince@Ooredoo.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jprince"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-12-10"
    },
    "LoginInfo": {
        "username": "jprince",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9496 Big Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "West Langwell",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "IV28"
    }
});
db.user.insertOne(
{
    "email": "aedwards411@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Allen",
        "lastName": "Edwards",
        "phoneNumber": "+299-411-255-3541",
        "email": "aedwards411@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "60.45",
            "longitude": "-45.55"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+299-16-284-7535"
        ],
        "secondaryEmailAddresses": [
            "aedwards@SEEDnet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/aedwards"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/aedwards"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-1-11"
    },
    "LoginInfo": {
        "username": "aedwards",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6180 Long Canyon Avenue",
        "buildingName": "Building A1",
        "floor": null,
        "roomApartmentCondoNumber": "0B",
        "city": "Alluitsup Paa",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3919"
    }
});
db.user.insertOne(
{
    "email": "cbarajas412@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carlos",
        "lastName": "Barajas",
        "phoneNumber": "+44-412-872-7644",
        "email": "cbarajas412@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "51.4503",
            "longitude": "-1.9747"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-831-650-9832"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cbarajas"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cbarajas"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-8-7"
    },
    "LoginInfo": {
        "username": "cbarajas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6841 Blue Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Blackland",
        "stateProvince": "England",
        "locality": "Wiltshire",
        "country": "GB",
        "postalCode": "SN11"
    }
});
db.user.insertOne(
{
    "email": "cpearson413@KTC.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chi",
        "lastName": "Pearson",
        "phoneNumber": "+33-413-158-3357",
        "email": "cpearson413@KTC.com",
        "GeoSpatialInfo": {
            "latitude": "44.3235",
            "longitude": "0.3394"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+33-559-356-5029",
            "+33-278-299-7711"
        ],
        "secondaryEmailAddresses": [
            "cpearson@Frontier.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cpearson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-10-30"
    },
    "LoginInfo": {
        "username": "cpearson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5326 Little Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nicole",
        "stateProvince": "Arrondissement d\u2019Agen",
        "locality": "Lot-et-Garonne",
        "country": "FR",
        "postalCode": "47190"
    }
});
db.user.insertOne(
{
    "email": "dtanner414@EUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Delia",
        "lastName": "Tanner",
        "phoneNumber": "+1-414-731-0585",
        "email": "dtanner414@EUnet.com",
        "GeoSpatialInfo": {
            "latitude": "35.4484",
            "longitude": "-85.179"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-202-537-6756",
            "+1-923-948-7630",
            "+1-665-195-2819"
        ],
        "secondaryEmailAddresses": [
            "dtanner@AlgoNet.net",
            "dtanner@Chunghwa.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-2-16"
    },
    "LoginInfo": {
        "username": "dtanner",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4798 Green Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "0D",
        "city": "Graysville",
        "stateProvince": "TN",
        "locality": "Rhea",
        "country": "US",
        "postalCode": "37338"
    }
});
db.user.insertOne(
{
    "email": "chicks415@Telefonica.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carter",
        "lastName": "Hicks",
        "phoneNumber": "+681-415-768-3250",
        "email": "chicks415@Telefonica.com",
        "GeoSpatialInfo": {
            "latitude": "-14.2667",
            "longitude": "-178.1667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "chicks@Oi.net",
            "chicks@Softbank.net",
            "chicks@Softbank.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/chicks"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/chicks"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-6-28"
    },
    "LoginInfo": {
        "username": "chicks",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6167 Big Mountain Street",
        "buildingName": null,
        "floor": 17,
        "roomApartmentCondoNumber": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620"
    }
});
db.user.insertOne(
{
    "email": "cbush416@Oi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cierra",
        "lastName": "Bush",
        "phoneNumber": "+61-416-608-7323",
        "email": "cbush416@Oi.com",
        "GeoSpatialInfo": {
            "latitude": "-32.0347",
            "longitude": "115.8986"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-994-858-7394"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cbush"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-9-7"
    },
    "LoginInfo": {
        "username": "cbush",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4981 Green Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Riverton",
        "stateProvince": "WA",
        "locality": "TANGNEY",
        "country": "AU",
        "postalCode": "6148"
    }
});
db.user.insertOne(
{
    "email": "orose417@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Osvaldo",
        "lastName": "Rose",
        "phoneNumber": "+32-417-058-2467",
        "email": "orose417@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "50.225",
            "longitude": "5.5125"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "orose@Telenor.net",
            "orose@Telenor.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-8-27"
    },
    "LoginInfo": {
        "username": "orose",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1673 Short Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "La Roche-en-Ardenne",
        "stateProvince": "WAL",
        "locality": "Luxembourg",
        "country": "BE",
        "postalCode": "6980"
    }
});
db.user.insertOne(
{
    "email": "omoon418@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Oretha",
        "lastName": "Moon",
        "phoneNumber": "+61-418-400-7851",
        "email": "omoon418@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "-23.8022",
            "longitude": "148.7101"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-216-480-6072",
            "+61-537-148-9379"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/omoon"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/omoon"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-10-30"
    },
    "LoginInfo": {
        "username": "omoon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7101 Winding River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mimosa",
        "stateProvince": "QLD",
        "locality": "CENTRAL QLD",
        "country": "AU",
        "postalCode": "4702"
    }
});
db.user.insertOne(
{
    "email": "jmoyer419@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jerrold",
        "lastName": "Moyer",
        "phoneNumber": "+66-419-754-2278",
        "email": "jmoyer419@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "17.9",
            "longitude": "98.7333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-864-227-3672",
            "+66-85-603-8803"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jmoyer"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-7-3"
    },
    "LoginInfo": {
        "username": "jmoyer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9349 Winding Mountain Road",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": "BA",
        "city": "Doi Tao",
        "stateProvince": "Chiang Mai",
        "locality": "Chiang Mai",
        "country": "TH",
        "postalCode": "50260"
    }
});
db.user.insertOne(
{
    "email": "avalenci420@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Annmarie",
        "lastName": "Valencia",
        "phoneNumber": "+1-420-626-2173",
        "email": "avalenci420@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "47.6063",
            "longitude": "-122.3308"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-759-934-7658"
        ],
        "secondaryEmailAddresses": [
            "avalenci@NetCom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-6-22"
    },
    "LoginInfo": {
        "username": "avalenci",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9070 Little Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Seattle",
        "stateProvince": "WA",
        "locality": "King",
        "country": "US",
        "postalCode": "98127"
    }
});
db.user.insertOne(
{
    "email": "smcintos421@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shelton",
        "lastName": "Mcintosh",
        "phoneNumber": "+423-421-383-7989",
        "email": "smcintos421@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "47.2191",
            "longitude": "9.5464"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+423-392-973-5584",
            "+423-956-239-6830"
        ],
        "secondaryEmailAddresses": [
            "smcintos@Zain.net",
            "smcintos@Zain.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/smcintos"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/smcintos"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-1-5"
    },
    "LoginInfo": {
        "username": "smcintos",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3410 Long Canyon Boulevard",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": null,
        "city": "Mauren FL",
        "stateProvince": "Mauren",
        "locality": "Mauren",
        "country": "LI",
        "postalCode": "9493"
    }
});
db.user.insertOne(
{
    "email": "zcaldwel422@Jio.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Zachariah",
        "lastName": "Caldwell",
        "phoneNumber": "+1-422-876-7184",
        "email": "zcaldwel422@Jio.com",
        "GeoSpatialInfo": {
            "latitude": "48.7829",
            "longitude": "-123.7027"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-571-763-9538"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/zcaldwel"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/zcaldwel"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/zcaldwel"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/zcaldwel"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-8-29"
    },
    "LoginInfo": {
        "username": "zcaldwel",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "709 Winding Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "56",
        "city": "Duncan",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V9L"
    }
});
db.user.insertOne(
{
    "email": "sburgess423@Relcom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Scottie",
        "lastName": "Burgess",
        "phoneNumber": "+90-423-778-2856",
        "email": "sburgess423@Relcom.com",
        "GeoSpatialInfo": {
            "latitude": "39.6147",
            "longitude": "31.1809"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+90-551-750-8667"
        ],
        "secondaryEmailAddresses": [
            "sburgess@Chunghwa.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sburgess"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-3-3"
    },
    "LoginInfo": {
        "username": "sburgess",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5862 Long Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0130kipinar",
        "stateProvince": "Beylikova",
        "locality": "Beylikova",
        "country": "TR",
        "postalCode": "26750"
    }
});
db.user.insertOne(
{
    "email": "rcorrea424@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rex",
        "lastName": "Correa",
        "phoneNumber": "+44-424-351-1814",
        "email": "rcorrea424@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "53.193",
            "longitude": "-2.444"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-118-286-4647"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rcorrea"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-6-11"
    },
    "LoginInfo": {
        "username": "rcorrea",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8793 Little Stream Boulevard",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Puddinglake",
        "stateProvince": "England",
        "locality": "Cheshire",
        "country": "GB",
        "postalCode": "CW10"
    }
});
db.user.insertOne(
{
    "email": "drivas425@Bifty.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Diann",
        "lastName": "Rivas",
        "phoneNumber": "+39-425-823-4224",
        "email": "drivas425@Bifty.com",
        "GeoSpatialInfo": {
            "latitude": "44.5558",
            "longitude": "10.2176"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-95-245-7112"
        ],
        "secondaryEmailAddresses": [
            "drivas@CCI.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/drivas"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/drivas"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/drivas"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-7-23"
    },
    "LoginInfo": {
        "username": "drivas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7767 Little Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Isola",
        "stateProvince": "ER",
        "locality": "Parma",
        "country": "IT",
        "postalCode": "43025"
    }
});
db.user.insertOne(
{
    "email": "cosborne426@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cary",
        "lastName": "Osborne",
        "phoneNumber": "+61-426-865-7611",
        "email": "cosborne426@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "-34.1979",
            "longitude": "142.1515"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-866-186-8669",
            "+61-655-800-2542"
        ],
        "secondaryEmailAddresses": [
            "cosborne@Verizon.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-8-23"
    },
    "LoginInfo": {
        "username": "cosborne",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6303 Short Bough Drive",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": null,
        "city": "Paringi",
        "stateProvince": "NSW",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3500"
    }
});
db.user.insertOne(
{
    "email": "dcuevas427@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dalton",
        "lastName": "Cuevas",
        "phoneNumber": "+373-427-142-1044",
        "email": "dcuevas427@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "46.2217",
            "longitude": "28.42"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+373-372-814-2957",
            "+373-622-727-6500"
        ],
        "secondaryEmailAddresses": [
            "dcuevas@Movil.net",
            "dcuevas@Turkcell.net",
            "dcuevas@Telenor.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dcuevas"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dcuevas"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-1-5"
    },
    "LoginInfo": {
        "username": "dcuevas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5643 Big Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "B2",
        "city": "Enichioi",
        "stateProvince": "Cantemir",
        "locality": "Cantemir",
        "country": "MD",
        "postalCode": "MD-7324"
    }
});
db.user.insertOne(
{
    "email": "cgarner428@MaxComm.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cameron",
        "lastName": "Garner",
        "phoneNumber": "+91-428-781-2676",
        "email": "cgarner428@MaxComm.com",
        "GeoSpatialInfo": {
            "latitude": "26.2642",
            "longitude": "86.4952"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cgarner@TelecomItalia.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-8-8"
    },
    "LoginInfo": {
        "username": "cgarner",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5280 Winding Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Alola",
        "stateProvince": "Jhanjharpur",
        "locality": "Madhubani",
        "country": "IN",
        "postalCode": "847402"
    }
});
db.user.insertOne(
{
    "email": "cnichols429@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carlie",
        "lastName": "Nicholson",
        "phoneNumber": "+57-429-556-5628",
        "email": "cnichols429@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "9.3315",
            "longitude": "-74.3471"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+57-62-045-5657"
        ],
        "secondaryEmailAddresses": [
            "cnichols@TT.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cnichols"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cnichols"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cnichols"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-6-26"
    },
    "LoginInfo": {
        "username": "cnichols",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "719 Green Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "C5",
        "city": "San Zenon",
        "stateProvince": "San Zen\u00f3n",
        "locality": "San Zen\u00f3n",
        "country": "CO",
        "postalCode": "474068"
    }
});
db.user.insertOne(
{
    "email": "cwoodwar430@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cindy",
        "lastName": "Woodward",
        "phoneNumber": "+44-430-006-2482",
        "email": "cwoodwar430@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "51.5007",
            "longitude": "-0.4027"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-722-819-5057",
            "+44-731-820-6066",
            "+44-989-939-0195"
        ],
        "secondaryEmailAddresses": [
            "cwoodwar@Airtel.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cwoodwar"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-11-5"
    },
    "LoginInfo": {
        "username": "cwoodwar",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7601 Long River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ealing",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "UB18"
    }
});
db.user.insertOne(
{
    "email": "dmckee431@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Donald",
        "lastName": "Mckee",
        "phoneNumber": "+371-431-369-4915",
        "email": "dmckee431@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "56.4642",
            "longitude": "27.6284"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "dmckee@Bifty.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dmckee"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-6-7"
    },
    "LoginInfo": {
        "username": "dmckee",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4030 Little River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rubu\u013ci",
        "stateProvince": "Pure\u0146u pag.",
        "locality": "Pure\u0146u pag.",
        "country": "LV",
        "postalCode": "LV-5745"
    }
});
db.user.insertOne(
{
    "email": "dtodd432@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Desmond",
        "lastName": "Todd",
        "phoneNumber": "+61-432-253-9678",
        "email": "dtodd432@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "-33.4549",
            "longitude": "149.6841"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-130-647-1638",
            "+61-833-838-5952"
        ],
        "secondaryEmailAddresses": [
            "dtodd@Frontier.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dtodd"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dtodd"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dtodd"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-1-3"
    },
    "LoginInfo": {
        "username": "dtodd",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "495 Green Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jeremy",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2795"
    }
});
db.user.insertOne(
{
    "email": "esilva433@Zain.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Eldridge",
        "lastName": "Silva",
        "phoneNumber": "+594-433-687-4351",
        "email": "esilva433@Zain.com",
        "GeoSpatialInfo": {
            "latitude": "5.4787",
            "longitude": "-53.2052"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-681-232-9988"
        ],
        "secondaryEmailAddresses": [
            "esilva@VimpelCom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/esilva"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/esilva"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-4-22"
    },
    "LoginInfo": {
        "username": "esilva",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6242 Short Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Iracoubo",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97350"
    }
});
db.user.insertOne(
{
    "email": "cmcintos434@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Clarence",
        "lastName": "Mcintosh",
        "phoneNumber": "+44-434-655-8038",
        "email": "cmcintos434@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "51.8922",
            "longitude": "-2.3269"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-312-566-0277",
            "+44-241-476-3776"
        ],
        "secondaryEmailAddresses": [
            "cmcintos@Ooredoo.net",
            "cmcintos@KTC.net",
            "cmcintos@Access.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-1-6"
    },
    "LoginInfo": {
        "username": "cmcintos",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5582 Green Bend Way",
        "buildingName": "Building 8F",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rudford",
        "stateProvince": "England",
        "locality": "Gloucestershire",
        "country": "GB",
        "postalCode": "GL2"
    }
});
db.user.insertOne(
{
    "email": "kbenton436@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kristian",
        "lastName": "Benton",
        "phoneNumber": "+91-436-718-9981",
        "email": "kbenton436@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "18.0773",
            "longitude": "77.9289"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-660-119-0701"
        ],
        "secondaryEmailAddresses": [
            "kbenton@Relcom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kbenton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-5-24"
    },
    "LoginInfo": {
        "username": "kbenton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6600 Red Mountain Street",
        "buildingName": "Building 51",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cheelapalli",
        "stateProvince": "Jogipet",
        "locality": "Medak",
        "country": "IN",
        "postalCode": "502271"
    }
});
db.user.insertOne(
{
    "email": "ebeltran438@Relcom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ethel",
        "lastName": "Beltran",
        "phoneNumber": "+61-438-947-3081",
        "email": "ebeltran438@Relcom.com",
        "GeoSpatialInfo": {
            "latitude": "-35.9318",
            "longitude": "147.8512"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-644-387-8652",
            "+61-716-815-9971"
        ],
        "secondaryEmailAddresses": [
            "ebeltran@Etisalat.net",
            "ebeltran@ATT.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ebeltran"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-12-16"
    },
    "LoginInfo": {
        "username": "ebeltran",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3637 Little Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ournie",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2640"
    }
});
db.user.insertOne(
{
    "email": "ltravis440@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ludie",
        "lastName": "Travis",
        "phoneNumber": "+44-440-374-7257",
        "email": "ltravis440@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "57.6746",
            "longitude": "-2.9278"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-218-118-8029",
            "+44-691-306-8180"
        ],
        "secondaryEmailAddresses": [
            "ltravis@VimpelCom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-11-21"
    },
    "LoginInfo": {
        "username": "ltravis",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7396 Big Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bauds of Cullen",
        "stateProvince": "Scotland",
        "locality": "Moray",
        "country": "GB",
        "postalCode": "AB56"
    }
});
db.user.insertOne(
{
    "email": "rspencer441@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ruby",
        "lastName": "Spencer",
        "phoneNumber": "+590-441-223-8765",
        "email": "rspencer441@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "16.0432",
            "longitude": "-61.566"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-454-339-1941"
        ],
        "secondaryEmailAddresses": [
            "rspencer@Jio.net",
            "rspencer@Telia.net",
            "rspencer@Vodafone.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-1-18"
    },
    "LoginInfo": {
        "username": "rspencer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9097 Green Creek Boulevard",
        "buildingName": "Building FC",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Capesterre-Belle-Eau",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97130"
    }
});
db.user.insertOne(
{
    "email": "bcherry442@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Britt",
        "lastName": "Cherry",
        "phoneNumber": "+91-442-109-9101",
        "email": "bcherry442@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "15.5377",
            "longitude": "73.984"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bcherry@Econnect.net",
            "bcherry@Verizon.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bcherry"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-5-6"
    },
    "LoginInfo": {
        "username": "bcherry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8333 Long Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Banastrim",
        "stateProvince": "Ponda",
        "locality": "South Goa",
        "country": "IN",
        "postalCode": "403107"
    }
});
db.user.insertOne(
{
    "email": "smosley443@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Stacy",
        "lastName": "Mosley",
        "phoneNumber": "+441624-443-479-7686",
        "email": "smosley443@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "54.3815",
            "longitude": "-4.4273"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441624-483-151-8855",
            "+441624-489-898-7120"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/smosley"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-3-27"
    },
    "LoginInfo": {
        "username": "smosley",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2225 Short Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "The Lhen",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7"
    }
});
db.user.insertOne(
{
    "email": "rshort444@Relcom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Romeo",
        "lastName": "Short",
        "phoneNumber": "+91-444-174-7867",
        "email": "rshort444@Relcom.com",
        "GeoSpatialInfo": {
            "latitude": "24.2438",
            "longitude": "72.4586"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-332-447-0466",
            "+91-11-624-7451"
        ],
        "secondaryEmailAddresses": [
            "rshort@TelecomItalia.net",
            "rshort@CUBENet.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rshort"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rshort"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-9-19"
    },
    "LoginInfo": {
        "username": "rshort",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5302 Winding Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jasapar",
        "stateProvince": "Jamjodhpur",
        "locality": "Jamnagar",
        "country": "IN",
        "postalCode": "360520"
    }
});
db.user.insertOne(
{
    "email": "rmacias445@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rosalie",
        "lastName": "Macias",
        "phoneNumber": "+81-445-458-4592",
        "email": "rmacias445@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "35.5043",
            "longitude": "139.6646"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+81-274-215-8968"
        ],
        "secondaryEmailAddresses": [
            "rmacias@Frontier.net",
            "rmacias@NordNet.net",
            "rmacias@Relcom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rmacias"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rmacias"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rmacias"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rmacias"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-8-14"
    },
    "LoginInfo": {
        "username": "rmacias",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3861 Short Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Higashiterao Higashidai",
        "stateProvince": "Tsurumi Ku",
        "locality": "Yokohama Shi",
        "country": "JP",
        "postalCode": "230-0018"
    }
});
db.user.insertOne(
{
    "email": "tolson446@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ted",
        "lastName": "Olson",
        "phoneNumber": "+1-446-283-5358",
        "email": "tolson446@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "49.2903",
            "longitude": "-122.5169"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-309-045-3998"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-5-28"
    },
    "LoginInfo": {
        "username": "tolson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7385 Green Gulch Boulevard",
        "buildingName": "Building 40",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Maple Ridge Northwest",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V4R"
    }
});
db.user.insertOne(
{
    "email": "thardy447@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tuan",
        "lastName": "Hardy",
        "phoneNumber": "+598-447-720-4067",
        "email": "thardy447@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "-34.7649",
            "longitude": "-55.2555"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+598-950-713-7779",
            "+598-730-674-3359"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/thardy"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-5-17"
    },
    "LoginInfo": {
        "username": "thardy",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7099 Red Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gerona",
        "stateProvince": "Maldonado",
        "locality": "Maldonado",
        "country": "UY",
        "postalCode": "20300"
    }
});
db.user.insertOne(
{
    "email": "jmatthew448@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jerrell",
        "lastName": "Matthews",
        "phoneNumber": "+1-448-606-8448",
        "email": "jmatthew448@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "41.0323",
            "longitude": "-76.308"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-908-027-5245"
        ],
        "secondaryEmailAddresses": [
            "jmatthew@Softbank.net",
            "jmatthew@EUnet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jmatthew"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jmatthew"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jmatthew"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1929-12-7"
    },
    "LoginInfo": {
        "username": "jmatthew",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "499 Big Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mifflinville",
        "stateProvince": "PA",
        "locality": "Columbia",
        "country": "US",
        "postalCode": "18631"
    }
});
db.user.insertOne(
{
    "email": "amercado449@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Angelo",
        "lastName": "Mercado",
        "phoneNumber": "+1671-449-240-3179",
        "email": "amercado449@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "13.4443",
            "longitude": "144.7863"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-212-193-4882"
        ],
        "secondaryEmailAddresses": [
            "amercado@LGUplus.net",
            "amercado@EUnet.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/amercado"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/amercado"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/amercado"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-12-19"
    },
    "LoginInfo": {
        "username": "amercado",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1849 Red Stream Ride",
        "buildingName": "Building B5",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dededo",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96912"
    }
});
db.user.insertOne(
{
    "email": "dmayer450@Orange.com",
    "userType": "partner",
    "businessName": "Friendly Industries Inc",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Debbie",
        "lastName": "Mayer",
        "phoneNumber": "+91-450-706-3701",
        "email": "dmayer450@Orange.com",
        "GeoSpatialInfo": {
            "latitude": "16.9857",
            "longitude": "74.1264"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-681-755-9653",
            "+91-508-048-0904"
        ],
        "secondaryEmailAddresses": [
            "dmayer@CUBENet.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-3-21"
    },
    "LoginInfo": {
        "username": "dmayer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "75 Green Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tekoli",
        "stateProvince": "Shahuwadi",
        "locality": "Kolhapur",
        "country": "IN",
        "postalCode": "416215"
    }
});
db.user.insertOne(
{
    "email": "dwells451@Jio.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dinorah",
        "lastName": "Wells",
        "phoneNumber": "+63-451-464-0361",
        "email": "dwells451@Jio.com",
        "GeoSpatialInfo": {
            "latitude": "11.7167",
            "longitude": "122.2833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+63-533-844-6260",
            "+63-952-819-7028"
        ],
        "secondaryEmailAddresses": [
            "dwells@Access.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-11-15"
    },
    "LoginInfo": {
        "username": "dwells",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5414 Winding Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Makato",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "5611"
    }
});
db.user.insertOne(
{
    "email": "kmccullo452@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kaila",
        "lastName": "Mccullough",
        "phoneNumber": "+1-452-881-1600",
        "email": "kmccullo452@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "44.3835",
            "longitude": "-64.5155"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "kmccullo@CUBENet.net",
            "kmccullo@Telecom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-12-1"
    },
    "LoginInfo": {
        "username": "kmccullo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7875 Long Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bridgewater",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B4V"
    }
});
db.user.insertOne(
{
    "email": "ggallagh453@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Graham",
        "lastName": "Gallagher",
        "phoneNumber": "+389-453-089-5008",
        "email": "ggallagh453@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "41.9672",
            "longitude": "21.5569"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+389-226-001-1034"
        ],
        "secondaryEmailAddresses": [
            "ggallagh@APICnet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ggallagh"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ggallagh"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-11-18"
    },
    "LoginInfo": {
        "username": "ggallagh",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3817 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jurumleri",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1047"
    }
});
db.user.insertOne(
{
    "email": "cbrewer454@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chas",
        "lastName": "Brewer",
        "phoneNumber": "+1-454-047-9194",
        "email": "cbrewer454@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "45.5501",
            "longitude": "-73.6992"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cbrewer@VimpelCom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cbrewer"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cbrewer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cbrewer"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-3-18"
    },
    "LoginInfo": {
        "username": "cbrewer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "208 Short Canyon Street",
        "buildingName": null,
        "floor": 20,
        "roomApartmentCondoNumber": "DC",
        "city": "Laval-des-Rapides",
        "stateProvince": "QC",
        "locality": "Laval",
        "country": "CA",
        "postalCode": "H7N"
    }
});
db.user.insertOne(
{
    "email": "vbrock455@Unicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Victorina",
        "lastName": "Brock",
        "phoneNumber": "+1787-455-359-5384",
        "email": "vbrock455@Unicom.com",
        "GeoSpatialInfo": {
            "latitude": "18.4438",
            "longitude": "-66.2596"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "vbrock@Verizon.net",
            "vbrock@Verizon.net",
            "vbrock@Millicom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vbrock"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/vbrock"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-10-25"
    },
    "LoginInfo": {
        "username": "vbrock",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5145 Long Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Toa Baja",
        "stateProvince": "Toa Baja",
        "locality": "Toa Baja",
        "country": "PR",
        "postalCode": "00951"
    }
});
db.user.insertOne(
{
    "email": "jhuffman456@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jody",
        "lastName": "Huffman",
        "phoneNumber": "+1-456-284-8813",
        "email": "jhuffman456@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "20.8559",
            "longitude": "-156.3259"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jhuffman@CUBENet.net",
            "jhuffman@TT.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jhuffman"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-12-20"
    },
    "LoginInfo": {
        "username": "jhuffman",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9003 Blue Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pukalani",
        "stateProvince": "HI",
        "locality": "Maui",
        "country": "US",
        "postalCode": "96788"
    }
});
db.user.insertOne(
{
    "email": "dlawrenc457@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Delcie",
        "lastName": "Lawrence",
        "phoneNumber": "+385-457-247-1791",
        "email": "dlawrenc457@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "45.2579",
            "longitude": "13.8993"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dlawrenc"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/dlawrenc"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dlawrenc"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-5-1"
    },
    "LoginInfo": {
        "username": "dlawrenc",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "241 Winding Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kukci",
        "stateProvince": "Nova Vas",
        "locality": "Nova Vas",
        "country": "HR",
        "postalCode": "52446"
    }
});
db.user.insertOne(
{
    "email": "eguevara458@LGUplus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ed",
        "lastName": "Guevara",
        "phoneNumber": "+61-458-271-3634",
        "email": "eguevara458@LGUplus.com",
        "GeoSpatialInfo": {
            "latitude": "-34.1127",
            "longitude": "137.6609"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-259-775-4174",
            "+61-13-637-2291"
        ],
        "secondaryEmailAddresses": [
            "eguevara@Telecom.net",
            "eguevara@Access.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/eguevara"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-4-14"
    },
    "LoginInfo": {
        "username": "eguevara",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4260 Red Ridge Street",
        "buildingName": null,
        "floor": 19,
        "roomApartmentCondoNumber": null,
        "city": "Kooroona",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5558"
    }
});
db.user.insertOne(
{
    "email": "sbeil459@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sherwood",
        "lastName": "Beil",
        "phoneNumber": "+880-459-477-7209",
        "email": "sbeil459@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "25.0833",
            "longitude": "90.0195"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+880-290-623-0983"
        ],
        "secondaryEmailAddresses": [
            "sbeil@Sprint.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sbeil"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/sbeil"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-1-10"
    },
    "LoginInfo": {
        "username": "sbeil",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9765 Long Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nalitabari",
        "stateProvince": "H",
        "locality": "Sherpur",
        "country": "BD",
        "postalCode": "2110"
    }
});
db.user.insertOne(
{
    "email": "tharmon460@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Trang",
        "lastName": "Harmon",
        "phoneNumber": "+91-460-271-4187",
        "email": "tharmon460@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "18.5167",
            "longitude": "73.9167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tharmon"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-5-4"
    },
    "LoginInfo": {
        "username": "tharmon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4986 Short River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sasanenagar",
        "stateProvince": "Pune City",
        "locality": "Pune",
        "country": "IN",
        "postalCode": "411028"
    }
});
db.user.insertOne(
{
    "email": "lhoffman461@TT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lena",
        "lastName": "Hoffman",
        "phoneNumber": "+57-461-131-1766",
        "email": "lhoffman461@TT.com",
        "GeoSpatialInfo": {
            "latitude": "4.9788",
            "longitude": "-74.2927"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+57-283-471-8015"
        ],
        "secondaryEmailAddresses": [
            "lhoffman@CCI.net",
            "lhoffman@Telekom.net",
            "lhoffman@Millicom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lhoffman"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lhoffman"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-11-14"
    },
    "LoginInfo": {
        "username": "lhoffman",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6363 Red Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "A8",
        "city": "San Francisco",
        "stateProvince": "San Francisco",
        "locality": "San Francisco",
        "country": "CO",
        "postalCode": "253607"
    }
});
db.user.insertOne(
{
    "email": "awhite462@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Athena",
        "lastName": "White",
        "phoneNumber": "+61-462-456-1567",
        "email": "awhite462@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "-31.9191",
            "longitude": "116.0812"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-294-619-3140",
            "+61-528-167-1461"
        ],
        "secondaryEmailAddresses": [
            "awhite@Rogers.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-4-6"
    },
    "LoginInfo": {
        "username": "awhite",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2016 Green Gulch Street",
        "buildingName": null,
        "floor": 13,
        "roomApartmentCondoNumber": "36",
        "city": "Darlington",
        "stateProvince": "WA",
        "locality": "STIRLING",
        "country": "AU",
        "postalCode": "6070"
    }
});
db.user.insertOne(
{
    "email": "lsummers463@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Louvenia",
        "lastName": "Summers",
        "phoneNumber": "+596-463-196-0776",
        "email": "lsummers463@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "14.6089",
            "longitude": "-61.0733"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+596-415-253-8603",
            "+596-692-852-8772"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lsummers"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lsummers"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lsummers"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-9-21"
    },
    "LoginInfo": {
        "username": "lsummers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9696 Green Hill Avenue",
        "buildingName": null,
        "floor": 3,
        "roomApartmentCondoNumber": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97256 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "lbean464@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lillia",
        "lastName": "Bean",
        "phoneNumber": "+1-464-114-6541",
        "email": "lbean464@UI.com",
        "GeoSpatialInfo": {
            "latitude": "32.156",
            "longitude": "-81.9337"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-120-004-0506",
            "+1-538-215-8083"
        ],
        "secondaryEmailAddresses": [
            "lbean@Orange.net",
            "lbean@BCE.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lbean"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lbean"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-12-13"
    },
    "LoginInfo": {
        "username": "lbean",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "716 Red Tree Drive",
        "buildingName": null,
        "floor": 13,
        "roomApartmentCondoNumber": null,
        "city": "Hagan",
        "stateProvince": "GA",
        "locality": "Evans",
        "country": "US",
        "postalCode": "30429"
    }
});
db.user.insertOne(
{
    "email": "kfarmer465@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Karin",
        "lastName": "Farmer",
        "phoneNumber": "+1441-465-679-7013",
        "email": "kfarmer465@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "32.2934",
            "longitude": "-64.8683"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1441-881-116-1267"
        ],
        "secondaryEmailAddresses": [
            "kfarmer@Telefonica.net",
            "kfarmer@Movil.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kfarmer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kfarmer"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-3-20"
    },
    "LoginInfo": {
        "username": "kfarmer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8895 Little Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sandys",
        "stateProvince": "Sandys Parish",
        "locality": "Sandys Parish",
        "country": "BM",
        "postalCode": "MA 02"
    }
});
db.user.insertOne(
{
    "email": "tcuevas466@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tonita",
        "lastName": "Cuevas",
        "phoneNumber": "+91-466-893-0935",
        "email": "tcuevas466@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "21.4279",
            "longitude": "69.9417"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-545-715-0983"
        ],
        "secondaryEmailAddresses": [
            "tcuevas@Ooredoo.net",
            "tcuevas@cerist.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tcuevas"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-9-20"
    },
    "LoginInfo": {
        "username": "tcuevas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6540 Big Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bhetakadi",
        "stateProvince": "Porbandar",
        "locality": "Porbandar",
        "country": "IN",
        "postalCode": "360590"
    }
});
db.user.insertOne(
{
    "email": "jramsey467@Econnect.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jordan",
        "lastName": "Ramsey",
        "phoneNumber": "+1671-467-383-2476",
        "email": "jramsey467@Econnect.com",
        "GeoSpatialInfo": {
            "latitude": "13.3633",
            "longitude": "144.7102"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/jramsey"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jramsey"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jramsey"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-12-22"
    },
    "LoginInfo": {
        "username": "jramsey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5240 Big Woods Avenue",
        "buildingName": "Building BF",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Santa Rita",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96915"
    }
});
db.user.insertOne(
{
    "email": "kmccall468@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Karyl",
        "lastName": "Mccall",
        "phoneNumber": "+61-468-357-9804",
        "email": "kmccall468@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "-30.5712",
            "longitude": "151.9045"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-644-756-2452"
        ],
        "secondaryEmailAddresses": [
            "kmccall@NetCom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kmccall"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kmccall"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kmccall"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kmccall"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-9-19"
    },
    "LoginInfo": {
        "username": "kmccall",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1816 Red Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hillgrove",
        "stateProvince": "NSW",
        "locality": "NSW NORTH COAST",
        "country": "AU",
        "postalCode": "2350"
    }
});
db.user.insertOne(
{
    "email": "bestrada469@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Buddy",
        "lastName": "Estrada",
        "phoneNumber": "+64-469-392-1965",
        "email": "bestrada469@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "-41.297",
            "longitude": "174.7936"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-171-795-0107",
            "+64-906-059-2498"
        ],
        "secondaryEmailAddresses": [
            "bestrada@NTT.net",
            "bestrada@SingTel.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bestrada"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bestrada"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-12-28"
    },
    "LoginInfo": {
        "username": "bestrada",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8094 Short Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mount Victoria",
        "stateProvince": "G2",
        "locality": "Wellington",
        "country": "NZ",
        "postalCode": "6148"
    }
});
db.user.insertOne(
{
    "email": "nbarnett470@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nicholle",
        "lastName": "Barnett",
        "phoneNumber": "+91-470-791-3004",
        "email": "nbarnett470@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "24.0795",
            "longitude": "85.5093"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-30-109-9520"
        ],
        "secondaryEmailAddresses": [
            "nbarnett@Telecom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nbarnett"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/nbarnett"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nbarnett"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-6-13"
    },
    "LoginInfo": {
        "username": "nbarnett",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "284 Long Hill Ride",
        "buildingName": "Building CE",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Arwara",
        "stateProvince": "Bagodar",
        "locality": "Giridh",
        "country": "IN",
        "postalCode": "825322"
    }
});
db.user.insertOne(
{
    "email": "cleblanc471@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cory",
        "lastName": "Leblanc",
        "phoneNumber": "+596-471-645-9379",
        "email": "cleblanc471@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "14.6089",
            "longitude": "-61.0733"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cleblanc@CCS.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cleblanc"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-11-7"
    },
    "LoginInfo": {
        "username": "cleblanc",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1981 Blue Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97252 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "ebruce472@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elina",
        "lastName": "Bruce",
        "phoneNumber": "+61-472-736-8158",
        "email": "ebruce472@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "-30.75",
            "longitude": "121.4833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-136-579-4964",
            "+61-927-576-8588",
            "+61-290-888-6327"
        ],
        "secondaryEmailAddresses": [
            "ebruce@Oi.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ebruce"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ebruce"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-1-28"
    },
    "LoginInfo": {
        "username": "ebruce",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8775 Little Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Williamstown",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6430"
    }
});
db.user.insertOne(
{
    "email": "krivas473@Softbank.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kenia",
        "lastName": "Rivas",
        "phoneNumber": "+373-473-124-1190",
        "email": "krivas473@Softbank.com",
        "GeoSpatialInfo": {
            "latitude": "46.6161",
            "longitude": "28.4156"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+373-90-439-8171"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/krivas"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/krivas"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-12-6"
    },
    "LoginInfo": {
        "username": "krivas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1050 Big Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Victoria",
        "stateProvince": "Leova",
        "locality": "Leova",
        "country": "MD",
        "postalCode": "MD-6326"
    }
});
db.user.insertOne(
{
    "email": "rrios474@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Reinaldo",
        "lastName": "Rios",
        "phoneNumber": "+91-474-314-6007",
        "email": "rrios474@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "24.0237",
            "longitude": "87.9259"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-793-772-8247",
            "+91-432-291-3053"
        ],
        "secondaryEmailAddresses": [
            "rrios@VimpelCom.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rrios"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rrios"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-5-23"
    },
    "LoginInfo": {
        "username": "rrios",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5086 Blue River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kunia",
        "stateProvince": "Murshidabad",
        "locality": "Murshidabad",
        "country": "IN",
        "postalCode": "742168"
    }
});
db.user.insertOne(
{
    "email": "shamilto475@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shad",
        "lastName": "Hamilton",
        "phoneNumber": "+353-475-398-8264",
        "email": "shamilto475@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "53.1969",
            "longitude": "-8.5669"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+353-116-762-9412"
        ],
        "secondaryEmailAddresses": [
            "shamilto@MTN.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/shamilto"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/shamilto"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-3-11"
    },
    "LoginInfo": {
        "username": "shamilto",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7992 Long Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Loughrea",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "H62"
    }
});
db.user.insertOne(
{
    "email": "enovak476@Oi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Eldon",
        "lastName": "Novak",
        "phoneNumber": "+44-476-356-2708",
        "email": "enovak476@Oi.com",
        "GeoSpatialInfo": {
            "latitude": "50.145",
            "longitude": "-5.1094"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-789-546-2257"
        ],
        "secondaryEmailAddresses": [
            "enovak@Jio.net",
            "enovak@Sprint.net",
            "enovak@Frontier.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/enovak"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1993-8-17"
    },
    "LoginInfo": {
        "username": "enovak",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8688 Short Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mawnan Smith",
        "stateProvince": "England",
        "locality": "Cornwall",
        "country": "GB",
        "postalCode": "TR11"
    }
});
db.user.insertOne(
{
    "email": "vrollins477@TelecomItalia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vernon",
        "lastName": "Rollins",
        "phoneNumber": "+7-477-483-3445",
        "email": "vrollins477@TelecomItalia.com",
        "GeoSpatialInfo": {
            "latitude": "51.8473",
            "longitude": "38.0504"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-919-947-3284"
        ],
        "secondaryEmailAddresses": [
            "vrollins@Ooredoo.net",
            "vrollins@MTN.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vrollins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-8-10"
    },
    "LoginInfo": {
        "username": "vrollins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4905 Long Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041a\u0430\u0437\u0430\u043d\u043a\u0430-\u0412\u0442\u043e\u0440\u0430\u044f",
        "stateProvince": "\u0417\u041e\u041b\u041e\u0422\u0423\u0425\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0417\u041e\u041b\u041e\u0422\u0423\u0425\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "306035"
    }
});
db.user.insertOne(
{
    "email": "cponce478@MaxComm.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chantay",
        "lastName": "Ponce",
        "phoneNumber": "+44-478-900-3571",
        "email": "cponce478@MaxComm.com",
        "GeoSpatialInfo": {
            "latitude": "53.514",
            "longitude": "-1.4793"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cponce@Jio.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cponce"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cponce"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-2-20"
    },
    "LoginInfo": {
        "username": "cponce",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1036 Long Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Birdwell",
        "stateProvince": "England",
        "locality": "South Yorkshire",
        "country": "GB",
        "postalCode": "S70"
    }
});
db.user.insertOne(
{
    "email": "mfarmer479@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Maragaret",
        "lastName": "Farmer",
        "phoneNumber": "+48-479-706-1127",
        "email": "mfarmer479@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "52.4919",
            "longitude": "19.236"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+48-868-059-5703",
            "+48-16-747-3003",
            "+48-713-194-3876"
        ],
        "secondaryEmailAddresses": [
            "mfarmer@Orstom.net",
            "mfarmer@GlasNET.net",
            "mfarmer@Orstom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-7-28"
    },
    "LoginInfo": {
        "username": "mfarmer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7781 Little Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Baruchowo",
        "stateProvince": "Baruchowo",
        "locality": "Powiat w\u0142oc\u0142awski",
        "country": "PL",
        "postalCode": "87-821"
    }
});
db.user.insertOne(
{
    "email": "spoole480@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Santo",
        "lastName": "Poole",
        "phoneNumber": "+91-480-258-4842",
        "email": "spoole480@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "12.6669",
            "longitude": "80.1448"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-598-744-7845"
        ],
        "secondaryEmailAddresses": [
            "spoole@AIS.net",
            "spoole@TT.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-10-17"
    },
    "LoginInfo": {
        "username": "spoole",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4924 Short Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saravanapakkam",
        "stateProvince": "Tirukkoyilur",
        "locality": "Villupuram",
        "country": "IN",
        "postalCode": "607209"
    }
});
db.user.insertOne(
{
    "email": "wmaynard481@Relcom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ward",
        "lastName": "Maynard",
        "phoneNumber": "+45-481-320-4281",
        "email": "wmaynard481@Relcom.com",
        "GeoSpatialInfo": {
            "latitude": "55.6759",
            "longitude": "12.5655"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+45-888-505-1731"
        ],
        "secondaryEmailAddresses": [
            "wmaynard@Orstom.net",
            "wmaynard@Access.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/wmaynard"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wmaynard"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wmaynard"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-4-6"
    },
    "LoginInfo": {
        "username": "wmaynard",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1369 Little River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "K\u00f8benhavn V",
        "stateProvince": "K\u00f8benhavns Kommune",
        "locality": "K\u00f8benhavns Kommune",
        "country": "DK",
        "postalCode": "1675"
    }
});
db.user.insertOne(
{
    "email": "sbarajas482@Econnect.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sherwood",
        "lastName": "Barajas",
        "phoneNumber": "+44-482-696-0768",
        "email": "sbarajas482@Econnect.com",
        "GeoSpatialInfo": {
            "latitude": "51.2725",
            "longitude": "-2.3711"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-808-753-6367"
        ],
        "secondaryEmailAddresses": [
            "sbarajas@Softbank.net",
            "sbarajas@Verizon.net",
            "sbarajas@EUnet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sbarajas"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sbarajas"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sbarajas"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-8-13"
    },
    "LoginInfo": {
        "username": "sbarajas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7991 Big Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hardington",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "BA11"
    }
});
db.user.insertOne(
{
    "email": "mmcmilla483@LookData.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Marquis",
        "lastName": "Mcmillan",
        "phoneNumber": "+60-483-773-8567",
        "email": "mmcmilla483@LookData.com",
        "GeoSpatialInfo": {
            "latitude": "3.1331",
            "longitude": "101.4207"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+60-909-203-8422"
        ],
        "secondaryEmailAddresses": [
            "mmcmilla@Unicom.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmcmilla"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-12-29"
    },
    "LoginInfo": {
        "username": "mmcmilla",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8677 Short Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kapar",
        "stateProvince": "SGR",
        "locality": "Selangor",
        "country": "MY",
        "postalCode": "42200"
    }
});
db.user.insertOne(
{
    "email": "rcallaha484@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rosita",
        "lastName": "Callahan",
        "phoneNumber": "+44-484-463-5705",
        "email": "rcallaha484@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "53.4042",
            "longitude": "-1.431"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-356-540-9117",
            "+44-536-842-4978",
            "+44-242-516-4798"
        ],
        "secondaryEmailAddresses": [
            "rcallaha@Telecom.net",
            "rcallaha@GreenNet.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rcallaha"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rcallaha"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-11-26"
    },
    "LoginInfo": {
        "username": "rcallaha",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8255 Long Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sheffield",
        "stateProvince": "England",
        "locality": "South Yorkshire",
        "country": "GB",
        "postalCode": "S99"
    }
});
db.user.insertOne(
{
    "email": "kwebb485@TelecomItalia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kevin",
        "lastName": "Webb",
        "phoneNumber": "+420-485-089-5420",
        "email": "kwebb485@TelecomItalia.com",
        "GeoSpatialInfo": {
            "latitude": "50.1667",
            "longitude": "14.1667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+420-332-815-2276",
            "+420-574-383-9822"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kwebb"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kwebb"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-4-26"
    },
    "LoginInfo": {
        "username": "kwebb",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "151 Big River Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Vrapice",
        "stateProvince": "Kladno",
        "locality": "Kladno",
        "country": "CZ",
        "postalCode": "272 03"
    }
});
db.user.insertOne(
{
    "email": "kroy486@EUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Karolyn",
        "lastName": "Roy",
        "phoneNumber": "+44-486-988-8606",
        "email": "kroy486@EUnet.com",
        "GeoSpatialInfo": {
            "latitude": "53.2787",
            "longitude": "-4.5278"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "kroy@AIS.net",
            "kroy@Vivendi.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kroy"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kroy"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kroy"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kroy"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-2-8"
    },
    "LoginInfo": {
        "username": "kroy",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9363 Long Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Elim",
        "stateProvince": "Wales",
        "locality": "Isle of Anglesey",
        "country": "GB",
        "postalCode": "LL65"
    }
});
db.user.insertOne(
{
    "email": "dsutton487@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Deane",
        "lastName": "Sutton",
        "phoneNumber": "+356-487-771-3124",
        "email": "dsutton487@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "35.8878",
            "longitude": "14.5169"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+356-386-313-8450",
            "+356-733-519-0460",
            "+356-320-859-6423"
        ],
        "secondaryEmailAddresses": [
            "dsutton@BCE.net",
            "dsutton@Airtel.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dsutton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-12-9"
    },
    "LoginInfo": {
        "username": "dsutton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6895 Little River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Isla",
        "stateProvince": "L-Isla",
        "locality": "L-Isla",
        "country": "MT",
        "postalCode": "ISL"
    }
});
db.user.insertOne(
{
    "email": "mgray488@Optus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Masako",
        "lastName": "Gray",
        "phoneNumber": "+1-488-807-9645",
        "email": "mgray488@Optus.com",
        "GeoSpatialInfo": {
            "latitude": "43.6075",
            "longitude": "-79.5013"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-976-492-9923"
        ],
        "secondaryEmailAddresses": [
            "mgray@MaxComm.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mgray"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mgray"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-8-2"
    },
    "LoginInfo": {
        "username": "mgray",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9668 Winding Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Etobicoke (New Toronto \/ Mimico South \/ Humber Bay Shores)",
        "stateProvince": "ON",
        "locality": "Toronto",
        "country": "CA",
        "postalCode": "M8V"
    }
});
db.user.insertOne(
{
    "email": "sbenitez489@TeleSystems.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Stephen",
        "lastName": "Benitez",
        "phoneNumber": "+1-489-426-9611",
        "email": "sbenitez489@TeleSystems.com",
        "GeoSpatialInfo": {
            "latitude": "45.4062",
            "longitude": "-73.9456"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-773-810-1223"
        ],
        "secondaryEmailAddresses": [
            "sbenitez@Swisscom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sbenitez"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/sbenitez"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-2-26"
    },
    "LoginInfo": {
        "username": "sbenitez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7961 Big Mound Road",
        "buildingName": null,
        "floor": 19,
        "roomApartmentCondoNumber": null,
        "city": "Sainte-Anne-De-Bellevue",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H9X"
    }
});
db.user.insertOne(
{
    "email": "wblancha490@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Winifred",
        "lastName": "Blanchard",
        "phoneNumber": "+1-490-716-2804",
        "email": "wblancha490@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "36.2918",
            "longitude": "-78.9353"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-842-226-2912"
        ],
        "secondaryEmailAddresses": [
            "wblancha@Vodafone.net",
            "wblancha@Telus.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/wblancha"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-4-16"
    },
    "LoginInfo": {
        "username": "wblancha",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9740 Big Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "D5",
        "city": "Timberlake",
        "stateProvince": "NC",
        "locality": "Person",
        "country": "US",
        "postalCode": "27583"
    }
});
db.user.insertOne(
{
    "email": "apadilla492@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Amanda",
        "lastName": "Padilla",
        "phoneNumber": "+91-492-423-0490",
        "email": "apadilla492@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "23.5367",
            "longitude": "87.9884"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-375-040-8582"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/apadilla"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/apadilla"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-6-8"
    },
    "LoginInfo": {
        "username": "apadilla",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9832 Long Bend Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Reora Gopalpur",
        "stateProvince": "Memari",
        "locality": "Bardhaman",
        "country": "IN",
        "postalCode": "713166"
    }
});
db.user.insertOne(
{
    "email": "dcervant493@Econnect.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Doyle",
        "lastName": "Cervantes",
        "phoneNumber": "+41-493-738-0445",
        "email": "dcervant493@Econnect.com",
        "GeoSpatialInfo": {
            "latitude": "47.2522",
            "longitude": "8.0422"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-905-418-2564",
            "+41-323-257-4010",
            "+41-850-124-3750"
        ],
        "secondaryEmailAddresses": [
            "dcervant@GlasNET.net",
            "dcervant@MTN.net",
            "dcervant@OpenWorld.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dcervant"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dcervant"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-6-14"
    },
    "LoginInfo": {
        "username": "dcervant",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6134 Long Mound Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Reitnau",
        "stateProvince": "AG",
        "locality": "Bezirk Zofingen",
        "country": "CH",
        "postalCode": "5057"
    }
});
db.user.insertOne(
{
    "email": "uvillalo494@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ulrike",
        "lastName": "Villalobos",
        "phoneNumber": "+61-494-377-9917",
        "email": "uvillalo494@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "-33.8066",
            "longitude": "151.2624"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "uvillalo@Etisalat.net",
            "uvillalo@CUBENet.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/uvillalo"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-11-30"
    },
    "LoginInfo": {
        "username": "uvillalo",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6509 Long Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Balgowlah Heights",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2093"
    }
});
db.user.insertOne(
{
    "email": "pmclean495@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Pat",
        "lastName": "Mclean",
        "phoneNumber": "+47-495-548-2726",
        "email": "pmclean495@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "59.6995",
            "longitude": "5.4724"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-227-144-1724",
            "+47-816-690-3890"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-6-4"
    },
    "LoginInfo": {
        "username": "pmclean",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9691 Blue Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Valev\u00e5g",
        "stateProvince": "Sveio",
        "locality": "Sveio",
        "country": "NO",
        "postalCode": "5554"
    }
});
db.user.insertOne(
{
    "email": "gclarke496@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Greta",
        "lastName": "Clarke",
        "phoneNumber": "+61-496-169-7222",
        "email": "gclarke496@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "-12.6978",
            "longitude": "130.8459"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-813-179-2663",
            "+61-949-732-3336"
        ],
        "secondaryEmailAddresses": [
            "gclarke@AlgoNet.net",
            "gclarke@BT.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gclarke"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/gclarke"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-3-25"
    },
    "LoginInfo": {
        "username": "gclarke",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1492 Green Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lake Bennett",
        "stateProvince": "NT",
        "locality": "Northern Territory",
        "country": "AU",
        "postalCode": "0822"
    }
});
db.user.insertOne(
{
    "email": "lmcphers497@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lauralee",
        "lastName": "Mcpherson",
        "phoneNumber": "+370-497-891-6685",
        "email": "lmcphers497@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "55.35",
            "longitude": "23.9"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lmcphers"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-11-10"
    },
    "LoginInfo": {
        "username": "lmcphers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4596 Little Mound Drive",
        "buildingName": null,
        "floor": 4,
        "roomApartmentCondoNumber": null,
        "city": "Noreiki\u0173 k.",
        "stateProvince": "K\u0117daini\u0173 r. sav.",
        "locality": "K\u0117daini\u0173 r. sav.",
        "country": "LT",
        "postalCode": "58057"
    }
});
db.user.insertOne(
{
    "email": "afrye498@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Aundrea",
        "lastName": "Frye",
        "phoneNumber": "+91-498-425-6574",
        "email": "afrye498@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "24.8306",
            "longitude": "92.803"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "afrye@TelecomItalia.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/afrye"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-11-15"
    },
    "LoginInfo": {
        "username": "afrye",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7900 Winding Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bharakhai",
        "stateProvince": "NA",
        "locality": "Cachar",
        "country": "IN",
        "postalCode": "788010"
    }
});
db.user.insertOne(
{
    "email": "ewalton500@Telia.com",
    "userType": "partner",
    "businessName": "Friendly Industries Inc",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elza",
        "lastName": "Walton",
        "phoneNumber": "+44-500-099-3131",
        "email": "ewalton500@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "52.1969",
            "longitude": "0.1429"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "ewalton@Telia.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ewalton"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ewalton"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ewalton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-7-10"
    },
    "LoginInfo": {
        "username": "ewalton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4038 Red Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E5",
        "city": "Lark Hall",
        "stateProvince": "England",
        "locality": "Cambridgeshire",
        "country": "GB",
        "postalCode": "CB1"
    }
});
db.user.insertOne(
{
    "email": "frobinso501@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Fonda",
        "lastName": "Robinson",
        "phoneNumber": "+1809-501-479-9538",
        "email": "frobinso501@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "18.5167",
            "longitude": "-69.85"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "frobinso@TT.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/frobinso"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-10-23"
    },
    "LoginInfo": {
        "username": "frobinso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "752 Winding Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cancino",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11516"
    }
});
db.user.insertOne(
{
    "email": "mtrevino502@MegaFon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mickey",
        "lastName": "Trevino",
        "phoneNumber": "+1-502-972-9375",
        "email": "mtrevino502@MegaFon.com",
        "GeoSpatialInfo": {
            "latitude": "39.9347",
            "longitude": "-86.1633"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mtrevino@Safaricom.net",
            "mtrevino@Safaricom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mtrevino"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-4-19"
    },
    "LoginInfo": {
        "username": "mtrevino",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5308 Blue Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "48",
        "city": "Indianapolis",
        "stateProvince": "IN",
        "locality": "Hamilton",
        "country": "US",
        "postalCode": "46290"
    }
});
db.user.insertOne(
{
    "email": "ipalacio503@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ina",
        "lastName": "Palacios",
        "phoneNumber": "+41-503-383-9506",
        "email": "ipalacio503@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "46.7779",
            "longitude": "9.6762"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ipalacio"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-7-14"
    },
    "LoginInfo": {
        "username": "ipalacio",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7636 Little Stream Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "1B",
        "city": "Arosa",
        "stateProvince": "GR",
        "locality": "Region Plessur",
        "country": "CH",
        "postalCode": "7050"
    }
});
db.user.insertOne(
{
    "email": "dberger504@Softbank.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dimple",
        "lastName": "Berger",
        "phoneNumber": "+91-504-056-8645",
        "email": "dberger504@Softbank.com",
        "GeoSpatialInfo": {
            "latitude": "18.5152",
            "longitude": "83.976"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dberger"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-11-20"
    },
    "LoginInfo": {
        "username": "dberger",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9173 Little River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Yalamanchili",
        "stateProvince": "Jalumuru",
        "locality": "Srikakulam",
        "country": "IN",
        "postalCode": "532427"
    }
});
db.user.insertOne(
{
    "email": "mdunn505@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Malcolm",
        "lastName": "Dunn",
        "phoneNumber": "+1441-505-869-0695",
        "email": "mdunn505@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "32.3002",
            "longitude": "-64.792"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1441-74-997-6215",
            "+1441-354-406-5230"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mdunn"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mdunn"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-12-2"
    },
    "LoginInfo": {
        "username": "mdunn",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8256 Red Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pembroke",
        "stateProvince": "Pembroke Parish",
        "locality": "Pembroke Parish",
        "country": "BM",
        "postalCode": "HM 04"
    }
});
db.user.insertOne(
{
    "email": "bfisher506@Unicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Barney",
        "lastName": "Fisher",
        "phoneNumber": "+91-506-225-1557",
        "email": "bfisher506@Unicom.com",
        "GeoSpatialInfo": {
            "latitude": "14.2226",
            "longitude": "76.4004"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bfisher@NetCom.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bfisher"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-9-10"
    },
    "LoginInfo": {
        "username": "bfisher",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7653 Blue Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chikkagondanahally",
        "stateProvince": "Chitradurga",
        "locality": "Chitradurga",
        "country": "IN",
        "postalCode": "577502"
    }
});
db.user.insertOne(
{
    "email": "xblackwe507@MegaFon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Xavier",
        "lastName": "Blackwell",
        "phoneNumber": "+61-507-743-0090",
        "email": "xblackwe507@MegaFon.com",
        "GeoSpatialInfo": {
            "latitude": "-28.1909",
            "longitude": "153.4504"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "xblackwe@Orange.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/xblackwe"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/xblackwe"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-4-15"
    },
    "LoginInfo": {
        "username": "xblackwe",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6277 Red Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "9A",
        "city": "Piggabeen",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2486"
    }
});
db.user.insertOne(
{
    "email": "thinton508@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tran",
        "lastName": "Hinton",
        "phoneNumber": "+1-508-325-3659",
        "email": "thinton508@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "45.5334",
            "longitude": "-73.2825"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "thinton@Rogers.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/thinton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-11-1"
    },
    "LoginInfo": {
        "username": "thinton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4269 Short Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "CF",
        "city": "Saint-Basile-Le-Grand",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "J3N"
    }
});
db.user.insertOne(
{
    "email": "rreeves509@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rich",
        "lastName": "Reeves",
        "phoneNumber": "+441624-509-207-3277",
        "email": "rreeves509@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "54.3815",
            "longitude": "-4.4273"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441624-525-319-4898",
            "+441624-738-226-3929"
        ],
        "secondaryEmailAddresses": [
            "rreeves@Telia.net",
            "rreeves@Telefonica.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rreeves"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/rreeves"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rreeves"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-11-8"
    },
    "LoginInfo": {
        "username": "rreeves",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6771 Red Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Andreas",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM7"
    }
});
db.user.insertOne(
{
    "email": "wrussell510@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Willie",
        "lastName": "Russell",
        "phoneNumber": "+44-510-696-4917",
        "email": "wrussell510@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "52.2085",
            "longitude": "0.4175"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-902-594-5510",
            "+44-929-035-3501",
            "+44-285-271-2615"
        ],
        "secondaryEmailAddresses": [
            "wrussell@GreenNet.net",
            "wrussell@Telkom.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/wrussell"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-12-22"
    },
    "LoginInfo": {
        "username": "wrussell",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3601 Winding Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Burrough End",
        "stateProvince": "England",
        "locality": "Cambridgeshire",
        "country": "GB",
        "postalCode": "CB8"
    }
});
db.user.insertOne(
{
    "email": "dorr511@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Darnell",
        "lastName": "Orr",
        "phoneNumber": "+61-511-319-4193",
        "email": "dorr511@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "-37.8152",
            "longitude": "144.9632"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-449-941-4481",
            "+61-671-742-1901"
        ],
        "secondaryEmailAddresses": [
            "dorr@KTC.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dorr"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-3-26"
    },
    "LoginInfo": {
        "username": "dorr",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5245 Long River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "World Trade Centre",
        "stateProvince": "VIC",
        "locality": "MELBOURNE CITY",
        "country": "AU",
        "postalCode": "3005"
    }
});
db.user.insertOne(
{
    "email": "mthomas512@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Maisie",
        "lastName": "Thomas",
        "phoneNumber": "+1-512-551-1812",
        "email": "mthomas512@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "34.09",
            "longitude": "-118.2944"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-840-588-7072",
            "+1-450-413-7988",
            "+1-994-661-6114"
        ],
        "secondaryEmailAddresses": [
            "mthomas@Sprint.net",
            "mthomas@WorldNet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mthomas"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mthomas"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mthomas"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-6-19"
    },
    "LoginInfo": {
        "username": "mthomas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "569 Red Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Los Angeles",
        "stateProvince": "CA",
        "locality": "Los Angeles",
        "country": "US",
        "postalCode": "90029"
    }
});
db.user.insertOne(
{
    "email": "cpeck513@Telkom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carlotta",
        "lastName": "Peck",
        "phoneNumber": "+40-513-239-2932",
        "email": "cpeck513@Telkom.com",
        "GeoSpatialInfo": {
            "latitude": "44.4914",
            "longitude": "26.0602"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+40-218-177-8851"
        ],
        "secondaryEmailAddresses": [
            "cpeck@BCE.net",
            "cpeck@NTT.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cpeck"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-1-25"
    },
    "LoginInfo": {
        "username": "cpeck",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9711 Short Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bucure\u015fti 2",
        "stateProvince": "Sector 1",
        "locality": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "011376"
    }
});
db.user.insertOne(
{
    "email": "dharmon514@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Doris",
        "lastName": "Harmon",
        "phoneNumber": "+61-514-342-1574",
        "email": "dharmon514@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "-33.8814",
            "longitude": "151.18"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-548-525-2350",
            "+61-767-659-0279",
            "+61-966-312-4732"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dharmon"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-11-5"
    },
    "LoginInfo": {
        "username": "dharmon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7055 Red Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Forest Lodge",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2037"
    }
});
db.user.insertOne(
{
    "email": "jbaxter516@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Joy",
        "lastName": "Baxter",
        "phoneNumber": "+1-516-544-5315",
        "email": "jbaxter516@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "46.8528",
            "longitude": "-71.2573"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-77-268-9061"
        ],
        "secondaryEmailAddresses": [
            "jbaxter@Unicom.net",
            "jbaxter@Vodafone.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-9-12"
    },
    "LoginInfo": {
        "username": "jbaxter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1442 Winding Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Charlesbourg South",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "G1H"
    }
});
db.user.insertOne(
{
    "email": "lsmall517@Unicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lupe",
        "lastName": "Small",
        "phoneNumber": "+64-517-427-7038",
        "email": "lsmall517@Unicom.com",
        "GeoSpatialInfo": {
            "latitude": "-35.5167",
            "longitude": "174.1833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-487-248-4788"
        ],
        "secondaryEmailAddresses": [
            "lsmall@Telia.net",
            "lsmall@KTC.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-7-18"
    },
    "LoginInfo": {
        "username": "lsmall",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2918 Little Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hukerenui",
        "stateProvince": "F6",
        "locality": "Northland",
        "country": "NZ",
        "postalCode": "0182"
    }
});
db.user.insertOne(
{
    "email": "vflynn518@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Velvet",
        "lastName": "Flynn",
        "phoneNumber": "+44-518-755-1813",
        "email": "vflynn518@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "52.4573",
            "longitude": "-1.5581"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "vflynn@APICnet.net",
            "vflynn@Orange.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vflynn"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-5-8"
    },
    "LoginInfo": {
        "username": "vflynn",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5653 Big Ridge Ride",
        "buildingName": "Building C9",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Old Arley",
        "stateProvince": "England",
        "locality": "Warwickshire",
        "country": "GB",
        "postalCode": "CV7"
    }
});
db.user.insertOne(
{
    "email": "amcdonal519@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Andrea",
        "lastName": "Mcdonald",
        "phoneNumber": "+1809-519-397-9579",
        "email": "amcdonal519@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "18.45",
            "longitude": "-69.9833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/amcdonal"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/amcdonal"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/amcdonal"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-9-9"
    },
    "LoginInfo": {
        "username": "amcdonal",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3468 Little Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "El Abanico de Herrera",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10904"
    }
});
db.user.insertOne(
{
    "email": "vrojas520@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Von",
        "lastName": "Rojas",
        "phoneNumber": "+1-520-979-9771",
        "email": "vrojas520@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "49.7838",
            "longitude": "-97.0973"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-803-413-8308"
        ],
        "secondaryEmailAddresses": [
            "vrojas@TelecomItalia.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/vrojas"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-6-5"
    },
    "LoginInfo": {
        "username": "vrojas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3838 Short Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Winnipeg (St. Vital SW)",
        "stateProvince": "MB",
        "locality": "Winnipeg",
        "country": "CA",
        "postalCode": "R2N"
    }
});
db.user.insertOne(
{
    "email": "kwu521@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kareem",
        "lastName": "Wu",
        "phoneNumber": "+90-521-046-5401",
        "email": "kwu521@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "41.212",
            "longitude": "32.9448"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+90-918-434-6979",
            "+90-537-634-5024"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-3-25"
    },
    "LoginInfo": {
        "username": "kwu",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6076 Short Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Akge\u00e7it",
        "stateProvince": "Ara\u00e7",
        "locality": "Ara\u00e7",
        "country": "TR",
        "postalCode": "37850"
    }
});
db.user.insertOne(
{
    "email": "emedina522@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ena",
        "lastName": "Medina",
        "phoneNumber": "+61-522-725-8805",
        "email": "emedina522@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "-32.4119",
            "longitude": "150.1201"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-967-922-5129"
        ],
        "secondaryEmailAddresses": [
            "emedina@KPN.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-3-3"
    },
    "LoginInfo": {
        "username": "emedina",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5644 Short River Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bylong",
        "stateProvince": "NSW",
        "locality": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2849"
    }
});
db.user.insertOne(
{
    "email": "cfuentes523@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Collin",
        "lastName": "Fuentes",
        "phoneNumber": "+55-523-323-0987",
        "email": "cfuentes523@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "-26.4189",
            "longitude": "-48.6515"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+55-37-807-2958",
            "+55-564-933-3586"
        ],
        "secondaryEmailAddresses": [
            "cfuentes@NetCom.net",
            "cfuentes@PTCL.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cfuentes"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-12-8"
    },
    "LoginInfo": {
        "username": "cfuentes",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "274 Green Ditch Drive",
        "buildingName": "Building 9F",
        "floor": 10,
        "roomApartmentCondoNumber": null,
        "city": "Balne\u00e1rio Barra do Sul",
        "stateProvince": "Santa Catarina ",
        "locality": "Santa Catarina ",
        "country": "BR",
        "postalCode": "89247-000"
    }
});
db.user.insertOne(
{
    "email": "jpineda524@Orstom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Joanna",
        "lastName": "Pineda",
        "phoneNumber": "+91-524-295-7122",
        "email": "jpineda524@Orstom.com",
        "GeoSpatialInfo": {
            "latitude": "13.1637",
            "longitude": "78.3921"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-93-485-1280",
            "+91-10-889-0297"
        ],
        "secondaryEmailAddresses": [
            "jpineda@Telia.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-5-25"
    },
    "LoginInfo": {
        "username": "jpineda",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "25 Blue Bough Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mulbagal Bazar",
        "stateProvince": "Mulbagal",
        "locality": "Kolar",
        "country": "IN",
        "postalCode": "563131"
    }
});
db.user.insertOne(
{
    "email": "dleal525@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Darlena",
        "lastName": "Leal",
        "phoneNumber": "+64-525-104-9518",
        "email": "dleal525@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "-37.7167",
            "longitude": "178.3"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-739-240-7167",
            "+64-446-160-9420"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-8-25"
    },
    "LoginInfo": {
        "username": "dleal",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5680 Short Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Whakaangiangi",
        "stateProvince": "F1",
        "locality": "Gisborne",
        "country": "NZ",
        "postalCode": "4086"
    }
});
db.user.insertOne(
{
    "email": "cmelton526@Airtel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carson",
        "lastName": "Melton",
        "phoneNumber": "+1-526-088-7719",
        "email": "cmelton526@Airtel.com",
        "GeoSpatialInfo": {
            "latitude": "41.8227",
            "longitude": "-71.4145"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-809-531-5837",
            "+1-12-401-9380",
            "+1-855-339-4292"
        ],
        "secondaryEmailAddresses": [
            "cmelton@Telkom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-6-28"
    },
    "LoginInfo": {
        "username": "cmelton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2106 Short Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Providence",
        "stateProvince": "RI",
        "locality": "Providence",
        "country": "US",
        "postalCode": "02901"
    }
});
db.user.insertOne(
{
    "email": "kenrique527@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kesha",
        "lastName": "Enriquez",
        "phoneNumber": "+213-527-196-9301",
        "email": "kenrique527@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "36.104",
            "longitude": "5.4368"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "kenrique@Telia.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-11-8"
    },
    "LoginInfo": {
        "username": "kenrique",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6381 Long Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Braou",
        "stateProvince": "Setif",
        "locality": "Setif",
        "country": "DZ",
        "postalCode": "19036"
    }
});
db.user.insertOne(
{
    "email": "rgaines528@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rosalba",
        "lastName": "Gaines",
        "phoneNumber": "+1-528-296-1566",
        "email": "rgaines528@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "34.0144",
            "longitude": "-80.4665"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-813-557-2495"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rgaines"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-2-4"
    },
    "LoginInfo": {
        "username": "rgaines",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2825 Winding Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dalzell",
        "stateProvince": "SC",
        "locality": "Sumter",
        "country": "US",
        "postalCode": "29040"
    }
});
db.user.insertOne(
{
    "email": "lroberts529@EUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Larry",
        "lastName": "Roberts",
        "phoneNumber": "+598-529-691-9594",
        "email": "lroberts529@EUnet.com",
        "GeoSpatialInfo": {
            "latitude": "-31.9167",
            "longitude": "-55.9333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+598-141-629-5840",
            "+598-430-579-0434"
        ],
        "secondaryEmailAddresses": [
            "lroberts@MegaFon.net",
            "lroberts@Optus.net",
            "lroberts@Etisalat.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lroberts"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-6-9"
    },
    "LoginInfo": {
        "username": "lroberts",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9413 Little Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "A7",
        "city": "Batovi",
        "stateProvince": "Rivera",
        "locality": "Rivera",
        "country": "UY",
        "postalCode": "40000"
    }
});
db.user.insertOne(
{
    "email": "aharriso530@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Angella",
        "lastName": "Harrison",
        "phoneNumber": "+1-530-533-5980",
        "email": "aharriso530@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "40.006",
            "longitude": "-121.2491"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-88-088-7066"
        ],
        "secondaryEmailAddresses": [
            "aharriso@Safaricom.net",
            "aharriso@KPN.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/aharriso"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/aharriso"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/aharriso"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-6-20"
    },
    "LoginInfo": {
        "username": "aharriso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8099 Red Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Belden",
        "stateProvince": "CA",
        "locality": "Plumas",
        "country": "US",
        "postalCode": "95915"
    }
});
db.user.insertOne(
{
    "email": "ostevens532@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Oliver",
        "lastName": "Stevens",
        "phoneNumber": "+61-532-645-1736",
        "email": "ostevens532@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "-38.3667",
            "longitude": "142.45"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-884-097-7432"
        ],
        "secondaryEmailAddresses": [
            "ostevens@Zain.net",
            "ostevens@MegaFon.net",
            "ostevens@Vodafone.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-6-23"
    },
    "LoginInfo": {
        "username": "ostevens",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9155 Long Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dennington",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3280"
    }
});
db.user.insertOne(
{
    "email": "lballard533@EUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lura",
        "lastName": "Ballard",
        "phoneNumber": "+47-533-819-3241",
        "email": "lballard533@EUnet.com",
        "GeoSpatialInfo": {
            "latitude": "66.9241",
            "longitude": "14.7821"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+47-317-699-4174"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lballard"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lballard"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-12-26"
    },
    "LoginInfo": {
        "username": "lballard",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4041 Big Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Toll\u00e5",
        "stateProvince": "Beiarn",
        "locality": "Beiarn",
        "country": "NO",
        "postalCode": "8114"
    }
});
db.user.insertOne(
{
    "email": "lmay534@Econnect.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Leanna",
        "lastName": "May",
        "phoneNumber": "+44-534-183-3516",
        "email": "lmay534@Econnect.com",
        "GeoSpatialInfo": {
            "latitude": "51.5961",
            "longitude": "-0.2481"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-742-345-0832",
            "+44-788-948-4379"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lmay"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lmay"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-9-6"
    },
    "LoginInfo": {
        "username": "lmay",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6819 Big Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Colindale",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "NW9"
    }
});
db.user.insertOne(
{
    "email": "karnold535@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Katelynn",
        "lastName": "Arnold",
        "phoneNumber": "+590-535-646-5363",
        "email": "karnold535@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "15.8833",
            "longitude": "-61.2167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+590-454-360-5306",
            "+590-532-711-1574"
        ],
        "secondaryEmailAddresses": [
            "karnold@Telecom.net",
            "karnold@BT.net",
            "karnold@Sprint.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-9-5"
    },
    "LoginInfo": {
        "username": "karnold",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2560 Winding Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Capesterre-de-Marie-Galante",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97140"
    }
});
db.user.insertOne(
{
    "email": "lhuff536@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Letty",
        "lastName": "Huff",
        "phoneNumber": "+61-536-677-9011",
        "email": "lhuff536@NII.com",
        "GeoSpatialInfo": {
            "latitude": "-22.6492",
            "longitude": "130.5639"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-547-493-8769"
        ],
        "secondaryEmailAddresses": [
            "lhuff@PTCL.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lhuff"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-10-9"
    },
    "LoginInfo": {
        "username": "lhuff",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8928 Winding Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nyirripi",
        "stateProvince": "NT",
        "locality": "Northern Territory",
        "country": "AU",
        "postalCode": "0872"
    }
});
db.user.insertOne(
{
    "email": "bbryan537@Telefonica.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ben",
        "lastName": "Bryan",
        "phoneNumber": "+352-537-757-9192",
        "email": "bbryan537@Telefonica.com",
        "GeoSpatialInfo": {
            "latitude": "49.7649",
            "longitude": "6.4777"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bbryan"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-1-22"
    },
    "LoginInfo": {
        "username": "bbryan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8352 Long Woods Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Boursdorf",
        "stateProvince": "EC",
        "locality": "Mompach",
        "country": "LU",
        "postalCode": "L-6663"
    }
});
db.user.insertOne(
{
    "email": "lowens538@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lani",
        "lastName": "Owens",
        "phoneNumber": "+61-538-261-3071",
        "email": "lowens538@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "-30.7317",
            "longitude": "115.5874"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-177-262-7568"
        ],
        "secondaryEmailAddresses": [
            "lowens@ATT.net",
            "lowens@TelecomItalia.net",
            "lowens@Vodafone.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lowens"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lowens"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-4-10"
    },
    "LoginInfo": {
        "username": "lowens",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3693 Long Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mimegarra",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6507"
    }
});
db.user.insertOne(
{
    "email": "ethomas539@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ernest",
        "lastName": "Thomas",
        "phoneNumber": "+1787-539-188-1922",
        "email": "ethomas539@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "18.1808",
            "longitude": "-66.9799"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1787-513-001-3139"
        ],
        "secondaryEmailAddresses": [
            "ethomas@cerist.net",
            "ethomas@KDDI.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ethomas"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-5-6"
    },
    "LoginInfo": {
        "username": "ethomas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9196 Short Bough Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Maricao",
        "stateProvince": "Maricao",
        "locality": "Maricao",
        "country": "PR",
        "postalCode": "00606"
    }
});
db.user.insertOne(
{
    "email": "efry540@TelecomItalia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elton",
        "lastName": "Fry",
        "phoneNumber": "+44-540-658-0667",
        "email": "efry540@TelecomItalia.com",
        "GeoSpatialInfo": {
            "latitude": "50.7496",
            "longitude": "-2.4518"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-894-481-0778",
            "+44-796-139-8240"
        ],
        "secondaryEmailAddresses": [
            "efry@Ooredoo.net",
            "efry@ICom.net",
            "efry@MegaFon.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/efry"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1959-10-14"
    },
    "LoginInfo": {
        "username": "efry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "33 Big River Avenue",
        "buildingName": "Building E4",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Holywell",
        "stateProvince": "England",
        "locality": "Dorset",
        "country": "GB",
        "postalCode": "DT2"
    }
});
db.user.insertOne(
{
    "email": "sclay541@Relcom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shavonne",
        "lastName": "Clay",
        "phoneNumber": "+262-541-595-7518",
        "email": "sclay541@Relcom.com",
        "GeoSpatialInfo": {
            "latitude": "-12.7949",
            "longitude": "45.282"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+262-852-789-7509"
        ],
        "secondaryEmailAddresses": [
            "sclay@ICom.net",
            "sclay@AIS.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sclay"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-9-15"
    },
    "LoginInfo": {
        "username": "sclay",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6188 Short Bend Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "A3",
        "city": "Pamandzi",
        "stateProvince": "Pamandzi",
        "locality": "Pamandzi",
        "country": "YT",
        "postalCode": "97615"
    }
});
db.user.insertOne(
{
    "email": "shouston542@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Solange",
        "lastName": "Houston",
        "phoneNumber": "+61-542-448-0056",
        "email": "shouston542@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "-36.6985",
            "longitude": "149.3679"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "shouston@Unicom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-9-20"
    },
    "LoginInfo": {
        "username": "shouston",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3090 Little Mountain Street",
        "buildingName": "Building 12",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Glen Allen",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2631"
    }
});
db.user.insertOne(
{
    "email": "lmills543@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Louise",
        "lastName": "Mills",
        "phoneNumber": "+687-543-244-1458",
        "email": "lmills543@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "-21.7079",
            "longitude": "165.8252"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-798-611-3362"
        ],
        "secondaryEmailAddresses": [
            "lmills@NetCom.net",
            "lmills@EUnet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lmills"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lmills"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-5-25"
    },
    "LoginInfo": {
        "username": "lmills",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9455 Long Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "La Foa",
        "stateProvince": "La Foa",
        "locality": "La Foa",
        "country": "NC",
        "postalCode": "98880"
    }
});
db.user.insertOne(
{
    "email": "dhumphre544@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Debbra",
        "lastName": "Humphrey",
        "phoneNumber": "+61-544-996-7642",
        "email": "dhumphre544@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "-35.2779",
            "longitude": "138.4523"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-463-744-4745"
        ],
        "secondaryEmailAddresses": [
            "dhumphre@Telecom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dhumphre"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dhumphre"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dhumphre"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1994-2-8"
    },
    "LoginInfo": {
        "username": "dhumphre",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9313 Blue Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Port Willunga",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5173"
    }
});
db.user.insertOne(
{
    "email": "iquinter545@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Irving",
        "lastName": "Quintero",
        "phoneNumber": "+41-545-485-4324",
        "email": "iquinter545@BT.com",
        "GeoSpatialInfo": {
            "latitude": "47.3667",
            "longitude": "8.55"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+41-326-784-0847"
        ],
        "secondaryEmailAddresses": [
            "iquinter@cerist.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/iquinter"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-4-9"
    },
    "LoginInfo": {
        "username": "iquinter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7489 Long River Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Z\u00fcrich",
        "stateProvince": "ZH",
        "locality": "Bezirk Z\u00fcrich",
        "country": "CH",
        "postalCode": "8004"
    }
});
db.user.insertOne(
{
    "email": "lchase546@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Luci",
        "lastName": "Chase",
        "phoneNumber": "+1-546-253-6803",
        "email": "lchase546@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "42.9104",
            "longitude": "-85.8276"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-354-062-6296"
        ],
        "secondaryEmailAddresses": [
            "lchase@AlgoNet.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-3-13"
    },
    "LoginInfo": {
        "username": "lchase",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5977 Long Gully Ride",
        "buildingName": "Building AB",
        "floor": null,
        "roomApartmentCondoNumber": "FF",
        "city": "Jenison",
        "stateProvince": "MI",
        "locality": "Ottawa",
        "country": "US",
        "postalCode": "49428"
    }
});
db.user.insertOne(
{
    "email": "dcole547@OpenWorld.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Delicia",
        "lastName": "Cole",
        "phoneNumber": "+298-547-657-3428",
        "email": "dcole547@OpenWorld.com",
        "GeoSpatialInfo": {
            "latitude": "62.2833",
            "longitude": "-6.6667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+298-582-689-7474",
            "+298-189-379-8338",
            "+298-374-373-0827"
        ],
        "secondaryEmailAddresses": [
            "dcole@Movil.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dcole"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dcole"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-8-27"
    },
    "LoginInfo": {
        "username": "dcole",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3510 Little Bough Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kunoy",
        "stateProvince": null,
        "locality": null,
        "country": "FO",
        "postalCode": "780"
    }
});
db.user.insertOne(
{
    "email": "jboone548@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Joeann",
        "lastName": "Boone",
        "phoneNumber": "+61-548-338-9268",
        "email": "jboone548@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "-35.1351",
            "longitude": "138.567"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-118-931-2748"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jboone"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-1-25"
    },
    "LoginInfo": {
        "username": "jboone",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8113 Long Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Onkaparinga Hills",
        "stateProvince": "SA",
        "locality": "SA CITY SUBS",
        "country": "AU",
        "postalCode": "5163"
    }
});
db.user.insertOne(
{
    "email": "ubennett549@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ursula",
        "lastName": "Bennett",
        "phoneNumber": "+594-549-814-7732",
        "email": "ubennett549@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "4.9333",
            "longitude": "-52.3333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+594-926-346-2897",
            "+594-178-865-0907"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ubennett"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-3-27"
    },
    "LoginInfo": {
        "username": "ubennett",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2062 Long Ridge Street",
        "buildingName": null,
        "floor": 2,
        "roomApartmentCondoNumber": null,
        "city": "Cayenne",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97345 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "sbowen550@GreenNet.com",
    "userType": "partner",
    "businessName": "Fat Cats Business Company",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sparkle",
        "lastName": "Bowen",
        "phoneNumber": "+44-550-155-3252",
        "email": "sbowen550@GreenNet.com",
        "GeoSpatialInfo": {
            "latitude": "57.3571",
            "longitude": "-2.2412"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "sbowen@Turkcell.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-1-20"
    },
    "LoginInfo": {
        "username": "sbowen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4774 Winding Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Drumwhindle",
        "stateProvince": "Scotland",
        "locality": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB41"
    }
});
db.user.insertOne(
{
    "email": "kmitchel551@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Karren",
        "lastName": "Mitchell",
        "phoneNumber": "+90-551-814-1242",
        "email": "kmitchel551@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "40.7071",
            "longitude": "36.5961"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+90-279-181-5026"
        ],
        "secondaryEmailAddresses": [
            "kmitchel@EUnet.net",
            "kmitchel@Oi.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kmitchel"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kmitchel"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-5-26"
    },
    "LoginInfo": {
        "username": "kmitchel",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8537 Winding Woods Road",
        "buildingName": null,
        "floor": 7,
        "roomApartmentCondoNumber": null,
        "city": "\u00c7atili",
        "stateProvince": "Erbaa",
        "locality": "Erbaa",
        "country": "TR",
        "postalCode": "60500"
    }
});
db.user.insertOne(
{
    "email": "plawrenc552@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Pamelia",
        "lastName": "Lawrence",
        "phoneNumber": "+61-552-988-3437",
        "email": "plawrenc552@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "-27.0323",
            "longitude": "153.0724"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "plawrenc@UI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/plawrenc"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/plawrenc"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-9-26"
    },
    "LoginInfo": {
        "username": "plawrenc",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3075 Green Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Meldale",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4510"
    }
});
db.user.insertOne(
{
    "email": "lmcconne553@LookData.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ludivina",
        "lastName": "Mcconnell",
        "phoneNumber": "+691-553-445-8246",
        "email": "lmcconne553@LookData.com",
        "GeoSpatialInfo": {
            "latitude": "7.1383",
            "longitude": "151.5031"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+691-169-106-9110"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lmcconne"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-5-2"
    },
    "LoginInfo": {
        "username": "lmcconne",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1078 Long Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pohnpei",
        "stateProvince": "State of Pohnpei",
        "locality": "State of Pohnpei",
        "country": "FM",
        "postalCode": "96941"
    }
});
db.user.insertOne(
{
    "email": "randerso554@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Robert",
        "lastName": "Anderson",
        "phoneNumber": "+1-554-241-4805",
        "email": "randerso554@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "49.8625",
            "longitude": "-97.1665"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-147-806-8998"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/randerso"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/randerso"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-3-6"
    },
    "LoginInfo": {
        "username": "randerso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4247 Short Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Winnipeg (River Heights Central)",
        "stateProvince": "MB",
        "locality": "Winnipeg",
        "country": "CA",
        "postalCode": "R3M"
    }
});
db.user.insertOne(
{
    "email": "bodom555@Vivendi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brock",
        "lastName": "Odom",
        "phoneNumber": "+441481-555-683-9601",
        "email": "bodom555@Vivendi.com",
        "GeoSpatialInfo": {
            "latitude": "49.45",
            "longitude": "-2.6"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441481-606-384-9322"
        ],
        "secondaryEmailAddresses": [
            "bodom@KDDI.net",
            "bodom@Rogers.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1993-4-10"
    },
    "LoginInfo": {
        "username": "bodom",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8589 Green River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Sampsons",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY2"
    }
});
db.user.insertOne(
{
    "email": "vsimmons556@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vern",
        "lastName": "Simmons",
        "phoneNumber": "+1-556-103-4134",
        "email": "vsimmons556@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "38.9871",
            "longitude": "-76.4715"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-206-097-4010",
            "+1-264-877-8478"
        ],
        "secondaryEmailAddresses": [
            "vsimmons@Etisalat.net",
            "vsimmons@TelecomItalia.net",
            "vsimmons@ICom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-9-23"
    },
    "LoginInfo": {
        "username": "vsimmons",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8148 Big Ditch Way",
        "buildingName": "Building 84",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Annapolis",
        "stateProvince": "MD",
        "locality": "Anne Arundel",
        "country": "US",
        "postalCode": "21402"
    }
});
db.user.insertOne(
{
    "email": "dnelson557@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Darlene",
        "lastName": "Nelson",
        "phoneNumber": "+1809-557-098-4657",
        "email": "dnelson557@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "19.2833",
            "longitude": "-70.5667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1809-540-205-8150",
            "+1809-727-793-7356",
            "+1809-329-554-5586"
        ],
        "secondaryEmailAddresses": [
            "dnelson@NordNet.net",
            "dnelson@Jio.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-4-4"
    },
    "LoginInfo": {
        "username": "dnelson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7030 Long Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Los Angeles",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10702"
    }
});
db.user.insertOne(
{
    "email": "ahale558@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Abraham",
        "lastName": "Hale",
        "phoneNumber": "+61-558-022-9001",
        "email": "ahale558@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "-34.0826",
            "longitude": "138.7806"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ahale"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-11-27"
    },
    "LoginInfo": {
        "username": "ahale",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2652 Winding Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saddleworth",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5413"
    }
});
db.user.insertOne(
{
    "email": "clandry560@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carlyn",
        "lastName": "Landry",
        "phoneNumber": "+1-560-625-6744",
        "email": "clandry560@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "49.1551",
            "longitude": "-122.9124"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-88-205-9387",
            "+1-362-265-2680"
        ],
        "secondaryEmailAddresses": [
            "clandry@MTN.net",
            "clandry@GlasNET.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/clandry"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/clandry"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/clandry"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-1-23"
    },
    "LoginInfo": {
        "username": "clandry",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8007 Red River Street",
        "buildingName": null,
        "floor": 7,
        "roomApartmentCondoNumber": "69",
        "city": "Delta Northeast",
        "stateProvince": "BC",
        "locality": "Delta",
        "country": "CA",
        "postalCode": "V4C"
    }
});
db.user.insertOne(
{
    "email": "clam561@NII.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cinda",
        "lastName": "Lam",
        "phoneNumber": "+35818-561-742-7126",
        "email": "clam561@NII.com",
        "GeoSpatialInfo": {
            "latitude": "60.1497",
            "longitude": "19.9521"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+35818-74-833-9514",
            "+35818-61-082-4658"
        ],
        "secondaryEmailAddresses": [
            "clam@Telekom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/clam"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/clam"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/clam"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/clam"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-1-23"
    },
    "LoginInfo": {
        "username": "clam",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6988 Little Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jomala",
        "stateProvince": "Jomala",
        "locality": "Jomala",
        "country": "AX",
        "postalCode": "22151"
    }
});
db.user.insertOne(
{
    "email": "scooper562@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sheba",
        "lastName": "Cooper",
        "phoneNumber": "+61-562-758-3810",
        "email": "scooper562@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "-32.5627",
            "longitude": "116.1411"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-957-599-7575"
        ],
        "secondaryEmailAddresses": [
            "scooper@NTT.net",
            "scooper@Optus.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/scooper"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/scooper"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-9-5"
    },
    "LoginInfo": {
        "username": "scooper",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7757 Blue Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Solus",
        "stateProvince": "WA",
        "locality": "BRAND",
        "country": "AU",
        "postalCode": "6207"
    }
});
db.user.insertOne(
{
    "email": "kcunning563@Telstra.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Karina",
        "lastName": "Cunningham",
        "phoneNumber": "+389-563-988-3948",
        "email": "kcunning563@Telstra.com",
        "GeoSpatialInfo": {
            "latitude": "41.4453",
            "longitude": "21.0267"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+389-870-299-8467"
        ],
        "secondaryEmailAddresses": [
            "kcunning@Telefonica.net",
            "kcunning@Chunghwa.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kcunning"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/kcunning"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-9-13"
    },
    "LoginInfo": {
        "username": "kcunning",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9416 Big Mountain Street",
        "buildingName": null,
        "floor": 14,
        "roomApartmentCondoNumber": null,
        "city": "Vranestica",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "6258"
    }
});
db.user.insertOne(
{
    "email": "nmichael564@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nigel",
        "lastName": "Michael",
        "phoneNumber": "+91-564-290-8224",
        "email": "nmichael564@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "20.0456",
            "longitude": "74.0756"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-680-537-8561"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nmichael"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/nmichael"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nmichael"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-5-7"
    },
    "LoginInfo": {
        "username": "nmichael",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7402 Little Creek Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kothure",
        "stateProvince": "Niphad",
        "locality": "Nashik",
        "country": "IN",
        "postalCode": "422303"
    }
});
db.user.insertOne(
{
    "email": "emanning565@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elton",
        "lastName": "Manning",
        "phoneNumber": "+64-565-805-9183",
        "email": "emanning565@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "-45.8225",
            "longitude": "169.5301"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "emanning@Telefonica.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/emanning"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/emanning"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-1-1"
    },
    "LoginInfo": {
        "username": "emanning",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5092 Green Mound Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Beaumont",
        "stateProvince": "F7",
        "locality": "Otago",
        "country": "NZ",
        "postalCode": "9591"
    }
});
db.user.insertOne(
{
    "email": "rhughes566@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rebecca",
        "lastName": "Hughes",
        "phoneNumber": "+44-566-967-8379",
        "email": "rhughes566@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "57.8781",
            "longitude": "-6.8471"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rhughes"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-7-6"
    },
    "LoginInfo": {
        "username": "rhughes",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3821 Big Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Aird Leimhe",
        "stateProvince": "Scotland",
        "locality": "Western Isles",
        "country": "GB",
        "postalCode": "HS3"
    }
});
db.user.insertOne(
{
    "email": "scasey567@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sharika",
        "lastName": "Casey",
        "phoneNumber": "+356-567-585-3030",
        "email": "scasey567@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "35.8826",
            "longitude": "14.3978"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "scasey@Ooredoo.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/scasey"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-3-14"
    },
    "LoginInfo": {
        "username": "scasey",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5866 Short Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rabat",
        "stateProvince": "Ir-Rabat",
        "locality": "Ir-Rabat",
        "country": "MT",
        "postalCode": "RBT"
    }
});
db.user.insertOne(
{
    "email": "knava568@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Keila",
        "lastName": "Nava",
        "phoneNumber": "+91-568-896-3809",
        "email": "knava568@TM.com",
        "GeoSpatialInfo": {
            "latitude": "29.7289",
            "longitude": "79.7542"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-137-615-9434",
            "+91-682-480-7396",
            "+91-899-976-9153"
        ],
        "secondaryEmailAddresses": [
            "knava@DaxNet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/knava"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/knava"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/knava"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-6-20"
    },
    "LoginInfo": {
        "username": "knava",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6614 Big Tree Way",
        "buildingName": null,
        "floor": 8,
        "roomApartmentCondoNumber": null,
        "city": "Pankhu",
        "stateProvince": "Berinag",
        "locality": "Pithoragarh",
        "country": "IN",
        "postalCode": "262533"
    }
});
db.user.insertOne(
{
    "email": "ashaw569@OTE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Aisha",
        "lastName": "Shaw",
        "phoneNumber": "+1671-569-337-4806",
        "email": "ashaw569@OTE.com",
        "GeoSpatialInfo": {
            "latitude": "13.4443",
            "longitude": "144.7863"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1671-543-781-2542"
        ],
        "secondaryEmailAddresses": [
            "ashaw@VimpelCom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ashaw"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ashaw"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-10-8"
    },
    "LoginInfo": {
        "username": "ashaw",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3390 Short River Boulevard",
        "buildingName": "Building 98",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Yona",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96914"
    }
});
db.user.insertOne(
{
    "email": "cburns570@KTC.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cliff",
        "lastName": "Burns",
        "phoneNumber": "+91-570-005-1455",
        "email": "cburns570@KTC.com",
        "GeoSpatialInfo": {
            "latitude": "18.5553",
            "longitude": "83.438"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cburns@Telecom.net",
            "cburns@Telefonica.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cburns"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cburns"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-5-19"
    },
    "LoginInfo": {
        "username": "cburns",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7074 Big River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sivadavalasa",
        "stateProvince": "Bobbili",
        "locality": "Vizianagaram",
        "country": "IN",
        "postalCode": "535568"
    }
});
db.user.insertOne(
{
    "email": "iatkinso571@LGUplus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Irving",
        "lastName": "Atkinson",
        "phoneNumber": "+375-571-922-5293",
        "email": "iatkinso571@LGUplus.com",
        "GeoSpatialInfo": {
            "latitude": "53.7104",
            "longitude": "25.1876"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+375-386-689-1173",
            "+375-817-250-1402"
        ],
        "secondaryEmailAddresses": [
            "iatkinso@UUnet.net",
            "iatkinso@Relcom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/iatkinso"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/iatkinso"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-9-9"
    },
    "LoginInfo": {
        "username": "iatkinso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9928 Little Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0415\u0434\u043a\u0438",
        "stateProvince": "Lida",
        "locality": "Lida",
        "country": "BY",
        "postalCode": "231310"
    }
});
db.user.insertOne(
{
    "email": "bfrancis572@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Blake",
        "lastName": "Francis",
        "phoneNumber": "+1-572-590-0505",
        "email": "bfrancis572@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "40.7442",
            "longitude": "-89.7184"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-680-983-3099"
        ],
        "secondaryEmailAddresses": [
            "bfrancis@DaxNet.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/bfrancis"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-11-10"
    },
    "LoginInfo": {
        "username": "bfrancis",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4905 Winding Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "48",
        "city": "Peoria",
        "stateProvince": "IL",
        "locality": "Peoria",
        "country": "US",
        "postalCode": "61650"
    }
});
db.user.insertOne(
{
    "email": "cdelacru573@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chin",
        "lastName": "Delacruz",
        "phoneNumber": "+441624-573-597-7502",
        "email": "cdelacru573@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "54.1694",
            "longitude": "-4.7276"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cdelacru@Telecom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cdelacru"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/cdelacru"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-1-3"
    },
    "LoginInfo": {
        "username": "cdelacru",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7494 Winding Gully Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dalby",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM5"
    }
});
db.user.insertOne(
{
    "email": "fduran574@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Fay",
        "lastName": "Duran",
        "phoneNumber": "+61-574-284-9167",
        "email": "fduran574@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "-35.2238",
            "longitude": "143.4727"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-432-039-0851"
        ],
        "secondaryEmailAddresses": [
            "fduran@LGUplus.net",
            "fduran@Vivendi.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/fduran"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/fduran"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-2-4"
    },
    "LoginInfo": {
        "username": "fduran",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6542 Big Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Beverford",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3590"
    }
});
db.user.insertOne(
{
    "email": "randrews576@KPN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rickey",
        "lastName": "Andrews",
        "phoneNumber": "+44-576-482-8176",
        "email": "randrews576@KPN.com",
        "GeoSpatialInfo": {
            "latitude": "60.38",
            "longitude": "-1.2787"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-924-188-9097",
            "+44-454-208-9570"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/randrews"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/randrews"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/randrews"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-5-23"
    },
    "LoginInfo": {
        "username": "randrews",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2107 Blue Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Westerwick",
        "stateProvince": "Scotland",
        "locality": "Shetland Islands",
        "country": "GB",
        "postalCode": "ZE2"
    }
});
db.user.insertOne(
{
    "email": "eandrade577@Zain.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Elenora",
        "lastName": "Andrade",
        "phoneNumber": "+370-577-175-4087",
        "email": "eandrade577@Zain.com",
        "GeoSpatialInfo": {
            "latitude": "55.9167",
            "longitude": "24.4"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-932-609-4499",
            "+370-97-639-9656"
        ],
        "secondaryEmailAddresses": [
            "eandrade@Softbank.net",
            "eandrade@Telia.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/eandrade"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-5-24"
    },
    "LoginInfo": {
        "username": "eandrade",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5674 Red Hill Street",
        "buildingName": null,
        "floor": 19,
        "roomApartmentCondoNumber": null,
        "city": "Smilgeli\u0173 k.",
        "stateProvince": "Pasvalio r. sav.",
        "locality": "Pasvalio r. sav.",
        "country": "LT",
        "postalCode": "39012"
    }
});
db.user.insertOne(
{
    "email": "gcross578@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "German",
        "lastName": "Cross",
        "phoneNumber": "+44-578-974-1480",
        "email": "gcross578@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "51.6669",
            "longitude": "-4.9492"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-40-330-9713",
            "+44-155-760-4434"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-5-30"
    },
    "LoginInfo": {
        "username": "gcross",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7049 Winding Ridge Ride",
        "buildingName": "Building B2",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hundleton",
        "stateProvince": "Wales",
        "locality": "Pembrokeshire",
        "country": "GB",
        "postalCode": "SA71"
    }
});
db.user.insertOne(
{
    "email": "slivings579@Econnect.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sammie",
        "lastName": "Livingston",
        "phoneNumber": "+31-579-438-6652",
        "email": "slivings579@Econnect.com",
        "GeoSpatialInfo": {
            "latitude": "53.2271",
            "longitude": "5.5262"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+31-694-982-1553",
            "+31-375-513-8916",
            "+31-9-515-9951"
        ],
        "secondaryEmailAddresses": [
            "slivings@CCI.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/slivings"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-3-29"
    },
    "LoginInfo": {
        "username": "slivings",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1092 Green Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Klooster Lidlum",
        "stateProvince": "Franekeradeel",
        "locality": "Franekeradeel",
        "country": "NL",
        "postalCode": "8853"
    }
});
db.user.insertOne(
{
    "email": "jingram580@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jonathon",
        "lastName": "Ingram",
        "phoneNumber": "+91-580-859-9425",
        "email": "jingram580@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "21.3364",
            "longitude": "70.1737"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-415-628-3793"
        ],
        "secondaryEmailAddresses": [
            "jingram@SKTelecom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/jingram"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-10-1"
    },
    "LoginInfo": {
        "username": "jingram",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8296 Blue Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Keshod Aerodrome",
        "stateProvince": "Keshod",
        "locality": "Junagadh",
        "country": "IN",
        "postalCode": "362220"
    }
});
db.user.insertOne(
{
    "email": "eolson581@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Eleni",
        "lastName": "Olson",
        "phoneNumber": "+687-581-999-0980",
        "email": "eolson581@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "-22.2626",
            "longitude": "166.5662"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-521-516-0152"
        ],
        "secondaryEmailAddresses": [
            "eolson@UI.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/eolson"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/eolson"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/eolson"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-6-1"
    },
    "LoginInfo": {
        "username": "eolson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4117 Blue Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mont-Dore",
        "stateProvince": "Le Mont-Dore",
        "locality": "Le Mont-Dore",
        "country": "NC",
        "postalCode": "98810"
    }
});
db.user.insertOne(
{
    "email": "esilva582@Tata.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Evie",
        "lastName": "Silva",
        "phoneNumber": "+44-582-330-1929",
        "email": "esilva582@Tata.com",
        "GeoSpatialInfo": {
            "latitude": "50.8176",
            "longitude": "-3.3475"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "esilva@LookData.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/esilva"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/esilva"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-6-23"
    },
    "LoginInfo": {
        "username": "esilva",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7538 Long Tree Street",
        "buildingName": null,
        "floor": 17,
        "roomApartmentCondoNumber": null,
        "city": "Plymtree",
        "stateProvince": "England",
        "locality": "Devon",
        "country": "GB",
        "postalCode": "EX15"
    }
});
db.user.insertOne(
{
    "email": "cgill583@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carissa",
        "lastName": "Gill",
        "phoneNumber": "+66-583-771-5807",
        "email": "cgill583@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "17.3458",
            "longitude": "103.9792"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+66-254-291-4881"
        ],
        "secondaryEmailAddresses": [
            "cgill@Bifty.net",
            "cgill@Belgacom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cgill"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-9-30"
    },
    "LoginInfo": {
        "username": "cgill",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1424 Short River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pon Nakaew",
        "stateProvince": "Sakon Nakhon",
        "locality": "Sakon Nakhon",
        "country": "TH",
        "postalCode": "47230"
    }
});
db.user.insertOne(
{
    "email": "thendric584@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tyson",
        "lastName": "Hendricks",
        "phoneNumber": "+44-584-438-7704",
        "email": "thendric584@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "52.0954",
            "longitude": "0.8344"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-837-982-9577",
            "+44-95-124-4068"
        ],
        "secondaryEmailAddresses": [
            "thendric@Access.net",
            "thendric@Access.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-2-2"
    },
    "LoginInfo": {
        "username": "thendric",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1708 Short Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Brent Eleigh",
        "stateProvince": "England",
        "locality": "Suffolk",
        "country": "GB",
        "postalCode": "CO10"
    }
});
db.user.insertOne(
{
    "email": "ncarter586@NetCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Noriko",
        "lastName": "Carter",
        "phoneNumber": "+44-586-204-2353",
        "email": "ncarter586@NetCom.com",
        "GeoSpatialInfo": {
            "latitude": "51.9277",
            "longitude": "-0.0979"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "ncarter@Telenor.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ncarter"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ncarter"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ncarter"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-3-1"
    },
    "LoginInfo": {
        "username": "ncarter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9299 Long Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "93",
        "city": "Ardeley",
        "stateProvince": "England",
        "locality": "Hertfordshire",
        "country": "GB",
        "postalCode": "SG2"
    }
});
db.user.insertOne(
{
    "email": "nalvarez587@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Napoleon",
        "lastName": "Alvarez",
        "phoneNumber": "+1-587-835-9466",
        "email": "nalvarez587@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "38.2019",
            "longitude": "-103.941"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-179-457-8265",
            "+1-412-814-8327"
        ],
        "secondaryEmailAddresses": [
            "nalvarez@Tata.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nalvarez"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/nalvarez"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/nalvarez"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-6-7"
    },
    "LoginInfo": {
        "username": "nalvarez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1370 Blue Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Olney Springs",
        "stateProvince": "CO",
        "locality": "Crowley",
        "country": "US",
        "postalCode": "81062"
    }
});
db.user.insertOne(
{
    "email": "jgrimes588@KDDI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jess",
        "lastName": "Grimes",
        "phoneNumber": "+1-588-692-4035",
        "email": "jgrimes588@KDDI.com",
        "GeoSpatialInfo": {
            "latitude": "13.4757",
            "longitude": "144.7489"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-333-513-8842",
            "+1-603-389-3849"
        ],
        "secondaryEmailAddresses": [
            "jgrimes@Telenor.net",
            "jgrimes@Bifty.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jgrimes"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-9-27"
    },
    "LoginInfo": {
        "username": "jgrimes",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9399 Winding Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "APO AA",
        "stateProvince": null,
        "locality": null,
        "country": "US",
        "postalCode": "96543"
    }
});
db.user.insertOne(
{
    "email": "lbooker589@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lai",
        "lastName": "Booker",
        "phoneNumber": "+687-589-111-9254",
        "email": "lbooker589@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "-22.2626",
            "longitude": "166.5662"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-642-975-4509",
            "+687-351-149-1148"
        ],
        "secondaryEmailAddresses": [
            "lbooker@cerist.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lbooker"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-10-9"
    },
    "LoginInfo": {
        "username": "lbooker",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9220 Green Hill Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mont-Dore",
        "stateProvince": "Le Mont-Dore",
        "locality": "Le Mont-Dore",
        "country": "NC",
        "postalCode": "98810"
    }
});
db.user.insertOne(
{
    "email": "rschroed590@UUnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Randell",
        "lastName": "Schroeder",
        "phoneNumber": "+44-590-356-5286",
        "email": "rschroed590@UUnet.com",
        "GeoSpatialInfo": {
            "latitude": "50.3895",
            "longitude": "-4.6518"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-207-222-0232",
            "+44-511-846-4808"
        ],
        "secondaryEmailAddresses": [
            "rschroed@CCI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/rschroed"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-1-23"
    },
    "LoginInfo": {
        "username": "rschroed",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7852 Green Ditch Drive",
        "buildingName": "Building 86",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bridgend",
        "stateProvince": "England",
        "locality": "Cornwall",
        "country": "GB",
        "postalCode": "PL22"
    }
});
db.user.insertOne(
{
    "email": "agordon591@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Andreas",
        "lastName": "Gordon",
        "phoneNumber": "+506-591-208-1668",
        "email": "agordon591@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "9.904",
            "longitude": "-84.5274"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "agordon@Millicom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/agordon"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-5-8"
    },
    "LoginInfo": {
        "username": "agordon",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9649 Long Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Orotina",
        "stateProvince": "Orotina",
        "locality": "Orotina",
        "country": "CR",
        "postalCode": "20901"
    }
});
db.user.insertOne(
{
    "email": "molsen592@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mica",
        "lastName": "Olsen",
        "phoneNumber": "+1-592-487-3059",
        "email": "molsen592@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "38.8952",
            "longitude": "-77.0365"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-857-987-2198"
        ],
        "secondaryEmailAddresses": [
            "molsen@SingTel.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/molsen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-8-20"
    },
    "LoginInfo": {
        "username": "molsen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3291 Blue Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Washington",
        "stateProvince": "DC",
        "locality": "District of Columbia",
        "country": "US",
        "postalCode": "56915"
    }
});
db.user.insertOne(
{
    "email": "vtravis593@LGUplus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vonda",
        "lastName": "Travis",
        "phoneNumber": "+39-593-447-5378",
        "email": "vtravis593@LGUplus.com",
        "GeoSpatialInfo": {
            "latitude": "42.0236",
            "longitude": "14.379"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-138-066-9252",
            "+39-938-583-7513"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/vtravis"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vtravis"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/vtravis"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-2-23"
    },
    "LoginInfo": {
        "username": "vtravis",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5127 Green Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sambuceto",
        "stateProvince": "AB",
        "locality": "Chieti",
        "country": "IT",
        "postalCode": "66020"
    }
});
db.user.insertOne(
{
    "email": "ddonalds594@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Donovan",
        "lastName": "Donaldson",
        "phoneNumber": "+91-594-701-9319",
        "email": "ddonalds594@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "18.5217",
            "longitude": "74.4103"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-316-025-0013"
        ],
        "secondaryEmailAddresses": [
            "ddonalds@Safaricom.net",
            "ddonalds@PTCL.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ddonalds"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/ddonalds"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-6-30"
    },
    "LoginInfo": {
        "username": "ddonalds",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8979 Long River Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "2C",
        "city": "Nimbut",
        "stateProvince": "Baramati",
        "locality": "Pune",
        "country": "IN",
        "postalCode": "412102"
    }
});
db.user.insertOne(
{
    "email": "akennedy595@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Athena",
        "lastName": "Kennedy",
        "phoneNumber": "+299-595-526-1726",
        "email": "akennedy595@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "74.1167",
            "longitude": "-57.0667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "akennedy@Telus.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/akennedy"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-1-22"
    },
    "LoginInfo": {
        "username": "akennedy",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6150 Red Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Nuussuaq",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3905"
    }
});
db.user.insertOne(
{
    "email": "jford596@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jovan",
        "lastName": "Ford",
        "phoneNumber": "+1-596-337-7289",
        "email": "jford596@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "35.8617",
            "longitude": "-110.3875"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jford@Telecom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jford"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jford"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jford"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-2-19"
    },
    "LoginInfo": {
        "username": "jford",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1836 Little Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Polacca",
        "stateProvince": "AZ",
        "locality": "Navajo",
        "country": "US",
        "postalCode": "86042"
    }
});
db.user.insertOne(
{
    "email": "icrawfor597@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ira",
        "lastName": "Crawford",
        "phoneNumber": "+1671-597-940-3309",
        "email": "icrawfor597@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "13.4443",
            "longitude": "144.7863"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/icrawfor"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/icrawfor"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/icrawfor"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-3-14"
    },
    "LoginInfo": {
        "username": "icrawfor",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3187 Long Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Tamuning",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96911"
    }
});
db.user.insertOne(
{
    "email": "mclayton598@TM.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mana",
        "lastName": "Clayton",
        "phoneNumber": "+61-598-946-0077",
        "email": "mclayton598@TM.com",
        "GeoSpatialInfo": {
            "latitude": "-37.2167",
            "longitude": "142.9"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mclayton@MegaFon.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mclayton"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mclayton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-9-20"
    },
    "LoginInfo": {
        "username": "mclayton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2381 Long Hill Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Armstrong",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3377"
    }
});
db.user.insertOne(
{
    "email": "lwalsh599@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Latisha",
        "lastName": "Walsh",
        "phoneNumber": "+49-599-350-9871",
        "email": "lwalsh599@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "53.8817",
            "longitude": "14.1692"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lwalsh@BT.net",
            "lwalsh@CenturyLink.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lwalsh"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lwalsh"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/lwalsh"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-9-24"
    },
    "LoginInfo": {
        "username": "lwalsh",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8349 Long Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Garz",
        "stateProvince": "MV",
        "locality": "Vorpommern-Greifswald",
        "country": "DE",
        "postalCode": "17419"
    }
});
db.user.insertOne(
{
    "email": "lbrock600@Verizon.com",
    "userType": "partner",
    "businessName": "Fat Cats Trust Ltd",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lili",
        "lastName": "Brock",
        "phoneNumber": "+44-600-946-2060",
        "email": "lbrock600@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "53.4115",
            "longitude": "-2.8394"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lbrock@Econnect.net",
            "lbrock@Econnect.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/lbrock"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-5-1"
    },
    "LoginInfo": {
        "username": "lbrock",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4664 Green Stream Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Huyton",
        "stateProvince": "England",
        "locality": "Merseyside",
        "country": "GB",
        "postalCode": "L36"
    }
});
db.user.insertOne(
{
    "email": "jcabrera601@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jose",
        "lastName": "Cabrera",
        "phoneNumber": "+441534-601-558-2068",
        "email": "jcabrera601@UI.com",
        "GeoSpatialInfo": {
            "latitude": "49.2",
            "longitude": "-2.1333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441534-129-284-0138"
        ],
        "secondaryEmailAddresses": [
            "jcabrera@Vodafone.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-12-29"
    },
    "LoginInfo": {
        "username": "jcabrera",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4323 Green Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Helier",
        "stateProvince": "Jersey Channel Islands",
        "locality": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE2"
    }
});
db.user.insertOne(
{
    "email": "jjuarez602@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jeanine",
        "lastName": "Juarez",
        "phoneNumber": "+1-602-479-1789",
        "email": "jjuarez602@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "48.5501",
            "longitude": "-71.3158"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-138-281-7238",
            "+1-355-090-1507"
        ],
        "secondaryEmailAddresses": [
            "jjuarez@SingTel.net",
            "jjuarez@Jio.net",
            "jjuarez@NII.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jjuarez"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-10-1"
    },
    "LoginInfo": {
        "username": "jjuarez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2347 Long Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Ambroise",
        "stateProvince": "QC",
        "locality": "Saguenay\/Lac-Saint-Jean",
        "country": "CA",
        "postalCode": "G7P"
    }
});
db.user.insertOne(
{
    "email": "tmonroe603@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Teddy",
        "lastName": "Monroe",
        "phoneNumber": "+52-603-759-5332",
        "email": "tmonroe603@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "19.4028",
            "longitude": "-101.298"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "tmonroe@SingTel.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/tmonroe"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/tmonroe"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-10-4"
    },
    "LoginInfo": {
        "username": "tmonroe",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9557 Big Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ziparapio el Bajo",
        "stateProvince": "MIC",
        "locality": "Madero",
        "country": "MX",
        "postalCode": "58488"
    }
});
db.user.insertOne(
{
    "email": "apena604@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alline",
        "lastName": "Pena",
        "phoneNumber": "+1-604-136-5965",
        "email": "apena604@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "30.8316",
            "longitude": "-86.677"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "apena@KTC.net",
            "apena@Millicom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/apena"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/apena"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/apena"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-2-16"
    },
    "LoginInfo": {
        "username": "apena",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "825 Big Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Baker",
        "stateProvince": "FL",
        "locality": "Okaloosa",
        "country": "US",
        "postalCode": "32531"
    }
});
db.user.insertOne(
{
    "email": "fjenkins605@Oi.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Frances",
        "lastName": "Jenkins",
        "phoneNumber": "+370-605-716-8520",
        "email": "fjenkins605@Oi.com",
        "GeoSpatialInfo": {
            "latitude": "55.75",
            "longitude": "25.5167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "fjenkins@Softbank.net",
            "fjenkins@Vodafone.net",
            "fjenkins@Safaricom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/fjenkins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-9-4"
    },
    "LoginInfo": {
        "username": "fjenkins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5049 Winding Creek Street",
        "buildingName": "Building 86",
        "floor": 3,
        "roomApartmentCondoNumber": null,
        "city": "Trumponi\u0173 k.",
        "stateProvince": "Roki\u0161kio r. sav.",
        "locality": "Roki\u0161kio r. sav.",
        "country": "LT",
        "postalCode": "42025"
    }
});
db.user.insertOne(
{
    "email": "lali606@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lesli",
        "lastName": "Ali",
        "phoneNumber": "+1-606-186-8821",
        "email": "lali606@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "21.3233",
            "longitude": "-158.0058"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lali@NII.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/lali"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-6-14"
    },
    "LoginInfo": {
        "username": "lali",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9143 Winding Mound Street",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": null,
        "city": "Kapolei",
        "stateProvince": "HI",
        "locality": "Honolulu",
        "country": "US",
        "postalCode": "96709"
    }
});
db.user.insertOne(
{
    "email": "lgross607@Sprint.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Laquita",
        "lastName": "Gross",
        "phoneNumber": "+52-607-907-2384",
        "email": "lgross607@Sprint.com",
        "GeoSpatialInfo": {
            "latitude": "21.8614",
            "longitude": "-102.7027"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-953-956-1746",
            "+52-698-757-2722",
            "+52-49-326-2065"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lgross"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-12-2"
    },
    "LoginInfo": {
        "username": "lgross",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6621 Blue Canyon Circle",
        "buildingName": null,
        "floor": 9,
        "roomApartmentCondoNumber": null,
        "city": "Sector Naval",
        "stateProvince": "DIF",
        "locality": "Azcapotzalco",
        "country": "MX",
        "postalCode": "02080"
    }
});
db.user.insertOne(
{
    "email": "ahodge608@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Angelika",
        "lastName": "Hodge",
        "phoneNumber": "+44-608-695-1333",
        "email": "ahodge608@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "54.4833",
            "longitude": "-7.1333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "ahodge@TeleSystems.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ahodge"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/ahodge"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-6-20"
    },
    "LoginInfo": {
        "username": "ahodge",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5269 Green Bridge Boulevard",
        "buildingName": "Building 1D",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Garvaghy",
        "stateProvince": "Northern Ireland",
        "locality": "County Tyrone",
        "country": "GB",
        "postalCode": "BT70"
    }
});
db.user.insertOne(
{
    "email": "kdoyle609@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kindra",
        "lastName": "Doyle",
        "phoneNumber": "+880-609-179-6113",
        "email": "kdoyle609@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "24.8984",
            "longitude": "90.8865"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+880-206-176-7731",
            "+880-247-299-3703"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-6-29"
    },
    "LoginInfo": {
        "username": "kdoyle",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7805 Blue Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Barhatta",
        "stateProvince": "H",
        "locality": "Netrakona",
        "country": "BD",
        "postalCode": "2440"
    }
});
db.user.insertOne(
{
    "email": "cmayer610@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cary",
        "lastName": "Mayer",
        "phoneNumber": "+1-610-622-7495",
        "email": "cmayer610@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "27.4685",
            "longitude": "-98.9586"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-571-712-3457",
            "+1-289-574-5806"
        ],
        "secondaryEmailAddresses": [
            "cmayer@Vivendi.net",
            "cmayer@Airtel.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cmayer"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-3-24"
    },
    "LoginInfo": {
        "username": "cmayer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8015 Long River Boulevard",
        "buildingName": "Building F8",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Oilton",
        "stateProvince": "TX",
        "locality": "Webb",
        "country": "US",
        "postalCode": "78371"
    }
});
db.user.insertOne(
{
    "email": "rcardena611@APICnet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Raymonde",
        "lastName": "Cardenas",
        "phoneNumber": "+389-611-386-6275",
        "email": "rcardena611@APICnet.com",
        "GeoSpatialInfo": {
            "latitude": "41.4664",
            "longitude": "22.0278"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+389-433-440-3717",
            "+389-59-847-0770"
        ],
        "secondaryEmailAddresses": [
            "rcardena@Chunghwa.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-12-12"
    },
    "LoginInfo": {
        "username": "rcardena",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8663 Big River Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Marena",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1426"
    }
});
db.user.insertOne(
{
    "email": "pthompso612@Jio.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Paulita",
        "lastName": "Thompson",
        "phoneNumber": "+91-612-187-5003",
        "email": "pthompso612@Jio.com",
        "GeoSpatialInfo": {
            "latitude": "21.6748",
            "longitude": "83.778"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-512-584-2337"
        ],
        "secondaryEmailAddresses": [
            "pthompso@Belgacom.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/pthompso"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/pthompso"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-4-6"
    },
    "LoginInfo": {
        "username": "pthompso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2798 Winding Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Orient Colliery Brajarajnagar",
        "stateProvince": "Brajarajnagar",
        "locality": "Jharsuguda",
        "country": "IN",
        "postalCode": "768233"
    }
});
db.user.insertOne(
{
    "email": "ehansen613@VimpelCom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Eve",
        "lastName": "Hansen",
        "phoneNumber": "+359-613-182-2148",
        "email": "ehansen613@VimpelCom.com",
        "GeoSpatialInfo": {
            "latitude": "42.95",
            "longitude": "25.85"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-666-651-8529"
        ],
        "secondaryEmailAddresses": [
            "ehansen@Bifty.net",
            "ehansen@WorldNet.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ehansen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-2-19"
    },
    "LoginInfo": {
        "username": "ehansen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4923 Blue Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041c\u0430\u0440\u0430\u0444\u0435\u043b\u0446\u0438 \/ Marafelci",
        "stateProvince": "VTR",
        "locality": "\u0415\u043b\u0435\u043d\u0430 \/ Elena",
        "country": "BG",
        "postalCode": "5070"
    }
});
db.user.insertOne(
{
    "email": "sahmed614@MegaFon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "See",
        "lastName": "Ahmed",
        "phoneNumber": "+61-614-291-3598",
        "email": "sahmed614@MegaFon.com",
        "GeoSpatialInfo": {
            "latitude": "-37.8333",
            "longitude": "143.6667"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "sahmed@Unicom.net",
            "sahmed@Chunghwa.net",
            "sahmed@UI.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sahmed"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/sahmed"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-9-21"
    },
    "LoginInfo": {
        "username": "sahmed",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6379 Short Stream Ride",
        "buildingName": "Building 49",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Illabarook",
        "stateProvince": "VIC",
        "locality": "VIC COUNTRY",
        "country": "AU",
        "postalCode": "3351"
    }
});
db.user.insertOne(
{
    "email": "mhansen615@Swisscom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Maira",
        "lastName": "Hansen",
        "phoneNumber": "+502-615-019-5278",
        "email": "mhansen615@Swisscom.com",
        "GeoSpatialInfo": {
            "latitude": "14.9",
            "longitude": "-91.4833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mhansen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-4-13"
    },
    "LoginInfo": {
        "username": "mhansen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3666 Little Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "SAN ANDRES XECUL",
        "stateProvince": "DEPTO DE TOTONICAPAN",
        "locality": "DEPTO DE TOTONICAPAN",
        "country": "GT",
        "postalCode": "08004"
    }
});
db.user.insertOne(
{
    "email": "rmendez616@Frontier.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Robby",
        "lastName": "Mendez",
        "phoneNumber": "+91-616-258-5706",
        "email": "rmendez616@Frontier.com",
        "GeoSpatialInfo": {
            "latitude": "9.728",
            "longitude": "76.7063"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-227-927-2193"
        ],
        "secondaryEmailAddresses": [
            "rmendez@MegaFon.net",
            "rmendez@Belgacom.net"
        ],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/rmendez"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/rmendez"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-6-17"
    },
    "LoginInfo": {
        "username": "rmendez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7863 Little Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Thodanal",
        "stateProvince": "Meenachil",
        "locality": "Kottayam",
        "country": "IN",
        "postalCode": "686573"
    }
});
db.user.insertOne(
{
    "email": "achase617@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Arthur",
        "lastName": "Chase",
        "phoneNumber": "+386-617-497-6240",
        "email": "achase617@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "46.3428",
            "longitude": "14.3014"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "achase@NTT.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/achase"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-7-8"
    },
    "LoginInfo": {
        "username": "achase",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8730 Little Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kri\u017ee",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "4294"
    }
});
db.user.insertOne(
{
    "email": "jconrad619@Jio.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jerlene",
        "lastName": "Conrad",
        "phoneNumber": "+39-619-510-1285",
        "email": "jconrad619@Jio.com",
        "GeoSpatialInfo": {
            "latitude": "45.792",
            "longitude": "13.4096"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+39-47-204-6468",
            "+39-419-391-8349"
        ],
        "secondaryEmailAddresses": [
            "jconrad@NTT.net",
            "jconrad@Vodafone.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jconrad"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-3-2"
    },
    "LoginInfo": {
        "username": "jconrad",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2427 Green Gully Boulevard",
        "buildingName": null,
        "floor": 20,
        "roomApartmentCondoNumber": null,
        "city": "Fiumicello",
        "stateProvince": "FV",
        "locality": "Udine",
        "country": "IT",
        "postalCode": "33050"
    }
});
db.user.insertOne(
{
    "email": "cbest620@TeleSystems.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carmelia",
        "lastName": "Best",
        "phoneNumber": "+1-620-278-3010",
        "email": "cbest620@TeleSystems.com",
        "GeoSpatialInfo": {
            "latitude": "37.3354",
            "longitude": "-81.5393"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cbest@Econnect.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/cbest"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-3-20"
    },
    "LoginInfo": {
        "username": "cbest",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "559 Short Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Elbert",
        "stateProvince": "WV",
        "locality": "McDowell",
        "country": "US",
        "postalCode": "24830"
    }
});
db.user.insertOne(
{
    "email": "dsingh621@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Drema",
        "lastName": "Singh",
        "phoneNumber": "+351-621-395-6020",
        "email": "dsingh621@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "38.569",
            "longitude": "-8.9013"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-231-682-9462"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dsingh"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-5-5"
    },
    "LoginInfo": {
        "username": "dsingh",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1657 Winding Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Palmela",
        "stateProvince": "Palmela",
        "locality": "Palmela",
        "country": "PT",
        "postalCode": "2950-224"
    }
});
db.user.insertOne(
{
    "email": "cdoyle622@Rogers.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Carletta",
        "lastName": "Doyle",
        "phoneNumber": "+44-622-888-3795",
        "email": "cdoyle622@Rogers.com",
        "GeoSpatialInfo": {
            "latitude": "52.0784",
            "longitude": "-0.7922"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-63-410-6493",
            "+44-234-334-5122",
            "+44-104-501-9979"
        ],
        "secondaryEmailAddresses": [
            "cdoyle@SEEDnet.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/cdoyle"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-3-21"
    },
    "LoginInfo": {
        "username": "cdoyle",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5609 Winding Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Haversham",
        "stateProvince": "England",
        "locality": "Buckinghamshire",
        "country": "GB",
        "postalCode": "MK19"
    }
});
db.user.insertOne(
{
    "email": "jvaughn623@Telstra.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Joseph",
        "lastName": "Vaughn",
        "phoneNumber": "+590-623-890-8786",
        "email": "jvaughn623@Telstra.com",
        "GeoSpatialInfo": {
            "latitude": "16.271",
            "longitude": "-61.5045"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jvaughn@Telekom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/jvaughn"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/jvaughn"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-2-13"
    },
    "LoginInfo": {
        "username": "jvaughn",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5834 Red Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Les Abymes",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97186 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "jfox624@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Junior",
        "lastName": "Fox",
        "phoneNumber": "+44-624-955-8976",
        "email": "jfox624@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "51.1837",
            "longitude": "1.0686"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "jfox@UI.net",
            "jfox@Telstra.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/jfox"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-1-11"
    },
    "LoginInfo": {
        "username": "jfox",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7817 Little Gully Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "46",
        "city": "Stelling Minnis",
        "stateProvince": "England",
        "locality": "Kent",
        "country": "GB",
        "postalCode": "CT4"
    }
});
db.user.insertOne(
{
    "email": "kchamber625@Etisalat.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Katharyn",
        "lastName": "Chambers",
        "phoneNumber": "+598-625-922-9334",
        "email": "kchamber625@Etisalat.com",
        "GeoSpatialInfo": {
            "latitude": "-34.4203",
            "longitude": "-56.4249"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-8-15"
    },
    "LoginInfo": {
        "username": "kchamber",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4705 Big Woods Avenue",
        "buildingName": null,
        "floor": 11,
        "roomApartmentCondoNumber": null,
        "city": "Ituzaingo",
        "stateProvince": "San Jose",
        "locality": "San Jose",
        "country": "UY",
        "postalCode": "90200"
    }
});
db.user.insertOne(
{
    "email": "zhamilto626@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Zenia",
        "lastName": "Hamilton",
        "phoneNumber": "+44-626-276-4055",
        "email": "zhamilto626@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "52.0824",
            "longitude": "1.2528"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-290-116-0850",
            "+44-343-108-6114"
        ],
        "secondaryEmailAddresses": [
            "zhamilto@TT.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/zhamilto"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-7-19"
    },
    "LoginInfo": {
        "username": "zhamilto",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "525 Green Hill Circle",
        "buildingName": null,
        "floor": 14,
        "roomApartmentCondoNumber": null,
        "city": "Little Bealings",
        "stateProvince": "England",
        "locality": "Suffolk",
        "country": "GB",
        "postalCode": "IP13"
    }
});
db.user.insertOne(
{
    "email": "kgates627@Belgacom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ken",
        "lastName": "Gates",
        "phoneNumber": "+31-627-724-9848",
        "email": "kgates627@Belgacom.com",
        "GeoSpatialInfo": {
            "latitude": "52.9164",
            "longitude": "6.2726"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "kgates@Telekom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kgates"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/kgates"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-11-13"
    },
    "LoginInfo": {
        "username": "kgates",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3461 Little Creek Avenue",
        "buildingName": null,
        "floor": 12,
        "roomApartmentCondoNumber": null,
        "city": "Wateren",
        "stateProvince": "Westerveld",
        "locality": "Westerveld",
        "country": "NL",
        "postalCode": "8438"
    }
});
db.user.insertOne(
{
    "email": "mzavala628@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Meg",
        "lastName": "Zavala",
        "phoneNumber": "+1-628-361-8906",
        "email": "mzavala628@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "43.6913",
            "longitude": "-79.3116"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-68-760-6110"
        ],
        "secondaryEmailAddresses": [
            "mzavala@OpenWorld.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mzavala"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mzavala"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-7-11"
    },
    "LoginInfo": {
        "username": "mzavala",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2332 Green Stream Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "East York (Woodbine Heights)",
        "stateProvince": "ON",
        "locality": "East York ",
        "country": "CA",
        "postalCode": "M4C"
    }
});
db.user.insertOne(
{
    "email": "sdavila629@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Scott",
        "lastName": "Davila",
        "phoneNumber": "+598-629-090-5832",
        "email": "sdavila629@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "-31.9435",
            "longitude": "-55.7274"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+598-918-890-8869",
            "+598-248-754-0025",
            "+598-401-645-7578"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/sdavila"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/sdavila"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-9-5"
    },
    "LoginInfo": {
        "username": "sdavila",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5746 Winding Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Barrio Santangelo",
        "stateProvince": "Tacuarembo",
        "locality": "Tacuarembo",
        "country": "UY",
        "postalCode": "45000"
    }
});
db.user.insertOne(
{
    "email": "srocha630@OTE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shawn",
        "lastName": "Rocha",
        "phoneNumber": "+1-630-021-0601",
        "email": "srocha630@OTE.com",
        "GeoSpatialInfo": {
            "latitude": "52.2765",
            "longitude": "-113.7063"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-437-001-8585"
        ],
        "secondaryEmailAddresses": [
            "srocha@Relcom.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/srocha"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/srocha"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-6-28"
    },
    "LoginInfo": {
        "username": "srocha",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2444 Big Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Red Deer County",
        "stateProvince": "AB",
        "locality": "Red Deer ",
        "country": "CA",
        "postalCode": "T4E"
    }
});
db.user.insertOne(
{
    "email": "bbaxter631@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brooks",
        "lastName": "Baxter",
        "phoneNumber": "+7-631-751-1987",
        "email": "bbaxter631@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "67.45",
            "longitude": "153.6833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-401-871-6950"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-11-10"
    },
    "LoginInfo": {
        "username": "bbaxter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1874 Little Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0421\u0440\u0435\u0434\u043d\u0435\u043a\u043e\u043b\u044b\u043c\u0441\u043a",
        "stateProvince": "\u0421\u0420\u0415\u0414\u041d\u0415\u041a\u041e\u041b\u042b\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0421\u0420\u0415\u0414\u041d\u0415\u041a\u041e\u041b\u042b\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "678790"
    }
});
db.user.insertOne(
{
    "email": "dkent632@Etisalat.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Donn",
        "lastName": "Kent",
        "phoneNumber": "+44-632-090-5095",
        "email": "dkent632@Etisalat.com",
        "GeoSpatialInfo": {
            "latitude": "51.1973",
            "longitude": "-1.3835"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "dkent@Zain.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dkent"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-11-8"
    },
    "LoginInfo": {
        "username": "dkent",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4228 Short Bridge Road",
        "buildingName": null,
        "floor": 1,
        "roomApartmentCondoNumber": null,
        "city": "Longparish",
        "stateProvince": "England",
        "locality": "Hampshire",
        "country": "GB",
        "postalCode": "SP11"
    }
});
db.user.insertOne(
{
    "email": "lthompso633@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Loyce",
        "lastName": "Thompson",
        "phoneNumber": "+441534-633-543-0928",
        "email": "lthompso633@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "49.2",
            "longitude": "-2.1333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+441534-222-414-0589",
            "+441534-257-220-9906"
        ],
        "secondaryEmailAddresses": [
            "lthompso@WorldNet.net",
            "lthompso@Vodafone.net",
            "lthompso@Telefonica.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-1-25"
    },
    "LoginInfo": {
        "username": "lthompso",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9466 Big Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St Helier",
        "stateProvince": "Jersey Channel Islands",
        "locality": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE2"
    }
});
db.user.insertOne(
{
    "email": "vlarson634@BT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Virgilio",
        "lastName": "Larson",
        "phoneNumber": "+91-634-120-6153",
        "email": "vlarson634@BT.com",
        "GeoSpatialInfo": {
            "latitude": "24.6783",
            "longitude": "94.159"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-794-451-1600"
        ],
        "secondaryEmailAddresses": [
            "vlarson@MTN.net",
            "vlarson@Softbank.net",
            "vlarson@Relcom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/vlarson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-8-16"
    },
    "LoginInfo": {
        "username": "vlarson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4403 Red Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "24",
        "city": "Bongbal Khullen",
        "stateProvince": "Nil",
        "locality": "Thoubal",
        "country": "IN",
        "postalCode": "795149"
    }
});
db.user.insertOne(
{
    "email": "dmorse635@TT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Dong",
        "lastName": "Morse",
        "phoneNumber": "+34-635-750-9112",
        "email": "dmorse635@TT.com",
        "GeoSpatialInfo": {
            "latitude": "42.9362",
            "longitude": "-8.259"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-148-415-7778",
            "+34-272-473-3924"
        ],
        "secondaryEmailAddresses": [
            "dmorse@APICnet.net",
            "dmorse@PTCL.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/dmorse"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/dmorse"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dmorse"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-7-10"
    },
    "LoginInfo": {
        "username": "dmorse",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9805 Little River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bidueiros (Santa Maria)",
        "stateProvince": "GA",
        "locality": "Pontevedra",
        "country": "ES",
        "postalCode": "36518"
    }
});
db.user.insertOne(
{
    "email": "sestes636@Bifty.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Stephan",
        "lastName": "Estes",
        "phoneNumber": "+91-636-401-4787",
        "email": "sestes636@Bifty.com",
        "GeoSpatialInfo": {
            "latitude": "20.6043",
            "longitude": "83.2152"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-366-816-9413"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/sestes"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-9-28"
    },
    "LoginInfo": {
        "username": "sestes",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4450 Blue Hill Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bankel",
        "stateProvince": "Titilagarh",
        "locality": "Balangir",
        "country": "IN",
        "postalCode": "767037"
    }
});
db.user.insertOne(
{
    "email": "mbartlet637@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mercy",
        "lastName": "Bartlett",
        "phoneNumber": "+64-637-665-7564",
        "email": "mbartlet637@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "-39.7667",
            "longitude": "176.7333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-900-510-3896",
            "+64-541-773-2244"
        ],
        "secondaryEmailAddresses": [
            "mbartlet@Oi.net",
            "mbartlet@Telus.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mbartlet"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mbartlet"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-8-10"
    },
    "LoginInfo": {
        "username": "mbartlet",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5051 Green Creek Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Poukawa",
        "stateProvince": "F2",
        "locality": "Hawke's Bay",
        "country": "NZ",
        "postalCode": "4178"
    }
});
db.user.insertOne(
{
    "email": "sjuarez638@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shelton",
        "lastName": "Juarez",
        "phoneNumber": "+1-638-642-3599",
        "email": "sjuarez638@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "46.2129",
            "longitude": "-64.2784"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-745-896-6409",
            "+1-876-222-5336"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-8-3"
    },
    "LoginInfo": {
        "username": "sjuarez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9611 Red Gully Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Cap-Pel\u00e9",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E4N"
    }
});
db.user.insertOne(
{
    "email": "valexand639@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vivienne",
        "lastName": "Alexander",
        "phoneNumber": "+27-639-399-3642",
        "email": "valexand639@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "-34.15",
            "longitude": "19.9"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+27-312-708-4254"
        ],
        "secondaryEmailAddresses": [
            "valexand@Softbank.net",
            "valexand@Telia.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/valexand"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/valexand"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/valexand"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/valexand"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-8-29"
    },
    "LoginInfo": {
        "username": "valexand",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3629 Green Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Caledon",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "7250"
    }
});
db.user.insertOne(
{
    "email": "benglish640@Jio.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Bettina",
        "lastName": "English",
        "phoneNumber": "+91-640-548-2303",
        "email": "benglish640@Jio.com",
        "GeoSpatialInfo": {
            "latitude": "14.0386",
            "longitude": "77.5224"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/benglish"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/benglish"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-10-14"
    },
    "LoginInfo": {
        "username": "benglish",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "920 Little Hill Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gudipalli",
        "stateProvince": "Somandepalli",
        "locality": "Ananthapur",
        "country": "IN",
        "postalCode": "515122"
    }
});
db.user.insertOne(
{
    "email": "lrodgers641@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lanora",
        "lastName": "Rodgers",
        "phoneNumber": "+7-641-427-0334",
        "email": "lrodgers641@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "48.8833",
            "longitude": "140.1333"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+7-92-742-7898",
            "+7-30-714-2498"
        ],
        "secondaryEmailAddresses": [
            "lrodgers@PLDT.net",
            "lrodgers@ATT.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lrodgers"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/lrodgers"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-5-22"
    },
    "LoginInfo": {
        "username": "lrodgers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9094 Winding Gulch Circle",
        "buildingName": "Building F1",
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u0413\u0430\u0442\u043a\u0430",
        "stateProvince": "\u0421\u041e\u0412\u0415\u0422\u0421\u041a\u041e-\u0413\u0410\u0412\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0421\u041e\u0412\u0415\u0422\u0421\u041a\u041e-\u0413\u0410\u0412\u0410\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "682841"
    }
});
db.user.insertOne(
{
    "email": "lstewart642@Telenor.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Laureen",
        "lastName": "Stewart",
        "phoneNumber": "+1-642-393-0552",
        "email": "lstewart642@Telenor.com",
        "GeoSpatialInfo": {
            "latitude": "42.578",
            "longitude": "-92.1588"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-296-018-2980"
        ],
        "secondaryEmailAddresses": [
            "lstewart@KTC.net",
            "lstewart@EUnet.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lstewart"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/lstewart"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-10-13"
    },
    "LoginInfo": {
        "username": "lstewart",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7889 Long Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dunkerton",
        "stateProvince": "IA",
        "locality": "Black Hawk",
        "country": "US",
        "postalCode": "50626"
    }
});
db.user.insertOne(
{
    "email": "rclarke643@Movil.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Rocky",
        "lastName": "Clarke",
        "phoneNumber": "+596-643-707-5277",
        "email": "rclarke643@Movil.com",
        "GeoSpatialInfo": {
            "latitude": "14.6089",
            "longitude": "-61.0733"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "rclarke@EUnet.net",
            "rclarke@KDDI.net",
            "rclarke@AIS.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-5-20"
    },
    "LoginInfo": {
        "username": "rclarke",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9884 Winding Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97241 CEDEX"
    }
});
db.user.insertOne(
{
    "email": "srivers644@PTCL.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sung",
        "lastName": "Rivers",
        "phoneNumber": "+44-644-202-7323",
        "email": "srivers644@PTCL.com",
        "GeoSpatialInfo": {
            "latitude": "56.8432",
            "longitude": "-5.2255"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-0-073-7668",
            "+44-715-882-2305"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/srivers"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-10-2"
    },
    "LoginInfo": {
        "username": "srivers",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5932 Long River Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Blaich",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "PH33"
    }
});
db.user.insertOne(
{
    "email": "cshort645@KTC.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cherri",
        "lastName": "Short",
        "phoneNumber": "+49-645-498-1812",
        "email": "cshort645@KTC.com",
        "GeoSpatialInfo": {
            "latitude": "51.7",
            "longitude": "14.625"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "cshort@Vodafone.net",
            "cshort@Telkom.net",
            "cshort@CCI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cshort"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cshort"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-12-15"
    },
    "LoginInfo": {
        "username": "cshort",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7140 Green River Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Gro\u00df Schacksdorf-Simmersdorf",
        "stateProvince": "BB",
        "locality": "Landkreis Spree-Nei\u00dfe",
        "country": "DE",
        "postalCode": "03149"
    }
});
db.user.insertOne(
{
    "email": "agomez646@CenturyLink.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Abe",
        "lastName": "Gomez",
        "phoneNumber": "+1-646-675-9924",
        "email": "agomez646@CenturyLink.com",
        "GeoSpatialInfo": {
            "latitude": "46.1109",
            "longitude": "-60.2092"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-825-891-2593",
            "+1-139-174-7330"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/agomez"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-2-14"
    },
    "LoginInfo": {
        "username": "agomez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8816 Little Stream Street",
        "buildingName": null,
        "floor": 7,
        "roomApartmentCondoNumber": null,
        "city": "Sydney Central",
        "stateProvince": "NS",
        "locality": "Sydney",
        "country": "CA",
        "postalCode": "B1S"
    }
});
db.user.insertOne(
{
    "email": "lroman647@ICom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Latonia",
        "lastName": "Roman",
        "phoneNumber": "+64-647-854-8001",
        "email": "lroman647@ICom.com",
        "GeoSpatialInfo": {
            "latitude": "-39.9333",
            "longitude": "176.5"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-430-346-4983",
            "+64-59-025-1783",
            "+64-828-190-7523"
        ],
        "secondaryEmailAddresses": [
            "lroman@SEEDnet.net",
            "lroman@NTT.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/lroman"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1929-2-4"
    },
    "LoginInfo": {
        "username": "lroman",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7593 Winding Stream Drive",
        "buildingName": null,
        "floor": 11,
        "roomApartmentCondoNumber": null,
        "city": "Ruataniwha",
        "stateProvince": "F2",
        "locality": "Hawke's Bay",
        "country": "NZ",
        "postalCode": "4283"
    }
});
db.user.insertOne(
{
    "email": "sfrederi648@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sal",
        "lastName": "Frederick",
        "phoneNumber": "+44-648-120-8737",
        "email": "sfrederi648@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "52.303",
            "longitude": "-1.6886"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-109-178-6754",
            "+44-162-177-1145"
        ],
        "secondaryEmailAddresses": [
            "sfrederi@Oi.net",
            "sfrederi@Telenor.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sfrederi"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/sfrederi"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/sfrederi"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-11-5"
    },
    "LoginInfo": {
        "username": "sfrederi",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9449 Blue Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Shrewley",
        "stateProvince": "England",
        "locality": "Warwickshire",
        "country": "GB",
        "postalCode": "CV35"
    }
});
db.user.insertOne(
{
    "email": "tswanson649@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Tommie",
        "lastName": "Swanson",
        "phoneNumber": "+351-649-464-3635",
        "email": "tswanson649@UI.com",
        "GeoSpatialInfo": {
            "latitude": "41.6474",
            "longitude": "-8.7007"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "tswanson@Telstra.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/tswanson"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/tswanson"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-9-11"
    },
    "LoginInfo": {
        "username": "tswanson",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4313 Winding Hill Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Barroselas",
        "stateProvince": "Barroselas",
        "locality": "Viana do Castelo",
        "country": "PT",
        "postalCode": "4905-424"
    }
});
db.user.insertOne(
{
    "email": "mwood650@Telia.com",
    "userType": "partner",
    "businessName": "Industrious Associates Ltd",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mariano",
        "lastName": "Wood",
        "phoneNumber": "+91-650-814-7692",
        "email": "mwood650@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "29.4816",
            "longitude": "79.46"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-350-811-9273",
            "+91-328-672-3136"
        ],
        "secondaryEmailAddresses": [
            "mwood@WorldNet.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/mwood"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/mwood"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-1-30"
    },
    "LoginInfo": {
        "username": "mwood",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3939 Blue Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dhaniakote",
        "stateProvince": "Kosya Kutauli",
        "locality": "Nainital",
        "country": "IN",
        "postalCode": "263135"
    }
});
db.user.insertOne(
{
    "email": "nvargas651@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Noah",
        "lastName": "Vargas",
        "phoneNumber": "+359-651-563-7696",
        "email": "nvargas651@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "43.0478",
            "longitude": "23.0108"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+359-134-778-7439"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/nvargas"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-8-2"
    },
    "LoginInfo": {
        "username": "nvargas",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4343 Big Ridge Way",
        "buildingName": "Building 7C",
        "floor": 6,
        "roomApartmentCondoNumber": null,
        "city": "\u0420\u0430\u0432\u043d\u0430 \/ Ravna",
        "stateProvince": "SFO",
        "locality": "\u0413\u043e\u0434\u0435\u0447 \/ Godech",
        "country": "BG",
        "postalCode": "2249"
    }
});
db.user.insertOne(
{
    "email": "kpayne652@Millicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kristopher",
        "lastName": "Payne",
        "phoneNumber": "+91-652-315-1623",
        "email": "kpayne652@Millicom.com",
        "GeoSpatialInfo": {
            "latitude": "18.5598",
            "longitude": "74.1866"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-737-790-9197"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/kpayne"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/kpayne"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-9-6"
    },
    "LoginInfo": {
        "username": "kpayne",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3031 Winding Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kotawada",
        "stateProvince": "Ratnagiri",
        "locality": "Ratnagiri",
        "country": "IN",
        "postalCode": "415617"
    }
});
db.user.insertOne(
{
    "email": "chiggins653@MTN.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Cletus",
        "lastName": "Higgins",
        "phoneNumber": "+389-653-168-0754",
        "email": "chiggins653@MTN.com",
        "GeoSpatialInfo": {
            "latitude": "41.6836",
            "longitude": "21.1442"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+389-960-427-4066",
            "+389-935-688-4939"
        ],
        "secondaryEmailAddresses": [
            "chiggins@Bifty.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/chiggins"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-11-19"
    },
    "LoginInfo": {
        "username": "chiggins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2995 Winding Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Samokov",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "6535"
    }
});
db.user.insertOne(
{
    "email": "pbarnes654@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Palmer",
        "lastName": "Barnes",
        "phoneNumber": "+1-654-417-1784",
        "email": "pbarnes654@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "30.2201",
            "longitude": "-92.6574"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/pbarnes"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/pbarnes"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-8-23"
    },
    "LoginInfo": {
        "username": "pbarnes",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5680 Short River Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jennings",
        "stateProvince": "LA",
        "locality": "Jefferson Davis",
        "country": "US",
        "postalCode": "70546"
    }
});
db.user.insertOne(
{
    "email": "jweeks655@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jamal",
        "lastName": "Weeks",
        "phoneNumber": "+52-655-218-1338",
        "email": "jweeks655@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "16.6211",
            "longitude": "-93.8386"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+52-345-585-8948",
            "+52-484-632-3503"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/jweeks"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-2-17"
    },
    "LoginInfo": {
        "username": "jweeks",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2484 Big Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "El Oasis",
        "stateProvince": "CHP",
        "locality": "Cintalapa",
        "country": "MX",
        "postalCode": "30429"
    }
});
db.user.insertOne(
{
    "email": "cmcclure656@AIS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Clementine",
        "lastName": "Mcclure",
        "phoneNumber": "+61-656-960-7189",
        "email": "cmcclure656@AIS.com",
        "GeoSpatialInfo": {
            "latitude": "-35.2452",
            "longitude": "147.9929"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-166-292-7851",
            "+61-5-644-2375"
        ],
        "secondaryEmailAddresses": [
            "cmcclure@APICnet.net",
            "cmcclure@MegaFon.net",
            "cmcclure@Tata.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/cmcclure"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-6-17"
    },
    "LoginInfo": {
        "username": "cmcclure",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8965 Red Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Califat",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2729"
    }
});
db.user.insertOne(
{
    "email": "kvazquez657@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kurt",
        "lastName": "Vazquez",
        "phoneNumber": "+420-657-609-8110",
        "email": "kvazquez657@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "49.4",
            "longitude": "13.15"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+420-990-840-1922"
        ],
        "secondaryEmailAddresses": [
            "kvazquez@CCI.net",
            "kvazquez@Vivendi.net",
            "kvazquez@Etisalat.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/kvazquez"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kvazquez"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-6-3"
    },
    "LoginInfo": {
        "username": "kvazquez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "6321 Big Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "V\u00edlov",
        "stateProvince": "Doma\u017elice",
        "locality": "Doma\u017elice",
        "country": "CZ",
        "postalCode": "345 06"
    }
});
db.user.insertOne(
{
    "email": "shobbs658@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Shelton",
        "lastName": "Hobbs",
        "phoneNumber": "+91-658-720-9832",
        "email": "shobbs658@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "26.4028",
            "longitude": "76.7029"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-896-860-8498",
            "+91-494-023-8713"
        ],
        "secondaryEmailAddresses": [
            "shobbs@AIS.net",
            "shobbs@Telia.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/shobbs"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/shobbs"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-2-23"
    },
    "LoginInfo": {
        "username": "shobbs",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8796 Little Tree Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chauragon",
        "stateProvince": "Sapotara",
        "locality": "Karauli",
        "country": "IN",
        "postalCode": "322203"
    }
});
db.user.insertOne(
{
    "email": "gdunlap659@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gwen",
        "lastName": "Dunlap",
        "phoneNumber": "+27-659-980-6305",
        "email": "gdunlap659@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "-26.1",
            "longitude": "28.3833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+27-812-437-2901",
            "+27-715-940-6242"
        ],
        "secondaryEmailAddresses": [
            "gdunlap@Vodafone.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/gdunlap"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/gdunlap"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-12-3"
    },
    "LoginInfo": {
        "username": "gdunlap",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3718 Green Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Petit",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "1501"
    }
});
db.user.insertOne(
{
    "email": "flucero660@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Felica",
        "lastName": "Lucero",
        "phoneNumber": "+91-660-815-2421",
        "email": "flucero660@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "23.2187",
            "longitude": "85.0393"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-393-420-0106"
        ],
        "secondaryEmailAddresses": [
            "flucero@TelecomItalia.net",
            "flucero@CenturyLink.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/flucero"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/flucero"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/flucero"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-8-9"
    },
    "LoginInfo": {
        "username": "flucero",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4752 Little Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Jurdag",
        "stateProvince": "Khunti",
        "locality": "Ranchi",
        "country": "IN",
        "postalCode": "835210"
    }
});
db.user.insertOne(
{
    "email": "cbaker661@Frontier.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Clinton",
        "lastName": "Baker",
        "phoneNumber": "+64-661-142-7507",
        "email": "cbaker661@Frontier.com",
        "GeoSpatialInfo": {
            "latitude": "-44.0333",
            "longitude": "170.8833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+64-32-389-3729"
        ],
        "secondaryEmailAddresses": [
            "cbaker@PTCL.net",
            "cbaker@APICnet.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/cbaker"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/cbaker"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-2-19"
    },
    "LoginInfo": {
        "username": "cbaker",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7613 Winding Hill Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Waikarua",
        "stateProvince": "E9",
        "locality": "Canterbury",
        "country": "NZ",
        "postalCode": "7987"
    }
});
db.user.insertOne(
{
    "email": "jayala662@Unicom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Jamika",
        "lastName": "Ayala",
        "phoneNumber": "+1-662-092-6625",
        "email": "jayala662@Unicom.com",
        "GeoSpatialInfo": {
            "latitude": "44.778",
            "longitude": "-94.1616"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-518-289-2833"
        ],
        "secondaryEmailAddresses": [
            "jayala@Orange.net",
            "jayala@Vivendi.net",
            "jayala@CenturyLink.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-2-6"
    },
    "LoginInfo": {
        "username": "jayala",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5549 Big Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Glencoe",
        "stateProvince": "MN",
        "locality": "McLeod",
        "country": "US",
        "postalCode": "55336"
    }
});
db.user.insertOne(
{
    "email": "dbarber663@Telia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Darrick",
        "lastName": "Barber",
        "phoneNumber": "+354-663-627-0417",
        "email": "dbarber663@Telia.com",
        "GeoSpatialInfo": {
            "latitude": "63.8873",
            "longitude": "-16.6965"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+354-845-645-7070",
            "+354-805-369-5919",
            "+354-839-316-1060"
        ],
        "secondaryEmailAddresses": [
            "dbarber@LGUplus.net",
            "dbarber@NII.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/dbarber"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/dbarber"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dbarber"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-10-3"
    },
    "LoginInfo": {
        "username": "dbarber",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1616 Green Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u00d6r\u00e6fum",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "785"
    }
});
db.user.insertOne(
{
    "email": "shiggins664@WorldNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Stefany",
        "lastName": "Higgins",
        "phoneNumber": "+91-664-082-1175",
        "email": "shiggins664@WorldNet.com",
        "GeoSpatialInfo": {
            "latitude": "24.2925",
            "longitude": "88.0692"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-895-943-4589",
            "+91-669-167-7427"
        ],
        "secondaryEmailAddresses": [
            "shiggins@UI.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/shiggins"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/shiggins"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-9-20"
    },
    "LoginInfo": {
        "username": "shiggins",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4903 Big Bend Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pulinda",
        "stateProvince": "Murshidabad",
        "locality": "Murshidabad",
        "country": "IN",
        "postalCode": "742134"
    }
});
db.user.insertOne(
{
    "email": "orose665@TelecomItalia.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Orlando",
        "lastName": "Rose",
        "phoneNumber": "+35818-665-375-0891",
        "email": "orose665@TelecomItalia.com",
        "GeoSpatialInfo": {
            "latitude": "60.0316",
            "longitude": "20.4605"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "orose@KDDI.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/orose"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-1-25"
    },
    "LoginInfo": {
        "username": "orose",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8210 Long Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "F\u00f6gl\u00f6",
        "stateProvince": "F\u00f6gl\u00f6",
        "locality": "F\u00f6gl\u00f6",
        "country": "AX",
        "postalCode": "22710"
    }
});
db.user.insertOne(
{
    "email": "sfields666@Access.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Son",
        "lastName": "Fields",
        "phoneNumber": "+61-666-028-4595",
        "email": "sfields666@Access.com",
        "GeoSpatialInfo": {
            "latitude": "-21.0833",
            "longitude": "149.0167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "sfields@MTN.net",
            "sfields@Jio.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/sfields"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-6-15"
    },
    "LoginInfo": {
        "username": "sfields",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1010 Green Bridge Drive",
        "buildingName": null,
        "floor": 18,
        "roomApartmentCondoNumber": "87",
        "city": "The Leap",
        "stateProvince": "QLD",
        "locality": "CENTRAL QLD",
        "country": "AU",
        "postalCode": "4740"
    }
});
db.user.insertOne(
{
    "email": "pwells667@Ooredoo.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ping",
        "lastName": "Wells",
        "phoneNumber": "+506-667-907-2679",
        "email": "pwells667@Ooredoo.com",
        "GeoSpatialInfo": {
            "latitude": "10.8443",
            "longitude": "-85.0197"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+506-94-865-3274",
            "+506-427-891-6301",
            "+506-380-077-2354"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/pwells"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/pwells"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-1-5"
    },
    "LoginInfo": {
        "username": "pwells",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "222 Winding Tree Street",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Upala",
        "stateProvince": "Upala",
        "locality": "Upala",
        "country": "CR",
        "postalCode": "21301"
    }
});
db.user.insertOne(
{
    "email": "bhoover668@TeleSystems.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brant",
        "lastName": "Hoover",
        "phoneNumber": "+44-668-495-8180",
        "email": "bhoover668@TeleSystems.com",
        "GeoSpatialInfo": {
            "latitude": "50.6331",
            "longitude": "-4.3975"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-133-670-9039",
            "+44-894-264-2225"
        ],
        "secondaryEmailAddresses": [
            "bhoover@Telenor.net",
            "bhoover@Access.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/bhoover"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/bhoover"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-8-6"
    },
    "LoginInfo": {
        "username": "bhoover",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9266 Green Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "E8",
        "city": "Liftondown",
        "stateProvince": "England",
        "locality": "Cornwall",
        "country": "GB",
        "postalCode": "PL15"
    }
});
db.user.insertOne(
{
    "email": "bkhan669@Telecom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Brain",
        "lastName": "Khan",
        "phoneNumber": "+389-669-076-4932",
        "email": "bkhan669@Telecom.com",
        "GeoSpatialInfo": {
            "latitude": "41.1164",
            "longitude": "21.4842"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "bkhan@SingTel.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/bkhan"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/bkhan"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-3-19"
    },
    "LoginInfo": {
        "username": "bkhan",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9228 Red Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dedebalci",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "7212"
    }
});
db.user.insertOne(
{
    "email": "mjenning670@Softbank.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Marlin",
        "lastName": "Jennings",
        "phoneNumber": "+61-670-372-7416",
        "email": "mjenning670@Softbank.com",
        "GeoSpatialInfo": {
            "latitude": "-39.8478",
            "longitude": "143.9795"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mjenning@TeleSystems.net",
            "mjenning@NII.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-9-20"
    },
    "LoginInfo": {
        "username": "mjenning",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "53 Long Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Yarra Creek",
        "stateProvince": "TAS",
        "locality": "Tasmania",
        "country": "AU",
        "postalCode": "7256"
    }
});
db.user.insertOne(
{
    "email": "smason671@ICom.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Sam",
        "lastName": "Mason",
        "phoneNumber": "+386-671-998-1051",
        "email": "smason671@ICom.com",
        "GeoSpatialInfo": {
            "latitude": "45.9042",
            "longitude": "15.0217"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+386-92-809-9607",
            "+386-63-720-5377"
        ],
        "secondaryEmailAddresses": [
            "smason@KDDI.net",
            "smason@MaxComm.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-2-6"
    },
    "LoginInfo": {
        "username": "smason",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9556 Red Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Trebnje",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "8210"
    }
});
db.user.insertOne(
{
    "email": "acrane672@NordNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alton",
        "lastName": "Crane",
        "phoneNumber": "+91-672-920-3163",
        "email": "acrane672@NordNet.com",
        "GeoSpatialInfo": {
            "latitude": "8.4954",
            "longitude": "76.9305"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/acrane"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1929-7-29"
    },
    "LoginInfo": {
        "username": "acrane",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9832 Little Gully Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "11",
        "city": "Thiruvananthapuram  Pettah",
        "stateProvince": "Thiruvananthapuram",
        "locality": "Thiruvananthapuram",
        "country": "IN",
        "postalCode": "695024"
    }
});
db.user.insertOne(
{
    "email": "vmolina673@Orange.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Vinita",
        "lastName": "Molina",
        "phoneNumber": "+34-673-876-5459",
        "email": "vmolina673@Orange.com",
        "GeoSpatialInfo": {
            "latitude": "43.2627",
            "longitude": "-2.9253"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+34-450-067-9873"
        ],
        "secondaryEmailAddresses": [
            "vmolina@DaxNet.net",
            "vmolina@AIS.net",
            "vmolina@Access.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/vmolina"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/vmolina"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-2-2"
    },
    "LoginInfo": {
        "username": "vmolina",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7072 Red Bough Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Bilbao",
        "stateProvince": "PV",
        "locality": "Vizcaya",
        "country": "ES",
        "postalCode": "48013"
    }
});
db.user.insertOne(
{
    "email": "kbaxter674@Turkcell.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Kimberely",
        "lastName": "Baxter",
        "phoneNumber": "+61-674-188-9799",
        "email": "kbaxter674@Turkcell.com",
        "GeoSpatialInfo": {
            "latitude": "-36.3833",
            "longitude": "147.05"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-30-655-9758"
        ],
        "secondaryEmailAddresses": [
            "kbaxter@SKTelecom.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/kbaxter"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-11-4"
    },
    "LoginInfo": {
        "username": "kbaxter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1344 Red Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kergunyah",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3691"
    }
});
db.user.insertOne(
{
    "email": "mahmed675@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Mitzie",
        "lastName": "Ahmed",
        "phoneNumber": "+94-675-602-0327",
        "email": "mahmed675@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "7.2162",
            "longitude": "80.4483"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "mahmed@CCI.net"
        ],
        "socialMedia": {
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/mahmed"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-9-6"
    },
    "LoginInfo": {
        "username": "mahmed",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4237 Short Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Ussapitiya",
        "stateProvince": "Kegalle",
        "locality": "Kegalle",
        "country": "LK",
        "postalCode": "71510"
    }
});
db.user.insertOne(
{
    "email": "mmoyer676@CCI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Margy",
        "lastName": "Moyer",
        "phoneNumber": "+1-676-738-2018",
        "email": "mmoyer676@CCI.com",
        "GeoSpatialInfo": {
            "latitude": "43.612",
            "longitude": "-97.0697"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/mmoyer"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/mmoyer"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/mmoyer"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-12-3"
    },
    "LoginInfo": {
        "username": "mmoyer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9620 Little Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Humboldt",
        "stateProvince": "SD",
        "locality": "Minnehaha",
        "country": "US",
        "postalCode": "57035"
    }
});
db.user.insertOne(
{
    "email": "akirby677@Chunghwa.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Alexander",
        "lastName": "Kirby",
        "phoneNumber": "+91-677-545-7726",
        "email": "akirby677@Chunghwa.com",
        "GeoSpatialInfo": {
            "latitude": "21.3791",
            "longitude": "72.6521"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/akirby"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-9-9"
    },
    "LoginInfo": {
        "username": "akirby",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8142 Green Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Lilapore",
        "stateProvince": "Valsad",
        "locality": "Valsad",
        "country": "IN",
        "postalCode": "396030"
    }
});
db.user.insertOne(
{
    "email": "eguevara678@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Erline",
        "lastName": "Guevara",
        "phoneNumber": "+44-678-167-0440",
        "email": "eguevara678@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "53.318",
            "longitude": "-0.9758"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-255-216-3766"
        ],
        "secondaryEmailAddresses": [
            "eguevara@Sprint.net",
            "eguevara@ATT.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-12-13"
    },
    "LoginInfo": {
        "username": "eguevara",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2608 Winding Mountain Street",
        "buildingName": null,
        "floor": 15,
        "roomApartmentCondoNumber": null,
        "city": "Babworth",
        "stateProvince": "England",
        "locality": "Nottinghamshire",
        "country": "GB",
        "postalCode": "DN22"
    }
});
db.user.insertOne(
{
    "email": "eharding679@Telus.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ellsworth",
        "lastName": "Harding",
        "phoneNumber": "+36-679-720-3169",
        "email": "eharding679@Telus.com",
        "GeoSpatialInfo": {
            "latitude": "48.2167",
            "longitude": "22.0833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+36-826-161-8473"
        ],
        "secondaryEmailAddresses": [
            "eharding@WorldNet.net",
            "eharding@UI.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/eharding"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/eharding"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/eharding"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-6-6"
    },
    "LoginInfo": {
        "username": "eharding",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5309 Little Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kisv\u00e1rda",
        "stateProvince": "SZ",
        "locality": "Szabolcs-Szatm\u00e1r-Bereg",
        "country": "HU",
        "postalCode": "4600"
    }
});
db.user.insertOne(
{
    "email": "alarsen680@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Avery",
        "lastName": "Larsen",
        "phoneNumber": "+1-680-791-7406",
        "email": "alarsen680@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "45.1804",
            "longitude": "-67.2953"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-324-288-3212"
        ],
        "secondaryEmailAddresses": [
            "alarsen@SKTelecom.net",
            "alarsen@cerist.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-4-17"
    },
    "LoginInfo": {
        "username": "alarsen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2617 Blue Creek Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "St. Stephen",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E3L"
    }
});
db.user.insertOne(
{
    "email": "emclean681@AlgoNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Earnest",
        "lastName": "Mclean",
        "phoneNumber": "+687-681-262-1914",
        "email": "emclean681@AlgoNet.com",
        "GeoSpatialInfo": {
            "latitude": "-20.3929",
            "longitude": "164.5827"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+687-339-323-3559"
        ],
        "secondaryEmailAddresses": [
            "emclean@NII.net",
            "emclean@OpenWorld.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/emclean"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/emclean"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/emclean"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-11-27"
    },
    "LoginInfo": {
        "username": "emclean",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "603 Red Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Pou\u00e9bo",
        "stateProvince": "Pou\u00e9bo",
        "locality": "Pou\u00e9bo",
        "country": "NC",
        "postalCode": "98824"
    }
});
db.user.insertOne(
{
    "email": "lrice682@BCE.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Lynn",
        "lastName": "Rice",
        "phoneNumber": "+61-682-490-5375",
        "email": "lrice682@BCE.com",
        "GeoSpatialInfo": {
            "latitude": "-37.0132",
            "longitude": "142.692"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-116-022-6719"
        ],
        "secondaryEmailAddresses": [
            "lrice@DaxNet.net",
            "lrice@MTN.net",
            "lrice@Orstom.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-3-22"
    },
    "LoginInfo": {
        "username": "lrice",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "739 Little Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Black Range",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3381"
    }
});
db.user.insertOne(
{
    "email": "chunter683@GlasNET.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Chadwick",
        "lastName": "Hunter",
        "phoneNumber": "+351-683-249-1982",
        "email": "chunter683@GlasNET.com",
        "GeoSpatialInfo": {
            "latitude": "41.4329",
            "longitude": "-8.7631"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+351-474-921-2894"
        ],
        "secondaryEmailAddresses": [
            "chunter@LookData.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/chunter"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-9-22"
    },
    "LoginInfo": {
        "username": "chunter",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "4114 Winding Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Navais",
        "stateProvince": "Navais",
        "locality": "P\u00f3voa de Varzim",
        "country": "PT",
        "postalCode": "4495-213"
    }
});
db.user.insertOne(
{
    "email": "echen684@DaxNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Emogene",
        "lastName": "Chen",
        "phoneNumber": "+1-684-471-2668",
        "email": "echen684@DaxNet.com",
        "GeoSpatialInfo": {
            "latitude": "53.5052",
            "longitude": "-112.9529"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "echen@MTN.net",
            "echen@Movil.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/echen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-1-21"
    },
    "LoginInfo": {
        "username": "echen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8468 Blue Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Sherwood Park East",
        "stateProvince": "AB",
        "locality": "Sherwood Park ",
        "country": "CA",
        "postalCode": "T8G"
    }
});
db.user.insertOne(
{
    "email": "egraham685@Verizon.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Edgar",
        "lastName": "Graham",
        "phoneNumber": "+370-685-811-4255",
        "email": "egraham685@Verizon.com",
        "GeoSpatialInfo": {
            "latitude": "55.0667",
            "longitude": "24.7"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+370-701-044-8836"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/egraham"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/egraham"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-6-23"
    },
    "LoginInfo": {
        "username": "egraham",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9079 Little Hill Avenue",
        "buildingName": null,
        "floor": 9,
        "roomApartmentCondoNumber": null,
        "city": "Gelvonai",
        "stateProvince": "\u0160irvint\u0173 r. sav.",
        "locality": "\u0160irvint\u0173 r. sav.",
        "country": "LT",
        "postalCode": "19023"
    }
});
db.user.insertOne(
{
    "email": "ehale686@UI.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Eldon",
        "lastName": "Hale",
        "phoneNumber": "+61-686-912-2084",
        "email": "ehale686@UI.com",
        "GeoSpatialInfo": {
            "latitude": "-37.4369",
            "longitude": "144.8946"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+61-72-113-7100",
            "+61-824-728-8357"
        ],
        "secondaryEmailAddresses": [
            "ehale@ICom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ehale"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-2-22"
    },
    "LoginInfo": {
        "username": "ehale",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2761 Little Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Hidden Valley",
        "stateProvince": "VIC",
        "locality": "MELB NORTH WEST",
        "country": "AU",
        "postalCode": "3756"
    }
});
db.user.insertOne(
{
    "email": "bbarr687@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Beverly",
        "lastName": "Barr",
        "phoneNumber": "+1-687-312-7778",
        "email": "bbarr687@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "39.1027",
            "longitude": "-98.2149"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-423-862-7289"
        ],
        "secondaryEmailAddresses": [
            "bbarr@LookData.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/bbarr"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-6-26"
    },
    "LoginInfo": {
        "username": "bbarr",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3712 Little Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "65",
        "city": "Lincoln",
        "stateProvince": "KS",
        "locality": "Lincoln",
        "country": "US",
        "postalCode": "67455"
    }
});
db.user.insertOne(
{
    "email": "gmeyer688@NTT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Gerry",
        "lastName": "Meyer",
        "phoneNumber": "+1-688-373-0693",
        "email": "gmeyer688@NTT.com",
        "GeoSpatialInfo": {
            "latitude": "45.574",
            "longitude": "-73.94"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-883-274-7649"
        ],
        "secondaryEmailAddresses": [
            "gmeyer@SingTel.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/gmeyer"
            },
            "FB": {
                "label": "facebook",
                "url": "https:\/\/facebook.com\/gmeyer"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-4-18"
    },
    "LoginInfo": {
        "username": "gmeyer",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "7479 Red Bend Way",
        "buildingName": null,
        "floor": 4,
        "roomApartmentCondoNumber": null,
        "city": "Saint-Eustache Southwest",
        "stateProvince": "QC",
        "locality": "Laurentides",
        "country": "CA",
        "postalCode": "J7R"
    }
});
db.user.insertOne(
{
    "email": "frose689@Telstra.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Freddie",
        "lastName": "Rose",
        "phoneNumber": "+380-689-928-9704",
        "email": "frose689@Telstra.com",
        "GeoSpatialInfo": {
            "latitude": "49.6419",
            "longitude": "26.8203"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+380-759-857-8074",
            "+380-238-959-5784"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/frose"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-5-13"
    },
    "LoginInfo": {
        "username": "frose",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2970 Blue Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "\u041f\u0430\u0441\u0442\u0443\u0448\u0435 (\u041f\u0430\u0441\u0442\u0443\u0448\u0456\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
        "stateProvince": "Chortkivskyi",
        "locality": "Chortkivskyi",
        "country": "UA",
        "postalCode": "48523"
    }
});
db.user.insertOne(
{
    "email": "ihinton690@TT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Isabelle",
        "lastName": "Hinton",
        "phoneNumber": "+91-690-900-8474",
        "email": "ihinton690@TT.com",
        "GeoSpatialInfo": {
            "latitude": "19.015",
            "longitude": "76.9493"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+91-888-190-3275"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/ihinton"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-6-15"
    },
    "LoginInfo": {
        "username": "ihinton",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8597 Red Bend Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Palam",
        "stateProvince": "Palam",
        "locality": "Parbhani",
        "country": "IN",
        "postalCode": "431720"
    }
});
db.user.insertOne(
{
    "email": "hramos691@CUBENet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hong",
        "lastName": "Ramos",
        "phoneNumber": "+32-691-181-1823",
        "email": "hramos691@CUBENet.com",
        "GeoSpatialInfo": {
            "latitude": "50.5833",
            "longitude": "4.6167"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+32-428-201-2100"
        ],
        "secondaryEmailAddresses": [
            "hramos@UI.net"
        ],
        "socialMedia": {
            "GO": {
                "label": "google",
                "url": "https:\/\/google.com\/hramos"
            },
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hramos"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-2-17"
    },
    "LoginInfo": {
        "username": "hramos",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "8569 Green Stream Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Chastre Saint-G\u00e9ry",
        "stateProvince": "WAL",
        "locality": "Brabant Wallon",
        "country": "BE",
        "postalCode": "1450"
    }
});
db.user.insertOne(
{
    "email": "ahansen692@SingTel.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Anisa",
        "lastName": "Hansen",
        "phoneNumber": "+1-692-857-2208",
        "email": "ahansen692@SingTel.com",
        "GeoSpatialInfo": {
            "latitude": "46.7345",
            "longitude": "-65.427"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+1-866-430-7955"
        ],
        "secondaryEmailAddresses": [],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/ahansen"
            },
            "SK": {
                "label": "skype",
                "url": "https:\/\/skype.com\/ahansen"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-3-10"
    },
    "LoginInfo": {
        "username": "ahansen",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "820 Short Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Rogersville",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E4Y"
    }
});
db.user.insertOne(
{
    "email": "hkirby693@PLDT.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Hermila",
        "lastName": "Kirby",
        "phoneNumber": "+36-693-957-1486",
        "email": "hkirby693@PLDT.com",
        "GeoSpatialInfo": {
            "latitude": "47.5",
            "longitude": "19.0833"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "hkirby@OTE.net",
            "hkirby@Econnect.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/hkirby"
            },
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/hkirby"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-3-19"
    },
    "LoginInfo": {
        "username": "hkirby",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "3956 Blue Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Budapest",
        "stateProvince": "BU",
        "locality": "Budapest",
        "country": "HU",
        "postalCode": "1155"
    }
});
db.user.insertOne(
{
    "email": "dlopez694@Vodafone.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Diego",
        "lastName": "Lopez",
        "phoneNumber": "+44-694-409-8145",
        "email": "dlopez694@Vodafone.com",
        "GeoSpatialInfo": {
            "latitude": "53.3745",
            "longitude": "-0.327"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-345-381-4764",
            "+44-971-191-0399"
        ],
        "secondaryEmailAddresses": [
            "dlopez@PLDT.net",
            "dlopez@NetCom.net",
            "dlopez@Telstra.net"
        ],
        "socialMedia": {
            "LI": {
                "label": "linkedin",
                "url": "https:\/\/linkedin.com\/dlopez"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-3-18"
    },
    "LoginInfo": {
        "username": "dlopez",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "362 Little Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Kirkby",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "LN8"
    }
});
db.user.insertOne(
{
    "email": "ntucker696@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nolan",
        "lastName": "Tucker",
        "phoneNumber": "+44-696-551-0171",
        "email": "ntucker696@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "51.9994",
            "longitude": "-2.7027"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+44-242-016-9196"
        ],
        "secondaryEmailAddresses": [
            "ntucker@Frontier.net",
            "ntucker@Zain.net",
            "ntucker@Millicom.net"
        ],
        "socialMedia": {
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/ntucker"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-5-28"
    },
    "LoginInfo": {
        "username": "ntucker",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "5846 Red Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": "3E",
        "city": "Aconbury",
        "stateProvince": "England",
        "locality": "Herefordshire",
        "country": "GB",
        "postalCode": "HR2"
    }
});
db.user.insertOne(
{
    "email": "nklein697@GreenNet.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Nicolas",
        "lastName": "Klein",
        "phoneNumber": "+94-697-629-4309",
        "email": "nklein697@GreenNet.com",
        "GeoSpatialInfo": {
            "latitude": "7.1998",
            "longitude": "80.7552"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "nklein@Relcom.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/nklein"
            }
        }
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-11-16"
    },
    "LoginInfo": {
        "username": "nklein",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "1671 Green Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Mailapitiya",
        "stateProvince": "Kandy",
        "locality": "Kandy",
        "country": "LK",
        "postalCode": "20702"
    }
});
db.user.insertOne(
{
    "email": "lblake698@cerist.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Levi",
        "lastName": "Blake",
        "phoneNumber": "+1-698-370-4033",
        "email": "lblake698@cerist.com",
        "GeoSpatialInfo": {
            "latitude": "40.7808",
            "longitude": "-73.9772"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [],
        "secondaryEmailAddresses": [
            "lblake@MegaFon.net",
            "lblake@Vodafone.net",
            "lblake@KTC.net"
        ],
        "socialMedia": []
    },
    "OtherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-4-9"
    },
    "LoginInfo": {
        "username": "lblake",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "9370 Long Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "New York",
        "stateProvince": "NY",
        "locality": "New York",
        "country": "US",
        "postalCode": "10114"
    }
});
db.user.insertOne(
{
    "email": "rschmitt699@CCS.com",
    "userType": "customer",
    "businessName": "",
    "favorites": [],
    "PrimaryContactInfo": {
        "firstName": "Ronna",
        "lastName": "Schmitt",
        "phoneNumber": "+92-699-838-0171",
        "email": "rschmitt699@CCS.com",
        "GeoSpatialInfo": {
            "latitude": "30.4833",
            "longitude": "71.9"
        }
    },
    "SecondaryContactInfo": {
        "secondaryPhoneNumbers": [
            "+92-608-316-0139",
            "+92-824-417-5796"
        ],
        "secondaryEmailAddresses": [
            "rschmitt@Turkcell.net",
            "rschmitt@Vodafone.net"
        ],
        "socialMedia": {
            "TW": {
                "label": "twitter",
                "url": "https:\/\/twitter.com\/rschmitt"
            },
            "LN": {
                "label": "line",
                "url": "https:\/\/line.com\/rschmitt"
            }
        }
    },
    "OtherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-7-26"
    },
    "LoginInfo": {
        "username": "rschmitt",
        "password": null
    },
    "Address": {
        "streetAddressOfBuilding": "2113 Winding River Drive",
        "buildingName": null,
        "floor": null,
        "roomApartmentCondoNumber": null,
        "city": "Dadyal Khurd",
        "stateProvince": "Federal Capial &AJK",
        "locality": "Federal Capial &AJK",
        "country": "PK",
        "postalCode": "10530"
    }
});
