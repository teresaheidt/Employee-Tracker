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
        "View all departments",
        "Add department",
        "View all roles",
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
    .then(function (answer) {
      // based on their answer, switch functions
      switch (answer.action) {
        case "View all employees":
          findAllEmployees();
          break;

        case "View all departments":
          findAllDepartments()
          break;

          case "Add department":
            addEmployee();
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

function findAllDepartments() {
  DB.findAllDepartments().then(function (res) {
    printTable(res)
  })
}

function findAllRoles() {
  DB.findAllRoles().then(function (res) {
    printTable(res)
  })
}

function findAllEmployees() {
  DB.findAllEmployees().then(function(res) {
    printTable(res)
  })
}

function employeeSearch() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "What employee would you like to search for?"
    })
    .then(function (answer) {
      var query = "SELECT employee FROM employeeTracker_DB WHERE ?";
      connection.query(query, { employee: answer.employee }, function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("employee: " + res[i].department + " || salary " + res[i].role + " || manager " + res[i].manager);

        }
        runSearch();
      });
    });
}

function roleSearch() {
  inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "What role would you like to search for?"
    })
    .then(function (answer) {
      var query = "SELECT role FROM employeeTracker_DB WHERE ?";
      connection.query(query, { employee: answer.employee }, function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("role: " + res[i].department + " || salary " + res[i].role + " || manager " + res[i].manager);

        }
        runSearch();
      });
    });
}


function managerSearch() {
  var query = "SELECT manager FROM employeeTracker_DB GROUP BY manager HAVING count(*) > 1";
  connection.query(query, function (err, res) {
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
        name: "departmentList",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add a New Department",
          "Exit"
        ],
      },
    ])
    .then(function (answer) {
      switch (answer.department) {
        case 'View all departments':
          View_All_Departments();
          break;
          case 'Add_Department':
            Add_Department();
            break;
            default:
              bye();
      }
      
        runSearch();
      });
}

function addEmployee() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "What is employee name?"
    })
    .then(function (answer) {
      console.log(answer.role);
      connection.query("SELECT * FROM employee WHERE ?", { role: answer.role }, function (err, res) {
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
    .then(function (answer) {
      var query = "SELECT employee, manager ";
      query += "FROM AND top_albums.year ";
      query += "SELECT manager FROM employeeTracker_DB WHERE department = ?) ORDER BY salary";

      connection.query(query, [answer.manager, answer.manager], function (err, res) {
        console.log(res.length + " matches found!");
        for (var i = 0; i < res.length; i++) {
          console.log(
            i + 1 + ".) " +
            "first name " +
            res[i].firstName +
            " last name " +
            res[i].lastName +
            " salary " +
            res[i].salary
          );
        }

        runSearch();
      });

    });
}

start();



