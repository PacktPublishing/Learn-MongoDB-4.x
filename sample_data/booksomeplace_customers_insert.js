conn = new Mongo();
db = conn.getDB("booksomeplace");
db.customers.drop();
db.customers.insertOne(
{
    "customerKey": "KERRBURN1854",
    "name": {
        "title": "Mr",
        "first": "Kerry",
        "middle": "W",
        "last": "Burns",
        "suffix": null
    },
    "address": {
        "streetAddress": "5125 Winding Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yennora",
        "stateProvince": "NSW",
        "locality": "BANKSTOWN",
        "country": "AU",
        "postalCode": "2161",
        "latitude": "-33.8617",
        "longitude": "150.9686"
    },
    "contact": {
        "email": "kburns100@telefonica.com",
        "phone": "+61-100-172-1854",
        "socMedia": {
            "line": "kburns100@telefonica.com@line.com"
        }
    },
    "login": {
        "username": "kburns",
        "oauth2": "kburns@line.com",
        "password": "$2y$10$X0O34hxHtxn93xBVFoumJ.JHUE0G1j9sL47Y.9XWNdFuLKi73YDJ6"
    },
    "otherContact": {
        "emails": [
            "kburns100@oi.com",
            "kburns100@rogers.com",
            "kburns100@telus.com"
        ],
        "phoneNumbers": [
            "+61-100-666-6836",
            "+61-100-720-8837",
            "+61-100-345-7082"
        ],
        "socMedias": [
            {
                "skype": "kburns100@oi.com@skype.com"
            },
            {
                "line": "kburns100@rogers.com@line.com"
            },
            {
                "twitter": "kburns100@telus.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-05-22"
    },
    "totalBooked": 8,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SANFHUNT1663",
    "name": {
        "title": "Mr",
        "first": "Sanford",
        "middle": "T",
        "last": "Hunt",
        "suffix": null
    },
    "address": {
        "streetAddress": "7686 Blue Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lodra",
        "stateProvince": "Hyderabad",
        "locality": "Hyderabad",
        "country": "PK",
        "postalCode": "78101",
        "latitude": "28.0167",
        "longitude": "68.6333"
    },
    "contact": {
        "email": "shunt101@worldnet.com",
        "phone": "+61-101-446-1663",
        "socMedia": {
            "linkedin": "shunt101@worldnet.com@linkedin.com"
        }
    },
    "login": {
        "username": "shunt",
        "oauth2": "shunt@linkedin.com",
        "password": "$2y$10$mElJeNlZXfKD6j6re.PgC.ORfp8jpD7rTRsvY0lYOH9ZBkvgNSswe"
    },
    "otherContact": {
        "emails": [
            "shunt101@telecomitalia.com",
            "shunt101@rogers.com",
            "shunt101@jio.com"
        ],
        "phoneNumbers": [
            "+61-101-536-1017",
            "+61-101-792-2427",
            "+61-101-598-0001"
        ],
        "socMedias": [
            {
                "google": "shunt101@telecomitalia.com@google.com"
            },
            {
                "skype": "shunt101@rogers.com@skype.com"
            },
            {
                "linkedin": "shunt101@jio.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-02-23"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "STANKHAN1771",
    "name": {
        "title": null,
        "first": "Stanford",
        "middle": null,
        "last": "Khan",
        "suffix": null
    },
    "address": {
        "streetAddress": "5638 Red Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "42",
        "city": "Burnt Hills",
        "stateProvince": "NY",
        "locality": "Saratoga",
        "country": "US",
        "postalCode": "12027",
        "latitude": "42.9329",
        "longitude": "-73.896"
    },
    "contact": {
        "email": "skhan102@softbank.com",
        "phone": "+61-102-414-1771",
        "socMedia": []
    },
    "login": {
        "username": "skhan",
        "oauth2": null,
        "password": "$2y$10$nASAxvNZr1GlFWihFbwRtOGdd46IwOZClkAadniLA6zI2Hf2HqWcS"
    },
    "otherContact": {
        "emails": [
            "skhan102@access.com",
            "skhan102@vivendi.com"
        ],
        "phoneNumbers": [
            "+61-102-795-0863",
            "+61-102-113-0477"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-07-07"
    },
    "totalBooked": 28,
    "discount": 0.085
});
db.customers.insertOne(
{
    "customerKey": "DEXTKNAP5125",
    "name": {
        "title": "Mr",
        "first": "Dexter",
        "middle": "V",
        "last": "Knapp",
        "suffix": null
    },
    "address": {
        "streetAddress": "1106 Winding Gully Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Srn\u00edn",
        "stateProvince": "\u010cesk\u00fd Krumlov",
        "locality": "\u010cesk\u00fd Krumlov",
        "country": "CZ",
        "postalCode": "381 01",
        "latitude": "48.85",
        "longitude": "14.35"
    },
    "contact": {
        "email": "dknapp103@ccs.com",
        "phone": "+61-103-321-5125",
        "socMedia": {
            "skype": "dknapp103@ccs.com@skype.com"
        }
    },
    "login": {
        "username": "dknapp",
        "oauth2": "dknapp@skype.com",
        "password": "$2y$10$Rzt7Ltq4VTHQNzxbrYV5AuSufWgEEtjQtejvvQeyfCnJFPOGrst1a"
    },
    "otherContact": {
        "emails": [
            "dknapp103@telstra.com"
        ],
        "phoneNumbers": [
            "+61-103-432-1948"
        ],
        "socMedias": [
            {
                "linkedin": "dknapp103@telstra.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-09-24"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TIMMHOLL2091",
    "name": {
        "title": "Mr",
        "first": "Timmy",
        "middle": "W",
        "last": "Holloway",
        "suffix": null
    },
    "address": {
        "streetAddress": "7125 Green Mound Boulevard",
        "buildingName": "Building C1",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lexington",
        "stateProvince": "KY",
        "locality": "Fayette",
        "country": "US",
        "postalCode": "40581",
        "latitude": "38.0283",
        "longitude": "-84.4715"
    },
    "contact": {
        "email": "thollowa104@ktc.com",
        "phone": "+61-104-940-2091",
        "socMedia": {
            "linkedin": "thollowa104@ktc.com@linkedin.com"
        }
    },
    "login": {
        "username": "thollowa",
        "oauth2": "thollowa@linkedin.com",
        "password": "$2y$10$WNVED1wnyK\/Ih4vhbyH\/hO0RdQ\/AmgD5nvBl8HnneAxsp3RrpKlWO"
    },
    "otherContact": {
        "emails": [
            "thollowa104@unicom.com",
            "thollowa104@ptcl.com",
            "thollowa104@sprint.com"
        ],
        "phoneNumbers": [
            "+61-104-379-0350",
            "+61-104-860-0439",
            "+61-104-242-4454"
        ],
        "socMedias": [
            {
                "skype": "thollowa104@unicom.com@skype.com"
            },
            {
                "linkedin": "thollowa104@ptcl.com@linkedin.com"
            },
            {
                "google": "thollowa104@sprint.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-07-18"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DERRHOUS7679",
    "name": {
        "title": null,
        "first": "Derrick",
        "middle": null,
        "last": "House",
        "suffix": null
    },
    "address": {
        "streetAddress": "2658 Long Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bj\u00f8rn\u00f8ya",
        "stateProvince": "Bj\u00f8rn\u00f8ya",
        "locality": "Bj\u00f8rn\u00f8ya",
        "country": "SJ",
        "postalCode": "9176",
        "latitude": "74.4435",
        "longitude": "19.0063"
    },
    "contact": {
        "email": "dhouse105@millicom.com",
        "phone": "+61-105-624-7679",
        "socMedia": []
    },
    "login": {
        "username": "dhouse",
        "oauth2": null,
        "password": "$2y$10$Sz1eNlFZhrXSClZkMcgqye45NxHlYUcCQJO0nvl4PHgG\/Hksv9WSy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-10-28"
    },
    "totalBooked": 31,
    "discount": 0.10300000000000001
});
db.customers.insertOne(
{
    "customerKey": "SUZYMEYE4654",
    "name": {
        "title": "Ms",
        "first": "Suzy",
        "middle": "O",
        "last": "Meyers",
        "suffix": null
    },
    "address": {
        "streetAddress": "8275 Winding Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Khandapadagarh",
        "stateProvince": "Khandaparagarh",
        "locality": "Nayagarh",
        "country": "IN",
        "postalCode": "752077",
        "latitude": "19.9692",
        "longitude": "84.7787"
    },
    "contact": {
        "email": "smeyers106@turkcell.com",
        "phone": "+61-106-825-4654",
        "socMedia": {
            "line": "smeyers106@turkcell.com@line.com"
        }
    },
    "login": {
        "username": "smeyers",
        "oauth2": "smeyers@line.com",
        "password": "$2y$10$iBAs6dNjovKyXuEoC8SBI.0QFeBprjoYsEj.Qf0r65OIFRCtuENL2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-01-04"
    },
    "totalBooked": 11,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LANIMEND5958",
    "name": {
        "title": "Ms",
        "first": "Lanita",
        "middle": "V",
        "last": "Mendoza",
        "suffix": null
    },
    "address": {
        "streetAddress": "9236 Red Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vale de A\u00e7or",
        "stateProvince": "Vale De A\u00e7or",
        "locality": "Ponte de Sor",
        "country": "PT",
        "postalCode": "7400-527",
        "latitude": "39.2492",
        "longitude": "-7.9239"
    },
    "contact": {
        "email": "lmendoza107@telecom.com",
        "phone": "+61-107-729-5958",
        "socMedia": {
            "google": "lmendoza107@telecom.com@google.com"
        }
    },
    "login": {
        "username": "lmendoza",
        "oauth2": "lmendoza@google.com",
        "password": "$2y$10$R0ZB1fH\/\/8EI8d5kNbsuF.RoqxPPCevK5hhIXZ3\/zKYDyhfwmwXAC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-03-01"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TIFFAUST9772",
    "name": {
        "title": null,
        "first": "Tiffani",
        "middle": null,
        "last": "Austin",
        "suffix": null
    },
    "address": {
        "streetAddress": "9073 Big Ridge Street",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": "DE",
        "city": "Dickleburgh",
        "stateProvince": "England",
        "locality": "Norfolk",
        "country": "GB",
        "postalCode": "IP21",
        "latitude": "52.3965",
        "longitude": "1.185"
    },
    "contact": {
        "email": "taustin108@econnect.com",
        "phone": "+61-108-166-9772",
        "socMedia": []
    },
    "login": {
        "username": "taustin",
        "oauth2": null,
        "password": "$2y$10$naT0EOpqfpCvTpgj9i..KuZCmBXPNCgy1qXYpI88sV6q1SegXGFqa"
    },
    "otherContact": {
        "emails": [
            "taustin108@etisalat.com",
            "taustin108@lookdata.com",
            "taustin108@bt.com"
        ],
        "phoneNumbers": [
            "+61-108-668-2844",
            "+61-108-772-8220",
            "+61-108-821-5146"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-02-07"
    },
    "totalBooked": 21,
    "discount": 0.056
});
db.customers.insertOne(
{
    "customerKey": "SILASCHR5829",
    "name": {
        "title": "Mr",
        "first": "Silas",
        "middle": "I",
        "last": "Schroeder",
        "suffix": null
    },
    "address": {
        "streetAddress": "4958 Little Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Karlskrona",
        "stateProvince": "K",
        "locality": "Karlskrona",
        "country": "SE",
        "postalCode": "371 87",
        "latitude": "56.1616",
        "longitude": "15.5866"
    },
    "contact": {
        "email": "sschroed109@tata.com",
        "phone": "+61-109-110-5829",
        "socMedia": {
            "skype": "sschroed109@tata.com@skype.com"
        }
    },
    "login": {
        "username": "sschroed",
        "oauth2": "sschroed@skype.com",
        "password": "$2y$10$Ty8sO1M18M61wealePqCAOyEUbb1Rh8m6bQ0PXK4iJc02MPGTEs52"
    },
    "otherContact": {
        "emails": [
            "sschroed109@vimpelcom.com"
        ],
        "phoneNumbers": [
            "+61-109-990-7427"
        ],
        "socMedias": [
            {
                "linkedin": "sschroed109@vimpelcom.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-02-09"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LYDITANG1086",
    "name": {
        "title": "Ms",
        "first": "Lydia",
        "middle": "Z",
        "last": "Tang",
        "suffix": null
    },
    "address": {
        "streetAddress": "6631 Short Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Koorathangudi",
        "stateProvince": "Kilvelur",
        "locality": "Nagapattinam",
        "country": "IN",
        "postalCode": "610207",
        "latitude": "11.1998",
        "longitude": "78.1872"
    },
    "contact": {
        "email": "ltang110@telecom.com",
        "phone": "+61-110-880-1086",
        "socMedia": {
            "facebook": "ltang110@telecom.com@facebook.com"
        }
    },
    "login": {
        "username": "ltang",
        "oauth2": "ltang@facebook.com",
        "password": "$2y$10$IRlT2WuZa4j1L9AgJpjqOOpgjQxcGIijeIfdHbqG.GJ58yVH5LXQS"
    },
    "otherContact": {
        "emails": [
            "ltang110@cci.com"
        ],
        "phoneNumbers": [
            "+61-110-934-5921"
        ],
        "socMedias": [
            {
                "facebook": "ltang110@cci.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-01-22"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "RUFUMCCO4302",
    "name": {
        "title": null,
        "first": "Rufus",
        "middle": null,
        "last": "Mcconnell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9792 Blue Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paso De La Calera",
        "stateProvince": "Rivera",
        "locality": "Rivera",
        "country": "UY",
        "postalCode": "40100",
        "latitude": "-31.974",
        "longitude": "-55.8724"
    },
    "contact": {
        "email": "rmcconne111@telesystems.com",
        "phone": "+61-111-936-4302",
        "socMedia": []
    },
    "login": {
        "username": "rmcconne",
        "oauth2": null,
        "password": "$2y$10$9b6LecptaozS4.SOy65xT.JJyNt2ULNRv42kUQoZbJha1Umceyasq"
    },
    "otherContact": {
        "emails": [
            "rmcconne111@vivendi.com",
            "rmcconne111@oi.com"
        ],
        "phoneNumbers": [
            "+61-111-986-6323",
            "+61-111-347-1451"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-08-10"
    },
    "totalBooked": 31,
    "discount": 0.085
});
db.customers.insertOne(
{
    "customerKey": "ALTOBENN7130",
    "name": {
        "title": "Mr",
        "first": "Alton",
        "middle": "P",
        "last": "Bennett",
        "suffix": null
    },
    "address": {
        "streetAddress": "4104 Little Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gopaljew Sugo",
        "stateProvince": "Basudevpur",
        "locality": "Bhadrak",
        "country": "IN",
        "postalCode": "756124",
        "latitude": "20.694",
        "longitude": "86.125"
    },
    "contact": {
        "email": "abennett112@ooredoo.com",
        "phone": "+61-112-637-7130",
        "socMedia": {
            "google": "abennett112@ooredoo.com@google.com"
        }
    },
    "login": {
        "username": "abennett",
        "oauth2": "abennett@google.com",
        "password": "$2y$10$.avr.fdOKk7jDOyHpUS6VODLqNl73WkGOPgqVKe21brp4WXc5.sKG"
    },
    "otherContact": {
        "emails": [
            "abennett112@apicnet.com",
            "abennett112@glasnet.com",
            "abennett112@access.com"
        ],
        "phoneNumbers": [
            "+61-112-150-9282",
            "+61-112-136-0915",
            "+61-112-375-3127"
        ],
        "socMedias": [
            {
                "linkedin": "abennett112@apicnet.com@linkedin.com"
            },
            {
                "facebook": "abennett112@glasnet.com@facebook.com"
            },
            {
                "line": "abennett112@access.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-02-09"
    },
    "totalBooked": 27,
    "discount": 0.023
});
db.customers.insertOne(
{
    "customerKey": "OLLIWALK4759",
    "name": {
        "title": "Mr",
        "first": "Ollie",
        "middle": "Y",
        "last": "Walker",
        "suffix": null
    },
    "address": {
        "streetAddress": "7054 Big Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chiconi",
        "stateProvince": "Chiconi",
        "locality": "Chiconi",
        "country": "YT",
        "postalCode": "97670",
        "latitude": "-12.8333",
        "longitude": "45.1106"
    },
    "contact": {
        "email": "owalker113@econnect.com",
        "phone": "+61-113-585-4759",
        "socMedia": {
            "linkedin": "owalker113@econnect.com@linkedin.com"
        }
    },
    "login": {
        "username": "owalker",
        "oauth2": "owalker@linkedin.com",
        "password": "$2y$10$9iri7G7cU6\/Kj5CsAtOFXuvTguS5Atn0wkPP.180kFQ96VKw.kFCC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-03-01"
    },
    "totalBooked": 8,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "RONNHUFF4316",
    "name": {
        "title": null,
        "first": "Ronnie",
        "middle": null,
        "last": "Huffman",
        "suffix": null
    },
    "address": {
        "streetAddress": "8176 Long Stream Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "D1",
        "city": "Mississauga (West Port Credit \/ Lorne Park \/ East Sheridan)",
        "stateProvince": "ON",
        "locality": "Mississauga",
        "country": "CA",
        "postalCode": "L5H",
        "latitude": "43.5419",
        "longitude": "-79.6164"
    },
    "contact": {
        "email": "rhuffman114@telecom.com",
        "phone": "+61-114-790-4316",
        "socMedia": []
    },
    "login": {
        "username": "rhuffman",
        "oauth2": null,
        "password": "$2y$10$\/0sf.WDqpO4ixWWTp4x.jueRcVuMlVaj9Yorwmm\/aHLNQyYJNB2hq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-03-16"
    },
    "totalBooked": 8,
    "discount": 0.08700000000000001
});
db.customers.insertOne(
{
    "customerKey": "JAIMWALT8801",
    "name": {
        "title": "Ms",
        "first": "Jaime",
        "middle": "K",
        "last": "Walter",
        "suffix": null
    },
    "address": {
        "streetAddress": "850 Red Gulch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Basse-Terre",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97104 CEDEX",
        "latitude": "15.9985",
        "longitude": "-61.7255"
    },
    "contact": {
        "email": "jwalter115@vivendi.com",
        "phone": "+61-115-985-8801",
        "socMedia": {
            "google": "jwalter115@vivendi.com@google.com"
        }
    },
    "login": {
        "username": "jwalter",
        "oauth2": "jwalter@google.com",
        "password": "$2y$10$rnoujgGXh\/f56oJz.F4.PeE70Bvw\/bMoLdt9FDVuA0yW8upSgvmku"
    },
    "otherContact": {
        "emails": [
            "jwalter115@cubenet.com"
        ],
        "phoneNumbers": [
            "+61-115-522-3696"
        ],
        "socMedias": [
            {
                "skype": "jwalter115@cubenet.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-03-21"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SHUVINC6921",
    "name": {
        "title": "Ms",
        "first": "Shu",
        "middle": "G",
        "last": "Vincent",
        "suffix": null
    },
    "address": {
        "streetAddress": "2239 Big Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Winnetka",
        "stateProvince": "CA",
        "locality": "Los Angeles",
        "country": "US",
        "postalCode": "91306",
        "latitude": "34.2092",
        "longitude": "-118.5749"
    },
    "contact": {
        "email": "svincent116@ptcl.com",
        "phone": "+61-116-435-6921",
        "socMedia": {
            "skype": "svincent116@ptcl.com@skype.com"
        }
    },
    "login": {
        "username": "svincent",
        "oauth2": "svincent@skype.com",
        "password": "$2y$10$obc3xGCMfDrfK.FVFXsIa.OWvWxuQX8prS67x8poywH9CJv2LrZpW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-04-08"
    },
    "totalBooked": 11,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CLIFREED9519",
    "name": {
        "title": null,
        "first": "Clifford",
        "middle": null,
        "last": "Reed",
        "suffix": null
    },
    "address": {
        "streetAddress": "4681 Blue Ditch Avenue",
        "buildingName": "Building C8",
        "floor": 4,
        "roomAptCondoFlat": null,
        "city": "Coblinine",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6317",
        "latitude": "-33.6483",
        "longitude": "117.6843"
    },
    "contact": {
        "email": "creed117@rogers.com",
        "phone": "+61-117-552-9519",
        "socMedia": []
    },
    "login": {
        "username": "creed",
        "oauth2": null,
        "password": "$2y$10$8NnSM\/\/DFq1RTFAfkneaKuGmu\/ecexxEFYqTmog01Vm.Ni.0Ya6L6"
    },
    "otherContact": {
        "emails": [
            "creed117@telekom.com",
            "creed117@ote.com"
        ],
        "phoneNumbers": [
            "+61-117-203-2884",
            "+61-117-668-1854"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-09-15"
    },
    "totalBooked": 29,
    "discount": 0.078
});
db.customers.insertOne(
{
    "customerKey": "ANDRCAMA7740",
    "name": {
        "title": "Mr",
        "first": "Andre",
        "middle": "U",
        "last": "Camacho",
        "suffix": null
    },
    "address": {
        "streetAddress": "4694 Red Woods Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Francisco",
        "stateProvince": "CA",
        "locality": "City and County of San Francisco",
        "country": "US",
        "postalCode": "94103",
        "latitude": "37.7725",
        "longitude": "-122.4147"
    },
    "contact": {
        "email": "acamacho118@tt.com",
        "phone": "+61-118-959-7740",
        "socMedia": {
            "facebook": "acamacho118@tt.com@facebook.com"
        }
    },
    "login": {
        "username": "acamacho",
        "oauth2": "acamacho@facebook.com",
        "password": "$2y$10$Jc2GM9DkuNc3.JqXa3Q1vOtCk222gbbYU2ksj2n9xK\/GbqvIhPqd6"
    },
    "otherContact": {
        "emails": [
            "acamacho118@cerist.com"
        ],
        "phoneNumbers": [
            "+61-118-017-8600"
        ],
        "socMedias": [
            {
                "google": "acamacho118@cerist.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-11-23"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "FATIRAMI6656",
    "name": {
        "title": "Ms",
        "first": "Fatima",
        "middle": "J",
        "last": "Ramirez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6287 Long Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oure",
        "stateProvince": "Svendborg Kommune",
        "locality": "Svendborg Kommune",
        "country": "DK",
        "postalCode": "5883",
        "latitude": "55.1197",
        "longitude": "10.7234"
    },
    "contact": {
        "email": "framirez119@cerist.com",
        "phone": "+61-119-143-6656",
        "socMedia": {
            "linkedin": "framirez119@cerist.com@linkedin.com"
        }
    },
    "login": {
        "username": "framirez",
        "oauth2": "framirez@linkedin.com",
        "password": "$2y$10$Mf4n00zezKghp6xvyjd7nOLEqDsFg091RMWVPV0m8VebN9IzWpNqi"
    },
    "otherContact": {
        "emails": [
            "framirez119@vivendi.com"
        ],
        "phoneNumbers": [
            "+61-119-187-2206"
        ],
        "socMedias": [
            {
                "line": "framirez119@vivendi.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-05-30"
    },
    "totalBooked": 14,
    "discount": 0.107
});
db.customers.insertOne(
{
    "customerKey": "ANDRWOOD9917",
    "name": {
        "title": null,
        "first": "Andree",
        "middle": null,
        "last": "Woods",
        "suffix": null
    },
    "address": {
        "streetAddress": "6687 Big Ditch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "30",
        "city": "Saughall Massie",
        "stateProvince": "England",
        "locality": "Merseyside",
        "country": "GB",
        "postalCode": "CH47",
        "latitude": "53.3905",
        "longitude": "-3.1807"
    },
    "contact": {
        "email": "awoods120@vivendi.com",
        "phone": "+61-120-420-9917",
        "socMedia": []
    },
    "login": {
        "username": "awoods",
        "oauth2": null,
        "password": "$2y$10$hE5F1e6OwvnfOrqB4\/2V\/u8hlFyiewLnfqWPi45TmnJgRF1XwNWmi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-02-04"
    },
    "totalBooked": 26,
    "discount": 0.04
});
db.customers.insertOne(
{
    "customerKey": "EULADUKE2057",
    "name": {
        "title": "Ms",
        "first": "Eula",
        "middle": "Q",
        "last": "Duke",
        "suffix": null
    },
    "address": {
        "streetAddress": "8020 Long Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Behrang Stesen",
        "stateProvince": "PRK",
        "locality": "Perak",
        "country": "MY",
        "postalCode": "35950",
        "latitude": "3.889",
        "longitude": "101.4121"
    },
    "contact": {
        "email": "eduke121@kddi.com",
        "phone": "+61-121-723-2057",
        "socMedia": {
            "skype": "eduke121@kddi.com@skype.com"
        }
    },
    "login": {
        "username": "eduke",
        "oauth2": "eduke@skype.com",
        "password": "$2y$10$6Npmf7Nu1FhS2jlUWDT9C.JkDLSSaBwzYujWWjeZCbaySbGZhQheS"
    },
    "otherContact": {
        "emails": [
            "eduke121@lguplus.com",
            "eduke121@relcom.com"
        ],
        "phoneNumbers": [
            "+61-121-172-2878",
            "+61-121-476-9502"
        ],
        "socMedias": [
            {
                "line": "eduke121@lguplus.com@line.com"
            },
            {
                "skype": "eduke121@relcom.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-03-11"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CLIFESTR3329",
    "name": {
        "title": "Mr",
        "first": "Clifford",
        "middle": "G",
        "last": "Estrada",
        "suffix": null
    },
    "address": {
        "streetAddress": "9217 Green Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Aylestone",
        "stateProvince": "England",
        "locality": "Leicestershire",
        "country": "GB",
        "postalCode": "LE2",
        "latitude": "52.6042",
        "longitude": "-1.1463"
    },
    "contact": {
        "email": "cestrada122@swisscom.com",
        "phone": "+61-122-996-3329",
        "socMedia": {
            "line": "cestrada122@swisscom.com@line.com"
        }
    },
    "login": {
        "username": "cestrada",
        "oauth2": "cestrada@line.com",
        "password": "$2y$10$zGVHRIhsq.KWiaeFjEDLPuEfnqmQhN0nwVR0JgU6jApA0Klbpex3y"
    },
    "otherContact": {
        "emails": [
            "cestrada122@optus.com",
            "cestrada122@jio.com",
            "cestrada122@centurylink.com"
        ],
        "phoneNumbers": [
            "+61-122-047-4012",
            "+61-122-239-2942",
            "+61-122-178-4365"
        ],
        "socMedias": [
            {
                "line": "cestrada122@optus.com@line.com"
            },
            {
                "facebook": "cestrada122@jio.com@facebook.com"
            },
            {
                "line": "cestrada122@centurylink.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-04-04"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MYRIESPI9977",
    "name": {
        "title": null,
        "first": "Myriam",
        "middle": null,
        "last": "Espinoza",
        "suffix": null
    },
    "address": {
        "streetAddress": "3098 Little Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nuuk",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3900",
        "latitude": "64.1738",
        "longitude": "-51.7384"
    },
    "contact": {
        "email": "mespinoz123@telenor.com",
        "phone": "+61-123-444-9977",
        "socMedia": []
    },
    "login": {
        "username": "mespinoz",
        "oauth2": null,
        "password": "$2y$10$5Z5QvpxIr0eZsJ0WUt1CYugd2tCIM8G5zT\/Mkf8B2DPPZOCS2GEEy"
    },
    "otherContact": {
        "emails": [
            "mespinoz123@apicnet.com",
            "mespinoz123@sprint.com",
            "mespinoz123@orstom.com"
        ],
        "phoneNumbers": [
            "+61-123-270-4445",
            "+61-123-900-2766",
            "+61-123-173-4909"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-12-04"
    },
    "totalBooked": 44,
    "discount": 0.09
});
db.customers.insertOne(
{
    "customerKey": "RAYLSHAF3154",
    "name": {
        "title": "Ms",
        "first": "Raylene",
        "middle": "Z",
        "last": "Shaffer",
        "suffix": null
    },
    "address": {
        "streetAddress": "2299 Little Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Marishader",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "IV51",
        "latitude": "57.5153",
        "longitude": "-6.3185"
    },
    "contact": {
        "email": "rshaffer124@nii.com",
        "phone": "+61-124-075-3154",
        "socMedia": {
            "google": "rshaffer124@nii.com@google.com"
        }
    },
    "login": {
        "username": "rshaffer",
        "oauth2": "rshaffer@google.com",
        "password": "$2y$10$idGytlhgKMkr4wWrj37JXePEjzSuA2Ckm3f\/.CSeKAfUQp0Q9tUWu"
    },
    "otherContact": {
        "emails": [
            "rshaffer124@cerist.com",
            "rshaffer124@turkcell.com",
            "rshaffer124@econnect.com"
        ],
        "phoneNumbers": [
            "+61-124-558-2866",
            "+61-124-580-8673",
            "+61-124-228-5483"
        ],
        "socMedias": [
            {
                "skype": "rshaffer124@cerist.com@skype.com"
            },
            {
                "twitter": "rshaffer124@turkcell.com@twitter.com"
            },
            {
                "twitter": "rshaffer124@econnect.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-02-01"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ABBIHARD8309",
    "name": {
        "title": "Ms",
        "first": "Abbie",
        "middle": "W",
        "last": "Hardin",
        "suffix": null
    },
    "address": {
        "streetAddress": "3320 Blue Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Grottammare",
        "stateProvince": "MH",
        "locality": "Ascoli Piceno",
        "country": "IT",
        "postalCode": "63066",
        "latitude": "42.9818",
        "longitude": "13.8676"
    },
    "contact": {
        "email": "ahardin125@eunet.com",
        "phone": "+61-125-460-8309",
        "socMedia": {
            "facebook": "ahardin125@eunet.com@facebook.com"
        }
    },
    "login": {
        "username": "ahardin",
        "oauth2": "ahardin@facebook.com",
        "password": "$2y$10$eF7iIoeAAjxbjUzdAVwBsu4frEgTqFFQr6DWqnxMV6m2PR9xUP456"
    },
    "otherContact": {
        "emails": [
            "ahardin125@ktc.com",
            "ahardin125@greennet.com"
        ],
        "phoneNumbers": [
            "+61-125-525-7725",
            "+61-125-686-7046"
        ],
        "socMedias": [
            {
                "twitter": "ahardin125@ktc.com@twitter.com"
            },
            {
                "line": "ahardin125@greennet.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-02-12"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "STEPFOWL1054",
    "name": {
        "title": null,
        "first": "Stephan",
        "middle": null,
        "last": "Fowler",
        "suffix": null
    },
    "address": {
        "streetAddress": "6673 Red Mountain Avenue",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": "72",
        "city": "North York (Sweeney Park \/ Wigmore Park)",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "M4A",
        "latitude": "43.7276",
        "longitude": "-79.3148"
    },
    "contact": {
        "email": "sfowler126@worldnet.com",
        "phone": "+61-126-170-1054",
        "socMedia": []
    },
    "login": {
        "username": "sfowler",
        "oauth2": null,
        "password": "$2y$10$XDiAW3FkF1JfvyxMQikPNuF3H1zNPXYh3zHXYTYRYhugKsVn6t0Qm"
    },
    "otherContact": {
        "emails": [
            "sfowler126@maxcomm.com"
        ],
        "phoneNumbers": [
            "+61-126-204-9692"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-03-19"
    },
    "totalBooked": 64,
    "discount": 0.184
});
db.customers.insertOne(
{
    "customerKey": "WESTHERM4718",
    "name": {
        "title": "Mr",
        "first": "Weston",
        "middle": "B",
        "last": "Herman",
        "suffix": null
    },
    "address": {
        "streetAddress": "7167 Big Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vrutok",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1231",
        "latitude": "41.7686",
        "longitude": "20.8392"
    },
    "contact": {
        "email": "wherman127@bifty.com",
        "phone": "+61-127-298-4718",
        "socMedia": {
            "google": "wherman127@bifty.com@google.com"
        }
    },
    "login": {
        "username": "wherman",
        "oauth2": "wherman@google.com",
        "password": "$2y$10$YmKEuPYrCbisjaFEoWc5eu0R1CIle3Gl5s0ShSE\/MYzsRBWjRi8de"
    },
    "otherContact": {
        "emails": [
            "wherman127@cci.com",
            "wherman127@ntt.com",
            "wherman127@belgacom.com"
        ],
        "phoneNumbers": [
            "+61-127-781-1685",
            "+61-127-221-1230",
            "+61-127-710-2808"
        ],
        "socMedias": [
            {
                "linkedin": "wherman127@cci.com@linkedin.com"
            },
            {
                "facebook": "wherman127@ntt.com@facebook.com"
            },
            {
                "google": "wherman127@belgacom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-12-15"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BARISAND7470",
    "name": {
        "title": "Ms",
        "first": "Bari",
        "middle": "W",
        "last": "Sanders",
        "suffix": null
    },
    "address": {
        "streetAddress": "3435 Big Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Leiter",
        "stateProvince": "WY",
        "locality": "Sheridan",
        "country": "US",
        "postalCode": "82837",
        "latitude": "44.718",
        "longitude": "-106.2692"
    },
    "contact": {
        "email": "bsanders128@telstra.com",
        "phone": "+61-128-696-7470",
        "socMedia": {
            "google": "bsanders128@telstra.com@google.com"
        }
    },
    "login": {
        "username": "bsanders",
        "oauth2": "bsanders@google.com",
        "password": "$2y$10$o88\/kyBj.YbpYH4QrDwkl.jsYpdC\/IO7ONbwKmi9rIu7GSTWPQJa."
    },
    "otherContact": {
        "emails": [
            "bsanders128@pldt.com"
        ],
        "phoneNumbers": [
            "+61-128-544-9887"
        ],
        "socMedias": [
            {
                "line": "bsanders128@pldt.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-06-18"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BOPAYN2549",
    "name": {
        "title": null,
        "first": "Bo",
        "middle": null,
        "last": "Payne",
        "suffix": null
    },
    "address": {
        "streetAddress": "7017 Winding Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Orlando",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "1806",
        "latitude": "-26.25",
        "longitude": "27.9167"
    },
    "contact": {
        "email": "bpayne129@telus.com",
        "phone": "+61-129-576-2549",
        "socMedia": []
    },
    "login": {
        "username": "bpayne",
        "oauth2": null,
        "password": "$2y$10$YdX1dnqqW4RVT8Nta5.IOOz8KalSfsjFBWPNJYUaCwkIsUa7YkNFu"
    },
    "otherContact": {
        "emails": [
            "bpayne129@telstra.com",
            "bpayne129@etisalat.com"
        ],
        "phoneNumbers": [
            "+61-129-511-5881",
            "+61-129-263-4761"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-04-13"
    },
    "totalBooked": 49,
    "discount": 0.047
});
db.customers.insertOne(
{
    "customerKey": "SHASEATO3538",
    "name": {
        "title": "Ms",
        "first": "Shasta",
        "middle": "C",
        "last": "Eaton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3994 Big Mound Way",
        "buildingName": "Building F5",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Alkham",
        "stateProvince": "England",
        "locality": "Kent",
        "country": "GB",
        "postalCode": "CT15",
        "latitude": "51.1351",
        "longitude": "1.2232"
    },
    "contact": {
        "email": "seaton130@etisalat.com",
        "phone": "+61-130-095-3538",
        "socMedia": {
            "skype": "seaton130@etisalat.com@skype.com"
        }
    },
    "login": {
        "username": "seaton",
        "oauth2": "seaton@skype.com",
        "password": "$2y$10$jH\/H.a5uLvIKQzLtarm6jOU84mra5hqLyEPdSlhzNINmsHIP432da"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-01-18"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GRACHUMP2473",
    "name": {
        "title": "Ms",
        "first": "Grace",
        "middle": "F",
        "last": "Humphrey",
        "suffix": null
    },
    "address": {
        "streetAddress": "8710 Green River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Osterburg",
        "stateProvince": "ST",
        "locality": "Landkreis Stendal",
        "country": "DE",
        "postalCode": "39606",
        "latitude": "52.7872",
        "longitude": "11.753"
    },
    "contact": {
        "email": "ghumphre131@access.com",
        "phone": "+61-131-539-2473",
        "socMedia": {
            "skype": "ghumphre131@access.com@skype.com"
        }
    },
    "login": {
        "username": "ghumphre",
        "oauth2": "ghumphre@skype.com",
        "password": "$2y$10$YOwEAo9uWPvp4Gl98mBz5.UCqpIF7Sk907O3ZJZPmCYfEkKfQBj9e"
    },
    "otherContact": {
        "emails": [
            "ghumphre131@bt.com",
            "ghumphre131@movil.com",
            "ghumphre131@airtel.com"
        ],
        "phoneNumbers": [
            "+61-131-689-4326",
            "+61-131-742-4088",
            "+61-131-556-1748"
        ],
        "socMedias": [
            {
                "linkedin": "ghumphre131@bt.com@linkedin.com"
            },
            {
                "twitter": "ghumphre131@movil.com@twitter.com"
            },
            {
                "skype": "ghumphre131@airtel.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-10-12"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JERRMART0067",
    "name": {
        "title": null,
        "first": "Jerry",
        "middle": null,
        "last": "Martin",
        "suffix": null
    },
    "address": {
        "streetAddress": "8460 Little Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "7E",
        "city": "Oshkosh",
        "stateProvince": "WI",
        "locality": "Winnebago",
        "country": "US",
        "postalCode": "54901",
        "latitude": "44.022",
        "longitude": "-88.5436"
    },
    "contact": {
        "email": "jmartin132@maxcomm.com",
        "phone": "+61-132-050-0067",
        "socMedia": []
    },
    "login": {
        "username": "jmartin",
        "oauth2": null,
        "password": "$2y$10$qeAtLhEdL6gCgW7Sy7WFLegupDQ89mlJ6wHU.dmSw6TBOxnTpQ2rO"
    },
    "otherContact": {
        "emails": [
            "jmartin132@telekom.com",
            "jmartin132@orange.com"
        ],
        "phoneNumbers": [
            "+61-132-502-8656",
            "+61-132-860-1510"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-06-05"
    },
    "totalBooked": 30,
    "discount": 0.09
});
db.customers.insertOne(
{
    "customerKey": "GEORREID4997",
    "name": {
        "title": "Ms",
        "first": "Georgianne",
        "middle": "M",
        "last": "Reid",
        "suffix": null
    },
    "address": {
        "streetAddress": "6109 Red Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0413\u043e\u043d\u0447\u0430\u0440\u0456\u0432\u043a\u0430 (\u0413\u043e\u043d\u0447\u0430\u0440\u0456\u0432\u0441\u044c\u043a\u0430 \u0441\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0440\u0430\u0434\u0430)",
        "stateProvince": "Monastyryskyi",
        "locality": "Monastyryskyi",
        "country": "UA",
        "postalCode": "48332",
        "latitude": "49.6419",
        "longitude": "26.8203"
    },
    "contact": {
        "email": "greid133@lguplus.com",
        "phone": "+61-133-205-4997",
        "socMedia": {
            "line": "greid133@lguplus.com@line.com"
        }
    },
    "login": {
        "username": "greid",
        "oauth2": "greid@line.com",
        "password": "$2y$10$590IClEr3zyQ7sY5iO\/Iy.mrAlCp7fXEb300BrelWJzlUUCXoFieu"
    },
    "otherContact": {
        "emails": [
            "greid133@ktc.com",
            "greid133@telenor.com",
            "greid133@millicom.com"
        ],
        "phoneNumbers": [
            "+61-133-630-4012",
            "+61-133-065-3177",
            "+61-133-763-2124"
        ],
        "socMedias": [
            {
                "google": "greid133@ktc.com@google.com"
            },
            {
                "skype": "greid133@telenor.com@skype.com"
            },
            {
                "facebook": "greid133@millicom.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-11-26"
    },
    "totalBooked": 64,
    "discount": 0.132
});
db.customers.insertOne(
{
    "customerKey": "DANIGUEV7524",
    "name": {
        "title": "Mr",
        "first": "Danilo",
        "middle": "Q",
        "last": "Guevara",
        "suffix": null
    },
    "address": {
        "streetAddress": "1904 Red Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Plymouth",
        "stateProvince": "FL",
        "locality": "Orange",
        "country": "US",
        "postalCode": "32768",
        "latitude": "28.6985",
        "longitude": "-81.5698"
    },
    "contact": {
        "email": "dguevara134@millicom.com",
        "phone": "+61-134-074-7524",
        "socMedia": {
            "skype": "dguevara134@millicom.com@skype.com"
        }
    },
    "login": {
        "username": "dguevara",
        "oauth2": "dguevara@skype.com",
        "password": "$2y$10$irVQ4zNdO1o\/lMsCDq0WyOpFn2eaxkCWpFV15BLmkcEZ97iwWab9m"
    },
    "otherContact": {
        "emails": [
            "dguevara134@cci.com"
        ],
        "phoneNumbers": [
            "+61-134-862-3161"
        ],
        "socMedias": [
            {
                "google": "dguevara134@cci.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-11-30"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ARMACOMP6957",
    "name": {
        "title": null,
        "first": "Armanda",
        "middle": null,
        "last": "Compton",
        "suffix": null
    },
    "address": {
        "streetAddress": "7859 Short Ditch Circle",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "\u041a\u0435\u0443\u043b\u044c",
        "stateProvince": "\u0423\u0421\u0422\u042c-\u0418\u041b\u0418\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u0423\u0421\u0422\u042c-\u0418\u041b\u0418\u041c\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "666652",
        "latitude": "58.44",
        "longitude": "102.8"
    },
    "contact": {
        "email": "acompton135@icom.com",
        "phone": "+61-135-226-6957",
        "socMedia": []
    },
    "login": {
        "username": "acompton",
        "oauth2": null,
        "password": "$2y$10$3BIHrCj.PQrAaHfPeVy1hevoAvFHcwiqvDNfOZo4TlPP9FtLe.N1."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-06-24"
    },
    "totalBooked": 37,
    "discount": 0.05
});
db.customers.insertOne(
{
    "customerKey": "ADRITURN5423",
    "name": {
        "title": "Mr",
        "first": "Adrian",
        "middle": "P",
        "last": "Turner",
        "suffix": null
    },
    "address": {
        "streetAddress": "8400 Short River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Princeton",
        "stateProvince": "TX",
        "locality": "Collin",
        "country": "US",
        "postalCode": "75407",
        "latitude": "33.1555",
        "longitude": "-96.4981"
    },
    "contact": {
        "email": "aturner136@singtel.com",
        "phone": "+61-136-740-5423",
        "socMedia": {
            "facebook": "aturner136@singtel.com@facebook.com"
        }
    },
    "login": {
        "username": "aturner",
        "oauth2": "aturner@facebook.com",
        "password": "$2y$10$P\/QxpPA7U2Dp0c\/i2GC7V.h0heXPcW7ASUbhYw4sGBymJYw570.6O"
    },
    "otherContact": {
        "emails": [
            "aturner136@frontier.com",
            "aturner136@orstom.com",
            "aturner136@etisalat.com"
        ],
        "phoneNumbers": [
            "+61-136-339-5193",
            "+61-136-712-7204",
            "+61-136-574-1005"
        ],
        "socMedias": [
            {
                "skype": "aturner136@frontier.com@skype.com"
            },
            {
                "facebook": "aturner136@orstom.com@facebook.com"
            },
            {
                "line": "aturner136@etisalat.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-08-13"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CIERPATT1455",
    "name": {
        "title": "Ms",
        "first": "Ciera",
        "middle": "G",
        "last": "Patterson",
        "suffix": null
    },
    "address": {
        "streetAddress": "764 Blue Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "LA PRIMERA",
        "stateProvince": "L",
        "locality": "La Pampa",
        "country": "AR",
        "postalCode": "8206",
        "latitude": "-38.0778",
        "longitude": "-63.6222"
    },
    "contact": {
        "email": "cpatters137@telstra.com",
        "phone": "+61-137-740-1455",
        "socMedia": {
            "skype": "cpatters137@telstra.com@skype.com"
        }
    },
    "login": {
        "username": "cpatters",
        "oauth2": "cpatters@skype.com",
        "password": "$2y$10$TDJADo9KxUUqZ4DXLgbw\/uliSUrV5slx\/uieu6ya1o9Dmh1pZB5My"
    },
    "otherContact": {
        "emails": [
            "cpatters137@telia.com",
            "cpatters137@telstra.com",
            "cpatters137@sktelecom.com"
        ],
        "phoneNumbers": [
            "+61-137-328-5514",
            "+61-137-075-0138",
            "+61-137-452-0867"
        ],
        "socMedias": [
            {
                "google": "cpatters137@telia.com@google.com"
            },
            {
                "google": "cpatters137@telstra.com@google.com"
            },
            {
                "google": "cpatters137@sktelecom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1940-06-21"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JEROYATE1934",
    "name": {
        "title": null,
        "first": "Jerold",
        "middle": null,
        "last": "Yates",
        "suffix": null
    },
    "address": {
        "streetAddress": "9072 Blue Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C4",
        "city": "Monkwood",
        "stateProvince": "England",
        "locality": "Hampshire",
        "country": "GB",
        "postalCode": "SO24",
        "latitude": "51.0941",
        "longitude": "-1.1486"
    },
    "contact": {
        "email": "jyates138@eunet.com",
        "phone": "+61-138-642-1934",
        "socMedia": []
    },
    "login": {
        "username": "jyates",
        "oauth2": null,
        "password": "$2y$10$nwvFOvgKam\/dB1tJIEB8EeK9voXei.V\/dsaJxNTAqBtIDVCvHBgHi"
    },
    "otherContact": {
        "emails": [
            "jyates138@telesystems.com",
            "jyates138@nii.com",
            "jyates138@unicom.com"
        ],
        "phoneNumbers": [
            "+61-138-911-6609",
            "+61-138-676-6842",
            "+61-138-895-8153"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-06-21"
    },
    "totalBooked": 13,
    "discount": 0.093
});
db.customers.insertOne(
{
    "customerKey": "ROSEWEST7401",
    "name": {
        "title": "Ms",
        "first": "Rosette",
        "middle": "M",
        "last": "West",
        "suffix": null
    },
    "address": {
        "streetAddress": "5759 Green Tree Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Killinkoski",
        "stateProvince": "Virrat",
        "locality": "Yl\u00e4-Pirkanmaa",
        "country": "FI",
        "postalCode": "34980",
        "latitude": "62.4093",
        "longitude": "23.8723"
    },
    "contact": {
        "email": "rwest139@swisscom.com",
        "phone": "+61-139-896-7401",
        "socMedia": {
            "line": "rwest139@swisscom.com@line.com"
        }
    },
    "login": {
        "username": "rwest",
        "oauth2": "rwest@line.com",
        "password": "$2y$10$h9k0zFsTwOrQb1e7x4fF8OnKFtNhCb4jX9XlcYq6wAlqxfnlw.Ubu"
    },
    "otherContact": {
        "emails": [
            "rwest139@zain.com"
        ],
        "phoneNumbers": [
            "+61-139-492-9948"
        ],
        "socMedias": [
            {
                "linkedin": "rwest139@zain.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-01-18"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ZANDGRAH2657",
    "name": {
        "title": "Ms",
        "first": "Zandra",
        "middle": "Z",
        "last": "Graham",
        "suffix": null
    },
    "address": {
        "streetAddress": "8458 Big Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Garfield",
        "stateProvince": "VIC",
        "locality": "VIC FAR COUNTRY",
        "country": "AU",
        "postalCode": "3814",
        "latitude": "-38.0899",
        "longitude": "145.675"
    },
    "contact": {
        "email": "zgraham140@daxnet.com",
        "phone": "+61-140-315-2657",
        "socMedia": {
            "line": "zgraham140@daxnet.com@line.com"
        }
    },
    "login": {
        "username": "zgraham",
        "oauth2": "zgraham@line.com",
        "password": "$2y$10$ElEW37gdRvQWUfNjmf4\/n.ZOGPvREBX8fPHTSDUkGhrxzGmlYFYdK"
    },
    "otherContact": {
        "emails": [
            "zgraham140@seednet.com",
            "zgraham140@att.com",
            "zgraham140@telekom.com"
        ],
        "phoneNumbers": [
            "+61-140-907-7483",
            "+61-140-290-1710",
            "+61-140-910-1895"
        ],
        "socMedias": [
            {
                "linkedin": "zgraham140@seednet.com@linkedin.com"
            },
            {
                "twitter": "zgraham140@att.com@twitter.com"
            },
            {
                "facebook": "zgraham140@telekom.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-04-16"
    },
    "totalBooked": 41,
    "discount": 0.11800000000000001
});
db.customers.insertOne(
{
    "customerKey": "VANDWANG1720",
    "name": {
        "title": null,
        "first": "Vanda",
        "middle": null,
        "last": "Wang",
        "suffix": null
    },
    "address": {
        "streetAddress": "4642 Blue Mound Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Veverita",
        "stateProvince": "Calarasi",
        "locality": "Calarasi",
        "country": "MD",
        "postalCode": "MD-3631",
        "latitude": "47.3442",
        "longitude": "28.1056"
    },
    "contact": {
        "email": "vwang141@apicnet.com",
        "phone": "+61-141-684-1720",
        "socMedia": []
    },
    "login": {
        "username": "vwang",
        "oauth2": null,
        "password": "$2y$10$M6qQE4Y3sSLNuWcafOtE.ONerFE6E9.DL.iGrHGvztWLNGdw7NEjy"
    },
    "otherContact": {
        "emails": [
            "vwang141@mtn.com"
        ],
        "phoneNumbers": [
            "+61-141-378-4178"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-09-29"
    },
    "totalBooked": 50,
    "discount": 0.044
});
db.customers.insertOne(
{
    "customerKey": "JOSIVANG2778",
    "name": {
        "title": "Mr",
        "first": "Josiah",
        "middle": "Q",
        "last": "Vang",
        "suffix": null
    },
    "address": {
        "streetAddress": "2346 Short Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint Anne",
        "stateProvince": "IL",
        "locality": "Kankakee",
        "country": "US",
        "postalCode": "60964",
        "latitude": "41.0487",
        "longitude": "-87.6564"
    },
    "contact": {
        "email": "jvang142@nordnet.com",
        "phone": "+61-142-355-2778",
        "socMedia": {
            "line": "jvang142@nordnet.com@line.com"
        }
    },
    "login": {
        "username": "jvang",
        "oauth2": "jvang@line.com",
        "password": "$2y$10$XkITIzDoi8DmeBBmmNyp5uS2oWBvT2a6qIX0QvQwg4sKaDN1ErZe6"
    },
    "otherContact": {
        "emails": [
            "jvang142@belgacom.com"
        ],
        "phoneNumbers": [
            "+61-142-673-8268"
        ],
        "socMedias": [
            {
                "twitter": "jvang142@belgacom.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-03-12"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ALEXHOUS0709",
    "name": {
        "title": "Ms",
        "first": "Alexandra",
        "middle": "X",
        "last": "Houston",
        "suffix": null
    },
    "address": {
        "streetAddress": "2057 Long Stream Drive",
        "buildingName": "Building 11",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Danmarkshavn",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3984",
        "latitude": "76.8",
        "longitude": "-18.6"
    },
    "contact": {
        "email": "ahouston143@telecomitalia.com",
        "phone": "+61-143-955-0709",
        "socMedia": {
            "google": "ahouston143@telecomitalia.com@google.com"
        }
    },
    "login": {
        "username": "ahouston",
        "oauth2": "ahouston@google.com",
        "password": "$2y$10$9DrH0uzqVk5goMqNKpoztuOQafi14SziDMbsJONG\/8tVYUSHcOIxe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-03-24"
    },
    "totalBooked": 8,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MIRTHURS6957",
    "name": {
        "title": null,
        "first": "Mirtha",
        "middle": null,
        "last": "Hurst",
        "suffix": null
    },
    "address": {
        "streetAddress": "6309 Short Canyon Avenue",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": "09",
        "city": "Wilburn",
        "stateProvince": "AR",
        "locality": "Cleburne",
        "country": "US",
        "postalCode": "72179",
        "latitude": "35.5106",
        "longitude": "-91.8648"
    },
    "contact": {
        "email": "mhurst144@cubenet.com",
        "phone": "+61-144-010-6957",
        "socMedia": []
    },
    "login": {
        "username": "mhurst",
        "oauth2": null,
        "password": "$2y$10$lZ1NdgUxmltlF96gLDI7r.n0pEmd3G8GLU8p6KpQr63VRuJWUoSfq"
    },
    "otherContact": {
        "emails": [
            "mhurst144@relcom.com",
            "mhurst144@telenor.com"
        ],
        "phoneNumbers": [
            "+61-144-304-3842",
            "+61-144-702-5101"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-06-01"
    },
    "totalBooked": 23,
    "discount": 0.046
});
db.customers.insertOne(
{
    "customerKey": "MICHONEI0767",
    "name": {
        "title": "Mr",
        "first": "Michael",
        "middle": "F",
        "last": "Oneill",
        "suffix": null
    },
    "address": {
        "streetAddress": "8104 Short Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Staud\u017ei",
        "stateProvince": "Gaigalavas pag.",
        "locality": "Gaigalavas pag.",
        "country": "LV",
        "postalCode": "LV-4618",
        "latitude": "56.6886",
        "longitude": "27.0907"
    },
    "contact": {
        "email": "moneill145@telus.com",
        "phone": "+61-145-352-0767",
        "socMedia": {
            "facebook": "moneill145@telus.com@facebook.com"
        }
    },
    "login": {
        "username": "moneill",
        "oauth2": "moneill@facebook.com",
        "password": "$2y$10$PCwCYoKapY.eG5\/aCCZgbOXYsla7ZyOsrl5jmWbHbr32DfZQhFU\/e"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-10-03"
    },
    "totalBooked": 2,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JOHAFLEM3616",
    "name": {
        "title": "Ms",
        "first": "Johanna",
        "middle": "W",
        "last": "Fleming",
        "suffix": null
    },
    "address": {
        "streetAddress": "480 Red Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Narellan",
        "stateProvince": "NSW",
        "locality": "CAMPBELLTOWN",
        "country": "AU",
        "postalCode": "2567",
        "latitude": "-34.0333",
        "longitude": "150.7333"
    },
    "contact": {
        "email": "jfleming146@belgacom.com",
        "phone": "+61-146-986-3616",
        "socMedia": {
            "facebook": "jfleming146@belgacom.com@facebook.com"
        }
    },
    "login": {
        "username": "jfleming",
        "oauth2": "jfleming@facebook.com",
        "password": "$2y$10$5rXEE.Z2od6.KU8.JQnnueCLSoU\/ay8Ti1\/O5p1pJvKCvGNtTE4gi"
    },
    "otherContact": {
        "emails": [
            "jfleming146@belgacom.com"
        ],
        "phoneNumbers": [
            "+61-146-901-7292"
        ],
        "socMedias": [
            {
                "google": "jfleming146@belgacom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-04-14"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TAYNJENN3801",
    "name": {
        "title": null,
        "first": "Tayna",
        "middle": null,
        "last": "Jennings",
        "suffix": null
    },
    "address": {
        "streetAddress": "1372 Blue Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Santiago",
        "stateProvince": "Santiago",
        "locality": "Puriscal",
        "country": "CR",
        "postalCode": "10401",
        "latitude": "9.8202",
        "longitude": "-84.3063"
    },
    "contact": {
        "email": "tjenning147@megafon.com",
        "phone": "+61-147-120-3801",
        "socMedia": []
    },
    "login": {
        "username": "tjenning",
        "oauth2": null,
        "password": "$2y$10$vo8lcG\/hmrbzMKEgeQbuC.2HunM.cQUJn5a27SPsUMtoh4bx04DtC"
    },
    "otherContact": {
        "emails": [
            "tjenning147@icom.com",
            "tjenning147@worldnet.com",
            "tjenning147@sprint.com"
        ],
        "phoneNumbers": [
            "+61-147-858-5172",
            "+61-147-347-0314",
            "+61-147-089-2931"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-07-12"
    },
    "totalBooked": 66,
    "discount": 0.109
});
db.customers.insertOne(
{
    "customerKey": "LOGADRAK0937",
    "name": {
        "title": "Mr",
        "first": "Logan",
        "middle": "R",
        "last": "Drake",
        "suffix": null
    },
    "address": {
        "streetAddress": "9399 Long Bend Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mooroopna North West",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3616",
        "latitude": "-36.4455",
        "longitude": "145.1411"
    },
    "contact": {
        "email": "ldrake148@telecom.com",
        "phone": "+61-148-632-0937",
        "socMedia": {
            "google": "ldrake148@telecom.com@google.com"
        }
    },
    "login": {
        "username": "ldrake",
        "oauth2": "ldrake@google.com",
        "password": "$2y$10$Y08h8vvE29P9K66zTa83MuKp0MFIXzqryks5j6dF3MKtFGlQ02XY2"
    },
    "otherContact": {
        "emails": [
            "ldrake148@oi.com",
            "ldrake148@openworld.com",
            "ldrake148@telia.com"
        ],
        "phoneNumbers": [
            "+61-148-704-5615",
            "+61-148-201-9281",
            "+61-148-463-6539"
        ],
        "socMedias": [
            {
                "skype": "ldrake148@oi.com@skype.com"
            },
            {
                "skype": "ldrake148@openworld.com@skype.com"
            },
            {
                "linkedin": "ldrake148@telia.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-02-10"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TINITUCK7080",
    "name": {
        "title": "Ms",
        "first": "Tinisha",
        "middle": "X",
        "last": "Tucker",
        "suffix": null
    },
    "address": {
        "streetAddress": "81 Blue River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cs\u0151v\u00e1r",
        "stateProvince": "PE",
        "locality": "Pest",
        "country": "HU",
        "postalCode": "2615",
        "latitude": "47.8167",
        "longitude": "19.3333"
    },
    "contact": {
        "email": "ttucker149@kddi.com",
        "phone": "+61-149-017-7080",
        "socMedia": {
            "skype": "ttucker149@kddi.com@skype.com"
        }
    },
    "login": {
        "username": "ttucker",
        "oauth2": "ttucker@skype.com",
        "password": "$2y$10$Yru\/r.G3MbFQH9NS3DAeWeonxWu2V\/FEQa51\/2BSEwnNH\/IVmajg6"
    },
    "otherContact": {
        "emails": [
            "ttucker149@telstra.com"
        ],
        "phoneNumbers": [
            "+61-149-734-0882"
        ],
        "socMedias": [
            {
                "twitter": "ttucker149@telstra.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-09-25"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BERNMORA8554",
    "name": {
        "title": null,
        "first": "Bernard",
        "middle": null,
        "last": "Moran",
        "suffix": null
    },
    "address": {
        "streetAddress": "66 Short Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "ED",
        "city": "Stanford Merthyr",
        "stateProvince": "NSW",
        "locality": "HUNTER",
        "country": "AU",
        "postalCode": "2327",
        "latitude": "-32.8247",
        "longitude": "151.4936"
    },
    "contact": {
        "email": "bmoran150@lookdata.com",
        "phone": "+61-150-232-8554",
        "socMedia": []
    },
    "login": {
        "username": "bmoran",
        "oauth2": null,
        "password": "$2y$10$OfksRa3hj1vV97Enlm7uS.g7Do.Y9f.bRQgtfHBD\/g\/tljn9CRa3."
    },
    "otherContact": {
        "emails": [
            "bmoran150@chunghwa.com",
            "bmoran150@access.com",
            "bmoran150@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-150-127-0152",
            "+61-150-119-0815",
            "+61-150-682-7907"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-04-17"
    },
    "totalBooked": 6,
    "discount": 0.08
});
db.customers.insertOne(
{
    "customerKey": "MAURCOHE7905",
    "name": {
        "title": "Ms",
        "first": "Maureen",
        "middle": "Y",
        "last": "Cohen",
        "suffix": null
    },
    "address": {
        "streetAddress": "3037 Winding Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Riach\u00e3o do Dantas",
        "stateProvince": "Sergipe",
        "locality": "Sergipe",
        "country": "BR",
        "postalCode": "49320-000",
        "latitude": "-11.0128",
        "longitude": "-37.7868"
    },
    "contact": {
        "email": "mcohen151@ccs.com",
        "phone": "+61-151-684-7905",
        "socMedia": {
            "linkedin": "mcohen151@ccs.com@linkedin.com"
        }
    },
    "login": {
        "username": "mcohen",
        "oauth2": "mcohen@linkedin.com",
        "password": "$2y$10$MUo3KcEb6ZrJ9H1BZYCbjuVooec5gURSEXjDofuiiPBvOpZyEXF1W"
    },
    "otherContact": {
        "emails": [
            "mcohen151@maxcomm.com"
        ],
        "phoneNumbers": [
            "+61-151-591-9966"
        ],
        "socMedias": [
            {
                "line": "mcohen151@maxcomm.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-02-13"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "RENAKEIT7465",
    "name": {
        "title": "Ms",
        "first": "Renay",
        "middle": "Y",
        "last": "Keith",
        "suffix": null
    },
    "address": {
        "streetAddress": "4848 Big Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gothane Doniwade",
        "stateProvince": "Rajapur",
        "locality": "Ratnagiri",
        "country": "IN",
        "postalCode": "416705",
        "latitude": "18.434",
        "longitude": "75.1714"
    },
    "contact": {
        "email": "rkeith152@ntt.com",
        "phone": "+61-152-046-7465",
        "socMedia": {
            "skype": "rkeith152@ntt.com@skype.com"
        }
    },
    "login": {
        "username": "rkeith",
        "oauth2": "rkeith@skype.com",
        "password": "$2y$10$kZmcwdKUZDhedhklwJ5R1ex\/Wj1NNvEzMZAoeweW2A0X\/\/GmAWVEW"
    },
    "otherContact": {
        "emails": [
            "rkeith152@ote.com",
            "rkeith152@rogers.com"
        ],
        "phoneNumbers": [
            "+61-152-247-4370",
            "+61-152-357-6842"
        ],
        "socMedias": [
            {
                "line": "rkeith152@ote.com@line.com"
            },
            {
                "twitter": "rkeith152@rogers.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-05-25"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "KEENHAYE6337",
    "name": {
        "title": null,
        "first": "Keenan",
        "middle": null,
        "last": "Hayes",
        "suffix": null
    },
    "address": {
        "streetAddress": "2117 Winding Mound Ride",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": null,
        "city": "Madan",
        "stateProvince": "H",
        "locality": "Netrakona",
        "country": "BD",
        "postalCode": "2490",
        "latitude": "24.7158",
        "longitude": "90.9489"
    },
    "contact": {
        "email": "khayes153@lguplus.com",
        "phone": "+61-153-105-6337",
        "socMedia": []
    },
    "login": {
        "username": "khayes",
        "oauth2": null,
        "password": "$2y$10$3uebCkNesM\/rxt2t.mN7HORrqxmESf0vcqysBjj.ye85b07ksT.lC"
    },
    "otherContact": {
        "emails": [
            "khayes153@telecom.com",
            "khayes153@megafon.com"
        ],
        "phoneNumbers": [
            "+61-153-760-8650",
            "+61-153-794-0899"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-03-02"
    },
    "totalBooked": 41,
    "discount": 0.059000000000000004
});
db.customers.insertOne(
{
    "customerKey": "BERTHARD1929",
    "name": {
        "title": "Mr",
        "first": "Bert",
        "middle": "O",
        "last": "Harding",
        "suffix": null
    },
    "address": {
        "streetAddress": "1475 Winding Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Amla",
        "stateProvince": "Hiranagar",
        "locality": "Kathua",
        "country": "IN",
        "postalCode": "184144",
        "latitude": "32.4913",
        "longitude": "75.3387"
    },
    "contact": {
        "email": "bharding154@access.com",
        "phone": "+61-154-644-1929",
        "socMedia": {
            "linkedin": "bharding154@access.com@linkedin.com"
        }
    },
    "login": {
        "username": "bharding",
        "oauth2": "bharding@linkedin.com",
        "password": "$2y$10$Lcr14uCBzoBiBndwk...P..\/vNqoB8wRcK91MXYHY7WqCdP\/QcfWi"
    },
    "otherContact": {
        "emails": [
            "bharding154@orstom.com",
            "bharding154@telefonica.com"
        ],
        "phoneNumbers": [
            "+61-154-688-1714",
            "+61-154-690-4592"
        ],
        "socMedias": [
            {
                "twitter": "bharding154@orstom.com@twitter.com"
            },
            {
                "facebook": "bharding154@telefonica.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-06-14"
    },
    "totalBooked": 80,
    "discount": 0.092
});
db.customers.insertOne(
{
    "customerKey": "TERISERR4761",
    "name": {
        "title": "Ms",
        "first": "Terisa",
        "middle": "M",
        "last": "Serrano",
        "suffix": null
    },
    "address": {
        "streetAddress": "6375 Winding Bridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Karanjphen",
        "stateProvince": "Panhala",
        "locality": "Kolhapur",
        "country": "IN",
        "postalCode": "416205",
        "latitude": "16.6914",
        "longitude": "74.124"
    },
    "contact": {
        "email": "tserrano155@worldnet.com",
        "phone": "+61-155-866-4761",
        "socMedia": {
            "facebook": "tserrano155@worldnet.com@facebook.com"
        }
    },
    "login": {
        "username": "tserrano",
        "oauth2": "tserrano@facebook.com",
        "password": "$2y$10$h\/e2\/X4sQ\/MUeUH7TvU9TOaYA5z.xvx1Z8UJwxNsONvY5t3gBdBYy"
    },
    "otherContact": {
        "emails": [
            "tserrano155@relcom.com",
            "tserrano155@ktc.com"
        ],
        "phoneNumbers": [
            "+61-155-710-5445",
            "+61-155-290-5995"
        ],
        "socMedias": [
            {
                "facebook": "tserrano155@relcom.com@facebook.com"
            },
            {
                "twitter": "tserrano155@ktc.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-06-12"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GLADJENS3148",
    "name": {
        "title": "Dr",
        "first": "Glady",
        "middle": null,
        "last": "Jensen",
        "suffix": "II"
    },
    "address": {
        "streetAddress": "1233 Green Woods Drive",
        "buildingName": "Building B1",
        "floor": null,
        "roomAptCondoFlat": "50",
        "city": "Ashurst",
        "stateProvince": "England",
        "locality": "Hampshire",
        "country": "GB",
        "postalCode": "SO40",
        "latitude": "50.9133",
        "longitude": "-1.504"
    },
    "contact": {
        "email": "gjensen156@ccs.com",
        "phone": "+61-156-294-3148",
        "socMedia": []
    },
    "login": {
        "username": "gjensen",
        "oauth2": null,
        "password": "$2y$10$gzjJxL.vBh943ZTUYXYHSePzDGRE1M9\/wS9yd3t9hnGxe\/mflo.\/G"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-07-21"
    },
    "totalBooked": 20,
    "discount": 0.08700000000000001
});
db.customers.insertOne(
{
    "customerKey": "ROSEWALT7351",
    "name": {
        "title": "Ms",
        "first": "Rosette",
        "middle": "B",
        "last": "Walton",
        "suffix": null
    },
    "address": {
        "streetAddress": "9240 Big River Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97263 CEDEX",
        "latitude": "14.6089",
        "longitude": "-61.0733"
    },
    "contact": {
        "email": "rwalton157@orstom.com",
        "phone": "+61-157-763-7351",
        "socMedia": {
            "line": "rwalton157@orstom.com@line.com"
        }
    },
    "login": {
        "username": "rwalton",
        "oauth2": "rwalton@line.com",
        "password": "$2y$10$GC.JeLZhWEo\/gF5m4Vak9.\/xrabyUlYaixMVhG9qeQDyKEleFy8a2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-01-28"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ARMAGRIM7795",
    "name": {
        "title": "Mr",
        "first": "Armando",
        "middle": "Z",
        "last": "Grimes",
        "suffix": null
    },
    "address": {
        "streetAddress": "7638 Little Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sherpur",
        "stateProvince": "Bharthana",
        "locality": "Etawah",
        "country": "IN",
        "postalCode": "206124",
        "latitude": "26.8736",
        "longitude": "79.0896"
    },
    "contact": {
        "email": "agrimes158@ui.com",
        "phone": "+61-158-789-7795",
        "socMedia": {
            "google": "agrimes158@ui.com@google.com"
        }
    },
    "login": {
        "username": "agrimes",
        "oauth2": "agrimes@google.com",
        "password": "$2y$10$3NvpTFG10csgAEqNfemDdOBi4b.W.8y7pPH30YFeC\/vLqnmQ7kI7C"
    },
    "otherContact": {
        "emails": [
            "agrimes158@relcom.com"
        ],
        "phoneNumbers": [
            "+61-158-028-0573"
        ],
        "socMedias": [
            {
                "twitter": "agrimes158@relcom.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-06-20"
    },
    "totalBooked": 8,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ALDEKHAN0390",
    "name": {
        "title": null,
        "first": "Alden",
        "middle": null,
        "last": "Khan",
        "suffix": null
    },
    "address": {
        "streetAddress": "5474 Long Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kinderdijk",
        "stateProvince": "Molenwaard",
        "locality": "Molenwaard",
        "country": "NL",
        "postalCode": "2961",
        "latitude": "51.8865",
        "longitude": "4.6323"
    },
    "contact": {
        "email": "akhan159@telus.com",
        "phone": "+61-159-791-0390",
        "socMedia": []
    },
    "login": {
        "username": "akhan",
        "oauth2": null,
        "password": "$2y$10$4BhFmItV9OOROLqJ\/euYxO3W.1Ak\/qNZF6\/DHCvP1PrxkP08CD1B."
    },
    "otherContact": {
        "emails": [
            "akhan159@frontier.com"
        ],
        "phoneNumbers": [
            "+61-159-055-9783"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1953-06-27"
    },
    "totalBooked": 35,
    "discount": 0.037
});
db.customers.insertOne(
{
    "customerKey": "RUSSCLAR9205",
    "name": {
        "title": "Ms",
        "first": "Russel",
        "middle": "S",
        "last": "Clark",
        "suffix": null
    },
    "address": {
        "streetAddress": "1848 Little Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Algoma Southwest (Blind River)",
        "stateProvince": "ON",
        "locality": "Algoma",
        "country": "CA",
        "postalCode": "P0R",
        "latitude": "46.5984",
        "longitude": "-83.0385"
    },
    "contact": {
        "email": "rclark160@lookdata.com",
        "phone": "+61-160-308-9205",
        "socMedia": {
            "twitter": "rclark160@lookdata.com@twitter.com"
        }
    },
    "login": {
        "username": "rclark",
        "oauth2": "rclark@twitter.com",
        "password": "$2y$10$kiJ8Re6m9maXMBKlrkq2Gu2GxAoQVbRfLffH2hVGrhfKcd8l9mmtO"
    },
    "otherContact": {
        "emails": [
            "rclark160@swisscom.com",
            "rclark160@ntt.com"
        ],
        "phoneNumbers": [
            "+61-160-315-7462",
            "+61-160-381-2938"
        ],
        "socMedias": [
            {
                "google": "rclark160@swisscom.com@google.com"
            },
            {
                "line": "rclark160@ntt.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1964-05-05"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SHERNICH8304",
    "name": {
        "title": "Ms",
        "first": "Sherilyn",
        "middle": "A",
        "last": "Nichols",
        "suffix": null
    },
    "address": {
        "streetAddress": "8892 Red Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Piziki",
        "stateProvince": "Dric\u0101nu pag.",
        "locality": "Dric\u0101nu pag.",
        "country": "LV",
        "postalCode": "LV-4615",
        "latitude": "56.6651",
        "longitude": "27.1753"
    },
    "contact": {
        "email": "snichols161@algonet.com",
        "phone": "+61-161-021-8304",
        "socMedia": {
            "twitter": "snichols161@algonet.com@twitter.com"
        }
    },
    "login": {
        "username": "snichols",
        "oauth2": "snichols@twitter.com",
        "password": "$2y$10$otft\/a04ZpA8N5yEZ0vdYOAuhiZgyfP4fslJHmfK4AI47pFr36ZlC"
    },
    "otherContact": {
        "emails": [
            "snichols161@ote.com",
            "snichols161@telecomitalia.com",
            "snichols161@kddi.com"
        ],
        "phoneNumbers": [
            "+61-161-539-7424",
            "+61-161-604-0463",
            "+61-161-859-1186"
        ],
        "socMedias": [
            {
                "line": "snichols161@ote.com@line.com"
            },
            {
                "line": "snichols161@telecomitalia.com@line.com"
            },
            {
                "twitter": "snichols161@kddi.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-12-25"
    },
    "totalBooked": 13,
    "discount": 0.056
});
db.customers.insertOne(
{
    "customerKey": "PINGSWEE9284",
    "name": {
        "title": "Dr",
        "first": "Ping",
        "middle": null,
        "last": "Sweeney",
        "suffix": "Jr"
    },
    "address": {
        "streetAddress": "4241 Little Woods Avenue",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "76",
        "city": "Sainte-Genevi\u00e8ve",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H9H",
        "latitude": "45.4683",
        "longitude": "-73.8565"
    },
    "contact": {
        "email": "psweeney162@millicom.com",
        "phone": "+61-162-070-9284",
        "socMedia": []
    },
    "login": {
        "username": "psweeney",
        "oauth2": null,
        "password": "$2y$10$CUx9ZQkpBOe.zPSI6nq\/dOThM4Y7l6pSgd9Kj33SdNAq1Tbif5xWG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-05-18"
    },
    "totalBooked": 47,
    "discount": 0.066
});
db.customers.insertOne(
{
    "customerKey": "GARRSHOR9849",
    "name": {
        "title": "Mr",
        "first": "Garrett",
        "middle": "H",
        "last": "Short",
        "suffix": null
    },
    "address": {
        "streetAddress": "2599 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Subic Bay Freeport Zone",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "2222",
        "latitude": "14.8126",
        "longitude": "120.6922"
    },
    "contact": {
        "email": "gshort163@telecom.com",
        "phone": "+61-163-588-9849",
        "socMedia": {
            "google": "gshort163@telecom.com@google.com"
        }
    },
    "login": {
        "username": "gshort",
        "oauth2": "gshort@google.com",
        "password": "$2y$10$LlpYlxUhayfSpoyPf5gj9.DpRJRQP4ZvzGv\/IgTNghBMwgJKcv.Uy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-07-10"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ALLAPEAR0790",
    "name": {
        "title": "Mr",
        "first": "Allan",
        "middle": "V",
        "last": "Pearson",
        "suffix": null
    },
    "address": {
        "streetAddress": "9815 Red Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wanaque",
        "stateProvince": "NJ",
        "locality": "Passaic",
        "country": "US",
        "postalCode": "07465",
        "latitude": "41.0544",
        "longitude": "-74.279"
    },
    "contact": {
        "email": "apearson164@softbank.com",
        "phone": "+61-164-461-0790",
        "socMedia": {
            "twitter": "apearson164@softbank.com@twitter.com"
        }
    },
    "login": {
        "username": "apearson",
        "oauth2": "apearson@twitter.com",
        "password": "$2y$10$8k3pzQ6Up50ZdUQMRwuho.RwsVkp.QGFpHhxTwNB15S1oXXU35q9y"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-04-11"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GUSTVENT7593",
    "name": {
        "title": null,
        "first": "Gustavo",
        "middle": null,
        "last": "Ventura",
        "suffix": null
    },
    "address": {
        "streetAddress": "4786 Short Woods Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "B\u00e5stad",
        "stateProvince": "M",
        "locality": "B\u00e5stad",
        "country": "SE",
        "postalCode": "269 33",
        "latitude": "56.4269",
        "longitude": "12.8534"
    },
    "contact": {
        "email": "gventura165@ptcl.com",
        "phone": "+61-165-889-7593",
        "socMedia": []
    },
    "login": {
        "username": "gventura",
        "oauth2": null,
        "password": "$2y$10$tZ3vT7R8AqPXSf4kSXZiDesf5GsUrCETmYIJgoeYBLrfAsvZAvmli"
    },
    "otherContact": {
        "emails": [
            "gventura165@access.com",
            "gventura165@movil.com"
        ],
        "phoneNumbers": [
            "+61-165-400-3486",
            "+61-165-830-9062"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-04-19"
    },
    "totalBooked": 15,
    "discount": 0.095
});
db.customers.insertOne(
{
    "customerKey": "ELDOLIU3968",
    "name": {
        "title": "Mr",
        "first": "Eldon",
        "middle": "K",
        "last": "Liu",
        "suffix": null
    },
    "address": {
        "streetAddress": "7688 Blue River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "C\u00f4te-Nord\/Anticosti (Schefferville)",
        "stateProvince": "QC",
        "locality": "C\u00f4te-Nord",
        "country": "CA",
        "postalCode": "G0G",
        "latitude": "53.0413",
        "longitude": "-68.6884"
    },
    "contact": {
        "email": "eliu166@singtel.com",
        "phone": "+61-166-331-3968",
        "socMedia": {
            "twitter": "eliu166@singtel.com@twitter.com"
        }
    },
    "login": {
        "username": "eliu",
        "oauth2": "eliu@twitter.com",
        "password": "$2y$10$SKmY7fM5Dj7IuuTEmiDxCe7EvQnr\/UEkann4A5WmnJ\/keaPhLNsfO"
    },
    "otherContact": {
        "emails": [
            "eliu166@ktc.com",
            "eliu166@ooredoo.com",
            "eliu166@ote.com"
        ],
        "phoneNumbers": [
            "+61-166-342-1453",
            "+61-166-578-3480",
            "+61-166-999-9776"
        ],
        "socMedias": [
            {
                "line": "eliu166@ktc.com@line.com"
            },
            {
                "facebook": "eliu166@ooredoo.com@facebook.com"
            },
            {
                "linkedin": "eliu166@ote.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-01-20"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MERRDUKE2526",
    "name": {
        "title": "Mr",
        "first": "Merrill",
        "middle": "L",
        "last": "Duke",
        "suffix": null
    },
    "address": {
        "streetAddress": "9260 Green Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Talofofo",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96930",
        "latitude": "13.4443",
        "longitude": "144.7863"
    },
    "contact": {
        "email": "mduke167@ooredoo.com",
        "phone": "+61-167-162-2526",
        "socMedia": {
            "facebook": "mduke167@ooredoo.com@facebook.com"
        }
    },
    "login": {
        "username": "mduke",
        "oauth2": "mduke@facebook.com",
        "password": "$2y$10$8PKoO6g5tEoRDf80KAHv2etnA0fcDIJp9ls\/h.\/AS2JjakvXqafuO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-06-01"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "INGAFRY2806",
    "name": {
        "title": null,
        "first": "Inga",
        "middle": null,
        "last": "Fry",
        "suffix": null
    },
    "address": {
        "streetAddress": "313 Red Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "B4",
        "city": "Lewisburg",
        "stateProvince": "KY",
        "locality": "Logan",
        "country": "US",
        "postalCode": "42256",
        "latitude": "37.0037",
        "longitude": "-86.9887"
    },
    "contact": {
        "email": "ifry168@chunghwa.com",
        "phone": "+61-168-523-2806",
        "socMedia": []
    },
    "login": {
        "username": "ifry",
        "oauth2": null,
        "password": "$2y$10$zn8HcTMPNqwyVF.fyy7fMuCMe7\/uY4cKILgnba9poSKq6Wv82bDpK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-07-24"
    },
    "totalBooked": 93,
    "discount": 0.094
});
db.customers.insertOne(
{
    "customerKey": "ROMOTAPI3459",
    "name": {
        "title": "Ms",
        "first": "Romona",
        "middle": "M",
        "last": "Tapia",
        "suffix": null
    },
    "address": {
        "streetAddress": "7458 Red Hill Road",
        "buildingName": "Building 09",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sandys",
        "stateProvince": "Sandys Parish",
        "locality": "Sandys Parish",
        "country": "BM",
        "postalCode": "MA 04",
        "latitude": "32.2934",
        "longitude": "-64.8683"
    },
    "contact": {
        "email": "rtapia169@telenor.com",
        "phone": "+61-169-966-3459",
        "socMedia": {
            "google": "rtapia169@telenor.com@google.com"
        }
    },
    "login": {
        "username": "rtapia",
        "oauth2": "rtapia@google.com",
        "password": "$2y$10$dRBahueWHMd1TeYj2lk\/MO3hCrjRKm8qo38FXwUXiHZ2be5PMhKlS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-01-06"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "KIRKROSA1905",
    "name": {
        "title": "Mr",
        "first": "Kirk",
        "middle": "M",
        "last": "Rosales",
        "suffix": null
    },
    "address": {
        "streetAddress": "851 Short Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bodahari",
        "stateProvince": "Milkipur",
        "locality": "Faizabad",
        "country": "IN",
        "postalCode": "224206",
        "latitude": "26.3546",
        "longitude": "82.3651"
    },
    "contact": {
        "email": "krosales170@vivendi.com",
        "phone": "+61-170-196-1905",
        "socMedia": {
            "line": "krosales170@vivendi.com@line.com"
        }
    },
    "login": {
        "username": "krosales",
        "oauth2": "krosales@line.com",
        "password": "$2y$10$smPGXnRi6hW\/03DaMFbCq.XvdGO7a\/aoc94TA7gkvij8Eowcr4NXa"
    },
    "otherContact": {
        "emails": [
            "krosales170@airtel.com"
        ],
        "phoneNumbers": [
            "+61-170-181-1210"
        ],
        "socMedias": [
            {
                "line": "krosales170@airtel.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-01-22"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "FLOYHORT0905",
    "name": {
        "title": null,
        "first": "Floyd",
        "middle": null,
        "last": "Horton",
        "suffix": null
    },
    "address": {
        "streetAddress": "485 Long River Drive",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": null,
        "city": "Peseggia",
        "stateProvince": "VN",
        "locality": "Venezia",
        "country": "IT",
        "postalCode": "30037",
        "latitude": "45.5617",
        "longitude": "12.1794"
    },
    "contact": {
        "email": "fhorton171@verizon.com",
        "phone": "+61-171-969-0905",
        "socMedia": []
    },
    "login": {
        "username": "fhorton",
        "oauth2": null,
        "password": "$2y$10$uyjsCSUHkDB7U0Y11cCdj.uEx9enPTmdPygnfrQRnkNPPP0VAxdy6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-12-25"
    },
    "totalBooked": 29,
    "discount": 0.028
});
db.customers.insertOne(
{
    "customerKey": "DEANMITC5984",
    "name": {
        "title": "Ms",
        "first": "Deana",
        "middle": "V",
        "last": "Mitchell",
        "suffix": null
    },
    "address": {
        "streetAddress": "9060 Green Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jackson North",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4426",
        "latitude": "-26.5332",
        "longitude": "149.5778"
    },
    "contact": {
        "email": "dmitchel172@ccs.com",
        "phone": "+61-172-684-5984",
        "socMedia": {
            "google": "dmitchel172@ccs.com@google.com"
        }
    },
    "login": {
        "username": "dmitchel",
        "oauth2": "dmitchel@google.com",
        "password": "$2y$10$xcrkTKNK\/vIM6iZal8TZN.13nZjgqtoCqySHzJr0muil6nxEVjSci"
    },
    "otherContact": {
        "emails": [
            "dmitchel172@tt.com",
            "dmitchel172@kpn.com"
        ],
        "phoneNumbers": [
            "+61-172-384-6121",
            "+61-172-823-1485"
        ],
        "socMedias": [
            {
                "facebook": "dmitchel172@tt.com@facebook.com"
            },
            {
                "twitter": "dmitchel172@kpn.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-09-08"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NORRHORN9903",
    "name": {
        "title": "Mr",
        "first": "Norris",
        "middle": "B",
        "last": "Horne",
        "suffix": null
    },
    "address": {
        "streetAddress": "4659 Blue Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Pierre",
        "stateProvince": "Saint-Pierre",
        "locality": "Saint-Pierre",
        "country": "PM",
        "postalCode": "97500",
        "latitude": "46.7809",
        "longitude": "-56.172"
    },
    "contact": {
        "email": "nhorne173@verizon.com",
        "phone": "+61-173-257-9903",
        "socMedia": {
            "line": "nhorne173@verizon.com@line.com"
        }
    },
    "login": {
        "username": "nhorne",
        "oauth2": "nhorne@line.com",
        "password": "$2y$10$\/hUiy5iHYNjuobGPesbAd.ZoN5\/9NVYeHrIaJOmI6EUJcGPei.ULi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-01-29"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GREGDICK6001",
    "name": {
        "title": null,
        "first": "Gregorio",
        "middle": null,
        "last": "Dickson",
        "suffix": null
    },
    "address": {
        "streetAddress": "4662 Red Woods Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "63",
        "city": "Venkatreddypally",
        "stateProvince": "NA",
        "locality": "Mahabub Nagar",
        "country": "IN",
        "postalCode": "509337",
        "latitude": "16.7849",
        "longitude": "77.9471"
    },
    "contact": {
        "email": "gdickson174@eunet.com",
        "phone": "+61-174-691-6001",
        "socMedia": []
    },
    "login": {
        "username": "gdickson",
        "oauth2": null,
        "password": "$2y$10$ZWQ5lkU9FUq2DuG6JzHZfuMgZSt2Xln5l0GMbNeuF9qbP8AkJ7Gwq"
    },
    "otherContact": {
        "emails": [
            "gdickson174@pldt.com",
            "gdickson174@telkom.com",
            "gdickson174@pldt.com"
        ],
        "phoneNumbers": [
            "+61-174-021-9996",
            "+61-174-055-0880",
            "+61-174-373-8452"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-06-15"
    },
    "totalBooked": 9,
    "discount": 0.089
});
db.customers.insertOne(
{
    "customerKey": "MARYMCDO9152",
    "name": {
        "title": "Ms",
        "first": "Maryln",
        "middle": "R",
        "last": "Mcdowell",
        "suffix": null
    },
    "address": {
        "streetAddress": "2132 Blue Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Neculaieuca",
        "stateProvince": "Orhei",
        "locality": "Orhei",
        "country": "MD",
        "postalCode": "MD-3539",
        "latitude": "47.3603",
        "longitude": "28.6922"
    },
    "contact": {
        "email": "mmcdowel175@ui.com",
        "phone": "+61-175-195-9152",
        "socMedia": {
            "line": "mmcdowel175@ui.com@line.com"
        }
    },
    "login": {
        "username": "mmcdowel",
        "oauth2": "mmcdowel@line.com",
        "password": "$2y$10$LcxmPtAvNap\/gmVziU\/K7uGrPA2L01UHW1nxjSBKgg4QD2IbNC35m"
    },
    "otherContact": {
        "emails": [
            "mmcdowel175@ais.com",
            "mmcdowel175@centurylink.com"
        ],
        "phoneNumbers": [
            "+61-175-566-2866",
            "+61-175-102-9623"
        ],
        "socMedias": [
            {
                "line": "mmcdowel175@ais.com@line.com"
            },
            {
                "google": "mmcdowel175@centurylink.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-10-23"
    },
    "totalBooked": 65,
    "discount": 0.043000000000000003
});
db.customers.insertOne(
{
    "customerKey": "ELENPALA7458",
    "name": {
        "title": "Ms",
        "first": "Elene",
        "middle": "E",
        "last": "Palacios",
        "suffix": null
    },
    "address": {
        "streetAddress": "4173 Blue Bend Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Beeler",
        "stateProvince": "KS",
        "locality": "Ness",
        "country": "US",
        "postalCode": "67518",
        "latitude": "38.4445",
        "longitude": "-100.1949"
    },
    "contact": {
        "email": "epalacio176@telecom.com",
        "phone": "+61-176-640-7458",
        "socMedia": {
            "google": "epalacio176@telecom.com@google.com"
        }
    },
    "login": {
        "username": "epalacio",
        "oauth2": "epalacio@google.com",
        "password": "$2y$10$\/dgChlAbvUQoqdakbg17z.9GdDrHJcMhRekMUvif\/MrHosem2AOpK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-05-02"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "FERMCUNN4312",
    "name": {
        "title": null,
        "first": "Fermina",
        "middle": null,
        "last": "Cunningham",
        "suffix": null
    },
    "address": {
        "streetAddress": "440 Short Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wattappola",
        "stateProvince": "Kandy",
        "locality": "Kandy",
        "country": "LK",
        "postalCode": "20454",
        "latitude": "7.2373",
        "longitude": "80.5431"
    },
    "contact": {
        "email": "fcunning177@safaricom.com",
        "phone": "+61-177-963-4312",
        "socMedia": []
    },
    "login": {
        "username": "fcunning",
        "oauth2": null,
        "password": "$2y$10$Z.bstT4KlHlBb4i.c9pYke3947dVt7kfY618sVgzmdhUrRtx9jD5m"
    },
    "otherContact": {
        "emails": [
            "fcunning177@vivendi.com"
        ],
        "phoneNumbers": [
            "+61-177-534-2675"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1997-11-06"
    },
    "totalBooked": 29,
    "discount": 0.094
});
db.customers.insertOne(
{
    "customerKey": "TEODGOLD1018",
    "name": {
        "title": "Ms",
        "first": "Teodora",
        "middle": "Z",
        "last": "Golden",
        "suffix": null
    },
    "address": {
        "streetAddress": "6357 Blue Bridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Lenton",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "NG33",
        "latitude": "52.8609",
        "longitude": "-0.4788"
    },
    "contact": {
        "email": "tgolden178@bifty.com",
        "phone": "+61-178-298-1018",
        "socMedia": {
            "facebook": "tgolden178@bifty.com@facebook.com"
        }
    },
    "login": {
        "username": "tgolden",
        "oauth2": "tgolden@facebook.com",
        "password": "$2y$10$2Ko1fpNzV\/3BmVd\/Dh3C5ujoyuHmt.Hp.yRQXt4.MjKogamY9coz6"
    },
    "otherContact": {
        "emails": [
            "tgolden178@turkcell.com",
            "tgolden178@cerist.com"
        ],
        "phoneNumbers": [
            "+61-178-866-2207",
            "+61-178-038-6277"
        ],
        "socMedias": [
            {
                "facebook": "tgolden178@turkcell.com@facebook.com"
            },
            {
                "skype": "tgolden178@cerist.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-12-29"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LEIGFITZ7970",
    "name": {
        "title": "Mr",
        "first": "Leigh",
        "middle": "E",
        "last": "Fitzpatrick",
        "suffix": null
    },
    "address": {
        "streetAddress": "9483 Winding Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Monnunagar",
        "stateProvince": "Monnunagar",
        "locality": "Gazipur",
        "country": "BD",
        "postalCode": "1710",
        "latitude": "24.0942",
        "longitude": "90.4858"
    },
    "contact": {
        "email": "lfitzpat179@telia.com",
        "phone": "+61-179-445-7970",
        "socMedia": {
            "skype": "lfitzpat179@telia.com@skype.com"
        }
    },
    "login": {
        "username": "lfitzpat",
        "oauth2": "lfitzpat@skype.com",
        "password": "$2y$10$qVO199ODQFk2AqVL0Bkb6OQJssLJh4C\/g0YiklMpLQU3YKDI\/7CBG"
    },
    "otherContact": {
        "emails": [
            "lfitzpat179@lookdata.com"
        ],
        "phoneNumbers": [
            "+61-179-202-2810"
        ],
        "socMedias": [
            {
                "twitter": "lfitzpat179@lookdata.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2000-09-07"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CARLHARP4724",
    "name": {
        "title": null,
        "first": "Carlos",
        "middle": null,
        "last": "Harper",
        "suffix": null
    },
    "address": {
        "streetAddress": "3306 Red Gully Road",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": "F7",
        "city": "Swillbrook",
        "stateProvince": "England",
        "locality": "Lancashire",
        "country": "GB",
        "postalCode": "PR4",
        "latitude": "53.7525",
        "longitude": "-2.8346"
    },
    "contact": {
        "email": "charper180@kpn.com",
        "phone": "+61-180-849-4724",
        "socMedia": []
    },
    "login": {
        "username": "charper",
        "oauth2": null,
        "password": "$2y$10$JlKSxYPOSsV1WD3rimdCGu2CPiEzIlLC6jWFpbtlekRMoI8UIgJqG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-09-15"
    },
    "totalBooked": 16,
    "discount": 0.095
});
db.customers.insertOne(
{
    "customerKey": "LINODOUG1826",
    "name": {
        "title": "Mr",
        "first": "Lino",
        "middle": "K",
        "last": "Douglas",
        "suffix": null
    },
    "address": {
        "streetAddress": "8254 Short Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Poya",
        "stateProvince": "Poya",
        "locality": "Poya",
        "country": "NC",
        "postalCode": "98827",
        "latitude": "-21.3449",
        "longitude": "165.164"
    },
    "contact": {
        "email": "ldouglas181@jio.com",
        "phone": "+61-181-784-1826",
        "socMedia": {
            "twitter": "ldouglas181@jio.com@twitter.com"
        }
    },
    "login": {
        "username": "ldouglas",
        "oauth2": "ldouglas@twitter.com",
        "password": "$2y$10$yFAsTwV38lD2zGMW8\/FzxOpyJ36Htm4eQI8MWmj8vJf1iVMkFw5vG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-10-21"
    },
    "totalBooked": 13,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SHARDURH3670",
    "name": {
        "title": "Ms",
        "first": "Sharell",
        "middle": "I",
        "last": "Durham",
        "suffix": null
    },
    "address": {
        "streetAddress": "2036 Big Mountain Road",
        "buildingName": "Building CA",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ingui",
        "stateProvince": "Jalaun",
        "locality": "Jalaun",
        "country": "IN",
        "postalCode": "285121",
        "latitude": "26.1506",
        "longitude": "79.1424"
    },
    "contact": {
        "email": "sdurham182@movil.com",
        "phone": "+61-182-867-3670",
        "socMedia": {
            "twitter": "sdurham182@movil.com@twitter.com"
        }
    },
    "login": {
        "username": "sdurham",
        "oauth2": "sdurham@twitter.com",
        "password": "$2y$10$CUL.ilSc9RIyL8AMlgH9qOY8aJVQfdZfCbo4hwGFfWwj\/8dDfh3ju"
    },
    "otherContact": {
        "emails": [
            "sdurham182@maxcomm.com"
        ],
        "phoneNumbers": [
            "+61-182-490-2757"
        ],
        "socMedias": [
            {
                "google": "sdurham182@maxcomm.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1995-05-30"
    },
    "totalBooked": 81,
    "discount": 0.117
});
db.customers.insertOne(
{
    "customerKey": "KENNLARA1292",
    "name": {
        "title": null,
        "first": "Kenneth",
        "middle": null,
        "last": "Lara",
        "suffix": null
    },
    "address": {
        "streetAddress": "9002 Winding Gulch Road",
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
        "email": "klara183@telesystems.com",
        "phone": "+61-183-389-1292",
        "socMedia": []
    },
    "login": {
        "username": "klara",
        "oauth2": null,
        "password": "$2y$10$PsxpR6raqG0hd5XLkh1XieqPQiR6VLZanKMy9ltmSXhcbgDdxOJuK"
    },
    "otherContact": {
        "emails": [
            "klara183@uunet.com",
            "klara183@zain.com"
        ],
        "phoneNumbers": [
            "+61-183-925-5253",
            "+61-183-888-5772"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-06-23"
    },
    "totalBooked": 36,
    "discount": 0.013000000000000001
});
db.customers.insertOne(
{
    "customerKey": "JESIBARR4631",
    "name": {
        "title": "Ms",
        "first": "Jesica",
        "middle": "D",
        "last": "Barrera",
        "suffix": null
    },
    "address": {
        "streetAddress": "8889 Red Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Greywell",
        "stateProvince": "England",
        "locality": "Hampshire",
        "country": "GB",
        "postalCode": "RG29",
        "latitude": "51.2577",
        "longitude": "-0.9737"
    },
    "contact": {
        "email": "jbarrera184@vodafone.com",
        "phone": "+61-184-063-4631",
        "socMedia": {
            "facebook": "jbarrera184@vodafone.com@facebook.com"
        }
    },
    "login": {
        "username": "jbarrera",
        "oauth2": "jbarrera@facebook.com",
        "password": "$2y$10$bkZ.Eoka2iSOHuH6sIQM5OwXw.36ise4GTNMUE6IYJ3XM83HUS6am"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-11-23"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ALISMALO8053",
    "name": {
        "title": "Ms",
        "first": "Alisa",
        "middle": "H",
        "last": "Malone",
        "suffix": null
    },
    "address": {
        "streetAddress": "3846 Little Bough Circle",
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
        "email": "amalone185@optus.com",
        "phone": "+61-185-386-8053",
        "socMedia": {
            "line": "amalone185@optus.com@line.com"
        }
    },
    "login": {
        "username": "amalone",
        "oauth2": "amalone@line.com",
        "password": "$2y$10$aReT1YOKAOdeGBnRWxEHaOBPhbQG6UiERdaeSN\/haq.N\/.zNeZaIK"
    },
    "otherContact": {
        "emails": [
            "amalone185@belgacom.com",
            "amalone185@verizon.com",
            "amalone185@belgacom.com"
        ],
        "phoneNumbers": [
            "+61-185-706-6648",
            "+61-185-818-5485",
            "+61-185-651-5051"
        ],
        "socMedias": [
            {
                "facebook": "amalone185@belgacom.com@facebook.com"
            },
            {
                "facebook": "amalone185@verizon.com@facebook.com"
            },
            {
                "facebook": "amalone185@belgacom.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-02-15"
    },
    "totalBooked": 11,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ROBEROWE9795",
    "name": {
        "title": null,
        "first": "Robena",
        "middle": null,
        "last": "Rowe",
        "suffix": null
    },
    "address": {
        "streetAddress": "643 Big Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "25",
        "city": "Lentner",
        "stateProvince": "MO",
        "locality": "Shelby",
        "country": "US",
        "postalCode": "63450",
        "latitude": "39.7123",
        "longitude": "-92.1489"
    },
    "contact": {
        "email": "rrowe186@att.com",
        "phone": "+61-186-966-9795",
        "socMedia": []
    },
    "login": {
        "username": "rrowe",
        "oauth2": null,
        "password": "$2y$10$zNLvsu5Q3\/a72vlNG64wC.FyKyJOkbNEbbWTI5II5ojuuuDFm3xwi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-07-08"
    },
    "totalBooked": 38,
    "discount": 0.042
});
db.customers.insertOne(
{
    "customerKey": "SCOTAYAL6883",
    "name": {
        "title": "Mr",
        "first": "Scotty",
        "middle": "Z",
        "last": "Ayala",
        "suffix": null
    },
    "address": {
        "streetAddress": "4530 Green Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Montemor-O-Novo",
        "stateProvince": "Montemor-O-Novo",
        "locality": "Montemor-o-Novo",
        "country": "PT",
        "postalCode": "7050-166",
        "latitude": "38.6481",
        "longitude": "-8.2145"
    },
    "contact": {
        "email": "sayala187@ote.com",
        "phone": "+61-187-307-6883",
        "socMedia": {
            "line": "sayala187@ote.com@line.com"
        }
    },
    "login": {
        "username": "sayala",
        "oauth2": "sayala@line.com",
        "password": "$2y$10$0YhevXJb49A8Wat8GUU0EumDsL2F4o0rst2isNB1M0yn\/vRCjztB."
    },
    "otherContact": {
        "emails": [
            "sayala187@oi.com"
        ],
        "phoneNumbers": [
            "+61-187-158-8288"
        ],
        "socMedias": [
            {
                "line": "sayala187@oi.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-07-25"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NATAWARE1716",
    "name": {
        "title": "Ms",
        "first": "Natalya",
        "middle": "R",
        "last": "Ware",
        "suffix": null
    },
    "address": {
        "streetAddress": "8187 Winding Stream Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fairbanks",
        "stateProvince": "IN",
        "locality": "Sullivan",
        "country": "US",
        "postalCode": "47849",
        "latitude": "39.1901",
        "longitude": "-87.547"
    },
    "contact": {
        "email": "nware188@maxcomm.com",
        "phone": "+61-188-937-1716",
        "socMedia": {
            "skype": "nware188@maxcomm.com@skype.com"
        }
    },
    "login": {
        "username": "nware",
        "oauth2": "nware@skype.com",
        "password": "$2y$10$D1q7E1zGF4NyhU9u8f.p5OK6VvNIUXdqzxKVPbLylDEZurZgxRZgy"
    },
    "otherContact": {
        "emails": [
            "nware188@sprint.com",
            "nware188@worldnet.com",
            "nware188@cerist.com"
        ],
        "phoneNumbers": [
            "+61-188-547-1274",
            "+61-188-981-2291",
            "+61-188-462-5051"
        ],
        "socMedias": [
            {
                "linkedin": "nware188@sprint.com@linkedin.com"
            },
            {
                "line": "nware188@worldnet.com@line.com"
            },
            {
                "facebook": "nware188@cerist.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-07-17"
    },
    "totalBooked": 3,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CARLHANS4219",
    "name": {
        "title": null,
        "first": "Carlie",
        "middle": null,
        "last": "Hanson",
        "suffix": null
    },
    "address": {
        "streetAddress": "1994 Blue Gulch Road",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": null,
        "city": "Suhaja",
        "stateProvince": "\u010cazma",
        "locality": "\u010cazma",
        "country": "HR",
        "postalCode": "43240",
        "latitude": "45.7167",
        "longitude": "16.6333"
    },
    "contact": {
        "email": "chanson189@maxcomm.com",
        "phone": "+61-189-401-4219",
        "socMedia": []
    },
    "login": {
        "username": "chanson",
        "oauth2": null,
        "password": "$2y$10$Z5bI7l9bJkr4k9rMey47Guv1Xbf6W4sUeD2X3NLhKBvTXTEyGfMf."
    },
    "otherContact": {
        "emails": [
            "chanson189@kddi.com"
        ],
        "phoneNumbers": [
            "+61-189-670-3020"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-11-22"
    },
    "totalBooked": 68,
    "discount": 0.14200000000000002
});
db.customers.insertOne(
{
    "customerKey": "CLEMESTR7666",
    "name": {
        "title": "Ms",
        "first": "Clementine",
        "middle": "G",
        "last": "Estrada",
        "suffix": null
    },
    "address": {
        "streetAddress": "2634 Long Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Waddington",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6509",
        "latitude": "-30.85",
        "longitude": "116.25"
    },
    "contact": {
        "email": "cestrada190@ktc.com",
        "phone": "+61-190-393-7666",
        "socMedia": {
            "facebook": "cestrada190@ktc.com@facebook.com"
        }
    },
    "login": {
        "username": "cestrada",
        "oauth2": "cestrada@facebook.com",
        "password": "$2y$10$2utv6JA8hTHVwExnyRyPxe.GnOBX\/von\/MXKjMHj49s6rRHWUHv\/a"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-11-18"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LUCIWALT9110",
    "name": {
        "title": "Mr",
        "first": "Luciano",
        "middle": "F",
        "last": "Walters",
        "suffix": null
    },
    "address": {
        "streetAddress": "6669 Big Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Devonshire",
        "stateProvince": "Devonshire Parish",
        "locality": "Devonshire Parish",
        "country": "BM",
        "postalCode": "FL 01",
        "latitude": "32.3264",
        "longitude": "-64.7411"
    },
    "contact": {
        "email": "lwalters191@oi.com",
        "phone": "+61-191-346-9110",
        "socMedia": {
            "linkedin": "lwalters191@oi.com@linkedin.com"
        }
    },
    "login": {
        "username": "lwalters",
        "oauth2": "lwalters@linkedin.com",
        "password": "$2y$10$WEpHxA09OI0mVEcEa50BEOgyr2ZcrsCcoUW6KJhMf5AQAr5cCm.0W"
    },
    "otherContact": {
        "emails": [
            "lwalters191@kpn.com"
        ],
        "phoneNumbers": [
            "+61-191-963-3172"
        ],
        "socMedias": [
            {
                "google": "lwalters191@kpn.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-03-18"
    },
    "totalBooked": 2,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TAMEBELL5554",
    "name": {
        "title": null,
        "first": "Tameka",
        "middle": null,
        "last": "Bell",
        "suffix": null
    },
    "address": {
        "streetAddress": "5145 Winding Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "A2",
        "city": "Lyneham",
        "stateProvince": "England",
        "locality": "Oxfordshire",
        "country": "GB",
        "postalCode": "OX7",
        "latitude": "51.8887",
        "longitude": "-1.5882"
    },
    "contact": {
        "email": "tbell192@econnect.com",
        "phone": "+61-192-788-5554",
        "socMedia": []
    },
    "login": {
        "username": "tbell",
        "oauth2": null,
        "password": "$2y$10$DNVYWZHcScoIxfomnNrev.7eMgcDS8Uuuq67VTzzzrsbWDnWPBR66"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-11-15"
    },
    "totalBooked": 5,
    "discount": 0.06
});
db.customers.insertOne(
{
    "customerKey": "GRAHSCHA4535",
    "name": {
        "title": "Mr",
        "first": "Graham",
        "middle": "L",
        "last": "Schaefer",
        "suffix": null
    },
    "address": {
        "streetAddress": "2249 Big Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bucure\u015fti 19",
        "stateProvince": "Sector 3",
        "locality": "Bucure\u015fti",
        "country": "RO",
        "postalCode": "031908",
        "latitude": "44.418",
        "longitude": "26.1691"
    },
    "contact": {
        "email": "gschaefe193@telecom.com",
        "phone": "+61-193-155-4535",
        "socMedia": {
            "twitter": "gschaefe193@telecom.com@twitter.com"
        }
    },
    "login": {
        "username": "gschaefe",
        "oauth2": "gschaefe@twitter.com",
        "password": "$2y$10$cf6Szwcf22P1c2kVQ\/jxs.UlcQWQ0FJey8dRjhvuBxaCOigvhqMVq"
    },
    "otherContact": {
        "emails": [
            "gschaefe193@verizon.com"
        ],
        "phoneNumbers": [
            "+61-193-046-1052"
        ],
        "socMedias": [
            {
                "skype": "gschaefe193@verizon.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-11-10"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "HOPEBRUC8968",
    "name": {
        "title": "Ms",
        "first": "Hope",
        "middle": "V",
        "last": "Bruce",
        "suffix": null
    },
    "address": {
        "streetAddress": "1990 Big Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Knockgray",
        "stateProvince": "Scotland",
        "locality": "Dumfries and Galloway",
        "country": "GB",
        "postalCode": "DG7",
        "latitude": "54.9842",
        "longitude": "-3.9638"
    },
    "contact": {
        "email": "hbruce194@apicnet.com",
        "phone": "+61-194-487-8968",
        "socMedia": {
            "twitter": "hbruce194@apicnet.com@twitter.com"
        }
    },
    "login": {
        "username": "hbruce",
        "oauth2": "hbruce@twitter.com",
        "password": "$2y$10$ZPUet3ZGsRU0SXQy8OuuUeUH9aZvlfVKCwSzojQTHfwESXUYbCese"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-10-02"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "AMERLARS4987",
    "name": {
        "title": null,
        "first": "America",
        "middle": null,
        "last": "Larsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "218 Big Stream Circle",
        "buildingName": "Building 9D",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Groblersdal",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "0474",
        "latitude": "-25.15",
        "longitude": "29.3833"
    },
    "contact": {
        "email": "alarsen195@oi.com",
        "phone": "+61-195-402-4987",
        "socMedia": []
    },
    "login": {
        "username": "alarsen",
        "oauth2": null,
        "password": "$2y$10$lASF3WTcgroHrTeOgwSBfO15uL0IO\/hmAIrgjNGnLDSIemRrnYKa2"
    },
    "otherContact": {
        "emails": [
            "alarsen195@telia.com",
            "alarsen195@tm.com",
            "alarsen195@telstra.com"
        ],
        "phoneNumbers": [
            "+61-195-040-2254",
            "+61-195-593-7610",
            "+61-195-970-0440"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-12-23"
    },
    "totalBooked": 40,
    "discount": 0.092
});
db.customers.insertOne(
{
    "customerKey": "JARRPOPE6582",
    "name": {
        "title": "Mr",
        "first": "Jarred",
        "middle": "C",
        "last": "Pope",
        "suffix": null
    },
    "address": {
        "streetAddress": "1894 Winding Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Buckie",
        "stateProvince": "Scotland",
        "locality": "Moray",
        "country": "GB",
        "postalCode": "AB56",
        "latitude": "57.6757",
        "longitude": "-2.9624"
    },
    "contact": {
        "email": "jpope196@rogers.com",
        "phone": "+61-196-163-6582",
        "socMedia": {
            "google": "jpope196@rogers.com@google.com"
        }
    },
    "login": {
        "username": "jpope",
        "oauth2": "jpope@google.com",
        "password": "$2y$10$T9Exseqpna9f9HPtMn\/vFe5xTW6fh.Y7h0H6T5E3e\/KLLY9UmCo6S"
    },
    "otherContact": {
        "emails": [
            "jpope196@daxnet.com",
            "jpope196@belgacom.com"
        ],
        "phoneNumbers": [
            "+61-196-503-1008",
            "+61-196-823-6709"
        ],
        "socMedias": [
            {
                "linkedin": "jpope196@daxnet.com@linkedin.com"
            },
            {
                "linkedin": "jpope196@belgacom.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-07-30"
    },
    "totalBooked": 47,
    "discount": 0.152
});
db.customers.insertOne(
{
    "customerKey": "COLBFRAN3215",
    "name": {
        "title": "Mr",
        "first": "Colby",
        "middle": "L",
        "last": "Francis",
        "suffix": null
    },
    "address": {
        "streetAddress": "9723 Short Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cach\u00ed",
        "stateProvince": "Cach\u00ed",
        "locality": "Para\u00edso",
        "country": "CR",
        "postalCode": "30204",
        "latitude": "9.8293",
        "longitude": "-83.7941"
    },
    "contact": {
        "email": "cfrancis197@telecom.com",
        "phone": "+61-197-568-3215",
        "socMedia": {
            "google": "cfrancis197@telecom.com@google.com"
        }
    },
    "login": {
        "username": "cfrancis",
        "oauth2": "cfrancis@google.com",
        "password": "$2y$10$NuXt8iFNnpphaajr2eVJIO\/hEgjIFvFs\/Vcl7Dpl6sowiUNTi2csG"
    },
    "otherContact": {
        "emails": [
            "cfrancis197@daxnet.com",
            "cfrancis197@cci.com",
            "cfrancis197@vimpelcom.com"
        ],
        "phoneNumbers": [
            "+61-197-012-4130",
            "+61-197-015-2653",
            "+61-197-796-9380"
        ],
        "socMedias": [
            {
                "skype": "cfrancis197@daxnet.com@skype.com"
            },
            {
                "line": "cfrancis197@cci.com@line.com"
            },
            {
                "line": "cfrancis197@vimpelcom.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-09-14"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "VERORICE3739",
    "name": {
        "title": null,
        "first": "Veronica",
        "middle": null,
        "last": "Rice",
        "suffix": null
    },
    "address": {
        "streetAddress": "7054 Short Gully Drive",
        "buildingName": null,
        "floor": 7,
        "roomAptCondoFlat": "57",
        "city": "Glencairn",
        "stateProvince": "Northern Ireland",
        "locality": "Belfast Greater",
        "country": "GB",
        "postalCode": "BT13",
        "latitude": "54.6105",
        "longitude": "-5.9625"
    },
    "contact": {
        "email": "vrice198@vivendi.com",
        "phone": "+61-198-700-3739",
        "socMedia": []
    },
    "login": {
        "username": "vrice",
        "oauth2": null,
        "password": "$2y$10$PqkAl5vtBCM019T7O.1EBuIizbvNcsO9XHaRV7BtqfyPz8kM.knXy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-06-21"
    },
    "totalBooked": 39,
    "discount": 0.04
});
db.customers.insertOne(
{
    "customerKey": "GILBBARB2386",
    "name": {
        "title": "Mr",
        "first": "Gilbert",
        "middle": "G",
        "last": "Barber",
        "suffix": null
    },
    "address": {
        "streetAddress": "851 Long Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Toftwood",
        "stateProvince": "England",
        "locality": "Norfolk",
        "country": "GB",
        "postalCode": "NR19",
        "latitude": "52.6806",
        "longitude": "0.8848"
    },
    "contact": {
        "email": "gbarber200@nordnet.com",
        "phone": "+61-200-442-2386",
        "socMedia": {
            "facebook": "gbarber200@nordnet.com@facebook.com"
        }
    },
    "login": {
        "username": "gbarber",
        "oauth2": "gbarber@facebook.com",
        "password": "$2y$10$5NlvWqy0I.fRZ2HWHjTA8eiIt9t35JOn72yfkX3EfxYsigquQQsCa"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-03-18"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "WARNNASH2915",
    "name": {
        "title": null,
        "first": "Warner",
        "middle": null,
        "last": "Nash",
        "suffix": null
    },
    "address": {
        "streetAddress": "7998 Short Canyon Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Faetano",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47896",
        "latitude": "43.9333",
        "longitude": "12.5"
    },
    "contact": {
        "email": "wnash201@greennet.com",
        "phone": "+61-201-440-2915",
        "socMedia": []
    },
    "login": {
        "username": "wnash",
        "oauth2": null,
        "password": "$2y$10$PTIO1Gm\/o59pirOPJ.F3K.ZuQCfVno1qWdAeY3HrUzvGHhE.MzQTC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-09-11"
    },
    "totalBooked": 25,
    "discount": 0.064
});
db.customers.insertOne(
{
    "customerKey": "ROSSSCOT7408",
    "name": {
        "title": "Ms",
        "first": "Rossie",
        "middle": "S",
        "last": "Scott",
        "suffix": null
    },
    "address": {
        "streetAddress": "2184 Long Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sahapur",
        "stateProvince": "Howrah",
        "locality": "Howrah",
        "country": "IN",
        "postalCode": "711310",
        "latitude": "22.5244",
        "longitude": "88.1669"
    },
    "contact": {
        "email": "rscott202@centurylink.com",
        "phone": "+61-202-940-7408",
        "socMedia": {
            "line": "rscott202@centurylink.com@line.com"
        }
    },
    "login": {
        "username": "rscott",
        "oauth2": "rscott@line.com",
        "password": "$2y$10$lVfrXgNak5zrTexVcg\/6nOmeTAXvHP3hRNyksWgRTBiYL5lmsdjQ6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-11-20"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GERAMCKE3249",
    "name": {
        "title": "Mr",
        "first": "Gerard",
        "middle": "A",
        "last": "Mckenzie",
        "suffix": null
    },
    "address": {
        "streetAddress": "1341 Little Mountain Drive",
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
        "email": "gmckenzi203@seednet.com",
        "phone": "+61-203-538-3249",
        "socMedia": {
            "skype": "gmckenzi203@seednet.com@skype.com"
        }
    },
    "login": {
        "username": "gmckenzi",
        "oauth2": "gmckenzi@skype.com",
        "password": "$2y$10$Mu4LQDpuZyDDk8xv8KXDNudNwqHiy5O60ESSt3b3LhBWTUyf.cfW6"
    },
    "otherContact": {
        "emails": [
            "gmckenzi203@maxcomm.com"
        ],
        "phoneNumbers": [
            "+61-203-405-9040"
        ],
        "socMedias": [
            {
                "linkedin": "gmckenzi203@maxcomm.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-07-29"
    },
    "totalBooked": 15,
    "discount": 0.07200000000000001
});
db.customers.insertOne(
{
    "customerKey": "JUNIVELA7043",
    "name": {
        "title": null,
        "first": "Junie",
        "middle": null,
        "last": "Velazquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "2468 Little Ditch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "13",
        "city": "Keifang",
        "stateProvince": "Phullen",
        "locality": "Aizawl",
        "country": "IN",
        "postalCode": "796261",
        "latitude": "23.902",
        "longitude": "93.0008"
    },
    "contact": {
        "email": "jvelazqu204@ais.com",
        "phone": "+61-204-151-7043",
        "socMedia": []
    },
    "login": {
        "username": "jvelazqu",
        "oauth2": null,
        "password": "$2y$10$7BWCoGxnHjQ0Mlznuq6\/MO.88CaxUQdB\/1a.wG3\/YG9HJ16cYizLK"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-09-09"
    },
    "totalBooked": 32,
    "discount": 0.061
});
db.customers.insertOne(
{
    "customerKey": "SHAVSNOW9412",
    "name": {
        "title": "Ms",
        "first": "Shavon",
        "middle": "U",
        "last": "Snow",
        "suffix": null
    },
    "address": {
        "streetAddress": "3183 Green Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Matina",
        "stateProvince": "Matina",
        "locality": "Matina",
        "country": "CR",
        "postalCode": "70501",
        "latitude": "9.9618",
        "longitude": "-83.2933"
    },
    "contact": {
        "email": "ssnow205@cubenet.com",
        "phone": "+61-205-338-9412",
        "socMedia": {
            "facebook": "ssnow205@cubenet.com@facebook.com"
        }
    },
    "login": {
        "username": "ssnow",
        "oauth2": "ssnow@facebook.com",
        "password": "$2y$10$i4pE1EeC9vpYtmC\/RVrDRuSjTCNx7KtRk.5sEvtD9Nv9xJHrbO6PC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-06-04"
    },
    "totalBooked": 14,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ANTIRODR3051",
    "name": {
        "title": "Mr",
        "first": "Antione",
        "middle": "B",
        "last": "Rodriguez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6903 Red Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Charlton",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2795",
        "latitude": "-33.4549",
        "longitude": "149.6841"
    },
    "contact": {
        "email": "arodrigu206@mtn.com",
        "phone": "+61-206-208-3051",
        "socMedia": {
            "facebook": "arodrigu206@mtn.com@facebook.com"
        }
    },
    "login": {
        "username": "arodrigu",
        "oauth2": "arodrigu@facebook.com",
        "password": "$2y$10$URxetLatwBoUyg5zfXJ9Kei7YmFqudPsX9LMgQl1C\/U3yVxLe2N8e"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-09-11"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "KIRSKNOX8330",
    "name": {
        "title": null,
        "first": "Kirsten",
        "middle": null,
        "last": "Knox",
        "suffix": null
    },
    "address": {
        "streetAddress": "6800 Blue Tree Street",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": null,
        "city": "Hariharpur",
        "stateProvince": "Kaiserganj",
        "locality": "Bahraich",
        "country": "IN",
        "postalCode": "271870",
        "latitude": "27.4307",
        "longitude": "81.5085"
    },
    "contact": {
        "email": "kknox207@telecom.com",
        "phone": "+61-207-804-8330",
        "socMedia": []
    },
    "login": {
        "username": "kknox",
        "oauth2": null,
        "password": "$2y$10$OLlNkg.0jYMAa5ZVfeAgfOfpTXXW1JzYiL5OzvJHshys7UpAq5ZgO"
    },
    "otherContact": {
        "emails": [
            "kknox207@nii.com"
        ],
        "phoneNumbers": [
            "+61-207-548-3358"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-07-08"
    },
    "totalBooked": 30,
    "discount": 0.033
});
db.customers.insertOne(
{
    "customerKey": "KAYCIBAR7014",
    "name": {
        "title": "Ms",
        "first": "Kayce",
        "middle": "T",
        "last": "Ibarra",
        "suffix": null
    },
    "address": {
        "streetAddress": "4833 Blue Canyon Road",
        "buildingName": "Building 70",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Roberval",
        "stateProvince": "QC",
        "locality": "Saguenay\/Lac-Saint-Jean",
        "country": "CA",
        "postalCode": "G8H",
        "latitude": "48.5168",
        "longitude": "-72.2324"
    },
    "contact": {
        "email": "kibarra208@sprint.com",
        "phone": "+61-208-365-7014",
        "socMedia": {
            "line": "kibarra208@sprint.com@line.com"
        }
    },
    "login": {
        "username": "kibarra",
        "oauth2": "kibarra@line.com",
        "password": "$2y$10$Hot3APh3AL6b80pi2zZri.ql9KQsfjMCt2NcRIjEtM1OxNhRPbtUu"
    },
    "otherContact": {
        "emails": [
            "kibarra208@ooredoo.com",
            "kibarra208@econnect.com"
        ],
        "phoneNumbers": [
            "+61-208-189-5691",
            "+61-208-319-1370"
        ],
        "socMedias": [
            {
                "skype": "kibarra208@ooredoo.com@skype.com"
            },
            {
                "skype": "kibarra208@econnect.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-11-30"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JOANFRIE0014",
    "name": {
        "title": "Mr",
        "first": "Joan",
        "middle": "Z",
        "last": "Friedman",
        "suffix": null
    },
    "address": {
        "streetAddress": "9646 Green Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "FPO AA",
        "stateProvince": null,
        "locality": null,
        "country": "US",
        "postalCode": "96517",
        "latitude": "34.2322",
        "longitude": "132.5666"
    },
    "contact": {
        "email": "jfriedma209@telecom.com",
        "phone": "+61-209-644-0014",
        "socMedia": {
            "facebook": "jfriedma209@telecom.com@facebook.com"
        }
    },
    "login": {
        "username": "jfriedma",
        "oauth2": "jfriedma@facebook.com",
        "password": "$2y$10$3fhHqkFM72pPb2R9cO38EOPp9cYJI254WY07Inl.E0kZWgkMdOc3a"
    },
    "otherContact": {
        "emails": [
            "jfriedma209@vodafone.com",
            "jfriedma209@megafon.com"
        ],
        "phoneNumbers": [
            "+61-209-531-8681",
            "+61-209-663-8039"
        ],
        "socMedias": [
            {
                "google": "jfriedma209@vodafone.com@google.com"
            },
            {
                "google": "jfriedma209@megafon.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-08-14"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LEDABISH6670",
    "name": {
        "title": null,
        "first": "Leda",
        "middle": null,
        "last": "Bishop",
        "suffix": null
    },
    "address": {
        "streetAddress": "7857 Little Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "D6",
        "city": "Port Erin",
        "stateProvince": "",
        "locality": "Isle of Man",
        "country": "GB",
        "postalCode": "IM9",
        "latitude": "54.0849",
        "longitude": "-4.751"
    },
    "contact": {
        "email": "lbishop210@ais.com",
        "phone": "+61-210-317-6670",
        "socMedia": []
    },
    "login": {
        "username": "lbishop",
        "oauth2": null,
        "password": "$2y$10$NfiVgbhjkc6EhflpiCGf7uW3wAhuAamVoBOTA9gt\/9zFYzFuauKle"
    },
    "otherContact": {
        "emails": [
            "lbishop210@turkcell.com",
            "lbishop210@bifty.com",
            "lbishop210@worldnet.com"
        ],
        "phoneNumbers": [
            "+61-210-024-5319",
            "+61-210-449-0702",
            "+61-210-285-9183"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-04-22"
    },
    "totalBooked": 92,
    "discount": 0.17300000000000001
});
db.customers.insertOne(
{
    "customerKey": "MAXIJAME6281",
    "name": {
        "title": "Mr",
        "first": "Maximo",
        "middle": "L",
        "last": "James",
        "suffix": null
    },
    "address": {
        "streetAddress": "2157 Long Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Frederiksted",
        "stateProvince": "St. Croix",
        "locality": "St. Croix",
        "country": "VI",
        "postalCode": "00841",
        "latitude": "17.7648",
        "longitude": "-64.8096"
    },
    "contact": {
        "email": "mjames211@telkom.com",
        "phone": "+61-211-120-6281",
        "socMedia": {
            "linkedin": "mjames211@telkom.com@linkedin.com"
        }
    },
    "login": {
        "username": "mjames",
        "oauth2": "mjames@linkedin.com",
        "password": "$2y$10$BdwXLQK532QYbm8qZ1\/Gb.HMUXcXzmoFvy4CTOygB6nkWiCQulLea"
    },
    "otherContact": {
        "emails": [
            "mjames211@maxcomm.com",
            "mjames211@relcom.com"
        ],
        "phoneNumbers": [
            "+61-211-813-3645",
            "+61-211-857-0587"
        ],
        "socMedias": [
            {
                "linkedin": "mjames211@maxcomm.com@linkedin.com"
            },
            {
                "skype": "mjames211@relcom.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-04-27"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MICHCASE0728",
    "name": {
        "title": "Mr",
        "first": "Michal",
        "middle": "P",
        "last": "Casey",
        "suffix": null
    },
    "address": {
        "streetAddress": "8488 Green Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Birmingham",
        "stateProvince": "AL",
        "locality": "Jefferson",
        "country": "US",
        "postalCode": "35215",
        "latitude": "33.6493",
        "longitude": "-86.7057"
    },
    "contact": {
        "email": "mcasey212@vodafone.com",
        "phone": "+61-212-819-0728",
        "socMedia": {
            "facebook": "mcasey212@vodafone.com@facebook.com"
        }
    },
    "login": {
        "username": "mcasey",
        "oauth2": "mcasey@facebook.com",
        "password": "$2y$10$IJpnHz4vUjX0z6byWP4F1umkP9Ae3T3THFBviNkLAQ3Dj2PHvKLF2"
    },
    "otherContact": {
        "emails": [
            "mcasey212@etisalat.com"
        ],
        "phoneNumbers": [
            "+61-212-499-6374"
        ],
        "socMedias": [
            {
                "skype": "mcasey212@etisalat.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1990-03-01"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TYLEMCGU9952",
    "name": {
        "title": null,
        "first": "Tyler",
        "middle": null,
        "last": "Mcguire",
        "suffix": null
    },
    "address": {
        "streetAddress": "432 Short Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Freilassing",
        "stateProvince": "Herzogsdorf",
        "locality": "Politischer Bezirk Urfahr-Umgebung",
        "country": "AT",
        "postalCode": "4175",
        "latitude": "48.4088",
        "longitude": "14.1243"
    },
    "contact": {
        "email": "tmcguire213@tm.com",
        "phone": "+61-213-693-9952",
        "socMedia": []
    },
    "login": {
        "username": "tmcguire",
        "oauth2": null,
        "password": "$2y$10$LwvIeyT0MzcDRl4gkFbAZO0NzFlDmjZ5g4oMsEgAoftTBqSTXzntG"
    },
    "otherContact": {
        "emails": [
            "tmcguire213@openworld.com"
        ],
        "phoneNumbers": [
            "+61-213-250-2068"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-11-07"
    },
    "totalBooked": 20,
    "discount": 0.082
});
db.customers.insertOne(
{
    "customerKey": "BRYAHUNT2447",
    "name": {
        "title": "Mr",
        "first": "Bryan",
        "middle": "Q",
        "last": "Hunter",
        "suffix": null
    },
    "address": {
        "streetAddress": "7024 Little Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "New Buckenham",
        "stateProvince": "England",
        "locality": "Norfolk",
        "country": "GB",
        "postalCode": "NR16",
        "latitude": "52.4724",
        "longitude": "1.0728"
    },
    "contact": {
        "email": "bhunter214@nii.com",
        "phone": "+61-214-999-2447",
        "socMedia": {
            "twitter": "bhunter214@nii.com@twitter.com"
        }
    },
    "login": {
        "username": "bhunter",
        "oauth2": "bhunter@twitter.com",
        "password": "$2y$10$2q\/tOtlgmCWuI.X0ivUuWuswYBB7VqbQ8qqy321pcBgG2OZVKvH2O"
    },
    "otherContact": {
        "emails": [
            "bhunter214@telus.com",
            "bhunter214@telefonica.com",
            "bhunter214@telkom.com"
        ],
        "phoneNumbers": [
            "+61-214-767-3841",
            "+61-214-473-0010",
            "+61-214-643-9483"
        ],
        "socMedias": [
            {
                "skype": "bhunter214@telus.com@skype.com"
            },
            {
                "facebook": "bhunter214@telefonica.com@facebook.com"
            },
            {
                "skype": "bhunter214@telkom.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-11-28"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DARRATKI1429",
    "name": {
        "title": "Mr",
        "first": "Darrel",
        "middle": "X",
        "last": "Atkinson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2020 Short Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0160irinci",
        "stateProvince": "Gornji Bogi\u0107evci",
        "locality": "Gornji Bogi\u0107evci",
        "country": "HR",
        "postalCode": "35429",
        "latitude": "45.3242",
        "longitude": "17.2544"
    },
    "contact": {
        "email": "datkinso215@softbank.com",
        "phone": "+61-215-832-1429",
        "socMedia": {
            "skype": "datkinso215@softbank.com@skype.com"
        }
    },
    "login": {
        "username": "datkinso",
        "oauth2": "datkinso@skype.com",
        "password": "$2y$10$5rTwV40GGBvZ9zczXiW2nO5dF2B1ENLnvcnlUphAzmhY\/RwfdCURC"
    },
    "otherContact": {
        "emails": [
            "datkinso215@uunet.com"
        ],
        "phoneNumbers": [
            "+61-215-849-7484"
        ],
        "socMedias": [
            {
                "twitter": "datkinso215@uunet.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-12-23"
    },
    "totalBooked": 14,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LINESHEP8622",
    "name": {
        "title": null,
        "first": "Linette",
        "middle": null,
        "last": "Sheppard",
        "suffix": null
    },
    "address": {
        "streetAddress": "5699 Winding Ridge Avenue",
        "buildingName": null,
        "floor": 6,
        "roomAptCondoFlat": "82",
        "city": "Jagamohanapur",
        "stateProvince": "Chikiti",
        "locality": "Ganjam",
        "country": "IN",
        "postalCode": "761010",
        "latitude": "19.828",
        "longitude": "84.401"
    },
    "contact": {
        "email": "lsheppar216@bce.com",
        "phone": "+61-216-393-8622",
        "socMedia": []
    },
    "login": {
        "username": "lsheppar",
        "oauth2": null,
        "password": "$2y$10$WRhJTqgHIHChlH.eB\/Xw1.1FhWamUvadKwWfIO4BdXRvwt0FgZzFi"
    },
    "otherContact": {
        "emails": [
            "lsheppar216@chunghwa.com"
        ],
        "phoneNumbers": [
            "+61-216-806-7160"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-08-26"
    },
    "totalBooked": 45,
    "discount": 0.019
});
db.customers.insertOne(
{
    "customerKey": "LUCITREJ1777",
    "name": {
        "title": "Ms",
        "first": "Lucina",
        "middle": "W",
        "last": "Trejo",
        "suffix": null
    },
    "address": {
        "streetAddress": "5305 Long Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Uv\u00e9a",
        "stateProvince": "Circonscription d'Uv\u00e9a",
        "locality": "Circonscription d'Uv\u00e9a",
        "country": "WF",
        "postalCode": "98600",
        "latitude": "-13.2988",
        "longitude": "-176.2205"
    },
    "contact": {
        "email": "ltrejo217@worldnet.com",
        "phone": "+61-217-315-1777",
        "socMedia": {
            "skype": "ltrejo217@worldnet.com@skype.com"
        }
    },
    "login": {
        "username": "ltrejo",
        "oauth2": "ltrejo@skype.com",
        "password": "$2y$10$pW33DIQyBSB615XnS62cM.zuru6oEdsehACGjPpmLjD2TUbd4Z8SG"
    },
    "otherContact": {
        "emails": [
            "ltrejo217@cerist.com"
        ],
        "phoneNumbers": [
            "+61-217-652-0002"
        ],
        "socMedias": [
            {
                "twitter": "ltrejo217@cerist.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1970-07-23"
    },
    "totalBooked": 18,
    "discount": 0.164
});
db.customers.insertOne(
{
    "customerKey": "ALMECOFF4026",
    "name": {
        "title": "Ms",
        "first": "Almeda",
        "middle": "B",
        "last": "Coffey",
        "suffix": null
    },
    "address": {
        "streetAddress": "4036 Green Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sebewaing",
        "stateProvince": "MI",
        "locality": "Huron",
        "country": "US",
        "postalCode": "48759",
        "latitude": "43.7289",
        "longitude": "-83.4366"
    },
    "contact": {
        "email": "acoffey218@nii.com",
        "phone": "+61-218-502-4026",
        "socMedia": {
            "facebook": "acoffey218@nii.com@facebook.com"
        }
    },
    "login": {
        "username": "acoffey",
        "oauth2": "acoffey@facebook.com",
        "password": "$2y$10$brtlhn\/EojxS449B3H4KyuLNqJT3XdTQxUqyU4rZyI6HjVNhtqihe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-02-16"
    },
    "totalBooked": 5,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CHERHUMP3766",
    "name": {
        "title": null,
        "first": "Cherri",
        "middle": null,
        "last": "Humphrey",
        "suffix": null
    },
    "address": {
        "streetAddress": "3559 Long Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "K\u00fc\u00e7\u00fckyenice",
        "stateProvince": "Mudanya",
        "locality": "Mudanya",
        "country": "TR",
        "postalCode": "16960",
        "latitude": "40.2884",
        "longitude": "28.8341"
    },
    "contact": {
        "email": "chumphre219@algonet.com",
        "phone": "+61-219-859-3766",
        "socMedia": []
    },
    "login": {
        "username": "chumphre",
        "oauth2": null,
        "password": "$2y$10$ZY0ec1VzO8oEU24FQuTPYuH3Obrz.FT7fal7SmjYYAUPmuUaPKzYG"
    },
    "otherContact": {
        "emails": [
            "chumphre219@access.com",
            "chumphre219@cci.com"
        ],
        "phoneNumbers": [
            "+61-219-305-9191",
            "+61-219-322-4406"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-11-07"
    },
    "totalBooked": 41,
    "discount": 0.054
});
db.customers.insertOne(
{
    "customerKey": "KURTNORM8405",
    "name": {
        "title": "Mr",
        "first": "Kurt",
        "middle": "H",
        "last": "Norman",
        "suffix": null
    },
    "address": {
        "streetAddress": "5787 Long Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Girard",
        "stateProvince": "KS",
        "locality": "Crawford",
        "country": "US",
        "postalCode": "66743",
        "latitude": "37.5091",
        "longitude": "-94.8569"
    },
    "contact": {
        "email": "knorman220@nii.com",
        "phone": "+61-220-249-8405",
        "socMedia": {
            "line": "knorman220@nii.com@line.com"
        }
    },
    "login": {
        "username": "knorman",
        "oauth2": "knorman@line.com",
        "password": "$2y$10$iNgyfscFDAoahKjbNU4hdeblGAAum0ShVJ5tg1NYd5rd6mpFtacUm"
    },
    "otherContact": {
        "emails": [
            "knorman220@bifty.com"
        ],
        "phoneNumbers": [
            "+61-220-648-0939"
        ],
        "socMedias": [
            {
                "line": "knorman220@bifty.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1957-10-04"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "RYANCARR9769",
    "name": {
        "title": "Mr",
        "first": "Ryan",
        "middle": "X",
        "last": "Carroll",
        "suffix": null
    },
    "address": {
        "streetAddress": "7950 Long River Ride",
        "buildingName": "Building F9",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Beallsville",
        "stateProvince": "PA",
        "locality": "Washington",
        "country": "US",
        "postalCode": "15313",
        "latitude": "40.0655",
        "longitude": "-80.0221"
    },
    "contact": {
        "email": "rcarroll221@ote.com",
        "phone": "+61-221-947-9769",
        "socMedia": {
            "facebook": "rcarroll221@ote.com@facebook.com"
        }
    },
    "login": {
        "username": "rcarroll",
        "oauth2": "rcarroll@facebook.com",
        "password": "$2y$10$XxOHBj9ETcWjHUMRXXmO4.WOPorWBf0CJHCeOnY57U6S9sjF04UpW"
    },
    "otherContact": {
        "emails": [
            "rcarroll221@cerist.com",
            "rcarroll221@access.com"
        ],
        "phoneNumbers": [
            "+61-221-845-4947",
            "+61-221-331-6804"
        ],
        "socMedias": [
            {
                "facebook": "rcarroll221@cerist.com@facebook.com"
            },
            {
                "line": "rcarroll221@access.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1958-05-21"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BENIMADD5854",
    "name": {
        "title": null,
        "first": "Benito",
        "middle": null,
        "last": "Madden",
        "suffix": null
    },
    "address": {
        "streetAddress": "1972 Green Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "7C",
        "city": "Fort George G Meade",
        "stateProvince": "MD",
        "locality": "Anne Arundel",
        "country": "US",
        "postalCode": "20755",
        "latitude": "39.1059",
        "longitude": "-76.7467"
    },
    "contact": {
        "email": "bmadden222@telia.com",
        "phone": "+61-222-224-5854",
        "socMedia": []
    },
    "login": {
        "username": "bmadden",
        "oauth2": null,
        "password": "$2y$10$ypgTnVG8yW3YI3U8\/\/c6Ye7Vm86W5bNqwQJpTePxd5aubI95DB7lm"
    },
    "otherContact": {
        "emails": [
            "bmadden222@netcom.com",
            "bmadden222@kpn.com"
        ],
        "phoneNumbers": [
            "+61-222-988-6229",
            "+61-222-922-5488"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1938-01-12"
    },
    "totalBooked": 28,
    "discount": 0.089
});
db.customers.insertOne(
{
    "customerKey": "GIANDOUG7108",
    "name": {
        "title": "Ms",
        "first": "Gianna",
        "middle": "I",
        "last": "Dougherty",
        "suffix": null
    },
    "address": {
        "streetAddress": "4085 Long Creek Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Juan",
        "stateProvince": "San Juan",
        "locality": "San Juan",
        "country": "PR",
        "postalCode": "00921",
        "latitude": "18.4663",
        "longitude": "-66.1057"
    },
    "contact": {
        "email": "gdougher223@softbank.com",
        "phone": "+61-223-765-7108",
        "socMedia": {
            "linkedin": "gdougher223@softbank.com@linkedin.com"
        }
    },
    "login": {
        "username": "gdougher",
        "oauth2": "gdougher@linkedin.com",
        "password": "$2y$10$vGkBXX96zuIlkd4pZRTWKegCVUJDxJthPZA70W590Q3uywQTvmpha"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1942-03-08"
    },
    "totalBooked": 2,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TODDGRIF3978",
    "name": {
        "title": "Mr",
        "first": "Todd",
        "middle": "Y",
        "last": "Griffith",
        "suffix": null
    },
    "address": {
        "streetAddress": "9876 Blue Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Upper Dartbrook",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2336",
        "latitude": "-32.1568",
        "longitude": "150.8063"
    },
    "contact": {
        "email": "tgriffit224@millicom.com",
        "phone": "+61-224-351-3978",
        "socMedia": {
            "google": "tgriffit224@millicom.com@google.com"
        }
    },
    "login": {
        "username": "tgriffit",
        "oauth2": "tgriffit@google.com",
        "password": "$2y$10$8Q8OlHeEddZWJLKFvmg2LOWaiM5tgCU4XMfpND8qr57muSA.g2gLC"
    },
    "otherContact": {
        "emails": [
            "tgriffit224@ktc.com",
            "tgriffit224@cubenet.com"
        ],
        "phoneNumbers": [
            "+61-224-851-9212",
            "+61-224-030-3705"
        ],
        "socMedias": [
            {
                "twitter": "tgriffit224@ktc.com@twitter.com"
            },
            {
                "line": "tgriffit224@cubenet.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1967-02-09"
    },
    "totalBooked": 43,
    "discount": 0.075
});
db.customers.insertOne(
{
    "customerKey": "RUDOBARN8147",
    "name": {
        "title": null,
        "first": "Rudolph",
        "middle": null,
        "last": "Barnes",
        "suffix": null
    },
    "address": {
        "streetAddress": "5393 Little Bridge Boulevard",
        "buildingName": null,
        "floor": 3,
        "roomAptCondoFlat": null,
        "city": "Zdole",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "8272",
        "latitude": "45.9772",
        "longitude": "15.5458"
    },
    "contact": {
        "email": "rbarnes225@zain.com",
        "phone": "+61-225-781-8147",
        "socMedia": []
    },
    "login": {
        "username": "rbarnes",
        "oauth2": null,
        "password": "$2y$10$ZbLIJtJ5NEicVtROiyn06.tOjmbv5PdghvAsj9nDt25P9qieZJmCG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-07-02"
    },
    "totalBooked": 15,
    "discount": 0.045
});
db.customers.insertOne(
{
    "customerKey": "DANEREID2679",
    "name": {
        "title": "Mr",
        "first": "Dane",
        "middle": "P",
        "last": "Reid",
        "suffix": null
    },
    "address": {
        "streetAddress": "8510 Short Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Blue Eye",
        "stateProvince": "MO",
        "locality": "Stone",
        "country": "US",
        "postalCode": "65611",
        "latitude": "36.5493",
        "longitude": "-93.3388"
    },
    "contact": {
        "email": "dreid226@movil.com",
        "phone": "+61-226-597-2679",
        "socMedia": {
            "linkedin": "dreid226@movil.com@linkedin.com"
        }
    },
    "login": {
        "username": "dreid",
        "oauth2": "dreid@linkedin.com",
        "password": "$2y$10$trnSORpwqPhexNrc0L8IAu0TQxL3D9lwMH\/ZlzQWtkYDNHm3ATEe6"
    },
    "otherContact": {
        "emails": [
            "dreid226@tt.com",
            "dreid226@bce.com"
        ],
        "phoneNumbers": [
            "+61-226-231-7969",
            "+61-226-781-6121"
        ],
        "socMedias": [
            {
                "facebook": "dreid226@tt.com@facebook.com"
            },
            {
                "twitter": "dreid226@bce.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-09-09"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SHAYCAST9333",
    "name": {
        "title": "Ms",
        "first": "Shay",
        "middle": "U",
        "last": "Castillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "2913 Short Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gr\u016b\u0161\u013ceva",
        "stateProvince": "Brie\u017euciema pag.",
        "locality": "Brie\u017euciema pag.",
        "country": "LV",
        "postalCode": "LV-4595",
        "latitude": "56.9786",
        "longitude": "27.5607"
    },
    "contact": {
        "email": "scastill227@uunet.com",
        "phone": "+61-227-404-9333",
        "socMedia": {
            "twitter": "scastill227@uunet.com@twitter.com"
        }
    },
    "login": {
        "username": "scastill",
        "oauth2": "scastill@twitter.com",
        "password": "$2y$10$G1CH6CGz1PDm3Rsa\/uYeKe741R.KSI6WX1.8M7QShp.YryRqKCCLK"
    },
    "otherContact": {
        "emails": [
            "scastill227@cci.com"
        ],
        "phoneNumbers": [
            "+61-227-954-0309"
        ],
        "socMedias": [
            {
                "line": "scastill227@cci.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-12-20"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GERAROTH2645",
    "name": {
        "title": null,
        "first": "Gerald",
        "middle": null,
        "last": "Roth",
        "suffix": null
    },
    "address": {
        "streetAddress": "6294 Green Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "7E",
        "city": "Kelso",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7270",
        "latitude": "-41.1049",
        "longitude": "146.7929"
    },
    "contact": {
        "email": "groth228@telenor.com",
        "phone": "+61-228-154-2645",
        "socMedia": []
    },
    "login": {
        "username": "groth",
        "oauth2": null,
        "password": "$2y$10$SlCkfqR25HbaPYwN.rsY7u8xiocVsB0Kz.UIfVllpXZiK9QMHZU06"
    },
    "otherContact": {
        "emails": [
            "groth228@ais.com"
        ],
        "phoneNumbers": [
            "+61-228-751-7023"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1962-09-05"
    },
    "totalBooked": 6,
    "discount": 0.02
});
db.customers.insertOne(
{
    "customerKey": "ADALMEND1824",
    "name": {
        "title": "Mr",
        "first": "Adalberto",
        "middle": "I",
        "last": "Mendez",
        "suffix": null
    },
    "address": {
        "streetAddress": "9089 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bat\u0148ovice",
        "stateProvince": "Trutnov",
        "locality": "Trutnov",
        "country": "CZ",
        "postalCode": "542 37",
        "latitude": "50.5167",
        "longitude": "16.05"
    },
    "contact": {
        "email": "amendez229@vivendi.com",
        "phone": "+61-229-066-1824",
        "socMedia": {
            "line": "amendez229@vivendi.com@line.com"
        }
    },
    "login": {
        "username": "amendez",
        "oauth2": "amendez@line.com",
        "password": "$2y$10$.An3F8k\/Zv4SkH.f3Jb8iuwAuQpPjdvRDxyFv\/mvvsYtqEqZIsk5K"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1984-10-30"
    },
    "totalBooked": 13,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "EUGEKRUE8442",
    "name": {
        "title": "Mr",
        "first": "Eugene",
        "middle": "A",
        "last": "Krueger",
        "suffix": null
    },
    "address": {
        "streetAddress": "848 Big Gully Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kweda",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6306",
        "latitude": "-32.3667",
        "longitude": "117.4333"
    },
    "contact": {
        "email": "ekrueger230@daxnet.com",
        "phone": "+61-230-387-8442",
        "socMedia": {
            "twitter": "ekrueger230@daxnet.com@twitter.com"
        }
    },
    "login": {
        "username": "ekrueger",
        "oauth2": "ekrueger@twitter.com",
        "password": "$2y$10$tovEJ5q\/HmWLU41VALERD.hH140LvY.zYrZeQvyGtbZi1ThOoYc7q"
    },
    "otherContact": {
        "emails": [
            "ekrueger230@telkom.com"
        ],
        "phoneNumbers": [
            "+61-230-620-3848"
        ],
        "socMedias": [
            {
                "google": "ekrueger230@telkom.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-01-18"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ERICJOHN7133",
    "name": {
        "title": null,
        "first": "Erick",
        "middle": null,
        "last": "Johnson",
        "suffix": null
    },
    "address": {
        "streetAddress": "895 Long Hill Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Barra De Ataques",
        "stateProvince": "Rivera",
        "locality": "Rivera",
        "country": "UY",
        "postalCode": "40000",
        "latitude": "-31.7141",
        "longitude": "-55.7228"
    },
    "contact": {
        "email": "ejohnson231@worldnet.com",
        "phone": "+61-231-535-7133",
        "socMedia": []
    },
    "login": {
        "username": "ejohnson",
        "oauth2": null,
        "password": "$2y$10$1kkyGoyMMyYVBFmR5oXJ3O.T.SpiRaHrq3klc3IuRGus05Glg6wEi"
    },
    "otherContact": {
        "emails": [
            "ejohnson231@telenor.com"
        ],
        "phoneNumbers": [
            "+61-231-088-9882"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-05-28"
    },
    "totalBooked": 71,
    "discount": 0.156
});
db.customers.insertOne(
{
    "customerKey": "THOMSHOR3131",
    "name": {
        "title": "Mr",
        "first": "Thomas",
        "middle": "D",
        "last": "Short",
        "suffix": null
    },
    "address": {
        "streetAddress": "703 Short Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tucson",
        "stateProvince": "AZ",
        "locality": "Pima",
        "country": "US",
        "postalCode": "85718",
        "latitude": "32.3112",
        "longitude": "-110.9179"
    },
    "contact": {
        "email": "tshort232@lguplus.com",
        "phone": "+61-232-439-3131",
        "socMedia": {
            "twitter": "tshort232@lguplus.com@twitter.com"
        }
    },
    "login": {
        "username": "tshort",
        "oauth2": "tshort@twitter.com",
        "password": "$2y$10$jomR\/OIXNIZL7CZxM8y58.1m2Qt9v2zD0t02J1Xmvkgjjl..HmA1q"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-03-12"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BELEBARK9595",
    "name": {
        "title": "Ms",
        "first": "Belen",
        "middle": "S",
        "last": "Barker",
        "suffix": null
    },
    "address": {
        "streetAddress": "9986 Long Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mount Magnificent",
        "stateProvince": "SA",
        "locality": "South Australia",
        "country": "AU",
        "postalCode": "5210",
        "latitude": "-35.3484",
        "longitude": "138.6518"
    },
    "contact": {
        "email": "bbarker233@sprint.com",
        "phone": "+61-233-266-9595",
        "socMedia": {
            "skype": "bbarker233@sprint.com@skype.com"
        }
    },
    "login": {
        "username": "bbarker",
        "oauth2": "bbarker@skype.com",
        "password": "$2y$10$LY7yvWMAcOrm0wV9vyvxx.wbULIhuMkVRb91R0A6i5j0io3xUTAr."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-11-20"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "FREDPECK8070",
    "name": {
        "title": null,
        "first": "Frederic",
        "middle": null,
        "last": "Peck",
        "suffix": null
    },
    "address": {
        "streetAddress": "8974 Green Mound Avenue",
        "buildingName": "Building EA",
        "floor": 2,
        "roomAptCondoFlat": "AF",
        "city": "Arakkankottai",
        "stateProvince": "Erode",
        "locality": "Erode",
        "country": "IN",
        "postalCode": "638506",
        "latitude": "11.5056",
        "longitude": "77.3862"
    },
    "contact": {
        "email": "fpeck234@cubenet.com",
        "phone": "+61-234-972-8070",
        "socMedia": []
    },
    "login": {
        "username": "fpeck",
        "oauth2": null,
        "password": "$2y$10$\/M1PAbRqmoT5NP7onoNEb.y6sTBMsDotOCpXBA26pgz.yDlmafVOO"
    },
    "otherContact": {
        "emails": [
            "fpeck234@nii.com",
            "fpeck234@verizon.com"
        ],
        "phoneNumbers": [
            "+61-234-627-9897",
            "+61-234-187-1853"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-07-12"
    },
    "totalBooked": 5,
    "discount": 0.043000000000000003
});
db.customers.insertOne(
{
    "customerKey": "SHAUCHAS2450",
    "name": {
        "title": "Ms",
        "first": "Shaunta",
        "middle": "L",
        "last": "Chase",
        "suffix": null
    },
    "address": {
        "streetAddress": "2007 Red Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sayre",
        "stateProvince": "AL",
        "locality": "Jefferson",
        "country": "US",
        "postalCode": "35139",
        "latitude": "33.7111",
        "longitude": "-86.9759"
    },
    "contact": {
        "email": "schase236@cubenet.com",
        "phone": "+61-236-025-2450",
        "socMedia": {
            "google": "schase236@cubenet.com@google.com"
        }
    },
    "login": {
        "username": "schase",
        "oauth2": "schase@google.com",
        "password": "$2y$10$a.zBMeNsffv8LQfanZPA2e4NzNKAiXQNM49J9NhMo9smaiCPH569W"
    },
    "otherContact": {
        "emails": [
            "schase236@tm.com"
        ],
        "phoneNumbers": [
            "+61-236-187-1673"
        ],
        "socMedias": [
            {
                "facebook": "schase236@tm.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-06-25"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BLAIKLIN4859",
    "name": {
        "title": null,
        "first": "Blair",
        "middle": null,
        "last": "Kline",
        "suffix": null
    },
    "address": {
        "streetAddress": "8432 Little Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Phutha Monthon",
        "stateProvince": "Nakhon Pathom",
        "locality": "Nakhon Pathom",
        "country": "TH",
        "postalCode": "73170",
        "latitude": "13.8667",
        "longitude": "100.1917"
    },
    "contact": {
        "email": "bkline237@telia.com",
        "phone": "+61-237-279-4859",
        "socMedia": []
    },
    "login": {
        "username": "bkline",
        "oauth2": null,
        "password": "$2y$10$cfHbWn.mA8AHMWrDmw0PveGe\/rUhP1e7NJLo5E4xEVFi3\/NOv7Qty"
    },
    "otherContact": {
        "emails": [
            "bkline237@openworld.com"
        ],
        "phoneNumbers": [
            "+61-237-798-6606"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-06-03"
    },
    "totalBooked": 26,
    "discount": 0.094
});
db.customers.insertOne(
{
    "customerKey": "JANEPRUI1086",
    "name": {
        "title": "Ms",
        "first": "Janell",
        "middle": "J",
        "last": "Pruitt",
        "suffix": null
    },
    "address": {
        "streetAddress": "4387 Long Woods Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Loosegate",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "PE12",
        "latitude": "52.6947",
        "longitude": "-0.0255"
    },
    "contact": {
        "email": "jpruitt238@tt.com",
        "phone": "+61-238-825-1086",
        "socMedia": {
            "twitter": "jpruitt238@tt.com@twitter.com"
        }
    },
    "login": {
        "username": "jpruitt",
        "oauth2": "jpruitt@twitter.com",
        "password": "$2y$10$r3Ed3hMcaSmbSvtLK5eVHO8XU4TYOsVPmoW2N4C6c0dCgOyRYmQmK"
    },
    "otherContact": {
        "emails": [
            "jpruitt238@rogers.com"
        ],
        "phoneNumbers": [
            "+61-238-920-2301"
        ],
        "socMedias": [
            {
                "skype": "jpruitt238@rogers.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-04-29"
    },
    "totalBooked": 57,
    "discount": 0.079
});
db.customers.insertOne(
{
    "customerKey": "JUNIARCH4328",
    "name": {
        "title": "Mr",
        "first": "Junior",
        "middle": "G",
        "last": "Archer",
        "suffix": null
    },
    "address": {
        "streetAddress": "5704 Winding Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Balikli",
        "stateProvince": "\u00c7ayirli",
        "locality": "\u00c7ayirli",
        "country": "TR",
        "postalCode": "24503",
        "latitude": "39.8399",
        "longitude": "40.0062"
    },
    "contact": {
        "email": "jarcher239@ntt.com",
        "phone": "+61-239-532-4328",
        "socMedia": {
            "google": "jarcher239@ntt.com@google.com"
        }
    },
    "login": {
        "username": "jarcher",
        "oauth2": "jarcher@google.com",
        "password": "$2y$10$GjWTCIn2m29cTWPe.nn64.OflWf4lYmXDy0z1z3rjkGXrBa0JCCHu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-04-15"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "KENDENGL0348",
    "name": {
        "title": "Dr",
        "first": "Kendall",
        "middle": null,
        "last": "English",
        "suffix": "Sr"
    },
    "address": {
        "streetAddress": "4966 Long Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "49",
        "city": "Dale",
        "stateProvince": "IN",
        "locality": "Spencer",
        "country": "US",
        "postalCode": "47523",
        "latitude": "38.1706",
        "longitude": "-87.007"
    },
    "contact": {
        "email": "kenglish240@maxcomm.com",
        "phone": "+61-240-459-0348",
        "socMedia": []
    },
    "login": {
        "username": "kenglish",
        "oauth2": null,
        "password": "$2y$10$iiMbTTt.31qmhm2Cd6oGyutadOlGVgOpMiksOP6QtFLtHcONnZppm"
    },
    "otherContact": {
        "emails": [
            "kenglish240@netcom.com",
            "kenglish240@nii.com",
            "kenglish240@telkom.com"
        ],
        "phoneNumbers": [
            "+61-240-907-8588",
            "+61-240-770-9344",
            "+61-240-725-3509"
        ]
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1940-01-12"
    },
    "totalBooked": 50,
    "discount": 0.029
});
db.customers.insertOne(
{
    "customerKey": "AUGUWHIT2427",
    "name": {
        "title": "Mr",
        "first": "August",
        "middle": "Y",
        "last": "Whitehead",
        "suffix": null
    },
    "address": {
        "streetAddress": "5812 Red Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Elsburg",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "1428",
        "latitude": "-26.3",
        "longitude": "28.1333"
    },
    "contact": {
        "email": "awhitehe241@verizon.com",
        "phone": "+61-241-431-2427",
        "socMedia": {
            "twitter": "awhitehe241@verizon.com@twitter.com"
        }
    },
    "login": {
        "username": "awhitehe",
        "oauth2": "awhitehe@twitter.com",
        "password": "$2y$10$GUpK07FBcivwpkjk4wTo3uJNdPQAIpTC63nCeB4TPASVP6gJKID8y"
    },
    "otherContact": {
        "emails": [
            "awhitehe241@belgacom.com",
            "awhitehe241@safaricom.com"
        ],
        "phoneNumbers": [
            "+61-241-309-3849",
            "+61-241-432-0955"
        ],
        "socMedias": [
            {
                "line": "awhitehe241@belgacom.com@line.com"
            },
            {
                "facebook": "awhitehe241@safaricom.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-02-16"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ZORABROW8547",
    "name": {
        "title": "Ms",
        "first": "Zora",
        "middle": "K",
        "last": "Browning",
        "suffix": null
    },
    "address": {
        "streetAddress": "9977 Winding Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "North York (Sweeney Park \/ Wigmore Park)",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "M4A",
        "latitude": "43.7276",
        "longitude": "-79.3148"
    },
    "contact": {
        "email": "zbrownin242@softbank.com",
        "phone": "+61-242-002-8547",
        "socMedia": {
            "skype": "zbrownin242@softbank.com@skype.com"
        }
    },
    "login": {
        "username": "zbrownin",
        "oauth2": "zbrownin@skype.com",
        "password": "$2y$10$VCpMcEXzTY9SQongXHqNAOIQp95DnHDGqNwlLp0om.L7CmL7jWVfC"
    },
    "otherContact": {
        "emails": [
            "zbrownin242@cubenet.com",
            "zbrownin242@airtel.com"
        ],
        "phoneNumbers": [
            "+61-242-031-6327",
            "+61-242-873-7243"
        ],
        "socMedias": [
            {
                "facebook": "zbrownin242@cubenet.com@facebook.com"
            },
            {
                "skype": "zbrownin242@airtel.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-11-26"
    },
    "totalBooked": 14,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "GLENPONC2136",
    "name": {
        "title": "Dr",
        "first": "Glennie",
        "middle": null,
        "last": "Ponce",
        "suffix": "II"
    },
    "address": {
        "streetAddress": "5854 Long Mountain Boulevard",
        "buildingName": null,
        "floor": 2,
        "roomAptCondoFlat": null,
        "city": "Ciudad Gandera",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10116",
        "latitude": "18.45",
        "longitude": "-69.9333"
    },
    "contact": {
        "email": "gponce243@ccs.com",
        "phone": "+61-243-209-2136",
        "socMedia": []
    },
    "login": {
        "username": "gponce",
        "oauth2": null,
        "password": "$2y$10$abtp.aazk0fnWLBasyENW.seUicV0mH.BK6pPtTBsxJvN60GnNk3q"
    },
    "otherContact": {
        "emails": [
            "gponce243@tt.com",
            "gponce243@centurylink.com"
        ],
        "phoneNumbers": [
            "+61-243-306-3933",
            "+61-243-501-5083"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1948-07-29"
    },
    "totalBooked": 11,
    "discount": 0.017
});
db.customers.insertOne(
{
    "customerKey": "LETTCARE2661",
    "name": {
        "title": "Ms",
        "first": "Lettie",
        "middle": "A",
        "last": "Carey",
        "suffix": null
    },
    "address": {
        "streetAddress": "7573 Long Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mahui",
        "stateProvince": "Bettiah",
        "locality": "West Champaran",
        "country": "IN",
        "postalCode": "845103",
        "latitude": "27.1104",
        "longitude": "84.3109"
    },
    "contact": {
        "email": "lcarey244@etisalat.com",
        "phone": "+61-244-431-2661",
        "socMedia": {
            "facebook": "lcarey244@etisalat.com@facebook.com"
        }
    },
    "login": {
        "username": "lcarey",
        "oauth2": "lcarey@facebook.com",
        "password": "$2y$10$6z\/n0dNTAV\/\/93N51UuGjOx7kOJ1t7zf3gCymKnKbN.OA9pH6tSOO"
    },
    "otherContact": {
        "emails": [
            "lcarey244@uunet.com"
        ],
        "phoneNumbers": [
            "+61-244-169-0370"
        ],
        "socMedias": [
            {
                "skype": "lcarey244@uunet.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-09-12"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ROSAGUER3277",
    "name": {
        "title": "Ms",
        "first": "Rosario",
        "middle": "Z",
        "last": "Guerrero",
        "suffix": null
    },
    "address": {
        "streetAddress": "9031 Long Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Reykjav\u00edk - 12",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "132",
        "latitude": "64.1345",
        "longitude": "-21.7986"
    },
    "contact": {
        "email": "rguerrer245@telstra.com",
        "phone": "+61-245-452-3277",
        "socMedia": {
            "skype": "rguerrer245@telstra.com@skype.com"
        }
    },
    "login": {
        "username": "rguerrer",
        "oauth2": "rguerrer@skype.com",
        "password": "$2y$10$SSaBv.JAeEnJJaNjK\/VjheEiXeVt5bwwhYN8NC0sKWqNDIFaI\/UiO"
    },
    "otherContact": {
        "emails": [
            "rguerrer245@bt.com",
            "rguerrer245@cci.com"
        ],
        "phoneNumbers": [
            "+61-245-920-3635",
            "+61-245-618-3419"
        ],
        "socMedias": [
            {
                "facebook": "rguerrer245@bt.com@facebook.com"
            },
            {
                "skype": "rguerrer245@cci.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-05-02"
    },
    "totalBooked": 93,
    "discount": 0.047
});
db.customers.insertOne(
{
    "customerKey": "VONCFITZ5037",
    "name": {
        "title": null,
        "first": "Voncile",
        "middle": null,
        "last": "Fitzpatrick",
        "suffix": null
    },
    "address": {
        "streetAddress": "6526 Winding Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "29",
        "city": "Clarksdale",
        "stateProvince": "MS",
        "locality": "Coahoma",
        "country": "US",
        "postalCode": "38614",
        "latitude": "34.256",
        "longitude": "-90.6348"
    },
    "contact": {
        "email": "vfitzpat246@telus.com",
        "phone": "+61-246-022-5037",
        "socMedia": []
    },
    "login": {
        "username": "vfitzpat",
        "oauth2": null,
        "password": "$2y$10$HoSH.r.o2vP3xGgE969NDuceQ.9mjK08dRfVRbxdmQfVC9SjQ5dKy"
    },
    "otherContact": {
        "emails": [
            "vfitzpat246@unicom.com"
        ],
        "phoneNumbers": [
            "+61-246-333-2271"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-08-07"
    },
    "totalBooked": 45,
    "discount": 0.081
});
db.customers.insertOne(
{
    "customerKey": "JOLYANDE6883",
    "name": {
        "title": "Ms",
        "first": "Jolyn",
        "middle": "G",
        "last": "Anderson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2930 Green Canyon Avenue",
        "buildingName": "Building DE",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u043e",
        "stateProvince": "Rossony",
        "locality": "Rossony",
        "country": "BY",
        "postalCode": "211470",
        "latitude": "55.8821",
        "longitude": "28.8492"
    },
    "contact": {
        "email": "janderso247@telecom.com",
        "phone": "+61-247-509-6883",
        "socMedia": {
            "facebook": "janderso247@telecom.com@facebook.com"
        }
    },
    "login": {
        "username": "janderso",
        "oauth2": "janderso@facebook.com",
        "password": "$2y$10$Vx6FZr1yBq5CuNqkXrr3leJzCgMalc9OXks2zZtnUGUA1QlLVFriy"
    },
    "otherContact": {
        "emails": [
            "janderso247@tata.com"
        ],
        "phoneNumbers": [
            "+61-247-487-7752"
        ],
        "socMedias": [
            {
                "line": "janderso247@tata.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-03-30"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BRYASCHW4603",
    "name": {
        "title": "Mr",
        "first": "Bryant",
        "middle": "P",
        "last": "Schwartz",
        "suffix": null
    },
    "address": {
        "streetAddress": "1272 Long Ridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Juna Ghantila",
        "stateProvince": "Morvi",
        "locality": "Rajkot",
        "country": "IN",
        "postalCode": "363630",
        "latitude": "21.7674",
        "longitude": "70.8645"
    },
    "contact": {
        "email": "bschwart248@sktelecom.com",
        "phone": "+61-248-143-4603",
        "socMedia": {
            "twitter": "bschwart248@sktelecom.com@twitter.com"
        }
    },
    "login": {
        "username": "bschwart",
        "oauth2": "bschwart@twitter.com",
        "password": "$2y$10$57DSE4XaO9hCXW8nZChtI.ZuqEjo0CLHXzpYukXtAmvq10.HReyzC"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-04-27"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ANTOSIER8883",
    "name": {
        "title": null,
        "first": "Anton",
        "middle": null,
        "last": "Sierra",
        "suffix": null
    },
    "address": {
        "streetAddress": "5532 Short Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Strumica",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "2400",
        "latitude": "41.4375",
        "longitude": "22.6433"
    },
    "contact": {
        "email": "asierra249@kddi.com",
        "phone": "+61-249-105-8883",
        "socMedia": []
    },
    "login": {
        "username": "asierra",
        "oauth2": null,
        "password": "$2y$10$LQ0GyniWxkrcpzPQQb6JjOT1dKTWuqlxHxBUQUGte.NpoWxBBaMn6"
    },
    "otherContact": {
        "emails": [
            "asierra249@telesystems.com",
            "asierra249@telecomitalia.com"
        ],
        "phoneNumbers": [
            "+61-249-258-7987",
            "+61-249-264-9250"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-06-12"
    },
    "totalBooked": 8,
    "discount": 0.069
});
db.customers.insertOne(
{
    "customerKey": "DALTCHOI6697",
    "name": {
        "title": "Mr",
        "first": "Dalton",
        "middle": "M",
        "last": "Choi",
        "suffix": null
    },
    "address": {
        "streetAddress": "7195 Winding Stream Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Harrold",
        "stateProvince": "TX",
        "locality": "Wilbarger",
        "country": "US",
        "postalCode": "76364",
        "latitude": "34.0806",
        "longitude": "-99.0323"
    },
    "contact": {
        "email": "dchoi250@econnect.com",
        "phone": "+61-250-658-6697",
        "socMedia": {
            "google": "dchoi250@econnect.com@google.com"
        }
    },
    "login": {
        "username": "dchoi",
        "oauth2": "dchoi@google.com",
        "password": "$2y$10$CEdubA.9Xk16EV.X9m02NuFslZPvvAsvHRLc.gwryCkHcROmZLImy"
    },
    "otherContact": {
        "emails": [
            "dchoi250@singtel.com"
        ],
        "phoneNumbers": [
            "+61-250-688-7980"
        ],
        "socMedias": [
            {
                "facebook": "dchoi250@singtel.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1985-08-29"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MITCDAWS0650",
    "name": {
        "title": "Ms",
        "first": "Mitchell",
        "middle": "Q",
        "last": "Dawson",
        "suffix": null
    },
    "address": {
        "streetAddress": "8129 Long Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Racovi\u0163a",
        "stateProvince": "D\u00e2mbovi\u0163a",
        "locality": "D\u00e2mbovi\u0163a",
        "country": "RO",
        "postalCode": "137072",
        "latitude": "44.8393",
        "longitude": "25.6208"
    },
    "contact": {
        "email": "mdawson251@tm.com",
        "phone": "+61-251-434-0650",
        "socMedia": {
            "linkedin": "mdawson251@tm.com@linkedin.com"
        }
    },
    "login": {
        "username": "mdawson",
        "oauth2": "mdawson@linkedin.com",
        "password": "$2y$10$jRY7fg\/t2hMnI41Q9CQWj.fuxdq\/2H6t6SV5iVoQZSydYL03ciQmq"
    },
    "otherContact": {
        "emails": [
            "mdawson251@softbank.com"
        ],
        "phoneNumbers": [
            "+61-251-204-4384"
        ],
        "socMedias": [
            {
                "line": "mdawson251@softbank.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-08-20"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JOYEWALT1963",
    "name": {
        "title": null,
        "first": "Joye",
        "middle": null,
        "last": "Walters",
        "suffix": null
    },
    "address": {
        "streetAddress": "3759 Blue Bend Boulevard",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": "A4",
        "city": "Edmonton (Central Londonderry)",
        "stateProvince": "AB",
        "locality": "Edmonton",
        "country": "CA",
        "postalCode": "T5C",
        "latitude": "53.5996",
        "longitude": "-113.4549"
    },
    "contact": {
        "email": "jwalters252@ote.com",
        "phone": "+61-252-644-1963",
        "socMedia": []
    },
    "login": {
        "username": "jwalters",
        "oauth2": null,
        "password": "$2y$10$e4VsQKsDRLlnNS7NVae.9.7rxlLkFSyMFRXA0edq82Lx6AYcXMAW."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-03-06"
    },
    "totalBooked": 34,
    "discount": 0.067
});
db.customers.insertOne(
{
    "customerKey": "JOLAMCKE6031",
    "name": {
        "title": "Ms",
        "first": "Jolanda",
        "middle": "V",
        "last": "Mckee",
        "suffix": null
    },
    "address": {
        "streetAddress": "763 Big Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Playa Azul",
        "stateProvince": "Colonia",
        "locality": "Colonia",
        "country": "UY",
        "postalCode": "70300",
        "latitude": "-34.398",
        "longitude": "-56.9659"
    },
    "contact": {
        "email": "jmckee253@telkom.com",
        "phone": "+61-253-126-6031",
        "socMedia": {
            "twitter": "jmckee253@telkom.com@twitter.com"
        }
    },
    "login": {
        "username": "jmckee",
        "oauth2": "jmckee@twitter.com",
        "password": "$2y$10$m57SuML.em.DOjpsBH4tI.9ZPClgZv4zaTjbuWetcD48yopJXBQ.S"
    },
    "otherContact": {
        "emails": [
            "jmckee253@access.com"
        ],
        "phoneNumbers": [
            "+61-253-475-2335"
        ],
        "socMedias": [
            {
                "twitter": "jmckee253@access.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-03-08"
    },
    "totalBooked": 3,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DANYBARB0419",
    "name": {
        "title": "Ms",
        "first": "Danyelle",
        "middle": "M",
        "last": "Barber",
        "suffix": null
    },
    "address": {
        "streetAddress": "4786 Green Bridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Usgao",
        "stateProvince": "Ponda",
        "locality": "North Goa",
        "country": "IN",
        "postalCode": "403406",
        "latitude": "15.4333",
        "longitude": "74.0667"
    },
    "contact": {
        "email": "dbarber254@megafon.com",
        "phone": "+61-254-574-0419",
        "socMedia": {
            "linkedin": "dbarber254@megafon.com@linkedin.com"
        }
    },
    "login": {
        "username": "dbarber",
        "oauth2": "dbarber@linkedin.com",
        "password": "$2y$10$UYaaEynS2tahszbfAShfYOaWFlI3XCHyW6CZgfUGRUtFJdT5T3Cu6"
    },
    "otherContact": {
        "emails": [
            "dbarber254@verizon.com"
        ],
        "phoneNumbers": [
            "+61-254-621-6240"
        ],
        "socMedias": [
            {
                "skype": "dbarber254@verizon.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-12-08"
    },
    "totalBooked": 13,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "STEVWASH6868",
    "name": {
        "title": null,
        "first": "Steve",
        "middle": null,
        "last": "Washington",
        "suffix": null
    },
    "address": {
        "streetAddress": "7186 Little Tree Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chuuk",
        "stateProvince": "State of Chuuk",
        "locality": "State of Chuuk",
        "country": "FM",
        "postalCode": "96942",
        "latitude": "7.1383",
        "longitude": "151.5031"
    },
    "contact": {
        "email": "swashing255@bt.com",
        "phone": "+61-255-925-6868",
        "socMedia": []
    },
    "login": {
        "username": "swashing",
        "oauth2": null,
        "password": "$2y$10$p7dV711AJPiRpIUPSin\/S.Jd1LIHcqR\/6fTIt.aPdo3OQePJzFh9y"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-12-06"
    },
    "totalBooked": 28,
    "discount": 0.055
});
db.customers.insertOne(
{
    "customerKey": "PAULGUER1871",
    "name": {
        "title": "Ms",
        "first": "Pauline",
        "middle": "W",
        "last": "Guerra",
        "suffix": null
    },
    "address": {
        "streetAddress": "6416 Red Mountain Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Syyed Nagar Post Office",
        "stateProvince": "Rawatpur Gaon",
        "locality": "Kanpur Nagar",
        "country": "IN",
        "postalCode": "208019",
        "latitude": "26.4756",
        "longitude": "80.2763"
    },
    "contact": {
        "email": "pguerra256@telia.com",
        "phone": "+61-256-978-1871",
        "socMedia": {
            "facebook": "pguerra256@telia.com@facebook.com"
        }
    },
    "login": {
        "username": "pguerra",
        "oauth2": "pguerra@facebook.com",
        "password": "$2y$10$b0rY2nwjyEa\/SZS.ImVPF.NPY4nHTJAnLN6ns7Oi6Ekc.77ZalSQ6"
    },
    "otherContact": {
        "emails": [
            "pguerra256@icom.com",
            "pguerra256@ooredoo.com",
            "pguerra256@movil.com"
        ],
        "phoneNumbers": [
            "+61-256-634-7362",
            "+61-256-310-1887",
            "+61-256-225-0806"
        ],
        "socMedias": [
            {
                "line": "pguerra256@icom.com@line.com"
            },
            {
                "facebook": "pguerra256@ooredoo.com@facebook.com"
            },
            {
                "twitter": "pguerra256@movil.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-02-10"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LONNSOLI7297",
    "name": {
        "title": "Mr",
        "first": "Lonny",
        "middle": "B",
        "last": "Solis",
        "suffix": null
    },
    "address": {
        "streetAddress": "6196 Big Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Juan",
        "stateProvince": "San Juan",
        "locality": "San Juan",
        "country": "PR",
        "postalCode": "00916",
        "latitude": "18.4663",
        "longitude": "-66.1057"
    },
    "contact": {
        "email": "lsolis257@belgacom.com",
        "phone": "+61-257-366-7297",
        "socMedia": {
            "line": "lsolis257@belgacom.com@line.com"
        }
    },
    "login": {
        "username": "lsolis",
        "oauth2": "lsolis@line.com",
        "password": "$2y$10$uk3dpNSQZsx8MrzVXVwzG.ClRr8yLNiOZLR9.7\/UdQC2XYGYXbUSy"
    },
    "otherContact": {
        "emails": [
            "lsolis257@telefonica.com",
            "lsolis257@verizon.com",
            "lsolis257@turkcell.com"
        ],
        "phoneNumbers": [
            "+61-257-410-2723",
            "+61-257-381-1878",
            "+61-257-712-2279"
        ],
        "socMedias": [
            {
                "line": "lsolis257@telefonica.com@line.com"
            },
            {
                "twitter": "lsolis257@verizon.com@twitter.com"
            },
            {
                "google": "lsolis257@turkcell.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-04-03"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "REBEHESS3223",
    "name": {
        "title": null,
        "first": "Rebecka",
        "middle": null,
        "last": "Hess",
        "suffix": null
    },
    "address": {
        "streetAddress": "5909 Little Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "DD",
        "city": "Harmers Haven",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3995",
        "latitude": "-38.5752",
        "longitude": "145.5665"
    },
    "contact": {
        "email": "rhess258@telstra.com",
        "phone": "+61-258-732-3223",
        "socMedia": []
    },
    "login": {
        "username": "rhess",
        "oauth2": null,
        "password": "$2y$10$\/0uLaNq8XwuE8Gmr4ddKI.AequfpU0857koG7h4bfUj0FZ4TfdDoK"
    },
    "otherContact": {
        "emails": [
            "rhess258@oi.com",
            "rhess258@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-258-628-7837",
            "+61-258-450-7964"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-06-17"
    },
    "totalBooked": 28,
    "discount": 0.075
});
db.customers.insertOne(
{
    "customerKey": "ERIKBRAN8238",
    "name": {
        "title": "Ms",
        "first": "Erika",
        "middle": "B",
        "last": "Branch",
        "suffix": null
    },
    "address": {
        "streetAddress": "9093 Big Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chhawrtui",
        "stateProvince": "Khawzawl",
        "locality": "Champhai",
        "country": "IN",
        "postalCode": "796310",
        "latitude": "23.5044",
        "longitude": "93.1602"
    },
    "contact": {
        "email": "ebranch259@nii.com",
        "phone": "+61-259-461-8238",
        "socMedia": {
            "facebook": "ebranch259@nii.com@facebook.com"
        }
    },
    "login": {
        "username": "ebranch",
        "oauth2": "ebranch@facebook.com",
        "password": "$2y$10$1YaWhVLX5Je6DI3q775IJO2EnZMhMRGEYkM5S.lumzvvJfZ0VyUAi"
    },
    "otherContact": {
        "emails": [
            "ebranch259@telefonica.com",
            "ebranch259@openworld.com"
        ],
        "phoneNumbers": [
            "+61-259-785-9938",
            "+61-259-248-6442"
        ],
        "socMedias": [
            {
                "google": "ebranch259@telefonica.com@google.com"
            },
            {
                "linkedin": "ebranch259@openworld.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-01-28"
    },
    "totalBooked": 61,
    "discount": 0.027
});
db.customers.insertOne(
{
    "customerKey": "BASIDUDL0813",
    "name": {
        "title": "Mr",
        "first": "Basil",
        "middle": "G",
        "last": "Dudley",
        "suffix": null
    },
    "address": {
        "streetAddress": "888 Blue Woods Avenue",
        "buildingName": "Building C2",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pullman",
        "stateProvince": "WA",
        "locality": "Whitman",
        "country": "US",
        "postalCode": "99163",
        "latitude": "46.7352",
        "longitude": "-117.1729"
    },
    "contact": {
        "email": "bdudley260@zain.com",
        "phone": "+61-260-164-0813",
        "socMedia": {
            "linkedin": "bdudley260@zain.com@linkedin.com"
        }
    },
    "login": {
        "username": "bdudley",
        "oauth2": "bdudley@linkedin.com",
        "password": "$2y$10$XKiNk.ty347DbRIakvvhWuCFvQLHaWZG07QRova1f655RfUQMfmG."
    },
    "otherContact": {
        "emails": [
            "bdudley260@netcom.com"
        ],
        "phoneNumbers": [
            "+61-260-955-7237"
        ],
        "socMedias": [
            {
                "skype": "bdudley260@netcom.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-11-27"
    },
    "totalBooked": 5,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SANFMILL4264",
    "name": {
        "title": null,
        "first": "Sanford",
        "middle": null,
        "last": "Mills",
        "suffix": null
    },
    "address": {
        "streetAddress": "226 Little Ridge Way",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": null,
        "city": "Tabuadelo",
        "stateProvince": "Pinheiro Vrm",
        "locality": "Vieira do Minho",
        "country": "PT",
        "postalCode": "4850-273",
        "latitude": "41.5825",
        "longitude": "-8.1878"
    },
    "contact": {
        "email": "smills261@telecom.com",
        "phone": "+61-261-581-4264",
        "socMedia": []
    },
    "login": {
        "username": "smills",
        "oauth2": null,
        "password": "$2y$10$zcVVlFJU38ZWtpSW1mm2tuCtu1hTKVl0D1aIP89Jje7qQaRbdAqai"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-03-10"
    },
    "totalBooked": 11,
    "discount": 0.094
});
db.customers.insertOne(
{
    "customerKey": "ABDUOLSE6268",
    "name": {
        "title": "Mr",
        "first": "Abdul",
        "middle": "C",
        "last": "Olsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "8463 Short Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bishop Norton",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "LN2",
        "latitude": "53.2558",
        "longitude": "-0.5077"
    },
    "contact": {
        "email": "aolsen262@att.com",
        "phone": "+61-262-249-6268",
        "socMedia": {
            "skype": "aolsen262@att.com@skype.com"
        }
    },
    "login": {
        "username": "aolsen",
        "oauth2": "aolsen@skype.com",
        "password": "$2y$10$3PCwTyZc9FnlIR..Kqd3Te2Jhw5cT8tllqe4qpFO5svF3nMpnb8qG"
    },
    "otherContact": {
        "emails": [
            "aolsen262@vodafone.com",
            "aolsen262@centurylink.com"
        ],
        "phoneNumbers": [
            "+61-262-811-6708",
            "+61-262-003-6849"
        ],
        "socMedias": [
            {
                "facebook": "aolsen262@vodafone.com@facebook.com"
            },
            {
                "linkedin": "aolsen262@centurylink.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1983-07-19"
    },
    "totalBooked": 11,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NELIENRI3245",
    "name": {
        "title": "Ms",
        "first": "Nelida",
        "middle": "H",
        "last": "Enriquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "3472 Long Canyon Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hounslow East",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "TW3",
        "latitude": "51.4733",
        "longitude": "-0.3568"
    },
    "contact": {
        "email": "nenrique263@safaricom.com",
        "phone": "+61-263-566-3245",
        "socMedia": {
            "google": "nenrique263@safaricom.com@google.com"
        }
    },
    "login": {
        "username": "nenrique",
        "oauth2": "nenrique@google.com",
        "password": "$2y$10$rQAV524IIiyNhU8b.r7wMuRYtq4eS9eB7VIoMGo9h.xA5sMG7Rj7q"
    },
    "otherContact": {
        "emails": [
            "nenrique263@orange.com",
            "nenrique263@telesystems.com"
        ],
        "phoneNumbers": [
            "+61-263-490-6660",
            "+61-263-615-0335"
        ],
        "socMedias": [
            {
                "facebook": "nenrique263@orange.com@facebook.com"
            },
            {
                "line": "nenrique263@telesystems.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-01-18"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "RICKPADI9335",
    "name": {
        "title": null,
        "first": "Rickie",
        "middle": null,
        "last": "Padilla",
        "suffix": null
    },
    "address": {
        "streetAddress": "8379 Short River Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "28",
        "city": "Wangoo Laipham",
        "stateProvince": "Nil",
        "locality": "Thoubal",
        "country": "IN",
        "postalCode": "795103",
        "latitude": "24.4779",
        "longitude": "93.9396"
    },
    "contact": {
        "email": "rpadilla264@safaricom.com",
        "phone": "+61-264-258-9335",
        "socMedia": []
    },
    "login": {
        "username": "rpadilla",
        "oauth2": null,
        "password": "$2y$10$kpNqmlV9N5l9GuI33VTO8.KOQc32E2A.tduQAVobRUnWH4dNptZGm"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-07-08"
    },
    "totalBooked": 29,
    "discount": 0.074
});
db.customers.insertOne(
{
    "customerKey": "JAMATRUO4169",
    "name": {
        "title": "Mr",
        "first": "Jamar",
        "middle": "Z",
        "last": "Truong",
        "suffix": null
    },
    "address": {
        "streetAddress": "2166 Red Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pracu\u00faba",
        "stateProvince": "Amapa",
        "locality": "Amapa",
        "country": "BR",
        "postalCode": "68918-000",
        "latitude": "1.6708",
        "longitude": "-51.2449"
    },
    "contact": {
        "email": "jtruong265@algonet.com",
        "phone": "+61-265-959-4169",
        "socMedia": {
            "linkedin": "jtruong265@algonet.com@linkedin.com"
        }
    },
    "login": {
        "username": "jtruong",
        "oauth2": "jtruong@linkedin.com",
        "password": "$2y$10$CIqNajc0rYSygeQ55v9VpetzWqkzKxmBduco7EfV49dFpbMHhCn8W"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-08-10"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ELMIMATH9667",
    "name": {
        "title": "Ms",
        "first": "Elmira",
        "middle": "W",
        "last": "Mathews",
        "suffix": null
    },
    "address": {
        "streetAddress": "9028 Red Bridge Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hill Top",
        "stateProvince": "NSW",
        "locality": "CAMPBELLTOWN",
        "country": "AU",
        "postalCode": "2575",
        "latitude": "-34.3479",
        "longitude": "150.4955"
    },
    "contact": {
        "email": "emathews266@ooredoo.com",
        "phone": "+61-266-978-9667",
        "socMedia": {
            "line": "emathews266@ooredoo.com@line.com"
        }
    },
    "login": {
        "username": "emathews",
        "oauth2": "emathews@line.com",
        "password": "$2y$10$WC\/HBRz\/\/9hdYKR8Lu6cKOm1\/gxgLg68n6fOYqXc6xXa4hzt4lgK6"
    },
    "otherContact": {
        "emails": [
            "emathews266@vivendi.com",
            "emathews266@kpn.com"
        ],
        "phoneNumbers": [
            "+61-266-518-5774",
            "+61-266-800-2978"
        ],
        "socMedias": [
            {
                "google": "emathews266@vivendi.com@google.com"
            },
            {
                "skype": "emathews266@kpn.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-05-29"
    },
    "totalBooked": 80,
    "discount": 0.194
});
db.customers.insertOne(
{
    "customerKey": "JODYMEYE7262",
    "name": {
        "title": null,
        "first": "Jody",
        "middle": null,
        "last": "Meyer",
        "suffix": null
    },
    "address": {
        "streetAddress": "9902 Blue Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Vremski Britof",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "6217",
        "latitude": "45.6571",
        "longitude": "14.0301"
    },
    "contact": {
        "email": "jmeyer267@telesystems.com",
        "phone": "+61-267-189-7262",
        "socMedia": []
    },
    "login": {
        "username": "jmeyer",
        "oauth2": null,
        "password": "$2y$10$vDJw7ZQnPVHHFrPiZ\/WXX.zzFoDFlnApphoY4QTwgh5CZfP.pmeTm"
    },
    "otherContact": {
        "emails": [
            "jmeyer267@worldnet.com"
        ],
        "phoneNumbers": [
            "+61-267-633-0022"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1940-07-09"
    },
    "totalBooked": 27,
    "discount": 0.015
});
db.customers.insertOne(
{
    "customerKey": "ABELSHEP0757",
    "name": {
        "title": "Mr",
        "first": "Abel",
        "middle": "J",
        "last": "Shepherd",
        "suffix": null
    },
    "address": {
        "streetAddress": "3994 Short Ditch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Port Noarlunga",
        "stateProvince": "SA",
        "locality": "SA CITY SUBS",
        "country": "AU",
        "postalCode": "5167",
        "latitude": "-35.148",
        "longitude": "138.471"
    },
    "contact": {
        "email": "ashepher268@telecomitalia.com",
        "phone": "+61-268-090-0757",
        "socMedia": {
            "facebook": "ashepher268@telecomitalia.com@facebook.com"
        }
    },
    "login": {
        "username": "ashepher",
        "oauth2": "ashepher@facebook.com",
        "password": "$2y$10$jIuZbmyXxg1CIwc83pvkBODtt7zlm7uURPDQgkunXRRgBGunm0v66"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-03-19"
    },
    "totalBooked": 8,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LISBCHUR2678",
    "name": {
        "title": "Ms",
        "first": "Lisbeth",
        "middle": "U",
        "last": "Church",
        "suffix": null
    },
    "address": {
        "streetAddress": "2189 Green Canyon Road",
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
        "email": "lchurch269@sprint.com",
        "phone": "+61-269-534-2678",
        "socMedia": {
            "google": "lchurch269@sprint.com@google.com"
        }
    },
    "login": {
        "username": "lchurch",
        "oauth2": "lchurch@google.com",
        "password": "$2y$10$JvVHTFyK4AJssmvixRaeYOqQ.liThLa.2dFICu\/eFrgsfSbuKq8je"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-08-17"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LESAMCCA7154",
    "name": {
        "title": null,
        "first": "Lesa",
        "middle": null,
        "last": "Mccarty",
        "suffix": null
    },
    "address": {
        "streetAddress": "5680 Short Tree Road",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": "C2",
        "city": "Boggstown",
        "stateProvince": "IN",
        "locality": "Shelby",
        "country": "US",
        "postalCode": "46110",
        "latitude": "39.5666",
        "longitude": "-85.9141"
    },
    "contact": {
        "email": "lmccarty270@apicnet.com",
        "phone": "+61-270-898-7154",
        "socMedia": []
    },
    "login": {
        "username": "lmccarty",
        "oauth2": null,
        "password": "$2y$10$xQg8S1n\/AlWDNWZBaHGdae\/fODeec3Tkuqnbsds\/66unUbGz0iy66"
    },
    "otherContact": {
        "emails": [
            "lmccarty270@bce.com",
            "lmccarty270@bce.com"
        ],
        "phoneNumbers": [
            "+61-270-077-6800",
            "+61-270-192-8271"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-07-02"
    },
    "totalBooked": 7,
    "discount": 0.027
});
db.customers.insertOne(
{
    "customerKey": "XAVIBEAS5580",
    "name": {
        "title": "Mr",
        "first": "Xavier",
        "middle": "D",
        "last": "Beasley",
        "suffix": null
    },
    "address": {
        "streetAddress": "5913 Blue Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hyton",
        "stateProvince": "England",
        "locality": "Cumbria",
        "country": "GB",
        "postalCode": "LA19",
        "latitude": "54.2759",
        "longitude": "-3.3721"
    },
    "contact": {
        "email": "xbeasley271@telstra.com",
        "phone": "+61-271-724-5580",
        "socMedia": {
            "line": "xbeasley271@telstra.com@line.com"
        }
    },
    "login": {
        "username": "xbeasley",
        "oauth2": "xbeasley@line.com",
        "password": "$2y$10$CiqoAdkYQS5b64ci4kc2SOFcGHiPPb7SiTBtLN04PRKkb9dokIbYe"
    },
    "otherContact": {
        "emails": [
            "xbeasley271@orstom.com",
            "xbeasley271@tata.com",
            "xbeasley271@telecom.com"
        ],
        "phoneNumbers": [
            "+61-271-432-6552",
            "+61-271-033-9111",
            "+61-271-195-6277"
        ],
        "socMedias": [
            {
                "skype": "xbeasley271@orstom.com@skype.com"
            },
            {
                "google": "xbeasley271@tata.com@google.com"
            },
            {
                "line": "xbeasley271@telecom.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-10-17"
    },
    "totalBooked": 2,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MINNWATS9295",
    "name": {
        "title": "Ms",
        "first": "Minna",
        "middle": "Y",
        "last": "Watson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7867 Green Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "East-the-Water",
        "stateProvince": "England",
        "locality": "Devon",
        "country": "GB",
        "postalCode": "EX39",
        "latitude": "50.9919",
        "longitude": "-4.2474"
    },
    "contact": {
        "email": "mwatson272@att.com",
        "phone": "+61-272-617-9295",
        "socMedia": {
            "google": "mwatson272@att.com@google.com"
        }
    },
    "login": {
        "username": "mwatson",
        "oauth2": "mwatson@google.com",
        "password": "$2y$10$7EcgVDDkB9vgQDBWH7t\/ZuJ01fZLfrgqSNeBckGm4\/nCuLJXAje5a"
    },
    "otherContact": {
        "emails": [
            "mwatson272@worldnet.com"
        ],
        "phoneNumbers": [
            "+61-272-076-6930"
        ],
        "socMedias": [
            {
                "twitter": "mwatson272@worldnet.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-03-21"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "AHMENAVA9671",
    "name": {
        "title": null,
        "first": "Ahmed",
        "middle": null,
        "last": "Nava",
        "suffix": null
    },
    "address": {
        "streetAddress": "4984 Red Stream Street",
        "buildingName": "Building 78",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nanortalik",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3922",
        "latitude": "60.1167",
        "longitude": "-45.2167"
    },
    "contact": {
        "email": "anava273@nii.com",
        "phone": "+61-273-178-9671",
        "socMedia": []
    },
    "login": {
        "username": "anava",
        "oauth2": null,
        "password": "$2y$10$9CyevS3Zc.KyR8KVmlTv0.YSbuDEo3iurJK\/g8BPuEeGZ72FSjX3S"
    },
    "otherContact": {
        "emails": [
            "anava273@sktelecom.com",
            "anava273@lguplus.com"
        ],
        "phoneNumbers": [
            "+61-273-006-1394",
            "+61-273-237-6583"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-04-02"
    },
    "totalBooked": 11,
    "discount": 0.035
});
db.customers.insertOne(
{
    "customerKey": "JERIBARB1762",
    "name": {
        "title": "Ms",
        "first": "Jerica",
        "middle": "G",
        "last": "Barber",
        "suffix": null
    },
    "address": {
        "streetAddress": "7016 Green Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mc Intire",
        "stateProvince": "IA",
        "locality": "Mitchell",
        "country": "US",
        "postalCode": "50455",
        "latitude": "43.45",
        "longitude": "-92.6048"
    },
    "contact": {
        "email": "jbarber274@telefonica.com",
        "phone": "+61-274-163-1762",
        "socMedia": {
            "skype": "jbarber274@telefonica.com@skype.com"
        }
    },
    "login": {
        "username": "jbarber",
        "oauth2": "jbarber@skype.com",
        "password": "$2y$10$sNzwPsJjttXbuJff3r1A2.QlvvxYbK8Y5fvfFhgmgwaClDFsomN3W"
    },
    "otherContact": {
        "emails": [
            "jbarber274@tata.com",
            "jbarber274@relcom.com"
        ],
        "phoneNumbers": [
            "+61-274-301-2373",
            "+61-274-486-6509"
        ],
        "socMedias": [
            {
                "skype": "jbarber274@tata.com@skype.com"
            },
            {
                "line": "jbarber274@relcom.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1986-09-27"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CHIHODG4473",
    "name": {
        "title": null,
        "first": "Chi",
        "middle": null,
        "last": "Hodges",
        "suffix": null
    },
    "address": {
        "streetAddress": "3601 Short Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "F6",
        "city": "L'\u00cele-Bizard Southwest",
        "stateProvince": "QC",
        "locality": "Quebec",
        "country": "CA",
        "postalCode": "H9E",
        "latitude": "45.4865",
        "longitude": "-73.9092"
    },
    "contact": {
        "email": "chodges276@tt.com",
        "phone": "+61-276-740-4473",
        "socMedia": []
    },
    "login": {
        "username": "chodges",
        "oauth2": null,
        "password": "$2y$10$mR9mDWjuZFu4d02XxzipnOltsq24P8FcWLY7aQbxVdHNgVLOF\/zOG"
    },
    "otherContact": {
        "emails": [
            "chodges276@bce.com"
        ],
        "phoneNumbers": [
            "+61-276-490-8665"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-08-19"
    },
    "totalBooked": 14,
    "discount": 0.093
});
db.customers.insertOne(
{
    "customerKey": "RONNGRAH9368",
    "name": {
        "title": "Ms",
        "first": "Ronni",
        "middle": "X",
        "last": "Graham",
        "suffix": null
    },
    "address": {
        "streetAddress": "933 Blue Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Saint-Paul",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97460",
        "latitude": "-21.0096",
        "longitude": "55.2707"
    },
    "contact": {
        "email": "rgraham277@econnect.com",
        "phone": "+61-277-741-9368",
        "socMedia": {
            "linkedin": "rgraham277@econnect.com@linkedin.com"
        }
    },
    "login": {
        "username": "rgraham",
        "oauth2": "rgraham@linkedin.com",
        "password": "$2y$10$pk5G1R5wPdXHaz6qKDe2Oev7jqo9SaknLVDwxhUZ2QRLRHdjr5r\/G"
    },
    "otherContact": {
        "emails": [
            "rgraham277@nii.com",
            "rgraham277@access.com"
        ],
        "phoneNumbers": [
            "+61-277-476-7332",
            "+61-277-373-0437"
        ],
        "socMedias": [
            {
                "google": "rgraham277@nii.com@google.com"
            },
            {
                "linkedin": "rgraham277@access.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-11-14"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CHRILYNN6725",
    "name": {
        "title": "Ms",
        "first": "Christine",
        "middle": "P",
        "last": "Lynn",
        "suffix": null
    },
    "address": {
        "streetAddress": "3211 Red Mountain Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Powellton",
        "stateProvince": "WV",
        "locality": "Fayette",
        "country": "US",
        "postalCode": "25161",
        "latitude": "38.099",
        "longitude": "-81.324"
    },
    "contact": {
        "email": "clynn278@vodafone.com",
        "phone": "+61-278-634-6725",
        "socMedia": {
            "linkedin": "clynn278@vodafone.com@linkedin.com"
        }
    },
    "login": {
        "username": "clynn",
        "oauth2": "clynn@linkedin.com",
        "password": "$2y$10$k9uxQcXhIJSFai.GmmkHMumf5iSvoYMAHmM0bcKW8s3nXmrQ01DxK"
    },
    "otherContact": {
        "emails": [
            "clynn278@sprint.com",
            "clynn278@bt.com"
        ],
        "phoneNumbers": [
            "+61-278-128-1221",
            "+61-278-599-2624"
        ],
        "socMedias": [
            {
                "twitter": "clynn278@sprint.com@twitter.com"
            },
            {
                "line": "clynn278@bt.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-01-07"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "REYLARA2402",
    "name": {
        "title": null,
        "first": "Rey",
        "middle": null,
        "last": "Lara",
        "suffix": null
    },
    "address": {
        "streetAddress": "2805 Blue Bough Avenue",
        "buildingName": null,
        "floor": 5,
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
        "email": "rlara279@kddi.com",
        "phone": "+61-279-025-2402",
        "socMedia": []
    },
    "login": {
        "username": "rlara",
        "oauth2": null,
        "password": "$2y$10$tW11TEB2LvC9za7bgYXBv.ivDYYclkEai7g72do3E8JeIv5BrRPAi"
    },
    "otherContact": {
        "emails": [
            "rlara279@megafon.com",
            "rlara279@orange.com",
            "rlara279@telstra.com"
        ],
        "phoneNumbers": [
            "+61-279-704-2429",
            "+61-279-945-7983",
            "+61-279-397-3820"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1959-09-21"
    },
    "totalBooked": 36,
    "discount": 0.048
});
db.customers.insertOne(
{
    "customerKey": "THEDPARR5038",
    "name": {
        "title": "Ms",
        "first": "Theda",
        "middle": "T",
        "last": "Parrish",
        "suffix": null
    },
    "address": {
        "streetAddress": "4185 Red Tree Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "North York (York Heights \/ Victoria Village \/ Parkway East)",
        "stateProvince": "ON",
        "locality": "North York ",
        "country": "CA",
        "postalCode": "M3A",
        "latitude": "43.7545",
        "longitude": "-79.33"
    },
    "contact": {
        "email": "tparrish280@att.com",
        "phone": "+61-280-472-5038",
        "socMedia": {
            "twitter": "tparrish280@att.com@twitter.com"
        }
    },
    "login": {
        "username": "tparrish",
        "oauth2": "tparrish@twitter.com",
        "password": "$2y$10$1sLBLAG4CbBUicZmzkUbj.JztzV1kZy5ZuITN0vD8KdQyAk\/JWnyO"
    },
    "otherContact": {
        "emails": [
            "tparrish280@ptcl.com"
        ],
        "phoneNumbers": [
            "+61-280-434-2139"
        ],
        "socMedias": [
            {
                "facebook": "tparrish280@ptcl.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-06-06"
    },
    "totalBooked": 19,
    "discount": 0.15
});
db.customers.insertOne(
{
    "customerKey": "GERASHEL7708",
    "name": {
        "title": "Mr",
        "first": "Gerald",
        "middle": "Z",
        "last": "Shelton",
        "suffix": null
    },
    "address": {
        "streetAddress": "6137 Red Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wilgamuwa",
        "stateProvince": "Matale",
        "locality": "Matale",
        "country": "LK",
        "postalCode": "21530",
        "latitude": "7.6622",
        "longitude": "80.7728"
    },
    "contact": {
        "email": "gshelton281@telecomitalia.com",
        "phone": "+61-281-892-7708",
        "socMedia": {
            "linkedin": "gshelton281@telecomitalia.com@linkedin.com"
        }
    },
    "login": {
        "username": "gshelton",
        "oauth2": "gshelton@linkedin.com",
        "password": "$2y$10$\/T3nd9innG00YWg3qup6qepWH3sK9TsCBaBP2aW14Z0BbrPbO\/FFu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-01-26"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LUCIBROW7366",
    "name": {
        "title": null,
        "first": "Luciano",
        "middle": null,
        "last": "Browning",
        "suffix": null
    },
    "address": {
        "streetAddress": "5078 Blue Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "FF",
        "city": "Fillingham",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "DN21",
        "latitude": "53.3608",
        "longitude": "-0.5743"
    },
    "contact": {
        "email": "lbrownin282@turkcell.com",
        "phone": "+61-282-443-7366",
        "socMedia": []
    },
    "login": {
        "username": "lbrownin",
        "oauth2": null,
        "password": "$2y$10$mtmRhLhEjRxi\/7m.tv.ALu2VinWY9.z\/aGTJN\/16fDE5DiNbU5YWa"
    },
    "otherContact": {
        "emails": [
            "lbrownin282@airtel.com",
            "lbrownin282@uunet.com",
            "lbrownin282@cerist.com"
        ],
        "phoneNumbers": [
            "+61-282-907-3358",
            "+61-282-591-2924",
            "+61-282-177-2359"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1973-09-16"
    },
    "totalBooked": 10,
    "discount": 0.064
});
db.customers.insertOne(
{
    "customerKey": "ALLEBEAS6732",
    "name": {
        "title": "Mr",
        "first": "Allen",
        "middle": "Z",
        "last": "Beasley",
        "suffix": null
    },
    "address": {
        "streetAddress": "807 Blue Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pjelax",
        "stateProvince": "N\u00e4rpes",
        "locality": "Syd\u00f6sterbotten",
        "country": "FI",
        "postalCode": "64250",
        "latitude": "62.3637",
        "longitude": "21.3552"
    },
    "contact": {
        "email": "abeasley283@bt.com",
        "phone": "+61-283-223-6732",
        "socMedia": {
            "line": "abeasley283@bt.com@line.com"
        }
    },
    "login": {
        "username": "abeasley",
        "oauth2": "abeasley@line.com",
        "password": "$2y$10$Jls28iqTsDBonAMTS81M0ufTLeK7lWFiMivY8GGt4XjWrm6Uq5EJ2"
    },
    "otherContact": {
        "emails": [
            "abeasley283@bce.com"
        ],
        "phoneNumbers": [
            "+61-283-996-8592"
        ],
        "socMedias": [
            {
                "line": "abeasley283@bce.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1946-09-18"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NORRGUTI1697",
    "name": {
        "title": "Mr",
        "first": "Norris",
        "middle": "N",
        "last": "Gutierrez",
        "suffix": null
    },
    "address": {
        "streetAddress": "922 Little Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Seaford Rise",
        "stateProvince": "SA",
        "locality": "South Australia",
        "country": "AU",
        "postalCode": "5169",
        "latitude": "-35.193",
        "longitude": "138.4817"
    },
    "contact": {
        "email": "ngutierr284@seednet.com",
        "phone": "+61-284-599-1697",
        "socMedia": {
            "twitter": "ngutierr284@seednet.com@twitter.com"
        }
    },
    "login": {
        "username": "ngutierr",
        "oauth2": "ngutierr@twitter.com",
        "password": "$2y$10$r\/l4z.OmZ0y.hATzJ9oCoOHCBRBjmpFYoe5oQ1Q7Suacj12l.DSWS"
    },
    "otherContact": {
        "emails": [
            "ngutierr284@telesystems.com"
        ],
        "phoneNumbers": [
            "+61-284-373-0950"
        ],
        "socMedias": [
            {
                "twitter": "ngutierr284@telesystems.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1936-11-18"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CHASHARP0592",
    "name": {
        "title": null,
        "first": "Chastity",
        "middle": null,
        "last": "Harper",
        "suffix": null
    },
    "address": {
        "streetAddress": "1307 Green Bridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Valdredo",
        "stateProvince": "AS",
        "locality": "Asturias",
        "country": "ES",
        "postalCode": "33157",
        "latitude": "43.5706",
        "longitude": "-6.2587"
    },
    "contact": {
        "email": "charper285@kddi.com",
        "phone": "+61-285-861-0592",
        "socMedia": []
    },
    "login": {
        "username": "charper",
        "oauth2": null,
        "password": "$2y$10$GqNYK0EjVxxjxGzMkR1kneJTpMfQvFAktmi9WNkovP7LRvUXsrsPG"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1982-05-02"
    },
    "totalBooked": 5,
    "discount": 0.076
});
db.customers.insertOne(
{
    "customerKey": "OPALHAHN6314",
    "name": {
        "title": "Ms",
        "first": "Opal",
        "middle": "I",
        "last": "Hahn",
        "suffix": null
    },
    "address": {
        "streetAddress": "9577 Winding Mountain Circle",
        "buildingName": "Building 9C",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oakenclough",
        "stateProvince": "England",
        "locality": "Lancashire",
        "country": "GB",
        "postalCode": "PR3",
        "latitude": "53.9202",
        "longitude": "-2.7036"
    },
    "contact": {
        "email": "ohahn286@telkom.com",
        "phone": "+61-286-412-6314",
        "socMedia": {
            "line": "ohahn286@telkom.com@line.com"
        }
    },
    "login": {
        "username": "ohahn",
        "oauth2": "ohahn@line.com",
        "password": "$2y$10$UkXx88KDV69El2ELyhm6DuKgGAxdsBeYwXwh6R3UdDNqBv0DgxjFu"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-04-27"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LEANAGUI1968",
    "name": {
        "title": "Ms",
        "first": "Leann",
        "middle": "M",
        "last": "Aguilar",
        "suffix": null
    },
    "address": {
        "streetAddress": "4223 Long Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Azotea De Vera",
        "stateProvince": "Soriano",
        "locality": "Soriano",
        "country": "UY",
        "postalCode": "75000",
        "latitude": "-33.3244",
        "longitude": "-57.618"
    },
    "contact": {
        "email": "laguilar287@turkcell.com",
        "phone": "+61-287-089-1968",
        "socMedia": {
            "line": "laguilar287@turkcell.com@line.com"
        }
    },
    "login": {
        "username": "laguilar",
        "oauth2": "laguilar@line.com",
        "password": "$2y$10$Bc74I\/4LKL2GG2uf9buP4ehkBMGb\/tuxETuk9IiHDYn5MIb4fPHry"
    },
    "otherContact": {
        "emails": [
            "laguilar287@mtn.com",
            "laguilar287@telecomitalia.com"
        ],
        "phoneNumbers": [
            "+61-287-189-8206",
            "+61-287-917-0265"
        ],
        "socMedias": [
            {
                "skype": "laguilar287@mtn.com@skype.com"
            },
            {
                "line": "laguilar287@telecomitalia.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-05-18"
    },
    "totalBooked": 85,
    "discount": 0.159
});
db.customers.insertOne(
{
    "customerKey": "DOMITRUJ0072",
    "name": {
        "title": null,
        "first": "Dominique",
        "middle": null,
        "last": "Trujillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "8647 Winding Gulch Circle",
        "buildingName": null,
        "floor": 4,
        "roomAptCondoFlat": "43",
        "city": "Minnivale",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6462",
        "latitude": "-31.1383",
        "longitude": "117.1809"
    },
    "contact": {
        "email": "dtrujill288@telkom.com",
        "phone": "+61-288-958-0072",
        "socMedia": []
    },
    "login": {
        "username": "dtrujill",
        "oauth2": null,
        "password": "$2y$10$XsPvJ3Fd4nPB70k.ebKWB.yn0r1s9og.dRtsI09O76jwYk4gW\/ocW"
    },
    "otherContact": {
        "emails": [
            "dtrujill288@ktc.com",
            "dtrujill288@belgacom.com"
        ],
        "phoneNumbers": [
            "+61-288-269-8258",
            "+61-288-450-7133"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1967-05-30"
    },
    "totalBooked": 48,
    "discount": 0.088
});
db.customers.insertOne(
{
    "customerKey": "LINDHERR9475",
    "name": {
        "title": "Ms",
        "first": "Lindsay",
        "middle": "Q",
        "last": "Herring",
        "suffix": null
    },
    "address": {
        "streetAddress": "3313 Red Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rivertree",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2372",
        "latitude": "-29.1538",
        "longitude": "151.9669"
    },
    "contact": {
        "email": "lherring290@ooredoo.com",
        "phone": "+61-290-358-9475",
        "socMedia": {
            "linkedin": "lherring290@ooredoo.com@linkedin.com"
        }
    },
    "login": {
        "username": "lherring",
        "oauth2": "lherring@linkedin.com",
        "password": "$2y$10$R1vQlSEQssfY7Zwhh65rKeMWLZ7jC7Xx3VIl6HVgOAsVZxmdjcn.e"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1991-06-19"
    },
    "totalBooked": 11,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CLINROTH0269",
    "name": {
        "title": null,
        "first": "Clint",
        "middle": null,
        "last": "Roth",
        "suffix": null
    },
    "address": {
        "streetAddress": "1291 Green Gulch Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ye\u015filli",
        "stateProvince": "Kir\u015fehir",
        "locality": "Kir\u015fehir",
        "country": "TR",
        "postalCode": "40000",
        "latitude": "39.1333",
        "longitude": "33.8833"
    },
    "contact": {
        "email": "croth291@etisalat.com",
        "phone": "+61-291-201-0269",
        "socMedia": []
    },
    "login": {
        "username": "croth",
        "oauth2": null,
        "password": "$2y$10$yL3JcOVaOSjU6ob4Q9.B8eNFEK9ODy52dVm.y5y6VXbW.GHrtR7A6"
    },
    "otherContact": {
        "emails": [
            "croth291@telenor.com",
            "croth291@telesystems.com",
            "croth291@softbank.com"
        ],
        "phoneNumbers": [
            "+61-291-382-7455",
            "+61-291-716-3384",
            "+61-291-074-9971"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1970-08-13"
    },
    "totalBooked": 27,
    "discount": 0.08
});
db.customers.insertOne(
{
    "customerKey": "DANIGOLD3920",
    "name": {
        "title": "Mr",
        "first": "Daniel",
        "middle": "N",
        "last": "Golden",
        "suffix": null
    },
    "address": {
        "streetAddress": "3282 Long Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rhyndaston",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7120",
        "latitude": "-42.4789",
        "longitude": "147.3837"
    },
    "contact": {
        "email": "dgolden292@airtel.com",
        "phone": "+61-292-767-3920",
        "socMedia": {
            "line": "dgolden292@airtel.com@line.com"
        }
    },
    "login": {
        "username": "dgolden",
        "oauth2": "dgolden@line.com",
        "password": "$2y$10$hBr\/SQWa\/cGF.QpW1YTlPuSrcoHeKYbHdZmWJ32MTXkLrz\/xvymp6"
    },
    "otherContact": {
        "emails": [
            "dgolden292@telecom.com",
            "dgolden292@vimpelcom.com"
        ],
        "phoneNumbers": [
            "+61-292-825-8854",
            "+61-292-050-6957"
        ],
        "socMedias": [
            {
                "facebook": "dgolden292@telecom.com@facebook.com"
            },
            {
                "facebook": "dgolden292@vimpelcom.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-03-26"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SLYVLEVY8174",
    "name": {
        "title": "Ms",
        "first": "Slyvia",
        "middle": "T",
        "last": "Levy",
        "suffix": null
    },
    "address": {
        "streetAddress": "8713 Big River Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sveagruva",
        "stateProvince": "Spitsbergen",
        "locality": "Spitsbergen",
        "country": "SJ",
        "postalCode": "9175",
        "latitude": "77.9003",
        "longitude": "16.7201"
    },
    "contact": {
        "email": "slevy293@ote.com",
        "phone": "+61-293-334-8174",
        "socMedia": {
            "facebook": "slevy293@ote.com@facebook.com"
        }
    },
    "login": {
        "username": "slevy",
        "oauth2": "slevy@facebook.com",
        "password": "$2y$10$yx.HIXvuEZJ4kR8\/yxw9z.r1UNjh2Vb.VKOZo.AabpBa\/UJR451IC"
    },
    "otherContact": {
        "emails": [
            "slevy293@nordnet.com",
            "slevy293@cci.com",
            "slevy293@greennet.com"
        ],
        "phoneNumbers": [
            "+61-293-458-0177",
            "+61-293-808-1087",
            "+61-293-034-2555"
        ],
        "socMedias": [
            {
                "line": "slevy293@nordnet.com@line.com"
            },
            {
                "line": "slevy293@cci.com@line.com"
            },
            {
                "twitter": "slevy293@greennet.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-10-23"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DARRDAVI0182",
    "name": {
        "title": null,
        "first": "Darrick",
        "middle": null,
        "last": "Davila",
        "suffix": null
    },
    "address": {
        "streetAddress": "2218 Blue Bend Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "48",
        "city": "Chowdergudem",
        "stateProvince": "Kondurgu",
        "locality": "Mahabub Nagar",
        "country": "IN",
        "postalCode": "509207",
        "latitude": "17.0753",
        "longitude": "78.0839"
    },
    "contact": {
        "email": "ddavila294@centurylink.com",
        "phone": "+61-294-873-0182",
        "socMedia": []
    },
    "login": {
        "username": "ddavila",
        "oauth2": null,
        "password": "$2y$10$pSIopSpXUaKgbsvUdFPaHOXPAJ9eW5xZ.PiKZM3QH5DSPNB3wIMJq"
    },
    "otherContact": {
        "emails": [
            "ddavila294@softbank.com",
            "ddavila294@airtel.com"
        ],
        "phoneNumbers": [
            "+61-294-589-2546",
            "+61-294-816-3581"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1976-12-08"
    },
    "totalBooked": 26,
    "discount": 0.185
});
db.customers.insertOne(
{
    "customerKey": "ZENIFORD5177",
    "name": {
        "title": "Ms",
        "first": "Zenia",
        "middle": "I",
        "last": "Ford",
        "suffix": null
    },
    "address": {
        "streetAddress": "5090 Little Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Plage du Larvotto",
        "stateProvince": "Larvotto",
        "locality": "Monaco",
        "country": "MC",
        "postalCode": "98000",
        "latitude": "43.7333",
        "longitude": "7.4333"
    },
    "contact": {
        "email": "zford295@ais.com",
        "phone": "+61-295-248-5177",
        "socMedia": {
            "skype": "zford295@ais.com@skype.com"
        }
    },
    "login": {
        "username": "zford",
        "oauth2": "zford@skype.com",
        "password": "$2y$10$\/Qs5MGrzvcS\/6e9HWgwUiuZYEZbziCrNbQPfUMum7ZCk.dm1752gS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1955-06-10"
    },
    "totalBooked": 13,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MATHPRUI3407",
    "name": {
        "title": "Mr",
        "first": "Mathew",
        "middle": "F",
        "last": "Pruitt",
        "suffix": null
    },
    "address": {
        "streetAddress": "9563 Winding River Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chicago",
        "stateProvince": "IL",
        "locality": "Cook",
        "country": "US",
        "postalCode": "60622",
        "latitude": "41.9019",
        "longitude": "-87.6779"
    },
    "contact": {
        "email": "mpruitt296@telenor.com",
        "phone": "+61-296-896-3407",
        "socMedia": {
            "linkedin": "mpruitt296@telenor.com@linkedin.com"
        }
    },
    "login": {
        "username": "mpruitt",
        "oauth2": "mpruitt@linkedin.com",
        "password": "$2y$10$Mse6jjlRgQtIgaaCS7j2KuqwQUcfqPrWmmyNJlw9Q7XMBs8EDLyQq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-06-10"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MAYAGLAS3668",
    "name": {
        "title": null,
        "first": "Maya",
        "middle": null,
        "last": "Glass",
        "suffix": null
    },
    "address": {
        "streetAddress": "722 Green River Avenue",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": null,
        "city": "Johnsdorf",
        "stateProvince": "Fehring",
        "locality": "Politischer Bezirk S\u00fcdoststeiermark",
        "country": "AT",
        "postalCode": "8350",
        "latitude": "46.8765",
        "longitude": "15.9913"
    },
    "contact": {
        "email": "mglass297@telekom.com",
        "phone": "+61-297-026-3668",
        "socMedia": []
    },
    "login": {
        "username": "mglass",
        "oauth2": null,
        "password": "$2y$10$e5wvEYBolZmzcNonNPFE\/.zprM3vx4G.meveJWT5PHw5B6wUpZrJi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-02-13"
    },
    "totalBooked": 21,
    "discount": 0.096
});
db.customers.insertOne(
{
    "customerKey": "YAJAHINT4195",
    "name": {
        "title": "Ms",
        "first": "Yajaira",
        "middle": "O",
        "last": "Hinton",
        "suffix": null
    },
    "address": {
        "streetAddress": "1940 Green Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ram",
        "stateProvince": "Wales",
        "locality": "Carmarthenshire",
        "country": "GB",
        "postalCode": "SA48",
        "latitude": "52.1541",
        "longitude": "-4.1118"
    },
    "contact": {
        "email": "yhinton298@tt.com",
        "phone": "+61-298-158-4195",
        "socMedia": {
            "line": "yhinton298@tt.com@line.com"
        }
    },
    "login": {
        "username": "yhinton",
        "oauth2": "yhinton@line.com",
        "password": "$2y$10$r2MuzFvsH9zcC1E6PtGpWuMR9rUgJkltfQKgfNFIpHqZ3a5jUUpJS"
    },
    "otherContact": {
        "emails": [
            "yhinton298@pldt.com",
            "yhinton298@orange.com"
        ],
        "phoneNumbers": [
            "+61-298-529-8653",
            "+61-298-049-5914"
        ],
        "socMedias": [
            {
                "facebook": "yhinton298@pldt.com@facebook.com"
            },
            {
                "facebook": "yhinton298@orange.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-09-26"
    },
    "totalBooked": 1,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ARMALIVI6282",
    "name": {
        "title": "Ms",
        "first": "Armandina",
        "middle": "P",
        "last": "Livingston",
        "suffix": null
    },
    "address": {
        "streetAddress": "736 Big Hill Drive",
        "buildingName": "Building 88",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Encamp",
        "stateProvince": null,
        "locality": null,
        "country": "AD",
        "postalCode": "AD200",
        "latitude": "42.5333",
        "longitude": "1.6333"
    },
    "contact": {
        "email": "alivings299@eunet.com",
        "phone": "+61-299-801-6282",
        "socMedia": {
            "skype": "alivings299@eunet.com@skype.com"
        }
    },
    "login": {
        "username": "alivings",
        "oauth2": "alivings@skype.com",
        "password": "$2y$10$z0Pyqivx6r6ZjnTFKQk9tuk8iEf5a\/oJrJ0UPUlHeN598FFX6b.k2"
    },
    "otherContact": {
        "emails": [
            "alivings299@jio.com",
            "alivings299@ote.com",
            "alivings299@rogers.com"
        ],
        "phoneNumbers": [
            "+61-299-913-0675",
            "+61-299-805-8825",
            "+61-299-265-9838"
        ],
        "socMedias": [
            {
                "line": "alivings299@jio.com@line.com"
            },
            {
                "linkedin": "alivings299@ote.com@linkedin.com"
            },
            {
                "line": "alivings299@rogers.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-01-06"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BRENSIMP0311",
    "name": {
        "title": null,
        "first": "Brenton",
        "middle": null,
        "last": "Simpson",
        "suffix": null
    },
    "address": {
        "streetAddress": "8962 Red Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "CE",
        "city": "Whitehead",
        "stateProvince": "Northern Ireland",
        "locality": "County Antrim",
        "country": "GB",
        "postalCode": "BT38",
        "latitude": "54.7537",
        "longitude": "-5.7093"
    },
    "contact": {
        "email": "bsimpson300@nordnet.com",
        "phone": "+61-300-958-0311",
        "socMedia": []
    },
    "login": {
        "username": "bsimpson",
        "oauth2": null,
        "password": "$2y$10$wnMNAasVZGIc547cqgrvo.Y69yxgH5BgPvLkukZcaIOWwvuY0EY0i"
    },
    "otherContact": {
        "emails": [
            "bsimpson300@cubenet.com",
            "bsimpson300@relcom.com"
        ],
        "phoneNumbers": [
            "+61-300-173-6510",
            "+61-300-948-3690"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-12-20"
    },
    "totalBooked": 30,
    "discount": 0.012
});
db.customers.insertOne(
{
    "customerKey": "ANGERAYM6989",
    "name": {
        "title": "Ms",
        "first": "Angele",
        "middle": "Y",
        "last": "Raymond",
        "suffix": null
    },
    "address": {
        "streetAddress": "9791 Green River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Auning",
        "stateProvince": "Syddjurs Kommune",
        "locality": "Syddjurs Kommune",
        "country": "DK",
        "postalCode": "8963",
        "latitude": "56.4308",
        "longitude": "10.3782"
    },
    "contact": {
        "email": "araymond301@apicnet.com",
        "phone": "+61-301-076-6989",
        "socMedia": {
            "twitter": "araymond301@apicnet.com@twitter.com"
        }
    },
    "login": {
        "username": "araymond",
        "oauth2": "araymond@twitter.com",
        "password": "$2y$10$cJasDpDp7o3pi65lkuT4suYD2K4suILXEmmhvZsCDedfjynKI4JBq"
    },
    "otherContact": {
        "emails": [
            "araymond301@greennet.com",
            "araymond301@movil.com",
            "araymond301@ais.com"
        ],
        "phoneNumbers": [
            "+61-301-830-2981",
            "+61-301-906-6181",
            "+61-301-723-3137"
        ],
        "socMedias": [
            {
                "google": "araymond301@greennet.com@google.com"
            },
            {
                "google": "araymond301@movil.com@google.com"
            },
            {
                "linkedin": "araymond301@ais.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-12-03"
    },
    "totalBooked": 59,
    "discount": 0.024
});
db.customers.insertOne(
{
    "customerKey": "SINALOWE6784",
    "name": {
        "title": "Ms",
        "first": "Sina",
        "middle": "M",
        "last": "Lowe",
        "suffix": null
    },
    "address": {
        "streetAddress": "9196 Green Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Coningsby",
        "stateProvince": "QLD",
        "locality": "CENTRAL QLD",
        "country": "AU",
        "postalCode": "4740",
        "latitude": "-21.1",
        "longitude": "149.0667"
    },
    "contact": {
        "email": "slowe302@millicom.com",
        "phone": "+61-302-689-6784",
        "socMedia": {
            "line": "slowe302@millicom.com@line.com"
        }
    },
    "login": {
        "username": "slowe",
        "oauth2": "slowe@line.com",
        "password": "$2y$10$p1g3fSRrzuzuWqoC6rwudO3.QSt3RacDBcRBIAYREk.GemGnHWPCe"
    },
    "otherContact": {
        "emails": [
            "slowe302@cci.com",
            "slowe302@greennet.com",
            "slowe302@telstra.com"
        ],
        "phoneNumbers": [
            "+61-302-067-2712",
            "+61-302-313-1695",
            "+61-302-972-7446"
        ],
        "socMedias": [
            {
                "line": "slowe302@cci.com@line.com"
            },
            {
                "twitter": "slowe302@greennet.com@twitter.com"
            },
            {
                "facebook": "slowe302@telstra.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-11-03"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "EVERMOSL8264",
    "name": {
        "title": "Dr",
        "first": "Everett",
        "middle": null,
        "last": "Mosley",
        "suffix": "Jr"
    },
    "address": {
        "streetAddress": "8252 Big River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wegowwa",
        "stateProvince": "Gampaha",
        "locality": "Gampaha",
        "country": "LK",
        "postalCode": "11562",
        "latitude": "7.1715",
        "longitude": "79.9665"
    },
    "contact": {
        "email": "emosley303@vimpelcom.com",
        "phone": "+61-303-848-8264",
        "socMedia": []
    },
    "login": {
        "username": "emosley",
        "oauth2": null,
        "password": "$2y$10$.tBPYSyCSW3a1gTcvyhDeu8Oo22h.NZEFdntDO8tKMfio6f\/dPkD."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-01-13"
    },
    "totalBooked": 41,
    "discount": 0.027
});
db.customers.insertOne(
{
    "customerKey": "JENILEVY6493",
    "name": {
        "title": "Ms",
        "first": "Jenifer",
        "middle": "R",
        "last": "Levy",
        "suffix": null
    },
    "address": {
        "streetAddress": "8010 Little Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Petite-Patrie Southwest",
        "stateProvince": "QC",
        "locality": "Petite-Patrie",
        "country": "CA",
        "postalCode": "H2S",
        "latitude": "45.5354",
        "longitude": "-73.6061"
    },
    "contact": {
        "email": "jlevy304@telus.com",
        "phone": "+61-304-837-6493",
        "socMedia": {
            "google": "jlevy304@telus.com@google.com"
        }
    },
    "login": {
        "username": "jlevy",
        "oauth2": "jlevy@google.com",
        "password": "$2y$10$\/jQZDwxPk9d04q6ZzFVrEOjv095cABrjmKI5NaRvEQejRWjWkYWKq"
    },
    "otherContact": {
        "emails": [
            "jlevy304@pldt.com",
            "jlevy304@vivendi.com"
        ],
        "phoneNumbers": [
            "+61-304-489-3992",
            "+61-304-192-0313"
        ],
        "socMedias": [
            {
                "twitter": "jlevy304@pldt.com@twitter.com"
            },
            {
                "line": "jlevy304@vivendi.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-03-26"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ASAHUTC4273",
    "name": {
        "title": "Mr",
        "first": "Asa",
        "middle": "Q",
        "last": "Hutchinson",
        "suffix": null
    },
    "address": {
        "streetAddress": "2469 Long River Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Antonio",
        "stateProvince": "TX",
        "locality": "Comal",
        "country": "US",
        "postalCode": "78266",
        "latitude": "29.6643",
        "longitude": "-98.3118"
    },
    "contact": {
        "email": "ahutchin305@cubenet.com",
        "phone": "+61-305-829-4273",
        "socMedia": {
            "skype": "ahutchin305@cubenet.com@skype.com"
        }
    },
    "login": {
        "username": "ahutchin",
        "oauth2": "ahutchin@skype.com",
        "password": "$2y$10$zJ5UM7PDOd4y31JKDyd9I.LoO7NZ5qjgv6cwjXVgWGJdSHoH82H4W"
    },
    "otherContact": {
        "emails": [
            "ahutchin305@ptcl.com"
        ],
        "phoneNumbers": [
            "+61-305-802-5149"
        ],
        "socMedias": [
            {
                "facebook": "ahutchin305@ptcl.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-09-07"
    },
    "totalBooked": 3,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "KEENHANS4320",
    "name": {
        "title": null,
        "first": "Keena",
        "middle": null,
        "last": "Hansen",
        "suffix": null
    },
    "address": {
        "streetAddress": "3956 Long Bough Road",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": "CA",
        "city": "Wendy",
        "stateProvince": "England",
        "locality": "Cambridgeshire",
        "country": "GB",
        "postalCode": "SG8",
        "latitude": "52.1115",
        "longitude": "-0.0692"
    },
    "contact": {
        "email": "khansen306@sprint.com",
        "phone": "+61-306-908-4320",
        "socMedia": []
    },
    "login": {
        "username": "khansen",
        "oauth2": null,
        "password": "$2y$10$nl94ICAIQmJKsXRaV1ue.uK.7AAhrgFDLm9qNRWcYIG7ZnXH09s1e"
    },
    "otherContact": {
        "emails": [
            "khansen306@daxnet.com",
            "khansen306@turkcell.com"
        ],
        "phoneNumbers": [
            "+61-306-591-2692",
            "+61-306-110-0063"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-12-30"
    },
    "totalBooked": 18,
    "discount": 0.035
});
db.customers.insertOne(
{
    "customerKey": "KELIBENN1813",
    "name": {
        "title": "Ms",
        "first": "Keli",
        "middle": "F",
        "last": "Bennett",
        "suffix": null
    },
    "address": {
        "streetAddress": "2877 Green Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "\u00dadavy",
        "stateProvince": "Havl\u00ed\u010dk\u016fv Brod",
        "locality": "Havl\u00ed\u010dk\u016fv Brod",
        "country": "CZ",
        "postalCode": "582 63",
        "latitude": "49.7333",
        "longitude": "15.8167"
    },
    "contact": {
        "email": "kbennett307@kddi.com",
        "phone": "+61-307-101-1813",
        "socMedia": {
            "skype": "kbennett307@kddi.com@skype.com"
        }
    },
    "login": {
        "username": "kbennett",
        "oauth2": "kbennett@skype.com",
        "password": "$2y$10$z7SjT5VPf1oiwU064e62WujYbe6cXDvMGoDdrKC0AJxou3CG.\/60G"
    },
    "otherContact": {
        "emails": [
            "kbennett307@bt.com"
        ],
        "phoneNumbers": [
            "+61-307-477-9171"
        ],
        "socMedias": [
            {
                "linkedin": "kbennett307@bt.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-10-04"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TORRGRIF7782",
    "name": {
        "title": "Ms",
        "first": "Torrie",
        "middle": "F",
        "last": "Griffin",
        "suffix": null
    },
    "address": {
        "streetAddress": "4585 Winding Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rivi\u00e8re-du-Loup",
        "stateProvince": "QC",
        "locality": "Bas-Saint-Laurent",
        "country": "CA",
        "postalCode": "G5R",
        "latitude": "47.8304",
        "longitude": "-69.5342"
    },
    "contact": {
        "email": "tgriffin308@cubenet.com",
        "phone": "+61-308-122-7782",
        "socMedia": {
            "skype": "tgriffin308@cubenet.com@skype.com"
        }
    },
    "login": {
        "username": "tgriffin",
        "oauth2": "tgriffin@skype.com",
        "password": "$2y$10$.86yLNBRvVPNBOOe\/ILlA.rx4RyGsLB73db1X1XxJjKoRXtbZefU2"
    },
    "otherContact": {
        "emails": [
            "tgriffin308@kpn.com"
        ],
        "phoneNumbers": [
            "+61-308-865-1841"
        ],
        "socMedias": [
            {
                "skype": "tgriffin308@kpn.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1963-04-03"
    },
    "totalBooked": 86,
    "discount": 0.191
});
db.customers.insertOne(
{
    "customerKey": "KYMRHOD3954",
    "name": {
        "title": null,
        "first": "Kym",
        "middle": null,
        "last": "Rhodes",
        "suffix": null
    },
    "address": {
        "streetAddress": "8521 Winding Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sevilla",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "6347",
        "latitude": "16.5833",
        "longitude": "120.3333"
    },
    "contact": {
        "email": "krhodes309@worldnet.com",
        "phone": "+61-309-858-3954",
        "socMedia": []
    },
    "login": {
        "username": "krhodes",
        "oauth2": null,
        "password": "$2y$10$jOeHJDavXofMfHec6zo4Pe0AdMCancrfKrmzI\/cESBYSg7LbklhoC"
    },
    "otherContact": {
        "emails": [
            "krhodes309@megafon.com"
        ],
        "phoneNumbers": [
            "+61-309-257-7686"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-10-09"
    },
    "totalBooked": 21,
    "discount": 0.076
});
db.customers.insertOne(
{
    "customerKey": "ALISTOK5580",
    "name": {
        "title": "Ms",
        "first": "Ali",
        "middle": "A",
        "last": "Stokes",
        "suffix": null
    },
    "address": {
        "streetAddress": "1812 Red River Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sheringham",
        "stateProvince": "England",
        "locality": "Norfolk",
        "country": "GB",
        "postalCode": "NR26",
        "latitude": "52.9408",
        "longitude": "1.2093"
    },
    "contact": {
        "email": "astokes310@softbank.com",
        "phone": "+61-310-681-5580",
        "socMedia": {
            "google": "astokes310@softbank.com@google.com"
        }
    },
    "login": {
        "username": "astokes",
        "oauth2": "astokes@google.com",
        "password": "$2y$10$W073mEce2fjQV4tHQ06z1OGbYS1K7w75IHicGROqJqVd8nA5WL6re"
    },
    "otherContact": {
        "emails": [
            "astokes310@ote.com",
            "astokes310@telecomitalia.com"
        ],
        "phoneNumbers": [
            "+61-310-552-3035",
            "+61-310-492-5706"
        ],
        "socMedias": [
            {
                "skype": "astokes310@ote.com@skype.com"
            },
            {
                "facebook": "astokes310@telecomitalia.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1969-07-12"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BRIDKANE5488",
    "name": {
        "title": "Ms",
        "first": "Bridgett",
        "middle": "X",
        "last": "Kane",
        "suffix": null
    },
    "address": {
        "streetAddress": "9054 Long Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Loureira",
        "stateProvince": "Santa Catarina Da Serra",
        "locality": "Leiria",
        "country": "PT",
        "postalCode": "2495-133",
        "latitude": "39.66",
        "longitude": "-8.6879"
    },
    "contact": {
        "email": "bkane311@orstom.com",
        "phone": "+61-311-252-5488",
        "socMedia": {
            "linkedin": "bkane311@orstom.com@linkedin.com"
        }
    },
    "login": {
        "username": "bkane",
        "oauth2": "bkane@linkedin.com",
        "password": "$2y$10$vQ42GrF6RWWw1C11hrdi9O\/rtc14tN5i39xL3\/OQlAXlbLQDkYWOi"
    },
    "otherContact": {
        "emails": [
            "bkane311@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-311-254-0855"
        ],
        "socMedias": [
            {
                "linkedin": "bkane311@vodafone.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1974-07-30"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "THOMMIDD2238",
    "name": {
        "title": null,
        "first": "Thomasina",
        "middle": null,
        "last": "Middleton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3463 Big Bridge Road",
        "buildingName": "Building 44",
        "floor": null,
        "roomAptCondoFlat": "F7",
        "city": "Gabbada",
        "stateProvince": "Narsipatnam",
        "locality": "Visakhapatnam",
        "country": "IN",
        "postalCode": "531118",
        "latitude": "17.7114",
        "longitude": "82.592"
    },
    "contact": {
        "email": "tmiddlet312@orange.com",
        "phone": "+61-312-051-2238",
        "socMedia": []
    },
    "login": {
        "username": "tmiddlet",
        "oauth2": null,
        "password": "$2y$10$zNii7KNP.a1Kt7tHxCu6FOzrZEGX5OqeckwowQqZmBMcTKFkPHz\/C"
    },
    "otherContact": {
        "emails": [
            "tmiddlet312@chunghwa.com",
            "tmiddlet312@nii.com"
        ],
        "phoneNumbers": [
            "+61-312-614-8848",
            "+61-312-146-0138"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1988-09-21"
    },
    "totalBooked": 22,
    "discount": 0.059000000000000004
});
db.customers.insertOne(
{
    "customerKey": "SHELDAY3344",
    "name": {
        "title": "Mr",
        "first": "Shelton",
        "middle": "I",
        "last": "Day",
        "suffix": null
    },
    "address": {
        "streetAddress": "2914 Winding Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Engome",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "10904",
        "latitude": "18.45",
        "longitude": "-69.9833"
    },
    "contact": {
        "email": "sday313@telekom.com",
        "phone": "+61-313-612-3344",
        "socMedia": {
            "facebook": "sday313@telekom.com@facebook.com"
        }
    },
    "login": {
        "username": "sday",
        "oauth2": "sday@facebook.com",
        "password": "$2y$10$zl.MEcL8A3hiO5L6QgxH2uWF3WOlwS8sJNfW1b0Gsa9Zim1cg.RXe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-06-15"
    },
    "totalBooked": 8,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LACYPATT2118",
    "name": {
        "title": "Mr",
        "first": "Lacy",
        "middle": "B",
        "last": "Patterson",
        "suffix": null
    },
    "address": {
        "streetAddress": "9873 Little Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fork",
        "stateProvince": "MD",
        "locality": "Baltimore",
        "country": "US",
        "postalCode": "21051",
        "latitude": "39.4731",
        "longitude": "-76.4484"
    },
    "contact": {
        "email": "lpatters314@zain.com",
        "phone": "+61-314-039-2118",
        "socMedia": {
            "line": "lpatters314@zain.com@line.com"
        }
    },
    "login": {
        "username": "lpatters",
        "oauth2": "lpatters@line.com",
        "password": "$2y$10$N3qMpKs44BKyX0SQxSEn2uxLeyaG2J.T9ZuGm5odow5SSqHs\/\/KzC"
    },
    "otherContact": {
        "emails": [
            "lpatters314@bce.com"
        ],
        "phoneNumbers": [
            "+61-314-161-1848"
        ],
        "socMedias": [
            {
                "facebook": "lpatters314@bce.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-06-09"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DARYBRYA2038",
    "name": {
        "title": null,
        "first": "Daryl",
        "middle": null,
        "last": "Bryan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2824 Big Mound Avenue",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": null,
        "city": "Godby",
        "stateProvince": "Finstr\u00f6m",
        "locality": "Finstr\u00f6m",
        "country": "AX",
        "postalCode": "22410",
        "latitude": "60.2294",
        "longitude": "19.982"
    },
    "contact": {
        "email": "dbryan315@centurylink.com",
        "phone": "+61-315-992-2038",
        "socMedia": []
    },
    "login": {
        "username": "dbryan",
        "oauth2": null,
        "password": "$2y$10$O7GG8yyeVqYWryy9G\/nmLe.e9tLv10uVamqnFdjuOeILwKXR4CXQy"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-01-06"
    },
    "totalBooked": 80,
    "discount": 0.039
});
db.customers.insertOne(
{
    "customerKey": "MOHASTUA0052",
    "name": {
        "title": "Mr",
        "first": "Mohamed",
        "middle": "N",
        "last": "Stuart",
        "suffix": null
    },
    "address": {
        "streetAddress": "3154 Long Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Palmers Channel",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2463",
        "latitude": "-29.4726",
        "longitude": "153.2191"
    },
    "contact": {
        "email": "mstuart316@tata.com",
        "phone": "+61-316-358-0052",
        "socMedia": {
            "line": "mstuart316@tata.com@line.com"
        }
    },
    "login": {
        "username": "mstuart",
        "oauth2": "mstuart@line.com",
        "password": "$2y$10$w6ClgTsDkhpuci1qoMpYUuyDliyZB0z0lgF4Po102q3WpXMj49MNa"
    },
    "otherContact": {
        "emails": [
            "mstuart316@mtn.com",
            "mstuart316@ooredoo.com"
        ],
        "phoneNumbers": [
            "+61-316-316-4051",
            "+61-316-652-0615"
        ],
        "socMedias": [
            {
                "facebook": "mstuart316@mtn.com@facebook.com"
            },
            {
                "twitter": "mstuart316@ooredoo.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-10-07"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MAXWMCCO2403",
    "name": {
        "title": "Mr",
        "first": "Maxwell",
        "middle": "Q",
        "last": "Mccoy",
        "suffix": null
    },
    "address": {
        "streetAddress": "3443 Long Ditch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chiesanuova",
        "stateProvince": null,
        "locality": null,
        "country": "SM",
        "postalCode": "47894",
        "latitude": "43.9167",
        "longitude": "12.4167"
    },
    "contact": {
        "email": "mmccoy317@bt.com",
        "phone": "+61-317-130-2403",
        "socMedia": {
            "facebook": "mmccoy317@bt.com@facebook.com"
        }
    },
    "login": {
        "username": "mmccoy",
        "oauth2": "mmccoy@facebook.com",
        "password": "$2y$10$seQ6uZoe1ZiLwo0KU6eqKuG6zUUrGbv3.psYSG839SUuJSSlB7fpi"
    },
    "otherContact": {
        "emails": [
            "mmccoy317@tt.com"
        ],
        "phoneNumbers": [
            "+61-317-468-1604"
        ],
        "socMedias": [
            {
                "google": "mmccoy317@tt.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-05-27"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LATAALVA9488",
    "name": {
        "title": null,
        "first": "Latarsha",
        "middle": null,
        "last": "Alvarez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6115 Green Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "66",
        "city": "Gympie",
        "stateProvince": "QLD",
        "locality": "SUNSHINE MT ISA",
        "country": "AU",
        "postalCode": "4570",
        "latitude": "-26.1898",
        "longitude": "152.665"
    },
    "contact": {
        "email": "lalvarez318@sprint.com",
        "phone": "+61-318-761-9488",
        "socMedia": []
    },
    "login": {
        "username": "lalvarez",
        "oauth2": null,
        "password": "$2y$10$ZyydmfcRBCAd0JDUxifspeC44q3\/4L7Fn\/YsmfW5tiZ3UzX56HeuS"
    },
    "otherContact": {
        "emails": [
            "lalvarez318@uunet.com",
            "lalvarez318@millicom.com",
            "lalvarez318@turkcell.com"
        ],
        "phoneNumbers": [
            "+61-318-736-6013",
            "+61-318-257-2642",
            "+61-318-515-7583"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1977-01-27"
    },
    "totalBooked": 18,
    "discount": 0.016
});
db.customers.insertOne(
{
    "customerKey": "BETHTRUO5396",
    "name": {
        "title": "Ms",
        "first": "Bethanie",
        "middle": "E",
        "last": "Truong",
        "suffix": null
    },
    "address": {
        "streetAddress": "3211 Short Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Au\u00dferschmirn",
        "stateProvince": "Schmirn",
        "locality": "Politischer Bezirk Innsbruck Land",
        "country": "AT",
        "postalCode": "6154",
        "latitude": "47.0833",
        "longitude": "11.5333"
    },
    "contact": {
        "email": "btruong319@seednet.com",
        "phone": "+61-319-066-5396",
        "socMedia": {
            "line": "btruong319@seednet.com@line.com"
        }
    },
    "login": {
        "username": "btruong",
        "oauth2": "btruong@line.com",
        "password": "$2y$10$\/9Pj\/eepsRDn.mNsyDcwzeEhuRrF2JcyNZSHyJgOCrmWg5gcP5reW"
    },
    "otherContact": {
        "emails": [
            "btruong319@lguplus.com",
            "btruong319@tm.com"
        ],
        "phoneNumbers": [
            "+61-319-774-8498",
            "+61-319-945-6645"
        ],
        "socMedias": [
            {
                "linkedin": "btruong319@lguplus.com@linkedin.com"
            },
            {
                "facebook": "btruong319@tm.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-01-23"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "RENAALLE1379",
    "name": {
        "title": "Ms",
        "first": "Renato",
        "middle": "H",
        "last": "Allen",
        "suffix": null
    },
    "address": {
        "streetAddress": "950 Big Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chhipaner",
        "stateProvince": "Nasrullaganj",
        "locality": "Sehore",
        "country": "IN",
        "postalCode": "466331",
        "latitude": "22.5801",
        "longitude": "77.1487"
    },
    "contact": {
        "email": "rallen320@telekom.com",
        "phone": "+61-320-128-1379",
        "socMedia": {
            "facebook": "rallen320@telekom.com@facebook.com"
        }
    },
    "login": {
        "username": "rallen",
        "oauth2": "rallen@facebook.com",
        "password": "$2y$10$RNSslAxOnDDDsJA8HW6Lee9\/rawJvRGQf5TIpuOFc63ihX2zP07aG"
    },
    "otherContact": {
        "emails": [
            "rallen320@singtel.com"
        ],
        "phoneNumbers": [
            "+61-320-704-6333"
        ],
        "socMedias": [
            {
                "google": "rallen320@singtel.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1964-01-30"
    },
    "totalBooked": 14,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "THUHOWE7470",
    "name": {
        "title": null,
        "first": "Thu",
        "middle": null,
        "last": "Howell",
        "suffix": null
    },
    "address": {
        "streetAddress": "8146 Red Gully Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Capit\u00e3o Le\u00f4nidas Marques",
        "stateProvince": "Parana",
        "locality": "Parana",
        "country": "BR",
        "postalCode": "85790-000",
        "latitude": "-25.48",
        "longitude": "-53.588"
    },
    "contact": {
        "email": "thowell321@kpn.com",
        "phone": "+61-321-313-7470",
        "socMedia": []
    },
    "login": {
        "username": "thowell",
        "oauth2": null,
        "password": "$2y$10$Jw2WM1Z\/eIFgOfHl7h.svemG\/cFfsVaIKEJB6NM5KrPma8M7C4vG."
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2002-03-14"
    },
    "totalBooked": 11,
    "discount": 0.021
});
db.customers.insertOne(
{
    "customerKey": "NATHYANG0489",
    "name": {
        "title": "Mr",
        "first": "Nathanael",
        "middle": "S",
        "last": "Yang",
        "suffix": null
    },
    "address": {
        "streetAddress": "9119 Big Bridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Silputa Tiniali",
        "stateProvince": "Diphu",
        "locality": "Karbi Anglong",
        "country": "IN",
        "postalCode": "782482",
        "latitude": "26.05",
        "longitude": "92.8679"
    },
    "contact": {
        "email": "nyang322@belgacom.com",
        "phone": "+61-322-327-0489",
        "socMedia": {
            "skype": "nyang322@belgacom.com@skype.com"
        }
    },
    "login": {
        "username": "nyang",
        "oauth2": "nyang@skype.com",
        "password": "$2y$10$ksgC4BHTZ5TpyciIHUTE3OxXCTiHkL0ze\/gmnZeHZQNM1pQ5No1CO"
    },
    "otherContact": {
        "emails": [
            "nyang322@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-322-003-5210"
        ],
        "socMedias": [
            {
                "facebook": "nyang322@vodafone.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1996-09-13"
    },
    "totalBooked": 40,
    "discount": 0.076
});
db.customers.insertOne(
{
    "customerKey": "FRANSWEE7619",
    "name": {
        "title": "Mr",
        "first": "Franklin",
        "middle": "N",
        "last": "Sweeney",
        "suffix": null
    },
    "address": {
        "streetAddress": "3560 Green Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rubu\u013ci",
        "stateProvince": "Ozolaines pag.",
        "locality": "Ozolaines pag.",
        "country": "LV",
        "postalCode": "LV-4633",
        "latitude": "56.4523",
        "longitude": "27.2135"
    },
    "contact": {
        "email": "fsweeney323@telenor.com",
        "phone": "+61-323-212-7619",
        "socMedia": {
            "skype": "fsweeney323@telenor.com@skype.com"
        }
    },
    "login": {
        "username": "fsweeney",
        "oauth2": "fsweeney@skype.com",
        "password": "$2y$10$ItpSGADceLLBB23ALrzW4O6wTHqgRFIGg724WP7A48uHwkWQWEJiS"
    },
    "otherContact": {
        "emails": [
            "fsweeney323@optus.com"
        ],
        "phoneNumbers": [
            "+61-323-170-0449"
        ],
        "socMedias": [
            {
                "linkedin": "fsweeney323@optus.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1956-05-26"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "PERRDOUG5404",
    "name": {
        "title": null,
        "first": "Perry",
        "middle": null,
        "last": "Dougherty",
        "suffix": null
    },
    "address": {
        "streetAddress": "6912 Big Tree Way",
        "buildingName": null,
        "floor": 4,
        "roomAptCondoFlat": "D0",
        "city": "Castlegar",
        "stateProvince": "BC",
        "locality": "British Columbia",
        "country": "CA",
        "postalCode": "V1N",
        "latitude": "49.2998",
        "longitude": "-117.6689"
    },
    "contact": {
        "email": "pdougher324@airtel.com",
        "phone": "+61-324-941-5404",
        "socMedia": []
    },
    "login": {
        "username": "pdougher",
        "oauth2": null,
        "password": "$2y$10$chSOBRGmtMXgMClrEVD96.tIh18gzOLn\/O17d3x0O.TN9hrB7nTDu"
    },
    "otherContact": {
        "emails": [
            "pdougher324@bifty.com",
            "pdougher324@kddi.com",
            "pdougher324@turkcell.com"
        ],
        "phoneNumbers": [
            "+61-324-927-4396",
            "+61-324-008-9282",
            "+61-324-072-4538"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-06-20"
    },
    "totalBooked": 42,
    "discount": 0.09
});
db.customers.insertOne(
{
    "customerKey": "ALLERUSS1620",
    "name": {
        "title": "Ms",
        "first": "Alleen",
        "middle": "O",
        "last": "Russo",
        "suffix": null
    },
    "address": {
        "streetAddress": "512 Short Creek Road",
        "buildingName": "Building 49",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dolores",
        "stateProvince": "HID",
        "locality": "Mineral del Monte",
        "country": "MX",
        "postalCode": "42134",
        "latitude": "19.9842",
        "longitude": "-98.6128"
    },
    "contact": {
        "email": "arusso325@glasnet.com",
        "phone": "+61-325-958-1620",
        "socMedia": {
            "skype": "arusso325@glasnet.com@skype.com"
        }
    },
    "login": {
        "username": "arusso",
        "oauth2": "arusso@skype.com",
        "password": "$2y$10$uMGnEFZ1MPofdcBV8pcoSOx2hS2lKu14athxIOs0X0pVjoRRFqige"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-04-24"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JOSUMERR1857",
    "name": {
        "title": "Mr",
        "first": "Josue",
        "middle": "L",
        "last": "Merritt",
        "suffix": null
    },
    "address": {
        "streetAddress": "1321 Green Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Whitfield",
        "stateProvince": "England",
        "locality": "Northumberland",
        "country": "GB",
        "postalCode": "NE47",
        "latitude": "54.9",
        "longitude": "-2.3333"
    },
    "contact": {
        "email": "jmerritt326@turkcell.com",
        "phone": "+61-326-482-1857",
        "socMedia": {
            "line": "jmerritt326@turkcell.com@line.com"
        }
    },
    "login": {
        "username": "jmerritt",
        "oauth2": "jmerritt@line.com",
        "password": "$2y$10$pKDydgPbmjm.6acRmbV.seVqI6QDZ2mRWMPvWBCzZizDNI70FV4mO"
    },
    "otherContact": {
        "emails": [
            "jmerritt326@bifty.com",
            "jmerritt326@optus.com"
        ],
        "phoneNumbers": [
            "+61-326-019-1647",
            "+61-326-872-4405"
        ],
        "socMedias": [
            {
                "skype": "jmerritt326@bifty.com@skype.com"
            },
            {
                "google": "jmerritt326@optus.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1998-10-02"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DEWIWALL5536",
    "name": {
        "title": null,
        "first": "Dewitt",
        "middle": null,
        "last": "Wall",
        "suffix": null
    },
    "address": {
        "streetAddress": "7364 Green Mountain Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Boveresse",
        "stateProvince": "NE",
        "locality": "Val-de-Travers District",
        "country": "CH",
        "postalCode": "2113",
        "latitude": "46.9182",
        "longitude": "6.6006"
    },
    "contact": {
        "email": "dwall327@tata.com",
        "phone": "+61-327-858-5536",
        "socMedia": []
    },
    "login": {
        "username": "dwall",
        "oauth2": null,
        "password": "$2y$10$53qfvWRFpc\/OtEJPQ2DTy.T0zBAA2xvug644nf2GdgQbL8Nv8i.3C"
    },
    "otherContact": {
        "emails": [
            "dwall327@bifty.com",
            "dwall327@bce.com"
        ],
        "phoneNumbers": [
            "+61-327-040-0949",
            "+61-327-562-4647"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-05-29"
    },
    "totalBooked": 30,
    "discount": 0.084
});
db.customers.insertOne(
{
    "customerKey": "HANSWHIT7412",
    "name": {
        "title": "Mr",
        "first": "Hans",
        "middle": "G",
        "last": "White",
        "suffix": null
    },
    "address": {
        "streetAddress": "8132 Red Mound Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Khopati",
        "stateProvince": "Debitola",
        "locality": "Dhubri",
        "country": "IN",
        "postalCode": "783339",
        "latitude": "26.3833",
        "longitude": "91.9667"
    },
    "contact": {
        "email": "hwhite328@millicom.com",
        "phone": "+61-328-184-7412",
        "socMedia": {
            "skype": "hwhite328@millicom.com@skype.com"
        }
    },
    "login": {
        "username": "hwhite",
        "oauth2": "hwhite@skype.com",
        "password": "$2y$10$PV7rclbDPFlqY1YkGuXz1uixxSnqJOfj1nv0ZeQO8PoDkG6GmpZ8."
    },
    "otherContact": {
        "emails": [
            "hwhite328@oi.com",
            "hwhite328@maxcomm.com"
        ],
        "phoneNumbers": [
            "+61-328-288-2543",
            "+61-328-946-0560"
        ],
        "socMedias": [
            {
                "line": "hwhite328@oi.com@line.com"
            },
            {
                "facebook": "hwhite328@maxcomm.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-12-30"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "WINSYANG7360",
    "name": {
        "title": "Mr",
        "first": "Winston",
        "middle": "C",
        "last": "Yang",
        "suffix": null
    },
    "address": {
        "streetAddress": "2085 Blue Bend Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Szklana",
        "stateProvince": "Sierakowice",
        "locality": "Powiat kartuski",
        "country": "PL",
        "postalCode": "83-334",
        "latitude": "54.3139",
        "longitude": "17.9417"
    },
    "contact": {
        "email": "wyang329@vodafone.com",
        "phone": "+61-329-161-7360",
        "socMedia": {
            "facebook": "wyang329@vodafone.com@facebook.com"
        }
    },
    "login": {
        "username": "wyang",
        "oauth2": "wyang@facebook.com",
        "password": "$2y$10$qTiAIURdKKUSmupIOlfiNuMj3U\/6G.gR2z9dacuVzJWLN47pA.efK"
    },
    "otherContact": {
        "emails": [
            "wyang329@openworld.com",
            "wyang329@frontier.com"
        ],
        "phoneNumbers": [
            "+61-329-269-1085",
            "+61-329-257-5982"
        ],
        "socMedias": [
            {
                "line": "wyang329@openworld.com@line.com"
            },
            {
                "google": "wyang329@frontier.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-02-17"
    },
    "totalBooked": 77,
    "discount": 0.121
});
db.customers.insertOne(
{
    "customerKey": "NATAHUBB8885",
    "name": {
        "title": null,
        "first": "Natashia",
        "middle": null,
        "last": "Hubbard",
        "suffix": null
    },
    "address": {
        "streetAddress": "2873 Winding Bend Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "55",
        "city": "Dominion",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B1G",
        "latitude": "46.2168",
        "longitude": "-60.0151"
    },
    "contact": {
        "email": "nhubbard330@netcom.com",
        "phone": "+61-330-881-8885",
        "socMedia": []
    },
    "login": {
        "username": "nhubbard",
        "oauth2": null,
        "password": "$2y$10$dwiUkB5xbn5T\/71MbHNNFuuGETdqdwVi8M.aV4aQ01uHMu5fesX26"
    },
    "otherContact": {
        "emails": [
            "nhubbard330@orange.com",
            "nhubbard330@frontier.com",
            "nhubbard330@millicom.com"
        ],
        "phoneNumbers": [
            "+61-330-817-9493",
            "+61-330-294-7062",
            "+61-330-090-8083"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1998-10-07"
    },
    "totalBooked": 9,
    "discount": 0.046
});
db.customers.insertOne(
{
    "customerKey": "LOURHENS4224",
    "name": {
        "title": "Ms",
        "first": "Lourie",
        "middle": "S",
        "last": "Henson",
        "suffix": null
    },
    "address": {
        "streetAddress": "6818 Green Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oslo",
        "stateProvince": "Oslo",
        "locality": "Oslo",
        "country": "NO",
        "postalCode": "0483",
        "latitude": "59.9127",
        "longitude": "10.7461"
    },
    "contact": {
        "email": "lhenson331@relcom.com",
        "phone": "+61-331-230-4224",
        "socMedia": {
            "google": "lhenson331@relcom.com@google.com"
        }
    },
    "login": {
        "username": "lhenson",
        "oauth2": "lhenson@google.com",
        "password": "$2y$10$bRAjtt\/I.pIhP\/acpfkMt.VvelExTl\/IYXtLb9K1YoB6ckaVo5oUy"
    },
    "otherContact": {
        "emails": [
            "lhenson331@singtel.com",
            "lhenson331@ooredoo.com",
            "lhenson331@verizon.com"
        ],
        "phoneNumbers": [
            "+61-331-604-6922",
            "+61-331-093-2668",
            "+61-331-983-5434"
        ],
        "socMedias": [
            {
                "line": "lhenson331@singtel.com@line.com"
            },
            {
                "facebook": "lhenson331@ooredoo.com@facebook.com"
            },
            {
                "skype": "lhenson331@verizon.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1960-11-13"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MARGARRO4680",
    "name": {
        "title": "Ms",
        "first": "Margret",
        "middle": "Z",
        "last": "Arroyo",
        "suffix": null
    },
    "address": {
        "streetAddress": "9522 Blue Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Nitrahalli",
        "stateProvince": "Madhugiri",
        "locality": "Tumkur",
        "country": "IN",
        "postalCode": "572132",
        "latitude": "13.6267",
        "longitude": "77.323"
    },
    "contact": {
        "email": "marroyo332@orange.com",
        "phone": "+61-332-079-4680",
        "socMedia": {
            "linkedin": "marroyo332@orange.com@linkedin.com"
        }
    },
    "login": {
        "username": "marroyo",
        "oauth2": "marroyo@linkedin.com",
        "password": "$2y$10$o\/c8\/pl6Y2apVoELGZMDbOkrAw9p\/PIulkgHWSFFR46x9BEyXcuUW"
    },
    "otherContact": {
        "emails": [
            "marroyo332@pldt.com",
            "marroyo332@bt.com",
            "marroyo332@pldt.com"
        ],
        "phoneNumbers": [
            "+61-332-279-2952",
            "+61-332-264-0976",
            "+61-332-652-1541"
        ],
        "socMedias": [
            {
                "skype": "marroyo332@pldt.com@skype.com"
            },
            {
                "linkedin": "marroyo332@bt.com@linkedin.com"
            },
            {
                "skype": "marroyo332@pldt.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-06-22"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SHIZSTAR3154",
    "name": {
        "title": null,
        "first": "Shizue",
        "middle": null,
        "last": "Stark",
        "suffix": null
    },
    "address": {
        "streetAddress": "4664 Winding Gulch Street",
        "buildingName": null,
        "floor": 12,
        "roomAptCondoFlat": null,
        "city": "Gyula",
        "stateProvince": "BE",
        "locality": "B\u00e9k\u00e9s",
        "country": "HU",
        "postalCode": "5701",
        "latitude": "46.65",
        "longitude": "21.2833"
    },
    "contact": {
        "email": "sstark333@unicom.com",
        "phone": "+61-333-078-3154",
        "socMedia": []
    },
    "login": {
        "username": "sstark",
        "oauth2": null,
        "password": "$2y$10$0G6axWdpvJt4\/ZPwPE3kVunMZg.ZBd7SvnSNEZm.dpDcMAgfFGq5G"
    },
    "otherContact": {
        "emails": [
            "sstark333@seednet.com"
        ],
        "phoneNumbers": [
            "+61-333-573-2630"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-12-12"
    },
    "totalBooked": 5,
    "discount": 0.099
});
db.customers.insertOne(
{
    "customerKey": "JANECUEV1070",
    "name": {
        "title": "Ms",
        "first": "Janeen",
        "middle": "Z",
        "last": "Cuevas",
        "suffix": null
    },
    "address": {
        "streetAddress": "9584 Big Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Moose Jaw Northeast",
        "stateProvince": "SK",
        "locality": "Moose Jaw ",
        "country": "CA",
        "postalCode": "S6J",
        "latitude": "50.4185",
        "longitude": "-105.5393"
    },
    "contact": {
        "email": "jcuevas334@telenor.com",
        "phone": "+61-334-911-1070",
        "socMedia": {
            "twitter": "jcuevas334@telenor.com@twitter.com"
        }
    },
    "login": {
        "username": "jcuevas",
        "oauth2": "jcuevas@twitter.com",
        "password": "$2y$10$j0IQWHa\/tCst9Aaqg5nrgOEYZffRiFyhoq9BO8fGDaSSx2vI6mm\/W"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1966-01-19"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LONNMARS3258",
    "name": {
        "title": "Ms",
        "first": "Lonnie",
        "middle": "F",
        "last": "Marshall",
        "suffix": null
    },
    "address": {
        "streetAddress": "752 Big Mountain Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St Ann's Chapel",
        "stateProvince": "England",
        "locality": "Devon",
        "country": "GB",
        "postalCode": "TQ7",
        "latitude": "50.2825",
        "longitude": "-3.7841"
    },
    "contact": {
        "email": "lmarshal335@worldnet.com",
        "phone": "+61-335-338-3258",
        "socMedia": {
            "linkedin": "lmarshal335@worldnet.com@linkedin.com"
        }
    },
    "login": {
        "username": "lmarshal",
        "oauth2": "lmarshal@linkedin.com",
        "password": "$2y$10$OAVzYionITk5Ox62vjGx4e\/SNCBZL.\/obeY7\/GUxauANhODeDQIFO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-04-10"
    },
    "totalBooked": 2,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "MICHJAME3555",
    "name": {
        "title": null,
        "first": "Michelina",
        "middle": null,
        "last": "James",
        "suffix": null
    },
    "address": {
        "streetAddress": "8021 Green Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "23",
        "city": "Shepton Mallet",
        "stateProvince": "England",
        "locality": "Somerset",
        "country": "GB",
        "postalCode": "BA4",
        "latitude": "51.1897",
        "longitude": "-2.5472"
    },
    "contact": {
        "email": "mjames336@zain.com",
        "phone": "+61-336-400-3555",
        "socMedia": []
    },
    "login": {
        "username": "mjames",
        "oauth2": null,
        "password": "$2y$10$P2TlnkuOy2lsgkeKvGemqeW6UsM5eZOjcUwXRM.f5xM7dXKDBRFV6"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-02-10"
    },
    "totalBooked": 48,
    "discount": 0.147
});
db.customers.insertOne(
{
    "customerKey": "LEANOWEN1929",
    "name": {
        "title": "Ms",
        "first": "Leann",
        "middle": "D",
        "last": "Owen",
        "suffix": null
    },
    "address": {
        "streetAddress": "6534 Blue Hill Road",
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
        "email": "lowen337@bifty.com",
        "phone": "+61-337-442-1929",
        "socMedia": {
            "facebook": "lowen337@bifty.com@facebook.com"
        }
    },
    "login": {
        "username": "lowen",
        "oauth2": "lowen@facebook.com",
        "password": "$2y$10$tzGZiO2ARP...OqcNwue3OCvKNV0v0\/8fUu2gunnMqNg4HYRWb88G"
    },
    "otherContact": {
        "emails": [
            "lowen337@daxnet.com"
        ],
        "phoneNumbers": [
            "+61-337-673-5445"
        ],
        "socMedias": [
            {
                "facebook": "lowen337@daxnet.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1959-09-19"
    },
    "totalBooked": 14,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "EMERGONZ3899",
    "name": {
        "title": "Mr",
        "first": "Emery",
        "middle": "Y",
        "last": "Gonzalez",
        "suffix": null
    },
    "address": {
        "streetAddress": "4368 Big Stream Circle",
        "buildingName": "Building B9",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Raukkan",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5259",
        "latitude": "-35.4358",
        "longitude": "139.2417"
    },
    "contact": {
        "email": "egonzale338@access.com",
        "phone": "+61-338-693-3899",
        "socMedia": {
            "linkedin": "egonzale338@access.com@linkedin.com"
        }
    },
    "login": {
        "username": "egonzale",
        "oauth2": "egonzale@linkedin.com",
        "password": "$2y$10$CMoyetQt\/7loGlgeyrBzsurZdFQKmpWqRPyT7CLQqk\/IrHnWfn\/aK"
    },
    "otherContact": {
        "emails": [
            "egonzale338@apicnet.com",
            "egonzale338@jio.com",
            "egonzale338@mtn.com"
        ],
        "phoneNumbers": [
            "+61-338-412-3416",
            "+61-338-737-5333",
            "+61-338-728-8102"
        ],
        "socMedias": [
            {
                "linkedin": "egonzale338@apicnet.com@linkedin.com"
            },
            {
                "google": "egonzale338@jio.com@google.com"
            },
            {
                "linkedin": "egonzale338@mtn.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-09-30"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "HIENESPI5819",
    "name": {
        "title": null,
        "first": "Hien",
        "middle": null,
        "last": "Espinosa",
        "suffix": null
    },
    "address": {
        "streetAddress": "851 Big Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kavadarci",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "1430",
        "latitude": "41.4331",
        "longitude": "22.0119"
    },
    "contact": {
        "email": "hespinos339@ooredoo.com",
        "phone": "+61-339-211-5819",
        "socMedia": []
    },
    "login": {
        "username": "hespinos",
        "oauth2": null,
        "password": "$2y$10$\/AhbXPWi5HN5KSP6LxXkwuBO6n1EZF.\/yeFJgWgn7u6vqsqMqU4jG"
    },
    "otherContact": {
        "emails": [
            "hespinos339@airtel.com"
        ],
        "phoneNumbers": [
            "+61-339-704-1854"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1951-06-29"
    },
    "totalBooked": 33,
    "discount": 0.017
});
db.customers.insertOne(
{
    "customerKey": "JERRBLAN0678",
    "name": {
        "title": "Ms",
        "first": "Jerry",
        "middle": "W",
        "last": "Blankenship",
        "suffix": null
    },
    "address": {
        "streetAddress": "5534 Big Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yorkton Region (Melville)",
        "stateProvince": "SK",
        "locality": "Saskatchewan",
        "country": "CA",
        "postalCode": "S0A",
        "latitude": "51.4818",
        "longitude": "-102.9065"
    },
    "contact": {
        "email": "jblanken340@chunghwa.com",
        "phone": "+61-340-137-0678",
        "socMedia": {
            "line": "jblanken340@chunghwa.com@line.com"
        }
    },
    "login": {
        "username": "jblanken",
        "oauth2": "jblanken@line.com",
        "password": "$2y$10$NFY2W.gcdPS9JXz\/nVKRPeIM8DGCBvK.wleFH.LhoVSnHSxRoeYIC"
    },
    "otherContact": {
        "emails": [
            "jblanken340@mtn.com"
        ],
        "phoneNumbers": [
            "+61-340-168-9223"
        ],
        "socMedias": [
            {
                "line": "jblanken340@mtn.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-08-29"
    },
    "totalBooked": 3,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "VIVICALH4593",
    "name": {
        "title": "Ms",
        "first": "Vivian",
        "middle": "O",
        "last": "Calhoun",
        "suffix": null
    },
    "address": {
        "streetAddress": "7516 Long Woods Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Shinanocho",
        "stateProvince": "Seto Shi",
        "locality": "Seto Shi",
        "country": "JP",
        "postalCode": "480-1207",
        "latitude": "35.25",
        "longitude": "137.1333"
    },
    "contact": {
        "email": "vcalhoun341@kddi.com",
        "phone": "+61-341-194-4593",
        "socMedia": {
            "line": "vcalhoun341@kddi.com@line.com"
        }
    },
    "login": {
        "username": "vcalhoun",
        "oauth2": "vcalhoun@line.com",
        "password": "$2y$10$zmb7sXfMYxSoPMZu6l14WeJ7tLF5sQDsnAAAFAl0jcb4OOessueiG"
    },
    "otherContact": {
        "emails": [
            "vcalhoun341@vodafone.com",
            "vcalhoun341@sprint.com",
            "vcalhoun341@oi.com"
        ],
        "phoneNumbers": [
            "+61-341-224-5528",
            "+61-341-775-7890",
            "+61-341-940-8306"
        ],
        "socMedias": [
            {
                "twitter": "vcalhoun341@vodafone.com@twitter.com"
            },
            {
                "facebook": "vcalhoun341@sprint.com@facebook.com"
            },
            {
                "google": "vcalhoun341@oi.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1930-10-06"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DELMBRAD4571",
    "name": {
        "title": "Dr",
        "first": "Delma",
        "middle": null,
        "last": "Brady",
        "suffix": "Jr"
    },
    "address": {
        "streetAddress": "8674 Big Ridge Avenue",
        "buildingName": null,
        "floor": 16,
        "roomAptCondoFlat": "4B",
        "city": "Bilborough",
        "stateProvince": "England",
        "locality": "Nottinghamshire",
        "country": "GB",
        "postalCode": "NG8",
        "latitude": "52.9648",
        "longitude": "-1.2132"
    },
    "contact": {
        "email": "dbrady342@econnect.com",
        "phone": "+61-342-657-4571",
        "socMedia": []
    },
    "login": {
        "username": "dbrady",
        "oauth2": null,
        "password": "$2y$10$NlPm4UImd6gEMJLIFE.SKOt3tFpkJHcGyUrYzQLrjtrYug02Ibvla"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1964-01-10"
    },
    "totalBooked": 5,
    "discount": 0.083
});
db.customers.insertOne(
{
    "customerKey": "NYLAHOUS6262",
    "name": {
        "title": "Ms",
        "first": "Nyla",
        "middle": "V",
        "last": "Houston",
        "suffix": null
    },
    "address": {
        "streetAddress": "6910 Little Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Curanilahue",
        "stateProvince": "Curanilahue",
        "locality": "Provincia de Arauco",
        "country": "CL",
        "postalCode": "4370000",
        "latitude": "-37.483",
        "longitude": "-73.2351"
    },
    "contact": {
        "email": "nhouston343@netcom.com",
        "phone": "+61-343-174-6262",
        "socMedia": {
            "skype": "nhouston343@netcom.com@skype.com"
        }
    },
    "login": {
        "username": "nhouston",
        "oauth2": "nhouston@skype.com",
        "password": "$2y$10$\/lFn8jT3Oc8x\/dOxRXLTveFalD1Wy5.HwBHv9.KGSz6GEyOO\/a5T2"
    },
    "otherContact": {
        "emails": [
            "nhouston343@seednet.com",
            "nhouston343@verizon.com",
            "nhouston343@singtel.com"
        ],
        "phoneNumbers": [
            "+61-343-172-2429",
            "+61-343-221-4721",
            "+61-343-919-9834"
        ],
        "socMedias": [
            {
                "linkedin": "nhouston343@seednet.com@linkedin.com"
            },
            {
                "line": "nhouston343@verizon.com@line.com"
            },
            {
                "facebook": "nhouston343@singtel.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-05-02"
    },
    "totalBooked": 74,
    "discount": 0.095
});
db.customers.insertOne(
{
    "customerKey": "GENNLAMB1649",
    "name": {
        "title": "Ms",
        "first": "Gennie",
        "middle": "O",
        "last": "Lamb",
        "suffix": null
    },
    "address": {
        "streetAddress": "1352 Short Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dunkirk",
        "stateProvince": "IN",
        "locality": "Jay",
        "country": "US",
        "postalCode": "47336",
        "latitude": "40.3883",
        "longitude": "-85.2255"
    },
    "contact": {
        "email": "glamb344@maxcomm.com",
        "phone": "+61-344-717-1649",
        "socMedia": {
            "linkedin": "glamb344@maxcomm.com@linkedin.com"
        }
    },
    "login": {
        "username": "glamb",
        "oauth2": "glamb@linkedin.com",
        "password": "$2y$10$tssQkmNibmPRIoDkSdMe0eZaRD5Z7eVkCYm6TFGEfekjNn5OEg2RO"
    },
    "otherContact": {
        "emails": [
            "glamb344@ais.com"
        ],
        "phoneNumbers": [
            "+61-344-754-1104"
        ],
        "socMedias": [
            {
                "line": "glamb344@ais.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1962-10-20"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CASESING9120",
    "name": {
        "title": "Mr",
        "first": "Casey",
        "middle": "J",
        "last": "Singleton",
        "suffix": null
    },
    "address": {
        "streetAddress": "4491 Little Bough Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "South Walpole",
        "stateProvince": "MA",
        "locality": "Norfolk",
        "country": "US",
        "postalCode": "02071",
        "latitude": "42.0992",
        "longitude": "-71.2752"
    },
    "contact": {
        "email": "csinglet346@airtel.com",
        "phone": "+61-346-603-9120",
        "socMedia": {
            "facebook": "csinglet346@airtel.com@facebook.com"
        }
    },
    "login": {
        "username": "csinglet",
        "oauth2": "csinglet@facebook.com",
        "password": "$2y$10$d6466.7yFf8.OgT1X1FlIe0LzZk1rlnzx52l84nicvq1DkXJIwjqO"
    },
    "otherContact": {
        "emails": [
            "csinglet346@airtel.com",
            "csinglet346@orstom.com"
        ],
        "phoneNumbers": [
            "+61-346-540-5545",
            "+61-346-267-9112"
        ],
        "socMedias": [
            {
                "twitter": "csinglet346@airtel.com@twitter.com"
            },
            {
                "line": "csinglet346@orstom.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-03-02"
    },
    "totalBooked": 5,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "HOUSTOWN8905",
    "name": {
        "title": "Mr",
        "first": "Houston",
        "middle": "X",
        "last": "Townsend",
        "suffix": null
    },
    "address": {
        "streetAddress": "7274 Green Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ume\u00e5",
        "stateProvince": "AC",
        "locality": "Ume\u00e5",
        "country": "SE",
        "postalCode": "903 55",
        "latitude": "63.8284",
        "longitude": "20.2597"
    },
    "contact": {
        "email": "htownsen347@kpn.com",
        "phone": "+61-347-866-8905",
        "socMedia": {
            "google": "htownsen347@kpn.com@google.com"
        }
    },
    "login": {
        "username": "htownsen",
        "oauth2": "htownsen@google.com",
        "password": "$2y$10$eFxDH4xoxtwPgjhlPfXQkuNZtTur4QtEhU4\/5gCTn.Qyzo2Vh0iZW"
    },
    "otherContact": {
        "emails": [
            "htownsen347@algonet.com",
            "htownsen347@tt.com"
        ],
        "phoneNumbers": [
            "+61-347-698-6208",
            "+61-347-641-0063"
        ],
        "socMedias": [
            {
                "skype": "htownsen347@algonet.com@skype.com"
            },
            {
                "facebook": "htownsen347@tt.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1935-06-14"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "HIRADILL9504",
    "name": {
        "title": null,
        "first": "Hiram",
        "middle": null,
        "last": "Dillon",
        "suffix": null
    },
    "address": {
        "streetAddress": "725 Little Gully Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "F7",
        "city": "Babaganj",
        "stateProvince": "Lalganj",
        "locality": "Pratapgarh",
        "country": "IN",
        "postalCode": "230143",
        "latitude": "25.8333",
        "longitude": "81.8725"
    },
    "contact": {
        "email": "hdillon348@softbank.com",
        "phone": "+61-348-763-9504",
        "socMedia": []
    },
    "login": {
        "username": "hdillon",
        "oauth2": null,
        "password": "$2y$10$tnxV4ntMVr97M8NuEM8mk.p6vbVlDQcJJPVzOE\/4\/5OAJC4awfMQ."
    },
    "otherContact": {
        "emails": [
            "hdillon348@ais.com"
        ],
        "phoneNumbers": [
            "+61-348-041-6126"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1971-03-11"
    },
    "totalBooked": 17,
    "discount": 0.019
});
db.customers.insertOne(
{
    "customerKey": "PHILOCON9591",
    "name": {
        "title": "Mr",
        "first": "Phil",
        "middle": "M",
        "last": "Oconnor",
        "suffix": null
    },
    "address": {
        "streetAddress": "2359 Long Ridge Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Chuuk",
        "stateProvince": "State of Chuuk",
        "locality": "State of Chuuk",
        "country": "FM",
        "postalCode": "96942",
        "latitude": "7.1383",
        "longitude": "151.5031"
    },
    "contact": {
        "email": "poconnor349@unicom.com",
        "phone": "+61-349-460-9591",
        "socMedia": {
            "twitter": "poconnor349@unicom.com@twitter.com"
        }
    },
    "login": {
        "username": "poconnor",
        "oauth2": "poconnor@twitter.com",
        "password": "$2y$10$FPtHxIRzZeTkkNKc2gzSOuQUmXsRVZJ\/i1\/EjBQywVU.Z5gxBxor2"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-03-11"
    },
    "totalBooked": 16,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NADEGAIN8327",
    "name": {
        "title": "Ms",
        "first": "Nadene",
        "middle": "R",
        "last": "Gaines",
        "suffix": null
    },
    "address": {
        "streetAddress": "6816 Long Bridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Port Orange",
        "stateProvince": "FL",
        "locality": "Volusia",
        "country": "US",
        "postalCode": "32128",
        "latitude": "29.1383",
        "longitude": "-80.9956"
    },
    "contact": {
        "email": "ngaines350@algonet.com",
        "phone": "+61-350-532-8327",
        "socMedia": {
            "twitter": "ngaines350@algonet.com@twitter.com"
        }
    },
    "login": {
        "username": "ngaines",
        "oauth2": "ngaines@twitter.com",
        "password": "$2y$10$qjFhY2J8Huljs8TknXd6O.JekXJjsjxLmnbS1Ukaj18D5BWrBjUQe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-06-20"
    },
    "totalBooked": 13,
    "discount": 0.07
});
db.customers.insertOne(
{
    "customerKey": "DANNCONL8401",
    "name": {
        "title": null,
        "first": "Dann",
        "middle": null,
        "last": "Conley",
        "suffix": null
    },
    "address": {
        "streetAddress": "8239 Red Tree Avenue",
        "buildingName": "Building 17",
        "floor": 14,
        "roomAptCondoFlat": null,
        "city": "Fort-de-France",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97269 CEDEX",
        "latitude": "14.6089",
        "longitude": "-61.0733"
    },
    "contact": {
        "email": "dconley351@nii.com",
        "phone": "+61-351-864-8401",
        "socMedia": []
    },
    "login": {
        "username": "dconley",
        "oauth2": null,
        "password": "$2y$10$YD2NQUsQ\/O5HX0Stp\/QBuOVt7wLdLfSl3gjJdmWD2aXyhf9JRCF4."
    },
    "otherContact": {
        "emails": [
            "dconley351@glasnet.com"
        ],
        "phoneNumbers": [
            "+61-351-854-1758"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1983-09-06"
    },
    "totalBooked": 29,
    "discount": 0.078
});
db.customers.insertOne(
{
    "customerKey": "LANAVIL4757",
    "name": {
        "title": "Ms",
        "first": "Lan",
        "middle": "W",
        "last": "Avila",
        "suffix": null
    },
    "address": {
        "streetAddress": "6837 Blue Mound Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kentville",
        "stateProvince": "NS",
        "locality": "Nova Scotia",
        "country": "CA",
        "postalCode": "B4N",
        "latitude": "45.0834",
        "longitude": "-64.4988"
    },
    "contact": {
        "email": "lavila352@tata.com",
        "phone": "+61-352-690-4757",
        "socMedia": {
            "line": "lavila352@tata.com@line.com"
        }
    },
    "login": {
        "username": "lavila",
        "oauth2": "lavila@line.com",
        "password": "$2y$10$rof23JwY4JLCcVyXYBTC0uhFAnbqVWclcAxajlwSGcBq9gRrTb4Oa"
    },
    "otherContact": {
        "emails": [
            "lavila352@relcom.com",
            "lavila352@singtel.com"
        ],
        "phoneNumbers": [
            "+61-352-445-5298",
            "+61-352-994-9184"
        ],
        "socMedias": [
            {
                "twitter": "lavila352@relcom.com@twitter.com"
            },
            {
                "line": "lavila352@singtel.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-06-19"
    },
    "totalBooked": 11,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "SHANBALL1387",
    "name": {
        "title": "Mr",
        "first": "Shannon",
        "middle": "C",
        "last": "Ballard",
        "suffix": null
    },
    "address": {
        "streetAddress": "1275 Big Canyon Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jyv\u00e4skyl\u00e4",
        "stateProvince": "Jyv\u00e4skyl\u00e4",
        "locality": "Jyv\u00e4skyl\u00e4",
        "country": "FI",
        "postalCode": "40350",
        "latitude": "62.2913",
        "longitude": "25.8026"
    },
    "contact": {
        "email": "sballard353@sktelecom.com",
        "phone": "+61-353-158-1387",
        "socMedia": {
            "google": "sballard353@sktelecom.com@google.com"
        }
    },
    "login": {
        "username": "sballard",
        "oauth2": "sballard@google.com",
        "password": "$2y$10$jMrhgW.xVnpUlmCzt6BEjOdJmgprwbG9WPfjePjEoTydCvGtMJbJu"
    },
    "otherContact": {
        "emails": [
            "sballard353@relcom.com"
        ],
        "phoneNumbers": [
            "+61-353-665-9148"
        ],
        "socMedias": [
            {
                "linkedin": "sballard353@relcom.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-01-23"
    },
    "totalBooked": 9,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "HAYDOLIV4651",
    "name": {
        "title": null,
        "first": "Hayden",
        "middle": null,
        "last": "Oliver",
        "suffix": null
    },
    "address": {
        "streetAddress": "9296 Red Stream Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "88",
        "city": "Belleville West",
        "stateProvince": "ON",
        "locality": "Belleville",
        "country": "CA",
        "postalCode": "K8P",
        "latitude": "44.1665",
        "longitude": "-77.4037"
    },
    "contact": {
        "email": "holiver354@telia.com",
        "phone": "+61-354-986-4651",
        "socMedia": []
    },
    "login": {
        "username": "holiver",
        "oauth2": null,
        "password": "$2y$10$462vMffZ.PO7ORHL42QNQOsUoUH0qSEMN12wG1e6qwwv\/SroHKvuq"
    },
    "otherContact": {
        "emails": [
            "holiver354@seednet.com"
        ],
        "phoneNumbers": [
            "+61-354-222-3140"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1932-04-17"
    },
    "totalBooked": 29,
    "discount": 0.084
});
db.customers.insertOne(
{
    "customerKey": "BOYDBALL3714",
    "name": {
        "title": "Mr",
        "first": "Boyd",
        "middle": "J",
        "last": "Ballard",
        "suffix": null
    },
    "address": {
        "streetAddress": "4851 Green Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Oakland",
        "stateProvince": "AR",
        "locality": "Marion",
        "country": "US",
        "postalCode": "72661",
        "latitude": "36.4442",
        "longitude": "-92.5832"
    },
    "contact": {
        "email": "bballard355@sprint.com",
        "phone": "+61-355-819-3714",
        "socMedia": {
            "linkedin": "bballard355@sprint.com@linkedin.com"
        }
    },
    "login": {
        "username": "bballard",
        "oauth2": "bballard@linkedin.com",
        "password": "$2y$10$PCXJBulg2rEkVj\/R6uFJ\/.E9IHE8G\/zJHY87\/CK8K3Tl4eUyus1o2"
    },
    "otherContact": {
        "emails": [
            "bballard355@centurylink.com"
        ],
        "phoneNumbers": [
            "+61-355-900-7952"
        ],
        "socMedias": [
            {
                "skype": "bballard355@centurylink.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-08-20"
    },
    "totalBooked": 3,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "FRANMAYO3936",
    "name": {
        "title": "Mr",
        "first": "Frank",
        "middle": "W",
        "last": "Mayo",
        "suffix": null
    },
    "address": {
        "streetAddress": "1399 Big Gully Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Waterloo",
        "stateProvince": "IA",
        "locality": "Black Hawk",
        "country": "US",
        "postalCode": "50704",
        "latitude": "42.4698",
        "longitude": "-92.3095"
    },
    "contact": {
        "email": "fmayo356@safaricom.com",
        "phone": "+61-356-200-3936",
        "socMedia": {
            "facebook": "fmayo356@safaricom.com@facebook.com"
        }
    },
    "login": {
        "username": "fmayo",
        "oauth2": "fmayo@facebook.com",
        "password": "$2y$10$OOvdVTh50C9zn4CMrEB0Bu0lSLM.QEh3Jp\/VMdYuHMifga.M1OHai"
    },
    "otherContact": {
        "emails": [
            "fmayo356@frontier.com"
        ],
        "phoneNumbers": [
            "+61-356-998-3437"
        ],
        "socMedias": [
            {
                "line": "fmayo356@frontier.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-10-12"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CLEVLUGO7444",
    "name": {
        "title": null,
        "first": "Cleveland",
        "middle": null,
        "last": "Lugo",
        "suffix": null
    },
    "address": {
        "streetAddress": "6516 Long Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Schoelcher",
        "stateProvince": "MQ",
        "locality": "Martinique",
        "country": "MQ",
        "postalCode": "97277 CEDEX",
        "latitude": "14.6177",
        "longitude": "-61.099"
    },
    "contact": {
        "email": "clugo357@ktc.com",
        "phone": "+61-357-326-7444",
        "socMedia": []
    },
    "login": {
        "username": "clugo",
        "oauth2": null,
        "password": "$2y$10$RmDFuOXseJAb9pBZUccd0.NqB7D5YYFbTjDsgOnrmg44T.UJBLT9e"
    },
    "otherContact": {
        "emails": [
            "clugo357@ktc.com",
            "clugo357@telesystems.com"
        ],
        "phoneNumbers": [
            "+61-357-794-0493",
            "+61-357-321-0835"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-01-18"
    },
    "totalBooked": 79,
    "discount": 0.158
});
db.customers.insertOne(
{
    "customerKey": "DELMHOOV3483",
    "name": {
        "title": "Mr",
        "first": "Delmer",
        "middle": "E",
        "last": "Hoover",
        "suffix": null
    },
    "address": {
        "streetAddress": "9350 Big Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hoveringham",
        "stateProvince": "England",
        "locality": "Nottinghamshire",
        "country": "GB",
        "postalCode": "NG14",
        "latitude": "53.0129",
        "longitude": "-0.9594"
    },
    "contact": {
        "email": "dhoover358@cerist.com",
        "phone": "+61-358-605-3483",
        "socMedia": {
            "skype": "dhoover358@cerist.com@skype.com"
        }
    },
    "login": {
        "username": "dhoover",
        "oauth2": "dhoover@skype.com",
        "password": "$2y$10$kLEpOf20LmKtwT6qHbH2ietEfcXSDyM46g53RjmVxRgaKR65gnc1y"
    },
    "otherContact": {
        "emails": [
            "dhoover358@ntt.com",
            "dhoover358@bce.com",
            "dhoover358@nii.com"
        ],
        "phoneNumbers": [
            "+61-358-327-6633",
            "+61-358-304-6049",
            "+61-358-971-5951"
        ],
        "socMedias": [
            {
                "skype": "dhoover358@ntt.com@skype.com"
            },
            {
                "facebook": "dhoover358@bce.com@facebook.com"
            },
            {
                "line": "dhoover358@nii.com@line.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1943-11-03"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DAMILOWE5203",
    "name": {
        "title": "Mr",
        "first": "Damian",
        "middle": "K",
        "last": "Lowe",
        "suffix": null
    },
    "address": {
        "streetAddress": "1793 Blue Gulch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "M'Tsangamouji",
        "stateProvince": "M'Tsangamouji",
        "locality": "M'Tsangamouji",
        "country": "YT",
        "postalCode": "97650",
        "latitude": "-12.7594",
        "longitude": "45.0836"
    },
    "contact": {
        "email": "dlowe359@cubenet.com",
        "phone": "+61-359-713-5203",
        "socMedia": {
            "linkedin": "dlowe359@cubenet.com@linkedin.com"
        }
    },
    "login": {
        "username": "dlowe",
        "oauth2": "dlowe@linkedin.com",
        "password": "$2y$10$ZzOVlfwxzZq8pP5fzfFDQeMa\/mIYlenT3hvzypn90Lfui6.ZXndKq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-11-10"
    },
    "totalBooked": 20,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "COLEFLOY7423",
    "name": {
        "title": null,
        "first": "Coleman",
        "middle": null,
        "last": "Floyd",
        "suffix": null
    },
    "address": {
        "streetAddress": "4913 Little Mound Drive",
        "buildingName": null,
        "floor": 17,
        "roomAptCondoFlat": "20",
        "city": "Halifax Lower Harbour",
        "stateProvince": "NS",
        "locality": "Halifax",
        "country": "CA",
        "postalCode": "B3H",
        "latitude": "44.6344",
        "longitude": "-63.5822"
    },
    "contact": {
        "email": "cfloyd360@bce.com",
        "phone": "+61-360-856-7423",
        "socMedia": []
    },
    "login": {
        "username": "cfloyd",
        "oauth2": null,
        "password": "$2y$10$ZtNQ394r7\/Qw2c0em8oSqOUI\/np0DC7.KOooS9DMzcle\/2HcGAzDy"
    },
    "otherContact": {
        "emails": [
            "cfloyd360@eunet.com"
        ],
        "phoneNumbers": [
            "+61-360-211-3505"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1942-04-23"
    },
    "totalBooked": 49,
    "discount": 0.061
});
db.customers.insertOne(
{
    "customerKey": "EILEBRAD7474",
    "name": {
        "title": "Ms",
        "first": "Eilene",
        "middle": "T",
        "last": "Bradford",
        "suffix": null
    },
    "address": {
        "streetAddress": "4162 Winding Bough Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pasig Ortigas CTR-PO Box# 4500 to 4599",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "1685",
        "latitude": "14.5934",
        "longitude": "121.0281"
    },
    "contact": {
        "email": "ebradfor361@sprint.com",
        "phone": "+61-361-983-7474",
        "socMedia": {
            "twitter": "ebradfor361@sprint.com@twitter.com"
        }
    },
    "login": {
        "username": "ebradfor",
        "oauth2": "ebradfor@twitter.com",
        "password": "$2y$10$ALGfdk0sSvMyuAB7hcKKDumxisrMW8mDybZFt4s2YTk3rxYcxUTy."
    },
    "otherContact": {
        "emails": [
            "ebradfor361@vodafone.com",
            "ebradfor361@jio.com",
            "ebradfor361@eunet.com"
        ],
        "phoneNumbers": [
            "+61-361-928-0401",
            "+61-361-521-3368",
            "+61-361-477-6871"
        ],
        "socMedias": [
            {
                "google": "ebradfor361@vodafone.com@google.com"
            },
            {
                "line": "ebradfor361@jio.com@line.com"
            },
            {
                "twitter": "ebradfor361@eunet.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-06-13"
    },
    "totalBooked": 5,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CAITHALL7994",
    "name": {
        "title": "Ms",
        "first": "Caitlin",
        "middle": "C",
        "last": "Hall",
        "suffix": null
    },
    "address": {
        "streetAddress": "4431 Green Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Burswood",
        "stateProvince": "WA",
        "locality": "TANGNEY",
        "country": "AU",
        "postalCode": "6100",
        "latitude": "-31.9587",
        "longitude": "115.904"
    },
    "contact": {
        "email": "chall362@singtel.com",
        "phone": "+61-362-455-7994",
        "socMedia": {
            "google": "chall362@singtel.com@google.com"
        }
    },
    "login": {
        "username": "chall",
        "oauth2": "chall@google.com",
        "password": "$2y$10$twZItWJizjUWlGDD1wPIx.\/JdQh5siWgjK7wghNlWVLMRC0\/Dzh1K"
    },
    "otherContact": {
        "emails": [
            "chall362@cerist.com"
        ],
        "phoneNumbers": [
            "+61-362-181-6517"
        ],
        "socMedias": [
            {
                "facebook": "chall362@cerist.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1941-11-05"
    },
    "totalBooked": 15,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JODEMORR1003",
    "name": {
        "title": "Dr",
        "first": "Jodee",
        "middle": null,
        "last": "Morrow",
        "suffix": "Sr"
    },
    "address": {
        "streetAddress": "9843 Blue Creek Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Melaselvanur",
        "stateProvince": "Kadaladi",
        "locality": "Ramanathapuram",
        "country": "IN",
        "postalCode": "623703",
        "latitude": "9.6723",
        "longitude": "78.0203"
    },
    "contact": {
        "email": "jmorrow363@tt.com",
        "phone": "+61-363-723-1003",
        "socMedia": []
    },
    "login": {
        "username": "jmorrow",
        "oauth2": null,
        "password": "$2y$10$8DAkFat\/7TLhirHAlCyn5.W9Rr2ME.XTr8NGfoIT2yRiQzrBHelRy"
    },
    "otherContact": {
        "emails": [
            "jmorrow363@tata.com",
            "jmorrow363@orstom.com",
            "jmorrow363@frontier.com"
        ],
        "phoneNumbers": [
            "+61-363-629-9393",
            "+61-363-162-8433",
            "+61-363-813-0906"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1994-01-22"
    },
    "totalBooked": 16,
    "discount": 0.037
});
db.customers.insertOne(
{
    "customerKey": "GEORGRAN0706",
    "name": {
        "title": "Ms",
        "first": "Georgette",
        "middle": "X",
        "last": "Grant",
        "suffix": null
    },
    "address": {
        "streetAddress": "4411 Blue Bough Road",
        "buildingName": "Building 61",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Stenhousemuir",
        "stateProvince": "Scotland",
        "locality": "Falkirk",
        "country": "GB",
        "postalCode": "FK5",
        "latitude": "56.0269",
        "longitude": "-3.8218"
    },
    "contact": {
        "email": "ggrant364@ktc.com",
        "phone": "+61-364-461-0706",
        "socMedia": {
            "skype": "ggrant364@ktc.com@skype.com"
        }
    },
    "login": {
        "username": "ggrant",
        "oauth2": "ggrant@skype.com",
        "password": "$2y$10$b56LKMfz5e4LD7vh9fV8A.HZBPROSy1xXCW7jPam535PrNL3Jokde"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-10-26"
    },
    "totalBooked": 22,
    "discount": 0.153
});
db.customers.insertOne(
{
    "customerKey": "VENIPHAN6332",
    "name": {
        "title": "Ms",
        "first": "Venice",
        "middle": "S",
        "last": "Phan",
        "suffix": null
    },
    "address": {
        "streetAddress": "2356 Big Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "COLONIA PINTO",
        "stateProvince": "G",
        "locality": "Santiago Del Estero",
        "country": "AR",
        "postalCode": "4313",
        "latitude": "-28.425",
        "longitude": "-63.7542"
    },
    "contact": {
        "email": "vphan365@tm.com",
        "phone": "+61-365-095-6332",
        "socMedia": {
            "facebook": "vphan365@tm.com@facebook.com"
        }
    },
    "login": {
        "username": "vphan",
        "oauth2": "vphan@facebook.com",
        "password": "$2y$10$kq5yxtFaLQMsxrDBUN9zf.JGbgJOwBN7zveOS0YfZPfdC69FcI.PS"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1935-11-09"
    },
    "totalBooked": 17,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BRADTHOR6515",
    "name": {
        "title": null,
        "first": "Bradly",
        "middle": null,
        "last": "Thornton",
        "suffix": null
    },
    "address": {
        "streetAddress": "3998 Blue Ditch Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "5D",
        "city": "Cicero",
        "stateProvince": "IN",
        "locality": "Hamilton",
        "country": "US",
        "postalCode": "46034",
        "latitude": "40.1298",
        "longitude": "-86.0381"
    },
    "contact": {
        "email": "bthornto366@vodafone.com",
        "phone": "+61-366-262-6515",
        "socMedia": []
    },
    "login": {
        "username": "bthornto",
        "oauth2": null,
        "password": "$2y$10$fX0F11quieYJj4c9vYVKlONlaEEOuBM\/RtRoIEDm4FID2IQpelJ2i"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-09-19"
    },
    "totalBooked": 40,
    "discount": 0.052000000000000005
});
db.customers.insertOne(
{
    "customerKey": "JUANCOFF6227",
    "name": {
        "title": "Ms",
        "first": "Juanita",
        "middle": "K",
        "last": "Coffey",
        "suffix": null
    },
    "address": {
        "streetAddress": "1172 Red Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Alor Setar",
        "stateProvince": "KDH",
        "locality": "Kedah",
        "country": "MY",
        "postalCode": "05506",
        "latitude": "6.1194",
        "longitude": "100.3677"
    },
    "contact": {
        "email": "jcoffey367@telkom.com",
        "phone": "+61-367-254-6227",
        "socMedia": {
            "twitter": "jcoffey367@telkom.com@twitter.com"
        }
    },
    "login": {
        "username": "jcoffey",
        "oauth2": "jcoffey@twitter.com",
        "password": "$2y$10$Fkq6tQ91teMU7MbyNDL\/WOq\/LpTqCQdcz7ojHoUlswM1ZfvtlM0Cy"
    },
    "otherContact": {
        "emails": [
            "jcoffey367@vodafone.com",
            "jcoffey367@sktelecom.com",
            "jcoffey367@orange.com"
        ],
        "phoneNumbers": [
            "+61-367-248-8131",
            "+61-367-827-9455",
            "+61-367-022-6325"
        ],
        "socMedias": [
            {
                "facebook": "jcoffey367@vodafone.com@facebook.com"
            },
            {
                "linkedin": "jcoffey367@sktelecom.com@linkedin.com"
            },
            {
                "skype": "jcoffey367@orange.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-10-03"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JANISOLI8095",
    "name": {
        "title": "Ms",
        "first": "Janine",
        "middle": "T",
        "last": "Solis",
        "suffix": null
    },
    "address": {
        "streetAddress": "5136 Blue Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kirkland",
        "stateProvince": "QC",
        "locality": "Montr\u00e9al",
        "country": "CA",
        "postalCode": "H9J",
        "latitude": "45.4501",
        "longitude": "-73.8659"
    },
    "contact": {
        "email": "jsolis368@jio.com",
        "phone": "+61-368-460-8095",
        "socMedia": {
            "linkedin": "jsolis368@jio.com@linkedin.com"
        }
    },
    "login": {
        "username": "jsolis",
        "oauth2": "jsolis@linkedin.com",
        "password": "$2y$10$T2kI2fvWi9KdvUUeCeqBBOnU4YNALu8.yPYkliBrsYzdcNX.Z8HXa"
    },
    "otherContact": {
        "emails": [
            "jsolis368@greennet.com",
            "jsolis368@glasnet.com"
        ],
        "phoneNumbers": [
            "+61-368-739-1969",
            "+61-368-106-5624"
        ],
        "socMedias": [
            {
                "skype": "jsolis368@greennet.com@skype.com"
            },
            {
                "skype": "jsolis368@glasnet.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1943-03-11"
    },
    "totalBooked": 2,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "OSVAROBL4565",
    "name": {
        "title": null,
        "first": "Osvaldo",
        "middle": null,
        "last": "Robles",
        "suffix": null
    },
    "address": {
        "streetAddress": "6674 Green Creek Street",
        "buildingName": null,
        "floor": 11,
        "roomAptCondoFlat": null,
        "city": "Dewal",
        "stateProvince": "Norhern Punajb Rawalpindi",
        "locality": "Norhern Punajb Rawalpindi",
        "country": "PK",
        "postalCode": "48081",
        "latitude": "32.8083",
        "longitude": "73.8583"
    },
    "contact": {
        "email": "orobles369@telefonica.com",
        "phone": "+61-369-400-4565",
        "socMedia": []
    },
    "login": {
        "username": "orobles",
        "oauth2": null,
        "password": "$2y$10$nF28T9wQcTZDx6U1W0W1Ke.kTZfkZNtXzyHwKDPgQzGXlLfng3z\/G"
    },
    "otherContact": {
        "emails": [
            "orobles369@daxnet.com",
            "orobles369@singtel.com"
        ],
        "phoneNumbers": [
            "+61-369-710-8311",
            "+61-369-063-1998"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-12-05"
    },
    "totalBooked": 38,
    "discount": 0.043000000000000003
});
db.customers.insertOne(
{
    "customerKey": "MARLHESS5079",
    "name": {
        "title": "Ms",
        "first": "Marlin",
        "middle": "E",
        "last": "Hess",
        "suffix": null
    },
    "address": {
        "streetAddress": "9498 Winding Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kandhala Guru",
        "stateProvince": "Jalandhar",
        "locality": "Jalandhar",
        "country": "IN",
        "postalCode": "144303",
        "latitude": "31.6708",
        "longitude": "75.7745"
    },
    "contact": {
        "email": "mhess370@econnect.com",
        "phone": "+61-370-781-5079",
        "socMedia": {
            "facebook": "mhess370@econnect.com@facebook.com"
        }
    },
    "login": {
        "username": "mhess",
        "oauth2": "mhess@facebook.com",
        "password": "$2y$10$D\/iF411D5vKwvqflr.Ha1Oq0Awv8vlYXmsQu5i5oH2dx00uTXyx5C"
    },
    "otherContact": {
        "emails": [
            "mhess370@cci.com",
            "mhess370@greennet.com",
            "mhess370@lookdata.com"
        ],
        "phoneNumbers": [
            "+61-370-614-0158",
            "+61-370-426-3937",
            "+61-370-532-9910"
        ],
        "socMedias": [
            {
                "twitter": "mhess370@cci.com@twitter.com"
            },
            {
                "line": "mhess370@greennet.com@line.com"
            },
            {
                "google": "mhess370@lookdata.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-02-13"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ELDOREYN9172",
    "name": {
        "title": "Mr",
        "first": "Eldon",
        "middle": "M",
        "last": "Reynolds",
        "suffix": null
    },
    "address": {
        "streetAddress": "1459 Little Hill Way",
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
        "email": "ereynold371@ntt.com",
        "phone": "+61-371-203-9172",
        "socMedia": {
            "line": "ereynold371@ntt.com@line.com"
        }
    },
    "login": {
        "username": "ereynold",
        "oauth2": "ereynold@line.com",
        "password": "$2y$10$lzOmRDeoWiYci.BO8DW5aeCmzicSjouuqjZ5E94Vx884P8sOKi65a"
    },
    "otherContact": {
        "emails": [
            "ereynold371@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-371-409-6700"
        ],
        "socMedias": [
            {
                "twitter": "ereynold371@vodafone.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1989-10-14"
    },
    "totalBooked": 90,
    "discount": 0.059000000000000004
});
db.customers.insertOne(
{
    "customerKey": "ASHLHEND8705",
    "name": {
        "title": null,
        "first": "Ashlea",
        "middle": null,
        "last": "Henderson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7002 Long Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "04",
        "city": "Ampthill",
        "stateProvince": "England",
        "locality": "Bedfordshire",
        "country": "GB",
        "postalCode": "MK45",
        "latitude": "52.0269",
        "longitude": "-0.4957"
    },
    "contact": {
        "email": "ahenders372@econnect.com",
        "phone": "+61-372-817-8705",
        "socMedia": []
    },
    "login": {
        "username": "ahenders",
        "oauth2": null,
        "password": "$2y$10$CPtGL2hiqywpMYjD1kSDJ.swNmO6i9CFt7oETuDz5MNQaafeO5D4q"
    },
    "otherContact": {
        "emails": [
            "ahenders372@seednet.com",
            "ahenders372@seednet.com",
            "ahenders372@bifty.com"
        ],
        "phoneNumbers": [
            "+61-372-294-4140",
            "+61-372-991-3413",
            "+61-372-216-4394"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-11-19"
    },
    "totalBooked": 15,
    "discount": 0.029
});
db.customers.insertOne(
{
    "customerKey": "GAVIMURI2884",
    "name": {
        "title": "Mr",
        "first": "Gavin",
        "middle": "P",
        "last": "Murillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "3214 Winding Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ghersunovca",
        "stateProvince": "Ribnita Tr.",
        "locality": "Ribnita Tr.",
        "country": "MD",
        "postalCode": "MD-5535",
        "latitude": "47.7211",
        "longitude": "29.1683"
    },
    "contact": {
        "email": "gmurillo373@access.com",
        "phone": "+61-373-509-2884",
        "socMedia": {
            "line": "gmurillo373@access.com@line.com"
        }
    },
    "login": {
        "username": "gmurillo",
        "oauth2": "gmurillo@line.com",
        "password": "$2y$10$c19Ii56aVep7OQTkdfcw7eZ\/wKzPKy7Qxbp6CRNQnVU9\/oeyRK4Hi"
    },
    "otherContact": {
        "emails": [
            "gmurillo373@ote.com"
        ],
        "phoneNumbers": [
            "+61-373-073-8020"
        ],
        "socMedias": [
            {
                "twitter": "gmurillo373@ote.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-12-22"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "KORIBERR2751",
    "name": {
        "title": "Ms",
        "first": "Kori",
        "middle": "T",
        "last": "Berry",
        "suffix": null
    },
    "address": {
        "streetAddress": "6805 Long Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Hail Creek",
        "stateProvince": "QLD",
        "locality": "CENTRAL QLD",
        "country": "AU",
        "postalCode": "4742",
        "latitude": "-21.7372",
        "longitude": "148.4658"
    },
    "contact": {
        "email": "kberry374@softbank.com",
        "phone": "+61-374-395-2751",
        "socMedia": {
            "skype": "kberry374@softbank.com@skype.com"
        }
    },
    "login": {
        "username": "kberry",
        "oauth2": "kberry@skype.com",
        "password": "$2y$10$7yNK6WdGHD8QhkA02Au0j.tnXfnRC47FJ8OWL7YNP4De4sPBqIjcG"
    },
    "otherContact": {
        "emails": [
            "kberry374@cci.com"
        ],
        "phoneNumbers": [
            "+61-374-350-5458"
        ],
        "socMedias": [
            {
                "google": "kberry374@cci.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-07-06"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ANGETRUO4767",
    "name": {
        "title": null,
        "first": "Angelia",
        "middle": null,
        "last": "Truong",
        "suffix": null
    },
    "address": {
        "streetAddress": "964 Red Bend Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Coen",
        "stateProvince": "QLD",
        "locality": "NORTH QLD",
        "country": "AU",
        "postalCode": "4871",
        "latitude": "-13.9456",
        "longitude": "143.199"
    },
    "contact": {
        "email": "atruong375@ntt.com",
        "phone": "+61-375-912-4767",
        "socMedia": []
    },
    "login": {
        "username": "atruong",
        "oauth2": null,
        "password": "$2y$10$SBUqs7tk6daEkZt\/I7Gt\/OzdAxJ\/vYBAMvBJy2S5bhMsVT9DGy4Qi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1956-09-19"
    },
    "totalBooked": 39,
    "discount": 0.015
});
db.customers.insertOne(
{
    "customerKey": "WILFCALH6563",
    "name": {
        "title": "Mr",
        "first": "Wilfred",
        "middle": "V",
        "last": "Calhoun",
        "suffix": null
    },
    "address": {
        "streetAddress": "2088 Winding Stream Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Canary Wharf",
        "stateProvince": "England",
        "locality": "Greater London",
        "country": "GB",
        "postalCode": "SE16",
        "latitude": "51.4965",
        "longitude": "-0.0537"
    },
    "contact": {
        "email": "wcalhoun376@oi.com",
        "phone": "+61-376-816-6563",
        "socMedia": {
            "linkedin": "wcalhoun376@oi.com@linkedin.com"
        }
    },
    "login": {
        "username": "wcalhoun",
        "oauth2": "wcalhoun@linkedin.com",
        "password": "$2y$10$WcLF4wMlVAW1VFwygAUN1.6whL3JePR6O4jWFW2bjpvagwNAOa8sK"
    },
    "otherContact": {
        "emails": [
            "wcalhoun376@millicom.com"
        ],
        "phoneNumbers": [
            "+61-376-091-2420"
        ],
        "socMedias": [
            {
                "twitter": "wcalhoun376@millicom.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1979-05-25"
    },
    "totalBooked": 18,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "ARLEZUNI1523",
    "name": {
        "title": "Ms",
        "first": "Arlena",
        "middle": "M",
        "last": "Zuniga",
        "suffix": null
    },
    "address": {
        "streetAddress": "9420 Little Mountain Boulevard",
        "buildingName": "Building 11",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "La Rosa",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11004",
        "latitude": "19.1333",
        "longitude": "-71.2833"
    },
    "contact": {
        "email": "azuniga377@apicnet.com",
        "phone": "+61-377-844-1523",
        "socMedia": {
            "twitter": "azuniga377@apicnet.com@twitter.com"
        }
    },
    "login": {
        "username": "azuniga",
        "oauth2": "azuniga@twitter.com",
        "password": "$2y$10$yjJC4oMk0syFMN4r.dQVDOHkb6GbZRKWuvVFHGaOAxzq\/eP1PfOV2"
    },
    "otherContact": {
        "emails": [
            "azuniga377@verizon.com"
        ],
        "phoneNumbers": [
            "+61-377-528-9730"
        ],
        "socMedias": [
            {
                "skype": "azuniga377@verizon.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1999-02-07"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "CRISTURN6168",
    "name": {
        "title": null,
        "first": "Cristin",
        "middle": null,
        "last": "Turner",
        "suffix": null
    },
    "address": {
        "streetAddress": "4890 Short Canyon Way",
        "buildingName": null,
        "floor": 19,
        "roomAptCondoFlat": "F1",
        "city": "Camberwell",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "8627",
        "latitude": "-37.8421",
        "longitude": "145.0694"
    },
    "contact": {
        "email": "cturner378@softbank.com",
        "phone": "+61-378-122-6168",
        "socMedia": []
    },
    "login": {
        "username": "cturner",
        "oauth2": null,
        "password": "$2y$10$t4hP66r8eGy8RIxpMdxNa.5dXzF0Y\/Iaw0yi.7PWLVtobkf3ZpAnG"
    },
    "otherContact": {
        "emails": [
            "cturner378@orange.com"
        ],
        "phoneNumbers": [
            "+61-378-244-7914"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1979-08-24"
    },
    "totalBooked": 48,
    "discount": 0.13
});
db.customers.insertOne(
{
    "customerKey": "ANTOHANS7873",
    "name": {
        "title": "Mr",
        "first": "Antonia",
        "middle": "E",
        "last": "Hansen",
        "suffix": null
    },
    "address": {
        "streetAddress": "3698 Short Gulch Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Bottens",
        "stateProvince": "VD",
        "locality": "Gros-de-Vaud District",
        "country": "CH",
        "postalCode": "1041",
        "latitude": "46.616",
        "longitude": "6.6615"
    },
    "contact": {
        "email": "ahansen379@frontier.com",
        "phone": "+61-379-464-7873",
        "socMedia": {
            "skype": "ahansen379@frontier.com@skype.com"
        }
    },
    "login": {
        "username": "ahansen",
        "oauth2": "ahansen@skype.com",
        "password": "$2y$10$JsVEgZHntRkUfqVRbRPcgesch00pT7OBemMe62N6e5anZ8F2vTWOS"
    },
    "otherContact": {
        "emails": [
            "ahansen379@worldnet.com",
            "ahansen379@pldt.com",
            "ahansen379@oi.com"
        ],
        "phoneNumbers": [
            "+61-379-428-0313",
            "+61-379-632-1938",
            "+61-379-462-8325"
        ],
        "socMedias": [
            {
                "google": "ahansen379@worldnet.com@google.com"
            },
            {
                "linkedin": "ahansen379@pldt.com@linkedin.com"
            },
            {
                "skype": "ahansen379@oi.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1980-08-24"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "STACCONW1330",
    "name": {
        "title": "Mr",
        "first": "Stacy",
        "middle": "B",
        "last": "Conway",
        "suffix": null
    },
    "address": {
        "streetAddress": "2396 Winding Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mittabaspalle",
        "stateProvince": "Rangareddy",
        "locality": "K.V.Rangareddy",
        "country": "IN",
        "postalCode": "501158",
        "latitude": "17.3122",
        "longitude": "77.8234"
    },
    "contact": {
        "email": "sconway380@tt.com",
        "phone": "+61-380-640-1330",
        "socMedia": {
            "linkedin": "sconway380@tt.com@linkedin.com"
        }
    },
    "login": {
        "username": "sconway",
        "oauth2": "sconway@linkedin.com",
        "password": "$2y$10$76SkHvh9cZedtAfukIALZeKg3OZbX7AmijhpnrL\/9PUlNSSx0FPEu"
    },
    "otherContact": {
        "emails": [
            "sconway380@access.com"
        ],
        "phoneNumbers": [
            "+61-380-362-9456"
        ],
        "socMedias": [
            {
                "linkedin": "sconway380@access.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1981-05-08"
    },
    "totalBooked": 10,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NORAROBI8613",
    "name": {
        "title": null,
        "first": "Norah",
        "middle": null,
        "last": "Robinson",
        "suffix": null
    },
    "address": {
        "streetAddress": "3817 Big Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paget",
        "stateProvince": "Paget Parish",
        "locality": "Paget Parish",
        "country": "BM",
        "postalCode": "PG 03",
        "latitude": "32.2783",
        "longitude": "-64.7817"
    },
    "contact": {
        "email": "nrobinso381@vivendi.com",
        "phone": "+61-381-349-8613",
        "socMedia": []
    },
    "login": {
        "username": "nrobinso",
        "oauth2": null,
        "password": "$2y$10$C.ItpUkWRRHfJzoS6Rw5Se.FPL4oK7WYFb.X0QKuhn8\/uj5uR9Dtq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1980-02-27"
    },
    "totalBooked": 14,
    "discount": 0.053
});
db.customers.insertOne(
{
    "customerKey": "VALELOGA2780",
    "name": {
        "title": "Mr",
        "first": "Valentine",
        "middle": "P",
        "last": "Logan",
        "suffix": null
    },
    "address": {
        "streetAddress": "7327 Short Gulch Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rid",
        "stateProvince": "Degana",
        "locality": "Nagaur",
        "country": "IN",
        "postalCode": "341503",
        "latitude": "26.42",
        "longitude": "73.9764"
    },
    "contact": {
        "email": "vlogan382@telkom.com",
        "phone": "+61-382-827-2780",
        "socMedia": {
            "twitter": "vlogan382@telkom.com@twitter.com"
        }
    },
    "login": {
        "username": "vlogan",
        "oauth2": "vlogan@twitter.com",
        "password": "$2y$10$ks2AU6Ri.xX4PpKwlGj8Cu7qxvDk20\/1eyg0OGDSvDGqcaQwsGmLu"
    },
    "otherContact": {
        "emails": [
            "vlogan382@sprint.com"
        ],
        "phoneNumbers": [
            "+61-382-982-5487"
        ],
        "socMedias": [
            {
                "twitter": "vlogan382@sprint.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1968-09-13"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "NATHJENK4215",
    "name": {
        "title": "Mr",
        "first": "Nathanial",
        "middle": "H",
        "last": "Jenkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "292 Short Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "16 de Agosto",
        "stateProvince": null,
        "locality": null,
        "country": "DO",
        "postalCode": "11101",
        "latitude": "18.65",
        "longitude": "-69.75"
    },
    "contact": {
        "email": "njenkins383@greennet.com",
        "phone": "+61-383-803-4215",
        "socMedia": {
            "linkedin": "njenkins383@greennet.com@linkedin.com"
        }
    },
    "login": {
        "username": "njenkins",
        "oauth2": "njenkins@linkedin.com",
        "password": "$2y$10$DCaJEcx3VvxqxwwVb8PlmOhZSdcVh6z5qJ82v15v\/gnfEROn7L1Ru"
    },
    "otherContact": {
        "emails": [
            "njenkins383@orange.com",
            "njenkins383@ais.com",
            "njenkins383@sktelecom.com"
        ],
        "phoneNumbers": [
            "+61-383-862-6153",
            "+61-383-900-7071",
            "+61-383-732-5190"
        ],
        "socMedias": [
            {
                "line": "njenkins383@orange.com@line.com"
            },
            {
                "google": "njenkins383@ais.com@google.com"
            },
            {
                "twitter": "njenkins383@sktelecom.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1955-09-22"
    },
    "totalBooked": 6,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "TESHSIER3510",
    "name": {
        "title": null,
        "first": "Tesha",
        "middle": null,
        "last": "Sierra",
        "suffix": null
    },
    "address": {
        "streetAddress": "8427 Short Hill Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "65",
        "city": "Munster",
        "stateProvince": "IN",
        "locality": "Lake",
        "country": "US",
        "postalCode": "46321",
        "latitude": "41.5544",
        "longitude": "-87.5011"
    },
    "contact": {
        "email": "tsierra384@unicom.com",
        "phone": "+61-384-061-3510",
        "socMedia": []
    },
    "login": {
        "username": "tsierra",
        "oauth2": null,
        "password": "$2y$10$hny1SoFw35tsPlMXR5m5QuU1aNS.RsgiVSxepB0EKGmgougvo8sDi"
    },
    "otherContact": {
        "emails": [
            "tsierra384@etisalat.com",
            "tsierra384@ktc.com",
            "tsierra384@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-384-725-4106",
            "+61-384-545-0147",
            "+61-384-987-9019"
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-10-28"
    },
    "totalBooked": 10,
    "discount": 0.044
});
db.customers.insertOne(
{
    "customerKey": "HUMBMORR2407",
    "name": {
        "title": "Mr",
        "first": "Humberto",
        "middle": "O",
        "last": "Morris",
        "suffix": null
    },
    "address": {
        "streetAddress": "3473 Green Gully Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tollesby",
        "stateProvince": "England",
        "locality": "North Yorkshire",
        "country": "GB",
        "postalCode": "TS7",
        "latitude": "54.529",
        "longitude": "-1.1935"
    },
    "contact": {
        "email": "hmorris385@singtel.com",
        "phone": "+61-385-257-2407",
        "socMedia": {
            "skype": "hmorris385@singtel.com@skype.com"
        }
    },
    "login": {
        "username": "hmorris",
        "oauth2": "hmorris@skype.com",
        "password": "$2y$10$bohliQHJpxqTRBmRXHHOpOHhJ.YsYlFgmCWU9ozDSuJ7Z5Eu\/xHyi"
    },
    "otherContact": {
        "emails": [
            "hmorris385@ptcl.com",
            "hmorris385@airtel.com",
            "hmorris385@vodafone.com"
        ],
        "phoneNumbers": [
            "+61-385-725-5482",
            "+61-385-448-4890",
            "+61-385-516-7881"
        ],
        "socMedias": [
            {
                "skype": "hmorris385@ptcl.com@skype.com"
            },
            {
                "facebook": "hmorris385@airtel.com@facebook.com"
            },
            {
                "linkedin": "hmorris385@vodafone.com@linkedin.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-03-14"
    },
    "totalBooked": 48,
    "discount": 0.07200000000000001
});
db.customers.insertOne(
{
    "customerKey": "ANDECOLL8584",
    "name": {
        "title": "Mr",
        "first": "Anderson",
        "middle": "C",
        "last": "Collins",
        "suffix": null
    },
    "address": {
        "streetAddress": "7755 Blue Tree Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Central Toronto (The Annex \/ North Midtown \/ Yorkville)",
        "stateProvince": "ON",
        "locality": "Toronto",
        "country": "CA",
        "postalCode": "M5R",
        "latitude": "43.6736",
        "longitude": "-79.4035"
    },
    "contact": {
        "email": "acollins386@vodafone.com",
        "phone": "+61-386-327-8584",
        "socMedia": {
            "line": "acollins386@vodafone.com@line.com"
        }
    },
    "login": {
        "username": "acollins",
        "oauth2": "acollins@line.com",
        "password": "$2y$10$4gptTPdclL7\/\/xtY5hID6uic1bEgSxUJeQoKDNRZwV9HQ5vj.0fKe"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-01-15"
    },
    "totalBooked": 12,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "BERRDUNL6042",
    "name": {
        "title": null,
        "first": "Berry",
        "middle": null,
        "last": "Dunlap",
        "suffix": null
    },
    "address": {
        "streetAddress": "6545 Long Creek Road",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": null,
        "city": "Tob\u00f8l",
        "stateProvince": "Eidskog",
        "locality": "Eidskog",
        "country": "NO",
        "postalCode": "2232",
        "latitude": "59.972",
        "longitude": "12.0555"
    },
    "contact": {
        "email": "bdunlap387@ktc.com",
        "phone": "+61-387-269-6042",
        "socMedia": []
    },
    "login": {
        "username": "bdunlap",
        "oauth2": null,
        "password": "$2y$10$ZAcJECmBC5PsOr4ddFQjku4JlS8kCw5a2.VFdNrldJwKGbb\/JZJbq"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-09-26"
    },
    "totalBooked": 43,
    "discount": 0.085
});
db.customers.insertOne(
{
    "customerKey": "SADITOWN8890",
    "name": {
        "title": "Ms",
        "first": "Sadie",
        "middle": "H",
        "last": "Townsend",
        "suffix": null
    },
    "address": {
        "streetAddress": "1723 Blue Canyon Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Glenwood",
        "stateProvince": "QLD",
        "locality": "SUNSHINE MT ISA",
        "country": "AU",
        "postalCode": "4570",
        "latitude": "-26.1931",
        "longitude": "152.5564"
    },
    "contact": {
        "email": "stownsen388@relcom.com",
        "phone": "+61-388-600-8890",
        "socMedia": {
            "twitter": "stownsen388@relcom.com@twitter.com"
        }
    },
    "login": {
        "username": "stownsen",
        "oauth2": "stownsen@twitter.com",
        "password": "$2y$10$VCFVVCmMr8mXPu5ksOsLHuzUhjbo.mXY2isk4Fpj.zHtE9F0XrL2K"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-10-15"
    },
    "totalBooked": 19,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "COLTHUNT4049",
    "name": {
        "title": "Mr",
        "first": "Colton",
        "middle": "Y",
        "last": "Hunter",
        "suffix": null
    },
    "address": {
        "streetAddress": "907 Big Ditch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kota Bharu",
        "stateProvince": "KTN",
        "locality": "Kelantan",
        "country": "MY",
        "postalCode": "16010",
        "latitude": "6.0064",
        "longitude": "102.218"
    },
    "contact": {
        "email": "chunter389@kpn.com",
        "phone": "+61-389-568-4049",
        "socMedia": {
            "facebook": "chunter389@kpn.com@facebook.com"
        }
    },
    "login": {
        "username": "chunter",
        "oauth2": "chunter@facebook.com",
        "password": "$2y$10$JBvyKJ2hCpT2hB2wkL1KjuflIpQDRRNM91KtDXrrlP5fQSLB7vpUG"
    },
    "otherContact": {
        "emails": [
            "chunter389@telefonica.com",
            "chunter389@mtn.com"
        ],
        "phoneNumbers": [
            "+61-389-584-1289",
            "+61-389-479-6447"
        ],
        "socMedias": [
            {
                "google": "chunter389@telefonica.com@google.com"
            },
            {
                "skype": "chunter389@mtn.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-08-02"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "JOHNRUSS2647",
    "name": {
        "title": null,
        "first": "Johnnie",
        "middle": null,
        "last": "Russell",
        "suffix": null
    },
    "address": {
        "streetAddress": "8303 Red Tree Circle",
        "buildingName": "Building BE",
        "floor": null,
        "roomAptCondoFlat": "90",
        "city": "Middlewich",
        "stateProvince": "England",
        "locality": "Cheshire",
        "country": "GB",
        "postalCode": "CW10",
        "latitude": "53.193",
        "longitude": "-2.444"
    },
    "contact": {
        "email": "jrussell390@telia.com",
        "phone": "+61-390-166-2647",
        "socMedia": []
    },
    "login": {
        "username": "jrussell",
        "oauth2": null,
        "password": "$2y$10$JflaKtmWVHJc9QpaJcxDBuiXruXCpA487pxwNaog.ZxP7t7XvA1ZO"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-02-17"
    },
    "totalBooked": 23,
    "discount": 0.014
});
db.customers.insertOne(
{
    "customerKey": "BENNPARR3839",
    "name": {
        "title": "Mr",
        "first": "Benny",
        "middle": "L",
        "last": "Parrish",
        "suffix": null
    },
    "address": {
        "streetAddress": "37 Little Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Leesburg",
        "stateProvince": "FL",
        "locality": "Lake",
        "country": "US",
        "postalCode": "34749",
        "latitude": "28.8108",
        "longitude": "-81.8779"
    },
    "contact": {
        "email": "bparrish392@cerist.com",
        "phone": "+61-392-274-3839",
        "socMedia": {
            "line": "bparrish392@cerist.com@line.com"
        }
    },
    "login": {
        "username": "bparrish",
        "oauth2": "bparrish@line.com",
        "password": "$2y$10$KzSxbnGPvF8F06HKMqZeCeJgs.p60CqckUrHFanBFtC5mruuJ\/KuC"
    },
    "otherContact": {
        "emails": [
            "bparrish392@chunghwa.com",
            "bparrish392@glasnet.com"
        ],
        "phoneNumbers": [
            "+61-392-238-3212",
            "+61-392-852-3813"
        ],
        "socMedias": [
            {
                "linkedin": "bparrish392@chunghwa.com@linkedin.com"
            },
            {
                "google": "bparrish392@glasnet.com@google.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1969-01-18"
    },
    "totalBooked": 94,
    "discount": 0.077
});
db.customers.insertOne(
{
    "customerKey": "GALEDEAN4769",
    "name": {
        "title": null,
        "first": "Galen",
        "middle": null,
        "last": "Dean",
        "suffix": null
    },
    "address": {
        "streetAddress": "4854 Big Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Prilep",
        "stateProvince": null,
        "locality": null,
        "country": "MK",
        "postalCode": "7500",
        "latitude": "41.3464",
        "longitude": "21.5544"
    },
    "contact": {
        "email": "gdean393@telecom.com",
        "phone": "+61-393-168-4769",
        "socMedia": []
    },
    "login": {
        "username": "gdean",
        "oauth2": null,
        "password": "$2y$10$qBtQylZw8bedsGK8Po\/unOI6s7P0j2111Ww33jXEe\/WO77599nzhi"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1934-02-17"
    },
    "totalBooked": 46,
    "discount": 0.011
});
db.customers.insertOne(
{
    "customerKey": "LEIFMCCA5128",
    "name": {
        "title": "Mr",
        "first": "Leif",
        "middle": "I",
        "last": "Mccall",
        "suffix": null
    },
    "address": {
        "streetAddress": "6328 Red Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Torryburn",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2421",
        "latitude": "-30.45",
        "longitude": "151.2167"
    },
    "contact": {
        "email": "lmccall394@ntt.com",
        "phone": "+61-394-137-5128",
        "socMedia": {
            "linkedin": "lmccall394@ntt.com@linkedin.com"
        }
    },
    "login": {
        "username": "lmccall",
        "oauth2": "lmccall@linkedin.com",
        "password": "$2y$10$UQ.64.QnZb0u\/dL5yX3MDOwySjO7yuJiwilBsFZJqVClBgJKesYdW"
    },
    "otherContact": {
        "emails": [
            "lmccall394@telecom.com",
            "lmccall394@kpn.com",
            "lmccall394@econnect.com"
        ],
        "phoneNumbers": [
            "+61-394-492-4880",
            "+61-394-702-5233",
            "+61-394-893-1621"
        ],
        "socMedias": [
            {
                "skype": "lmccall394@telecom.com@skype.com"
            },
            {
                "google": "lmccall394@kpn.com@google.com"
            },
            {
                "twitter": "lmccall394@econnect.com@twitter.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-01-25"
    },
    "totalBooked": 7,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "LLOYMCKE1757",
    "name": {
        "title": "Mr",
        "first": "Lloyd",
        "middle": "R",
        "last": "Mckee",
        "suffix": null
    },
    "address": {
        "streetAddress": "1496 Long Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "E\u011filmez",
        "stateProvince": "Karaman",
        "locality": "Karaman",
        "country": "TR",
        "postalCode": "70000",
        "latitude": "37.5299",
        "longitude": "33.1752"
    },
    "contact": {
        "email": "lmckee395@telefonica.com",
        "phone": "+61-395-542-1757",
        "socMedia": {
            "skype": "lmckee395@telefonica.com@skype.com"
        }
    },
    "login": {
        "username": "lmckee",
        "oauth2": "lmckee@skype.com",
        "password": "$2y$10$.6zqjvtw3P\/8HeL6eMOQP.d5e1PY97pZoutSsXUScYgwVTUYQU1UW"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-01-04"
    },
    "totalBooked": 4,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "DOMEFUEN9510",
    "name": {
        "title": null,
        "first": "Domenic",
        "middle": null,
        "last": "Fuentes",
        "suffix": null
    },
    "address": {
        "streetAddress": "4473 Long Hill Boulevard",
        "buildingName": null,
        "floor": 8,
        "roomAptCondoFlat": "FC",
        "city": "Raleigh",
        "stateProvince": "NC",
        "locality": "Wake",
        "country": "US",
        "postalCode": "27697",
        "latitude": "35.7721",
        "longitude": "-78.6386"
    },
    "contact": {
        "email": "dfuentes396@ntt.com",
        "phone": "+61-396-634-9510",
        "socMedia": []
    },
    "login": {
        "username": "dfuentes",
        "oauth2": null,
        "password": "$2y$10$q.XvtAhI41QZStfYiBPLm.xOwNMW28nUaQ56topSNrs5NyibDYCSS"
    },
    "otherContact": {
        "emails": [
            "dfuentes396@vodafone.com",
            "dfuentes396@telecomitalia.com"
        ],
        "phoneNumbers": [
            "+61-396-043-7852",
            "+61-396-467-4683"
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1933-07-22"
    },
    "totalBooked": 8,
    "discount": 0.019
});
db.customers.insertOne(
{
    "customerKey": "DARRBOWE4505",
    "name": {
        "title": "Mr",
        "first": "Darrel",
        "middle": "V",
        "last": "Bowen",
        "suffix": null
    },
    "address": {
        "streetAddress": "1295 Short Canyon Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Polangui",
        "stateProvince": null,
        "locality": null,
        "country": "PH",
        "postalCode": "4506",
        "latitude": "13.2944",
        "longitude": "123.4872"
    },
    "contact": {
        "email": "dbowen397@glasnet.com",
        "phone": "+61-397-239-4505",
        "socMedia": {
            "line": "dbowen397@glasnet.com@line.com"
        }
    },
    "login": {
        "username": "dbowen",
        "oauth2": "dbowen@line.com",
        "password": "$2y$10$Nyr\/ixLZNgJABWykQtwnT.8QNmDorWqM5kjnLK.Y8cBO23.1xT6hu"
    },
    "otherContact": {
        "emails": [
            "dbowen397@nordnet.com",
            "dbowen397@greennet.com",
            "dbowen397@daxnet.com"
        ],
        "phoneNumbers": [
            "+61-397-467-1354",
            "+61-397-710-5238",
            "+61-397-668-1561"
        ],
        "socMedias": [
            {
                "facebook": "dbowen397@nordnet.com@facebook.com"
            },
            {
                "line": "dbowen397@greennet.com@line.com"
            },
            {
                "facebook": "dbowen397@daxnet.com@facebook.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-12-22"
    },
    "totalBooked": 13,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "VIRGCOLE6698",
    "name": {
        "title": "Ms",
        "first": "Virgie",
        "middle": "M",
        "last": "Coleman",
        "suffix": null
    },
    "address": {
        "streetAddress": "3125 Winding Ridge Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Terrebonne Northwest",
        "stateProvince": "QC",
        "locality": "Lanaudi\u00e8re",
        "country": "CA",
        "postalCode": "J6X",
        "latitude": "45.7275",
        "longitude": "-73.7062"
    },
    "contact": {
        "email": "vcoleman398@etisalat.com",
        "phone": "+61-398-500-6698",
        "socMedia": {
            "facebook": "vcoleman398@etisalat.com@facebook.com"
        }
    },
    "login": {
        "username": "vcoleman",
        "oauth2": "vcoleman@facebook.com",
        "password": "$2y$10$zuUiTYh8RVwrQsN3aSRmPue30LJIR7aKbiE83PikmGj3q7pTScn4m"
    },
    "otherContact": {
        "emails": [
            "vcoleman398@icom.com"
        ],
        "phoneNumbers": [
            "+61-398-491-9334"
        ],
        "socMedias": [
            {
                "skype": "vcoleman398@icom.com@skype.com"
            }
        ]
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-04-04"
    },
    "totalBooked": 13,
    "discount": 0
});
db.customers.insertOne(
{
    "customerKey": "EFREOLSE4321",
    "name": {
        "title": null,
        "first": "Efren",
        "middle": null,
        "last": "Olsen",
        "suffix": null
    },
    "address": {
        "streetAddress": "9151 Big Woods Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ba\u011flica",
        "stateProvince": "Ili\u00e7(\u0130li\u00e7)",
        "locality": "Ili\u00e7(\u0130li\u00e7)",
        "country": "TR",
        "postalCode": "24710",
        "latitude": "39.4727",
        "longitude": "38.3886"
    },
    "contact": {
        "email": "eolsen399@bt.com",
        "phone": "+61-399-959-4321",
        "socMedia": []
    },
    "login": {
        "username": "eolsen",
        "oauth2": null,
        "password": "$2y$10$v6UWpvbGuqWmVOxIhDw\/geCxrpGbGJ.g7\/sANtZunXYnur\/oxdE3C"
    },
    "otherContact": [],
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-07-06"
    },
    "totalBooked": 29,
    "discount": 0.139
});
