//import all the require module
const fs = require('fs');
const lodash = require('lodash');
const csv = require('csv-parser');


//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

//This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
const readFileContents = (fileName, cb) => {
  const fileContents = [];
  
  fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (row) => {
      fileContents.push(row);
    })
    .on('end', () => {
      cb(null, fileContents);
    })
    .on('error', (error) => {
      cb(error, null);
    });
  
}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
    try {
        const filteredData = fileContents.filter(row => row.payment_method === 'credit');
        cb(null, filteredData);
    } catch (error) {
        cb(error, null);
    }
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
    try {
        fs.writeFile('output.txt', filteredData, (err) => {
            if (err) {
                cb(err, null);
            } else {
                cb(null, "Successfully wrote filtered data to output.txt file..!");
            }
        });
    } catch (err) {
        cb(err, null);
    }
}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
