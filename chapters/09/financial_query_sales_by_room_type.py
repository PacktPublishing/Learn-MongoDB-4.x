# financial report: generated revenue by room type by year

# here is the model query
"""
db.bookings.aggregate(
[
	{ $match :
		{ "$and": [
			{ "bookingInfo.arrivalDate":{"$regex":"^2019"},
			  "bookingInfo.paymentStatus":"confirmed"
			}
		] }
	},
	{ $unwind    : "$rooms" },
	{ $project   : { "rooms" : 1 }},
	{ $sort      : { "rooms.roomType" : 1 }},
	{ $addFields : 
		{ "total_by_type" : { $multiply : [ "$rooms.price", "$rooms.qty"] }}
	},
	{ $group : { 
		_id : { "type" : "$rooms.roomType" }, 
		"count": { $sum: "$rooms.qty"}, 
		"total_sales": { $sum: "$total_by_type"}}
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
target_year = 2019
pipeline  = [
    { '$match' :
        { '$and':[
            { 'bookingInfo.arrivalDate':{'$regex':'^' + str(target_year)},
              'bookingInfo.paymentStatus':'confirmed'
            }
        ] }
    },
	{ '$unwind'    : '$rooms' },
	{ '$project'   : { 'rooms' : 1 }},
	{ '$sort'      : { 'rooms.roomType' : 1 }},
	{ '$addFields' : 
		{ 'total_by_type' : { '$multiply' : [ '$rooms.price', '$rooms.qty'] }}
	},
	{ '$group' : { 
		'_id' : { 'type' : '$rooms.roomType' }, 
		'count': { '$sum' : '$rooms.qty'}, 
		'total_sales': { '$sum' : '$total_by_type'}}
	}
]
result = service.fetchAggregate(pipeline)

# display results
total = 0
count = 0
pattern_line  = "{:10}\t{:6}\t{:10.2f}"
pattern_text  = "{:10}\t{:6}\t{:10}"
print('Sales by Room Type For ' + str(target_year))
print(pattern_text.format('Type','Qty','Amount'))
print(pattern_text.format('----------','------','----------'))
for doc in result :
    label = doc['_id']['type']
    qty   = doc['count']
    amt   = doc['total_sales']
    total += amt
    count += qty
    print(pattern_line.format(label,qty,amt))

# print total
print(pattern_text.format('==========','======','=========='))
print(pattern_line.format('TOTAL',count,total))

