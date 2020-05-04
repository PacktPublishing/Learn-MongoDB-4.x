conn = new Mongo();
db = conn.getDB("learn");
db.chapters.drop();
db.chapters.insertMany([
{
    "chapterNumber" : 3,
    "chapterName"   : "Essential MongoDB Administration Techniques"
},
{
    "chapterNumber" :  1,
    "chapterName"   : "Introducing MongoDB 4.x"
},
{
    "chapterNumber" : 2,
    "chapterName"   : "Setting up MongoDB 4.x Draft complete"
},
{
    "chapterNumber" : 3,
    "chapterName"   : "Essential MongoDB Administration Techniques Draft"
},
{
    "chapterNumber" : 4,
    "chapterName"   : "Fundamentals of Database Design Draft"
},
{
    "chapterNumber" : 5,
    "chapterName"   : "Mission Critical MongoDB Database Tasks Draft"
},
{
    "chapterNumber" : 6,
    "chapterName"   : "Using AJAX and REST to Build a Database Driven Website Draft"
},
{
    "chapterNumber" : 7,
    "chapterName"   : "Advanced MongoDB Database Design Draft"
},
{
    "chapterNumber" : 8,
    "chapterName"   : "Using Documents with Embedded Lists and Objects Draft"
},
{
    "chapterNumber" : 9,
    "chapterName"   : "Handling Complex Queries in MongoDB Draft"
},
{
    "chapterNumber" : 10,
    "chapterName"   : "Working with Complex Documents Across Collections Draft"
},
{
    "chapterNumber" : 11,
    "chapterName"   : "Administering MongoDB Security Draft"
},
{
    "chapterNumber" : 12,
    "chapterName"   : "Developing in a Secured Environment Draft"
},
{
    "chapterNumber" : 13,
    "chapterName"   : "Deploying a Replica Set Draft complete"
},
{
    "chapterNumber" : 14,
    "chapterName"   : "Deploying a Sharded Cluster"
}
], {});
