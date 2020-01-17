// dependencies
let mysql = require("mysql");
let inquirer = require("inquirer");
const cTable = require('console.table');

// establish connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "BThigpen*8149",
    database: "emlployee_tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    start();
});

const start = () => {
    inquirer
        .prompt({
            name: 'main',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Roles', 'Add Employee', 'Add Department', 'Add Role', 'Update Employee Roles', 'Quit']
        })
        .then(choice => {
            if (choice.main === 'View All Employees') {
                viewAllEmployees();
            } else if (choice.main === 'View All Employees By Department') {
                viewEmployeesByDepartment();
            } else if (choice.main === 'View All Employees By Roles') {
                viewEmployeesByRole();
            } else if (choice.main === 'Add Employee') {

            } else if (choice.main === 'Add Department') {

            } else if (choice.main === 'Add Role') {

            } else if (choice.main === 'Update Employee Roles') {

            } else if (choice.main === 'Quit') {
                connection.end();
            }
        })
}

const viewAllEmployees = () => {
    console.log('\n');
    let query = 'SELECT e.id AS ID, e.first_name AS First_Name, e.last_name AS Last_Name, r.title AS Role, d.name AS Department, r.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager FROM employee e ';
    query += 'LEFT JOIN employee m ON e.manager_id = m.id ';
    query += 'INNER JOIN role r ON e.role_id = r.id ';
    query += 'INNER JOIN department d ON r.department_id = d.id ';
    query += 'ORDER BY e.id';
    connection.query(
        query,
        (err, res) => {
            if (err) throw err;
            console.table(res);
            start();
        })
};

const viewEmployeesByDepartment = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        console.log(res);
        if (err) throw err;
        inquirer.prompt({
            name: 'eByD',
            type: 'list',
            message: 'Which department would you like to view?',
            choices: res
        })
            .then(choice => {
                let query = 'SELECT e.id AS ID, e.first_name AS First_Name, e.last_name AS Last_Name, r.title AS Role, d.name AS Department, r.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager FROM employee e ';
                query += 'LEFT JOIN employee m ON e.manager_id = m.id ';
                query += 'INNER JOIN role r ON e.role_id = r.id ';
                query += 'INNER JOIN department d ON r.department_id = d.id ';
                query += 'WHERE(d.name =  ?) ORDER BY e.id';
                connection.query(query,
                    choice.eByD,
                    (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        start();
                    })
            })
    })
}
const viewEmployeesByRole = () => {
    connection.query('SELECT title FROM role', (err, res) => {
        console.log(res);
        let arr=[];
        res.forEach(i => arr.push(i.title));
        if (err) throw err;
        inquirer.prompt({
            name: 'eByR',
            type: 'list',
            message: 'Which role would you like to view?',
            choices: arr
        })
            .then(choice => {
                let query = 'SELECT e.id AS ID, e.first_name AS First_Name, e.last_name AS Last_Name, r.title AS Role, d.name AS Department, r.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager FROM employee e ';
                query += 'LEFT JOIN employee m ON e.manager_id = m.id ';
                query += 'INNER JOIN role r ON e.role_id = r.id ';
                query += 'INNER JOIN department d ON r.department_id = d.id ';
                query += 'WHERE(r.title =  ?) ORDER BY e.id';
                connection.query(query,
                    choice.eByR,
                    (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        start();
                    })
            })
    })
}