# financial report: 30-60-90 day aging report using the Aggregation Framework
# In this example we use MongoDB to perform the breakdowns for us
# This puts less burden on Python, but more work for MongoDB

# python imports
import os,sys
sys.path.append(os.path.realpath("src"))
import pymongo
from datetime import date,timedelta
from config.config import Config
from booksomeplace.domain.booking import BookingService

# setting up the connection + collection
service = BookingService(Config())
year   = '2019'
target = year + '-12-01'
now    = date.fromisoformat(target)
aging  = {
    '30' : (now - timedelta(days=30)).strftime('%Y-%m-%d'),
    '60' : (now - timedelta(days=60)).strftime('%Y-%m-%d'),
    '90' : (now - timedelta(days=90)).strftime('%Y-%m-%d'),
}

# formulate query
project = {
    "$project" : {
        "arrivalDate"   : "$bookingInfo.arrivalDate",
        "paymentStatus" : "$bookingInfo.paymentStatus",
        "totalPrice"    : 1,
    }
}
match = {
    "$match" : {
        "$and":[
            { "paymentStatus" : "pending" },
            { "arrivalDate"   : { "$regex" : "^" + year }},
            { "arrivalDate"   : { "$lt"    : target }}
        ]
    }
}
sort = { "$sort" : { "arrivalDate" : 1 }}
bucket = {
    "$bucket" : {
        "groupBy"    : "$arrivalDate",
        "boundaries" : [ aging['90'], aging['60'], aging['30'], target ],
        "default"    : target,
        "output"     : {
            "totals"  : { "$sum" : "$totalPrice" },
            "amounts" : { "$push" : "$totalPrice" },
            "dates"   : { "$push" : "$arrivalDate" }
        }
    }
}

pipeline  = [ project, match, sort, bucket ]
result = service.fetchAggregate(pipeline)

# display results: days aging, amount from aggregation, amount from a sum of pushed amounts
days  = 90;
total = 0.00
dbTot = 0.00
pattern_line = "{:20}\t{:10.2f}\t{:10.2f}"
pattern_text = "{:20}\t{:10}\t{:10}"
print(pattern_text.format('Aging in Days','From Aggr','From Amts'))
print(pattern_text.format('--------------------','----------','----------'))
import pprint
for doc in result :
    # uncomment the line below if you want to also see details on dates and amounts
    # pprint.pprint(doc)
    if doc['_id'] == target :
        amt_plus = doc['totals']
        dbl_plus = sum(doc['amounts'])
    else :
        label = str(days)
        amt   = doc['totals']
        dbl   = sum(doc['amounts'])
        total += amt
        dbTot += dbl
        days  -= 30
        print(pattern_line.format(label,amt, dbl))

# print total
print(pattern_text.format('====================','==========','=========='))
print(pattern_line.format('TOTAL',total,dbTot))
print(pattern_text.format('--------------------','----------','----------'))
print(pattern_line.format('90+ DAYS (YEAR ' + year + ')',amt_plus,dbl_plus))
