const { prompt, default: inquirer } = require('inquirer');

const mysql = require('mysql2');

//Connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
}, console.log('connected to company_db database'));

//TO DO
  //view all departments
  //view all roles
  //view all employees
  //add a department
  //add a role
  //add an employee
  //exit



function menuOptions() {
    const choices =
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'answer',
        choices: ['View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Quit']
    }

    prompt(choices)
        .then((response) => {
            switch (response.answer) {
                case 'View all departments':
                    viewDepartment();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Quit':
                    console.log('Done!')
                    break;
            }
        });
}

//TO DO
  //functions for each case
        //view all departments
        //view all roles
        //view all employees
        //add a department
        //add a role
        //add an employee
        


function viewDepartment() {
    db.query('SELECT * FROM department', (err, result) => {
        console.table(result);
        menuOptions();
    });
}

function viewRoles () {
    db.query('SELECT * FROM roles', (err, res) => {
        console.table(result)
        menuOptions()
    });
   
};

function viewEmployees () {
    db.query('SELECT * FROM employees', (err, res) => {
        console.table(result)
        menuOptions()
    });
     
};

//TO DO
    //add department
    //add role
    //add employee

function addDepartment() {
    const add_department = {
        type: 'input',
        message: 'What is the name of the Department?',
        name: 'name'
    }
    prompt(add_department)
        .then((response) => {
            db.query(`INSERT INTO department (department_name) VALUES ('${response.name}');`, (err, result) => {
                console.log('Successfully added department!');
                menuOptions();
            })
        })
    }
    