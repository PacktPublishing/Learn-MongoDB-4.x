# tests connection with sharded cluster from a mongos instance

# import needed classes
import pprint
from pymongo import MongoClient

# set up client
hostName = 'shard1.biglittle.local:27018';
client   = MongoClient(hostName);
count    = {}

# retrieve documents residing shard 1
tz = 'America/Anchorage'
docs = client.biglittle.world_cities.count_documents({'timezone':tz})
count.update({tz : docs})

# retrieve documents residing shard 2
tz = 'Europe/Amsterdam'
docs = client.biglittle.world_cities.count_documents({'timezone':tz})
count.update({tz : docs})

# retrieve documents residing shard 3
tz = 'Asia/Aden'
docs = client.biglittle.world_cities.count_documents({'timezone':tz})
count.update({tz : docs})

print('{:>20} | {:>6s}'.format('Timezone', 'Count'))
print('{:>20} | {:>6s}'.format('--------', '-----'))
for key,val in count.items() :
    output = '{:>20} | {:6d}'.format(key, val)
    print(output)
