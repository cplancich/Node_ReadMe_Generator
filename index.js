// Packages needed to use this application
const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create a function to initialize app
function init() {
    
    //  Create an array of questions for user input
    inquirer
    .prompt([
        // Project Title
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'projectName'
        },
        // Description
        {
            type: 'input',
            message: "What is your project's description?",
            name: 'projectDescription'
        },
        // Installation
        {
            type: 'input',
            message: 'Enter your installation instructions:',
            name: 'installInstructions'
        },
        // Usage
        {
            type: 'input',
            message: 'Enter your project usage here:',
            name: 'projectUsage'
        },
        // License
        {
            type: 'list',
            message: "Choose your project's license",
            name: 'projectLicense',
            choices: [
                'MIT License',
                "Driver's License",
                "Hogtying license",
                "None"
            ]
        },
        // Contributing
        {
            type: 'input',
            message: 'Do you want others to contribute to your repo?',
            name: 'projectContributing'
        },
        // Tests
        {
            type: 'input',
            message: 'What should users know about testing your application?',
            name: 'projectTests'
        },
        // Questions
        {
            type: 'input',
            message: 'How can people contact you regarding questions about your repo?',
            name: 'projectQuestions'
        },
        // Github Username
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'projectGithub'
        },
        // Email Address
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'projectEmail'
        },
    ])
    // Renders a README.md file into output folder based off user input
    .then((answers) => {
        fs.writeFile('./output/Generated_README.md', generateMarkdown({...answers}), (err) => {
            err ? console.error(err) : console.log('Success!');
        })
    })
}
// Function call to initialze app
init();