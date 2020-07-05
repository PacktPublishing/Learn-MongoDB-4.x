#
# MongoDB Replica Set Member #1
#

# Pull base image.
FROM mongo

# Copy temp files and run init script
COPY ./mongod.conf /tmp
COPY ./hosts /tmp
COPY ./init.sh /tmp
RUN chmod +x /tmp/init.sh
RUN /tmp/init.sh 1

# Install basic tools
RUN \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install vim && \
    apt-get -y install inetutils-ping && \
    apt-get -y install net-tools
