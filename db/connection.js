// create server
var mysql = require("mysql");
var inquier = require("inquirer");
var util = require("util");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'KPH100',
  database : 'trackerDB'
});

// connect to run the code
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
    
  });
  connection.query = util.promisify(connection.query)
  
  module.exports = connection;