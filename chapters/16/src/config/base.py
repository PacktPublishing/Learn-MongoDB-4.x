# configuration file for production

class Base :
    config = {}
    def getConfig(self, key = None) :
        if key :
            return self.config[key]
        return self.config
