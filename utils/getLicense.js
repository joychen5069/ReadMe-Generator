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

  module.exports = getLicense;