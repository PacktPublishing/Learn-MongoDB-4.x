# perform a query modeled using MongoDB Compass

# this is what we got from MongoDB Compass:
"""
{
 filter: {
  'reviews.cleanliness': {
   $lt: 3
  }
 },
 project: {
  propName: 1,
  address: 1,
  reviews: 1
 }
}
"""

# python imports
import os,sys
sys.path.append(os.path.realpath("src"))
import pymongo
from config.config import Config
from booksomeplace.domain.property import PropertyService

# setting up the connection + collection
service = PropertyService(Config())

# formulate query params
cutoff = 3
cat    = 'cleanliness'
key    = 'reviews.' + cat
query  = {key : {'$lt': 3}}
proj   = {'propName': 1,'address':1,'reviews': 1}
sort   = [('propName',pymongo.ASCENDING)]
result = service.fetch(query, proj, sort)

# set counters

# display results
pattern = "{:20}\t{:40}\t{:5.2f}"
print('{:20}\t{:40}\t{:5}'.format('Property Name','Address','Score'))
print('{:20}\t{:40}\t{:5}'.format('-------------','-------','-----'))
for doc in result :
    # get info
    name = doc['propName']
    addr = doc['address']['city'] + ' ' + doc['address']['country']
    # total cleanliness scores
    total = 0
    count = 0
    for revDoc in doc['reviews'] :
        total += revDoc[cat]
        count += 1
    avg = 5 / (total/count)
    if avg < cutoff :
        print(pattern.format(name,addr[0:40], avg))