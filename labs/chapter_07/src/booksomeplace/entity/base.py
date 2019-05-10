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

class Name(Base) :
    fields = {
        'title'  : '',
        'first'  : '',
        'middle' : '',
        'last'   : '',
        'suffix' : ''
    }

class Location(Base) :
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
    fields = {
        'email'    : '',
        'phone'    : '',
        'socMedia' : {}
    }
