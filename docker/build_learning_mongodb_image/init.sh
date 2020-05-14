#!/bin/bash
apt-get update
apt-get -y install apache2-utils
apt-get -y install apache2-dev
apt-get -y install libapache2-mod-wsgi
apt-get -y install python3-dev

echo "ServerName server1" >>/etc/apache2/apache2.conf
a2enmod cgid
a2enmod wsgi

echo "Adding virtual host config files for chapters 5 through 10 ..."
a2ensite learning.mongodb.local.conf
a2ensite booksomeplace.local.conf
a2ensite chap07.booksomeplace.local.conf
a2ensite chap09.booksomeplace.local.conf
a2ensite chap08.booksomeplace.local.conf
a2ensite chap10.biglittle.local.conf

echo "Linking python3 to /usr/bin/python ..."
if [ -f /usr/bin/python3.6 ]
then
    export PY_LINK=/usr/bin/python3.6
fi
if [ -f /usr/bin/python3.7 ]
then
    export PY_LINK=/usr/bin/python3.7
fi
if [ -f /usr/bin/python3.8 ]
then
    export PY_LINK=/usr/bin/python3.8
    apt-get -y install python3.8-dev
fi
if [ -f /usr/bin/python3.9 ]
then
    export PY_LINK=/usr/bin/python3.9
    apt-get -y install python3.9-dev
fi
if [ -f /usr/bin/python ]
then
    rm -v /usr/bin/python
fi
ln -s $PY_LINK /usr/bin/python
if [ -f /usr/bin/python3 ]
then
    rm -v /usr/bin/python3
fi
ln -s -v $PY_LINK /usr/bin/python3

echo "Upgrading pip ... "
pip3 install --upgrade pip
pip3 install --upgrade setuptools

echo "Installing mod-wsgi and django ..."
pip3 install django
pip3 install mod-wsgi

echo "Copying new wsgi modules into Apache module structure ..."
export MOD_WSGI=`find /usr/local/lib -name *mod_wsgi*gnu.so`
if [ -f /usr/lib/apache2/modules/mod_wsgi.so-latest ]
then
    rm -v /usr/lib/apache2/modules/mod_wsgi.so-latest
fi
ln -s -v $MOD_WSGI /usr/lib/apache2/modules/mod_wsgi.so-latest
echo "LoadModule wsgi_module /usr/lib/apache2/modules/mod_wsgi.so-latest" > /etc/apache2/mods-available/wsgi.load
