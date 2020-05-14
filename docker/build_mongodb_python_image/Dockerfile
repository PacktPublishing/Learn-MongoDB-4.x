#
# MongoDB Server #1
#

# Pull base image.
FROM mongo

# Set up init script
COPY ./init.sh /tmp/init.sh
RUN chmod +x /tmp/init.sh
RUN /tmp/init.sh
