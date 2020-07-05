#!/bin/bash

# initializes all nodes as single node replica sets
docker exec learn-mongo-shard-1 /bin/bash -c "mongo /data/common/init_shard_1.js"
docker exec learn-mongo-shard-2 /bin/bash -c "mongo /data/common/init_shard_2.js"
docker exec learn-mongo-shard-3 /bin/bash -c "mongo /data/common/init_shard_3.js"
docker exec learn-mongo-config /bin/bash -c "mongo /data/common/init_shard_config.js"

# copies sample data to shard-1
docker exec learn-mongo-shard-1 /bin/bash -c "mongo /data/common/biglittle_common_insert.js"
docker exec learn-mongo-shard-1 /bin/bash -c "mongo /data/common/biglittle_users_insert.js"
docker exec learn-mongo-shard-1 /bin/bash -c "mongo /data/common/biglittle_loans_insert.js"
