/**
 * Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

 */

//? Understading
// we need a function that accepts strin as an argument
// all must be small latters
// We need to compare the values of both sides (left and right) to determine a winner or a due over.

//? Given information
// Each letters has a power assigned to it
//   To determine the winner ir due over, msuse havce the sum of each sides

//? Possible steps to solution
// Create a variable to store the sum of each sides
// Create an object to store the letters(keys) and power(value) for left and right side
// iterate over the object to access the powers of both sides and compare
// Once we have the power, we add the total of each side and save it to their respective variables
// Conditiopnal to compare if its a win or a due over

function alphabetWar(fight) {
  // create objects for the left and right side so we can add the values
  let leftSideLetters = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  let rightSideLetters = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  // instintiate two variable for left and right side
  let leftSideSum = 0;
  let rightSideSum = 0;

  // iterate through the letters
  for (let i = 0; i < fight.length; i++) {
    let letter = fight[i];
    // check of the letter is a key in either the left or right => ___sideLetters[letter]
    if (leftSideLetters[letter]) {
      leftSideSum += leftSideLetters[letter];
    } else if (rightSideLetters[letter]) {
      rightSideSum += rightSideLetters[letter];
    }
  }
  // compare both sums to determine winner or due over
  if (leftSideSum > rightSideSum) {
    return "Left side wins!";
  } else if (rightSideSum > leftSideSum) {
    return "Right side wins!";
  } else {
    return "Let's Fight again!";
  }
}
// console.log(alphabetWar("z")) //=> Right side wins!
// console.log(alphabetWar("zdqmwpbs"));//=> Let's fight again!
// console.log(alphabetWar("zzzzs"))//=> Right side wins!
// console.log(alphabetWar("wwwwwwz")) //=> Left side wins!
console.log(alphabetWar("wmqpsbhdgm")) //




