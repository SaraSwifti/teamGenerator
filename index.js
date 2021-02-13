const Employee = require("../modlib/employee");
const Engineer = require("../modlib/engineer");
const Intern = require("../modlib/intern");
const Manager = require("../modlib/manager");

function employInfo() {
    const PromptEmploy = () =>
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
    ]);
    
};

function managerInfo() {
    console.log('Please enter your managers information');
    employInfo();
    //office number question
    const PromptManager = () =>
    inquirer.prompt([
        {
          type: 'input',
          name: 'officeNum',
          message: 'What is the Manager s office number?',
        },

    ]);

};

function engineerInfo() {
    employInfo();
    //github question
    const PromptEngineer = () =>
    inquirer.prompt([
        {
          type: 'input',
          name: 'github',
          message: 'What is the Engineer s github username?',
        },

    ]);
};

function internInfo() {
    employInfo();
    //school question
    const PromptIntern = () =>
    inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'Which school does your intern go to?',
        },

    ]);
    menu();
};

function menu(){
    const Promptmenu = () =>
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Would you like to add another engineer, intern or are you done adding people on the team?',
            name: 'menu',
            choices: ['Engineer', 'Intern', 'Finished'],
          },
        ]).then((data) => {
            if(data.choices [] === 'Engineer') {
                engineerInfo();
        } else if (data.choices[] === 'Intern') {
            internInfo();
        } else { 
            finished();

        };
        })
    
};

function finished() {
    // put the making of the HTML here
    console.log('finished for now')
};

function init() {
    managerInfo();
    }

