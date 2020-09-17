DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  employee_firstName VARCHAR(100) NOT NULL,
  employee_lastName VARCHAR(100) NOT NULL,
  title VARCHAR(100),
  department VARCHAR(45) NOT NULL,
  salary DECIMAL(60000) NULL,
  PRIMARY KEY (id)
);

INSERT INTO employees (employee_firstName, employee_lastName, title, department, salary)
VALUES ("Jack" "Smith", "Assistant", "Human Resources", 60000);

INSERT INTO employees (employee_firstName, employee_lastName, title, department, salary)
VALUES ("Will", "Rogers", "Manager", "Engineer" 120000);

INSERT INTO employees (employee_firstName, employee_lastName, title, department, salary)
VALUES ("Haley", "Williams", "Director", "Architect", 75000);

