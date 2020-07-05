#!/bin/bash
# Restores sample data to shard #1
docker exec learn-mongo-shard-1 /bin/bash -c "mongo --port 27018 /data/common/biglittle_common_insert.js"
docker exec learn-mongo-shard-1 /bin/bash -c "mongo --port 27018 /data/common/biglittle_loans_insert.js"
docker exec learn-mongo-shard-1 /bin/bash -c "mongo --port 27018 /data/common/biglittle_users_insert.js"
docker exec learn-mongo-shard-1 /bin/bash -c "mongo --port 27018 /data/common/biglittle_world_cities_insert.js"

