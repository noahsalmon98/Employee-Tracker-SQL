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
    db.query('SELECT * FROM department', (error, result) => {
        console.table(result);
        menuOptions();
    });
}

function viewRoles () {
    db.query('SELECT * FROM roles', (error, result) => {
        console.table(result)
        menuOptions()
    });
   
};

function viewEmployees () {
    db.query('SELECT * FROM employees', (error, result) => {
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
            db.query(`INSERT INTO department (department_name) VALUES ('${response.name}');`, (error, result) => {
                console.log('Successfully added department!');
                menuOptions();
            })
        })
    }

function addRole() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM department', (error, results) => {
            if (error) {
                connection.release();
                reject(error);
                return;
            }
        
            const departmentChoices = results.map((department) => ({
                name: department.name,
                value: department.id,
            }));
        
            inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the role title:',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the role salary:',
                },
                {
                    type: 'list',
                    name: 'newDepartment',
                    message: 'Select the department:',
                    choices: departmentChoices,
                },
                ])
                .then((answers) => {
                connection.query(
                    'INSERT INTO role SET ?',
                    {
                    title: answers.title,
                    salary: answers.salary,
                    department_id: answers.newDepartment,
                    },
                    (error) => {
                    connection.release();
        
                    if (error) {
                        reject(error);
                    } else {
                        console.log('Role added successfully!');
                        resolve();
                    }
                    }
                );
                });
            });
       });
    }

    function addEmployee() {
        let roles = [];
        db.query('SELECT title FROM role;', (error, result) => {
            result.forEach(element => roles.push(element.title));
            db.query('SELECT first_name,last_name FROM employee', (error2, result2) => {
    
                const add_employee = [{
                    type: 'input',
                    message: 'What is the employees first name?',
                    name: 'firstName'
                }, {
                    type: 'input',
                    message: 'What is the employees last name?',
                    name: 'lastName'
                },
                {
                    type: 'list',
                    message: 'What is employees role at the company?',
                    name: 'role',
                    choices: roles
                }];
    
                prompt(add_employee)
                    .then((response) => {
    
                        const roleId = roles.indexOf(response.role) + 1;
    
                        db.query(`INSERT INTO employee (first_name,last_name,role_id) VALUES ('${response.firstName}','${response.lastName}',${roleId}`, (error3, result3) => {
                            console.log('Successfully added employee!');
                            menuOptions()})
                    })
    
            })
    
        })
    }