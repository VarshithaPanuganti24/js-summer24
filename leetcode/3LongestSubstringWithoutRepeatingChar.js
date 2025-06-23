// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


function lengthOfLongestSubString(s){
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){

        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        console.log("Set",set);
        maxLength = Math.max(maxLength, right - left + 1);
        console.log("MaxLength",maxLength);

    }
    return maxLength;
}

let str =  "abcabcbb";
console.log(lengthOfLongestSubString(str));