// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("learn");

// load the "learn" database
load("/repo/sample_data/learn_insert.js");

// browse
db.chapters.find();

// look for chapter 3
db.chapters.find({"chapterNumber":3});

// delete by ID (make sure you enter an ID in place of "PUT ID HERE")
db.chapters.deleteOne({"_id":"PUT ID HERE"});

// look again
db.chapters.find({"chapterNumber":3});

// delete by ObjectId (make sure you enter an ID in place of "PUT ID HERE")
db.chapters.deleteOne({"_id":ObjectId("PUT ID HERE")});
