// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

function characterReplacement(s,k){
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    let charCount = new Array(26).fill(0);
    console.log("charCount",charCount);

    for (let right = 0; right < s.length; right++){

        let index = s.charCodeAt(right) - 65;
        console.log("index",index);
        charCount[index]++;
    

    maxFreq = Math.max(maxFreq, charCount[index]);
    console.log("MaxFreq",maxFreq,charCount[index]);


    let windowSize = right - left + 1;
    
    if (windowSize - maxFreq > k) {
        let leftIndex = s.charCodeAt(left) - 65;
        charCount[leftIndex]--;
        left++;
    }

    maxLength = Math.max(maxLength, right -left + 1);
    }
    return maxLength;

}
console.log(characterReplacement( "AABABBA",  1));