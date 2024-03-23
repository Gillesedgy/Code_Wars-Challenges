/**
<<<<<<< HEAD
 * https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
 * 
=======
>>>>>>> c2c0a41285cf642e43897a0d84b02703f07eb2b5
 * *DESCRIPTION:
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
 */

//? Understanding
// i must validate if a user input is alpahnumerical => conains numericaland/or alphabetic characters
//? Given information
// string is always valid aka
// result must be at least one character
// no empty string or "" marks
// no whitespace  => trim () and filter()
// no underscores  ==> // filter out underscores
// uppercase and lowercase characters are allowed
//? Steps to  Solution
// check empty string and return false
// Im thinking of using a regex to check for the allowed cases..
// return the resutl if regex passes

function alphanumeric(string) {
  // Regular expression for matching allowed characters
  const regex = /^[a-zA-Z0-9]+$/;

  // Test the string against the regex
  return regex.test(string);
}

console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false
