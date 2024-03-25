/**
 * https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
 * 
 * ? Instructions:
 * Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

*!Attention: If the number has leading zeros the amount of digits should be considered.
 */
// * Understandgin 
 //  I must increment a string by 1.. ( foo => foo1, lol1 => foo2, uh09 => uh10

//* Given infomration
// If a string ends with a Number, increment the number by 1
// if a string does not end with a number, add 1 at the end of that string
// pay attetion to strings with leading zero, they must also increase by 1... lol099 => lol100 

//* Steps to solution 
// create a varibale to hold and update the string values 
// identify numbers in the string
    // if theres a number.. check the length and update the number 
            // if there is not Number, return that string with 1 at the end

            function incrementString(strng){
// check fo numbers
let isNumber =  strng.match(/\d*$/)[0] // this is a regex that checks for the digits in a string 
// new str 
let newStrng =""
// is there a number 
if(isNumber){
    // convert the string to a naumber than increment the number part 
    const numberPartLength=isNumber.length
    const increasedNumber = parseInt(isNumber || "0", 10) + 1
// change the number back to string after incrementing
const increasedNumberStrng = increasedNumber.toString()

    // checking the length of the number => for leading numbers or xeros 

    const leadingZeros =  numberPartLength >   increasedNumberStrng.length ? "0".repeat( numberPartLength -increasedNumberStrng.length) : ""

// new string variable  incremented
newStrng =  strng.slice(0, - numberPartLength) + leadingZeros + increasedNumberStrng

return newStrng
}
else{
    // no number strng 
    return strng +"1"
}



            }

     console.log(incrementString("foobar000"))// "foobar001");
    console.log(incrementString("foobar999") )//"foobar1000"
    console.log(incrementString("foobar00999"))// "foobar01000"
    console.log(incrementString("foo" ) )//"foo1"
    console.log(incrementString("foobar001"))// "foobar002"
    console.log(incrementString("foobar1" ))//"foobar2"
    console.log(incrementString("1") )// "2"
    console.log(incrementString("009"))// "010"
    console.log(incrementString("fo99obar99") )//"fo99obar100";