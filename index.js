const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

// const generateMarkdown = require("./utils/generateMarkdown")

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
            name: "bio",
            message: "Tell me a short bio about the project",
        },

        {
            type: "input",
            name: "instal",
            message: "Did you need any special packages?",
        },

        {
            type: "input",
            name: "license",
            message: "Does it have any special license?",
        },

        {
            type: "input",
            name: "userStory",
            message: "What is the user story?",
        },
    

        //user axios to get information
        // const projectURL = (user, title) => {
        //     const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
        //     return ` https://github.com/${user}/${kebabCaseTitle}`

        // console.log(projectURL) //giant mess. figure out why

        //create constant to have information for README
    ])    } 


//call function to actually run
askQuestions();


