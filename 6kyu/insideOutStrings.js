/**   Inside Out Strings https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript
 * //?Instructions
 You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
 */

function insideOut(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
      if (word.length > 3) {
        return word[0] + word.slice(1, -1).split("").reverse().join("") + word.slice(-1);
      }
      return word;
    });
    return reversedWords.join(" ");
  }
    // console.log(insideOut('man i need a taxi up to ubud')) //=> ouput 'man i ende a atix up to budu'
    console.log(insideOut('what time are we climbing up the volcano')) //=> ouput 'hwta item are we milcgnib up the lovcona'