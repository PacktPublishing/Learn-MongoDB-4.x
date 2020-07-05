# to double the size of the oplog:
use local;
db.oplog.rs.stats().maxSize;
current = db.oplog.rs.stats().maxSize;
db.adminCommand({replSetResizeOplog: 1, size: current*2/1000000});
db.oplog.rs.stats().maxSize;
