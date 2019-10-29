# biglittle.entity.loan

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath('../../../src'))
from biglittle.entity.base import Base
from decimal import Decimal
from bson.decimal128 import Decimal128

class Payment(Base) :
    fields = {
        'amountDue'  : 0.00,
        'amountPaid' : 0.00,
        'dueDate'    : '',
        'status'     : ''
    }

class LoanInfo(Base) :
    fields = {
        'principal'     : 0.00,
        'numPayments'   : 0,
        'annualRate'    : 0.00,
        'effectiveRate' : 0.00,
        'monthlyPymt'   : 0.00
    }
    def getMonthlyPayment(self) :
        if 'monthlyPymt' in self :
            return self['monthlyPymt']
        else :
            return 0.00

class Loan(Base) :
    payment = Payment()
    loanInfo = LoanInfo()
    fields = {
        'loanKey'     : '',
        'borrowerKey' : None,
        'lenderKey'   : None,
        'overpayment' : 0.00,
        'loanInfo'    : loanInfo.populate(),
        'payments'    : [payment.populate()]
    }

    """
    @return string loanKey
    """
    def getKey(self) :
        return self['loanKey']

    def getLoanInfo(self) :
        return LoanInfo(self['loanInfo'])

    def getPayments(self) :
        payments = []
        for doc in self['payments'] :
            payments.append(Payment(doc))
        return payments

    """
    Converts monetary fields from decimal.Decimal to bson.decimal128.Decimal128
    @return bool True
    """
    def convertDecimalToBson(self) :
        # convert direct fields
        self['overpayment'] = Decimal128(str(self['overpayment']))
        # convert payments
        if 'payments' in self :
            for doc in self['payments'] :
                doc['amountPaid'] = Decimal128(str(doc['amountPaid']))
                doc['amountDue'] = Decimal128(str(doc['amountDue']))
        # convert loanInfo financial fields
        loanInfo = self['loanInfo']
        loanInfo['principal']      = Decimal128(str(loanInfo['principal']))
        loanInfo['annualRate']     = Decimal128(str(loanInfo['annualRate']))
        loanInfo['effectiveRate']  = Decimal128(str(loanInfo['effectiveRate']))
        loanInfo['monthlyPymt']    = Decimal128(str(loanInfo['monthlyPymt']))
        return True

    """
    Converts monetary fields from bson.decimal128.Decimal128 to decimal.Decimal
    @return void
    """
    def convertBsonToDecimal(self) :
        # first make sure financial fields are all in BSON
        self.convertDecimalToBson()
        # convert direct fields
        self['overpayment'] = self['overpayment'].to_decimal()
        # convert payments
        if 'payments' in self :
            for doc in self['payments'] :
                doc['amountPaid'] = doc['amountPaid'].to_decimal()
                doc['amountDue'] = doc['amountDue'].to_decimal()
        # convert loanInfo financial fields
        loanInfo = self['loanInfo']
        loanInfo['principal']      = loanInfo['principal'].to_decimal()
        loanInfo['annualRate']     = loanInfo['annualRate'].to_decimal()
        loanInfo['effectiveRate']  = loanInfo['effectiveRate'].to_decimal()
        loanInfo['monthlyPymt']    = loanInfo['monthlyPymt'].to_decimal()
        return True

