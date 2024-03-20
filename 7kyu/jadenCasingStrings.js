/*
*DESCRIPTION:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

//? Whats happens if we get an empty string? 
//? Should I expect the string to only contain punctuation charcaters. 
 
//* Each word should start with a Capital letter
//* So I think I am going to loop over the string and use a method to only select the first character of each word


function toJadenCase(string){
// split to turn into an array
    const newStringArray = string.split(" ") 
// initialize a varibale that will hold the finla string
let newString = ""

  // if the string is empty, return an empty string
// if(string.length === 0){
//     return 0
// }
  // iterate over the string
  for(let i = 0; i < newStringArray.length; i++){
      
    // Grab the first character and Capitalize it then join using slice 
newString +=(newStringArray[i].slice(0,1).toUpperCase() + newStringArray[i].slice(1) + ' ')
}
// return the new string
return newString.trim() // remove blank spaces before and after the string 
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
// console.log(toJadenCase())

// using map 
function  toJadenCase2(string){
    const stringArray = string.split(" ")

const newString2 = stringArray.map( str =>{
    str[0].toUpperCase() + str.slice(1) + " "
}) 
return newString2.join("")
}
console.log(toJadenCase2("How can mirrors be real if our eyes aren't real"))