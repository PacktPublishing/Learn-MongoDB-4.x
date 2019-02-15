conn = new Mongo();
db = conn.getDB("booksomething");
db.common.drop();
db.common.insertOne(
{
    "key"  : "gender",
    "data" : { "M" : "male", "F" : "female" }
});

db.common.insertOne(
{
    "key"  : "bedType",
    "data" : ["single", "double", "queen", "king"]
});

db.common.insertOne(
{
    "key"  : "breakfast",
    "data" : ["included", "extra"]
});

db.common.insertOne(
{
    "key"  : "identificationType",
    "data" : {"P" : "Passport", "DL" : "Driving License", "ID" : "ID Card", "CC" : "Credit Card"}
});

db.common.insertOne(
{
    "key"  : "propertyType",
    "data" : {"H" :"Hotel", "M" : "Motel", "SAPT" : "Serviced Apartments", "APT" : "Apartments", "C" : "Condo", "BB" : "Bed and Breakfast", "HS" : "Hostel", "GH" : "Guest House", "I" : "Inn", "L" : "Lodge", "R" : "Resort"}
});

db.common.insertOne(
{
    "key"  : "refundable",
    "data" : ["yes","no"]
});

db.common.insertOne(
{
    "key"  : "replicaType",
    "data" : ["primary", "secondary"]
});

db.common.insertOne(
{
    "key"  : "roomType",
    "data" : ["standard", "double", "premium", "VIP", "family", "suite"]
});

db.common.insertOne(
{
    "key"  : "roomLocation",
    "data" : ["city view", "poolside", "riverside", "lakeside", "penthouse", "mountain view"]
});

db.common.insertOne(
{
    "key"  : "socialMedia",
    "data" : {"GO":"google", "TW":"twitter", "FB":"facebook", "LN":"line", "SK":"skype","LI":"linkedin"}
});

db.common.insertOne(
{
    "key"  : "userType",
    "data" : ["customer","partner","admin"]
});

db.common.insertOne(
{
    "key"  : "reservationStatus",
    "data" : ["pending","completed","cancelled","wish-list"]
});

db.common.insertOne(
{
    "key"  : "confirmed",
    "data" : ["yes","no"]
});

db.common.insertOne(
{
    "key"  : "prepaid",
    "data" : ["yes","no"],
});

db.common.insertOne(
{
    "key"  : "country",
    "data" : [
        {"iso2" : "AF", "countryName" : "Afghanistan"},
        {"iso2" : "AX", "countryName" : "Åland Islands"},
        {"iso2" : "AL", "countryName" : "Albania"},
        {"iso2" : "DZ", "countryName" : "Algeria"},
        {"iso2" : "AS", "countryName" : "American Samoa"},
        {"iso2" : "AD", "countryName" : "Andorra"},
        {"iso2" : "AO", "countryName" : "Angola"},
        {"iso2" : "AI", "countryName" : "Anguilla"},
        {"iso2" : "AQ", "countryName" : "Antarctica"},
        {"iso2" : "AG", "countryName" : "Antigua and Barbuda"},
        {"iso2" : "AR", "countryName" : "Argentina"},
        {"iso2" : "AM", "countryName" : "Armenia"},
        {"iso2" : "AW", "countryName" : "Aruba"},
        {"iso2" : "AU", "countryName" : "Australia"},
        {"iso2" : "AT", "countryName" : "Austria"},
        {"iso2" : "AZ", "countryName" : "Azerbaijan"},
        {"iso2" : "BS", "countryName" : "Bahamas"},
        {"iso2" : "BH", "countryName" : "Bahrain"},
        {"iso2" : "BD", "countryName" : "Bangladesh"},
        {"iso2" : "BB", "countryName" : "Barbados"},
        {"iso2" : "BY", "countryName" : "Belarus"},
        {"iso2" : "BE", "countryName" : "Belgium"},
        {"iso2" : "BZ", "countryName" : "Belize"},
        {"iso2" : "BJ", "countryName" : "Benin"},
        {"iso2" : "BM", "countryName" : "Bermuda"},
        {"iso2" : "BT", "countryName" : "Bhutan"},
        {"iso2" : "BO", "countryName" : "Bolivia (Plurinational State of)"},
        {"iso2" : "BQ", "countryName" : "Bonaire,  Sint Eustatius and Saba"},
        {"iso2" : "BA", "countryName" : "Bosnia and Herzegovina"},
        {"iso2" : "BW", "countryName" : "Botswana"},
        {"iso2" : "BV", "countryName" : "Bouvet Island"},
        {"iso2" : "BR", "countryName" : "Brazil"},
        {"iso2" : "IO", "countryName" : "British Indian Ocean Territory"},
        {"iso2" : "BN", "countryName" : "Brunei Darussalam"},
        {"iso2" : "BG", "countryName" : "Bulgaria"},
        {"iso2" : "BF", "countryName" : "Burkina Faso"},
        {"iso2" : "BI", "countryName" : "Burundi"},
        {"iso2" : "CV", "countryName" : "Cabo Verde"},
        {"iso2" : "KH", "countryName" : "Cambodia"},
        {"iso2" : "CM", "countryName" : "Cameroon"},
        {"iso2" : "CA", "countryName" : "Canada"},
        {"iso2" : "KY", "countryName" : "Cayman Islands"},
        {"iso2" : "CF", "countryName" : "Central African Republic"},
        {"iso2" : "TD", "countryName" : "Chad"},
        {"iso2" : "CL", "countryName" : "Chile"},
        {"iso2" : "CN", "countryName" : "China"},
        {"iso2" : "CX", "countryName" : "Christmas Island"},
        {"iso2" : "CC", "countryName" : "Cocos (Keeling) Islands"},
        {"iso2" : "CO", "countryName" : "Colombia"},
        {"iso2" : "KM", "countryName" : "Comoros"},
        {"iso2" : "CG", "countryName" : "Congo"},
        {"iso2" : "CD", "countryName" : "Congo (Democratic Republic of the)"},
        {"iso2" : "CK", "countryName" : "Cook Islands"},
        {"iso2" : "CR", "countryName" : "Costa Rica"},
        {"iso2" : "CI", "countryName" : "Côte d'Ivoire"},
        {"iso2" : "HR", "countryName" : "Croatia"},
        {"iso2" : "CU", "countryName" : "Cuba"},
        {"iso2" : "CW", "countryName" : "Curaçao"},
        {"iso2" : "CY", "countryName" : "Cyprus"},
        {"iso2" : "CZ", "countryName" : "Czechia"},
        {"iso2" : "DK", "countryName" : "Denmark"},
        {"iso2" : "DJ", "countryName" : "Djibouti"},
        {"iso2" : "DM", "countryName" : "Dominica"},
        {"iso2" : "DO", "countryName" : "Dominican Republic"},
        {"iso2" : "EC", "countryName" : "Ecuador"},
        {"iso2" : "EG", "countryName" : "Egypt"},
        {"iso2" : "SV", "countryName" : "El Salvador"},
        {"iso2" : "GQ", "countryName" : "Equatorial Guinea"},
        {"iso2" : "ER", "countryName" : "Eritrea"},
        {"iso2" : "EE", "countryName" : "Estonia"},
        {"iso2" : "SZ", "countryName" : "Eswatini"},
        {"iso2" : "ET", "countryName" : "Ethiopia"},
        {"iso2" : "FK", "countryName" : "Falkland Islands (Malvinas)"},
        {"iso2" : "FO", "countryName" : "Faroe Islands"},
        {"iso2" : "FJ", "countryName" : "Fiji"},
        {"iso2" : "FI", "countryName" : "Finland"},
        {"iso2" : "FR", "countryName" : "France"},
        {"iso2" : "GF", "countryName" : "French Guiana"},
        {"iso2" : "PF", "countryName" : "French Polynesia"},
        {"iso2" : "TF", "countryName" : "French Southern Territories"},
        {"iso2" : "GA", "countryName" : "Gabon"},
        {"iso2" : "GM", "countryName" : "Gambia"},
        {"iso2" : "GE", "countryName" : "Georgia"},
        {"iso2" : "DE", "countryName" : "Germany"},
        {"iso2" : "GH", "countryName" : "Ghana"},
        {"iso2" : "GI", "countryName" : "Gibraltar"},
        {"iso2" : "GR", "countryName" : "Greece"},
        {"iso2" : "GL", "countryName" : "Greenland"},
        {"iso2" : "GD", "countryName" : "Grenada"},
        {"iso2" : "GP", "countryName" : "Guadeloupe"},
        {"iso2" : "GU", "countryName" : "Guam"},
        {"iso2" : "GT", "countryName" : "Guatemala"},
        {"iso2" : "GG", "countryName" : "Guernsey"},
        {"iso2" : "GN", "countryName" : "Guinea"},
        {"iso2" : "GW", "countryName" : "Guinea-Bissau"},
        {"iso2" : "GY", "countryName" : "Guyana"},
        {"iso2" : "HT", "countryName" : "Haiti"},
        {"iso2" : "HM", "countryName" : "Heard Island and McDonald Islands"},
        {"iso2" : "VA", "countryName" : "Holy See"},
        {"iso2" : "HN", "countryName" : "Honduras"},
        {"iso2" : "HK", "countryName" : "Hong Kong"},
        {"iso2" : "HU", "countryName" : "Hungary"},
        {"iso2" : "IS", "countryName" : "Iceland"},
        {"iso2" : "IN", "countryName" : "India"},
        {"iso2" : "ID", "countryName" : "Indonesia"},
        {"iso2" : "IR", "countryName" : "Iran (Islamic Republic of)"},
        {"iso2" : "IQ", "countryName" : "Iraq"},
        {"iso2" : "IE", "countryName" : "Ireland"},
        {"iso2" : "IM", "countryName" : "Isle of Man"},
        {"iso2" : "IL", "countryName" : "Israel"},
        {"iso2" : "IT", "countryName" : "Italy"},
        {"iso2" : "JM", "countryName" : "Jamaica"},
        {"iso2" : "JP", "countryName" : "Japan"},
        {"iso2" : "JE", "countryName" : "Jersey"},
        {"iso2" : "JO", "countryName" : "Jordan"},
        {"iso2" : "KZ", "countryName" : "Kazakhstan"},
        {"iso2" : "KE", "countryName" : "Kenya"},
        {"iso2" : "KI", "countryName" : "Kiribati"},
        {"iso2" : "KP", "countryName" : "Korea (Democratic People's Republic of)"},
        {"iso2" : "KR", "countryName" : "Korea (Republic of)"},
        {"iso2" : "KW", "countryName" : "Kuwait"},
        {"iso2" : "KG", "countryName" : "Kyrgyzstan"},
        {"iso2" : "LA", "countryName" : "Lao People's Democratic Republic"},
        {"iso2" : "LV", "countryName" : "Latvia"},
        {"iso2" : "LB", "countryName" : "Lebanon"},
        {"iso2" : "LS", "countryName" : "Lesotho"},
        {"iso2" : "LR", "countryName" : "Liberia"},
        {"iso2" : "LY", "countryName" : "Libya"},
        {"iso2" : "LI", "countryName" : "Liechtenstein"},
        {"iso2" : "LT", "countryName" : "Lithuania"},
        {"iso2" : "LU", "countryName" : "Luxembourg"},
        {"iso2" : "MO", "countryName" : "Macao"},
        {"iso2" : "MK", "countryName" : "Macedonia (the former Yugoslav Republic of)"},
        {"iso2" : "MG", "countryName" : "Madagascar"},
        {"iso2" : "MW", "countryName" : "Malawi"},
        {"iso2" : "MY", "countryName" : "Malaysia"},
        {"iso2" : "MV", "countryName" : "Maldives"},
        {"iso2" : "ML", "countryName" : "Mali"},
        {"iso2" : "MT", "countryName" : "Malta"},
        {"iso2" : "MH", "countryName" : "Marshall Islands"},
        {"iso2" : "MQ", "countryName" : "Martinique"},
        {"iso2" : "MR", "countryName" : "Mauritania"},
        {"iso2" : "MU", "countryName" : "Mauritius"},
        {"iso2" : "YT", "countryName" : "Mayotte"},
        {"iso2" : "MX", "countryName" : "Mexico"},
        {"iso2" : "FM", "countryName" : "Micronesia (Federated States of)"},
        {"iso2" : "MD", "countryName" : "Moldova (Republic of)"},
        {"iso2" : "MC", "countryName" : "Monaco"},
        {"iso2" : "MN", "countryName" : "Mongolia"},
        {"iso2" : "ME", "countryName" : "Montenegro"},
        {"iso2" : "MS", "countryName" : "Montserrat"},
        {"iso2" : "MA", "countryName" : "Morocco"},
        {"iso2" : "MZ", "countryName" : "Mozambique"},
        {"iso2" : "MM", "countryName" : "Myanmar"},
        {"iso2" : "NA", "countryName" : "Namibia"},
        {"iso2" : "NR", "countryName" : "Nauru"},
        {"iso2" : "NP", "countryName" : "Nepal"},
        {"iso2" : "NL", "countryName" : "Netherlands"},
        {"iso2" : "NC", "countryName" : "New Caledonia"},
        {"iso2" : "NZ", "countryName" : "New Zealand"},
        {"iso2" : "NI", "countryName" : "Nicaragua"},
        {"iso2" : "NE", "countryName" : "Niger"},
        {"iso2" : "NG", "countryName" : "Nigeria"},
        {"iso2" : "NU", "countryName" : "Niue"},
        {"iso2" : "NF", "countryName" : "Norfolk Island"},
        {"iso2" : "MP", "countryName" : "Northern Mariana Islands"},
        {"iso2" : "NO", "countryName" : "Norway"},
        {"iso2" : "OM", "countryName" : "Oman"},
        {"iso2" : "PK", "countryName" : "Pakistan"},
        {"iso2" : "PW", "countryName" : "Palau"},
        {"iso2" : "PS", "countryName" : "Palestine, State of"},
        {"iso2" : "PA", "countryName" : "Panama"},
        {"iso2" : "PG", "countryName" : "Papua New Guinea"},
        {"iso2" : "PY", "countryName" : "Paraguay"},
        {"iso2" : "PE", "countryName" : "Peru"},
        {"iso2" : "PH", "countryName" : "Philippines"},
        {"iso2" : "PN", "countryName" : "Pitcairn"},
        {"iso2" : "PL", "countryName" : "Poland"},
        {"iso2" : "PT", "countryName" : "Portugal"},
        {"iso2" : "PR", "countryName" : "Puerto Rico"},
        {"iso2" : "QA", "countryName" : "Qatar"},
        {"iso2" : "RE", "countryName" : "Réunion"},
        {"iso2" : "RO", "countryName" : "Romania"},
        {"iso2" : "RU", "countryName" : "Russian Federation"},
        {"iso2" : "RW", "countryName" : "Rwanda"},
        {"iso2" : "BL", "countryName" : "Saint Barthélemy"},
        {"iso2" : "SH", "countryName" : "Saint Helena, Ascension and Tristan da Cunha"},
        {"iso2" : "KN", "countryName" : "Saint Kitts and Nevis"},
        {"iso2" : "LC", "countryName" : "Saint Lucia"},
        {"iso2" : "MF", "countryName" : "Saint Martin (French part)"},
        {"iso2" : "PM", "countryName" : "Saint Pierre and Miquelon"},
        {"iso2" : "VC", "countryName" : "Saint Vincent and the Grenadines"},
        {"iso2" : "WS", "countryName" : "Samoa"},
        {"iso2" : "SM", "countryName" : "San Marino"},
        {"iso2" : "ST", "countryName" : "Sao Tome and Principe"},
        {"iso2" : "SA", "countryName" : "Saudi Arabia"},
        {"iso2" : "SN", "countryName" : "Senegal"},
        {"iso2" : "RS", "countryName" : "Serbia"},
        {"iso2" : "SC", "countryName" : "Seychelles"},
        {"iso2" : "SL", "countryName" : "Sierra Leone"},
        {"iso2" : "SG", "countryName" : "Singapore"},
        {"iso2" : "SX", "countryName" : "Sint Maarten (Dutch part)"},
        {"iso2" : "SK", "countryName" : "Slovakia"},
        {"iso2" : "SI", "countryName" : "Slovenia"},
        {"iso2" : "SB", "countryName" : "Solomon Islands"},
        {"iso2" : "SO", "countryName" : "Somalia"},
        {"iso2" : "ZA", "countryName" : "South Africa"},
        {"iso2" : "GS", "countryName" : "South Georgia and the South Sandwich Islands"},
        {"iso2" : "SS", "countryName" : "South Sudan"},
        {"iso2" : "ES", "countryName" : "Spain"},
        {"iso2" : "LK", "countryName" : "Sri Lanka"},
        {"iso2" : "SD", "countryName" : "Sudan"},
        {"iso2" : "SR", "countryName" : "Suriname"},
        {"iso2" : "SJ", "countryName" : "Svalbard and Jan Mayen"},
        {"iso2" : "SE", "countryName" : "Sweden"},
        {"iso2" : "CH", "countryName" : "Switzerland"},
        {"iso2" : "SY", "countryName" : "Syrian Arab Republic"},
        {"iso2" : "TW", "countryName" : "Taiwan, and Taiwan Province of China"},
        {"iso2" : "TJ", "countryName" : "Tajikistan"},
        {"iso2" : "TZ", "countryName" : "Tanzania, United Republic of"},
        {"iso2" : "TH", "countryName" : "Thailand"},
        {"iso2" : "TL", "countryName" : "Timor-Leste"},
        {"iso2" : "TG", "countryName" : "Togo"},
        {"iso2" : "TK", "countryName" : "Tokelau"},
        {"iso2" : "TO", "countryName" : "Tonga"},
        {"iso2" : "TT", "countryName" : "Trinidad and Tobago"},
        {"iso2" : "TN", "countryName" : "Tunisia"},
        {"iso2" : "TR", "countryName" : "Turkey"},
        {"iso2" : "TM", "countryName" : "Turkmenistan"},
        {"iso2" : "TC", "countryName" : "Turks and Caicos Islands"},
        {"iso2" : "TV", "countryName" : "Tuvalu"},
        {"iso2" : "UG", "countryName" : "Uganda"},
        {"iso2" : "UA", "countryName" : "Ukraine"},
        {"iso2" : "AE", "countryName" : "United Arab Emirates"},
        {"iso2" : "GB", "countryName" : "United Kingdom of Great Britain and Northern Ireland"},
        {"iso2" : "US", "countryName" : "United States of America"},
        {"iso2" : "UM", "countryName" : "United States Minor Outlying Islands"},
        {"iso2" : "UY", "countryName" : "Uruguay"},
        {"iso2" : "UZ", "countryName" : "Uzbekistan"},
        {"iso2" : "VU", "countryName" : "Vanuatu"},
        {"iso2" : "VE", "countryName" : "Venezuela (Bolivarian Republic of)"},
        {"iso2" : "VN", "countryName" : "Viet Nam"},
        {"iso2" : "VG", "countryName" : "Virgin Islands (British)"},
        {"iso2" : "VI", "countryName" : "Virgin Islands (U.S.)"},
        {"iso2" : "WF", "countryName" : "Wallis and Futuna"},
        {"iso2" : "EH", "countryName" : "Western Sahara"},
        {"iso2" : "YE", "countryName" : "Yemen"},
        {"iso2" : "ZM", "countryName" : "Zambia"},
        {"iso2" : "ZW", "countryName" : "Zimbabwe"},
        {"iso2" : "BQ", "countryName" : "Bonaire Sint Eustatius and Saba"},
        {"iso2" : "PS", "countryName" : "Palestine"},
        {"iso2" : "SH", "countryName" : "Saint Helena Ascension and Tristan da Cunha"},
        {"iso2" : "TZ", "countryName" : "Tanzania, United Republic of"}
    ]
});
