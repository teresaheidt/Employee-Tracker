const inquirer = require('inquirer');
const connection = require('./db/connection');
const DB = require('./db/DB');
require('dotenv').config();
const { printTable } = require('console-table-printer');
var asciimo = require('asciimo').Figlet;
var colors = require('colors');
var sys = require('util');

art();

function art() {
  var font = 'larry3d';
  // set text we are writing to turn into leet ascii art
  var text = "Welcome";
  asciimo.write(text, font, function(art){
    console.log(art.red);
  });
  start();
}

function runSearch() {
  console.log('dont care');
}

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add department",
        "Add employee",
        "Add roles",
        "Update employee role",
        "View all employees by manager",
        "Update employee manager",
        "Delete employee",
        "Delete department",
        "Delete role",
        "View bugdget",
        "Exit"
      ]
    })
    .then(function (answer) {
      // based on their answer, switch functions
      switch (answer.action) {
        case "View all employees":
          findAllEmployees();
          break;

        case "View all roles":
          viewRoles();
          break;  

        case "View all departments":
          findAllDepartments();
          break;

        case "Add department":
          addDepartment();
          break;

        case "Add roles":
          addRole();
        break;

        case "Add employee":
          addEmployee();
        break;

        case "Update employee role":
          updateEmployee();
          break;

       

      // Bonus 
        case "View all employees by manager":
          managerView();
          break;

        case "Update employee manager":
          managerUpdate();
          break;

        case "Delete employee":
          deleteEmployee();
          break;

        case "Delete department":
          deleteDepartment();
          break;

        case "Delete role":
            deleteRole();
            break;

        case "View budget":
          viewBudget();
          break;
      }
    });
}

function findAllDepartments() {
  DB.findAllDepartments().then(function (res) {
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
 
// if user wants to view what roles
function viewRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    //if (err) throw err;

    console.table(res);
    start()

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

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentList",
        type: "input",
        message: "What department do you want to add?",
      }
    ])
    .then(answers => {
      // create query connection to insert in to table
      connection.query(
        "INSERT INTO department SET ?",
        {
          department_Name: answers.departmentList
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " New department inserted!\n");
          
          start();
        }
      );
      
        runSearch();
      });
}

function addEmployee() {
  inquirer
    .prompt([ {
      type: "input",
      name: "firstName",
      message: "What is employee first name?"
    }, 
    { 
      type: 'input', 
      name: "lastName",
      message: "What is employee last name?"
   },
   {
      type: 'input', 
      name: "manager_id",
      message: "What is your manager id?"
 },
   {
      type: 'input', 
      name: "role_id",
      message: "What is employee role id?"
   }

  ])
    .then(answers => {
      console.log(answers);
      connection.query(
        "INSERT INTO employee SET ?", 
      { 
       
        employee_firstName: answers.firstName, 
        employee_lastName: answers.lastName,
        role_id: answers.role_id,
        manager_id: answers.manager_id
         
        }, 
        function (err, res) {
      
        start();
      })
    })

    function addRole() {
      inquirer
        .prompt([
          {
            name: "roleList",
            type: "input",
            message: "What role do you want to add?",
          }
        ])
        .then(answers => {
          // create query connection to insert in to table
          console.log(answers);
          connection.query(
            "INSERT INTO role SET ?",
            {
       
                title: answers.title, 
                salary: answers.salary,
                department_id: answers.department_id

            },
            function (err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " New role inserted!\n");
              start();
            }
          );
          
            runSearch();
          });
    }

}




