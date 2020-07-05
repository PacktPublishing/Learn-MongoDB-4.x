# tests query without shard key

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
hostName = 'mongos1.biglittle.local:27020';
client   = MongoClient(hostName);

# query that doesn't include the shard key
code   = 'ENG'
query  = {'admin1_code' : code}
proj   = {'name' : 1}
result = client.biglittle.world_cities.find(query, proj)
plan   = result.explain()
count  = 0
for doc in result :
    count += 1
print('There are {} documents for the admin code {}'.format(count, code))
pprint.pprint(plan)