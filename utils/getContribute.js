//create function to add contributors if there are any
function getContribute(contribute) {
    if (contribute) {
      return `${contribute}`
    } else {
      return `This project has no other contributors.`
    }
  }

  module.exports = getContribute;
  