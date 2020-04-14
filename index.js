const inquirer = require("inquirer");
const fs = require("fs")


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

        console.log( github)

        const readMe = generateRead(name, github)
        fs.writeFile("README.md", readMe, function(err) {
            if (err)
            console.log(err)
        })

    } catch (err) {
        console.log(err);
    }




}

const generateRead = (name, github) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
        <h1>${name}</h1>
        <div class="card">${github}
        </div>
    </body>
    </html>`
}
askQuestions();


