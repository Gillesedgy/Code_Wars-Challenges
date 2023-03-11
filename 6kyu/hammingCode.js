// Background information
// The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.
// In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:

// [ + ] It's simple to implement
// [ + ] Compared to other versions of hamming code, we can correct more mistakes
// [ - ] The size of the input triples
// Task 1: Encode function
// Implement the encode function, using the following steps:

// convert every letter of the text to its ASCII value; (ASCII value of space is 32)
// convert ASCII values to 8-bit binary;
// triple every bit;
// concatenate the result;
// For example:

// input: "hey"
// --> 104, 101, 121                  // ASCII values
// --> 01101000, 01100101, 01111001   // binary
// --> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
// --> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated
// Task 2: Decode function:
// Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:

// 111 --> 101 : this can and will happen
// 111 --> 11 : this cannot happen
// Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.

// Steps:

// Split the input into groups of three characters;
// Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
// Take each group of 8 characters and convert that binary number;
// Convert the binary values to decimal (ASCII);
// Convert the ASCII values to characters and concatenate the result
// For example:

// input: "100111111000111001000010000111111000000111001111000111110110111000010111"
// --> 100, 111, 111, 000, 111, 001, ...  // triples
// -->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
// --> 01101000, 01100101, 01111001       // bytes
// --> 104, 101, 121                      // ASCII values
// --> "hey"

function encode(text){ 
    // P: Will I be given text that are case senstive?
       // Steps?: will have to split the texts to access every single character
    // will have to loop over the texts to assign cagrcode to each charcater using the 'charCodeAt()'
    //toString(2) to covert number to two-binary 
      // padStart(8,"0"), adds a leading 0 to limit length to 8-digits
      let charCode =''
    // join both
     return charCode = text.split("").map( el =>[... el.charCodeAt().toString(2).padStart(8,"0")].map(el3 => el3.repeat(3)).join("")).join("")
      }
      
    //   const ascii = charCode.toString(2).padStart(8,"0").split("")
      // tripple every bit in the array
    //   const repeat = [...ascii].map(el=> el.repeat(3))
    
    function decode(bits) {
      
      // split inputs in groups of 3 using regex
      const split = bits.match(/.{3}/g, "")
      console.log(split)
      // change stacks that arent the same in a row--> 101=> 0  , 110 => return 1
      // sort array first then perform conditional using reduce method
      const stack = split.reduce((prev, cur)=> prev + [...cur].sort()[1] ,"").match(/.{8}/g)
    // change back to letters using String.fromCharcode() n to numbers using parsInt as well 
      const letter = stack.map( s => String.fromCharCode(parseInt(s , 2))).join("")
    
      return letter;
    }
    