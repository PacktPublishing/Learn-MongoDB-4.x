#
# MongoDB Replica Set Member #2
#

# Pull base image.
FROM mongo

# Copy mongod.conf
COPY ./member_2.conf /etc/mongod.conf

# Installs basic tools
RUN \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install git && \
    apt-get -y install vim && \
    apt-get -y install net-tools