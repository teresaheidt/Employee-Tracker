const inquirer = require('inquirer');
const DB = require('./db/DB');
require('dotenv').config();
const { printTable } = require('console-table-printer');

// function which prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
        "View all employees",
        "View all employees by manager",
        "View all employees by department",
        "Add employee",
        "Delete employee",
        "Update employee role",
        "Update employee manager",
        "Exit"
        ]
      })
      .then(function(answer) {
        // based on their answer, switch functions
        switch (answer.action) {
          case "View all employees":
            employeeSearch();
            break;

          case "View all employees by manager":
            managerSearch();
            break;

          case "View all employees by department":
            departmentSearch();
            break;

          case "Add employee":
            addEmployee();
            break;

          case "Delete employee":
            deleteEmployee();
            break;

          case "Update employee role":
            updateEmployee();
            break;

          case "Update employee manager":
            updateManager();
            break;
        }
      });
    }

          function employeeSearch() {
            inquirer
            .prompt({
              name: "employee",
              type: "input",
              message: "What employee would you like to search for?"
            })
            .then(function(answer) {
              var query = "SELECT employee FROM employeeTracker_DB WHERE ?";
              connection.query(query, {employee: answer.employee }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                  console.log("employee: " + res[i].department + " || salary " + res[i].role + " || manager " + res[i].manager);
            
                }
                runSearch();
              });
            });
          }

          function managerSearch() {
            var query = "SELECT manager FROM employeeTracker_DB GROUP BY manager HAVING count(*) > 1";
            connection.query(query, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log(res[i].manager);
              }
              runSearch();
            });
          }

          function departmentSearch() {
            inquirer
              .prompt([
                {
                  name: "start",
                  type: "input",
                  message: "Enter department: ",
                  validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
                },
                {
                  name: "end",
                  type: "input",
                  message: "Enter ending position: ",
                  validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
                }
              ])
              .then(function(answer) {
                var query = "SELECT employee FROM employeeTracker WHERE ?";
                connection.query(query, [answer.start, answer.end], function(err, res) {
                  for (var i = 0; i < res.length; i++) {
                    console.log(
                      "Position: " +
                        res[i].position +
                        " || Song: " +
                        res[i].song +
                        " || Artist: " +
                        res[i].artist +
                        " || Year: " +
                        res[i].year
                    );
                  }
                  runSearch();
                });
              });
          }
          
          function updateEmployee() {
            inquirer
              .prompt({
                name: "employee",
                type: "input",
                message: "What is employee name?"
              })
              .then(function(answer) {
                console.log(answer.song);
                connection.query("SELECT * FROM department WHERE ?", { song: answer.song }, function(err, res) {
                  console.log(
                    "id: " +
                      res[0].role +
                      " || First name: " +
                      res[0].firstName +
                      " || Last name: " +
                      res[0].lastName +
                      " || Department: " +
                      res[0].department
                  );
                  runSearch();
                });
              });
          }
          
          function updateManager() {
            inquirer
              .prompt({
                name: "Manager",
                type: "input",
                message: "What manager would you like to search for?"
              })
              .then(function(answer) {
                var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
                query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
                query += "= top5000.year) WHERE (top_albums.artist = ? AND department = ?) ORDER BY top_albums.year, top_albums.position";
          
                connection.query(query, [answer.artist, answer.artist], function(err, res) {
                  console.log(res.length + " matches found!");
                  for (var i = 0; i < res.length; i++) {
                    console.log(
                      i+1 + ".) " +
                        "Year: " +
                        res[i].year +
                        " Album Position: " +
                        res[i].position +
                        " || Artist: " +
                        res[i].artist +
                        " || Song: " +
                        res[i].song +
                        " || Album: " +
                        res[i].album
                    );
                  }
          
                  runSearch();
                });
              
          }
               
  


  