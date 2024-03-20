/** 
 *  https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript
 * For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
 */

//? Understanding
// given two dimensional arrays, I  jave to check to see if there are a seires of good and bad ideas..
// each can be good or bad
// I  need to stroe the count of each element
//? Given information
// given a two dimensional array ==> [[x, y], [p]]
// all inputs are not expected to be a string
// sub arrays  are not the same length
//  It is not case sensitive// Good, GOOd and good.. all counts the same ...
//? Possible steps to solution
// turn the 2d array into a single array... AKA Flatten the bad boy
// check for type in the array..  if strring or not

function well(arr) {
  let count = 0;

  // iterate through the array then again lol
  for (let array of arr) {
    for (let j = 0; j < array.length; j++) {
      // check for string => typeof
      if (typeof array[j] === "string" && array[j].toLowerCase() === "good") {
        count++;
      }
    }
  }
  // conditions fot return the proper values
  if (count === 0) {
    return "Fail!";
  } else if (count > 2) {
    return "I smell a series!";
  } else {
    return "Publish!";
  }
}

console.log(
  well([
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
  ])
); // 'Fail!'
console.log(
  well([
    ["gOOd", "bad", "BAD", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["GOOD", "bad", "bad", "bAd"],
  ])
); // 'Publish!'
console.log(
  well([["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"], ["bad"], ["gOOd", "BAD"]])
); // 'I smell a series!'
