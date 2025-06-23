// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".


function countSubstrings(s){

    let count = 0;
    for (let i = 0; i < s.length;i++){
        count += countPalindrome(s , i ,i);
        console.log("count at oddlength",count);

        count += countPalindrome(s, i, i + 1);
        
        console.log("count at evenlength",count);
    }

    return count;
}

function countPalindrome(s, left, right){
    let count1 = 0;

    while(left >= 0 && right < s.length && s[left] === s[right]) {
        count1++;
        left--;
        right++;
    }
    console.log("count1",count1);
    return count1;
}
//console.log(countSubstrings("abc"));     // Output: 3
 console.log(countSubstrings("aaa"));     // Output: 6
// console.log(countSubstrings("racecar")); // Output: 10