#!/bin/bash
export PY_VER="3.8"
export PY_PATH="/usr/bin/python${PY_VER}"

# install core software needed for Learning MongoDB 4.x
apt-get update
apt-get -y upgrade
apt-get -y install vim
apt-get -y install inetutils-ping
apt-get -y install net-tools
apt-get -y install curl
apt-get -y install apache2
apt-get -y install wget
apt-get -y install python`echo $PY_VER`
apt-get -y install python3-distutils --reinstall

# create links to python3.8
if [ -f /usr/bin/python ]
then
  rm -v /usr/bin/python
fi
if [ -f /usr/bin/python3 ]
then
  rm -v /usr/bin/python3
fi
ln -s -v $PY_PATH /usr/bin/python
ln -s -v $PY_PATH /usr/bin/python3

# install pip3 + pymongo + bcrypt
echo "Installing pip3 ... "
wget -O /tmp/get-pip.py https://bootstrap.pypa.io/get-pip.py
python /tmp/get-pip.py
pip3 install --upgrade pip
pip3 install --upgrade setuptools
pip3 install pymongo
pip3 install bcrypt
