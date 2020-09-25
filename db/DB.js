const connection = require("./connection");

class DB {
    constructor() {
        this.connection = connection;
    }

    findAllDepartments() {
        return this.connection.query("SELECT * FROM department")
    }
    findAllEmployees() {
        return this.connection.query("SELECT employee.employee_firstName, employee.employee_lastName, employee.id, role.title, role.salary, role.department_id FROM employee INNER JOIN role ON employee.role_id = role.department_id")
    }
    // addEmployees() {
    //     return this.connection.query("INSERT INTO employee SET ? ", {
    //     })
    // }

    
//    addDepartment(department) {
//        return this.connection.query("INSERT INTO department SET ? ", {
//            name: department
//        })
//    }
}

module.exports = new DB(connection)
