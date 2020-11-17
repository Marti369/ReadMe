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
    //add another question
    {

    }

];

// function to write README file
function writeToFile(fileName, data) {}

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