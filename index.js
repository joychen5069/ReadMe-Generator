const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");


async function askQuestions() {
    try {
        const { name } = await inquirer.prompt({
            message: "What is your name?",
            name: "name",
        })

        const { github } = await inquirer.prompt({
            message: "what if your github username?",
            name: "github",
        });

        console.log(github)

        const readMe = generateRead(name, github)
        fs.writeFile("README.md", readMe, function (err) {
            if (err)
                console.log(err)
        })

    } catch (err) {
        console.log(err);
    }




}

const generateRead = (name, github) => {
    return
    `# Welcome to my README.md Generator!
    
    This application will allow you to create ReadMe files for your new projects. As a user, when you are promped, you will need to provide your name and your GITHUB url. Using Inquirer and Axios, this application will then create a README that contains your picture, your email, and will list your repositories.`
}
askQuestions();


