// Packages needed to use this application
const fs = require ('fs');
const inquirer = require('inquirer');

// write file
//  ask the user for data
// generate .md file

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: '',
        message: '',
        name: ''
    },
])
.then((answers) => {
    console.log(answers);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialze app
init();
