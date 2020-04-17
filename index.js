const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

//create function to ask questions
function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },

        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },

        {
            type: "input",
            name: "projectName",
            message: "What is your project name?",
        },

        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },

        {
            type: "input",
            name: "bio",
            message: "Tell me a short bio about the project",
        },

        {
            type: "checkbox",
            name: "license",
            message: "Does it have any special license?",
            choices: [
                "MIT License",
                "Apache License 2.0",
                "GNU GPLv3",
            ]
        },

        //create User Story Section
        {
            type: "list",
            name: "userStory",
            message: "The next three prompts will ask about your user story. Please use the following format. As a USER/ROLE I can CAPABILITY, so that BENEFIT. Do you understand? ",
            choices: ["Yes"]

        },

        {
            type: "input",
            name: "user",
            message: "Who is the user/What is the role?"
        },

        {
            type: "input",
            name: "capability",
            message: "What does your application do?"
        },

        {
            type: "input",
            name: "benefit",
            message: "Why is it beneficial?"
        },

        {
            type: "input",
            name: "test",
            message: "Command to run test? (if you dont have any, skip)"
        },
        {
            type: "confirm",
            name: "packages",
            message: "Did you use any pacakges?"
        }

    ]);
}

// console.log(answers)


//create generate function to layout README

function generateRead(answers) {
    return `

   
# Welcome to ${answers.projectName} by ${answers.name}

    
## Description
    
${answers.bio}

    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)

    
## Installation

   To use this application, ensure that you install the following package(s)
   * ${answers.installation}

    
## Usage

    As a ${answers.user}, I want to ${answers.capability}, so that ${answers.benefit}

## License
${getLicense(answers.license)}

## Contributing

## Tests
${getTest(answers.test)}

## Questions
    
If you see any improvements that can be made, please email me at ${answers.email}. You can also visit my GitHub page at https://github.com/${answers.github}

    `
}

function getTest(test) {
    if (test) {
        return `To test this application, use command ${test}`
    } else {
        return "No Tests"
    }
}

function getLicense(license) {
    let results = ""
    for (let i = 0; i < license.length; i++) {
        if (license[i] === "MIT License") {
            results += "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) "
        }
        else if (license[i] === "Apache License 2.0") {
            results += "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)  "

        } else if (license[i] === "GNU GPLv3") {
            results += "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) "
        }

    }
    if (results === "") {
        results += "No Licenses Used"
    }
    return results



}

//call function to actually run
askQuestions()
    .then(async function (answers) {


        console.log(answers)

        if (answers.packages === true) {
            await inquirer.prompt([{

                type: "input",
                name: "installation",
                message: "What packages did you use?"

            }]).then(results => {
                const answersObj = { ...answers, ...results }
                const readme = generateRead(answersObj)
                return writeFileAsync("README.md", readme)
            })
        } else {
            const readme = generateRead(answers)
            return writeFileAsync("README.md", readme)
        }

    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });;