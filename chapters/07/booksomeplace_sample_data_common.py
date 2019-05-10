# creates sample data for Common collection

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("/home/jed/Repos/learn-mongodb/chapters/07/src"))

import pprint
from pymongo import MongoClient

# set up connection
host       = 'localhost'
port       = 27017
database   = 'booksomeplace'
client     = MongoClient(host, port)
db         = client[database]

# define data to go into Common
common = [
    { "title"        : ['Mr','Ms','Dr'] },
    { "phoneType"    : ['home', 'work', 'mobile', 'fax'] },
    { "socMediaType" : ['google','twitter','facebook','skype','line','linkedin'] },
    { "genderType"   : [{'M' : 'Male'},{'F' : 'Female'},{'X' : 'Other'}] },
    { "propertyType" : ['hotel','motel','inn','guest house','hostel','resort','serviced apartment','condo','b & b','lodge'] },
    { "facilityType" : ['outdoor pool','indoor pool','free parking','WiFi','fitness center','business center','pharmacy','sauna','jacuzzi','buffet breakfast'] },
    { "chain"        : ['Accor','Hyatt','Hilton'] },
    { "roomType"     : ['premium','standard','poolside','groundFloor'] },
    { "bedType"      : ['single','double','queen','king'] },
    { "currency"     : ['AUD','CAD','EUR','GBP','INR','NZD','SGD','USD'] },
    { "rsvStatus"    : ['pending','confirmed','cancelled'] },
    { "payStatus"    : ['pending','confirmed','refunded'] }
]

# remove any existing documents
db.common.delete_many({})

# insert values
for item in common :
    for key, value in item.items() :
        insert = { key : value }
        if (db.common.insert_one(insert)) :
            print(key + ' inserted OK')
        else :
            print(key + ' inserted failed')
