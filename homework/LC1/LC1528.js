// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.



// Return the shuffled string.

 

// Example 1:


// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

function  restoreString(s, indices){

    let shuffledString = new Array();

    for(let i = 0; i < s.length;i++ ){

        shuffledString[indices[i]] = s[i];//the value of s[i] is put in
    }
    
    return shuffledString.join('');

};

const s ="codeleet";
const indices =[4,5,6,7,0,2,1,3];
console.log(restoreString(s,indices));