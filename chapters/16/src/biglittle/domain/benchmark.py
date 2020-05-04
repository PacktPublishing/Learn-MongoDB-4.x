"""
biglittle.domain.benchmark
Description: module which interacts with the "benchmark" collection
"""

import pymongo
import decimal
from config.config import Config
from pymongo.cursor import CursorType
from decimal import Decimal
from bson.decimal128 import Decimal128
from biglittle.domain.base import Base
from biglittle.domain.loan import LoanService

class BenchmarkService(Base) :

    # defaults
    collectName = 'biglittle.benchmark'

    """
    Clears "benchmark" collections
    @return results of drop operations
    """
    def clear(self) :
        return self.collection.drop()

    """
    Pick random loans, lookup lender and borrower, insert into "benchmark"
    @return dict document with loan info, lender and borrower info
    """
    def insertRandom(self) :
        # get loan service
        loanSvc = LoanService(self.config, 'Loan')
        # get count of loan keys
        maxKeys = loanSvc.fetchLoanCount()
        # pick entry at random
        import random
        skipKeys = random.randint(0, maxKeys)
        loanDoc  = loanSvc.fetchRandLoan(skipKeys)
        # get borrower info
        # get lender info
        # assemble document
        # insert into benchmark
        return loanSvc.fetchLoanKeys()

    """
    Pick random "benchmark" entry
    @return dict document with updated key
    """
    def updateRandom(self) :
        # get list of benchmark keys
        # pick entry at random
        # update date and time info
        pass

    """
    Pick random "benchmark" entry
    @return dict document with deleted key
    """
    def deleteRandom(self) :
        # get list of benchmark keys
        # pick entry at random
        # delete
        pass

    """
    Pick random "benchmark" entry
    @return dict document with updated key
    """
    def updateRandomBenchmark(self) :
        # get list of benchmark keys
        # pick entry at random
        # update date and time info
        pass

