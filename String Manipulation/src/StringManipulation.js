//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  if(str) {
    let lowerCase = str.toLowerCase();

    const vowels = "aeiou"

    let count = 0;

    for(let char of lowerCase) {
      if(vowels.includes(char)){
      count++;
      }
    }
    return count;
  } else {
    return 0; // Handle empty string or null input
  }
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if(str.includes(checkStr)) {
    return true
  } else {
    return false
  }
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  if(str) {
    return str
    .toLowerCase() // Converts to Lower Case
    .split(" ") // Splits It
    .map(word => word.charAt(0).toUpperCase()+ word.slice(1)) //UpperCase 0 character of each word
    .join(" ") // Join
  } else {
    return ""; // Handle empty string or null input
  }
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  if (str) {
    const words = str.split(" ");
    const lengths = words.map((word) => word.length);

    let maxLength = Math.max(...lengths);

    const longestWord = words.filter((word) => word.length === maxLength).join(" ");

    return longestWord;
  } else {
    return ""; // Handle empty string or null input
  }
};


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}