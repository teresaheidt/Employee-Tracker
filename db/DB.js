const connection = require("./connection");

class DB {
    constructor() {
        this.connection = connection;
    }

    findAllDepartments() {
        return this.connection.query("SELECT * FROM department")
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }
    addEmployees() {
        return this.connection.query("INSERT INTO employee SET ? ", {
        })
    }

    
   addDepartment(name) {
       return this.connection.query("INSERT INTO department SET ? ", {
           name: name
       })
   }
}

module.exports = new DB(connection)
