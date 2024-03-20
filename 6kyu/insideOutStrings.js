/**   Inside Out Strings https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript
 * //?Instructions
 You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the center.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
 */

//?  Understanding
// given a string of words, my job is to move the  letters around according to the rules.
//
//?  Given information
// we are given a strins of words
// the words are letters
// if the word even, shuffle or move all the letters
// if odd, keep the middle letter where it is and move the outside ones.

//?  Possible steps to solution
// given te string..
// split the string in order to iterate over the letters
// find the length of each
//* then divide in half  to find center letter (example: TAXI => TA | XI )
// divide again, then suffle the right side letters than the left side letters... (example: TA = AT , XI =IX)
// Then join them again

function insideOut(string) {
  let letters = string.split("");
  console.log(letters);
  // iterate
  let transformation = letters.map((letter) => {
    if (letter.length <= 3) {
      return letter;
    } else {
      // divide in half
      let middleLetter = Math.floor(letter.length / 2);

      // split them to be able to shuffle them around
      let characters = letter.split("");

      console.log(characters);
      // Now working with the left and right side
      let leftPart = characters.slice(0, middleLetter).reverse().join("");
      let rightPart = characters.slice(-middleLetter).reverse().join(""); // checking if length is even, join the reversed parts
      if (word.length % 2 === 0) {
        return leftPart + rightPart;
      } else {
        // if the length is odd, keep the middlele letter whewre its at.
        return leftPart + characters[middleLetter] + rightPart;
      }
    }
  });
  return transformation.join("");
}

console.log(insideOut("man i need a taxi up to ubud")); //=> ouput 'man i ende a atix up to budu'
console.log(insideOut("what time are we climbing up the volcano")); //=> ouput 'hwta item are we milcgnib up the lovcona'
console.log(insideOut("man i need a taxi up to ubud")); // 'man i ende a atix up to budu';
console.log(insideOut("what time are we climbing up the volcano")); // 'hwta item are we milcgnib up the lovcona';
console.log(insideOut("take me to semynak")); // 'atek me to mesykan';
