// initializes config server as single node replica set
doc = {
    _id : "repl_config",
    members: [
        { _id: 1, host: "config.biglittle.local" }
    ]
}
rs.initiate(doc);
