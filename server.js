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
        "Update employee manager"
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
              var query = "SELECT employee FROM employee WHERE ?";
              connection.query(query, {employee: answer.employee }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                  console.log("employee: " + res[i].department + " || salary " + res[i].role + " || manager " + res[i].manager);
            
                }
                runSearch();
              });
            });
          }
    
       
  


  
  // // function to handle posting new items up for auction
  // function postAuction() {
  //   // prompt for info about the item being put up for auction
  //   inquirer
  //     .prompt([
  //       {
  //         name: "item",
  //         type: "input",
  //         message: "What is the item you would like to submit?"
  //       },
  //       {
  //         name: "category",
  //         type: "input",
  //         message: "What category would you like to place your auction in?"
  //       },
  //       {
  //         name: "startingBid",
  //         type: "input",
  //         message: "What would you like your starting bid to be?",
  //         validate: function(value) {
  //           if (isNaN(value) === false) {
  //             return true;
  //           }
  //           return false;
  //         }
  //       }
  //     ])
  //     .then(function(answer) {
  //       // when finished prompting, insert a new item into the db with that info
  //       connection.query(
  //         "INSERT INTO auctions SET ?",
  //         {
  //           item_name: answer.item,
  //           category: answer.category,
  //           starting_bid: answer.startingBid || 0,
  //           highest_bid: answer.startingBid || 0
  //         },
  //         function(err) {
  //           if (err) throw err;
  //           console.log("Your auction was created successfully!");
  //           // re-prompt the user for if they want to bid or post
  //           start();
  //         }
  //       );
  //     });
  // }
  
  // function bidAuction() {
  //   // query the database for all items being auctioned
  //   connection.query("SELECT * FROM auctions", function(err, results) {
  //     if (err) throw err;
  //     // once you have the items, prompt the user for which they'd like to bid on
  //     inquirer
  //       .prompt([
  //         {
  //           name: "choice",
  //           type: "rawlist",
  //           choices: function() {
  //             var choiceArray = [];
  //             for (var i = 0; i < results.length; i++) {
  //               choiceArray.push(results[i].item_name);
  //             }
  //             return choiceArray;
  //           },
  //           message: " ?"
  //         },
  //         {
  //           name: "bid",
  //           type: "input",
  //           message: " "
  //         }
  //       ])
  //       .then(function(answer) {
  //         // get the information of the chosen item
  //         var chosenItem;
  //         for (var i = 0; i < results.length; i++) {
  //           if (results[i].item_name === answer.choice) {
  //             chosenItem = results[i];
  //           }
  //         }
  
  //         // determine if bid was high enough
  //         if (chosenItem.highest_bid < parseInt(answer.bid)) {
  //           // bid was high enough, so update db, let the user know, and start over
  //           connection.query(
  //             "UPDATE auctions SET ? WHERE ?",
  //             [
  //               {
  //                 highest_bid: answer.bid
  //               },
  //               {
  //                 id: chosenItem.id
  //               }
  //             ],
  //             function(error) {
  //               if (error) throw err;
  //               console.log("Bid placed successfully!");
  //               start();
  //             }
  //           );
  //         }
  //         else {
  //           // bid wasn't high enough, so apologize and start over
  //           console.log("Your bid was too low. Try again...");
  //           start();
  //         }
  //       });
  //   });
  // }
  