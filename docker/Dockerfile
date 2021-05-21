#
# Learning MongoDB Server for Chapters 3 - 12
#

# Pull base image.
FROM unlikelysource/learning_mongodb:latest
COPY ./hosts /etc/hosts
COPY ./mongod.conf /etc/mongod.conf
COPY ./init.sh /tmp/init.sh
COPY ./run_services.sh /tmp/run_services.sh
RUN chmod +x /tmp/*.sh
RUN ./tmp/init.sh
CMD ["/tmp/run_services.sh"]
