const inquirer = require("inquirer");
// const axios = require("axios");
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
            name: "github",
            message: "What is your GitHub username?",
        },

        {
            type: "input",
            name: "projectName",
            message: "What is your project name?",
        },


        {
            type: "input",
            name: "URL",
            message: "What is URL to the GitHub repository?"
        },

        {
            type: "input",
            name: "bio",
            message: "Tell me a short bio about the project",
        },

        //Go to function getLicense if they have licenses
        {
            type: "checkbox",
            name: "license",
            message: "Does it have any special license?",
            choices: [
                "MIT License",
                "Apache License 2.0",
                "GNU GPLv3",
                "Creative Commons License"
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

        //how does the user use the application
        {
            type: "input",
            name: "usage",
            message: "How does the user run the application? (Do they run it in a terminal? Are there certain steps they have to follow?)"
        },

        //Do you want to test?
        {
            type: "input",
            name: "test",
            message: "Command to run test? (if you dont have any, press ENTER to skip)"
        },

        //Ask about packages, then go to the AskQuestions function when its called 
        {
            type: "confirm",
            name: "packages",
            message: "Did you use any pacakges?"
        },

        //Ask about contributors
        {
            type: "input",
            name: "contribute",
            message: "List your contributors. (If none, press ENTER to skip)"
        }

    ]);
}

// console.log(answers)


//create generate function to layout README

function generateRead(answers) {
    return `# Welcome to ${answers.projectName} by ${answers.name}

    
## Description
    
${answers.bio}

## User Story

As a ${answers.user}, I want to ${answers.capability}, so that ${answers.benefit}

    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)

    
## Installation

To use this application, run the following commands in your terminal to install the appropriate packages

* ${answers.installation}

## Usage 

After you've installed the packages, ${answers.usage}


## License
${getLicense(answers.license)}

## Contributing
${getContribute(answers.contribute)}

## Tests
${getTest(answers.test)}

## Questions
    
If you see any improvements that can be made, please email me at ${answers.email}. You can also visit my GitHub page at https://github.com/${answers.github} or visit the ${answers.projectName} page at ${answers.URL}

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
        } else if (license[i] === "Creative Commons License") {
            results += "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0) "
        }

    }
    if (results === "") {
        results += "No Licenses Used"
    }
    return results
}

function getContribute(contribute) {
    if(contribute) {
        return `${contribute}`
    } else {
        return `This project has no other contributors.`
    }
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
            const answersNo = { ...answers, ...results}
            const readme = generateRead(answersNo)
            return writeFileAsync("README.md", readme)
        }

    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });;