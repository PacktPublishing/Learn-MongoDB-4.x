# web.responder.strategy.base

import json

"""
Base class for strategies returning JSON responses
"""
class Base :
    
    headers   = []
    data   = {}
    error  = ''
    status = 200
    link   = ''
    http_status  = { 
        200 : 'OK', 
        400 : 'BAD REQUEST', 
        404 : 'NOT FOUND', 
        500 : 'INTERNAL SERVER ERROR', 
        501 : 'NOT IMPLEMENTED' 
    }
    
    def __init__(self, data, error, status, link) :
        self.data  = data
        self.error = error
        self.link  = link
        if status in self.http_status :
            self.status = status
        else :
            self.status  = 400
            self.error   = self.error + ', ALSO: supported status codes: 200, 400, 500 or 501'

    def addHeader(self, header) :
        self.headers.extend([header]) 
        
    def buildOutput(self, content_type, payload) :
        # add initial headers
        self.addHeader('Status: ' + str(self.status) + ' ' + self.http_status[self.status])
        self.addHeader('Content-Type: ' + content_type)
        # add headers and send output
        output = ''
        for item in self.headers :
            output += item + "\r\n"
        output += "\r\n"
        output += json.dumps(payload)
        return output
