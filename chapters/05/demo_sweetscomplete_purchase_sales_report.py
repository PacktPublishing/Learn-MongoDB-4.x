# /chapters/05/demo_sweetscomplete_purchase_sales_report.py

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

from db.mongodb.connection import Connection

from bson.regex import Regex
from sweetscomplete.entity.purchase import Purchase
from sweetscomplete.domain.purchase import PurchaseService

# setting up the connection + collection
conn = Connection('localhost',27017,Purchase)
service = PurchaseService(conn, 'sweetscomplete')

# running a fetch based on date
year    = 2018
pattern = '^' + str(year)
regex   = Regex(pattern)
query   = dict({'dateOfPurchase':{'$regex':regex}})
proj    = dict({'dateOfPurchase':1,'extendedPrice':1,'country':1,'_id':0})
order   = [('country', 1),('dateOfPurchase', 1)]
results = {}

## put results from generic fetch into nested dictionaries
for doc in service.genericFetch(query, proj, order) :
    country = doc['country']
    dop     = doc['dateOfPurchase']
    month   = str(dop[5:7])
    if country in results :
        temp = results[country]
        if month in temp :
            price = temp[month] + doc['extendedPrice']
        else :
            price = doc['extendedPrice']
        temp.update({month:price})
    else :
        results.update({country:{month:doc['extendedPrice']}})

# generate report
print("\nSales Report for " + str(year))
import locale
grandTotal = 0.00
for country, monthList in results.items() :
    print("\nCountry: " + country)
    print("\tMonth\tSales");
    for month, price in monthList.items() :
        grandTotal += price
        showPrice = locale.format_string("%8.*f", (2, price), True)
        print("\t" + month + "\t" + showPrice)

showTotal = locale.format_string("%12.*f", (2, grandTotal), True)
print("\nGrand Total:\t" + showTotal)
