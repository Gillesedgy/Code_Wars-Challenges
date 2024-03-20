/** Total Time https://www.codewars.com/kata/5a4bba4e80eba8df2d00012d/train/javascript
 * 
 //? Write the function totalTime(), which accepts an array. The array contains an arbitrary number of strings, where each string represents a duration in time (hours, minutes, seconds). The function should add all the durations and return the total time, as a string, on the following format: "(num) days, (num) hours, (num) minutes, (num) seconds"

 //* Restrictions
Your function should only return days, hours, minutes and seconds if they are > 0
If the sum of all the values in the array are zero, your function should return "0" (a string)
The string values in the array will never represent negative numbers. I.e. the sum of all the values in the array will never be less than 0.
The array will always contain at least one string. There is no need to check for empty arrays.
You can assume that all strings in the array follow the following pattern: "hh:mm:ss", where h - hours; m - minutes; s - seconds
Note that hours and minutes are optional, so a more precise (but harder to read) specification is: [[hh:]mm:]ss
If a duration is less than 10 it will always be preceeded by a zero. I.e. expect to always get this format: ["01:01:01"]. You will never get this format: ["1:1:1"]
Remember that each value in the string returned by your function should be followed by a comma (unless it is the last value).
Wrong: "1 day 3 hours 5 minutes"
Correct: "1 day, 3 hours, 5 minutes"

//* Example 1
If hours and/or minutes are 0 they should be excluded from the answer.

totalTime(['60']); // --> "1 minute"
Note that the above answer is "1 minute" and not "1 minute 0 seconds"

//* Example 2
The unit name should be pluralized by adding an "s" if its value is more than 1.

totalTime(['25:01:01']); // --> "1 day, 1 hour, 1 minute, 1 second"
totalTime(['50:02:02']); // --> "2 days, 2 hours, 2 minutes, 2 seconds"
Note that "1 second" does not end with an "s", while "2 seconds" does. Same goes for days, hours and minutes.

Some final examples:
totalTime(['01:20','03:10']);    // --> '4 minutes, 30 seconds'
totalTime(['00:50','00:30']);    // --> '1 minute, 20 seconds'
totalTime(['01:20:00','40:00']); // --> '2 hours'
totalTime(['12:00:00','10:00:00','02:00:00']); // --> '1 day'
totalTime(['24:00:00','24:00:00','07']); // --> '2
 */

//? My Understanding
// have a function that takes an  array of number strings...
// Each string represents  time  in either hours, minutes seconds
// You should add all of the  time durations and return the total time  in  a specific format.. "(num) days, (num) hours, (num) minutes, (num) seconds"
// Should only return arrays

//? Given information
// the array is a string of numbers
// SHOULD return Days, Hours, Minutes, Seconds if the value is  greater than zero
// Arrays have at least one string --> no need to check for empty arrays
// Hours and Minutes are optional
//Values will never be a negative number
//* If a duration is less than 10 it will always be preceeded by a zero. (I.e. expect to always get this format: ["01:01:01"])

//? Posibble  steps to solution
// parse each string to identify hours, minutes, seconds
// Once we access each string:
// Seperate them by ():
// assign them to their respective variables
// Chnage them to numbers (b/c they are currently strings)
// Convert them to seconds
// Summ all values to get total time duration
//  Once we have sum of all durations, convert them to days, hours, and seconds.
// ToDO: have a varibale to store each value respectively
// format them according to the rules.

//! Solution

function totalTime(arr) {
  // initialize variable for day, hours, minutes, and seconds
  let day = 0;
  let totalHours = 0;
  let totalMinutes = 0;
  let totalSeconds = 0;

  // iterate through each string in input arr
  arr.forEach((time) => {
    // seperate the durations
    const durations = time.split(":").map((duration) => parseInt(duration, 10));
    // assing them to vars
    const [hrs = 0, mins = 0, secs = 0] =
      durations.length === 3
        ? durations
        : durations.length === 2
        ? [0, ...durations]
        : [0, 0, ...durations];

    // conversion
    totalSeconds += secs + mins * 60 + hrs * 3600;
  });

  const secondsInDay = 86400;
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  // Calculate days, hours, minutes, and remaining seconds from total seconds.
  day = Math.floor(totalSeconds / secondsInDay);
  totalSeconds %= secondsInDay;

  let hours = Math.floor(totalSeconds / secondsInHour);
  totalSeconds %= secondsInHour;

  let minutes = Math.floor(totalSeconds / secondsInMinute);
  totalSeconds %= secondsInMinute;

  // Construct the result string based on calculated time units.
  let result = "";
  if (day > 0) {
    result += `${day} day${day > 1 ? "s" : ""}, `;
  }
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""}, `;
  }
  if (minutes > 0) {
    result += `${minutes} minute${minutes > 1 ? "s" : ""}, `;
  }
  if (totalSeconds > 0) {
    result += `${totalSeconds} second${totalSeconds > 1 ? "s" : ""}`;
  }

  return result.endsWith(", ") ? result.slice(0, -2) : result || "0";
}

console.log("totalTime:", totalTime(["60"]));

console.log("totalTime:", totalTime(["50:02:02"])), //"2 days, 2 hours, 2 minutes, 2 seconds";
  console.log("totalTime:", totalTime(["01:20", "03:10"]));

console.log("totalTime:", totalTime(["00:50", "00:30"])), // "1 minute, 20 seconds";
  console.log("totalTime:", totalTime(["01:20:00", "40:00"])); // "2 hours";

console.log("totalTime:", totalTime(["12:00:00", "10:00:00", "02:00:00"])); //"1 day";

console.log("totalTime:", totalTime(["24:00:00", "24:00:00", "07"]));
