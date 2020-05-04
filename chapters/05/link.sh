#!/bin/bash
echo "Linking python3 to /usr/bin/python ..."
if [ -f /usr/bin/python3.6 ]
then 
    PY_LINK=/usr/bin/python3.6
fi
if [ -f /usr/bin/python3.7 ]
then 
    PY_LINK=/usr/bin/python3.7
fi
if [ -f /usr/bin/python3.8 ]
then 
    PY_LINK=/usr/bin/python3.8
fi
if [ -f /usr/bin/python ]
then
    rm /usr/bin/python
fi
ln -s $PY_LINK /usr/bin/python

