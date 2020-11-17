//add a const to require inquirer and fs
const fs = require('fs');
const inquirer = require("inquirer");
//const to link generate markdown function
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    //1st question
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        //to validate answer
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please type a name for your project");
                return false;
            }
        }

    },
    //add 2nd question to enter description of project
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
        //to validate answer
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please type a description of your project");
                return false;
            }
        }
    },
    // enter 3rd question for installation instructions
    {
        type: 'input',
        name: 'install',
        message: "Enter installation instructions, if none type 'none'",
        //to validate answer
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please type instructions for installation, if none type 'none'");
                return false;
            }
        }
    },
    // enter 4th question regarding usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter how to use application',
        //to validate answer
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please type how to use the application, if no instructions type 'none'");
                return false;
            }
        }
    },
    // enter 5th question regarding contribution guidelines
    {
        type: 'input',
        name: 'guidelines',
        message: "Please type guidelines for contribution, if none type 'none'",
    },
    // enter 6th question regarding test instructions
    {
        type: 'input',
        name: 'test',
        message: "Please enter instructions for testing, if none type 'none'",
    },

    //enter 7th question regarding github username
    {
        type: 'input',
        name: 'github',
        message: "Please enter your Github username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your Github username");
                return false;
            }
        }
    },
    // enter 8th question regarding email address
    {
        type: 'input',
        name: 'email',
        message: "Please enter your Email address",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your Email address");
                return false;
            }
        }
    },
    // enter 9th question regarding license
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a type of license for your project',
        choices: ['MIT', 'GNU', 'ISC', 'Mozilla Public License', 'GPL', 'Affero GPL', 'Apache'],
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log(" Your ReadMe has been created!");
    });
}

// function to initialize program
function init() {
    return inquirer
        .prompt(questions)
        .then(answers => {
            const ReadMe = generateMarkdown(answers);
            writeToFile("./ReadMe.md", ReadMe);
        })
};

// function call to initialize program
init();