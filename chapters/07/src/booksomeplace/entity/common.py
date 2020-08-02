# booksomeplace.entity.common

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))
from booksomeplace.entity.base import Base

class Common(Base) :
    fields = {
        'key'   : '',
        'value' : []
    }
