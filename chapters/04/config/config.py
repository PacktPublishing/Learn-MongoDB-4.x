# sets include path
# Usage Example: 
#    Relative Path: set_include_path("../../src", True)
#    Absolute Path: set_include_path("/home/your/code/src")

import os
import sys
def set_include_path(modsdir, relative = False) :
    if (relative) :
        modsdir = os.getcwd() + os.sep + modsdir
    else :
        modsdir = os.path.realpath(modsdir)
    sys.path.insert(1, modsdir)
