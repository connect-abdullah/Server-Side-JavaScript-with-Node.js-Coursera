//import all the require modules
const fs = require("fs");
const lodash = require("lodash");
const csv = require("csv-parser");
//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName
//and second the callback
const readFileContents = (fileName, cb) => {
  let fileContents = [];

  // Check if file exists first
  if (!fs.existsSync(fileName)) {
    cb('Encountered error while reading file contents..!', null);
    return fileContents;
  }

  fs.createReadStream(fileName)
    .pipe(csv())
    .on("data", (row) => {
      fileContents.push(row);
    })
    .on("end", () => {
      cb(null, fileContents);
    })
    .on("error", (error) => {
      cb('Encountered error while reading file contents..!', null);
    });

  return fileContents;
};

// readFileContents("./resources/data_flipkart_product_sample.csv", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });


//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  const sortedData = lodash.sortBy(fileContents, "price");
  cb(null, lodash.reverse(sortedData));
};


//This method will sortDataonRating
const sortDataOnRating = (fileContents, cb) => {
  // Filter out products with no rating, but keep ratings as strings
  const validRatings = fileContents
    .filter(product => product.product_rating !== 'No rating available');
    
  const sortedData = lodash.sortBy(validRatings, "product_rating");
  cb(null, lodash.reverse(sortedData));
};


//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  fs.writeFile(outputFileName, sortedData, (err) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, sortedData);
    }
  });
};


module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,
};
