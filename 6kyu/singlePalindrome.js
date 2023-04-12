//! Solution(s)
function solve(s){
  
    if (s === s.split('').reverse().join('')) {
      return 'OK'
    }
  
    for (let i=0;i<s.length;i++) {
      let strArr = s.split('')
      strArr.splice(i, 1)
  
      if (strArr.join('') === strArr.reverse().join('')) {
        return "remove one"
      }
    }
    return 'not possible'
  };

  console.log(solve("abba")); //"OK"
  console.log(solve("abbaa")); //"remove one"
  console.log(solve("abbaab")); // "not possible"
  console.log(solve("madmam")); //"remove one"
  console.log(solve("raydarm")); //"not possible"
  console.log(solve("hannah")); //"OK"