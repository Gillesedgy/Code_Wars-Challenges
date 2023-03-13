// Descritption
/*You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem. */


//! Solutions(s)
function replicate(times, number) {
    // base 
      let arr = []
     // if time is neg, return [] 
      if(times <=0){
        return arr
      } 
      else{
          // recursion
    // replication is initialized, and calls it self with (Times -1) each times until it meets base case.
    // It adds the results to the array by using the push method 
     const replication = replicate( times - 1 , number)
    replication.push(number)
      return replication
      }
           
    }