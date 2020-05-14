#!/bin/bash
echo "Wipes out all docker containers, images, volumes and networks ..."
echo "Are you sure?"
echo "Usage: wipe_out_all_docker_stuff.sh YES"
if [ $1 = "YES" ]
then
    docker-compose down
    docker container prune
    docker image prune
    docker volume prune
    docker network prune
fi
