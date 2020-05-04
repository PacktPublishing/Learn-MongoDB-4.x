"""
biglittle.domain.user
Description: module which interacts with the "users" collection
"""

import pymongo
from pymongo.cursor import CursorType
from config.config import Config
from biglittle.domain.base import Base
from biglittle.entity.user import User

class UserService(Base) :

    # defaults
    collectName = 'biglittle.users'

    """
    Returns a single User instance based on borrowerKey
    @return biglittle.entity.users.User
    """
    def fetchUserByBorrowerKey(self, borrowerKey) :
        return self.collection.find_one({ "userKey" : borrowerKey, "userType" : "borrower" })

    """
    Produces a list of User entities who are borrowers
    @return list [{'id':_id,'key':key,'name':first + last},{},etc.]
    """
    def fetchBorrowerKeysAndNames(self) :
        keysAndNames = []
        lookup = self.collection.find({'userType':'borrower'})
        for borrower in lookup :
            doc = {
                'id'   : borrower.getId(),
                'key'  : borrower.getKey(),
                'name' : borrower.getFullName()
            }
            keysAndNames.append(doc)
        return keysAndNames

    """
    Produces a list of User entities who are lenders
    @return list [{'id':_id,'key':key,'name':first + last,'business':business_name},{},etc.]
    """
    def fetchLenderKeysAndNames(self) :
        keysAndNames = []
        lookup = self.collection.find({'userType':'lender'})
        for lender in lookup :
            name = lender.getName()
            doc = {
                'id'      : lender.getId(),
                'key'     : lender.getKey(),
                'name'    : lender.getFullName(),
                'business': lender.get('businessName')
            }
            keysAndNames.append(doc)
        return keysAndNames

    """
    Picks lenders at random
    @param int max_num : maximum number to pick
    @return list [{'key':key,'name':first + last,'business':business_name},{},etc.]
    """
    def pickRandomLenders(self, max_num) :
        import random
        keysAndNames = []
        lenders = self.fetchLenderKeysAndNames()
        for x in range(0, max_num) :
            keysAndNames.append(random.choice(lenders))
        return keysAndNames

    """
    Returns iteration of documents that includes lender business name, address, array of loans, and total amount lent
    Models this query:
        db.users.aggregate(
        [
            { $match  : { "userType" : "lender" }},
            { $project : { "userKey" : 1, "businessName" : 1, "address" : 1 }},
            { $lookup : { "from" : "loans", "localField" : "userKey", "foreignField" : "lenderKey", "as" : "loans" }},
            { $addFields : { "total" : { "$sum" : "$loans.loanInfo.principal" }}},
            { $sort : { "total" : -1 }}
        ]);
    @return list of dict
    """
    def fetchTotalsByLender(self) :
        pipe = [
            { "$match"   : { "userType" : "lender" }},
            { "$project" : { "userKey" : 1, "businessName" : 1, "address" : 1 }},
            { "$lookup"  : { "from" : "loans", "localField" : "userKey", "foreignField" : "lenderKey", "as" : "loans" }},
            { "$addFields" : { "total" : { "$sum" : "$loans.loanInfo.principal" }}},
            { "$sort" : { "address.country" : 1, "total" : -1 }}
        ]
        return self.collection.aggregate(pipe)

    """
    Listener that updates borrower amountPaid and amountDue after a successful loan payment
    Produces a sum of the "amountDue" and "amountPaid" fields in the loan payments list
    Compare that with the same fields in the associated user document
    Assumes all financial fields are stored in MongoDB NumberDecimal (BSON Decimal128) format
    @param dict arg : must have these keys: { "loan" : biglittle.entity.loan.Loan loan, "amtPaid" : Decimal amtPaid }
    @return void
    """
    def updateBorrowerListener(self, arg) :
        # imports
        from decimal import Decimal
        from bson.decimal128 import Decimal128
        # init vars
        loan = arg['loan']
        amtPaid = arg['amtPaid']
        amtDueFromLoan = Decimal(0.00)
        amtPaidFromLoan = Decimal(0.00)
        amtDueFromUser = Decimal(0.00)
        amtPaidFromUser = Decimal(0.00)
        # build discrepancy log file name
        config = Config()
        log_fh = open(config.getConfig('discrepancy_log'), 'a')
        # current date
        from time import gmtime, strftime
        now = strftime('%Y-%m-%d', gmtime())
        # get amountDue and amountPaid totals from user instance
        borrowerKey = loan.get('borrowerKey')
        borrower = self.fetchUserByBorrowerKey(borrowerKey)
        if not borrower :
            log_fh.write(now + ' : User entry for ' + borrowerKey + ' not found ' + "\n")
        else :
            # convert from NumberDecimal to Python decimal.Decimal
            amtDueFromUser = borrower.get('amountDue').to_decimal()
            amtPaidFromUser = borrower.get('amountPaid').to_decimal()
            # update amounts
            amtDueFromUser -= amtPaid
            amtPaidFromUser += amtPaid
            # perform update
            filt = {'userKey' : borrower.getKey()}
            updateDoc = {
                '$set' : {
                    'amountDue' : Decimal128(str(amtDueFromUser)),
                    'amountPaid' : Decimal128(str(amtPaidFromUser))
                }
            }
            self.collection.update_one(filt, updateDoc)
            # accuracy check: calculate amountDue and amountPaid totals from loan.payments
            for doc in loan.getPayments() :
                amtDueFromLoan += doc['amountDue']
                amtPaidFromLoan += doc['amountPaid']
            # log any discrepancies but do not take any further action
            if amtDueFromUser != amtDueFromLoan :
                log_fh.write(now + ' : Amount due discrepancy for : ' + borrower.getFullName() + ' : ' + borrowerKey + "\n")
                log_fh.write('--data from "users" collection: ' + str(amtDueFromUser) + "\n")
                log_fh.write('--data from "loans" collection: ' + str(amtDueFromLoan) + "\n")
            if amtPaidFromUser != amtPaidFromLoan :
                log_fh.write(now + ' : Amount paid discrepancy for : ' + borrower.getFullName() + ' : ' + borrowerKey + "\n")
                log_fh.write('--data from "users" collection: ' + str(amtPaidFromUser) + "\n")
                log_fh.write('--data from "loans" collection: ' + str(amtPaidFromLoan) + "\n")
        log_fh.close()
