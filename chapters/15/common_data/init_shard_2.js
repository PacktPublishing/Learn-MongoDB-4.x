// initializes shard 2 as single node replica set
doc = {
    _id : "repl_shard_2",
    members: [
        { _id: 1, host: "shard2.biglittle.local:27018" }
    ]
}
rs.initiate(doc);
