// dependencies
let mysql = require("mysql");
let inquirer = require("inquirer");

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
    start();
});

const start = () => {
    
}