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
//! Solution

// function totalTime(arr) {
//   // Create and initialize varibales for days, hours, and minutes...
//   let day = 0;
//   let totalHours = 0;
//   let totalMinutes = 0;
//   let totalSecs = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(":")) {
//       // split each value by the ":" and set them to the proper var respectively
//       let [hrs, mins, secs] = arr[i].split(":"); // ['01:20:00','40:00'] => d,h,m 01 20 00 , d,h,m 40 00 undefined

//       // Since the arr val are strings, convert to numbers
//       totalHours += +hrs;
//       totalMinutes += +mins;
//       totalSecs += +secs;
//     } else {
//       totalSecs += +arr[i];
//     }
//   }
//   // Initiazlize variables to there values in seconds... not really necessary but it helps me
//   let secondsDay = 86400;
//   let secondsHour = 3600;
//   let secondsMin = 60;
//   //   // Convert hours to seconds
//   //   totalSecs += totalHours * secondsHour;

//   //   // Convert minutes to seconds
//   //   totalSecs += totalMinutes * secondsMin;
//   //   // Sum up all values to then be calculated in seconds
//   //   let totalTimeInSeconds =
//   //     totalHours * secondsHour + totalMinutes * secondsMin + totalSecs;
//   //   //* console.log("Total time in seconds", totalTimeInSecond)
//   // Convert hours to seconds
//   totalSecs += totalHours * secondsHour;

//   // Convert minutes to seconds
//   totalSecs += totalMinutes * secondsMin;

//   // Let the MATH-ING begin => return the the result by dividing by total seconds and rounding
//   day = Math.floor(totalSecs / secondsDay);
//   totalSecs %= secondsDay;
//   //* console.log("DAY!", day);

//   let hours = Math.floor(totalSecs / secondsHour);
//   totalSecs %= secondsHour;
//   //*   console.log(hours);

//   let minutes = Math.floor(totalSecs / secondsMin);
//   totalSecs %= secondsMin;
//   //* console.log(minutes);

//   let result = "";
//   // Fixing the result string based on the individual (days, hours, minutes)
//   if (day > 0) {
//     result += day + " day" + (day > 1 ? "s, " : ", ");
//   }

//   if (hours > 0) {
//     result += hours + " hour" + (hours > 1 ? "s, " : ", ");
//   }

//   if (minutes > 0) {
//     result += minutes + " minute" + (minutes > 1 ? "s, " : ", ");
//   }

//   // Add the remaining seconds if there are any or if the result is empty
//   if (totalSecs > 0 || result === "") {
//     result += totalSecs + " second" + (totalSecs !== 1 ? "s" : "");
//   }
//   //   if ((day === 0 && hours === 0 && minutes === 0) || totalTimeInSeconds > 0) {
//   //     result +=
//   //       totalTimeInSeconds + " second" + (totalTimeInSeconds !== 1 ? "s" : "");

//   return result;
// }
function totalTime(arr) {
    let day = 0;
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(":")) {
          let [hrs, mins, secs] = arr[i].split(":");
          // Check length of hours, minutes, and seconds components
          if (hrs.length === 1) {
            hrs = "0" + hrs;
          }
          if (mins.length === 1) {
            mins = "0" + mins;
          }
          if (secs && secs.length === 1) {
            secs = "0" + secs;
          }
          totalHours += +hrs;
          totalMinutes += +mins;
          totalSeconds += secs ? +secs : 0;
        } else {
          totalSeconds += +arr[i];
        }
      }
  
    let secondsInDay = 86400;
    let secondsInHour = 3600;
    let secondsInMinute = 60;
  
    totalSeconds += totalHours * secondsInHour;
    totalSeconds += totalMinutes * secondsInMinute;
  
    day = Math.floor(totalSeconds / secondsInDay);
    totalSeconds %= secondsInDay;
  
    let hours = Math.floor(totalSeconds / secondsInHour);
    totalSeconds %= secondsInHour;
  
    let minutes = Math.floor(totalSeconds / secondsInMinute);
    totalSeconds %= secondsInMinute;
  
    let result = "";
   
    if (day > 0) {
      result += day + " day" + (day > 1 ? "s, " : ", ");
    }
  
    if (hours > 0) {
      result += hours + " hour" + (hours > 1 ? "s, " : ", ");
    }
  
    if (minutes > 0) {
      result += minutes + " minute" + (minutes > 1 ? "s, " : ", ");
    }
  
    if (totalSeconds > 0 || result === "") {
      result += totalSeconds + " second" + (totalSeconds !== 1 ? "s" : "");
    }
  
    return result;
  }


console.log("totalTime:", totalTime(["60"]));

console.log("totalTime:", totalTime(["50:02:02"])), //"2 days, 2 hours, 2 minutes, 2 seconds";
  console.log("totalTime:", totalTime(["01:20", "03:10"]));

console.log("totalTime:", totalTime(["00:50", "00:30"])), // "1 minute, 20 seconds";
  console.log("totalTime:", totalTime(["01:20:00", "40:00"])); // "2 hours";

console.log("totalTime:", totalTime(["12:00:00", "10:00:00", "02:00:00"])); //"1 day";

console.log("totalTime:", totalTime(["24:00:00", "24:00:00", "07"]));
