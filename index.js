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

        //ask about packages, if yes, how do you proceed. if No, how do you null out
        {
            type: "list",
            name: "install",
            message: "Did you need any special packages?",
            choices: [
                "Yes",
                "No"
            ]
        },

        {
            type: "checkbox",
            name: "license",
            message: "Does it have any special license?",
            choices: [
                "MIT License",
                "Apache License 2.0",
                "GNU GPLv3",
                "ISC License",
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

    ]) ;
   } 




//create generate function to layout README

function generateRead(answers) {
    return `
    Hello
    # Welcome to ${answers.projectName}

    ## Description
    ${answers.bio}

    ## Table of Contents


    ## Installation

    ${answers.install}

    ## Usage

    As a ${answers.user}, I want to ${answers.capability}, so that ${answers.benefit}

    ## License

    ## Contributing

    ## Tests

    ## Questions
    
    If you see any improvements that can be made, please email me at ${answers.email}. You can also visit my GitHub page at https://github.com/${answers.github}
    ${answers.name}
    `
}

//call function to actually run
askQuestions()
    .then(function(answers) {
        const readme = generateRead(answers)

        return writeFileAsync("README.md", readme)
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
      })
    .catch(function(err) {
        console.log(err);
      });;