// you only need these 2 commands if running the script externally
conn = new Mongo();
db = conn.getDB("learn");

// NOTE: this command only works when in the shell
use learn;

// simple insert
db.chapters.insertOne({
"chapterNumber" : 3,
"chapterName"
: "Essential MongoDB Administration Techniques"
});
