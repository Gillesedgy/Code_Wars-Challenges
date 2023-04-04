/**
 Convert an array of strings to array of numbers

 Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

 */

// Create an varaibale to save arrays
// loop over the array of strings to then convert each to a number 
// use a method to concert to numbers => Numbers , parseInt, parseFloat ... 

const toNumberArray =(stringarray)=>{
const numArr = []

for(let i=0; i< stringarray.length; i++){
    numArr.push(Number(stringarray[i]))
}
return numArr
}

console.log(toNumberArray(["1.1","2.2","3.3"]))