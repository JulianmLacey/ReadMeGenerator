//packages
var inquirer = require("inquirer");
var fs = require("fs");

//badge links
var readmeData = { badges: {
    'MIT': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    'GNU GPL': "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    'IBM-V1': "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    'BSD': "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    'PDDL': "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
    'Apache': "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
};

//create the readme file
function writeToFile(data) {
    var readmeOutline = 
    `# ${data.title}

## Badges
${readmeData.badges[data.license]}

## License
${data.license} License, View 'License' In Reopsitory

## Description 
${data.description}

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation 
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- View My [GitHub](https://github.com/${data.githubUser})
- For further questions contact me at ${data.email}`;

    //write to the file
    fs.writeFile("READMEE.md", readmeOutline, (err) =>
    err ? console.error(err) : console.error("File Generated!"));

}

//Get the User Input
function getUserData(){
    //Prompt User
    inquirer.prompt([
        {type: "input",message: "Title: ",name: "title", },
        {type: "input",message: "Description: ",name: "description", },
        {type: "input",message: "Installation: ",name: "installation", },
        {type: "input",message: "Usage: ",name: "usage", },
        {type: "input",message: "Contributing: ",name: "contributing", },
        {type: "input",message: "Tests: ",name: "tests", },
        {type: "input",message: "GiHub Username: ",name: "githubUser", },
        {type: "input",message: "Email Address: ",name: "email", },
        {type: "list", message: "License: ", name: "license", 
        choices: ["MIT", "GNU GPL", "IBM-V1", "BSD", "PDDL", "Apache"] }])
        .then(answers => { writeToFile(answers);});//pass answers to file generation
}
getUserData();