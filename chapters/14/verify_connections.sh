#!/bin/bash
# Tests connectivity between replica set members
docker exec learn-mongo-member-1 /bin/bash -c "ping -c1 member2.biglittle.local"
docker exec learn-mongo-member-2 /bin/bash -c "ping -c1 member3.biglittle.local"
docker exec learn-mongo-member-3 /bin/bash -c "ping -c1 member1.biglittle.local"
