# financial report: generated revenue by time period

# here is the model query
"""
db.bookings.aggregate(
[
    { $match :
        { "$and":[
            { "bookingInfo.arrivalDate":{"$regex":"^2018"},
              "bookingInfo.paymentStatus":"confirmed"
            }
        ] }
    },
   { $bucket:
       {
            groupBy: "$bookingInfo.arrivalDate",
            boundaries: [ '2018-01-01', '2018-04-01', '2018-07-01', '2018-10-01' ],
            default: "2018-10-01",
            output: {
                "totals": { $sum : "$totalPrice" },
                "amounts" : { $push : "$totalPrice" }
            }
        }
    }
]);
"""

# python imports
import os,sys
sys.path.append(os.path.realpath("src"))
import pymongo
from config.config import Config
from booksomeplace.domain.booking import BookingService

# setting up the connection + collection
service = BookingService(Config())

# formulate query
pipeline  = [
    { '$match' :
        { '$and':[
            { 'bookingInfo.arrivalDate':{'$regex':'^2018'},
              'bookingInfo.paymentStatus':'confirmed'
            }
        ] }
    },
   { '$bucket' :
       {
            'groupBy'    : '$bookingInfo.arrivalDate',
            'boundaries' : [ '2018-01-01', '2018-04-01', '2018-07-01', '2018-10-01' ],
            'default'    : '2018-10-01',
            'output'     : {
                'totals'  : { '$sum' : '$totalPrice' },
                'amounts' : { '$push' : '$totalPrice' }
            }
        }
    }
]
result = service.fetchAggregate(pipeline)

# display results
total = 0
quarters = { '2018-01-01' : 'Q1', '2018-04-01' : 'Q2', '2018-07-01' : 'Q3', '2018-10-01' : 'Q4' }
pattern_line = "{:20}\t{:10.2f}"
pattern_text = "{:20}\t{:10}"
print(pattern_text.format('Quarter','Amount'))
print(pattern_text.format('--------------------','----------'))
for doc in result :
    label = quarters[doc['_id']]
    amt   = doc['totals']
    total += amt
    print(pattern_line.format(label,amt))

# print total
print(pattern_text.format('====================','=========='))
print(pattern_line.format('TOTAL',total))

