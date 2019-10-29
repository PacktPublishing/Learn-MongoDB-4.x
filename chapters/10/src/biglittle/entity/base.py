# biglittle.entity.base

class Base(dict) :

    def populate(self : '', data = {}) :
        # initialize with default values or data
        for key, value in self.fields.items() :
            if key in data :
                self[key] = data[key]
            else :
                self[key] = value

    def get(self, key) :
        if key in self :
            return self[key]
        else :
            return None

    def set(self, key, value) :
        self[key] = value

    def toJson(self) :
        import json
        return json.dumps(self)

    def getUpdateDoc(self) :
        doc = {}
        for key, value in self.fields.items() :
            doc.update({'$set' : {key : self[key]}})
        return doc
