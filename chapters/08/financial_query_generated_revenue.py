# financial report: generated revenue by time period

# here is the model query
"""
db.bookings.find(
    { "$and":[
        { "bookingInfo.arrivalDate":{"$regex":"^2018"},
          "bookingInfo.paymentStatus":"confirmed"
        }
    ] },
   {"bookingInfo":1,"totalPrice":1}
);
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
query  = {
    "$and":
    [
        { "bookingInfo.arrivalDate":{"$regex":"^2018"}},
        { "bookingInfo.paymentStatus":"confirmed"}
    ]
}
proj   = {"bookingInfo":1,"totalPrice":1}
sort   = [('bookingInfo.arrivalDate',pymongo.ASCENDING)]
result = service.fetch(query, proj, sort)

# init vars
q1 = '2018-04-01'
q2 = '2018-07-01'
q3 = '2018-10-01'
total    = 0
sub      = 0
subtotal = []
quarter  = 1

# display results
pattern_line = "{:20}\t{:10.2f}"
pattern_text = "{:20}\t{:10}"
print(pattern_text.format('Date','Amount'))
print(pattern_text.format('--------------------','----------'))
for doc in result :
    # grab information out of the return document
    date = doc['bookingInfo']['arrivalDate']
    price = doc['totalPrice']
    total += price
    sub   += price
    print(pattern_line.format(date, price))
    # breakdown by quarter
    if date > q1 and quarter == 1 :
        subtotal.append(sub)
        sub = 0
        quarter += 1
    elif date > q2 and quarter == 2 :
        subtotal.append(sub)
        sub = 0
        quarter += 1
    elif date > q3 and quarter == 3 :
        subtotal.append(sub)
        sub = 0
        quarter += 1

# print total
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('Q1 Subtotal',subtotal[0]))
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('Q2 Subtotal',subtotal[1]))
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('Q3 Subtotal',subtotal[2]))
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('Q4 Subtotal',sub))
print(pattern_text.format('====================','=========='))
print(pattern_line.format('TOTAL',total))

