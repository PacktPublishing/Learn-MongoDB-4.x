# sweetscomplete.entity.common

from sweetscomplete.entity.base import Base

class Common(Base) :
    fields = dict({
        'key'  : '',
        'data' : ''
    })
    def getKey(self) :
        return self['key']
    
    def getData(self) :
        return self['data']
