// create a database and collection

// NOTE: the "use" command only works when in the shell
use learn;
db.study.insertOne(
  {
    "chapterName"   : "Essential MongoDB Administration Techniques",
    "chapterNumber" : 3,
    "section"       : "Using the Mongo Shell for Common Database Operations",
    "notes"         : "Learned how to create a database and collection"
  }
);
// Lab: Adding Documents
db.study.insertMany(
    [
      {
        "chapterName"   : "Essential MongoDB Administration Techniques",
        "chapterNumber" : 3,
        "section"       : "Using Mongo Shell Scripts",
        "notes"         : "Created scripts for commonly used commands"
      },
      {
        "chapterName"   : "Overview of MongoDB 4.0",
        "chapterNumber" : 1,
        "section"       : "New Features",
        "notes"         : "Learned about multi-document transaction support"
      },
      {
        "chapterName"   : "Setting up the MongoDB Python Driver",
        "chapterNumber" : 2,
        "section"       : "Python Driver Installation and Compatibility",
        "notes"         : "Learned how to choose the correct version"
      }
    ]
);
