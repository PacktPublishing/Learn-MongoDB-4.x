doc = {
    _id : "learn_mongodb",
    members: [
        { _id: 1, host: "member1.biglittle.local" },
        { _id: 2, host: "member2.biglittle.local" },
        { _id: 3, host: "member3.biglittle.local" },
    ]
}
rs.initiate(doc);