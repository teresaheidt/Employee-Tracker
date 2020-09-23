DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  employee_firstName VARCHAR(30) NOT NULL,
  employee_lastName VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);



