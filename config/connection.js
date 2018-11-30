
var mysql = require("mysql");
var connection;

if( process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWS_URL);

}else{
   connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "burgers_db"
});

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;
