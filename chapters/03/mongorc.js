/* mongorc.js */
host = db.serverStatus().host;
cmd  = 1;
prompt = function () {
    upt  = db.serverStatus().uptime;
    dbn  = db.stats().db;
    return "\nMongoDB " + host + "@" + dbn
        + "[up:" + upt + " secs]\n" + cmd++ + ">";
}