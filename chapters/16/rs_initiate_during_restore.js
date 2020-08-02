// first we configure a single node replica set
doc = {
    _id : "learn_mongodb",
    members: [
        { _id: 1, host: "member1.biglittle.local" }
    ]
}
rs.initiate(doc);

// next we add member one at a time
member = {
    _id: 2,
    host: "member2.biglittle.local"
}
rs.add(member);

member = {
    _id: 3,
    host: "member3.biglittle.local"
}
rs.add(member);

// we can then confirm the replica set status
rs.status();
