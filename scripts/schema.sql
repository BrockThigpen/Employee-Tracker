CREATE DATABASE emlployee_tracker_db;

USE emlployee_tracker_db;

CREATE TABLE employee (
    id INT AUTO INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT 
);

CREATE TABLE role (
    id INT AUTO INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT NOT NULL
);

CREATE TABLE department (
    id INT AUTO INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;