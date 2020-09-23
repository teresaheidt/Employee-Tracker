
-- insert role;
INSERT INTO role (id, title, salary, department_id)
VALUES ("Director", 90000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("CEO", 140000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("Vice President", 170000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("President", 200000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("Cook", 40000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("Housekeeper", 30000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("Art Director", 70000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("Architect", 85000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("PR manager", 55000);

INSERT INTO role (id, title, salary, department_id)
VALUES ("Coordinator", 45000);

-- insert department;
INSERT INTO department (id, department_name)
VALUES ("Human Resources");

INSERT INTO department (id, department_name)
VALUES ("Executive Office");

INSERT INTO department (id, department_name)
VALUES ("Visual");

INSERT INTO department (id, department_name)
VALUES ("Public Relations");

INSERT INTO department (id, department_name)
VALUES ("Kitchen");

INSERT INTO department (id, department_name)
VALUES ("Housekeeping");

INSERT INTO department (id, department_name)
VALUES ("Marketing");

INSERT INTO department (id, department_name)
VALUES ("Sales Floor");

INSERT INTO department (id, department_name)
VALUES ("Engineering");

INSERT INTO department (id, department_name)
VALUES ("IT");

-- insert employee;
INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Jack", "Smith", 586);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Peach", "Bananna", 874);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Cash", "Pickles", 286);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Jolly", "Ranger", 333);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("George", "Wilson", 916);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Winston", "Churchill", 194);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Catherine", "Sienna", 906);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Elizabeth", "Winsor", 539);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("George", "Shaw", 089);

INSERT INTO employee (id, employee_firstName, employee_lastName, role_id, manager_id)
VALUES ("Stanley", "Cup", 366);
