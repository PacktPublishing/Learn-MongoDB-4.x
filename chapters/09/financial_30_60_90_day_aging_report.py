# financial report: 30-60-90 day aging report
# This is another way to do the same thing.  In this example we just do a straight "find()"
# and let Python do the breakdowns for us
# This puts less burden on MongoDB, but more work for Python

# python imports
from datetime import date,timedelta
import os,sys
sys.path.append(os.path.realpath("src"))
import pymongo
from config.config import Config
from booksomeplace.domain.booking import BookingService

# setting up the connection + collection
service = BookingService(Config())

# formulate query
target = '2019-12-01'
query  = {
    "$and":
    [
        { "bookingInfo.paymentStatus":"pending",
          "bookingInfo.arrivalDate":{"$regex":"^2019"},
          "bookingInfo.arrivalDate":{"$lt":target},

        }
    ]
}
proj   = { "bookingInfo" : 1, "totalPrice" : 1 }
sort   = [('bookingInfo.arrivalDate',pymongo.ASCENDING)]
result = service.fetch(query, proj, sort)

# init vars
now = date.fromisoformat(target)
aging = {
    '30' : {'date' : now - timedelta(days=30), 'amount' : 0},
    '60' : {'date' : now - timedelta(days=60), 'amount' : 0},
    '90' : {'date' : now - timedelta(days=90), 'amount' : 0}
};
total = 0
cutoff = 0

# display results
pattern_line = "{:20}\t{:10.2f}"
pattern_text = "{:20}\t{:10}"
print(pattern_text.format('Date','Amount'))
print(pattern_text.format('--------------------','----------'))
for doc in result :
    # grab information out of the return document
    a_date = doc['bookingInfo']['arrivalDate']
    price  = doc['totalPrice']
    total += price
    # check aging of payment
    checkDate = date.fromisoformat(a_date[0:10])
    if checkDate < aging['90']['date'] :
        aging['90']['amount'] += price
        if cutoff == 0 :
            print(pattern_text.format('--- 90 DAY CUTOFF --','----------'))
            print(pattern_text.format('--------------------','----------'))
            cutoff += 1
    elif checkDate < aging['60']['date'] :
        aging['60']['amount'] += price
        if cutoff == 1 :
            print(pattern_text.format('--------------------','----------'))
            print(pattern_text.format('--- 60 DAY CUTOFF --','----------'))
            print(pattern_text.format('--------------------','----------'))
            cutoff += 1
    elif checkDate < aging['30']['date'] :
        aging['30']['amount'] += price
        if cutoff == 2 :
            print(pattern_text.format('--------------------','----------'))
            print(pattern_text.format('--- 30 DAY CUTOFF --','----------'))
            print(pattern_text.format('--------------------','----------'))
            cutoff += 1
    if checkDate < now :
        print(pattern_line.format(a_date, price))

# print total
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('30 Days Late:',aging['30']['amount']))
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('60 Days Late:',aging['60']['amount']))
print(pattern_text.format('--------------------','----------'))
print(pattern_line.format('90 Days Late:',aging['90']['amount']))
print(pattern_text.format('====================','=========='))
print(pattern_line.format('TOTAL',total))

