#
# MongoDB Server #1
#

# Pull base image for MongoDB 4.4.0
FROM mongo:4.4.0-rc12-bionic

# Set up init script
COPY ./init.sh /tmp/init.sh
RUN chmod +x /tmp/init.sh
RUN /tmp/init.sh
