#
# Learning MongoDB Server for Chapters 3 - 12
#

# Pull base image.
FROM unlikelysource/learning_mongodb
COPY ./init.sh /tmp/init.sh
RUN  chmod +x /tmp/init.sh
RUN  /tmp/init.sh
COPY ./run_services.sh /tmp/run_services.sh
RUN  chmod +x /tmp/run_services.sh
CMD /tmp/run_services.sh