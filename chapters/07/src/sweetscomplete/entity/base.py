# sweetscomplete.entity.customer

import json

class Base :

    # produces a JSON document from the current state of the object
    def toJson(self) :
        return json.dumps(self.toDict())
