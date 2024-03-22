/**
 * https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
 *
 * Instructions:
 * *Reverse every other word in a given string, then return the string.
 * *Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
 * *Punctuation marks should be treated as if they are a part of the word in this kata.
 */
//? Understanding
// I  have to reverse every other word in a a given string.
// I also have to make sure they are spaced correctly and
// I should count puntuations => (.  , ?  !  :  ;  []  {}  ...   -   _  () ""    /  \   |  )

//? Givewn information
// trim white space between each word ...making sure there's expactly one space =>  removing double spaces
// Include puntuations in the comparison

//? Steps to solution
//  iterate through the string.
// I have to split the string
// I have to store every other string in a separate variable, reverse it then add it back to the string
// I should check the gap between each word, making sure they are single spaces
// I should also trim the beginning  and the end of eeach sentence ... to remove any unwanted ghaps

function reverse(str) {
  let trimmedWord = str.trim(); // to remove front and end spaces

  let wordsArray = trimmedWord.split(" ").filter((word) => word.length > 0); // split and also check for strings or spaces  between each words
  console.log("WORDSARRAY:", wordsArray);

  for (let i = 0; i < wordsArray.length; i++) {
    if (i % 2 !== 0) {
      // take the word at every other index and reassingned it to the reversed version of it.
      wordsArray[i] = wordsArray[i].split("").reverse().join(""); // revereses the word
    }
  }
  return wordsArray.join(" ");
}

console.log("Reverse::", reverse("  Reverse this       string,     please!  ")); //  "Reverse siht string, !esaelp"
console
  .log
  //   reverse("I really don't like reversing strings!") //  "I yllaer don't ekil reversing !sgnirts"
  ();
