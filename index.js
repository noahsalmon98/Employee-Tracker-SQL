const { prompt, default: inquirer } = require('inquirer');

const mysql = require('mysql2');

//Connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
}, console.log('connected to company_db database'));