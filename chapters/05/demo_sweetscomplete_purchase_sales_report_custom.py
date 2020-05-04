# /chapters/05/demo_sweetscomplete_purchase_sales_report_custom.py

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("src"))

import db.mongodb.connection

from sweetscomplete.entity.purchase import Purchase
from sweetscomplete.domain.purchase import PurchaseService

# setting up the connection + collection
conn = db.mongodb.connection.Connection('localhost',27017,Purchase)
service = PurchaseService(conn, 'sweetscomplete')

# running a fetch based on date
year    = 2018
results = service.salesReportByCountry(year)

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
