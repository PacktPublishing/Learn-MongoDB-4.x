# tests benchmark test
# import needed classes
import pprint
from pymongo import MongoClient
import os,sys
sys.path.append(os.path.realpath("src"))
from config.config import Config
from db.mongodb.connection import Connection
from biglittle.domain.benchmark import BenchmarkService
from biglittle.domain.loan import LoanService
from utils.utils import Utils

# init classes
config = Config()
util = Utils()
benchSvc = BenchmarkService(config)
# develop insertRandom 1st:
# get loan service
loanSvc = LoanService(config, 'Loan')
# get count of loan keys
keys = loanSvc.fetchLoanKeys()
count = 0
for doc in keys :
    pprint.pprint(doc)
    count += 1
maxKeys = count
# pick entry at random
import random
skipKeys = random.randint(0, maxKeys)
loanDoc  = loanSvc.fetchRandLoan(skipKeys)
# get borrower info
# get lender info
# assemble document
# insert into benchmark
# display results
print("\nBenchmark Results:")
print(maxKeys)
