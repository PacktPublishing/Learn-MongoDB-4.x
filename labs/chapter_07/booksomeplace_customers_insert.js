conn = new Mongo();
db = conn.getDB("booksomeplace");
db.customers.drop();
db.customers.insertOne(
{
    "customerKey": "GERTHUNT0519",
    "name": {
        "title": "Ms",
        "first": "Gertrud",
        "middle": "X",
        "last": "Hunt",
        "suffix": null
    },
    "address": {
        "streetAddress": "9282 Little Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nokomis",
        "stateProvince": "IL",
        "locality": "Montgomery",
        "country": "US",
        "postalCode": "62075",
        "latitude": "39.3036",
        "longitude": "-89.2853"
    },
    "contact": {
        "phone": "+1-100-858-0519",
        "email": "ghunt100@movil.com",
        "socMedia": {
            "facebook": "ghunt@facebook.com"
        }
    },
    "login": {
        "username": "ghunt",
        "oauth2": "ghunt@facebook.com",
        "password": "$2y$10$0JmGh9FM7S7oGGS\/0SbL2u4e0ZuIdgu6AnlKbilRq.zSmoWt50nG6"
    },
    "otherContact": {
        "emails": [
            "ghunt@worldnet.net",
            "ghunt@netcom.net",
            "ghunt@econnect.net"
        ],
        "phoneNumbers": [],
        "socMedias": {
            "twitter": "ghunt@twitter.com",
            "facebook": "ghunt@facebook.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-06-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "DEMAHARD2714",
    "name": {
        "title": "Mr",
        "first": "Demarcus",
        "middle": "I",
        "last": "Harding",
        "suffix": null
    },
    "address": {
        "streetAddress": "6439 Little Ditch Road",
        "buildingName": "Building E8",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Escaldes-Engordany",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD700",
        "latitude": "42.5",
        "longitude": "1.5667"
    },
    "contact": {
        "phone": "+376-101-597-2714",
        "email": "dharding101@etisalat.com",
        "socMedia": null
    },
    "login": {
        "username": "dharding",
        "oauth2": null,
        "password": "$2y$10$K4ZXNIrHXceVbMFKN0Qd1uF3C3U9i.gPcoyY.qy1muFn2QSWEnb6O"
    },
    "otherContact": {
        "emails": [
            "dharding@tm.net",
            "dharding@tata.net"
        ],
        "phoneNumbers": [
            "+376-774-492-2271",
            "+376-491-597-7493"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-01-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "OLENHARR2380",
    "name": {
        "title": null,
        "first": "Olen",
        "middle": null,
        "last": "Harris",
        "suffix": null
    },
    "address": {
        "streetAddress": "2776 Red Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ottawa (Centre Town)",
        "stateProvince": "ON",
        "locality": "Ottawa",
        "country": "CA",
        "postalCode": "K2P",
        "latitude": "45.4166",
        "longitude": "-75.6904"
    },
    "contact": {
        "phone": "+1-102-414-2380",
        "email": "oharris102@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "oharris",
        "oauth2": null,
        "password": "$2y$10$d6Jrj5gOOL0uZ2ErbQSc7eFVrgWMKsor63D.arHjqSKkqCMtGHC8O"
    },
    "otherContact": {
        "emails": [
            "oharris@tata.net"
        ],
        "phoneNumbers": [
            "+1-710-855-2373"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-03-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHILWALK6835",
    "name": {
        "title": "Ms",
        "first": "Shiloh",
        "middle": "X",
        "last": "Walker",
        "suffix": null
    },
    "address": {
        "streetAddress": "6995 Short Stream Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Green Creek",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2338",
        "latitude": "-31.7744",
        "longitude": "150.9006"
    },
    "contact": {
        "phone": "+61-104-676-6835",
        "email": "swalker104@tm.com",
        "socMedia": null
    },
    "login": {
        "username": "swalker",
        "oauth2": null,
        "password": "$2y$10$jlZV19l6tYH8Nfk2DagF1e3emVeKg9Ge8N7zAR9dEMzQdnnDUtAzy"
    },
    "otherContact": {
        "emails": [
            "swalker@oi.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-01-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "HAICLAR5059",
    "name": {
        "title": null,
        "first": "Hai",
        "middle": null,
        "last": "Clarke",
        "suffix": null
    },
    "address": {
        "streetAddress": "568 Short Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Casal das Pend\u00eancias",
        "stateProvince": "Dois Portos",
        "locality": "Torres Vedras",
        "country": "PT",
        "postalCode": "2565-189",
        "latitude": "39.0486",
        "longitude": "-9.1879"
    },
    "contact": {
        "phone": "+351-105-722-5059",
        "email": "hclarke105@oi.com",
        "socMedia": null
    },
    "login": {
        "username": "hclarke",
        "oauth2": null,
        "password": "$2y$10$l5DznzIrULnTjTq.Cu0YMOj2ybJ3BhEX2H1948QYpnT.T7eKS50Se"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+351-876-047-4488",
            "+351-489-038-8712"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-07-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "TAIREEV0399",
    "name": {
        "title": "Ms",
        "first": "Tai",
        "middle": "S",
        "last": "Reeves",
        "suffix": null
    },
    "address": {
        "streetAddress": "677 Red Ridge Boulevard",
        "buildingName": "Building 2C",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ballyaurgan",
        "stateProvince": "Scotland",
        "locality": "Argyll and Bute",
        "country": "GB",
        "postalCode": "PA31",
        "latitude": "56.148",
        "longitude": "-5.4391"
    },
    "contact": {
        "phone": "+44-106-593-0399",
        "email": "treeves106@belgacom.com",
        "socMedia": null
    },
    "login": {
        "username": "treeves",
        "oauth2": null,
        "password": "$2y$10$2C78Kq0VpgrK4ic0ZgnKOunSJJvxyL66Mqvpiwq9iO73drzt7FP8u"
    },
    "otherContact": {
        "emails": [
            "treeves@att.net",
            "treeves@vivendi.net"
        ],
        "phoneNumbers": [
            "+44-365-268-5761",
            "+44-623-876-7878"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-02-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "EMMEVELA0942",
    "name": {
        "title": "Mr",
        "first": "Emmett",
        "middle": "L",
        "last": "Velasquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "9401 Short Mound Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "F\u00f6gl\u00f6",
        "stateProvince": "F\u00f6gl\u00f6",
        "locality": "F\u00f6gl\u00f6",
        "country": "AX",
        "postalCode": "22710",
        "latitude": "60.0316",
        "longitude": "20.4605"
    },
    "contact": {
        "phone": "+35818-107-112-0942",
        "email": "evelasqu107@telenor.com",
        "socMedia": null
    },
    "login": {
        "username": "evelasqu",
        "oauth2": null,
        "password": "$2y$10$FFZKr\/qUkpHSOSh5DVcvDeWrg\/dg44DOOUD12YcLlHMAiypfjFY8q"
    },
    "otherContact": {
        "emails": [
            "evelasqu@telstra.net"
        ],
        "phoneNumbers": [
            "+35818-432-404-4743"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-12-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "MOSEDYER8775",
    "name": {
        "title": null,
        "first": "Mose",
        "middle": null,
        "last": "Dyer",
        "suffix": null
    },
    "address": {
        "streetAddress": "548 Winding Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "North Elmsall",
        "stateProvince": "England",
        "locality": "West Yorkshire",
        "country": "GB",
        "postalCode": "WF9",
        "latitude": "53.6089",
        "longitude": "-1.2821"
    },
    "contact": {
        "phone": "+44-108-951-8775",
        "email": "mdyer108@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "mdyer",
        "oauth2": null,
        "password": "$2y$10$B0ndxVX6ECPIlCF5DxDAOu1fUGi8e1DPPu.U5fXlGY6xrTcFhva8."
    },
    "otherContact": {
        "emails": [
            "mdyer@algonet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-03-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "SONNBLAN5194",
    "name": {
        "title": "Mr",
        "first": "Sonny",
        "middle": "K",
        "last": "Blanchard",
        "suffix": null
    },
    "address": {
        "streetAddress": "8556 Winding Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "S\u00e3o Gon\u00e7alo do Gurgu\u00e9ia",
        "stateProvince": "Piaui",
        "locality": "Piaui",
        "country": "BR",
        "postalCode": "64993-000",
        "latitude": "-10.0763",
        "longitude": "-45.4239"
    },
    "contact": {
        "phone": "+55-109-400-5194",
        "email": "sblancha109@frontier.com",
        "socMedia": null
    },
    "login": {
        "username": "sblancha",
        "oauth2": null,
        "password": "$2y$10$yyTo.Hj97dWUQ1Db8ZJGXu3L46KC7bh.wCzPzHntQAhiHqoaQQQY6"
    },
    "otherContact": {
        "emails": [
            "sblancha@kpn.net"
        ],
        "phoneNumbers": [
            "+55-973-917-4683"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-08-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "RUDYWILC8581",
    "name": {
        "title": "Mr",
        "first": "Rudy",
        "middle": "G",
        "last": "Wilcox",
        "suffix": null
    },
    "address": {
        "streetAddress": "8975 Green Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "7D",
        "city": "Lake Proserpine",
        "stateProvince": "QLD",
        "locality": "CENTRAL QLD",
        "country": "AU",
        "postalCode": "4800",
        "latitude": "-20.4057",
        "longitude": "148.4881"
    },
    "contact": {
        "phone": "+61-110-568-8581",
        "email": "rwilcox110@ui.com",
        "socMedia": {
            "skype": "rwilcox@skype.com"
        }
    },
    "login": {
        "username": "rwilcox",
        "oauth2": "rwilcox@skype.com",
        "password": "$2y$10$LBkz\/OYVS9jAFyKMnOgdoObEtN2OVVoOGVzPBe\/K4MGKp0Mj.dMYG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-03-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "HELEMCKE1891",
    "name": {
        "title": null,
        "first": "Helena",
        "middle": null,
        "last": "Mckenzie",
        "suffix": null
    },
    "address": {
        "streetAddress": "947 Big Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Reydon",
        "stateProvince": "England",
        "locality": "Suffolk",
        "country": "GB",
        "postalCode": "IP18",
        "latitude": "52.339",
        "longitude": "1.6658"
    },
    "contact": {
        "phone": "+44-111-100-1891",
        "email": "hmckenzi111@zain.com",
        "socMedia": null
    },
    "login": {
        "username": "hmckenzi",
        "oauth2": null,
        "password": "$2y$10$\/X0cKMmpUYvQlFOXaMUTVeu.BNDU.7ooJGCK.Tamo5QSzLWoE.W7i"
    },
    "otherContact": {
        "emails": [
            "hmckenzi@greennet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-12-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELLIPECK8867",
    "name": {
        "title": "Mr",
        "first": "Elliot",
        "middle": "Q",
        "last": "Peck",
        "suffix": null
    },
    "address": {
        "streetAddress": "4644 Long Mound Ride",
        "buildingName": "Building 7D",
        "floor": null,
        "roomAptCondoFlat": "B9",
        "city": "Eastern Suburbs Mc",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "1333",
        "latitude": "-33.8693",
        "longitude": "151.2248"
    },
    "contact": {
        "phone": "+61-112-011-8867",
        "email": "epeck112@softbank.com",
        "socMedia": null
    },
    "login": {
        "username": "epeck",
        "oauth2": null,
        "password": "$2y$10$VW6ZYsRxgpwzAO4ezoKsIOwL2wUfTEKTsiyUUp8eKTwkn8XwQzGnK"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-215-244-3344"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1950-08-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROYCDOMI2963",
    "name": {
        "title": "Ms",
        "first": "Royce",
        "middle": "H",
        "last": "Dominguez",
        "suffix": null
    },
    "address": {
        "streetAddress": "7821 Winding Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pobr\u0111ani",
        "stateProvince": "\u010cazma",
        "locality": "\u010cazma",
        "country": "HR",
        "postalCode": "43240",
        "latitude": "46.0758",
        "longitude": "16.615"
    },
    "contact": {
        "phone": "+385-113-336-2963",
        "email": "rdomingu113@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "rdomingu",
        "oauth2": null,
        "password": "$2y$10$BA27eXRvWVGhE6fz8XIdweXlW2X8kWL\/YDBfUANDAWDRagGwuGW0S"
    },
    "otherContact": {
        "emails": [
            "rdomingu@telia.net"
        ],
        "phoneNumbers": [
            "+385-278-311-0915"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-09-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELDEWOOD9637",
    "name": {
        "title": null,
        "first": "Elden",
        "middle": null,
        "last": "Woodard",
        "suffix": null
    },
    "address": {
        "streetAddress": "8936 Green Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Triabunna",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7190",
        "latitude": "-42.508",
        "longitude": "147.9113"
    },
    "contact": {
        "phone": "+61-114-687-9637",
        "email": "ewoodard114@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "ewoodard",
        "oauth2": null,
        "password": "$2y$10$iJ5jr4k9qG3DvlAKd76i4.jlgvexWPynHeJejAKfzpTZGEyJE2uSK"
    },
    "otherContact": {
        "emails": [
            "ewoodard@bce.net",
            "ewoodard@cubenet.net"
        ],
        "phoneNumbers": [
            "+61-70-461-4056"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-09-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "OSVAJENK5497",
    "name": {
        "title": "Mr",
        "first": "Osvaldo",
        "middle": "E",
        "last": "Jenkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "2338 Little Bough Road",
        "buildingName": "Building CA",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Balzers",
        "stateProvince": "Balzers",
        "locality": "Balzers",
        "country": "LI",
        "postalCode": "9496",
        "latitude": "47.067",
        "longitude": "9.5078"
    },
    "contact": {
        "phone": "+423-115-847-5497",
        "email": "ojenkins115@vivendi.com",
        "socMedia": null
    },
    "login": {
        "username": "ojenkins",
        "oauth2": null,
        "password": "$2y$10$Yq5.H1tPGXznc5nRwInRy.rVmJ61oLGsnrvtnb7TEBqnomaehqxPe"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-11-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHANWEBB5763",
    "name": {
        "title": "Ms",
        "first": "Shan",
        "middle": "A",
        "last": "Webb",
        "suffix": null
    },
    "address": {
        "streetAddress": "8197 Blue Bridge Avenue",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": null,
        "city": "South Durras",
        "stateProvince": "NSW",
        "locality": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2536",
        "latitude": "-35.6513",
        "longitude": "150.2952"
    },
    "contact": {
        "phone": "+61-116-223-5763",
        "email": "swebb116@sprint.com",
        "socMedia": null
    },
    "login": {
        "username": "swebb",
        "oauth2": null,
        "password": "$2y$10$XFpN\/KvHXESzP8eotrUSz.YcKC1SlAXgSuUlhvkmxgfQXmFEyfj66"
    },
    "otherContact": {
        "emails": [
            "swebb@vivendi.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-02-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "JORDCARD5491",
    "name": {
        "title": null,
        "first": "Jordan",
        "middle": null,
        "last": "Cardenas",
        "suffix": null
    },
    "address": {
        "streetAddress": "9876 Red Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ruggell",
        "stateProvince": "Ruggell",
        "locality": "Ruggell",
        "country": "LI",
        "postalCode": "9491",
        "latitude": "47.2484",
        "longitude": "9.5345"
    },
    "contact": {
        "phone": "+423-117-557-5491",
        "email": "jcardena117@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "jcardena",
        "oauth2": null,
        "password": "$2y$10$Xk8mcaPZMR0CBu8r.lb7\/eqbTW6lwibE.P0jRzWqZisld5HxIO\/W."
    },
    "otherContact": {
        "emails": [
            "jcardena@econnect.net"
        ],
        "phoneNumbers": [
            "+423-982-737-5439"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-03-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "SAUNGREE8535",
    "name": {
        "title": "Ms",
        "first": "Saundra",
        "middle": "J",
        "last": "Green",
        "suffix": null
    },
    "address": {
        "streetAddress": "5543 Blue Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ashmore",
        "stateProvince": "England",
        "locality": "Dorset",
        "country": "GB",
        "postalCode": "SP5",
        "latitude": "50.95",
        "longitude": "-2.1333"
    },
    "contact": {
        "phone": "+44-118-639-8535",
        "email": "sgreen118@belgacom.com",
        "socMedia": null
    },
    "login": {
        "username": "sgreen",
        "oauth2": null,
        "password": "$2y$10$RgV5wBWAbtWApckZiVoxwuykZ25GB3U2KLj7E7qxEzKwZ1Pn3B6mq"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+44-206-846-7384"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-01-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "NORMPETE9416",
    "name": {
        "title": "Mr",
        "first": "Norman",
        "middle": "U",
        "last": "Peters",
        "suffix": null
    },
    "address": {
        "streetAddress": "5589 Little Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041a\u043e\u0437\u044f\u043a\u0438",
        "stateProvince": "Braslav",
        "locality": "Braslav",
        "country": "BY",
        "postalCode": "211994",
        "latitude": "55.448",
        "longitude": "26.7731"
    },
    "contact": {
        "phone": "+375-119-321-9416",
        "email": "npeters119@telefonica.com",
        "socMedia": null
    },
    "login": {
        "username": "npeters",
        "oauth2": null,
        "password": "$2y$10$Q.vjv4p9H7pH4NytzvX53uv.slURxDI48ve\/K8.PuVoQvKterDbG."
    },
    "otherContact": {
        "emails": [
            "npeters@telecom.net"
        ],
        "phoneNumbers": [
            "+375-945-453-7956",
            "+375-519-735-1679",
            "+375-996-959-0421"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-07-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "MARYHANS1661",
    "name": {
        "title": null,
        "first": "Marybelle",
        "middle": null,
        "last": "Hanson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2626 Little Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "64",
        "city": "Bismarck",
        "stateProvince": "ND",
        "locality": "Burleigh",
        "country": "US",
        "postalCode": "58502",
        "latitude": "46.8887",
        "longitude": "-100.6819"
    },
    "contact": {
        "phone": "+1-120-661-1661",
        "email": "mhanson120@softbank.com",
        "socMedia": {
            "google": "mhanson@google.com"
        }
    },
    "login": {
        "username": "mhanson",
        "oauth2": "mhanson@google.com",
        "password": "$2y$10$JuYMe9h1rmHadfn3H7qDgOmf9brSOKIaWqOC3BK8sxyCSRQJuAVhK"
    },
    "otherContact": {
        "emails": [
            "mhanson@apicnet.net"
        ],
        "phoneNumbers": [
            "+1-231-445-6141"
        ],
        "socMedias": {
            "twitter": "mhanson@twitter.com",
            "facebook": "mhanson@facebook.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-02-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "BOBBELLI1227",
    "name": {
        "title": "Mr",
        "first": "Bobby",
        "middle": "G",
        "last": "Ellis",
        "suffix": null
    },
    "address": {
        "streetAddress": "2743 Short Stream Avenue",
        "buildingName": "Building D5",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Tontouta",
        "stateProvince": "Pa\u00efta",
        "locality": "Pa\u00efta",
        "country": "NC",
        "postalCode": "98840",
        "latitude": "-22.0128",
        "longitude": "166.2237"
    },
    "contact": {
        "phone": "+687-121-010-1227",
        "email": "bellis121@telesystems.com",
        "socMedia": null
    },
    "login": {
        "username": "bellis",
        "oauth2": null,
        "password": "$2y$10$hxfZrJypzYCREmq26hCaveWEdy5ZhEEIxxHXO4DTCfLizZUaTN5bC"
    },
    "otherContact": {
        "emails": [
            "bellis@daxnet.net"
        ],
        "phoneNumbers": [
            "+687-213-402-1776",
            "+687-264-907-9611",
            "+687-633-080-1193"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-06-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "EDUALIVI7685",
    "name": {
        "title": "Mr",
        "first": "Eduardo",
        "middle": "I",
        "last": "Livingston",
        "suffix": null
    },
    "address": {
        "streetAddress": "7882 Short Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tambyachiwadi",
        "stateProvince": "Bhudargad",
        "locality": "Kolhapur",
        "country": "IN",
        "postalCode": "416210",
        "latitude": "16.8493",
        "longitude": "73.9203"
    },
    "contact": {
        "phone": "+91-122-008-7685",
        "email": "elivings122@turkcell.com",
        "socMedia": null
    },
    "login": {
        "username": "elivings",
        "oauth2": null,
        "password": "$2y$10$kdVF8a.EtoEf7ShEW9JCaeYmaMTW0sZlIJSu3zXdla4mUZIT.Y5Ce"
    },
    "otherContact": {
        "emails": [
            "elivings@tm.net",
            "elivings@optus.net"
        ],
        "phoneNumbers": [
            "+91-185-670-1113"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-12-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "GAYNMYER8195",
    "name": {
        "title": null,
        "first": "Gaynelle",
        "middle": null,
        "last": "Myers",
        "suffix": null
    },
    "address": {
        "streetAddress": "7451 Blue Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Manzaneda De Bia\u00f1ez",
        "stateProvince": "PV",
        "locality": "Vizcaya",
        "country": "ES",
        "postalCode": "48890",
        "latitude": "43.2384",
        "longitude": "-3.3347"
    },
    "contact": {
        "phone": "+34-123-648-8195",
        "email": "gmyers123@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "gmyers",
        "oauth2": null,
        "password": "$2y$10$1H1dZocB8jka7jYUIYtfS.k1t.y4yJ8EjH9w6infjV7yp7ec.ro1u"
    },
    "otherContact": {
        "emails": [
            "gmyers@telecom.net"
        ],
        "phoneNumbers": [
            "+34-940-011-8888",
            "+34-223-038-7860"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-07-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "RAYFSOTO2211",
    "name": {
        "title": "Mr",
        "first": "Rayford",
        "middle": "M",
        "last": "Soto",
        "suffix": null
    },
    "address": {
        "streetAddress": "4600 Green Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sainte-Genevi\u00e8ve",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H9H",
        "latitude": "45.4683",
        "longitude": "-73.8565"
    },
    "contact": {
        "phone": "+1-124-032-2211",
        "email": "rsoto124@econnect.com",
        "socMedia": null
    },
    "login": {
        "username": "rsoto",
        "oauth2": null,
        "password": "$2y$10$0cmfiCPVGnFfPm2r0Y.nteOcN8.Sq5rgGWaaM87SCkWVF3lJ2SpmG"
    },
    "otherContact": {
        "emails": [
            "rsoto@zain.net",
            "rsoto@rogers.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-12-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "CHRISCHM7138",
    "name": {
        "title": null,
        "first": "Chris",
        "middle": null,
        "last": "Schmidt",
        "suffix": null
    },
    "address": {
        "streetAddress": "7658 Big Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Carew Cheriton",
        "stateProvince": "Wales",
        "locality": "Pembrokeshire",
        "country": "GB",
        "postalCode": "SA70",
        "latitude": "51.6747",
        "longitude": "-4.7691"
    },
    "contact": {
        "phone": "+44-126-167-7138",
        "email": "cschmidt126@bce.com",
        "socMedia": null
    },
    "login": {
        "username": "cschmidt",
        "oauth2": null,
        "password": "$2y$10$287vztFb22NSb0E5dOMsqenP6niI59IGc3ApsYYdKLwm23kfjzewK"
    },
    "otherContact": {
        "emails": [
            "cschmidt@orstom.net"
        ],
        "phoneNumbers": [
            "+44-200-991-0947"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-12-11"
    }
});
db.customers.insertOne(
{
    "customerKey": "MICHRICH0854",
    "name": {
        "title": "Mr",
        "first": "Michel",
        "middle": "Y",
        "last": "Richards",
        "suffix": null
    },
    "address": {
        "streetAddress": "2431 Long Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Badarkali",
        "stateProvince": "Chiringga",
        "locality": "Cox\u2019s Bazar",
        "country": "BD",
        "postalCode": "4742",
        "latitude": "21.3576",
        "longitude": "92.0807"
    },
    "contact": {
        "phone": "+880-127-617-0854",
        "email": "mrichard127@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "mrichard",
        "oauth2": null,
        "password": "$2y$10$B7ppMqI\/y0tfIJdgCti.H.15Yezz.JAbOrJfqdbNqbZrM917B01Xi"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+880-373-362-1033",
            "+880-141-114-7178"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-12-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROCIBLAC3099",
    "name": {
        "title": "Ms",
        "first": "Rocio",
        "middle": "Q",
        "last": "Black",
        "suffix": null
    },
    "address": {
        "streetAddress": "9855 Blue Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Belbroughton",
        "stateProvince": "England",
        "locality": "Worcestershire",
        "country": "GB",
        "postalCode": "DY9",
        "latitude": "52.3918",
        "longitude": "-2.1188"
    },
    "contact": {
        "phone": "+44-128-455-3099",
        "email": "rblack128@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "rblack",
        "oauth2": null,
        "password": "$2y$10$jgyyLzT2fIZyGQVrsHQhF.4s844JZ0aaK9qP9bYbnwx5anAP1UvJ."
    },
    "otherContact": {
        "emails": [
            "rblack@netcom.net",
            "rblack@nordnet.net",
            "rblack@eunet.net"
        ],
        "phoneNumbers": [
            "+44-404-822-0373"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-06-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "MALIMANN8579",
    "name": {
        "title": null,
        "first": "Malik",
        "middle": null,
        "last": "Mann",
        "suffix": null
    },
    "address": {
        "streetAddress": "7623 Blue Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Putte Beerzel",
        "stateProvince": "VLG",
        "locality": "Antwerpen",
        "country": "BE",
        "postalCode": "2580",
        "latitude": "51.0667",
        "longitude": "4.6667"
    },
    "contact": {
        "phone": "+32-129-285-8579",
        "email": "mmann129@bce.com",
        "socMedia": null
    },
    "login": {
        "username": "mmann",
        "oauth2": null,
        "password": "$2y$10$NUBv5H\/q8Y0qdUlHNuN3UuUn9UcKrtdAo3T2JFdpNolvXuOO0A1D6"
    },
    "otherContact": {
        "emails": [
            "mmann@daxnet.net"
        ],
        "phoneNumbers": [
            "+32-622-706-0165",
            "+32-766-854-7748"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-11-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "NOHEHESS8462",
    "name": {
        "title": "Ms",
        "first": "Nohemi",
        "middle": "T",
        "last": "Hess",
        "suffix": null
    },
    "address": {
        "streetAddress": "9739 Green Bridge Circle",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Central Toronto (Summerhill West \/ Rathnelly \/ South Hill \/ Forest Hill SE \/ Deer Park)",
        "stateProvince": "ON",
        "locality": "Toronto",
        "country": "CA",
        "postalCode": "M4V",
        "latitude": "43.6861",
        "longitude": "-79.4025"
    },
    "contact": {
        "phone": "+1-130-007-8462",
        "email": "nhess130@lguplus.com",
        "socMedia": {
            "facebook": "nhess@facebook.com"
        }
    },
    "login": {
        "username": "nhess",
        "oauth2": "nhess@facebook.com",
        "password": "$2y$10$vSSXZsLnWf3zYCdPGIbFH.LLLzYIyfOEcnWV0CSSKyaIgwsOHYvAm"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-139-859-1729",
            "+1-642-004-1368",
            "+1-966-458-3953"
        ],
        "socMedias": {
            "skype": "nhess@skype.com",
            "linkedin": "nhess@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-05-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "LYNGRIM0869",
    "name": {
        "title": "Ms",
        "first": "Lyn",
        "middle": "E",
        "last": "Grimes",
        "suffix": null
    },
    "address": {
        "streetAddress": "6373 Short Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041a\u043e\u0442\u043b\u0435\u043d\u0446\u0438 \/ Kotlenci",
        "stateProvince": "DOB",
        "locality": "\u0414\u043e\u0431\u0440\u0438\u0447 \/ Dobrich",
        "country": "BG",
        "postalCode": "9374",
        "latitude": "43.5667",
        "longitude": "27.9167"
    },
    "contact": {
        "phone": "+359-131-628-0869",
        "email": "lgrimes131@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "lgrimes",
        "oauth2": null,
        "password": "$2y$10$Dl7SWT6mJfK9EjosiZ96Aurny2L7gSRaop9jp3Krlu33jbeCUqTaS"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+359-899-746-1605",
            "+359-106-068-0035"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-01-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "EMERFERN9139",
    "name": {
        "title": null,
        "first": "Emery",
        "middle": null,
        "last": "Fernandez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3852 Little Mountain Circle",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": null,
        "city": "Burrawang",
        "stateProvince": "NSW",
        "locality": "CAMPBELLTOWN",
        "country": "AU",
        "postalCode": "2577",
        "latitude": "-34.5853",
        "longitude": "150.5115"
    },
    "contact": {
        "phone": "+61-132-636-9139",
        "email": "efernand132@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "efernand",
        "oauth2": null,
        "password": "$2y$10$gLDXi5JNt\/UHNuUmHSXTnOC28\/DigFhNfrKYWG4.b86OALVnPVSyi"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-47-953-5462"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-11-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "VIOLRODR0219",
    "name": {
        "title": "Ms",
        "first": "Violette",
        "middle": "Y",
        "last": "Rodriguez",
        "suffix": null
    },
    "address": {
        "streetAddress": "1873 Blue Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041a\u043e\u043f\u0430\u043d\u044c",
        "stateProvince": "Retchitsa",
        "locality": "Retchitsa",
        "country": "BY",
        "postalCode": "247515",
        "latitude": "52.365",
        "longitude": "30.5154"
    },
    "contact": {
        "phone": "+375-133-987-0219",
        "email": "vrodrigu133@relcom.com",
        "socMedia": null
    },
    "login": {
        "username": "vrodrigu",
        "oauth2": null,
        "password": "$2y$10$TDWFUHUShPq7FH7XouVSZuZDmu\/zagQDKcfi8yF7LqxKcqlaXcXe."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+375-488-197-9256"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-03-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROSEWILK5702",
    "name": {
        "title": "Ms",
        "first": "Roseann",
        "middle": "M",
        "last": "Wilkinson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7804 Little Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saanich South",
        "stateProvince": "BC",
        "locality": "Saanich",
        "country": "CA",
        "postalCode": "V8X",
        "latitude": "48.4777",
        "longitude": "-123.3658"
    },
    "contact": {
        "phone": "+1-134-770-5702",
        "email": "rwilkins134@maxcomm.com",
        "socMedia": null
    },
    "login": {
        "username": "rwilkins",
        "oauth2": null,
        "password": "$2y$10$k1tGn79EISKkDp54HiLbD.y4jjjuv7stgwSfUIDPJiXnsYzUbZy1C"
    },
    "otherContact": {
        "emails": [
            "rwilkins@algonet.net"
        ],
        "phoneNumbers": [
            "+1-71-073-3049"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-01-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "EARLKHAN6781",
    "name": {
        "title": "Dr",
        "first": "Earleen",
        "middle": null,
        "last": "Khan",
        "suffix": "BS"
    },
    "address": {
        "streetAddress": "7166 Short Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Montegiardino",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47898",
        "latitude": "43.9",
        "longitude": "12.5"
    },
    "contact": {
        "phone": "+378-135-118-6781",
        "email": "ekhan135@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "ekhan",
        "oauth2": null,
        "password": "$2y$10$e87K7Zx7UCdgRaN3OCA72.MuMrwMl\/46yuu\/1C3zpSAFxcr1hWVcO"
    },
    "otherContact": {
        "emails": [
            "ekhan@ui.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-04-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "BOBBBRAD3639",
    "name": {
        "title": "Mr",
        "first": "Bobbie",
        "middle": "L",
        "last": "Bradshaw",
        "suffix": null
    },
    "address": {
        "streetAddress": "1068 Winding Woods Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kulhan",
        "stateProvince": "Dehradun",
        "locality": "Dehradun",
        "country": "IN",
        "postalCode": "248013",
        "latitude": "30.1623",
        "longitude": "78.4813"
    },
    "contact": {
        "phone": "+91-136-745-3639",
        "email": "bbradsha136@greennet.com",
        "socMedia": null
    },
    "login": {
        "username": "bbradsha",
        "oauth2": null,
        "password": "$2y$10$Is.dNx6PDdvDTOoWHV5sQu.Lq3n.5VQNLsB.EGLJTbLBjryq9hGwq"
    },
    "otherContact": {
        "emails": [
            "bbradsha@access.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-03-06"
    }
});
db.customers.insertOne(
{
    "customerKey": "HALLCHAM7161",
    "name": {
        "title": "Ms",
        "first": "Halley",
        "middle": "D",
        "last": "Chambers",
        "suffix": null
    },
    "address": {
        "streetAddress": "4388 Green Creek Street",
        "buildingName": null,
        "floor": 3,
        "roomAptCondoFlat": null,
        "city": "\u041b\u0438\u0441\u0435\u0446 \/ Lisec",
        "stateProvince": "KNL",
        "locality": "\u041a\u044e\u0441\u0442\u0435\u043d\u0434\u0438\u043b \/ Kjustendil",
        "country": "BG",
        "postalCode": "2547",
        "latitude": "42.305",
        "longitude": "22.5658"
    },
    "contact": {
        "phone": "+359-137-638-7161",
        "email": "hchamber137@telkom.com",
        "socMedia": null
    },
    "login": {
        "username": "hchamber",
        "oauth2": null,
        "password": "$2y$10$Vf8WisDEKW4uRcaPsDGS0.TSQg8LFFbR1LBvNLuuA3FGKK1lvf692"
    },
    "otherContact": {
        "emails": [
            "hchamber@ntt.net"
        ],
        "phoneNumbers": [
            "+359-484-744-9261"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-11-24"
    }
});
db.customers.insertOne(
{
    "customerKey": "EUSTWRIG8658",
    "name": {
        "title": null,
        "first": "Eustolia",
        "middle": null,
        "last": "Wright",
        "suffix": null
    },
    "address": {
        "streetAddress": "3964 Little Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Appleford",
        "stateProvince": "England",
        "locality": "Oxfordshire",
        "country": "GB",
        "postalCode": "OX14",
        "latitude": "51.6392",
        "longitude": "-1.2408"
    },
    "contact": {
        "phone": "+44-138-503-8658",
        "email": "ewright138@kddi.com",
        "socMedia": null
    },
    "login": {
        "username": "ewright",
        "oauth2": null,
        "password": "$2y$10$qyihWjzuM23sAaDDLV\/f1eaAanl\/Topc.YjVEPnkPyjOXvYj.djm."
    },
    "otherContact": {
        "emails": [
            "ewright@telkom.net",
            "ewright@telecomitalia.net",
            "ewright@orange.net"
        ],
        "phoneNumbers": [
            "+44-230-258-7767"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-06-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "SOLERAYM0578",
    "name": {
        "title": "Ms",
        "first": "Soledad",
        "middle": "K",
        "last": "Raymond",
        "suffix": null
    },
    "address": {
        "streetAddress": "3157 Winding Creek Way",
        "buildingName": "Building 75",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kanaipur",
        "stateProvince": "Faridpur Sadar",
        "locality": "Faridpur",
        "country": "BD",
        "postalCode": "7801",
        "latitude": "23.55",
        "longitude": "89.7833"
    },
    "contact": {
        "phone": "+880-139-089-0578",
        "email": "sraymond139@vimpelcom.com",
        "socMedia": null
    },
    "login": {
        "username": "sraymond",
        "oauth2": null,
        "password": "$2y$10$Nou6jE91GpEEVK.eepJNQOwo6G.ZiT5Ix9Ge8AAEhU.xSLvW0MRT6"
    },
    "otherContact": {
        "emails": [
            "sraymond@etisalat.net",
            "sraymond@vimpelcom.net"
        ],
        "phoneNumbers": [
            "+880-856-035-3763"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-09-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "JANUHAYE6254",
    "name": {
        "title": "Ms",
        "first": "January",
        "middle": "Y",
        "last": "Hayes",
        "suffix": null
    },
    "address": {
        "streetAddress": "5238 Winding Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Randleman",
        "stateProvince": "NC",
        "locality": "Randolph",
        "country": "US",
        "postalCode": "27317",
        "latitude": "35.8488",
        "longitude": "-79.8018"
    },
    "contact": {
        "phone": "+1-140-096-6254",
        "email": "jhayes140@pldt.com",
        "socMedia": {
            "facebook": "jhayes@facebook.com"
        }
    },
    "login": {
        "username": "jhayes",
        "oauth2": "jhayes@facebook.com",
        "password": "$2y$10$DrbKGPDArWCAvHLbPVp.Wu4qzkkdLZW\/A121H9LXIYBkguiHV.8gW"
    },
    "otherContact": {
        "emails": [
            "jhayes@sktelecom.net",
            "jhayes@swisscom.net"
        ],
        "phoneNumbers": [
            "+1-447-843-1932"
        ],
        "socMedias": {
            "google": "jhayes@google.com",
            "skype": "jhayes@skype.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-11-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "QUINMARQ0951",
    "name": {
        "title": null,
        "first": "Quinn",
        "middle": null,
        "last": "Marquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6165 Little Canyon Circle",
        "buildingName": "Building 6A",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dettenhausen",
        "stateProvince": "BW",
        "locality": "T\u00fcbingen Region",
        "country": "DE",
        "postalCode": "72135",
        "latitude": "48.6076",
        "longitude": "9.1004"
    },
    "contact": {
        "phone": "+49-141-943-0951",
        "email": "qmarquez141@oi.com",
        "socMedia": null
    },
    "login": {
        "username": "qmarquez",
        "oauth2": null,
        "password": "$2y$10$BzPK5gsxyU5qcc9Hd4wVg.9QQkxrp0pBEbRP\/0vr.\/hdClEe7myem"
    },
    "otherContact": {
        "emails": [
            "qmarquez@netcom.net"
        ],
        "phoneNumbers": [
            "+49-96-295-4164",
            "+49-959-631-4577"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-09-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "DEMEYODE0800",
    "name": {
        "title": "Mr",
        "first": "Demetrius",
        "middle": "Y",
        "last": "Yoder",
        "suffix": null
    },
    "address": {
        "streetAddress": "3717 Little Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "South Kununoppin",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6489",
        "latitude": "-31.043",
        "longitude": "117.8218"
    },
    "contact": {
        "phone": "+61-142-965-0800",
        "email": "dyoder142@chunghwa.com",
        "socMedia": null
    },
    "login": {
        "username": "dyoder",
        "oauth2": null,
        "password": "$2y$10$u.mU9SGujUVR07k81ElgfuwP6ON0w1srkd\/3VMSFlskqpq8tjar4C"
    },
    "otherContact": {
        "emails": [
            "dyoder@tm.net"
        ],
        "phoneNumbers": [
            "+61-59-621-5829",
            "+61-489-459-1745"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1947-02-19"
    }
});
db.customers.insertOne(
{
    "customerKey": "MALICOCH3290",
    "name": {
        "title": null,
        "first": "Malisa",
        "middle": null,
        "last": "Cochran",
        "suffix": null
    },
    "address": {
        "streetAddress": "5618 Big River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "F8",
        "city": "Downtown Toronto (Harbourfront East \/ Union Station \/ Toronto Island)",
        "stateProvince": "ON",
        "locality": "Toronto",
        "country": "CA",
        "postalCode": "M5J",
        "latitude": "43.623",
        "longitude": "-79.3936"
    },
    "contact": {
        "phone": "+1-144-514-3290",
        "email": "mcochran144@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "mcochran",
        "oauth2": null,
        "password": "$2y$10$k5gimkSi9Yt.kHBPVIuVGOqh64k3iMuTX0pKT6KABO8HfQAeLGpiS"
    },
    "otherContact": {
        "emails": [
            "mcochran@vivendi.net",
            "mcochran@softbank.net",
            "mcochran@verizon.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-04-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "CAYLRILE9772",
    "name": {
        "title": "Ms",
        "first": "Cayla",
        "middle": "U",
        "last": "Riley",
        "suffix": null
    },
    "address": {
        "streetAddress": "6089 Winding Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Thomas",
        "stateProvince": "St. Thomas",
        "locality": "St. Thomas",
        "country": "VI",
        "postalCode": "00802",
        "latitude": "18.3387",
        "longitude": "-64.916"
    },
    "contact": {
        "phone": "+1340-145-699-9772",
        "email": "criley145@uunet.com",
        "socMedia": null
    },
    "login": {
        "username": "criley",
        "oauth2": null,
        "password": "$2y$10$Hq1RbxQUhtp6HbhtE9DgDuoSvoUKRgdQuU7.1gb8zL06IX80otkFa"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-02-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "GARRRIVA2431",
    "name": {
        "title": "Mr",
        "first": "Garry",
        "middle": "W",
        "last": "Rivas",
        "suffix": null
    },
    "address": {
        "streetAddress": "3584 Winding Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "London",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "WC2E",
        "latitude": "51.5085",
        "longitude": "-0.1257"
    },
    "contact": {
        "phone": "+44-146-949-2431",
        "email": "grivas146@netcom.com",
        "socMedia": null
    },
    "login": {
        "username": "grivas",
        "oauth2": null,
        "password": "$2y$10$V7vmZj9fruHK8WOsKMq2VOEzRL8pNAHL32bevWfMO4RZfTOT\/mtuu"
    },
    "otherContact": {
        "emails": [
            "grivas@vodafone.net",
            "grivas@daxnet.net"
        ],
        "phoneNumbers": [
            "+44-107-050-8008",
            "+44-424-340-3215"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-05-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "ADRIGOOD9484",
    "name": {
        "title": null,
        "first": "Adrian",
        "middle": null,
        "last": "Goodwin",
        "suffix": null
    },
    "address": {
        "streetAddress": "3188 Green Tree Drive",
        "buildingName": "Building AF",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Barentsburg",
        "stateProvince": "Spitsbergen",
        "locality": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9178",
        "latitude": "78.0644",
        "longitude": "14.1859"
    },
    "contact": {
        "phone": "+47-147-095-9484",
        "email": "agoodwin147@ui.com",
        "socMedia": null
    },
    "login": {
        "username": "agoodwin",
        "oauth2": null,
        "password": "$2y$10$ZjrS0ITp\/kL1tjcZOfwgculeJur6m8xnmIHw53zuhCpCIYzDGD1uG"
    },
    "otherContact": {
        "emails": [
            "agoodwin@orstom.net",
            "agoodwin@turkcell.net",
            "agoodwin@tm.net"
        ],
        "phoneNumbers": [
            "+47-906-573-4973",
            "+47-639-696-8552",
            "+47-755-581-2998"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-10-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "TAMAHERM3623",
    "name": {
        "title": "Ms",
        "first": "Tamara",
        "middle": "P",
        "last": "Herman",
        "suffix": null
    },
    "address": {
        "streetAddress": "287 Red Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kearneys Spring",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4350",
        "latitude": "-27.6049",
        "longitude": "151.941"
    },
    "contact": {
        "phone": "+61-148-316-3623",
        "email": "therman148@chunghwa.com",
        "socMedia": null
    },
    "login": {
        "username": "therman",
        "oauth2": null,
        "password": "$2y$10$6ExqrBBrfcI0qzoim9rx\/OiqfPPCZpcTDFYoEMHlJperJUYODSwea"
    },
    "otherContact": {
        "emails": [
            "therman@vivendi.net",
            "therman@airtel.net"
        ],
        "phoneNumbers": [
            "+61-607-543-2208"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-10-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "TULAJENN1484",
    "name": {
        "title": "Ms",
        "first": "Tula",
        "middle": "F",
        "last": "Jennings",
        "suffix": null
    },
    "address": {
        "streetAddress": "9321 Short Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Westport",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "F28",
        "latitude": "53.8",
        "longitude": "-9.5167"
    },
    "contact": {
        "phone": "+353-149-651-1484",
        "email": "tjenning149@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "tjenning",
        "oauth2": null,
        "password": "$2y$10$VAGtLoF.KFzErvvLklNn\/Oe3oXSNxH7WmNauIlHxdQ.vQIZro8PCW"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+353-281-259-9018"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-09-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "ANNAMURI5200",
    "name": {
        "title": null,
        "first": "Annabelle",
        "middle": null,
        "last": "Murillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "414 Red Gully Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bratton Fleming",
        "stateProvince": "England",
        "locality": "Devon",
        "country": "GB",
        "postalCode": "EX32",
        "latitude": "51.1225",
        "longitude": "-3.9385"
    },
    "contact": {
        "phone": "+44-150-035-5200",
        "email": "amurillo150@cerist.com",
        "socMedia": {
            "facebook": "amurillo@facebook.com"
        }
    },
    "login": {
        "username": "amurillo",
        "oauth2": "amurillo@facebook.com",
        "password": "$2y$10$WWAyNh.EEBhJUAhSC2qgbuH8CP3JkZFo9hN2dFfTxHPJUW.z0UFs6"
    },
    "otherContact": {
        "emails": [
            "amurillo@bt.net",
            "amurillo@att.net",
            "amurillo@greennet.net"
        ],
        "phoneNumbers": [
            "+44-205-798-1373",
            "+44-887-752-6258"
        ],
        "socMedias": {
            "line": "amurillo@line.com",
            "linkedin": "amurillo@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-07-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "BRENVAUG2214",
    "name": {
        "title": "Ms",
        "first": "Brenda",
        "middle": "B",
        "last": "Vaughn",
        "suffix": null
    },
    "address": {
        "streetAddress": "4188 Winding Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nob Pitam",
        "stateProvince": "Nakhon Sie Thammarat",
        "locality": "Nakhon Sie Thammarat",
        "country": "TH",
        "postalCode": "80160",
        "latitude": "8.6667",
        "longitude": "99.9333"
    },
    "contact": {
        "phone": "+66-151-765-2214",
        "email": "bvaughn151@maxcomm.com",
        "socMedia": null
    },
    "login": {
        "username": "bvaughn",
        "oauth2": null,
        "password": "$2y$10$TpnhP9.RLyvh8CP2RGUtLeALVTSeU\/qMDgK7Lk1XQdp1Lmu1J.RB."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-08-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "REXMOLI3777",
    "name": {
        "title": "Mr",
        "first": "Rex",
        "middle": "X",
        "last": "Molina",
        "suffix": null
    },
    "address": {
        "streetAddress": "5608 Little Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Starbuck",
        "stateProvince": "MN",
        "locality": "Pope",
        "country": "US",
        "postalCode": "56381",
        "latitude": "45.5926",
        "longitude": "-95.5421"
    },
    "contact": {
        "phone": "+1-152-709-3777",
        "email": "rmolina152@lguplus.com",
        "socMedia": null
    },
    "login": {
        "username": "rmolina",
        "oauth2": null,
        "password": "$2y$10$D5CgZRlgS9pHyOZlRY0AOuKswG5GuVYYM8GgaFIO5nLYLjGDq7RLm"
    },
    "otherContact": {
        "emails": [
            "rmolina@megafon.net"
        ],
        "phoneNumbers": [
            "+1-882-229-7982"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-06-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "SILVLARA5863",
    "name": {
        "title": null,
        "first": "Silva",
        "middle": null,
        "last": "Lara",
        "suffix": null
    },
    "address": {
        "streetAddress": "8229 Blue River Drive",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Policarpa",
        "stateProvince": "Policarpa",
        "locality": "Policarpa",
        "country": "CO",
        "postalCode": "527009",
        "latitude": "1.6323",
        "longitude": "-77.462"
    },
    "contact": {
        "phone": "+57-153-907-5863",
        "email": "slara153@singtel.com",
        "socMedia": null
    },
    "login": {
        "username": "slara",
        "oauth2": null,
        "password": "$2y$10$PnMWFeB8QpJU6xSyQAlfquVxpEHwWvfUbRJ117uw5W5HwTVbEXkAe"
    },
    "otherContact": {
        "emails": [
            "slara@cerist.net",
            "slara@mtn.net"
        ],
        "phoneNumbers": [
            "+57-979-441-7834",
            "+57-932-378-4356"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-10-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "ALONBARR3456",
    "name": {
        "title": "Mr",
        "first": "Alonso",
        "middle": "H",
        "last": "Barrett",
        "suffix": null
    },
    "address": {
        "streetAddress": "1422 Short Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tiruvaikavur",
        "stateProvince": "Papanasam",
        "locality": "Thanjavur",
        "country": "IN",
        "postalCode": "612301",
        "latitude": "10.9923",
        "longitude": "79.2859"
    },
    "contact": {
        "phone": "+91-154-113-3456",
        "email": "abarrett154@vivendi.com",
        "socMedia": null
    },
    "login": {
        "username": "abarrett",
        "oauth2": null,
        "password": "$2y$10$\/V5wey85NqG3U4ZBgfa0ie8nJtISlZuT4n4DzPNA3stpLYsRnC27m"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-408-672-5764"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-10-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROSAMCGE5562",
    "name": {
        "title": "Mr",
        "first": "Rosario",
        "middle": "W",
        "last": "Mcgee",
        "suffix": null
    },
    "address": {
        "streetAddress": "1460 Green Mountain Ride",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Tv\u00f8royri",
        "stateProvince": null,
        "locality": null,
        "country": "FO",
        "postalCode": "800",
        "latitude": "61.5556",
        "longitude": "-6.8111"
    },
    "contact": {
        "phone": "+298-155-580-5562",
        "email": "rmcgee155@ooredoo.com",
        "socMedia": null
    },
    "login": {
        "username": "rmcgee",
        "oauth2": null,
        "password": "$2y$10$.p17t\/WQxjqZb.cqOYZjGOFc8\/I5bWLAOS6uaZIS8lnoFgn2\/WGp."
    },
    "otherContact": {
        "emails": [
            "rmcgee@telefonica.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-12-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "BRETHOWE9330",
    "name": {
        "title": null,
        "first": "Bret",
        "middle": null,
        "last": "Howe",
        "suffix": null
    },
    "address": {
        "streetAddress": "3313 Big Mountain Ride",
        "buildingName": "Building 94",
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "Brookhaven",
        "stateProvince": "NY",
        "locality": "Suffolk",
        "country": "US",
        "postalCode": "11719",
        "latitude": "40.7843",
        "longitude": "-72.8921"
    },
    "contact": {
        "phone": "+1-156-436-9330",
        "email": "bhowe156@glasnet.com",
        "socMedia": null
    },
    "login": {
        "username": "bhowe",
        "oauth2": null,
        "password": "$2y$10$.\/KFpqDfxgrbPEomgq7Gcu2AGKmjjwu.mfPhqTkk\/CjVosisD7Xre"
    },
    "otherContact": {
        "emails": [
            "bhowe@nordnet.net",
            "bhowe@turkcell.net"
        ],
        "phoneNumbers": [
            "+1-639-126-0765",
            "+1-314-494-7358"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-09-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "VEDAPOPE8069",
    "name": {
        "title": "Ms",
        "first": "Veda",
        "middle": "M",
        "last": "Pope",
        "suffix": null
    },
    "address": {
        "streetAddress": "7980 Red Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Barrio Anglo",
        "stateProvince": "Rio Negro",
        "locality": "Rio Negro",
        "country": "UY",
        "postalCode": "65000",
        "latitude": "-33.0878",
        "longitude": "-58.2377"
    },
    "contact": {
        "phone": "+598-157-562-8069",
        "email": "vpope157@cci.com",
        "socMedia": null
    },
    "login": {
        "username": "vpope",
        "oauth2": null,
        "password": "$2y$10$dT6qvotS.tPwF5AzwhKTGeU9Gswd\/cYqMMNPEUES6UkBHgcZuLQ.a"
    },
    "otherContact": {
        "emails": [
            "vpope@tm.net",
            "vpope@vivendi.net"
        ],
        "phoneNumbers": [
            "+598-382-900-3526"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-12-06"
    }
});
db.customers.insertOne(
{
    "customerKey": "ISIAMOON7559",
    "name": {
        "title": "Mr",
        "first": "Isiah",
        "middle": "C",
        "last": "Moon",
        "suffix": null
    },
    "address": {
        "streetAddress": "441 Short Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Qualicum Beach",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V9K",
        "latitude": "49.3468",
        "longitude": "-124.4361"
    },
    "contact": {
        "phone": "+1-158-844-7559",
        "email": "imoon158@orstom.com",
        "socMedia": null
    },
    "login": {
        "username": "imoon",
        "oauth2": null,
        "password": "$2y$10$6f3Oi8WkfCBRbUDXKNowquS3r.KJOQozZsswUp0flHv0XZ\/\/JzJSy"
    },
    "otherContact": {
        "emails": [
            "imoon@verizon.net"
        ],
        "phoneNumbers": [
            "+1-831-986-6103"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1993-06-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "ZACHWALK2598",
    "name": {
        "title": null,
        "first": "Zachary",
        "middle": null,
        "last": "Walker",
        "suffix": null
    },
    "address": {
        "streetAddress": "4335 Red Mound Ride",
        "buildingName": "Building 27",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Talbot",
        "stateProvince": "IN",
        "locality": "Benton",
        "country": "US",
        "postalCode": "47984",
        "latitude": "40.5053",
        "longitude": "-87.4542"
    },
    "contact": {
        "phone": "+1-159-241-2598",
        "email": "zwalker159@telkom.com",
        "socMedia": null
    },
    "login": {
        "username": "zwalker",
        "oauth2": null,
        "password": "$2y$10$2yBK\/rLn4gqPiZDg8mpRqeYD8l4wUNEWd6L3ph.mon6BvxZRrPWLS"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-392-663-7672"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-12-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "SANTBLAN7303",
    "name": {
        "title": "Ms",
        "first": "Santiago",
        "middle": "Y",
        "last": "Blanchard",
        "suffix": null
    },
    "address": {
        "streetAddress": "9927 Little Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lagrange",
        "stateProvince": "GA",
        "locality": "Troup",
        "country": "US",
        "postalCode": "30240",
        "latitude": "33.0243",
        "longitude": "-85.0739"
    },
    "contact": {
        "phone": "+1-160-060-7303",
        "email": "sblancha160@ote.com",
        "socMedia": {
            "twitter": "sblancha@twitter.com"
        }
    },
    "login": {
        "username": "sblancha",
        "oauth2": "sblancha@twitter.com",
        "password": "$2y$10$gSlRG1dj1w0\/t16UaxF9vO63Ejo9sGnPF16.iyrWe\/DTIaqPqNIK."
    },
    "otherContact": {
        "emails": [
            "sblancha@ntt.net"
        ],
        "phoneNumbers": [
            "+1-256-414-5478",
            "+1-932-765-3740"
        ],
        "socMedias": {
            "google": "sblancha@google.com",
            "twitter": "sblancha@twitter.com",
            "line": "sblancha@line.com",
            "skype": "sblancha@skype.com"
        }
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1995-03-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "RICKROBE4366",
    "name": {
        "title": "Ms",
        "first": "Ricki",
        "middle": "T",
        "last": "Roberson",
        "suffix": null
    },
    "address": {
        "streetAddress": "9858 Little Ridge Ride",
        "buildingName": null,
        "floor": 1,
        "roomAptCondoFlat": null,
        "city": "J\u00e1sziv\u00e1ny",
        "stateProvince": "JN",
        "locality": "J\u00e1sz-Nagykun-Szolnok",
        "country": "HU",
        "postalCode": "5135",
        "latitude": "47.5333",
        "longitude": "20.25"
    },
    "contact": {
        "phone": "+36-161-324-4366",
        "email": "rroberso161@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "rroberso",
        "oauth2": null,
        "password": "$2y$10$mmTfz0Ax58KdQ7Fg\/5uhdeJxH8UYb\/QindFHGvCX4STKmv9pyLw6i"
    },
    "otherContact": {
        "emails": [
            "rroberso@relcom.net",
            "rroberso@telia.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-05-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "SUNGROBE7351",
    "name": {
        "title": null,
        "first": "Sung",
        "middle": null,
        "last": "Robertson",
        "suffix": null
    },
    "address": {
        "streetAddress": "4583 Blue River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Southeastern Avalon Peninsula (Ferryland)",
        "stateProvince": "NL",
        "locality": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A0A",
        "latitude": "47.2195",
        "longitude": "-53.1448"
    },
    "contact": {
        "phone": "+1-162-410-7351",
        "email": "sroberts162@ptcl.com",
        "socMedia": null
    },
    "login": {
        "username": "sroberts",
        "oauth2": null,
        "password": "$2y$10$q4hGiVDBYAgWmdKrpKFYt.bL2I05TjDZVSIKPha\/1Kzen0f.\/qOl2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-20-084-3540"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-03-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "KATRAVER0535",
    "name": {
        "title": "Ms",
        "first": "Katrice",
        "middle": "G",
        "last": "Avery",
        "suffix": null
    },
    "address": {
        "streetAddress": "2461 Little Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kurmagalos k.",
        "stateProvince": "Jonavos r. sav.",
        "locality": "Jonavos r. sav.",
        "country": "LT",
        "postalCode": "55001",
        "latitude": "55.1",
        "longitude": "24.1333"
    },
    "contact": {
        "phone": "+370-163-878-0535",
        "email": "kavery163@netcom.com",
        "socMedia": null
    },
    "login": {
        "username": "kavery",
        "oauth2": null,
        "password": "$2y$10$hfOSxpivA52SxsRXKxeyieKpjFK\/ibqw606uQlbdOmEQBzBct1.ga"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+370-419-062-7114",
            "+370-454-235-2802"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-08-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "ISAIWADE3484",
    "name": {
        "title": "Mr",
        "first": "Isaias",
        "middle": "I",
        "last": "Wade",
        "suffix": null
    },
    "address": {
        "streetAddress": "5626 Big Mound Street",
        "buildingName": "Building 14",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "C G O Complex",
        "stateProvince": "New Delhi",
        "locality": "South Delhi",
        "country": "IN",
        "postalCode": "110003",
        "latitude": "28.5838",
        "longitude": "77.2218"
    },
    "contact": {
        "phone": "+91-164-482-3484",
        "email": "iwade164@millicom.com",
        "socMedia": null
    },
    "login": {
        "username": "iwade",
        "oauth2": null,
        "password": "$2y$10$TH2fbWSLzT47vEDtI2zLNeeOpW7HwDu6tkeRMoQHwEGsEDD2uMJZu"
    },
    "otherContact": {
        "emails": [
            "iwade@mtn.net",
            "iwade@centurylink.net"
        ],
        "phoneNumbers": [
            "+91-724-794-8304",
            "+91-842-877-3440"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-01-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "IRACALD0860",
    "name": {
        "title": null,
        "first": "Ira",
        "middle": null,
        "last": "Caldwell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9554 Big Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0426\u0435\u0440\u043a\u043e\u0432\u0441\u043a\u0438 \/ Cerkovski",
        "stateProvince": "BGS",
        "locality": "\u041a\u0430\u0440\u043d\u043e\u0431\u0430\u0442 \/ Karnobat",
        "country": "BG",
        "postalCode": "8472",
        "latitude": "42.6",
        "longitude": "26.8833"
    },
    "contact": {
        "phone": "+359-165-136-0860",
        "email": "icaldwel165@orange.com",
        "socMedia": null
    },
    "login": {
        "username": "icaldwel",
        "oauth2": null,
        "password": "$2y$10$0m00cPBrjOD55jPtNCSYxO.XLNfphgKhxv\/sorokd1JFfYCb\/P4aW"
    },
    "otherContact": {
        "emails": [
            "icaldwel@mtn.net"
        ],
        "phoneNumbers": [
            "+359-42-198-1573",
            "+359-139-882-7953"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-08-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "TANNSCHM2016",
    "name": {
        "title": "Mr",
        "first": "Tanner",
        "middle": "W",
        "last": "Schmitt",
        "suffix": null
    },
    "address": {
        "streetAddress": "5686 Little Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "EA",
        "city": "Nornalup",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6333",
        "latitude": "-34.9917",
        "longitude": "116.8202"
    },
    "contact": {
        "phone": "+61-166-752-2016",
        "email": "tschmitt166@nordnet.com",
        "socMedia": null
    },
    "login": {
        "username": "tschmitt",
        "oauth2": null,
        "password": "$2y$10$Vof8.6FQ9l8RH.PY9ACtEezmp7TjwaKkF9hEtD4YpN2g2Q5ibI30e"
    },
    "otherContact": {
        "emails": [
            "tschmitt@orange.net"
        ],
        "phoneNumbers": [
            "+61-773-277-3421"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-11-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "YAHATOWN8678",
    "name": {
        "title": "Ms",
        "first": "Yahaira",
        "middle": "N",
        "last": "Townsend",
        "suffix": null
    },
    "address": {
        "streetAddress": "9778 Green Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Inarajan",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96917",
        "latitude": "13.2944",
        "longitude": "144.7211"
    },
    "contact": {
        "phone": "+1671-167-928-8678",
        "email": "ytownsen167@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "ytownsen",
        "oauth2": null,
        "password": "$2y$10$oQEdVesj1ks3YIDen1BF..9SnTrs7Jl8fMfsiHa5ZQYezBht8iAJu"
    },
    "otherContact": {
        "emails": [
            "ytownsen@telesystems.net",
            "ytownsen@megafon.net",
            "ytownsen@singtel.net"
        ],
        "phoneNumbers": [
            "+1671-580-250-5227",
            "+1671-479-631-3542"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-09-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "PASQREID1319",
    "name": {
        "title": null,
        "first": "Pasquale",
        "middle": null,
        "last": "Reid",
        "suffix": null
    },
    "address": {
        "streetAddress": "9014 Green Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Spanby",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "NG34",
        "latitude": "52.9293",
        "longitude": "-0.3742"
    },
    "contact": {
        "phone": "+44-168-321-1319",
        "email": "preid168@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "preid",
        "oauth2": null,
        "password": "$2y$10$5laHNeu7IvKb0V3WecFBtupkhYjPwr3\/UjTM18SbvfD.efPqmbShu"
    },
    "otherContact": {
        "emails": [
            "preid@telekom.net",
            "preid@kddi.net"
        ],
        "phoneNumbers": [
            "+44-617-953-4956",
            "+44-702-800-2966",
            "+44-444-134-6117"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-09-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "BRANHOOV8607",
    "name": {
        "title": "Ms",
        "first": "Brandon",
        "middle": "E",
        "last": "Hoover",
        "suffix": null
    },
    "address": {
        "streetAddress": "4299 Short Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kot Umrana",
        "stateProvince": "Norhern Punajb Rawalpindi",
        "locality": "Norhern Punajb Rawalpindi",
        "country": "PK",
        "postalCode": "40451",
        "latitude": "32.1833",
        "longitude": "73.1667"
    },
    "contact": {
        "phone": "+92-169-910-8607",
        "email": "bhoover169@ote.com",
        "socMedia": null
    },
    "login": {
        "username": "bhoover",
        "oauth2": null,
        "password": "$2y$10$yiVWA5CmXeuYuim6ipfRMeOlvA0SApETZhuBT5UNHq.tsD6ZhBK.6"
    },
    "otherContact": {
        "emails": [
            "bhoover@ote.net",
            "bhoover@telenor.net",
            "bhoover@ais.net"
        ],
        "phoneNumbers": [
            "+92-571-633-0132",
            "+92-446-528-1996",
            "+92-731-250-3605"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-07-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "DELMGREG8031",
    "name": {
        "title": "Mr",
        "first": "Delmar",
        "middle": "L",
        "last": "Gregory",
        "suffix": null
    },
    "address": {
        "streetAddress": "6265 Red Tree Circle",
        "buildingName": "Building 4B",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St. Mary's",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "N4X",
        "latitude": "43.2655",
        "longitude": "-81.1687"
    },
    "contact": {
        "phone": "+1-170-517-8031",
        "email": "dgregory170@megafon.com",
        "socMedia": {
            "skype": "dgregory@skype.com"
        }
    },
    "login": {
        "username": "dgregory",
        "oauth2": "dgregory@skype.com",
        "password": "$2y$10$lTWNsF.9HjKTstv4.YAGDukkBeLy..WkutA1kmLTr7AbERB4L21hG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-456-809-5027",
            "+1-447-293-8694"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-12-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "SANJMCMI8917",
    "name": {
        "title": null,
        "first": "Sanjuanita",
        "middle": null,
        "last": "Mcmillan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2370 Red Mound Way",
        "buildingName": null,
        "floor": 7,
        "roomAptCondoFlat": null,
        "city": "Larsnes",
        "stateProvince": "Sande (M.R.)",
        "locality": "Sande (M.R.)",
        "country": "NO",
        "postalCode": "6084",
        "latitude": "62.2028",
        "longitude": "5.5773"
    },
    "contact": {
        "phone": "+47-171-752-8917",
        "email": "smcmilla171@tm.com",
        "socMedia": null
    },
    "login": {
        "username": "smcmilla",
        "oauth2": null,
        "password": "$2y$10$Kmr.2zzQKlKLsS0zYBd3ZOf\/7CnE8xbECNfANS9hhXRUsxXa.1Pqe"
    },
    "otherContact": {
        "emails": [
            "smcmilla@openworld.net",
            "smcmilla@ccs.net"
        ],
        "phoneNumbers": [
            "+47-155-385-2227",
            "+47-251-811-3734"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-07-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "HUBEAYAL4096",
    "name": {
        "title": "Mr",
        "first": "Hubert",
        "middle": "D",
        "last": "Ayala",
        "suffix": null
    },
    "address": {
        "streetAddress": "8529 Long River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sandy Grove",
        "stateProvince": "SA",
        "locality": "South Australia",
        "country": "AU",
        "postalCode": "5275",
        "latitude": "-37.0028",
        "longitude": "140.0667"
    },
    "contact": {
        "phone": "+61-172-254-4096",
        "email": "hayala172@telstra.com",
        "socMedia": null
    },
    "login": {
        "username": "hayala",
        "oauth2": null,
        "password": "$2y$10$Fk1GVtisfsH18yS85xfZaOs41VXTomqB9ph07V6Hwee3GbP9SBoYy"
    },
    "otherContact": {
        "emails": [
            "hayala@telstra.net"
        ],
        "phoneNumbers": [
            "+61-603-368-2902"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-12-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "OSCABARA1818",
    "name": {
        "title": "Mr",
        "first": "Oscar",
        "middle": "Z",
        "last": "Barajas",
        "suffix": null
    },
    "address": {
        "streetAddress": "1989 Winding River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00c7inaralti",
        "stateProvince": "\u00d6merli",
        "locality": "\u00d6merli",
        "country": "TR",
        "postalCode": "47570",
        "latitude": "37.3844",
        "longitude": "40.86"
    },
    "contact": {
        "phone": "+90-173-071-1818",
        "email": "obarajas173@ais.com",
        "socMedia": null
    },
    "login": {
        "username": "obarajas",
        "oauth2": null,
        "password": "$2y$10$YWhk7Bk3NeCeb9Emk5Wbxe3NlwPfuXTPotc0PoZOXDQHuGpwtQAR."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+90-206-400-5114"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1948-02-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHARPERR6685",
    "name": {
        "title": null,
        "first": "Sharleen",
        "middle": null,
        "last": "Perry",
        "suffix": null
    },
    "address": {
        "streetAddress": "3354 Big River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ratta Khera",
        "stateProvince": "Jalalabad",
        "locality": "Firozpur",
        "country": "IN",
        "postalCode": "152033",
        "latitude": "30.9364",
        "longitude": "74.81"
    },
    "contact": {
        "phone": "+91-174-471-6685",
        "email": "sperry174@megafon.com",
        "socMedia": null
    },
    "login": {
        "username": "sperry",
        "oauth2": null,
        "password": "$2y$10$7eho2eoGNxFQPZ1eMs6q9eBuDZJYHJKlOgAWCMT3Mxyq\/1mCBK20e"
    },
    "otherContact": {
        "emails": [
            "sperry@oi.net",
            "sperry@mtn.net",
            "sperry@worldnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-10-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "MURRWALT5125",
    "name": {
        "title": "Mr",
        "first": "Murray",
        "middle": "Y",
        "last": "Walton",
        "suffix": null
    },
    "address": {
        "streetAddress": "8342 Blue Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C9",
        "city": "Turni\u0161\u0107e Desini\u0107ko",
        "stateProvince": "Desini\u0107",
        "locality": "Desini\u0107",
        "country": "HR",
        "postalCode": "49216",
        "latitude": "46.1738",
        "longitude": "15.8106"
    },
    "contact": {
        "phone": "+385-175-180-5125",
        "email": "mwalton175@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "mwalton",
        "oauth2": null,
        "password": "$2y$10$uDds.jCZSLRVMP.tiDWIoupQGyGgrxUw0pHRmAjy4QbOT8AIik.wy"
    },
    "otherContact": {
        "emails": [
            "mwalton@ui.net"
        ],
        "phoneNumbers": [
            "+385-93-584-8166"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-12-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "ETHABART9614",
    "name": {
        "title": "Mr",
        "first": "Ethan",
        "middle": "J",
        "last": "Bartlett",
        "suffix": null
    },
    "address": {
        "streetAddress": "3998 Blue Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Patrahatu",
        "stateProvince": "Silli",
        "locality": "Ranchi",
        "country": "IN",
        "postalCode": "835102",
        "latitude": "25.1025",
        "longitude": "87.4165"
    },
    "contact": {
        "phone": "+91-176-880-9614",
        "email": "ebartlet176@orstom.com",
        "socMedia": null
    },
    "login": {
        "username": "ebartlet",
        "oauth2": null,
        "password": "$2y$10$UkjmyhFBpf2zGf0eSzdMV.T9BAybsit8ZnMNm69p5Zvhq5O8yw5fC"
    },
    "otherContact": {
        "emails": [
            "ebartlet@tata.net"
        ],
        "phoneNumbers": [
            "+91-212-256-6761"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-05-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "FERMVAUG0947",
    "name": {
        "title": null,
        "first": "Fermin",
        "middle": null,
        "last": "Vaughan",
        "suffix": null
    },
    "address": {
        "streetAddress": "828 Red Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Uribia",
        "stateProvince": "Uribia",
        "locality": "Uribia",
        "country": "CO",
        "postalCode": "441049",
        "latitude": "11.7139",
        "longitude": "-72.266"
    },
    "contact": {
        "phone": "+57-177-053-0947",
        "email": "fvaughan177@safaricom.com",
        "socMedia": null
    },
    "login": {
        "username": "fvaughan",
        "oauth2": null,
        "password": "$2y$10$\/yF5P5PO3NnsYC1VpOiwF.oU2FxQRkVwX9ljsV5EbovEBwzq0kYTa"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+57-187-507-6266",
            "+57-461-521-1600",
            "+57-830-041-6860"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-09-19"
    }
});
db.customers.insertOne(
{
    "customerKey": "TRINCHEN9652",
    "name": {
        "title": "Mr",
        "first": "Trinidad",
        "middle": "R",
        "last": "Chen",
        "suffix": null
    },
    "address": {
        "streetAddress": "4581 Short Ditch Road",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": null,
        "city": "St. John's North Central",
        "stateProvince": "NL",
        "locality": "St. John's ",
        "country": "CA",
        "postalCode": "A1C",
        "latitude": "47.5124",
        "longitude": "-52.6729"
    },
    "contact": {
        "phone": "+1-178-526-9652",
        "email": "tchen178@bt.com",
        "socMedia": null
    },
    "login": {
        "username": "tchen",
        "oauth2": null,
        "password": "$2y$10$YaaMYtEbFXGx3TVK1Ns9leanlZU5W7nQ2Io8w1zm0\/G6tjFuN6JDC"
    },
    "otherContact": {
        "emails": [
            "tchen@tata.net",
            "tchen@telenor.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-02-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "ALITBOND6793",
    "name": {
        "title": "Ms",
        "first": "Alita",
        "middle": "G",
        "last": "Bond",
        "suffix": null
    },
    "address": {
        "streetAddress": "6715 Little Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jugirkanda",
        "stateProvince": "Uzirpur",
        "locality": "Barishal",
        "country": "BD",
        "postalCode": "8222",
        "latitude": "22.846",
        "longitude": "90.1701"
    },
    "contact": {
        "phone": "+880-179-501-6793",
        "email": "abond179@kpn.com",
        "socMedia": null
    },
    "login": {
        "username": "abond",
        "oauth2": null,
        "password": "$2y$10$mNYqacH84YMYXbaUi\/fbpuaXILOktkwqGEY\/IAjZXnPia4NT7ksH."
    },
    "otherContact": {
        "emails": [
            "abond@oi.net",
            "abond@algonet.net"
        ],
        "phoneNumbers": [
            "+880-760-803-6199"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-01-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "DREWROSE9421",
    "name": {
        "title": null,
        "first": "Drew",
        "middle": null,
        "last": "Rose",
        "suffix": null
    },
    "address": {
        "streetAddress": "3662 Red Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mandurah East",
        "stateProvince": "WA",
        "locality": "BRAND",
        "country": "AU",
        "postalCode": "6210",
        "latitude": "-32.5733",
        "longitude": "115.7613"
    },
    "contact": {
        "phone": "+61-180-502-9421",
        "email": "drose180@bce.com",
        "socMedia": {
            "skype": "drose@skype.com"
        }
    },
    "login": {
        "username": "drose",
        "oauth2": "drose@skype.com",
        "password": "$2y$10$kWubKI9k\/ejvu2hcISZQ6OGdp0NR.GmVZwYcCUULElMGLEyy8LYbq"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-683-252-6550"
        ],
        "socMedias": {
            "google": "drose@google.com",
            "skype": "drose@skype.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-03-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "BRYAHOWE7588",
    "name": {
        "title": "Ms",
        "first": "Bryanna",
        "middle": "Y",
        "last": "Howe",
        "suffix": null
    },
    "address": {
        "streetAddress": "479 Little Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ny-\u00c5lesund",
        "stateProvince": "Spitsbergen",
        "locality": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9173",
        "latitude": "78.9237",
        "longitude": "11.925"
    },
    "contact": {
        "phone": "+47-181-971-7588",
        "email": "bhowe181@singtel.com",
        "socMedia": null
    },
    "login": {
        "username": "bhowe",
        "oauth2": null,
        "password": "$2y$10$xSn7YdDkAU7oeO6LsF720.V\/LSIuMmGIFKBqjyGKpeYh72XYkaFp6"
    },
    "otherContact": {
        "emails": [
            "bhowe@greennet.net",
            "bhowe@lookdata.net"
        ],
        "phoneNumbers": [
            "+47-959-012-6474"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-03-11"
    }
});
db.customers.insertOne(
{
    "customerKey": "MAYAMORG2353",
    "name": {
        "title": "Ms",
        "first": "Maya",
        "middle": "G",
        "last": "Morgan",
        "suffix": null
    },
    "address": {
        "streetAddress": "1184 Short Stream Circle",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": null,
        "city": "Diffolu T.E.",
        "stateProvince": "Bkt",
        "locality": "Golaghat",
        "country": "IN",
        "postalCode": "785612",
        "latitude": "26.6402",
        "longitude": "93.6005"
    },
    "contact": {
        "phone": "+91-182-023-2353",
        "email": "mmorgan182@nordnet.com",
        "socMedia": null
    },
    "login": {
        "username": "mmorgan",
        "oauth2": null,
        "password": "$2y$10$B6Iql8xH1lfYqj8h7QADsetxgV3tjtNciXmrf4Tt3vffPvGhdA\/9e"
    },
    "otherContact": {
        "emails": [
            "mmorgan@nordnet.net",
            "mmorgan@tt.net"
        ],
        "phoneNumbers": [
            "+91-478-118-6191",
            "+91-275-906-0986"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-01-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "LILIFRAZ1313",
    "name": {
        "title": null,
        "first": "Lilian",
        "middle": null,
        "last": "Frazier",
        "suffix": null
    },
    "address": {
        "streetAddress": "132 Little Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Maffra",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3860",
        "latitude": "-37.9713",
        "longitude": "146.9837"
    },
    "contact": {
        "phone": "+61-183-393-1313",
        "email": "lfrazier183@softbank.com",
        "socMedia": null
    },
    "login": {
        "username": "lfrazier",
        "oauth2": null,
        "password": "$2y$10$54PazMAKvE2ex4zzUoErx.KSPtrULqujgLdMLWtxZxKJzbmLYSnvC"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-366-436-1898"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-11-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "CLEVBRAD2694",
    "name": {
        "title": "Mr",
        "first": "Cleveland",
        "middle": "X",
        "last": "Bradley",
        "suffix": null
    },
    "address": {
        "streetAddress": "8587 Big Mound Road",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": "9D",
        "city": "Northern Newfoundland (Springdale)",
        "stateProvince": "NL",
        "locality": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A0J",
        "latitude": "49.5067",
        "longitude": "-56.2616"
    },
    "contact": {
        "phone": "+1-184-748-2694",
        "email": "cbradley184@telekom.com",
        "socMedia": null
    },
    "login": {
        "username": "cbradley",
        "oauth2": null,
        "password": "$2y$10$0.4jpC8.WepyssAyukwo1OAhFdpUhtka\/7MAJA8Uz9cAOiXsxU8ra"
    },
    "otherContact": {
        "emails": [
            "cbradley@telenor.net",
            "cbradley@openworld.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-08-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROBEPEAR7333",
    "name": {
        "title": "Ms",
        "first": "Robena",
        "middle": "O",
        "last": "Pearson",
        "suffix": null
    },
    "address": {
        "streetAddress": "444 Red Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Schaanwald",
        "stateProvince": "Mauren",
        "locality": "Mauren",
        "country": "LI",
        "postalCode": "9486",
        "latitude": "47.2151",
        "longitude": "9.562"
    },
    "contact": {
        "phone": "+423-185-076-7333",
        "email": "rpearson185@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "rpearson",
        "oauth2": null,
        "password": "$2y$10$fr99X305wa9U.8CKv9JG7ez.vu214KXYJ9JTJXF8XwaJPK2dpBzaS"
    },
    "otherContact": {
        "emails": [
            "rpearson@jio.net"
        ],
        "phoneNumbers": [
            "+423-916-086-8085"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-03-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "DARCFRAN2726",
    "name": {
        "title": null,
        "first": "Darcy",
        "middle": null,
        "last": "Franco",
        "suffix": null
    },
    "address": {
        "streetAddress": "6595 Big Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Parsamalik",
        "stateProvince": "Nautanwa",
        "locality": "Maharajganj",
        "country": "IN",
        "postalCode": "273305",
        "latitude": "26.6877",
        "longitude": "82.4345"
    },
    "contact": {
        "phone": "+91-186-336-2726",
        "email": "dfranco186@airtel.com",
        "socMedia": null
    },
    "login": {
        "username": "dfranco",
        "oauth2": null,
        "password": "$2y$10$qAn\/HHF7eTZaUyrvPMCIxO4NF0mAiFX5E61jOjiFU3QDjMGTnWz.a"
    },
    "otherContact": {
        "emails": [
            "dfranco@belgacom.net",
            "dfranco@telecom.net",
            "dfranco@megafon.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-08-19"
    }
});
db.customers.insertOne(
{
    "customerKey": "DEEDCOBB3703",
    "name": {
        "title": "Ms",
        "first": "Deedra",
        "middle": "R",
        "last": "Cobb",
        "suffix": null
    },
    "address": {
        "streetAddress": "294 Winding Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Casablanca",
        "stateProvince": "Casablanca",
        "locality": "Provincia de Valpara\u00edso",
        "country": "CL",
        "postalCode": "2480000",
        "latitude": "-33.3158",
        "longitude": "-71.4353"
    },
    "contact": {
        "phone": "+56-187-228-3703",
        "email": "dcobb187@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "dcobb",
        "oauth2": null,
        "password": "$2y$10$DC6zgMWox.MGcoedqVDA\/OGkA1tUKJ1wByqV6yZlVv1pKzZxtkCES"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+56-102-337-2588",
            "+56-307-950-8553"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-11-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "MOHADAVI0997",
    "name": {
        "title": "Mr",
        "first": "Mohammed",
        "middle": "U",
        "last": "Davila",
        "suffix": null
    },
    "address": {
        "streetAddress": "3321 Blue River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chirnside Park",
        "stateProvince": "VIC",
        "locality": "RINGWOOD",
        "country": "AU",
        "postalCode": "3116",
        "latitude": "-37.7386",
        "longitude": "145.3143"
    },
    "contact": {
        "phone": "+61-188-699-0997",
        "email": "mdavila188@turkcell.com",
        "socMedia": null
    },
    "login": {
        "username": "mdavila",
        "oauth2": null,
        "password": "$2y$10$I2kT.bnCMIO0p18lAAIhnOXFyYEIl9kxGC2nOnN9Q26tflbhscvUu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-01-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "AUGUBREW4936",
    "name": {
        "title": null,
        "first": "August",
        "middle": null,
        "last": "Brewer",
        "suffix": null
    },
    "address": {
        "streetAddress": "6041 Short River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041a\u0438\u0440\u043e\u0432\u043e",
        "stateProvince": "\u042d\u041d\u0413\u0415\u041b\u042c\u0421\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u042d\u041d\u0413\u0415\u041b\u042c\u0421\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "413148",
        "latitude": "51.0306",
        "longitude": "46.3828"
    },
    "contact": {
        "phone": "+7-189-429-4936",
        "email": "abrewer189@optus.com",
        "socMedia": null
    },
    "login": {
        "username": "abrewer",
        "oauth2": null,
        "password": "$2y$10$KdWFz.byv7q4R5MRImbB0OIplHow374yAk7Ub2cqiLmdwaY4KqJVu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+7-380-295-3537",
            "+7-64-950-1372",
            "+7-877-549-1647"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-03-24"
    }
});
db.customers.insertOne(
{
    "customerKey": "FREDREED0060",
    "name": {
        "title": "Mr",
        "first": "Frederick",
        "middle": "B",
        "last": "Reed",
        "suffix": null
    },
    "address": {
        "streetAddress": "5684 Winding Ridge Way",
        "buildingName": null,
        "floor": 16,
        "roomAptCondoFlat": null,
        "city": "San Antonio",
        "stateProvince": "TX",
        "locality": "Bexar",
        "country": "US",
        "postalCode": "78232",
        "latitude": "29.5863",
        "longitude": "-98.4769"
    },
    "contact": {
        "phone": "+1-190-550-0060",
        "email": "freed190@centurylink.com",
        "socMedia": {
            "google": "freed@google.com"
        }
    },
    "login": {
        "username": "freed",
        "oauth2": "freed@google.com",
        "password": "$2y$10$M13nhzaE\/haZYfagYz9.AuyC97GPjDFnDy4lIhFIORmK8ns0Tm0S2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": {
            "google": "freed@google.com",
            "facebook": "freed@facebook.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-08-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "DIONFOST3057",
    "name": {
        "title": "Ms",
        "first": "Dione",
        "middle": "Z",
        "last": "Foster",
        "suffix": null
    },
    "address": {
        "streetAddress": "485 Big Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mongagu\u00e1",
        "stateProvince": "Sao Paulo",
        "locality": "Sao Paulo",
        "country": "BR",
        "postalCode": "11730-000",
        "latitude": "-24.0574",
        "longitude": "-46.6684"
    },
    "contact": {
        "phone": "+55-191-776-3057",
        "email": "dfoster191@movil.com",
        "socMedia": null
    },
    "login": {
        "username": "dfoster",
        "oauth2": null,
        "password": "$2y$10$zY7hFZybr1yKTHgMzhzXeOSKPgf36iyotZhf1kOfA4i7MvrJvktX2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+55-2-127-0540"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-07-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "JIMMLEBL1548",
    "name": {
        "title": null,
        "first": "Jimmy",
        "middle": null,
        "last": "Leblanc",
        "suffix": null
    },
    "address": {
        "streetAddress": "6013 Short Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bruceton",
        "stateProvince": "TN",
        "locality": "Carroll",
        "country": "US",
        "postalCode": "38317",
        "latitude": "36.0268",
        "longitude": "-88.2518"
    },
    "contact": {
        "phone": "+1-192-833-1548",
        "email": "jleblanc192@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "jleblanc",
        "oauth2": null,
        "password": "$2y$10$tTE1Rm6qT4XlE6eorw8jnOGv0SPfn\/k.0\/AcCZzxZ.9UI1x6seabK"
    },
    "otherContact": {
        "emails": [
            "jleblanc@mtn.net",
            "jleblanc@ais.net",
            "jleblanc@tt.net"
        ],
        "phoneNumbers": [
            "+1-452-267-4593"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-05-07"
    }
});
db.customers.insertOne(
{
    "customerKey": "NOLACAMP8343",
    "name": {
        "title": "Mr",
        "first": "Nolan",
        "middle": "Z",
        "last": "Campos",
        "suffix": null
    },
    "address": {
        "streetAddress": "6296 Red Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Montsin\u00e9ry-Tonnegrande",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97356",
        "latitude": "4.9",
        "longitude": "-52.5"
    },
    "contact": {
        "phone": "+594-193-381-8343",
        "email": "ncampos193@bt.com",
        "socMedia": null
    },
    "login": {
        "username": "ncampos",
        "oauth2": null,
        "password": "$2y$10$9lkRDd\/8WJiM4tp0rXwO8OW6\/W3aCzonlMp3jH6DUlpxFN\/QReB1i"
    },
    "otherContact": {
        "emails": [
            "ncampos@orange.net",
            "ncampos@telefonica.net"
        ],
        "phoneNumbers": [
            "+594-811-831-1506"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-08-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "BRITREYE3703",
    "name": {
        "title": "Ms",
        "first": "Britney",
        "middle": "H",
        "last": "Reyes",
        "suffix": null
    },
    "address": {
        "streetAddress": "3202 Big Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hamilton (Southam \/ Bonnington \/ Yeoville \/ Kernighan \/ Gourley \/ Rolston \/ Buchanan \/ Mohawk \/ Westcliffe \/ Gilbert \/ Gilkson \/ Gurnett \/ Fessenden \/ Mountview)",
        "stateProvince": "ON",
        "locality": "Hamilton",
        "country": "CA",
        "postalCode": "L9C",
        "latitude": "43.2313",
        "longitude": "-79.9049"
    },
    "contact": {
        "phone": "+1-194-909-3703",
        "email": "breyes194@zain.com",
        "socMedia": null
    },
    "login": {
        "username": "breyes",
        "oauth2": null,
        "password": "$2y$10$NZLVTZhhjwpA9wOSn6b6MOXQXSdB7yE5LOVSoS7sj\/5Fn8uePbHDi"
    },
    "otherContact": {
        "emails": [
            "breyes@bce.net",
            "breyes@safaricom.net"
        ],
        "phoneNumbers": [
            "+1-188-557-5623",
            "+1-360-960-9665",
            "+1-69-649-2550"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-01-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "MICKBRAD6154",
    "name": {
        "title": null,
        "first": "Mickey",
        "middle": null,
        "last": "Bradford",
        "suffix": null
    },
    "address": {
        "streetAddress": "8580 Big Woods Way",
        "buildingName": "Building EA",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Manila Bulletin",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "0900",
        "latitude": "13.2947",
        "longitude": "123.7933"
    },
    "contact": {
        "phone": "+63-195-929-6154",
        "email": "mbradfor195@ccs.com",
        "socMedia": null
    },
    "login": {
        "username": "mbradfor",
        "oauth2": null,
        "password": "$2y$10$lNlkP\/llLLERvvf9HWxEf.9BIxi5a7MvYeY8pSZyEUHjmRyfSttkS"
    },
    "otherContact": {
        "emails": [
            "mbradfor@jio.net",
            "mbradfor@lguplus.net",
            "mbradfor@unicom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-12-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "HASSCAMP4484",
    "name": {
        "title": "Mr",
        "first": "Hassan",
        "middle": "O",
        "last": "Campbell",
        "suffix": null
    },
    "address": {
        "streetAddress": "8976 Little Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mossgiel",
        "stateProvince": "NSW",
        "locality": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2878",
        "latitude": "-33.2495",
        "longitude": "144.5657"
    },
    "contact": {
        "phone": "+61-196-827-4484",
        "email": "hcampbel196@glasnet.com",
        "socMedia": null
    },
    "login": {
        "username": "hcampbel",
        "oauth2": null,
        "password": "$2y$10$\/2pgEqwP8VQCzfzNQQ7wxuogL1\/6fSXxjHE.RSMJ.z0Cdy\/\/iEVEi"
    },
    "otherContact": {
        "emails": [
            "hcampbel@greennet.net",
            "hcampbel@ptcl.net"
        ],
        "phoneNumbers": [
            "+61-272-397-1390"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-12-19"
    }
});
db.customers.insertOne(
{
    "customerKey": "NATHSTAN1524",
    "name": {
        "title": "Mr",
        "first": "Nathaniel",
        "middle": "M",
        "last": "Stanley",
        "suffix": null
    },
    "address": {
        "streetAddress": "216 Winding Ditch Road",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620",
        "latitude": "-14.2667",
        "longitude": "-178.1667"
    },
    "contact": {
        "phone": "+681-197-238-1524",
        "email": "nstanley197@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "nstanley",
        "oauth2": null,
        "password": "$2y$10$V42XF1VnHXSpGP3Weu0GMOlo0a7xkMrnZkKsGrHdVoW0vhgzAKLFa"
    },
    "otherContact": {
        "emails": [
            "nstanley@telecomitalia.net",
            "nstanley@greennet.net",
            "nstanley@unicom.net"
        ],
        "phoneNumbers": [
            "+681-597-335-6072"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-07-11"
    }
});
db.customers.insertOne(
{
    "customerKey": "JAREMORA3964",
    "name": {
        "title": null,
        "first": "Jared",
        "middle": null,
        "last": "Morales",
        "suffix": null
    },
    "address": {
        "streetAddress": "3892 Winding Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Birkhill",
        "stateProvince": "Scotland",
        "locality": "Angus",
        "country": "GB",
        "postalCode": "DD2",
        "latitude": "56.4702",
        "longitude": "-3.031"
    },
    "contact": {
        "phone": "+44-198-856-3964",
        "email": "jmorales198@etisalat.com",
        "socMedia": null
    },
    "login": {
        "username": "jmorales",
        "oauth2": null,
        "password": "$2y$10$6O2iuiULW6hJEFn076v3Tu.d5XJVEb2tahdht0knT9iXslJVgHd6."
    },
    "otherContact": {
        "emails": [
            "jmorales@greennet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-01-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "GLENBYRD2082",
    "name": {
        "title": "Mr",
        "first": "Glen",
        "middle": "S",
        "last": "Byrd",
        "suffix": null
    },
    "address": {
        "streetAddress": "8249 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Godahena",
        "stateProvince": "Galle",
        "locality": "Galle",
        "country": "LK",
        "postalCode": "80302",
        "latitude": "6.2393",
        "longitude": "80.0752"
    },
    "contact": {
        "phone": "+94-199-611-2082",
        "email": "gbyrd199@singtel.com",
        "socMedia": null
    },
    "login": {
        "username": "gbyrd",
        "oauth2": null,
        "password": "$2y$10$oWJlZgxzD\/GFfOldpsrum.ldDSKTYcJYxnl09AYW2jK.77i6yDMNm"
    },
    "otherContact": {
        "emails": [
            "gbyrd@optus.net",
            "gbyrd@telenor.net"
        ],
        "phoneNumbers": [
            "+94-768-827-5927",
            "+94-978-824-0246"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-01-24"
    }
});
db.customers.insertOne(
{
    "customerKey": "MARCPAUL8714",
    "name": {
        "title": "Ms",
        "first": "Marcell",
        "middle": "Z",
        "last": "Paul",
        "suffix": null
    },
    "address": {
        "streetAddress": "6891 Blue Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ottawa (Queensway \/ Copeland \/ Carlington \/ Carleton Heights)",
        "stateProvince": "ON",
        "locality": "Ottawa",
        "country": "CA",
        "postalCode": "K2C",
        "latitude": "45.3679",
        "longitude": "-75.7381"
    },
    "contact": {
        "phone": "+1-200-742-8714",
        "email": "mpaul200@lookdata.com",
        "socMedia": {
            "facebook": "mpaul@facebook.com"
        }
    },
    "login": {
        "username": "mpaul",
        "oauth2": "mpaul@facebook.com",
        "password": "$2y$10$O4E4i\/Sr9ljL2avXpkTo9.Ov0xEvoQJQNYU\/Ns4214V.z\/6ipuMIO"
    },
    "otherContact": {
        "emails": [
            "mpaul@megafon.net"
        ],
        "phoneNumbers": [
            "+1-695-795-8291"
        ],
        "socMedias": {
            "line": "mpaul@line.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-10-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "JASPPRAT9285",
    "name": {
        "title": null,
        "first": "Jasper",
        "middle": null,
        "last": "Pratt",
        "suffix": null
    },
    "address": {
        "streetAddress": "3001 Winding Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "08",
        "city": "Suha\u010d",
        "stateProvince": "Sinj",
        "locality": "Sinj",
        "country": "HR",
        "postalCode": "21230",
        "latitude": "43.7136",
        "longitude": "16.6411"
    },
    "contact": {
        "phone": "+385-201-214-9285",
        "email": "jpratt201@movil.com",
        "socMedia": null
    },
    "login": {
        "username": "jpratt",
        "oauth2": null,
        "password": "$2y$10$Hdjre4Z1zIGjKp8mrCOo.OnzUTf5\/NRhJNKI7g7QwEsjtRutlE84y"
    },
    "otherContact": {
        "emails": [
            "jpratt@swisscom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-08-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "LURLVELE2119",
    "name": {
        "title": "Ms",
        "first": "Lurlene",
        "middle": "U",
        "last": "Velez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3168 Big Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "L'\u00cele Bizard Northeast",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H9C",
        "latitude": "45.5055",
        "longitude": "-73.8789"
    },
    "contact": {
        "phone": "+1-202-753-2119",
        "email": "lvelez202@telesystems.com",
        "socMedia": null
    },
    "login": {
        "username": "lvelez",
        "oauth2": null,
        "password": "$2y$10$1nTKiJ4MkbYlWAV3i1af9Olr95gB\/x1ANPzRclQ4Xuh3Lvv2zSHxa"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-05-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHERGREE4951",
    "name": {
        "title": "Ms",
        "first": "Sheron",
        "middle": "U",
        "last": "Greer",
        "suffix": null
    },
    "address": {
        "streetAddress": "3016 Blue Canyon Avenue",
        "buildingName": null,
        "floor": 20,
        "roomAptCondoFlat": null,
        "city": "Ankadia-Nana",
        "stateProvince": "Amreli",
        "locality": "Amreli",
        "country": "IN",
        "postalCode": "365620",
        "latitude": "21.7365",
        "longitude": "71.2012"
    },
    "contact": {
        "phone": "+91-203-548-4951",
        "email": "sgreer203@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "sgreer",
        "oauth2": null,
        "password": "$2y$10$qzl.t6WabECDHzoQacyJuOkhGpnj9jxy5PlubBsYuJb2qFJYWNHIm"
    },
    "otherContact": {
        "emails": [
            "sgreer@singtel.net",
            "sgreer@telekom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-01-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "ERICMCLE9199",
    "name": {
        "title": null,
        "first": "Erick",
        "middle": null,
        "last": "Mclean",
        "suffix": null
    },
    "address": {
        "streetAddress": "5427 Green Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Navi Peth (Pandharpur)",
        "stateProvince": "Pandharpur",
        "locality": "Solapur",
        "country": "IN",
        "postalCode": "413304",
        "latitude": "18.6236",
        "longitude": "76.0528"
    },
    "contact": {
        "phone": "+91-204-220-9199",
        "email": "emclean204@swisscom.com",
        "socMedia": null
    },
    "login": {
        "username": "emclean",
        "oauth2": null,
        "password": "$2y$10$Cd7.JDMncp8Hm17jODn\/Qeab6JHYY9OcmcmI2.AJL9ra0wpSidrnq"
    },
    "otherContact": {
        "emails": [
            "emclean@zain.net",
            "emclean@telecom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-03-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "VINABRUC4826",
    "name": {
        "title": "Ms",
        "first": "Vina",
        "middle": "G",
        "last": "Bruce",
        "suffix": null
    },
    "address": {
        "streetAddress": "7347 Big Hill Drive",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": null,
        "city": "Cayenne",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97399 CEDEX",
        "latitude": "4.9333",
        "longitude": "-52.3333"
    },
    "contact": {
        "phone": "+594-205-788-4826",
        "email": "vbruce205@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "vbruce",
        "oauth2": null,
        "password": "$2y$10$9jGD6B29IYQI3JHiQwpGhO2v5aa\/wvLE273yoU5GJcCubWpFVvDS2"
    },
    "otherContact": {
        "emails": [
            "vbruce@bifty.net",
            "vbruce@lookdata.net",
            "vbruce@telecom.net"
        ],
        "phoneNumbers": [
            "+594-142-433-8193"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-11-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "RORYMERR4080",
    "name": {
        "title": "Mr",
        "first": "Rory",
        "middle": "D",
        "last": "Merritt",
        "suffix": null
    },
    "address": {
        "streetAddress": "5920 Little Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Winter Springs",
        "stateProvince": "FL",
        "locality": "Seminole",
        "country": "US",
        "postalCode": "32719",
        "latitude": "28.7448",
        "longitude": "-81.2233"
    },
    "contact": {
        "phone": "+1-206-624-4080",
        "email": "rmerritt206@ntt.com",
        "socMedia": null
    },
    "login": {
        "username": "rmerritt",
        "oauth2": null,
        "password": "$2y$10$vCL205lQ7c7ku9fYCk9uUuXZQJJ4IILhyA18XUFdrFAY\/UkCQAO2C"
    },
    "otherContact": {
        "emails": [
            "rmerritt@chunghwa.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-02-19"
    }
});
db.customers.insertOne(
{
    "customerKey": "HOBEBARA1045",
    "name": {
        "title": null,
        "first": "Hobert",
        "middle": null,
        "last": "Barajas",
        "suffix": null
    },
    "address": {
        "streetAddress": "496 Big Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Lawrence",
        "stateProvince": "Jersey Channel Islands",
        "locality": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE3",
        "latitude": "49.2",
        "longitude": "-2.1333"
    },
    "contact": {
        "phone": "+441534-207-407-1045",
        "email": "hbarajas207@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "hbarajas",
        "oauth2": null,
        "password": "$2y$10$kE1c93X\/XfBFTmGXMV80O.nKy\/YIerPdw08j7hm6mpf0nwSmQNNMa"
    },
    "otherContact": {
        "emails": [
            "hbarajas@millicom.net"
        ],
        "phoneNumbers": [
            "+441534-330-429-0295",
            "+441534-96-832-9648"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-01-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "PEGGLEE7882",
    "name": {
        "title": "Ms",
        "first": "Peggy",
        "middle": "X",
        "last": "Lee",
        "suffix": null
    },
    "address": {
        "streetAddress": "5129 Blue River Avenue",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": null,
        "city": "Lune River",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7109",
        "latitude": "-43.4295",
        "longitude": "146.9009"
    },
    "contact": {
        "phone": "+61-208-763-7882",
        "email": "plee208@ui.com",
        "socMedia": null
    },
    "login": {
        "username": "plee",
        "oauth2": null,
        "password": "$2y$10$jyiAIjH1XCAqdridWi.ycegsVqnPUAqO5JErAcAjzv.jHUllpJZz."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-825-761-9929",
            "+61-0-715-7328"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-04-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "WINNWILK9632",
    "name": {
        "title": "Ms",
        "first": "Winnifred",
        "middle": "S",
        "last": "Wilkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "3194 Little Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Talaigua Nuevo",
        "stateProvince": "Talaigua Nuevo",
        "locality": "Talaigua Nuevo",
        "country": "CO",
        "postalCode": "132547",
        "latitude": "9.3035",
        "longitude": "-74.5648"
    },
    "contact": {
        "phone": "+57-209-083-9632",
        "email": "wwilkins209@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "wwilkins",
        "oauth2": null,
        "password": "$2y$10$LCSPGqur1nrN7939smf61eefM.G1gZiQEhIXrbcyltG4DqHAvO6cK"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+57-985-960-0262",
            "+57-915-328-0932",
            "+57-926-593-1979"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-11-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "ALONKLIN2214",
    "name": {
        "title": null,
        "first": "Alona",
        "middle": null,
        "last": "Kline",
        "suffix": null
    },
    "address": {
        "streetAddress": "1464 Long Mound Road",
        "buildingName": null,
        "floor": 20,
        "roomAptCondoFlat": "55",
        "city": "Chilliwack West",
        "stateProvince": "BC",
        "locality": "Chilliwack",
        "country": "CA",
        "postalCode": "V2R",
        "latitude": "49.076",
        "longitude": "-121.9883"
    },
    "contact": {
        "phone": "+1-210-187-2214",
        "email": "akline210@telecom.com",
        "socMedia": {
            "linkedin": "akline@linkedin.com"
        }
    },
    "login": {
        "username": "akline",
        "oauth2": "akline@linkedin.com",
        "password": "$2y$10$IdO1F9U5kedpSbfqD5.E5O3l\/vrJY6wptJEJyoi1YgDfZW.THtmSS"
    },
    "otherContact": {
        "emails": [
            "akline@netcom.net",
            "akline@apicnet.net",
            "akline@maxcomm.net"
        ],
        "phoneNumbers": [
            "+1-514-356-4745"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-02-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "BONIBOON5208",
    "name": {
        "title": "Ms",
        "first": "Bonita",
        "middle": "A",
        "last": "Boone",
        "suffix": null
    },
    "address": {
        "streetAddress": "9967 Winding Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kuching",
        "stateProvince": "SRW",
        "locality": "Sarawak",
        "country": "MY",
        "postalCode": "93503",
        "latitude": "1.531",
        "longitude": "110.3442"
    },
    "contact": {
        "phone": "+60-211-317-5208",
        "email": "bboone211@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "bboone",
        "oauth2": null,
        "password": "$2y$10$eCD.Y5jBfyu.ztiEwdEEPOC3UHt08T1Ka4ZfNkLmAcw4gUwVB9xDq"
    },
    "otherContact": {
        "emails": [
            "bboone@sktelecom.net"
        ],
        "phoneNumbers": [
            "+60-661-573-4101",
            "+60-996-841-0638"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-08-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "JASODORS6719",
    "name": {
        "title": "Mr",
        "first": "Jason",
        "middle": "O",
        "last": "Dorsey",
        "suffix": null
    },
    "address": {
        "streetAddress": "1627 Short Hill Avenue",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": "F5",
        "city": "Bogan",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2826",
        "latitude": "-31.85",
        "longitude": "147.7167"
    },
    "contact": {
        "phone": "+61-212-433-6719",
        "email": "jdorsey212@eunet.com",
        "socMedia": null
    },
    "login": {
        "username": "jdorsey",
        "oauth2": null,
        "password": "$2y$10$iQdesA.sY6YWCurXWNjs.Oph7sXM9qSL4NgPWULjTKpSWRDDyxyS."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-566-026-5208"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-06-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "WILLSMAL1257",
    "name": {
        "title": null,
        "first": "Willard",
        "middle": null,
        "last": "Small",
        "suffix": null
    },
    "address": {
        "streetAddress": "9390 Short Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "E4",
        "city": "Nehawka",
        "stateProvince": "NE",
        "locality": "Cass",
        "country": "US",
        "postalCode": "68413",
        "latitude": "40.833",
        "longitude": "-95.993"
    },
    "contact": {
        "phone": "+1-213-007-1257",
        "email": "wsmall213@vivendi.com",
        "socMedia": null
    },
    "login": {
        "username": "wsmall",
        "oauth2": null,
        "password": "$2y$10$87yhkXtQ0x44sA.iKP2KnePLcph6JAWl92sI9qoYUIWTezRS\/Rp7a"
    },
    "otherContact": {
        "emails": [
            "wsmall@tata.net",
            "wsmall@kpn.net"
        ],
        "phoneNumbers": [
            "+1-598-093-3487",
            "+1-623-940-6202"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-03-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELVIDAVI8110",
    "name": {
        "title": "Mr",
        "first": "Elvis",
        "middle": "Z",
        "last": "David",
        "suffix": null
    },
    "address": {
        "streetAddress": "9739 Winding Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nallamanaickenpatti",
        "stateProvince": "Rajapalayam",
        "locality": "Virudhunagar",
        "country": "IN",
        "postalCode": "626102",
        "latitude": "10.1123",
        "longitude": "78.2644"
    },
    "contact": {
        "phone": "+91-214-817-8110",
        "email": "edavid214@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "edavid",
        "oauth2": null,
        "password": "$2y$10$Eq\/2RQn4eHlOQaDK3xOXKO9Js3hPyn99PyQzBQwW3VSZaoNu62wam"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-267-402-5699",
            "+91-899-325-0235"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-02-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "CHINPONC7508",
    "name": {
        "title": "Dr",
        "first": "Ching",
        "middle": null,
        "last": "Ponce",
        "suffix": "MD"
    },
    "address": {
        "streetAddress": "6737 Big Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Greenwell Point",
        "stateProvince": "NSW",
        "locality": "NEW CNTRY WEST",
        "country": "AU",
        "postalCode": "2540",
        "latitude": "-34.9075",
        "longitude": "150.7311"
    },
    "contact": {
        "phone": "+61-216-170-7508",
        "email": "cponce216@telia.com",
        "socMedia": null
    },
    "login": {
        "username": "cponce",
        "oauth2": null,
        "password": "$2y$10$t0znQ2J.OIyKttcQbDDoNuAok0p\/06dSZwxgivYLglj7ErrtmFcry"
    },
    "otherContact": {
        "emails": [
            "cponce@ais.net"
        ],
        "phoneNumbers": [
            "+61-47-963-0468"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-12-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "VONCTHOM9154",
    "name": {
        "title": "Ms",
        "first": "Voncile",
        "middle": "P",
        "last": "Thomas",
        "suffix": null
    },
    "address": {
        "streetAddress": "4690 Winding Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u041a\u0430\u043b\u0438\u043d\u043e\u0432\u043a\u0430",
        "stateProvince": "Luban",
        "locality": "Luban",
        "country": "BY",
        "postalCode": "223817",
        "latitude": "53.4476",
        "longitude": "28.3829"
    },
    "contact": {
        "phone": "+375-217-098-9154",
        "email": "vthomas217@zain.com",
        "socMedia": null
    },
    "login": {
        "username": "vthomas",
        "oauth2": null,
        "password": "$2y$10$.nPcDOeMcMA\/qoQr0eMPO.QIERYqiZx9L6xKAOKLbkSt\/L.IYgCBG"
    },
    "otherContact": {
        "emails": [
            "vthomas@glasnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-04-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "REGIRICH0772",
    "name": {
        "title": "Ms",
        "first": "Reginia",
        "middle": "C",
        "last": "Rich",
        "suffix": null
    },
    "address": {
        "streetAddress": "2157 Big Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Peters",
        "stateProvince": "NSW",
        "locality": "LEICHHARDT",
        "country": "AU",
        "postalCode": "2044",
        "latitude": "-33.9167",
        "longitude": "151.1833"
    },
    "contact": {
        "phone": "+61-218-088-0772",
        "email": "rrich218@bt.com",
        "socMedia": null
    },
    "login": {
        "username": "rrich",
        "oauth2": null,
        "password": "$2y$10$e3oE6xMWly0PqZPnn9u68.hzVhojbSAK2qhIxJYFTJUM93TNw2bl."
    },
    "otherContact": {
        "emails": [
            "rrich@tm.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-04-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "JOSEANDE9456",
    "name": {
        "title": null,
        "first": "Josef",
        "middle": null,
        "last": "Anderson",
        "suffix": null
    },
    "address": {
        "streetAddress": "1663 Blue Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "K\u00f6yh\u00e4joki",
        "stateProvince": "Kaustinen",
        "locality": "Kaustinen",
        "country": "FI",
        "postalCode": "69660",
        "latitude": "63.5677",
        "longitude": "23.9347"
    },
    "contact": {
        "phone": "+358-219-431-9456",
        "email": "janderso219@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "janderso",
        "oauth2": null,
        "password": "$2y$10$n2wbtXZqhIFAlDNbJgPdduVM.2zY942hRyeogfTs5YZ1F3K2OO..m"
    },
    "otherContact": {
        "emails": [
            "janderso@softbank.net"
        ],
        "phoneNumbers": [
            "+358-505-000-6079"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-10-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "EXIELONG4427",
    "name": {
        "title": "Ms",
        "first": "Exie",
        "middle": "Y",
        "last": "Long",
        "suffix": null
    },
    "address": {
        "streetAddress": "1941 Short Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Beatrice",
        "stateProvince": "NE",
        "locality": "Gage",
        "country": "US",
        "postalCode": "68310",
        "latitude": "40.2705",
        "longitude": "-96.7435"
    },
    "contact": {
        "phone": "+1-220-261-4427",
        "email": "elong220@telecom.com",
        "socMedia": {
            "line": "elong@line.com"
        }
    },
    "login": {
        "username": "elong",
        "oauth2": "elong@line.com",
        "password": "$2y$10$15EYqIAcnGWH\/QWOARy9vueg9C1Wc3liu2vAT4hkrT9XCDu2edyd."
    },
    "otherContact": {
        "emails": [
            "elong@telenor.net"
        ],
        "phoneNumbers": [],
        "socMedias": {
            "google": "elong@google.com",
            "linkedin": "elong@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-06-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "KASAHINT2581",
    "name": {
        "title": "Ms",
        "first": "Kasandra",
        "middle": "T",
        "last": "Hinton",
        "suffix": null
    },
    "address": {
        "streetAddress": "6839 Short Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vai\u010deli\u0173 k.",
        "stateProvince": "Mol\u0117t\u0173 r. sav.",
        "locality": "Mol\u0117t\u0173 r. sav.",
        "country": "LT",
        "postalCode": "33028",
        "latitude": "55.0719",
        "longitude": "25.3551"
    },
    "contact": {
        "phone": "+370-221-945-2581",
        "email": "khinton221@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "khinton",
        "oauth2": null,
        "password": "$2y$10$0tksqDMSltaQqhheWXAnPeTJkH8n8q7\/MaA5QMSblwS7mttPXNUQu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-11-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "EFRAOSBO0278",
    "name": {
        "title": null,
        "first": "Efrain",
        "middle": null,
        "last": "Osborne",
        "suffix": null
    },
    "address": {
        "streetAddress": "1166 Little Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hartford",
        "stateProvince": "CT",
        "locality": "Hartford",
        "country": "US",
        "postalCode": "06140",
        "latitude": "41.7918",
        "longitude": "-72.7188"
    },
    "contact": {
        "phone": "+1-222-797-0278",
        "email": "eosborne222@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "eosborne",
        "oauth2": null,
        "password": "$2y$10$FnFk9fZbDRFwKyNOLr9gOuQPjR1\/OoxMpO4C2yKKBrOyd1949F6Cy"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-08-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "GISEGONZ4813",
    "name": {
        "title": "Ms",
        "first": "Giselle",
        "middle": "J",
        "last": "Gonzalez",
        "suffix": null
    },
    "address": {
        "streetAddress": "8003 Green Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Katsunumacho Katsunuma",
        "stateProvince": "Koshu Shi",
        "locality": "Koshu Shi",
        "country": "JP",
        "postalCode": "409-1316",
        "latitude": "35.4524",
        "longitude": "138.5669"
    },
    "contact": {
        "phone": "+81-223-378-4813",
        "email": "ggonzale223@lguplus.com",
        "socMedia": null
    },
    "login": {
        "username": "ggonzale",
        "oauth2": null,
        "password": "$2y$10$dIfu1ZodHwQIjDqpFPVWAuTNiAmp\/1po4JSjZqLtOHa2VOMUSSuNu"
    },
    "otherContact": {
        "emails": [
            "ggonzale@telecom.net"
        ],
        "phoneNumbers": [
            "+81-515-596-5208",
            "+81-258-280-4605"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-08-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "CAMEBALD9576",
    "name": {
        "title": "Ms",
        "first": "Cameron",
        "middle": "N",
        "last": "Baldwin",
        "suffix": null
    },
    "address": {
        "streetAddress": "2301 Blue Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cumberland Township",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "K4B",
        "latitude": "45.4101",
        "longitude": "-75.3638"
    },
    "contact": {
        "phone": "+1-224-445-9576",
        "email": "cbaldwin224@frontier.com",
        "socMedia": null
    },
    "login": {
        "username": "cbaldwin",
        "oauth2": null,
        "password": "$2y$10$x9ge7Nih7I1j9MVfuWF2iOpnHkrdYhsmXTtP2tN2GAP2uElwmQHti"
    },
    "otherContact": {
        "emails": [
            "cbaldwin@ui.net",
            "cbaldwin@chunghwa.net",
            "cbaldwin@telecom.net"
        ],
        "phoneNumbers": [
            "+1-631-822-0005"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-07-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "JENIANDE1790",
    "name": {
        "title": null,
        "first": "Jenifer",
        "middle": null,
        "last": "Andersen",
        "suffix": null
    },
    "address": {
        "streetAddress": "4635 Little Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "0A",
        "city": "Barrancas Coloradas",
        "stateProvince": "Colonia",
        "locality": "Colonia",
        "country": "UY",
        "postalCode": "70300",
        "latitude": "-34.2417",
        "longitude": "-57.2209"
    },
    "contact": {
        "phone": "+598-225-773-1790",
        "email": "janderse225@telkom.com",
        "socMedia": null
    },
    "login": {
        "username": "janderse",
        "oauth2": null,
        "password": "$2y$10$xTNEMNgzQgn17Juh6B06FuJTXmSU1zU\/VxJQHgfpGX.46bFK2SqfK"
    },
    "otherContact": {
        "emails": [
            "janderse@telekom.net"
        ],
        "phoneNumbers": [
            "+598-252-158-0404"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-11-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELLIGALL0309",
    "name": {
        "title": "Mr",
        "first": "Ellis",
        "middle": "B",
        "last": "Gallagher",
        "suffix": null
    },
    "address": {
        "streetAddress": "4412 Blue Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Northern British Columbia (Fort Nelson)",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V0C",
        "latitude": "58.3874",
        "longitude": "-125.7167"
    },
    "contact": {
        "phone": "+1-226-676-0309",
        "email": "egallagh226@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "egallagh",
        "oauth2": null,
        "password": "$2y$10$Kc0ogAfrMrKCUFafiMS5Z.rLSfE\/HF3AalzyQ\/n97SV367MjTWXFy"
    },
    "otherContact": {
        "emails": [
            "egallagh@worldnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-02-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "HOWAHEBE0582",
    "name": {
        "title": "Mr",
        "first": "Howard",
        "middle": "I",
        "last": "Hebert",
        "suffix": null
    },
    "address": {
        "streetAddress": "929 Short Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Alliston",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "L9R",
        "latitude": "44.1501",
        "longitude": "-79.8663"
    },
    "contact": {
        "phone": "+1-227-400-0582",
        "email": "hhebert227@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "hhebert",
        "oauth2": null,
        "password": "$2y$10$76UGcCJiujhjjZwsWR\/.0.cU3YsX3P2Qx3\/wGzivh0wJoIANnoglS"
    },
    "otherContact": {
        "emails": [
            "hhebert@access.net"
        ],
        "phoneNumbers": [
            "+1-218-602-2042"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-10-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "CELIROCH9848",
    "name": {
        "title": "Dr",
        "first": "Celinda",
        "middle": null,
        "last": "Rocha",
        "suffix": "BS"
    },
    "address": {
        "streetAddress": "5737 Long Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jhaljhalia Railway Colony",
        "stateProvince": "Englishbazar",
        "locality": "Malda",
        "country": "IN",
        "postalCode": "732102",
        "latitude": "24.2919",
        "longitude": "87.9302"
    },
    "contact": {
        "phone": "+91-228-844-9848",
        "email": "crocha228@nii.com",
        "socMedia": null
    },
    "login": {
        "username": "crocha",
        "oauth2": null,
        "password": "$2y$10$slbE8M.GHGMG3TnLh2vJceQT1fCuPr\/PDBPKZJD1jtlGJBGQ.UUXS"
    },
    "otherContact": {
        "emails": [
            "crocha@uunet.net",
            "crocha@telkom.net"
        ],
        "phoneNumbers": [
            "+91-393-160-5458"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-04-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "LEONOWEN7203",
    "name": {
        "title": "Mr",
        "first": "Leonard",
        "middle": "V",
        "last": "Owens",
        "suffix": null
    },
    "address": {
        "streetAddress": "8764 Big Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Midv\u00e1gur",
        "stateProvince": null,
        "locality": null,
        "country": "FO",
        "postalCode": "375",
        "latitude": "62.0511",
        "longitude": "-7.1939"
    },
    "contact": {
        "phone": "+298-229-831-7203",
        "email": "lowens229@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "lowens",
        "oauth2": null,
        "password": "$2y$10$MOstI\/x2dohiQ56bLhxYL.Op5joZQMZw0DFwxG41rB22mUiLwJ3YS"
    },
    "otherContact": {
        "emails": [
            "lowens@jio.net",
            "lowens@movil.net",
            "lowens@worldnet.net"
        ],
        "phoneNumbers": [
            "+298-274-072-7986"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1936-02-06"
    }
});
db.customers.insertOne(
{
    "customerKey": "JACQSHIE6756",
    "name": {
        "title": "Mr",
        "first": "Jacques",
        "middle": "Y",
        "last": "Shields",
        "suffix": null
    },
    "address": {
        "streetAddress": "1063 Green Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Katandra",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3634",
        "latitude": "-36.2333",
        "longitude": "145.6167"
    },
    "contact": {
        "phone": "+61-230-294-6756",
        "email": "jshields230@telesystems.com",
        "socMedia": {
            "facebook": "jshields@facebook.com"
        }
    },
    "login": {
        "username": "jshields",
        "oauth2": "jshields@facebook.com",
        "password": "$2y$10$VeO.iM0g9L97nm.OWfoRauE\/81o4x0pMX48wX1gqjPISUxmC0f5sa"
    },
    "otherContact": {
        "emails": [
            "jshields@apicnet.net",
            "jshields@cerist.net",
            "jshields@telecom.net"
        ],
        "phoneNumbers": [],
        "socMedias": {
            "google": "jshields@google.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-01-06"
    }
});
db.customers.insertOne(
{
    "customerKey": "GEOFBENN6892",
    "name": {
        "title": null,
        "first": "Geoffrey",
        "middle": null,
        "last": "Bennett",
        "suffix": null
    },
    "address": {
        "streetAddress": "3959 Short Bend Drive",
        "buildingName": null,
        "floor": 1,
        "roomAptCondoFlat": "67",
        "city": "Sveagruva",
        "stateProvince": "Spitsbergen",
        "locality": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9175",
        "latitude": "77.9003",
        "longitude": "16.7201"
    },
    "contact": {
        "phone": "+47-231-621-6892",
        "email": "gbennett231@centurylink.com",
        "socMedia": null
    },
    "login": {
        "username": "gbennett",
        "oauth2": null,
        "password": "$2y$10$3KOW9fjjLbveoEbdQhNohe9K08ZjfW7pnNSDCPzNpXWJWElZE0s5C"
    },
    "otherContact": {
        "emails": [
            "gbennett@vimpelcom.net",
            "gbennett@tm.net"
        ],
        "phoneNumbers": [
            "+47-340-614-2497"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-01-24"
    }
});
db.customers.insertOne(
{
    "customerKey": "CLARZAVA5867",
    "name": {
        "title": "Ms",
        "first": "Claribel",
        "middle": "N",
        "last": "Zavala",
        "suffix": null
    },
    "address": {
        "streetAddress": "6937 Big Gully Boulevard",
        "buildingName": null,
        "floor": 7,
        "roomAptCondoFlat": null,
        "city": "Dalry",
        "stateProvince": "Scotland",
        "locality": "North Ayrshire",
        "country": "GB",
        "postalCode": "KA24",
        "latitude": "55.7096",
        "longitude": "-4.7217"
    },
    "contact": {
        "phone": "+44-232-668-5867",
        "email": "czavala232@lguplus.com",
        "socMedia": null
    },
    "login": {
        "username": "czavala",
        "oauth2": null,
        "password": "$2y$10$UHQxRaT.5itZyXjXT5QA\/OLlKoKnw96i6WqER\/htTzvHvqnobq3NW"
    },
    "otherContact": {
        "emails": [
            "czavala@millicom.net"
        ],
        "phoneNumbers": [
            "+44-693-067-7582",
            "+44-395-217-9535"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-04-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "STERESTE6760",
    "name": {
        "title": "Mr",
        "first": "Sterling",
        "middle": "P",
        "last": "Estes",
        "suffix": null
    },
    "address": {
        "streetAddress": "4258 Green Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Papudo",
        "stateProvince": "Papudo",
        "locality": "Petorca Province",
        "country": "CL",
        "postalCode": "2070000",
        "latitude": "-32.5075",
        "longitude": "-71.4431"
    },
    "contact": {
        "phone": "+56-233-743-6760",
        "email": "sestes233@ntt.com",
        "socMedia": null
    },
    "login": {
        "username": "sestes",
        "oauth2": null,
        "password": "$2y$10$0sCkUuABSm6IOTt4KLqGkeex3nfVgnahkb3fBbXGISnsw6GHkbw3."
    },
    "otherContact": {
        "emails": [
            "sestes@cubenet.net",
            "sestes@bce.net",
            "sestes@telia.net"
        ],
        "phoneNumbers": [
            "+56-204-335-5258"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-10-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "YOUNOLIV1156",
    "name": {
        "title": null,
        "first": "Young",
        "middle": null,
        "last": "Oliver",
        "suffix": null
    },
    "address": {
        "streetAddress": "275 Red Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dhola",
        "stateProvince": "Fatehabad",
        "locality": "Fatehabad",
        "country": "IN",
        "postalCode": "125111",
        "latitude": "28.4324",
        "longitude": "75.8825"
    },
    "contact": {
        "phone": "+91-234-664-1156",
        "email": "yoliver234@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "yoliver",
        "oauth2": null,
        "password": "$2y$10$Oc7jnPx\/gC3bnQxc8N.kiOLJeJKr6kunRE8W13BcYR4DUf1Z.oHF."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-674-983-1296"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-05-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "MURRWHIT7819",
    "name": {
        "title": "Mr",
        "first": "Murray",
        "middle": "U",
        "last": "Whitney",
        "suffix": null
    },
    "address": {
        "streetAddress": "6043 Long Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Portezuelo",
        "stateProvince": "Portezuelo",
        "locality": "Provincia de \u00d1uble",
        "country": "CL",
        "postalCode": "3960000",
        "latitude": "-36.5464",
        "longitude": "-72.4665"
    },
    "contact": {
        "phone": "+56-235-703-7819",
        "email": "mwhitney235@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "mwhitney",
        "oauth2": null,
        "password": "$2y$10$ZpWRhzsu7K6uY6kQ9Q7OZelnPSsjAwuEtygtIU.onF0ECc0GRBQ\/G"
    },
    "otherContact": {
        "emails": [
            "mwhitney@access.net"
        ],
        "phoneNumbers": [
            "+56-516-718-2702"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-02-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "TOYALUGO3605",
    "name": {
        "title": "Ms",
        "first": "Toya",
        "middle": "L",
        "last": "Lugo",
        "suffix": null
    },
    "address": {
        "streetAddress": "5860 Blue Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rockledge",
        "stateProvince": "GA",
        "locality": "Laurens",
        "country": "US",
        "postalCode": "30454",
        "latitude": "32.3915",
        "longitude": "-82.7479"
    },
    "contact": {
        "phone": "+1-236-421-3605",
        "email": "tlugo236@daxnet.com",
        "socMedia": null
    },
    "login": {
        "username": "tlugo",
        "oauth2": null,
        "password": "$2y$10$b2xSHXsIEKVeNKWHkNi7dem1u4oc5YzxJGkpS44Y.LJZEdtrfauO6"
    },
    "otherContact": {
        "emails": [
            "tlugo@safaricom.net"
        ],
        "phoneNumbers": [
            "+1-770-397-8952",
            "+1-793-304-2641"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-12-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "FREDPORT1859",
    "name": {
        "title": null,
        "first": "Fredricka",
        "middle": null,
        "last": "Porter",
        "suffix": null
    },
    "address": {
        "streetAddress": "2050 Long Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Nicol\u00e1s",
        "stateProvince": "YUC",
        "locality": "Baca",
        "country": "MX",
        "postalCode": "97453",
        "latitude": "21.1273",
        "longitude": "-89.3928"
    },
    "contact": {
        "phone": "+52-237-118-1859",
        "email": "fporter237@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "fporter",
        "oauth2": null,
        "password": "$2y$10$3p2lQrktCRQ5pYUz1sIPJOdo05NL82u.CtSgRF7ayZG0s1zWnBB.6"
    },
    "otherContact": {
        "emails": [
            "fporter@millicom.net",
            "fporter@telus.net",
            "fporter@softbank.net"
        ],
        "phoneNumbers": [
            "+52-438-812-1391"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-06-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "LEONREES8049",
    "name": {
        "title": "Ms",
        "first": "Leonor",
        "middle": "I",
        "last": "Reese",
        "suffix": null
    },
    "address": {
        "streetAddress": "9291 Blue Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ranisagar",
        "stateProvince": "Shahpur",
        "locality": "Bhojpur",
        "country": "IN",
        "postalCode": "802165",
        "latitude": "25.1171",
        "longitude": "86.5356"
    },
    "contact": {
        "phone": "+91-238-452-8049",
        "email": "lreese238@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "lreese",
        "oauth2": null,
        "password": "$2y$10$gVSPtrCo0.4zjBI5QGg3UO.P8cIKHcCeHHhtMcIDYv4bMnOG0t002"
    },
    "otherContact": {
        "emails": [
            "lreese@sktelecom.net"
        ],
        "phoneNumbers": [
            "+91-482-865-6946"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-08-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "ONEISANF9792",
    "name": {
        "title": "Ms",
        "first": "Oneida",
        "middle": "J",
        "last": "Sanford",
        "suffix": null
    },
    "address": {
        "streetAddress": "5248 Blue Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pembroke",
        "stateProvince": "Pembroke Parish",
        "locality": "Pembroke Parish",
        "country": "BM",
        "postalCode": "HM 06",
        "latitude": "32.3002",
        "longitude": "-64.792"
    },
    "contact": {
        "phone": "+1441-239-309-9792",
        "email": "osanford239@telecomitalia.com",
        "socMedia": null
    },
    "login": {
        "username": "osanford",
        "oauth2": null,
        "password": "$2y$10$esgbNJBrsHthA\/zXODq.TePAV.qz3Teegbxiuu8u59uuHMFIyRrza"
    },
    "otherContact": {
        "emails": [
            "osanford@uunet.net"
        ],
        "phoneNumbers": [
            "+1441-16-369-0239"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-09-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "LYLECOHE6641",
    "name": {
        "title": null,
        "first": "Lyle",
        "middle": null,
        "last": "Cohen",
        "suffix": null
    },
    "address": {
        "streetAddress": "3440 Short Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Boridra",
        "stateProvince": "Mangrol",
        "locality": "Surat",
        "country": "IN",
        "postalCode": "394125",
        "latitude": "21.4956",
        "longitude": "72.9742"
    },
    "contact": {
        "phone": "+91-240-283-6641",
        "email": "lcohen240@telecomitalia.com",
        "socMedia": {
            "google": "lcohen@google.com"
        }
    },
    "login": {
        "username": "lcohen",
        "oauth2": "lcohen@google.com",
        "password": "$2y$10$P7B\/KOVtVBJYWm6RJJYB8OrcIu0B8Lsb75vvlZ.G5aOaFdv52r.6y"
    },
    "otherContact": {
        "emails": [
            "lcohen@turkcell.net"
        ],
        "phoneNumbers": [
            "+91-563-794-6222"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1993-01-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "MERCGALL5509",
    "name": {
        "title": "Ms",
        "first": "Mercy",
        "middle": "E",
        "last": "Gallagher",
        "suffix": null
    },
    "address": {
        "streetAddress": "5676 Short Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oberthal",
        "stateProvince": "BE",
        "locality": "Bern-Mittelland District",
        "country": "CH",
        "postalCode": "3531",
        "latitude": "46.9184",
        "longitude": "7.6781"
    },
    "contact": {
        "phone": "+41-241-040-5509",
        "email": "mgallagh241@telenor.com",
        "socMedia": null
    },
    "login": {
        "username": "mgallagh",
        "oauth2": null,
        "password": "$2y$10$Ta241e2Q5lZZopr528ykI.h9Y8qKgCgkSwqy4sC8YbEHBuR3n0SAy"
    },
    "otherContact": {
        "emails": [
            "mgallagh@pldt.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-08-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "BLAIJARV9451",
    "name": {
        "title": "Mr",
        "first": "Blair",
        "middle": "V",
        "last": "Jarvis",
        "suffix": null
    },
    "address": {
        "streetAddress": "8904 Winding Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Brampton Southeast",
        "stateProvince": "ON",
        "locality": "Brampton",
        "country": "CA",
        "postalCode": "L6W",
        "latitude": "43.68",
        "longitude": "-79.7273"
    },
    "contact": {
        "phone": "+1-242-996-9451",
        "email": "bjarvis242@frontier.com",
        "socMedia": null
    },
    "login": {
        "username": "bjarvis",
        "oauth2": null,
        "password": "$2y$10$33OJG2Xc9kEiuRzK4cuOGO7dAQxbqupEF8\/vVgAUXsFUnMAEEBsbW"
    },
    "otherContact": {
        "emails": [
            "bjarvis@telecom.net",
            "bjarvis@ote.net"
        ],
        "phoneNumbers": [
            "+1-749-957-5128",
            "+1-589-475-1245"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1936-04-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELVIREYN2608",
    "name": {
        "title": null,
        "first": "Elvin",
        "middle": null,
        "last": "Reynolds",
        "suffix": null
    },
    "address": {
        "streetAddress": "7074 Big Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Narvik",
        "stateProvince": "Narvik",
        "locality": "Narvik",
        "country": "NO",
        "postalCode": "8502",
        "latitude": "68.4384",
        "longitude": "17.4272"
    },
    "contact": {
        "phone": "+47-243-298-2608",
        "email": "ereynold243@vimpelcom.com",
        "socMedia": null
    },
    "login": {
        "username": "ereynold",
        "oauth2": null,
        "password": "$2y$10$KJuph.ztzbdoRdq41gU1xOedQZnMrOHyCyQpDWtHlZTaoyXXCOZ62"
    },
    "otherContact": {
        "emails": [
            "ereynold@nordnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-04-19"
    }
});
db.customers.insertOne(
{
    "customerKey": "CARMMITC9042",
    "name": {
        "title": "Mr",
        "first": "Carmen",
        "middle": "L",
        "last": "Mitchell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9492 Short Creek Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bharnawa",
        "stateProvince": "Ladnun",
        "locality": "Nagaur",
        "country": "IN",
        "postalCode": "341316",
        "latitude": "27.2577",
        "longitude": "74.838"
    },
    "contact": {
        "phone": "+91-244-111-9042",
        "email": "cmitchel244@ptcl.com",
        "socMedia": null
    },
    "login": {
        "username": "cmitchel",
        "oauth2": null,
        "password": "$2y$10$vb4HjabAbRxkFG4fb6GzO.iJrtDBbMjxaikajHrhfYBAzNS9\/LRlG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-117-764-4174",
            "+91-275-832-4821"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-05-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "MELMIDD1812",
    "name": {
        "title": "Mr",
        "first": "Mel",
        "middle": "D",
        "last": "Middleton",
        "suffix": null
    },
    "address": {
        "streetAddress": "8374 Long Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bucure\u015fti 2",
        "stateProvince": "Sector 1",
        "locality": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "011353",
        "latitude": "44.4914",
        "longitude": "26.0602"
    },
    "contact": {
        "phone": "+40-245-027-1812",
        "email": "mmiddlet245@greennet.com",
        "socMedia": null
    },
    "login": {
        "username": "mmiddlet",
        "oauth2": null,
        "password": "$2y$10$pVp\/qlsbrEwzdk6UbTkIROP7SY9feGqA3g4.XFs6.TT4ipb\/H4RBC"
    },
    "otherContact": {
        "emails": [
            "mmiddlet@rogers.net"
        ],
        "phoneNumbers": [
            "+40-200-270-6651",
            "+40-826-754-5257"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-07-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "JERANEWT1521",
    "name": {
        "title": null,
        "first": "Jeramy",
        "middle": null,
        "last": "Newton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3488 Winding Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sydney",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "1178",
        "latitude": "-33.8678",
        "longitude": "151.2073"
    },
    "contact": {
        "phone": "+61-246-561-1521",
        "email": "jnewton246@lookdata.com",
        "socMedia": null
    },
    "login": {
        "username": "jnewton",
        "oauth2": null,
        "password": "$2y$10$bO7oGaxivb.omn.Qh\/kCquX3WiqKY7Cajqk3e3dgtIQfVoeelMZTS"
    },
    "otherContact": {
        "emails": [
            "jnewton@swisscom.net",
            "jnewton@vivendi.net",
            "jnewton@vivendi.net"
        ],
        "phoneNumbers": [
            "+61-84-946-7011",
            "+61-55-872-1770",
            "+61-820-251-7533"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-09-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "VINCHEND9714",
    "name": {
        "title": "Mr",
        "first": "Vincent",
        "middle": "Y",
        "last": "Henderson",
        "suffix": null
    },
    "address": {
        "streetAddress": "491 Red Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "latitude": "11.1405",
        "longitude": "166.4103"
    },
    "contact": {
        "phone": "+692-247-183-9714",
        "email": "vhenders247@maxcomm.com",
        "socMedia": null
    },
    "login": {
        "username": "vhenders",
        "oauth2": null,
        "password": "$2y$10$v4pIeJUGYGp44KQSwoum.OJZbEYnKBJCr7lbBACI7fqz59Xpy9H0i"
    },
    "otherContact": {
        "emails": [
            "vhenders@nii.net"
        ],
        "phoneNumbers": [
            "+692-81-933-1490",
            "+692-90-187-7914"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-06-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "AMELBECK8626",
    "name": {
        "title": "Ms",
        "first": "Amelia",
        "middle": "V",
        "last": "Beck",
        "suffix": null
    },
    "address": {
        "streetAddress": "5998 Big Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Shady Grove",
        "stateProvince": "PA",
        "locality": "Franklin",
        "country": "US",
        "postalCode": "17256",
        "latitude": "39.7834",
        "longitude": "-77.6749"
    },
    "contact": {
        "phone": "+1-248-318-8626",
        "email": "abeck248@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "abeck",
        "oauth2": null,
        "password": "$2y$10$O7ivQJq35eZidhjfzM1y5O.H11qdvdck4QJkpSzvr5MuZJOz0hnae"
    },
    "otherContact": {
        "emails": [
            "abeck@bt.net"
        ],
        "phoneNumbers": [
            "+1-622-917-2312",
            "+1-991-124-1392"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-04-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "HIRAEDWA4115",
    "name": {
        "title": "Mr",
        "first": "Hiram",
        "middle": "R",
        "last": "Edwards",
        "suffix": null
    },
    "address": {
        "streetAddress": "7759 Green Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chaudi\u00e8re-Sud (Disraeli)",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "G0N",
        "latitude": "46.0988",
        "longitude": "-71.1248"
    },
    "contact": {
        "phone": "+1-250-358-4115",
        "email": "hedwards250@telesystems.com",
        "socMedia": {
            "line": "hedwards@line.com"
        }
    },
    "login": {
        "username": "hedwards",
        "oauth2": "hedwards@line.com",
        "password": "$2y$10$4raibQ7JQOMD4kVNrg\/ppOpFfVyGSWWWdhycah38IxlLCZ0L1uufC"
    },
    "otherContact": {
        "emails": [
            "hedwards@telenor.net",
            "hedwards@nordnet.net"
        ],
        "phoneNumbers": [
            "+1-904-815-9967",
            "+1-243-901-2840"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-01-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "RODRCHER8781",
    "name": {
        "title": "Mr",
        "first": "Rodrigo",
        "middle": "C",
        "last": "Cherry",
        "suffix": null
    },
    "address": {
        "streetAddress": "4871 Green Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yakushi",
        "stateProvince": "Aoi Ku",
        "locality": "Shizuoka Shi",
        "country": "JP",
        "postalCode": "420-0906",
        "latitude": "35.1577",
        "longitude": "138.5227"
    },
    "contact": {
        "phone": "+81-251-078-8781",
        "email": "rcherry251@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "rcherry",
        "oauth2": null,
        "password": "$2y$10$YkwQMrvKCR9Rsh4fWOMHoerM3cRAdchxp3UFJ8M9Ltmlc9peWoZO6"
    },
    "otherContact": {
        "emails": [
            "rcherry@optus.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-04-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "KELSNOLA5782",
    "name": {
        "title": null,
        "first": "Kelsie",
        "middle": null,
        "last": "Nolan",
        "suffix": null
    },
    "address": {
        "streetAddress": "5899 Winding Gully Street",
        "buildingName": "Building 8F",
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "Richmond South",
        "stateProvince": "BC",
        "locality": "Richmond",
        "country": "CA",
        "postalCode": "V7A",
        "latitude": "49.1205",
        "longitude": "-123.1171"
    },
    "contact": {
        "phone": "+1-252-790-5782",
        "email": "knolan252@econnect.com",
        "socMedia": null
    },
    "login": {
        "username": "knolan",
        "oauth2": null,
        "password": "$2y$10$4jyxrGrNVQBuR2wydTgpcuYB1Q8mj0\/y9sFwi5i6dSg8ZRqBoumN6"
    },
    "otherContact": {
        "emails": [
            "knolan@greennet.net",
            "knolan@orange.net"
        ],
        "phoneNumbers": [
            "+1-172-706-2842",
            "+1-51-442-4114"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-11-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROGETYLE9422",
    "name": {
        "title": "Mr",
        "first": "Roger",
        "middle": "E",
        "last": "Tyler",
        "suffix": null
    },
    "address": {
        "streetAddress": "2820 Blue Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hautcharage",
        "stateProvince": "CA",
        "locality": "K\u00e4erjeng",
        "country": "LU",
        "postalCode": "L-4969",
        "latitude": "49.5754",
        "longitude": "5.9045"
    },
    "contact": {
        "phone": "+352-253-583-9422",
        "email": "rtyler253@etisalat.com",
        "socMedia": null
    },
    "login": {
        "username": "rtyler",
        "oauth2": null,
        "password": "$2y$10$FP7ktcsK1kpS9T11vGM9reCfe0rx1cBbojozjW3zkNqAcaPUJOicy"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+352-144-175-6393"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-08-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "MARIBAIL8586",
    "name": {
        "title": "Ms",
        "first": "Marisa",
        "middle": "J",
        "last": "Bailey",
        "suffix": null
    },
    "address": {
        "streetAddress": "9499 Little Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saundersfoot",
        "stateProvince": "Wales",
        "locality": "Pembrokeshire",
        "country": "GB",
        "postalCode": "SA69",
        "latitude": "51.7094",
        "longitude": "-4.7021"
    },
    "contact": {
        "phone": "+44-254-294-8586",
        "email": "mbailey254@telia.com",
        "socMedia": null
    },
    "login": {
        "username": "mbailey",
        "oauth2": null,
        "password": "$2y$10$nejzdRg4f1uiStGuLcr8MOTWFwhbWu2bOCubTZZFmBNQ.Ks1If4lq"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+44-544-129-0516"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1933-11-24"
    }
});
db.customers.insertOne(
{
    "customerKey": "PATCOLL9259",
    "name": {
        "title": null,
        "first": "Pat",
        "middle": null,
        "last": "Collins",
        "suffix": null
    },
    "address": {
        "streetAddress": "871 Little Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Troms\u00f8",
        "stateProvince": "Troms\u00f8",
        "locality": "Troms\u00f8",
        "country": "NO",
        "postalCode": "9254",
        "latitude": "69.6489",
        "longitude": "18.9551"
    },
    "contact": {
        "phone": "+47-255-545-9259",
        "email": "pcollins255@centurylink.com",
        "socMedia": null
    },
    "login": {
        "username": "pcollins",
        "oauth2": null,
        "password": "$2y$10$ooATjeCY\/I3OJzwv2CwUz.ZuifwRau8Mcjoyr5wZcXkZ1mgT\/tLP2"
    },
    "otherContact": {
        "emails": [
            "pcollins@eunet.net",
            "pcollins@tm.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-11-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "GABRMCLA6677",
    "name": {
        "title": "Ms",
        "first": "Gabriela",
        "middle": "G",
        "last": "Mclaughlin",
        "suffix": null
    },
    "address": {
        "streetAddress": "5727 Red Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Seerwali",
        "stateProvince": "Muktsar",
        "locality": "Muktsar",
        "country": "IN",
        "postalCode": "152026",
        "latitude": "30.3962",
        "longitude": "74.5165"
    },
    "contact": {
        "phone": "+91-256-557-6677",
        "email": "gmclaugh256@att.com",
        "socMedia": null
    },
    "login": {
        "username": "gmclaugh",
        "oauth2": null,
        "password": "$2y$10$8jQkMwcgwOvK2AaT5Cz8AOniU6.fDx2JdfzJceSiv\/880IAAwMwdu"
    },
    "otherContact": {
        "emails": [
            "gmclaugh@belgacom.net",
            "gmclaugh@turkcell.net"
        ],
        "phoneNumbers": [
            "+91-790-044-1911",
            "+91-139-889-4029"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-07-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "VIRGHUER3807",
    "name": {
        "title": "Mr",
        "first": "Virgilio",
        "middle": "B",
        "last": "Huerta",
        "suffix": null
    },
    "address": {
        "streetAddress": "9298 Little Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pak Khat",
        "stateProvince": "Nong Khai",
        "locality": "Nong Khai",
        "country": "TH",
        "postalCode": "43190",
        "latitude": "18.3",
        "longitude": "103.3"
    },
    "contact": {
        "phone": "+66-257-557-3807",
        "email": "vhuerta257@oi.com",
        "socMedia": null
    },
    "login": {
        "username": "vhuerta",
        "oauth2": null,
        "password": "$2y$10$T5yg2jy5zpcatOvAQ8ddVeJriEBYjmUzwsCS45fEGwacY6TmpN89W"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+66-277-552-2295"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-04-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "RAYFVANG5168",
    "name": {
        "title": null,
        "first": "Rayford",
        "middle": null,
        "last": "Vang",
        "suffix": null
    },
    "address": {
        "streetAddress": "3878 Long Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ruby Creek",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "4380",
        "latitude": "-28.7241",
        "longitude": "151.825"
    },
    "contact": {
        "phone": "+61-258-490-5168",
        "email": "rvang258@econnect.com",
        "socMedia": null
    },
    "login": {
        "username": "rvang",
        "oauth2": null,
        "password": "$2y$10$C0pRI4Www7n8vOg7zQkqYuQ.qm3d0forFtxfdTDCnKaFMFMsuIez."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-10-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "DOLLPRES4205",
    "name": {
        "title": "Ms",
        "first": "Dolly",
        "middle": "P",
        "last": "Preston",
        "suffix": null
    },
    "address": {
        "streetAddress": "462 Winding Hill Boulevard",
        "buildingName": "Building 7A",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sligo",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "F91",
        "latitude": "54.2697",
        "longitude": "-8.4694"
    },
    "contact": {
        "phone": "+353-259-136-4205",
        "email": "dpreston259@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "dpreston",
        "oauth2": null,
        "password": "$2y$10$8IJllZ6yIJMowbCdRr7hLeyXbwKUz94cm2G9GDZpixDSWpA6O3yZi"
    },
    "otherContact": {
        "emails": [
            "dpreston@netcom.net"
        ],
        "phoneNumbers": [
            "+353-785-804-0136",
            "+353-202-150-7037",
            "+353-214-652-4749"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-02-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "AHMAZHAN7585",
    "name": {
        "title": "Mr",
        "first": "Ahmad",
        "middle": "I",
        "last": "Zhang",
        "suffix": null
    },
    "address": {
        "streetAddress": "3823 Long Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Port Perry",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "L9L",
        "latitude": "44.1068",
        "longitude": "-78.9444"
    },
    "contact": {
        "phone": "+1-260-718-7585",
        "email": "azhang260@netcom.com",
        "socMedia": {
            "google": "azhang@google.com"
        }
    },
    "login": {
        "username": "azhang",
        "oauth2": "azhang@google.com",
        "password": "$2y$10$hWcTAJaLg55L3zeq6DziJeFPVykCY1IKHaf\/Zqfgy5t9hYHUpNmS2"
    },
    "otherContact": {
        "emails": [
            "azhang@tt.net",
            "azhang@nii.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-07-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "CRISMATH1374",
    "name": {
        "title": null,
        "first": "Cristie",
        "middle": null,
        "last": "Mathis",
        "suffix": null
    },
    "address": {
        "streetAddress": "677 Blue Bough Circle",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "E9",
        "city": "Dafen",
        "stateProvince": "Wales",
        "locality": "Carmarthenshire",
        "country": "GB",
        "postalCode": "SA14",
        "latitude": "51.7569",
        "longitude": "-4.0662"
    },
    "contact": {
        "phone": "+44-261-391-1374",
        "email": "cmathis261@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "cmathis",
        "oauth2": null,
        "password": "$2y$10$6Hfppt3rMhKcrLKQvsZYWeqU66S02A4X5tTLN5yN3KgNExHoEjJx6"
    },
    "otherContact": {
        "emails": [
            "cmathis@ntt.net",
            "cmathis@algonet.net"
        ],
        "phoneNumbers": [
            "+44-0-769-4403"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-04-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "JULIYORK4049",
    "name": {
        "title": "Ms",
        "first": "Julissa",
        "middle": "I",
        "last": "York",
        "suffix": null
    },
    "address": {
        "streetAddress": "1580 Little Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Myrtle Beach",
        "stateProvince": "SC",
        "locality": "Horry",
        "country": "US",
        "postalCode": "29577",
        "latitude": "33.6994",
        "longitude": "-78.9137"
    },
    "contact": {
        "phone": "+1-262-209-4049",
        "email": "jyork262@chunghwa.com",
        "socMedia": null
    },
    "login": {
        "username": "jyork",
        "oauth2": null,
        "password": "$2y$10$d9dXJ7lR8r3sS60MRLgAJeF3l2d90HWdRMak4T48FP8cY9SCV1sFu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-956-611-4800",
            "+1-895-277-7874"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-12-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "TEODPATR2995",
    "name": {
        "title": "Mr",
        "first": "Teodoro",
        "middle": "N",
        "last": "Patrick",
        "suffix": null
    },
    "address": {
        "streetAddress": "5878 Blue Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Serravalle",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47899",
        "latitude": "43.95",
        "longitude": "12.5"
    },
    "contact": {
        "phone": "+378-263-489-2995",
        "email": "tpatrick263@nordnet.com",
        "socMedia": null
    },
    "login": {
        "username": "tpatrick",
        "oauth2": null,
        "password": "$2y$10$.ZgddMxfy2dP.NbPFV5gheJg44XcP3V4Rw1l6NE2SNUqBxKkOcbYe"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+378-717-065-8200",
            "+378-240-094-0770"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-08-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "REANBRAD7733",
    "name": {
        "title": null,
        "first": "Reanna",
        "middle": null,
        "last": "Bradshaw",
        "suffix": null
    },
    "address": {
        "streetAddress": "8944 Big River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Langdyke",
        "stateProvince": "Scotland",
        "locality": "Fife",
        "country": "GB",
        "postalCode": "KY8",
        "latitude": "56.2159",
        "longitude": "-2.9716"
    },
    "contact": {
        "phone": "+44-264-676-7733",
        "email": "rbradsha264@orstom.com",
        "socMedia": null
    },
    "login": {
        "username": "rbradsha",
        "oauth2": null,
        "password": "$2y$10$zchfgzzIX\/jEtHex1GpA4OaSDkvohw2627M5JFx\/XWm3JIDb\/Pkfy"
    },
    "otherContact": {
        "emails": [
            "rbradsha@algonet.net",
            "rbradsha@bt.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-08-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "CECIGRIF2192",
    "name": {
        "title": "Ms",
        "first": "Cecilia",
        "middle": "Q",
        "last": "Griffith",
        "suffix": null
    },
    "address": {
        "streetAddress": "7470 Little Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Am\u0103r\u0103\u015ftii de Sus",
        "stateProvince": "Dolj",
        "locality": "Dolj",
        "country": "RO",
        "postalCode": "207025",
        "latitude": "43.9833",
        "longitude": "24.15"
    },
    "contact": {
        "phone": "+40-265-064-2192",
        "email": "cgriffit265@softbank.com",
        "socMedia": null
    },
    "login": {
        "username": "cgriffit",
        "oauth2": null,
        "password": "$2y$10$RaKfOKME\/f48.VWv26DzN.tHZyFL\/iBWt5WEjzligu9mUweBcXpNC"
    },
    "otherContact": {
        "emails": [
            "cgriffit@safaricom.net"
        ],
        "phoneNumbers": [
            "+40-281-099-7575",
            "+40-980-512-5994"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-03-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "GERRCHAR2674",
    "name": {
        "title": "Mr",
        "first": "Gerry",
        "middle": "X",
        "last": "Charles",
        "suffix": null
    },
    "address": {
        "streetAddress": "2219 Long Stream Drive",
        "buildingName": "Building 35",
        "floor": null,
        "roomAptCondoFlat": "5C",
        "city": "London",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "EC1Y",
        "latitude": "51.5232",
        "longitude": "-0.0933"
    },
    "contact": {
        "phone": "+44-266-992-2674",
        "email": "gcharles266@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "gcharles",
        "oauth2": null,
        "password": "$2y$10$nXBG3mPgePswD3KVvcTdgOT4Di2zVA2L9a0t6elUixYEmbQpgWop2"
    },
    "otherContact": {
        "emails": [
            "gcharles@nii.net",
            "gcharles@orstom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-05-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "SERGSANT2180",
    "name": {
        "title": null,
        "first": "Sergio",
        "middle": null,
        "last": "Santiago",
        "suffix": null
    },
    "address": {
        "streetAddress": "6224 Long Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Zidari\u0107i",
        "stateProvince": "Malinska",
        "locality": "Malinska",
        "country": "HR",
        "postalCode": "51511",
        "latitude": "45.1077",
        "longitude": "14.4957"
    },
    "contact": {
        "phone": "+385-267-790-2180",
        "email": "ssantiag267@relcom.com",
        "socMedia": null
    },
    "login": {
        "username": "ssantiag",
        "oauth2": null,
        "password": "$2y$10$XNVaxr0Cb4HQcluvY2B2ouaQgzCUBixNzve1JINNWJf\/XRUPxNFhu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+385-397-322-3891"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-10-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "EBONAYER3934",
    "name": {
        "title": "Ms",
        "first": "Ebonie",
        "middle": "N",
        "last": "Ayers",
        "suffix": null
    },
    "address": {
        "streetAddress": "1045 Winding Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Salem",
        "stateProvince": "OR",
        "locality": "Marion",
        "country": "US",
        "postalCode": "97303",
        "latitude": "44.9927",
        "longitude": "-123.0167"
    },
    "contact": {
        "phone": "+1-268-693-3934",
        "email": "eayers268@relcom.com",
        "socMedia": null
    },
    "login": {
        "username": "eayers",
        "oauth2": null,
        "password": "$2y$10$wc1rxdFHR1kfkk\/Esuu2ROet3LAfX4mM8WDCt.zooS9pXlKQO6c3O"
    },
    "otherContact": {
        "emails": [
            "eayers@vimpelcom.net",
            "eayers@ptcl.net"
        ],
        "phoneNumbers": [
            "+1-342-479-4055"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-03-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHAUKNIG6165",
    "name": {
        "title": "Ms",
        "first": "Shaunta",
        "middle": "A",
        "last": "Knight",
        "suffix": null
    },
    "address": {
        "streetAddress": "8815 Red Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Govt-Training School",
        "stateProvince": "NWFP Peshawar",
        "locality": "NWFP Peshawar",
        "country": "PK",
        "postalCode": "29051",
        "latitude": "31.9225",
        "longitude": "70.915"
    },
    "contact": {
        "phone": "+92-269-229-6165",
        "email": "sknight269@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "sknight",
        "oauth2": null,
        "password": "$2y$10$TpnWE1cItXFw2e8TJRsUbu2Yde.AKLpo\/OOnns.Jy2A41d4AzIjzG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-12-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "STEVMADD6858",
    "name": {
        "title": null,
        "first": "Stevie",
        "middle": null,
        "last": "Maddox",
        "suffix": null
    },
    "address": {
        "streetAddress": "7289 Big Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bathurst Island",
        "stateProvince": "NT",
        "locality": "Northern Territory",
        "country": "AU",
        "postalCode": "0822",
        "latitude": "-12.6978",
        "longitude": "130.8459"
    },
    "contact": {
        "phone": "+61-270-398-6858",
        "email": "smaddox270@telefonica.com",
        "socMedia": {
            "facebook": "smaddox@facebook.com"
        }
    },
    "login": {
        "username": "smaddox",
        "oauth2": "smaddox@facebook.com",
        "password": "$2y$10$zk6bWgv93L3f\/yW2cYca.OUwRLuEFuEnjSdR8ILjvBCKuKxvxc92q"
    },
    "otherContact": {
        "emails": [
            "smaddox@tt.net"
        ],
        "phoneNumbers": [
            "+61-601-762-2274"
        ],
        "socMedias": {
            "twitter": "smaddox@twitter.com",
            "line": "smaddox@line.com",
            "skype": "smaddox@skype.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-11-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "MASOMITC3581",
    "name": {
        "title": "Mr",
        "first": "Mason",
        "middle": "Z",
        "last": "Mitchell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9780 Little Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "P\u00e5lsb\u00f6le",
        "stateProvince": "Finstr\u00f6m",
        "locality": "Finstr\u00f6m",
        "country": "AX",
        "postalCode": "22310",
        "latitude": "60.2756",
        "longitude": "19.9057"
    },
    "contact": {
        "phone": "+35818-271-411-3581",
        "email": "mmitchel271@ntt.com",
        "socMedia": null
    },
    "login": {
        "username": "mmitchel",
        "oauth2": null,
        "password": "$2y$10$DNYDKi8UjxPa1Huv65yMs.FMBdWtoLoI1XYpCunXNdI3x74WbZ5AO"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+35818-433-353-9233",
            "+35818-233-821-3572"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-07-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "FLAVWEBE3848",
    "name": {
        "title": "Ms",
        "first": "Flavia",
        "middle": "A",
        "last": "Weber",
        "suffix": null
    },
    "address": {
        "streetAddress": "5218 Long Mound Street",
        "buildingName": "Building 6E",
        "floor": null,
        "roomAptCondoFlat": "80",
        "city": "Queens County (Shelburne)",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B0T",
        "latitude": "44.0802",
        "longitude": "-65.1175"
    },
    "contact": {
        "phone": "+1-272-644-3848",
        "email": "fweber272@ooredoo.com",
        "socMedia": null
    },
    "login": {
        "username": "fweber",
        "oauth2": null,
        "password": "$2y$10$pFKgprzzAMQn\/O1pZFrBvOoc1qJ4co19FbSBPnQYqjIsNog6pqY1W"
    },
    "otherContact": {
        "emails": [
            "fweber@vivendi.net"
        ],
        "phoneNumbers": [
            "+1-48-416-8164",
            "+1-575-206-2898"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-03-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "EUGECAMP9348",
    "name": {
        "title": null,
        "first": "Eugenio",
        "middle": null,
        "last": "Campbell",
        "suffix": null
    },
    "address": {
        "streetAddress": "2026 Winding Bend Boulevard",
        "buildingName": null,
        "floor": 9,
        "roomAptCondoFlat": "0F",
        "city": "Rudi\u0161ki\u0173 k.",
        "stateProvince": "Marijampol\u0117s sav.",
        "locality": "Marijampol\u0117s sav.",
        "country": "LT",
        "postalCode": "68001",
        "latitude": "54.5667",
        "longitude": "23.35"
    },
    "contact": {
        "phone": "+370-273-444-9348",
        "email": "ecampbel273@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "ecampbel",
        "oauth2": null,
        "password": "$2y$10$V8Xp\/6bVZ8Ot7.x81uxa3eFFg6628DxXfJNJS2Jz7p\/VJRui2b182"
    },
    "otherContact": {
        "emails": [
            "ecampbel@safaricom.net",
            "ecampbel@glasnet.net"
        ],
        "phoneNumbers": [
            "+370-636-052-5658",
            "+370-154-958-1372",
            "+370-32-465-6670"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-05-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "WALLHESS6418",
    "name": {
        "title": "Mr",
        "first": "Wally",
        "middle": "Q",
        "last": "Hess",
        "suffix": null
    },
    "address": {
        "streetAddress": "8290 Long Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Edmonton (West Mill Woods)",
        "stateProvince": "AB",
        "locality": "Edmonton",
        "country": "CA",
        "postalCode": "T6K",
        "latitude": "53.4609",
        "longitude": "-113.4519"
    },
    "contact": {
        "phone": "+1-274-510-6418",
        "email": "whess274@kpn.com",
        "socMedia": null
    },
    "login": {
        "username": "whess",
        "oauth2": null,
        "password": "$2y$10$UwUUfdf77fcVEwDNigl1beSZNi0bIC9bQG1bC8Tt7drWWQZBaQnI."
    },
    "otherContact": {
        "emails": [
            "whess@lookdata.net",
            "whess@att.net"
        ],
        "phoneNumbers": [
            "+1-58-528-4444"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-06-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "TYROJUAR3519",
    "name": {
        "title": "Mr",
        "first": "Tyron",
        "middle": "N",
        "last": "Juarez",
        "suffix": null
    },
    "address": {
        "streetAddress": "9003 Big River Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cayenne",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97329 CEDEX",
        "latitude": "4.9333",
        "longitude": "-52.3333"
    },
    "contact": {
        "phone": "+594-275-957-3519",
        "email": "tjuarez275@ais.com",
        "socMedia": null
    },
    "login": {
        "username": "tjuarez",
        "oauth2": null,
        "password": "$2y$10$\/NFIpfyNV8TVekwIRo2o2uZ1i\/a\/kyNoE8FwOzo0aIuGArYzDut8e"
    },
    "otherContact": {
        "emails": [
            "tjuarez@ui.net"
        ],
        "phoneNumbers": [
            "+594-565-872-8256"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-08-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "WILLMORA3586",
    "name": {
        "title": null,
        "first": "Willard",
        "middle": null,
        "last": "Moran",
        "suffix": null
    },
    "address": {
        "streetAddress": "9128 Green Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bosley",
        "stateProvince": "England",
        "locality": "Cheshire",
        "country": "GB",
        "postalCode": "SK11",
        "latitude": "53.1901",
        "longitude": "-2.1255"
    },
    "contact": {
        "phone": "+44-276-484-3586",
        "email": "wmoran276@millicom.com",
        "socMedia": null
    },
    "login": {
        "username": "wmoran",
        "oauth2": null,
        "password": "$2y$10$.YJ1ew0hKgMr\/D0iMg4yZuo0mnCAU8OY91qJTEZNgzBVBbFDf.Xzy"
    },
    "otherContact": {
        "emails": [
            "wmoran@apicnet.net"
        ],
        "phoneNumbers": [
            "+44-175-802-0370"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-02-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "JERIBERR4959",
    "name": {
        "title": "Ms",
        "first": "Jeri",
        "middle": "U",
        "last": "Berry",
        "suffix": null
    },
    "address": {
        "streetAddress": "6450 Red Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0421\u0443\u0445\u0430\u0440\u0435\u0432\u043e",
        "stateProvince": "\u041d\u0418\u0416\u041d\u0415\u041a\u0410\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u041d\u0418\u0416\u041d\u0415\u041a\u0410\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "423559",
        "latitude": "56.1167",
        "longitude": "54.0667"
    },
    "contact": {
        "phone": "+7-277-185-4959",
        "email": "jberry277@swisscom.com",
        "socMedia": null
    },
    "login": {
        "username": "jberry",
        "oauth2": null,
        "password": "$2y$10$2xWl3sWVzEFVHUbvPyoJ1ugsO7XtawklfwJ7YBFGbONXmkOy1YQcO"
    },
    "otherContact": {
        "emails": [
            "jberry@jio.net",
            "jberry@netcom.net"
        ],
        "phoneNumbers": [
            "+7-629-012-3813"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-10-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "CRAIYOUN5013",
    "name": {
        "title": "Mr",
        "first": "Craig",
        "middle": "A",
        "last": "Young",
        "suffix": null
    },
    "address": {
        "streetAddress": "2434 Red River Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sherwood Park East",
        "stateProvince": "AB",
        "locality": "Sherwood Park ",
        "country": "CA",
        "postalCode": "T8G",
        "latitude": "53.5052",
        "longitude": "-112.9529"
    },
    "contact": {
        "phone": "+1-278-058-5013",
        "email": "cyoung278@nii.com",
        "socMedia": null
    },
    "login": {
        "username": "cyoung",
        "oauth2": null,
        "password": "$2y$10$OIgGy8YsY19N8ush5lbEHuJhq5O3sAAhVMawTfLPMnHkqigacCaxC"
    },
    "otherContact": {
        "emails": [
            "cyoung@oi.net"
        ],
        "phoneNumbers": [
            "+1-216-618-2731"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-08-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "WILLCAMA0111",
    "name": {
        "title": null,
        "first": "Williams",
        "middle": null,
        "last": "Camacho",
        "suffix": null
    },
    "address": {
        "streetAddress": "7960 Green Ridge Street",
        "buildingName": null,
        "floor": 7,
        "roomAptCondoFlat": null,
        "city": "St Thomas",
        "stateProvince": "St. Thomas",
        "locality": "St. Thomas",
        "country": "VI",
        "postalCode": "00802",
        "latitude": "18.3387",
        "longitude": "-64.916"
    },
    "contact": {
        "phone": "+1340-279-603-0111",
        "email": "wcamacho279@millicom.com",
        "socMedia": null
    },
    "login": {
        "username": "wcamacho",
        "oauth2": null,
        "password": "$2y$10$0LoE\/TElckdHsig9bGiF0uqLMTWcdQlyU1jOvcVPLBb8D0ZRYgISu"
    },
    "otherContact": {
        "emails": [
            "wcamacho@telesystems.net"
        ],
        "phoneNumbers": [
            "+1340-540-417-5639"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-08-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "ANGELARS5041",
    "name": {
        "title": "Mr",
        "first": "Angelo",
        "middle": "G",
        "last": "Larsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "2029 Little River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "A3",
        "city": "Depur",
        "stateProvince": "Atmakur",
        "locality": "Nellore",
        "country": "IN",
        "postalCode": "524322",
        "latitude": "16.2947",
        "longitude": "80.5913"
    },
    "contact": {
        "phone": "+91-280-031-5041",
        "email": "alarsen280@worldnet.com",
        "socMedia": {
            "skype": "alarsen@skype.com"
        }
    },
    "login": {
        "username": "alarsen",
        "oauth2": "alarsen@skype.com",
        "password": "$2y$10$w\/fBkVA2EBUhhKHlyCIaE.\/KjG39EjD8zVslXz1PyWOf15ZBAn8q2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-547-666-6290",
            "+91-614-483-0951",
            "+91-253-136-2676"
        ],
        "socMedias": {
            "google": "alarsen@google.com",
            "facebook": "alarsen@facebook.com",
            "line": "alarsen@line.com",
            "linkedin": "alarsen@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-07-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "MARCVAZQ5838",
    "name": {
        "title": "Ms",
        "first": "Marci",
        "middle": "X",
        "last": "Vazquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6872 Long Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cuchilla Alta Y El Galeon",
        "stateProvince": "Canelones",
        "locality": "Canelones",
        "country": "UY",
        "postalCode": "15400",
        "latitude": "-34.7739",
        "longitude": "-55.5164"
    },
    "contact": {
        "phone": "+598-281-556-5838",
        "email": "mvazquez281@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "mvazquez",
        "oauth2": null,
        "password": "$2y$10$39m6fy6FuDJD9e62SlKy7.EdbDf6KgwL4ceBGSD.QZ2EJDfiGoC6W"
    },
    "otherContact": {
        "emails": [
            "mvazquez@singtel.net",
            "mvazquez@ais.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-11-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "OTHAROSE5500",
    "name": {
        "title": null,
        "first": "Otha",
        "middle": null,
        "last": "Rose",
        "suffix": null
    },
    "address": {
        "streetAddress": "3515 Short Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Laurent Southwest",
        "stateProvince": "QC",
        "locality": "Saint-Laurent",
        "country": "CA",
        "postalCode": "H4S",
        "latitude": "45.4858",
        "longitude": "-73.7433"
    },
    "contact": {
        "phone": "+1-282-668-5500",
        "email": "orose282@algonet.com",
        "socMedia": null
    },
    "login": {
        "username": "orose",
        "oauth2": null,
        "password": "$2y$10$Xhy55ujvjJrK4TgY0ckIkOTWUEOZI7hn3UTZBsPaSnxmE\/SeXh4gO"
    },
    "otherContact": {
        "emails": [
            "orose@centurylink.net"
        ],
        "phoneNumbers": [
            "+1-683-322-7256"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-06-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "EMILWALT3093",
    "name": {
        "title": "Mr",
        "first": "Emile",
        "middle": "F",
        "last": "Walters",
        "suffix": null
    },
    "address": {
        "streetAddress": "2123 Winding Canyon Avenue",
        "buildingName": "Building 1B",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Aforadora SARH",
        "stateProvince": "SON",
        "locality": "Cajeme",
        "country": "MX",
        "postalCode": "85215",
        "latitude": "28.0891",
        "longitude": "-109.7894"
    },
    "contact": {
        "phone": "+52-283-943-3093",
        "email": "ewalters283@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "ewalters",
        "oauth2": null,
        "password": "$2y$10$7qr85pooU.qjqHK5hIjQHeJg6fcnLvuH5CuE43KFzFhEuCaWq87d2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-10-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "WINFKLEI0906",
    "name": {
        "title": "Mr",
        "first": "Winfred",
        "middle": "V",
        "last": "Klein",
        "suffix": null
    },
    "address": {
        "streetAddress": "4616 Big Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Moundville",
        "stateProvince": "AL",
        "locality": "Hale",
        "country": "US",
        "postalCode": "35474",
        "latitude": "32.9108",
        "longitude": "-87.5935"
    },
    "contact": {
        "phone": "+1-284-634-0906",
        "email": "wklein284@nii.com",
        "socMedia": null
    },
    "login": {
        "username": "wklein",
        "oauth2": null,
        "password": "$2y$10$3CNXJUmjnR0gRkxdlv\/GxOmV6JXWA7DE.aGYTxuVsN5UdK7EhwtIK"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-07-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "PHEBBUCH7935",
    "name": {
        "title": null,
        "first": "Phebe",
        "middle": null,
        "last": "Buchanan",
        "suffix": null
    },
    "address": {
        "streetAddress": "1528 Blue Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ribnita 4",
        "stateProvince": "Ribnita Tr.",
        "locality": "Ribnita Tr.",
        "country": "MD",
        "postalCode": "MD-5504",
        "latitude": "47.7664",
        "longitude": "29.0011"
    },
    "contact": {
        "phone": "+373-285-678-7935",
        "email": "pbuchana285@optus.com",
        "socMedia": null
    },
    "login": {
        "username": "pbuchana",
        "oauth2": null,
        "password": "$2y$10$OL9bzVnq80bQq8DdVLIaO.qGCloF\/g4Wijmm7bUPYbMBBt0A4RMsa"
    },
    "otherContact": {
        "emails": [
            "pbuchana@tm.net",
            "pbuchana@sprint.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-08-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "SILALYON3874",
    "name": {
        "title": "Mr",
        "first": "Silas",
        "middle": "M",
        "last": "Lyons",
        "suffix": null
    },
    "address": {
        "streetAddress": "4174 Green Mountain Street",
        "buildingName": null,
        "floor": 3,
        "roomAptCondoFlat": null,
        "city": "Gradyville",
        "stateProvince": "KY",
        "locality": "Adair",
        "country": "US",
        "postalCode": "42742",
        "latitude": "37.0912",
        "longitude": "-85.465"
    },
    "contact": {
        "phone": "+1-286-432-3874",
        "email": "slyons286@softbank.com",
        "socMedia": null
    },
    "login": {
        "username": "slyons",
        "oauth2": null,
        "password": "$2y$10$bkgL4DoIseKCoWocXl1m4OmQAMFjgOy593UE\/wIq\/EYnfMdtqMqDu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-01-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "CASSFRAZ5465",
    "name": {
        "title": "Ms",
        "first": "Cassondra",
        "middle": "C",
        "last": "Frazier",
        "suffix": null
    },
    "address": {
        "streetAddress": "752 Little Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Alice",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "5705",
        "latitude": "-32.7833",
        "longitude": "26.8333"
    },
    "contact": {
        "phone": "+27-287-445-5465",
        "email": "cfrazier287@telecomitalia.com",
        "socMedia": null
    },
    "login": {
        "username": "cfrazier",
        "oauth2": null,
        "password": "$2y$10$TTVSmstdlLC6kc61Rikgs.fbKi0RcEYkPalxpXwdGpMPhfAWk2WiW"
    },
    "otherContact": {
        "emails": [
            "cfrazier@millicom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1958-02-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "DEVIFREE7259",
    "name": {
        "title": null,
        "first": "Devin",
        "middle": null,
        "last": "Freeman",
        "suffix": null
    },
    "address": {
        "streetAddress": "9654 Short Creek Circle",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": null,
        "city": "Stannifer",
        "stateProvince": "NSW",
        "locality": "NSW NORTH COAST",
        "country": "AU",
        "postalCode": "2369",
        "latitude": "-29.8833",
        "longitude": "151.2167"
    },
    "contact": {
        "phone": "+61-288-871-7259",
        "email": "dfreeman288@access.com",
        "socMedia": null
    },
    "login": {
        "username": "dfreeman",
        "oauth2": null,
        "password": "$2y$10$BWBK3qSEe3cPrgjGy327vO8YZegZEBsKOb.LSQxM\/pu1QU.4Fg7rK"
    },
    "otherContact": {
        "emails": [
            "dfreeman@tata.net",
            "dfreeman@maxcomm.net",
            "dfreeman@apicnet.net"
        ],
        "phoneNumbers": [
            "+61-209-054-8503"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-02-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "PEARMCCA2297",
    "name": {
        "title": "Ms",
        "first": "Pearlene",
        "middle": "Y",
        "last": "Mccarty",
        "suffix": null
    },
    "address": {
        "streetAddress": "2301 Little Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hirvasvaara",
        "stateProvince": "Salla",
        "locality": "It\u00e4-Lappi",
        "country": "FI",
        "postalCode": "98760",
        "latitude": "66.548",
        "longitude": "28.5709"
    },
    "contact": {
        "phone": "+358-289-335-2297",
        "email": "pmccarty289@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "pmccarty",
        "oauth2": null,
        "password": "$2y$10$my6uUbepfojvK4ZNOa3rJOrRMVcvBYPsHQUDqpiGaaQFP.QQ9E28O"
    },
    "otherContact": {
        "emails": [
            "pmccarty@unicom.net",
            "pmccarty@bt.net",
            "pmccarty@megafon.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-02-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "MICKFISC3248",
    "name": {
        "title": "Mr",
        "first": "Mickey",
        "middle": "Q",
        "last": "Fischer",
        "suffix": null
    },
    "address": {
        "streetAddress": "1118 Blue River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sanosari",
        "stateProvince": "Jamkalyanpur",
        "locality": "Jamnagar",
        "country": "IN",
        "postalCode": "361320",
        "latitude": "22.1906",
        "longitude": "69.5884"
    },
    "contact": {
        "phone": "+91-290-314-3248",
        "email": "mfischer290@seednet.com",
        "socMedia": {
            "google": "mfischer@google.com"
        }
    },
    "login": {
        "username": "mfischer",
        "oauth2": "mfischer@google.com",
        "password": "$2y$10$VLnR.n5w40NcPrQomzIz..WaQzT6C1E0B905CeDa3rjixri5dKZSe"
    },
    "otherContact": {
        "emails": [
            "mfischer@turkcell.net"
        ],
        "phoneNumbers": [],
        "socMedias": {
            "twitter": "mfischer@twitter.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-12-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "BEULLONG5537",
    "name": {
        "title": null,
        "first": "Beulah",
        "middle": null,
        "last": "Long",
        "suffix": null
    },
    "address": {
        "streetAddress": "7211 Long Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "62",
        "city": "Veghel",
        "stateProvince": "Meierijstad",
        "locality": "Meierijstad",
        "country": "NL",
        "postalCode": "5463",
        "latitude": "51.6091",
        "longitude": "5.5489"
    },
    "contact": {
        "phone": "+31-291-613-5537",
        "email": "blong291@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "blong",
        "oauth2": null,
        "password": "$2y$10$6o1I5EExDMyOOWfMx\/yC9.3PUQ6rReK7c\/tS9E5FBuJwo71vd6Ip2"
    },
    "otherContact": {
        "emails": [
            "blong@ccs.net",
            "blong@telecomitalia.net",
            "blong@telecomitalia.net"
        ],
        "phoneNumbers": [
            "+31-134-493-4425",
            "+31-310-685-5802"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-08-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "ODISSHOR3174",
    "name": {
        "title": "Mr",
        "first": "Odis",
        "middle": "P",
        "last": "Short",
        "suffix": null
    },
    "address": {
        "streetAddress": "6582 Little Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Baira",
        "stateProvince": "Kapkote",
        "locality": "Bageshwar",
        "country": "IN",
        "postalCode": "263634",
        "latitude": "30.5522",
        "longitude": "77.8415"
    },
    "contact": {
        "phone": "+91-292-505-3174",
        "email": "oshort292@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "oshort",
        "oauth2": null,
        "password": "$2y$10$OfWdL3AW46ApAGuHnI21p.w6Sh3WSGuRAEvFMen\/M0neNnaIOHPgW"
    },
    "otherContact": {
        "emails": [
            "oshort@orange.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-01-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "RANDCHER6130",
    "name": {
        "title": null,
        "first": "Randall",
        "middle": null,
        "last": "Cherry",
        "suffix": null
    },
    "address": {
        "streetAddress": "9852 Little Mountain Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chilton",
        "stateProvince": "England",
        "locality": "Oxfordshire",
        "country": "GB",
        "postalCode": "OX11",
        "latitude": "51.5694",
        "longitude": "-1.2997"
    },
    "contact": {
        "phone": "+44-294-352-6130",
        "email": "rcherry294@ntt.com",
        "socMedia": null
    },
    "login": {
        "username": "rcherry",
        "oauth2": null,
        "password": "$2y$10$iaaOeHe3wfqaCvtSZkqFJ.SnUvKiIa\/kr8yV7wQ5tf.IDwtcldmFG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+44-677-775-6107",
            "+44-8-323-2614"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-09-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "KENNWATT0569",
    "name": {
        "title": "Ms",
        "first": "Kenneth",
        "middle": "W",
        "last": "Watts",
        "suffix": null
    },
    "address": {
        "streetAddress": "1309 Short Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Curl Curl",
        "stateProvince": "NSW",
        "locality": "WARRINGAH",
        "country": "AU",
        "postalCode": "2096",
        "latitude": "-33.7689",
        "longitude": "151.2889"
    },
    "contact": {
        "phone": "+61-296-165-0569",
        "email": "kwatts296@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "kwatts",
        "oauth2": null,
        "password": "$2y$10$HzSPDMs7o2t.rq2Mj7le1uNxaxmOP6.QG.\/M1E1W.ENbtderGi0OO"
    },
    "otherContact": {
        "emails": [
            "kwatts@vodafone.net"
        ],
        "phoneNumbers": [
            "+61-864-875-4516",
            "+61-454-621-6968"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-02-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "KAYECALH4186",
    "name": {
        "title": null,
        "first": "Kaye",
        "middle": null,
        "last": "Calhoun",
        "suffix": null
    },
    "address": {
        "streetAddress": "1532 Long Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620",
        "latitude": "-14.2667",
        "longitude": "-178.1667"
    },
    "contact": {
        "phone": "+681-297-313-4186",
        "email": "kcalhoun297@lookdata.com",
        "socMedia": null
    },
    "login": {
        "username": "kcalhoun",
        "oauth2": null,
        "password": "$2y$10$yRuibzVSVqs1GZEfmmSJN.KwhMqJDudSC5N9b\/4KRXIsQ5q3PNpHW"
    },
    "otherContact": {
        "emails": [
            "kcalhoun@relcom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-11-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "SALVSTEV7451",
    "name": {
        "title": "Mr",
        "first": "Salvatore",
        "middle": "V",
        "last": "Stevenson",
        "suffix": null
    },
    "address": {
        "streetAddress": "8543 Big Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cory",
        "stateProvince": "IN",
        "locality": "Clay",
        "country": "US",
        "postalCode": "47846",
        "latitude": "39.3435",
        "longitude": "-87.1956"
    },
    "contact": {
        "phone": "+1-298-895-7451",
        "email": "sstevens298@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "sstevens",
        "oauth2": null,
        "password": "$2y$10$Uz21YCkHp8pN8D0eFhS.8usWDr5RqHZdXGVqE9Hxtk.JmLAuGeh8a"
    },
    "otherContact": {
        "emails": [
            "sstevens@megafon.net"
        ],
        "phoneNumbers": [
            "+1-584-931-8645"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-02-11"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHELMCIN2149",
    "name": {
        "title": "Ms",
        "first": "Shella",
        "middle": "J",
        "last": "Mcintyre",
        "suffix": null
    },
    "address": {
        "streetAddress": "7306 Little Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Agouni Moussi",
        "stateProvince": "Tizi-Ouzou",
        "locality": "Tizi-Ouzou",
        "country": "DZ",
        "postalCode": "15069",
        "latitude": "36.8068",
        "longitude": "4.3022"
    },
    "contact": {
        "phone": "+213-299-339-2149",
        "email": "smcintyr299@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "smcintyr",
        "oauth2": null,
        "password": "$2y$10$F7jf9dVfTLnZSjbE3SeYUOjMGI9Duo5Y.xYq4I8JE8eA7m4ygwGia"
    },
    "otherContact": {
        "emails": [
            "smcintyr@cerist.net",
            "smcintyr@telia.net"
        ],
        "phoneNumbers": [
            "+213-464-299-1559",
            "+213-835-188-1221"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-03-02"
    }
});
db.customers.insertOne(
{
    "customerKey": "SACHMIDD9155",
    "name": {
        "title": null,
        "first": "Sacha",
        "middle": null,
        "last": "Middleton",
        "suffix": null
    },
    "address": {
        "streetAddress": "5940 Little River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Molloy Island",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6290",
        "latitude": "-34.2684",
        "longitude": "115.2097"
    },
    "contact": {
        "phone": "+61-300-970-9155",
        "email": "smiddlet300@uunet.com",
        "socMedia": {
            "line": "smiddlet@line.com"
        }
    },
    "login": {
        "username": "smiddlet",
        "oauth2": "smiddlet@line.com",
        "password": "$2y$10$TcH9tIEsb4HbH.074WUixePxLUunjfvOFXzDEUG7ppRNzxbSIr5OS"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-26-013-7358",
            "+61-374-689-9739",
            "+61-949-694-8466"
        ],
        "socMedias": {
            "google": "smiddlet@google.com",
            "skype": "smiddlet@skype.com",
            "linkedin": "smiddlet@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-08-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "JAZMHAYD9554",
    "name": {
        "title": "Ms",
        "first": "Jazmine",
        "middle": "N",
        "last": "Hayden",
        "suffix": null
    },
    "address": {
        "streetAddress": "512 Winding Bough Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Smithboro",
        "stateProvince": "NY",
        "locality": "Tioga",
        "country": "US",
        "postalCode": "13840",
        "latitude": "42.0395",
        "longitude": "-76.4004"
    },
    "contact": {
        "phone": "+1-302-777-9554",
        "email": "jhayden302@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "jhayden",
        "oauth2": null,
        "password": "$2y$10$AdxCILEjjvPTNIO8o1Ng9OH5XCj2BvBmZkNMmTQyFrQAoTJbB88ze"
    },
    "otherContact": {
        "emails": [
            "jhayden@ktc.net",
            "jhayden@glasnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-08-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "EMAYATE6694",
    "name": {
        "title": null,
        "first": "Ema",
        "middle": null,
        "last": "Yates",
        "suffix": null
    },
    "address": {
        "streetAddress": "5715 Short Gully Ride",
        "buildingName": "Building 66",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pohle",
        "stateProvince": "NI",
        "locality": "Landkreis Schaumburg",
        "country": "DE",
        "postalCode": "31867",
        "latitude": "52.2663",
        "longitude": "9.344"
    },
    "contact": {
        "phone": "+49-303-625-6694",
        "email": "eyates303@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "eyates",
        "oauth2": null,
        "password": "$2y$10$U65.n0VBSt1iHqTZttVK\/uNOybJ3r1g6SVlVlQyKw8rymvjrHBd8O"
    },
    "otherContact": {
        "emails": [
            "eyates@econnect.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-07-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "CATRKNAP6103",
    "name": {
        "title": "Ms",
        "first": "Catrina",
        "middle": "I",
        "last": "Knapp",
        "suffix": null
    },
    "address": {
        "streetAddress": "4669 Winding Bridge Ride",
        "buildingName": null,
        "floor": 6,
        "roomAptCondoFlat": null,
        "city": "Larsen",
        "stateProvince": "WI",
        "locality": "Winnebago",
        "country": "US",
        "postalCode": "54947",
        "latitude": "44.1984",
        "longitude": "-88.6963"
    },
    "contact": {
        "phone": "+1-304-745-6103",
        "email": "cknapp304@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "cknapp",
        "oauth2": null,
        "password": "$2y$10$bUKysHg12cSb9jZq5pchTOUQX8bqI8MRJN512.hd64bOCa0LNYdTu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-491-197-1576",
            "+1-265-059-5923",
            "+1-356-762-0005"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-04-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "TYROTERR5899",
    "name": {
        "title": "Mr",
        "first": "Tyron",
        "middle": "A",
        "last": "Terry",
        "suffix": null
    },
    "address": {
        "streetAddress": "5602 Little Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sigave",
        "stateProvince": "Circonscription de Sigave",
        "locality": "Circonscription de Sigave",
        "country": "WF",
        "postalCode": "98620",
        "latitude": "-14.2667",
        "longitude": "-178.1667"
    },
    "contact": {
        "phone": "+681-305-620-5899",
        "email": "tterry305@telefonica.com",
        "socMedia": null
    },
    "login": {
        "username": "tterry",
        "oauth2": null,
        "password": "$2y$10$JXfXrbJmZv.O23FheMokm.V9bLNJOirMVKVbSnuEZT7aZbCgS5p.."
    },
    "otherContact": {
        "emails": [
            "tterry@chunghwa.net",
            "tterry@econnect.net"
        ],
        "phoneNumbers": [
            "+681-785-173-1833"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-08-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "MICHJOSE7596",
    "name": {
        "title": null,
        "first": "Michal",
        "middle": null,
        "last": "Joseph",
        "suffix": null
    },
    "address": {
        "streetAddress": "2964 Green Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Motidevrupam",
        "stateProvince": "Sagbara",
        "locality": "Narmada",
        "country": "IN",
        "postalCode": "393050",
        "latitude": "21.675",
        "longitude": "73.8538"
    },
    "contact": {
        "phone": "+91-306-927-7596",
        "email": "mjoseph306@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "mjoseph",
        "oauth2": null,
        "password": "$2y$10$NL3.8VwLvTmn\/Dk8GM80UOe7Nn0r4svPQd4Z2X3pR7B3Aqx3NynqW"
    },
    "otherContact": {
        "emails": [
            "mjoseph@millicom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-07-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "CEDRMOOR3270",
    "name": {
        "title": "Mr",
        "first": "Cedrick",
        "middle": "L",
        "last": "Moore",
        "suffix": null
    },
    "address": {
        "streetAddress": "8119 Short Mountain Way",
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
        "phone": "+1670-307-308-3270",
        "email": "cmoore307@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "cmoore",
        "oauth2": null,
        "password": "$2y$10$rHspXQSkPnwtuqi.3\/ie9.kgBUv4oit.og6ZPRjJw4AC53\/VOsW4u"
    },
    "otherContact": {
        "emails": [
            "cmoore@bce.net",
            "cmoore@seednet.net",
            "cmoore@centurylink.net"
        ],
        "phoneNumbers": [
            "+1670-714-241-2744",
            "+1670-429-225-3643"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-05-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "DAYLGIBB3746",
    "name": {
        "title": "Ms",
        "first": "Dayle",
        "middle": "A",
        "last": "Gibbs",
        "suffix": null
    },
    "address": {
        "streetAddress": "2108 Red Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ong",
        "stateProvince": "NE",
        "locality": "Clay",
        "country": "US",
        "postalCode": "68452",
        "latitude": "40.3968",
        "longitude": "-97.861"
    },
    "contact": {
        "phone": "+1-308-891-3746",
        "email": "dgibbs308@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "dgibbs",
        "oauth2": null,
        "password": "$2y$10$EqDVkzs\/3fn7YMk8jB2Sr.yyBTq8XYdS24oFHbaIDoOcyfNdXGZ\/e"
    },
    "otherContact": {
        "emails": [
            "dgibbs@centurylink.net"
        ],
        "phoneNumbers": [
            "+1-14-121-3129"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-05-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "COLLTATE8980",
    "name": {
        "title": null,
        "first": "Collene",
        "middle": null,
        "last": "Tate",
        "suffix": null
    },
    "address": {
        "streetAddress": "832 Winding Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Agustina",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10516",
        "latitude": "18.5",
        "longitude": "-69.9333"
    },
    "contact": {
        "phone": "+1809-309-334-8980",
        "email": "ctate309@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "ctate",
        "oauth2": null,
        "password": "$2y$10$5a1I6QvOpJPU\/urM5iALPuhBCNpBPqgdTptAfDcy5kzVKCa5JEl66"
    },
    "otherContact": {
        "emails": [
            "ctate@nii.net",
            "ctate@cubenet.net"
        ],
        "phoneNumbers": [
            "+1809-90-716-5846",
            "+1809-9-767-4008"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-04-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "AGUSFERN0064",
    "name": {
        "title": "Mr",
        "first": "Agustin",
        "middle": "E",
        "last": "Fernandez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6629 Red Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dipple",
        "stateProvince": "Scotland",
        "locality": "Moray",
        "country": "GB",
        "postalCode": "IV32",
        "latitude": "57.6362",
        "longitude": "-3.1136"
    },
    "contact": {
        "phone": "+44-310-344-0064",
        "email": "afernand310@softbank.com",
        "socMedia": {
            "twitter": "afernand@twitter.com"
        }
    },
    "login": {
        "username": "afernand",
        "oauth2": "afernand@twitter.com",
        "password": "$2y$10$d0DplSMc.kzFIUZ6P1dKh.r32ZE6SuGQaYYZ9uYNYp4iR4gkNGI1a"
    },
    "otherContact": {
        "emails": [
            "afernand@telus.net",
            "afernand@vivendi.net",
            "afernand@daxnet.net"
        ],
        "phoneNumbers": [
            "+44-743-077-8370",
            "+44-807-634-1012"
        ],
        "socMedias": {
            "google": "afernand@google.com",
            "skype": "afernand@skype.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-04-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "LARIVENT0557",
    "name": {
        "title": "Ms",
        "first": "Larita",
        "middle": "B",
        "last": "Ventura",
        "suffix": null
    },
    "address": {
        "streetAddress": "2507 Short Hill Road",
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
        "phone": "+1670-311-505-0557",
        "email": "lventura311@orange.com",
        "socMedia": null
    },
    "login": {
        "username": "lventura",
        "oauth2": null,
        "password": "$2y$10$3YzvVCV.uYfkhj5nw4E1xeMGhcUabnSFucCdNSAHePx4TYLDujm56"
    },
    "otherContact": {
        "emails": [
            "lventura@centurylink.net"
        ],
        "phoneNumbers": [
            "+1670-865-766-0319",
            "+1670-912-606-3895"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-02-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "GARYNIXO0540",
    "name": {
        "title": null,
        "first": "Gary",
        "middle": null,
        "last": "Nixon",
        "suffix": null
    },
    "address": {
        "streetAddress": "1466 Blue Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Makthapuram",
        "stateProvince": "Duvvur",
        "locality": "Nellore",
        "country": "IN",
        "postalCode": "524306",
        "latitude": "15.9985",
        "longitude": "80.6911"
    },
    "contact": {
        "phone": "+91-312-734-0540",
        "email": "gnixon312@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "gnixon",
        "oauth2": null,
        "password": "$2y$10$178fesgrUFsqN3khZGh8XOoA878PSek0GpTuVXRwVRQyNDX62oWNi"
    },
    "otherContact": {
        "emails": [
            "gnixon@unicom.net"
        ],
        "phoneNumbers": [
            "+91-322-535-6091",
            "+91-303-991-0998"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-09-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "JESSRAMI0157",
    "name": {
        "title": "Ms",
        "first": "Jesse",
        "middle": "W",
        "last": "Ramirez",
        "suffix": null
    },
    "address": {
        "streetAddress": "2770 Red Bough Boulevard",
        "buildingName": null,
        "floor": 20,
        "roomAptCondoFlat": null,
        "city": "Fulton",
        "stateProvince": "KY",
        "locality": "Fulton",
        "country": "US",
        "postalCode": "42041",
        "latitude": "36.5475",
        "longitude": "-88.8749"
    },
    "contact": {
        "phone": "+1-313-351-0157",
        "email": "jramirez313@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "jramirez",
        "oauth2": null,
        "password": "$2y$10$k3Ed8pwzVOpswOLx4DEW2uWS10OoA5Y202hdPN64HG7Gn15RRh4Hy"
    },
    "otherContact": {
        "emails": [
            "jramirez@telstra.net",
            "jramirez@singtel.net"
        ],
        "phoneNumbers": [
            "+1-565-119-8600"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-09-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "MILOPHIL7662",
    "name": {
        "title": "Mr",
        "first": "Milo",
        "middle": "Q",
        "last": "Phillips",
        "suffix": null
    },
    "address": {
        "streetAddress": "286 Blue River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Enniskillen",
        "stateProvince": "Northern Ireland",
        "locality": "Northern Ireland",
        "country": "GB",
        "postalCode": "BT94",
        "latitude": "54.3462",
        "longitude": "-7.6413"
    },
    "contact": {
        "phone": "+44-314-730-7662",
        "email": "mphillip314@telesystems.com",
        "socMedia": null
    },
    "login": {
        "username": "mphillip",
        "oauth2": null,
        "password": "$2y$10$EVkTcY5JLbe7mbZDlh5RW.NVqC13JFFwCkpNKgk95UM.Jw.fPKimK"
    },
    "otherContact": {
        "emails": [
            "mphillip@etisalat.net"
        ],
        "phoneNumbers": [
            "+44-498-078-3409",
            "+44-265-385-8100"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-12-06"
    }
});
db.customers.insertOne(
{
    "customerKey": "HUNTDEAN7371",
    "name": {
        "title": null,
        "first": "Hunter",
        "middle": null,
        "last": "Dean",
        "suffix": null
    },
    "address": {
        "streetAddress": "8598 Blue Woods Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pe\u00f1aflor",
        "stateProvince": "Pe\u00f1aflor",
        "locality": "Provincia de Talagante",
        "country": "CL",
        "postalCode": "9750000",
        "latitude": "-33.6109",
        "longitude": "-70.894"
    },
    "contact": {
        "phone": "+56-315-221-7371",
        "email": "hdean315@airtel.com",
        "socMedia": null
    },
    "login": {
        "username": "hdean",
        "oauth2": null,
        "password": "$2y$10$xfARESuvbaSIuibXej\/ukOcuX7JJPN7QbtKRt4ucoT3oBmO5Lejri"
    },
    "otherContact": {
        "emails": [
            "hdean@ote.net",
            "hdean@orange.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-05-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "LYNDDEAN2866",
    "name": {
        "title": "Mr",
        "first": "Lyndon",
        "middle": "C",
        "last": "Dean",
        "suffix": null
    },
    "address": {
        "streetAddress": "3418 Short Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "North Springfield",
        "stateProvince": "VT",
        "locality": "Windsor",
        "country": "US",
        "postalCode": "05150",
        "latitude": "43.338",
        "longitude": "-72.5277"
    },
    "contact": {
        "phone": "+1-316-120-2866",
        "email": "ldean316@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "ldean",
        "oauth2": null,
        "password": "$2y$10$Yc.FZ0WrYXxgIrQ2Sw6ROuWTrETwT2LZawm0qxy\/oz9T2Rn0dHOYq"
    },
    "otherContact": {
        "emails": [
            "ldean@vimpelcom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-05-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "LINCWOLF0106",
    "name": {
        "title": "Mr",
        "first": "Lincoln",
        "middle": "E",
        "last": "Wolfe",
        "suffix": null
    },
    "address": {
        "streetAddress": "3070 Short Tree Street",
        "buildingName": "Building 84",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nuenen",
        "stateProvince": "Nuenen, Gerwen en Nederwetten",
        "locality": "Nuenen, Gerwen en Nederwetten",
        "country": "NL",
        "postalCode": "5674",
        "latitude": "51.4762",
        "longitude": "5.5469"
    },
    "contact": {
        "phone": "+31-317-226-0106",
        "email": "lwolfe317@sprint.com",
        "socMedia": null
    },
    "login": {
        "username": "lwolfe",
        "oauth2": null,
        "password": "$2y$10$n85bV1.fpFqg7CQnV4l0UOjWaYvivshMggYYQoC0PPMsuWAZNmvrK"
    },
    "otherContact": {
        "emails": [
            "lwolfe@icom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-05-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "FERNHOWE0394",
    "name": {
        "title": null,
        "first": "Fern",
        "middle": null,
        "last": "Howe",
        "suffix": null
    },
    "address": {
        "streetAddress": "8135 Big Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Benai",
        "stateProvince": "Ghatal",
        "locality": "West Midnapore",
        "country": "IN",
        "postalCode": "721212",
        "latitude": "22.7356",
        "longitude": "87.807"
    },
    "contact": {
        "phone": "+91-318-306-0394",
        "email": "fhowe318@movil.com",
        "socMedia": null
    },
    "login": {
        "username": "fhowe",
        "oauth2": null,
        "password": "$2y$10$v3t9qL.4Z8Hcdth\/B7h9nOkzad.DgS17.B77saUn2p6ezmAwL3iRy"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-541-067-8672"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-09-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "ADAMBLAN5242",
    "name": {
        "title": "Mr",
        "first": "Adam",
        "middle": "F",
        "last": "Blanchard",
        "suffix": null
    },
    "address": {
        "streetAddress": "8934 Long Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hankensb\u00fcttel",
        "stateProvince": "NI",
        "locality": "Landkreis Gifhorn",
        "country": "DE",
        "postalCode": "29386",
        "latitude": "52.7333",
        "longitude": "10.6"
    },
    "contact": {
        "phone": "+49-319-790-5242",
        "email": "ablancha319@zain.com",
        "socMedia": null
    },
    "login": {
        "username": "ablancha",
        "oauth2": null,
        "password": "$2y$10$SGKN0K3QNoj4kTfof7aUd.Q0zb7Am4gAHA8uOeZgfrpbKKQv.YktC"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+49-449-779-6508"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-04-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROGEROBB8364",
    "name": {
        "title": "Ms",
        "first": "Rogelio",
        "middle": "A",
        "last": "Robbins",
        "suffix": null
    },
    "address": {
        "streetAddress": "7093 Big Woods Circle",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": null,
        "city": "Calgary (Highfield \/ Burns Industrial)",
        "stateProvince": "AB",
        "locality": "Calgary",
        "country": "CA",
        "postalCode": "T2H",
        "latitude": "50.9894",
        "longitude": "-114.052"
    },
    "contact": {
        "phone": "+1-320-661-8364",
        "email": "rrobbins320@nii.com",
        "socMedia": {
            "skype": "rrobbins@skype.com"
        }
    },
    "login": {
        "username": "rrobbins",
        "oauth2": "rrobbins@skype.com",
        "password": "$2y$10$UgpwEWTVaup5hgP91uJSgO36HM7au1Etc.0\/1w.JYw\/Pk.QivQph2"
    },
    "otherContact": {
        "emails": [
            "rrobbins@seednet.net"
        ],
        "phoneNumbers": [
            "+1-266-489-4635",
            "+1-401-301-9156"
        ],
        "socMedias": {
            "line": "rrobbins@line.com"
        }
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1962-08-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "FANNMOLI1227",
    "name": {
        "title": null,
        "first": "Fanny",
        "middle": null,
        "last": "Molina",
        "suffix": null
    },
    "address": {
        "streetAddress": "4922 Big Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Suddekunte",
        "stateProvince": "Madhugiri",
        "locality": "Tumkur",
        "country": "IN",
        "postalCode": "572127",
        "latitude": "13.7844",
        "longitude": "77.3716"
    },
    "contact": {
        "phone": "+91-321-739-1227",
        "email": "fmolina321@vimpelcom.com",
        "socMedia": null
    },
    "login": {
        "username": "fmolina",
        "oauth2": null,
        "password": "$2y$10$PzRXsoVVk9Dt5kUQ\/oEuNeE1TSHzutUpPV7kqoSYdVe0b0i46APPy"
    },
    "otherContact": {
        "emails": [
            "fmolina@econnect.net",
            "fmolina@ote.net"
        ],
        "phoneNumbers": [
            "+91-511-598-7995",
            "+91-658-455-8280"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-04-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "BARRGARR4564",
    "name": {
        "title": "Mr",
        "first": "Barry",
        "middle": "L",
        "last": "Garrett",
        "suffix": null
    },
    "address": {
        "streetAddress": "8721 Little Ditch Ride",
        "buildingName": "Building F0",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ashendon",
        "stateProvince": "WA",
        "locality": "Western Australia",
        "country": "AU",
        "postalCode": "6111",
        "latitude": "-32.1831",
        "longitude": "116.1341"
    },
    "contact": {
        "phone": "+61-322-647-4564",
        "email": "bgarrett322@netcom.com",
        "socMedia": null
    },
    "login": {
        "username": "bgarrett",
        "oauth2": null,
        "password": "$2y$10$Qm70jJp5saXaO6kGBr9pSefK19MZk6FxuINVosZ7CnCRS060VkpcO"
    },
    "otherContact": {
        "emails": [
            "bgarrett@ktc.net",
            "bgarrett@mtn.net"
        ],
        "phoneNumbers": [
            "+61-137-235-7074",
            "+61-474-716-0091"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-10-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "DAGNEVAN4122",
    "name": {
        "title": null,
        "first": "Dagny",
        "middle": null,
        "last": "Evans",
        "suffix": null
    },
    "address": {
        "streetAddress": "9899 Red Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pickering Southwest",
        "stateProvince": "ON",
        "locality": "Pickering",
        "country": "CA",
        "postalCode": "L1V",
        "latitude": "43.8605",
        "longitude": "-79.1618"
    },
    "contact": {
        "phone": "+1-324-154-4122",
        "email": "devans324@telenor.com",
        "socMedia": null
    },
    "login": {
        "username": "devans",
        "oauth2": null,
        "password": "$2y$10$JDLK30mu\/LPNmOP9anHxpOFd5pwYrqyxrJhVstzfKx3XwfZeAs.ZG"
    },
    "otherContact": {
        "emails": [
            "devans@icom.net"
        ],
        "phoneNumbers": [
            "+1-45-765-0655",
            "+1-51-762-2727"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-11-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHAYDURA9015",
    "name": {
        "title": "Ms",
        "first": "Shay",
        "middle": "L",
        "last": "Duran",
        "suffix": null
    },
    "address": {
        "streetAddress": "2365 Short River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Recanati",
        "stateProvince": "MH",
        "locality": "Macerata",
        "country": "IT",
        "postalCode": "62019",
        "latitude": "43.4038",
        "longitude": "13.5538"
    },
    "contact": {
        "phone": "+39-325-228-9015",
        "email": "sduran325@att.com",
        "socMedia": null
    },
    "login": {
        "username": "sduran",
        "oauth2": null,
        "password": "$2y$10$Ju9URIv6ZlNzCiLPyAarJuWP6MhqCHWZseZmzS.fdgno3IJcRwJ\/u"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+39-947-889-3590"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-12-10"
    }
});
db.customers.insertOne(
{
    "customerKey": "FLOYGRAN3374",
    "name": {
        "title": "Mr",
        "first": "Floyd",
        "middle": "R",
        "last": "Grant",
        "suffix": null
    },
    "address": {
        "streetAddress": "2671 Big Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Althorpe",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "DN17",
        "latitude": "53.5774",
        "longitude": "-0.7408"
    },
    "contact": {
        "phone": "+44-326-181-3374",
        "email": "fgrant326@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "fgrant",
        "oauth2": null,
        "password": "$2y$10$TeiIgGQSYv07lI0lXZOyKOr1dtTfFNYnZpPaKYYRZZoj.lQVB5pp2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+44-832-728-4238",
            "+44-753-275-0123"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-12-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "GLADNICH4299",
    "name": {
        "title": null,
        "first": "Gladis",
        "middle": null,
        "last": "Nicholson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7014 Long Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pointe Focinana",
        "stateProvince": "Monte-Carlo",
        "locality": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "latitude": "43.7333",
        "longitude": "7.4333"
    },
    "contact": {
        "phone": "+377-327-747-4299",
        "email": "gnichols327@belgacom.com",
        "socMedia": null
    },
    "login": {
        "username": "gnichols",
        "oauth2": null,
        "password": "$2y$10$twBNsLGJ3OeUGVEYURI5..buUW.skdNVuCUn3K1HvSBSY2imzVxPm"
    },
    "otherContact": {
        "emails": [
            "gnichols@mtn.net"
        ],
        "phoneNumbers": [
            "+377-685-716-2828",
            "+377-119-049-1916",
            "+377-847-359-4384"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-12-01"
    }
});
db.customers.insertOne(
{
    "customerKey": "FRANCAST7384",
    "name": {
        "title": "Ms",
        "first": "Fransisca",
        "middle": "A",
        "last": "Castillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "8317 Little River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kariong",
        "stateProvince": "NSW",
        "locality": "PYMBLE",
        "country": "AU",
        "postalCode": "2250",
        "latitude": "-33.4397",
        "longitude": "151.2945"
    },
    "contact": {
        "phone": "+61-328-426-7384",
        "email": "fcastill328@access.com",
        "socMedia": null
    },
    "login": {
        "username": "fcastill",
        "oauth2": null,
        "password": "$2y$10$hkTyix1C5yv\/1rOvFrzJNuSlJrF3ApCbEWEff7KzTyCYpkJc1jefy"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-77-819-4907",
            "+61-185-269-2464",
            "+61-271-256-6908"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-06-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "JOSEDOUG0904",
    "name": {
        "title": null,
        "first": "Josefa",
        "middle": null,
        "last": "Douglas",
        "suffix": null
    },
    "address": {
        "streetAddress": "6344 Red Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Houston",
        "stateProvince": "TX",
        "locality": "Harris",
        "country": "US",
        "postalCode": "77205",
        "latitude": "29.834",
        "longitude": "-95.4342"
    },
    "contact": {
        "phone": "+1-330-307-0904",
        "email": "jdouglas330@airtel.com",
        "socMedia": {
            "line": "jdouglas@line.com"
        }
    },
    "login": {
        "username": "jdouglas",
        "oauth2": "jdouglas@line.com",
        "password": "$2y$10$GTi6OriivgVoHBurRBhwOu\/CXOA1EzctCYb\/ZujygAYdcpTTOhbRK"
    },
    "otherContact": {
        "emails": [
            "jdouglas@turkcell.net"
        ],
        "phoneNumbers": [
            "+1-641-522-5969"
        ],
        "socMedias": {
            "twitter": "jdouglas@twitter.com",
            "line": "jdouglas@line.com",
            "skype": "jdouglas@skype.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1994-04-30"
    }
});
db.customers.insertOne(
{
    "customerKey": "WANIARRO3073",
    "name": {
        "title": "Ms",
        "first": "Wanita",
        "middle": "M",
        "last": "Arroyo",
        "suffix": null
    },
    "address": {
        "streetAddress": "8701 Winding Mound Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fiorentino",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47897",
        "latitude": "43.9",
        "longitude": "12.45"
    },
    "contact": {
        "phone": "+378-331-044-3073",
        "email": "warroyo331@jio.com",
        "socMedia": null
    },
    "login": {
        "username": "warroyo",
        "oauth2": null,
        "password": "$2y$10$6g.2TMzKUKQOZw78sjQraeqgH\/0a5ObpGtX8Y9\/0tSrsB7QfwJNaW"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-06-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "WEIBYRD5430",
    "name": {
        "title": "Ms",
        "first": "Wei",
        "middle": "G",
        "last": "Byrd",
        "suffix": null
    },
    "address": {
        "streetAddress": "2244 Big Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lilydale",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7268",
        "latitude": "-41.2503",
        "longitude": "147.2176"
    },
    "contact": {
        "phone": "+61-332-181-5430",
        "email": "wbyrd332@orstom.com",
        "socMedia": null
    },
    "login": {
        "username": "wbyrd",
        "oauth2": null,
        "password": "$2y$10$wE596Cq.Zamuf1pSh8hDrunWyWd\/rvMGkPEuakYhLDmsZCgnP\/e7e"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-864-306-2916"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-05-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "KARLMAGA8008",
    "name": {
        "title": "Dr",
        "first": "Karl",
        "middle": null,
        "last": "Magana",
        "suffix": "PhD"
    },
    "address": {
        "streetAddress": "9509 Long Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bucure\u015fti 51",
        "stateProvince": "Sector 5",
        "locality": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "051157",
        "latitude": "44.4022",
        "longitude": "26.0624"
    },
    "contact": {
        "phone": "+40-333-767-8008",
        "email": "kmagana333@millicom.com",
        "socMedia": null
    },
    "login": {
        "username": "kmagana",
        "oauth2": null,
        "password": "$2y$10$afn9kmPMFPKzkaP\/c5OmWO4JjGlklCzhCrv.3WFZy1t4C6FUY.GOK"
    },
    "otherContact": {
        "emails": [
            "kmagana@vodafone.net",
            "kmagana@lookdata.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-12-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "GRETSPEA5939",
    "name": {
        "title": "Ms",
        "first": "Greta",
        "middle": "P",
        "last": "Spears",
        "suffix": null
    },
    "address": {
        "streetAddress": "5782 Green Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "EC",
        "city": "Taraon",
        "stateProvince": "Saidpur",
        "locality": "Ghazipur",
        "country": "IN",
        "postalCode": "233306",
        "latitude": "25.5995",
        "longitude": "83.1061"
    },
    "contact": {
        "phone": "+91-334-043-5939",
        "email": "gspears334@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "gspears",
        "oauth2": null,
        "password": "$2y$10$LZQsc4Q1Sy66.XIAT4BmOur0ttGXhDjjEHpo48xVRLBxAqx8xp5XO"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+91-409-235-4365",
            "+91-905-442-3778"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-02-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "WAIKOCH6196",
    "name": {
        "title": "Ms",
        "first": "Wai",
        "middle": "K",
        "last": "Koch",
        "suffix": null
    },
    "address": {
        "streetAddress": "7933 Red Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Calas Covas",
        "stateProvince": "IB",
        "locality": "Baleares",
        "country": "ES",
        "postalCode": "07730",
        "latitude": "39.9148",
        "longitude": "3.9492"
    },
    "contact": {
        "phone": "+34-335-147-6196",
        "email": "wkoch335@kpn.com",
        "socMedia": null
    },
    "login": {
        "username": "wkoch",
        "oauth2": null,
        "password": "$2y$10$8iWbRbDgjfDmr2yQJVIsm.rDAVvq4X1ldL5K0eloDv4F9bHkWHLGi"
    },
    "otherContact": {
        "emails": [
            "wkoch@safaricom.net"
        ],
        "phoneNumbers": [
            "+34-595-334-1903",
            "+34-747-342-9527"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-01-22"
    }
});
db.customers.insertOne(
{
    "customerKey": "MATHTRUJ8729",
    "name": {
        "title": "Dr",
        "first": "Mathew",
        "middle": null,
        "last": "Trujillo",
        "suffix": "DDS"
    },
    "address": {
        "streetAddress": "5623 Red Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Blackville",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E9B",
        "latitude": "46.7398",
        "longitude": "-65.8319"
    },
    "contact": {
        "phone": "+1-336-044-8729",
        "email": "mtrujill336@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "mtrujill",
        "oauth2": null,
        "password": "$2y$10$5NGWWOJjInHxLe41C8uv1uDSWh95xJ2LjYcP\/iXGYFz9OnPrE\/e4K"
    },
    "otherContact": {
        "emails": [
            "mtrujill@ptcl.net"
        ],
        "phoneNumbers": [
            "+1-803-115-6367",
            "+1-548-561-3590"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-01-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "INDIMCCO1379",
    "name": {
        "title": "Ms",
        "first": "India",
        "middle": "F",
        "last": "Mccoy",
        "suffix": null
    },
    "address": {
        "streetAddress": "5567 Blue Mountain Boulevard",
        "buildingName": "Building 6F",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wynona",
        "stateProvince": "OK",
        "locality": "Osage",
        "country": "US",
        "postalCode": "74084",
        "latitude": "36.5462",
        "longitude": "-96.3272"
    },
    "contact": {
        "phone": "+1-337-482-1379",
        "email": "imccoy337@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "imccoy",
        "oauth2": null,
        "password": "$2y$10$422Q\/oRgNq0XaQQelgrO4ewPhsREp.ijj0M8BZOLVPkYtkzZYWUSS"
    },
    "otherContact": {
        "emails": [
            "imccoy@ptcl.net",
            "imccoy@jio.net"
        ],
        "phoneNumbers": [
            "+1-455-137-0523",
            "+1-48-493-6295",
            "+1-453-114-7215"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-12-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "AMOSCOOP2951",
    "name": {
        "title": "Mr",
        "first": "Amos",
        "middle": "X",
        "last": "Cooper",
        "suffix": null
    },
    "address": {
        "streetAddress": "857 Winding Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kinnell",
        "stateProvince": "Scotland",
        "locality": "Stirling",
        "country": "GB",
        "postalCode": "FK21",
        "latitude": "56.4657",
        "longitude": "-4.321"
    },
    "contact": {
        "phone": "+44-338-311-2951",
        "email": "acooper338@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "acooper",
        "oauth2": null,
        "password": "$2y$10$cctNDvHDNYlvw4if2Ff3guosi3V0j7HEZqF7ccIEgjFjAjwBDbGi."
    },
    "otherContact": {
        "emails": [
            "acooper@att.net",
            "acooper@airtel.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-01-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHONWOOD2275",
    "name": {
        "title": null,
        "first": "Shon",
        "middle": null,
        "last": "Woodward",
        "suffix": null
    },
    "address": {
        "streetAddress": "1040 Winding Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lianga",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "8307",
        "latitude": "8.6336",
        "longitude": "126.0947"
    },
    "contact": {
        "phone": "+63-339-868-2275",
        "email": "swoodwar339@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "swoodwar",
        "oauth2": null,
        "password": "$2y$10$YP1rqhBpKBq\/fnjFkexcZ.n1hPGZYVuIJm1HkvJURH1vDPScOSdAe"
    },
    "otherContact": {
        "emails": [
            "swoodwar@vodafone.net",
            "swoodwar@bt.net"
        ],
        "phoneNumbers": [
            "+63-607-129-5104",
            "+63-304-492-0006"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-12-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "DAHLBARN4747",
    "name": {
        "title": "Ms",
        "first": "Dahlia",
        "middle": "G",
        "last": "Barnett",
        "suffix": null
    },
    "address": {
        "streetAddress": "8235 Green Canyon Circle",
        "buildingName": "Building E7",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Courtenay Central",
        "stateProvince": "BC",
        "locality": "Courtenay",
        "country": "CA",
        "postalCode": "V9N",
        "latitude": "49.6585",
        "longitude": "-124.9835"
    },
    "contact": {
        "phone": "+1-340-119-4747",
        "email": "dbarnett340@tata.com",
        "socMedia": {
            "facebook": "dbarnett@facebook.com"
        }
    },
    "login": {
        "username": "dbarnett",
        "oauth2": "dbarnett@facebook.com",
        "password": "$2y$10$\/jcDYPPia86\/20kJglAVF.O7EXFN7sKI0VZ0JB.AoequfkNqzf\/BO"
    },
    "otherContact": {
        "emails": [
            "dbarnett@sprint.net"
        ],
        "phoneNumbers": [
            "+1-103-036-5758",
            "+1-246-645-5064"
        ],
        "socMedias": {
            "google": "dbarnett@google.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-04-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "TYESHART7980",
    "name": {
        "title": "Ms",
        "first": "Tyesha",
        "middle": "F",
        "last": "Hartman",
        "suffix": null
    },
    "address": {
        "streetAddress": "6629 Blue Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chiny Jamoigne",
        "stateProvince": "WAL",
        "locality": "Luxembourg",
        "country": "BE",
        "postalCode": "6810",
        "latitude": "49.7",
        "longitude": "5.4167"
    },
    "contact": {
        "phone": "+32-341-283-7980",
        "email": "thartman341@vimpelcom.com",
        "socMedia": null
    },
    "login": {
        "username": "thartman",
        "oauth2": null,
        "password": "$2y$10$YjeWNpCtiCk4WBv2SKkMRujcbNx8Y3A0LMqyJ6SQ516l3f\/Qfrh26"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+32-711-595-6433"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1985-08-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "KEVIGALV7183",
    "name": {
        "title": null,
        "first": "Kevin",
        "middle": null,
        "last": "Galvan",
        "suffix": null
    },
    "address": {
        "streetAddress": "3298 Little Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Heugh-head",
        "stateProvince": "Scotland",
        "locality": "Aberdeenshire",
        "country": "GB",
        "postalCode": "AB36",
        "latitude": "57.197",
        "longitude": "-3.0687"
    },
    "contact": {
        "phone": "+44-342-817-7183",
        "email": "kgalvan342@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "kgalvan",
        "oauth2": null,
        "password": "$2y$10$Qy6ddpbHgz3.TpJpzIgyoO8IMAedss8LTaw2VxZrRG0QU0m3wq3Lu"
    },
    "otherContact": {
        "emails": [
            "kgalvan@chunghwa.net"
        ],
        "phoneNumbers": [
            "+44-143-043-5352"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-03-12"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHANBLAK5181",
    "name": {
        "title": "Ms",
        "first": "Shani",
        "middle": "X",
        "last": "Blake",
        "suffix": null
    },
    "address": {
        "streetAddress": "7669 Little Bough Circle",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "\u0418\u0433\u043b\u0438\u043d\u043e 1",
        "stateProvince": "\u0418\u0413\u041b\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0418\u0413\u041b\u0418\u041d\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "452411",
        "latitude": "54.7314",
        "longitude": "56.4873"
    },
    "contact": {
        "phone": "+7-343-749-5181",
        "email": "sblake343@lookdata.com",
        "socMedia": null
    },
    "login": {
        "username": "sblake",
        "oauth2": null,
        "password": "$2y$10$FUPt2nj8qHlhWNsYc.1twesryC8AdJnKVNjMGl6h5GMRd9EAd64Z."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-03-14"
    }
});
db.customers.insertOne(
{
    "customerKey": "MICHGILM6777",
    "name": {
        "title": "Mr",
        "first": "Micheal",
        "middle": "M",
        "last": "Gilmore",
        "suffix": null
    },
    "address": {
        "streetAddress": "2591 Winding Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Malta",
        "stateProvince": "OH",
        "locality": "Morgan",
        "country": "US",
        "postalCode": "43758",
        "latitude": "39.6482",
        "longitude": "-81.9127"
    },
    "contact": {
        "phone": "+1-344-505-6777",
        "email": "mgilmore344@belgacom.com",
        "socMedia": null
    },
    "login": {
        "username": "mgilmore",
        "oauth2": null,
        "password": "$2y$10$RmFfwQFWBaLoQiIE7nrDrOe3iKUguPoQgJJOBZWuyJ4npmW.M4FHa"
    },
    "otherContact": {
        "emails": [
            "mgilmore@telefonica.net",
            "mgilmore@pldt.net"
        ],
        "phoneNumbers": [
            "+1-318-027-6874"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-09-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "TERRHALL1807",
    "name": {
        "title": "Ms",
        "first": "Terra",
        "middle": "R",
        "last": "Hall",
        "suffix": null
    },
    "address": {
        "streetAddress": "7305 Short Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Suhans",
        "stateProvince": "Weir",
        "locality": "Bharatpur",
        "country": "IN",
        "postalCode": "321408",
        "latitude": "26.5817",
        "longitude": "76.5195"
    },
    "contact": {
        "phone": "+91-346-662-1807",
        "email": "thall346@tata.com",
        "socMedia": null
    },
    "login": {
        "username": "thall",
        "oauth2": null,
        "password": "$2y$10$KQy.PCkY22zimcmWegwEh.JyXB8MLRi4QGDQtwcnwzG6m6NNgb5se"
    },
    "otherContact": {
        "emails": [
            "thall@ptcl.net"
        ],
        "phoneNumbers": [
            "+91-472-253-1199"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1984-02-06"
    }
});
db.customers.insertOne(
{
    "customerKey": "ROYACHAP9402",
    "name": {
        "title": "Mr",
        "first": "Royal",
        "middle": "A",
        "last": "Chapman",
        "suffix": null
    },
    "address": {
        "streetAddress": "8758 Blue Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paget",
        "stateProvince": "Paget Parish",
        "locality": "Paget Parish",
        "country": "BM",
        "postalCode": "PG 01",
        "latitude": "32.2783",
        "longitude": "-64.7817"
    },
    "contact": {
        "phone": "+1441-347-056-9402",
        "email": "rchapman347@daxnet.com",
        "socMedia": null
    },
    "login": {
        "username": "rchapman",
        "oauth2": null,
        "password": "$2y$10$cKNedZVxmOez6EH6Ne6QjOpqr7GJdBZSzBeN0x8mrfBE\/DLmpM5yq"
    },
    "otherContact": {
        "emails": [
            "rchapman@mtn.net",
            "rchapman@ntt.net"
        ],
        "phoneNumbers": [
            "+1441-959-929-7470",
            "+1441-594-651-6596"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-04-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "DELMLARS7542",
    "name": {
        "title": null,
        "first": "Delmer",
        "middle": null,
        "last": "Larsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "9828 Little Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wisemans Ferry",
        "stateProvince": "NSW",
        "locality": "RICHMOND",
        "country": "AU",
        "postalCode": "2775",
        "latitude": "-33.3833",
        "longitude": "150.9833"
    },
    "contact": {
        "phone": "+61-348-354-7542",
        "email": "dlarsen348@pldt.com",
        "socMedia": null
    },
    "login": {
        "username": "dlarsen",
        "oauth2": null,
        "password": "$2y$10$NuZKr0Ub9Hg3D.usMeCxQ.zm3WpuWexH8ZKHcz9\/wW3InYhFcmdP6"
    },
    "otherContact": {
        "emails": [
            "dlarsen@bce.net"
        ],
        "phoneNumbers": [
            "+61-892-850-1233",
            "+61-338-391-8116"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-02-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "GALEKEMP6205",
    "name": {
        "title": "Ms",
        "first": "Gale",
        "middle": "P",
        "last": "Kemp",
        "suffix": null
    },
    "address": {
        "streetAddress": "4098 Little River Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "North York (North Park \/ Maple Leaf Park \/ Upwood Park)",
        "stateProvince": "ON",
        "locality": "North York ",
        "country": "CA",
        "postalCode": "M6L",
        "latitude": "43.7137",
        "longitude": "-79.4869"
    },
    "contact": {
        "phone": "+1-350-183-6205",
        "email": "gkemp350@relcom.com",
        "socMedia": {
            "line": "gkemp@line.com"
        }
    },
    "login": {
        "username": "gkemp",
        "oauth2": "gkemp@line.com",
        "password": "$2y$10$Zy\/aXbXrmVzyFmZYrw2VM.ujerKiTnFFBHpq9KHBHrYWtD.Cte8UG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": {
            "google": "gkemp@google.com",
            "skype": "gkemp@skype.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-02-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "REFUTANG6793",
    "name": {
        "title": null,
        "first": "Refugio",
        "middle": null,
        "last": "Tang",
        "suffix": null
    },
    "address": {
        "streetAddress": "287 Big Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Venadillo",
        "stateProvince": "Venadillo",
        "locality": "Venadillo",
        "country": "CO",
        "postalCode": "730587",
        "latitude": "4.7193",
        "longitude": "-74.9292"
    },
    "contact": {
        "phone": "+57-351-475-6793",
        "email": "rtang351@maxcomm.com",
        "socMedia": null
    },
    "login": {
        "username": "rtang",
        "oauth2": null,
        "password": "$2y$10$Q9.liUeZ8ahUafX6IN6pOuMF0O3jnbu3Vm2Nc1G9ATLlMCrnAUYMe"
    },
    "otherContact": {
        "emails": [
            "rtang@lguplus.net",
            "rtang@seednet.net",
            "rtang@vivendi.net"
        ],
        "phoneNumbers": [
            "+57-608-829-5965",
            "+57-274-163-2578"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-03-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "MAURSTAR7895",
    "name": {
        "title": "Mr",
        "first": "Maurice",
        "middle": "P",
        "last": "Stark",
        "suffix": null
    },
    "address": {
        "streetAddress": "6523 Little Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chapel Haddlesey",
        "stateProvince": "England",
        "locality": "North Yorkshire",
        "country": "GB",
        "postalCode": "YO8",
        "latitude": "53.7297",
        "longitude": "-1.1209"
    },
    "contact": {
        "phone": "+44-352-306-7895",
        "email": "mstark352@jio.com",
        "socMedia": null
    },
    "login": {
        "username": "mstark",
        "oauth2": null,
        "password": "$2y$10$WjL3CQbC51jwD.3E7ToVJOmPba5QUyzKcvnFtxM9TXFN1bs4UZrx2"
    },
    "otherContact": {
        "emails": [
            "mstark@bifty.net"
        ],
        "phoneNumbers": [
            "+44-222-437-1603",
            "+44-375-947-6415"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-12-07"
    }
});
db.customers.insertOne(
{
    "customerKey": "JUDEQUIN2804",
    "name": {
        "title": "Mr",
        "first": "Jude",
        "middle": "T",
        "last": "Quintero",
        "suffix": null
    },
    "address": {
        "streetAddress": "9573 Little Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0411\u0443\u0431\u043d\u0456\u0432\u0441\u044c\u043a\u0430 \u0421\u043b\u043e\u0431\u0456\u0434\u043a\u0430",
        "stateProvince": "Zolotoniskyi",
        "locality": "Zolotoniskyi",
        "country": "UA",
        "postalCode": "19750",
        "latitude": "49.7039",
        "longitude": "31.7084"
    },
    "contact": {
        "phone": "+380-353-952-2804",
        "email": "jquinter353@turkcell.com",
        "socMedia": null
    },
    "login": {
        "username": "jquinter",
        "oauth2": null,
        "password": "$2y$10$FczH0RgxhdCJExjO\/1kqH.inUVd2o7r51RwUF58KsDikgROVSs41."
    },
    "otherContact": {
        "emails": [
            "jquinter@sktelecom.net",
            "jquinter@greennet.net",
            "jquinter@telkom.net"
        ],
        "phoneNumbers": [
            "+380-19-831-2705"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-04-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "FRANMCFA9622",
    "name": {
        "title": null,
        "first": "Francesco",
        "middle": null,
        "last": "Mcfarland",
        "suffix": null
    },
    "address": {
        "streetAddress": "7840 Winding Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "New Harbor",
        "stateProvince": "ME",
        "locality": "Lincoln",
        "country": "US",
        "postalCode": "04554",
        "latitude": "43.8605",
        "longitude": "-69.5079"
    },
    "contact": {
        "phone": "+1-354-470-9622",
        "email": "fmcfarla354@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "fmcfarla",
        "oauth2": null,
        "password": "$2y$10$dvYGqPkyZHTPB9t9TGzdj.AwFcZuZCLa.z6W5UJv.WKvssIlbd6.2"
    },
    "otherContact": {
        "emails": [
            "fmcfarla@vimpelcom.net"
        ],
        "phoneNumbers": [
            "+1-626-601-3931",
            "+1-518-840-9918"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-04-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "BRENGIBS4474",
    "name": {
        "title": "Mr",
        "first": "Brenton",
        "middle": "Z",
        "last": "Gibson",
        "suffix": null
    },
    "address": {
        "streetAddress": "9727 Green Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Finsbury",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "EC1",
        "latitude": "51.5279",
        "longitude": "-0.1072"
    },
    "contact": {
        "phone": "+44-356-490-4474",
        "email": "bgibson356@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "bgibson",
        "oauth2": null,
        "password": "$2y$10$nV32v2fosau3jEGblQRmnuMSGllLAHKOgkieYSVmHhhSTRNN2hqay"
    },
    "otherContact": {
        "emails": [
            "bgibson@relcom.net"
        ],
        "phoneNumbers": [
            "+44-498-568-4810"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-05-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "TOMMHUFF9336",
    "name": {
        "title": null,
        "first": "Tommie",
        "middle": null,
        "last": "Huffman",
        "suffix": null
    },
    "address": {
        "streetAddress": "2095 Big River Avenue",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": null,
        "city": "San Antonio",
        "stateProvince": "San Antonio",
        "locality": "Escaz\u00fa",
        "country": "CR",
        "postalCode": "10202",
        "latitude": "9.894",
        "longitude": "-84.14"
    },
    "contact": {
        "phone": "+506-357-523-9336",
        "email": "thuffman357@centurylink.com",
        "socMedia": null
    },
    "login": {
        "username": "thuffman",
        "oauth2": null,
        "password": "$2y$10$FicfxXt.LQI8THJzu.poXunalQ0RxomzWaPkNsFMk1L1b5OtClEpS"
    },
    "otherContact": {
        "emails": [
            "thuffman@ptcl.net"
        ],
        "phoneNumbers": [
            "+506-175-680-6536"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-06-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "ARCHCORT4818",
    "name": {
        "title": "Mr",
        "first": "Archie",
        "middle": "K",
        "last": "Cortez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3861 Green Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Denver",
        "stateProvince": "CO",
        "locality": "Adams",
        "country": "US",
        "postalCode": "80221",
        "latitude": "39.838",
        "longitude": "-104.9988"
    },
    "contact": {
        "phone": "+1-358-898-4818",
        "email": "acortez358@jio.com",
        "socMedia": null
    },
    "login": {
        "username": "acortez",
        "oauth2": null,
        "password": "$2y$10$tBJsfJwXGRzaS7.kF1muFuc63PI77kvhXDYUV8e\/7eJ85g7.zCV2e"
    },
    "otherContact": {
        "emails": [
            "acortez@vimpelcom.net",
            "acortez@bifty.net"
        ],
        "phoneNumbers": [
            "+1-551-402-7150",
            "+1-178-350-4914",
            "+1-595-794-7703"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-09-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "MARIPADI9475",
    "name": {
        "title": "Mr",
        "first": "Mariano",
        "middle": "M",
        "last": "Padilla",
        "suffix": null
    },
    "address": {
        "streetAddress": "9842 Long Ditch Way",
        "buildingName": "Building 3F",
        "floor": 5,
        "roomAptCondoFlat": "DC",
        "city": "Chuuk",
        "stateProvince": "State of Chuuk",
        "locality": "State of Chuuk",
        "country": "FM",
        "postalCode": "96942",
        "latitude": "7.1383",
        "longitude": "151.5031"
    },
    "contact": {
        "phone": "+691-359-670-9475",
        "email": "mpadilla359@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "mpadilla",
        "oauth2": null,
        "password": "$2y$10$57fWe8uGV4l6tFZ1kr2GaO6mn\/6krsyy4CMHu89VbcK1pRGltI2Vi"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+691-921-683-1033"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-06-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "AYANMYER9602",
    "name": {
        "title": "Dr",
        "first": "Ayana",
        "middle": null,
        "last": "Myers",
        "suffix": "MSD"
    },
    "address": {
        "streetAddress": "685 Big Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mackay Harbour",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4740",
        "latitude": "-21.1088",
        "longitude": "149.2113"
    },
    "contact": {
        "phone": "+61-360-216-9602",
        "email": "amyers360@tt.com",
        "socMedia": {
            "linkedin": "amyers@linkedin.com"
        }
    },
    "login": {
        "username": "amyers",
        "oauth2": "amyers@linkedin.com",
        "password": "$2y$10$rTAoMYjKUHianfEjWgERx.tV\/whfMCPW2f3iN8DrCbZuo0Exm9PlG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-431-948-8388"
        ],
        "socMedias": {
            "google": "amyers@google.com",
            "facebook": "amyers@facebook.com",
            "line": "amyers@line.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-03-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "BEREESPI3642",
    "name": {
        "title": "Ms",
        "first": "Berenice",
        "middle": "C",
        "last": "Espinosa",
        "suffix": null
    },
    "address": {
        "streetAddress": "451 Big Woods Ride",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "22",
        "city": "Senadla",
        "stateProvince": "Bejaia",
        "locality": "Bejaia",
        "country": "DZ",
        "postalCode": "06004",
        "latitude": "36.4877",
        "longitude": "5.3085"
    },
    "contact": {
        "phone": "+213-361-310-3642",
        "email": "bespinos361@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "bespinos",
        "oauth2": null,
        "password": "$2y$10$DVVx0ipJX9eJBOQhwJ2VUOfaVacY8ivY3lWxoMCSPUhoEgkoID6yS"
    },
    "otherContact": {
        "emails": [
            "bespinos@ccs.net",
            "bespinos@softbank.net",
            "bespinos@netcom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-07-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "EDDIBEST0169",
    "name": {
        "title": "Mr",
        "first": "Eddie",
        "middle": "R",
        "last": "Best",
        "suffix": null
    },
    "address": {
        "streetAddress": "619 Blue Creek Avenue",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": null,
        "city": "Vancouver (NW Arbutus Ridge)",
        "stateProvince": "BC",
        "locality": "Vancouver",
        "country": "CA",
        "postalCode": "V6L",
        "latitude": "49.2497",
        "longitude": "-123.166"
    },
    "contact": {
        "phone": "+1-362-743-0169",
        "email": "ebest362@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "ebest",
        "oauth2": null,
        "password": "$2y$10$5lZxiEJUi30NKCdOnAPiyecxX78BJ46IeYrTHQD6rlP7wid6T2xdm"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-321-067-2524"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-07-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "AUSTHOUS5052",
    "name": {
        "title": null,
        "first": "Austin",
        "middle": null,
        "last": "House",
        "suffix": null
    },
    "address": {
        "streetAddress": "757 Short Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Merzhausen",
        "stateProvince": "BW",
        "locality": "Freiburg Region",
        "country": "DE",
        "postalCode": "79249",
        "latitude": "47.9667",
        "longitude": "7.8333"
    },
    "contact": {
        "phone": "+49-363-927-5052",
        "email": "ahouse363@cci.com",
        "socMedia": null
    },
    "login": {
        "username": "ahouse",
        "oauth2": null,
        "password": "$2y$10$449j8MFXegfy3svRlf46\/OOFVxQmlhotLziY20NIYLdP33HTrYTIS"
    },
    "otherContact": {
        "emails": [
            "ahouse@access.net"
        ],
        "phoneNumbers": [
            "+49-917-694-2909"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-03-16"
    }
});
db.customers.insertOne(
{
    "customerKey": "HAZEHEND9038",
    "name": {
        "title": "Ms",
        "first": "Hazel",
        "middle": "P",
        "last": "Hendrix",
        "suffix": null
    },
    "address": {
        "streetAddress": "6702 Big Tree Avenue",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": null,
        "city": "Wool Bay",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 1",
        "country": "AU",
        "postalCode": "5575",
        "latitude": "-34.9911",
        "longitude": "137.7567"
    },
    "contact": {
        "phone": "+61-364-613-9038",
        "email": "hhendrix364@econnect.com",
        "socMedia": null
    },
    "login": {
        "username": "hhendrix",
        "oauth2": null,
        "password": "$2y$10$l81jUM843Bfo93T6AYIk1OnYEC2kN69vTiLXz7WIajzLDuqKRHySO"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-06-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "SHALPRIN5107",
    "name": {
        "title": "Ms",
        "first": "Shalon",
        "middle": "X",
        "last": "Prince",
        "suffix": null
    },
    "address": {
        "streetAddress": "46 Little Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Betong",
        "stateProvince": "Yala",
        "locality": "Yala",
        "country": "TH",
        "postalCode": "95110",
        "latitude": "5.75",
        "longitude": "101.0833"
    },
    "contact": {
        "phone": "+66-365-005-5107",
        "email": "sprince365@ui.com",
        "socMedia": null
    },
    "login": {
        "username": "sprince",
        "oauth2": null,
        "password": "$2y$10$W2LQpipz\/Vi05TOBi0Oo0O67j9Bzw2L.8ukAyVHWybxYuKM0uCOfy"
    },
    "otherContact": {
        "emails": [
            "sprince@ccs.net"
        ],
        "phoneNumbers": [
            "+66-954-514-7069"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-10-25"
    }
});
db.customers.insertOne(
{
    "customerKey": "KIMIAVAL0539",
    "name": {
        "title": null,
        "first": "Kimi",
        "middle": null,
        "last": "Avalos",
        "suffix": null
    },
    "address": {
        "streetAddress": "6259 Green Stream Ride",
        "buildingName": "Building 82",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Olds",
        "stateProvince": "AB",
        "locality": "Alberta",
        "country": "CA",
        "postalCode": "T4H",
        "latitude": "51.7834",
        "longitude": "-114.102"
    },
    "contact": {
        "phone": "+1-366-886-0539",
        "email": "kavalos366@telekom.com",
        "socMedia": null
    },
    "login": {
        "username": "kavalos",
        "oauth2": null,
        "password": "$2y$10$g7o5DBAilzbN1tcaWAPIZ.e4ZBZNtq2ylTwno3SZ700lfb4P9kB8y"
    },
    "otherContact": {
        "emails": [
            "kavalos@kddi.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-05-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "LONNGIBB9405",
    "name": {
        "title": "Mr",
        "first": "Lonnie",
        "middle": "L",
        "last": "Gibbs",
        "suffix": null
    },
    "address": {
        "streetAddress": "4143 Short Mountain Way",
        "buildingName": "Building 65",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "S\u00e9vaz",
        "stateProvince": "FR",
        "locality": "Broye District",
        "country": "CH",
        "postalCode": "1541",
        "latitude": "46.8398",
        "longitude": "6.877"
    },
    "contact": {
        "phone": "+41-367-053-9405",
        "email": "lgibbs367@uunet.com",
        "socMedia": null
    },
    "login": {
        "username": "lgibbs",
        "oauth2": null,
        "password": "$2y$10$UJ8\/zFUsgrW7lEjGhCbJnOn7ML3qH.Uc6qmm612M.yTMnunQ6Y5ti"
    },
    "otherContact": {
        "emails": [
            "lgibbs@netcom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-12-18"
    }
});
db.customers.insertOne(
{
    "customerKey": "MEGHMORR6610",
    "name": {
        "title": "Ms",
        "first": "Meghann",
        "middle": "M",
        "last": "Morrow",
        "suffix": null
    },
    "address": {
        "streetAddress": "2355 Short Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "B7",
        "city": "Highlands",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3660",
        "latitude": "-37.1",
        "longitude": "145.4"
    },
    "contact": {
        "phone": "+61-368-156-6610",
        "email": "mmorrow368@etisalat.com",
        "socMedia": null
    },
    "login": {
        "username": "mmorrow",
        "oauth2": null,
        "password": "$2y$10$DXXA5IeVgFas\/4PWW5LxXup2nfli\/vWa3dvUMao5y1cAUOo0xq5A6"
    },
    "otherContact": {
        "emails": [
            "mmorrow@maxcomm.net"
        ],
        "phoneNumbers": [
            "+61-385-304-0420",
            "+61-403-567-6814"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-11-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "ISIACHRI9384",
    "name": {
        "title": null,
        "first": "Isiah",
        "middle": null,
        "last": "Christian",
        "suffix": null
    },
    "address": {
        "streetAddress": "2897 Short Mound Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Torre De Valdealmendras",
        "stateProvince": "CM",
        "locality": "Guadalajara",
        "country": "ES",
        "postalCode": "19269",
        "latitude": "41.15",
        "longitude": "-2.65"
    },
    "contact": {
        "phone": "+34-369-956-9384",
        "email": "ichristi369@safaricom.com",
        "socMedia": null
    },
    "login": {
        "username": "ichristi",
        "oauth2": null,
        "password": "$2y$10$SgF4TILiLFfTe2E6iCxx\/udMWxbE\/o7WCVFhg9esrjPbl0.7gzUQC"
    },
    "otherContact": {
        "emails": [
            "ichristi@vimpelcom.net",
            "ichristi@telecomitalia.net"
        ],
        "phoneNumbers": [
            "+34-745-886-1845",
            "+34-22-501-5841",
            "+34-269-619-3883"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-07-23"
    }
});
db.customers.insertOne(
{
    "customerKey": "JONIDILL9329",
    "name": {
        "title": "Ms",
        "first": "Joni",
        "middle": "K",
        "last": "Dillon",
        "suffix": null
    },
    "address": {
        "streetAddress": "7185 Blue Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Halifax South",
        "stateProvince": "NS",
        "locality": "Halifax",
        "country": "CA",
        "postalCode": "B3R",
        "latitude": "44.5939",
        "longitude": "-63.6031"
    },
    "contact": {
        "phone": "+1-370-803-9329",
        "email": "jdillon370@bt.com",
        "socMedia": {
            "google": "jdillon@google.com"
        }
    },
    "login": {
        "username": "jdillon",
        "oauth2": "jdillon@google.com",
        "password": "$2y$10$OpjvPnvDJXh.Vz6MiJTBJ.hkroR\/g3ap0kdfxMY80Qyxn1SScuoWC"
    },
    "otherContact": {
        "emails": [
            "jdillon@lguplus.net"
        ],
        "phoneNumbers": [
            "+1-980-812-9819"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-02-24"
    }
});
db.customers.insertOne(
{
    "customerKey": "PETEBOWE8062",
    "name": {
        "title": "Ms",
        "first": "Peter",
        "middle": "J",
        "last": "Bowen",
        "suffix": null
    },
    "address": {
        "streetAddress": "2289 Blue Creek Street",
        "buildingName": "Building 13",
        "floor": null,
        "roomAptCondoFlat": "BE",
        "city": "Bonillos",
        "stateProvince": "CL",
        "locality": "Le\u00f3n",
        "country": "ES",
        "postalCode": "24714",
        "latitude": "42.4893",
        "longitude": "-6.091"
    },
    "contact": {
        "phone": "+34-371-987-8062",
        "email": "pbowen371@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "pbowen",
        "oauth2": null,
        "password": "$2y$10$mfbulOeufDgoTOrZqU2WQOYL4MdeztIMVXqm\/cxciN9oNTWVUYS3O"
    },
    "otherContact": {
        "emails": [
            "pbowen@nii.net"
        ],
        "phoneNumbers": [
            "+34-986-589-5517"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-09-08"
    }
});
db.customers.insertOne(
{
    "customerKey": "JAMESTAF8125",
    "name": {
        "title": null,
        "first": "Jame",
        "middle": null,
        "last": "Stafford",
        "suffix": null
    },
    "address": {
        "streetAddress": "4556 Winding Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sandalwood",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5309",
        "latitude": "-34.95",
        "longitude": "140.1333"
    },
    "contact": {
        "phone": "+61-372-776-8125",
        "email": "jstaffor372@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "jstaffor",
        "oauth2": null,
        "password": "$2y$10$OOlGKrvGU6gWxP3\/1ux1Ke1GyGA83\/\/tC4cU\/rv22WpE05X1JHS8e"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-354-813-6786",
            "+61-67-441-6825"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-05-07"
    }
});
db.customers.insertOne(
{
    "customerKey": "EVONLOVE4277",
    "name": {
        "title": "Ms",
        "first": "Evon",
        "middle": "H",
        "last": "Love",
        "suffix": null
    },
    "address": {
        "streetAddress": "9832 Short Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432\u0446\u044b",
        "stateProvince": "Dokchitsy",
        "locality": "Dokchitsy",
        "country": "BY",
        "postalCode": "211715",
        "latitude": "54.8617",
        "longitude": "27.6157"
    },
    "contact": {
        "phone": "+375-373-737-4277",
        "email": "elove373@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "elove",
        "oauth2": null,
        "password": "$2y$10$fAzn1dq8qHS6vjDQ5hR0CeSWnpXct714mJItsZ80CuD3nUIiout9m"
    },
    "otherContact": {
        "emails": [
            "elove@chunghwa.net",
            "elove@zain.net"
        ],
        "phoneNumbers": [
            "+375-469-299-8190"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-06-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "ORENHUAN5682",
    "name": {
        "title": "Mr",
        "first": "Oren",
        "middle": "Y",
        "last": "Huang",
        "suffix": null
    },
    "address": {
        "streetAddress": "7960 Big Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Santa Ana",
        "stateProvince": "CA",
        "locality": "Orange",
        "country": "US",
        "postalCode": "92703",
        "latitude": "33.7489",
        "longitude": "-117.9072"
    },
    "contact": {
        "phone": "+1-374-566-5682",
        "email": "ohuang374@worldnet.com",
        "socMedia": null
    },
    "login": {
        "username": "ohuang",
        "oauth2": null,
        "password": "$2y$10$8Ihc.wFiPQZJTbx7i67eSOqKpkuqw7RoEWFX1VNOS6S4.citSYMtO"
    },
    "otherContact": {
        "emails": [
            "ohuang@softbank.net",
            "ohuang@openworld.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-04-05"
    }
});
db.customers.insertOne(
{
    "customerKey": "CHERGALL2224",
    "name": {
        "title": null,
        "first": "Cheree",
        "middle": null,
        "last": "Gallegos",
        "suffix": null
    },
    "address": {
        "streetAddress": "3874 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "55",
        "city": "Saint-Pierre",
        "stateProvince": "Saint-Pierre",
        "locality": "Saint-Pierre",
        "country": "PM",
        "postalCode": "97500",
        "latitude": "46.7809",
        "longitude": "-56.172"
    },
    "contact": {
        "phone": "+508-375-727-2224",
        "email": "cgallego375@telkom.com",
        "socMedia": null
    },
    "login": {
        "username": "cgallego",
        "oauth2": null,
        "password": "$2y$10$74IDk8hwIdoZWC34wm0ve.4maMTfAaWMkt0.AMK9pEI2mfgStKcEu"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+508-137-116-5145",
            "+508-348-265-6195",
            "+508-364-414-1212"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-07-13"
    }
});
db.customers.insertOne(
{
    "customerKey": "DONAWALT6242",
    "name": {
        "title": "Mr",
        "first": "Donald",
        "middle": "O",
        "last": "Walter",
        "suffix": null
    },
    "address": {
        "streetAddress": "8920 Short Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bullumwaal",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3875",
        "latitude": "-37.6333",
        "longitude": "147.5333"
    },
    "contact": {
        "phone": "+61-376-772-6242",
        "email": "dwalter376@cerist.com",
        "socMedia": null
    },
    "login": {
        "username": "dwalter",
        "oauth2": null,
        "password": "$2y$10$7YtdszkJBKlXCqzxX2xkK.yjzPhlvEJBpkbLUbZxT.M6nWHLWDIba"
    },
    "otherContact": {
        "emails": [
            "dwalter@oi.net",
            "dwalter@bce.net"
        ],
        "phoneNumbers": [
            "+61-423-407-9930"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-01-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "LYNEPRES0614",
    "name": {
        "title": "Ms",
        "first": "Lynetta",
        "middle": "A",
        "last": "Preston",
        "suffix": null
    },
    "address": {
        "streetAddress": "5459 Little Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00d6stersund",
        "stateProvince": "Z",
        "locality": "J\u00e4mtland",
        "country": "SE",
        "postalCode": "839 45",
        "latitude": "63.1792",
        "longitude": "14.6357"
    },
    "contact": {
        "phone": "+46-377-131-0614",
        "email": "lpreston377@telkom.com",
        "socMedia": null
    },
    "login": {
        "username": "lpreston",
        "oauth2": null,
        "password": "$2y$10$1gVaMkSyVhFzUrljVXHrQe9YBGa2Itm730ctfMoX5oroNPEZDdly."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+46-493-864-8679",
            "+46-276-334-4505"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-09-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "JOAQBLAN1207",
    "name": {
        "title": null,
        "first": "Joaquin",
        "middle": null,
        "last": "Blanchard",
        "suffix": null
    },
    "address": {
        "streetAddress": "5255 Big Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Silpho",
        "stateProvince": "England",
        "locality": "North Yorkshire",
        "country": "GB",
        "postalCode": "YO13",
        "latitude": "54.3205",
        "longitude": "-0.5174"
    },
    "contact": {
        "phone": "+44-378-920-1207",
        "email": "jblancha378@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "jblancha",
        "oauth2": null,
        "password": "$2y$10$SiJPjv\/CB5nGeUinteIjU.e7mOt4fl1m3xS5fQyg\/VFX0dxgBN9Ha"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-06-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "PASQMORA3076",
    "name": {
        "title": "Mr",
        "first": "Pasquale",
        "middle": "B",
        "last": "Moran",
        "suffix": null
    },
    "address": {
        "streetAddress": "9292 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chana",
        "stateProvince": "Songkhla",
        "locality": "Songkhla",
        "country": "TH",
        "postalCode": "90130",
        "latitude": "6.9167",
        "longitude": "100.7333"
    },
    "contact": {
        "phone": "+66-379-536-3076",
        "email": "pmoran379@worldnet.com",
        "socMedia": null
    },
    "login": {
        "username": "pmoran",
        "oauth2": null,
        "password": "$2y$10$Vib.QV1qAGtgkigOEZRYKuHYkj\/TUyc4KBXR5qG0SQdBDODDfUtV6"
    },
    "otherContact": {
        "emails": [
            "pmoran@vodafone.net",
            "pmoran@lguplus.net",
            "pmoran@worldnet.net"
        ],
        "phoneNumbers": [
            "+66-686-375-1207",
            "+66-238-114-8382"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-09-11"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELLABELT3866",
    "name": {
        "title": "Ms",
        "first": "Ellamae",
        "middle": "O",
        "last": "Beltran",
        "suffix": null
    },
    "address": {
        "streetAddress": "5973 Green Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fourchu",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B2J",
        "latitude": "45.707",
        "longitude": "-60.4665"
    },
    "contact": {
        "phone": "+1-380-201-3866",
        "email": "ebeltran380@daxnet.com",
        "socMedia": {
            "facebook": "ebeltran@facebook.com"
        }
    },
    "login": {
        "username": "ebeltran",
        "oauth2": "ebeltran@facebook.com",
        "password": "$2y$10$ZD.yye.h2sSeeDPDeaB5dOdtULMURhMaaVNzZhnQo55UZr8qEyUZy"
    },
    "otherContact": {
        "emails": [
            "ebeltran@vodafone.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-03-20"
    }
});
db.customers.insertOne(
{
    "customerKey": "TEMPSTAN0319",
    "name": {
        "title": null,
        "first": "Temple",
        "middle": null,
        "last": "Stanley",
        "suffix": null
    },
    "address": {
        "streetAddress": "1225 Green Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bukoni\u0173 k.",
        "stateProvince": "Jonavos r. sav.",
        "locality": "Jonavos r. sav.",
        "country": "LT",
        "postalCode": "55052",
        "latitude": "55.1833",
        "longitude": "24.4333"
    },
    "contact": {
        "phone": "+370-381-622-0319",
        "email": "tstanley381@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "tstanley",
        "oauth2": null,
        "password": "$2y$10$NaX7qsuBNCbA3\/nqoJp59Oua0qloHIrLgCxWyknawpol6\/0gXImQO"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-04-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "LESLPATR1449",
    "name": {
        "title": "Ms",
        "first": "Lesli",
        "middle": "D",
        "last": "Patrick",
        "suffix": null
    },
    "address": {
        "streetAddress": "3716 Short Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Trois-Rivi\u00e8res East",
        "stateProvince": "QC",
        "locality": "Trois-Rivi\u00e8res",
        "country": "CA",
        "postalCode": "G9A",
        "latitude": "46.3695",
        "longitude": "-72.6789"
    },
    "contact": {
        "phone": "+1-382-810-1449",
        "email": "lpatrick382@ptcl.com",
        "socMedia": null
    },
    "login": {
        "username": "lpatrick",
        "oauth2": null,
        "password": "$2y$10$aDQko5tct687tOLLxdS1B.hDgb9cN5Do5Ne4v4znuKA3f9Wi.6Bo6"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-731-127-5369"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-11-03"
    }
});
db.customers.insertOne(
{
    "customerKey": "LUDIDAVI6752",
    "name": {
        "title": "Ms",
        "first": "Ludivina",
        "middle": "L",
        "last": "Davila",
        "suffix": null
    },
    "address": {
        "streetAddress": "53 Blue Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eac Si Krez",
        "stateProvince": "Tipaza",
        "locality": "Tipaza",
        "country": "DZ",
        "postalCode": "42040",
        "latitude": "36.5614",
        "longitude": "2.5325"
    },
    "contact": {
        "phone": "+213-383-575-6752",
        "email": "ldavila383@greennet.com",
        "socMedia": null
    },
    "login": {
        "username": "ldavila",
        "oauth2": null,
        "password": "$2y$10$hc23d9tDwAD8djyq2O53X.asmdgI7R8DnQ3L6mCaVRzMWmqYulKmy"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-09-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "YEVEKIM5310",
    "name": {
        "title": null,
        "first": "Yevette",
        "middle": null,
        "last": "Kim",
        "suffix": null
    },
    "address": {
        "streetAddress": "1887 Long Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Korora",
        "stateProvince": "NSW",
        "locality": "NSW NORTH COAST",
        "country": "AU",
        "postalCode": "2450",
        "latitude": "-30.259",
        "longitude": "153.1306"
    },
    "contact": {
        "phone": "+61-384-764-5310",
        "email": "ykim384@telkom.com",
        "socMedia": null
    },
    "login": {
        "username": "ykim",
        "oauth2": null,
        "password": "$2y$10$OddG7BDl8R4gIv9pChk\/Y.2YhbDEf1aXJxvagqHfQlbUxl82NuIzq"
    },
    "otherContact": {
        "emails": [
            "ykim@telus.net"
        ],
        "phoneNumbers": [
            "+61-299-835-6345",
            "+61-37-021-1165"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-06-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "JEFFEDWA6788",
    "name": {
        "title": "Mr",
        "first": "Jeffrey",
        "middle": "I",
        "last": "Edwards",
        "suffix": null
    },
    "address": {
        "streetAddress": "7528 Little Gully Way",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": null,
        "city": "Florissant",
        "stateProvince": "MO",
        "locality": "St. Louis",
        "country": "US",
        "postalCode": "63034",
        "latitude": "38.8338",
        "longitude": "-90.2936"
    },
    "contact": {
        "phone": "+1-386-371-6788",
        "email": "jedwards386@worldnet.com",
        "socMedia": null
    },
    "login": {
        "username": "jedwards",
        "oauth2": null,
        "password": "$2y$10$Z6N\/I\/2EHpCKxE2eq9Qi9el7hyEEvrp4x9jy0hutZQvOa3mUjPTrS"
    },
    "otherContact": {
        "emails": [
            "jedwards@telecom.net",
            "jedwards@access.net",
            "jedwards@netcom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-04-28"
    }
});
db.customers.insertOne(
{
    "customerKey": "ZENAKELL1963",
    "name": {
        "title": null,
        "first": "Zena",
        "middle": null,
        "last": "Kelley",
        "suffix": null
    },
    "address": {
        "streetAddress": "605 Long Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Enklinge",
        "stateProvince": "Kumlinge",
        "locality": "Kumlinge",
        "country": "AX",
        "postalCode": "22830",
        "latitude": "60.3349",
        "longitude": "20.758"
    },
    "contact": {
        "phone": "+35818-387-687-1963",
        "email": "zkelley387@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "zkelley",
        "oauth2": null,
        "password": "$2y$10$EP35PTKGoTitVtf9VhF\/Du6D1FpoOd3Z97UJ95Ueln.ay7Ga6vJIm"
    },
    "otherContact": {
        "emails": [
            "zkelley@ktc.net",
            "zkelley@telenor.net"
        ],
        "phoneNumbers": [
            "+35818-332-289-9692"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-08-09"
    }
});
db.customers.insertOne(
{
    "customerKey": "ELLAREYN9244",
    "name": {
        "title": "Ms",
        "first": "Ella",
        "middle": "W",
        "last": "Reynolds",
        "suffix": null
    },
    "address": {
        "streetAddress": "7105 Blue River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "1D",
        "city": "Alexandria",
        "stateProvince": "VA",
        "locality": "City of Alexandria",
        "country": "US",
        "postalCode": "22302",
        "latitude": "38.8276",
        "longitude": "-77.0896"
    },
    "contact": {
        "phone": "+1-388-132-9244",
        "email": "ereynold388@swisscom.com",
        "socMedia": null
    },
    "login": {
        "username": "ereynold",
        "oauth2": null,
        "password": "$2y$10$zY10f18Ws3xHBekYKr4yReZQrG\/ehR2Y0AF.ThEWndQzet2oSwJM."
    },
    "otherContact": {
        "emails": [
            "ereynold@vimpelcom.net",
            "ereynold@chunghwa.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-04-11"
    }
});
db.customers.insertOne(
{
    "customerKey": "MERNKENN5687",
    "name": {
        "title": "Ms",
        "first": "Merna",
        "middle": "Q",
        "last": "Kennedy",
        "suffix": null
    },
    "address": {
        "streetAddress": "8926 Little Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lakki R.Station",
        "stateProvince": "NWFP Peshawar",
        "locality": "NWFP Peshawar",
        "country": "PK",
        "postalCode": "28421",
        "latitude": "32.5036",
        "longitude": "70.919"
    },
    "contact": {
        "phone": "+92-389-583-5687",
        "email": "mkennedy389@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "mkennedy",
        "oauth2": null,
        "password": "$2y$10$1i8SoTdEMkfjYNhrqhWi5uRR6iYhS6\/XizFGR1M7sQSDOt0ZnS2VK"
    },
    "otherContact": {
        "emails": [
            "mkennedy@cci.net",
            "mkennedy@econnect.net",
            "mkennedy@telkom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-02-17"
    }
});
db.customers.insertOne(
{
    "customerKey": "EDDIMOYE4691",
    "name": {
        "title": null,
        "first": "Eddie",
        "middle": null,
        "last": "Moyer",
        "suffix": null
    },
    "address": {
        "streetAddress": "5783 Winding Canyon Drive",
        "buildingName": "Building 9C",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rochester",
        "stateProvince": "MN",
        "locality": "Olmsted",
        "country": "US",
        "postalCode": "55903",
        "latitude": "43.9966",
        "longitude": "-92.5409"
    },
    "contact": {
        "phone": "+1-390-281-4691",
        "email": "emoyer390@telia.com",
        "socMedia": {
            "line": "emoyer@line.com"
        }
    },
    "login": {
        "username": "emoyer",
        "oauth2": "emoyer@line.com",
        "password": "$2y$10$DiRt2L3SLdqVkZPuF1NkkenLU5Btyv5WuUHcs1XGsK8aih8lF\/fgW"
    },
    "otherContact": {
        "emails": [
            "emoyer@turkcell.net"
        ],
        "phoneNumbers": [
            "+1-443-547-9663",
            "+1-81-723-0719"
        ],
        "socMedias": {
            "line": "emoyer@line.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-03-26"
    }
});
db.customers.insertOne(
{
    "customerKey": "WOODRAMS6856",
    "name": {
        "title": "Mr",
        "first": "Woodrow",
        "middle": "D",
        "last": "Ramsey",
        "suffix": null
    },
    "address": {
        "streetAddress": "8268 Winding Bough Road",
        "buildingName": "Building D9",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dalv\u00edk",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "621",
        "latitude": "65.9702",
        "longitude": "-18.5286"
    },
    "contact": {
        "phone": "+354-391-497-6856",
        "email": "wramsey391@belgacom.com",
        "socMedia": null
    },
    "login": {
        "username": "wramsey",
        "oauth2": null,
        "password": "$2y$10$eod3pKhGViFuWV0TA3qRZuyKQspHBOFh4bl4LdXc.eztqb39ieslG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+354-397-706-4451",
            "+354-905-017-9349"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1952-07-15"
    }
});
db.customers.insertOne(
{
    "customerKey": "MAPLPALM6041",
    "name": {
        "title": "Ms",
        "first": "Maple",
        "middle": "M",
        "last": "Palmer",
        "suffix": null
    },
    "address": {
        "streetAddress": "7824 Winding Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Dogmaels",
        "stateProvince": "Wales",
        "locality": "Pembrokeshire",
        "country": "GB",
        "postalCode": "SA43",
        "latitude": "52.0816",
        "longitude": "-4.6849"
    },
    "contact": {
        "phone": "+44-392-569-6041",
        "email": "mpalmer392@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "mpalmer",
        "oauth2": null,
        "password": "$2y$10$rO\/oODY\/AGkJmdrIBFTm2.C1Q9HpBtf8NynMwnXKYruEDcAZRfl.S"
    },
    "otherContact": {
        "emails": [
            "mpalmer@ccs.net"
        ],
        "phoneNumbers": [
            "+44-260-435-1723"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-04-29"
    }
});
db.customers.insertOne(
{
    "customerKey": "SILACLAY2643",
    "name": {
        "title": null,
        "first": "Silas",
        "middle": null,
        "last": "Clayton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3825 Winding Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vale",
        "stateProvince": "Guernsey Channel Islands",
        "locality": "Guernsey Channel Islands",
        "country": "GG",
        "postalCode": "GY3",
        "latitude": "49.45",
        "longitude": "-2.6"
    },
    "contact": {
        "phone": "+441481-393-001-2643",
        "email": "sclayton393@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "sclayton",
        "oauth2": null,
        "password": "$2y$10$ns03SQ9R3kNEcCJVEBqho.xs.cGvvpiiDf\/1e63VMqAUsHHxoLnIO"
    },
    "otherContact": {
        "emails": [
            "sclayton@tata.net",
            "sclayton@telesystems.net"
        ],
        "phoneNumbers": [
            "+441481-801-019-1973"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-02-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "HUBENICH6857",
    "name": {
        "title": "Mr",
        "first": "Hubert",
        "middle": "O",
        "last": "Nichols",
        "suffix": null
    },
    "address": {
        "streetAddress": "7855 Short Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "L'\u00c9piphanie",
        "stateProvince": "QC",
        "locality": "Lanaudi\u00e8re",
        "country": "CA",
        "postalCode": "J5X",
        "latitude": "45.8501",
        "longitude": "-73.4825"
    },
    "contact": {
        "phone": "+1-394-635-6857",
        "email": "hnichols394@unicom.com",
        "socMedia": null
    },
    "login": {
        "username": "hnichols",
        "oauth2": null,
        "password": "$2y$10$jFUgCjL8fDp0jR81igkowO0eTCqhLLYuOnwMVJhkM9\/OpQgi7HlNu"
    },
    "otherContact": {
        "emails": [
            "hnichols@telus.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-04-21"
    }
});
db.customers.insertOne(
{
    "customerKey": "JULIRASM5116",
    "name": {
        "title": "Mr",
        "first": "Julius",
        "middle": "C",
        "last": "Rasmussen",
        "suffix": null
    },
    "address": {
        "streetAddress": "8750 Long Gully Road",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": null,
        "city": "Ple\u00dfberg",
        "stateProvince": "Kautzen",
        "locality": "Politischer Bezirk Waidhofen an der Thaya",
        "country": "AT",
        "postalCode": "3851",
        "latitude": "48.9167",
        "longitude": "15.2667"
    },
    "contact": {
        "phone": "+43-395-867-5116",
        "email": "jrasmuss395@cubenet.com",
        "socMedia": null
    },
    "login": {
        "username": "jrasmuss",
        "oauth2": null,
        "password": "$2y$10$eBLvXCV065HC66g7Uu032.Lu\/Cn0deQaXvQWGn5ZilIfC\/26NcJW6"
    },
    "otherContact": {
        "emails": [
            "jrasmuss@eunet.net",
            "jrasmuss@telkom.net"
        ],
        "phoneNumbers": [
            "+43-857-787-9637"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-08-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "ILASTEP9508",
    "name": {
        "title": null,
        "first": "Ila",
        "middle": null,
        "last": "Stephenson",
        "suffix": null
    },
    "address": {
        "streetAddress": "1949 Long Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Victoria",
        "stateProvince": "TX",
        "locality": "Victoria",
        "country": "US",
        "postalCode": "77905",
        "latitude": "28.7525",
        "longitude": "-97.0338"
    },
    "contact": {
        "phone": "+1-396-599-9508",
        "email": "istephen396@kpn.com",
        "socMedia": null
    },
    "login": {
        "username": "istephen",
        "oauth2": null,
        "password": "$2y$10$06bwaqXFboLtaRoQZeDoBePfatzQkXxVttN1kN6e1yPGr\/gVG0oGa"
    },
    "otherContact": {
        "emails": [
            "istephen@movil.net",
            "istephen@telus.net"
        ],
        "phoneNumbers": [
            "+1-333-122-2557"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-09-27"
    }
});
db.customers.insertOne(
{
    "customerKey": "ALANMILL7541",
    "name": {
        "title": "Mr",
        "first": "Alan",
        "middle": "T",
        "last": "Miller",
        "suffix": null
    },
    "address": {
        "streetAddress": "6562 Long Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Schaan",
        "stateProvince": "Schaan",
        "locality": "Schaan",
        "country": "LI",
        "postalCode": "9494",
        "latitude": "47.1746",
        "longitude": "9.5247"
    },
    "contact": {
        "phone": "+423-397-521-7541",
        "email": "amiller397@ktc.com",
        "socMedia": null
    },
    "login": {
        "username": "amiller",
        "oauth2": null,
        "password": "$2y$10$uq.kyKnDcACB0.kw7d.clOCLeuYXeGJ8FvMDOeCudcyHbh9Cao4.e"
    },
    "otherContact": {
        "emails": [
            "amiller@glasnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1991-07-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "JENNDEJE4428",
    "name": {
        "title": "Ms",
        "first": "Jenniffer",
        "middle": "C",
        "last": "Dejesus",
        "suffix": null
    },
    "address": {
        "streetAddress": "4799 Short Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "New Glarus",
        "stateProvince": "WI",
        "locality": "Green",
        "country": "US",
        "postalCode": "53574",
        "latitude": "42.8143",
        "longitude": "-89.6437"
    },
    "contact": {
        "phone": "+1-398-741-4428",
        "email": "jdejesus398@swisscom.com",
        "socMedia": null
    },
    "login": {
        "username": "jdejesus",
        "oauth2": null,
        "password": "$2y$10$xXTx4q\/H3zgPlh1LaOzJy.LcPND9XMnpdkVy8.323asprHpVnu28G"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-382-499-6140"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-02-04"
    }
});
db.customers.insertOne(
{
    "customerKey": "ALANKAUR9696",
    "name": {
        "title": null,
        "first": "Alan",
        "middle": null,
        "last": "Kaur",
        "suffix": null
    },
    "address": {
        "streetAddress": "8894 Green Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C6",
        "city": "Ebeye",
        "stateProvince": "Ailinginae",
        "locality": "Ailinginae",
        "country": "MH",
        "postalCode": "96970",
        "latitude": "11.1405",
        "longitude": "166.4103"
    },
    "contact": {
        "phone": "+692-399-380-9696",
        "email": "akaur399@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "akaur",
        "oauth2": null,
        "password": "$2y$10$f07nnt1H\/wKzfohcFI.6fOqiO6A3FbYL5OldYrzURg6L5CPqYo8pa"
    },
    "otherContact": {
        "emails": [
            "akaur@econnect.net"
        ],
        "phoneNumbers": [
            "+692-744-631-5623"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1931-04-29"
    }
});
