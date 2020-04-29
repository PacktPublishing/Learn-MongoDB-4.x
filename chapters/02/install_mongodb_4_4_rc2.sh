#!/bin/bash
# This script installs MongoDB 4.4 release candidate 2
# Once MongoDB 4.4 is released, follow the directions in the book

# NOTE: if you are running this script as root, you need to take out any references to "sudo":
# wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
# echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/testing multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list

wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/testing multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
apt-get update

# install everything:
apt-get install -y mongodb-org=4.4.0~rc2

# Or do them one-by-one:
#apt-get install -y mongodb-org-server=4.4.0~rc2
#apt-get install -y mongodb-org-shell=4.4.0~rc2
#apt-get install -y mongodb-org-mongos=4.4.0~rc2
#apt-get install -y mongodb-org-tools=4.4.0~rc2

