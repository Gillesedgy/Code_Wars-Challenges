/**
 * Fizz Buzz 

 Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]

 */

//! Solutions(s)

function solution(number){
    let a=0 
    let b = 0
    let c=0
    
    for(let i = 1; i < number; i++){
    
    if(i % 3 ===0 && i % 5 !== 0 ){
      a++
    } 
      else if(i%5===0 && i%3!==0){
        b++
      }
      else if(i%3===0 && i%5===0){
        c++
      }
    
    }
      return [a,b,c]
      }
      console.log(solution(14)) // [4,2,0]