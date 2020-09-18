DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  employee_firstName VARCHAR(30) NOT NULL,
  employee_lastName VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(60000) NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  employeeName VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Jack" "Smith", "586", "797");

INSERT INTO role (title, salary, department_id)
VALUES ("Director", 90000, "475");

INSERT INTO department (employeeName)
VALUES ("Haley Williams");

