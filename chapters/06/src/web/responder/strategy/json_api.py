# web.responder.strategy.json_api

from web.responder.strategy.base import Base

"""
Implements JSON responses using JSON:API format
"""
class JsonApiStrategy(Base) :

    content_type = 'application/vnd.api+json'
    
    def render(self) :
        payload       = dict({'links':{'self':self.link }})
        if self.error :
            payload['error'] = self.error
        if self.data :
            count = 1
            data = {}
            for key, value in self.data.items() :
                if 'category' in value :
                    prodType = value['category']
                else :
                    prodType = 'N/A'
                data.update({ count : { 'type' : prodType, 'id' : key, 'attributes' : value } })
                count += 1
            payload['data'] = data
        return self.buildOutput(self.content_type, payload)
