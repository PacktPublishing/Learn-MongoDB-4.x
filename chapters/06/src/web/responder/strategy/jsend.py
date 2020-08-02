# web.responder.strategy.jsend

from web.responder.strategy.base import Base

"""
Implements JSON responses using JSend format
"""
class JsendStrategy(Base) :

    content_type = 'application/json'
    
    def render(self) :
        if self.error :
            payload     = { 'status' : 'error', 'message' : self.error }
        if self.data :
            count = 1
            post  = {}
            for key, value in self.data.items() :
                post.update({ key : value })
            if count == 1 :
                payload = { 'status' : 'success', 
                            'link'   : self.link,
                            'data'   : { 'post' : post } }
            else :
                payload = { 'status' : 'success', 
                            'link'   : self.link,
                            'data'   : { 'posts' : post } }
        return self.buildOutput(self.content_type, payload)
