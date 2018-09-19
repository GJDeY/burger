var mysql = require("mysql")
var connection = require

//setting connection info
var connecton = mysql.createConnection({
    host: "localhost",
    port: 3306,///this is the mysql port 
    user: "root",
    password: "root",
    database: burgers_db,
});

// connection to mySQL
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// Export connection to orm.js file
module.exports = connection;