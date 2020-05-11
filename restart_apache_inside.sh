#!/bin/bash
echo "Assigning rights to web server user www-data ..."
chown -R www-data /repo/www
service apache2 restart
