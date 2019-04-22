# configuration file

import os

class Config :
    config = dict({
        'db' : { 
            'host'     : 'localhost', 
            'port'     : 27017,
            'database' : 'sweetscomplete'
        },
        'pagination' : {
            'lines' : 4,
            'baseUrl' : '/chapter_06/history.py'
        },
        'session_storage' : os.path.realpath('../../www/data'),
        'ajax_url' : '/chapter_06/ajax.py'
    })

    def getConfig(self, key = None) :
        if key :
            return self.config[key]
        return self.config
