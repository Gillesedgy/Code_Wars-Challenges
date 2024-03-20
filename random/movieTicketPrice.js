/*
***  Movie Ticket Clerk
Instructions

A new hit blockbuster movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. A movie ticket costs 25 dollars.

You are currently working as a clerk. You want to sell a ticket to every single person in this line.

Can you sell a ticket to each person and give the change if you initially have no money and sell the tickets strictly in the order people follow in the line?

Return YES, if you can sell a ticket to each person and give the change. Otherwise, return NO.

Note: You should try give back the least amount of bills possible. For example, if someone is owed 75 in change, you should first try to give them a 50 and a 25. If you can not, then give three 25's.


*/

/*
CQ:
-Does array only contains 25, 50, 100 values.. No decimals? 
-Will "person" always have $$ => (array empty)

PC: 
change => Cash > ticket($25) --> Cash - 25
Create a var to save values (25 and 50)
PR:
 - keep track of bills => obj var
 - Loop => to check if everybody has the right amount of money
  

  */function canMakeChange(peopleInLine) {
    let register = 0
    for(let i=0; i<peopleInLine.length; i++){
    let bill = peopleInLine[i]
    
    if(bill === 25){
      register += 25 
      }
      else{
      let change = bill - 25
       if(register < change  ){
         return "NO"
       } 
        else {
          register += 25
          register -= change
          
        }
      }
    }
               
      return "YES"  
    }