const Employee = require("./modlib/employee");
const Engineer = require("./modlib/engineer");
const Intern = require("./modlib/intern");
const Manager = require("./modlib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const manager = [];
const engineer = [];
const intern = [];
const generateHtml = require('./html/printhtml')




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
      const  newManager = new Manager(responses.name, responses.email, responses.id, responses.officeNum); // do for each question asked
      manager.push(newManager);
      //now to choice menu for adding another empoloyee or exiting the funciton. 
      menu();
    });
  };

//engineer constructor function
function engineerInfo() {
  console.log('please enter the information for your engineer');
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
      const newEngineer = new Engineer(responses.name, responses.email, responses.id, responses.github); // do for each question asked
      engineer.push(newEngineer);
      //return to menu
      menu();
    });
};

function internInfo() {
   console.log('Please enter the information for your intern')
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
      const newIntern = new Intern(responses.name, responses.email, responses.id,responses.school); // do for each question asked
      intern.push(newIntern); 
      ///return to menu function
      menu();
    });
   
};

function menu(){
    // not sure if this is needed const Promptmenu = () =>
    inquirer.prompt([
        {
            type: 'list',
            message:'Would you like to add another engineer, intern or are you done adding people on the team?',
            name:'menu',
            choices: ['Engineer', 'Intern', 'Finished'],
          }
        ]).then(function(responses) {
                 if(responses.menu === 'Engineer') {
                engineerInfo();
            } else if (responses.menu === 'Intern') {   
                 internInfo();
            } else { 
            finished();
          };
        
        });
     };


const finished = function(manager, engineer, intern) {
    //put the making of the HTML here
    fs.writeFile('./html/gen.html', generateHtml(manager, engineer, intern), (err) => 
        err ? console.log(err) : console.log("HTML file written please check HTLM folder"));
  }
  


function init() {
 
    managerInfo();
    };

init();
