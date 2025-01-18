//import the lodash module
const lodash = require("lodash");


//Create a function to find a maximum value from number array.
function findMaxValue(a) {
  return lodash.max(a)
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(a,b) {
  return lodash.filter(a,(num) => num > b)
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(employeeName){
  return employeeName.map((name)=> lodash.toUpper(name))
}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
}

