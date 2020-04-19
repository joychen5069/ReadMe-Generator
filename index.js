const inquirer = require("inquirer");
const generateRead = require("./utils/generateRead")
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

        //ask what they powered the application with
        {
            type: "checkbox",
            name: "code",
            message: "What is the application powered by?",
            choices: [
                "JavaScript",
                "Java",
                "Go",
                "Python",
                "C",
                "C+",
                "Ruby",
                "Lua",
                "Swift",
                "Kotlin"

            ]
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
        }
        else {
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

return generateRead;