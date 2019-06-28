"""
booksomeplace.domain.booking
Description: module which interacts with the "bookings" collection
"""

import pymongo
from pymongo.cursor import CursorType

from booksomeplace.domain.base import Base
from booksomeplace.entity.base import Name, Contact
from booksomeplace.entity.booking import Booking

class BookingService(Base) :

    # defaults
    collectName = 'bookings'

    """
    Does a database look up based on provided query and projection
    @param JSON document query
    @param JSON document projection
    @param JSON document sort
    @return dict
    """
    def fetch(self, query, projection, sort) :
        return self.collection.find(query, projection, skip=0, limit=0, no_cursor_timeout=False, cursor_type=CursorType.NON_TAILABLE, sort=sort)

    def getTrendData(self, params) :

        # imports
        import json
        from datetime import datetime,timedelta

        # formulate query payment status
        query      = {'bookingInfo.paymentStatus':'confirmed'}
        projection = {'bookingInfo.arrivalDate':1,'totalPrice':1}
        sort       = [('bookingInfo.arrivalDate',1)]

        # add params to query
        if 'trend_city' in params and params['trend_city'] :
            query.update({'property.propertyAddr.city': {'$regex' :  '*' + params['trend_city'] + '*' }})
        if 'trend_region' in params and params['trend_region'] :
            query.update({'property.propertyAddr.stateProvince': params['trend_region']})
        if 'trend_locality' in params and params['trend_locality'] :
            query.update({'property.propertyAddr.locality': params['trend_locality']})
        if 'trend_country' in params and params['trend_country'] :
            query.update({'property.propertyAddr.country': params['trend_country']})

        final_query = {'$and':[query]}

        # run a query which returns revenue data based on criteria from the historic date up until today
        hist_data = self.fetch(query, projection, sort)

        # init vars
        today       = datetime.now()
        date_format = '%Y-%m-%d %H:%M:%S'
        start_year  = today.year - 2
        end_year    = today.year + 2
        year_span   = end_year - start_year + 1
        years       = range(start_year, end_year+1)
        months      = range(1,12+1)
        year1_mark   = (today.year - start_year - 1) * 12
        year2_mark   = (today.year - start_year - 2) * 12

        # pre-populate totals as a linear list
        total = [0.00 for key in range(1,year_span*12)]

        # accumulate totals by month
        for doc in hist_data :
            # grab information out of the return document
            arrDate   = datetime.strptime(doc['bookingInfo']['arrivalDate'], date_format)
            price     = doc['totalPrice']
            year_key  = arrDate.year - start_year
            month_key = arrDate.month - 1
            # update monthly total
            total[(year_key*12) + month_key] += price

        # pull factor
        if 'trend_factor' in params and params['trend_factor'] :
            factor = float(params['trend_factor'])
        else :
            factor = 0.10

        # avg monthly difference over the past 2 years
        avg_diff  = []
        last_year = []
        next_year = []

        # calculate difference between last 2 years month-by-month
        for month in range(1,13) :
            diff = total[year1_mark + month - 1] - total[year2_mark + month - 1]
            avg_diff.append(diff * factor)
            last_year.append(total[year1_mark + month - 1])

        # apply difference to generate trend data for next year
        for key in range(0,12) :
            next_year.append(last_year[key] + avg_diff[key])

        # define labels and series to return for chartist.js
        months = ['J','F','M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
        data = { 'labels' : months + months, 'series' : [last_year + next_year] }
        return data
