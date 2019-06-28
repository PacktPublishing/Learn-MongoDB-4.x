conn = new Mongo();
db = conn.getDB("booksomeplace");
db.partners.drop();
db.partners.insertOne(
{
    "partnerKey": "AFFOSVAU8218",
    "businessName": "Affordable Partners Inc",
    "revenueSplit": 0.33,
    "acctBalance": 658324.91,
    "name": {
        "title": "Ms",
        "first": "Shonna",
        "middle": "N",
        "last": "Vaughn",
        "suffix": null
    },
    "address": {
        "streetAddress": "4975 Long Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "East Pingelly",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6308",
        "latitude": "-32.5103",
        "longitude": "117.1464"
    },
    "contact": {
        "email": "svaughn100@nii.com",
        "phone": "+61-100-831-8218",
        "socMedia": {
            "skype": "svaughn100@nii.com@skype.com"
        }
    },
    "login": {
        "username": "svaughn",
        "oauth2": "svaughn@skype.com",
        "password": "$2y$10$efV\/b5Bj4UHjclyhJ4hREe3MeGMm\/l.8\/o0.h5uyydbVROI6y1S2u"
    },
    "otherContact": {
        "emails": [
            "svaughn100@ktc.com"
        ],
        "phoneNumbers": [
            "+61-100-016-3335"
        ],
        "socMedias": [
            {
                "skype": "svaughn100@ktc.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-06-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFOECOL4536",
    "businessName": "Affordable Industries ",
    "revenueSplit": 0.31,
    "acctBalance": 796231.5700000001,
    "name": {
        "title": "Ms",
        "first": "Eleni",
        "middle": "G",
        "last": "Cole",
        "suffix": null
    },
    "address": {
        "streetAddress": "5476 Winding Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Seglinge",
        "stateProvince": "Kumlinge",
        "locality": "Kumlinge",
        "country": "AX",
        "postalCode": "22810",
        "latitude": "60.2018",
        "longitude": "20.7098"
    },
    "contact": {
        "email": "ecole101@uunet.com",
        "phone": "+61-101-157-4536",
        "socMedia": {
            "line": "ecole101@uunet.com@line.com"
        }
    },
    "login": {
        "username": "ecole",
        "oauth2": "ecole@line.com",
        "password": "$2y$10$SplVGJWlqMH3S4GW9KvoO.LNta36ZLoLLCEPagbo6QN1n3w3eY2Ue"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-04-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "UPBEBMAH2175",
    "businessName": "Upbeat Industries Inc",
    "revenueSplit": 0.31,
    "acctBalance": 158371.06,
    "name": {
        "title": null,
        "first": "Bradly",
        "middle": null,
        "last": "Mahoney",
        "suffix": null
    },
    "address": {
        "streetAddress": "5817 Big Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "11",
        "city": "Rhyd-rosser",
        "stateProvince": "Wales",
        "locality": "Ceredigion",
        "country": "GB",
        "postalCode": "SY23",
        "latitude": "52.3358",
        "longitude": "-3.9639"
    },
    "contact": {
        "email": "bmahoney102@tata.com",
        "phone": "+61-102-924-2175",
        "socMedia": []
    },
    "login": {
        "username": "bmahoney",
        "oauth2": null,
        "password": "$2y$10$wxfMLc6xNFHcyuRLogUmze.cRWeXk0qItyzs3oZqz3JToDU4mG43u"
    },
    "otherContact": {
        "emails": [
            "bmahoney102@telia.com"
        ],
        "phoneNumbers": [
            "+61-102-169-5097"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-06-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGLTHO8854",
    "businessName": "Budget Associates Ltd",
    "revenueSplit": 0.2,
    "acctBalance": 324580.21,
    "name": {
        "title": "Mr",
        "first": "Leopoldo",
        "middle": "O",
        "last": "Thomas",
        "suffix": null
    },
    "address": {
        "streetAddress": "3407 Big Creek Way",
        "buildingName": "Building D9",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Westmorland",
        "stateProvince": "CA",
        "locality": "Imperial",
        "country": "US",
        "postalCode": "92281",
        "latitude": "33.038",
        "longitude": "-115.5914"
    },
    "contact": {
        "email": "lthomas104@telkom.com",
        "phone": "+61-104-437-8854",
        "socMedia": {
            "skype": "lthomas104@telkom.com@skype.com"
        }
    },
    "login": {
        "username": "lthomas",
        "oauth2": "lthomas@skype.com",
        "password": "$2y$10$F7cREScaLXeWbyQHeF1YfeCjKHwcBC8UZ9riy.mPJXqRxfXGJuOXe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-04-03"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGKSTE3846",
    "businessName": "Budget Agency Inc",
    "revenueSplit": 0.31,
    "acctBalance": 462013.92,
    "name": {
        "title": null,
        "first": "Kennith",
        "middle": null,
        "last": "Steele",
        "suffix": null
    },
    "address": {
        "streetAddress": "5620 Winding Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nuevo Amanecer",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10805",
        "latitude": "18.7333",
        "longitude": "-71.1833"
    },
    "contact": {
        "email": "ksteele105@frontier.com",
        "phone": "+61-105-881-3846",
        "socMedia": []
    },
    "login": {
        "username": "ksteele",
        "oauth2": null,
        "password": "$2y$10$x1K505tbVbay99AEjWsQaOIUI2NVhxpZKgZVT8lCRg0ekpi8Sebgu"
    },
    "otherContact": {
        "emails": [
            "ksteele105@millicom.com",
            "ksteele105@maxcomm.com",
            "ksteele105@turkcell.com"
        ],
        "phoneNumbers": [
            "+61-105-559-6847",
            "+61-105-539-6016",
            "+61-105-323-1861"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-09-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEEAPEN4184",
    "businessName": "Sleep Right Trust Inc",
    "revenueSplit": 0.05,
    "acctBalance": 339844.48,
    "name": {
        "title": "Mr",
        "first": "Adrian",
        "middle": "U",
        "last": "Pena",
        "suffix": null
    },
    "address": {
        "streetAddress": "922 Winding Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sainte-Rose",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H7L",
        "latitude": "45.6168",
        "longitude": "-73.7825"
    },
    "contact": {
        "email": "apena106@icom.com",
        "phone": "+61-106-032-4184",
        "socMedia": {
            "line": "apena106@icom.com@line.com"
        }
    },
    "login": {
        "username": "apena",
        "oauth2": "apena@line.com",
        "password": "$2y$10$4vbcJeYFPQ.u2q5GkJRuf.I3l8MhhxWC69IrKZHRakPvrLbKaBfCu"
    },
    "otherContact": {
        "emails": [
            "apena106@orange.com",
            "apena106@orstom.com"
        ],
        "phoneNumbers": [
            "+61-106-251-0066",
            "+61-106-781-7954"
        ],
        "socMedias": [
            {
                "google": "apena106@orange.com@google.com"
            },
            {
                "google": "apena106@orstom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-01-15"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SERIMRAN3593",
    "businessName": "Serious Rooms LLC",
    "revenueSplit": 0.45,
    "acctBalance": 798207.22,
    "name": {
        "title": "Ms",
        "first": "Meri",
        "middle": "K",
        "last": "Randall",
        "suffix": null
    },
    "address": {
        "streetAddress": "1695 Big Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "V\u0113veri",
        "stateProvince": "K\u0101r\u0137u pag.",
        "locality": "K\u0101r\u0137u pag.",
        "country": "LV",
        "postalCode": "LV-4716",
        "latitude": "57.7783",
        "longitude": "25.7013"
    },
    "contact": {
        "email": "mrandall107@lguplus.com",
        "phone": "+61-107-531-3593",
        "socMedia": {
            "google": "mrandall107@lguplus.com@google.com"
        }
    },
    "login": {
        "username": "mrandall",
        "oauth2": "mrandall@google.com",
        "password": "$2y$10$bkHQhY8SzkzWJyqcgr\/WN.e72NlDNWwi5AiEBc58rD0XLS4Gj9ie2"
    },
    "otherContact": {
        "emails": [
            "mrandall107@worldnet.com",
            "mrandall107@millicom.com"
        ],
        "phoneNumbers": [
            "+61-107-823-7878",
            "+61-107-656-9420"
        ],
        "socMedias": [
            {
                "facebook": "mrandall107@worldnet.com@facebook.com"
            },
            {
                "google": "mrandall107@millicom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-03-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOHWEI3408",
    "businessName": "Accomodation Industries Inc",
    "revenueSplit": 0.46,
    "acctBalance": 750338.38,
    "name": {
        "title": "Dr",
        "first": "Hilario",
        "middle": null,
        "last": "Weiss",
        "suffix": "Jr"
    },
    "address": {
        "streetAddress": "6628 Red Hill Avenue",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": "EF",
        "city": "North Aston",
        "stateProvince": "England",
        "locality": "Oxfordshire",
        "country": "GB",
        "postalCode": "OX6",
        "latitude": "51.9558",
        "longitude": "-1.3087"
    },
    "contact": {
        "email": "hweiss108@ntt.com",
        "phone": "+61-108-991-3408",
        "socMedia": []
    },
    "login": {
        "username": "hweiss",
        "oauth2": null,
        "password": "$2y$10$ynb70WYFf6JJySCWitmVruAgTPmHIY\/Shbjp4P5l8L3UWw0OC4gZ."
    },
    "otherContact": {
        "emails": [
            "hweiss108@telia.com"
        ],
        "phoneNumbers": [
            "+61-108-597-1207"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-02-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "UPBEEMCC0579",
    "businessName": "Upbeat Rooms Ltd",
    "revenueSplit": 0.43,
    "acctBalance": 720013.41,
    "name": {
        "title": "Ms",
        "first": "Elvira",
        "middle": "H",
        "last": "Mccall",
        "suffix": null
    },
    "address": {
        "streetAddress": "76 Big Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Marsalforn",
        "stateProvince": "I\u017c-\u017bebbu\u0121",
        "locality": "I\u017c-\u017bebbu\u0121",
        "country": "MT",
        "postalCode": "MFN",
        "latitude": "36.0667",
        "longitude": "14.2444"
    },
    "contact": {
        "email": "emccall109@ccs.com",
        "phone": "+61-109-109-0579",
        "socMedia": {
            "linkedin": "emccall109@ccs.com@linkedin.com"
        }
    },
    "login": {
        "username": "emccall",
        "oauth2": "emccall@linkedin.com",
        "password": "$2y$10$B9BdDK9Z7\/Fgf8Ons5HSk.pC25QYiGogHbU4AS7Xkvl.LDqq1.R7C"
    },
    "otherContact": {
        "emails": [
            "emccall109@tt.com",
            "emccall109@access.com"
        ],
        "phoneNumbers": [
            "+61-109-650-0921",
            "+61-109-678-7566"
        ],
        "socMedias": [
            {
                "google": "emccall109@tt.com@google.com"
            },
            {
                "line": "emccall109@access.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-01-21"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISFWAT0257",
    "businessName": "Leisure Agency LLC",
    "revenueSplit": 0.43,
    "acctBalance": 465299.18,
    "name": {
        "title": "Mr",
        "first": "Francesco",
        "middle": "X",
        "last": "Watts",
        "suffix": null
    },
    "address": {
        "streetAddress": "5468 Long Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Outaouais-Sud (Thurso)",
        "stateProvince": "QC",
        "locality": "Outaouais",
        "country": "CA",
        "postalCode": "J0X",
        "latitude": "46.307",
        "longitude": "-76.7653"
    },
    "contact": {
        "email": "fwatts110@att.com",
        "phone": "+61-110-518-0257",
        "socMedia": {
            "linkedin": "fwatts110@att.com@linkedin.com"
        }
    },
    "login": {
        "username": "fwatts",
        "oauth2": "fwatts@linkedin.com",
        "password": "$2y$10$MUTzLubeIJEzJ9jnBnyNgu4UpKxiRxvJ3aycwGtnuvIe2W\/x5\/j5m"
    },
    "otherContact": {
        "emails": [
            "fwatts110@nii.com"
        ],
        "phoneNumbers": [
            "+61-110-320-8155"
        ],
        "socMedias": [
            {
                "linkedin": "fwatts110@nii.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-10-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGRABB3900",
    "businessName": "Budget Rooms ",
    "revenueSplit": 0.19,
    "acctBalance": 303841.2,
    "name": {
        "title": null,
        "first": "Renato",
        "middle": null,
        "last": "Abbott",
        "suffix": null
    },
    "address": {
        "streetAddress": "2341 Red Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Batagolladeniya",
        "stateProvince": "Kandy",
        "locality": "Kandy",
        "country": "LK",
        "postalCode": "20154",
        "latitude": "7.4173",
        "longitude": "80.5617"
    },
    "contact": {
        "email": "rabbott111@vodafone.com",
        "phone": "+61-111-418-3900",
        "socMedia": []
    },
    "login": {
        "username": "rabbott",
        "oauth2": null,
        "password": "$2y$10$Z1DBq.fODSSG5dnQBrRNmez94wx5J\/bNV01WhXlRvI2ru5iS5.CoC"
    },
    "otherContact": {
        "emails": [
            "rabbott111@millicom.com",
            "rabbott111@tt.com"
        ],
        "phoneNumbers": [
            "+61-111-294-9636",
            "+61-111-504-7380"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-12-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOUTSSAN6406",
    "businessName": "Boutique Trust Inc",
    "revenueSplit": 0.2,
    "acctBalance": 67631.93000000001,
    "name": {
        "title": "Mr",
        "first": "Sheldon",
        "middle": "Q",
        "last": "Sandoval",
        "suffix": null
    },
    "address": {
        "streetAddress": "3045 Red River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Underwood",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7268",
        "latitude": "-41.288",
        "longitude": "147.2136"
    },
    "contact": {
        "email": "ssandova112@vodafone.com",
        "phone": "+61-112-957-6406",
        "socMedia": {
            "twitter": "ssandova112@vodafone.com@twitter.com"
        }
    },
    "login": {
        "username": "ssandova",
        "oauth2": "ssandova@twitter.com",
        "password": "$2y$10$PAXK6qeVsz4sJZNoiCtTJOGjuzrrWB\/V7ja78Fa4Hs2LFmlK9DrFK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-11-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCFBUR8453",
    "businessName": "Success Business Inc",
    "revenueSplit": 0.02,
    "acctBalance": 333300.93,
    "name": {
        "title": "Ms",
        "first": "Fannie",
        "middle": "T",
        "last": "Burke",
        "suffix": null
    },
    "address": {
        "streetAddress": "2539 Little Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u017deleznice",
        "stateProvince": "Ji\u010d\u00edn",
        "locality": "Ji\u010d\u00edn",
        "country": "CZ",
        "postalCode": "507 13",
        "latitude": "50.4703",
        "longitude": "15.3806"
    },
    "contact": {
        "email": "fburke113@telecomitalia.com",
        "phone": "+61-113-546-8453",
        "socMedia": {
            "line": "fburke113@telecomitalia.com@line.com"
        }
    },
    "login": {
        "username": "fburke",
        "oauth2": "fburke@line.com",
        "password": "$2y$10$Cql.Xd3eQdQL9ka9slFGnOOe9jCC\/ZFuBgfLlX17LA.i8GqXt2JzK"
    },
    "otherContact": {
        "emails": [
            "fburke113@megafon.com"
        ],
        "phoneNumbers": [
            "+61-113-007-7979"
        ],
        "socMedias": [
            {
                "line": "fburke113@megafon.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-05-02"
    }
});
db.partners.insertOne(
{
    "partnerKey": "INDUSJOS1717",
    "businessName": "Industrious Trust Inc",
    "revenueSplit": 0.02,
    "acctBalance": 38990.96,
    "name": {
        "title": null,
        "first": "Sommer",
        "middle": null,
        "last": "Joseph",
        "suffix": null
    },
    "address": {
        "streetAddress": "9842 Red Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "54",
        "city": "Granby East",
        "stateProvince": "QC",
        "locality": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J2H",
        "latitude": "45.3938",
        "longitude": "-72.7005"
    },
    "contact": {
        "email": "sjoseph114@oi.com",
        "phone": "+61-114-578-1717",
        "socMedia": []
    },
    "login": {
        "username": "sjoseph",
        "oauth2": null,
        "password": "$2y$10$V6MupzLxhTp8VQ0XaJZOE.phdJNeiUeUNoauRKkJflY0WgpDNeG\/."
    },
    "otherContact": {
        "emails": [
            "sjoseph114@eunet.com",
            "sjoseph114@millicom.com"
        ],
        "phoneNumbers": [
            "+61-114-702-4895",
            "+61-114-574-3675"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-01-22"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFOLSTO1061",
    "businessName": "Affordable Associates Company",
    "revenueSplit": 0.4,
    "acctBalance": 250478.22,
    "name": {
        "title": "Ms",
        "first": "Leonarda",
        "middle": "T",
        "last": "Stone",
        "suffix": null
    },
    "address": {
        "streetAddress": "645 Green Mound Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Close Clark",
        "stateProvince": "Isle of Man",
        "locality": "Isle of Man",
        "country": "IM",
        "postalCode": "IM9",
        "latitude": "54.0951",
        "longitude": "-4.6929"
    },
    "contact": {
        "email": "lstone115@telstra.com",
        "phone": "+61-115-523-1061",
        "socMedia": {
            "google": "lstone115@telstra.com@google.com"
        }
    },
    "login": {
        "username": "lstone",
        "oauth2": "lstone@google.com",
        "password": "$2y$10$oBO\/ZXWu4euJY2ZYeOqOpuXhAnhM5lz6oVKdhj\/t2ylohv3PB1Yw."
    },
    "otherContact": {
        "emails": [
            "lstone115@jio.com"
        ],
        "phoneNumbers": [
            "+61-115-617-0776"
        ],
        "socMedias": [
            {
                "line": "lstone115@jio.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-11-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGDWIL0019",
    "businessName": "Budget Trust ",
    "revenueSplit": 0.39,
    "acctBalance": 254399.46,
    "name": {
        "title": "Ms",
        "first": "Daphne",
        "middle": "J",
        "last": "Wilson",
        "suffix": null
    },
    "address": {
        "streetAddress": "8727 Green River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ballya",
        "stateProvince": "Puttur",
        "locality": "Dakshina Kannada",
        "country": "IN",
        "postalCode": "574221",
        "latitude": "12.7267",
        "longitude": "75.4685"
    },
    "contact": {
        "email": "dwilson116@nordnet.com",
        "phone": "+61-116-679-0019",
        "socMedia": {
            "linkedin": "dwilson116@nordnet.com@linkedin.com"
        }
    },
    "login": {
        "username": "dwilson",
        "oauth2": "dwilson@linkedin.com",
        "password": "$2y$10$8xpunS0v0RgfJBUDCfsR\/ebcV3m1Ao95hSWv6GH2QF5h3BYK.9UCi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-09-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOUTWFOX8543",
    "businessName": "Boutique Trust Ltd",
    "revenueSplit": 0.03,
    "acctBalance": 696109.1,
    "name": {
        "title": null,
        "first": "Windy",
        "middle": null,
        "last": "Fox",
        "suffix": null
    },
    "address": {
        "streetAddress": "516 Short Tree Way",
        "buildingName": "Building E6",
        "floor": 8,
        "roomAptCondoFlat": null,
        "city": "Stoak",
        "stateProvince": "England",
        "locality": "Cheshire",
        "country": "GB",
        "postalCode": "CH2",
        "latitude": "53.2798",
        "longitude": "-2.8937"
    },
    "contact": {
        "email": "wfox117@rogers.com",
        "phone": "+61-117-703-8543",
        "socMedia": []
    },
    "login": {
        "username": "wfox",
        "oauth2": null,
        "password": "$2y$10$nR.ERy22cW.UaIsCbmw1duiLwoU6Nt9CPhx5T1uVklDPhkmRPKjcq"
    },
    "otherContact": {
        "emails": [
            "wfox117@telus.com",
            "wfox117@pldt.com",
            "wfox117@bt.com"
        ],
        "phoneNumbers": [
            "+61-117-932-5075",
            "+61-117-108-4236",
            "+61-117-522-2656"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-04-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEEDGUE2679",
    "businessName": "Sleep Right Rooms LLC",
    "revenueSplit": 0.14,
    "acctBalance": 508491.18,
    "name": {
        "title": "Ms",
        "first": "Delta",
        "middle": "C",
        "last": "Guevara",
        "suffix": null
    },
    "address": {
        "streetAddress": "212 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Clydey",
        "stateProvince": "Wales",
        "locality": "Pembrokeshire",
        "country": "GB",
        "postalCode": "SA35",
        "latitude": "51.9858",
        "longitude": "-4.5499"
    },
    "contact": {
        "email": "dguevara118@relcom.com",
        "phone": "+61-118-025-2679",
        "socMedia": {
            "linkedin": "dguevara118@relcom.com@linkedin.com"
        }
    },
    "login": {
        "username": "dguevara",
        "oauth2": "dguevara@linkedin.com",
        "password": "$2y$10$iVUxdBEPZOjoqcvXDc.GOOEnzWAX2GYIAZQqqAAf1xfTC5RJNJ64m"
    },
    "otherContact": {
        "emails": [
            "dguevara118@icom.com",
            "dguevara118@jio.com"
        ],
        "phoneNumbers": [
            "+61-118-758-2243",
            "+61-118-900-6665"
        ],
        "socMedias": [
            {
                "linkedin": "dguevara118@icom.com@linkedin.com"
            },
            {
                "google": "dguevara118@jio.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-10-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCJBAX4363",
    "businessName": "Success Business Company",
    "revenueSplit": 0.27,
    "acctBalance": 687576.81,
    "name": {
        "title": null,
        "first": "Jenise",
        "middle": null,
        "last": "Baxter",
        "suffix": null
    },
    "address": {
        "streetAddress": "745 Big Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "BC",
        "city": "Jarkha",
        "stateProvince": "Paliganj",
        "locality": "Patna",
        "country": "IN",
        "postalCode": "801110",
        "latitude": "25.278",
        "longitude": "84.8411"
    },
    "contact": {
        "email": "jbaxter120@zain.com",
        "phone": "+61-120-120-4363",
        "socMedia": []
    },
    "login": {
        "username": "jbaxter",
        "oauth2": null,
        "password": "$2y$10$0muWfnPsEu6P8w1xtMBk6OwLmuJVs7YbTE71VgJADvvaC9j3DEMPm"
    },
    "otherContact": {
        "emails": [
            "jbaxter120@cerist.com",
            "jbaxter120@worldnet.com",
            "jbaxter120@tm.com"
        ],
        "phoneNumbers": [
            "+61-120-880-3960",
            "+61-120-501-4379",
            "+61-120-682-4250"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-06-25"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYECAS2893",
    "businessName": "Stay Awhile Agency Inc",
    "revenueSplit": 0.28,
    "acctBalance": 936711.23,
    "name": {
        "title": "Mr",
        "first": "Earl",
        "middle": "R",
        "last": "Castillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "310 Red Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "New Park",
        "stateProvince": "England",
        "locality": "Cornwall",
        "country": "GB",
        "postalCode": "PL15",
        "latitude": "50.6331",
        "longitude": "-4.3975"
    },
    "contact": {
        "email": "ecastill122@cerist.com",
        "phone": "+61-122-633-2893",
        "socMedia": {
            "skype": "ecastill122@cerist.com@skype.com"
        }
    },
    "login": {
        "username": "ecastill",
        "oauth2": "ecastill@skype.com",
        "password": "$2y$10$\/sEKZSnPoI\/4FgbEl98EXOf9WoQA2641i8im3jpucJ5ox\/0zIlCpG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-12-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYAMUR8505",
    "businessName": "Lazy Bird Trust Inc",
    "revenueSplit": 0.12,
    "acctBalance": 444793.85000000003,
    "name": {
        "title": null,
        "first": "Adaline",
        "middle": null,
        "last": "Murillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "5836 Little Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Singureni",
        "stateProvince": "Riscani",
        "locality": "Riscani",
        "country": "MD",
        "postalCode": "MD-5616",
        "latitude": "47.8242",
        "longitude": "27.8544"
    },
    "contact": {
        "email": "amurillo123@apicnet.com",
        "phone": "+61-123-799-8505",
        "socMedia": []
    },
    "login": {
        "username": "amurillo",
        "oauth2": null,
        "password": "$2y$10$MHfsx9fNtRGeFNbT1r6QyO8d84BShZ9M5ibwM5ci2w.gbayp42lzm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-03-30"
    }
});
db.partners.insertOne(
{
    "partnerKey": "UPBELWAT0930",
    "businessName": "Upbeat Agency Inc",
    "revenueSplit": 0.12,
    "acctBalance": 802436.52,
    "name": {
        "title": "Mr",
        "first": "Long",
        "middle": "D",
        "last": "Watts",
        "suffix": null
    },
    "address": {
        "streetAddress": "4433 Blue Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hebbalaguppe",
        "stateProvince": "H D Kote",
        "locality": "Mysore",
        "country": "IN",
        "postalCode": "571114",
        "latitude": "12.0588",
        "longitude": "76.3917"
    },
    "contact": {
        "email": "lwatts124@vivendi.com",
        "phone": "+61-124-394-0930",
        "socMedia": {
            "facebook": "lwatts124@vivendi.com@facebook.com"
        }
    },
    "login": {
        "username": "lwatts",
        "oauth2": "lwatts@facebook.com",
        "password": "$2y$10$6Et8VCHj6cR7j.X0wH8P..ppxPq\/7vwzbJXnXnEgMeikwz8XkCVzO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-06-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOMCLE5285",
    "businessName": "Accomodation Business Ltd",
    "revenueSplit": 0.43,
    "acctBalance": 574653.6900000001,
    "name": {
        "title": "Ms",
        "first": "Machelle",
        "middle": "K",
        "last": "Clements",
        "suffix": null
    },
    "address": {
        "streetAddress": "2360 Short Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041f\u0430\u0434\u043e\u0432\u043a\u0430",
        "stateProvince": "\u041f\u0415\u0421\u0422\u0420\u0410\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u041f\u0415\u0421\u0422\u0420\u0410\u0412\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "446173",
        "latitude": "52.4683",
        "longitude": "49.5056"
    },
    "contact": {
        "email": "mclement125@ooredoo.com",
        "phone": "+61-125-312-5285",
        "socMedia": {
            "facebook": "mclement125@ooredoo.com@facebook.com"
        }
    },
    "login": {
        "username": "mclement",
        "oauth2": "mclement@facebook.com",
        "password": "$2y$10$Fqg6NBbbjJJEc1W2yljUceNEuGm7yDoVPFQjb1NA4jkmwyMy8bi8i"
    },
    "otherContact": {
        "emails": [
            "mclement125@centurylink.com",
            "mclement125@megafon.com"
        ],
        "phoneNumbers": [
            "+61-125-321-4935",
            "+61-125-924-1935"
        ],
        "socMedias": [
            {
                "google": "mclement125@centurylink.com@google.com"
            },
            {
                "twitter": "mclement125@megafon.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-05-15"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCFMIR3590",
    "businessName": "Success Partners LLC",
    "revenueSplit": 0.14,
    "acctBalance": 937052.65,
    "name": {
        "title": null,
        "first": "Fabian",
        "middle": null,
        "last": "Miranda",
        "suffix": null
    },
    "address": {
        "streetAddress": "7721 Winding Mountain Way",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": "88",
        "city": "Freeborn",
        "stateProvince": "MN",
        "locality": "Freeborn",
        "country": "US",
        "postalCode": "56032",
        "latitude": "43.7658",
        "longitude": "-93.5641"
    },
    "contact": {
        "email": "fmiranda126@belgacom.com",
        "phone": "+61-126-212-3590",
        "socMedia": []
    },
    "login": {
        "username": "fmiranda",
        "oauth2": null,
        "password": "$2y$10$pmsvYzO26M6sv5VZkLRtn.ZQNmxi2cCQn1AmEEn3yTFbTXPWGheWO"
    },
    "otherContact": {
        "emails": [
            "fmiranda126@algonet.com",
            "fmiranda126@icom.com"
        ],
        "phoneNumbers": [
            "+61-126-977-7963",
            "+61-126-598-5940"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-03-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "COMFLCOL2889",
    "businessName": "Comfort Business LLC",
    "revenueSplit": 0.26,
    "acctBalance": 374113.19,
    "name": {
        "title": "Ms",
        "first": "Lolita",
        "middle": "T",
        "last": "Coleman",
        "suffix": null
    },
    "address": {
        "streetAddress": "8907 Short Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Apatou",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97317",
        "latitude": "5.1553",
        "longitude": "-54.3431"
    },
    "contact": {
        "email": "lcoleman127@nii.com",
        "phone": "+61-127-734-2889",
        "socMedia": {
            "line": "lcoleman127@nii.com@line.com"
        }
    },
    "login": {
        "username": "lcoleman",
        "oauth2": "lcoleman@line.com",
        "password": "$2y$10$S1qKQCDZ9UqOrakL2I8YSeFqpRU\/WZSYqYJNnsqrJyB4WwFU3SKPe"
    },
    "otherContact": {
        "emails": [
            "lcoleman127@openworld.com",
            "lcoleman127@tm.com",
            "lcoleman127@mtn.com"
        ],
        "phoneNumbers": [
            "+61-127-784-8170",
            "+61-127-869-1109",
            "+61-127-255-8879"
        ],
        "socMedias": [
            {
                "facebook": "lcoleman127@openworld.com@facebook.com"
            },
            {
                "line": "lcoleman127@tm.com@line.com"
            },
            {
                "google": "lcoleman127@mtn.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-06-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "COMPPCRA0140",
    "businessName": "Competitive Accomdations Company",
    "revenueSplit": 0.37,
    "acctBalance": 28060.54,
    "name": {
        "title": "Ms",
        "first": "Providencia",
        "middle": "L",
        "last": "Crane",
        "suffix": null
    },
    "address": {
        "streetAddress": "4645 Green Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Annapolis",
        "stateProvince": "IL",
        "locality": "Crawford",
        "country": "US",
        "postalCode": "62413",
        "latitude": "39.1179",
        "longitude": "-87.8029"
    },
    "contact": {
        "email": "pcrane128@belgacom.com",
        "phone": "+61-128-404-0140",
        "socMedia": {
            "skype": "pcrane128@belgacom.com@skype.com"
        }
    },
    "login": {
        "username": "pcrane",
        "oauth2": "pcrane@skype.com",
        "password": "$2y$10$\/Tzno6J\/ILtP\/Pea5MoM1eWc4venwb2gzjjuGsQYgrievk4GOMUy2"
    },
    "otherContact": {
        "emails": [
            "pcrane128@ui.com"
        ],
        "phoneNumbers": [
            "+61-128-411-5269"
        ],
        "socMedias": [
            {
                "google": "pcrane128@ui.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-02-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGCNOL8360",
    "businessName": "Budget Rooms LLC",
    "revenueSplit": 0.4,
    "acctBalance": 320442.71,
    "name": {
        "title": "Mr",
        "first": "Clifford",
        "middle": "R",
        "last": "Nolan",
        "suffix": null
    },
    "address": {
        "streetAddress": "6416 Green Ditch Boulevard",
        "buildingName": "Building 14",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Raceview",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4305",
        "latitude": "-27.6347",
        "longitude": "152.7752"
    },
    "contact": {
        "email": "cnolan130@glasnet.com",
        "phone": "+61-130-690-8360",
        "socMedia": {
            "skype": "cnolan130@glasnet.com@skype.com"
        }
    },
    "login": {
        "username": "cnolan",
        "oauth2": "cnolan@skype.com",
        "password": "$2y$10$iMoDr4iuX4OuHiIDc3Ua9Oo5iltWUvWnIWZj1YRog8ck4tf0OQVq."
    },
    "otherContact": {
        "emails": [
            "cnolan130@ptcl.com",
            "cnolan130@mtn.com",
            "cnolan130@lguplus.com"
        ],
        "phoneNumbers": [
            "+61-130-798-5846",
            "+61-130-014-2193",
            "+61-130-335-4286"
        ],
        "socMedias": [
            {
                "facebook": "cnolan130@ptcl.com@facebook.com"
            },
            {
                "line": "cnolan130@mtn.com@line.com"
            },
            {
                "skype": "cnolan130@lguplus.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-03-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYJMCM8132",
    "businessName": "Stay Awhile Partners ",
    "revenueSplit": 0.25,
    "acctBalance": 933932.34,
    "name": {
        "title": "Mr",
        "first": "Jeff",
        "middle": "E",
        "last": "Mcmillan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2727 Winding Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Serdang",
        "stateProvince": "KDH",
        "locality": "Kedah",
        "country": "MY",
        "postalCode": "09810",
        "latitude": "5.3649",
        "longitude": "100.6151"
    },
    "contact": {
        "email": "jmcmilla131@cubenet.com",
        "phone": "+61-131-717-8132",
        "socMedia": {
            "linkedin": "jmcmilla131@cubenet.com@linkedin.com"
        }
    },
    "login": {
        "username": "jmcmilla",
        "oauth2": "jmcmilla@linkedin.com",
        "password": "$2y$10$dMDkse50U7uEU75iSp.e9.6.WLO..bpXAB7kCBPnOW4DJfQpg6zEW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-09-25"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEECCAR3514",
    "businessName": "Sleep Right Partners ",
    "revenueSplit": 0.19,
    "acctBalance": 36063.05,
    "name": {
        "title": null,
        "first": "Carline",
        "middle": null,
        "last": "Carlson",
        "suffix": null
    },
    "address": {
        "streetAddress": "57 Little Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "BC",
        "city": "Richmond Southeast",
        "stateProvince": "BC",
        "locality": "Richmond",
        "country": "CA",
        "postalCode": "V6W",
        "latitude": "49.1534",
        "longitude": "-123.048"
    },
    "contact": {
        "email": "ccarlson132@zain.com",
        "phone": "+61-132-859-3514",
        "socMedia": []
    },
    "login": {
        "username": "ccarlson",
        "oauth2": null,
        "password": "$2y$10$3iEhxHpsFOLkVDt8nRYFb.eaTpSV0PdpHEBfbFskNbuRSQbxPGOSW"
    },
    "otherContact": {
        "emails": [
            "ccarlson132@unicom.com",
            "ccarlson132@relcom.com",
            "ccarlson132@uunet.com"
        ],
        "phoneNumbers": [
            "+61-132-120-4135",
            "+61-132-372-6482",
            "+61-132-903-9429"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-12-11"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SERIRBEN2796",
    "businessName": "Serious Associates Ltd",
    "revenueSplit": 0.02,
    "acctBalance": 791519.4400000001,
    "name": {
        "title": "Ms",
        "first": "Rachel",
        "middle": "D",
        "last": "Benson",
        "suffix": null
    },
    "address": {
        "streetAddress": "6010 Red Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "LAS CA\u00d1AS",
        "stateProvince": "S",
        "locality": "Santa Fe",
        "country": "AR",
        "postalCode": "3046",
        "latitude": "-31.0167",
        "longitude": "-60.3"
    },
    "contact": {
        "email": "rbenson133@uunet.com",
        "phone": "+61-133-786-2796",
        "socMedia": {
            "facebook": "rbenson133@uunet.com@facebook.com"
        }
    },
    "login": {
        "username": "rbenson",
        "oauth2": "rbenson@facebook.com",
        "password": "$2y$10$N3WPV3vzYZlLexY4\/JYWiuZz6HYQtZZ5Yk2tQ2hd1RjIvYnirInby"
    },
    "otherContact": {
        "emails": [
            "rbenson133@telecomitalia.com",
            "rbenson133@bce.com",
            "rbenson133@openworld.com"
        ],
        "phoneNumbers": [
            "+61-133-084-1441",
            "+61-133-008-3724",
            "+61-133-686-5446"
        ],
        "socMedias": [
            {
                "twitter": "rbenson133@telecomitalia.com@twitter.com"
            },
            {
                "line": "rbenson133@bce.com@line.com"
            },
            {
                "line": "rbenson133@openworld.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-07-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FRIEMSTA7772",
    "businessName": "Friendly Business LLC",
    "revenueSplit": 0.45,
    "acctBalance": 242585.67,
    "name": {
        "title": "Mr",
        "first": "Milo",
        "middle": "X",
        "last": "Stafford",
        "suffix": null
    },
    "address": {
        "streetAddress": "497 Green River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Harrison Lake Region (Agassiz)",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V0M",
        "latitude": "49.6346",
        "longitude": "-122.038"
    },
    "contact": {
        "email": "mstaffor134@telkom.com",
        "phone": "+61-134-000-7772",
        "socMedia": {
            "skype": "mstaffor134@telkom.com@skype.com"
        }
    },
    "login": {
        "username": "mstaffor",
        "oauth2": "mstaffor@skype.com",
        "password": "$2y$10$Nc0qUj1c0J3zX7e0NoD3K.XWPPmww89c\/b\/.PlyJn.4Z1sr1VCGLO"
    },
    "otherContact": {
        "emails": [
            "mstaffor134@telecom.com",
            "mstaffor134@softbank.com"
        ],
        "phoneNumbers": [
            "+61-134-092-7480",
            "+61-134-975-0177"
        ],
        "socMedias": [
            {
                "skype": "mstaffor134@telecom.com@skype.com"
            },
            {
                "linkedin": "mstaffor134@softbank.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-04-03"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOUTTPAR4236",
    "businessName": "Boutique Associates Company",
    "revenueSplit": 0.18,
    "acctBalance": 746558.43,
    "name": {
        "title": null,
        "first": "Taunya",
        "middle": null,
        "last": "Parsons",
        "suffix": null
    },
    "address": {
        "streetAddress": "7326 Short Ditch Boulevard",
        "buildingName": null,
        "floor": 9,
        "roomAptCondoFlat": null,
        "city": "Brumunddal",
        "stateProvince": "Ringsaker",
        "locality": "Ringsaker",
        "country": "NO",
        "postalCode": "2382",
        "latitude": "60.8809",
        "longitude": "10.9395"
    },
    "contact": {
        "email": "tparsons135@maxcomm.com",
        "phone": "+61-135-294-4236",
        "socMedia": []
    },
    "login": {
        "username": "tparsons",
        "oauth2": null,
        "password": "$2y$10$aAx84z4Ghok8SzqCeyDU6O0j6FIEkOjpT1jIDOCsnPjPaJFS8Hk6a"
    },
    "otherContact": {
        "emails": [
            "tparsons135@bce.com"
        ],
        "phoneNumbers": [
            "+61-135-490-6014"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-08-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGLGLA4084",
    "businessName": "Budget Accomdations LLC",
    "revenueSplit": 0.27,
    "acctBalance": 66384.78,
    "name": {
        "title": "Mr",
        "first": "Leland",
        "middle": "C",
        "last": "Glass",
        "suffix": null
    },
    "address": {
        "streetAddress": "4766 Red Gully Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Biniguy",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2399",
        "latitude": "-29.5435",
        "longitude": "150.2033"
    },
    "contact": {
        "email": "lglass136@megafon.com",
        "phone": "+61-136-410-4084",
        "socMedia": {
            "line": "lglass136@megafon.com@line.com"
        }
    },
    "login": {
        "username": "lglass",
        "oauth2": "lglass@line.com",
        "password": "$2y$10$xoxGCgMtDdR0O34fXDS.bural0j1J0ZF55RAPh4ihyBTjyjjUa1Zu"
    },
    "otherContact": {
        "emails": [
            "lglass136@tm.com"
        ],
        "phoneNumbers": [
            "+61-136-676-3694"
        ],
        "socMedias": [
            {
                "linkedin": "lglass136@tm.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-03-22"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGCMAN2218",
    "businessName": "Budget Industries ",
    "revenueSplit": 0.2,
    "acctBalance": 383835.86,
    "name": {
        "title": "Mr",
        "first": "Cristopher",
        "middle": "T",
        "last": "Mann",
        "suffix": null
    },
    "address": {
        "streetAddress": "9939 Big Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kaala-Gom\u00e9n",
        "stateProvince": "Kaala-Gom\u00e9n",
        "locality": "Kaala-Gom\u00e9n",
        "country": "NC",
        "postalCode": "98817",
        "latitude": "-20.6694",
        "longitude": "164.3977"
    },
    "contact": {
        "email": "cmann137@apicnet.com",
        "phone": "+61-137-220-2218",
        "socMedia": {
            "skype": "cmann137@apicnet.com@skype.com"
        }
    },
    "login": {
        "username": "cmann",
        "oauth2": "cmann@skype.com",
        "password": "$2y$10$v30rXv9n.99VeCHIZsX4..pOrHNGAQ1mqV4V\/CrmTNmCUfIpI\/Zlq"
    },
    "otherContact": {
        "emails": [
            "cmann137@vodafone.com",
            "cmann137@oi.com",
            "cmann137@sktelecom.com"
        ],
        "phoneNumbers": [
            "+61-137-172-0239",
            "+61-137-319-4103",
            "+61-137-428-0467"
        ],
        "socMedias": [
            {
                "linkedin": "cmann137@vodafone.com@linkedin.com"
            },
            {
                "google": "cmann137@oi.com@google.com"
            },
            {
                "line": "cmann137@sktelecom.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-10-10"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOLBON8787",
    "businessName": "Accomodation Agency Company",
    "revenueSplit": 0.24,
    "acctBalance": 355003.58,
    "name": {
        "title": null,
        "first": "Larry",
        "middle": null,
        "last": "Bond",
        "suffix": null
    },
    "address": {
        "streetAddress": "263 Short River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "33",
        "city": "Kamloops Northwest",
        "stateProvince": "BC",
        "locality": "Kamloops",
        "country": "CA",
        "postalCode": "V2B",
        "latitude": "50.8869",
        "longitude": "-120.7357"
    },
    "contact": {
        "email": "lbond138@mtn.com",
        "phone": "+61-138-715-8787",
        "socMedia": []
    },
    "login": {
        "username": "lbond",
        "oauth2": null,
        "password": "$2y$10$ADSZJnGIkxaOS\/1wlbqh1.peDxQL9flcXdRSfulvOXCCPObMiKqPm"
    },
    "otherContact": {
        "emails": [
            "lbond138@sktelecom.com",
            "lbond138@uunet.com",
            "lbond138@singtel.com"
        ],
        "phoneNumbers": [
            "+61-138-993-8496",
            "+61-138-879-9829",
            "+61-138-682-2123"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-09-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FRIERRAM2118",
    "businessName": "Friendly Associates Inc",
    "revenueSplit": 0.02,
    "acctBalance": 802357.66,
    "name": {
        "title": "Mr",
        "first": "Roderick",
        "middle": "F",
        "last": "Ramos",
        "suffix": null
    },
    "address": {
        "streetAddress": "1285 Green River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Residencial Rancho Alegre",
        "stateProvince": "COA",
        "locality": "Torre\u00f3n",
        "country": "MX",
        "postalCode": "27430",
        "latitude": "25.5172",
        "longitude": "-103.3366"
    },
    "contact": {
        "email": "rramos139@verizon.com",
        "phone": "+61-139-083-2118",
        "socMedia": {
            "google": "rramos139@verizon.com@google.com"
        }
    },
    "login": {
        "username": "rramos",
        "oauth2": "rramos@google.com",
        "password": "$2y$10$gCUMg0w3O37yM6bkQoquMOZ90mM1z3poWKe64W7gjv5RY\/uvero7a"
    },
    "otherContact": {
        "emails": [
            "rramos139@telstra.com",
            "rramos139@telecomitalia.com"
        ],
        "phoneNumbers": [
            "+61-139-218-1021",
            "+61-139-612-0517"
        ],
        "socMedias": [
            {
                "line": "rramos139@telstra.com@line.com"
            },
            {
                "google": "rramos139@telecomitalia.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-05-02"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYACRA6826",
    "businessName": "Stay Awhile Industries Company",
    "revenueSplit": 0.4,
    "acctBalance": 201125.36000000002,
    "name": {
        "title": "Mr",
        "first": "Allan",
        "middle": "L",
        "last": "Craig",
        "suffix": null
    },
    "address": {
        "streetAddress": "6628 Green Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bank End",
        "stateProvince": "England",
        "locality": "Cumbria",
        "country": "GB",
        "postalCode": "LA20",
        "latitude": "54.3713",
        "longitude": "-3.1958"
    },
    "contact": {
        "email": "acraig140@lookdata.com",
        "phone": "+61-140-394-6826",
        "socMedia": {
            "linkedin": "acraig140@lookdata.com@linkedin.com"
        }
    },
    "login": {
        "username": "acraig",
        "oauth2": "acraig@linkedin.com",
        "password": "$2y$10$UfEwXIohGpUUxWI.Yc3vNeIWlh7BpAGCDWMSTNJTrKC.obXr4vvnq"
    },
    "otherContact": {
        "emails": [
            "acraig140@worldnet.com",
            "acraig140@verizon.com"
        ],
        "phoneNumbers": [
            "+61-140-019-6270",
            "+61-140-367-5968"
        ],
        "socMedias": [
            {
                "facebook": "acraig140@worldnet.com@facebook.com"
            },
            {
                "line": "acraig140@verizon.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-11-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "UPBEMHIL6424",
    "businessName": "Upbeat Associates ",
    "revenueSplit": 0.3,
    "acctBalance": 298293.46,
    "name": {
        "title": null,
        "first": "Marquetta",
        "middle": null,
        "last": "Hill",
        "suffix": null
    },
    "address": {
        "streetAddress": "1133 Little Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Barch\u016fvek",
        "stateProvince": "Hradec Kr\u00e1lov\u00e9",
        "locality": "Hradec Kr\u00e1lov\u00e9",
        "country": "CZ",
        "postalCode": "504 01",
        "latitude": "50.2167",
        "longitude": "15.55"
    },
    "contact": {
        "email": "mhill141@telefonica.com",
        "phone": "+61-141-435-6424",
        "socMedia": []
    },
    "login": {
        "username": "mhill",
        "oauth2": null,
        "password": "$2y$10$lv1QGd.LhyYDgNwUwhs5eusIebiVn9.JUjwqFNKsb6XfXvqh.pqkm"
    },
    "otherContact": {
        "emails": [
            "mhill141@openworld.com",
            "mhill141@access.com"
        ],
        "phoneNumbers": [
            "+61-141-602-9646",
            "+61-141-696-6578"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-04-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCSWOO4509",
    "businessName": "Success Business Ltd",
    "revenueSplit": 0.3,
    "acctBalance": 150081.59,
    "name": {
        "title": "Mr",
        "first": "Shaun",
        "middle": "R",
        "last": "Woodward",
        "suffix": null
    },
    "address": {
        "streetAddress": "6055 Little Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Muncie",
        "stateProvince": "IL",
        "locality": "Vermilion",
        "country": "US",
        "postalCode": "61857",
        "latitude": "40.1165",
        "longitude": "-87.8447"
    },
    "contact": {
        "email": "swoodwar142@millicom.com",
        "phone": "+61-142-266-4509",
        "socMedia": {
            "skype": "swoodwar142@millicom.com@skype.com"
        }
    },
    "login": {
        "username": "swoodwar",
        "oauth2": "swoodwar@skype.com",
        "password": "$2y$10$vF03WRKkdZER3gNwjMaHMeH36JUJrNs3qDYOgCaZQ\/OzapbLg\/RLW"
    },
    "otherContact": {
        "emails": [
            "swoodwar142@nordnet.com"
        ],
        "phoneNumbers": [
            "+61-142-611-1708"
        ],
        "socMedias": [
            {
                "line": "swoodwar142@nordnet.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-07-28"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYMHAR9657",
    "businessName": "Stay Awhile Trust Company",
    "revenueSplit": 0.13,
    "acctBalance": 669330.71,
    "name": {
        "title": "Ms",
        "first": "Mitsuko",
        "middle": "X",
        "last": "Harrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9255 Little Bend Ride",
        "buildingName": "Building 95",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Monasterevin",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "W34",
        "latitude": "53.1406",
        "longitude": "-7.0664"
    },
    "contact": {
        "email": "mharrell143@telenor.com",
        "phone": "+61-143-400-9657",
        "socMedia": {
            "skype": "mharrell143@telenor.com@skype.com"
        }
    },
    "login": {
        "username": "mharrell",
        "oauth2": "mharrell@skype.com",
        "password": "$2y$10$IFi7Zz4Ib1TkvfchhrVJNOdkoOB4y6fSUpIxNn4tnfEgkCFrY4m3e"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-12-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "INDUBFER1855",
    "businessName": "Industrious Agency Inc",
    "revenueSplit": 0.44,
    "acctBalance": 810649.34,
    "name": {
        "title": "Dr",
        "first": "Bernard",
        "middle": null,
        "last": "Fernandez",
        "suffix": "Sr"
    },
    "address": {
        "streetAddress": "7580 Winding Canyon Boulevard",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "F9",
        "city": "Burlington South",
        "stateProvince": "ON",
        "locality": "Burlington",
        "country": "CA",
        "postalCode": "L7S",
        "latitude": "43.323",
        "longitude": "-79.8092"
    },
    "contact": {
        "email": "bfernand144@swisscom.com",
        "phone": "+61-144-370-1855",
        "socMedia": []
    },
    "login": {
        "username": "bfernand",
        "oauth2": null,
        "password": "$2y$10$74EtZ6Y1ntPe57k4KVW3ruofDSkBAXzLh\/v72h8tG5CJS.07iUoui"
    },
    "otherContact": {
        "emails": [
            "bfernand144@att.com"
        ],
        "phoneNumbers": [
            "+61-144-056-4605"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-10-22"
    }
});
db.partners.insertOne(
{
    "partnerKey": "INDUTASH0920",
    "businessName": "Industrious Industries Ltd",
    "revenueSplit": 0.27,
    "acctBalance": 694133.35,
    "name": {
        "title": "Mr",
        "first": "Toney",
        "middle": "J",
        "last": "Ashley",
        "suffix": null
    },
    "address": {
        "streetAddress": "4750 Blue Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eravur",
        "stateProvince": "Batticaloa",
        "locality": "Batticaloa",
        "country": "LK",
        "postalCode": "30300",
        "latitude": "7.7782",
        "longitude": "81.6038"
    },
    "contact": {
        "email": "tashley145@unicom.com",
        "phone": "+61-145-976-0920",
        "socMedia": {
            "linkedin": "tashley145@unicom.com@linkedin.com"
        }
    },
    "login": {
        "username": "tashley",
        "oauth2": "tashley@linkedin.com",
        "password": "$2y$10$BjbEO4JyE9hG3whteHCErOVcXB2ZlBpnj7z13eubg3abZtbKxqJtC"
    },
    "otherContact": {
        "emails": [
            "tashley145@ccs.com",
            "tashley145@megafon.com",
            "tashley145@relcom.com"
        ],
        "phoneNumbers": [
            "+61-145-053-6445",
            "+61-145-202-9636",
            "+61-145-678-1708"
        ],
        "socMedias": [
            {
                "linkedin": "tashley145@ccs.com@linkedin.com"
            },
            {
                "line": "tashley145@megafon.com@line.com"
            },
            {
                "line": "tashley145@relcom.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-01-17"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOUTDWAG7767",
    "businessName": "Boutique Agency Ltd",
    "revenueSplit": 0.22,
    "acctBalance": 539426.45,
    "name": {
        "title": "Mr",
        "first": "Delmar",
        "middle": "E",
        "last": "Wagner",
        "suffix": null
    },
    "address": {
        "streetAddress": "8577 Little River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sydney North",
        "stateProvince": "NS",
        "locality": "Sydney",
        "country": "CA",
        "postalCode": "B1N",
        "latitude": "46.1975",
        "longitude": "-60.1559"
    },
    "contact": {
        "email": "dwagner146@icom.com",
        "phone": "+61-146-253-7767",
        "socMedia": {
            "twitter": "dwagner146@icom.com@twitter.com"
        }
    },
    "login": {
        "username": "dwagner",
        "oauth2": "dwagner@twitter.com",
        "password": "$2y$10$0iskXRELcsv5dm4lH2sDmOoJVRAvLWaFzRmYwUoRrWMOiLX09KW1W"
    },
    "otherContact": {
        "emails": [
            "dwagner146@telekom.com",
            "dwagner146@safaricom.com",
            "dwagner146@chunghwa.com"
        ],
        "phoneNumbers": [
            "+61-146-058-6364",
            "+61-146-590-7207",
            "+61-146-326-0601"
        ],
        "socMedias": [
            {
                "skype": "dwagner146@telekom.com@skype.com"
            },
            {
                "facebook": "dwagner146@safaricom.com@facebook.com"
            },
            {
                "twitter": "dwagner146@chunghwa.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-08-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYJCUM9702",
    "businessName": "Lazy Bird Business LLC",
    "revenueSplit": 0.01,
    "acctBalance": 7406.64,
    "name": {
        "title": null,
        "first": "Jonathan",
        "middle": null,
        "last": "Cummings",
        "suffix": null
    },
    "address": {
        "streetAddress": "1133 Long Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Esch-sur-Alzette",
        "stateProvince": "ES",
        "locality": "Esch-sur-Alzette",
        "country": "LU",
        "postalCode": "L-4130",
        "latitude": "49.4956",
        "longitude": "5.982"
    },
    "contact": {
        "email": "jcumming147@safaricom.com",
        "phone": "+61-147-867-9702",
        "socMedia": []
    },
    "login": {
        "username": "jcumming",
        "oauth2": null,
        "password": "$2y$10$k78V2UEVrh7JMt6BaLhYkOvg9vaT1.VKWUeMyUIk3HUBqevkj1hgm"
    },
    "otherContact": {
        "emails": [
            "jcumming147@millicom.com",
            "jcumming147@eunet.com"
        ],
        "phoneNumbers": [
            "+61-147-672-9376",
            "+61-147-350-5370"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-04-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCQNAS1093",
    "businessName": "Success Industries ",
    "revenueSplit": 0.11,
    "acctBalance": 663593.52,
    "name": {
        "title": "Mr",
        "first": "Quinn",
        "middle": "V",
        "last": "Nash",
        "suffix": null
    },
    "address": {
        "streetAddress": "4942 Blue Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Southfleet",
        "stateProvince": "England",
        "locality": "Kent",
        "country": "GB",
        "postalCode": "DA13",
        "latitude": "51.4163",
        "longitude": "0.3203"
    },
    "contact": {
        "email": "qnash148@econnect.com",
        "phone": "+61-148-776-1093",
        "socMedia": {
            "linkedin": "qnash148@econnect.com@linkedin.com"
        }
    },
    "login": {
        "username": "qnash",
        "oauth2": "qnash@linkedin.com",
        "password": "$2y$10$HlHcaATAS4SH7HTPx86MVONc\/SJNtdo.UE3YmfCYEWyfSIoJHiLu."
    },
    "otherContact": {
        "emails": [
            "qnash148@sprint.com"
        ],
        "phoneNumbers": [
            "+61-148-284-7318"
        ],
        "socMedias": [
            {
                "line": "qnash148@sprint.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-11-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOTHOO0166",
    "businessName": "Accomodation Trust LLC",
    "revenueSplit": 0.42,
    "acctBalance": 341576.59,
    "name": {
        "title": "Mr",
        "first": "Tanner",
        "middle": "M",
        "last": "Hoover",
        "suffix": null
    },
    "address": {
        "streetAddress": "6159 Green Gully Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Carmona",
        "stateProvince": "Carmona",
        "locality": "Nandayure",
        "country": "CR",
        "postalCode": "50901",
        "latitude": "9.9889",
        "longitude": "-85.2599"
    },
    "contact": {
        "email": "thoover149@tt.com",
        "phone": "+61-149-052-0166",
        "socMedia": {
            "line": "thoover149@tt.com@line.com"
        }
    },
    "login": {
        "username": "thoover",
        "oauth2": "thoover@line.com",
        "password": "$2y$10$4ubRHNU7NJ5NgurNy\/DIF.RvKrX11MpSO\/7I10f2x9rljPC6RT86i"
    },
    "otherContact": {
        "emails": [
            "thoover149@econnect.com",
            "thoover149@chunghwa.com"
        ],
        "phoneNumbers": [
            "+61-149-833-9996",
            "+61-149-726-9357"
        ],
        "socMedias": [
            {
                "linkedin": "thoover149@econnect.com@linkedin.com"
            },
            {
                "facebook": "thoover149@chunghwa.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-05-28"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOSWIS4863",
    "businessName": "Accomodation Business LLC",
    "revenueSplit": 0.14,
    "acctBalance": 305297.3,
    "name": {
        "title": null,
        "first": "Sheron",
        "middle": null,
        "last": "Wise",
        "suffix": null
    },
    "address": {
        "streetAddress": "8151 Little Tree Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "67",
        "city": "Mississauga (West Rathwood \/ East Hurontario \/ SE Gateway)",
        "stateProvince": "ON",
        "locality": "Mississauga",
        "country": "CA",
        "postalCode": "L4Z",
        "latitude": "43.6192",
        "longitude": "-79.6538"
    },
    "contact": {
        "email": "swise150@vimpelcom.com",
        "phone": "+61-150-131-4863",
        "socMedia": []
    },
    "login": {
        "username": "swise",
        "oauth2": null,
        "password": "$2y$10$HnJGcxdp2R9QTN5LKvN\/z.bPcd.MWtEo7\/Ml0QLZvGjP.vKISLlbO"
    },
    "otherContact": {
        "emails": [
            "swise150@relcom.com",
            "swise150@bifty.com",
            "swise150@icom.com"
        ],
        "phoneNumbers": [
            "+61-150-946-6526",
            "+61-150-699-2353",
            "+61-150-446-9108"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-05-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "COMFLSTR9995",
    "businessName": "Comfort Accomdations Inc",
    "revenueSplit": 0.44,
    "acctBalance": 616086.76,
    "name": {
        "title": "Ms",
        "first": "Loria",
        "middle": "O",
        "last": "Strong",
        "suffix": null
    },
    "address": {
        "streetAddress": "3055 Little Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tinian",
        "stateProvince": "Tinian",
        "locality": "Tinian",
        "country": "MP",
        "postalCode": "96952",
        "latitude": "15.029",
        "longitude": "145.616"
    },
    "contact": {
        "email": "lstrong151@frontier.com",
        "phone": "+61-151-280-9995",
        "socMedia": {
            "linkedin": "lstrong151@frontier.com@linkedin.com"
        }
    },
    "login": {
        "username": "lstrong",
        "oauth2": "lstrong@linkedin.com",
        "password": "$2y$10$7Et3aTa2yvewAoqiRSarauEs5RjgzdVqLAvEyio1K2WD\/DwzBpitK"
    },
    "otherContact": {
        "emails": [
            "lstrong151@singtel.com",
            "lstrong151@kddi.com",
            "lstrong151@worldnet.com"
        ],
        "phoneNumbers": [
            "+61-151-222-5722",
            "+61-151-388-3037",
            "+61-151-620-8659"
        ],
        "socMedias": [
            {
                "linkedin": "lstrong151@singtel.com@linkedin.com"
            },
            {
                "linkedin": "lstrong151@kddi.com@linkedin.com"
            },
            {
                "facebook": "lstrong151@worldnet.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-10-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOPZUN2938",
    "businessName": "Accomodation Accomdations LLC",
    "revenueSplit": 0.39,
    "acctBalance": 557566.29,
    "name": {
        "title": "Mr",
        "first": "Paris",
        "middle": "T",
        "last": "Zuniga",
        "suffix": null
    },
    "address": {
        "streetAddress": "4839 Big Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Coachford",
        "stateProvince": "Scotland",
        "locality": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB54",
        "latitude": "57.3709",
        "longitude": "-2.8293"
    },
    "contact": {
        "email": "pzuniga152@kddi.com",
        "phone": "+61-152-708-2938",
        "socMedia": {
            "skype": "pzuniga152@kddi.com@skype.com"
        }
    },
    "login": {
        "username": "pzuniga",
        "oauth2": "pzuniga@skype.com",
        "password": "$2y$10$vryZyBpJXhX47VUIO9GeNudu8OKsMClIbkHdxdpAGx\/8EEpSjRvp6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-10-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFONGIL2558",
    "businessName": "Affordable Business Company",
    "revenueSplit": 0.24,
    "acctBalance": 842895.93,
    "name": {
        "title": null,
        "first": "Nancie",
        "middle": null,
        "last": "Giles",
        "suffix": null
    },
    "address": {
        "streetAddress": "9085 Green Gulch Circle",
        "buildingName": null,
        "floor": 7,
        "roomAptCondoFlat": null,
        "city": "\u017dinkovy",
        "stateProvince": "Plze\u0148-jih",
        "locality": "Plze\u0148-jih",
        "country": "CZ",
        "postalCode": "335 54",
        "latitude": "49.5",
        "longitude": "13.5"
    },
    "contact": {
        "email": "ngiles153@ui.com",
        "phone": "+61-153-272-2558",
        "socMedia": []
    },
    "login": {
        "username": "ngiles",
        "oauth2": null,
        "password": "$2y$10$yuupfUo6ZOgbzDn15CHq4edzdbIyLWjul5n2ZOeg7Rt9b7hfXv6cu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-08-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYIBRU9246",
    "businessName": "Lazy Bird Rooms ",
    "revenueSplit": 0.36,
    "acctBalance": 631654.42,
    "name": {
        "title": "Ms",
        "first": "Ileen",
        "middle": "I",
        "last": "Bruce",
        "suffix": null
    },
    "address": {
        "streetAddress": "5912 Red Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Giffard",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3851",
        "latitude": "-38.4167",
        "longitude": "147.0833"
    },
    "contact": {
        "email": "ibruce154@movil.com",
        "phone": "+61-154-690-9246",
        "socMedia": {
            "line": "ibruce154@movil.com@line.com"
        }
    },
    "login": {
        "username": "ibruce",
        "oauth2": "ibruce@line.com",
        "password": "$2y$10$\/\/Fr.3vtqO0DrMgduGpaYOwUyLjl85SWmrDfWwB2qvsSIdki7yTzS"
    },
    "otherContact": {
        "emails": [
            "ibruce154@telesystems.com",
            "ibruce154@bt.com"
        ],
        "phoneNumbers": [
            "+61-154-162-3492",
            "+61-154-570-6826"
        ],
        "socMedias": [
            {
                "facebook": "ibruce154@telesystems.com@facebook.com"
            },
            {
                "skype": "ibruce154@bt.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-02-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOTREI2365",
    "businessName": "Accomodation Accomdations ",
    "revenueSplit": 0.11,
    "acctBalance": 651213.9,
    "name": {
        "title": "Ms",
        "first": "Tatiana",
        "middle": "E",
        "last": "Reilly",
        "suffix": null
    },
    "address": {
        "streetAddress": "5292 Little Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saipan",
        "stateProvince": "Saipan",
        "locality": "Saipan",
        "country": "MP",
        "postalCode": "96950",
        "latitude": "15.1685",
        "longitude": "145.7408"
    },
    "contact": {
        "email": "treilly155@ccs.com",
        "phone": "+61-155-259-2365",
        "socMedia": {
            "linkedin": "treilly155@ccs.com@linkedin.com"
        }
    },
    "login": {
        "username": "treilly",
        "oauth2": "treilly@linkedin.com",
        "password": "$2y$10$IHVIxMEaoQ8vHfpO4bH26ujnHoYop3o\/G2JzclOVrW1RhRwSiiyRu"
    },
    "otherContact": {
        "emails": [
            "treilly155@vimpelcom.com",
            "treilly155@telenor.com"
        ],
        "phoneNumbers": [
            "+61-155-304-5397",
            "+61-155-118-0555"
        ],
        "socMedias": [
            {
                "skype": "treilly155@vimpelcom.com@skype.com"
            },
            {
                "linkedin": "treilly155@telenor.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-05-07"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEEMWEA0868",
    "businessName": "Sleep Right Agency Ltd",
    "revenueSplit": 0.06,
    "acctBalance": 737130.81,
    "name": {
        "title": null,
        "first": "Mickey",
        "middle": null,
        "last": "Weaver",
        "suffix": null
    },
    "address": {
        "streetAddress": "2010 Little Canyon Avenue",
        "buildingName": "Building D7",
        "floor": null,
        "roomAptCondoFlat": "82",
        "city": "North Wales",
        "stateProvince": "PA",
        "locality": "Montgomery",
        "country": "US",
        "postalCode": "19455",
        "latitude": "40.2109",
        "longitude": "-75.2782"
    },
    "contact": {
        "email": "mweaver156@eunet.com",
        "phone": "+61-156-112-0868",
        "socMedia": []
    },
    "login": {
        "username": "mweaver",
        "oauth2": null,
        "password": "$2y$10$7zyl\/zQNBsSOkNSq4iMhNu87RwdQliMblEtvWUrd4spl8FH3jEapa"
    },
    "otherContact": {
        "emails": [
            "mweaver156@chunghwa.com"
        ],
        "phoneNumbers": [
            "+61-156-643-6771"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-12-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOUTNTYL6979",
    "businessName": "Boutique Associates LLC",
    "revenueSplit": 0.4,
    "acctBalance": 60877.37,
    "name": {
        "title": "Mr",
        "first": "Nicolas",
        "middle": "U",
        "last": "Tyler",
        "suffix": null
    },
    "address": {
        "streetAddress": "5787 Winding Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dogana",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47891",
        "latitude": "43.9803",
        "longitude": "12.4905"
    },
    "contact": {
        "email": "ntyler157@tt.com",
        "phone": "+61-157-890-6979",
        "socMedia": {
            "skype": "ntyler157@tt.com@skype.com"
        }
    },
    "login": {
        "username": "ntyler",
        "oauth2": "ntyler@skype.com",
        "password": "$2y$10$b94AgXbzZzF2g.FsX.NgFeI3tFN.Rt8l.KDs23DqKZn0QyfpTIn0m"
    },
    "otherContact": {
        "emails": [
            "ntyler157@telecom.com"
        ],
        "phoneNumbers": [
            "+61-157-917-6079"
        ],
        "socMedias": [
            {
                "google": "ntyler157@telecom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-03-14"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISPJAC5713",
    "businessName": "Leisure Industries ",
    "revenueSplit": 0.12,
    "acctBalance": 624441.6,
    "name": {
        "title": "Ms",
        "first": "Pamula",
        "middle": "X",
        "last": "Jacobson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2567 Green Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ascreavie",
        "stateProvince": "Scotland",
        "locality": "Angus",
        "country": "GB",
        "postalCode": "DD8",
        "latitude": "56.5818",
        "longitude": "-3"
    },
    "contact": {
        "email": "pjacobso158@ais.com",
        "phone": "+61-158-868-5713",
        "socMedia": {
            "linkedin": "pjacobso158@ais.com@linkedin.com"
        }
    },
    "login": {
        "username": "pjacobso",
        "oauth2": "pjacobso@linkedin.com",
        "password": "$2y$10$mZJrxcJWG.EXuKuI6L9AC.xgQBCFggW5hykeqscCSPFN0FPxi24iW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-02-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYFPUG7129",
    "businessName": "Lazy Bird Business Ltd",
    "revenueSplit": 0.46,
    "acctBalance": 219488.46,
    "name": {
        "title": null,
        "first": "Fannie",
        "middle": null,
        "last": "Pugh",
        "suffix": null
    },
    "address": {
        "streetAddress": "3137 Blue Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ron Taluk Kut",
        "stateProvince": "NA",
        "locality": "Gadag",
        "country": "IN",
        "postalCode": "582209",
        "latitude": "15.5827",
        "longitude": "75.5057"
    },
    "contact": {
        "email": "fpugh159@worldnet.com",
        "phone": "+61-159-688-7129",
        "socMedia": []
    },
    "login": {
        "username": "fpugh",
        "oauth2": null,
        "password": "$2y$10$cL4mIRCm89Zd.VvmeXME1OeuOwrJX.QcyBaK2AehffqJFQ86B1Xci"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-01-15"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SERICDEL9334",
    "businessName": "Serious Agency Inc",
    "revenueSplit": 0.07,
    "acctBalance": 645248.76,
    "name": {
        "title": "Ms",
        "first": "Clyde",
        "middle": "L",
        "last": "Delgado",
        "suffix": null
    },
    "address": {
        "streetAddress": "3486 Green Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bijron",
        "stateProvince": "Baldeogarh",
        "locality": "Tikamgarh",
        "country": "IN",
        "postalCode": "472339",
        "latitude": "24.7868",
        "longitude": "79.0972"
    },
    "contact": {
        "email": "cdelgado160@ptcl.com",
        "phone": "+61-160-483-9334",
        "socMedia": {
            "facebook": "cdelgado160@ptcl.com@facebook.com"
        }
    },
    "login": {
        "username": "cdelgado",
        "oauth2": "cdelgado@facebook.com",
        "password": "$2y$10$Gj7usOcsj9rYLERkP3\/VPOQORYah2oPeV38gYyrzykc9.gHDg6\/PC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1938-06-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFOWHEA5776",
    "businessName": "Affordable Partners ",
    "revenueSplit": 0.36,
    "acctBalance": 520562.60000000003,
    "name": {
        "title": "Mr",
        "first": "Werner",
        "middle": "Y",
        "last": "Heath",
        "suffix": null
    },
    "address": {
        "streetAddress": "690 Little Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cortland",
        "stateProvince": "OH",
        "locality": "Trumbull",
        "country": "US",
        "postalCode": "44410",
        "latitude": "41.3251",
        "longitude": "-80.7327"
    },
    "contact": {
        "email": "wheath161@etisalat.com",
        "phone": "+61-161-502-5776",
        "socMedia": {
            "twitter": "wheath161@etisalat.com@twitter.com"
        }
    },
    "login": {
        "username": "wheath",
        "oauth2": "wheath@twitter.com",
        "password": "$2y$10$DN5qSdw65s0D30QpU4FkvesMqOvpnTjyVzwrVdGhuvlcKlMv78gM2"
    },
    "otherContact": {
        "emails": [
            "wheath161@oi.com",
            "wheath161@airtel.com",
            "wheath161@telia.com"
        ],
        "phoneNumbers": [
            "+61-161-246-8189",
            "+61-161-252-7911",
            "+61-161-100-5803"
        ],
        "socMedias": [
            {
                "linkedin": "wheath161@oi.com@linkedin.com"
            },
            {
                "twitter": "wheath161@airtel.com@twitter.com"
            },
            {
                "twitter": "wheath161@telia.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-10-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOUTRCHA7912",
    "businessName": "Boutique Agency Inc",
    "revenueSplit": 0.01,
    "acctBalance": 396432.84,
    "name": {
        "title": null,
        "first": "Rob",
        "middle": null,
        "last": "Chandler",
        "suffix": null
    },
    "address": {
        "streetAddress": "9383 Green River Circle",
        "buildingName": null,
        "floor": 6,
        "roomAptCondoFlat": "78",
        "city": "Stuttgart",
        "stateProvince": "AR",
        "locality": "Arkansas",
        "country": "US",
        "postalCode": "72160",
        "latitude": "34.4854",
        "longitude": "-91.5487"
    },
    "contact": {
        "email": "rchandle162@movil.com",
        "phone": "+61-162-615-7912",
        "socMedia": []
    },
    "login": {
        "username": "rchandle",
        "oauth2": null,
        "password": "$2y$10$62vxDp7GTS5ZyAPn1pJZauhVzNy1jpL70x\/yg3w6xXcjt0O6pSyjy"
    },
    "otherContact": {
        "emails": [
            "rchandle162@sprint.com",
            "rchandle162@kpn.com",
            "rchandle162@optus.com"
        ],
        "phoneNumbers": [
            "+61-162-880-1906",
            "+61-162-724-9695",
            "+61-162-802-0348"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-06-23"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYEPOW5162",
    "businessName": "Lazy Bird Partners Company",
    "revenueSplit": 0.14,
    "acctBalance": 150075.52,
    "name": {
        "title": "Ms",
        "first": "Elyse",
        "middle": "C",
        "last": "Powell",
        "suffix": null
    },
    "address": {
        "streetAddress": "1366 Long Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Grobelno",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "3231",
        "latitude": "46.2117",
        "longitude": "15.4447"
    },
    "contact": {
        "email": "epowell163@turkcell.com",
        "phone": "+61-163-362-5162",
        "socMedia": {
            "linkedin": "epowell163@turkcell.com@linkedin.com"
        }
    },
    "login": {
        "username": "epowell",
        "oauth2": "epowell@linkedin.com",
        "password": "$2y$10$DofMLFNQzTekev99Q1G0XeyRnIJUPBC99YKMYMaMuid13hYERjqje"
    },
    "otherContact": {
        "emails": [
            "epowell163@airtel.com",
            "epowell163@telesystems.com",
            "epowell163@singtel.com"
        ],
        "phoneNumbers": [
            "+61-163-141-9820",
            "+61-163-663-5935",
            "+61-163-251-5927"
        ],
        "socMedias": [
            {
                "linkedin": "epowell163@airtel.com@linkedin.com"
            },
            {
                "twitter": "epowell163@telesystems.com@twitter.com"
            },
            {
                "twitter": "epowell163@singtel.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-09-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FRIEALEA7902",
    "businessName": "Friendly Trust Inc",
    "revenueSplit": 0.02,
    "acctBalance": 356640.86,
    "name": {
        "title": "Ms",
        "first": "Ariane",
        "middle": "T",
        "last": "Leach",
        "suffix": null
    },
    "address": {
        "streetAddress": "1135 Little Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Valasapalle",
        "stateProvince": "Madanapalle",
        "locality": "Chittoor",
        "country": "IN",
        "postalCode": "517326",
        "latitude": "14.0987",
        "longitude": "78.3306"
    },
    "contact": {
        "email": "aleach164@telstra.com",
        "phone": "+61-164-348-7902",
        "socMedia": {
            "linkedin": "aleach164@telstra.com@linkedin.com"
        }
    },
    "login": {
        "username": "aleach",
        "oauth2": "aleach@linkedin.com",
        "password": "$2y$10$NoIrEAJ9Ax.vzjl2mYNpdOMHg32iMQLOoj5uzp5mI1y9vISbi8Qie"
    },
    "otherContact": {
        "emails": [
            "aleach164@daxnet.com",
            "aleach164@swisscom.com",
            "aleach164@zain.com"
        ],
        "phoneNumbers": [
            "+61-164-603-2098",
            "+61-164-417-9129",
            "+61-164-564-6144"
        ],
        "socMedias": [
            {
                "google": "aleach164@daxnet.com@google.com"
            },
            {
                "facebook": "aleach164@swisscom.com@facebook.com"
            },
            {
                "twitter": "aleach164@zain.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-11-10"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYOWYA6238",
    "businessName": "Lazy Bird Agency Ltd",
    "revenueSplit": 0.08,
    "acctBalance": 99875.5,
    "name": {
        "title": null,
        "first": "Octavio",
        "middle": null,
        "last": "Wyatt",
        "suffix": null
    },
    "address": {
        "streetAddress": "4002 Little Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nadur",
        "stateProvince": "In-Nadur",
        "locality": "In-Nadur",
        "country": "MT",
        "postalCode": "NDR",
        "latitude": "36.0486",
        "longitude": "14.2944"
    },
    "contact": {
        "email": "owyatt165@rogers.com",
        "phone": "+61-165-201-6238",
        "socMedia": []
    },
    "login": {
        "username": "owyatt",
        "oauth2": null,
        "password": "$2y$10$wZpS20iJKJ.YT6ZkcpSWZ.\/vUn1WduRmO1YaEd33lLE5Bs\/TnCzUW"
    },
    "otherContact": {
        "emails": [
            "owyatt165@bt.com",
            "owyatt165@bt.com",
            "owyatt165@ktc.com"
        ],
        "phoneNumbers": [
            "+61-165-385-4106",
            "+61-165-413-8438",
            "+61-165-681-8269"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-09-07"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISMBRA5372",
    "businessName": "Leisure Partners ",
    "revenueSplit": 0.27,
    "acctBalance": 337864,
    "name": {
        "title": "Mr",
        "first": "Merlin",
        "middle": "Z",
        "last": "Bradley",
        "suffix": null
    },
    "address": {
        "streetAddress": "9158 Big Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lowell",
        "stateProvince": "VT",
        "locality": "Orleans",
        "country": "US",
        "postalCode": "05847",
        "latitude": "44.7961",
        "longitude": "-72.4501"
    },
    "contact": {
        "email": "mbradley166@turkcell.com",
        "phone": "+61-166-865-5372",
        "socMedia": {
            "line": "mbradley166@turkcell.com@line.com"
        }
    },
    "login": {
        "username": "mbradley",
        "oauth2": "mbradley@line.com",
        "password": "$2y$10$IiyegLs9tmwjBH9HlcSUhO1EsvWhYo9zEiRALeT.bTrAeDgPvtg5a"
    },
    "otherContact": {
        "emails": [
            "mbradley166@sprint.com",
            "mbradley166@uunet.com",
            "mbradley166@ccs.com"
        ],
        "phoneNumbers": [
            "+61-166-379-4501",
            "+61-166-621-7049",
            "+61-166-686-3516"
        ],
        "socMedias": [
            {
                "skype": "mbradley166@sprint.com@skype.com"
            },
            {
                "line": "mbradley166@uunet.com@line.com"
            },
            {
                "linkedin": "mbradley166@ccs.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-09-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FRIEAMAT6494",
    "businessName": "Friendly Business ",
    "revenueSplit": 0.38,
    "acctBalance": 883537.37,
    "name": {
        "title": "Mr",
        "first": "Andy",
        "middle": "T",
        "last": "Mata",
        "suffix": null
    },
    "address": {
        "streetAddress": "1897 Long Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Smith\u2019s",
        "stateProvince": "Smith\u2019s Parish",
        "locality": "Smith\u2019s Parish",
        "country": "BM",
        "postalCode": "HS 02",
        "latitude": "32.354",
        "longitude": "-64.7096"
    },
    "contact": {
        "email": "amata167@ccs.com",
        "phone": "+61-167-180-6494",
        "socMedia": {
            "line": "amata167@ccs.com@line.com"
        }
    },
    "login": {
        "username": "amata",
        "oauth2": "amata@line.com",
        "password": "$2y$10$NMPukojg0ZrTYC1Ly1996epDh6HtLNnFLpZsqAMO6EAWgzjvgWTrO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-06-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "UPBEAWON3729",
    "businessName": "Upbeat Industries Ltd",
    "revenueSplit": 0.02,
    "acctBalance": 105001.63,
    "name": {
        "title": null,
        "first": "Alberta",
        "middle": null,
        "last": "Wong",
        "suffix": null
    },
    "address": {
        "streetAddress": "9171 Winding Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "76",
        "city": "Canteen Creek",
        "stateProvince": "NT",
        "locality": "Northern Territory",
        "country": "AU",
        "postalCode": "0872",
        "latitude": "-20.6403",
        "longitude": "135.5865"
    },
    "contact": {
        "email": "awong168@orstom.com",
        "phone": "+61-168-481-3729",
        "socMedia": []
    },
    "login": {
        "username": "awong",
        "oauth2": null,
        "password": "$2y$10$sM.757wcLRuAyL4PIm8LF.boyOafVrDCbF2A1wk2naVbC84yZSV4W"
    },
    "otherContact": {
        "emails": [
            "awong168@telus.com",
            "awong168@greennet.com"
        ],
        "phoneNumbers": [
            "+61-168-543-0173",
            "+61-168-840-2607"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-07-15"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SERILPAY2595",
    "businessName": "Serious Business Company",
    "revenueSplit": 0.06,
    "acctBalance": 857920.64,
    "name": {
        "title": "Ms",
        "first": "Laure",
        "middle": "R",
        "last": "Payne",
        "suffix": null
    },
    "address": {
        "streetAddress": "7551 Little Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chicago",
        "stateProvince": "IL",
        "locality": "Cook",
        "country": "US",
        "postalCode": "60611",
        "latitude": "41.8971",
        "longitude": "-87.6223"
    },
    "contact": {
        "email": "lpayne170@greennet.com",
        "phone": "+61-170-031-2595",
        "socMedia": {
            "twitter": "lpayne170@greennet.com@twitter.com"
        }
    },
    "login": {
        "username": "lpayne",
        "oauth2": "lpayne@twitter.com",
        "password": "$2y$10$yOw9Qc8p9fueL7a5fIZrueum5Oe0szTujdGz1Iz4Y\/hLUnNSZb7vG"
    },
    "otherContact": {
        "emails": [
            "lpayne170@ais.com"
        ],
        "phoneNumbers": [
            "+61-170-263-2721"
        ],
        "socMedias": [
            {
                "line": "lpayne170@ais.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-08-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "COMPMMOS2026",
    "businessName": "Competitive Business ",
    "revenueSplit": 0.01,
    "acctBalance": 478734.65,
    "name": {
        "title": null,
        "first": "Maxima",
        "middle": null,
        "last": "Moss",
        "suffix": null
    },
    "address": {
        "streetAddress": "6620 Green Tree Ride",
        "buildingName": null,
        "floor": 9,
        "roomAptCondoFlat": null,
        "city": "Maunabo",
        "stateProvince": "Maunabo",
        "locality": "Maunabo",
        "country": "PR",
        "postalCode": "00707",
        "latitude": "18.0072",
        "longitude": "-65.8993"
    },
    "contact": {
        "email": "mmoss171@telecom.com",
        "phone": "+61-171-828-2026",
        "socMedia": []
    },
    "login": {
        "username": "mmoss",
        "oauth2": null,
        "password": "$2y$10$pvGchJ6AUhuHv.J9KYIM\/e3M1S9PyLShNquvRn42A4rwlNhnhpv5G"
    },
    "otherContact": {
        "emails": [
            "mmoss171@swisscom.com",
            "mmoss171@verizon.com",
            "mmoss171@ptcl.com"
        ],
        "phoneNumbers": [
            "+61-171-140-0973",
            "+61-171-848-8096",
            "+61-171-786-4738"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-02-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAZYEELL8701",
    "businessName": "Lazy Bird Agency ",
    "revenueSplit": 0.23,
    "acctBalance": 492886.64,
    "name": {
        "title": "Ms",
        "first": "Edwina",
        "middle": "E",
        "last": "Ellis",
        "suffix": null
    },
    "address": {
        "streetAddress": "7728 Blue Bend Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "West Wollongong",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2500",
        "latitude": "-34.4248",
        "longitude": "150.8642"
    },
    "contact": {
        "email": "eellis172@bifty.com",
        "phone": "+61-172-893-8701",
        "socMedia": {
            "line": "eellis172@bifty.com@line.com"
        }
    },
    "login": {
        "username": "eellis",
        "oauth2": "eellis@line.com",
        "password": "$2y$10$eCIPPpnaaZHEEWYQjmAjS.Ub3\/vpnuEwyRGqRPldy6gzGJ3q0peD."
    },
    "otherContact": {
        "emails": [
            "eellis172@relcom.com",
            "eellis172@cerist.com"
        ],
        "phoneNumbers": [
            "+61-172-482-9075",
            "+61-172-482-2102"
        ],
        "socMedias": [
            {
                "linkedin": "eellis172@relcom.com@linkedin.com"
            },
            {
                "google": "eellis172@cerist.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-07-22"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOTBAL8136",
    "businessName": "Accomodation Agency Ltd",
    "revenueSplit": 0.25,
    "acctBalance": 58982.85,
    "name": {
        "title": "Ms",
        "first": "Taneka",
        "middle": "Q",
        "last": "Ballard",
        "suffix": null
    },
    "address": {
        "streetAddress": "1860 Red Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kingshill",
        "stateProvince": "St. Croix",
        "locality": "St. Croix",
        "country": "VI",
        "postalCode": "00851",
        "latitude": "17.7099",
        "longitude": "-64.7009"
    },
    "contact": {
        "email": "tballard173@tm.com",
        "phone": "+61-173-356-8136",
        "socMedia": {
            "google": "tballard173@tm.com@google.com"
        }
    },
    "login": {
        "username": "tballard",
        "oauth2": "tballard@google.com",
        "password": "$2y$10$2mtRzl81t1QHAR\/ExryPauBlwKjtRRpzC6w\/UsQhWUOTN8.Jfv.We"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-11-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISALI4311",
    "businessName": "Leisure Rooms LLC",
    "revenueSplit": 0.28,
    "acctBalance": 490840.95,
    "name": {
        "title": null,
        "first": "Ayanna",
        "middle": null,
        "last": "Li",
        "suffix": null
    },
    "address": {
        "streetAddress": "4203 Little Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "47",
        "city": "Kuthera Jaswalan",
        "stateProvince": "Amb(T)",
        "locality": "Una",
        "country": "IN",
        "postalCode": "177206",
        "latitude": "31.5432",
        "longitude": "76.5342"
    },
    "contact": {
        "email": "ali174@greennet.com",
        "phone": "+61-174-110-4311",
        "socMedia": []
    },
    "login": {
        "username": "ali",
        "oauth2": null,
        "password": "$2y$10$FiNvrq9X9M7HcVaXyFJvFOQPv6KgxmpljSA7xp9cro.ui7xk1KEKG"
    },
    "otherContact": {
        "emails": [
            "ali174@ote.com",
            "ali174@ccs.com"
        ],
        "phoneNumbers": [
            "+61-174-367-8579",
            "+61-174-341-5516"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-12-30"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFOLSNY6878",
    "businessName": "Affordable Rooms ",
    "revenueSplit": 0.2,
    "acctBalance": 245318.32,
    "name": {
        "title": "Ms",
        "first": "Lorina",
        "middle": "J",
        "last": "Snyder",
        "suffix": null
    },
    "address": {
        "streetAddress": "4515 Long Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Malayinkil",
        "stateProvince": "Neyyattinkara",
        "locality": "Thiruvananthapuram",
        "country": "IN",
        "postalCode": "695571",
        "latitude": "8.5106",
        "longitude": "77.0519"
    },
    "contact": {
        "email": "lsnyder175@seednet.com",
        "phone": "+61-175-069-6878",
        "socMedia": {
            "twitter": "lsnyder175@seednet.com@twitter.com"
        }
    },
    "login": {
        "username": "lsnyder",
        "oauth2": "lsnyder@twitter.com",
        "password": "$2y$10$hrVIR1yb00R\/THa0gbdTHO1FfHlk3fwAeSYDz18RODy3QKwtAmgRC"
    },
    "otherContact": {
        "emails": [
            "lsnyder175@ui.com"
        ],
        "phoneNumbers": [
            "+61-175-676-6674"
        ],
        "socMedias": [
            {
                "linkedin": "lsnyder175@ui.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-07-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SERIZATK4701",
    "businessName": "Serious Agency ",
    "revenueSplit": 0.11,
    "acctBalance": 144512.15,
    "name": {
        "title": "Ms",
        "first": "Zella",
        "middle": "T",
        "last": "Atkinson",
        "suffix": null
    },
    "address": {
        "streetAddress": "313 Winding Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Harrow",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "HA2",
        "latitude": "51.5783",
        "longitude": "-0.3321"
    },
    "contact": {
        "email": "zatkinso176@etisalat.com",
        "phone": "+61-176-700-4701",
        "socMedia": {
            "google": "zatkinso176@etisalat.com@google.com"
        }
    },
    "login": {
        "username": "zatkinso",
        "oauth2": "zatkinso@google.com",
        "password": "$2y$10$bAwYCfMb.KYL2Wu4FZuTWuAafP0.l0X7ilBmUibiIoOz\/NaCGFe7."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-12-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGRCOB9390",
    "businessName": "Budget Associates ",
    "revenueSplit": 0.33,
    "acctBalance": 848289.1,
    "name": {
        "title": null,
        "first": "Rolland",
        "middle": null,
        "last": "Cobb",
        "suffix": null
    },
    "address": {
        "streetAddress": "9640 Short Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lotificacion del Este",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11707",
        "latitude": "18.4667",
        "longitude": "-69.825"
    },
    "contact": {
        "email": "rcobb177@econnect.com",
        "phone": "+61-177-624-9390",
        "socMedia": []
    },
    "login": {
        "username": "rcobb",
        "oauth2": null,
        "password": "$2y$10$nqutadeutIX6aGxINcyytOXD1lSdO7EVqAooiU49NRaZnuS0AsMh."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-05-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYSSPE4744",
    "businessName": "Stay Awhile Trust ",
    "revenueSplit": 0.28,
    "acctBalance": 475152.63,
    "name": {
        "title": "Mr",
        "first": "Stanley",
        "middle": "F",
        "last": "Spence",
        "suffix": null
    },
    "address": {
        "streetAddress": "9647 Little Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oakley",
        "stateProvince": "England",
        "locality": "Suffolk",
        "country": "GB",
        "postalCode": "IP21",
        "latitude": "52.3648",
        "longitude": "1.2354"
    },
    "contact": {
        "email": "sspence178@apicnet.com",
        "phone": "+61-178-028-4744",
        "socMedia": {
            "linkedin": "sspence178@apicnet.com@linkedin.com"
        }
    },
    "login": {
        "username": "sspence",
        "oauth2": "sspence@linkedin.com",
        "password": "$2y$10$qIMt9v2w5CF972b5W2TKyOgSuJ\/7XoFWMF9y\/8g69snR0nR.qBeYm"
    },
    "otherContact": {
        "emails": [
            "sspence178@pldt.com",
            "sspence178@bt.com",
            "sspence178@telefonica.com"
        ],
        "phoneNumbers": [
            "+61-178-889-5138",
            "+61-178-400-0097",
            "+61-178-424-1101"
        ],
        "socMedias": [
            {
                "google": "sspence178@pldt.com@google.com"
            },
            {
                "facebook": "sspence178@bt.com@facebook.com"
            },
            {
                "linkedin": "sspence178@telefonica.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-08-22"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCECAS0005",
    "businessName": "Success Industries Ltd",
    "revenueSplit": 0.02,
    "acctBalance": 324417.59,
    "name": {
        "title": "Ms",
        "first": "Eleanor",
        "middle": "R",
        "last": "Casey",
        "suffix": null
    },
    "address": {
        "streetAddress": "2923 Blue Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Svatsum",
        "stateProvince": "Gausdal",
        "locality": "Gausdal",
        "country": "NO",
        "postalCode": "2657",
        "latitude": "61.3196",
        "longitude": "9.8606"
    },
    "contact": {
        "email": "ecasey179@softbank.com",
        "phone": "+61-179-661-0005",
        "socMedia": {
            "skype": "ecasey179@softbank.com@skype.com"
        }
    },
    "login": {
        "username": "ecasey",
        "oauth2": "ecasey@skype.com",
        "password": "$2y$10$DyFFsUTLm\/BHjeB8IB0Uy.hP3cOj8E6xb8IlUDPRX3fhmUPUF5e92"
    },
    "otherContact": {
        "emails": [
            "ecasey179@glasnet.com",
            "ecasey179@telecom.com"
        ],
        "phoneNumbers": [
            "+61-179-325-7301",
            "+61-179-211-2488"
        ],
        "socMedias": [
            {
                "skype": "ecasey179@glasnet.com@skype.com"
            },
            {
                "linkedin": "ecasey179@telecom.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-03-03"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FATCWCAR4516",
    "businessName": "Fat Cats Accomdations Ltd",
    "revenueSplit": 0.44,
    "acctBalance": 980968.15,
    "name": {
        "title": null,
        "first": "Wyatt",
        "middle": null,
        "last": "Carpenter",
        "suffix": null
    },
    "address": {
        "streetAddress": "580 Winding Hill Avenue",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": "E4",
        "city": "Madahalli",
        "stateProvince": "Malavalli",
        "locality": "Mandya",
        "country": "IN",
        "postalCode": "571430",
        "latitude": "12.8355",
        "longitude": "76.8077"
    },
    "contact": {
        "email": "wcarpent180@centurylink.com",
        "phone": "+61-180-014-4516",
        "socMedia": []
    },
    "login": {
        "username": "wcarpent",
        "oauth2": null,
        "password": "$2y$10$3ViUwv6EQfZ2LYF3wxXzl.tETOmiPMilELP94HzDqzKSbdot0uPXi"
    },
    "otherContact": {
        "emails": [
            "wcarpent180@bce.com",
            "wcarpent180@jio.com",
            "wcarpent180@telecom.com"
        ],
        "phoneNumbers": [
            "+61-180-738-3647",
            "+61-180-878-8962",
            "+61-180-474-4884"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-09-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGKSAV2607",
    "businessName": "Budget Agency LLC",
    "revenueSplit": 0.26,
    "acctBalance": 115060.61,
    "name": {
        "title": "Mr",
        "first": "Kip",
        "middle": "E",
        "last": "Savage",
        "suffix": null
    },
    "address": {
        "streetAddress": "7556 Short Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00deorl\u00e1ksh\u00f6fn",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "815",
        "latitude": "63.8559",
        "longitude": "-21.3834"
    },
    "contact": {
        "email": "ksavage181@airtel.com",
        "phone": "+61-181-819-2607",
        "socMedia": {
            "google": "ksavage181@airtel.com@google.com"
        }
    },
    "login": {
        "username": "ksavage",
        "oauth2": "ksavage@google.com",
        "password": "$2y$10$HDzxI13k0qklX6SY8Q9AxuZH\/a\/bhxHVzdEqNLH69uhFamfUcUsvS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-01-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ACCOCLUC2968",
    "businessName": "Accomodation Associates Company",
    "revenueSplit": 0.19,
    "acctBalance": 316117.07,
    "name": {
        "title": "Mr",
        "first": "Clair",
        "middle": "M",
        "last": "Lucero",
        "suffix": null
    },
    "address": {
        "streetAddress": "401 Green Tree Circle",
        "buildingName": "Building 7B",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Almo",
        "stateProvince": "KY",
        "locality": "Calloway",
        "country": "US",
        "postalCode": "42020",
        "latitude": "36.6923",
        "longitude": "-88.2929"
    },
    "contact": {
        "email": "clucero182@telstra.com",
        "phone": "+61-182-002-2968",
        "socMedia": {
            "google": "clucero182@telstra.com@google.com"
        }
    },
    "login": {
        "username": "clucero",
        "oauth2": "clucero@google.com",
        "password": "$2y$10$HB.01fMXMjXmM8iWm\/tri.T5R41QTFSuZNtw.j0AiHO\/dUzxB0jcK"
    },
    "otherContact": {
        "emails": [
            "clucero182@orange.com",
            "clucero182@megafon.com"
        ],
        "phoneNumbers": [
            "+61-182-759-4202",
            "+61-182-766-3268"
        ],
        "socMedias": [
            {
                "line": "clucero182@orange.com@line.com"
            },
            {
                "line": "clucero182@megafon.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-04-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCASHA8699",
    "businessName": "Success Associates ",
    "revenueSplit": 0.38,
    "acctBalance": 230399.16,
    "name": {
        "title": null,
        "first": "Antone",
        "middle": null,
        "last": "Sharp",
        "suffix": null
    },
    "address": {
        "streetAddress": "2367 Little Creek Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Souci",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11603",
        "latitude": "18.4722",
        "longitude": "-69.9167"
    },
    "contact": {
        "email": "asharp183@bt.com",
        "phone": "+61-183-611-8699",
        "socMedia": []
    },
    "login": {
        "username": "asharp",
        "oauth2": null,
        "password": "$2y$10$\/fGcniYk5jvOvJzcB\/\/3mOW3Hxfu9luZL6fJnsN9dtmMIAjI216pS"
    },
    "otherContact": {
        "emails": [
            "asharp183@apicnet.com",
            "asharp183@access.com",
            "asharp183@sktelecom.com"
        ],
        "phoneNumbers": [
            "+61-183-497-9412",
            "+61-183-332-6332",
            "+61-183-381-2166"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-12-23"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYTBUR8922",
    "businessName": "Stay Awhile Agency Ltd",
    "revenueSplit": 0.48,
    "acctBalance": 35238.05,
    "name": {
        "title": "Ms",
        "first": "Tonja",
        "middle": "I",
        "last": "Burns",
        "suffix": null
    },
    "address": {
        "streetAddress": "7671 Long Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Corpus Christi",
        "stateProvince": "TX",
        "locality": "Nueces",
        "country": "US",
        "postalCode": "78465",
        "latitude": "27.777",
        "longitude": "-97.4632"
    },
    "contact": {
        "email": "tburns184@telus.com",
        "phone": "+61-184-189-8922",
        "socMedia": {
            "skype": "tburns184@telus.com@skype.com"
        }
    },
    "login": {
        "username": "tburns",
        "oauth2": "tburns@skype.com",
        "password": "$2y$10$OkqyNQ6\/bP7Tqe9JAQ5brOsruuEXh8zH\/kHASCkaGqaCipqKK95ga"
    },
    "otherContact": {
        "emails": [
            "tburns184@ais.com",
            "tburns184@econnect.com"
        ],
        "phoneNumbers": [
            "+61-184-820-7926",
            "+61-184-767-0025"
        ],
        "socMedias": [
            {
                "skype": "tburns184@ais.com@skype.com"
            },
            {
                "google": "tburns184@econnect.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-01-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FATCAVAL0185",
    "businessName": "Fat Cats Associates ",
    "revenueSplit": 0.45,
    "acctBalance": 505236.71,
    "name": {
        "title": "Ms",
        "first": "Alana",
        "middle": "T",
        "last": "Valdez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3623 Red Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Obatacho Shimura",
        "stateProvince": "Ise Shi",
        "locality": "Ise Shi",
        "country": "JP",
        "postalCode": "519-0507",
        "latitude": "34.8515",
        "longitude": "136.4496"
    },
    "contact": {
        "email": "avaldez185@nii.com",
        "phone": "+61-185-440-0185",
        "socMedia": {
            "twitter": "avaldez185@nii.com@twitter.com"
        }
    },
    "login": {
        "username": "avaldez",
        "oauth2": "avaldez@twitter.com",
        "password": "$2y$10$8veVqY5ozivBGellO9HEp.YmkeDm\/QoWf9eV0fSzpPGlYMYhu4nw."
    },
    "otherContact": {
        "emails": [
            "avaldez185@icom.com"
        ],
        "phoneNumbers": [
            "+61-185-720-9447"
        ],
        "socMedias": [
            {
                "facebook": "avaldez185@icom.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-03-22"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEEDFAR5194",
    "businessName": "Sleep Right Business Company",
    "revenueSplit": 0.06,
    "acctBalance": 766042,
    "name": {
        "title": null,
        "first": "Dane",
        "middle": null,
        "last": "Farley",
        "suffix": null
    },
    "address": {
        "streetAddress": "6504 Long Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "7D",
        "city": "Barrow Nook",
        "stateProvince": "England",
        "locality": "Lancashire",
        "country": "GB",
        "postalCode": "L39",
        "latitude": "53.5556",
        "longitude": "-2.9094"
    },
    "contact": {
        "email": "dfarley186@ote.com",
        "phone": "+61-186-846-5194",
        "socMedia": []
    },
    "login": {
        "username": "dfarley",
        "oauth2": null,
        "password": "$2y$10$fm\/oGjvv4ca2j2xPAUu7aOjw8ZBnoRbbVWAMmIDqKSqFjsl3V7QZS"
    },
    "otherContact": {
        "emails": [
            "dfarley186@pldt.com",
            "dfarley186@movil.com"
        ],
        "phoneNumbers": [
            "+61-186-081-7177",
            "+61-186-106-4037"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-05-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BUDGEWON6817",
    "businessName": "Budget Rooms Ltd",
    "revenueSplit": 0.46,
    "acctBalance": 766043.77,
    "name": {
        "title": "Mr",
        "first": "Ernie",
        "middle": "H",
        "last": "Wong",
        "suffix": null
    },
    "address": {
        "streetAddress": "6303 Big Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Miguel de La Madrid",
        "stateProvince": "COL",
        "locality": "Manzanillo",
        "country": "MX",
        "postalCode": "28800",
        "latitude": "19.1341",
        "longitude": "-104.1235"
    },
    "contact": {
        "email": "ewong187@jio.com",
        "phone": "+61-187-981-6817",
        "socMedia": {
            "twitter": "ewong187@jio.com@twitter.com"
        }
    },
    "login": {
        "username": "ewong",
        "oauth2": "ewong@twitter.com",
        "password": "$2y$10$G6CZ1eP7g5d38F6c1cfQUO8DpWGzBH8sGzb4eQZX3BjIAkGSPM4K."
    },
    "otherContact": {
        "emails": [
            "ewong187@frontier.com"
        ],
        "phoneNumbers": [
            "+61-187-660-3446"
        ],
        "socMedias": [
            {
                "google": "ewong187@frontier.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-10-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISCSEL9788",
    "businessName": "Leisure Business Ltd",
    "revenueSplit": 0.08,
    "acctBalance": 753307.12,
    "name": {
        "title": "Mr",
        "first": "Christopher",
        "middle": "H",
        "last": "Sellers",
        "suffix": null
    },
    "address": {
        "streetAddress": "2448 Winding Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Willaura North",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3379",
        "latitude": "-37.6717",
        "longitude": "142.6812"
    },
    "contact": {
        "email": "csellers188@ccs.com",
        "phone": "+61-188-268-9788",
        "socMedia": {
            "linkedin": "csellers188@ccs.com@linkedin.com"
        }
    },
    "login": {
        "username": "csellers",
        "oauth2": "csellers@linkedin.com",
        "password": "$2y$10$Fml2cDU5UXugeL5ly3\/vQ.t.xxvb2sFWlihIfyb6ELycv9tdjrnlO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-04-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYABER8653",
    "businessName": "Stay Awhile Trust Inc",
    "revenueSplit": 0.05,
    "acctBalance": 428777.02,
    "name": {
        "title": "Mr",
        "first": "Abram",
        "middle": "O",
        "last": "Berger",
        "suffix": null
    },
    "address": {
        "streetAddress": "8303 Big Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eskasoni",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B1W",
        "latitude": "45.9328",
        "longitude": "-60.6438"
    },
    "contact": {
        "email": "aberger190@orange.com",
        "phone": "+61-190-868-8653",
        "socMedia": {
            "line": "aberger190@orange.com@line.com"
        }
    },
    "login": {
        "username": "aberger",
        "oauth2": "aberger@line.com",
        "password": "$2y$10$xBmLTd7PKG6.Gqhz0J.Mb.WyjYIHbD4wkT.pLB2WLazxstz6otlYK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-01-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "UPBESGAI8907",
    "businessName": "Upbeat Accomdations ",
    "revenueSplit": 0.22,
    "acctBalance": 190721.31,
    "name": {
        "title": "Mr",
        "first": "Stacy",
        "middle": "E",
        "last": "Gaines",
        "suffix": null
    },
    "address": {
        "streetAddress": "3764 Red Bend Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vila Nova de Gaia",
        "stateProvince": "Vila Nova De Gaia",
        "locality": "Vila Nova de Gaia",
        "country": "PT",
        "postalCode": "4405-907",
        "latitude": "41.1336",
        "longitude": "-8.6174"
    },
    "contact": {
        "email": "sgaines191@cubenet.com",
        "phone": "+61-191-498-8907",
        "socMedia": {
            "line": "sgaines191@cubenet.com@line.com"
        }
    },
    "login": {
        "username": "sgaines",
        "oauth2": "sgaines@line.com",
        "password": "$2y$10$BgQqfLhjUWeY7Y2Eg5BGF.sb.hbDSPA1CnCaBOxlxOO5diVPM03n2"
    },
    "otherContact": {
        "emails": [
            "sgaines191@verizon.com",
            "sgaines191@pldt.com",
            "sgaines191@telus.com"
        ],
        "phoneNumbers": [
            "+61-191-475-9027",
            "+61-191-607-8365",
            "+61-191-466-0771"
        ],
        "socMedias": [
            {
                "google": "sgaines191@verizon.com@google.com"
            },
            {
                "linkedin": "sgaines191@pldt.com@linkedin.com"
            },
            {
                "facebook": "sgaines191@telus.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-06-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFOESAL5620",
    "businessName": "Affordable Agency Ltd",
    "revenueSplit": 0.17,
    "acctBalance": 692417.4400000001,
    "name": {
        "title": null,
        "first": "Elza",
        "middle": null,
        "last": "Salinas",
        "suffix": null
    },
    "address": {
        "streetAddress": "3270 Little Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "AC",
        "city": "North York (Jane and Finch)",
        "stateProvince": "ON",
        "locality": "North York ",
        "country": "CA",
        "postalCode": "M3N",
        "latitude": "43.7568",
        "longitude": "-79.521"
    },
    "contact": {
        "email": "esalinas192@frontier.com",
        "phone": "+61-192-733-5620",
        "socMedia": []
    },
    "login": {
        "username": "esalinas",
        "oauth2": null,
        "password": "$2y$10$E8NpjvCE6TSycA0XZ8cuw.lz8wUraGiQr\/cnnlY\/16hNZceuJ\/N1G"
    },
    "otherContact": {
        "emails": [
            "esalinas192@swisscom.com",
            "esalinas192@telesystems.com",
            "esalinas192@telekom.com"
        ],
        "phoneNumbers": [
            "+61-192-683-2901",
            "+61-192-671-6920",
            "+61-192-225-8783"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-02-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFFOCLE0341",
    "businessName": "Affordable Business ",
    "revenueSplit": 0.29,
    "acctBalance": 255506.63,
    "name": {
        "title": "Mr",
        "first": "Clay",
        "middle": "A",
        "last": "Le",
        "suffix": null
    },
    "address": {
        "streetAddress": "3925 Winding River Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Iacanga",
        "stateProvince": "Sao Paulo",
        "locality": "Sao Paulo",
        "country": "BR",
        "postalCode": "17180-000",
        "latitude": "-21.9074",
        "longitude": "-49.0592"
    },
    "contact": {
        "email": "cle193@apicnet.com",
        "phone": "+61-193-046-0341",
        "socMedia": {
            "facebook": "cle193@apicnet.com@facebook.com"
        }
    },
    "login": {
        "username": "cle",
        "oauth2": "cle@facebook.com",
        "password": "$2y$10$Qnu7VIsEwhiuUHzQacvp9ezEV045WANp7cKOHvV9hwbOuXDocJ44m"
    },
    "otherContact": {
        "emails": [
            "cle193@att.com",
            "cle193@telstra.com",
            "cle193@lookdata.com"
        ],
        "phoneNumbers": [
            "+61-193-588-7977",
            "+61-193-710-1235",
            "+61-193-922-4784"
        ],
        "socMedias": [
            {
                "twitter": "cle193@att.com@twitter.com"
            },
            {
                "facebook": "cle193@telstra.com@facebook.com"
            },
            {
                "facebook": "cle193@lookdata.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-09-07"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEELWAL3341",
    "businessName": "Sleep Right Accomdations ",
    "revenueSplit": 0.22,
    "acctBalance": 543566.22,
    "name": {
        "title": "Mr",
        "first": "Lee",
        "middle": "H",
        "last": "Walsh",
        "suffix": null
    },
    "address": {
        "streetAddress": "370 Long Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Beresford",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E8K",
        "latitude": "47.6913",
        "longitude": "-65.6989"
    },
    "contact": {
        "email": "lwalsh194@openworld.com",
        "phone": "+61-194-644-3341",
        "socMedia": {
            "facebook": "lwalsh194@openworld.com@facebook.com"
        }
    },
    "login": {
        "username": "lwalsh",
        "oauth2": "lwalsh@facebook.com",
        "password": "$2y$10$Ul7BdLupCcoDa2jc1NzXUe5btYXi5YxEDo4iwi5NHoJXSDwD74OCm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-06-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISDFRA1362",
    "businessName": "Leisure Associates Inc",
    "revenueSplit": 0.27,
    "acctBalance": 663577.16,
    "name": {
        "title": null,
        "first": "Darrel",
        "middle": null,
        "last": "Franklin",
        "suffix": null
    },
    "address": {
        "streetAddress": "9707 Red Hill Road",
        "buildingName": "Building 0A",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Valdragone",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47893",
        "latitude": "43.9419",
        "longitude": "12.4474"
    },
    "contact": {
        "email": "dfrankli195@singtel.com",
        "phone": "+61-195-503-1362",
        "socMedia": []
    },
    "login": {
        "username": "dfrankli",
        "oauth2": null,
        "password": "$2y$10$wj\/nfUx3qyfh5BCP3dcrHuwfmxzKX211KDnOaoXW\/bd3CZ77UV3ve"
    },
    "otherContact": {
        "emails": [
            "dfrankli195@maxcomm.com",
            "dfrankli195@telkom.com",
            "dfrankli195@mtn.com"
        ],
        "phoneNumbers": [
            "+61-195-124-2545",
            "+61-195-490-2820",
            "+61-195-841-0846"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-12-25"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEISLCAN4710",
    "businessName": "Leisure Associates ",
    "revenueSplit": 0.06,
    "acctBalance": 520000.55,
    "name": {
        "title": "Mr",
        "first": "Lon",
        "middle": "A",
        "last": "Cantu",
        "suffix": null
    },
    "address": {
        "streetAddress": "8015 Short Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Centre-du-Qu\u00e9bec-Est (Saint-Val\u00e8re)",
        "stateProvince": "QC",
        "locality": "Centre-du-Qu\u00e9bec",
        "country": "CA",
        "postalCode": "G0P",
        "latitude": "46.0119",
        "longitude": "-71.7199"
    },
    "contact": {
        "email": "lcantu196@etisalat.com",
        "phone": "+61-196-373-4710",
        "socMedia": {
            "line": "lcantu196@etisalat.com@line.com"
        }
    },
    "login": {
        "username": "lcantu",
        "oauth2": "lcantu@line.com",
        "password": "$2y$10$JX50ljIrBsc3qhhDzkYB5.Oz7B8tivaqqBwxSghkIW12L.y.5hnxW"
    },
    "otherContact": {
        "emails": [
            "lcantu196@vodafone.com",
            "lcantu196@oi.com"
        ],
        "phoneNumbers": [
            "+61-196-458-6062",
            "+61-196-335-0562"
        ],
        "socMedias": [
            {
                "skype": "lcantu196@vodafone.com@skype.com"
            },
            {
                "twitter": "lcantu196@oi.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-02-10"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SLEEWNOL2505",
    "businessName": "Sleep Right Trust Company",
    "revenueSplit": 0.18,
    "acctBalance": 21333.66,
    "name": {
        "title": "Mr",
        "first": "Winford",
        "middle": "O",
        "last": "Nolan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2918 Little Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sedliacka Dubov\u00e1",
        "stateProvince": "ZI",
        "locality": "Doln\u00fd Kub\u00edn",
        "country": "SK",
        "postalCode": "027 55",
        "latitude": "49.2605",
        "longitude": "19.4299"
    },
    "contact": {
        "email": "wnolan197@ktc.com",
        "phone": "+61-197-571-2505",
        "socMedia": {
            "twitter": "wnolan197@ktc.com@twitter.com"
        }
    },
    "login": {
        "username": "wnolan",
        "oauth2": "wnolan@twitter.com",
        "password": "$2y$10$ZiBw7TLj\/B8XBujwiH4Jq.djGxsrJrrCjLR.gLZ6VrP7ybymWMJIu"
    },
    "otherContact": {
        "emails": [
            "wnolan197@tt.com"
        ],
        "phoneNumbers": [
            "+61-197-269-7394"
        ],
        "socMedias": [
            {
                "twitter": "wnolan197@tt.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-06-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SUCCEMEA9744",
    "businessName": "Success Associates LLC",
    "revenueSplit": 0.32,
    "acctBalance": 123820.32,
    "name": {
        "title": null,
        "first": "Ed",
        "middle": null,
        "last": "Meadows",
        "suffix": null
    },
    "address": {
        "streetAddress": "4898 Long Ditch Drive",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": "A3",
        "city": "New York",
        "stateProvince": "NY",
        "locality": "New York",
        "country": "US",
        "postalCode": "10168",
        "latitude": "40.7519",
        "longitude": "-73.9768"
    },
    "contact": {
        "email": "emeadows198@nordnet.com",
        "phone": "+61-198-134-9744",
        "socMedia": []
    },
    "login": {
        "username": "emeadows",
        "oauth2": null,
        "password": "$2y$10$a5Xd3jdbv\/zERPLn\/fk6S.PRRBs.e9EJjLZVY.p67Ren8TT7SfsPu"
    },
    "otherContact": {
        "emails": [
            "emeadows198@orange.com",
            "emeadows198@zain.com",
            "emeadows198@telecom.com"
        ],
        "phoneNumbers": [
            "+61-198-022-4946",
            "+61-198-357-5722",
            "+61-198-679-9307"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-09-21"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STAYLVAU3953",
    "businessName": "Stay Awhile Partners Ltd",
    "revenueSplit": 0.3,
    "acctBalance": 358168.42,
    "name": {
        "title": "Mr",
        "first": "Lane",
        "middle": "K",
        "last": "Vaughan",
        "suffix": null
    },
    "address": {
        "streetAddress": "7405 Big Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tinian",
        "stateProvince": "Tinian",
        "locality": "Tinian",
        "country": "MP",
        "postalCode": "96952",
        "latitude": "15.029",
        "longitude": "145.616"
    },
    "contact": {
        "email": "lvaughan199@swisscom.com",
        "phone": "+61-199-692-3953",
        "socMedia": {
            "line": "lvaughan199@swisscom.com@line.com"
        }
    },
    "login": {
        "username": "lvaughan",
        "oauth2": "lvaughan@line.com",
        "password": "$2y$10$qsI9eVs69rJ700KYGgA7cuN..1jru4YN8iEoapI1pWz7iKr4KaokK"
    },
    "otherContact": {
        "emails": [
            "lvaughan199@relcom.com",
            "lvaughan199@telenor.com"
        ],
        "phoneNumbers": [
            "+61-199-457-0924",
            "+61-199-705-4760"
        ],
        "socMedias": [
            {
                "facebook": "lvaughan199@relcom.com@facebook.com"
            },
            {
                "line": "lvaughan199@telenor.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-02-08"
    }
});
