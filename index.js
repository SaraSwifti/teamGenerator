const Employee = require("./modlib/employee");
const Engineer = require("./modlib/engineer");
const Intern = require("./modlib/intern");
const Manager = require("./modlib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const teamMemberArray = [];

// const employInfo = function() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Employee s name?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Employee s email?',
//       },
//       {
//         type: 'input',
//         name: 'id',
//         message: 'Employee s id# ?',
//       },
//     ]);
//   };
  
  //   .then(responses => {
  //     const employee = new Employee(responses.name, responses.email, responses.id) // do for each question asked
  //     /// I don't think I need this because employee is overarching each team memberteamMemberArray.push(employee);
  // })


//write file function inside of main function, write filesync and path
//createManager()
//}
    
//};


function managerInfo() {
  console.log('Please enter your managers information first');
    //might not need this   const PromptManager = () =>
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
      menu();
    });

      
    
  };
  // to call the menu function to add intern, Engineer or exit adding employees
 
  



const engineerInfo = function() {
   
    //github question
   ///not sure if this is needed const PromptEngineer = () =>
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
      menu();
    });
};

const internInfo = function() {
   
    //school question
    ///not sure if this is needed const PromptIntern = () =>
    inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'Which school does your intern go to?',
        },

    ]).then(responses => {
      const intern = new Intern(responses.school); // do for each question asked
      teamMemberArray.push(manager); 
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
    console.log(teamMemberArray);
};

function init() {
  //inquirer.prompt(createEmployArray).then(function (data) {
    //const employCard = generateMarkdown(data);
    //writeToFile('README.md', markData);
    managerInfo();
    };

init();
