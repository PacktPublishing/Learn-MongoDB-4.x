#
# MongoDB Shard #3
#

# Pull base image.
FROM mongo

# Install basic tools
RUN \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install inetutils-ping && \
    apt-get -y install net-tools
