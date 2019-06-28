# configuration file

import os

class Config :
    config = dict({
        'db' : {
            'host'     : 'localhost',
            'port'     : 27017,
            'database' : 'booksomeplace'
        },
        'rooms' : {
            'details_url' : 'http://chap08.booksomeplace.local/property/room/details/',
        },
    })

    def getConfig(self, key = None) :
        if key :
            return self.config[key]
        return self.config
