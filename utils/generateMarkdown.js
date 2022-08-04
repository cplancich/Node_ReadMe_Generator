const generateMarkdown = (data) => {
    return `
# ${data.projectName}

## Description
    
${data.projectDescription}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    
${data.installInstructions}
    
## Usage
    
${data.projectUsage}
    
## License
    
${data.projectLicense}
    
## Contributing
    
${data.projectContributing}
    
## Tests
    
${data.projectTests} 
    
## Questions
    
${data.projectQuestions}

[Github](https://www.github.com/${data.projectGithub})
[Email](mailto:${data.projectEmail})
`

}

// TODO: Create a function that returns a license badge based on which license is needed
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // return empty if user selects none
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // specific license URL
        // return empty if user selects none
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // render paragraph for selected license
        // return empty if user selects none
}

module.exports = generateMarkdown;