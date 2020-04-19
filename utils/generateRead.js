const getTest = require("./getTest")
const getLicense = require("./getLicense")
const getContribute = require("./getContribute")
const getCode = require("./getCode")

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


//Export out so that index.js can read the file
module.exports = generateRead;
