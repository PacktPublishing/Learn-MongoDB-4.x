# tests web.session.Session

import os,sys
sys.path.append(os.path.realpath('src'))
import pprint
from web.session import Session
sess = Session(os.path.realpath('../../www/data'))

token = sess.genToken()
sess.setSessInfoByKey('test', {'a':'ABC','x':'XYZ'})

info = sess.getSessInfoByKey('test');
pprint.pprint(info)

if sess.destroySession(token) :
    print('Session Destroyed')
else :
    print('Unable to Destroy Session')
