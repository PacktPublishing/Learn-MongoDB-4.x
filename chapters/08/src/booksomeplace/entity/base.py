# booksomeplace.entity.base

class Base(dict) :
    def __init__(self : '', data = {}) :
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

class Name(Base) :
    formFieldPrefix = 'name_'
    fields = {
        'title'  : '',
        'first'  : '',
        'middle' : '',
        'last'   : '',
        'suffix' : ''
    }

class Location(Base) :
    formFieldPrefix = 'location_'
    fields = {
        'streetAddress'    : '',
        'buildingName'     : '',
        'floor'            : '',
        'roomAptCondoFlat' : '',
        'city'             : '',
        'stateProvince'    : '',
        'locality'         : '',
        'country'          : '',
        'postalCode'       : '',
        'latitude'         : '',
        'longitude'        : ''
    }

class Contact(Base) :
    formFieldPrefix = 'contact_'
    fields = {
        'email'    : '',
        'phone'    : '',
        'socMedia' : {}
    }
