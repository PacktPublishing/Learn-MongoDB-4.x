# web.responder.rest

from web.responder.strategy.jsend import JsendStrategy
from web.responder.strategy.json_api import JsonApiStrategy
from web.responder.strategy.hal_json import HalJsonStrategy

"""
web.responder.rest
Description: mechanism for handling REST requests
"""
class RestResponder :

    json_strategy       = None
    header_accept       = None
    accepted_types      = {
        'json'     : { 'mime_type' : 'application/json',
                       'strategy' : 'JsendStrategy' },
        'json_api' : { 'mime_type' : 'application/vnd.api+json', 
                       'strategy' : 'JsonApiStrategy' },
        'hal_json' : { 'mime_type' : 'application/hal+json',     
                       'strategy' : 'HalJsonStrategy' }
    }
    
    """
    @param dict data : data to be sent out in JSON format
    """
    def __init__(self, environ, data, error, status) :
        
        # determine the link
        if 'REQUEST_URI' in environ :
            link = environ['REQUEST_URI']

        # process accept header
        if 'HTTP_ACCEPT' in environ :
            self.header_accept = environ['HTTP_ACCEPT']
        else :
            self.header_accept = 'application/json'

        # set strategy based on "Accept" header
        strategy = 'json'
        for key, info in self.accepted_types.items() :
            if info['mime_type'] in self.header_accept :
                strategy = key
                break
                
        # default to JsendStrategy if none selected
        if strategy == 'hal_json' :
            self.json_strategy = HalJsonStrategy(data, error, status, link)
        elif strategy == 'json_api' :
            self.json_strategy = JsonApiStrategy(data, error, status, link)
        else :
            self.json_strategy = JsendStrategy(data, error, status, link)
            
    """
    @return string response : use the strategy to produce JSON output
    """
    def render(self) :
        return self.json_strategy.render()
