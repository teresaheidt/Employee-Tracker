const inquirer = require('inquirer');
const connection = require('./db/connection');
const DB = require('./db/DB');
require('dotenv').config();
const { printTable } = require('console-table-printer');
var asciimo = require('asciimo').Figlet;
var colors = require('colors');
var sys = require('util');

// create the welcome sign
art();
function art() {
  var font = 'colossal';
  // set text we are writing to turn into leet ascii art
  var text = "Welcome!";
  asciimo.write(text, font, function(art){
  console.log(art.magenta);
  });
  start();
}

function runSearch() {
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
        "Add role",
        "Update employee role",
        // "View all employees by manager",
        // "Update employee manager",
        "Delete employee",
        "Delete department",
        "Delete role",
        // "View bugdget",
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

        case "Add role":
          addRole();
        break;

        case "Add employee":
          addEmployee();
        break;

        case "Update employee role":
          updateEmployeeRole();
          break;

       

      // Bonus 
        // case "View all employees by manager":
        //   managerView();
        //   break;

        // case "Update employee manager":
        //   managerUpdate();
        //   break;

        case "Delete employee":
          deleteEmployee();
          break;

        case "Delete department":
          deleteDepartment();
          break;

        case "Delete role":
            deleteRole();
            break;

        // case "View budget":
        //   viewBudget();
        //   break;
      }
    });
}

// brings up all departments
function findAllDepartments() {
  DB.findAllDepartments().then(function (res) {
    printTable(res)
    start();
  })
}

// brings up all employees
function findAllEmployees() {
  DB.findAllEmployees().then(function(res) {
    printTable(res)
    start();
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
          start();
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

// new department
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

// new employee
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
          if (err) throw err;
            console.error(res.affectedRows + " New employee inserted!\n");
            start();
          }
        );
         
    });

}

// adding new role
function addRole() {
  inquirer
    .prompt([ {
        type: "input",
        name: "title",
        message: "What title do you want to add?",
      },
      { 
        type: "input", 
        name: "salary",
        message: "What salary do you want to add?"
     },
     {
        type: 'input', 
        name: "department_id",
        message: "What the department id?"
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

// update the employee role
function updateRole() {
  // run this and grabs employees
DB.findAllEmployees()
.then(([employee_firstName, employee_lastName]) => {
  let employees = rows;
  const employeeChoices = employees.map
  (({id, employee_firstName, employee_lastName}) => ({
    name: `${employee_firstName} ${employee_lastName}`,
    value: id
  }))
// prompt 
inquirer
.prompt([
  {
    type: "list",
    name: "employee_firstName",
    message: "Please select employee to update",
    choices: employeeChoices
  }
])
.then(answers => {
  changeRole(answers.employee_firstName);
})
.catch(error => {
  if(error.isTtyError) {
  } else {

  }
});


// function to update employee role in database
function updateEmployeeRole() {

  connection.query("SELECT employee_firstName FROM employee", function (err, res) {
    if (err) throw err;

    inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Please select employee to update",
        choices: res.map(employee => employee.employee_firstName)
      }
    ])
    .then(answers => {
  
    })
    .catch(error => {
      if(error.isTtyError) {
        
      } else {
        
      }
    });
    
  });
  // start();

}

// takes employee out of the db
function deleteEmployee() {
  connection.query(
    "SELECT employee_firstName FROM employee", function (err, res) {
    if (err) throw err;

  // shows the employees to delete
    inquirer
    .prompt([
      {
        type: "list",
        name:"deleteEmployee",
        message: "Enter name of employee to remove",
        choices: res.map(employee => employee.employee_firstName)
      }
    ])
    .then(answers => {
      removeEmployee(answers.deleteEmployee)
    
    })
    .catch(error => {
      if(error.isTtyError) {
        
      } else {
        
      }

    });
  });

}

// deletes employee from database
function removeEmployee(exEmployee) {

  // query to delete
  connection.query(
    "DELETE FROM employee WHERE employee_firstName = ?",
    exEmployee, 
  
    function(err, res) {
      if (err) throw err;
      console.log("Employee removed!\n");
       
    }
  );
  start();  
}

// takes role out of db
function deleteRole() {
  connection.query(
    "SELECT title FROM role", function (err, res) {
    if (err) throw err;

    inquirer
    .prompt([
      {
        type: "list",
        name:"deleteRole",
        message: "Please select role to remove",
        choices: res.map(role => role.title)
      }
    ])
    .then(answers => {
      removeRole(answers.deleteRole)
    
    })
    .catch(error => {
      if(error.isTtyError) {
        
      } else {
        
      }

    });
  });
  
}

// deletes role from database
function removeRole(oldRole) {

  connection.query(
    "DELETE FROM role WHERE title = ?",
    oldRole,
  
    function(err, res) {
      if (err) throw err;
      console.log("Role removed!\n");
     
    }
  );
  start();
}

// removes department from db
function deleteDepartment() {
  connection.query(
    "SELECT department_name FROM department", function (err, res) {
    if (err) throw err;

    inquirer
    .prompt([
      {
        type: "list",
        name:"deleteDepartment",
        message: "Please select department to remove",
        choices: res.map(department => department.department_name)
      }
    ])
    .then(answers => {
      removeDepartment(answers.deleteDepartment)
    
    })
    .catch(error => {
      if(error.isTtyError) {
        
      } else {
        
      }

    });
  });
  
}

// deletes department from database
function removeDepartment(oldDepartment) {

  // query to delete
  connection.query(
    "DELETE FROM department WHERE department_name = ?",
    oldDepartment,
  
    function(err, res) {
      if (err) throw err;
      console.log("Department removed!\n");
      
    }
  );
 start();
}