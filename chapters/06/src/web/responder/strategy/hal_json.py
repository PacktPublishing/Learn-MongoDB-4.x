# web.responder.strategy.hal_json

from web.responder.strategy.base import Base

"""
Implements JSON responses using hal+json format
"""
class HalJsonStrategy(Base) :

    content_type = 'application/hal+json'
    
    def render(self) :
        payload       = dict({'_links':{'self':{'href':self.link }}})
        if self.error :
            payload['error'] = self.error
        if self.data :
            for key, value in self.data.items() :
                payload.update({ key : value })
        return self.buildOutput(self.content_type, payload)
