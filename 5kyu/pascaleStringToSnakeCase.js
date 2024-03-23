/**DESCRIPTION:
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
 */

//? Understanding
// transform a sentence from PascalCase to snake_case. Lowecase charcaters can be numbers and if theres a number input, return it as a string
//

//? Given information
// input can be string or number
// numbers can be lowercase
// Return number inputs as strings.
//

//? Steps to solution
// check for type of input
/// save the final string in a variable
// => take care f number inputs
//  Perform a loop if there is more than one charcter in the string. ... because we can get single charcaters like num and a letter or just nums 
// Locate all uppercase charcaters and convert them to lowercase
//  REMEBER to add the underscore infront of the  new  convereted charcter and so on. ignoring the first charcter
//  return the result

function toUnderscore(string) {
    let result = ""
  // checking for numbers
  if (typeof string === "number") {
    return string.toString();
  }
  // starting point ... lowecase the first charcter at the start
//   let result = string[0].toLowerCase();

  console.log(string);

  for (let i = 1; i < string.length; i++) {
    // is the current character is uppercase.
    if (string[i] === string[i].toUpperCase() && isNaN(parseInt(string[i]))) {
      //  underscore before the character if it's uppercase and not the start of a number.
      result += "_" + string[i].toLowerCase();
    } else {
   
      result += string[i];
    }

  }
  return result;
}

console.log(toUnderscore("TestController")); // "test_controller"
console.log(toUnderscore("MoviesAndBooks")); //"movies_and_books"
console.log(toUnderscore("App7Test")); // "app7_test"
console.log(toUnderscore(1)); //           "1";
