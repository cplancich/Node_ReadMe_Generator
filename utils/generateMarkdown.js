const generateMarkdown = (data) => {
    return `# ${data.projectName}

    ## Description
    
    ${data.Description}
    
    ## Table of Contents (Optional)
    
    
    
    ## Installation
    
    ${data.installInstructions}
    
    ## Usage
    
    
    
    ## License
    
    
    
    ## How to Contribute
    
    
    
    ## Tests
    
    
    
    ## Questions`
}

// TODO: Create a function that returns a license badge based on which license is needed
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // specific license URL
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // render paragraph for selected license
}

// TODO: Create a function to generate markdown for README
function renderTitle(title) {
    return `#${data.title}`;
}

// data.title
// data.description
// data.authorName


// function generateMarkdown(data) {
//     return `# ${renderTitle(data.title)}
    
//     `;
//     }

module.exports = generateMarkdown;