# sweetscomplete/entity/common

import json
from sweetscomplete.entity.base import Base

class Common(Base) :

    key  = ""
    data = None

    # @param string jsonDoc: JSON document
    # @param bool is_json: set to True if you need to json decode, False otherwise
    def __init__(self, jsonDoc, is_json = True) :
        if is_json :
            jsonDoc = json.loads(jsonDoc)
        self.key  = jsonDoc['key']
        self.data = jsonDoc['data']

    # produces a dictionary from the current state of the object
    def toDict(self) :
        return dict({
            'key'  : self.key,
            'data' : self.data
        })
