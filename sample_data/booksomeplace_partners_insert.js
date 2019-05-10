conn = new Mongo();
db = conn.getDB("booksomeplace");
db.partners.drop();
db.partners.insertOne(
{
    "partnerKey": "SHELROSE1404",
    "businessName": "Industrious Industries LLC",
    "revenueSplit": 0.23,
    "acctBalance": 834815.63,
    "name": {
        "title": "Ms",
        "first": "Shelba",
        "middle": "U",
        "last": "Rose",
        "suffix": null
    },
    "address": {
        "streetAddress": "9760 Winding Hill Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mackay South",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4740",
        "latitude": "-21.65",
        "longitude": "149.2333"
    },
    "contact": {
        "phone": "+61-100-670-1404",
        "email": "srose100@oi.com",
        "socMedia": {
            "linkedin": "srose@linkedin.com"
        }
    },
    "login": {
        "username": "srose",
        "oauth2": "srose@linkedin.com",
        "password": "$2y$10$A.opXDGO4tPCUlUyym.jzuiHruVo4haEL9TBksV.PCaPlp6ztfP46"
    },
    "otherContact": {
        "emails": [
            "srose@vodafone.net"
        ],
        "phoneNumbers": [
            "+61-576-560-7723",
            "+61-667-711-8458"
        ],
        "socMedias": {
            "facebook": "srose@facebook.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-10-11"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ROBIREID6513",
    "businessName": "Friendly Business Ltd",
    "revenueSplit": 0.31,
    "acctBalance": 408694.52,
    "name": {
        "title": "Mr",
        "first": "Robin",
        "middle": "K",
        "last": "Reid",
        "suffix": null
    },
    "address": {
        "streetAddress": "7317 Red Mountain Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "CB",
        "city": "Lisboa",
        "stateProvince": "Lisboa",
        "locality": "Lisboa",
        "country": "PT",
        "postalCode": "1200-706",
        "latitude": "38.7167",
        "longitude": "-9.1333"
    },
    "contact": {
        "phone": "+351-101-571-6513",
        "email": "rreid101@orstom.com",
        "socMedia": null
    },
    "login": {
        "username": "rreid",
        "oauth2": null,
        "password": "$2y$10$dkZsEMMgVAJTZsEALS37OOXB8Ud4v7bDYYGA0YB7\/EWsVlvCZr4Nm"
    },
    "otherContact": {
        "emails": [
            "rreid@kpn.net"
        ],
        "phoneNumbers": [
            "+351-991-006-3876"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1986-04-17"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MAGNMEND0473",
    "businessName": "Industrious Trust Inc",
    "revenueSplit": 0.02,
    "acctBalance": 326820.81,
    "name": {
        "title": null,
        "first": "Magnolia",
        "middle": null,
        "last": "Mendoza",
        "suffix": null
    },
    "address": {
        "streetAddress": "3813 Big Ditch Circle",
        "buildingName": "Building 56",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sakore",
        "stateProvince": "Nandgaon",
        "locality": "Nashik",
        "country": "IN",
        "postalCode": "423106",
        "latitude": "20.6425",
        "longitude": "74.0157"
    },
    "contact": {
        "phone": "+91-102-603-0473",
        "email": "mmendoza102@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "mmendoza",
        "oauth2": null,
        "password": "$2y$10$Trq4GIAs2zJpxE.p2xob0.2lr9k6WOdXksi5ObBiiiJwp4exGWJk6"
    },
    "otherContact": {
        "emails": [
            "mmendoza@lguplus.net",
            "mmendoza@telecom.net",
            "mmendoza@openworld.net"
        ],
        "phoneNumbers": [
            "+91-794-538-4538"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-06-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LINFREN5067",
    "businessName": "Industrious Trust Inc",
    "revenueSplit": 0.48,
    "acctBalance": 526735.92,
    "name": {
        "title": "Ms",
        "first": "Lin",
        "middle": "T",
        "last": "French",
        "suffix": null
    },
    "address": {
        "streetAddress": "4240 Long Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Birkirkara",
        "stateProvince": "Birkirkara",
        "locality": "Birkirkara",
        "country": "MT",
        "postalCode": "BKR",
        "latitude": "35.8972",
        "longitude": "14.4653"
    },
    "contact": {
        "phone": "+356-103-207-5067",
        "email": "lfrench103@glasnet.com",
        "socMedia": null
    },
    "login": {
        "username": "lfrench",
        "oauth2": null,
        "password": "$2y$10$bCTieekuv4fzj0jR6Xr2HOjWGABNJUlVvTNKzJGkFrftmhJ9k\/ofS"
    },
    "otherContact": {
        "emails": [
            "lfrench@nii.net"
        ],
        "phoneNumbers": [
            "+356-134-051-7321",
            "+356-7-125-7385"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-05-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "HAYDGOLD6110",
    "businessName": "Fat Cats Trust Inc",
    "revenueSplit": 0.09,
    "acctBalance": 29722.690000000002,
    "name": {
        "title": "Mr",
        "first": "Hayden",
        "middle": "V",
        "last": "Golden",
        "suffix": null
    },
    "address": {
        "streetAddress": "3263 Short Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sainte-Th\u00e9r\u00e8se-de-Blainville Central",
        "stateProvince": "QC",
        "locality": "Laurentides",
        "country": "CA",
        "postalCode": "J7E",
        "latitude": "45.6442",
        "longitude": "-73.8448"
    },
    "contact": {
        "phone": "+1-104-715-6110",
        "email": "hgolden104@megafon.com",
        "socMedia": null
    },
    "login": {
        "username": "hgolden",
        "oauth2": null,
        "password": "$2y$10$Bj\/PhMtzTUFfMNQfTqby..WWWjraVYYXJSjwJgrpuaQjaNkEeke.2"
    },
    "otherContact": {
        "emails": [
            "hgolden@vimpelcom.net"
        ],
        "phoneNumbers": [
            "+1-394-520-3379"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-07-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CLAUMEYE6414",
    "businessName": "Friendly Industries Company",
    "revenueSplit": 0.12,
    "acctBalance": 197122.80000000002,
    "name": {
        "title": null,
        "first": "Claude",
        "middle": null,
        "last": "Meyer",
        "suffix": null
    },
    "address": {
        "streetAddress": "6029 Red Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Tangerm\u00fcnde",
        "stateProvince": "ST",
        "locality": "Landkreis Stendal",
        "country": "DE",
        "postalCode": "39590",
        "latitude": "52.5446",
        "longitude": "11.9765"
    },
    "contact": {
        "phone": "+49-105-785-6414",
        "email": "cmeyer105@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "cmeyer",
        "oauth2": null,
        "password": "$2y$10$Cmo8PwrCUPOcABJsdSTQFuYnhp11q\/FQfVEqyhCoenXeQruZVfXVW"
    },
    "otherContact": {
        "emails": [
            "cmeyer@etisalat.net",
            "cmeyer@rogers.net"
        ],
        "phoneNumbers": [
            "+49-856-484-2072"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-04-25"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MELVSALA6027",
    "businessName": "Serious Business LLC",
    "revenueSplit": 0.41000000000000003,
    "acctBalance": 743314.4400000001,
    "name": {
        "title": "Ms",
        "first": "Melvina",
        "middle": "L",
        "last": "Salazar",
        "suffix": null
    },
    "address": {
        "streetAddress": "3673 Green Mountain Boulevard",
        "buildingName": "Building 42",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Loveday",
        "stateProvince": "SA",
        "locality": "SA FAR",
        "country": "AU",
        "postalCode": "5345",
        "latitude": "-34.2833",
        "longitude": "140.4333"
    },
    "contact": {
        "phone": "+61-106-844-6027",
        "email": "msalazar106@orange.com",
        "socMedia": null
    },
    "login": {
        "username": "msalazar",
        "oauth2": null,
        "password": "$2y$10$SveEYPvVUDgkr.VhFHuTzudryqdjs9eHRHa8M5uHqe4OK0Ovie8V6"
    },
    "otherContact": {
        "emails": [
            "msalazar@rogers.net"
        ],
        "phoneNumbers": [
            "+61-907-997-3181",
            "+61-39-866-0728"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-08-28"
    }
});
db.partners.insertOne(
{
    "partnerKey": "VALKLEI6812",
    "businessName": "Industrious Associates LLC",
    "revenueSplit": 0.13,
    "acctBalance": 841808.37,
    "name": {
        "title": "Mr",
        "first": "Val",
        "middle": "R",
        "last": "Klein",
        "suffix": null
    },
    "address": {
        "streetAddress": "262 Short Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Veljunski Ponorac",
        "stateProvince": "Veljun",
        "locality": "Veljun",
        "country": "HR",
        "postalCode": "47243",
        "latitude": "45.2097",
        "longitude": "15.5896"
    },
    "contact": {
        "phone": "+385-107-925-6812",
        "email": "vklein107@worldnet.com",
        "socMedia": null
    },
    "login": {
        "username": "vklein",
        "oauth2": null,
        "password": "$2y$10$evmKJPSbFVKSeYwmAUUdmuXkT0NYlF.U3ZZWl6lsUu9muVb7BUS7q"
    },
    "otherContact": {
        "emails": [
            "vklein@optus.net",
            "vklein@lookdata.net"
        ],
        "phoneNumbers": [
            "+385-678-767-5413"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1951-08-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "KENNKRAM7829",
    "businessName": "Industrious Business Company",
    "revenueSplit": 0.25,
    "acctBalance": 971547.18,
    "name": {
        "title": null,
        "first": "Kennith",
        "middle": null,
        "last": "Kramer",
        "suffix": null
    },
    "address": {
        "streetAddress": "3905 Winding Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Narot Mehra",
        "stateProvince": "Pathankot",
        "locality": "Gurdaspur",
        "country": "IN",
        "postalCode": "145025",
        "latitude": "32.2673",
        "longitude": "75.5647"
    },
    "contact": {
        "phone": "+91-108-487-7829",
        "email": "kkramer108@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "kkramer",
        "oauth2": null,
        "password": "$2y$10$ZRyHNN0JhV5UzdZu7AOTDOiYx12eCPoSFbD1kmHmv673oZeT48n.C"
    },
    "otherContact": {
        "emails": [
            "kkramer@eunet.net"
        ],
        "phoneNumbers": [
            "+91-88-673-8068",
            "+91-456-037-8882"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-07-28"
    }
});
db.partners.insertOne(
{
    "partnerKey": "THADFARR6514",
    "businessName": "Friendly Business Company",
    "revenueSplit": 0.17,
    "acctBalance": 378476.88,
    "name": {
        "title": "Mr",
        "first": "Thad",
        "middle": "O",
        "last": "Farrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "1626 Big Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Jesenice na Dolenjskem",
        "stateProvince": null,
        "locality": null,
        "country": "SI",
        "postalCode": "8261",
        "latitude": "45.8917",
        "longitude": "15.5397"
    },
    "contact": {
        "phone": "+386-109-974-6514",
        "email": "tfarrell109@optus.com",
        "socMedia": null
    },
    "login": {
        "username": "tfarrell",
        "oauth2": null,
        "password": "$2y$10$uQjRgSMYt2TJk00DHK89wescBPWS3TkN8AE.SPLNbJ6CdBgkdPLFq"
    },
    "otherContact": {
        "emails": [
            "tfarrell@openworld.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1966-02-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEONWELC3450",
    "businessName": "Industrious Industries LLC",
    "revenueSplit": 0.35000000000000003,
    "acctBalance": 979187.97,
    "name": {
        "title": "Mr",
        "first": "Leonard",
        "middle": "S",
        "last": "Welch",
        "suffix": null
    },
    "address": {
        "streetAddress": "8514 Big Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Baile nan Cailleach",
        "stateProvince": "Scotland",
        "locality": "Western Isles",
        "country": "GB",
        "postalCode": "HS7",
        "latitude": "57.4465",
        "longitude": "-7.3401"
    },
    "contact": {
        "phone": "+44-110-858-3450",
        "email": "lwelch110@telstra.com",
        "socMedia": {
            "line": "lwelch@line.com"
        }
    },
    "login": {
        "username": "lwelch",
        "oauth2": "lwelch@line.com",
        "password": "$2y$10$8WTPM8KLwwZZdFTxACQF7em5TvQyjlNz.A2tX0SVwDGA7WvgXf8lK"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+44-565-022-7059"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1988-02-14"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BELVMORR8903",
    "businessName": "Serious Industries Company",
    "revenueSplit": 0.2,
    "acctBalance": 493663.82,
    "name": {
        "title": null,
        "first": "Belva",
        "middle": null,
        "last": "Morrison",
        "suffix": null
    },
    "address": {
        "streetAddress": "5249 Red Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "26",
        "city": "Grand Falls",
        "stateProvince": "NL",
        "locality": "Newfoundland and Labrador",
        "country": "CA",
        "postalCode": "A2A",
        "latitude": "48.9332",
        "longitude": "-55.6649"
    },
    "contact": {
        "phone": "+1-111-625-8903",
        "email": "bmorriso111@ais.com",
        "socMedia": null
    },
    "login": {
        "username": "bmorriso",
        "oauth2": null,
        "password": "$2y$10$SexbsDLnN5kWrkRnEBjt4OMtjaoWCkHaYKxaHTxZdDWuArhFzIl3G"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-609-379-4376"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1947-07-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "NEREDUDL1620",
    "businessName": "Serious Business Company",
    "revenueSplit": 0.02,
    "acctBalance": 252966.02000000002,
    "name": {
        "title": "Ms",
        "first": "Nereida",
        "middle": "M",
        "last": "Dudley",
        "suffix": null
    },
    "address": {
        "streetAddress": "8900 Red Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kelowna Central",
        "stateProvince": "BC",
        "locality": "Kelowna",
        "country": "CA",
        "postalCode": "V1Y",
        "latitude": "49.8928",
        "longitude": "-119.4852"
    },
    "contact": {
        "phone": "+1-112-708-1620",
        "email": "ndudley112@telekom.com",
        "socMedia": null
    },
    "login": {
        "username": "ndudley",
        "oauth2": null,
        "password": "$2y$10$PU9p.IYnNYcjEh.Ig0\/IJeJpDtnc7zpBQrfc05G78fpkJNtkT3oT2"
    },
    "otherContact": {
        "emails": [
            "ndudley@bifty.net"
        ],
        "phoneNumbers": [
            "+1-651-694-0283"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1975-02-23"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAMOCOLL8457",
    "businessName": "Fat Cats Trust Ltd",
    "revenueSplit": 0.09,
    "acctBalance": 690437.18,
    "name": {
        "title": "Mr",
        "first": "Lamont",
        "middle": "K",
        "last": "Collins",
        "suffix": null
    },
    "address": {
        "streetAddress": "2101 Red Ridge Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Roodepoort",
        "stateProvince": null,
        "locality": null,
        "country": "ZA",
        "postalCode": "1794",
        "latitude": "-26.1667",
        "longitude": "27.8667"
    },
    "contact": {
        "phone": "+27-113-539-8457",
        "email": "lcollins113@nordnet.com",
        "socMedia": null
    },
    "login": {
        "username": "lcollins",
        "oauth2": null,
        "password": "$2y$10$wq7DQLinHg6Z8il1\/P2GpOtIQ7BWAX3n04n98xEkY7HBX\/gJzOdqm"
    },
    "otherContact": {
        "emails": [
            "lcollins@sktelecom.net"
        ],
        "phoneNumbers": [
            "+27-729-820-1104"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-04-02"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEBECK8077",
    "businessName": "Serious Trust LLC",
    "revenueSplit": 0.21,
    "acctBalance": 100724.31,
    "name": {
        "title": null,
        "first": "Le",
        "middle": null,
        "last": "Beck",
        "suffix": null
    },
    "address": {
        "streetAddress": "7158 Red Hill Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Christmas Island",
        "stateProvince": "WA",
        "locality": "KALGOORLIE",
        "country": "AU",
        "postalCode": "6798",
        "latitude": "-10.4854",
        "longitude": "105.6365"
    },
    "contact": {
        "phone": "+61-114-340-8077",
        "email": "lbeck114@singtel.com",
        "socMedia": null
    },
    "login": {
        "username": "lbeck",
        "oauth2": null,
        "password": "$2y$10$hs0QchKg0m2oczuCD9CebeyFYA0YU7Se4M61XNTHhVjvtmTnqB29."
    },
    "otherContact": {
        "emails": [
            "lbeck@mtn.net"
        ],
        "phoneNumbers": [
            "+61-168-503-4543"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1973-05-17"
    }
});
db.partners.insertOne(
{
    "partnerKey": "NATHWALT3231",
    "businessName": "Serious Associates LLC",
    "revenueSplit": 0.38,
    "acctBalance": 555232.75,
    "name": {
        "title": "Mr",
        "first": "Nathan",
        "middle": "S",
        "last": "Walter",
        "suffix": null
    },
    "address": {
        "streetAddress": "6989 Little Tree Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Enfield",
        "stateProvince": null,
        "locality": null,
        "country": "IE",
        "postalCode": "A83",
        "latitude": "53.4142",
        "longitude": "-6.8323"
    },
    "contact": {
        "phone": "+353-115-533-3231",
        "email": "nwalter115@singtel.com",
        "socMedia": null
    },
    "login": {
        "username": "nwalter",
        "oauth2": null,
        "password": "$2y$10$s4.uC19yA6GI9heD7amYG.v26.RT8uSPFoKrNUX.Av.\/c\/ADpf292"
    },
    "otherContact": {
        "emails": [
            "nwalter@openworld.net",
            "nwalter@safaricom.net"
        ],
        "phoneNumbers": [
            "+353-598-292-6489",
            "+353-322-131-4273"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1995-06-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "NIKIPHAM5027",
    "businessName": "Industrious Industries Ltd",
    "revenueSplit": 0.41000000000000003,
    "acctBalance": 338399.18,
    "name": {
        "title": "Ms",
        "first": "Niki",
        "middle": "P",
        "last": "Pham",
        "suffix": null
    },
    "address": {
        "streetAddress": "2727 Little River Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Perth",
        "stateProvince": "WA",
        "locality": "CURTIN",
        "country": "AU",
        "postalCode": "6837",
        "latitude": "-31.9522",
        "longitude": "115.8614"
    },
    "contact": {
        "phone": "+61-116-992-5027",
        "email": "npham116@maxcomm.com",
        "socMedia": null
    },
    "login": {
        "username": "npham",
        "oauth2": null,
        "password": "$2y$10$.wGKbiZ9ZtPXaeoI1fz9l.3bqaGBkbK2jTqGmOoc7rhHVSv4ofIwS"
    },
    "otherContact": {
        "emails": [
            "npham@centurylink.net"
        ],
        "phoneNumbers": [
            "+61-496-414-5446",
            "+61-697-102-1876",
            "+61-517-408-3328"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1971-09-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "VONNCORR6637",
    "businessName": "Industrious Trust Company",
    "revenueSplit": 0.36,
    "acctBalance": 554908.64,
    "name": {
        "title": null,
        "first": "Vonnie",
        "middle": null,
        "last": "Correa",
        "suffix": null
    },
    "address": {
        "streetAddress": "3273 Red Mound Road",
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
        "phone": "+681-117-655-6637",
        "email": "vcorrea117@openworld.com",
        "socMedia": null
    },
    "login": {
        "username": "vcorrea",
        "oauth2": null,
        "password": "$2y$10$vLiEJROY0XXzgNRBIVthlek\/jQj\/vd45Oh4ob0bWUz4MOESatC1IO"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+681-312-531-0624",
            "+681-294-726-9477"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-10-04"
    }
});
db.partners.insertOne(
{
    "partnerKey": "KATIBRYA4997",
    "businessName": "Industrious Industries Inc",
    "revenueSplit": 0.39,
    "acctBalance": 464066.08,
    "name": {
        "title": "Ms",
        "first": "Katia",
        "middle": "B",
        "last": "Bryant",
        "suffix": null
    },
    "address": {
        "streetAddress": "8679 Big Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Edmonton (South Bonnie Doon \/ East University)",
        "stateProvince": "AB",
        "locality": "Edmonton",
        "country": "CA",
        "postalCode": "T6E",
        "latitude": "53.4914",
        "longitude": "-113.4802"
    },
    "contact": {
        "phone": "+1-118-601-4997",
        "email": "kbryant118@ktc.com",
        "socMedia": null
    },
    "login": {
        "username": "kbryant",
        "oauth2": null,
        "password": "$2y$10$7dFRFFj6QaLRExO7U1B4U.1GKeDHe1GlpORzciHw0HOUJyXKCKRDm"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-644-906-8843",
            "+1-845-838-6758"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1989-06-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "VIRGMOYE8616",
    "businessName": "Fat Cats Industries Inc",
    "revenueSplit": 0.07,
    "acctBalance": 349104.49,
    "name": {
        "title": "Ms",
        "first": "Virgie",
        "middle": "A",
        "last": "Moyer",
        "suffix": null
    },
    "address": {
        "streetAddress": "6096 Green Bough Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "2E",
        "city": "St Helier",
        "stateProvince": "Jersey Channel Islands",
        "locality": "Jersey Channel Islands",
        "country": "JE",
        "postalCode": "JE2",
        "latitude": "49.2",
        "longitude": "-2.1333"
    },
    "contact": {
        "phone": "+441534-119-549-8616",
        "email": "vmoyer119@ccs.com",
        "socMedia": null
    },
    "login": {
        "username": "vmoyer",
        "oauth2": null,
        "password": "$2y$10$l.rXzEexffgoclnFrbadzulPaszLJpiHpEbLASeBqi3yeyKt5ngK."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+441534-300-623-7385"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1944-08-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AFTOCRAN8737",
    "businessName": "Serious Industries Inc",
    "revenueSplit": 0.47000000000000003,
    "acctBalance": 642275.79,
    "name": {
        "title": null,
        "first": "Afton",
        "middle": null,
        "last": "Crane",
        "suffix": null
    },
    "address": {
        "streetAddress": "1500 Winding Creek Boulevard",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": null,
        "city": "Craig",
        "stateProvince": "Scotland",
        "locality": "Dumfries and Galloway",
        "country": "GB",
        "postalCode": "DG7",
        "latitude": "54.9842",
        "longitude": "-3.9638"
    },
    "contact": {
        "phone": "+44-120-638-8737",
        "email": "acrane120@swisscom.com",
        "socMedia": {
            "twitter": "acrane@twitter.com"
        }
    },
    "login": {
        "username": "acrane",
        "oauth2": "acrane@twitter.com",
        "password": "$2y$10$mV4HgNzalvdKfTbCCIoXr.KPHmZE7twq00pOsrc\/RbCE4OgVkw0ru"
    },
    "otherContact": {
        "emails": [
            "acrane@cubenet.net"
        ],
        "phoneNumbers": [
            "+44-227-275-8528"
        ],
        "socMedias": {
            "twitter": "acrane@twitter.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1954-09-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "JACIHOLT3603",
    "businessName": "Industrious Trust Inc",
    "revenueSplit": 0.18,
    "acctBalance": 153102.67,
    "name": {
        "title": "Mr",
        "first": "Jacinto",
        "middle": "T",
        "last": "Holt",
        "suffix": null
    },
    "address": {
        "streetAddress": "4157 Long Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Rinyaszentkir\u00e1ly",
        "stateProvince": "SO",
        "locality": "Somogy",
        "country": "HU",
        "postalCode": "7513",
        "latitude": "46.15",
        "longitude": "17.4"
    },
    "contact": {
        "phone": "+36-121-797-3603",
        "email": "jholt121@greennet.com",
        "socMedia": null
    },
    "login": {
        "username": "jholt",
        "oauth2": null,
        "password": "$2y$10$88OG\/oNFA01E7ffSBENHR.h2LmoZzf28zwUqJOmhiwYwS1andmLua"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+36-752-487-5405"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-11-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MARGMURI5079",
    "businessName": "Industrious Associates Ltd",
    "revenueSplit": 0.24,
    "acctBalance": 259320.5,
    "name": {
        "title": "Mr",
        "first": "Margarito",
        "middle": "G",
        "last": "Murillo",
        "suffix": null
    },
    "address": {
        "streetAddress": "5735 Big Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Satley",
        "stateProvince": "England",
        "locality": "Durham",
        "country": "GB",
        "postalCode": "DL13",
        "latitude": "54.7849",
        "longitude": "-1.8182"
    },
    "contact": {
        "phone": "+44-122-723-5079",
        "email": "mmurillo122@ote.com",
        "socMedia": null
    },
    "login": {
        "username": "mmurillo",
        "oauth2": null,
        "password": "$2y$10$zMqFsMXONg5WxXh1igiRIuZ27vBgm.rx2A9LKCJ9P3UBjXQw5Qm\/2"
    },
    "otherContact": {
        "emails": [
            "mmurillo@lguplus.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1937-04-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ARMABAUT7502",
    "businessName": "Industrious Trust LLC",
    "revenueSplit": 0.4,
    "acctBalance": 327772.26,
    "name": {
        "title": null,
        "first": "Armand",
        "middle": null,
        "last": "Bautista",
        "suffix": null
    },
    "address": {
        "streetAddress": "6146 Big Bend Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ittoqqortoormiit",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3980",
        "latitude": "70.4846",
        "longitude": "-21.9622"
    },
    "contact": {
        "phone": "+299-123-118-7502",
        "email": "abautist123@chunghwa.com",
        "socMedia": null
    },
    "login": {
        "username": "abautist",
        "oauth2": null,
        "password": "$2y$10$B\/N1MMOve2aAw8I1rxkAHO0cEl96knziIwHSeQM3Mv6mBBbijXe6y"
    },
    "otherContact": {
        "emails": [
            "abautist@ui.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-11-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LORRSTOU3284",
    "businessName": "Serious Trust Inc",
    "revenueSplit": 0.34,
    "acctBalance": 587139.1,
    "name": {
        "title": "Ms",
        "first": "Lorretta",
        "middle": "Q",
        "last": "Stout",
        "suffix": null
    },
    "address": {
        "streetAddress": "3250 Winding Gully Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Gallanach",
        "stateProvince": "Scotland",
        "locality": "Argyll and Bute",
        "country": "GB",
        "postalCode": "PA34",
        "latitude": "56.3937",
        "longitude": "-5.4884"
    },
    "contact": {
        "phone": "+44-124-166-3284",
        "email": "lstout124@eunet.com",
        "socMedia": null
    },
    "login": {
        "username": "lstout",
        "oauth2": null,
        "password": "$2y$10$FKhA.FDi4zpQpKqlXsk11.fKZQN6BRc0Scu5oBcmcAppFpp0ghtQ2"
    },
    "otherContact": {
        "emails": [
            "lstout@swisscom.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-12-02"
    }
});
db.partners.insertOne(
{
    "partnerKey": "THIPARK7401",
    "businessName": "Industrious Industries Ltd",
    "revenueSplit": 0.06,
    "acctBalance": 34519.12,
    "name": {
        "title": null,
        "first": "Thi",
        "middle": null,
        "last": "Parks",
        "suffix": null
    },
    "address": {
        "streetAddress": "1224 Long Creek Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Melbourne",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "8070",
        "latitude": "-37.814",
        "longitude": "144.9633"
    },
    "contact": {
        "phone": "+61-126-373-7401",
        "email": "tparks126@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "tparks",
        "oauth2": null,
        "password": "$2y$10$PfHmg00.ePO4ZsyMOPesT.XEbAE052skeW5X5j09dLYoMDggB14Hm"
    },
    "otherContact": {
        "emails": [
            "tparks@telkom.net"
        ],
        "phoneNumbers": [
            "+61-570-556-3850",
            "+61-203-157-1046",
            "+61-658-245-9923"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1996-07-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MINNPUGH7663",
    "businessName": "Fat Cats Industries Inc",
    "revenueSplit": 0.36,
    "acctBalance": 1236.74,
    "name": {
        "title": "Ms",
        "first": "Minnie",
        "middle": "V",
        "last": "Pugh",
        "suffix": null
    },
    "address": {
        "streetAddress": "1137 Winding Bridge Circle",
        "buildingName": null,
        "floor": 2,
        "roomAptCondoFlat": null,
        "city": "Gornji Ladu\u010d",
        "stateProvince": "\u0160enkovec",
        "locality": "\u0160enkovec",
        "country": "HR",
        "postalCode": "10292",
        "latitude": "45.8833",
        "longitude": "15.7333"
    },
    "contact": {
        "phone": "+385-127-959-7663",
        "email": "mpugh127@relcom.com",
        "socMedia": null
    },
    "login": {
        "username": "mpugh",
        "oauth2": null,
        "password": "$2y$10$ozDfjmVowxP22uDMvXHglufBTdRq62kOf2qUfl4789ll8crjS9bYa"
    },
    "otherContact": {
        "emails": [
            "mpugh@softbank.net",
            "mpugh@apicnet.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1949-09-14"
    }
});
db.partners.insertOne(
{
    "partnerKey": "STEPCARL6002",
    "businessName": "Friendly Industries Inc",
    "revenueSplit": 0.12,
    "acctBalance": 648708.31,
    "name": {
        "title": "Mr",
        "first": "Stephen",
        "middle": "Z",
        "last": "Carlson",
        "suffix": null
    },
    "address": {
        "streetAddress": "336 Long Hill Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Scarborough (Dorset Park \/ Wexford Heights \/ Scarborough Town Centre)",
        "stateProvince": "ON",
        "locality": "Scarborough",
        "country": "CA",
        "postalCode": "M1P",
        "latitude": "43.7612",
        "longitude": "-79.2707"
    },
    "contact": {
        "phone": "+1-128-858-6002",
        "email": "scarlson128@megafon.com",
        "socMedia": null
    },
    "login": {
        "username": "scarlson",
        "oauth2": null,
        "password": "$2y$10$D1tJu\/DFYWNHkYZw7a5.iuvsAW3Gb0dZ7aZJB5DY9L4sM.Ad9qdbC"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-391-667-5740",
            "+1-313-515-8026",
            "+1-411-635-5014"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1930-04-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "PATRMOSS9875",
    "businessName": "Serious Trust LLC",
    "revenueSplit": 0.43,
    "acctBalance": 257934.69,
    "name": {
        "title": null,
        "first": "Patrick",
        "middle": null,
        "last": "Moss",
        "suffix": null
    },
    "address": {
        "streetAddress": "881 Winding Woods Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Terchov\u00e1",
        "stateProvince": "ZI",
        "locality": "\u017dilina",
        "country": "SK",
        "postalCode": "013 06",
        "latitude": "49.259",
        "longitude": "19.0294"
    },
    "contact": {
        "phone": "+421-129-202-9875",
        "email": "pmoss129@kddi.com",
        "socMedia": null
    },
    "login": {
        "username": "pmoss",
        "oauth2": null,
        "password": "$2y$10$3JtnQOapjbP.H2HrJcRdZ.xuk1M36OjBT.ksOdcofWo7bkQFseLrK"
    },
    "otherContact": {
        "emails": [
            "pmoss@tata.net",
            "pmoss@pldt.net",
            "pmoss@safaricom.net"
        ],
        "phoneNumbers": [
            "+421-719-551-1684",
            "+421-925-806-4640"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-11-28"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ORALWATS4815",
    "businessName": "Serious Industries Company",
    "revenueSplit": 0.39,
    "acctBalance": 346393.76,
    "name": {
        "title": "Ms",
        "first": "Oralee",
        "middle": "B",
        "last": "Watson",
        "suffix": null
    },
    "address": {
        "streetAddress": "3664 Red Hill Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Fletchertown",
        "stateProvince": "England",
        "locality": "Cumbria",
        "country": "GB",
        "postalCode": "CA5",
        "latitude": "54.855",
        "longitude": "-3.0184"
    },
    "contact": {
        "phone": "+44-130-157-4815",
        "email": "owatson130@belgacom.com",
        "socMedia": {
            "linkedin": "owatson@linkedin.com"
        }
    },
    "login": {
        "username": "owatson",
        "oauth2": "owatson@linkedin.com",
        "password": "$2y$10$sEZnKH568\/Z4W8Cn6UxgcOInV8xwtJH1fmJuUvU0f26J9U.T6qy.i"
    },
    "otherContact": {
        "emails": [
            "owatson@bifty.net",
            "owatson@maxcomm.net"
        ],
        "phoneNumbers": [],
        "socMedias": {
            "google": "owatson@google.com",
            "twitter": "owatson@twitter.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1937-01-07"
    }
});
db.partners.insertOne(
{
    "partnerKey": "WMBALL2185",
    "businessName": "Industrious Associates Ltd",
    "revenueSplit": 0.19,
    "acctBalance": 684553.9400000001,
    "name": {
        "title": "Mr",
        "first": "Wm",
        "middle": "H",
        "last": "Ballard",
        "suffix": null
    },
    "address": {
        "streetAddress": "8496 Red River Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Pointe-Noire",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97116",
        "latitude": "16.2309",
        "longitude": "-61.7878"
    },
    "contact": {
        "phone": "+590-131-960-2185",
        "email": "wballard131@verizon.com",
        "socMedia": null
    },
    "login": {
        "username": "wballard",
        "oauth2": null,
        "password": "$2y$10$yU60VPVyG5WFK4hA2mmDz.O6cXMPT67HM9KM6X2eUA5R7UKFc1pAe"
    },
    "otherContact": {
        "emails": [
            "wballard@telekom.net"
        ],
        "phoneNumbers": [
            "+590-419-719-8429",
            "+590-634-657-2514"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1975-02-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "KISHSCOT6991",
    "businessName": "Serious Associates Inc",
    "revenueSplit": 0.01,
    "acctBalance": 959378.5800000001,
    "name": {
        "title": null,
        "first": "Kisha",
        "middle": null,
        "last": "Scott",
        "suffix": null
    },
    "address": {
        "streetAddress": "867 Big Ridge Way",
        "buildingName": null,
        "floor": 13,
        "roomAptCondoFlat": null,
        "city": "FPO AA",
        "stateProvince": null,
        "locality": null,
        "country": "US",
        "postalCode": "96522",
        "latitude": "22.2783",
        "longitude": "114.1747"
    },
    "contact": {
        "phone": "+1-132-972-6991",
        "email": "kscott132@tata.com",
        "socMedia": null
    },
    "login": {
        "username": "kscott",
        "oauth2": null,
        "password": "$2y$10$aAPWRa3qaSg.f8E\/mCINVeKaJF6ahe4ikPsCicibSl9uqDzOlOsJG"
    },
    "otherContact": {
        "emails": [
            "kscott@sprint.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1932-09-07"
    }
});
db.partners.insertOne(
{
    "partnerKey": "COLEWOLF8014",
    "businessName": "Serious Associates LLC",
    "revenueSplit": 0.39,
    "acctBalance": 19346.52,
    "name": {
        "title": "Mr",
        "first": "Coleman",
        "middle": "X",
        "last": "Wolfe",
        "suffix": null
    },
    "address": {
        "streetAddress": "5720 Short Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Congaz 1",
        "stateProvince": "Comrat",
        "locality": "Comrat",
        "country": "MD",
        "postalCode": "MD-3815",
        "latitude": "46.1606",
        "longitude": "28.5136"
    },
    "contact": {
        "phone": "+373-133-830-8014",
        "email": "cwolfe133@mtn.com",
        "socMedia": null
    },
    "login": {
        "username": "cwolfe",
        "oauth2": null,
        "password": "$2y$10$m8ztXQFo9CDZhyn5GvH6j.w7EdxZE\/ujlr\/UZifZyUer.TKBju5k2"
    },
    "otherContact": {
        "emails": [
            "cwolfe@ccs.net"
        ],
        "phoneNumbers": [
            "+373-488-043-7444"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-05-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "KORYSOLO6768",
    "businessName": "Industrious Trust Inc",
    "revenueSplit": 0.45,
    "acctBalance": 605455.41,
    "name": {
        "title": "Mr",
        "first": "Kory",
        "middle": "B",
        "last": "Solomon",
        "suffix": null
    },
    "address": {
        "streetAddress": "4033 Little Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Holborough",
        "stateProvince": "England",
        "locality": "Kent",
        "country": "GB",
        "postalCode": "ME2",
        "latitude": "51.3921",
        "longitude": "0.4824"
    },
    "contact": {
        "phone": "+44-134-943-6768",
        "email": "ksolomon134@lookdata.com",
        "socMedia": null
    },
    "login": {
        "username": "ksolomon",
        "oauth2": null,
        "password": "$2y$10$OqkDxAwrBNRNrZ93NZwe8.U6GHDBRBaIJDz3Oe2Kv4.RzU6rwP0Mq"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1978-02-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LOYDJACO6533",
    "businessName": "Industrious Trust Ltd",
    "revenueSplit": 0.09,
    "acctBalance": 663624.4,
    "name": {
        "title": null,
        "first": "Loyd",
        "middle": null,
        "last": "Jacobson",
        "suffix": null
    },
    "address": {
        "streetAddress": "7797 Long Stream Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "UGARTECHE",
        "stateProvince": "M",
        "locality": "Mendoza",
        "country": "AR",
        "postalCode": "5509",
        "latitude": "-33.2167",
        "longitude": "-68.8833"
    },
    "contact": {
        "phone": "+54-135-332-6533",
        "email": "ljacobso135@tm.com",
        "socMedia": null
    },
    "login": {
        "username": "ljacobso",
        "oauth2": null,
        "password": "$2y$10$gAh2G.56YGbmiU6HDfcXsehEr0A5ljP1TRmTQHBOBwO.jr9Cda6.O"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+54-972-984-3551",
            "+54-339-460-9930"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2003-08-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CARLCONL5422",
    "businessName": "Friendly Associates Inc",
    "revenueSplit": 0.04,
    "acctBalance": 555166.49,
    "name": {
        "title": "Ms",
        "first": "Carlyn",
        "middle": "V",
        "last": "Conley",
        "suffix": null
    },
    "address": {
        "streetAddress": "8844 Winding Gulch Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Seafield",
        "stateProvince": "Scotland",
        "locality": "West Lothian",
        "country": "GB",
        "postalCode": "EH47",
        "latitude": "55.8586",
        "longitude": "-3.6649"
    },
    "contact": {
        "phone": "+44-136-899-5422",
        "email": "cconley136@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "cconley",
        "oauth2": null,
        "password": "$2y$10$OvZ9dP84swMd9gY3fy5Dh.PRIl65gu27w5BYNBqLohWG\/VazuNLhe"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+44-330-666-0843"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-07-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "PAULPROC1949",
    "businessName": "Serious Associates LLC",
    "revenueSplit": 0.37,
    "acctBalance": 986886.88,
    "name": {
        "title": "Ms",
        "first": "Pauletta",
        "middle": "T",
        "last": "Proctor",
        "suffix": null
    },
    "address": {
        "streetAddress": "5894 Little Bough Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kaustaj\u00e4rvi",
        "stateProvince": "Tohmaj\u00e4rvi",
        "locality": "Keski-Karjala",
        "country": "FI",
        "postalCode": "82770",
        "latitude": "62.2616",
        "longitude": "30.7427"
    },
    "contact": {
        "phone": "+358-137-935-1949",
        "email": "pproctor137@telesystems.com",
        "socMedia": null
    },
    "login": {
        "username": "pproctor",
        "oauth2": null,
        "password": "$2y$10$PpczD6wYoOpFIWafj1M6ru\/rBw7Zeekpf0J08GpTJ8T7.pts1Cote"
    },
    "otherContact": {
        "emails": [
            "pproctor@algonet.net"
        ],
        "phoneNumbers": [
            "+358-726-637-7045"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-09-04"
    }
});
db.partners.insertOne(
{
    "partnerKey": "KERRFRY1587",
    "businessName": "Fat Cats Industries Inc",
    "revenueSplit": 0.21,
    "acctBalance": 451832.32,
    "name": {
        "title": "Dr",
        "first": "Kerry",
        "middle": null,
        "last": "Fry",
        "suffix": "LSD"
    },
    "address": {
        "streetAddress": "2005 Big Bend Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cap-Pel\u00e9",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E4N",
        "latitude": "46.2129",
        "longitude": "-64.2784"
    },
    "contact": {
        "phone": "+1-138-316-1587",
        "email": "kfry138@tm.com",
        "socMedia": null
    },
    "login": {
        "username": "kfry",
        "oauth2": null,
        "password": "$2y$10$d1reQ2TrhegY6vgylrAPmuMZcGEAcb\/voVfwbFUdJWo\/Ln8OLGSEG"
    },
    "otherContact": {
        "emails": [
            "kfry@cerist.net"
        ],
        "phoneNumbers": [
            "+1-821-528-9065",
            "+1-806-972-7441"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1972-10-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "WILMKEIT7770",
    "businessName": "Fat Cats Trust Ltd",
    "revenueSplit": 0.13,
    "acctBalance": 492186.94,
    "name": {
        "title": "Mr",
        "first": "Wilmer",
        "middle": "Z",
        "last": "Keith",
        "suffix": null
    },
    "address": {
        "streetAddress": "9649 Blue Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Sabana Seca",
        "stateProvince": "Toa Baja",
        "locality": "Toa Baja",
        "country": "PR",
        "postalCode": "00952",
        "latitude": "18.4269",
        "longitude": "-66.1846"
    },
    "contact": {
        "phone": "+1787-139-842-7770",
        "email": "wkeith139@millicom.com",
        "socMedia": null
    },
    "login": {
        "username": "wkeith",
        "oauth2": null,
        "password": "$2y$10$KYQx.MXmzXg3vvoM2DUi5uqu\/16mI6lUEdZxg0vyA0tx9TNxgF9.C"
    },
    "otherContact": {
        "emails": [
            "wkeith@tm.net",
            "wkeith@telecom.net"
        ],
        "phoneNumbers": [
            "+1787-758-628-9760"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1974-04-08"
    }
});
db.partners.insertOne(
{
    "partnerKey": "NOEVILL9495",
    "businessName": "Industrious Associates Ltd",
    "revenueSplit": 0.42,
    "acctBalance": 322180.24,
    "name": {
        "title": "Mr",
        "first": "Noe",
        "middle": "D",
        "last": "Villarreal",
        "suffix": null
    },
    "address": {
        "streetAddress": "1899 Blue Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Timiskaming North (Iroquois Falls A)",
        "stateProvince": "ON",
        "locality": "Timiskaming",
        "country": "CA",
        "postalCode": "P0K",
        "latitude": "48.5234",
        "longitude": "-80.3081"
    },
    "contact": {
        "phone": "+1-140-676-9495",
        "email": "nvillarr140@telesystems.com",
        "socMedia": {
            "skype": "nvillarr@skype.com"
        }
    },
    "login": {
        "username": "nvillarr",
        "oauth2": "nvillarr@skype.com",
        "password": "$2y$10$FfJhsqSECQnZI6yCR8a.Z.WV6Uwq0KcA53OBDKxV7SxRTauebCCWi"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-828-019-0885"
        ],
        "socMedias": {
            "facebook": "nvillarr@facebook.com",
            "linkedin": "nvillarr@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-02-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LATORAMO7570",
    "businessName": "Friendly Business Ltd",
    "revenueSplit": 0.2,
    "acctBalance": 260.04,
    "name": {
        "title": null,
        "first": "Latonia",
        "middle": null,
        "last": "Ramos",
        "suffix": null
    },
    "address": {
        "streetAddress": "5112 Short Bridge Drive",
        "buildingName": "Building B2",
        "floor": 10,
        "roomAptCondoFlat": "AC",
        "city": "\u041d\u043e\u0432\u043e\u0442\u0443\u043b\u043a\u0430",
        "stateProvince": "\u041f\u0418\u0422\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "locality": "\u041f\u0418\u0422\u0415\u0420\u0421\u041a\u0418\u0419 \u0420\u0410\u0419\u041e\u041d",
        "country": "RU",
        "postalCode": "413323",
        "latitude": "50.8333",
        "longitude": "47.5667"
    },
    "contact": {
        "phone": "+7-141-985-7570",
        "email": "lramos141@vivendi.com",
        "socMedia": null
    },
    "login": {
        "username": "lramos",
        "oauth2": null,
        "password": "$2y$10$VCn2YQlAoJpu4TLF8rkJGu.oSRaUEhq2Ze7pDa1UBPyqXgQKz\/pEu"
    },
    "otherContact": {
        "emails": [
            "lramos@cubenet.net"
        ],
        "phoneNumbers": [
            "+7-536-493-4184"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-11-23"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DAWNHERN6090",
    "businessName": "Serious Associates Inc",
    "revenueSplit": 0.12,
    "acctBalance": 155460.35,
    "name": {
        "title": "Ms",
        "first": "Dawne",
        "middle": "Z",
        "last": "Hernandez",
        "suffix": null
    },
    "address": {
        "streetAddress": "5977 Long Ridge Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Eolia",
        "stateProvince": "KY",
        "locality": "Letcher",
        "country": "US",
        "postalCode": "40826",
        "latitude": "37.0618",
        "longitude": "-82.7706"
    },
    "contact": {
        "phone": "+1-142-694-6090",
        "email": "dhernand142@millicom.com",
        "socMedia": null
    },
    "login": {
        "username": "dhernand",
        "oauth2": null,
        "password": "$2y$10$yLnjrHK2yaILTDSs8UHUHenlzqw0RWuwfsph4GDR7fxaeImydnaWa"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-859-459-7525",
            "+1-104-741-6170"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1990-06-04"
    }
});
db.partners.insertOne(
{
    "partnerKey": "QUIASTON0800",
    "businessName": "Industrious Industries Company",
    "revenueSplit": 0.08,
    "acctBalance": 244566.62,
    "name": {
        "title": "Ms",
        "first": "Quiana",
        "middle": "Y",
        "last": "Stone",
        "suffix": null
    },
    "address": {
        "streetAddress": "4894 Short Mound Avenue",
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
        "phone": "+1670-143-688-0800",
        "email": "qstone143@ui.com",
        "socMedia": null
    },
    "login": {
        "username": "qstone",
        "oauth2": null,
        "password": "$2y$10$G9xOLgb1XfZEnQDNyGB2OuvKqdoatCyX62lG1q\/ufKKfzKGBD2wCO"
    },
    "otherContact": {
        "emails": [
            "qstone@eunet.net"
        ],
        "phoneNumbers": [
            "+1670-431-293-0801",
            "+1670-35-426-2941"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1993-12-14"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SHELSPEN4863",
    "businessName": "Friendly Industries Company",
    "revenueSplit": 0.38,
    "acctBalance": 53738.29,
    "name": {
        "title": null,
        "first": "Shelby",
        "middle": null,
        "last": "Spence",
        "suffix": null
    },
    "address": {
        "streetAddress": "4724 Winding Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "3D",
        "city": "Barkstead",
        "stateProvince": "VIC",
        "locality": "Victoria",
        "country": "AU",
        "postalCode": "3364",
        "latitude": "-37.45",
        "longitude": "144.1"
    },
    "contact": {
        "phone": "+61-144-599-4863",
        "email": "sspence144@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "sspence",
        "oauth2": null,
        "password": "$2y$10$qJOyzO7R.4fKNCen6vDog.Vpa8KMB1nG2f1WmalxQPDupr.68T1yu"
    },
    "otherContact": {
        "emails": [
            "sspence@zain.net"
        ],
        "phoneNumbers": [
            "+61-15-766-7254"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1952-11-26"
    }
});
db.partners.insertOne(
{
    "partnerKey": "NANESTAN2712",
    "businessName": "Serious Trust Inc",
    "revenueSplit": 0.28,
    "acctBalance": 239212.37,
    "name": {
        "title": "Ms",
        "first": "Nanette",
        "middle": "C",
        "last": "Stanley",
        "suffix": null
    },
    "address": {
        "streetAddress": "3937 Big Hill Way",
        "buildingName": null,
        "floor": 10,
        "roomAptCondoFlat": null,
        "city": "Butuceni",
        "stateProvince": "Orhei",
        "locality": "Orhei",
        "country": "MD",
        "postalCode": "MD-3552",
        "latitude": "47.3014",
        "longitude": "28.9725"
    },
    "contact": {
        "phone": "+373-145-509-2712",
        "email": "nstanley145@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "nstanley",
        "oauth2": null,
        "password": "$2y$10$HLVokGa8Nfjt7LIQz8bAbOOIEhEpAXxpOeC344c6frbs26MP\/bZm6"
    },
    "otherContact": {
        "emails": [
            "nstanley@airtel.net",
            "nstanley@pldt.net"
        ],
        "phoneNumbers": [
            "+373-535-729-8926"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1972-05-07"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MADDCHAP0629",
    "businessName": "Friendly Industries Inc",
    "revenueSplit": 0.02,
    "acctBalance": 324629.19,
    "name": {
        "title": "Ms",
        "first": "Maddie",
        "middle": "V",
        "last": "Chapman",
        "suffix": null
    },
    "address": {
        "streetAddress": "7241 Short Creek Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Uttar Asda",
        "stateProvince": "Uttar Asda",
        "locality": "East Midnapore",
        "country": "IN",
        "postalCode": "721443",
        "latitude": "21.9467",
        "longitude": "87.4938"
    },
    "contact": {
        "phone": "+91-146-027-0629",
        "email": "mchapman146@bt.com",
        "socMedia": null
    },
    "login": {
        "username": "mchapman",
        "oauth2": null,
        "password": "$2y$10$EyMUPN2uGzYveOvHAaYDR.uOXDFcoGJ8fua89NE.bja5KVsLingwy"
    },
    "otherContact": {
        "emails": [
            "mchapman@vimpelcom.net",
            "mchapman@bt.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1938-04-10"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SELISANC0895",
    "businessName": "Friendly Industries Ltd",
    "revenueSplit": 0.3,
    "acctBalance": 284419.42,
    "name": {
        "title": null,
        "first": "Selina",
        "middle": null,
        "last": "Sanchez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6586 Red Tree Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Semeni",
        "stateProvince": "Ungheni",
        "locality": "Ungheni",
        "country": "MD",
        "postalCode": "MD-3645",
        "latitude": "47.2686",
        "longitude": "27.7519"
    },
    "contact": {
        "phone": "+373-147-456-0895",
        "email": "ssanchez147@vivendi.com",
        "socMedia": null
    },
    "login": {
        "username": "ssanchez",
        "oauth2": null,
        "password": "$2y$10$w8xDuIF.bLtCZ1IHns.Z6.0LRBq8qeiMX6E05VCgMUByaHol70c2e"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1934-03-26"
    }
});
db.partners.insertOne(
{
    "partnerKey": "RENAPARR3168",
    "businessName": "Friendly Industries Ltd",
    "revenueSplit": 0.06,
    "acctBalance": 594212.01,
    "name": {
        "title": "Mr",
        "first": "Renaldo",
        "middle": "P",
        "last": "Parrish",
        "suffix": null
    },
    "address": {
        "streetAddress": "6247 Short Ridge Drive",
        "buildingName": "Building 80",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Adare",
        "stateProvince": "QLD",
        "locality": "TOOWOOMBA SE CNR",
        "country": "AU",
        "postalCode": "4343",
        "latitude": "-27.5127",
        "longitude": "152.2954"
    },
    "contact": {
        "phone": "+61-148-088-3168",
        "email": "rparrish148@vodafone.com",
        "socMedia": null
    },
    "login": {
        "username": "rparrish",
        "oauth2": null,
        "password": "$2y$10$KYiTpQQD4tPeQrWOvYT4YuSEIBxdUKzdThVHR8rS9pGXWJ6TqyDCK"
    },
    "otherContact": {
        "emails": [
            "rparrish@icom.net",
            "rparrish@ntt.net"
        ],
        "phoneNumbers": [
            "+61-7-769-3338"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1954-10-10"
    }
});
db.partners.insertOne(
{
    "partnerKey": "TERAGENT7786",
    "businessName": "Serious Industries Inc",
    "revenueSplit": 0.47000000000000003,
    "acctBalance": 634026.92,
    "name": {
        "title": "Ms",
        "first": "Tera",
        "middle": "Y",
        "last": "Gentry",
        "suffix": null
    },
    "address": {
        "streetAddress": "3729 Big Creek Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "T\u00f8nsberg",
        "stateProvince": "T\u00f8nsberg",
        "locality": "T\u00f8nsberg",
        "country": "NO",
        "postalCode": "3112",
        "latitude": "59.2675",
        "longitude": "10.4076"
    },
    "contact": {
        "phone": "+47-149-069-7786",
        "email": "tgentry149@kpn.com",
        "socMedia": null
    },
    "login": {
        "username": "tgentry",
        "oauth2": null,
        "password": "$2y$10$XvHoFz3lRfQLCwpVzMwmJeGe\/PSaFWjQCC7Ny\/6CWsG9GaKuXtf2e"
    },
    "otherContact": {
        "emails": [
            "tgentry@telecom.net",
            "tgentry@cci.net"
        ],
        "phoneNumbers": [
            "+47-277-356-2618",
            "+47-263-125-1767"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-08-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CIERCONL2209",
    "businessName": "Fat Cats Industries Inc",
    "revenueSplit": 0.17,
    "acctBalance": 939179.16,
    "name": {
        "title": null,
        "first": "Cierra",
        "middle": null,
        "last": "Conley",
        "suffix": null
    },
    "address": {
        "streetAddress": "6871 Big Mountain Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "9F",
        "city": "Kenora Region (Keewatin)",
        "stateProvince": "ON",
        "locality": "Ontario",
        "country": "CA",
        "postalCode": "P0X",
        "latitude": "50.9293",
        "longitude": "-93.3095"
    },
    "contact": {
        "phone": "+1-150-539-2209",
        "email": "cconley150@pldt.com",
        "socMedia": {
            "line": "cconley@line.com"
        }
    },
    "login": {
        "username": "cconley",
        "oauth2": "cconley@line.com",
        "password": "$2y$10$gTOD2TTHAz6sQuVpgC334.V4dyykn0ye2A.biiCcSbICRdYM284Rm"
    },
    "otherContact": {
        "emails": [
            "cconley@orstom.net",
            "cconley@telstra.net"
        ],
        "phoneNumbers": [
            "+1-984-071-6191"
        ],
        "socMedias": {
            "facebook": "cconley@facebook.com",
            "line": "cconley@line.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1978-01-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "JASOWATE3038",
    "businessName": "Industrious Associates Inc",
    "revenueSplit": 0.13,
    "acctBalance": 112773.45,
    "name": {
        "title": "Mr",
        "first": "Jason",
        "middle": "F",
        "last": "Waters",
        "suffix": null
    },
    "address": {
        "streetAddress": "8792 Long Bend Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Warwick",
        "stateProvince": "Warwick Parish",
        "locality": "Warwick Parish",
        "country": "BM",
        "postalCode": "WK 03",
        "latitude": "32.2658",
        "longitude": "-64.8072"
    },
    "contact": {
        "phone": "+1441-151-039-3038",
        "email": "jwaters151@cerist.com",
        "socMedia": null
    },
    "login": {
        "username": "jwaters",
        "oauth2": null,
        "password": "$2y$10$sicWKXRajsmBucDdiWSaGOz.yOy3oXyZ1wfXh\/SpBYkIHnwQgNb2K"
    },
    "otherContact": {
        "emails": [
            "jwaters@maxcomm.net"
        ],
        "phoneNumbers": [
            "+1441-135-624-9379"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-11-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MYRNSALG7692",
    "businessName": "Fat Cats Industries Inc",
    "revenueSplit": 0.49,
    "acctBalance": 342877.59,
    "name": {
        "title": "Ms",
        "first": "Myrna",
        "middle": "L",
        "last": "Salgado",
        "suffix": null
    },
    "address": {
        "streetAddress": "902 Long Canyon Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Shyampura",
        "stateProvince": "Shyampura",
        "locality": "Mahendragarh",
        "country": "IN",
        "postalCode": "123024",
        "latitude": "28.4268",
        "longitude": "75.9414"
    },
    "contact": {
        "phone": "+91-152-629-7692",
        "email": "msalgado152@access.com",
        "socMedia": null
    },
    "login": {
        "username": "msalgado",
        "oauth2": null,
        "password": "$2y$10$rZW1Y4vbaxkwWq59KmyVdO26sk5eYPj.NTB2baIkhwSt.36MUM.l2"
    },
    "otherContact": {
        "emails": [
            "msalgado@jio.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-10-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LEANBOYD3746",
    "businessName": "Friendly Trust Company",
    "revenueSplit": 0.07,
    "acctBalance": 747990.4500000001,
    "name": {
        "title": null,
        "first": "Leandro",
        "middle": null,
        "last": "Boyd",
        "suffix": null
    },
    "address": {
        "streetAddress": "4297 Red Mountain Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Berresoug",
        "stateProvince": "Tlemcen",
        "locality": "Tlemcen",
        "country": "DZ",
        "postalCode": "13019",
        "latitude": "35.0694",
        "longitude": "-1.1371"
    },
    "contact": {
        "phone": "+213-153-718-3746",
        "email": "lboyd153@ktc.com",
        "socMedia": null
    },
    "login": {
        "username": "lboyd",
        "oauth2": null,
        "password": "$2y$10$s4Po9OhePktUUDTueeulAOtNqYc\/qp3uaJbVIyekzsASn4Ra7QLYy"
    },
    "otherContact": {
        "emails": [
            "lboyd@telefonica.net",
            "lboyd@megafon.net",
            "lboyd@verizon.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-02-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ALFRMEYE0648",
    "businessName": "Friendly Industries Company",
    "revenueSplit": 0.26,
    "acctBalance": 944191.41,
    "name": {
        "title": "Mr",
        "first": "Alfredo",
        "middle": "S",
        "last": "Meyers",
        "suffix": null
    },
    "address": {
        "streetAddress": "5712 Long Ridge Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Paris",
        "stateProvince": "TX",
        "locality": "Lamar",
        "country": "US",
        "postalCode": "75460",
        "latitude": "33.6581",
        "longitude": "-95.5379"
    },
    "contact": {
        "phone": "+1-154-190-0648",
        "email": "ameyers154@telia.com",
        "socMedia": null
    },
    "login": {
        "username": "ameyers",
        "oauth2": null,
        "password": "$2y$10$ZADJA3KjeSX9BXKrogCnfeYvDFVvhx9wf3dnq9xxJA8tS4JCgqCK."
    },
    "otherContact": {
        "emails": [
            "ameyers@apicnet.net",
            "ameyers@maxcomm.net"
        ],
        "phoneNumbers": [
            "+1-448-980-3471",
            "+1-906-263-2167",
            "+1-670-880-2797"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1960-08-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LELADAVI1498",
    "businessName": "Fat Cats Trust LLC",
    "revenueSplit": 0.36,
    "acctBalance": 840821.99,
    "name": {
        "title": "Mr",
        "first": "Leland",
        "middle": "Y",
        "last": "Davidson",
        "suffix": null
    },
    "address": {
        "streetAddress": "9319 Red Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Kourou",
        "stateProvince": "GF",
        "locality": "Guyane",
        "country": "GF",
        "postalCode": "97372 CEDEX",
        "latitude": "5.1628",
        "longitude": "-52.6427"
    },
    "contact": {
        "phone": "+594-155-594-1498",
        "email": "ldavidso155@softbank.com",
        "socMedia": null
    },
    "login": {
        "username": "ldavidso",
        "oauth2": null,
        "password": "$2y$10$Ne\/XTUacpKV9jkyPCreTVO63xnWwPyNCRn8an6I3EHOIz6RAd35U2"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+594-716-686-7203"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-06-10"
    }
});
db.partners.insertOne(
{
    "partnerKey": "TERRBANK4942",
    "businessName": "Fat Cats Associates LLC",
    "revenueSplit": 0.03,
    "acctBalance": 979829.34,
    "name": {
        "title": null,
        "first": "Terrell",
        "middle": null,
        "last": "Banks",
        "suffix": null
    },
    "address": {
        "streetAddress": "9549 Little Bough Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ch\u00e2teauguay South",
        "stateProvince": "QC",
        "locality": "Mont\u00e9r\u00e9gie",
        "country": "CA",
        "postalCode": "J6K",
        "latitude": "45.3526",
        "longitude": "-73.7305"
    },
    "contact": {
        "phone": "+1-156-827-4942",
        "email": "tbanks156@apicnet.com",
        "socMedia": null
    },
    "login": {
        "username": "tbanks",
        "oauth2": null,
        "password": "$2y$10$NE.3YRJDXkgqJa2rjcTvOudHvOOXGDlc36tpgaToiBSObD.AC0H\/q"
    },
    "otherContact": {
        "emails": [
            "tbanks@orstom.net"
        ],
        "phoneNumbers": [
            "+1-252-017-0346"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-10-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "BOYDSCHM9225",
    "businessName": "Fat Cats Associates Ltd",
    "revenueSplit": 0.26,
    "acctBalance": 525015.08,
    "name": {
        "title": "Mr",
        "first": "Boyd",
        "middle": "U",
        "last": "Schmidt",
        "suffix": null
    },
    "address": {
        "streetAddress": "9384 Big Gulch Drive",
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
        "phone": "+47-157-006-9225",
        "email": "bschmidt157@bt.com",
        "socMedia": null
    },
    "login": {
        "username": "bschmidt",
        "oauth2": null,
        "password": "$2y$10$VjXMcZpWHDV2226004zjxetzLvI2jGjjsQbCuOHPNHVbqw0uQzNhG"
    },
    "otherContact": {
        "emails": [
            "bschmidt@tm.net",
            "bschmidt@verizon.net"
        ],
        "phoneNumbers": [
            "+47-399-045-1049"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1964-04-06"
    }
});
db.partners.insertOne(
{
    "partnerKey": "INESRAY3819",
    "businessName": "Serious Associates Ltd",
    "revenueSplit": 0.18,
    "acctBalance": 711314.04,
    "name": {
        "title": "Ms",
        "first": "Ines",
        "middle": "N",
        "last": "Ray",
        "suffix": null
    },
    "address": {
        "streetAddress": "9104 Long Ditch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Auldana",
        "stateProvince": "SA",
        "locality": "SA SUBS NEAR 2",
        "country": "AU",
        "postalCode": "5072",
        "latitude": "-34.918",
        "longitude": "138.6869"
    },
    "contact": {
        "phone": "+61-158-754-3819",
        "email": "iray158@belgacom.com",
        "socMedia": null
    },
    "login": {
        "username": "iray",
        "oauth2": null,
        "password": "$2y$10$b9AHP6L3RMtzgkgo8N.so.6St4IiPetabf4zWIzAufgMIlM0dG7gC"
    },
    "otherContact": {
        "emails": [
            "iray@telesystems.net",
            "iray@centurylink.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-09-11"
    }
});
db.partners.insertOne(
{
    "partnerKey": "AMBRMALD5007",
    "businessName": "Serious Trust Ltd",
    "revenueSplit": 0.4,
    "acctBalance": 856316.15,
    "name": {
        "title": null,
        "first": "Ambrose",
        "middle": null,
        "last": "Maldonado",
        "suffix": null
    },
    "address": {
        "streetAddress": "1432 Red Mound Ride",
        "buildingName": null,
        "floor": 15,
        "roomAptCondoFlat": null,
        "city": "Le Tampon",
        "stateProvince": "RE",
        "locality": "R\u00e9union",
        "country": "RE",
        "postalCode": "97837 CEDEX",
        "latitude": "-21.2831",
        "longitude": "55.518"
    },
    "contact": {
        "phone": "+262-159-260-5007",
        "email": "amaldona159@telstra.com",
        "socMedia": null
    },
    "login": {
        "username": "amaldona",
        "oauth2": null,
        "password": "$2y$10$19evea\/Vl2xGrQQfErlxvuFW42TylyZGBdwo3Vyl2OH6kLY67mXSC"
    },
    "otherContact": {
        "emails": [
            "amaldona@safaricom.net",
            "amaldona@ccs.net",
            "amaldona@ntt.net"
        ],
        "phoneNumbers": [
            "+262-869-678-9471",
            "+262-493-329-5446"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-12-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "FABIMOOR4537",
    "businessName": "Friendly Business Inc",
    "revenueSplit": 0.11,
    "acctBalance": 813102.97,
    "name": {
        "title": "Ms",
        "first": "Fabian",
        "middle": "T",
        "last": "Moore",
        "suffix": null
    },
    "address": {
        "streetAddress": "8637 Blue Gully Way",
        "buildingName": null,
        "floor": 2,
        "roomAptCondoFlat": null,
        "city": "Dawesley",
        "stateProvince": "SA",
        "locality": "South Australia",
        "country": "AU",
        "postalCode": "5252",
        "latitude": "-35.0419",
        "longitude": "138.9535"
    },
    "contact": {
        "phone": "+61-160-846-4537",
        "email": "fmoore160@orange.com",
        "socMedia": {
            "linkedin": "fmoore@linkedin.com"
        }
    },
    "login": {
        "username": "fmoore",
        "oauth2": "fmoore@linkedin.com",
        "password": "$2y$10$FShz8vMIwZ.0tglbm6OR1OP3v04dJkO9Oo10yGQdhmPEeBYIZ3xya"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-187-892-5520",
            "+61-488-153-0857"
        ],
        "socMedias": {
            "facebook": "fmoore@facebook.com",
            "skype": "fmoore@skype.com"
        }
    },
    "otherInfo": {
        "gender": "X",
        "dateOfBirth": "1968-12-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "GABRHILL2253",
    "businessName": "Fat Cats Business Ltd",
    "revenueSplit": 0.04,
    "acctBalance": 735849.9400000001,
    "name": {
        "title": "Ms",
        "first": "Gabrielle",
        "middle": "N",
        "last": "Hill",
        "suffix": null
    },
    "address": {
        "streetAddress": "2841 Big Hill Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Patreksfir\u00f0i",
        "stateProvince": null,
        "locality": null,
        "country": "IS",
        "postalCode": "450",
        "latitude": "65.5978",
        "longitude": "-23.996"
    },
    "contact": {
        "phone": "+354-161-985-2253",
        "email": "ghill161@tata.com",
        "socMedia": null
    },
    "login": {
        "username": "ghill",
        "oauth2": null,
        "password": "$2y$10$98kENRIemwMa86\/ovDNXeOwaOUWjqbB2OYpvXvEIlkInmuP5ZLZdO"
    },
    "otherContact": {
        "emails": [
            "ghill@vodafone.net"
        ],
        "phoneNumbers": [
            "+354-819-049-3293"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2000-08-21"
    }
});
db.partners.insertOne(
{
    "partnerKey": "JIMHENS7014",
    "businessName": "Serious Industries Inc",
    "revenueSplit": 0.05,
    "acctBalance": 338096.61,
    "name": {
        "title": null,
        "first": "Jim",
        "middle": null,
        "last": "Hensley",
        "suffix": null
    },
    "address": {
        "streetAddress": "5760 Red Creek Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "St. Martins",
        "stateProvince": "NB",
        "locality": "New Brunswick",
        "country": "CA",
        "postalCode": "E5R",
        "latitude": "45.351",
        "longitude": "-65.5457"
    },
    "contact": {
        "phone": "+1-162-906-7014",
        "email": "jhensley162@airtel.com",
        "socMedia": null
    },
    "login": {
        "username": "jhensley",
        "oauth2": null,
        "password": "$2y$10$XNHHuuVPVPXNis.N8PyBDOEQ88lcY.GGwsvSbadyh97UHv3Xdscf."
    },
    "otherContact": {
        "emails": [
            "jhensley@worldnet.net"
        ],
        "phoneNumbers": [
            "+1-746-121-2712",
            "+1-809-408-4034"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2001-09-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DEBRBRAD1578",
    "businessName": "Serious Industries LLC",
    "revenueSplit": 0.49,
    "acctBalance": 373256.53,
    "name": {
        "title": "Ms",
        "first": "Debroah",
        "middle": "M",
        "last": "Bradford",
        "suffix": null
    },
    "address": {
        "streetAddress": "9957 Little Ridge Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Alaincourt",
        "stateProvince": "Arrondissement de Saint-Quentin",
        "locality": "Aisne",
        "country": "FR",
        "postalCode": "02240",
        "latitude": "49.7655",
        "longitude": "3.3764"
    },
    "contact": {
        "phone": "+33-163-617-1578",
        "email": "dbradfor163@ote.com",
        "socMedia": null
    },
    "login": {
        "username": "dbradfor",
        "oauth2": null,
        "password": "$2y$10$BoPchtB99PEOsYnmLNAJz.uYuRtd7SNCzfs7vIuwtA7fjuvaH0UfC"
    },
    "otherContact": {
        "emails": [
            "dbradfor@telekom.net",
            "dbradfor@ptcl.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1945-08-23"
    }
});
db.partners.insertOne(
{
    "partnerKey": "IVANOCON1332",
    "businessName": "Friendly Business Company",
    "revenueSplit": 0.38,
    "acctBalance": 882336.49,
    "name": {
        "title": "Mr",
        "first": "Ivan",
        "middle": "W",
        "last": "Oconnor",
        "suffix": null
    },
    "address": {
        "streetAddress": "9378 Long Woods Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Anton's Gowt",
        "stateProvince": "England",
        "locality": "Lincolnshire",
        "country": "GB",
        "postalCode": "PE22",
        "latitude": "53.0613",
        "longitude": "0.0142"
    },
    "contact": {
        "phone": "+44-164-048-1332",
        "email": "ioconnor164@bifty.com",
        "socMedia": null
    },
    "login": {
        "username": "ioconnor",
        "oauth2": null,
        "password": "$2y$10$ZUSk\/ID3m4v7ClScEjC.xOcdlmZn9cjsSuUEQU4\/vXrCQCeizZaUS"
    },
    "otherContact": {
        "emails": [
            "ioconnor@bifty.net"
        ],
        "phoneNumbers": [
            "+44-159-495-7245"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1992-01-17"
    }
});
db.partners.insertOne(
{
    "partnerKey": "GWYNMORR1513",
    "businessName": "Serious Associates Company",
    "revenueSplit": 0.08,
    "acctBalance": 178148.16,
    "name": {
        "title": null,
        "first": "Gwyn",
        "middle": null,
        "last": "Morris",
        "suffix": null
    },
    "address": {
        "streetAddress": "5410 Green Bend Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "41",
        "city": "Oslo",
        "stateProvince": "Oslo",
        "locality": "Oslo",
        "country": "NO",
        "postalCode": "0682",
        "latitude": "59.9127",
        "longitude": "10.7461"
    },
    "contact": {
        "phone": "+47-165-028-1513",
        "email": "gmorris165@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "gmorris",
        "oauth2": null,
        "password": "$2y$10$d942p1MCju\/nFnbQXBIFO.No4J48x71pQ5HkeE3rwkTo7XOechfaW"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+47-945-640-6437"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1936-05-30"
    }
});
db.partners.insertOne(
{
    "partnerKey": "EMILMCGU0885",
    "businessName": "Fat Cats Associates LLC",
    "revenueSplit": 0.45,
    "acctBalance": 755778.65,
    "name": {
        "title": "Mr",
        "first": "Emil",
        "middle": "X",
        "last": "Mcguire",
        "suffix": null
    },
    "address": {
        "streetAddress": "9100 Big Bend Boulevard",
        "buildingName": null,
        "floor": 5,
        "roomAptCondoFlat": null,
        "city": "Sherborne St John",
        "stateProvince": "England",
        "locality": "Hampshire",
        "country": "GB",
        "postalCode": "RG24",
        "latitude": "51.2971",
        "longitude": "-1.1139"
    },
    "contact": {
        "phone": "+44-166-753-0885",
        "email": "emcguire166@eunet.com",
        "socMedia": null
    },
    "login": {
        "username": "emcguire",
        "oauth2": null,
        "password": "$2y$10$rRe0n2l66XZPf1KFbzVSpuPS5AJAjS6yTwCWZHDHr4N4M3hZ6sQkS"
    },
    "otherContact": {
        "emails": [
            "emcguire@mtn.net",
            "emcguire@telesystems.net",
            "emcguire@millicom.net"
        ],
        "phoneNumbers": [
            "+44-402-625-0799",
            "+44-350-109-3223",
            "+44-811-903-8890"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1999-08-24"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DENNDOYL1278",
    "businessName": "Fat Cats Industries Company",
    "revenueSplit": 0.1,
    "acctBalance": 806506.2000000001,
    "name": {
        "title": "Ms",
        "first": "Dennis",
        "middle": "G",
        "last": "Doyle",
        "suffix": null
    },
    "address": {
        "streetAddress": "644 Winding Canyon Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "CABANAS",
        "stateProvince": "DEPTO DE ZACAPA",
        "locality": "DEPTO DE ZACAPA",
        "country": "GT",
        "postalCode": "19007",
        "latitude": "14.9333",
        "longitude": "-89.8"
    },
    "contact": {
        "phone": "+502-167-436-1278",
        "email": "ddoyle167@turkcell.com",
        "socMedia": null
    },
    "login": {
        "username": "ddoyle",
        "oauth2": null,
        "password": "$2y$10$IedRQtHcDTjyF.tDP9eDEOvQO6Hli0.SrhaJj6ev2xNibGeg50E0S"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+502-191-105-6303"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1950-07-16"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DANICHAS6840",
    "businessName": "Serious Trust Company",
    "revenueSplit": 0.4,
    "acctBalance": 968707.84,
    "name": {
        "title": null,
        "first": "Daniel",
        "middle": null,
        "last": "Chase",
        "suffix": null
    },
    "address": {
        "streetAddress": "7635 Little Woods Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Inyokern",
        "stateProvince": "CA",
        "locality": "Kern",
        "country": "US",
        "postalCode": "93527",
        "latitude": "35.6397",
        "longitude": "-117.857"
    },
    "contact": {
        "phone": "+1-168-731-6840",
        "email": "dchase168@algonet.com",
        "socMedia": null
    },
    "login": {
        "username": "dchase",
        "oauth2": null,
        "password": "$2y$10$bpweaeMblj2xSmJm5iTkseiTNJ9svxS3YN2AIND9d6Ywo3ZA5qDMC"
    },
    "otherContact": {
        "emails": [
            "dchase@ktc.net"
        ],
        "phoneNumbers": [
            "+1-566-015-1515"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-07-13"
    }
});
db.partners.insertOne(
{
    "partnerKey": "REINTORR6281",
    "businessName": "Friendly Trust LLC",
    "revenueSplit": 0.23,
    "acctBalance": 789092.98,
    "name": {
        "title": "Mr",
        "first": "Reinaldo",
        "middle": "W",
        "last": "Torres",
        "suffix": null
    },
    "address": {
        "streetAddress": "7739 Short Stream Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Langasandur",
        "stateProvince": null,
        "locality": null,
        "country": "FO",
        "postalCode": "438",
        "latitude": "62.2333",
        "longitude": "-7.0333"
    },
    "contact": {
        "phone": "+298-169-889-6281",
        "email": "rtorres169@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "rtorres",
        "oauth2": null,
        "password": "$2y$10$rguPLSAEN6WdJuT5lAuHU.O5q8nZDMlyHKbAuuzQLWFAyfnu3gbg6"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+298-612-628-1178",
            "+298-495-174-6209"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1982-08-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "TRANMARS1193",
    "businessName": "Fat Cats Trust Inc",
    "revenueSplit": 0.42,
    "acctBalance": 31277.21,
    "name": {
        "title": "Ms",
        "first": "Tran",
        "middle": "P",
        "last": "Marshall",
        "suffix": null
    },
    "address": {
        "streetAddress": "1786 Big Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Obum Obum",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4309",
        "latitude": "-27.9158",
        "longitude": "152.652"
    },
    "contact": {
        "phone": "+61-170-422-1193",
        "email": "tmarshal170@centurylink.com",
        "socMedia": {
            "facebook": "tmarshal@facebook.com"
        }
    },
    "login": {
        "username": "tmarshal",
        "oauth2": "tmarshal@facebook.com",
        "password": "$2y$10$n2DQDYbUpPpQ7I3HqAg8HeMG8U9fshaLpF84R.to5wstXhvSCEEqG"
    },
    "otherContact": {
        "emails": [
            "tmarshal@maxcomm.net",
            "tmarshal@etisalat.net"
        ],
        "phoneNumbers": [
            "+61-216-875-4800"
        ],
        "socMedias": {
            "google": "tmarshal@google.com",
            "facebook": "tmarshal@facebook.com",
            "skype": "tmarshal@skype.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1965-02-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SCOTWHEE3888",
    "businessName": "Fat Cats Business Inc",
    "revenueSplit": 0.46,
    "acctBalance": 175341.21,
    "name": {
        "title": null,
        "first": "Scott",
        "middle": null,
        "last": "Wheeler",
        "suffix": null
    },
    "address": {
        "streetAddress": "3354 Red Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Maxov",
        "stateProvince": "Doma\u017elice",
        "locality": "Doma\u017elice",
        "country": "CZ",
        "postalCode": "344 01",
        "latitude": "49.35",
        "longitude": "12.9333"
    },
    "contact": {
        "phone": "+420-171-608-3888",
        "email": "swheeler171@tt.com",
        "socMedia": null
    },
    "login": {
        "username": "swheeler",
        "oauth2": null,
        "password": "$2y$10$JwYfXiHsN7tXQWtMyfrxH.M1D53dagxK5kPGGxXBu\/Lcan24k8KX."
    },
    "otherContact": {
        "emails": [
            "swheeler@verizon.net"
        ],
        "phoneNumbers": [
            "+420-933-449-5316"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1994-06-20"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ILDAKOCH3869",
    "businessName": "Industrious Industries Ltd",
    "revenueSplit": 0.15,
    "acctBalance": 585910.52,
    "name": {
        "title": "Ms",
        "first": "Ilda",
        "middle": "L",
        "last": "Koch",
        "suffix": null
    },
    "address": {
        "streetAddress": "532 Winding Hill Road",
        "buildingName": null,
        "floor": 14,
        "roomAptCondoFlat": null,
        "city": "Petford",
        "stateProvince": "QLD",
        "locality": "Queensland",
        "country": "AU",
        "postalCode": "4871",
        "latitude": "-17.35",
        "longitude": "144.9333"
    },
    "contact": {
        "phone": "+61-172-874-3869",
        "email": "ikoch172@sktelecom.com",
        "socMedia": null
    },
    "login": {
        "username": "ikoch",
        "oauth2": null,
        "password": "$2y$10$6ag0t30tAOcht1veCDQ1Du\/lxr7Vu9sDXXebV74mJr3G.duvfkX4i"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1992-04-21"
    }
});
db.partners.insertOne(
{
    "partnerKey": "TANAHERM4251",
    "businessName": "Industrious Associates LLC",
    "revenueSplit": 0.12,
    "acctBalance": 807926.66,
    "name": {
        "title": "Ms",
        "first": "Tana",
        "middle": "K",
        "last": "Herman",
        "suffix": null
    },
    "address": {
        "streetAddress": "7718 Blue Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Barrigada",
        "stateProvince": "Guam",
        "locality": "Guam",
        "country": "GU",
        "postalCode": "96921",
        "latitude": "13.4593",
        "longitude": "144.7942"
    },
    "contact": {
        "phone": "+1671-173-091-4251",
        "email": "therman173@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "therman",
        "oauth2": null,
        "password": "$2y$10$B7dm3c0Y2Md.izi1T1YnMOh181psSPm\/uHxIsQlCGMUlCK57WHJIO"
    },
    "otherContact": {
        "emails": [
            "therman@vimpelcom.net"
        ],
        "phoneNumbers": [
            "+1671-325-271-8711"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1953-11-29"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MAGDRIVE0071",
    "businessName": "Friendly Industries Company",
    "revenueSplit": 0.31,
    "acctBalance": 82532.71,
    "name": {
        "title": null,
        "first": "Magda",
        "middle": null,
        "last": "Rivera",
        "suffix": null
    },
    "address": {
        "streetAddress": "606 Little Canyon Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Khapa Bazar",
        "stateProvince": "Keolari",
        "locality": "Seoni",
        "country": "IN",
        "postalCode": "480991",
        "latitude": "22.493",
        "longitude": "79.5589"
    },
    "contact": {
        "phone": "+91-174-925-0071",
        "email": "mrivera174@telecomitalia.com",
        "socMedia": null
    },
    "login": {
        "username": "mrivera",
        "oauth2": null,
        "password": "$2y$10$o0XF5xotHCkIlB\/4QqENhOEQw4gvgScuivHFXLRPAmG0GwEP4rKhe"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2003-06-30"
    }
});
db.partners.insertOne(
{
    "partnerKey": "XAVICLAY8691",
    "businessName": "Fat Cats Business Inc",
    "revenueSplit": 0.37,
    "acctBalance": 675402.93,
    "name": {
        "title": "Mr",
        "first": "Xavier",
        "middle": "I",
        "last": "Clay",
        "suffix": null
    },
    "address": {
        "streetAddress": "9978 Big Mound Circle",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Manton",
        "stateProvince": "NSW",
        "locality": "New South Wales",
        "country": "AU",
        "postalCode": "2582",
        "latitude": "-34.7363",
        "longitude": "148.8274"
    },
    "contact": {
        "phone": "+61-175-555-8691",
        "email": "xclay175@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "xclay",
        "oauth2": null,
        "password": "$2y$10$oyIgP9PbiR91qhAtCCOTh.3fk9tvfBRsXtgYCOJYVpQDQlVvM7rtq"
    },
    "otherContact": {
        "emails": [
            "xclay@ptcl.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-08-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LAVEHOWE7023",
    "businessName": "Fat Cats Associates Ltd",
    "revenueSplit": 0.34,
    "acctBalance": 12285.79,
    "name": {
        "title": "Mr",
        "first": "Laverne",
        "middle": "R",
        "last": "Howell",
        "suffix": null
    },
    "address": {
        "streetAddress": "8512 Winding Woods Boulevard",
        "buildingName": null,
        "floor": 20,
        "roomAptCondoFlat": null,
        "city": "Mount Hicks",
        "stateProvince": "TAS",
        "locality": "TASMANIA",
        "country": "AU",
        "postalCode": "7325",
        "latitude": "-41.0949",
        "longitude": "145.6115"
    },
    "contact": {
        "phone": "+61-176-435-7023",
        "email": "lhowell176@uunet.com",
        "socMedia": null
    },
    "login": {
        "username": "lhowell",
        "oauth2": null,
        "password": "$2y$10$FEfVFDghsR7IvoFBArQnFOy2209sUg58b54l01uf5X6fmNFZhNdG."
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+61-969-453-0963",
            "+61-252-014-8432"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "2002-05-26"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DALTHO4428",
    "businessName": "Fat Cats Associates LLC",
    "revenueSplit": 0.06,
    "acctBalance": 22111.11,
    "name": {
        "title": null,
        "first": "Dalton",
        "middle": null,
        "last": "Ho",
        "suffix": null
    },
    "address": {
        "streetAddress": "5593 Short Gulch Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "6E",
        "city": "Berlev\u00e5g",
        "stateProvince": "Berlev\u00e5g",
        "locality": "Berlev\u00e5g",
        "country": "NO",
        "postalCode": "9980",
        "latitude": "70.8578",
        "longitude": "29.0864"
    },
    "contact": {
        "phone": "+47-177-869-4428",
        "email": "dho177@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "dho",
        "oauth2": null,
        "password": "$2y$10$rGJ.KNe1nxUOsVoJtqDCb.tSFJnkj5Ej1apJtyGolLhnCRAWx3Udu"
    },
    "otherContact": {
        "emails": [
            "dho@vodafone.net",
            "dho@tm.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1997-06-25"
    }
});
db.partners.insertOne(
{
    "partnerKey": "RAFACROS7519",
    "businessName": "Serious Associates Ltd",
    "revenueSplit": 0.2,
    "acctBalance": 797971.53,
    "name": {
        "title": "Ms",
        "first": "Rafaela",
        "middle": "E",
        "last": "Crosby",
        "suffix": null
    },
    "address": {
        "streetAddress": "8092 Big Creek Ride",
        "buildingName": "Building 04",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Patratu Tps",
        "stateProvince": "Patratu",
        "locality": "Ramgarh",
        "country": "IN",
        "postalCode": "829119",
        "latitude": "24.4228",
        "longitude": "85.6799"
    },
    "contact": {
        "phone": "+91-178-860-7519",
        "email": "rcrosby178@frontier.com",
        "socMedia": null
    },
    "login": {
        "username": "rcrosby",
        "oauth2": null,
        "password": "$2y$10$.064Abx1.b0COi7ZmbNcMOsqYaZC\/MJtG.EhJiF.lZqSwXxaeAUWe"
    },
    "otherContact": {
        "emails": [
            "rcrosby@ais.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1946-09-17"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SHERSCHA0071",
    "businessName": "Serious Industries Company",
    "revenueSplit": 0.3,
    "acctBalance": 822301.63,
    "name": {
        "title": "Mr",
        "first": "Sherman",
        "middle": "E",
        "last": "Schaefer",
        "suffix": null
    },
    "address": {
        "streetAddress": "1665 Little Bough Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Mangattidam",
        "stateProvince": "Thalassery",
        "locality": "Kannur",
        "country": "IN",
        "postalCode": "670643",
        "latitude": "11.8408",
        "longitude": "75.6093"
    },
    "contact": {
        "phone": "+91-179-603-0071",
        "email": "sschaefe179@netcom.com",
        "socMedia": null
    },
    "login": {
        "username": "sschaefe",
        "oauth2": null,
        "password": "$2y$10$py.S3E2cUM1aU3WAbLAS0eAo2AZZiFhCf.AA5.0K.FvyirTJsMWem"
    },
    "otherContact": {
        "emails": [
            "sschaefe@bifty.net",
            "sschaefe@ooredoo.net",
            "sschaefe@econnect.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1941-09-26"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CHANGIBB1304",
    "businessName": "Industrious Trust Ltd",
    "revenueSplit": 0.16,
    "acctBalance": 989595.79,
    "name": {
        "title": null,
        "first": "Chantay",
        "middle": null,
        "last": "Gibbs",
        "suffix": null
    },
    "address": {
        "streetAddress": "1189 Winding Ridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Cambridge East",
        "stateProvince": "ON",
        "locality": "Cambridge",
        "country": "CA",
        "postalCode": "N1T",
        "latitude": "43.3849",
        "longitude": "-80.2833"
    },
    "contact": {
        "phone": "+1-180-173-1304",
        "email": "cgibbs180@bce.com",
        "socMedia": {
            "facebook": "cgibbs@facebook.com"
        }
    },
    "login": {
        "username": "cgibbs",
        "oauth2": "cgibbs@facebook.com",
        "password": "$2y$10$Kp2W7\/ImahI8mamsvjtfN.KvcloIACAgt8c\/iG4J6k.SalqGNpzam"
    },
    "otherContact": {
        "emails": [
            "cgibbs@greennet.net"
        ],
        "phoneNumbers": [
            "+1-792-978-3369",
            "+1-503-746-6557"
        ],
        "socMedias": {
            "facebook": "cgibbs@facebook.com",
            "line": "cgibbs@line.com",
            "linkedin": "cgibbs@linkedin.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1961-02-14"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CHANHEAT8598",
    "businessName": "Serious Industries Company",
    "revenueSplit": 0.14,
    "acctBalance": 300103.09,
    "name": {
        "title": "Mr",
        "first": "Chance",
        "middle": "B",
        "last": "Heath",
        "suffix": null
    },
    "address": {
        "streetAddress": "3465 Red Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Ittoqqortoormiit",
        "stateProvince": null,
        "locality": null,
        "country": "GL",
        "postalCode": "3980",
        "latitude": "70.4846",
        "longitude": "-21.9622"
    },
    "contact": {
        "phone": "+299-181-852-8598",
        "email": "cheath181@jio.com",
        "socMedia": null
    },
    "login": {
        "username": "cheath",
        "oauth2": null,
        "password": "$2y$10$97N1.bFMYTY\/EOF6e1OZmu6cJzTfXuRySYafPqUbLgEbKQN4ZX21m"
    },
    "otherContact": {
        "emails": [
            "cheath@vivendi.net",
            "cheath@seednet.net"
        ],
        "phoneNumbers": [
            "+299-257-266-7399",
            "+299-701-740-1565"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1949-10-30"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DELMENRI7429",
    "businessName": "Serious Trust Ltd",
    "revenueSplit": 0.06,
    "acctBalance": 702091.63,
    "name": {
        "title": "Mr",
        "first": "Delmer",
        "middle": "W",
        "last": "Enriquez",
        "suffix": null
    },
    "address": {
        "streetAddress": "6681 Red Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "San Tan Valley",
        "stateProvince": "AZ",
        "locality": "Pinal",
        "country": "US",
        "postalCode": "85143",
        "latitude": "33.1911",
        "longitude": "-111.528"
    },
    "contact": {
        "phone": "+1-182-068-7429",
        "email": "denrique182@oi.com",
        "socMedia": null
    },
    "login": {
        "username": "denrique",
        "oauth2": null,
        "password": "$2y$10$UT\/DwV33lHnlvhHFtca8Le0PPfrSBeBa5tkfHz5d75tWlVgkhnPwS"
    },
    "otherContact": {
        "emails": [
            "denrique@vodafone.net"
        ],
        "phoneNumbers": [
            "+1-14-354-6116"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1987-09-11"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LORESALG4975",
    "businessName": "Fat Cats Trust LLC",
    "revenueSplit": 0.07,
    "acctBalance": 353857.46,
    "name": {
        "title": null,
        "first": "Loren",
        "middle": null,
        "last": "Salgado",
        "suffix": null
    },
    "address": {
        "streetAddress": "2325 Big Hill Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "SAN LORENZO (HUEHUETENANGO)",
        "stateProvince": "DEPTO DE HUEHUETENANGO",
        "locality": "DEPTO DE HUEHUETENANGO",
        "country": "GT",
        "postalCode": "13033",
        "latitude": "15.2894",
        "longitude": "-91.4603"
    },
    "contact": {
        "phone": "+502-183-725-4975",
        "email": "lsalgado183@vivendi.com",
        "socMedia": null
    },
    "login": {
        "username": "lsalgado",
        "oauth2": null,
        "password": "$2y$10$r3lL0dyNh3qDQbi3Fa9lrensmjLWvP9u8.CgbmAK9TrnqLgm4vbhS"
    },
    "otherContact": {
        "emails": [
            "lsalgado@icom.net",
            "lsalgado@tata.net"
        ],
        "phoneNumbers": [
            "+502-527-720-9552",
            "+502-438-239-1859"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-03-02"
    }
});
db.partners.insertOne(
{
    "partnerKey": "HARRMEAD5746",
    "businessName": "Fat Cats Industries Ltd",
    "revenueSplit": 0.23,
    "acctBalance": 69499.95,
    "name": {
        "title": "Ms",
        "first": "Harriet",
        "middle": "W",
        "last": "Meadows",
        "suffix": null
    },
    "address": {
        "streetAddress": "7938 Long Tree Boulevard",
        "buildingName": null,
        "floor": 18,
        "roomAptCondoFlat": null,
        "city": "Sikandarpur Bazha",
        "stateProvince": "Karchhana",
        "locality": "Allahabad",
        "country": "IN",
        "postalCode": "212213",
        "latitude": "25.5157",
        "longitude": "81.6236"
    },
    "contact": {
        "phone": "+91-184-935-5746",
        "email": "hmeadows184@cerist.com",
        "socMedia": null
    },
    "login": {
        "username": "hmeadows",
        "oauth2": null,
        "password": "$2y$10$K\/F9yHb.96rRtMq8L\/I6Ierx.3n3D2XOzjaiYtfrpnSPN\/0sbHgma"
    },
    "otherContact": {
        "emails": [
            "hmeadows@vimpelcom.net"
        ],
        "phoneNumbers": [
            "+91-367-433-0356"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1987-01-14"
    }
});
db.partners.insertOne(
{
    "partnerKey": "KIMBSTRO8755",
    "businessName": "Serious Business Inc",
    "revenueSplit": 0.19,
    "acctBalance": 565896.36,
    "name": {
        "title": "Ms",
        "first": "Kimberely",
        "middle": "G",
        "last": "Strong",
        "suffix": null
    },
    "address": {
        "streetAddress": "4346 Big Hill Street",
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
        "phone": "+377-185-146-8755",
        "email": "kstrong185@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "kstrong",
        "oauth2": null,
        "password": "$2y$10$sQARndV8n0\/OPPX7g78yWeUyBm.szrp0FAG3RLriN\/GDgzqmjNOCS"
    },
    "otherContact": {
        "emails": [
            "kstrong@zain.net"
        ],
        "phoneNumbers": [
            "+377-394-856-6457"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1957-03-09"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CHANRICE4491",
    "businessName": "Fat Cats Business Inc",
    "revenueSplit": 0.27,
    "acctBalance": 256283.59,
    "name": {
        "title": null,
        "first": "Chang",
        "middle": null,
        "last": "Rice",
        "suffix": null
    },
    "address": {
        "streetAddress": "2135 Short Bough Way",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Dinero",
        "stateProvince": "TX",
        "locality": "Live Oak",
        "country": "US",
        "postalCode": "78350",
        "latitude": "28.2264",
        "longitude": "-97.9617"
    },
    "contact": {
        "phone": "+1-186-143-4491",
        "email": "crice186@icom.com",
        "socMedia": null
    },
    "login": {
        "username": "crice",
        "oauth2": null,
        "password": "$2y$10$eBosOKMfNOLqfxo2QwrEx.dCCzxy8UM5GKj9QBOF66wpHSLCmwj\/m"
    },
    "otherContact": {
        "emails": [
            "crice@lguplus.net"
        ],
        "phoneNumbers": [
            "+1-999-455-0473",
            "+1-894-160-2267",
            "+1-738-987-8323"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1965-12-17"
    }
});
db.partners.insertOne(
{
    "partnerKey": "CALVFARR7317",
    "businessName": "Fat Cats Associates Company",
    "revenueSplit": 0.27,
    "acctBalance": 896905.43,
    "name": {
        "title": "Mr",
        "first": "Calvin",
        "middle": "J",
        "last": "Farrell",
        "suffix": null
    },
    "address": {
        "streetAddress": "8279 Long Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "C7",
        "city": "Les Abymes",
        "stateProvince": "GP",
        "locality": "Guadeloupe",
        "country": "GP",
        "postalCode": "97177 CEDEX",
        "latitude": "16.271",
        "longitude": "-61.5045"
    },
    "contact": {
        "phone": "+590-187-234-7317",
        "email": "cfarrell187@rogers.com",
        "socMedia": null
    },
    "login": {
        "username": "cfarrell",
        "oauth2": null,
        "password": "$2y$10$Zt9R7b0\/maY.DmMgqV5B0.RKl7Y1ldU2duQHaTtMVXkcIC.uLt5XK"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+590-460-086-7017"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1961-06-03"
    }
});
db.partners.insertOne(
{
    "partnerKey": "NOELLI4687",
    "businessName": "Serious Associates Ltd",
    "revenueSplit": 0.38,
    "acctBalance": 761870.9500000001,
    "name": {
        "title": "Mr",
        "first": "Noel",
        "middle": "O",
        "last": "Li",
        "suffix": null
    },
    "address": {
        "streetAddress": "7811 Green Bridge Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "73",
        "city": "Hammond",
        "stateProvince": "LA",
        "locality": "Tangipahoa",
        "country": "US",
        "postalCode": "70404",
        "latitude": "30.5046",
        "longitude": "-90.4629"
    },
    "contact": {
        "phone": "+1-188-713-4687",
        "email": "nli188@orange.com",
        "socMedia": null
    },
    "login": {
        "username": "nli",
        "oauth2": null,
        "password": "$2y$10$oWzS5JzUFemH2GfMi5a9gOLcOU2GQDqR8\/j69.KtsuuV7ANpmQp5i"
    },
    "otherContact": {
        "emails": [
            "nli@telus.net"
        ],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1939-07-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LATRBELL7391",
    "businessName": "Friendly Trust Ltd",
    "revenueSplit": 0.43,
    "acctBalance": 817886.46,
    "name": {
        "title": "Ms",
        "first": "Latrice",
        "middle": "T",
        "last": "Bell",
        "suffix": null
    },
    "address": {
        "streetAddress": "365 Blue Gully Street",
        "buildingName": "Building 40",
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Llanybydder",
        "stateProvince": "Wales",
        "locality": "Carmarthenshire",
        "country": "GB",
        "postalCode": "SA40",
        "latitude": "52.0748",
        "longitude": "-4.1576"
    },
    "contact": {
        "phone": "+44-190-977-7391",
        "email": "lbell190@relcom.com",
        "socMedia": {
            "linkedin": "lbell@linkedin.com"
        }
    },
    "login": {
        "username": "lbell",
        "oauth2": "lbell@linkedin.com",
        "password": "$2y$10$xrb8ZtzHbbUNUN9kbC4.j.CV3CsqchN7316aJyV5RwiwdTkr4YiJm"
    },
    "otherContact": {
        "emails": [
            "lbell@belgacom.net",
            "lbell@telenor.net"
        ],
        "phoneNumbers": [],
        "socMedias": {
            "facebook": "lbell@facebook.com",
            "line": "lbell@line.com"
        }
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1981-04-19"
    }
});
db.partners.insertOne(
{
    "partnerKey": "RALPDRAK9628",
    "businessName": "Industrious Business Company",
    "revenueSplit": 0.44,
    "acctBalance": 97143.46,
    "name": {
        "title": "Mr",
        "first": "Ralph",
        "middle": "W",
        "last": "Drake",
        "suffix": null
    },
    "address": {
        "streetAddress": "4257 Blue Stream Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Yap",
        "stateProvince": "State of Yap",
        "locality": "State of Yap",
        "country": "FM",
        "postalCode": "96943",
        "latitude": "7.1383",
        "longitude": "151.5031"
    },
    "contact": {
        "phone": "+691-191-265-9628",
        "email": "rdrake191@att.com",
        "socMedia": null
    },
    "login": {
        "username": "rdrake",
        "oauth2": null,
        "password": "$2y$10$e2u8HIJ2yMpy1oqQuaJUReURDQ46ImX8IsUu0CBBuc9rTCXtRLAKy"
    },
    "otherContact": {
        "emails": [
            "rdrake@lguplus.net",
            "rdrake@safaricom.net"
        ],
        "phoneNumbers": [
            "+691-24-268-4065"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1945-11-05"
    }
});
db.partners.insertOne(
{
    "partnerKey": "MORTWARR5267",
    "businessName": "Serious Industries Inc",
    "revenueSplit": 0.4,
    "acctBalance": 780921.25,
    "name": {
        "title": null,
        "first": "Morton",
        "middle": null,
        "last": "Warren",
        "suffix": null
    },
    "address": {
        "streetAddress": "858 Long Stream Street",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Scourie More",
        "stateProvince": "Scotland",
        "locality": "Highland",
        "country": "GB",
        "postalCode": "IV27",
        "latitude": "58.1966",
        "longitude": "-4.888"
    },
    "contact": {
        "phone": "+44-192-475-5267",
        "email": "mwarren192@telecom.com",
        "socMedia": null
    },
    "login": {
        "username": "mwarren",
        "oauth2": null,
        "password": "$2y$10$41.0G\/FuedJLQBwqr2qT0ulcnBYVuKtc7pInLWrwwx1mRKHisBhXq"
    },
    "otherContact": {
        "emails": [
            "mwarren@ccs.net",
            "mwarren@relcom.net"
        ],
        "phoneNumbers": [
            "+44-660-205-6590"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1944-02-12"
    }
});
db.partners.insertOne(
{
    "partnerKey": "TASIROWE3812",
    "businessName": "Serious Associates Ltd",
    "revenueSplit": 0.18,
    "acctBalance": 799918.65,
    "name": {
        "title": "Ms",
        "first": "Tasia",
        "middle": "Z",
        "last": "Rowe",
        "suffix": null
    },
    "address": {
        "streetAddress": "5158 Little Gulch Drive",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Colicauti",
        "stateProvince": "Briceni",
        "locality": "Briceni",
        "country": "MD",
        "postalCode": "MD-4719",
        "latitude": "48.3089",
        "longitude": "27.1539"
    },
    "contact": {
        "phone": "+373-193-213-3812",
        "email": "trowe193@telenor.com",
        "socMedia": null
    },
    "login": {
        "username": "trowe",
        "oauth2": null,
        "password": "$2y$10$NbODi0Zhw5a3g.ftO2ULz.\/tzBkIt4YuX5dVFzHkLMbOUNqaN7m3S"
    },
    "otherContact": {
        "emails": [
            "trowe@airtel.net",
            "trowe@nii.net"
        ],
        "phoneNumbers": [
            "+373-184-926-6393",
            "+373-51-610-8093"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1976-03-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "IDALHUMP6203",
    "businessName": "Fat Cats Associates Ltd",
    "revenueSplit": 0.18,
    "acctBalance": 869859.02,
    "name": {
        "title": "Ms",
        "first": "Idalia",
        "middle": "U",
        "last": "Humphrey",
        "suffix": null
    },
    "address": {
        "streetAddress": "1158 Big Mound Avenue",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "37",
        "city": "Columbus",
        "stateProvince": "GA",
        "locality": "Muscogee",
        "country": "US",
        "postalCode": "31998",
        "latitude": "32.491",
        "longitude": "-84.8741"
    },
    "contact": {
        "phone": "+1-194-117-6203",
        "email": "ihumphre194@seednet.com",
        "socMedia": null
    },
    "login": {
        "username": "ihumphre",
        "oauth2": null,
        "password": "$2y$10$O5YgXfy3uoDDfCPjiDFsaeYu2.x6eLYZwlCiEOjAz5JwEdOf\/zhbG"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [
            "+1-670-653-9744",
            "+1-760-491-9672"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1931-08-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "THOMSHEL0531",
    "businessName": "Fat Cats Associates Inc",
    "revenueSplit": 0.14,
    "acctBalance": 863470.17,
    "name": {
        "title": null,
        "first": "Thomasine",
        "middle": null,
        "last": "Shelton",
        "suffix": null
    },
    "address": {
        "streetAddress": "4524 Short Ditch Boulevard",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Wrzeczko",
        "stateProvince": "\u0141yszkowice",
        "locality": "powiat \u0141owicki",
        "country": "PL",
        "postalCode": "99-420",
        "latitude": "52.0041",
        "longitude": "19.9033"
    },
    "contact": {
        "phone": "+48-195-086-0531",
        "email": "tshelton195@lookdata.com",
        "socMedia": null
    },
    "login": {
        "username": "tshelton",
        "oauth2": null,
        "password": "$2y$10$avqSF5P\/ya8NozMdl6LN1ulOUxMB9NCVVyTSBJ42DnWr\/nz5zeC2q"
    },
    "otherContact": {
        "emails": [
            "tshelton@cerist.net",
            "tshelton@tm.net",
            "tshelton@centurylink.net"
        ],
        "phoneNumbers": [
            "+48-602-790-1314"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1968-01-01"
    }
});
db.partners.insertOne(
{
    "partnerKey": "ROLLWILK2932",
    "businessName": "Friendly Industries Ltd",
    "revenueSplit": 0.24,
    "acctBalance": 789679.6900000001,
    "name": {
        "title": "Mr",
        "first": "Rolland",
        "middle": "K",
        "last": "Wilkins",
        "suffix": null
    },
    "address": {
        "streetAddress": "1854 Winding Bend Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Prince County (Portage)",
        "stateProvince": "PE",
        "locality": "Prince County",
        "country": "CA",
        "postalCode": "C0B",
        "latitude": "46.6023",
        "longitude": "-63.9583"
    },
    "contact": {
        "phone": "+1-196-985-2932",
        "email": "rwilkins196@telesystems.com",
        "socMedia": null
    },
    "login": {
        "username": "rwilkins",
        "oauth2": null,
        "password": "$2y$10$lPX6c2Tg1Ctn96TbPWMC3OPZAMrJlvynvoLdWITwHLf\/WaX1Rn.Au"
    },
    "otherContact": {
        "emails": [
            "rwilkins@centurylink.net"
        ],
        "phoneNumbers": [
            "+1-946-300-8948"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1977-02-18"
    }
});
db.partners.insertOne(
{
    "partnerKey": "LISSNORR4243",
    "businessName": "Friendly Business Company",
    "revenueSplit": 0.02,
    "acctBalance": 308103.86,
    "name": {
        "title": "Ms",
        "first": "Lissette",
        "middle": "D",
        "last": "Norris",
        "suffix": null
    },
    "address": {
        "streetAddress": "3916 Winding Mound Ride",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": "BD",
        "city": "Rio Blanco",
        "stateProvince": "Naguabo",
        "locality": "Naguabo",
        "country": "PR",
        "postalCode": "00744",
        "latitude": "18.2183",
        "longitude": "-65.7885"
    },
    "contact": {
        "phone": "+1787-197-194-4243",
        "email": "lnorris197@relcom.com",
        "socMedia": null
    },
    "login": {
        "username": "lnorris",
        "oauth2": null,
        "password": "$2y$10$GefMqQ7ed0tBEZsjXTNmEe3ba4W425QfMRCtTfG16B2hFpaTgxvM."
    },
    "otherContact": {
        "emails": [
            "lnorris@relcom.net"
        ],
        "phoneNumbers": [
            "+1787-777-729-8822"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "1939-12-27"
    }
});
db.partners.insertOne(
{
    "partnerKey": "SIMOHARP5467",
    "businessName": "Friendly Associates Inc",
    "revenueSplit": 0.16,
    "acctBalance": 326953.01,
    "name": {
        "title": null,
        "first": "Simonne",
        "middle": null,
        "last": "Harper",
        "suffix": null
    },
    "address": {
        "streetAddress": "2117 Big Stream Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Westgate",
        "stateProvince": "England",
        "locality": "Norfolk",
        "country": "GB",
        "postalCode": "NR21",
        "latitude": "52.8403",
        "longitude": "0.8588"
    },
    "contact": {
        "phone": "+44-198-967-5467",
        "email": "sharper198@telus.com",
        "socMedia": null
    },
    "login": {
        "username": "sharper",
        "oauth2": null,
        "password": "$2y$10$YB8cSMx4ePbWjZH0FrdYwec66pIX9Hvs5gMnu1bqKr9XowcxM9GIa"
    },
    "otherContact": {
        "emails": [
            "sharper@safaricom.net",
            "sharper@ptcl.net"
        ],
        "phoneNumbers": [
            "+44-488-341-8467",
            "+44-594-941-5877"
        ],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "F",
        "dateOfBirth": "2001-12-02"
    }
});
db.partners.insertOne(
{
    "partnerKey": "DARRMEND4290",
    "businessName": "Industrious Trust Ltd",
    "revenueSplit": 0.44,
    "acctBalance": 206369.41,
    "name": {
        "title": "Mr",
        "first": "Darrin",
        "middle": "E",
        "last": "Mendoza",
        "suffix": null
    },
    "address": {
        "streetAddress": "7567 Short Tree Road",
        "buildingName": null,
        "floor": null,
        "roomAptCondoFlat": null,
        "city": "Woodstock North",
        "stateProvince": "ON",
        "locality": "Woodstock",
        "country": "CA",
        "postalCode": "N4T",
        "latitude": "43.1485",
        "longitude": "-80.7319"
    },
    "contact": {
        "phone": "+1-199-493-4290",
        "email": "dmendoza199@att.com",
        "socMedia": null
    },
    "login": {
        "username": "dmendoza",
        "oauth2": null,
        "password": "$2y$10$k5WRXZsuO.e1KfSuKkOOieyP8PoHyrAqOAKiXOhlnwvBkRD5Sbgce"
    },
    "otherContact": {
        "emails": [],
        "phoneNumbers": [],
        "socMedias": []
    },
    "otherInfo": {
        "gender": "M",
        "dateOfBirth": "1963-10-14"
    }
});
