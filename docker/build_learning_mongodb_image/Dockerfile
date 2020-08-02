#
# Learning MongoDB Server for Chapters 3 - 12
#

# Pull base image.
FROM unlikelysource/mongodb_python:latest

# Copy Apache vhost config files
COPY ./learning.mongodb.local.conf /etc/apache2/sites-available/
COPY ./booksomeplace.local.conf /etc/apache2/sites-available/
COPY ./chap07.booksomeplace.local.conf /etc/apache2/sites-available/
COPY ./chap09.booksomeplace.local.conf /etc/apache2/sites-available/
COPY ./chap08.booksomeplace.local.conf /etc/apache2/sites-available/
COPY ./chap10.biglittle.local.conf /etc/apache2/sites-available/

# Set up and run init script
COPY ./init.sh /tmp/init.sh
RUN chmod +x /tmp/init.sh
RUN /tmp/init.sh
