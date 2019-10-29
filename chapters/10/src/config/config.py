# configuration file

import os

class Config :
    config = dict({
        'db' : {
            'host'     : 'localhost',
            'port'     : 27017,
            'database' : 'biglittle'
        },
        'temp_file' :  os.path.join(os.path.dirname(__file__), '..', '..', '..', '..', 'www', 'data', 'temp.txt'),
        'cache_file' :  os.path.join(os.path.dirname(__file__), '..', '..', '..', '..', 'www', 'data', 'cache.txt'),
        'discrepancy_log' :  os.path.join(os.path.dirname(__file__), '..', '..', '..', '..', 'www', 'data', 'discrepancy.log')
    })

    def getConfig(self, key = None) :
        if key :
            return self.config[key]
        return self.config
