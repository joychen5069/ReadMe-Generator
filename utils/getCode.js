




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
  
  module.exports = getCode;