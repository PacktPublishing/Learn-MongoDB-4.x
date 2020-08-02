# testing database connection to biglittle.loan collection

# tell python where to find module source code
import pprint
import os,sys
sys.path.append(os.path.realpath("src"))

from config.config import Config
from biglittle.domain.common import CommonService

config = Config()
comSvc = CommonService(config)

# get list of loan payment lengths
payments = comSvc.fetchByKey('paymentLen')

# get list of currencies
currencies = comSvc.fetchByKey('currency')

for item in payments :
    pprint.pprint(item)

for item in currencies :
    pprint.pprint(item)
