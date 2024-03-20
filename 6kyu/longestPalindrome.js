/**Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
 */

function longestPalindrome(s) {
    // Check for empty string
    if (s.length === 0) {
      return 0;
    }
    
    let maxLength = 1; // Initialize the maximum length as 1
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
      // Check for odd-length palindromes with current character as center
      let left = i;
      let right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          maxLength = currentLength;
        }
        left--;
        right++;
      }
      
      // Check for even-length palindromes with current and next characters as centers
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          maxLength = currentLength;
        }
        left--;
        right++;
      }
    }
    
    return maxLength;
  }

  console.log(longestPalindrome("a")); // Output: 1
console.log(longestPalindrome("aab")); // Output: 2
console.log(longestPalindrome("abcde")); // Output: 1
console.log(longestPalindrome("zzbaabcd")); // Output: 4
console.log(longestPalindrome("")); // Output: 0
