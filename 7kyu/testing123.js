//Description
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//? Question to ask
// Will it always be whole number? Will they always be positive integers?
// todo: We need to create a loop to check all the numbers. Then return the index : arr[index]. Declare a variable to store the array results into, using the push method If array is empty, return []

//! Solution(s)
var number=function(array){
    // initialize an empty array
    let array = new Array()
// if given an empty array
if(!array.length){
    return []
  }
    else{
      for (let i = 0; i<array.length; i++){
  
        result.push((i+1) +": "+ array[i])
      }
    }
      return result

}
console.log(number(["a", "b", "c"]))