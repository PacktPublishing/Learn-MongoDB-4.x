#!/bin/bash

# Modify
echo "Modifying mongod.conf logfile name ..."
cp /tmp/mongod.conf /etc/mongod.conf
sed -i -e "s/member_X/member_"$1"/g" /etc/mongod.conf

# Append ./hosts to /etc/hosts in container
echo "Appending entries to /etc/hosts ..."
cat /tmp/hosts >>/etc/hosts

echo "Done with member "$1
