-- insert department;
INSERT INTO department (department_name)
VALUES ("Human Resources");

INSERT INTO department (department_name)
VALUES ("Executive Office");

INSERT INTO department (department_name)
VALUES ("Visual");

INSERT INTO department (department_name)
VALUES ("Public Relations");

INSERT INTO department (department_name)
VALUES ("Kitchen");

INSERT INTO department (department_name)
VALUES ("Housekeeping");

INSERT INTO department (department_name)
VALUES ("Marketing");

INSERT INTO department (department_name)
VALUES ("Sales Floor");

INSERT INTO department (department_name)
VALUES ("Engineering");

INSERT INTO department (department_name)
VALUES ("IT");

-- insert role;
INSERT INTO role (title, salary, department_id)
VALUES ("Director", 90000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 140000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Vice President", 170000, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("President", 200000, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("Cook", 40000, 7);

INSERT INTO role (title, salary, department_id)
VALUES ("Housekeeper", 30000, 7);

INSERT INTO role (title, salary, department_id)
VALUES ("Art Director", 70000, 8);

INSERT INTO role (title, salary, department_id)
VALUES ("Architect", 85000, 9);

INSERT INTO role (title, salary, department_id)
VALUES ("PR manager", 55000, 10);

INSERT INTO role (title, salary, department_id)
VALUES ("Coordinator", 45000, 4);


-- insert employee;
INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Jack", "Smith", 6, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Peach", "Bananna", 4, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Cash", "Pickles", 5, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Jolly", "Ranger", 3, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("George", "Wilson", 4, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Winston", "Churchill", 6, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Catherine", "Sienna", 7, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Elizabeth", "Windsor", 9, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("George", "Shaw", 5, null);

INSERT INTO employee (employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Stanley", "Cup", 8, null);

