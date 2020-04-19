
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




//check to see if the user has a test command
function getTest(test) {
  if (test) {
    return `To test this application, use command ${test}`
  } else {
    return "No Tests"
  }
}

//write code to add badges for licenses
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

//create function to add contributors if there are any
function getContribute(contribute) {
  if (contribute) {
    return `${contribute}`
  } else {
    return `This project has no other contributors.`
  }
}

//call function to actually run


module.exports = generateRead;
