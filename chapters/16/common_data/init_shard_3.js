// initializes shard 3 as single node replica set
doc = {
    _id : "repl_shard_3",
    members: [
        { _id: 1, host: "shard3.biglittle.local:27018" }
    ]
}
rs.initiate(doc);
