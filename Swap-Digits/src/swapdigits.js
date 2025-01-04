const swapDigits = (number) => {
  let swappedNumber = 0;
  //write logic here
  let n = number.toString();
  let length = n.length;
  let result = [];

  if (number < 0) {
    return swappedNumber = 0;  
    // We used Return Here so the next code will not be executed
  }

  if (length % 2 === 0) {
    for (let i = 0; i < length; i += 2) {
      result.push(n[i + 1], n[i]);
    }
  } else {
    result.push(n[0]);
    for (let i = 1; i < length - 1; i += 2) {
      result.push(n[i + 1], n[i]);
    }
  }

  swappedNumber = parseInt(result.join(""), 10);
  return swappedNumber;
};

module.exports = swapDigits;