// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

function isVald(s){
    const stack = [];
    const matches = {
        ')': '(',
        '}': '{',
        ']': '[' 
    };
for (let char of s){
    if(char === '(' || char === "{" || char === "[") {
        stack.push(char);
        
    }else{
        if (stack.pop() !== matches[char]){
            return false;
        }
    }

}
return stack.length === 0;

}
//let s= "()";
let s = "()[]{}"
console.log(isVald(s));
