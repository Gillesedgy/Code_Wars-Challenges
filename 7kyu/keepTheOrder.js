/**
 * Keep The Order 
 * 
 *Task:
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
 */

                //? empty array is empty return 0
                //? 
function keepOrder(arr, val){

// initialize two varbales, keeping track of left and right index value 
let leftIndex = 0 
let rightIndex = arr.length - 1    
// loop throught the array
while( leftIndex <= rightIndex){
    // find the mid point of the array
const midIndex = Math.floor((leftIndex + rightIndex) / 2)

// return the current index if the value if equal to the midpoint 
if (arr[midIndex] === val) {
    // Handle duplicate occurrences of `val`, we use a nested while loop to move midIndex to the left until the first occurrence of val is found. Then, we return this index as the lowest index where val should be inserted.
    while (midIndex > 0 && arr[midIndex - 1] === val) {
      midIndex--; // had to look it up :( 
    }
    return midIndex;
}
else if(arr[midIndex] < val){
    leftIndex = midIndex + 1 // move to the right by one if the midIndex is less than the values index
}
else{
rightIndex = midIndex - 1 //move to the left by one if the midIndex is less than the values index
}
}
return leftIndex // because it should be at the lowest index where the val should be inserted .. .

}

console.log(keepOrder([1, 2, 3, 4, 7], 5)) // 4
console.log(keepOrder([1, 1, 2, 2, 2], 2)) //=> 2)



