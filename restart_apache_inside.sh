#!/bin/bash
echo "Assigning rights to web server user www-data ..."
chgrp -R www-data /repo/www
chmod -R 775 /repo/www
echo "Restarting Apache ..."
service apache2 restart
