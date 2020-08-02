# financial report: future revenue trend report

# python imports
import pprint
import json
from datetime import datetime,timedelta
import os,sys
sys.path.append(os.path.realpath("src"))
import pymongo
from config.config import Config
from booksomeplace.domain.booking import BookingService

# setting up the connection + collection
bookSvc = BookingService(Config())

# init vars
params = {
    'trend_city'          : None,
    'trend_stateProvince' : 'England',
    'trend_locality'      : None,
    'trend_country'       : 'GB',
    'trend_postalCode'    : None,
}

# calculate dates for the report
date_format = '%Y-%m-%d %H:%M:%S'
factor      = 0.10
today       = datetime.now()
historic    = timedelta(days=18*30)
hist_date   = today - historic
today_str   = today.strftime(date_format)
hist_str    = hist_date.strftime(date_format)

projection  = {'bookingInfo.arrivalDate':1,'totalPrice':1}
sort        = [('bookingInfo.arrivalDate',1)]

# formulate query payment status
query = {'bookingInfo.paymentStatus':'confirmed'}

# add params to query
if 'trend_city' in params and params['trend_city'] :
    query.update({'property.propertyAddr.city': params['trend_city']})
if 'trend_stateProvince' in params and params['trend_stateProvince'] :
    query.update({'property.propertyAddr.stateProvince': params['trend_stateProvince']})
if 'trend_locality' in params and params['trend_locality'] :
    query.update({'property.propertyAddr.locality': params['trend_locality']})
if 'trend_country' in params and params['trend_country'] :
    query.update({'property.propertyAddr.country': params['trend_country']})
if 'trend_postalCode' in params and params['trend_postalCode'] :
    query.update({'property.propertyAddr.postalCode': params['trend_postalCode']})
final_query = {'$and':[query]}

print('Query:' + json.dumps(final_query))

# run a query which returns revenue data based on criteria from the historic date up until today
hist_data = bookSvc.fetch(query, projection, sort)

# init vars
total       = {}
diff        = 0
year_span   = 5
start_year  = 2017
end_year    = 2021
years       = range(start_year, end_year+1)
months      = range(1,12+1)
year1_mark  = (today.year - start_year - 1) * 12
year2_mark  = (today.year - start_year - 2) * 12
month_names = { 1:'jan',2:'feb',3:'mar',4:'apr',5:'may',6:'jun',7:'jul',8:'aug',9:'sep',10:'oct',11:'nov',12:'dec'}

# pre-populate totals as a linear list
total = [0.00 for key in range(1,year_span*12)]

print("\nBefore\n");
pprint.pprint(total)

# accumulate totals by month
pattern_line = "{:20}\t{:10.2f}"
pattern_text = "{:20}\t{:10}"
print(pattern_text.format('--------------------','----------'))
print(pattern_text.format('Date','Amount'))
print(pattern_text.format('--------------------','----------'))
for doc in hist_data :
    # grab information out of the return document
    arrDate   = datetime.strptime(doc['bookingInfo']['arrivalDate'], date_format)
    price     = doc['totalPrice']
    year_key  = arrDate.year - start_year
    month_key = arrDate.month - 1
    print(pattern_line.format(arrDate.strftime(date_format), price))
    # update monthly total
    total[(year_key*12) + month_key] += price

# avg monthly difference over the past 2 years
avg_diff  = []
last_year = []
next_year = []
for month in range(1,13) :
    diff = total[year1_mark + month - 1] - total[year2_mark + month - 1]
    avg_diff.append(diff * factor)
    last_year.append(total[year1_mark + month - 1])

for key in range(0,12) :
    next_year.append(last_year[key] + avg_diff[key])

print(pattern_text.format('--------------------','----------'))

print("\nAfter\n");
pprint.pprint(total)
pprint.pprint(avg_diff)
pprint.pprint(last_year)
pprint.pprint(next_year)


# extrapolate +6 months
# create slice: [6 - today + 6 months]

