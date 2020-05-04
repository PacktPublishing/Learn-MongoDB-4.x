#!/bin/bash
apt-get update
apt-get -y install apache2-utils
apt-get -y install apache2-dev
apt-get -y install libapache2-mod-wsgi
apt-get -y install python3-dev

echo "Installing mod-wsgi and bcrypt ..."
pip3 install mod-wsgi

echo "ServerName server1" >>/etc/apache2/apache2.conf
a2enmod cgid
a2enmod wsgi

echo "Adding virtual host config files for chapters 5 through 10 ..."
a2ensite learning.mongodb.local.conf
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
fi
if [ -f /usr/bin/python3.9 ]
then
    export PY_LINK=/usr/bin/python3.9
fi
if [ -f /usr/bin/python ]
then
    rm /usr/bin/python
fi
ln -s $PY_LINK /usr/bin/python
if [ -f /usr/bin/python3 ]
then
    rm /usr/bin/python3
fi
ln -s $PY_LINK /usr/bin/python3

echo "Assigning rights to web server user www-data ..."
chown -R www-data /repo/www
echo 'From outside Docker, on your host computer:'
echo '    (1) To initialize Apache run this script:'
echo '        /path/to/repo/restart_apache_outside.sh"'
echo '    (2) To restore sample data run this script:'
echo '        /path/to/repo/restore_data_outside.sh"'
echo 'To shell into the Docker container, do this:'
echo '    docker exec -it learn-mongo-server-1 /bin/bash'
echo '    (1) To initialize Apache from inside the container run this script:'
echo '        /path/to/repo/restart_apache_inside.sh"'
echo '    (2) To restore sample data from inside the container run this script:'
echo '        /path/to/repo/restore_data_inside.sh"'
