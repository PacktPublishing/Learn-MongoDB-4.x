// initializes config server as single node replica set
doc = {
    _id : "repl_config",
    members: [
        { _id: 1, host: "config1.biglittle.local:27019" }
    ]
}
rs.initiate(doc);
