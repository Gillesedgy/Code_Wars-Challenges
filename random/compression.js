/*
For each character in a string log the character and the count in a compressed format. Exp stringCompression("aaabbcca") // => "a3b2c2a1"
stringCompression("xbzzx") // => "x1b1z2x1"
*/
 // log the occurance of each character
// every input is expected to be lowecase
// loop over string --> using for loop 
// Initialize a var to save number of time for each char
// 'aaabbcca'
// i want to check if this letter is anywhere else in the string
// const obj = {a:1, b:2, c:2, }

let str = 'aabbcc'

function stringCompression(string) {
  let count = 0
  let str =''
  for (let i=0; i < string.length; i++){
    if(string[i] === string[i+1] ){
   count+=1 
           }      // accounts for last charcater 
    else if(string[i] !== string[i-1] ){
      str += string[i] + 1
    }
    else{
      str += string[i] + (count+1) // 
      count = 0
    }
  }
  return str
}
console.log(stringCompression('aabbccd'))