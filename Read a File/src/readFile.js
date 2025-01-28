const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data.toString()); // Convert Buffer to string
    });
  });
};

// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
    return new Promise((resolve, reject) => {
        try {
            const upperCase = lodash.toUpper(fileContents);
            resolve(upperCase);
        } catch (err) {
            reject(err);
        }
    });
};

// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  if (!fileName || !cb) {
    return cb("Invalid input parameters", null);
  }

  try {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        return cb("Encountered error while reading file contents..!", null);
      }
      
      const upperCase = lodash.toUpper(data);
      // Split the string into an array by commas
      const namesArray = upperCase.split(',').map(name => name.trim());
      return cb(null, namesArray);
    });
  } catch (err) {
    return cb("Error while processing file contents..!", null);
  }
};

module.exports = {
  readAndConvertFileContents,
};
