conn = new Mongo();
db = conn.getDB("biglittle");
db.users.drop();
db.users.insertOne(
{
    "userKey": "CHARROSS3456",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Green Associates Company",
    "name": {
        "title": "Ms",
        "first": "Charisse",
        "middle": "X",
        "last": "Ross",
        "suffix": null
    },
    "address": {
        "streetAddress": "1790 Short Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gaodhail",
        "locality1": "Scotland",
        "locality2": "Argyll and Bute",
        "country": "GB",
        "postalCode": "PA72",
        "geoSpatial": [
            "-5.9556",
            "56.5056"
        ]
    },
    "contact": {
        "email": "cross100@telecom.com",
        "phone": "100-276-3456",
        "socMedia": {
            "facebook": "cross@facebook.com"
        }
    },
    "login": {
        "username": "cross",
        "oauth2": "cross@facebook.com",
        "password": "$2y$10$bbxf6.LvifkSx1StwPLWrO3otvGM7uMgPN65zqbnLs5jAPzr9csCK"
    },
    "otherContact": {
        "emails": [
            "cross100@swisscom.com",
            "cross100@megafon.com"
        ],
        "phoneNumbers": [
            "100-688-6884",
            "100-431-1074"
        ],
        "socMedias": [
            {
                "linkedin": "cross@linkedin.com"
            },
            {
                "twitter": "cross@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-11-01"
    }
});
db.users.insertOne(
{
    "userKey": "CLYDROJA7788",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Clyde",
        "middle": "F",
        "last": "Rojas",
        "suffix": null
    },
    "address": {
        "streetAddress": "2418 Blue Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pohnpei",
        "locality1": "State of Pohnpei",
        "locality2": "State of Pohnpei",
        "country": "FM",
        "postalCode": "96941",
        "geoSpatial": [
            "151.5031",
            "7.1383"
        ]
    },
    "contact": {
        "email": "crojas101@airtel.com",
        "phone": "101-301-7788",
        "socMedia": {
            "twitter": "crojas@twitter.com"
        }
    },
    "login": {
        "username": "crojas",
        "oauth2": "crojas@twitter.com",
        "password": "$2y$10$jzrsCVgexzZic0\/0KERqXeNmX9PN3KpUV2vY2zhTcTlu1BRECH1B."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-02-05"
    }
});
db.users.insertOne(
{
    "userKey": "ERICPOLL6194",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Ericka",
        "middle": null,
        "last": "Pollard",
        "suffix": null
    },
    "address": {
        "streetAddress": "1561 Little Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "7D",
        "city": "Kathojodi",
        "locality1": "Cuttack Sadar",
        "locality2": "Cuttack",
        "country": "IN",
        "postalCode": "753002",
        "geoSpatial": [
            "86.2171",
            "21.0295"
        ]
    },
    "contact": {
        "email": "epollard102@softbank.com",
        "phone": "102-887-6194",
        "socMedia": []
    },
    "login": {
        "username": "epollard",
        "oauth2": null,
        "password": "$2y$10$LQEsISMLj.uahm164o07\/.1cZMwrXlWugZwjALqyY7YRgAoS7NWYi"
    },
    "otherContact": {
        "emails": [
            "epollard102@uunet.com"
        ],
        "phoneNumbers": [
            "102-955-8676"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-07-04"
    }
});
db.users.insertOne(
{
    "userKey": "MYRTMCCA8673",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Myrtie",
        "middle": "O",
        "last": "Mccall",
        "suffix": null
    },
    "address": {
        "streetAddress": "2747 Green Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "El Fundo",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "11204",
        "geoSpatial": [
            "-70.15",
            "18.5167"
        ]
    },
    "contact": {
        "email": "mmccall103@sktelecom.com",
        "phone": "103-556-8673",
        "socMedia": {
            "line": "mmccall@line.com"
        }
    },
    "login": {
        "username": "mmccall",
        "oauth2": "mmccall@line.com",
        "password": "$2y$10$iFN5AxGtBW.CC\/5eU1lqb.k15rEf\/w0PkXkhdTFjKLxTQCWpsM54S"
    },
    "otherContact": {
        "emails": [
            "mmccall103@airtel.com",
            "mmccall103@att.com",
            "mmccall103@bce.com"
        ],
        "phoneNumbers": [
            "103-824-7725",
            "103-522-2241",
            "103-064-3715"
        ],
        "socMedias": [
            {
                "skype": "mmccall@skype.com"
            },
            {
                "skype": "mmccall@skype.com"
            },
            {
                "linkedin": "mmccall@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-07-24"
    }
});
db.users.insertOne(
{
    "userKey": "CELIBLAC8153",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Celina",
        "middle": "B",
        "last": "Black",
        "suffix": null
    },
    "address": {
        "streetAddress": "3300 Short Mountain Avenue",
        "buildingName": "Building 8A",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lavey",
        "locality1": "Northern Ireland",
        "locality2": "County Londonderry",
        "country": "GB",
        "postalCode": "BT45",
        "geoSpatial": [
            "-6.6286",
            "54.7711"
        ]
    },
    "contact": {
        "email": "cblack104@uunet.com",
        "phone": "104-437-8153",
        "socMedia": {
            "skype": "cblack@skype.com"
        }
    },
    "login": {
        "username": "cblack",
        "oauth2": "cblack@skype.com",
        "password": "$2y$10$Wjmp18mYOFIDcXyNnUo2KulvRiQFXRJhOahm9TicRqykBFP1teNPq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-09-30"
    }
});
db.users.insertOne(
{
    "userKey": "KEIKSIER2074",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Powerhouse Holdings",
    "name": {
        "title": null,
        "first": "Keiko",
        "middle": null,
        "last": "Sierra",
        "suffix": null
    },
    "address": {
        "streetAddress": "1988 Green Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chirileni",
        "locality1": "Ungheni",
        "locality2": "Ungheni",
        "country": "MD",
        "postalCode": "MD-3618",
        "geoSpatial": [
            "27.7761",
            "47.3808"
        ]
    },
    "contact": {
        "email": "ksierra105@ais.com",
        "phone": "105-805-2074",
        "socMedia": []
    },
    "login": {
        "username": "ksierra",
        "oauth2": null,
        "password": "$2y$10$Ix9nP7YqBCaHTcm9FZTP6ezcKRxAUJ2NdMPheJAKcXwry\/Qpa8XEK"
    },
    "otherContact": {
        "emails": [
            "ksierra105@econnect.com"
        ],
        "phoneNumbers": [
            "105-227-2219"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-08-12"
    }
});
db.users.insertOne(
{
    "userKey": "KATHHOWE6236",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Kathe",
        "middle": "B",
        "last": "Howell",
        "suffix": null
    },
    "address": {
        "streetAddress": "293 Long Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sandwick",
        "locality1": "England",
        "locality2": "Cumbria",
        "country": "GB",
        "postalCode": "CA10",
        "geoSpatial": [
            "-2.6316",
            "54.6272"
        ]
    },
    "contact": {
        "email": "khowell106@telus.com",
        "phone": "106-661-6236",
        "socMedia": {
            "linkedin": "khowell@linkedin.com"
        }
    },
    "login": {
        "username": "khowell",
        "oauth2": "khowell@linkedin.com",
        "password": "$2y$10$k\/.v.paYyUpZJGls\/g2pJec\/Za.LLUnyba.DkMGntXICGeDQEvNGC"
    },
    "otherContact": {
        "emails": [
            "khowell106@algonet.com",
            "khowell106@bifty.com",
            "khowell106@etisalat.com"
        ],
        "phoneNumbers": [
            "106-685-6621",
            "106-098-4923",
            "106-377-1565"
        ],
        "socMedias": [
            {
                "facebook": "khowell@facebook.com"
            },
            {
                "twitter": "khowell@twitter.com"
            },
            {
                "google": "khowell@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-12-16"
    }
});
db.users.insertOne(
{
    "userKey": "CLAUMUNO0734",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Claude",
        "middle": "G",
        "last": "Munoz",
        "suffix": null
    },
    "address": {
        "streetAddress": "6710 Blue Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hammarland",
        "locality1": "Hammarland",
        "locality2": "Hammarland",
        "country": "AX",
        "postalCode": "22240",
        "geoSpatial": [
            "19.7396",
            "60.2286"
        ]
    },
    "contact": {
        "email": "cmunoz107@kddi.com",
        "phone": "107-922-0734",
        "socMedia": {
            "linkedin": "cmunoz@linkedin.com"
        }
    },
    "login": {
        "username": "cmunoz",
        "oauth2": "cmunoz@linkedin.com",
        "password": "$2y$10$jJlCWfaFNCVdcj1e3KkMFuVRehzB3GeNwjCNAxEMtV5doFrKebzVC"
    },
    "otherContact": {
        "emails": [
            "cmunoz107@uunet.com"
        ],
        "phoneNumbers": [
            "107-183-9621"
        ],
        "socMedias": [
            {
                "linkedin": "cmunoz@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-02-24"
    }
});
db.users.insertOne(
{
    "userKey": "MILOWHIT5333",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Milo",
        "middle": null,
        "last": "Whitney",
        "suffix": null
    },
    "address": {
        "streetAddress": "7959 Winding Bridge Drive",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": "F4",
        "city": "Wyoming",
        "locality1": "MI",
        "locality2": "Kent",
        "country": "US",
        "postalCode": "49509",
        "geoSpatial": [
            "-85.7053",
            "42.9134"
        ]
    },
    "contact": {
        "email": "mwhitney108@telecom.com",
        "phone": "108-717-5333",
        "socMedia": []
    },
    "login": {
        "username": "mwhitney",
        "oauth2": null,
        "password": "$2y$10$sic.EWZ2\/D2B8.ZtSoNp\/usJp1abGfJ1FYPeMhVohNyrAtzhPKRo2"
    },
    "otherContact": {
        "emails": [
            "mwhitney108@sprint.com",
            "mwhitney108@airtel.com"
        ],
        "phoneNumbers": [
            "108-761-2246",
            "108-202-1639"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-05-27"
    }
});
db.users.insertOne(
{
    "userKey": "JARRKIM6948",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Serious Associates",
    "name": {
        "title": "Mr",
        "first": "Jarred",
        "middle": "H",
        "last": "Kim",
        "suffix": null
    },
    "address": {
        "streetAddress": "58 Green Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint Augustine",
        "locality1": "FL",
        "locality2": "Saint Johns",
        "country": "US",
        "postalCode": "32085",
        "geoSpatial": [
            "-81.4206",
            "29.9377"
        ]
    },
    "contact": {
        "email": "jkim110@centurylink.com",
        "phone": "110-785-6948",
        "socMedia": {
            "facebook": "jkim@facebook.com"
        }
    },
    "login": {
        "username": "jkim",
        "oauth2": "jkim@facebook.com",
        "password": "$2y$10$htQA82cI3KQTIRV8DPHbseXu3HlqxHEZ4S0huWZsA4DnFaYK9FQ4G"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-11-12"
    }
});
db.users.insertOne(
{
    "userKey": "HERMGILM2578",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Herman",
        "middle": null,
        "last": "Gilmore",
        "suffix": null
    },
    "address": {
        "streetAddress": "6624 Winding Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Warmenhuizen",
        "locality1": "Schagen",
        "locality2": "Schagen",
        "country": "NL",
        "postalCode": "1749",
        "geoSpatial": [
            "4.7343",
            "52.7207"
        ]
    },
    "contact": {
        "email": "hgilmore111@telecomitalia.com",
        "phone": "111-271-2578",
        "socMedia": []
    },
    "login": {
        "username": "hgilmore",
        "oauth2": null,
        "password": "$2y$10$QvjzfCMucjZoUJb\/nFSpHO.kPNCSOYCL38M\/DywyTOw4zMxEJnpdW"
    },
    "otherContact": {
        "emails": [
            "hgilmore111@apicnet.com",
            "hgilmore111@belgacom.com"
        ],
        "phoneNumbers": [
            "111-677-9431",
            "111-340-7036"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-09-02"
    }
});
db.users.insertOne(
{
    "userKey": "ANASCHUN7156",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Anastacia",
        "middle": "Y",
        "last": "Chung",
        "suffix": null
    },
    "address": {
        "streetAddress": "2131 Short Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kosir",
        "locality1": "Sarangarh",
        "locality2": "Raigarh",
        "country": "IN",
        "postalCode": "496445",
        "geoSpatial": [
            "83.1641",
            "21.619"
        ]
    },
    "contact": {
        "email": "achung112@etisalat.com",
        "phone": "112-824-7156",
        "socMedia": {
            "skype": "achung@skype.com"
        }
    },
    "login": {
        "username": "achung",
        "oauth2": "achung@skype.com",
        "password": "$2y$10$LNEK423KMOTLslfFyf5yI.cY\/NPfPRwYdgmKT5aiEfcpD8Sb9\/8gK"
    },
    "otherContact": {
        "emails": [
            "achung112@eunet.com",
            "achung112@ote.com"
        ],
        "phoneNumbers": [
            "112-365-9115",
            "112-810-3984"
        ],
        "socMedias": [
            {
                "skype": "achung@skype.com"
            },
            {
                "google": "achung@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-09-01"
    }
});
db.users.insertOne(
{
    "userKey": "ODESLEAC7490",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Odessa",
        "middle": "J",
        "last": "Leach",
        "suffix": null
    },
    "address": {
        "streetAddress": "3548 Long Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Orlando",
        "locality1": "KY",
        "locality2": "Rockcastle",
        "country": "US",
        "postalCode": "40460",
        "geoSpatial": [
            "-84.2528",
            "37.3734"
        ]
    },
    "contact": {
        "email": "oleach113@softbank.com",
        "phone": "113-520-7490",
        "socMedia": {
            "linkedin": "oleach@linkedin.com"
        }
    },
    "login": {
        "username": "oleach",
        "oauth2": "oleach@linkedin.com",
        "password": "$2y$10$4Tuug9qKUE5JGNU5xk\/6zuvxzeYJFgrQK7wBnD49ICvcgj\/VDZUR."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-05-14"
    }
});
db.users.insertOne(
{
    "userKey": "ADELBLAK2695",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Adelia",
        "middle": null,
        "last": "Blake",
        "suffix": null
    },
    "address": {
        "streetAddress": "8838 Green Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "6D",
        "city": "Port Latta",
        "locality1": "TAS",
        "locality2": "Tasmania",
        "country": "AU",
        "postalCode": "7321",
        "geoSpatial": [
            "145.3333",
            "-40.8333"
        ]
    },
    "contact": {
        "email": "ablake114@lookdata.com",
        "phone": "114-044-2695",
        "socMedia": []
    },
    "login": {
        "username": "ablake",
        "oauth2": null,
        "password": "$2y$10$i36IOcHaDozX1nStWpRBmeGM2ChPDMX4DjUidfA04OHwXNWamgGeK"
    },
    "otherContact": {
        "emails": [
            "ablake114@belgacom.com",
            "ablake114@econnect.com",
            "ablake114@relcom.com"
        ],
        "phoneNumbers": [
            "114-894-6676",
            "114-345-7248",
            "114-730-6870"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-09-17"
    }
});
db.users.insertOne(
{
    "userKey": "GERTVELA6336",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Accomodation Partners Ltd",
    "name": {
        "title": "Ms",
        "first": "Gertrude",
        "middle": "P",
        "last": "Velasquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6175 Green Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Prescott and Russell United Counties (Alfred)",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "K0B",
        "geoSpatial": [
            "-74.7479",
            "45.5029"
        ]
    },
    "contact": {
        "email": "gvelasqu115@belgacom.com",
        "phone": "115-313-6336",
        "socMedia": {
            "line": "gvelasqu@line.com"
        }
    },
    "login": {
        "username": "gvelasqu",
        "oauth2": "gvelasqu@line.com",
        "password": "$2y$10$yZsxH8gl8TZPu039NXSoz.yso7GKDp4Xtp8GbMEL4o5YibRwJLusK"
    },
    "otherContact": {
        "emails": [
            "gvelasqu115@orange.com",
            "gvelasqu115@ui.com",
            "gvelasqu115@telecomitalia.com"
        ],
        "phoneNumbers": [
            "115-432-2584",
            "115-510-6025",
            "115-087-5613"
        ],
        "socMedias": [
            {
                "linkedin": "gvelasqu@linkedin.com"
            },
            {
                "skype": "gvelasqu@skype.com"
            },
            {
                "skype": "gvelasqu@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-10-16"
    }
});
db.users.insertOne(
{
    "userKey": "FLETBARR1534",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Fletcher",
        "middle": "E",
        "last": "Barron",
        "suffix": null
    },
    "address": {
        "streetAddress": "232 Short Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gatineau Southeast",
        "locality1": "QC",
        "locality2": "Gatineau",
        "country": "CA",
        "postalCode": "J8P",
        "geoSpatial": [
            "-75.6157",
            "45.4869"
        ]
    },
    "contact": {
        "email": "fbarron116@frontier.com",
        "phone": "116-935-1534",
        "socMedia": {
            "twitter": "fbarron@twitter.com"
        }
    },
    "login": {
        "username": "fbarron",
        "oauth2": "fbarron@twitter.com",
        "password": "$2y$10$S95n5qkxDpINyxpHOcItwe0gPr5Yu6D9HBab7C3oGIe4ohuh2Vfle"
    },
    "otherContact": {
        "emails": [
            "fbarron116@vodafone.com",
            "fbarron116@nii.com",
            "fbarron116@telstra.com"
        ],
        "phoneNumbers": [
            "116-554-8648",
            "116-436-0753",
            "116-115-8200"
        ],
        "socMedias": [
            {
                "skype": "fbarron@skype.com"
            },
            {
                "twitter": "fbarron@twitter.com"
            },
            {
                "linkedin": "fbarron@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-06-06"
    }
});
db.users.insertOne(
{
    "userKey": "YONBARR0402",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Yon",
        "middle": "I",
        "last": "Barrett",
        "suffix": null
    },
    "address": {
        "streetAddress": "2271 Little River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bourke",
        "locality1": "NSW",
        "locality2": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2840",
        "geoSpatial": [
            "145.9365",
            "-30.0901"
        ]
    },
    "contact": {
        "email": "ybarrett118@softbank.com",
        "phone": "118-662-0402",
        "socMedia": {
            "facebook": "ybarrett@facebook.com"
        }
    },
    "login": {
        "username": "ybarrett",
        "oauth2": "ybarrett@facebook.com",
        "password": "$2y$10$KlpqzSW21lzeGKJxzWWha.qdkp8TUaOvGL\/cCOmjQE4J4Aykt0zF."
    },
    "otherContact": {
        "emails": [
            "ybarrett118@ais.com",
            "ybarrett118@ntt.com"
        ],
        "phoneNumbers": [
            "118-581-5774",
            "118-210-8545"
        ],
        "socMedias": [
            {
                "skype": "ybarrett@skype.com"
            },
            {
                "twitter": "ybarrett@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-12-18"
    }
});
db.users.insertOne(
{
    "userKey": "SHAWTRAN4223",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Leisure Business Ltd",
    "name": {
        "title": null,
        "first": "Shawna",
        "middle": null,
        "last": "Tran",
        "suffix": null
    },
    "address": {
        "streetAddress": "8105 Short Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "73",
        "city": "Babhulgaon (Pirachi)",
        "locality1": "Vaijapur",
        "locality2": "Aurangabad",
        "country": "IN",
        "postalCode": "431115",
        "geoSpatial": [
            "75.0435",
            "20.2242"
        ]
    },
    "contact": {
        "email": "stran120@lookdata.com",
        "phone": "120-306-4223",
        "socMedia": []
    },
    "login": {
        "username": "stran",
        "oauth2": null,
        "password": "$2y$10$isAdYM2H5GIdzlTEqEHUmuTG6jeDloCWoWDzkygXVSsi2HDlDse7u"
    },
    "otherContact": {
        "emails": [
            "stran120@singtel.com",
            "stran120@ccs.com",
            "stran120@access.com"
        ],
        "phoneNumbers": [
            "120-774-0229",
            "120-644-5663",
            "120-648-4641"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-11-04"
    }
});
db.users.insertOne(
{
    "userKey": "LUCISAND0674",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Luciana",
        "middle": "K",
        "last": "Sandoval",
        "suffix": null
    },
    "address": {
        "streetAddress": "723 Long River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "El Tigre",
        "locality1": "SON",
        "locality2": "Cajeme",
        "country": "MX",
        "postalCode": "85212",
        "geoSpatial": [
            "-109.9364",
            "27.9708"
        ]
    },
    "contact": {
        "email": "lsandova121@millicom.com",
        "phone": "121-299-0674",
        "socMedia": {
            "line": "lsandova@line.com"
        }
    },
    "login": {
        "username": "lsandova",
        "oauth2": "lsandova@line.com",
        "password": "$2y$10$9JARoKzg\/vGkPem1ZsnnVOSHyr1m4bEzfkUd3KR9SGTmH1rBHjbtW"
    },
    "otherContact": {
        "emails": [
            "lsandova121@chunghwa.com",
            "lsandova121@greennet.com",
            "lsandova121@glasnet.com"
        ],
        "phoneNumbers": [
            "121-528-1053",
            "121-486-5040",
            "121-552-6823"
        ],
        "socMedias": [
            {
                "skype": "lsandova@skype.com"
            },
            {
                "twitter": "lsandova@twitter.com"
            },
            {
                "facebook": "lsandova@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-02-07"
    }
});
db.users.insertOne(
{
    "userKey": "RANDSTEV0697",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Randell",
        "middle": "A",
        "last": "Stevenson",
        "suffix": null
    },
    "address": {
        "streetAddress": "405 Big Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cotulla",
        "locality1": "TX",
        "locality2": "La Salle",
        "country": "US",
        "postalCode": "78014",
        "geoSpatial": [
            "-99.2328",
            "28.4398"
        ]
    },
    "contact": {
        "email": "rstevens122@openworld.com",
        "phone": "122-786-0697",
        "socMedia": {
            "facebook": "rstevens@facebook.com"
        }
    },
    "login": {
        "username": "rstevens",
        "oauth2": "rstevens@facebook.com",
        "password": "$2y$10$ff5P5Y7IInasbsMsYzEXC.7p0l1rkbqt5Ewqh39HlX5EKCTjWisvG"
    },
    "otherContact": {
        "emails": [
            "rstevens122@mtn.com",
            "rstevens122@telesystems.com",
            "rstevens122@rogers.com"
        ],
        "phoneNumbers": [
            "122-812-8449",
            "122-138-9674",
            "122-354-9404"
        ],
        "socMedias": [
            {
                "line": "rstevens@line.com"
            },
            {
                "twitter": "rstevens@twitter.com"
            },
            {
                "facebook": "rstevens@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-05-22"
    }
});
db.users.insertOne(
{
    "userKey": "VERNLUCE6763",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Verna",
        "middle": null,
        "last": "Lucero",
        "suffix": null
    },
    "address": {
        "streetAddress": "168 Winding Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bayamon",
        "locality1": "Bayamon",
        "locality2": "Bayamon",
        "country": "PR",
        "postalCode": "00959",
        "geoSpatial": [
            "-66.1557",
            "18.3986"
        ]
    },
    "contact": {
        "email": "vlucero123@bt.com",
        "phone": "123-683-6763",
        "socMedia": []
    },
    "login": {
        "username": "vlucero",
        "oauth2": null,
        "password": "$2y$10$rl7zuyOZcAXYA4V2P9qo.ujpp4BW\/xiM6LHJf9Er6PN3ASjGOt3h."
    },
    "otherContact": {
        "emails": [
            "vlucero123@ais.com",
            "vlucero123@vodafone.com"
        ],
        "phoneNumbers": [
            "123-888-9615",
            "123-951-3463"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-12-19"
    }
});
db.users.insertOne(
{
    "userKey": "SUNNGREG0963",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Sunny",
        "middle": "R",
        "last": "Gregory",
        "suffix": null
    },
    "address": {
        "streetAddress": "7241 Winding River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Porters Lake",
        "locality1": "NS",
        "locality2": "Nova Scotia",
        "country": "CA",
        "postalCode": "B3E",
        "geoSpatial": [
            "-63.3361",
            "44.7722"
        ]
    },
    "contact": {
        "email": "sgregory124@telekom.com",
        "phone": "124-186-0963",
        "socMedia": {
            "twitter": "sgregory@twitter.com"
        }
    },
    "login": {
        "username": "sgregory",
        "oauth2": "sgregory@twitter.com",
        "password": "$2y$10$WsK.RpmaoIlyT3ao1ARrgenCutAphDuYRtV1GwViLbvO5hEkjjrzW"
    },
    "otherContact": {
        "emails": [
            "sgregory124@softbank.com",
            "sgregory124@orange.com"
        ],
        "phoneNumbers": [
            "124-189-5256",
            "124-989-9052"
        ],
        "socMedias": [
            {
                "linkedin": "sgregory@linkedin.com"
            },
            {
                "facebook": "sgregory@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-05-24"
    }
});
db.users.insertOne(
{
    "userKey": "ALICFERN8110",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Ninety Nine Percenter Industries",
    "name": {
        "title": "Ms",
        "first": "Alice",
        "middle": "X",
        "last": "Fernandez",
        "suffix": null
    },
    "address": {
        "streetAddress": "586 Short Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Olmu\u00e9",
        "locality1": "Olmu\u00e9",
        "locality2": "Provincia de Marga Marga",
        "country": "CL",
        "postalCode": "2330000",
        "geoSpatial": [
            "-71.1107",
            "-33.0358"
        ]
    },
    "contact": {
        "email": "afernand125@frontier.com",
        "phone": "125-332-8110",
        "socMedia": {
            "google": "afernand@google.com"
        }
    },
    "login": {
        "username": "afernand",
        "oauth2": "afernand@google.com",
        "password": "$2y$10$G1xC2hVlKErfpMZ2jy9yU.EQDwoDa2e.ZlVlf.AoF7DHAUOFV2Hfm"
    },
    "otherContact": {
        "emails": [
            "afernand125@telecom.com",
            "afernand125@ptcl.com"
        ],
        "phoneNumbers": [
            "125-445-7197",
            "125-170-2079"
        ],
        "socMedias": [
            {
                "line": "afernand@line.com"
            },
            {
                "twitter": "afernand@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-12-27"
    }
});
db.users.insertOne(
{
    "userKey": "CHRIPERE5726",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Christena",
        "middle": null,
        "last": "Perez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3910 Red Woods Ride",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": "F2",
        "city": "Glenmeanie",
        "locality1": "Scotland",
        "locality2": "Highland",
        "country": "GB",
        "postalCode": "IV6",
        "geoSpatial": [
            "-4.4053",
            "57.5046"
        ]
    },
    "contact": {
        "email": "cperez126@icom.com",
        "phone": "126-576-5726",
        "socMedia": []
    },
    "login": {
        "username": "cperez",
        "oauth2": null,
        "password": "$2y$10$JkjCuXl6TzS9l8zL2ddWvu1rV3.RdPz9VbuCkGKs1sZG7r5iGMDdO"
    },
    "otherContact": {
        "emails": [
            "cperez126@jio.com",
            "cperez126@ui.com",
            "cperez126@telecom.com"
        ],
        "phoneNumbers": [
            "126-081-2769",
            "126-668-4820",
            "126-390-3134"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-02-21"
    }
});
db.users.insertOne(
{
    "userKey": "ANGEBUTL6141",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Angel",
        "middle": "X",
        "last": "Butler",
        "suffix": null
    },
    "address": {
        "streetAddress": "5422 Big Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Grifo Alto",
        "locality1": "Grifo Alto",
        "locality2": "Puriscal",
        "country": "CR",
        "postalCode": "10404",
        "geoSpatial": [
            "-84.3949",
            "9.8774"
        ]
    },
    "contact": {
        "email": "abutler127@seednet.com",
        "phone": "127-111-6141",
        "socMedia": {
            "google": "abutler@google.com"
        }
    },
    "login": {
        "username": "abutler",
        "oauth2": "abutler@google.com",
        "password": "$2y$10$St\/5Botexwu89ReZZs\/RhuV3GfMowePOkkSFHAHO.kAcrud6.qzPG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-01-12"
    }
});
db.users.insertOne(
{
    "userKey": "ARLEDELG6765",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Arletta",
        "middle": "S",
        "last": "Delgado",
        "suffix": null
    },
    "address": {
        "streetAddress": "5638 Big Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Becancour",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "G9H",
        "geoSpatial": [
            "-72.4324",
            "46.3334"
        ]
    },
    "contact": {
        "email": "adelgado128@apicnet.com",
        "phone": "128-250-6765",
        "socMedia": {
            "line": "adelgado@line.com"
        }
    },
    "login": {
        "username": "adelgado",
        "oauth2": "adelgado@line.com",
        "password": "$2y$10$1Kuw.TzEN\/3BOHH1cs1bwOYdf.i.ggKdN0WhnHioEdd5K1BVLxbm."
    },
    "otherContact": {
        "emails": [
            "adelgado128@att.com",
            "adelgado128@sktelecom.com",
            "adelgado128@telus.com"
        ],
        "phoneNumbers": [
            "128-887-9083",
            "128-160-6658",
            "128-368-8259"
        ],
        "socMedias": [
            {
                "skype": "adelgado@skype.com"
            },
            {
                "twitter": "adelgado@twitter.com"
            },
            {
                "line": "adelgado@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-03-26"
    }
});
db.users.insertOne(
{
    "userKey": "OSWALU9147",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Oswaldo",
        "middle": null,
        "last": "Lu",
        "suffix": null
    },
    "address": {
        "streetAddress": "5435 Little Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Barrigada",
        "locality1": "Guam",
        "locality2": "Guam",
        "country": "GU",
        "postalCode": "96921",
        "geoSpatial": [
            "144.7942",
            "13.4593"
        ]
    },
    "contact": {
        "email": "olu129@cubenet.com",
        "phone": "129-860-9147",
        "socMedia": []
    },
    "login": {
        "username": "olu",
        "oauth2": null,
        "password": "$2y$10$fxG6IafzKrFjQTXuh5HlCO9Ayzk.mDp.N1UIdZ2RMrm6Uint1ERIK"
    },
    "otherContact": {
        "emails": [
            "olu129@oi.com",
            "olu129@ooredoo.com"
        ],
        "phoneNumbers": [
            "129-967-1551",
            "129-311-1538"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-08-16"
    }
});
db.users.insertOne(
{
    "userKey": "GERABAXT3221",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Business Company",
    "name": {
        "title": "Ms",
        "first": "Geraldine",
        "middle": "A",
        "last": "Baxter",
        "suffix": null
    },
    "address": {
        "streetAddress": "4941 Short Bridge Road",
        "buildingName": "Building 4B",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jonqui\u00e8re Southeast",
        "locality1": "QC",
        "locality2": "Jonqui\u00e8re",
        "country": "CA",
        "postalCode": "G7T",
        "geoSpatial": [
            "-71.1527",
            "48.3975"
        ]
    },
    "contact": {
        "email": "gbaxter130@cerist.com",
        "phone": "130-272-3221",
        "socMedia": {
            "line": "gbaxter@line.com"
        }
    },
    "login": {
        "username": "gbaxter",
        "oauth2": "gbaxter@line.com",
        "password": "$2y$10$349JeoP\/aakAh\/s5zDoAtuQZx12hhYiMrhQAh.Unj8QYc60jVoG9y"
    },
    "otherContact": {
        "emails": [
            "gbaxter130@daxnet.com",
            "gbaxter130@netcom.com"
        ],
        "phoneNumbers": [
            "130-784-9440",
            "130-910-8553"
        ],
        "socMedias": [
            {
                "line": "gbaxter@line.com"
            },
            {
                "linkedin": "gbaxter@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-11-16"
    }
});
db.users.insertOne(
{
    "userKey": "KARIBOYD8759",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Karin",
        "middle": "N",
        "last": "Boyd",
        "suffix": null
    },
    "address": {
        "streetAddress": "113 Little Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Amiens",
        "locality1": "Arrondissement d\u2019Amiens",
        "locality2": "Somme",
        "country": "FR",
        "postalCode": "80004 CEDEX 1",
        "geoSpatial": [
            "2.3",
            "49.9"
        ]
    },
    "contact": {
        "email": "kboyd131@millicom.com",
        "phone": "131-597-8759",
        "socMedia": {
            "linkedin": "kboyd@linkedin.com"
        }
    },
    "login": {
        "username": "kboyd",
        "oauth2": "kboyd@linkedin.com",
        "password": "$2y$10$kT7rMg1jPT0xDdbZpzy6h.1TwXJj\/WLFo5eNiXVpug5kb7E7fMGgq"
    },
    "otherContact": {
        "emails": [
            "kboyd131@bifty.com"
        ],
        "phoneNumbers": [
            "131-985-3858"
        ],
        "socMedias": [
            {
                "twitter": "kboyd@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-07-28"
    }
});
db.users.insertOne(
{
    "userKey": "ELISGARR6506",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Elisa",
        "middle": null,
        "last": "Garrett",
        "suffix": null
    },
    "address": {
        "streetAddress": "5732 Little Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "B0",
        "city": "Kingsville",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "N9Y",
        "geoSpatial": [
            "-82.7598",
            "42.0502"
        ]
    },
    "contact": {
        "email": "egarrett132@movil.com",
        "phone": "132-786-6506",
        "socMedia": []
    },
    "login": {
        "username": "egarrett",
        "oauth2": null,
        "password": "$2y$10$vPVyM0g6rIoR\/sLWT4dkIOX3GDGjrreF\/Lj3PBOhtH6JkILcQdSgu"
    },
    "otherContact": {
        "emails": [
            "egarrett132@vodafone.com",
            "egarrett132@orstom.com",
            "egarrett132@relcom.com"
        ],
        "phoneNumbers": [
            "132-440-9546",
            "132-931-9837",
            "132-245-4754"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-09-17"
    }
});
db.users.insertOne(
{
    "userKey": "REUBMONT8203",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Reuben",
        "middle": "V",
        "last": "Montgomery",
        "suffix": null
    },
    "address": {
        "streetAddress": "2192 Short Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bentley Park",
        "locality1": "QLD",
        "locality2": "NORTH QLD",
        "country": "AU",
        "postalCode": "4869",
        "geoSpatial": [
            "145.7221",
            "-17.0083"
        ]
    },
    "contact": {
        "email": "rmontgom134@ptcl.com",
        "phone": "134-426-8203",
        "socMedia": {
            "linkedin": "rmontgom@linkedin.com"
        }
    },
    "login": {
        "username": "rmontgom",
        "oauth2": "rmontgom@linkedin.com",
        "password": "$2y$10$JQqJoPH74jG5r8PLsJFAcuX.1qmopp3CDkgZkxLYvQYqwkAnOKKR6"
    },
    "otherContact": {
        "emails": [
            "rmontgom134@daxnet.com",
            "rmontgom134@telekom.com"
        ],
        "phoneNumbers": [
            "134-962-5559",
            "134-382-8715"
        ],
        "socMedias": [
            {
                "line": "rmontgom@line.com"
            },
            {
                "google": "rmontgom@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-01-22"
    }
});
db.users.insertOne(
{
    "userKey": "ELROKENT1191",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Serious Holdings Inc",
    "name": {
        "title": null,
        "first": "Elroy",
        "middle": null,
        "last": "Kent",
        "suffix": null
    },
    "address": {
        "streetAddress": "4350 Green Gully Street",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Horta Pardilheiro",
        "locality1": "S\u00e3o Matias Bja",
        "locality2": "Beja",
        "country": "PT",
        "postalCode": "7800-750",
        "geoSpatial": [
            "-7.8564",
            "38.1093"
        ]
    },
    "contact": {
        "email": "ekent135@ccs.com",
        "phone": "135-811-1191",
        "socMedia": []
    },
    "login": {
        "username": "ekent",
        "oauth2": null,
        "password": "$2y$10$fZ4yvSKE0WY39fv49WpwQ.dMN.mMnpjW5vt.3C\/XOO\/jKMdPub8X2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-06-09"
    }
});
db.users.insertOne(
{
    "userKey": "CLELMCKA9417",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Clelia",
        "middle": "N",
        "last": "Mckay",
        "suffix": null
    },
    "address": {
        "streetAddress": "8268 Green Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Greater Sudbury (New Sudbury)",
        "locality1": "ON",
        "locality2": "Greater Sudbury ",
        "country": "CA",
        "postalCode": "P3A",
        "geoSpatial": [
            "-80.934",
            "46.5187"
        ]
    },
    "contact": {
        "email": "cmckay136@lookdata.com",
        "phone": "136-848-9417",
        "socMedia": {
            "twitter": "cmckay@twitter.com"
        }
    },
    "login": {
        "username": "cmckay",
        "oauth2": "cmckay@twitter.com",
        "password": "$2y$10$KuMe\/9BiaYeHYPsVd44ARuFMOFnvjTf5cgXWA4hHKk6dTQOFxqvB2"
    },
    "otherContact": {
        "emails": [
            "cmckay136@lookdata.com",
            "cmckay136@cubenet.com",
            "cmckay136@airtel.com"
        ],
        "phoneNumbers": [
            "136-986-9435",
            "136-681-3169",
            "136-053-5916"
        ],
        "socMedias": [
            {
                "linkedin": "cmckay@linkedin.com"
            },
            {
                "linkedin": "cmckay@linkedin.com"
            },
            {
                "linkedin": "cmckay@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-07-07"
    }
});
db.users.insertOne(
{
    "userKey": "ERYNPARR2999",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Eryn",
        "middle": "O",
        "last": "Parra",
        "suffix": null
    },
    "address": {
        "streetAddress": "2974 Red Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Juan",
        "locality1": "San Juan",
        "locality2": "San Juan",
        "country": "PR",
        "postalCode": "00921",
        "geoSpatial": [
            "-66.1057",
            "18.4663"
        ]
    },
    "contact": {
        "email": "eparra137@telia.com",
        "phone": "137-233-2999",
        "socMedia": {
            "google": "eparra@google.com"
        }
    },
    "login": {
        "username": "eparra",
        "oauth2": "eparra@google.com",
        "password": "$2y$10$XOEakOC3LfP5tHkEjOgbUO5tKGHXYZDPTZqCRRxEqwZSaE.hqm7rm"
    },
    "otherContact": {
        "emails": [
            "eparra137@relcom.com"
        ],
        "phoneNumbers": [
            "137-494-3146"
        ],
        "socMedias": [
            {
                "skype": "eparra@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-05-12"
    }
});
db.users.insertOne(
{
    "userKey": "RENALAWS7738",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Renate",
        "middle": null,
        "last": "Lawson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7742 Winding Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "46",
        "city": "Palai",
        "locality1": "Meenachil",
        "locality2": "Kottayam",
        "country": "IN",
        "postalCode": "686575",
        "geoSpatial": [
            "76.7063",
            "9.728"
        ]
    },
    "contact": {
        "email": "rlawson138@tata.com",
        "phone": "138-224-7738",
        "socMedia": []
    },
    "login": {
        "username": "rlawson",
        "oauth2": null,
        "password": "$2y$10$B2rd0cyVG1nR2JrtI2ndteu7k9Atc.99npWvmX0SJv7exUBC2qOQ2"
    },
    "otherContact": {
        "emails": [
            "rlawson138@telstra.com"
        ],
        "phoneNumbers": [
            "138-219-9274"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-03-21"
    }
});
db.users.insertOne(
{
    "userKey": "ASHLCHRI6245",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ashlea",
        "middle": "M",
        "last": "Christensen",
        "suffix": null
    },
    "address": {
        "streetAddress": "6420 Long Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041e\u0441\u0442\u0430\u043f\u043a\u0456\u0432\u0446\u0456",
        "locality1": "Nemyrivskyi",
        "locality2": "Nemyrivskyi",
        "country": "UA",
        "postalCode": "22853",
        "geoSpatial": [
            "28.832",
            "48.8805"
        ]
    },
    "contact": {
        "email": "achriste139@telesystems.com",
        "phone": "139-647-6245",
        "socMedia": {
            "twitter": "achriste@twitter.com"
        }
    },
    "login": {
        "username": "achriste",
        "oauth2": "achriste@twitter.com",
        "password": "$2y$10$v1ul3S6US\/7UozzNeudsOed4Zj3SMVLReDNDbk.M6CShdYptLJfTy"
    },
    "otherContact": {
        "emails": [
            "achriste139@oi.com",
            "achriste139@singtel.com"
        ],
        "phoneNumbers": [
            "139-269-9473",
            "139-192-4745"
        ],
        "socMedias": [
            {
                "google": "achriste@google.com"
            },
            {
                "line": "achriste@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-06-21"
    }
});
db.users.insertOne(
{
    "userKey": "LADOPENN7328",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Friendly Business",
    "name": {
        "title": "Ms",
        "first": "Ladonna",
        "middle": "Z",
        "last": "Pennington",
        "suffix": null
    },
    "address": {
        "streetAddress": "1737 Little Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Warnanagar",
        "locality1": "Panhala",
        "locality2": "Kolhapur",
        "country": "IN",
        "postalCode": "416113",
        "geoSpatial": [
            "75.149",
            "18.721"
        ]
    },
    "contact": {
        "email": "lpenning140@kpn.com",
        "phone": "140-838-7328",
        "socMedia": {
            "google": "lpenning@google.com"
        }
    },
    "login": {
        "username": "lpenning",
        "oauth2": "lpenning@google.com",
        "password": "$2y$10$Y0fJGlymIWxRGfGDDikuPOvi4wmJxAlflKWUAFc5SedrHpSaQ7yJy"
    },
    "otherContact": {
        "emails": [
            "lpenning140@bt.com",
            "lpenning140@telenor.com"
        ],
        "phoneNumbers": [
            "140-638-6117",
            "140-895-9472"
        ],
        "socMedias": [
            {
                "facebook": "lpenning@facebook.com"
            },
            {
                "skype": "lpenning@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-09-04"
    }
});
db.users.insertOne(
{
    "userKey": "MIBART3852",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Mi",
        "middle": null,
        "last": "Barton",
        "suffix": null
    },
    "address": {
        "streetAddress": "1736 Green Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mons Obourg",
        "locality1": "WAL",
        "locality2": "Hainaut",
        "country": "BE",
        "postalCode": "7034",
        "geoSpatial": [
            "3.9523",
            "50.4541"
        ]
    },
    "contact": {
        "email": "mbarton141@optus.com",
        "phone": "141-697-3852",
        "socMedia": []
    },
    "login": {
        "username": "mbarton",
        "oauth2": null,
        "password": "$2y$10$lykzhWUe5UrZeenhp9KY7unt0UXrl2MUtBANoXgA2D4FEuZQ2jhHq"
    },
    "otherContact": {
        "emails": [
            "mbarton141@telecom.com",
            "mbarton141@uunet.com"
        ],
        "phoneNumbers": [
            "141-143-2134",
            "141-351-4932"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-12-27"
    }
});
db.users.insertOne(
{
    "userKey": "LEKIGRAV0652",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Lekisha",
        "middle": "Z",
        "last": "Graves",
        "suffix": null
    },
    "address": {
        "streetAddress": "1084 Winding Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pace",
        "locality1": "MS",
        "locality2": "Bolivar",
        "country": "US",
        "postalCode": "38764",
        "geoSpatial": [
            "-90.857",
            "33.7915"
        ]
    },
    "contact": {
        "email": "lgraves142@lookdata.com",
        "phone": "142-657-0652",
        "socMedia": {
            "google": "lgraves@google.com"
        }
    },
    "login": {
        "username": "lgraves",
        "oauth2": "lgraves@google.com",
        "password": "$2y$10$OjVR15S98y6zHDU3Pl7.ZeRpJRWmkChf8lzfdGJnAVQM0\/Q0WUwNm"
    },
    "otherContact": {
        "emails": [
            "lgraves142@belgacom.com"
        ],
        "phoneNumbers": [
            "142-147-5867"
        ],
        "socMedias": [
            {
                "twitter": "lgraves@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-10-20"
    }
});
db.users.insertOne(
{
    "userKey": "GINNRICH9082",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ginny",
        "middle": "N",
        "last": "Richmond",
        "suffix": null
    },
    "address": {
        "streetAddress": "5778 Red Mound Drive",
        "buildingName": "Building 89",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00c7ukur\u00f6z",
        "locality1": "Eldivan",
        "locality2": "Eldivan",
        "country": "TR",
        "postalCode": "18700",
        "geoSpatial": [
            "34.1041",
            "40.7925"
        ]
    },
    "contact": {
        "email": "grichmon143@tm.com",
        "phone": "143-566-9082",
        "socMedia": {
            "line": "grichmon@line.com"
        }
    },
    "login": {
        "username": "grichmon",
        "oauth2": "grichmon@line.com",
        "password": "$2y$10$2hU\/3VYUi.UxtnsMfGAru.YN\/Yf3tuYx6a62GZHONNvcJtdV848b2"
    },
    "otherContact": {
        "emails": [
            "grichmon143@nordnet.com",
            "grichmon143@ais.com",
            "grichmon143@etisalat.com"
        ],
        "phoneNumbers": [
            "143-081-5742",
            "143-764-7432",
            "143-787-2019"
        ],
        "socMedias": [
            {
                "linkedin": "grichmon@linkedin.com"
            },
            {
                "skype": "grichmon@skype.com"
            },
            {
                "twitter": "grichmon@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-09-26"
    }
});
db.users.insertOne(
{
    "userKey": "DEESHAW7397",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Dee",
        "middle": null,
        "last": "Shaw",
        "suffix": null
    },
    "address": {
        "streetAddress": "4129 Blue Gulch Ride",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": "BE",
        "city": "Willand",
        "locality1": "England",
        "locality2": "Devon",
        "country": "GB",
        "postalCode": "EX15",
        "geoSpatial": [
            "-3.3667",
            "50.8833"
        ]
    },
    "contact": {
        "email": "dshaw144@telefonica.com",
        "phone": "144-403-7397",
        "socMedia": []
    },
    "login": {
        "username": "dshaw",
        "oauth2": null,
        "password": "$2y$10$L56tK4SO93WDRAwSDlUm1OvEICGDdSbaWtuYvx18qv0lkbYm4JKDS"
    },
    "otherContact": {
        "emails": [
            "dshaw144@telesystems.com"
        ],
        "phoneNumbers": [
            "144-005-0327"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-01-06"
    }
});
db.users.insertOne(
{
    "userKey": "TIAVALE8388",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Friendly Industries Company",
    "name": {
        "title": "Ms",
        "first": "Tia",
        "middle": "O",
        "last": "Valenzuela",
        "suffix": null
    },
    "address": {
        "streetAddress": "3483 Red Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gumperding",
        "locality1": "Perwang am Grabensee",
        "locality2": "Politischer Bezirk Braunau am Inn",
        "country": "AT",
        "postalCode": "5166",
        "geoSpatial": [
            "13.0733",
            "47.9663"
        ]
    },
    "contact": {
        "email": "tvalenzu145@rogers.com",
        "phone": "145-599-8388",
        "socMedia": {
            "twitter": "tvalenzu@twitter.com"
        }
    },
    "login": {
        "username": "tvalenzu",
        "oauth2": "tvalenzu@twitter.com",
        "password": "$2y$10$bQfGJKDOTTfpT7cP4LpeG.6RRHlBdq0NibMJA6IaiVv.tB59S55i6"
    },
    "otherContact": {
        "emails": [
            "tvalenzu145@access.com",
            "tvalenzu145@openworld.com"
        ],
        "phoneNumbers": [
            "145-465-7732",
            "145-096-5408"
        ],
        "socMedias": [
            {
                "facebook": "tvalenzu@facebook.com"
            },
            {
                "google": "tvalenzu@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-11-15"
    }
});
db.users.insertOne(
{
    "userKey": "WADESCHW3341",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Wade",
        "middle": "L",
        "last": "Schwartz",
        "suffix": null
    },
    "address": {
        "streetAddress": "5875 Blue River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Austin",
        "locality1": "TX",
        "locality2": "Travis",
        "country": "US",
        "postalCode": "78737",
        "geoSpatial": [
            "-97.9427",
            "30.2107"
        ]
    },
    "contact": {
        "email": "wschwart146@tm.com",
        "phone": "146-934-3341",
        "socMedia": {
            "skype": "wschwart@skype.com"
        }
    },
    "login": {
        "username": "wschwart",
        "oauth2": "wschwart@skype.com",
        "password": "$2y$10$W94J7J8jdrBlDqDQrA0kD.f\/rN6G9pZayitv15HMMw71u\/uiT5MOO"
    },
    "otherContact": {
        "emails": [
            "wschwart146@lookdata.com",
            "wschwart146@orstom.com",
            "wschwart146@relcom.com"
        ],
        "phoneNumbers": [
            "146-662-6505",
            "146-349-0275",
            "146-506-2414"
        ],
        "socMedias": [
            {
                "skype": "wschwart@skype.com"
            },
            {
                "skype": "wschwart@skype.com"
            },
            {
                "line": "wschwart@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-10-10"
    }
});
db.users.insertOne(
{
    "userKey": "CRISGEOR4533",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Cristina",
        "middle": null,
        "last": "George",
        "suffix": null
    },
    "address": {
        "streetAddress": "4000 Red Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0424\u0438\u043b\u0438\u043d\u0441\u043a\u043e\u0435",
        "locality1": "\u0412\u0410\u0427\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality2": "\u0412\u0410\u0427\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "606162",
        "geoSpatial": [
            "42.5161",
            "55.7553"
        ]
    },
    "contact": {
        "email": "cgeorge147@ntt.com",
        "phone": "147-937-4533",
        "socMedia": []
    },
    "login": {
        "username": "cgeorge",
        "oauth2": null,
        "password": "$2y$10$oU49bLoSzcSRq3m9AcgNh.NYtPfLKknLoL6g2QzfBMwnb5LWyj\/cG"
    },
    "otherContact": {
        "emails": [
            "cgeorge147@netcom.com"
        ],
        "phoneNumbers": [
            "147-415-5011"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-02-20"
    }
});
db.users.insertOne(
{
    "userKey": "ALBEHIGG2325",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Alberto",
        "middle": "D",
        "last": "Higgins",
        "suffix": null
    },
    "address": {
        "streetAddress": "7119 Winding Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Brahmania",
        "locality1": "Brahmagiri",
        "locality2": "Puri",
        "country": "IN",
        "postalCode": "752011",
        "geoSpatial": [
            "85.0953",
            "20.0968"
        ]
    },
    "contact": {
        "email": "ahiggins148@uunet.com",
        "phone": "148-036-2325",
        "socMedia": {
            "twitter": "ahiggins@twitter.com"
        }
    },
    "login": {
        "username": "ahiggins",
        "oauth2": "ahiggins@twitter.com",
        "password": "$2y$10$ygOws1B27v2PtarQSSFfIeWtS7flbFINOrdV9NHuivM7N4Z4Eq8la"
    },
    "otherContact": {
        "emails": [
            "ahiggins148@worldnet.com",
            "ahiggins148@telesystems.com"
        ],
        "phoneNumbers": [
            "148-586-0047",
            "148-287-9793"
        ],
        "socMedias": [
            {
                "line": "ahiggins@line.com"
            },
            {
                "twitter": "ahiggins@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-09-17"
    }
});
db.users.insertOne(
{
    "userKey": "JOSHBELT3596",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Josh",
        "middle": "B",
        "last": "Beltran",
        "suffix": null
    },
    "address": {
        "streetAddress": "5249 Green Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chapinero",
        "locality1": "Bogot\u00e1  D.C.",
        "locality2": "Bogot\u00e1  D.C.",
        "country": "CO",
        "postalCode": "110221",
        "geoSpatial": [
            "-74.0448",
            "4.6639"
        ]
    },
    "contact": {
        "email": "jbeltran149@verizon.com",
        "phone": "149-795-3596",
        "socMedia": {
            "facebook": "jbeltran@facebook.com"
        }
    },
    "login": {
        "username": "jbeltran",
        "oauth2": "jbeltran@facebook.com",
        "password": "$2y$10$TP37u5nkYBSiKC5h.8U..OUqRV0kHJ9cH3AAzg5eInfiPhLnG2Ixe"
    },
    "otherContact": {
        "emails": [
            "jbeltran149@lookdata.com",
            "jbeltran149@tt.com",
            "jbeltran149@worldnet.com"
        ],
        "phoneNumbers": [
            "149-481-4639",
            "149-528-7929",
            "149-843-9994"
        ],
        "socMedias": [
            {
                "twitter": "jbeltran@twitter.com"
            },
            {
                "google": "jbeltran@google.com"
            },
            {
                "skype": "jbeltran@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-04-27"
    }
});
db.users.insertOne(
{
    "userKey": "MARYHART2683",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Business LLC",
    "name": {
        "title": null,
        "first": "Maryalice",
        "middle": null,
        "last": "Hart",
        "suffix": null
    },
    "address": {
        "streetAddress": "929 Blue Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "6C",
        "city": "Mount Morris",
        "locality1": "NY",
        "locality2": "Livingston",
        "country": "US",
        "postalCode": "14510",
        "geoSpatial": [
            "-77.8664",
            "42.6835"
        ]
    },
    "contact": {
        "email": "mhart150@rogers.com",
        "phone": "150-810-2683",
        "socMedia": []
    },
    "login": {
        "username": "mhart",
        "oauth2": null,
        "password": "$2y$10$Our3e2xEAkNDrDHNsRKpnOg\/sG9oljLrTpmHhxGRPIXdEZpzZGwz6"
    },
    "otherContact": {
        "emails": [
            "mhart150@apicnet.com",
            "mhart150@access.com"
        ],
        "phoneNumbers": [
            "150-464-3270",
            "150-494-9600"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-09-02"
    }
});
db.users.insertOne(
{
    "userKey": "JERMSANT2712",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Jermaine",
        "middle": "G",
        "last": "Santana",
        "suffix": null
    },
    "address": {
        "streetAddress": "9889 Little Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Winnipeg (Centennial)",
        "locality1": "MB",
        "locality2": "Winnipeg",
        "country": "CA",
        "postalCode": "R3A",
        "geoSpatial": [
            "-97.1489",
            "49.9038"
        ]
    },
    "contact": {
        "email": "jsantana152@telkom.com",
        "phone": "152-632-2712",
        "socMedia": {
            "linkedin": "jsantana@linkedin.com"
        }
    },
    "login": {
        "username": "jsantana",
        "oauth2": "jsantana@linkedin.com",
        "password": "$2y$10$COroEV0eEoEEI2Sj99avMeR\/DYY710lBfNmmYPIAnLTSgaUfMBseK"
    },
    "otherContact": {
        "emails": [
            "jsantana152@jio.com",
            "jsantana152@jio.com",
            "jsantana152@rogers.com"
        ],
        "phoneNumbers": [
            "152-462-1294",
            "152-887-1134",
            "152-649-4339"
        ],
        "socMedias": [
            {
                "google": "jsantana@google.com"
            },
            {
                "linkedin": "jsantana@linkedin.com"
            },
            {
                "facebook": "jsantana@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-07-12"
    }
});
db.users.insertOne(
{
    "userKey": "CINDPERR9098",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Dr",
        "first": "Cinda",
        "middle": null,
        "last": "Perry",
        "suffix": "III"
    },
    "address": {
        "streetAddress": "1945 Little Tree Road",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": null,
        "city": "Yigo",
        "locality1": "Guam",
        "locality2": "Guam",
        "country": "GU",
        "postalCode": "96929",
        "geoSpatial": [
            "144.8834",
            "13.5702"
        ]
    },
    "contact": {
        "email": "cperry153@glasnet.com",
        "phone": "153-029-9098",
        "socMedia": []
    },
    "login": {
        "username": "cperry",
        "oauth2": null,
        "password": "$2y$10$QjX9jcTKKyU3uflbG7C7ZeXj6wPqtmce2DQysmSUR4QlGuCgLhH32"
    },
    "otherContact": {
        "emails": [
            "cperry153@airtel.com",
            "cperry153@turkcell.com",
            "cperry153@kddi.com"
        ],
        "phoneNumbers": [
            "153-404-5048",
            "153-054-4670",
            "153-663-6621"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-01-09"
    }
});
db.users.insertOne(
{
    "userKey": "DAREDALT6770",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Darell",
        "middle": "R",
        "last": "Dalton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3041 Short Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bruceville",
        "locality1": "TX",
        "locality2": "McLennan",
        "country": "US",
        "postalCode": "76630",
        "geoSpatial": [
            "-97.2342",
            "31.3267"
        ]
    },
    "contact": {
        "email": "ddalton154@optus.com",
        "phone": "154-329-6770",
        "socMedia": {
            "twitter": "ddalton@twitter.com"
        }
    },
    "login": {
        "username": "ddalton",
        "oauth2": "ddalton@twitter.com",
        "password": "$2y$10$ubVkuI05jDb7hbROfojOr.Vi\/n7O7ikPRqshEd86yii601TfNtIKq"
    },
    "otherContact": {
        "emails": [
            "ddalton154@orstom.com"
        ],
        "phoneNumbers": [
            "154-818-1797"
        ],
        "socMedias": [
            {
                "linkedin": "ddalton@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-05-02"
    }
});
db.users.insertOne(
{
    "userKey": "SHAWDIAZ3583",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Leisure Associates",
    "name": {
        "title": "Ms",
        "first": "Shawanna",
        "middle": "D",
        "last": "Diaz",
        "suffix": null
    },
    "address": {
        "streetAddress": "9720 Little Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tennoshita",
        "locality1": "Miharu Machi",
        "locality2": "Tamura Gun",
        "country": "JP",
        "postalCode": "963-7705",
        "geoSpatial": [
            "140.4263",
            "37.6244"
        ]
    },
    "contact": {
        "email": "sdiaz155@ui.com",
        "phone": "155-966-3583",
        "socMedia": {
            "facebook": "sdiaz@facebook.com"
        }
    },
    "login": {
        "username": "sdiaz",
        "oauth2": "sdiaz@facebook.com",
        "password": "$2y$10$XkhpiaZxGloBQEowJlwKmO86taPRyNohwCMg6\/ptHzqrJyGnksPLm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-12-05"
    }
});
db.users.insertOne(
{
    "userKey": "PANSBOND3005",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Pansy",
        "middle": null,
        "last": "Bond",
        "suffix": null
    },
    "address": {
        "streetAddress": "5899 Winding Bend Avenue",
        "buildingName": "Building D4",
        "floor": null,
        "roomAptCondoFlat": "B2",
        "city": "Salmonby",
        "locality1": "England",
        "locality2": "Lincolnshire",
        "country": "GB",
        "postalCode": "LN9",
        "geoSpatial": [
            "-0.0163",
            "53.2414"
        ]
    },
    "contact": {
        "email": "pbond156@ooredoo.com",
        "phone": "156-377-3005",
        "socMedia": []
    },
    "login": {
        "username": "pbond",
        "oauth2": null,
        "password": "$2y$10$St5vDj3HZfiezKkAqqITVeE8hoEYUucZoPY0kyvS6gTJfyTjZ2U4q"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-08-12"
    }
});
db.users.insertOne(
{
    "userKey": "SHAKBENJ4578",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Shakira",
        "middle": "F",
        "last": "Benjamin",
        "suffix": null
    },
    "address": {
        "streetAddress": "7435 Green Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Trujillo Alto",
        "locality1": "Trujillo Alto",
        "locality2": "Trujillo Alto",
        "country": "PR",
        "postalCode": "00976",
        "geoSpatial": [
            "-66.0074",
            "18.3547"
        ]
    },
    "contact": {
        "email": "sbenjami157@airtel.com",
        "phone": "157-658-4578",
        "socMedia": {
            "google": "sbenjami@google.com"
        }
    },
    "login": {
        "username": "sbenjami",
        "oauth2": "sbenjami@google.com",
        "password": "$2y$10$svNanGnv06MGq4kjBLUAFO4eoH9IEVz78f8fjGz17NcKH9dHApnj2"
    },
    "otherContact": {
        "emails": [
            "sbenjami157@vivendi.com",
            "sbenjami157@chunghwa.com",
            "sbenjami157@cubenet.com"
        ],
        "phoneNumbers": [
            "157-532-3004",
            "157-197-0222",
            "157-765-8269"
        ],
        "socMedias": [
            {
                "skype": "sbenjami@skype.com"
            },
            {
                "google": "sbenjami@google.com"
            },
            {
                "facebook": "sbenjami@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-03-21"
    }
});
db.users.insertOne(
{
    "userKey": "MERRELLI6127",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Merrie",
        "middle": "S",
        "last": "Ellis",
        "suffix": null
    },
    "address": {
        "streetAddress": "8669 Long Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bhaduka",
        "locality1": "Muli",
        "locality2": "Surendra Nagar",
        "country": "IN",
        "postalCode": "363510",
        "geoSpatial": [
            "71.1087",
            "22.8543"
        ]
    },
    "contact": {
        "email": "mellis158@sktelecom.com",
        "phone": "158-164-6127",
        "socMedia": {
            "skype": "mellis@skype.com"
        }
    },
    "login": {
        "username": "mellis",
        "oauth2": "mellis@skype.com",
        "password": "$2y$10$idQDVK.e7t7kIIXqFHUZcuEKmZiZB4HtqGvomIAu6QwtGl9k\/SHKK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-01-06"
    }
});
db.users.insertOne(
{
    "userKey": "RAYMMIDD9573",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Raymond",
        "middle": null,
        "last": "Middleton",
        "suffix": null
    },
    "address": {
        "streetAddress": "5966 Green Gully Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Morangup",
        "locality1": "WA",
        "locality2": "STIRLING",
        "country": "AU",
        "postalCode": "6083",
        "geoSpatial": [
            "116.3541",
            "-31.599"
        ]
    },
    "contact": {
        "email": "rmiddlet159@orange.com",
        "phone": "159-515-9573",
        "socMedia": []
    },
    "login": {
        "username": "rmiddlet",
        "oauth2": null,
        "password": "$2y$10$rXIlQLGMvlbapEiBkv07qu0lVdIfon6rscCtE\/vlTOVXCP3Khp3k2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-09-14"
    }
});
db.users.insertOne(
{
    "userKey": "LEANCUEV4155",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Accomodation Partners",
    "name": {
        "title": "Ms",
        "first": "Leandro",
        "middle": "E",
        "last": "Cuevas",
        "suffix": null
    },
    "address": {
        "streetAddress": "8912 Winding Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chelmer",
        "locality1": "QLD",
        "locality2": "NORTHGATE CENT",
        "country": "AU",
        "postalCode": "4068",
        "geoSpatial": [
            "152.9752",
            "-27.5133"
        ]
    },
    "contact": {
        "email": "lcuevas160@relcom.com",
        "phone": "160-220-4155",
        "socMedia": {
            "google": "lcuevas@google.com"
        }
    },
    "login": {
        "username": "lcuevas",
        "oauth2": "lcuevas@google.com",
        "password": "$2y$10$rw6QiCi\/0aO896syoTYSP.l4d.bSGW8USld\/4o0qYiM22NzLY9Nri"
    },
    "otherContact": {
        "emails": [
            "lcuevas160@singtel.com",
            "lcuevas160@bce.com"
        ],
        "phoneNumbers": [
            "160-634-7225",
            "160-170-4238"
        ],
        "socMedias": [
            {
                "facebook": "lcuevas@facebook.com"
            },
            {
                "google": "lcuevas@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1962-11-17"
    }
});
db.users.insertOne(
{
    "userKey": "BRANGARC7756",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Branden",
        "middle": "H",
        "last": "Garcia",
        "suffix": null
    },
    "address": {
        "streetAddress": "3544 Short Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a 108",
        "locality1": "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
        "locality2": "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c",
        "country": "RU",
        "postalCode": "454108",
        "geoSpatial": [
            "61.4483",
            "55.2626"
        ]
    },
    "contact": {
        "email": "bgarcia161@ais.com",
        "phone": "161-144-7756",
        "socMedia": {
            "google": "bgarcia@google.com"
        }
    },
    "login": {
        "username": "bgarcia",
        "oauth2": "bgarcia@google.com",
        "password": "$2y$10$HGSP2m6mEUYZah4qaS7iaebkXTxcpNG6ILiV.8YOIPSJ0Bypka3zK"
    },
    "otherContact": {
        "emails": [
            "bgarcia161@bifty.com",
            "bgarcia161@cci.com"
        ],
        "phoneNumbers": [
            "161-639-1121",
            "161-309-2091"
        ],
        "socMedias": [
            {
                "facebook": "bgarcia@facebook.com"
            },
            {
                "skype": "bgarcia@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1936-01-10"
    }
});
db.users.insertOne(
{
    "userKey": "SAMAPARK7372",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Samatha",
        "middle": null,
        "last": "Parks",
        "suffix": null
    },
    "address": {
        "streetAddress": "7809 Short Bough Road",
        "buildingName": null,
        "floor": 6,
        "roomAptCondoFlat": "88",
        "city": "Killingworth",
        "locality1": "NSW",
        "locality2": "HUNTER",
        "country": "AU",
        "postalCode": "2278",
        "geoSpatial": [
            "151.556",
            "-32.9341"
        ]
    },
    "contact": {
        "email": "sparks162@softbank.com",
        "phone": "162-942-7372",
        "socMedia": []
    },
    "login": {
        "username": "sparks",
        "oauth2": null,
        "password": "$2y$10$1cw\/d39rVSadwYNZR38rIeYxlKHp\/d.YHSkykoqwus5gm4knxBsM."
    },
    "otherContact": {
        "emails": [
            "sparks162@daxnet.com",
            "sparks162@telenor.com",
            "sparks162@vodafone.com"
        ],
        "phoneNumbers": [
            "162-370-3855",
            "162-760-9903",
            "162-264-9797"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-08-09"
    }
});
db.users.insertOne(
{
    "userKey": "STEFOCHO2469",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Stefany",
        "middle": "B",
        "last": "Ochoa",
        "suffix": null
    },
    "address": {
        "streetAddress": "2697 Winding Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00d6dkarby",
        "locality1": "Saltvik",
        "locality2": "Saltvik",
        "country": "AX",
        "postalCode": "22320",
        "geoSpatial": [
            "20.0054",
            "60.3162"
        ]
    },
    "contact": {
        "email": "sochoa163@frontier.com",
        "phone": "163-686-2469",
        "socMedia": {
            "facebook": "sochoa@facebook.com"
        }
    },
    "login": {
        "username": "sochoa",
        "oauth2": "sochoa@facebook.com",
        "password": "$2y$10$KAPoKB1zioecm7SXPzd6Uu43YJrWHWrFStCwEv.equZw1tXj\/nM\/a"
    },
    "otherContact": {
        "emails": [
            "sochoa163@mtn.com",
            "sochoa163@ktc.com",
            "sochoa163@openworld.com"
        ],
        "phoneNumbers": [
            "163-621-2326",
            "163-918-5432",
            "163-937-9195"
        ],
        "socMedias": [
            {
                "linkedin": "sochoa@linkedin.com"
            },
            {
                "google": "sochoa@google.com"
            },
            {
                "google": "sochoa@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-01-04"
    }
});
db.users.insertOne(
{
    "userKey": "DENNWHIT3167",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Denny",
        "middle": "N",
        "last": "Whitney",
        "suffix": null
    },
    "address": {
        "streetAddress": "6779 Big Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yarmouth",
        "locality1": "NS",
        "locality2": "Nova Scotia",
        "country": "CA",
        "postalCode": "B5A",
        "geoSpatial": [
            "-66.1156",
            "43.8335"
        ]
    },
    "contact": {
        "email": "dwhitney164@etisalat.com",
        "phone": "164-923-3167",
        "socMedia": {
            "skype": "dwhitney@skype.com"
        }
    },
    "login": {
        "username": "dwhitney",
        "oauth2": "dwhitney@skype.com",
        "password": "$2y$10$BddR6RbUiXcTLoEHrGuwl.S1KMFmqgyVIoK6nVoQkJPrizFX4fD2a"
    },
    "otherContact": {
        "emails": [
            "dwhitney164@verizon.com",
            "dwhitney164@vodafone.com",
            "dwhitney164@daxnet.com"
        ],
        "phoneNumbers": [
            "164-584-1386",
            "164-303-2353",
            "164-062-6251"
        ],
        "socMedias": [
            {
                "line": "dwhitney@line.com"
            },
            {
                "linkedin": "dwhitney@linkedin.com"
            },
            {
                "google": "dwhitney@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-01-11"
    }
});
db.users.insertOne(
{
    "userKey": "MARIFRY9136",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Accomodation Associates Ltd",
    "name": {
        "title": null,
        "first": "Mariette",
        "middle": null,
        "last": "Fry",
        "suffix": null
    },
    "address": {
        "streetAddress": "1551 Winding Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nagyszokoly",
        "locality1": "TO",
        "locality2": "Tolna",
        "country": "HU",
        "postalCode": "7097",
        "geoSpatial": [
            "18.2167",
            "46.7167"
        ]
    },
    "contact": {
        "email": "mfry165@telecom.com",
        "phone": "165-420-9136",
        "socMedia": []
    },
    "login": {
        "username": "mfry",
        "oauth2": null,
        "password": "$2y$10$ZSZ1AUOLz6vIfBJaBLHUleYkXuafn6W.gZjqfKfmjitNE76z4vEAu"
    },
    "otherContact": {
        "emails": [
            "mfry165@access.com"
        ],
        "phoneNumbers": [
            "165-255-3054"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-07-27"
    }
});
db.users.insertOne(
{
    "userKey": "LETIHUDS7199",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Letitia",
        "middle": "J",
        "last": "Hudson",
        "suffix": null
    },
    "address": {
        "streetAddress": "5784 Short Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Independence",
        "locality1": "MO",
        "locality2": "Jackson",
        "country": "US",
        "postalCode": "64056",
        "geoSpatial": [
            "-94.3596",
            "39.1177"
        ]
    },
    "contact": {
        "email": "lhudson166@verizon.com",
        "phone": "166-373-7199",
        "socMedia": {
            "line": "lhudson@line.com"
        }
    },
    "login": {
        "username": "lhudson",
        "oauth2": "lhudson@line.com",
        "password": "$2y$10$tQaKcjr.k5TBKPcBScgkh.l9QpZ8BjSdzcSkfQJ1Xxxzg1lZyKKsO"
    },
    "otherContact": {
        "emails": [
            "lhudson166@vimpelcom.com",
            "lhudson166@ais.com"
        ],
        "phoneNumbers": [
            "166-519-5925",
            "166-709-8265"
        ],
        "socMedias": [
            {
                "line": "lhudson@line.com"
            },
            {
                "linkedin": "lhudson@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-12-06"
    }
});
db.users.insertOne(
{
    "userKey": "OLAJARV6994",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ola",
        "middle": "O",
        "last": "Jarvis",
        "suffix": null
    },
    "address": {
        "streetAddress": "3340 Little River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ciudad de Los Trabajadores",
        "locality1": null,
        "locality2": null,
        "country": "DO",
        "postalCode": "11802",
        "geoSpatial": [
            "-69.9139",
            "18.5028"
        ]
    },
    "contact": {
        "email": "ojarvis167@sprint.com",
        "phone": "167-282-6994",
        "socMedia": {
            "line": "ojarvis@line.com"
        }
    },
    "login": {
        "username": "ojarvis",
        "oauth2": "ojarvis@line.com",
        "password": "$2y$10$zRKMIRcmtvqDjaGRATV4renquCWoOfrBR1bzafZak8OcRnnK\/xprK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-04-28"
    }
});
db.users.insertOne(
{
    "userKey": "JERRWALT8349",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Jerrod",
        "middle": null,
        "last": "Walter",
        "suffix": null
    },
    "address": {
        "streetAddress": "2950 Short Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "3F",
        "city": "Mogareeka",
        "locality1": "NSW",
        "locality2": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2550",
        "geoSpatial": [
            "149.976",
            "-36.6984"
        ]
    },
    "contact": {
        "email": "jwalter168@tm.com",
        "phone": "168-922-8349",
        "socMedia": []
    },
    "login": {
        "username": "jwalter",
        "oauth2": null,
        "password": "$2y$10$DTJbTjaTdNEKBSjP\/rwxc.e3CXdOlPdVB6MGfumIycVq5Em3v227O"
    },
    "otherContact": {
        "emails": [
            "jwalter168@telecom.com",
            "jwalter168@seednet.com",
            "jwalter168@rogers.com"
        ],
        "phoneNumbers": [
            "168-240-4043",
            "168-162-4622",
            "168-405-6331"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-03-20"
    }
});
db.users.insertOne(
{
    "userKey": "MILLWALK4291",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Millard",
        "middle": "R",
        "last": "Walker",
        "suffix": null
    },
    "address": {
        "streetAddress": "8667 Red Ditch Boulevard",
        "buildingName": "Building 0D",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oran El Hamri",
        "locality1": "Oran",
        "locality2": "Oran",
        "country": "DZ",
        "postalCode": "31034",
        "geoSpatial": [
            "-0.5863",
            "35.6199"
        ]
    },
    "contact": {
        "email": "mwalker169@jio.com",
        "phone": "169-831-4291",
        "socMedia": {
            "facebook": "mwalker@facebook.com"
        }
    },
    "login": {
        "username": "mwalker",
        "oauth2": "mwalker@facebook.com",
        "password": "$2y$10$CubzOboeiRE4GP6GNiTnGesuAolaGcJKMUfxMSKbgdj9Pi4kntWRy"
    },
    "otherContact": {
        "emails": [
            "mwalker169@daxnet.com",
            "mwalker169@apicnet.com",
            "mwalker169@lookdata.com"
        ],
        "phoneNumbers": [
            "169-236-4809",
            "169-284-5597",
            "169-867-7841"
        ],
        "socMedias": [
            {
                "skype": "mwalker@skype.com"
            },
            {
                "google": "mwalker@google.com"
            },
            {
                "linkedin": "mwalker@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-01-30"
    }
});
db.users.insertOne(
{
    "userKey": "MELLCOOK6742",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Industrious Trust Inc",
    "name": {
        "title": "Ms",
        "first": "Mellisa",
        "middle": "N",
        "last": "Cook",
        "suffix": null
    },
    "address": {
        "streetAddress": "2194 Winding River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Seethanagar",
        "locality1": "Gudur",
        "locality2": "Warangal",
        "country": "IN",
        "postalCode": "506134",
        "geoSpatial": [
            "79.6971",
            "17.7094"
        ]
    },
    "contact": {
        "email": "mcook170@tata.com",
        "phone": "170-702-6742",
        "socMedia": {
            "twitter": "mcook@twitter.com"
        }
    },
    "login": {
        "username": "mcook",
        "oauth2": "mcook@twitter.com",
        "password": "$2y$10$HdE8mErmToAlArawxxrcquErUmHghZr0QQTmQL4FP63szZOpk4Fd."
    },
    "otherContact": {
        "emails": [
            "mcook170@vodafone.com"
        ],
        "phoneNumbers": [
            "170-464-4848"
        ],
        "socMedias": [
            {
                "twitter": "mcook@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-05-23"
    }
});
db.users.insertOne(
{
    "userKey": "JULIWADE9999",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Julius",
        "middle": null,
        "last": "Wade",
        "suffix": null
    },
    "address": {
        "streetAddress": "3236 Winding Bend Ride",
        "buildingName": null,
        "floor": 9,
        "roomAptCondoFlat": null,
        "city": "Borstel",
        "locality1": "NI",
        "locality2": "Landkreis Diepholz",
        "country": "DE",
        "postalCode": "27246",
        "geoSpatial": [
            "9.0201",
            "52.6646"
        ]
    },
    "contact": {
        "email": "jwade171@telefonica.com",
        "phone": "171-896-9999",
        "socMedia": []
    },
    "login": {
        "username": "jwade",
        "oauth2": null,
        "password": "$2y$10$.8w..8uOJ0mRXGoXYeadZeEFPgLJKwimTgBd99u7c7rQS\/z\/gC1mm"
    },
    "otherContact": {
        "emails": [
            "jwade171@ptcl.com",
            "jwade171@daxnet.com",
            "jwade171@chunghwa.com"
        ],
        "phoneNumbers": [
            "171-697-0103",
            "171-808-7487",
            "171-778-2043"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-08-07"
    }
});
db.users.insertOne(
{
    "userKey": "IDALAHME6361",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Idalia",
        "middle": "A",
        "last": "Ahmed",
        "suffix": null
    },
    "address": {
        "streetAddress": "8611 Big Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dilari",
        "locality1": "Moradabad",
        "locality2": "Moradabad",
        "country": "IN",
        "postalCode": "244401",
        "geoSpatial": [
            "78.7525",
            "29.0433"
        ]
    },
    "contact": {
        "email": "iahmed172@bce.com",
        "phone": "172-243-6361",
        "socMedia": {
            "linkedin": "iahmed@linkedin.com"
        }
    },
    "login": {
        "username": "iahmed",
        "oauth2": "iahmed@linkedin.com",
        "password": "$2y$10$ZnxRvLiQz4.rIi5Siib1kOf8Rt3NUkbLiY3UNVr2kxeDbN6rPySH."
    },
    "otherContact": {
        "emails": [
            "iahmed172@oi.com",
            "iahmed172@daxnet.com",
            "iahmed172@telefonica.com"
        ],
        "phoneNumbers": [
            "172-501-6960",
            "172-931-4991",
            "172-536-6072"
        ],
        "socMedias": [
            {
                "twitter": "iahmed@twitter.com"
            },
            {
                "facebook": "iahmed@facebook.com"
            },
            {
                "twitter": "iahmed@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-05-18"
    }
});
db.users.insertOne(
{
    "userKey": "ABBESALI9606",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Abbey",
        "middle": "J",
        "last": "Salinas",
        "suffix": null
    },
    "address": {
        "streetAddress": "6135 Green Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Domett",
        "locality1": "E9",
        "locality2": "Canterbury",
        "country": "NZ",
        "postalCode": "7383",
        "geoSpatial": [
            "173.2167",
            "-42.85"
        ]
    },
    "contact": {
        "email": "asalinas173@bt.com",
        "phone": "173-614-9606",
        "socMedia": {
            "linkedin": "asalinas@linkedin.com"
        }
    },
    "login": {
        "username": "asalinas",
        "oauth2": "asalinas@linkedin.com",
        "password": "$2y$10$8XRsav2OiEX\/wcqqrfjfSeiJE1FrNx8eSdDXS0qVEMmONaFPHUa4m"
    },
    "otherContact": {
        "emails": [
            "asalinas173@centurylink.com",
            "asalinas173@orange.com",
            "asalinas173@telecom.com"
        ],
        "phoneNumbers": [
            "173-606-9228",
            "173-581-8559",
            "173-019-3658"
        ],
        "socMedias": [
            {
                "twitter": "asalinas@twitter.com"
            },
            {
                "skype": "asalinas@skype.com"
            },
            {
                "line": "asalinas@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-06-10"
    }
});
db.users.insertOne(
{
    "userKey": "TIFFCANN7825",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Dr",
        "first": "Tiffaney",
        "middle": null,
        "last": "Cannon",
        "suffix": "III"
    },
    "address": {
        "streetAddress": "7321 Short Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "D6",
        "city": "Tulsa",
        "locality1": "OK",
        "locality2": "Tulsa",
        "country": "US",
        "postalCode": "74149",
        "geoSpatial": [
            "-96.0297",
            "36.1398"
        ]
    },
    "contact": {
        "email": "tcannon174@centurylink.com",
        "phone": "174-553-7825",
        "socMedia": []
    },
    "login": {
        "username": "tcannon",
        "oauth2": null,
        "password": "$2y$10$zgx3QDsHlOEKgPLAz.GMMeTk5CnlFCcFFd8.B74U5iMB5gxqRjp5m"
    },
    "otherContact": {
        "emails": [
            "tcannon174@tata.com",
            "tcannon174@safaricom.com"
        ],
        "phoneNumbers": [
            "174-258-3515",
            "174-065-1644"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-12-04"
    }
});
db.users.insertOne(
{
    "userKey": "VIRGSHEP2147",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Illuminati Trust LLC",
    "name": {
        "title": "Mr",
        "first": "Virgilio",
        "middle": "L",
        "last": "Shepard",
        "suffix": null
    },
    "address": {
        "streetAddress": "3216 Long Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Les Abymes",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97181 CEDEX",
        "geoSpatial": [
            "-61.5045",
            "16.271"
        ]
    },
    "contact": {
        "email": "vshepard175@access.com",
        "phone": "175-396-2147",
        "socMedia": {
            "twitter": "vshepard@twitter.com"
        }
    },
    "login": {
        "username": "vshepard",
        "oauth2": "vshepard@twitter.com",
        "password": "$2y$10$2MdFwz6HgCezPxbhd\/39.uizWcUI3GIvGr0vcUVCBgLiCZ1T6UDgO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-05-18"
    }
});
db.users.insertOne(
{
    "userKey": "KIYOVALE3815",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Kiyoko",
        "middle": "A",
        "last": "Valenzuela",
        "suffix": null
    },
    "address": {
        "streetAddress": "507 Green Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kotagara",
        "locality1": "Kamakhyanagar",
        "locality2": "Dhenkanal",
        "country": "IN",
        "postalCode": "759026",
        "geoSpatial": [
            "85.379",
            "21.1619"
        ]
    },
    "contact": {
        "email": "kvalenzu176@singtel.com",
        "phone": "176-700-3815",
        "socMedia": {
            "twitter": "kvalenzu@twitter.com"
        }
    },
    "login": {
        "username": "kvalenzu",
        "oauth2": "kvalenzu@twitter.com",
        "password": "$2y$10$E7\/yw7OK.cUuCLIi6b8qPuuhPC7FhW2lt6j0NVeiSB3AgcA6AYAzW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-02-21"
    }
});
db.users.insertOne(
{
    "userKey": "RENECORD9569",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Renetta",
        "middle": null,
        "last": "Cordova",
        "suffix": null
    },
    "address": {
        "streetAddress": "2140 Short Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Massana",
        "locality1": null,
        "locality2": null,
        "country": "AD",
        "postalCode": "AD400",
        "geoSpatial": [
            "1.4833",
            "42.5667"
        ]
    },
    "contact": {
        "email": "rcordova177@att.com",
        "phone": "177-138-9569",
        "socMedia": []
    },
    "login": {
        "username": "rcordova",
        "oauth2": null,
        "password": "$2y$10$wpYclfE0ZeEipNRsaDrFCuVlEpS5a.npv\/ehsMDVXUx.wodbcEC0W"
    },
    "otherContact": {
        "emails": [
            "rcordova177@eunet.com",
            "rcordova177@ui.com"
        ],
        "phoneNumbers": [
            "177-769-0573",
            "177-568-6403"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-11-10"
    }
});
db.users.insertOne(
{
    "userKey": "LELAOLSE9643",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Leland",
        "middle": "H",
        "last": "Olsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "7489 Big Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dartmouth",
        "locality1": "England",
        "locality2": "Devon",
        "country": "GB",
        "postalCode": "TQ6",
        "geoSpatial": [
            "-3.5794",
            "50.3522"
        ]
    },
    "contact": {
        "email": "lolsen178@telecom.com",
        "phone": "178-367-9643",
        "socMedia": {
            "linkedin": "lolsen@linkedin.com"
        }
    },
    "login": {
        "username": "lolsen",
        "oauth2": "lolsen@linkedin.com",
        "password": "$2y$10$fEcXkvf4FoNNcDGOGbqja.l9NbiCvVnEAIzX\/SzkUU4n2XoqqZVD."
    },
    "otherContact": {
        "emails": [
            "lolsen178@vivendi.com",
            "lolsen178@belgacom.com"
        ],
        "phoneNumbers": [
            "178-645-0065",
            "178-330-0126"
        ],
        "socMedias": [
            {
                "facebook": "lolsen@facebook.com"
            },
            {
                "line": "lolsen@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-01-15"
    }
});
db.users.insertOne(
{
    "userKey": "ESPEPEAR2568",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Esperanza",
        "middle": "Z",
        "last": "Pearson",
        "suffix": null
    },
    "address": {
        "streetAddress": "1951 Blue Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yap",
        "locality1": "State of Yap",
        "locality2": "State of Yap",
        "country": "FM",
        "postalCode": "96943",
        "geoSpatial": [
            "151.5031",
            "7.1383"
        ]
    },
    "contact": {
        "email": "epearson179@nordnet.com",
        "phone": "179-365-2568",
        "socMedia": {
            "twitter": "epearson@twitter.com"
        }
    },
    "login": {
        "username": "epearson",
        "oauth2": "epearson@twitter.com",
        "password": "$2y$10$qMi19.hTQzapP8dJrZiWW.SnJ0NeGLxkBB5cf\/1b94GjAzK0Ci6w2"
    },
    "otherContact": {
        "emails": [
            "epearson179@greennet.com",
            "epearson179@glasnet.com",
            "epearson179@kpn.com"
        ],
        "phoneNumbers": [
            "179-169-5871",
            "179-919-5296",
            "179-937-5815"
        ],
        "socMedias": [
            {
                "skype": "epearson@skype.com"
            },
            {
                "google": "epearson@google.com"
            },
            {
                "google": "epearson@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-06-19"
    }
});
db.users.insertOne(
{
    "userKey": "RAYETERR7887",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Lazy Bird Industries LLC",
    "name": {
        "title": null,
        "first": "Raye",
        "middle": null,
        "last": "Terrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "6365 Green Ridge Circle",
        "buildingName": null,
        "floor": 20,
        "roomAptCondoFlat": "93",
        "city": "Majorbari Budhbaria Bazar",
        "locality1": "Silapathar",
        "locality2": "Dhemaji",
        "country": "IN",
        "postalCode": "787059",
        "geoSpatial": [
            "93.8095",
            "26.206"
        ]
    },
    "contact": {
        "email": "rterrell180@airtel.com",
        "phone": "180-175-7887",
        "socMedia": []
    },
    "login": {
        "username": "rterrell",
        "oauth2": null,
        "password": "$2y$10$atH83KP.srMCvtaCwG8KYOT2IJIlKiY5MbpoZ0lv2P3.hzJAdeQWC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-08-19"
    }
});
db.users.insertOne(
{
    "userKey": "KENNKELL6241",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Kenny",
        "middle": "D",
        "last": "Keller",
        "suffix": null
    },
    "address": {
        "streetAddress": "9427 Big Woods Way",
        "buildingName": "Building BD",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Machharhatta",
        "locality1": "Sampatchak",
        "locality2": "Patna",
        "country": "IN",
        "postalCode": "800008",
        "geoSpatial": [
            "85.2202",
            "25.5986"
        ]
    },
    "contact": {
        "email": "kkeller182@nii.com",
        "phone": "182-401-6241",
        "socMedia": {
            "linkedin": "kkeller@linkedin.com"
        }
    },
    "login": {
        "username": "kkeller",
        "oauth2": "kkeller@linkedin.com",
        "password": "$2y$10$JoTvJLoB6wTRP9IjQyBr8ucNTtSPDuNxhE.PTjRXOKlbI8L\/JN8E2"
    },
    "otherContact": {
        "emails": [
            "kkeller182@ais.com"
        ],
        "phoneNumbers": [
            "182-153-4128"
        ],
        "socMedias": [
            {
                "twitter": "kkeller@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-02-05"
    }
});
db.users.insertOne(
{
    "userKey": "RANDDUFF1238",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Randy",
        "middle": null,
        "last": "Duffy",
        "suffix": null
    },
    "address": {
        "streetAddress": "8297 Green Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Du\u0161n\u00edky",
        "locality1": "Litom\u011b\u0159ice",
        "locality2": "Litom\u011b\u0159ice",
        "country": "CZ",
        "postalCode": "413 01",
        "geoSpatial": [
            "14.2",
            "50.4333"
        ]
    },
    "contact": {
        "email": "rduffy183@vodafone.com",
        "phone": "183-541-1238",
        "socMedia": []
    },
    "login": {
        "username": "rduffy",
        "oauth2": null,
        "password": "$2y$10$iq.zYozJV0tnUX1oUshxE.ueQFW2QiKFAlos35xBfS.UrBYVC7DGS"
    },
    "otherContact": {
        "emails": [
            "rduffy183@nii.com"
        ],
        "phoneNumbers": [
            "183-498-8517"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-11-13"
    }
});
db.users.insertOne(
{
    "userKey": "FAUSMELT5283",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Faustina",
        "middle": "M",
        "last": "Melton",
        "suffix": null
    },
    "address": {
        "streetAddress": "7294 Green Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Spring",
        "locality1": "TX",
        "locality2": "Montgomery",
        "country": "US",
        "postalCode": "77381",
        "geoSpatial": [
            "-95.4985",
            "30.1716"
        ]
    },
    "contact": {
        "email": "fmelton184@telesystems.com",
        "phone": "184-702-5283",
        "socMedia": {
            "linkedin": "fmelton@linkedin.com"
        }
    },
    "login": {
        "username": "fmelton",
        "oauth2": "fmelton@linkedin.com",
        "password": "$2y$10$HHSBidCovkObBaP1GMmX7.QM.20MUJzmpaP3C2dEeNfYJFRYmbga2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-11-10"
    }
});
db.users.insertOne(
{
    "userKey": "LOLACLIN8527",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Green Partners LLC",
    "name": {
        "title": "Ms",
        "first": "Lola",
        "middle": "Y",
        "last": "Cline",
        "suffix": null
    },
    "address": {
        "streetAddress": "7899 Big Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rajec",
        "locality1": "ZI",
        "locality2": "\u017dilina",
        "country": "SK",
        "postalCode": "015 01",
        "geoSpatial": [
            "18.6401",
            "49.089"
        ]
    },
    "contact": {
        "email": "lcline185@nordnet.com",
        "phone": "185-846-8527",
        "socMedia": {
            "line": "lcline@line.com"
        }
    },
    "login": {
        "username": "lcline",
        "oauth2": "lcline@line.com",
        "password": "$2y$10$CeWWYOHze2PZSMy2BBuvdu1hLsVZF4JP8DvXi5lYfhwPzXRcBNWjC"
    },
    "otherContact": {
        "emails": [
            "lcline185@bce.com"
        ],
        "phoneNumbers": [
            "185-970-9450"
        ],
        "socMedias": [
            {
                "twitter": "lcline@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-06-21"
    }
});
db.users.insertOne(
{
    "userKey": "SIDNLANE3540",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Sidney",
        "middle": null,
        "last": "Lane",
        "suffix": null
    },
    "address": {
        "streetAddress": "8294 Long Mound Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "35",
        "city": "Mau Ka Ther",
        "locality1": "Chandausi",
        "locality2": "Moradabad",
        "country": "IN",
        "postalCode": "244410",
        "geoSpatial": [
            "78.6993",
            "28.4631"
        ]
    },
    "contact": {
        "email": "slane186@megafon.com",
        "phone": "186-044-3540",
        "socMedia": []
    },
    "login": {
        "username": "slane",
        "oauth2": null,
        "password": "$2y$10$GiHgECFqT6WYUcLSirY8DelatSeV9J84eeukbfR0.alG0\/SpXEAFy"
    },
    "otherContact": {
        "emails": [
            "slane186@cci.com"
        ],
        "phoneNumbers": [
            "186-222-8287"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-12-26"
    }
});
db.users.insertOne(
{
    "userKey": "MARIADAM1481",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Mariko",
        "middle": "J",
        "last": "Adams",
        "suffix": null
    },
    "address": {
        "streetAddress": "7323 Green Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fort-de-France",
        "locality1": "MQ",
        "locality2": "Martinique",
        "country": "MQ",
        "postalCode": "97219 CEDEX",
        "geoSpatial": [
            "-61.0733",
            "14.6089"
        ]
    },
    "contact": {
        "email": "madams187@cubenet.com",
        "phone": "187-031-1481",
        "socMedia": {
            "line": "madams@line.com"
        }
    },
    "login": {
        "username": "madams",
        "oauth2": "madams@line.com",
        "password": "$2y$10$\/P3ttbz5\/B0HBMHn.RlPx.ChwrXj2nrKAHbpYmwt6CT8YYmq7JZEi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-03-16"
    }
});
db.users.insertOne(
{
    "userKey": "BRANPROC9386",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Brande",
        "middle": "X",
        "last": "Proctor",
        "suffix": null
    },
    "address": {
        "streetAddress": "8301 Red Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lonavala",
        "locality1": "Maval",
        "locality2": "Pune",
        "country": "IN",
        "postalCode": "410401",
        "geoSpatial": [
            "73.4057",
            "18.7528"
        ]
    },
    "contact": {
        "email": "bproctor188@maxcomm.com",
        "phone": "188-728-9386",
        "socMedia": {
            "linkedin": "bproctor@linkedin.com"
        }
    },
    "login": {
        "username": "bproctor",
        "oauth2": "bproctor@linkedin.com",
        "password": "$2y$10$drrysWdgqpTaO3TySD7pGOCDdPQkhW6tlAzcmHDM8HdHQz8GVJS.6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-05-01"
    }
});
db.users.insertOne(
{
    "userKey": "LANEDANI9491",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Illuminati Trust",
    "name": {
        "title": "Ms",
        "first": "Lanette",
        "middle": "W",
        "last": "Daniels",
        "suffix": null
    },
    "address": {
        "streetAddress": "3823 Winding Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Brant and Norfolk (Waterford)",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "N0E",
        "geoSpatial": [
            "-80.5572",
            "42.6618"
        ]
    },
    "contact": {
        "email": "ldaniels190@frontier.com",
        "phone": "190-690-9491",
        "socMedia": {
            "linkedin": "ldaniels@linkedin.com"
        }
    },
    "login": {
        "username": "ldaniels",
        "oauth2": "ldaniels@linkedin.com",
        "password": "$2y$10$GUHOA.SI1AeEjdlsqQCZ2eeEKfWrR7sNR5hzn6fkoSFBhQ8mil2gm"
    },
    "otherContact": {
        "emails": [
            "ldaniels190@rogers.com",
            "ldaniels190@worldnet.com",
            "ldaniels190@access.com"
        ],
        "phoneNumbers": [
            "190-866-0820",
            "190-253-1286",
            "190-978-1114"
        ],
        "socMedias": [
            {
                "skype": "ldaniels@skype.com"
            },
            {
                "skype": "ldaniels@skype.com"
            },
            {
                "linkedin": "ldaniels@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-06-16"
    }
});
db.users.insertOne(
{
    "userKey": "SCOTNOLA4754",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Scottie",
        "middle": "W",
        "last": "Nolan",
        "suffix": null
    },
    "address": {
        "streetAddress": "3397 Blue Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lecco",
        "locality1": "LM",
        "locality2": "Lecco",
        "country": "IT",
        "postalCode": "23900",
        "geoSpatial": [
            "9.397",
            "45.8559"
        ]
    },
    "contact": {
        "email": "snolan191@orange.com",
        "phone": "191-251-4754",
        "socMedia": {
            "linkedin": "snolan@linkedin.com"
        }
    },
    "login": {
        "username": "snolan",
        "oauth2": "snolan@linkedin.com",
        "password": "$2y$10$jjTWS01D34aONxnP4wtwa.IP3YQ7PLMW7bwOJdrQqRMoMQOs94hPa"
    },
    "otherContact": {
        "emails": [
            "snolan191@telecom.com"
        ],
        "phoneNumbers": [
            "191-380-5562"
        ],
        "socMedias": [
            {
                "linkedin": "snolan@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-12-03"
    }
});
db.users.insertOne(
{
    "userKey": "ROSEFIGU9143",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Rosella",
        "middle": null,
        "last": "Figueroa",
        "suffix": null
    },
    "address": {
        "streetAddress": "6336 Blue Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "13",
        "city": "Masoodpura",
        "locality1": "Hamirpur",
        "locality2": "Mahoba",
        "country": "IN",
        "postalCode": "210429",
        "geoSpatial": [
            "79.4775",
            "25.5815"
        ]
    },
    "contact": {
        "email": "rfiguero192@eunet.com",
        "phone": "192-051-9143",
        "socMedia": []
    },
    "login": {
        "username": "rfiguero",
        "oauth2": null,
        "password": "$2y$10$3SJWWUAQaKqi7whyAYkaHOpPfpycNB3R3AuS12mOgNOOVlZL7AsMK"
    },
    "otherContact": {
        "emails": [
            "rfiguero192@telecom.com"
        ],
        "phoneNumbers": [
            "192-717-5881"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-01-29"
    }
});
db.users.insertOne(
{
    "userKey": "RENERHOD4741",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Renea",
        "middle": "X",
        "last": "Rhodes",
        "suffix": null
    },
    "address": {
        "streetAddress": "419 Big River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cameron",
        "locality1": "OK",
        "locality2": "Le Flore",
        "country": "US",
        "postalCode": "74932",
        "geoSpatial": [
            "-94.506",
            "35.1494"
        ]
    },
    "contact": {
        "email": "rrhodes194@rogers.com",
        "phone": "194-462-4741",
        "socMedia": {
            "line": "rrhodes@line.com"
        }
    },
    "login": {
        "username": "rrhodes",
        "oauth2": "rrhodes@line.com",
        "password": "$2y$10$e0gr0DWqD2DqlwU15og7NuvWXKee2ruh49bX2NLUaBgH\/rMW3n4Pq"
    },
    "otherContact": {
        "emails": [
            "rrhodes194@oi.com",
            "rrhodes194@ptcl.com",
            "rrhodes194@telus.com"
        ],
        "phoneNumbers": [
            "194-679-1972",
            "194-011-7470",
            "194-189-6552"
        ],
        "socMedias": [
            {
                "line": "rrhodes@line.com"
            },
            {
                "facebook": "rrhodes@facebook.com"
            },
            {
                "line": "rrhodes@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-10-11"
    }
});
db.users.insertOne(
{
    "userKey": "EZEQCOOK5197",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Powerhouse Trust",
    "name": {
        "title": null,
        "first": "Ezequiel",
        "middle": null,
        "last": "Cook",
        "suffix": null
    },
    "address": {
        "streetAddress": "9041 Big Canyon Avenue",
        "buildingName": "Building 0F",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "SAN PABLO LA LAGUNA",
        "locality1": "DEPTO DE SOLOLA",
        "locality2": "DEPTO DE SOLOLA",
        "country": "GT",
        "postalCode": "07015",
        "geoSpatial": [
            "-91.2667",
            "14.7167"
        ]
    },
    "contact": {
        "email": "ecook195@ooredoo.com",
        "phone": "195-569-5197",
        "socMedia": []
    },
    "login": {
        "username": "ecook",
        "oauth2": null,
        "password": "$2y$10$x0\/v7INXmV9v4qkYP\/3rceEHNjoECgTDhd8BxMaKU0PIe1YztEOKy"
    },
    "otherContact": {
        "emails": [
            "ecook195@tm.com"
        ],
        "phoneNumbers": [
            "195-679-3113"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-08-08"
    }
});
db.users.insertOne(
{
    "userKey": "ANALMANN9977",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Analisa",
        "middle": "T",
        "last": "Mann",
        "suffix": null
    },
    "address": {
        "streetAddress": "7117 Little Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "London South (East Highland \/ North White Oaks \/ North Westminster)",
        "locality1": "ON",
        "locality2": "London",
        "country": "CA",
        "postalCode": "N6C",
        "geoSpatial": [
            "-81.238",
            "42.9582"
        ]
    },
    "contact": {
        "email": "amann196@tt.com",
        "phone": "196-471-9977",
        "socMedia": {
            "line": "amann@line.com"
        }
    },
    "login": {
        "username": "amann",
        "oauth2": "amann@line.com",
        "password": "$2y$10$Bwl4k\/9jR8cyHLmU8mjVauUm8SoqbrLkvOpouJueqqMddU9Ta44d2"
    },
    "otherContact": {
        "emails": [
            "amann196@swisscom.com"
        ],
        "phoneNumbers": [
            "196-061-5103"
        ],
        "socMedias": [
            {
                "google": "amann@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-07-15"
    }
});
db.users.insertOne(
{
    "userKey": "ELDRSHAF1775",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Eldridge",
        "middle": "E",
        "last": "Shaffer",
        "suffix": null
    },
    "address": {
        "streetAddress": "6706 Little Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bucure\u015fti 5",
        "locality1": "Sector 5",
        "locality2": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "050753",
        "geoSpatial": [
            "26.0624",
            "44.4022"
        ]
    },
    "contact": {
        "email": "eshaffer197@megafon.com",
        "phone": "197-132-1775",
        "socMedia": {
            "linkedin": "eshaffer@linkedin.com"
        }
    },
    "login": {
        "username": "eshaffer",
        "oauth2": "eshaffer@linkedin.com",
        "password": "$2y$10$O0k8Mael0Vwt.DNR1KMS2OYO.89e69DzZU4U2MgpyTHYSSpypaHum"
    },
    "otherContact": {
        "emails": [
            "eshaffer197@uunet.com",
            "eshaffer197@vivendi.com"
        ],
        "phoneNumbers": [
            "197-877-2523",
            "197-032-7438"
        ],
        "socMedias": [
            {
                "twitter": "eshaffer@twitter.com"
            },
            {
                "twitter": "eshaffer@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-05-10"
    }
});
db.users.insertOne(
{
    "userKey": "DANTLIU4790",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Dante",
        "middle": null,
        "last": "Liu",
        "suffix": null
    },
    "address": {
        "streetAddress": "9423 Short Bough Ride",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": "8A",
        "city": "Boolarong",
        "locality1": "VIC",
        "locality2": "Victoria",
        "country": "AU",
        "postalCode": "3960",
        "geoSpatial": [
            "146.25",
            "-38.5667"
        ]
    },
    "contact": {
        "email": "dliu198@cci.com",
        "phone": "198-919-4790",
        "socMedia": []
    },
    "login": {
        "username": "dliu",
        "oauth2": null,
        "password": "$2y$10$V7ItFZoQsUWgDg375q3v5uD0lAcXM9a\/KWfx8ugzFURcmXYkDndVO"
    },
    "otherContact": {
        "emails": [
            "dliu198@lguplus.com",
            "dliu198@telecom.com"
        ],
        "phoneNumbers": [
            "198-239-5789",
            "198-391-0749"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-01-21"
    }
});
db.users.insertOne(
{
    "userKey": "CORIDALT4566",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Corine",
        "middle": "O",
        "last": "Dalton",
        "suffix": null
    },
    "address": {
        "streetAddress": "8906 Short Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paget",
        "locality1": "Paget Parish",
        "locality2": "Paget Parish",
        "country": "BM",
        "postalCode": "PG 01",
        "geoSpatial": [
            "-64.7817",
            "32.2783"
        ]
    },
    "contact": {
        "email": "cdalton199@unicom.com",
        "phone": "199-999-4566",
        "socMedia": {
            "linkedin": "cdalton@linkedin.com"
        }
    },
    "login": {
        "username": "cdalton",
        "oauth2": "cdalton@linkedin.com",
        "password": "$2y$10$\/RwL3MaAaacj5kquJI.6ueoThmUbn5PwzOSTdpKBUhk4GhcQQUAz2"
    },
    "otherContact": {
        "emails": [
            "cdalton199@seednet.com",
            "cdalton199@att.com",
            "cdalton199@kpn.com"
        ],
        "phoneNumbers": [
            "199-171-0797",
            "199-786-2578",
            "199-016-0085"
        ],
        "socMedias": [
            {
                "linkedin": "cdalton@linkedin.com"
            },
            {
                "twitter": "cdalton@twitter.com"
            },
            {
                "facebook": "cdalton@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-12-04"
    }
});
db.users.insertOne(
{
    "userKey": "JAMESANT4213",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Comfort Industries",
    "name": {
        "title": "Ms",
        "first": "James",
        "middle": "I",
        "last": "Santiago",
        "suffix": null
    },
    "address": {
        "streetAddress": "7955 Little Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Carstairs",
        "locality1": "QLD",
        "locality2": "NORTH QLD",
        "country": "AU",
        "postalCode": "4806",
        "geoSpatial": [
            "147.4",
            "-19.65"
        ]
    },
    "contact": {
        "email": "jsantiag200@econnect.com",
        "phone": "200-040-4213",
        "socMedia": {
            "facebook": "jsantiag@facebook.com"
        }
    },
    "login": {
        "username": "jsantiag",
        "oauth2": "jsantiag@facebook.com",
        "password": "$2y$10$NXEnbBTxkQxhBVF3xxnLI.ThXwi3w9iKIQYcRxtyNMftjWEusXxn2"
    },
    "otherContact": {
        "emails": [
            "jsantiag200@mtn.com",
            "jsantiag200@optus.com"
        ],
        "phoneNumbers": [
            "200-558-0324",
            "200-861-5491"
        ],
        "socMedias": [
            {
                "facebook": "jsantiag@facebook.com"
            },
            {
                "twitter": "jsantiag@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-06-25"
    }
});
db.users.insertOne(
{
    "userKey": "VALGALV2288",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Val",
        "middle": null,
        "last": "Galvan",
        "suffix": null
    },
    "address": {
        "streetAddress": "6941 Long Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Monaco-Ville",
        "locality1": "Monaco-Ville",
        "locality2": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "geoSpatial": [
            "7.4167",
            "43.7333"
        ]
    },
    "contact": {
        "email": "vgalvan201@kpn.com",
        "phone": "201-776-2288",
        "socMedia": []
    },
    "login": {
        "username": "vgalvan",
        "oauth2": null,
        "password": "$2y$10$SPFKwQqivfXqrzZiQ\/sLEO3BPSgNa0CnXNX\/9EOHWq5QlkzKGCWau"
    },
    "otherContact": {
        "emails": [
            "vgalvan201@etisalat.com",
            "vgalvan201@telekom.com"
        ],
        "phoneNumbers": [
            "201-834-4176",
            "201-040-1361"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-08-16"
    }
});
db.users.insertOne(
{
    "userKey": "CECISPEN9414",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Cecil",
        "middle": "J",
        "last": "Spencer",
        "suffix": null
    },
    "address": {
        "streetAddress": "4394 Short Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chandabilla",
        "locality1": "R.g.pur",
        "locality2": "Mayurbhanj",
        "country": "IN",
        "postalCode": "757018",
        "geoSpatial": [
            "86.2217",
            "21.1316"
        ]
    },
    "contact": {
        "email": "cspencer202@sprint.com",
        "phone": "202-014-9414",
        "socMedia": {
            "skype": "cspencer@skype.com"
        }
    },
    "login": {
        "username": "cspencer",
        "oauth2": "cspencer@skype.com",
        "password": "$2y$10$B.d.ZMUJdY9P1\/Svf7U4auyhOZ9saoVaWUxHyEVYj3b\/uuSjmCx9m"
    },
    "otherContact": {
        "emails": [
            "cspencer202@ptcl.com",
            "cspencer202@greennet.com"
        ],
        "phoneNumbers": [
            "202-581-0574",
            "202-366-7742"
        ],
        "socMedias": [
            {
                "skype": "cspencer@skype.com"
            },
            {
                "google": "cspencer@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-04-27"
    }
});
db.users.insertOne(
{
    "userKey": "RICKBARN8003",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Rickie",
        "middle": "Y",
        "last": "Barnett",
        "suffix": null
    },
    "address": {
        "streetAddress": "5580 Blue Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Pierre",
        "locality1": "Saint-Pierre",
        "locality2": "Saint-Pierre",
        "country": "PM",
        "postalCode": "97500",
        "geoSpatial": [
            "-56.172",
            "46.7809"
        ]
    },
    "contact": {
        "email": "rbarnett203@frontier.com",
        "phone": "203-585-8003",
        "socMedia": {
            "facebook": "rbarnett@facebook.com"
        }
    },
    "login": {
        "username": "rbarnett",
        "oauth2": "rbarnett@facebook.com",
        "password": "$2y$10$gIzwMYHcXKGhuRRAQbU5u.X\/\/ChV8gcW9g8uT2zqFfyO.2\/00w1\/q"
    },
    "otherContact": {
        "emails": [
            "rbarnett203@millicom.com"
        ],
        "phoneNumbers": [
            "203-357-7563"
        ],
        "socMedias": [
            {
                "line": "rbarnett@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-01-15"
    }
});
db.users.insertOne(
{
    "userKey": "ELVICHRI2517",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Elvin",
        "middle": null,
        "last": "Christian",
        "suffix": null
    },
    "address": {
        "streetAddress": "6068 Red Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "8C",
        "city": "Havertown",
        "locality1": "PA",
        "locality2": "Delaware",
        "country": "US",
        "postalCode": "19083",
        "geoSpatial": [
            "-75.3106",
            "39.9774"
        ]
    },
    "contact": {
        "email": "echristi204@etisalat.com",
        "phone": "204-026-2517",
        "socMedia": []
    },
    "login": {
        "username": "echristi",
        "oauth2": null,
        "password": "$2y$10$bDzw.EpJThdMKnQUjObOjeK6Iq8UyK3IVSDQP91dh\/a8kxXGNqJzW"
    },
    "otherContact": {
        "emails": [
            "echristi204@seednet.com"
        ],
        "phoneNumbers": [
            "204-072-6880"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-04-17"
    }
});
db.users.insertOne(
{
    "userKey": "BARRSHOR3202",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Industries",
    "name": {
        "title": "Mr",
        "first": "Barrett",
        "middle": "D",
        "last": "Short",
        "suffix": null
    },
    "address": {
        "streetAddress": "9786 Long Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Savegre",
        "locality1": "Savegre",
        "locality2": "Quepos",
        "country": "CR",
        "postalCode": "60602",
        "geoSpatial": [
            "-83.9455",
            "9.3562"
        ]
    },
    "contact": {
        "email": "bshort205@tt.com",
        "phone": "205-081-3202",
        "socMedia": {
            "twitter": "bshort@twitter.com"
        }
    },
    "login": {
        "username": "bshort",
        "oauth2": "bshort@twitter.com",
        "password": "$2y$10$F2Xlwx.Tks\/rFIwzAYguL.Gt1sTGVLfLvcYxZVIpaasitdfvR93hq"
    },
    "otherContact": {
        "emails": [
            "bshort205@orange.com",
            "bshort205@kddi.com"
        ],
        "phoneNumbers": [
            "205-266-6929",
            "205-369-2152"
        ],
        "socMedias": [
            {
                "linkedin": "bshort@linkedin.com"
            },
            {
                "twitter": "bshort@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-10-19"
    }
});
db.users.insertOne(
{
    "userKey": "ALEXFINL7520",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Alex",
        "middle": "D",
        "last": "Finley",
        "suffix": null
    },
    "address": {
        "streetAddress": "515 Long Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Harrisburg",
        "locality1": "NC",
        "locality2": "Cabarrus",
        "country": "US",
        "postalCode": "28075",
        "geoSpatial": [
            "-80.6594",
            "35.3247"
        ]
    },
    "contact": {
        "email": "afinley206@telstra.com",
        "phone": "206-324-7520",
        "socMedia": {
            "linkedin": "afinley@linkedin.com"
        }
    },
    "login": {
        "username": "afinley",
        "oauth2": "afinley@linkedin.com",
        "password": "$2y$10$qsTu8U0LPdyy3IbN9SjO2Or1GcawzvYa7zhSBbkXPjl2v792NNOou"
    },
    "otherContact": {
        "emails": [
            "afinley206@turkcell.com",
            "afinley206@telecom.com",
            "afinley206@movil.com"
        ],
        "phoneNumbers": [
            "206-326-5173",
            "206-334-1835",
            "206-551-5046"
        ],
        "socMedias": [
            {
                "line": "afinley@line.com"
            },
            {
                "line": "afinley@line.com"
            },
            {
                "line": "afinley@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-07-22"
    }
});
db.users.insertOne(
{
    "userKey": "MALIBOWE6772",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Malisa",
        "middle": null,
        "last": "Bowers",
        "suffix": null
    },
    "address": {
        "streetAddress": "3281 Winding Mountain Boulevard",
        "buildingName": null,
        "floor": 16,
        "roomAptCondoFlat": null,
        "city": "Ruggell",
        "locality1": "Ruggell",
        "locality2": "Ruggell",
        "country": "LI",
        "postalCode": "9491",
        "geoSpatial": [
            "9.5345",
            "47.2484"
        ]
    },
    "contact": {
        "email": "mbowers207@netcom.com",
        "phone": "207-153-6772",
        "socMedia": []
    },
    "login": {
        "username": "mbowers",
        "oauth2": null,
        "password": "$2y$10$XMDKWRNWqS7rveQI8vrZv.Yfgahn7UsID9rtjZg4wbcekCt1vJxP."
    },
    "otherContact": {
        "emails": [
            "mbowers207@telenor.com"
        ],
        "phoneNumbers": [
            "207-827-6129"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-11-27"
    }
});
db.users.insertOne(
{
    "userKey": "AMMIMANN3241",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ammie",
        "middle": "Q",
        "last": "Manning",
        "suffix": null
    },
    "address": {
        "streetAddress": "6394 Winding Stream Avenue",
        "buildingName": "Building 3A",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kearneys Spring",
        "locality1": "QLD",
        "locality2": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4350",
        "geoSpatial": [
            "151.941",
            "-27.6049"
        ]
    },
    "contact": {
        "email": "amanning208@ccs.com",
        "phone": "208-068-3241",
        "socMedia": {
            "facebook": "amanning@facebook.com"
        }
    },
    "login": {
        "username": "amanning",
        "oauth2": "amanning@facebook.com",
        "password": "$2y$10$bsBTznqxzIvDuBF8G96o2ODZJ\/s3YGAgYl3thxrIDnkKKaYZGQYhW"
    },
    "otherContact": {
        "emails": [
            "amanning208@telenor.com",
            "amanning208@vivendi.com",
            "amanning208@telekom.com"
        ],
        "phoneNumbers": [
            "208-495-0540",
            "208-752-4132",
            "208-347-9084"
        ],
        "socMedias": [
            {
                "twitter": "amanning@twitter.com"
            },
            {
                "facebook": "amanning@facebook.com"
            },
            {
                "facebook": "amanning@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-09-21"
    }
});
db.users.insertOne(
{
    "userKey": "HECTWILK5639",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Hector",
        "middle": "E",
        "last": "Wilkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "3137 Blue Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Aspelt",
        "locality1": "ES",
        "locality2": "Frisange",
        "country": "LU",
        "postalCode": "L-5718",
        "geoSpatial": [
            "6.224",
            "49.5208"
        ]
    },
    "contact": {
        "email": "hwilkins209@softbank.com",
        "phone": "209-374-5639",
        "socMedia": {
            "twitter": "hwilkins@twitter.com"
        }
    },
    "login": {
        "username": "hwilkins",
        "oauth2": "hwilkins@twitter.com",
        "password": "$2y$10$BW\/FWA4BaPFTp9STtIyrXOFw7HoUX7PZwMJQHd6.slt9gO7kM0iuO"
    },
    "otherContact": {
        "emails": [
            "hwilkins209@econnect.com",
            "hwilkins209@tata.com"
        ],
        "phoneNumbers": [
            "209-503-3176",
            "209-243-8258"
        ],
        "socMedias": [
            {
                "twitter": "hwilkins@twitter.com"
            },
            {
                "facebook": "hwilkins@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-10-17"
    }
});
db.users.insertOne(
{
    "userKey": "KATHNOVA0615",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Accomodation Associates LLC",
    "name": {
        "title": null,
        "first": "Katharina",
        "middle": null,
        "last": "Novak",
        "suffix": null
    },
    "address": {
        "streetAddress": "7479 Big Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "68",
        "city": "North Holmwood",
        "locality1": "England",
        "locality2": "Surrey",
        "country": "GB",
        "postalCode": "RH5",
        "geoSpatial": [
            "-0.3432",
            "51.1912"
        ]
    },
    "contact": {
        "email": "knovak210@sktelecom.com",
        "phone": "210-707-0615",
        "socMedia": []
    },
    "login": {
        "username": "knovak",
        "oauth2": null,
        "password": "$2y$10$tYYdZ9.1cLY0qu4TmEBDcuXETmp2k92ciMcOYZnzr2L2x9rBAfW7G"
    },
    "otherContact": {
        "emails": [
            "knovak210@maxcomm.com",
            "knovak210@telus.com"
        ],
        "phoneNumbers": [
            "210-432-7535",
            "210-653-8560"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-10-11"
    }
});
db.users.insertOne(
{
    "userKey": "RUDOSTOK4893",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Rudolph",
        "middle": "P",
        "last": "Stokes",
        "suffix": null
    },
    "address": {
        "streetAddress": "9425 Big Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Khlong Yai",
        "locality1": "Trat",
        "locality2": "Trat",
        "country": "TH",
        "postalCode": "23110",
        "geoSpatial": [
            "102.9",
            "11.7667"
        ]
    },
    "contact": {
        "email": "rstokes211@lguplus.com",
        "phone": "211-357-4893",
        "socMedia": {
            "line": "rstokes@line.com"
        }
    },
    "login": {
        "username": "rstokes",
        "oauth2": "rstokes@line.com",
        "password": "$2y$10$muTqxpNT8GgzPCEQrwU68OX2kix\/O4R35c71WD0J0yO3BBmPBLt2G"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-10-02"
    }
});
db.users.insertOne(
{
    "userKey": "KACICORT2702",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Kacie",
        "middle": "C",
        "last": "Cortez",
        "suffix": null
    },
    "address": {
        "streetAddress": "2864 Long Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Scenery Hill",
        "locality1": "PA",
        "locality2": "Washington",
        "country": "US",
        "postalCode": "15360",
        "geoSpatial": [
            "-80.0703",
            "40.0859"
        ]
    },
    "contact": {
        "email": "kcortez212@openworld.com",
        "phone": "212-585-2702",
        "socMedia": {
            "facebook": "kcortez@facebook.com"
        }
    },
    "login": {
        "username": "kcortez",
        "oauth2": "kcortez@facebook.com",
        "password": "$2y$10$Z.B1g2IqphGyXyc9Tf\/B7O6mm.IKxo8Q8qU0\/9MDb9W\/mEJxFBX\/W"
    },
    "otherContact": {
        "emails": [
            "kcortez212@bifty.com"
        ],
        "phoneNumbers": [
            "212-600-1320"
        ],
        "socMedias": [
            {
                "skype": "kcortez@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-10-23"
    }
});
db.users.insertOne(
{
    "userKey": "DAMAPITT5021",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Damaris",
        "middle": null,
        "last": "Pitts",
        "suffix": null
    },
    "address": {
        "streetAddress": "9094 Long Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Port Hercule",
        "locality1": "Fontvieille",
        "locality2": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "geoSpatial": [
            "7.425",
            "43.7361"
        ]
    },
    "contact": {
        "email": "dpitts213@cubenet.com",
        "phone": "213-529-5021",
        "socMedia": []
    },
    "login": {
        "username": "dpitts",
        "oauth2": null,
        "password": "$2y$10$2ND98ueSDOgm\/mEinLWjAetQDl093.6qmH4ngz.8hw2pvx2D9XbW6"
    },
    "otherContact": {
        "emails": [
            "dpitts213@oi.com",
            "dpitts213@bce.com"
        ],
        "phoneNumbers": [
            "213-153-0119",
            "213-926-8030"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-01-30"
    }
});
db.users.insertOne(
{
    "userKey": "NOBLWEBS4059",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Noble",
        "middle": "R",
        "last": "Webster",
        "suffix": null
    },
    "address": {
        "streetAddress": "5760 Winding Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sheppardstown",
        "locality1": "Scotland",
        "locality2": "Highland",
        "country": "GB",
        "postalCode": "KW3",
        "geoSpatial": [
            "-3.2617",
            "58.318"
        ]
    },
    "contact": {
        "email": "nwebster214@telecom.com",
        "phone": "214-209-4059",
        "socMedia": {
            "line": "nwebster@line.com"
        }
    },
    "login": {
        "username": "nwebster",
        "oauth2": "nwebster@line.com",
        "password": "$2y$10$CK1XKhqkJXNxVW0kZyFX1u657gZ\/LquplWvu6t7ZxE07OTXaRSacG"
    },
    "otherContact": {
        "emails": [
            "nwebster214@jio.com"
        ],
        "phoneNumbers": [
            "214-110-0643"
        ],
        "socMedias": [
            {
                "line": "nwebster@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-11-13"
    }
});
db.users.insertOne(
{
    "userKey": "ALBENELS0566",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Albert",
        "middle": null,
        "last": "Nelson",
        "suffix": null
    },
    "address": {
        "streetAddress": "5318 Little Tree Boulevard",
        "buildingName": null,
        "floor": 20,
        "roomAptCondoFlat": "CA",
        "city": "Sainte-Th\u00e9r\u00e8se-de-Blainville Southwest",
        "locality1": "QC",
        "locality2": "Sainte-Th\u00e9r\u00e8se-de-Blainville",
        "country": "CA",
        "postalCode": "J7H",
        "geoSpatial": [
            "-73.8728",
            "45.6209"
        ]
    },
    "contact": {
        "email": "anelson216@belgacom.com",
        "phone": "216-513-0566",
        "socMedia": []
    },
    "login": {
        "username": "anelson",
        "oauth2": null,
        "password": "$2y$10$Wz.0CQuh25O5idM3gMd5MeZwxKLJbSJhoxMlL\/fXHgpU8JzZ\/zujq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-12-13"
    }
});
db.users.insertOne(
{
    "userKey": "SHERDIXO8832",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Sherman",
        "middle": "T",
        "last": "Dixon",
        "suffix": null
    },
    "address": {
        "streetAddress": "9559 Short Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Denis",
        "locality1": "RE",
        "locality2": "R\u00e9union",
        "country": "RE",
        "postalCode": "97716 CEDEX 9",
        "geoSpatial": [
            "55.4504",
            "-20.8823"
        ]
    },
    "contact": {
        "email": "sdixon217@cerist.com",
        "phone": "217-167-8832",
        "socMedia": {
            "line": "sdixon@line.com"
        }
    },
    "login": {
        "username": "sdixon",
        "oauth2": "sdixon@line.com",
        "password": "$2y$10$MefFkgeLlpHu1km6W74hSu4T3e8\/UIWsVWDTsrSLIHl.aj0XT2fSe"
    },
    "otherContact": {
        "emails": [
            "sdixon217@sktelecom.com",
            "sdixon217@singtel.com",
            "sdixon217@mtn.com"
        ],
        "phoneNumbers": [
            "217-743-4677",
            "217-524-7600",
            "217-842-9694"
        ],
        "socMedias": [
            {
                "line": "sdixon@line.com"
            },
            {
                "linkedin": "sdixon@linkedin.com"
            },
            {
                "facebook": "sdixon@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-05-25"
    }
});
db.users.insertOne(
{
    "userKey": "REYNRAMO5078",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Reynaldo",
        "middle": "Z",
        "last": "Ramos",
        "suffix": null
    },
    "address": {
        "streetAddress": "29 Red Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Compton",
        "locality1": "CA",
        "locality2": "Los Angeles",
        "country": "US",
        "postalCode": "90221",
        "geoSpatial": [
            "-118.2168",
            "33.8796"
        ]
    },
    "contact": {
        "email": "rramos218@vodafone.com",
        "phone": "218-582-5078",
        "socMedia": {
            "twitter": "rramos@twitter.com"
        }
    },
    "login": {
        "username": "rramos",
        "oauth2": "rramos@twitter.com",
        "password": "$2y$10$ULAvdAA7D8twmgdbzPq3teu.uTXzvvSYS1eYRMVvJrC.3DzseHTK."
    },
    "otherContact": {
        "emails": [
            "rramos218@softbank.com"
        ],
        "phoneNumbers": [
            "218-569-3722"
        ],
        "socMedias": [
            {
                "google": "rramos@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-07-13"
    }
});
db.users.insertOne(
{
    "userKey": "BENNMORG6599",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Bennie",
        "middle": null,
        "last": "Morgan",
        "suffix": null
    },
    "address": {
        "streetAddress": "4868 Red Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mamoudzou",
        "locality1": "Mamoudzou",
        "locality2": "Mamoudzou",
        "country": "YT",
        "postalCode": "97680",
        "geoSpatial": [
            "45.2288",
            "-12.7823"
        ]
    },
    "contact": {
        "email": "bmorgan219@ais.com",
        "phone": "219-515-6599",
        "socMedia": []
    },
    "login": {
        "username": "bmorgan",
        "oauth2": null,
        "password": "$2y$10$O5mQd.EGKhbiWj7kV2aPgOc1iz3YAxoEPuWAtW19RBpBjhKrnCvTu"
    },
    "otherContact": {
        "emails": [
            "bmorgan219@uunet.com",
            "bmorgan219@worldnet.com"
        ],
        "phoneNumbers": [
            "219-302-0838",
            "219-758-6767"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-01-30"
    }
});
db.users.insertOne(
{
    "userKey": "COLIARNO5944",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Industrious Holdings Inc",
    "name": {
        "title": "Mr",
        "first": "Colin",
        "middle": "E",
        "last": "Arnold",
        "suffix": null
    },
    "address": {
        "streetAddress": "1371 Green Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Broughton Mills",
        "locality1": "England",
        "locality2": "Cumbria",
        "country": "GB",
        "postalCode": "LA20",
        "geoSpatial": [
            "-3.1958",
            "54.3713"
        ]
    },
    "contact": {
        "email": "carnold220@glasnet.com",
        "phone": "220-269-5944",
        "socMedia": {
            "twitter": "carnold@twitter.com"
        }
    },
    "login": {
        "username": "carnold",
        "oauth2": "carnold@twitter.com",
        "password": "$2y$10$XEcHJG7aAExrSANYnF1Xru3pAXEsqun1IzJFdB88j\/uHpGDZrCwGO"
    },
    "otherContact": {
        "emails": [
            "carnold220@eunet.com",
            "carnold220@telenor.com"
        ],
        "phoneNumbers": [
            "220-151-2356",
            "220-719-5652"
        ],
        "socMedias": [
            {
                "google": "carnold@google.com"
            },
            {
                "line": "carnold@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-07-08"
    }
});
db.users.insertOne(
{
    "userKey": "SALVPITT8378",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Salvatore",
        "middle": "G",
        "last": "Pittman",
        "suffix": null
    },
    "address": {
        "streetAddress": "6530 Winding Woods Ride",
        "buildingName": "Building 69",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "G\u0127ajnsielem",
        "locality1": "G\u0127ajnsielem",
        "locality2": "G\u0127ajnsielem",
        "country": "MT",
        "postalCode": "GSM",
        "geoSpatial": [
            "14.2861",
            "36.0267"
        ]
    },
    "contact": {
        "email": "spittman221@orstom.com",
        "phone": "221-157-8378",
        "socMedia": {
            "twitter": "spittman@twitter.com"
        }
    },
    "login": {
        "username": "spittman",
        "oauth2": "spittman@twitter.com",
        "password": "$2y$10$3hOMVew4cj3ovyCGLMSGAuWcKgJ8WsRgzR\/C8zVFsSbrKJzqgeHDS"
    },
    "otherContact": {
        "emails": [
            "spittman221@algonet.com",
            "spittman221@ntt.com"
        ],
        "phoneNumbers": [
            "221-554-7655",
            "221-656-2219"
        ],
        "socMedias": [
            {
                "skype": "spittman@skype.com"
            },
            {
                "skype": "spittman@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-09-18"
    }
});
db.users.insertOne(
{
    "userKey": "DAHLYU5352",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Dahlia",
        "middle": null,
        "last": "Yu",
        "suffix": null
    },
    "address": {
        "streetAddress": "4607 Green Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "9A",
        "city": "Rokewood Junction",
        "locality1": "VIC",
        "locality2": "VIC COUNTRY",
        "country": "AU",
        "postalCode": "3351",
        "geoSpatial": [
            "143.6833",
            "-37.85"
        ]
    },
    "contact": {
        "email": "dyu222@lguplus.com",
        "phone": "222-258-5352",
        "socMedia": []
    },
    "login": {
        "username": "dyu",
        "oauth2": null,
        "password": "$2y$10$78xqunxr\/4KzK8IM8NSzRubpQZPQVOARhrPBJxAeGfKYVOamweBza"
    },
    "otherContact": {
        "emails": [
            "dyu222@daxnet.com"
        ],
        "phoneNumbers": [
            "222-327-1019"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-02-04"
    }
});
db.users.insertOne(
{
    "userKey": "RENAGIBB9994",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Renate",
        "middle": "D",
        "last": "Gibbs",
        "suffix": null
    },
    "address": {
        "streetAddress": "6010 Big Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Thomas",
        "locality1": "St. Thomas",
        "locality2": "St. Thomas",
        "country": "VI",
        "postalCode": "00802",
        "geoSpatial": [
            "-64.916",
            "18.3387"
        ]
    },
    "contact": {
        "email": "rgibbs223@telesystems.com",
        "phone": "223-163-9994",
        "socMedia": {
            "linkedin": "rgibbs@linkedin.com"
        }
    },
    "login": {
        "username": "rgibbs",
        "oauth2": "rgibbs@linkedin.com",
        "password": "$2y$10$Pv12AyP6rhWjEtRXtbXDo.jJLfLPYijSswEPEjx78IkhTY4.0owQm"
    },
    "otherContact": {
        "emails": [
            "rgibbs223@ccs.com"
        ],
        "phoneNumbers": [
            "223-697-7074"
        ],
        "socMedias": [
            {
                "google": "rgibbs@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-04-04"
    }
});
db.users.insertOne(
{
    "userKey": "BENIHOFF6302",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Benito",
        "middle": "E",
        "last": "Hoffman",
        "suffix": null
    },
    "address": {
        "streetAddress": "4597 Blue Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "L'Erable (Nantes)",
        "locality1": "QC",
        "locality2": "Quebec",
        "country": "CA",
        "postalCode": "G0Y",
        "geoSpatial": [
            "-71.0191",
            "45.6242"
        ]
    },
    "contact": {
        "email": "bhoffman224@turkcell.com",
        "phone": "224-591-6302",
        "socMedia": {
            "google": "bhoffman@google.com"
        }
    },
    "login": {
        "username": "bhoffman",
        "oauth2": "bhoffman@google.com",
        "password": "$2y$10$cRnDFHFLeXZt3G\/KpwcMtOK.TcLrGrTExlB4zKMEw1OarzzbnGa8e"
    },
    "otherContact": {
        "emails": [
            "bhoffman224@tt.com",
            "bhoffman224@softbank.com"
        ],
        "phoneNumbers": [
            "224-234-5864",
            "224-744-1040"
        ],
        "socMedias": [
            {
                "google": "bhoffman@google.com"
            },
            {
                "line": "bhoffman@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-04-15"
    }
});
db.users.insertOne(
{
    "userKey": "GAYLMURI7282",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Leisure Associates LLC",
    "name": {
        "title": null,
        "first": "Gayle",
        "middle": null,
        "last": "Murillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "1581 Short Gully Avenue",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "REPARO",
        "locality1": "G",
        "locality2": "Santiago Del Estero",
        "country": "AR",
        "postalCode": "4301",
        "geoSpatial": [
            "-63.7667",
            "-26.9242"
        ]
    },
    "contact": {
        "email": "gmurillo225@kddi.com",
        "phone": "225-494-7282",
        "socMedia": []
    },
    "login": {
        "username": "gmurillo",
        "oauth2": null,
        "password": "$2y$10$zmyc67WAsjVH1i0XUXp22uHJglpAx46SZnb7JOGC3jeJiBWpa4SrS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-06-14"
    }
});
db.users.insertOne(
{
    "userKey": "WERNROBE9703",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Werner",
        "middle": "H",
        "last": "Roberson",
        "suffix": null
    },
    "address": {
        "streetAddress": "318 Big Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St George",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2622",
        "geoSpatial": [
            "149.8505",
            "-35.4068"
        ]
    },
    "contact": {
        "email": "wroberso226@cerist.com",
        "phone": "226-383-9703",
        "socMedia": {
            "google": "wroberso@google.com"
        }
    },
    "login": {
        "username": "wroberso",
        "oauth2": "wroberso@google.com",
        "password": "$2y$10$wpIX5MUzJvegpJHoXKIH6.YpFvcLJMWXy3typg0efyP3WjV75zXWK"
    },
    "otherContact": {
        "emails": [
            "wroberso226@chunghwa.com",
            "wroberso226@pldt.com",
            "wroberso226@bifty.com"
        ],
        "phoneNumbers": [
            "226-965-4715",
            "226-794-5470",
            "226-791-1696"
        ],
        "socMedias": [
            {
                "skype": "wroberso@skype.com"
            },
            {
                "google": "wroberso@google.com"
            },
            {
                "line": "wroberso@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-08-18"
    }
});
db.users.insertOne(
{
    "userKey": "TANNBARA2682",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Tanner",
        "middle": "I",
        "last": "Barajas",
        "suffix": null
    },
    "address": {
        "streetAddress": "253 Long Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Teglio",
        "locality1": null,
        "locality2": null,
        "country": "SM",
        "postalCode": "47894",
        "geoSpatial": [
            "12.4167",
            "43.9167"
        ]
    },
    "contact": {
        "email": "tbarajas227@turkcell.com",
        "phone": "227-394-2682",
        "socMedia": {
            "facebook": "tbarajas@facebook.com"
        }
    },
    "login": {
        "username": "tbarajas",
        "oauth2": "tbarajas@facebook.com",
        "password": "$2y$10$dNZL9fdEZoEccE2BtZhPuuFInxhwiOHMaXbobM84yzsfL8iC69Ql2"
    },
    "otherContact": {
        "emails": [
            "tbarajas227@ooredoo.com",
            "tbarajas227@lguplus.com"
        ],
        "phoneNumbers": [
            "227-972-0988",
            "227-641-3977"
        ],
        "socMedias": [
            {
                "twitter": "tbarajas@twitter.com"
            },
            {
                "google": "tbarajas@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-04-05"
    }
});
db.users.insertOne(
{
    "userKey": "ELTOHINT3585",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Elton",
        "middle": null,
        "last": "Hinton",
        "suffix": null
    },
    "address": {
        "streetAddress": "2946 Big Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "52",
        "city": "Iluka",
        "locality1": "WA",
        "locality2": "CURTIN",
        "country": "AU",
        "postalCode": "6028",
        "geoSpatial": [
            "115.7306",
            "-31.7355"
        ]
    },
    "contact": {
        "email": "ehinton228@telesystems.com",
        "phone": "228-456-3585",
        "socMedia": []
    },
    "login": {
        "username": "ehinton",
        "oauth2": null,
        "password": "$2y$10$intDq.6MN3bRTEcuUzokruROiRbutSNBvz.uUtSIuogoll\/4CKu.u"
    },
    "otherContact": {
        "emails": [
            "ehinton228@eunet.com"
        ],
        "phoneNumbers": [
            "228-158-6107"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-08-16"
    }
});
db.users.insertOne(
{
    "userKey": "TARAVELA1320",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Tarah",
        "middle": "J",
        "last": "Velasquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6712 Winding Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "East Moonta",
        "locality1": "SA",
        "locality2": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5558",
        "geoSpatial": [
            "137.6609",
            "-34.1127"
        ]
    },
    "contact": {
        "email": "tvelasqu229@icom.com",
        "phone": "229-267-1320",
        "socMedia": {
            "line": "tvelasqu@line.com"
        }
    },
    "login": {
        "username": "tvelasqu",
        "oauth2": "tvelasqu@line.com",
        "password": "$2y$10$XXCcJzVZFUzL.MiNXkx21emQzAvenyaH3z0qWzm27fPVAKdjEYzf6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-06-07"
    }
});
db.users.insertOne(
{
    "userKey": "FLOREVAN7755",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Comfort Business",
    "name": {
        "title": "Ms",
        "first": "Florencia",
        "middle": "T",
        "last": "Evans",
        "suffix": null
    },
    "address": {
        "streetAddress": "4005 Little Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nutangarh",
        "locality1": "Raipur",
        "locality2": "Bankura",
        "country": "IN",
        "postalCode": "722134",
        "geoSpatial": [
            "87.2896",
            "22.3101"
        ]
    },
    "contact": {
        "email": "fevans230@belgacom.com",
        "phone": "230-397-7755",
        "socMedia": {
            "line": "fevans@line.com"
        }
    },
    "login": {
        "username": "fevans",
        "oauth2": "fevans@line.com",
        "password": "$2y$10$\/rlAIyJjBDWK1nythZ.gXOuUzPIgbn8D0y.vVfgvrHG9b7teWBXIu"
    },
    "otherContact": {
        "emails": [
            "fevans230@telecom.com",
            "fevans230@cerist.com"
        ],
        "phoneNumbers": [
            "230-180-1443",
            "230-695-9891"
        ],
        "socMedias": [
            {
                "google": "fevans@google.com"
            },
            {
                "skype": "fevans@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-10-11"
    }
});
db.users.insertOne(
{
    "userKey": "EDLOVE6594",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Ed",
        "middle": null,
        "last": "Love",
        "suffix": null
    },
    "address": {
        "streetAddress": "4315 Blue Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Imatra",
        "locality1": "Imatra",
        "locality2": "Imatra",
        "country": "FI",
        "postalCode": "55100",
        "geoSpatial": [
            "28.7721",
            "61.1671"
        ]
    },
    "contact": {
        "email": "elove231@tm.com",
        "phone": "231-736-6594",
        "socMedia": []
    },
    "login": {
        "username": "elove",
        "oauth2": null,
        "password": "$2y$10$0j\/.bKmBVQzMDCRcvaYr3e8xsOUVrTHKIG\/yBvsG\/rzHI2MaIZzBG"
    },
    "otherContact": {
        "emails": [
            "elove231@tm.com",
            "elove231@millicom.com"
        ],
        "phoneNumbers": [
            "231-772-4015",
            "231-536-1096"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-05-08"
    }
});
db.users.insertOne(
{
    "userKey": "MITCMCCO2022",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Mitchel",
        "middle": "Z",
        "last": "Mccormick",
        "suffix": null
    },
    "address": {
        "streetAddress": "7512 Winding Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Novi",
        "locality1": "MI",
        "locality2": "Oakland",
        "country": "US",
        "postalCode": "48375",
        "geoSpatial": [
            "-83.4577",
            "42.4604"
        ]
    },
    "contact": {
        "email": "mmccormi232@lguplus.com",
        "phone": "232-914-2022",
        "socMedia": {
            "facebook": "mmccormi@facebook.com"
        }
    },
    "login": {
        "username": "mmccormi",
        "oauth2": "mmccormi@facebook.com",
        "password": "$2y$10$rsy0Tdx86Parp2jsT2aamO7geMCCqP.S5r5ZqkKAv9mBrXBgxDZwG"
    },
    "otherContact": {
        "emails": [
            "mmccormi232@att.com",
            "mmccormi232@orange.com"
        ],
        "phoneNumbers": [
            "232-493-7273",
            "232-602-8316"
        ],
        "socMedias": [
            {
                "line": "mmccormi@line.com"
            },
            {
                "twitter": "mmccormi@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-05-03"
    }
});
db.users.insertOne(
{
    "userKey": "LULUBISH3713",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Lulu",
        "middle": "H",
        "last": "Bishop",
        "suffix": null
    },
    "address": {
        "streetAddress": "1684 Red Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Le Tampon",
        "locality1": "RE",
        "locality2": "R\u00e9union",
        "country": "RE",
        "postalCode": "97418",
        "geoSpatial": [
            "55.518",
            "-21.2831"
        ]
    },
    "contact": {
        "email": "lbishop233@cerist.com",
        "phone": "233-462-3713",
        "socMedia": {
            "line": "lbishop@line.com"
        }
    },
    "login": {
        "username": "lbishop",
        "oauth2": "lbishop@line.com",
        "password": "$2y$10$.qhxNy2Vcqp6.7OsfzJloOsI1l72gaEv\/fKKMY.RUdvqs48m1oZv."
    },
    "otherContact": {
        "emails": [
            "lbishop233@algonet.com",
            "lbishop233@airtel.com",
            "lbishop233@vodafone.com"
        ],
        "phoneNumbers": [
            "233-624-8150",
            "233-635-2512",
            "233-118-1244"
        ],
        "socMedias": [
            {
                "linkedin": "lbishop@linkedin.com"
            },
            {
                "line": "lbishop@line.com"
            },
            {
                "line": "lbishop@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-01-05"
    }
});
db.users.insertOne(
{
    "userKey": "HAICHRI4685",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Hai",
        "middle": null,
        "last": "Christensen",
        "suffix": null
    },
    "address": {
        "streetAddress": "385 Big Tree Road",
        "buildingName": "Building A8",
        "floor": 5,
        "roomAptCondoFlat": "36",
        "city": "Kendleton",
        "locality1": "TX",
        "locality2": "Fort Bend",
        "country": "US",
        "postalCode": "77451",
        "geoSpatial": [
            "-96.0036",
            "29.447"
        ]
    },
    "contact": {
        "email": "hchriste234@oi.com",
        "phone": "234-099-4685",
        "socMedia": []
    },
    "login": {
        "username": "hchriste",
        "oauth2": null,
        "password": "$2y$10$pujTDP3EF5M1l7E3kIvlIuOSU.YO8wbuP7\/2u9sRtwrAtujsDXc.S"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-08-11"
    }
});
db.users.insertOne(
{
    "userKey": "ELISBOWM8967",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Industrious Partners Company",
    "name": {
        "title": "Ms",
        "first": "Elissa",
        "middle": "T",
        "last": "Bowman",
        "suffix": null
    },
    "address": {
        "streetAddress": "4807 Long Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Glenmaye",
        "locality1": "Isle of Man",
        "locality2": "Isle of Man",
        "country": "IM",
        "postalCode": "IM5",
        "geoSpatial": [
            "-4.7276",
            "54.1694"
        ]
    },
    "contact": {
        "email": "ebowman235@bce.com",
        "phone": "235-717-8967",
        "socMedia": {
            "line": "ebowman@line.com"
        }
    },
    "login": {
        "username": "ebowman",
        "oauth2": "ebowman@line.com",
        "password": "$2y$10$NB6WTDV3exZDkRTnuMzsW.igiRynuXZsp06HLzjzKehfHCRWiVQzC"
    },
    "otherContact": {
        "emails": [
            "ebowman235@glasnet.com",
            "ebowman235@kddi.com"
        ],
        "phoneNumbers": [
            "235-521-0809",
            "235-291-2278"
        ],
        "socMedias": [
            {
                "google": "ebowman@google.com"
            },
            {
                "skype": "ebowman@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-05-22"
    }
});
db.users.insertOne(
{
    "userKey": "ARIEKELL4153",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Arie",
        "middle": "G",
        "last": "Kelley",
        "suffix": null
    },
    "address": {
        "streetAddress": "9159 Little Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint John West",
        "locality1": "NB",
        "locality2": "Saint John ",
        "country": "CA",
        "postalCode": "E2M",
        "geoSpatial": [
            "-66.1749",
            "45.2347"
        ]
    },
    "contact": {
        "email": "akelley236@telefonica.com",
        "phone": "236-026-4153",
        "socMedia": {
            "facebook": "akelley@facebook.com"
        }
    },
    "login": {
        "username": "akelley",
        "oauth2": "akelley@facebook.com",
        "password": "$2y$10$531LXy00pzqoIK9Eakp1KOIbYFpUS9R8sshbiqIOLKjiA1AUEXwi2"
    },
    "otherContact": {
        "emails": [
            "akelley236@tt.com",
            "akelley236@verizon.com",
            "akelley236@lookdata.com"
        ],
        "phoneNumbers": [
            "236-369-1411",
            "236-353-3209",
            "236-857-4838"
        ],
        "socMedias": [
            {
                "line": "akelley@line.com"
            },
            {
                "line": "akelley@line.com"
            },
            {
                "line": "akelley@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-07-30"
    }
});
db.users.insertOne(
{
    "userKey": "GRANPATE7956",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Grant",
        "middle": null,
        "last": "Patel",
        "suffix": null
    },
    "address": {
        "streetAddress": "2847 Long Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "M'Tsangamouji",
        "locality1": "M'Tsangamouji",
        "locality2": "M'Tsangamouji",
        "country": "YT",
        "postalCode": "97650",
        "geoSpatial": [
            "45.0836",
            "-12.7594"
        ]
    },
    "contact": {
        "email": "gpatel237@glasnet.com",
        "phone": "237-772-7956",
        "socMedia": []
    },
    "login": {
        "username": "gpatel",
        "oauth2": null,
        "password": "$2y$10$Q33UJGSeTtBrskMaCJtHiu0ksmYD0KStD..PojqSJMmrfux.rIjCO"
    },
    "otherContact": {
        "emails": [
            "gpatel237@ui.com",
            "gpatel237@netcom.com",
            "gpatel237@tata.com"
        ],
        "phoneNumbers": [
            "237-298-1317",
            "237-947-5176",
            "237-675-0221"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-09-30"
    }
});
db.users.insertOne(
{
    "userKey": "JUANSHEP1078",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Juan",
        "middle": "R",
        "last": "Sheppard",
        "suffix": null
    },
    "address": {
        "streetAddress": "6381 Big Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hobartville",
        "locality1": "NSW",
        "locality2": "PENRITH",
        "country": "AU",
        "postalCode": "2753",
        "geoSpatial": [
            "150.743",
            "-33.6044"
        ]
    },
    "contact": {
        "email": "jsheppar238@telenor.com",
        "phone": "238-505-1078",
        "socMedia": {
            "skype": "jsheppar@skype.com"
        }
    },
    "login": {
        "username": "jsheppar",
        "oauth2": "jsheppar@skype.com",
        "password": "$2y$10$l7FjVYuGAMTRyu1qKriyyuiBKwv1vJ\/zr6Xtv.ndQGNhHScd6Fdsi"
    },
    "otherContact": {
        "emails": [
            "jsheppar238@telecomitalia.com",
            "jsheppar238@ntt.com",
            "jsheppar238@openworld.com"
        ],
        "phoneNumbers": [
            "238-128-0286",
            "238-404-3948",
            "238-281-7838"
        ],
        "socMedias": [
            {
                "facebook": "jsheppar@facebook.com"
            },
            {
                "facebook": "jsheppar@facebook.com"
            },
            {
                "facebook": "jsheppar@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-12-15"
    }
});
db.users.insertOne(
{
    "userKey": "SCOTROSS7310",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Scotty",
        "middle": "D",
        "last": "Ross",
        "suffix": null
    },
    "address": {
        "streetAddress": "5412 Green Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lulla",
        "locality1": "SO",
        "locality2": "Somogy",
        "country": "HU",
        "postalCode": "8660",
        "geoSpatial": [
            "18.0333",
            "46.7833"
        ]
    },
    "contact": {
        "email": "sross239@ktc.com",
        "phone": "239-872-7310",
        "socMedia": {
            "skype": "sross@skype.com"
        }
    },
    "login": {
        "username": "sross",
        "oauth2": "sross@skype.com",
        "password": "$2y$10$XR14k1t4hasuAsPh6Qh7TO\/JMq6dsvLtCMboAmot2uSfYugH52CJa"
    },
    "otherContact": {
        "emails": [
            "sross239@relcom.com",
            "sross239@softbank.com",
            "sross239@orange.com"
        ],
        "phoneNumbers": [
            "239-326-3024",
            "239-802-4583",
            "239-326-3876"
        ],
        "socMedias": [
            {
                "facebook": "sross@facebook.com"
            },
            {
                "skype": "sross@skype.com"
            },
            {
                "google": "sross@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-07-14"
    }
});
db.users.insertOne(
{
    "userKey": "MARCCALD6378",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Powerhouse Holdings LLC",
    "name": {
        "title": null,
        "first": "Marc",
        "middle": null,
        "last": "Caldwell",
        "suffix": null
    },
    "address": {
        "streetAddress": "4165 Winding Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "4B",
        "city": "McAdam",
        "locality1": "NB",
        "locality2": "New Brunswick",
        "country": "CA",
        "postalCode": "E6J",
        "geoSpatial": [
            "-67.307",
            "45.5923"
        ]
    },
    "contact": {
        "email": "mcaldwel240@greennet.com",
        "phone": "240-998-6378",
        "socMedia": []
    },
    "login": {
        "username": "mcaldwel",
        "oauth2": null,
        "password": "$2y$10$rCxAqugBgyZPBSUfPToVj.lTr9pQHa2PeW0uOyj\/4OGyUSP2D.bMu"
    },
    "otherContact": {
        "emails": [
            "mcaldwel240@sktelecom.com",
            "mcaldwel240@att.com"
        ],
        "phoneNumbers": [
            "240-364-2563",
            "240-639-5674"
        ]
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1997-03-27"
    }
});
db.users.insertOne(
{
    "userKey": "RUFULOZA8328",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Rufus",
        "middle": "T",
        "last": "Lozano",
        "suffix": null
    },
    "address": {
        "streetAddress": "71 Green Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bj\u00f8rn\u00f8ya",
        "locality1": "Bj\u00f8rn\u00f8ya",
        "locality2": "Bj\u00f8rn\u00f8ya",
        "country": "SJ",
        "postalCode": "9176",
        "geoSpatial": [
            "19.0063",
            "74.4435"
        ]
    },
    "contact": {
        "email": "rlozano241@glasnet.com",
        "phone": "241-196-8328",
        "socMedia": {
            "facebook": "rlozano@facebook.com"
        }
    },
    "login": {
        "username": "rlozano",
        "oauth2": "rlozano@facebook.com",
        "password": "$2y$10$chNo7HPVzvsZkGMwIshiIOofbAju2nN0kzhQ1Jztd1MtQXeFXClWC"
    },
    "otherContact": {
        "emails": [
            "rlozano241@jio.com",
            "rlozano241@safaricom.com",
            "rlozano241@telus.com"
        ],
        "phoneNumbers": [
            "241-739-2919",
            "241-678-2563",
            "241-003-3117"
        ],
        "socMedias": [
            {
                "google": "rlozano@google.com"
            },
            {
                "google": "rlozano@google.com"
            },
            {
                "facebook": "rlozano@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-07-20"
    }
});
db.users.insertOne(
{
    "userKey": "REGIHO5919",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Reginald",
        "middle": "C",
        "last": "Ho",
        "suffix": null
    },
    "address": {
        "streetAddress": "4592 Winding Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Stowford",
        "locality1": "England",
        "locality2": "Devon",
        "country": "GB",
        "postalCode": "EX20",
        "geoSpatial": [
            "-4.2167",
            "50.65"
        ]
    },
    "contact": {
        "email": "rho242@nii.com",
        "phone": "242-598-5919",
        "socMedia": {
            "twitter": "rho@twitter.com"
        }
    },
    "login": {
        "username": "rho",
        "oauth2": "rho@twitter.com",
        "password": "$2y$10$69LQlT6Ig5t62KOyulddzetXQ4o3p7Hx8Sri0Tysp4R1Zeryhj5X6"
    },
    "otherContact": {
        "emails": [
            "rho242@swisscom.com",
            "rho242@kpn.com",
            "rho242@telstra.com"
        ],
        "phoneNumbers": [
            "242-048-5193",
            "242-287-8437",
            "242-653-3156"
        ],
        "socMedias": [
            {
                "skype": "rho@skype.com"
            },
            {
                "facebook": "rho@facebook.com"
            },
            {
                "skype": "rho@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-04-25"
    }
});
db.users.insertOne(
{
    "userKey": "WILFWELL8503",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Wilfredo",
        "middle": null,
        "last": "Wells",
        "suffix": null
    },
    "address": {
        "streetAddress": "9472 Big Woods Drive",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": null,
        "city": "Fisk\u00f6",
        "locality1": "Br\u00e4nd\u00f6",
        "locality2": "Br\u00e4nd\u00f6",
        "country": "AX",
        "postalCode": "22930",
        "geoSpatial": [
            "21.0695",
            "60.4525"
        ]
    },
    "contact": {
        "email": "wwells243@bifty.com",
        "phone": "243-023-8503",
        "socMedia": []
    },
    "login": {
        "username": "wwells",
        "oauth2": null,
        "password": "$2y$10$0h3cSqLfD2JQCcgU6UQ3KuVHF37ecA2WgnhHoz\/2DvFJa4orpzlHO"
    },
    "otherContact": {
        "emails": [
            "wwells243@tata.com",
            "wwells243@belgacom.com"
        ],
        "phoneNumbers": [
            "243-202-8476",
            "243-629-7067"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-07-05"
    }
});
db.users.insertOne(
{
    "userKey": "AZALKEIT9951",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Azalee",
        "middle": "O",
        "last": "Keith",
        "suffix": null
    },
    "address": {
        "streetAddress": "4584 Short Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Upper Edmonton",
        "locality1": "England",
        "locality2": "Greater London",
        "country": "GB",
        "postalCode": "N18",
        "geoSpatial": [
            "-0.0586",
            "51.6091"
        ]
    },
    "contact": {
        "email": "akeith244@singtel.com",
        "phone": "244-414-9951",
        "socMedia": {
            "linkedin": "akeith@linkedin.com"
        }
    },
    "login": {
        "username": "akeith",
        "oauth2": "akeith@linkedin.com",
        "password": "$2y$10$IIIMWKxYCMyo.0MkKq0u.OlnXE1jpS7Dfr\/8IctFNV389ylU.nhHK"
    },
    "otherContact": {
        "emails": [
            "akeith244@seednet.com",
            "akeith244@seednet.com",
            "akeith244@singtel.com"
        ],
        "phoneNumbers": [
            "244-524-5394",
            "244-618-1212",
            "244-758-3498"
        ],
        "socMedias": [
            {
                "google": "akeith@google.com"
            },
            {
                "skype": "akeith@skype.com"
            },
            {
                "line": "akeith@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-02-16"
    }
});
db.users.insertOne(
{
    "userKey": "MARIVAUG1488",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Illuminati Industries Inc",
    "name": {
        "title": "Mr",
        "first": "Marion",
        "middle": "F",
        "last": "Vaughan",
        "suffix": null
    },
    "address": {
        "streetAddress": "9522 Winding Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Uv\u00e9a",
        "locality1": "Circonscription d'Uv\u00e9a",
        "locality2": "Circonscription d'Uv\u00e9a",
        "country": "WF",
        "postalCode": "98600",
        "geoSpatial": [
            "-176.2205",
            "-13.2988"
        ]
    },
    "contact": {
        "email": "mvaughan245@ntt.com",
        "phone": "245-678-1488",
        "socMedia": {
            "skype": "mvaughan@skype.com"
        }
    },
    "login": {
        "username": "mvaughan",
        "oauth2": "mvaughan@skype.com",
        "password": "$2y$10$O09S3sFw1lpS4ozctk6hBOP.zObulCqJklfGlytRKc9nP8yfMdN0i"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-12-09"
    }
});
db.users.insertOne(
{
    "userKey": "KENYWARD6245",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Kenyetta",
        "middle": null,
        "last": "Ward",
        "suffix": null
    },
    "address": {
        "streetAddress": "7590 Short Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "3E",
        "city": "Padoli",
        "locality1": "NA",
        "locality2": "Osmanabad",
        "country": "IN",
        "postalCode": "413510",
        "geoSpatial": [
            "76.8854",
            "18.6267"
        ]
    },
    "contact": {
        "email": "kward246@telefonica.com",
        "phone": "246-411-6245",
        "socMedia": []
    },
    "login": {
        "username": "kward",
        "oauth2": null,
        "password": "$2y$10$YUHWUju.93F7LHICM7nfCu2Pb9qP9KaylemdrR1o28lUhU2wn6NUO"
    },
    "otherContact": {
        "emails": [
            "kward246@relcom.com",
            "kward246@maxcomm.com"
        ],
        "phoneNumbers": [
            "246-517-1562",
            "246-551-0802"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-09-07"
    }
});
db.users.insertOne(
{
    "userKey": "MYROBROC8070",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Myron",
        "middle": "C",
        "last": "Brock",
        "suffix": null
    },
    "address": {
        "streetAddress": "2669 Long Gully Boulevard",
        "buildingName": "Building 41",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yardro",
        "locality1": "England",
        "locality2": "Powys",
        "country": "GB",
        "postalCode": "LD8",
        "geoSpatial": [
            "-3.044",
            "52.2664"
        ]
    },
    "contact": {
        "email": "mbrock247@ptcl.com",
        "phone": "247-703-8070",
        "socMedia": {
            "google": "mbrock@google.com"
        }
    },
    "login": {
        "username": "mbrock",
        "oauth2": "mbrock@google.com",
        "password": "$2y$10$V4mUfEbsHDKgml1l2LE6b.1clmHB6Q6u8YH7oa3936\/QucTJklX7y"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-02-28"
    }
});
db.users.insertOne(
{
    "userKey": "MAXISTAN7799",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Maxima",
        "middle": "Z",
        "last": "Stanton",
        "suffix": null
    },
    "address": {
        "streetAddress": "1691 Red Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cow Flat",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2795",
        "geoSpatial": [
            "149.6841",
            "-33.4549"
        ]
    },
    "contact": {
        "email": "mstanton248@singtel.com",
        "phone": "248-423-7799",
        "socMedia": {
            "twitter": "mstanton@twitter.com"
        }
    },
    "login": {
        "username": "mstanton",
        "oauth2": "mstanton@twitter.com",
        "password": "$2y$10$lmAoJ9bZomqss2YIub3c6uC4veJZF10rzzx\/MELAs9S50XSQO6M.G"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-12-08"
    }
});
db.users.insertOne(
{
    "userKey": "PHYLOLSE4479",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Dr",
        "first": "Phyliss",
        "middle": null,
        "last": "Olsen",
        "suffix": "III"
    },
    "address": {
        "streetAddress": "9091 Blue Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Florica",
        "locality1": "Causeni",
        "locality2": "Causeni",
        "country": "MD",
        "postalCode": "MD-7726",
        "geoSpatial": [
            "29.2222",
            "46.69"
        ]
    },
    "contact": {
        "email": "polsen249@uunet.com",
        "phone": "249-963-4479",
        "socMedia": []
    },
    "login": {
        "username": "polsen",
        "oauth2": null,
        "password": "$2y$10$gFvxYY\/jvWw3bc1Jc1l0luMUH30q7hnmWIY1gBrzJCg3qi2tC\/vPO"
    },
    "otherContact": {
        "emails": [
            "polsen249@ktc.com",
            "polsen249@access.com"
        ],
        "phoneNumbers": [
            "249-834-0774",
            "249-486-1167"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-02-13"
    }
});
db.users.insertOne(
{
    "userKey": "HOYTWILE8673",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Specialty Partners LLC",
    "name": {
        "title": "Mr",
        "first": "Hoyt",
        "middle": "D",
        "last": "Wiley",
        "suffix": null
    },
    "address": {
        "streetAddress": "7016 Green Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Belaguli",
        "locality1": "C.n.halli",
        "locality2": "Tumkur",
        "country": "IN",
        "postalCode": "572228",
        "geoSpatial": [
            "76.095",
            "12.6273"
        ]
    },
    "contact": {
        "email": "hwiley250@chunghwa.com",
        "phone": "250-429-8673",
        "socMedia": {
            "facebook": "hwiley@facebook.com"
        }
    },
    "login": {
        "username": "hwiley",
        "oauth2": "hwiley@facebook.com",
        "password": "$2y$10$W1DB43qTh9iazLiMF2yf\/u82B4iNJVVQCy4SRXjmon6eQ.eCri0B."
    },
    "otherContact": {
        "emails": [
            "hwiley250@orange.com",
            "hwiley250@att.com"
        ],
        "phoneNumbers": [
            "250-445-7708",
            "250-406-4553"
        ],
        "socMedias": [
            {
                "google": "hwiley@google.com"
            },
            {
                "google": "hwiley@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-03-14"
    }
});
db.users.insertOne(
{
    "userKey": "BORIROSA8650",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Boris",
        "middle": "J",
        "last": "Rosario",
        "suffix": null
    },
    "address": {
        "streetAddress": "6669 Blue Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Petralnica",
        "locality1": null,
        "locality2": null,
        "country": "MK",
        "postalCode": "1332",
        "geoSpatial": [
            "22.1872",
            "42.2083"
        ]
    },
    "contact": {
        "email": "brosario251@uunet.com",
        "phone": "251-792-8650",
        "socMedia": {
            "linkedin": "brosario@linkedin.com"
        }
    },
    "login": {
        "username": "brosario",
        "oauth2": "brosario@linkedin.com",
        "password": "$2y$10$1veoeYdkZm404BuK4JvDZ.qFScyBsMEOrKpdpa6zH2RUFw9JpnF\/m"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-02-15"
    }
});
db.users.insertOne(
{
    "userKey": "LAVEBLAC9589",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Laverne",
        "middle": null,
        "last": "Black",
        "suffix": null
    },
    "address": {
        "streetAddress": "5354 Short Woods Ride",
        "buildingName": null,
        "floor": 9,
        "roomAptCondoFlat": "BB",
        "city": "Forrestfield",
        "locality1": "WA",
        "locality2": "TANGNEY",
        "country": "AU",
        "postalCode": "6058",
        "geoSpatial": [
            "116.0067",
            "-31.9828"
        ]
    },
    "contact": {
        "email": "lblack252@bce.com",
        "phone": "252-388-9589",
        "socMedia": []
    },
    "login": {
        "username": "lblack",
        "oauth2": null,
        "password": "$2y$10$hdT91rH6Z9.I6rDrtZwbAOp1Bbmqcblg3b7Xel4eYyVFAB\/aRl656"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-10-15"
    }
});
db.users.insertOne(
{
    "userKey": "PASQHURS6356",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Pasquale",
        "middle": "Q",
        "last": "Hurst",
        "suffix": null
    },
    "address": {
        "streetAddress": "3675 Blue Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Southampton",
        "locality1": "Southampton Parish",
        "locality2": "Southampton Parish",
        "country": "BM",
        "postalCode": "SN 02",
        "geoSpatial": [
            "-64.8564",
            "32.2508"
        ]
    },
    "contact": {
        "email": "phurst253@worldnet.com",
        "phone": "253-436-6356",
        "socMedia": {
            "facebook": "phurst@facebook.com"
        }
    },
    "login": {
        "username": "phurst",
        "oauth2": "phurst@facebook.com",
        "password": "$2y$10$G1TZOuj.UjMn1pyWjf8jjePHOF4PHdQI27R\/Al34TMw0wUTjT6k0K"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-04-13"
    }
});
db.users.insertOne(
{
    "userKey": "BRADDELE2880",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Brady",
        "middle": "P",
        "last": "Deleon",
        "suffix": null
    },
    "address": {
        "streetAddress": "8417 Green Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jillundi",
        "locality1": "Bhanjanagar",
        "locality2": "Ganjam",
        "country": "IN",
        "postalCode": "761133",
        "geoSpatial": [
            "84.6321",
            "20.0758"
        ]
    },
    "contact": {
        "email": "bdeleon254@optus.com",
        "phone": "254-975-2880",
        "socMedia": {
            "line": "bdeleon@line.com"
        }
    },
    "login": {
        "username": "bdeleon",
        "oauth2": "bdeleon@line.com",
        "password": "$2y$10$6cP4Q7mDAU7QTyldUQXuIOIN2R1N8vLeKOQYjtBMvU0QuHDZB6FT."
    },
    "otherContact": {
        "emails": [
            "bdeleon254@jio.com",
            "bdeleon254@cubenet.com"
        ],
        "phoneNumbers": [
            "254-941-2363",
            "254-396-7033"
        ],
        "socMedias": [
            {
                "google": "bdeleon@google.com"
            },
            {
                "linkedin": "bdeleon@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-10-12"
    }
});
db.users.insertOne(
{
    "userKey": "ROSAMUEL3167",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Friendly Associates",
    "name": {
        "title": null,
        "first": "Rosario",
        "middle": null,
        "last": "Mueller",
        "suffix": null
    },
    "address": {
        "streetAddress": "8875 Blue Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oxentea",
        "locality1": "Criuleni-Dub.",
        "locality2": "Criuleni-Dub.",
        "country": "MD",
        "postalCode": "MD-4578",
        "geoSpatial": [
            "29.1186",
            "47.3833"
        ]
    },
    "contact": {
        "email": "rmueller255@megafon.com",
        "phone": "255-976-3167",
        "socMedia": []
    },
    "login": {
        "username": "rmueller",
        "oauth2": null,
        "password": "$2y$10$HiP7YEPajrHZSBh9G3zIUeHF1tQmvSFvtIiyU416i.NEo7zns.RSS"
    },
    "otherContact": {
        "emails": [
            "rmueller255@frontier.com",
            "rmueller255@openworld.com"
        ],
        "phoneNumbers": [
            "255-682-8561",
            "255-436-0880"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-08-07"
    }
});
db.users.insertOne(
{
    "userKey": "CYTHMEAD6397",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Cythia",
        "middle": "E",
        "last": "Meadows",
        "suffix": null
    },
    "address": {
        "streetAddress": "2646 Winding Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Morrison",
        "locality1": "IA",
        "locality2": "Grundy",
        "country": "US",
        "postalCode": "50657",
        "geoSpatial": [
            "-92.6738",
            "42.3433"
        ]
    },
    "contact": {
        "email": "cmeadows256@telstra.com",
        "phone": "256-606-6397",
        "socMedia": {
            "facebook": "cmeadows@facebook.com"
        }
    },
    "login": {
        "username": "cmeadows",
        "oauth2": "cmeadows@facebook.com",
        "password": "$2y$10$ArHoChw.zoo5BNbOGIPGNuf10yQKMhs9YuoP6bwlfVNhHJMyU0wWC"
    },
    "otherContact": {
        "emails": [
            "cmeadows256@openworld.com",
            "cmeadows256@algonet.com"
        ],
        "phoneNumbers": [
            "256-499-6618",
            "256-976-5742"
        ],
        "socMedias": [
            {
                "facebook": "cmeadows@facebook.com"
            },
            {
                "twitter": "cmeadows@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-02-21"
    }
});
db.users.insertOne(
{
    "userKey": "PAULKANE7428",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Paul",
        "middle": "T",
        "last": "Kane",
        "suffix": null
    },
    "address": {
        "streetAddress": "8540 Blue Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jan Mayen",
        "locality1": "Jan Mayen",
        "locality2": "Jan Mayen",
        "country": "SJ",
        "postalCode": "8099",
        "geoSpatial": [
            "-8.638",
            "70.9498"
        ]
    },
    "contact": {
        "email": "pkane257@verizon.com",
        "phone": "257-115-7428",
        "socMedia": {
            "linkedin": "pkane@linkedin.com"
        }
    },
    "login": {
        "username": "pkane",
        "oauth2": "pkane@linkedin.com",
        "password": "$2y$10$TIsur5oMVVfs95fqyDGegeQKUpDb3ABvZkRXBub8RLSFLc2HoYJDa"
    },
    "otherContact": {
        "emails": [
            "pkane257@turkcell.com",
            "pkane257@apicnet.com",
            "pkane257@maxcomm.com"
        ],
        "phoneNumbers": [
            "257-831-2876",
            "257-590-1205",
            "257-344-6083"
        ],
        "socMedias": [
            {
                "facebook": "pkane@facebook.com"
            },
            {
                "twitter": "pkane@twitter.com"
            },
            {
                "twitter": "pkane@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-11-11"
    }
});
db.users.insertOne(
{
    "userKey": "MORROWEN4733",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Morris",
        "middle": null,
        "last": "Owens",
        "suffix": null
    },
    "address": {
        "streetAddress": "9177 Blue Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "76",
        "city": "Wiyarra",
        "locality1": "QLD",
        "locality2": "Queensland",
        "country": "AU",
        "postalCode": "4370",
        "geoSpatial": [
            "152.2333",
            "-28.2667"
        ]
    },
    "contact": {
        "email": "mowens258@ote.com",
        "phone": "258-257-4733",
        "socMedia": []
    },
    "login": {
        "username": "mowens",
        "oauth2": null,
        "password": "$2y$10$EiCOZzLl4KDvFpeJaYvquudvUiHOd.Y07oktcLtu9P5CC8suK3d.S"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-04-24"
    }
});
db.users.insertOne(
{
    "userKey": "BRADPADI7368",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Brady",
        "middle": "L",
        "last": "Padilla",
        "suffix": null
    },
    "address": {
        "streetAddress": "1730 Little River Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Leiden",
        "locality1": "Leiden",
        "locality2": "Leiden",
        "country": "NL",
        "postalCode": "2324",
        "geoSpatial": [
            "4.4717",
            "52.1452"
        ]
    },
    "contact": {
        "email": "bpadilla259@telefonica.com",
        "phone": "259-184-7368",
        "socMedia": {
            "google": "bpadilla@google.com"
        }
    },
    "login": {
        "username": "bpadilla",
        "oauth2": "bpadilla@google.com",
        "password": "$2y$10$DzPCwPRm\/5uF79vSjViKkeGEbgOWSC\/0qRbUugRLzm.Wj3UmIIgAK"
    },
    "otherContact": {
        "emails": [
            "bpadilla259@tata.com"
        ],
        "phoneNumbers": [
            "259-205-9697"
        ],
        "socMedias": [
            {
                "facebook": "bpadilla@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-06-07"
    }
});
db.users.insertOne(
{
    "userKey": "ENOCPROC5048",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Green Holdings Inc",
    "name": {
        "title": "Mr",
        "first": "Enoch",
        "middle": "E",
        "last": "Proctor",
        "suffix": null
    },
    "address": {
        "streetAddress": "4539 Little Hill Circle",
        "buildingName": "Building E8",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Balindar",
        "locality1": "Boinchi",
        "locality2": "Hooghly",
        "country": "IN",
        "postalCode": "712134",
        "geoSpatial": [
            "88.178",
            "23.1011"
        ]
    },
    "contact": {
        "email": "eproctor260@vivendi.com",
        "phone": "260-710-5048",
        "socMedia": {
            "line": "eproctor@line.com"
        }
    },
    "login": {
        "username": "eproctor",
        "oauth2": "eproctor@line.com",
        "password": "$2y$10$Ws586UGV15bjhY.zhLEEtesnkMkIzaWu6tPkFpb941Jw7dALivMhe"
    },
    "otherContact": {
        "emails": [
            "eproctor260@uunet.com",
            "eproctor260@cci.com"
        ],
        "phoneNumbers": [
            "260-938-4738",
            "260-059-8960"
        ],
        "socMedias": [
            {
                "line": "eproctor@line.com"
            },
            {
                "line": "eproctor@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-12-15"
    }
});
db.users.insertOne(
{
    "userKey": "AUGUPITT9336",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "August",
        "middle": null,
        "last": "Pitts",
        "suffix": null
    },
    "address": {
        "streetAddress": "401 Big Bend Street",
        "buildingName": null,
        "floor": 16,
        "roomAptCondoFlat": null,
        "city": "Longyearbyen",
        "locality1": "Spitsbergen",
        "locality2": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9171",
        "geoSpatial": [
            "15.6469",
            "78.2233"
        ]
    },
    "contact": {
        "email": "apitts261@netcom.com",
        "phone": "261-557-9336",
        "socMedia": []
    },
    "login": {
        "username": "apitts",
        "oauth2": null,
        "password": "$2y$10$F2uks12CV3GQOpUZkZ.2EeJH81c\/71.z8FeidlKwQEqhW.\/rE6co6"
    },
    "otherContact": {
        "emails": [
            "apitts261@frontier.com"
        ],
        "phoneNumbers": [
            "261-145-6239"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-01-13"
    }
});
db.users.insertOne(
{
    "userKey": "CHUNWALT8407",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Chung",
        "middle": "N",
        "last": "Walton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3791 Big Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ahuntsic Central",
        "locality1": "QC",
        "locality2": "Ahuntsic",
        "country": "CA",
        "postalCode": "H2C",
        "geoSpatial": [
            "-73.6584",
            "45.5606"
        ]
    },
    "contact": {
        "email": "cwalton262@swisscom.com",
        "phone": "262-928-8407",
        "socMedia": {
            "line": "cwalton@line.com"
        }
    },
    "login": {
        "username": "cwalton",
        "oauth2": "cwalton@line.com",
        "password": "$2y$10$2lL5zbAUF96fs8cBitU2fu1k9lSIhi.ur8.LUn.suJjWLLslj9QGm"
    },
    "otherContact": {
        "emails": [
            "cwalton262@worldnet.com",
            "cwalton262@glasnet.com",
            "cwalton262@kddi.com"
        ],
        "phoneNumbers": [
            "262-940-7253",
            "262-381-7647",
            "262-945-9266"
        ],
        "socMedias": [
            {
                "linkedin": "cwalton@linkedin.com"
            },
            {
                "linkedin": "cwalton@linkedin.com"
            },
            {
                "skype": "cwalton@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-09-27"
    }
});
db.users.insertOne(
{
    "userKey": "GREGGAIN7063",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Gregorio",
        "middle": "G",
        "last": "Gaines",
        "suffix": null
    },
    "address": {
        "streetAddress": "7169 Big Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sutherlands",
        "locality1": "E9",
        "locality2": "Canterbury",
        "country": "NZ",
        "postalCode": "7983",
        "geoSpatial": [
            "171.05",
            "-44.2833"
        ]
    },
    "contact": {
        "email": "ggaines263@zain.com",
        "phone": "263-521-7063",
        "socMedia": {
            "twitter": "ggaines@twitter.com"
        }
    },
    "login": {
        "username": "ggaines",
        "oauth2": "ggaines@twitter.com",
        "password": "$2y$10$XBdVbrHErF97W6igEKjdGONe3CelKUZwsyKTYtNJCmfRqRd4.adw2"
    },
    "otherContact": {
        "emails": [
            "ggaines263@bt.com"
        ],
        "phoneNumbers": [
            "263-021-2413"
        ],
        "socMedias": [
            {
                "skype": "ggaines@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-08-17"
    }
});
db.users.insertOne(
{
    "userKey": "ANTIHOLL7515",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Antionette",
        "middle": null,
        "last": "Holland",
        "suffix": null
    },
    "address": {
        "streetAddress": "239 Winding Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "AF",
        "city": "Culnacraig",
        "locality1": "Scotland",
        "locality2": "Highland",
        "country": "GB",
        "postalCode": "IV26",
        "geoSpatial": [
            "-5.3072",
            "57.9922"
        ]
    },
    "contact": {
        "email": "aholland264@lguplus.com",
        "phone": "264-542-7515",
        "socMedia": []
    },
    "login": {
        "username": "aholland",
        "oauth2": null,
        "password": "$2y$10$bMY5Isn1uFPqV6xKZlGwaO4xCqbJQHpS75tb.EPpI09lCQcGwMPFq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-07-02"
    }
});
db.users.insertOne(
{
    "userKey": "YASMJENS5147",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Lazy Bird Holdings Inc",
    "name": {
        "title": "Ms",
        "first": "Yasmin",
        "middle": "U",
        "last": "Jensen",
        "suffix": null
    },
    "address": {
        "streetAddress": "5247 Big Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Devonshire",
        "locality1": "Devonshire Parish",
        "locality2": "Devonshire Parish",
        "country": "BM",
        "postalCode": "HM 20",
        "geoSpatial": [
            "-64.792",
            "32.3002"
        ]
    },
    "contact": {
        "email": "yjensen265@orstom.com",
        "phone": "265-841-5147",
        "socMedia": {
            "skype": "yjensen@skype.com"
        }
    },
    "login": {
        "username": "yjensen",
        "oauth2": "yjensen@skype.com",
        "password": "$2y$10$jeFOVW6tx0w4.dkrPPOG4emAZbud\/fwLWN51XuPCioU1kvjwiMBc2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-02-15"
    }
});
db.users.insertOne(
{
    "userKey": "ERROMATA3163",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Errol",
        "middle": "O",
        "last": "Mata",
        "suffix": null
    },
    "address": {
        "streetAddress": "5062 Red Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lake Superior North Shore (Marathon)",
        "locality1": "ON",
        "locality2": "Lake Superior ",
        "country": "CA",
        "postalCode": "P0T",
        "geoSpatial": [
            "-88.756",
            "49.2924"
        ]
    },
    "contact": {
        "email": "emata266@att.com",
        "phone": "266-795-3163",
        "socMedia": {
            "skype": "emata@skype.com"
        }
    },
    "login": {
        "username": "emata",
        "oauth2": "emata@skype.com",
        "password": "$2y$10$54LOWuz32cqLvuS1kZ3aoOzszA49TUYgh.fchdWaXoIqTqWHHLOdG"
    },
    "otherContact": {
        "emails": [
            "emata266@icom.com",
            "emata266@bce.com",
            "emata266@verizon.com"
        ],
        "phoneNumbers": [
            "266-262-2730",
            "266-633-0436",
            "266-560-6226"
        ],
        "socMedias": [
            {
                "google": "emata@google.com"
            },
            {
                "twitter": "emata@twitter.com"
            },
            {
                "linkedin": "emata@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-12-03"
    }
});
db.users.insertOne(
{
    "userKey": "RAINWHIT7554",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Raina",
        "middle": null,
        "last": "Whitaker",
        "suffix": null
    },
    "address": {
        "streetAddress": "9895 Green Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Inaricho",
        "locality1": "Shimogyo Ku",
        "locality2": "Kyoto Shi",
        "country": "JP",
        "postalCode": "600-8098",
        "geoSpatial": [
            "135.8167",
            "34.95"
        ]
    },
    "contact": {
        "email": "rwhitake267@openworld.com",
        "phone": "267-858-7554",
        "socMedia": []
    },
    "login": {
        "username": "rwhitake",
        "oauth2": null,
        "password": "$2y$10$EBHKBDByRwwyxoKUo89T3.flXvtsFPt1HakLB3fhjp3MGHlzYEJne"
    },
    "otherContact": {
        "emails": [
            "rwhitake267@cubenet.com",
            "rwhitake267@singtel.com",
            "rwhitake267@ote.com"
        ],
        "phoneNumbers": [
            "267-336-9062",
            "267-580-6285",
            "267-415-6593"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-11-28"
    }
});
db.users.insertOne(
{
    "userKey": "STEPKANE2778",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Stephany",
        "middle": "U",
        "last": "Kane",
        "suffix": null
    },
    "address": {
        "streetAddress": "2049 Big Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Orangeville South",
        "locality1": "ON",
        "locality2": "Orangeville",
        "country": "CA",
        "postalCode": "L9W",
        "geoSpatial": [
            "-80.016",
            "43.9702"
        ]
    },
    "contact": {
        "email": "skane268@ptcl.com",
        "phone": "268-427-2778",
        "socMedia": {
            "skype": "skane@skype.com"
        }
    },
    "login": {
        "username": "skane",
        "oauth2": "skane@skype.com",
        "password": "$2y$10$OlfTMlrMi4sESRETGxRORe8gJ\/ojyAn5YWEgV6.3OygYdy1z1J3M6"
    },
    "otherContact": {
        "emails": [
            "skane268@turkcell.com",
            "skane268@lguplus.com"
        ],
        "phoneNumbers": [
            "268-717-2540",
            "268-884-5768"
        ],
        "socMedias": [
            {
                "twitter": "skane@twitter.com"
            },
            {
                "facebook": "skane@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-02-24"
    }
});
db.users.insertOne(
{
    "userKey": "DONOMURI9958",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Donovan",
        "middle": "Z",
        "last": "Murillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "9922 Red Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dzaoudzi",
        "locality1": "Dzaoudzi",
        "locality2": "Dzaoudzi",
        "country": "YT",
        "postalCode": "97615",
        "geoSpatial": [
            "45.2837",
            "-12.7783"
        ]
    },
    "contact": {
        "email": "dmurillo269@telecom.com",
        "phone": "269-412-9958",
        "socMedia": {
            "linkedin": "dmurillo@linkedin.com"
        }
    },
    "login": {
        "username": "dmurillo",
        "oauth2": "dmurillo@linkedin.com",
        "password": "$2y$10$mKInSQPyTWQVAdaDlnS8I.oyIkhKrSG8tGViJss1Y.tDakwsk2Kma"
    },
    "otherContact": {
        "emails": [
            "dmurillo269@tt.com"
        ],
        "phoneNumbers": [
            "269-210-5993"
        ],
        "socMedias": [
            {
                "facebook": "dmurillo@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-12-28"
    }
});
db.users.insertOne(
{
    "userKey": "DARISTEE1242",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Green Trust Ltd",
    "name": {
        "title": null,
        "first": "Dario",
        "middle": null,
        "last": "Steele",
        "suffix": null
    },
    "address": {
        "streetAddress": "6520 Little Stream Boulevard",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": "FF",
        "city": "Maryhill",
        "locality1": "Scotland",
        "locality2": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB53",
        "geoSpatial": [
            "-2.3939",
            "57.525"
        ]
    },
    "contact": {
        "email": "dsteele270@telecom.com",
        "phone": "270-665-1242",
        "socMedia": []
    },
    "login": {
        "username": "dsteele",
        "oauth2": null,
        "password": "$2y$10$EhuDLDJJH9ZDMyVXwfYweOzvFJ8WYzsvMmA3.YZDzR58zsXQJvvyO"
    },
    "otherContact": {
        "emails": [
            "dsteele270@relcom.com",
            "dsteele270@apicnet.com"
        ],
        "phoneNumbers": [
            "270-636-8889",
            "270-815-7234"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-03-13"
    }
});
db.users.insertOne(
{
    "userKey": "ADELSOTO4410",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Adela",
        "middle": "Q",
        "last": "Soto",
        "suffix": null
    },
    "address": {
        "streetAddress": "9067 Long Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Reddiapatti",
        "locality1": "Dindigul",
        "locality2": "Dindigul",
        "country": "IN",
        "postalCode": "624003",
        "geoSpatial": [
            "77.9252",
            "10.3492"
        ]
    },
    "contact": {
        "email": "asoto271@oi.com",
        "phone": "271-307-4410",
        "socMedia": {
            "skype": "asoto@skype.com"
        }
    },
    "login": {
        "username": "asoto",
        "oauth2": "asoto@skype.com",
        "password": "$2y$10$eKX5P6.MxqkKj0eae3KTru0S9YjI9B3J51mDOdSe4gLHQf83iyf82"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-08-15"
    }
});
db.users.insertOne(
{
    "userKey": "KRISPIER2598",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Kris",
        "middle": "C",
        "last": "Pierce",
        "suffix": null
    },
    "address": {
        "streetAddress": "6665 Short Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cudliptown",
        "locality1": "England",
        "locality2": "Devon",
        "country": "GB",
        "postalCode": "PL19",
        "geoSpatial": [
            "-4.1907",
            "50.5731"
        ]
    },
    "contact": {
        "email": "kpierce272@apicnet.com",
        "phone": "272-938-2598",
        "socMedia": {
            "twitter": "kpierce@twitter.com"
        }
    },
    "login": {
        "username": "kpierce",
        "oauth2": "kpierce@twitter.com",
        "password": "$2y$10$CCOQyEI3V9piUiJwP5KVAusSCWeL.9WXQ6GziHx\/66zTBGXjRfn\/y"
    },
    "otherContact": {
        "emails": [
            "kpierce272@seednet.com",
            "kpierce272@chunghwa.com"
        ],
        "phoneNumbers": [
            "272-375-7548",
            "272-505-1016"
        ],
        "socMedias": [
            {
                "twitter": "kpierce@twitter.com"
            },
            {
                "skype": "kpierce@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-12-20"
    }
});
db.users.insertOne(
{
    "userKey": "MICHTANG7567",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Michaele",
        "middle": null,
        "last": "Tang",
        "suffix": null
    },
    "address": {
        "streetAddress": "2587 Green Hill Avenue",
        "buildingName": "Building 66",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fort-de-France",
        "locality1": "MQ",
        "locality2": "Martinique",
        "country": "MQ",
        "postalCode": "97254 CEDEX",
        "geoSpatial": [
            "-61.0733",
            "14.6089"
        ]
    },
    "contact": {
        "email": "mtang273@seednet.com",
        "phone": "273-267-7567",
        "socMedia": []
    },
    "login": {
        "username": "mtang",
        "oauth2": null,
        "password": "$2y$10$OYJBcumYr2JoJF5fZo8VS.oVhNFk2WnlF02QqQ4l31CFPpEEaGXam"
    },
    "otherContact": {
        "emails": [
            "mtang273@kpn.com"
        ],
        "phoneNumbers": [
            "273-362-3471"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-05-09"
    }
});
db.users.insertOne(
{
    "userKey": "LOREHOBB0468",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Lorene",
        "middle": "I",
        "last": "Hobbs",
        "suffix": null
    },
    "address": {
        "streetAddress": "3079 Long Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sainte-Foy Southeast",
        "locality1": "QC",
        "locality2": "Sainte-Foy",
        "country": "CA",
        "postalCode": "G1W",
        "geoSpatial": [
            "-71.298",
            "46.7589"
        ]
    },
    "contact": {
        "email": "lhobbs274@ooredoo.com",
        "phone": "274-798-0468",
        "socMedia": {
            "linkedin": "lhobbs@linkedin.com"
        }
    },
    "login": {
        "username": "lhobbs",
        "oauth2": "lhobbs@linkedin.com",
        "password": "$2y$10$mcVV1ydIlwG1\/rTKhRM51uh7BwseK5UOiT7i1kTpfagBU8MJ3xBEK"
    },
    "otherContact": {
        "emails": [
            "lhobbs274@access.com",
            "lhobbs274@telefonica.com",
            "lhobbs274@uunet.com"
        ],
        "phoneNumbers": [
            "274-442-7402",
            "274-525-6053",
            "274-903-1661"
        ],
        "socMedias": [
            {
                "linkedin": "lhobbs@linkedin.com"
            },
            {
                "twitter": "lhobbs@twitter.com"
            },
            {
                "twitter": "lhobbs@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-01-06"
    }
});
db.users.insertOne(
{
    "userKey": "VERLRODG6962",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Serious Industries",
    "name": {
        "title": "Ms",
        "first": "Verline",
        "middle": "D",
        "last": "Rodgers",
        "suffix": null
    },
    "address": {
        "streetAddress": "6155 Long Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "H\u00fasav\u00edk",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "640",
        "geoSpatial": [
            "-17.3383",
            "66.0415"
        ]
    },
    "contact": {
        "email": "vrodgers275@vodafone.com",
        "phone": "275-132-6962",
        "socMedia": {
            "linkedin": "vrodgers@linkedin.com"
        }
    },
    "login": {
        "username": "vrodgers",
        "oauth2": "vrodgers@linkedin.com",
        "password": "$2y$10$MuRybGdLSi01yptuOqy2oOUjHWOCI0kamWus4L7ol.aqUi13H0GdG"
    },
    "otherContact": {
        "emails": [
            "vrodgers275@oi.com"
        ],
        "phoneNumbers": [
            "275-301-5427"
        ],
        "socMedias": [
            {
                "twitter": "vrodgers@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-03-03"
    }
});
db.users.insertOne(
{
    "userKey": "CHRITODD8409",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Chris",
        "middle": null,
        "last": "Todd",
        "suffix": null
    },
    "address": {
        "streetAddress": "3646 Short Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "01",
        "city": "Sydenham Hill",
        "locality1": "England",
        "locality2": "Greater London",
        "country": "GB",
        "postalCode": "SE21",
        "geoSpatial": [
            "-0.0885",
            "51.4439"
        ]
    },
    "contact": {
        "email": "ctodd276@tm.com",
        "phone": "276-891-8409",
        "socMedia": []
    },
    "login": {
        "username": "ctodd",
        "oauth2": null,
        "password": "$2y$10$CROcs1uBRtS\/1bMDpVxfYO2muKS6XuT6YQfdSIdqTveMvemUaDsqG"
    },
    "otherContact": {
        "emails": [
            "ctodd276@eunet.com"
        ],
        "phoneNumbers": [
            "276-310-2892"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-02-22"
    }
});
db.users.insertOne(
{
    "userKey": "GRAIJOHN4848",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Graig",
        "middle": "K",
        "last": "Johnson",
        "suffix": null
    },
    "address": {
        "streetAddress": "4291 Green Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0420\u0430\u0434\u0435\u0436",
        "locality1": "Malorita",
        "locality2": "Malorita",
        "country": "BY",
        "postalCode": "225924",
        "geoSpatial": [
            "23.8183",
            "51.7092"
        ]
    },
    "contact": {
        "email": "gjohnson277@sprint.com",
        "phone": "277-687-4848",
        "socMedia": {
            "skype": "gjohnson@skype.com"
        }
    },
    "login": {
        "username": "gjohnson",
        "oauth2": "gjohnson@skype.com",
        "password": "$2y$10$aBno7x0FGDABgRZxNYX4puzRLKlrJq7GzJadjoO8cmAJ2FD.Q4hFa"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-07-24"
    }
});
db.users.insertOne(
{
    "userKey": "CASSATKI9733",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Cassidy",
        "middle": "A",
        "last": "Atkinson",
        "suffix": null
    },
    "address": {
        "streetAddress": "9490 Winding Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oakton",
        "locality1": "VA",
        "locality2": "Fairfax",
        "country": "US",
        "postalCode": "22124",
        "geoSpatial": [
            "-77.3233",
            "38.8852"
        ]
    },
    "contact": {
        "email": "catkinso278@vodafone.com",
        "phone": "278-787-9733",
        "socMedia": {
            "twitter": "catkinso@twitter.com"
        }
    },
    "login": {
        "username": "catkinso",
        "oauth2": "catkinso@twitter.com",
        "password": "$2y$10$GGr7dnEbEDJjfyA38uXyUu\/rgPynvujZlXvnrwnLaOKNHZ1\/mZNDm"
    },
    "otherContact": {
        "emails": [
            "catkinso278@airtel.com",
            "catkinso278@netcom.com",
            "catkinso278@tt.com"
        ],
        "phoneNumbers": [
            "278-485-4749",
            "278-030-5074",
            "278-079-8657"
        ],
        "socMedias": [
            {
                "skype": "catkinso@skype.com"
            },
            {
                "twitter": "catkinso@twitter.com"
            },
            {
                "line": "catkinso@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-02-19"
    }
});
db.users.insertOne(
{
    "userKey": "HIPOSTUA1863",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Partners",
    "name": {
        "title": "Mr",
        "first": "Hipolito",
        "middle": "B",
        "last": "Stuart",
        "suffix": null
    },
    "address": {
        "streetAddress": "9587 Short Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Earlington",
        "locality1": "PA",
        "locality2": "Montgomery",
        "country": "US",
        "postalCode": "18918",
        "geoSpatial": [
            "-75.3742",
            "40.32"
        ]
    },
    "contact": {
        "email": "hstuart280@relcom.com",
        "phone": "280-311-1863",
        "socMedia": {
            "line": "hstuart@line.com"
        }
    },
    "login": {
        "username": "hstuart",
        "oauth2": "hstuart@line.com",
        "password": "$2y$10$Oaq6sG.F\/7GM62zQIzIyaeFeyRRaSDkD5gxzcnwaIkgqaso\/gkbla"
    },
    "otherContact": {
        "emails": [
            "hstuart280@ais.com"
        ],
        "phoneNumbers": [
            "280-086-0915"
        ],
        "socMedias": [
            {
                "twitter": "hstuart@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-03-23"
    }
});
db.users.insertOne(
{
    "userKey": "JONPATT4872",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Jon",
        "middle": "Z",
        "last": "Patton",
        "suffix": null
    },
    "address": {
        "streetAddress": "704 Short Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Les Abymes",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97142",
        "geoSpatial": [
            "-61.5045",
            "16.271"
        ]
    },
    "contact": {
        "email": "jpatton281@sktelecom.com",
        "phone": "281-752-4872",
        "socMedia": {
            "twitter": "jpatton@twitter.com"
        }
    },
    "login": {
        "username": "jpatton",
        "oauth2": "jpatton@twitter.com",
        "password": "$2y$10$ZCwF\/MJoOde0\/bkBF8YfcOgQFu6k7eA\/w\/apVv33AxKR1q6KrnOJG"
    },
    "otherContact": {
        "emails": [
            "jpatton281@centurylink.com",
            "jpatton281@cci.com",
            "jpatton281@access.com"
        ],
        "phoneNumbers": [
            "281-230-4427",
            "281-240-6735",
            "281-685-4823"
        ],
        "socMedias": [
            {
                "twitter": "jpatton@twitter.com"
            },
            {
                "linkedin": "jpatton@linkedin.com"
            },
            {
                "google": "jpatton@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-07-24"
    }
});
db.users.insertOne(
{
    "userKey": "SERABRAN3326",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Serafina",
        "middle": null,
        "last": "Branch",
        "suffix": null
    },
    "address": {
        "streetAddress": "1508 Green Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "D6",
        "city": "Oshawa Southwest",
        "locality1": "ON",
        "locality2": "Oshawa",
        "country": "CA",
        "postalCode": "L1J",
        "geoSpatial": [
            "-78.8771",
            "43.8852"
        ]
    },
    "contact": {
        "email": "sbranch282@jio.com",
        "phone": "282-314-3326",
        "socMedia": []
    },
    "login": {
        "username": "sbranch",
        "oauth2": null,
        "password": "$2y$10$Jk.Aa0DZq.XARUqygElAG.qNYX6yJCNnwpnveCA9hYFFdP01lM81q"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-01-16"
    }
});
db.users.insertOne(
{
    "userKey": "BRIDHAYN2214",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Bridgette",
        "middle": "I",
        "last": "Haynes",
        "suffix": null
    },
    "address": {
        "streetAddress": "4166 Red Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kohukohu",
        "locality1": "F6",
        "locality2": "Northland",
        "country": "NZ",
        "postalCode": "0453",
        "geoSpatial": [
            "173.5333",
            "-35.35"
        ]
    },
    "contact": {
        "email": "bhaynes283@tt.com",
        "phone": "283-676-2214",
        "socMedia": {
            "google": "bhaynes@google.com"
        }
    },
    "login": {
        "username": "bhaynes",
        "oauth2": "bhaynes@google.com",
        "password": "$2y$10$G6deDOa7o6n8y6Bs7Fn3vu75U\/xh4azU5aG5phw0kgd5S5fvF8no."
    },
    "otherContact": {
        "emails": [
            "bhaynes283@ktc.com",
            "bhaynes283@vivendi.com"
        ],
        "phoneNumbers": [
            "283-783-3940",
            "283-192-1702"
        ],
        "socMedias": [
            {
                "skype": "bhaynes@skype.com"
            },
            {
                "line": "bhaynes@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-03-06"
    }
});
db.users.insertOne(
{
    "userKey": "CORNCARR9052",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Cornelius",
        "middle": "M",
        "last": "Carrillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "7111 Short Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fresno",
        "locality1": "CA",
        "locality2": "Fresno",
        "country": "US",
        "postalCode": "93709",
        "geoSpatial": [
            "-119.6397",
            "36.7464"
        ]
    },
    "contact": {
        "email": "ccarrill284@relcom.com",
        "phone": "284-787-9052",
        "socMedia": {
            "skype": "ccarrill@skype.com"
        }
    },
    "login": {
        "username": "ccarrill",
        "oauth2": "ccarrill@skype.com",
        "password": "$2y$10$1IZNc3A0dIV1OglcQSPk8ujuzpf6jE0sJekBFRvIxIqaQ0.ZxgZZa"
    },
    "otherContact": {
        "emails": [
            "ccarrill284@orange.com",
            "ccarrill284@vivendi.com"
        ],
        "phoneNumbers": [
            "284-421-2642",
            "284-373-5526"
        ],
        "socMedias": [
            {
                "linkedin": "ccarrill@linkedin.com"
            },
            {
                "facebook": "ccarrill@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-11-01"
    }
});
db.users.insertOne(
{
    "userKey": "THERDELG3658",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Leisure Partners Company",
    "name": {
        "title": null,
        "first": "Theresa",
        "middle": null,
        "last": "Delgado",
        "suffix": null
    },
    "address": {
        "streetAddress": "3356 Short Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "SALAMA",
        "locality1": "DEPTO DE BAJA VERAPAZ",
        "locality2": "DEPTO DE BAJA VERAPAZ",
        "country": "GT",
        "postalCode": "15001",
        "geoSpatial": [
            "-90.2667",
            "15.1"
        ]
    },
    "contact": {
        "email": "tdelgado285@relcom.com",
        "phone": "285-585-3658",
        "socMedia": []
    },
    "login": {
        "username": "tdelgado",
        "oauth2": null,
        "password": "$2y$10$5R8lraHcw.fecekaLHUi8OilswCsvGiII4z8u9Z9HentwS87nwL1i"
    },
    "otherContact": {
        "emails": [
            "tdelgado285@icom.com"
        ],
        "phoneNumbers": [
            "285-830-3685"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-03-26"
    }
});
db.users.insertOne(
{
    "userKey": "JERMGRAY8650",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Jermaine",
        "middle": "T",
        "last": "Gray",
        "suffix": null
    },
    "address": {
        "streetAddress": "9863 Long Gulch Avenue",
        "buildingName": "Building 28",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chhoto Jagulia",
        "locality1": "Chhoto Jagulia",
        "locality2": "North 24 Parganas",
        "country": "IN",
        "postalCode": "743294",
        "geoSpatial": [
            "88.5795",
            "22.7343"
        ]
    },
    "contact": {
        "email": "jgray286@verizon.com",
        "phone": "286-092-8650",
        "socMedia": {
            "line": "jgray@line.com"
        }
    },
    "login": {
        "username": "jgray",
        "oauth2": "jgray@line.com",
        "password": "$2y$10$u3kabJOlKSMgqvvdNOwB2OdBigF4uxa0AN3klAyhfgQzPalDoCpaa"
    },
    "otherContact": {
        "emails": [
            "jgray286@glasnet.com"
        ],
        "phoneNumbers": [
            "286-992-0582"
        ],
        "socMedias": [
            {
                "line": "jgray@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-11-02"
    }
});
db.users.insertOne(
{
    "userKey": "SINDJOSE9224",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Sindy",
        "middle": "P",
        "last": "Joseph",
        "suffix": null
    },
    "address": {
        "streetAddress": "1504 Green Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sibrandah\u00fbs",
        "locality1": "Dantumadiel",
        "locality2": "Dantumadiel",
        "country": "NL",
        "postalCode": "9106",
        "geoSpatial": [
            "5.9507",
            "53.3147"
        ]
    },
    "contact": {
        "email": "sjoseph287@telecom.com",
        "phone": "287-401-9224",
        "socMedia": {
            "linkedin": "sjoseph@linkedin.com"
        }
    },
    "login": {
        "username": "sjoseph",
        "oauth2": "sjoseph@linkedin.com",
        "password": "$2y$10$3ZW0wlyywWOam19nalEs5egVTWyZ1KpDl0ChfOYGgmR\/Bg80j7zZa"
    },
    "otherContact": {
        "emails": [
            "sjoseph287@centurylink.com",
            "sjoseph287@airtel.com",
            "sjoseph287@movil.com"
        ],
        "phoneNumbers": [
            "287-630-7003",
            "287-555-8135",
            "287-204-9705"
        ],
        "socMedias": [
            {
                "google": "sjoseph@google.com"
            },
            {
                "skype": "sjoseph@skype.com"
            },
            {
                "line": "sjoseph@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-11-22"
    }
});
db.users.insertOne(
{
    "userKey": "MANCLEM4439",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Man",
        "middle": null,
        "last": "Clements",
        "suffix": null
    },
    "address": {
        "streetAddress": "4031 Long River Circle",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": "D0",
        "city": "Copeland",
        "locality1": "NSW",
        "locality2": "HUNTER",
        "country": "AU",
        "postalCode": "2422",
        "geoSpatial": [
            "151.8333",
            "-32"
        ]
    },
    "contact": {
        "email": "mclement288@lookdata.com",
        "phone": "288-807-4439",
        "socMedia": []
    },
    "login": {
        "username": "mclement",
        "oauth2": null,
        "password": "$2y$10$6tVjDbliQqAy4.eF.GEDSupc92ONVbqsMtl4SvhI1A037O8CIgZUO"
    },
    "otherContact": {
        "emails": [
            "mclement288@telia.com"
        ],
        "phoneNumbers": [
            "288-237-4674"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-11-01"
    }
});
db.users.insertOne(
{
    "userKey": "JIMMJOHN7191",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Jimmie",
        "middle": "A",
        "last": "Johns",
        "suffix": null
    },
    "address": {
        "streetAddress": "5712 Short Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "V\u00e4stervik",
        "locality1": "H",
        "locality2": "V\u00e4stervik",
        "country": "SE",
        "postalCode": "593 80",
        "geoSpatial": [
            "16.6373",
            "57.7584"
        ]
    },
    "contact": {
        "email": "jjohns289@telkom.com",
        "phone": "289-734-7191",
        "socMedia": {
            "skype": "jjohns@skype.com"
        }
    },
    "login": {
        "username": "jjohns",
        "oauth2": "jjohns@skype.com",
        "password": "$2y$10$Jx78pD0TXlb00GWHmd9oEuCkTdzm3KGVkc\/QnQYe0a.XeVzp0YuRe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-02-21"
    }
});
db.users.insertOne(
{
    "userKey": "ROSEFARL6227",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Accomodation Associates Inc",
    "name": {
        "title": "Ms",
        "first": "Rosella",
        "middle": "T",
        "last": "Farley",
        "suffix": null
    },
    "address": {
        "streetAddress": "1349 Short Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Calgary South (Altadore \/ Bankview \/ Richmond)",
        "locality1": "AB",
        "locality2": "Calgary",
        "country": "CA",
        "postalCode": "T2T",
        "geoSpatial": [
            "-114.1004",
            "51.0242"
        ]
    },
    "contact": {
        "email": "rfarley290@orange.com",
        "phone": "290-929-6227",
        "socMedia": {
            "google": "rfarley@google.com"
        }
    },
    "login": {
        "username": "rfarley",
        "oauth2": "rfarley@google.com",
        "password": "$2y$10$SHuVuS3QZdKBdF2OXvKqi.QlO6pcpMqMFuNbQzKUVqax9uRO7W4I2"
    },
    "otherContact": {
        "emails": [
            "rfarley290@unicom.com"
        ],
        "phoneNumbers": [
            "290-127-0473"
        ],
        "socMedias": [
            {
                "facebook": "rfarley@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-09-18"
    }
});
db.users.insertOne(
{
    "userKey": "MOLLCALD0856",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Mollie",
        "middle": null,
        "last": "Caldwell",
        "suffix": null
    },
    "address": {
        "streetAddress": "3645 Green Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00c5rre",
        "locality1": "Esbjerg Kommune",
        "locality2": "Esbjerg Kommune",
        "country": "DK",
        "postalCode": "6818",
        "geoSpatial": [
            "8.6675",
            "55.5725"
        ]
    },
    "contact": {
        "email": "mcaldwel291@nii.com",
        "phone": "291-435-0856",
        "socMedia": []
    },
    "login": {
        "username": "mcaldwel",
        "oauth2": null,
        "password": "$2y$10$Sen3EKGX80x..A.\/5\/v14.ERjD253xszFJyTRpy2P\/I4.ytCF\/2d6"
    },
    "otherContact": {
        "emails": [
            "mcaldwel291@oi.com",
            "mcaldwel291@orstom.com",
            "mcaldwel291@ote.com"
        ],
        "phoneNumbers": [
            "291-555-4107",
            "291-897-3604",
            "291-790-6826"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-04-04"
    }
});
db.users.insertOne(
{
    "userKey": "DOREGLOV4866",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Dorethea",
        "middle": "N",
        "last": "Glover",
        "suffix": null
    },
    "address": {
        "streetAddress": "5803 Red Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sanwar (Bhiwani)",
        "locality1": "Charkhi Dadri",
        "locality2": "Bhiwani",
        "country": "IN",
        "postalCode": "127042",
        "geoSpatial": [
            "76.2917",
            "28.7104"
        ]
    },
    "contact": {
        "email": "dglover292@vodafone.com",
        "phone": "292-178-4866",
        "socMedia": {
            "twitter": "dglover@twitter.com"
        }
    },
    "login": {
        "username": "dglover",
        "oauth2": "dglover@twitter.com",
        "password": "$2y$10$6wBQrSkf0NcPjmEIa6t7tehTCmUY.2ysuZqIfHnfMabruxVEjalka"
    },
    "otherContact": {
        "emails": [
            "dglover292@tm.com",
            "dglover292@softbank.com",
            "dglover292@tata.com"
        ],
        "phoneNumbers": [
            "292-201-3211",
            "292-830-1839",
            "292-771-4089"
        ],
        "socMedias": [
            {
                "skype": "dglover@skype.com"
            },
            {
                "line": "dglover@line.com"
            },
            {
                "linkedin": "dglover@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-08-23"
    }
});
db.users.insertOne(
{
    "userKey": "BARTWILK0528",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Barton",
        "middle": "N",
        "last": "Wilkerson",
        "suffix": null
    },
    "address": {
        "streetAddress": "5872 Long Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "GENERAL PUEYRREDON",
        "locality1": "X",
        "locality2": "Cordoba",
        "country": "AR",
        "postalCode": "6140",
        "geoSpatial": [
            "-64.4583",
            "-33.9"
        ]
    },
    "contact": {
        "email": "bwilkers293@algonet.com",
        "phone": "293-122-0528",
        "socMedia": {
            "skype": "bwilkers@skype.com"
        }
    },
    "login": {
        "username": "bwilkers",
        "oauth2": "bwilkers@skype.com",
        "password": "$2y$10$gO9a84pa7XKB4llvBAZeF.jlFVVoCc1pqv2KRdxwnW3w\/k.Y6VBu2"
    },
    "otherContact": {
        "emails": [
            "bwilkers293@oi.com"
        ],
        "phoneNumbers": [
            "293-884-8229"
        ],
        "socMedias": [
            {
                "linkedin": "bwilkers@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-06-13"
    }
});
db.users.insertOne(
{
    "userKey": "CORIPOWE6725",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Corinna",
        "middle": null,
        "last": "Powell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9802 Blue Gully Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "64",
        "city": "Pari",
        "locality1": "Unchahar",
        "locality2": "Raebareli",
        "country": "IN",
        "postalCode": "229401",
        "geoSpatial": [
            "82.4102",
            "27.084"
        ]
    },
    "contact": {
        "email": "cpowell294@tm.com",
        "phone": "294-459-6725",
        "socMedia": []
    },
    "login": {
        "username": "cpowell",
        "oauth2": null,
        "password": "$2y$10$mk\/n2x6v\/C2vhAHi0sVWK.WxRSwWf0nsn3bCv1UNdHU.eM7lVnrGS"
    },
    "otherContact": {
        "emails": [
            "cpowell294@netcom.com",
            "cpowell294@zain.com",
            "cpowell294@econnect.com"
        ],
        "phoneNumbers": [
            "294-542-7688",
            "294-718-8432",
            "294-142-0324"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-01-18"
    }
});
db.users.insertOne(
{
    "userKey": "CINDBRUC2194",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Specialty Associates LLC",
    "name": {
        "title": "Ms",
        "first": "Cinda",
        "middle": "M",
        "last": "Bruce",
        "suffix": null
    },
    "address": {
        "streetAddress": "5441 Red River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Seshego",
        "locality1": null,
        "locality2": null,
        "country": "ZA",
        "postalCode": "0751",
        "geoSpatial": [
            "29.3833",
            "-23.85"
        ]
    },
    "contact": {
        "email": "cbruce295@mtn.com",
        "phone": "295-301-2194",
        "socMedia": {
            "twitter": "cbruce@twitter.com"
        }
    },
    "login": {
        "username": "cbruce",
        "oauth2": "cbruce@twitter.com",
        "password": "$2y$10$oZa7ZCRUxbqHnC\/ZHDyLSOn2bziv\/WVi4qdrl7zKcWKlln\/KkBA.K"
    },
    "otherContact": {
        "emails": [
            "cbruce295@icom.com"
        ],
        "phoneNumbers": [
            "295-510-5789"
        ],
        "socMedias": [
            {
                "linkedin": "cbruce@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-04-19"
    }
});
db.users.insertOne(
{
    "userKey": "MCKESING6089",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Mckenzie",
        "middle": "G",
        "last": "Singh",
        "suffix": null
    },
    "address": {
        "streetAddress": "5903 Winding Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Balbeggie",
        "locality1": "Scotland",
        "locality2": "Perth and Kinross",
        "country": "GB",
        "postalCode": "PH2",
        "geoSpatial": [
            "-3.3495",
            "56.4485"
        ]
    },
    "contact": {
        "email": "msingh296@maxcomm.com",
        "phone": "296-861-6089",
        "socMedia": {
            "linkedin": "msingh@linkedin.com"
        }
    },
    "login": {
        "username": "msingh",
        "oauth2": "msingh@linkedin.com",
        "password": "$2y$10$QOzChXXATMeuI99Lpy.27O7l.tgAdUFVQERGWGWiHv.wURbU4bfZe"
    },
    "otherContact": {
        "emails": [
            "msingh296@telstra.com",
            "msingh296@ccs.com",
            "msingh296@pldt.com"
        ],
        "phoneNumbers": [
            "296-262-8386",
            "296-773-0472",
            "296-869-7603"
        ],
        "socMedias": [
            {
                "linkedin": "msingh@linkedin.com"
            },
            {
                "twitter": "msingh@twitter.com"
            },
            {
                "line": "msingh@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-04-02"
    }
});
db.users.insertOne(
{
    "userKey": "LATAMUEL5209",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Latanya",
        "middle": null,
        "last": "Mueller",
        "suffix": null
    },
    "address": {
        "streetAddress": "604 Short Tree Avenue",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": null,
        "city": "Bang Bua Thong",
        "locality1": "Nonthaburi",
        "locality2": "Nonthaburi",
        "country": "TH",
        "postalCode": "11110",
        "geoSpatial": [
            "100.4333",
            "13.9167"
        ]
    },
    "contact": {
        "email": "lmueller297@seednet.com",
        "phone": "297-829-5209",
        "socMedia": []
    },
    "login": {
        "username": "lmueller",
        "oauth2": null,
        "password": "$2y$10$Ow.uUN\/M7hBsPk7X5.WE0.ovlS3jFb\/oJQDKQQbAcyrFBCTkSAtI."
    },
    "otherContact": {
        "emails": [
            "lmueller297@glasnet.com",
            "lmueller297@glasnet.com",
            "lmueller297@cubenet.com"
        ],
        "phoneNumbers": [
            "297-890-4255",
            "297-341-0304",
            "297-492-9319"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-07-12"
    }
});
db.users.insertOne(
{
    "userKey": "JUDSSIMP2728",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Judson",
        "middle": "A",
        "last": "Simpson",
        "suffix": null
    },
    "address": {
        "streetAddress": "8216 Long Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sakol",
        "locality1": "NA",
        "locality2": "Osmanabad",
        "country": "IN",
        "postalCode": "413544",
        "geoSpatial": [
            "76.8842",
            "18.2826"
        ]
    },
    "contact": {
        "email": "jsimpson298@oi.com",
        "phone": "298-427-2728",
        "socMedia": {
            "google": "jsimpson@google.com"
        }
    },
    "login": {
        "username": "jsimpson",
        "oauth2": "jsimpson@google.com",
        "password": "$2y$10$21q9IyFvGJ1chmuLVmdtWu84NdsOkkeYzbKV5mji9HvNt3ItZ4qlG"
    },
    "otherContact": {
        "emails": [
            "jsimpson298@worldnet.com",
            "jsimpson298@telstra.com",
            "jsimpson298@telstra.com"
        ],
        "phoneNumbers": [
            "298-615-7926",
            "298-105-0036",
            "298-420-7843"
        ],
        "socMedias": [
            {
                "skype": "jsimpson@skype.com"
            },
            {
                "facebook": "jsimpson@facebook.com"
            },
            {
                "line": "jsimpson@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-12-27"
    }
});
db.users.insertOne(
{
    "userKey": "CLARKELL4153",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Claretha",
        "middle": "W",
        "last": "Kelley",
        "suffix": null
    },
    "address": {
        "streetAddress": "7900 Winding Gully Drive",
        "buildingName": "Building 71",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041f\u0435\u0440\u0438\u043b\u043e\u0432\u0435\u0446 \/ Perilovec",
        "locality1": "VID",
        "locality2": "\u0411\u043e\u0439\u043d\u0438\u0446\u0430 \/ Bojnica",
        "country": "BG",
        "postalCode": "3841",
        "geoSpatial": [
            "22.5422",
            "43.9944"
        ]
    },
    "contact": {
        "email": "ckelley299@telecomitalia.com",
        "phone": "299-148-4153",
        "socMedia": {
            "line": "ckelley@line.com"
        }
    },
    "login": {
        "username": "ckelley",
        "oauth2": "ckelley@line.com",
        "password": "$2y$10$89FldmANpFzudrNTsOV3OeYWdeZkKkglP2npLZyvMlX6bcSQNas\/G"
    },
    "otherContact": {
        "emails": [
            "ckelley299@algonet.com"
        ],
        "phoneNumbers": [
            "299-619-8837"
        ],
        "socMedias": [
            {
                "google": "ckelley@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-07-08"
    }
});
db.users.insertOne(
{
    "userKey": "TAMIBARN1092",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Associates Inc",
    "name": {
        "title": null,
        "first": "Tamiko",
        "middle": null,
        "last": "Barnett",
        "suffix": null
    },
    "address": {
        "streetAddress": "8214 Green Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "8A",
        "city": "Aylmer North",
        "locality1": "QC",
        "locality2": "Aylmer",
        "country": "CA",
        "postalCode": "J9J",
        "geoSpatial": [
            "-75.8465",
            "45.4394"
        ]
    },
    "contact": {
        "email": "tbarnett300@ntt.com",
        "phone": "300-114-1092",
        "socMedia": []
    },
    "login": {
        "username": "tbarnett",
        "oauth2": null,
        "password": "$2y$10$pfZKQklh8TKGUZCmsm1f1uKborq6c9idwpz2atjNW5qosBkPu2Pcy"
    },
    "otherContact": {
        "emails": [
            "tbarnett300@uunet.com"
        ],
        "phoneNumbers": [
            "300-360-9868"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-12-20"
    }
});
db.users.insertOne(
{
    "userKey": "BERRDOMI5775",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Berry",
        "middle": "R",
        "last": "Dominguez",
        "suffix": null
    },
    "address": {
        "streetAddress": "1735 Green Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Arsuk",
        "locality1": null,
        "locality2": null,
        "country": "GL",
        "postalCode": "3932",
        "geoSpatial": [
            "-48.45",
            "61.1667"
        ]
    },
    "contact": {
        "email": "bdomingu301@telecomitalia.com",
        "phone": "301-677-5775",
        "socMedia": {
            "line": "bdomingu@line.com"
        }
    },
    "login": {
        "username": "bdomingu",
        "oauth2": "bdomingu@line.com",
        "password": "$2y$10$LQ\/V8gGMFbA45WNbNd9i6erUf5TKRo0Q5HAcdSeW.CGs0rh0dkVHu"
    },
    "otherContact": {
        "emails": [
            "bdomingu301@oi.com"
        ],
        "phoneNumbers": [
            "301-230-9798"
        ],
        "socMedias": [
            {
                "twitter": "bdomingu@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-12-01"
    }
});
db.users.insertOne(
{
    "userKey": "CONRBEAN5364",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Conrad",
        "middle": "F",
        "last": "Bean",
        "suffix": null
    },
    "address": {
        "streetAddress": "5635 Blue Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fulham Palace Road",
        "locality1": "England",
        "locality2": "Greater London",
        "country": "GB",
        "postalCode": "W6",
        "geoSpatial": [
            "-0.2204",
            "51.4925"
        ]
    },
    "contact": {
        "email": "cbean302@megafon.com",
        "phone": "302-491-5364",
        "socMedia": {
            "facebook": "cbean@facebook.com"
        }
    },
    "login": {
        "username": "cbean",
        "oauth2": "cbean@facebook.com",
        "password": "$2y$10$AX5Wxj186RNajdnfWbIdL.1JhcqBdXXMZiCqiBWBShDc0hhonNxEK"
    },
    "otherContact": {
        "emails": [
            "cbean302@singtel.com"
        ],
        "phoneNumbers": [
            "302-462-7761"
        ],
        "socMedias": [
            {
                "linkedin": "cbean@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-02-11"
    }
});
db.users.insertOne(
{
    "userKey": "CLAIMEND5835",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Claire",
        "middle": null,
        "last": "Mendoza",
        "suffix": null
    },
    "address": {
        "streetAddress": "2585 Red Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pituffik",
        "locality1": null,
        "locality2": null,
        "country": "GL",
        "postalCode": "3970",
        "geoSpatial": [
            "-68.8428",
            "76.5478"
        ]
    },
    "contact": {
        "email": "cmendoza303@telenor.com",
        "phone": "303-169-5835",
        "socMedia": []
    },
    "login": {
        "username": "cmendoza",
        "oauth2": null,
        "password": "$2y$10$N2.4jUdNqPQhJnqjdFNp1OrBnrwR0M\/lwQbvNfl1V7lgaMh7VIN1q"
    },
    "otherContact": {
        "emails": [
            "cmendoza303@relcom.com",
            "cmendoza303@ktc.com",
            "cmendoza303@telecom.com"
        ],
        "phoneNumbers": [
            "303-782-9677",
            "303-888-0965",
            "303-174-1855"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-09-22"
    }
});
db.users.insertOne(
{
    "userKey": "BLANMANN4003",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Blanche",
        "middle": "Y",
        "last": "Manning",
        "suffix": null
    },
    "address": {
        "streetAddress": "5346 Long Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Halifax Upper Harbour",
        "locality1": "NS",
        "locality2": "Halifax",
        "country": "CA",
        "postalCode": "B3K",
        "geoSpatial": [
            "-63.6017",
            "44.662"
        ]
    },
    "contact": {
        "email": "bmanning304@ais.com",
        "phone": "304-451-4003",
        "socMedia": {
            "twitter": "bmanning@twitter.com"
        }
    },
    "login": {
        "username": "bmanning",
        "oauth2": "bmanning@twitter.com",
        "password": "$2y$10$cTXFTsdj5NEa1a5.xcpoaO7burAwwn\/4n7uyn7fcfIjl4zvRgcui6"
    },
    "otherContact": {
        "emails": [
            "bmanning304@tm.com"
        ],
        "phoneNumbers": [
            "304-675-4788"
        ],
        "socMedias": [
            {
                "skype": "bmanning@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-12-29"
    }
});
db.users.insertOne(
{
    "userKey": "MARKROBB3490",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Bizarro Associates",
    "name": {
        "title": "Mr",
        "first": "Mark",
        "middle": "W",
        "last": "Robbins",
        "suffix": null
    },
    "address": {
        "streetAddress": "4471 Little Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Upper Mongogarie",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2470",
        "geoSpatial": [
            "152.85",
            "-28.9833"
        ]
    },
    "contact": {
        "email": "mrobbins305@tata.com",
        "phone": "305-800-3490",
        "socMedia": {
            "linkedin": "mrobbins@linkedin.com"
        }
    },
    "login": {
        "username": "mrobbins",
        "oauth2": "mrobbins@linkedin.com",
        "password": "$2y$10$PY5ngHcPmsFPWTqzcE97Q.DuR2N2pg7oNxVjKK.jaNkvXc64yX1U2"
    },
    "otherContact": {
        "emails": [
            "mrobbins305@tata.com"
        ],
        "phoneNumbers": [
            "305-911-8794"
        ],
        "socMedias": [
            {
                "facebook": "mrobbins@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-09-12"
    }
});
db.users.insertOne(
{
    "userKey": "CLEOBROW2646",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Cleo",
        "middle": null,
        "last": "Browning",
        "suffix": null
    },
    "address": {
        "streetAddress": "2325 Red Ridge Way",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "FB",
        "city": "Stoke",
        "locality1": "England",
        "locality2": "Hampshire",
        "country": "GB",
        "postalCode": "PO11",
        "geoSpatial": [
            "-0.9698",
            "50.7985"
        ]
    },
    "contact": {
        "email": "cbrownin306@bifty.com",
        "phone": "306-825-2646",
        "socMedia": []
    },
    "login": {
        "username": "cbrownin",
        "oauth2": null,
        "password": "$2y$10$HJm0f8UNxNFlA6LzxKRbD.Ue0F\/P29x1MRNbBaDLpP9C.8nf9GJdq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-05-01"
    }
});
db.users.insertOne(
{
    "userKey": "ALONGILB0904",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Alonzo",
        "middle": "G",
        "last": "Gilbert",
        "suffix": null
    },
    "address": {
        "streetAddress": "8812 Green Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chuuk",
        "locality1": "State of Chuuk",
        "locality2": "State of Chuuk",
        "country": "FM",
        "postalCode": "96942",
        "geoSpatial": [
            "151.5031",
            "7.1383"
        ]
    },
    "contact": {
        "email": "agilbert307@telekom.com",
        "phone": "307-995-0904",
        "socMedia": {
            "line": "agilbert@line.com"
        }
    },
    "login": {
        "username": "agilbert",
        "oauth2": "agilbert@line.com",
        "password": "$2y$10$m6JSkB7kLKHcj6AdXD0pVu9Ahs0sX8cSVFONdR7Y3ovo5fWlBdN1q"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-12-28"
    }
});
db.users.insertOne(
{
    "userKey": "BRODKEMP7526",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Broderick",
        "middle": "L",
        "last": "Kemp",
        "suffix": null
    },
    "address": {
        "streetAddress": "6653 Little Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kankarwa",
        "locality1": "Bhuopalsagar",
        "locality2": "Chittorgarh",
        "country": "IN",
        "postalCode": "312204",
        "geoSpatial": [
            "73.9825",
            "24.8614"
        ]
    },
    "contact": {
        "email": "bkemp308@airtel.com",
        "phone": "308-256-7526",
        "socMedia": {
            "skype": "bkemp@skype.com"
        }
    },
    "login": {
        "username": "bkemp",
        "oauth2": "bkemp@skype.com",
        "password": "$2y$10$rPsUewqmqD1GLzUWj\/54R.hfQ0jIVLTqZ7VIgwpSigcxQWZwWlnO."
    },
    "otherContact": {
        "emails": [
            "bkemp308@jio.com",
            "bkemp308@orange.com"
        ],
        "phoneNumbers": [
            "308-528-5393",
            "308-436-7972"
        ],
        "socMedias": [
            {
                "linkedin": "bkemp@linkedin.com"
            },
            {
                "facebook": "bkemp@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-03-10"
    }
});
db.users.insertOne(
{
    "userKey": "LORELYNN4701",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Loree",
        "middle": null,
        "last": "Lynn",
        "suffix": null
    },
    "address": {
        "streetAddress": "5124 Little Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Warri paikpara",
        "locality1": "Mirzapur",
        "locality2": "Tangail",
        "country": "BD",
        "postalCode": "1943",
        "geoSpatial": [
            "90.1303",
            "24.0977"
        ]
    },
    "contact": {
        "email": "llynn309@ui.com",
        "phone": "309-370-4701",
        "socMedia": []
    },
    "login": {
        "username": "llynn",
        "oauth2": null,
        "password": "$2y$10$b5MRCh8J4nzdrMFU.UPmROYCf1t8TcbYO2ktXNmRk64iJv0RVSxIC"
    },
    "otherContact": {
        "emails": [
            "llynn309@frontier.com",
            "llynn309@eunet.com"
        ],
        "phoneNumbers": [
            "309-315-8477",
            "309-679-9512"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-03-09"
    }
});
db.users.insertOne(
{
    "userKey": "THOMHEND6622",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Leisure Business",
    "name": {
        "title": "Mr",
        "first": "Thomas",
        "middle": "A",
        "last": "Hendricks",
        "suffix": null
    },
    "address": {
        "streetAddress": "7340 Long Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Grand Forks",
        "locality1": "ND",
        "locality2": "Grand Forks",
        "country": "US",
        "postalCode": "58207",
        "geoSpatial": [
            "-97.0329",
            "47.9253"
        ]
    },
    "contact": {
        "email": "thendric310@airtel.com",
        "phone": "310-753-6622",
        "socMedia": {
            "facebook": "thendric@facebook.com"
        }
    },
    "login": {
        "username": "thendric",
        "oauth2": "thendric@facebook.com",
        "password": "$2y$10$uIzwJNh0jy0Kq48bTnJ.PufjFqR.n8gjXm79YuZqEe6s.gPZas6cy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-04-09"
    }
});
db.users.insertOne(
{
    "userKey": "MELWIGG3434",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Mel",
        "middle": null,
        "last": "Wiggins",
        "suffix": null
    },
    "address": {
        "streetAddress": "6240 Little Mountain Road",
        "buildingName": "Building E5",
        "floor": null,
        "roomAptCondoFlat": "3C",
        "city": "Winnipeg (Grassie \/ Pequis)",
        "locality1": "MB",
        "locality2": "Winnipeg",
        "country": "CA",
        "postalCode": "R3W",
        "geoSpatial": [
            "-97.0401",
            "49.9141"
        ]
    },
    "contact": {
        "email": "mwiggins312@rogers.com",
        "phone": "312-761-3434",
        "socMedia": []
    },
    "login": {
        "username": "mwiggins",
        "oauth2": null,
        "password": "$2y$10$R67.Dv3sYY\/jes5hrGZJh.VTig8AI0NIuCtDE38jrXz0iASTzYA5y"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-11-28"
    }
});
db.users.insertOne(
{
    "userKey": "RONDHOPK3583",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ronda",
        "middle": "F",
        "last": "Hopkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "2602 Big Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bucure\u015fti 7",
        "locality1": "Sector 4",
        "locality2": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "040697",
        "geoSpatial": [
            "26.1227",
            "44.3819"
        ]
    },
    "contact": {
        "email": "rhopkins313@swisscom.com",
        "phone": "313-636-3583",
        "socMedia": {
            "linkedin": "rhopkins@linkedin.com"
        }
    },
    "login": {
        "username": "rhopkins",
        "oauth2": "rhopkins@linkedin.com",
        "password": "$2y$10$Y2b7H\/AXvMtHbMz0pFw\/LuC6pxS4clFefvWGW1osbamzt62svQuSO"
    },
    "otherContact": {
        "emails": [
            "rhopkins313@rogers.com",
            "rhopkins313@att.com",
            "rhopkins313@safaricom.com"
        ],
        "phoneNumbers": [
            "313-765-3353",
            "313-222-1629",
            "313-264-7443"
        ],
        "socMedias": [
            {
                "facebook": "rhopkins@facebook.com"
            },
            {
                "google": "rhopkins@google.com"
            },
            {
                "facebook": "rhopkins@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-08-01"
    }
});
db.users.insertOne(
{
    "userKey": "TALISPEN1560",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Talitha",
        "middle": "H",
        "last": "Spencer",
        "suffix": null
    },
    "address": {
        "streetAddress": "1650 Red Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Penparc",
        "locality1": "Wales",
        "locality2": "Ceredigion",
        "country": "GB",
        "postalCode": "SA43",
        "geoSpatial": [
            "-4.6371",
            "52.0764"
        ]
    },
    "contact": {
        "email": "tspencer314@telus.com",
        "phone": "314-314-1560",
        "socMedia": {
            "skype": "tspencer@skype.com"
        }
    },
    "login": {
        "username": "tspencer",
        "oauth2": "tspencer@skype.com",
        "password": "$2y$10$uyKWCh3sUZQ9pBIpq3Asq.CpRfW.8pdGEZMwc3cVnhqrOP.k5a\/Uq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-01-30"
    }
});
db.users.insertOne(
{
    "userKey": "TIAMOOD3674",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Nonstop Trust Company",
    "name": {
        "title": null,
        "first": "Tia",
        "middle": null,
        "last": "Moody",
        "suffix": null
    },
    "address": {
        "streetAddress": "4344 Red Tree Boulevard",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Helsingborg",
        "locality1": "M",
        "locality2": "Sk\u00e5ne",
        "country": "SE",
        "postalCode": "259 86",
        "geoSpatial": [
            "12.6944",
            "56.0467"
        ]
    },
    "contact": {
        "email": "tmoody315@airtel.com",
        "phone": "315-267-3674",
        "socMedia": []
    },
    "login": {
        "username": "tmoody",
        "oauth2": null,
        "password": "$2y$10$xZD57IKrp5Ik3QWk4DXueuDpfHVgYbQ\/yTS9EFWl28duNsoV\/N9ii"
    },
    "otherContact": {
        "emails": [
            "tmoody315@tt.com"
        ],
        "phoneNumbers": [
            "315-082-9796"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-12-25"
    }
});
db.users.insertOne(
{
    "userKey": "MARQBARR9499",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Marquis",
        "middle": "Q",
        "last": "Barron",
        "suffix": null
    },
    "address": {
        "streetAddress": "6407 Red Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ash Bullayne",
        "locality1": "England",
        "locality2": "Devon",
        "country": "GB",
        "postalCode": "EX17",
        "geoSpatial": [
            "-3.7046",
            "50.8117"
        ]
    },
    "contact": {
        "email": "mbarron316@telecom.com",
        "phone": "316-577-9499",
        "socMedia": {
            "line": "mbarron@line.com"
        }
    },
    "login": {
        "username": "mbarron",
        "oauth2": "mbarron@line.com",
        "password": "$2y$10$.7AGtIivuSzusZSZQfZo3eshUm3yjRnmt7laLplgVbap2MIZp9Mb."
    },
    "otherContact": {
        "emails": [
            "mbarron316@vimpelcom.com",
            "mbarron316@ote.com",
            "mbarron316@telstra.com"
        ],
        "phoneNumbers": [
            "316-369-8674",
            "316-858-2696",
            "316-202-9053"
        ],
        "socMedias": [
            {
                "google": "mbarron@google.com"
            },
            {
                "linkedin": "mbarron@linkedin.com"
            },
            {
                "line": "mbarron@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-12-14"
    }
});
db.users.insertOne(
{
    "userKey": "CINTVALD8412",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Cinthia",
        "middle": "C",
        "last": "Valdez",
        "suffix": null
    },
    "address": {
        "streetAddress": "7368 Red Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tav\u015fank\u00f6y",
        "locality1": "Suru\u00e7",
        "locality2": "Suru\u00e7",
        "country": "TR",
        "postalCode": "63800",
        "geoSpatial": [
            "38.4111",
            "36.9169"
        ]
    },
    "contact": {
        "email": "cvaldez317@orange.com",
        "phone": "317-875-8412",
        "socMedia": {
            "facebook": "cvaldez@facebook.com"
        }
    },
    "login": {
        "username": "cvaldez",
        "oauth2": "cvaldez@facebook.com",
        "password": "$2y$10$e0f4qStwlj4.4aDM8QNWjuB0npiL3detxBVA1JSkLb2RE6UY44eXa"
    },
    "otherContact": {
        "emails": [
            "cvaldez317@algonet.com",
            "cvaldez317@belgacom.com"
        ],
        "phoneNumbers": [
            "317-424-1897",
            "317-604-0328"
        ],
        "socMedias": [
            {
                "skype": "cvaldez@skype.com"
            },
            {
                "google": "cvaldez@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-02-21"
    }
});
db.users.insertOne(
{
    "userKey": "INELWILE1256",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Inell",
        "middle": null,
        "last": "Wiley",
        "suffix": null
    },
    "address": {
        "streetAddress": "6837 Short River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "0A",
        "city": "Kingston (Reddendale \/ Cataraqui \/ Collins Bay)",
        "locality1": "ON",
        "locality2": "Kingston",
        "country": "CA",
        "postalCode": "K7M",
        "geoSpatial": [
            "-76.5788",
            "44.2411"
        ]
    },
    "contact": {
        "email": "iwiley318@telefonica.com",
        "phone": "318-503-1256",
        "socMedia": []
    },
    "login": {
        "username": "iwiley",
        "oauth2": null,
        "password": "$2y$10$4R2rtGEsAFNrwogbLXzdHuwWjAGicypjFCr1nTBPhAs4TGtNa6F\/6"
    },
    "otherContact": {
        "emails": [
            "iwiley318@mtn.com",
            "iwiley318@worldnet.com",
            "iwiley318@ktc.com"
        ],
        "phoneNumbers": [
            "318-082-8817",
            "318-973-4603",
            "318-649-2368"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-01-16"
    }
});
db.users.insertOne(
{
    "userKey": "DARLLARS5930",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Darline",
        "middle": "P",
        "last": "Larson",
        "suffix": null
    },
    "address": {
        "streetAddress": "1642 Winding Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Trois-Rivi\u00e8res",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97114",
        "geoSpatial": [
            "-61.6451",
            "15.9757"
        ]
    },
    "contact": {
        "email": "dlarson319@telenor.com",
        "phone": "319-763-5930",
        "socMedia": {
            "twitter": "dlarson@twitter.com"
        }
    },
    "login": {
        "username": "dlarson",
        "oauth2": "dlarson@twitter.com",
        "password": "$2y$10$xWY7hqFnRo8Lt3L7jtFW6.cxKTAD19B5V2syi3ISZy4EGk7Mr0FfG"
    },
    "otherContact": {
        "emails": [
            "dlarson319@ktc.com",
            "dlarson319@telefonica.com"
        ],
        "phoneNumbers": [
            "319-477-7648",
            "319-998-5796"
        ],
        "socMedias": [
            {
                "twitter": "dlarson@twitter.com"
            },
            {
                "linkedin": "dlarson@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-03-20"
    }
});
db.users.insertOne(
{
    "userKey": "ERIKWRIG0419",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Bizarro Business",
    "name": {
        "title": "Ms",
        "first": "Erik",
        "middle": "A",
        "last": "Wright",
        "suffix": null
    },
    "address": {
        "streetAddress": "7751 Short Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Port Morien",
        "locality1": "NS",
        "locality2": "Nova Scotia",
        "country": "CA",
        "postalCode": "B1B",
        "geoSpatial": [
            "-59.9144",
            "46.1174"
        ]
    },
    "contact": {
        "email": "ewright320@lguplus.com",
        "phone": "320-783-0419",
        "socMedia": {
            "facebook": "ewright@facebook.com"
        }
    },
    "login": {
        "username": "ewright",
        "oauth2": "ewright@facebook.com",
        "password": "$2y$10$sqtanCRVJb6.WyNE1o0hCeB9S109JshjLsQJtyJSl4c6rl03K4nLS"
    },
    "otherContact": {
        "emails": [
            "ewright320@daxnet.com",
            "ewright320@vimpelcom.com",
            "ewright320@bt.com"
        ],
        "phoneNumbers": [
            "320-817-8995",
            "320-388-4251",
            "320-401-7398"
        ],
        "socMedias": [
            {
                "linkedin": "ewright@linkedin.com"
            },
            {
                "twitter": "ewright@twitter.com"
            },
            {
                "twitter": "ewright@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1932-12-13"
    }
});
db.users.insertOne(
{
    "userKey": "LENBARR9240",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Len",
        "middle": null,
        "last": "Barron",
        "suffix": null
    },
    "address": {
        "streetAddress": "6283 Green Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tagawa",
        "locality1": "Yugawa Mura",
        "locality2": "Kawanuma Gun",
        "country": "JP",
        "postalCode": "969-3553",
        "geoSpatial": [
            "139.8682",
            "37.5635"
        ]
    },
    "contact": {
        "email": "lbarron321@openworld.com",
        "phone": "321-325-9240",
        "socMedia": []
    },
    "login": {
        "username": "lbarron",
        "oauth2": null,
        "password": "$2y$10$UNGU6rlz2vMFano.FyTPte3LcWbV47VCUTMUyiHbSFAi.f09ujBEq"
    },
    "otherContact": {
        "emails": [
            "lbarron321@netcom.com"
        ],
        "phoneNumbers": [
            "321-827-9192"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-01-28"
    }
});
db.users.insertOne(
{
    "userKey": "IRVIGONZ4660",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Irvin",
        "middle": "Z",
        "last": "Gonzalez",
        "suffix": null
    },
    "address": {
        "streetAddress": "5933 Big Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Penegoes",
        "locality1": "Wales",
        "locality2": "Powys",
        "country": "GB",
        "postalCode": "SY20",
        "geoSpatial": [
            "-3.8094",
            "52.5926"
        ]
    },
    "contact": {
        "email": "igonzale322@movil.com",
        "phone": "322-369-4660",
        "socMedia": {
            "skype": "igonzale@skype.com"
        }
    },
    "login": {
        "username": "igonzale",
        "oauth2": "igonzale@skype.com",
        "password": "$2y$10$lrEBvDJduytP\/A88qyIu1Okp9oBZ0eKSHKBbyM1pyV1Wo4H4HH3Yy"
    },
    "otherContact": {
        "emails": [
            "igonzale322@vimpelcom.com",
            "igonzale322@turkcell.com"
        ],
        "phoneNumbers": [
            "322-501-4019",
            "322-753-0738"
        ],
        "socMedias": [
            {
                "google": "igonzale@google.com"
            },
            {
                "twitter": "igonzale@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-12-19"
    }
});
db.users.insertOne(
{
    "userKey": "NEDRBLAC0962",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Nedra",
        "middle": "L",
        "last": "Blackburn",
        "suffix": null
    },
    "address": {
        "streetAddress": "7147 Red Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Qalandar",
        "locality1": "Balochisan",
        "locality2": "Balochisan",
        "country": "PK",
        "postalCode": "85201",
        "geoSpatial": [
            "69.8889",
            "31.3322"
        ]
    },
    "contact": {
        "email": "nblackbu323@millicom.com",
        "phone": "323-473-0962",
        "socMedia": {
            "line": "nblackbu@line.com"
        }
    },
    "login": {
        "username": "nblackbu",
        "oauth2": "nblackbu@line.com",
        "password": "$2y$10$CIWpQbXbKC956mH4XZoiN.Tu4YME\/WsO3Sn5mhm11CEPCsPk\/PNR."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-05-06"
    }
});
db.users.insertOne(
{
    "userKey": "JESUMORE9962",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Jesus",
        "middle": null,
        "last": "Moreno",
        "suffix": null
    },
    "address": {
        "streetAddress": "9365 Long Woods Way",
        "buildingName": null,
        "floor": 6,
        "roomAptCondoFlat": "4F",
        "city": "North Blenheim",
        "locality1": "NY",
        "locality2": "Schoharie",
        "country": "US",
        "postalCode": "12131",
        "geoSpatial": [
            "-74.4282",
            "42.4899"
        ]
    },
    "contact": {
        "email": "jmoreno324@att.com",
        "phone": "324-526-9962",
        "socMedia": []
    },
    "login": {
        "username": "jmoreno",
        "oauth2": null,
        "password": "$2y$10$2Ucf29GOLTIdBbqSzW\/XYuQNqhO7Mav8Xnqu1JNfo4qDPSwAehrmC"
    },
    "otherContact": {
        "emails": [
            "jmoreno324@telecom.com"
        ],
        "phoneNumbers": [
            "324-911-6861"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-11-27"
    }
});
db.users.insertOne(
{
    "userKey": "CLEOGRIM6506",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Friendly Associates Inc",
    "name": {
        "title": "Ms",
        "first": "Cleo",
        "middle": "X",
        "last": "Grimes",
        "suffix": null
    },
    "address": {
        "streetAddress": "5589 Winding River Boulevard",
        "buildingName": "Building 84",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ebeye",
        "locality1": "Ailinginae",
        "locality2": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "geoSpatial": [
            "166.4103",
            "11.1405"
        ]
    },
    "contact": {
        "email": "cgrimes325@telia.com",
        "phone": "325-969-6506",
        "socMedia": {
            "twitter": "cgrimes@twitter.com"
        }
    },
    "login": {
        "username": "cgrimes",
        "oauth2": "cgrimes@twitter.com",
        "password": "$2y$10$Ium.jItaxKTR78EYDg5lC.WpFPjFz5jANnB2mRKD4GoYXb.6Zp712"
    },
    "otherContact": {
        "emails": [
            "cgrimes325@vivendi.com",
            "cgrimes325@openworld.com",
            "cgrimes325@access.com"
        ],
        "phoneNumbers": [
            "325-207-0821",
            "325-705-8063",
            "325-573-7734"
        ],
        "socMedias": [
            {
                "twitter": "cgrimes@twitter.com"
            },
            {
                "line": "cgrimes@line.com"
            },
            {
                "facebook": "cgrimes@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-02-22"
    }
});
db.users.insertOne(
{
    "userKey": "SHELPHAN2716",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Shela",
        "middle": "E",
        "last": "Phan",
        "suffix": null
    },
    "address": {
        "streetAddress": "920 Green Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mandi",
        "locality1": "Mandi",
        "locality2": "Mahendragarh",
        "country": "IN",
        "postalCode": "123001",
        "geoSpatial": [
            "76.1172",
            "28.0444"
        ]
    },
    "contact": {
        "email": "sphan326@lookdata.com",
        "phone": "326-590-2716",
        "socMedia": {
            "twitter": "sphan@twitter.com"
        }
    },
    "login": {
        "username": "sphan",
        "oauth2": "sphan@twitter.com",
        "password": "$2y$10$DLXO2i2S7ttI5TM04I81De0T5Vk4vti4OgP1dQNVhblZ2XOkeyrZC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-12-02"
    }
});
db.users.insertOne(
{
    "userKey": "RACHESPI7163",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Rachel",
        "middle": null,
        "last": "Espinosa",
        "suffix": null
    },
    "address": {
        "streetAddress": "7347 Big Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "VILLAGUAYCITO",
        "locality1": "E",
        "locality2": "Entre Rios",
        "country": "AR",
        "postalCode": "3218",
        "geoSpatial": [
            "-58.6583",
            "-31.6083"
        ]
    },
    "contact": {
        "email": "respinos327@vimpelcom.com",
        "phone": "327-895-7163",
        "socMedia": []
    },
    "login": {
        "username": "respinos",
        "oauth2": null,
        "password": "$2y$10$UzDMYcxfknKOvnw2LgCXHeSWyZmMEKyc1S1rjyZsF9IG0zM6Qo72i"
    },
    "otherContact": {
        "emails": [
            "respinos327@safaricom.com"
        ],
        "phoneNumbers": [
            "327-377-4956"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-01-11"
    }
});
db.users.insertOne(
{
    "userKey": "SANFLUGO1898",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Sanford",
        "middle": "T",
        "last": "Lugo",
        "suffix": null
    },
    "address": {
        "streetAddress": "9165 Short Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Burnaby (Suncrest \/ Sussex-Nelson \/ Clinton-Glenwood \/ West Big Bend)",
        "locality1": "BC",
        "locality2": "Burnaby",
        "country": "CA",
        "postalCode": "V5J",
        "geoSpatial": [
            "-122.9921",
            "49.2038"
        ]
    },
    "contact": {
        "email": "slugo328@telecomitalia.com",
        "phone": "328-418-1898",
        "socMedia": {
            "google": "slugo@google.com"
        }
    },
    "login": {
        "username": "slugo",
        "oauth2": "slugo@google.com",
        "password": "$2y$10$V7iFKP\/sy\/SBW0GYg96iN.ktZbIiiZlOFAhkdxi8N1PcsQfVzYPl2"
    },
    "otherContact": {
        "emails": [
            "slugo328@turkcell.com",
            "slugo328@vodafone.com"
        ],
        "phoneNumbers": [
            "328-764-5045",
            "328-035-6185"
        ],
        "socMedias": [
            {
                "facebook": "slugo@facebook.com"
            },
            {
                "linkedin": "slugo@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-12-04"
    }
});
db.users.insertOne(
{
    "userKey": "ILSEMICH6374",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ilse",
        "middle": "D",
        "last": "Michael",
        "suffix": null
    },
    "address": {
        "streetAddress": "5361 Blue Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Podolje",
        "locality1": "Popovac",
        "locality2": "Popovac",
        "country": "HR",
        "postalCode": "31303",
        "geoSpatial": [
            "18.7303",
            "45.815"
        ]
    },
    "contact": {
        "email": "imichael329@bt.com",
        "phone": "329-790-6374",
        "socMedia": {
            "skype": "imichael@skype.com"
        }
    },
    "login": {
        "username": "imichael",
        "oauth2": "imichael@skype.com",
        "password": "$2y$10$6ZeymbGcOn9TxSfLKxmyke\/gbMvChv\/ahqjMHTTh\/FF7IGl.UDz2K"
    },
    "otherContact": {
        "emails": [
            "imichael329@etisalat.com"
        ],
        "phoneNumbers": [
            "329-985-2071"
        ],
        "socMedias": [
            {
                "google": "imichael@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-04-09"
    }
});
db.users.insertOne(
{
    "userKey": "ELDAYODE5510",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Serious Industries Company",
    "name": {
        "title": null,
        "first": "Elda",
        "middle": null,
        "last": "Yoder",
        "suffix": null
    },
    "address": {
        "streetAddress": "7845 Blue Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "46",
        "city": "Leicester",
        "locality1": "MA",
        "locality2": "Worcester",
        "country": "US",
        "postalCode": "01524",
        "geoSpatial": [
            "-71.9188",
            "42.237"
        ]
    },
    "contact": {
        "email": "eyoder330@telecom.com",
        "phone": "330-256-5510",
        "socMedia": []
    },
    "login": {
        "username": "eyoder",
        "oauth2": null,
        "password": "$2y$10$jgO7xMaqP8EVQ\/cAOIqGnOduB.44ZCxvy7dlK0hdRK\/oAxxjM1kLm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-03-13"
    }
});
db.users.insertOne(
{
    "userKey": "IRAMEND1707",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Ira",
        "middle": "N",
        "last": "Mendoza",
        "suffix": null
    },
    "address": {
        "streetAddress": "3854 Blue Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mae Wang",
        "locality1": "Chiang Mai",
        "locality2": "Chiang Mai",
        "country": "TH",
        "postalCode": "50360",
        "geoSpatial": [
            "99.2833",
            "19.9167"
        ]
    },
    "contact": {
        "email": "imendoza331@oi.com",
        "phone": "331-216-1707",
        "socMedia": {
            "twitter": "imendoza@twitter.com"
        }
    },
    "login": {
        "username": "imendoza",
        "oauth2": "imendoza@twitter.com",
        "password": "$2y$10$qphXK4S8zc2yL1Qal0dU2.vcbbOlPvoAdn1Lz0lagoBR74N4R6zcG"
    },
    "otherContact": {
        "emails": [
            "imendoza331@lookdata.com"
        ],
        "phoneNumbers": [
            "331-870-8767"
        ],
        "socMedias": [
            {
                "google": "imendoza@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-01-17"
    }
});
db.users.insertOne(
{
    "userKey": "EFREPHAM4887",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Efren",
        "middle": "V",
        "last": "Pham",
        "suffix": null
    },
    "address": {
        "streetAddress": "9569 Long Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mission",
        "locality1": "TX",
        "locality2": "Hidalgo",
        "country": "US",
        "postalCode": "78573",
        "geoSpatial": [
            "-98.3008",
            "26.2937"
        ]
    },
    "contact": {
        "email": "epham332@telecomitalia.com",
        "phone": "332-788-4887",
        "socMedia": {
            "line": "epham@line.com"
        }
    },
    "login": {
        "username": "epham",
        "oauth2": "epham@line.com",
        "password": "$2y$10$daN4u7tMOAa79rd0ptWnk.oo1c41CdZaJguhra4XGkZNh4xL3odsa"
    },
    "otherContact": {
        "emails": [
            "epham332@turkcell.com",
            "epham332@swisscom.com",
            "epham332@rogers.com"
        ],
        "phoneNumbers": [
            "332-884-2680",
            "332-886-4333",
            "332-640-7836"
        ],
        "socMedias": [
            {
                "facebook": "epham@facebook.com"
            },
            {
                "twitter": "epham@twitter.com"
            },
            {
                "skype": "epham@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-07-12"
    }
});
db.users.insertOne(
{
    "userKey": "CRYSSIER7234",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Dr",
        "first": "Crysta",
        "middle": null,
        "last": "Sierra",
        "suffix": "II"
    },
    "address": {
        "streetAddress": "3490 Big Hill Way",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": null,
        "city": "\u0417\u0438\u0434\u0430\u0440\u0446\u0438 \/ Zidarci",
        "locality1": "PER",
        "locality2": "\u041f\u0435\u0440\u043d\u0438\u043a \/ Pernik",
        "country": "BG",
        "postalCode": "2356",
        "geoSpatial": [
            "22.9544",
            "42.6494"
        ]
    },
    "contact": {
        "email": "csierra333@kddi.com",
        "phone": "333-894-7234",
        "socMedia": []
    },
    "login": {
        "username": "csierra",
        "oauth2": null,
        "password": "$2y$10$dumI2VzJnVBtiTgvgr7FyOS27rvMi7GygdXsRYbF5jfXJ2BOguEYa"
    },
    "otherContact": {
        "emails": [
            "csierra333@movil.com",
            "csierra333@telecomitalia.com"
        ],
        "phoneNumbers": [
            "333-892-2582",
            "333-632-5851"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-12-11"
    }
});
db.users.insertOne(
{
    "userKey": "VIRGCORD5052",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Virgina",
        "middle": "V",
        "last": "Cordova",
        "suffix": null
    },
    "address": {
        "streetAddress": "1387 Red Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Auchiries",
        "locality1": "Scotland",
        "locality2": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB42",
        "geoSpatial": [
            "-1.9286",
            "57.4785"
        ]
    },
    "contact": {
        "email": "vcordova334@ooredoo.com",
        "phone": "334-498-5052",
        "socMedia": {
            "line": "vcordova@line.com"
        }
    },
    "login": {
        "username": "vcordova",
        "oauth2": "vcordova@line.com",
        "password": "$2y$10$2kHErHQrrovXgt5gzu9vNO\/wUvFffSwbzq7blzY6P6eyzZU\/dLFua"
    },
    "otherContact": {
        "emails": [
            "vcordova334@telkom.com"
        ],
        "phoneNumbers": [
            "334-395-2076"
        ],
        "socMedias": [
            {
                "facebook": "vcordova@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-08-25"
    }
});
db.users.insertOne(
{
    "userKey": "HARVPATR1246",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Serious Holdings LLC",
    "name": {
        "title": "Mr",
        "first": "Harvey",
        "middle": "Z",
        "last": "Patrick",
        "suffix": null
    },
    "address": {
        "streetAddress": "8854 Winding Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wupping",
        "locality1": "Tarsdorf",
        "locality2": "Politischer Bezirk Braunau am Inn",
        "country": "AT",
        "postalCode": "5121",
        "geoSpatial": [
            "12.8396",
            "48.0872"
        ]
    },
    "contact": {
        "email": "hpatrick335@access.com",
        "phone": "335-383-1246",
        "socMedia": {
            "line": "hpatrick@line.com"
        }
    },
    "login": {
        "username": "hpatrick",
        "oauth2": "hpatrick@line.com",
        "password": "$2y$10$KhosF41GtFBMuTjizfiuEuVuOOTm0u6Dl5IDXwzefYzz5nXvKULc."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-08-24"
    }
});
db.users.insertOne(
{
    "userKey": "IRVIFREN1455",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Irving",
        "middle": null,
        "last": "French",
        "suffix": null
    },
    "address": {
        "streetAddress": "4448 Blue Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "42",
        "city": "Telari",
        "locality1": "Atri",
        "locality2": "Gaya",
        "country": "IN",
        "postalCode": "823311",
        "geoSpatial": [
            "85.7337",
            "24.8545"
        ]
    },
    "contact": {
        "email": "ifrench336@vodafone.com",
        "phone": "336-906-1455",
        "socMedia": []
    },
    "login": {
        "username": "ifrench",
        "oauth2": null,
        "password": "$2y$10$YJZQHsxunl6jNjxQ3qoOrOyE2d6pdqEzqbCjsZVKd\/DCGBGeifPhO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-08-15"
    }
});
db.users.insertOne(
{
    "userKey": "MONTWOLF2690",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Monte",
        "middle": "O",
        "last": "Wolfe",
        "suffix": null
    },
    "address": {
        "streetAddress": "9356 Long Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Frederiksted",
        "locality1": "St. Croix",
        "locality2": "St. Croix",
        "country": "VI",
        "postalCode": "00841",
        "geoSpatial": [
            "-64.8096",
            "17.7648"
        ]
    },
    "contact": {
        "email": "mwolfe337@daxnet.com",
        "phone": "337-586-2690",
        "socMedia": {
            "twitter": "mwolfe@twitter.com"
        }
    },
    "login": {
        "username": "mwolfe",
        "oauth2": "mwolfe@twitter.com",
        "password": "$2y$10$dJAER.6.S5v2kY5ry3ctxuI3uX3kR1WQgFNmQ96zCRBG3wjmF5cO2"
    },
    "otherContact": {
        "emails": [
            "mwolfe337@telia.com",
            "mwolfe337@swisscom.com",
            "mwolfe337@zain.com"
        ],
        "phoneNumbers": [
            "337-568-5006",
            "337-551-2329",
            "337-211-7901"
        ],
        "socMedias": [
            {
                "line": "mwolfe@line.com"
            },
            {
                "google": "mwolfe@google.com"
            },
            {
                "google": "mwolfe@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-08-23"
    }
});
db.users.insertOne(
{
    "userKey": "FELIJORD6341",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Felice",
        "middle": "B",
        "last": "Jordan",
        "suffix": null
    },
    "address": {
        "streetAddress": "6097 Little Bough Road",
        "buildingName": "Building 22",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pemberton",
        "locality1": "WA",
        "locality2": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6260",
        "geoSpatial": [
            "116.0369",
            "-34.4431"
        ]
    },
    "contact": {
        "email": "fjordan338@optus.com",
        "phone": "338-796-6341",
        "socMedia": {
            "google": "fjordan@google.com"
        }
    },
    "login": {
        "username": "fjordan",
        "oauth2": "fjordan@google.com",
        "password": "$2y$10$U0Fmm.RVDsjnTNRwQ6uZo.zEzh\/bGFl3xIoOjcl7WYtpGZuIhC4Fu"
    },
    "otherContact": {
        "emails": [
            "fjordan338@movil.com",
            "fjordan338@kddi.com"
        ],
        "phoneNumbers": [
            "338-331-9018",
            "338-113-8418"
        ],
        "socMedias": [
            {
                "twitter": "fjordan@twitter.com"
            },
            {
                "twitter": "fjordan@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-10-01"
    }
});
db.users.insertOne(
{
    "userKey": "MERLRAMS2007",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Merlyn",
        "middle": null,
        "last": "Ramsey",
        "suffix": null
    },
    "address": {
        "streetAddress": "2140 Green Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hafnarfir\u00f0i",
        "locality1": null,
        "locality2": null,
        "country": "IS",
        "postalCode": "222",
        "geoSpatial": [
            "-21.9566",
            "64.068"
        ]
    },
    "contact": {
        "email": "mramsey339@telecom.com",
        "phone": "339-897-2007",
        "socMedia": []
    },
    "login": {
        "username": "mramsey",
        "oauth2": null,
        "password": "$2y$10$QeAX5gfBh37uzFMOhnpYL.BkttUKW.3DyW2DvAEnKBGgGJUdxafBO"
    },
    "otherContact": {
        "emails": [
            "mramsey339@telenor.com",
            "mramsey339@megafon.com"
        ],
        "phoneNumbers": [
            "339-281-0431",
            "339-961-0088"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-09-03"
    }
});
db.users.insertOne(
{
    "userKey": "TONIRICH9579",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Friendly Industries",
    "name": {
        "title": "Ms",
        "first": "Tonie",
        "middle": "L",
        "last": "Richard",
        "suffix": null
    },
    "address": {
        "streetAddress": "6091 Red Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Amaroo",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2866",
        "geoSpatial": [
            "148.9333",
            "-33.1833"
        ]
    },
    "contact": {
        "email": "trichard340@daxnet.com",
        "phone": "340-243-9579",
        "socMedia": {
            "line": "trichard@line.com"
        }
    },
    "login": {
        "username": "trichard",
        "oauth2": "trichard@line.com",
        "password": "$2y$10$zVBH60C4seGDGP2VoVYI1uLBT5AAfazfH69jutoh\/e\/u62YZu97ye"
    },
    "otherContact": {
        "emails": [
            "trichard340@vodafone.com"
        ],
        "phoneNumbers": [
            "340-589-3872"
        ],
        "socMedias": [
            {
                "skype": "trichard@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-10-28"
    }
});
db.users.insertOne(
{
    "userKey": "BOBBPITT2730",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Bobbie",
        "middle": "I",
        "last": "Pitts",
        "suffix": null
    },
    "address": {
        "streetAddress": "136 Winding Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bray",
        "locality1": null,
        "locality2": null,
        "country": "IE",
        "postalCode": "A98",
        "geoSpatial": [
            "-6.0983",
            "53.2028"
        ]
    },
    "contact": {
        "email": "bpitts341@telecom.com",
        "phone": "341-256-2730",
        "socMedia": {
            "google": "bpitts@google.com"
        }
    },
    "login": {
        "username": "bpitts",
        "oauth2": "bpitts@google.com",
        "password": "$2y$10$jLjVnB9UNeFejyzZRTylKOx96snbceEdm\/ZntlPLtCrBLFKdVCbW."
    },
    "otherContact": {
        "emails": [
            "bpitts341@netcom.com"
        ],
        "phoneNumbers": [
            "341-099-3833"
        ],
        "socMedias": [
            {
                "linkedin": "bpitts@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-04-10"
    }
});
db.users.insertOne(
{
    "userKey": "LEONAYER3452",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Leonarda",
        "middle": null,
        "last": "Ayers",
        "suffix": null
    },
    "address": {
        "streetAddress": "1365 Big Bend Drive",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": "6D",
        "city": "Ascot",
        "locality1": "WA",
        "locality2": "TANGNEY",
        "country": "AU",
        "postalCode": "6104",
        "geoSpatial": [
            "115.9226",
            "-31.9382"
        ]
    },
    "contact": {
        "email": "layers342@greennet.com",
        "phone": "342-109-3452",
        "socMedia": []
    },
    "login": {
        "username": "layers",
        "oauth2": null,
        "password": "$2y$10$PCzfSWIE4cW0fBc5voLM.uU.PJJO5d1FMgE.WtqjQtcgkhxt70SuS"
    },
    "otherContact": {
        "emails": [
            "layers342@vimpelcom.com"
        ],
        "phoneNumbers": [
            "342-943-7461"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-03-16"
    }
});
db.users.insertOne(
{
    "userKey": "MARVREES1211",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Marvel",
        "middle": "F",
        "last": "Reese",
        "suffix": null
    },
    "address": {
        "streetAddress": "2804 Long Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Aldeia",
        "locality1": "Vila Maior Sps",
        "locality2": "S\u00e3o Pedro do Sul",
        "country": "PT",
        "postalCode": "3660-703",
        "geoSpatial": [
            "-8.0482",
            "40.849"
        ]
    },
    "contact": {
        "email": "mreese343@cubenet.com",
        "phone": "343-320-1211",
        "socMedia": {
            "skype": "mreese@skype.com"
        }
    },
    "login": {
        "username": "mreese",
        "oauth2": "mreese@skype.com",
        "password": "$2y$10$XxV2qZ1KFSSOSzgr4CLIruCamP9tcidNNG6vTOi4ia0nHm.3nbHOa"
    },
    "otherContact": {
        "emails": [
            "mreese343@bce.com"
        ],
        "phoneNumbers": [
            "343-491-0659"
        ],
        "socMedias": [
            {
                "google": "mreese@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-10-29"
    }
});
db.users.insertOne(
{
    "userKey": "MARYBOOK8640",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Mary",
        "middle": "T",
        "last": "Booker",
        "suffix": null
    },
    "address": {
        "streetAddress": "1669 Green Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Buffalo",
        "locality1": "KS",
        "locality2": "Wilson",
        "country": "US",
        "postalCode": "66717",
        "geoSpatial": [
            "-95.7014",
            "37.7011"
        ]
    },
    "contact": {
        "email": "mbooker344@singtel.com",
        "phone": "344-669-8640",
        "socMedia": {
            "linkedin": "mbooker@linkedin.com"
        }
    },
    "login": {
        "username": "mbooker",
        "oauth2": "mbooker@linkedin.com",
        "password": "$2y$10$c7vkFMeEG6VBZZVJbBxNJOmfbVrtnApxBXciUz4wbOVjER3BNYKx6"
    },
    "otherContact": {
        "emails": [
            "mbooker344@airtel.com",
            "mbooker344@telecom.com",
            "mbooker344@swisscom.com"
        ],
        "phoneNumbers": [
            "344-699-7158",
            "344-581-9432",
            "344-351-0430"
        ],
        "socMedias": [
            {
                "facebook": "mbooker@facebook.com"
            },
            {
                "linkedin": "mbooker@linkedin.com"
            },
            {
                "linkedin": "mbooker@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-06-29"
    }
});
db.users.insertOne(
{
    "userKey": "ADATERR9501",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Green Business Ltd",
    "name": {
        "title": null,
        "first": "Ada",
        "middle": null,
        "last": "Terrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "5550 Green Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0427\u0435\u0440\u0447\u0435 (\u0417\u0430\u043b\u0443\u0447\u0430\u043d\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
        "locality1": "Chemerovetskyi",
        "locality2": "Chemerovetskyi",
        "country": "UA",
        "postalCode": "31647",
        "geoSpatial": [
            "27.7173",
            "49.4537"
        ]
    },
    "contact": {
        "email": "aterrell345@frontier.com",
        "phone": "345-345-9501",
        "socMedia": []
    },
    "login": {
        "username": "aterrell",
        "oauth2": null,
        "password": "$2y$10$ydRIZVjCEEqquB2imJvaNemJMVZ07aju7pTtTeCDZg1Bym1wvI\/Me"
    },
    "otherContact": {
        "emails": [
            "aterrell345@bifty.com"
        ],
        "phoneNumbers": [
            "345-166-3277"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-08-21"
    }
});
db.users.insertOne(
{
    "userKey": "HOLLMARS1992",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Holly",
        "middle": "S",
        "last": "Marshall",
        "suffix": null
    },
    "address": {
        "streetAddress": "1609 Little Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pudi R.S.",
        "locality1": "Vadamalpet",
        "locality2": "Chittoor",
        "country": "IN",
        "postalCode": "517551",
        "geoSpatial": [
            "79.4988",
            "14.7034"
        ]
    },
    "contact": {
        "email": "hmarshal346@telefonica.com",
        "phone": "346-341-1992",
        "socMedia": {
            "twitter": "hmarshal@twitter.com"
        }
    },
    "login": {
        "username": "hmarshal",
        "oauth2": "hmarshal@twitter.com",
        "password": "$2y$10$XoHa5Sl3q8cix1M2qk4py.0DqNDyUyp2oOW9QyKqAKQqoXN3Takum"
    },
    "otherContact": {
        "emails": [
            "hmarshal346@telesystems.com"
        ],
        "phoneNumbers": [
            "346-607-3810"
        ],
        "socMedias": [
            {
                "skype": "hmarshal@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-11-08"
    }
});
db.users.insertOne(
{
    "userKey": "FREDMOLI1567",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Fredricka",
        "middle": "S",
        "last": "Molina",
        "suffix": null
    },
    "address": {
        "streetAddress": "7356 Winding Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Agana Heights",
        "locality1": "Guam",
        "locality2": "Guam",
        "country": "GU",
        "postalCode": "96919",
        "geoSpatial": [
            "144.7863",
            "13.4443"
        ]
    },
    "contact": {
        "email": "fmolina347@cubenet.com",
        "phone": "347-682-1567",
        "socMedia": {
            "twitter": "fmolina@twitter.com"
        }
    },
    "login": {
        "username": "fmolina",
        "oauth2": "fmolina@twitter.com",
        "password": "$2y$10$Cy8wV3WkqVGG2Kb3S4jUSOMt6n7XDbQgIH1zdxrTP8CXnsGPsA3MS"
    },
    "otherContact": {
        "emails": [
            "fmolina347@bt.com",
            "fmolina347@optus.com"
        ],
        "phoneNumbers": [
            "347-766-2657",
            "347-313-5169"
        ],
        "socMedias": [
            {
                "linkedin": "fmolina@linkedin.com"
            },
            {
                "facebook": "fmolina@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-12-24"
    }
});
db.users.insertOne(
{
    "userKey": "SHAVHAWK9524",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Shavon",
        "middle": null,
        "last": "Hawkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "8352 Red Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "BF",
        "city": "Congham",
        "locality1": "England",
        "locality2": "Norfolk",
        "country": "GB",
        "postalCode": "PE32",
        "geoSpatial": [
            "0.5394",
            "52.7806"
        ]
    },
    "contact": {
        "email": "shawkins348@lookdata.com",
        "phone": "348-895-9524",
        "socMedia": []
    },
    "login": {
        "username": "shawkins",
        "oauth2": null,
        "password": "$2y$10$XZAcmO1YUqVkQ0.FJo2ZHeuwB16qwyt2yvML5cNkQYH3MKUHBj5Uq"
    },
    "otherContact": {
        "emails": [
            "shawkins348@uunet.com",
            "shawkins348@airtel.com",
            "shawkins348@airtel.com"
        ],
        "phoneNumbers": [
            "348-094-1378",
            "348-673-8226",
            "348-114-9013"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-06-16"
    }
});
db.users.insertOne(
{
    "userKey": "DEIDESPA1982",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Deidra",
        "middle": "Q",
        "last": "Esparza",
        "suffix": null
    },
    "address": {
        "streetAddress": "7989 Blue Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pointe-Noire",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97116",
        "geoSpatial": [
            "-61.7878",
            "16.2309"
        ]
    },
    "contact": {
        "email": "desparza349@cerist.com",
        "phone": "349-122-1982",
        "socMedia": {
            "google": "desparza@google.com"
        }
    },
    "login": {
        "username": "desparza",
        "oauth2": "desparza@google.com",
        "password": "$2y$10$EX5qGYMtXal4aL9.FNLNieVl3O1L.wnZ4J.bHOXlDqMOtmu04B9ze"
    },
    "otherContact": {
        "emails": [
            "desparza349@ptcl.com",
            "desparza349@ote.com"
        ],
        "phoneNumbers": [
            "349-682-5632",
            "349-993-8605"
        ],
        "socMedias": [
            {
                "facebook": "desparza@facebook.com"
            },
            {
                "line": "desparza@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-05-13"
    }
});
db.users.insertOne(
{
    "userKey": "CORNCURR0581",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Ninety Nine Percenter Business Company",
    "name": {
        "title": "Mr",
        "first": "Cornell",
        "middle": "Q",
        "last": "Curry",
        "suffix": null
    },
    "address": {
        "streetAddress": "5702 Winding Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Adelaide Mail Centre",
        "locality1": "SA",
        "locality2": "South Australia",
        "country": "AU",
        "postalCode": "5871",
        "geoSpatial": [
            "138.5986",
            "-34.9287"
        ]
    },
    "contact": {
        "email": "ccurry350@vivendi.com",
        "phone": "350-377-0581",
        "socMedia": {
            "google": "ccurry@google.com"
        }
    },
    "login": {
        "username": "ccurry",
        "oauth2": "ccurry@google.com",
        "password": "$2y$10$GhVB4.jLh2Klhn873eLNG.pws9j8W..uhC\/.W2ouH.k3BwxLlKWEe"
    },
    "otherContact": {
        "emails": [
            "ccurry350@icom.com",
            "ccurry350@telus.com"
        ],
        "phoneNumbers": [
            "350-897-6600",
            "350-843-6526"
        ],
        "socMedias": [
            {
                "google": "ccurry@google.com"
            },
            {
                "twitter": "ccurry@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-09-22"
    }
});
db.users.insertOne(
{
    "userKey": "OMARALVA4791",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Omar",
        "middle": null,
        "last": "Alvarez",
        "suffix": null
    },
    "address": {
        "streetAddress": "9624 Long Mountain Street",
        "buildingName": "Building 64",
        "floor": 8,
        "roomAptCondoFlat": null,
        "city": "Z\u00fcrich",
        "locality1": "ZH",
        "locality2": "Bezirk Z\u00fcrich",
        "country": "CH",
        "postalCode": "8024",
        "geoSpatial": [
            "8.5307",
            "47.3828"
        ]
    },
    "contact": {
        "email": "oalvarez351@ptcl.com",
        "phone": "351-946-4791",
        "socMedia": []
    },
    "login": {
        "username": "oalvarez",
        "oauth2": null,
        "password": "$2y$10$X9xbTsjkTGIF1CdVWjCOgufIla5tcexQGe825T08.t7cCmth5upui"
    },
    "otherContact": {
        "emails": [
            "oalvarez351@relcom.com",
            "oalvarez351@vivendi.com",
            "oalvarez351@airtel.com"
        ],
        "phoneNumbers": [
            "351-247-6166",
            "351-478-2861",
            "351-416-6983"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-01-17"
    }
});
db.users.insertOne(
{
    "userKey": "MINAREYN3400",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Mina",
        "middle": "H",
        "last": "Reyna",
        "suffix": null
    },
    "address": {
        "streetAddress": "1626 Big Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Icard",
        "locality1": "NC",
        "locality2": "Burke",
        "country": "US",
        "postalCode": "28666",
        "geoSpatial": [
            "-81.4706",
            "35.7274"
        ]
    },
    "contact": {
        "email": "mreyna352@telekom.com",
        "phone": "352-269-3400",
        "socMedia": {
            "google": "mreyna@google.com"
        }
    },
    "login": {
        "username": "mreyna",
        "oauth2": "mreyna@google.com",
        "password": "$2y$10$6JDAG.AREaSBNDKQOadecOXaM7F4EZhpJ0rdNDVlzb6AYuVW8qDxW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-02-08"
    }
});
db.users.insertOne(
{
    "userKey": "TAYLPERK4050",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Taylor",
        "middle": "L",
        "last": "Perkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "9840 Long Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Smith\u2019s",
        "locality1": "Smith\u2019s Parish",
        "locality2": "Smith\u2019s Parish",
        "country": "BM",
        "postalCode": "FL 02",
        "geoSpatial": [
            "-64.7411",
            "32.3264"
        ]
    },
    "contact": {
        "email": "tperkins353@centurylink.com",
        "phone": "353-469-4050",
        "socMedia": {
            "twitter": "tperkins@twitter.com"
        }
    },
    "login": {
        "username": "tperkins",
        "oauth2": "tperkins@twitter.com",
        "password": "$2y$10$DlmCHhUqN79bXCH8gPxoVOSmVkh7\/lxwvE4G4CgvCuCMxEyhbPJWi"
    },
    "otherContact": {
        "emails": [
            "tperkins353@daxnet.com",
            "tperkins353@telus.com"
        ],
        "phoneNumbers": [
            "353-934-6316",
            "353-874-3899"
        ],
        "socMedias": [
            {
                "twitter": "tperkins@twitter.com"
            },
            {
                "facebook": "tperkins@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-03-05"
    }
});
db.users.insertOne(
{
    "userKey": "DANNCART9752",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Dannette",
        "middle": null,
        "last": "Carter",
        "suffix": null
    },
    "address": {
        "streetAddress": "2417 Little Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "48",
        "city": "Tildag",
        "locality1": "Garhwa",
        "locality2": "Garhwa",
        "country": "IN",
        "postalCode": "822114",
        "geoSpatial": [
            "83.8842",
            "24.1283"
        ]
    },
    "contact": {
        "email": "dcarter354@tata.com",
        "phone": "354-185-9752",
        "socMedia": []
    },
    "login": {
        "username": "dcarter",
        "oauth2": null,
        "password": "$2y$10$JzYir4vvVqVs.lQxvpCdrOCFc8qFtnexs1Cyfog3RKoq93iHN5QFe"
    },
    "otherContact": {
        "emails": [
            "dcarter354@airtel.com",
            "dcarter354@telesystems.com"
        ],
        "phoneNumbers": [
            "354-125-5811",
            "354-967-4881"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1994-07-14"
    }
});
db.users.insertOne(
{
    "userKey": "TIMOSHAN0758",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Nonstop Associates Ltd",
    "name": {
        "title": "Mr",
        "first": "Timothy",
        "middle": "R",
        "last": "Shannon",
        "suffix": null
    },
    "address": {
        "streetAddress": "4500 Little River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Draix",
        "locality1": "Arrondissement de Digne",
        "locality2": "Alpes-de-Haute-Provence",
        "country": "FR",
        "postalCode": "04420",
        "geoSpatial": [
            "6.3473",
            "44.1376"
        ]
    },
    "contact": {
        "email": "tshannon355@belgacom.com",
        "phone": "355-770-0758",
        "socMedia": {
            "google": "tshannon@google.com"
        }
    },
    "login": {
        "username": "tshannon",
        "oauth2": "tshannon@google.com",
        "password": "$2y$10$tEHUfs5wVjbSCOwfpJ0haO\/EWUn5VLtXT1Dd8LwMYEz67Cu329AZe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-08-25"
    }
});
db.users.insertOne(
{
    "userKey": "HORABERG5773",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Horace",
        "middle": "E",
        "last": "Berg",
        "suffix": null
    },
    "address": {
        "streetAddress": "243 Red Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "New Westminster Northeast",
        "locality1": "BC",
        "locality2": "New Westminster ",
        "country": "CA",
        "postalCode": "V3L",
        "geoSpatial": [
            "-122.8998",
            "49.2201"
        ]
    },
    "contact": {
        "email": "hberg356@orange.com",
        "phone": "356-116-5773",
        "socMedia": {
            "twitter": "hberg@twitter.com"
        }
    },
    "login": {
        "username": "hberg",
        "oauth2": "hberg@twitter.com",
        "password": "$2y$10$ZSlN4MiJRLMTyOSH\/6IJF.UQ0HbnrHsFFEoVLDE8UK0Z3FSSZCJ\/6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-09-05"
    }
});
db.users.insertOne(
{
    "userKey": "DAVIBAUT0208",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Davina",
        "middle": null,
        "last": "Bautista",
        "suffix": null
    },
    "address": {
        "streetAddress": "4904 Green Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Joane",
        "locality1": "Joane",
        "locality2": "Vila Nova de Famalic\u00e3o",
        "country": "PT",
        "postalCode": "4770-259",
        "geoSpatial": [
            "-8.4085",
            "41.4391"
        ]
    },
    "contact": {
        "email": "dbautist357@relcom.com",
        "phone": "357-105-0208",
        "socMedia": []
    },
    "login": {
        "username": "dbautist",
        "oauth2": null,
        "password": "$2y$10$guI9RqihZ11IEnzfcxfDTe3..1aAGtU1VLaeGjWFwuvWM.zEg\/Gsa"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-12-12"
    }
});
db.users.insertOne(
{
    "userKey": "JACOWILL1378",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Jacob",
        "middle": "K",
        "last": "Williamson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2207 Red Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Leonardtown",
        "locality1": "MD",
        "locality2": "St. Mary's",
        "country": "US",
        "postalCode": "20650",
        "geoSpatial": [
            "-76.638",
            "38.2774"
        ]
    },
    "contact": {
        "email": "jwilliam358@bt.com",
        "phone": "358-182-1378",
        "socMedia": {
            "skype": "jwilliam@skype.com"
        }
    },
    "login": {
        "username": "jwilliam",
        "oauth2": "jwilliam@skype.com",
        "password": "$2y$10$WbsHI1Uzed3mRbxM9u2oCegm3I.E6NgVcWO7cGgn8ZNs6Ds.C4Ki6"
    },
    "otherContact": {
        "emails": [
            "jwilliam358@access.com",
            "jwilliam358@mtn.com"
        ],
        "phoneNumbers": [
            "358-895-2459",
            "358-375-4261"
        ],
        "socMedias": [
            {
                "line": "jwilliam@line.com"
            },
            {
                "facebook": "jwilliam@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-09-08"
    }
});
db.users.insertOne(
{
    "userKey": "MILDCASE6338",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Mildred",
        "middle": "K",
        "last": "Case",
        "suffix": null
    },
    "address": {
        "streetAddress": "8556 Short Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Winnipeg (Centennial)",
        "locality1": "MB",
        "locality2": "Winnipeg",
        "country": "CA",
        "postalCode": "R3A",
        "geoSpatial": [
            "-97.1489",
            "49.9038"
        ]
    },
    "contact": {
        "email": "mcase359@nordnet.com",
        "phone": "359-404-6338",
        "socMedia": {
            "linkedin": "mcase@linkedin.com"
        }
    },
    "login": {
        "username": "mcase",
        "oauth2": "mcase@linkedin.com",
        "password": "$2y$10$E4b0Hy71jipAc.y1uUe39eJLeVT92QkP\/p1qF3YB5gM7Uu8FJ0GSW"
    },
    "otherContact": {
        "emails": [
            "mcase359@belgacom.com",
            "mcase359@att.com",
            "mcase359@ooredoo.com"
        ],
        "phoneNumbers": [
            "359-888-2870",
            "359-117-9595",
            "359-464-7869"
        ],
        "socMedias": [
            {
                "google": "mcase@google.com"
            },
            {
                "google": "mcase@google.com"
            },
            {
                "skype": "mcase@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-02-16"
    }
});
db.users.insertOne(
{
    "userKey": "FLORFLYN7183",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Ninety Nine Percenter Trust",
    "name": {
        "title": null,
        "first": "Florencio",
        "middle": null,
        "last": "Flynn",
        "suffix": null
    },
    "address": {
        "streetAddress": "1244 Green Stream Drive",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": "B3",
        "city": "Aulton",
        "locality1": "Scotland",
        "locality2": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB52",
        "geoSpatial": [
            "-2.5935",
            "57.3403"
        ]
    },
    "contact": {
        "email": "fflynn360@ui.com",
        "phone": "360-185-7183",
        "socMedia": []
    },
    "login": {
        "username": "fflynn",
        "oauth2": null,
        "password": "$2y$10$hL17xKvBeOqovthXmbJ2a.7KU5s2JxKUjQ78iD6DWBd.R.jZ46sri"
    },
    "otherContact": {
        "emails": [
            "fflynn360@zain.com"
        ],
        "phoneNumbers": [
            "360-318-4195"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-04-04"
    }
});
db.users.insertOne(
{
    "userKey": "ARTHVELA8339",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Arthur",
        "middle": "H",
        "last": "Velasquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3182 Green Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Klis\u00edn",
        "locality1": "P\u00edsek",
        "locality2": "P\u00edsek",
        "country": "CZ",
        "postalCode": "399 01",
        "geoSpatial": [
            "14.3333",
            "49.5"
        ]
    },
    "contact": {
        "email": "avelasqu361@ote.com",
        "phone": "361-466-8339",
        "socMedia": {
            "facebook": "avelasqu@facebook.com"
        }
    },
    "login": {
        "username": "avelasqu",
        "oauth2": "avelasqu@facebook.com",
        "password": "$2y$10$PkbsNKH1jhH2.utQo6aAo.\/OZrwso.3sKO73MdAqRDwX4jsZXs.6W"
    },
    "otherContact": {
        "emails": [
            "avelasqu361@kpn.com",
            "avelasqu361@sprint.com",
            "avelasqu361@orange.com"
        ],
        "phoneNumbers": [
            "361-841-5011",
            "361-640-8826",
            "361-281-4600"
        ],
        "socMedias": [
            {
                "skype": "avelasqu@skype.com"
            },
            {
                "line": "avelasqu@line.com"
            },
            {
                "google": "avelasqu@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-01-26"
    }
});
db.users.insertOne(
{
    "userKey": "RONNRILE2337",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Ronny",
        "middle": "N",
        "last": "Riley",
        "suffix": null
    },
    "address": {
        "streetAddress": "9766 Long River Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Freemans",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2259",
        "geoSpatial": [
            "151.6012",
            "-33.2063"
        ]
    },
    "contact": {
        "email": "rriley362@kpn.com",
        "phone": "362-713-2337",
        "socMedia": {
            "line": "rriley@line.com"
        }
    },
    "login": {
        "username": "rriley",
        "oauth2": "rriley@line.com",
        "password": "$2y$10$C0t6dPfcG4D3UCVB4r1yLe2WV7PaLitoM6q4I4MxxdFlZ.J8qSoSm"
    },
    "otherContact": {
        "emails": [
            "rriley362@bifty.com"
        ],
        "phoneNumbers": [
            "362-345-3248"
        ],
        "socMedias": [
            {
                "google": "rriley@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-04-27"
    }
});
db.users.insertOne(
{
    "userKey": "SOMMSILV9800",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Sommer",
        "middle": null,
        "last": "Silva",
        "suffix": null
    },
    "address": {
        "streetAddress": "4683 Green Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hollola",
        "locality1": "Hollola",
        "locality2": "Lahti",
        "country": "FI",
        "postalCode": "15860",
        "geoSpatial": [
            "25.5346",
            "60.9832"
        ]
    },
    "contact": {
        "email": "ssilva363@rogers.com",
        "phone": "363-498-9800",
        "socMedia": []
    },
    "login": {
        "username": "ssilva",
        "oauth2": null,
        "password": "$2y$10$ksYucj\/pLyqmvMVFklTdyOKHjaBx8LkQAKjYKITkrNvwrIAPBFHn."
    },
    "otherContact": {
        "emails": [
            "ssilva363@orange.com",
            "ssilva363@centurylink.com",
            "ssilva363@sprint.com"
        ],
        "phoneNumbers": [
            "363-743-6329",
            "363-783-1737",
            "363-133-2056"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-09-18"
    }
});
db.users.insertOne(
{
    "userKey": "EVONFIEL7401",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Evonne",
        "middle": "L",
        "last": "Fields",
        "suffix": null
    },
    "address": {
        "streetAddress": "919 Blue Mound Road",
        "buildingName": "Building DB",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Red Rocks",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2577",
        "geoSpatial": [
            "150.3835",
            "-34.6192"
        ]
    },
    "contact": {
        "email": "efields364@vimpelcom.com",
        "phone": "364-962-7401",
        "socMedia": {
            "facebook": "efields@facebook.com"
        }
    },
    "login": {
        "username": "efields",
        "oauth2": "efields@facebook.com",
        "password": "$2y$10$.v4NvsYnHa95ZEtqKD1Gjekt3UN9QnbZbpb0uoqloedLH4eoSmCje"
    },
    "otherContact": {
        "emails": [
            "efields364@orstom.com",
            "efields364@cubenet.com"
        ],
        "phoneNumbers": [
            "364-883-1085",
            "364-744-7846"
        ],
        "socMedias": [
            {
                "google": "efields@google.com"
            },
            {
                "google": "efields@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-04-04"
    }
});
db.users.insertOne(
{
    "userKey": "IRVIDAVI5246",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Industrious Partners",
    "name": {
        "title": "Mr",
        "first": "Irvin",
        "middle": "J",
        "last": "Davis",
        "suffix": null
    },
    "address": {
        "streetAddress": "9095 Winding Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0414\u0436\u0435\u043b\u0435\u043f\u0441\u043a\u043e \/ Dzhelepsko",
        "locality1": "KRZ",
        "locality2": "\u041c\u043e\u043c\u0447\u0438\u043b\u0433\u0440\u0430\u0434 \/ Momchilgrad",
        "country": "BG",
        "postalCode": "6824",
        "geoSpatial": [
            "25.5333",
            "41.5"
        ]
    },
    "contact": {
        "email": "idavis365@softbank.com",
        "phone": "365-699-5246",
        "socMedia": {
            "twitter": "idavis@twitter.com"
        }
    },
    "login": {
        "username": "idavis",
        "oauth2": "idavis@twitter.com",
        "password": "$2y$10$NzWWNfFibd5duRm4VI2XXO1rqMiVtBWrbB7No7Qof\/WbaMpB4Ghyq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-06-06"
    }
});
db.users.insertOne(
{
    "userKey": "CHRIHARV7339",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Christy",
        "middle": null,
        "last": "Harvey",
        "suffix": null
    },
    "address": {
        "streetAddress": "5411 Short Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "CE",
        "city": "Jacksonville",
        "locality1": "IL",
        "locality2": "Morgan",
        "country": "US",
        "postalCode": "62650",
        "geoSpatial": [
            "-90.229",
            "39.7339"
        ]
    },
    "contact": {
        "email": "charvey366@maxcomm.com",
        "phone": "366-697-7339",
        "socMedia": []
    },
    "login": {
        "username": "charvey",
        "oauth2": null,
        "password": "$2y$10$6CyV0hzLPtcP1xWkB.4B2.MxGHtqPxrZkX8wRTW3itOupoGsSSt22"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-01-30"
    }
});
db.users.insertOne(
{
    "userKey": "GWENPARS0735",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Gwen",
        "middle": "L",
        "last": "Parsons",
        "suffix": null
    },
    "address": {
        "streetAddress": "3904 Green River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Degsni\u0173 k.",
        "locality1": "\u0160al\u010dinink\u0173 r. sav.",
        "locality2": "\u0160al\u010dinink\u0173 r. sav.",
        "country": "LT",
        "postalCode": "17047",
        "geoSpatial": [
            "25.2933",
            "54.3133"
        ]
    },
    "contact": {
        "email": "gparsons367@rogers.com",
        "phone": "367-705-0735",
        "socMedia": {
            "twitter": "gparsons@twitter.com"
        }
    },
    "login": {
        "username": "gparsons",
        "oauth2": "gparsons@twitter.com",
        "password": "$2y$10$ZQCx9V39hY30mXbBLSXJluBd3jK79WxJnNdMMZsiwNTYr9GjHIPbK"
    },
    "otherContact": {
        "emails": [
            "gparsons367@megafon.com",
            "gparsons367@vivendi.com"
        ],
        "phoneNumbers": [
            "367-759-4484",
            "367-199-2714"
        ],
        "socMedias": [
            {
                "linkedin": "gparsons@linkedin.com"
            },
            {
                "twitter": "gparsons@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-09-17"
    }
});
db.users.insertOne(
{
    "userKey": "RACHWILL3229",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Rachelle",
        "middle": "L",
        "last": "Willis",
        "suffix": null
    },
    "address": {
        "streetAddress": "3853 Big Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Milton",
        "locality1": "ON",
        "locality2": "Ontario",
        "country": "CA",
        "postalCode": "L9T",
        "geoSpatial": [
            "-79.884",
            "43.5148"
        ]
    },
    "contact": {
        "email": "rwillis368@orstom.com",
        "phone": "368-759-3229",
        "socMedia": {
            "linkedin": "rwillis@linkedin.com"
        }
    },
    "login": {
        "username": "rwillis",
        "oauth2": "rwillis@linkedin.com",
        "password": "$2y$10$5gOb997.I3JKWC6ujQjlHeaOv8Xbw1Byd1haH6ua0kmKfPGwby7xO"
    },
    "otherContact": {
        "emails": [
            "rwillis368@safaricom.com",
            "rwillis368@orstom.com"
        ],
        "phoneNumbers": [
            "368-995-1947",
            "368-796-8977"
        ],
        "socMedias": [
            {
                "facebook": "rwillis@facebook.com"
            },
            {
                "google": "rwillis@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-03-16"
    }
});
db.users.insertOne(
{
    "userKey": "JOANPONC8958",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Joan",
        "middle": null,
        "last": "Ponce",
        "suffix": null
    },
    "address": {
        "streetAddress": "4928 Little Canyon Ride",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": null,
        "city": "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 2",
        "locality1": "\u041b\u0415\u041d\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality2": "\u041b\u0415\u041d\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "301132",
        "geoSpatial": [
            "37.714",
            "54.9444"
        ]
    },
    "contact": {
        "email": "jponce369@kpn.com",
        "phone": "369-500-8958",
        "socMedia": []
    },
    "login": {
        "username": "jponce",
        "oauth2": null,
        "password": "$2y$10$U.cy1xNyzReW4vgsPw8yhO7dwdzOPdZQc2AfWsAZuiskHhi4KmrAq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-06-29"
    }
});
db.users.insertOne(
{
    "userKey": "DANNHANC9631",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Powerhouse Business Inc",
    "name": {
        "title": "Mr",
        "first": "Danny",
        "middle": "O",
        "last": "Hancock",
        "suffix": null
    },
    "address": {
        "streetAddress": "8201 Long Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Greta Main",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2325",
        "geoSpatial": [
            "151.3082",
            "-32.88"
        ]
    },
    "contact": {
        "email": "dhancock370@movil.com",
        "phone": "370-130-9631",
        "socMedia": {
            "line": "dhancock@line.com"
        }
    },
    "login": {
        "username": "dhancock",
        "oauth2": "dhancock@line.com",
        "password": "$2y$10$9NBXs4te6ZoX48WTh\/t8Vu.55nl8bngFH8GezhQk.ww8\/JxKERxQu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-02-09"
    }
});
db.users.insertOne(
{
    "userKey": "REYNFARM3194",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Reynalda",
        "middle": "T",
        "last": "Farmer",
        "suffix": null
    },
    "address": {
        "streetAddress": "6567 Green Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ozoli",
        "locality1": "Liez\u0113res pag.",
        "locality2": "Liez\u0113res pag.",
        "country": "LV",
        "postalCode": "LV-4884",
        "geoSpatial": [
            "26.0544",
            "56.9825"
        ]
    },
    "contact": {
        "email": "rfarmer371@econnect.com",
        "phone": "371-162-3194",
        "socMedia": {
            "line": "rfarmer@line.com"
        }
    },
    "login": {
        "username": "rfarmer",
        "oauth2": "rfarmer@line.com",
        "password": "$2y$10$mQNaHZUfjjA31K5IdYACrOs5zrkz4V9kUVcQwoJItDqjmjaRDip3a"
    },
    "otherContact": {
        "emails": [
            "rfarmer371@orange.com",
            "rfarmer371@mtn.com"
        ],
        "phoneNumbers": [
            "371-443-2698",
            "371-236-8046"
        ],
        "socMedias": [
            {
                "skype": "rfarmer@skype.com"
            },
            {
                "twitter": "rfarmer@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-11-18"
    }
});
db.users.insertOne(
{
    "userKey": "LUANSOLO4920",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Luana",
        "middle": null,
        "last": "Solomon",
        "suffix": null
    },
    "address": {
        "streetAddress": "1063 Green Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C3",
        "city": "Downtown Montreal East",
        "locality1": "QC",
        "locality2": "Montreal",
        "country": "CA",
        "postalCode": "H3B",
        "geoSpatial": [
            "-73.5684",
            "45.5005"
        ]
    },
    "contact": {
        "email": "lsolomon372@econnect.com",
        "phone": "372-624-4920",
        "socMedia": []
    },
    "login": {
        "username": "lsolomon",
        "oauth2": null,
        "password": "$2y$10$wz\/.cqOXcJVVX8NbOxTSteCvatM8zW.mPl0ajHY9L7hXCHOdvql8m"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-12-24"
    }
});
db.users.insertOne(
{
    "userKey": "GWENLOWE6073",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Gwenda",
        "middle": "O",
        "last": "Lowe",
        "suffix": null
    },
    "address": {
        "streetAddress": "969 Short Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Horn\u00ed Folmava",
        "locality1": "Doma\u017elice",
        "locality2": "Doma\u017elice",
        "country": "CZ",
        "postalCode": "345 32",
        "geoSpatial": [
            "12.85",
            "49.35"
        ]
    },
    "contact": {
        "email": "glowe373@sprint.com",
        "phone": "373-315-6073",
        "socMedia": {
            "google": "glowe@google.com"
        }
    },
    "login": {
        "username": "glowe",
        "oauth2": "glowe@google.com",
        "password": "$2y$10$gSyn8HedSmVVlISQ3iKE0uFL8XUcsLeAZcSSDLZeJGfda3w5p0mcC"
    },
    "otherContact": {
        "emails": [
            "glowe373@swisscom.com",
            "glowe373@seednet.com"
        ],
        "phoneNumbers": [
            "373-472-8047",
            "373-326-3063"
        ],
        "socMedias": [
            {
                "linkedin": "glowe@linkedin.com"
            },
            {
                "skype": "glowe@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-11-13"
    }
});
db.users.insertOne(
{
    "userKey": "MICHDECK2665",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Michael",
        "middle": "S",
        "last": "Decker",
        "suffix": null
    },
    "address": {
        "streetAddress": "2557 Blue Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Westview",
        "locality1": "KY",
        "locality2": "Breckinridge",
        "country": "US",
        "postalCode": "40178",
        "geoSpatial": [
            "-86.4273",
            "37.6792"
        ]
    },
    "contact": {
        "email": "mdecker374@megafon.com",
        "phone": "374-079-2665",
        "socMedia": {
            "line": "mdecker@line.com"
        }
    },
    "login": {
        "username": "mdecker",
        "oauth2": "mdecker@line.com",
        "password": "$2y$10$jq9Zpny7MecIDGvlQxKd3un4nRDAHBwaW4K9aZmiZUD2bAq6o3XPq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-01-06"
    }
});
db.users.insertOne(
{
    "userKey": "DELCKIRK3377",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Trust Company",
    "name": {
        "title": null,
        "first": "Delcie",
        "middle": null,
        "last": "Kirk",
        "suffix": null
    },
    "address": {
        "streetAddress": "9901 Short Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nikkocho",
        "locality1": "Fuchu Shi",
        "locality2": "Fuchu Shi",
        "country": "JP",
        "postalCode": "183-0044",
        "geoSpatial": [
            "139.5322",
            "35.7363"
        ]
    },
    "contact": {
        "email": "dkirk375@singtel.com",
        "phone": "375-743-3377",
        "socMedia": []
    },
    "login": {
        "username": "dkirk",
        "oauth2": null,
        "password": "$2y$10$k8Hvkgi1J58uTCdDAGT0We2z1m3gMlFkpRlbv5LuBZ1WzqL.S2P6y"
    },
    "otherContact": {
        "emails": [
            "dkirk375@att.com",
            "dkirk375@icom.com",
            "dkirk375@telecom.com"
        ],
        "phoneNumbers": [
            "375-796-1925",
            "375-917-5362",
            "375-742-8385"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-03-13"
    }
});
db.users.insertOne(
{
    "userKey": "AFTORIVE2038",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Afton",
        "middle": "I",
        "last": "Rivers",
        "suffix": null
    },
    "address": {
        "streetAddress": "800 Short Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Allawah",
        "locality1": "NSW",
        "locality2": "ST GEORGE",
        "country": "AU",
        "postalCode": "2218",
        "geoSpatial": [
            "151.1144",
            "-33.9726"
        ]
    },
    "contact": {
        "email": "arivers376@orstom.com",
        "phone": "376-487-2038",
        "socMedia": {
            "facebook": "arivers@facebook.com"
        }
    },
    "login": {
        "username": "arivers",
        "oauth2": "arivers@facebook.com",
        "password": "$2y$10$ff40G59GtWKvcV8MoRkYmOQbjGcagp7rQQ\/QhKsJOSRH2JKU.bVg6"
    },
    "otherContact": {
        "emails": [
            "arivers376@telus.com",
            "arivers376@ui.com",
            "arivers376@telecomitalia.com"
        ],
        "phoneNumbers": [
            "376-563-3677",
            "376-656-1490",
            "376-711-0911"
        ],
        "socMedias": [
            {
                "facebook": "arivers@facebook.com"
            },
            {
                "linkedin": "arivers@linkedin.com"
            },
            {
                "line": "arivers@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-04-26"
    }
});
db.users.insertOne(
{
    "userKey": "RUSSNIEL2908",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Russ",
        "middle": "Z",
        "last": "Nielsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "8418 Winding Woods Circle",
        "buildingName": "Building BC",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Uni\u00f3n",
        "locality1": "La Uni\u00f3n",
        "locality2": "Provincia del Ranco",
        "country": "CL",
        "postalCode": "5220000",
        "geoSpatial": [
            "-73.2223",
            "-40.2013"
        ]
    },
    "contact": {
        "email": "rnielsen377@vodafone.com",
        "phone": "377-839-2908",
        "socMedia": {
            "google": "rnielsen@google.com"
        }
    },
    "login": {
        "username": "rnielsen",
        "oauth2": "rnielsen@google.com",
        "password": "$2y$10$gO20NB8b\/9hYq9Oao4e02u1OhsUSsL2iLtjJQ.PxVbTnB37JT47zK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-12-24"
    }
});
db.users.insertOne(
{
    "userKey": "LANICHEN8312",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Lanita",
        "middle": null,
        "last": "Chen",
        "suffix": null
    },
    "address": {
        "streetAddress": "5489 Red Tree Circle",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": "76",
        "city": "The Laurels",
        "locality1": "England",
        "locality2": "Norfolk",
        "country": "GB",
        "postalCode": "NR14",
        "geoSpatial": [
            "1.2879",
            "52.5954"
        ]
    },
    "contact": {
        "email": "lchen378@centurylink.com",
        "phone": "378-479-8312",
        "socMedia": []
    },
    "login": {
        "username": "lchen",
        "oauth2": null,
        "password": "$2y$10$VXbawPuxV7wXBN\/8Z9ORHusTCiTyeRkvmw3MJPD5\/GtkG5Sm1DLdm"
    },
    "otherContact": {
        "emails": [
            "lchen378@millicom.com",
            "lchen378@unicom.com"
        ],
        "phoneNumbers": [
            "378-979-9387",
            "378-176-7086"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-11-14"
    }
});
db.users.insertOne(
{
    "userKey": "TADWALL4514",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Tad",
        "middle": "Z",
        "last": "Wallace",
        "suffix": null
    },
    "address": {
        "streetAddress": "8368 Green Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saksun",
        "locality1": null,
        "locality2": null,
        "country": "FO",
        "postalCode": "436",
        "geoSpatial": [
            "-7.1667",
            "62.25"
        ]
    },
    "contact": {
        "email": "twallace379@etisalat.com",
        "phone": "379-520-4514",
        "socMedia": {
            "line": "twallace@line.com"
        }
    },
    "login": {
        "username": "twallace",
        "oauth2": "twallace@line.com",
        "password": "$2y$10$jXBKGq1Bj5bwd.nBe4gTpegVIAle2xha4fZeQpjqf7PnwfB4gsZIW"
    },
    "otherContact": {
        "emails": [
            "twallace379@seednet.com",
            "twallace379@movil.com",
            "twallace379@apicnet.com"
        ],
        "phoneNumbers": [
            "379-128-2737",
            "379-654-3088",
            "379-263-4644"
        ],
        "socMedias": [
            {
                "twitter": "twallace@twitter.com"
            },
            {
                "twitter": "twallace@twitter.com"
            },
            {
                "linkedin": "twallace@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-12-22"
    }
});
db.users.insertOne(
{
    "userKey": "WINSDONO7388",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Leisure Partners LLC",
    "name": {
        "title": "Mr",
        "first": "Winston",
        "middle": "Z",
        "last": "Donovan",
        "suffix": null
    },
    "address": {
        "streetAddress": "4655 Little Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Coverdale",
        "locality1": "NB",
        "locality2": "New Brunswick",
        "country": "CA",
        "postalCode": "E1J",
        "geoSpatial": [
            "-64.8483",
            "45.9976"
        ]
    },
    "contact": {
        "email": "wdonovan380@belgacom.com",
        "phone": "380-624-7388",
        "socMedia": {
            "facebook": "wdonovan@facebook.com"
        }
    },
    "login": {
        "username": "wdonovan",
        "oauth2": "wdonovan@facebook.com",
        "password": "$2y$10$g0g8XkFufYrHMuOnugGCRO.5oPLye8T9Vw2g7kH9OE99jYUni.twu"
    },
    "otherContact": {
        "emails": [
            "wdonovan380@kpn.com"
        ],
        "phoneNumbers": [
            "380-729-7122"
        ],
        "socMedias": [
            {
                "facebook": "wdonovan@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-06-03"
    }
});
db.users.insertOne(
{
    "userKey": "LORETAYL3670",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Lorenzo",
        "middle": null,
        "last": "Taylor",
        "suffix": null
    },
    "address": {
        "streetAddress": "9684 Short Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Viby Sj\u00e6lland",
        "locality1": "K\u00f8ge Kommune",
        "locality2": "K\u00f8ge Kommune",
        "country": "DK",
        "postalCode": "4130",
        "geoSpatial": [
            "12.0239",
            "55.5487"
        ]
    },
    "contact": {
        "email": "ltaylor381@ui.com",
        "phone": "381-243-3670",
        "socMedia": []
    },
    "login": {
        "username": "ltaylor",
        "oauth2": null,
        "password": "$2y$10$J0o8eqYdYVkm.JyzOeqjLOTlinWfRJoSxuhcC0fNKaTsZ8JBGfCX2"
    },
    "otherContact": {
        "emails": [
            "ltaylor381@daxnet.com",
            "ltaylor381@rogers.com",
            "ltaylor381@vivendi.com"
        ],
        "phoneNumbers": [
            "381-698-8854",
            "381-784-6635",
            "381-595-8952"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-11-23"
    }
});
db.users.insertOne(
{
    "userKey": "TIMRICH2163",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Tim",
        "middle": "B",
        "last": "Richard",
        "suffix": null
    },
    "address": {
        "streetAddress": "5793 Short Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Blackfalds",
        "locality1": "AB",
        "locality2": "Alberta",
        "country": "CA",
        "postalCode": "T4M",
        "geoSpatial": [
            "-113.7853",
            "52.3834"
        ]
    },
    "contact": {
        "email": "trichard382@lookdata.com",
        "phone": "382-895-2163",
        "socMedia": {
            "skype": "trichard@skype.com"
        }
    },
    "login": {
        "username": "trichard",
        "oauth2": "trichard@skype.com",
        "password": "$2y$10$nNX1ik6.yBKA56JgYuQWRutobGA9JVdMBzEB4wF0h3VsQJQoJ2V86"
    },
    "otherContact": {
        "emails": [
            "trichard382@sprint.com",
            "trichard382@telenor.com"
        ],
        "phoneNumbers": [
            "382-020-0265",
            "382-960-2860"
        ],
        "socMedias": [
            {
                "line": "trichard@line.com"
            },
            {
                "line": "trichard@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-03-22"
    }
});
db.users.insertOne(
{
    "userKey": "WESTPAYN7373",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Weston",
        "middle": "E",
        "last": "Payne",
        "suffix": null
    },
    "address": {
        "streetAddress": "4553 Big Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Si\u0121\u0121iewi",
        "locality1": "Is-Si\u0121\u0121iewi",
        "locality2": "Is-Si\u0121\u0121iewi",
        "country": "MT",
        "postalCode": "SGW",
        "geoSpatial": [
            "14.4264",
            "35.8486"
        ]
    },
    "contact": {
        "email": "wpayne383@cerist.com",
        "phone": "383-465-7373",
        "socMedia": {
            "line": "wpayne@line.com"
        }
    },
    "login": {
        "username": "wpayne",
        "oauth2": "wpayne@line.com",
        "password": "$2y$10$5dHxs5QJ48Xk4mV6hmCdk.abHmDxvff6QxBC5Zx6YnScJ0ftYI0Ca"
    },
    "otherContact": {
        "emails": [
            "wpayne383@uunet.com"
        ],
        "phoneNumbers": [
            "383-211-5777"
        ],
        "socMedias": [
            {
                "linkedin": "wpayne@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-02-14"
    }
});
db.users.insertOne(
{
    "userKey": "GIOVHARR7821",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Giovanna",
        "middle": null,
        "last": "Harrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "1756 Blue Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "DD",
        "city": "Layer Marney",
        "locality1": "England",
        "locality2": "Essex",
        "country": "GB",
        "postalCode": "CO5",
        "geoSpatial": [
            "0.7946",
            "51.8287"
        ]
    },
    "contact": {
        "email": "gharrell384@icom.com",
        "phone": "384-487-7821",
        "socMedia": []
    },
    "login": {
        "username": "gharrell",
        "oauth2": null,
        "password": "$2y$10$a4zztQVmPaNryP9vl\/ZkROW1cEjFbPM0XqNIyq9FXnXixlBu5aGTW"
    },
    "otherContact": {
        "emails": [
            "gharrell384@ntt.com",
            "gharrell384@telecom.com",
            "gharrell384@econnect.com"
        ],
        "phoneNumbers": [
            "384-539-9069",
            "384-749-4458",
            "384-423-8956"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-07-19"
    }
});
db.users.insertOne(
{
    "userKey": "LOREBARA1165",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Round the Clock Associates Company",
    "name": {
        "title": "Mr",
        "first": "Lorenzo",
        "middle": "G",
        "last": "Barajas",
        "suffix": null
    },
    "address": {
        "streetAddress": "4619 Red Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Jos\u00e9 de la Monta\u00f1a",
        "locality1": "San Jos\u00e9 de la Monta\u00f1a",
        "locality2": "Barva",
        "country": "CR",
        "postalCode": "40206",
        "geoSpatial": [
            "-84.1106",
            "10.0955"
        ]
    },
    "contact": {
        "email": "lbarajas385@eunet.com",
        "phone": "385-304-1165",
        "socMedia": {
            "facebook": "lbarajas@facebook.com"
        }
    },
    "login": {
        "username": "lbarajas",
        "oauth2": "lbarajas@facebook.com",
        "password": "$2y$10$LWh\/12sUjO0iR45VCYV.E.ooDgO\/H1hEsS8goCiZMXHh\/jtA9WJlK"
    },
    "otherContact": {
        "emails": [
            "lbarajas385@centurylink.com",
            "lbarajas385@nordnet.com",
            "lbarajas385@openworld.com"
        ],
        "phoneNumbers": [
            "385-793-0925",
            "385-432-9644",
            "385-562-2167"
        ],
        "socMedias": [
            {
                "linkedin": "lbarajas@linkedin.com"
            },
            {
                "skype": "lbarajas@skype.com"
            },
            {
                "skype": "lbarajas@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-06-04"
    }
});
db.users.insertOne(
{
    "userKey": "ANDRBEIL1993",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Andrea",
        "middle": "A",
        "last": "Beil",
        "suffix": null
    },
    "address": {
        "streetAddress": "6607 Red Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lisman",
        "locality1": "AL",
        "locality2": "Choctaw",
        "country": "US",
        "postalCode": "36912",
        "geoSpatial": [
            "-88.3234",
            "32.2177"
        ]
    },
    "contact": {
        "email": "abeil386@uunet.com",
        "phone": "386-726-1993",
        "socMedia": {
            "facebook": "abeil@facebook.com"
        }
    },
    "login": {
        "username": "abeil",
        "oauth2": "abeil@facebook.com",
        "password": "$2y$10$6VqjOcGxbBf4dyLkKMOavuEE.LLn.rSyJ.hf4pihf3Db2CqEEuhbC"
    },
    "otherContact": {
        "emails": [
            "abeil386@lookdata.com",
            "abeil386@telkom.com",
            "abeil386@relcom.com"
        ],
        "phoneNumbers": [
            "386-774-4253",
            "386-790-2411",
            "386-184-4064"
        ],
        "socMedias": [
            {
                "skype": "abeil@skype.com"
            },
            {
                "facebook": "abeil@facebook.com"
            },
            {
                "facebook": "abeil@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-06-05"
    }
});
db.users.insertOne(
{
    "userKey": "MERRFARM3335",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Merrill",
        "middle": null,
        "last": "Farmer",
        "suffix": null
    },
    "address": {
        "streetAddress": "2090 Little Bough Ride",
        "buildingName": null,
        "floor": 3,
        "roomAptCondoFlat": null,
        "city": "Pointe-\u00e0-Pitre",
        "locality1": "GP",
        "locality2": "Guadeloupe",
        "country": "GP",
        "postalCode": "97161 CEDEX",
        "geoSpatial": [
            "-61.5343",
            "16.2422"
        ]
    },
    "contact": {
        "email": "mfarmer387@frontier.com",
        "phone": "387-832-3335",
        "socMedia": []
    },
    "login": {
        "username": "mfarmer",
        "oauth2": null,
        "password": "$2y$10$udRtxKLPouC.Gtpq1BDCLuEQEOODq6.o3zA\/JVhvadpg7j0hE6z1m"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-11-01"
    }
});
db.users.insertOne(
{
    "userKey": "HOMEMURR0433",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Homer",
        "middle": "T",
        "last": "Murray",
        "suffix": null
    },
    "address": {
        "streetAddress": "7912 Red Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dorrigo Mountain",
        "locality1": "NSW",
        "locality2": "New South Wales",
        "country": "AU",
        "postalCode": "2453",
        "geoSpatial": [
            "152.61",
            "-30.282"
        ]
    },
    "contact": {
        "email": "hmurray388@nordnet.com",
        "phone": "388-695-0433",
        "socMedia": {
            "twitter": "hmurray@twitter.com"
        }
    },
    "login": {
        "username": "hmurray",
        "oauth2": "hmurray@twitter.com",
        "password": "$2y$10$NBhO12moH7Nq06bWNvxn3O8iWcstjUcxeKCPff6sQGb5Z8EnR5xvG"
    },
    "otherContact": {
        "emails": [
            "hmurray388@ccs.com"
        ],
        "phoneNumbers": [
            "388-196-9594"
        ],
        "socMedias": [
            {
                "line": "hmurray@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-05-13"
    }
});
db.users.insertOne(
{
    "userKey": "RICAESTR7885",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Ricarda",
        "middle": "J",
        "last": "Estrada",
        "suffix": null
    },
    "address": {
        "streetAddress": "8592 Blue Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ouled Djdai",
        "locality1": "M'Sila",
        "locality2": "M'Sila",
        "country": "DZ",
        "postalCode": "28003",
        "geoSpatial": [
            "3.8815",
            "35.67"
        ]
    },
    "contact": {
        "email": "restrada389@sktelecom.com",
        "phone": "389-206-7885",
        "socMedia": {
            "twitter": "restrada@twitter.com"
        }
    },
    "login": {
        "username": "restrada",
        "oauth2": "restrada@twitter.com",
        "password": "$2y$10$Eq952BPknhTygz\/JlwShpuSO1ohHjoIq9Jh8tyWFQpCiS3Ra9rvti"
    },
    "otherContact": {
        "emails": [
            "restrada389@orange.com",
            "restrada389@algonet.com"
        ],
        "phoneNumbers": [
            "389-231-7038",
            "389-887-6819"
        ],
        "socMedias": [
            {
                "skype": "restrada@skype.com"
            },
            {
                "skype": "restrada@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-08-18"
    }
});
db.users.insertOne(
{
    "userKey": "DELLFELI6668",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Lazy Bird Business LLC",
    "name": {
        "title": null,
        "first": "Dell",
        "middle": null,
        "last": "Felix",
        "suffix": null
    },
    "address": {
        "streetAddress": "9735 Little Tree Street",
        "buildingName": "Building 48",
        "floor": null,
        "roomAptCondoFlat": "18",
        "city": "Canalou",
        "locality1": "MO",
        "locality2": "New Madrid",
        "country": "US",
        "postalCode": "63828",
        "geoSpatial": [
            "-89.6918",
            "36.7504"
        ]
    },
    "contact": {
        "email": "dfelix390@apicnet.com",
        "phone": "390-889-6668",
        "socMedia": []
    },
    "login": {
        "username": "dfelix",
        "oauth2": null,
        "password": "$2y$10$4fNuWBMYJijt0AJrYT5Lke0lAojDlwWy02GNl0ruOYzampu7Ss30q"
    },
    "otherContact": {
        "emails": [
            "dfelix390@optus.com"
        ],
        "phoneNumbers": [
            "390-359-9131"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-11-08"
    }
});
db.users.insertOne(
{
    "userKey": "JOSUPARR5420",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Josue",
        "middle": "N",
        "last": "Parrish",
        "suffix": null
    },
    "address": {
        "streetAddress": "2423 Blue Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Montecavolo",
        "locality1": "ER",
        "locality2": "Reggio Nell'Emilia",
        "country": "IT",
        "postalCode": "42020",
        "geoSpatial": [
            "10.5426",
            "44.6328"
        ]
    },
    "contact": {
        "email": "jparrish391@airtel.com",
        "phone": "391-378-5420",
        "socMedia": {
            "twitter": "jparrish@twitter.com"
        }
    },
    "login": {
        "username": "jparrish",
        "oauth2": "jparrish@twitter.com",
        "password": "$2y$10$yg6EN8QD2ONC7yqUgMAqGeFASjppFL4PnSW28AjrzSc0UsoatsASq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-10-23"
    }
});
db.users.insertOne(
{
    "userKey": "IMOGCART1523",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Ms",
        "first": "Imogene",
        "middle": "O",
        "last": "Carter",
        "suffix": null
    },
    "address": {
        "streetAddress": "7278 Long Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Brockton",
        "locality1": "MA",
        "locality2": "Plymouth",
        "country": "US",
        "postalCode": "02304",
        "geoSpatial": [
            "-71.0184",
            "42.0834"
        ]
    },
    "contact": {
        "email": "icarter392@algonet.com",
        "phone": "392-360-1523",
        "socMedia": {
            "twitter": "icarter@twitter.com"
        }
    },
    "login": {
        "username": "icarter",
        "oauth2": "icarter@twitter.com",
        "password": "$2y$10$9.A4cFWhyqs9DnO9FID7l.uv4uY7L4JmKv5EIkvdWH3U4EpIOG7Ni"
    },
    "otherContact": {
        "emails": [
            "icarter392@centurylink.com",
            "icarter392@nii.com"
        ],
        "phoneNumbers": [
            "392-315-0800",
            "392-390-6376"
        ],
        "socMedias": [
            {
                "twitter": "icarter@twitter.com"
            },
            {
                "twitter": "icarter@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-12-20"
    }
});
db.users.insertOne(
{
    "userKey": "VERNSCHM7654",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Vern",
        "middle": null,
        "last": "Schmidt",
        "suffix": null
    },
    "address": {
        "streetAddress": "4532 Green Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ermelo",
        "locality1": "Ermelo",
        "locality2": "Ermelo",
        "country": "NL",
        "postalCode": "3852",
        "geoSpatial": [
            "5.6495",
            "52.2981"
        ]
    },
    "contact": {
        "email": "vschmidt393@centurylink.com",
        "phone": "393-944-7654",
        "socMedia": []
    },
    "login": {
        "username": "vschmidt",
        "oauth2": null,
        "password": "$2y$10$NrbgNkAUmQLkn7C5yXw0bOc8RW5bHtxLr5FiIy\/TCsjO3Y6LkbCjO"
    },
    "otherContact": {
        "emails": [
            "vschmidt393@ktc.com",
            "vschmidt393@icom.com"
        ],
        "phoneNumbers": [
            "393-766-9746",
            "393-000-4561"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1993-02-10"
    }
});
db.users.insertOne(
{
    "userKey": "CLINHAIL3864",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Clinton",
        "middle": "X",
        "last": "Hail",
        "suffix": null
    },
    "address": {
        "streetAddress": "1914 Blue Woods Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eldersfield",
        "locality1": "England",
        "locality2": "Worcestershire",
        "country": "GB",
        "postalCode": "GL19",
        "geoSpatial": [
            "-2.2868",
            "51.9833"
        ]
    },
    "contact": {
        "email": "chail394@airtel.com",
        "phone": "394-724-3864",
        "socMedia": {
            "google": "chail@google.com"
        }
    },
    "login": {
        "username": "chail",
        "oauth2": "chail@google.com",
        "password": "$2y$10$DEvA9u\/qHmaPnpNy4i7jxuEPYsGYibndigNQr7gwpYBKXCcbvepOS"
    },
    "otherContact": {
        "emails": [
            "chail394@megafon.com"
        ],
        "phoneNumbers": [
            "394-857-9040"
        ],
        "socMedias": [
            {
                "skype": "chail@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-12-12"
    }
});
db.users.insertOne(
{
    "userKey": "DESSMATA6122",
    "userType": "lender",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": "Lazy Bird Trust",
    "name": {
        "title": "Ms",
        "first": "Dessie",
        "middle": "Q",
        "last": "Mata",
        "suffix": null
    },
    "address": {
        "streetAddress": "2006 Winding Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Invermay",
        "locality1": "VIC",
        "locality2": "VIC COUNTRY",
        "country": "AU",
        "postalCode": "3352",
        "geoSpatial": [
            "143.8818",
            "-37.5164"
        ]
    },
    "contact": {
        "email": "dmata395@unicom.com",
        "phone": "395-586-6122",
        "socMedia": {
            "skype": "dmata@skype.com"
        }
    },
    "login": {
        "username": "dmata",
        "oauth2": "dmata@skype.com",
        "password": "$2y$10$iQjHlMTz3zZAdqkO1IDTD.SzZlse25CSTBf4prqU1JwmC\/b4hj\/XO"
    },
    "otherContact": {
        "emails": [
            "dmata395@cci.com",
            "dmata395@att.com"
        ],
        "phoneNumbers": [
            "395-916-4117",
            "395-344-1366"
        ],
        "socMedias": [
            {
                "linkedin": "dmata@linkedin.com"
            },
            {
                "line": "dmata@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-04-06"
    }
});
db.users.insertOne(
{
    "userKey": "JAVICANN7333",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Javier",
        "middle": null,
        "last": "Cannon",
        "suffix": null
    },
    "address": {
        "streetAddress": "2284 Green Hill Avenue",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": "D3",
        "city": "Springfield",
        "locality1": "OH",
        "locality2": "Clark",
        "country": "US",
        "postalCode": "45503",
        "geoSpatial": [
            "-83.7804",
            "39.9528"
        ]
    },
    "contact": {
        "email": "jcannon396@tt.com",
        "phone": "396-688-7333",
        "socMedia": []
    },
    "login": {
        "username": "jcannon",
        "oauth2": null,
        "password": "$2y$10$\/h54ITPUcmaRjWdtil.Ieeh.pE1wkJ0dtLC5wfkIcUa1sma4mZlym"
    },
    "otherContact": {
        "emails": [
            "jcannon396@algonet.com"
        ],
        "phoneNumbers": [
            "396-718-2311"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-02-08"
    }
});
db.users.insertOne(
{
    "userKey": "ZACHBARN1682",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Zachariah",
        "middle": "X",
        "last": "Barnett",
        "suffix": null
    },
    "address": {
        "streetAddress": "3173 Short Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Stade Louis Deux",
        "locality1": "Fontvieille",
        "locality2": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "geoSpatial": [
            "7.4167",
            "43.7167"
        ]
    },
    "contact": {
        "email": "zbarnett397@vimpelcom.com",
        "phone": "397-919-1682",
        "socMedia": {
            "linkedin": "zbarnett@linkedin.com"
        }
    },
    "login": {
        "username": "zbarnett",
        "oauth2": "zbarnett@linkedin.com",
        "password": "$2y$10$IYqmSTjTGFo5Jmqzy2TnWOuH8N4nHAz6f.BsIrC.VSjuGHLJ8uUf."
    },
    "otherContact": {
        "emails": [
            "zbarnett397@nordnet.com",
            "zbarnett397@pldt.com"
        ],
        "phoneNumbers": [
            "397-656-2432",
            "397-163-1933"
        ],
        "socMedias": [
            {
                "twitter": "zbarnett@twitter.com"
            },
            {
                "skype": "zbarnett@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-05-12"
    }
});
db.users.insertOne(
{
    "userKey": "ISSABEIL7298",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": "Mr",
        "first": "Issac",
        "middle": "E",
        "last": "Beil",
        "suffix": null
    },
    "address": {
        "streetAddress": "9870 Winding Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Thillaipuram",
        "locality1": "Namakkal",
        "locality2": "Namakkal",
        "country": "IN",
        "postalCode": "637001",
        "geoSpatial": [
            "78.1652",
            "11.2213"
        ]
    },
    "contact": {
        "email": "ibeil398@vimpelcom.com",
        "phone": "398-690-7298",
        "socMedia": {
            "facebook": "ibeil@facebook.com"
        }
    },
    "login": {
        "username": "ibeil",
        "oauth2": "ibeil@facebook.com",
        "password": "$2y$10$ulbNybeSdzSzf9TsVnfPJuP3kwdUmw9TvTNIwVBQW4GqIkvKlZTbC"
    },
    "otherContact": {
        "emails": [
            "ibeil398@telia.com",
            "ibeil398@ais.com"
        ],
        "phoneNumbers": [
            "398-375-6535",
            "398-605-1041"
        ],
        "socMedias": [
            {
                "line": "ibeil@line.com"
            },
            {
                "google": "ibeil@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-08-08"
    }
});
db.users.insertOne(
{
    "userKey": "DREWLEBL4909",
    "userType": "borrower",
    "amountDue": NumberDecimal("0.00"),
    "amountPaid": NumberDecimal("0.00"),
    "businessName": null,
    "name": {
        "title": null,
        "first": "Drew",
        "middle": null,
        "last": "Leblanc",
        "suffix": null
    },
    "address": {
        "streetAddress": "6386 Big Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0141\u00f3d\u017a",
        "locality1": "\u0141\u00f3d\u017a",
        "locality2": "powiat \u0141\u00f3dzki Wschodni",
        "country": "PL",
        "postalCode": "93-110",
        "geoSpatial": [
            "19.4875",
            "51.7481"
        ]
    },
    "contact": {
        "email": "dleblanc399@uunet.com",
        "phone": "399-374-4909",
        "socMedia": []
    },
    "login": {
        "username": "dleblanc",
        "oauth2": null,
        "password": "$2y$10$M7AjAOGT31SAfNqizrXD\/eF0DW5h3fzyP5YS0ieFo.LbAEKJGPliu"
    },
    "otherContact": {
        "emails": [
            "dleblanc399@telesystems.com",
            "dleblanc399@airtel.com",
            "dleblanc399@icom.com"
        ],
        "phoneNumbers": [
            "399-351-6499",
            "399-941-6906",
            "399-214-2423"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1936-03-18"
    }
});
