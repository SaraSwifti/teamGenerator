const Employee = require("./modlib/employee");
const Engineer = require("./modlib/engineer");
const Intern = require("./modlib/intern");
const Manager = require("./modlib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const teamMemberArray = [];
const generateHtml = require('./html/html-print')




//initiating manager function
function managerInfo() {
  console.log('Please enter your managers information first');
    
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Employee s name?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Employee s email?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'Employee s id# ?',
        },
        {
          type: 'input',
          name: 'officeNum',
          message: 'What is the Manager s office number?',
        }
      ]).then(responses => {
      const manager = new Manager(responses.name, responses.email, responses.id, responses.officeNum); // do for each question asked
      teamMemberArray.push(manager);
      //now to choice menu for adding another empoloyee or exiting the funciton. 
      menu();
    });
  };

//engineer constructor function
const engineerInfo = function() {
 

    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Employee s name?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Employee s email?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'Employee s id# ?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the Engineer s github username?',
        },

    ]).then(responses => {
      const engineer = new Engineer(responses.name, responses.email, responses.id, responses.github); // do for each question asked
      teamMemberArray.push(engineer);
      //return to menu
      menu();
    });
};

const internInfo = function() {
   
    //school question
  
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Employee s name?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Employee s email?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'Employee s id# ?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'Which school does your intern go to?',
        },

    ]).then(responses => {
      const intern = new Intern(responses.name, responses.email, responses.id,responses.school); // do for each question asked
      teamMemberArray.push(intern); 
      ///return to menu function
      menu();
    });
   
};

const menu = function(){
    // not sure if this is needed const Promptmenu = () =>
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Would you like to add another engineer, intern or are you done adding people on the team?',
            name: 'menu',
            choices: ['Engineer', 'Intern', 'Finished'],
          },
        ])
        .then((data) => {
            if(data.menu  === 'Engineer') {
                engineerInfo();
        } else if (data.menu === 'Intern') {
            internInfo();
        } else { 
            finished();

        };
        })
    
};

const finished = function() {
    // put the making of the HTML here
    fs.writeFile('./html/gen.html', generateHtml(managers, engineers, interns), (err) => 
        err ? console.log(err) : console.log("HTML file written please check HTLM folder"));
  }
    console.log(teamMemberArray);


function init() {
 
    managerInfo();
    };

init();
