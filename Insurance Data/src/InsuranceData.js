//import all the modules require
const fs = require('fs');
const csv = require('csv-parser');
const lodash = require('lodash');
const readline = require('readline');
const { error } = require('console');
//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
 

  
  let fileContents = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });

  try {
    rl.on('line', (line) => {
      fileContents.push(line);
    });

    rl.on('close', () => {
      cb(null, fileContents);
    });

    rl.on('error', (err) => {
      cb(err);
    });
  } catch (err) {
    cb(err);
  }


}


//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  try {
    // Skip header row and filter for female candidates in southwest
    let filteredData = fileContents.slice(1).filter(line => {
      const fields = line.split(',').map(field => field.trim());
      return fields[1] === 'female' && fields[5] === 'southwest';
    });

    // Remove any empty/null values
    filteredData = lodash.compact(filteredData);
    
    cb(null, filteredData);
  } catch (err) {
    cb(err);
  }
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
  try {
    fs.writeFile(outputFileName, filteredData.join('\n'), (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null);
      }
    });
  } catch (err) {
    cb(err);
  }
}

//This method will read the file content using Streams
//create array and push all the data from file to it
const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];

  fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (row) => {
      fileContents.push(Object.values(row).join(', '));
    })
    .on("error", (err) => {
      console.log("Error while reading contents of file using streams, ERROR::", err);
      cb("Encountered error while reading file contents using streams..!");
    })
    .on('end', () => {
      cb(null, fileContents);
    });
}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data
const filterDataWithNoChildren = (fileContents, cb) => {
  try {
    // Skip header row and filter for records with no children
    let filteredData = fileContents.slice(1).filter(line => {
      const fields = line.split(',').map(field => field.trim());
      return fields[3] === '0';
    });

    // Remove any empty/null values
    filteredData = lodash.compact(filteredData);
    
    cb(null, filteredData);
  } catch (err) {
    cb(err);
  }
}

module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
  writeFilteredDataToFile,
  filterDataWithNoChildren
}
