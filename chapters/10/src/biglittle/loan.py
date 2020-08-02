# biglittle.entity.common

# tell python where to find module source code
import os,sys
sys.path.append(os.path.realpath("../../../src"))
from biglittle.entity.base import Base

class Common(Base) :
    fields = {
        'key'   : '',
        'value' : []
    }
