const getTest = require("./getTest")
const getLicense = require("./getLicense")
const getContribute = require("./getContribute")
//create generate function to layout README

function generateRead(answers) {
  return `# Welcome to ${answers.projectName} by ${answers.name}

${getCode(answers.code)}
  
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





//create function to write badges for coding language
function getCode(code) {
  let language = ""
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "JavaScript") {
      language += "[![JavScript](https://img.shields.io/badge/Made%20With-JavaScript-blue.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Java") {
      language += "[![Java](https://img.shields.io/badge/Made%20With-Java-green.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Go") {
      language += "[![Go](https://img.shields.io/badge/Made%20With-Go-ff69b4.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Python") {
      language += "[![Python](https://img.shields.io/badge/Made%20With-Python-yellow.svg)](https://shields.io/)  "
    }
    else if (code[i] === "C") {
      language += "[![C](https://img.shields.io/badge/Made%20With-C-blueviolet.svg)](https://shields.io/)  "
    }
    else if (code[i] === "C+") {
      language += "[![C+](https://img.shields.io/badge/Made%20With-C+-yellowgreen.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Ruby") {
      language += "[![Ruby](https://img.shields.io/badge/Made%20With-Ruby-red.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Lua") {
      language += "[![Lua](https://img.shields.io/badge/Made%20With-Lua-blue.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Swift") {
      language += "[![Swift](https://img.shields.io/badge/Made%20With-Swift-green.svg)](https://shields.io/)  "
    }
    else if (code[i] === "Kotlin") {
      language += "[![Kotlin](https://img.shields.io/badge/Made%20With-Kotlin-red.svg)](https://shields.io/)  "
    }


  }
  return language
}


//Export out so that index.js can read the file
module.exports = generateRead;
