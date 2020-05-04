#!/bin/bash
docker exec learn-mongo-server-1 /bin/bash -c "service apache2 stop"
docker exec learn-mongo-server-1 /bin/bash -c "service apache2 start"
