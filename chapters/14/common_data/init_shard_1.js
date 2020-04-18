// first we configure a single node replica set
doc = {
    _id : "repl_shard_1",
    members: [
        { _id: 1, host: "shard1.biglittle.local:27018" }
    ]
}
rs.initiate(doc);
