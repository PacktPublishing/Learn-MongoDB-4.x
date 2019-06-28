# perform a query modeled using MongoDB Compass

# this is what we got from MongoDB Compass:
"""
{
 filter: {
  'customer.customerContact.socMedia.facebook': {$exists: true}
 },
 project: {
  'customer.customerContact': 1,
  'customer.customerName': 1,
  totalPrice: 1
 },
 sort: {
  'customer.customerName.last': 1,
  'customer.customerName.first': 1
 },
 limit: 10
}
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
total  = 0
query  = {'customer.customerContact.socMedia.facebook': {'$exists': True}}
proj   = {'customer.customerContact': 1,'customer.customerName': 1,'totalPrice': 1}
sort   = [('customer.customerName.last',pymongo.ASCENDING),('customer.customerName.first',pymongo.ASCENDING)]
result = service.fetch(query, proj, sort)

# display results
pattern = "{:12}\t{:40}\t{:8.2f}"
print('{:12}\t{:40}\t{:8}'.format('Name','Facebook Email','Amount'))
for doc in result :
    name = doc['customer']['customerName']['first'][0] + ' '
    name += doc['customer']['customerName']['last']
    email = doc['customer']['customerContact']['socMedia']['facebook']
    price = doc['totalPrice']
    total += price
    print(pattern.format(name, email, price))

# print total
print('{:12}\t{:40}\t{:8}'.format('----------','------------------------------------','--------'))
print('{:12}\t{:40}\t{:8.2f}'.format('TOTAL',' ',total))

