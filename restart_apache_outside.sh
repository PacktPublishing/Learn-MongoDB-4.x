#!/bin/bash
docker exec learn-mongo-server-1 /bin/bash -c "chown -R www-data /repo/www"
docker exec learn-mongo-server-1 /bin/bash -c "service apache2 restart"
