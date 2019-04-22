# sweetscomplete.entity.base

import json

class Base(dict) :

    fields = dict()

    def __init__(self, doc = None) :
        if doc :
            # initialize to defaults
            for key, value in self.fields.items() : self[key] = value
            if isinstance(doc, dict) :
                # initialize from dictionary
                self.setFromDict(doc)
            elif isinstance(doc, str) :
                # initialize from JSON
                self.setFromJson(doc)                

    def setFromDict(self, doc) :
        for key, value in self.fields.items() : 
            if key in doc : self[key] = doc[key]
        
    def setFromJson(self, jsonDoc) :
        doc = json.loads(jsonDoc)
        self.setFromDict(doc)                
        
    def set(self, key, value) :
        self[key] = value
        
    def get(self, key) :
        if key in self :
            return self[key]
        else :
            return None

    def toJson(self, filtered = []) :
        jsonDoc = dict()
        for k,v in self.items() :
            if k in filtered :
                pass
            elif k == '_id' :
                jsonDoc[k] = str(v)
            else :
                jsonDoc[k] = v
        return json.dumps(jsonDoc)
