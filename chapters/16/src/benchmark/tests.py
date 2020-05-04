# biglittle.utils.utils
# TODO: need to use a cookie to store a unique user identifier
#       that will then be used for the cache_file
#       otherwise 2 users logged in simultaneously will overwrite each other's messages

import json
import os,sys,pprint
from config.config import Config

class Utils :

    """
    Diagnostic utility which if ret_val is set TRUE, returns the internal value of obj
    @param object obj
    @param bool ret_val : set True to return value instead of direct output
    @return string | None
    """
    def var_export(self, obj, ret_val = False) :
        if ret_val == False :
            pprint.pprint(obj)
            return None
        config = Config()
        fn = config.getConfig('temp_file')
        temp = sys.stdout             # store original stdout object for later
        sys.stdout = open(fn, 'w')    # redirect all prints to this log file
        pprint.pprint(obj)
        sys.stdout.close()            # ordinary file object
        sys.stdout = temp             # restore print commands to interactive prompt
        return open(fn, 'r').read()

    """
    Reads from cache
    If key is provided, returns obj for that key
    If key is NOT provided, returns everything cached
    @param string key
    @param bool del_after_read : set True to delete cache item after reading
    @return obj
    """
    def read_cache(self, key = None, del_after_read = False) :
        config = Config()
        fn   = config.getConfig('cache_file')
        info = {}
        val  = None
        if os.path.exists(fn) :
            raw_info = open(fn, 'r').read().strip()
            if len(raw_info) > 1 :
                info = json.loads(raw_info)
        if key :
            if key in info :
                val = info[key]
                if del_after_read :
                    self.del_cache(key)
        else :
            val = info
        return val

    """
    Writes to cache
    Reads existing item from cache
    Adds or overwrites key with specified value
    @param string key
    @param obj value
    @return bool : True if write was OK
    """
    def write_cache(self, key, value) :
        info = self.read_cache()
        info.update({ key : value })
        config = Config()
        fn = config.getConfig('cache_file')
        fh = open(fn, 'w')
        result = fh.write(json.dumps(info))
        fh.close()
        return result

    """
    Removes item from cache
    @param string key
    @return bool : True if write was OK
    """
    def del_cache(self, key) :
        info = self.read_cache()
        if key in info :
            del info[key]
        config = Config()
        fn = config.getConfig('cache_file')
        fh = open(fn, 'w')
        result = fh.write(json.dumps(info))
        fh.close()
        return result
