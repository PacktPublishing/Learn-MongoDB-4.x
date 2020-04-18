#!/bin/bash
# Tests connectivity between replica set shards
docker exec learn-mongo-shard-1 /bin/bash -c "ping -c1 shard2.biglittle.local"
docker exec learn-mongo-shard-2 /bin/bash -c "ping -c1 shard3.biglittle.local"
docker exec learn-mongo-shard-3 /bin/bash -c "ping -c1 config1.biglittle.local"
docker exec learn-mongo-config /bin/bash -c "ping -c1 mongos1.biglittle.local"
docker exec learn-mongo-mongos /bin/bash -c "ping -c1 shard1.biglittle.local"
