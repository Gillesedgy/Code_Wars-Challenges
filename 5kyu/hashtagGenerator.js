/**
 * * https://www.codewars.com/kata/the-hashtag-generator
 * 
 *? DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
 */
//? Undertsnasing
// I have to add a hashtag "#" at the begining every sentence
// Capitalie the first charcater of every word
// according to the rules, I have to return  false for  everytime the final result is longee than 141 chacaters.
// return false for emtype strings

//? Given information
// Capitalie the first letter of every word,
// final result must not be linger than 140 char, if so return false
// return flase for  any emty strings

//? Steps to  solution
// check for empty strings , return false
// iterate over the strings
// add a hastag at the beginning of each string sequence.
// Capitalie the first letter of every word
// check the length of the result string , if more than 140, return false

function generateHashtag(str) {
  // trim any space at the start and end of the sequence
  str = str.trim();
  // empty strings
  if (str.length === 0) {
    return false;
  }
  // checking for empty strings between words and return ony words.. not spaces
  let wordArray = str.split(" ").filter((word) => word.length > 0);

  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    // console.log(wordArray[i]);
  }
  // add  hashtag
  let hashtagWord = "#" + wordArray.join("");

  if (hashtagWord.length > 140) {
    return false;
  }
  return hashtagWord;
}
console.log(generateHashtag("")) // false, "Expected an empty string to return false"
console.log(generateHashtag(" ".repeat(200))) // false, "Still an empty string"
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars")); // "#Codewars", "Should handle a single word."
console.log(generateHashtag("Codewars Is Nice")); // "#CodewarsIsNice", "Should remove spaces."
console.log(generateHashtag("Codewars is nice")); // "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars"
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
); // false, "Should return false if the final word is longer than 140 chars."
console.log(generateHashtag("a".repeat(139))); // "#A" + "a".repeat(138) // "Should work"
console.log(generateHashtag("a".repeat(140))); // false, "Too long"
