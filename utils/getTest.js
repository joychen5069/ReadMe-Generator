//check to see if the user has a test command
function getTest(test) {
    if (test) {
      return `To test this application, use command ${test}`
    } else {
      return "No Tests"
    }
  }

  module.exports = getTest;