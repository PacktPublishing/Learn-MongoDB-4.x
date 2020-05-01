#!/bin/bash
# This script installs MongoDB 4.4 release candidate 2

echo "*********************************************"
echo "* Usage:  install_mongodb_4_4.sh <VERSION>  *"
echo "*         (<VERSION> defaults to 4.4.0~rc3) *"
echo "*********************************************"

# set vars
VERS="4.4.0~rc3"
USER=`id -u -n`
KEY_NORMAL="deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse"
KEY_TESTING="deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/testing multiverse"
MONGODB_4_4_SRCS="/etc/apt/sources.list.d/mongodb-org-4.4.list"
MONGODB_4_4_KEY_SVR="https://www.mongodb.org/static/pgp/server-4.4.asc"
MSG="Logged in as root"

# get rid of existing sources for mongodb 4.4
rm $MONGODB_4_4_SRCS

# override version if provided

# set "sudo" if user not root
if [ "${USER}" != "root" ]
then
    # grab key for mongodb 4.4 sources repo
    wget -qO - `echo $MONGODB_4_4_KEY_SVR` | sudo apt-key add -
    # add to sources list for mongodb 4.4
    echo $KEY_NORMAL | sudo tee `echo $MONGODB_4_4_SRCS`
    echo $KEY_TESTING | sudo tee -a `echo $MONGODB_4_4_SRCS`
    # install MongoDB
    sudo apt-get update
    sudo apt-get install -y mongodb-org=`echo $VERS`
    sudo mongod -f /etc/mongod.conf &
else
    # grab key for mongodb 4.4 sources repo
    wget -qO - `echo $MONGODB_4_4_KEY_SVR` | apt-key add -
    # add to sources list for mongodb 4.4
    echo $KEY_NORMAL | tee `echo $MONGODB_4_4_SRCS`
    echo $KEY_TESTING | tee -a `echo $MONGODB_4_4_SRCS`
    # install MongoDB
    apt-get update
    apt-get install -y mongodb-org=`echo $VERS`
    mongod -f /etc/mongod.conf &
fi

ps -ax
