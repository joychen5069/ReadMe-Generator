const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

//create function to ask questions
async function askQuestions() {
    try {
        //use inquirer to ask questions and store
        const { name } = await inquirer.prompt({
            message: "What is your name?",
            name: "name",
        })

        const { user } = await inquirer.prompt({
            message: "what if your github username?",
            name: "user",
        });

        // console.log(user)
        //user axios to get information
        const { data } = await axios.get(
            `https://github.com/${user}`
        );

        console.log(data) //giant mess. figure out why

        //create constant to have information for README
        const readMe = generateRead(name, github)
        fs.writeFile("README.md", readMe, function (err) {
            if (err)
                console.log(err)
        })

    } catch (err) {
        console.log(err);
    }

}
//create actual README
const generateRead = (name, github) => {
    return
    `# Welcome to my README.md Generator!
    
    This application will allow you to create ReadMe files for your new projects. As a user, when you are promped, you will need to provide your name and your GITHUB url. Using Inquirer and Axios, this application will then create a README that contains your picture, your email, and will list your repositories.`
}

//call function to actually run
askQuestions();


