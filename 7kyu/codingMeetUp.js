/**
 * https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language
 * 
 * DESCRIPTION:
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:

The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.
 */
//? Understanding:
//  given an object of developers, my jopb is to find those who code in the same language  as true.

//? Given information
// They gave me an Object
// must return a boolean value
// obj will always be foramted tthe same

//? Steps top Solution:
// I have to iterate over the obj  chaking for their languages
// I will have a variable to store and compare between developers
const list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];
const list2 = [
  {
    firstName: "Mariami",
    lastName: "G.",
    country: "Georgia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Mia",
    lastName: "H.",
    country: "Germany",
    continent: "Europe",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Maria",
    lastName: "I.",
    country: "Greece",
    continent: "Europe",
    age: 32,
    language: "C",
  },
];
function isSameLanguage(list) {
    // storing a lnague to compare to // in htis case, i chose the first dev
  let firstDeveloperLanguage = list[1].language;
  // edge sorta case.. if theres no one to compare to.. auto true 
  if (list.length === 0) {
    return true;
  }
  for (let lang of list) {
    if (lang.language !== firstDeveloperLanguage) {
      return false;
    }
  }
  return true;
}

console.log(isSameLanguage(list1)); // true
console.log(isSameLanguage(list2)); // false
