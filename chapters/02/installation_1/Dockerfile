#
# MongoDB Installation Container
# Use this container to safely test your skills installing MongoDB
# Optionally: you can also install the PyMongo driver if you wish
#

# Pull base image for latest long term support version of Ubuntu
FROM ubuntu:latest

# Install basic tools + MongoDB installation pre-requisites
RUN \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install vim && \
    apt-get -y install inetutils-ping && \
    apt-get -y install net-tools && \
    apt-get -y install wget && \
    apt-get -y install gnupg && \
    apt-get -y install systemd && \
    apt-get -y install python3-pip

# Set up "python3" to link to "python"
RUN ln -s /usr/bin/python3 /usr/bin/python

