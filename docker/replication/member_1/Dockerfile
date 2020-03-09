#
# MongoDB Replica Set Member #1
#

# Pull base image.
FROM mongo

# Copy mongod.conf
COPY ./member_1.conf /etc/mongod.conf

# Installs basic tools
RUN \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install git && \
    apt-get -y install vim && \
    apt-get -y install net-tools

