/**
 ** https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript
 *Instructions:
 *  Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
 */

//? Understanding
// wrtie a afunction that takes one or more objects and returns a new object wihch combines all the objects, summing all of the matching key togeher.
//? Given ingformation
// input will only be numbers
//  matching keys are added together.
// DO not mutate the input object

//? Seteps to solution
// function ut be able to take more than one  object  => using the rest aparameter
// to not mutate the object, copy the origian  object
// new variable for result and copy of object
// iterate over the original  object(s),
// find the matching keys => add them if similar, else create the key

function combine(...args) {
  // copy of the original object
  const newObject = {};

  args.forEach((obj) => {
    //   console.log("VAL", Object.values(k)[0])
    Object.keys(obj).forEach((key) => {
      if (newObject[key] !== undefined) {
        newObject[key] += obj[key]; // add up similar  if exist
      } else {
        newObject[key] = obj[key]; // create it in the new object if it doesnt
      }
    });
  });

  return newObject;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

console.log(combine(objA, objB, objC)); // { a: 18, b: 20, c: 36, d: 14, e: 8 }
console.log(combine(objA, objC, objD)); //  { a: 15, b: 20, c: 33, d: 11, e: 8 }
console.log(combine(objA, objB)); // { a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC)); // { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine({}, {}, {})); // {}
console.log(combine(objA, objC, {})); //{ a: 15, b: 20, c: 30, d: 11, e: 8 }
