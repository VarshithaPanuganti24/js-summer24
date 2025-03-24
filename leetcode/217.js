// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// var containsDuplicate = function(nums) {
//     //A JavaScript Set is a collection of unique values.
//     let duplicate = new Set(nums);
//     //any duplicate values
//     console.log(nums.length);
//     console.log(duplicate);

//     if(nums.length == duplicate.size){
//         return false;
//     }

//     return true;

// };

// const nums=[1,2,3,5,8];

// console.log("contains duplicate",containsDuplicate(nums));


// const containsDuplicate = (nums) => {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] === nums[j]) {
//           return true;  // Duplicate found
//         }
//       }
//     }
//     return false;  // No duplicates
//   };

//   console.log(containsDuplicate([1,2,3,1]));

var reverseOnlyLetters = function(s) {

    let arr = s.split("");
    console.log("arr",arr);

    const isChar = (c) =>/[a-zA-z]/.test(c);
    let left = 0;
    let right = arr.length -1;

    while(left < right){

         while(left < right && !isChar(arr[left])){
            left++;
            console.log("when specialcharacters are there from left this loop is executed",left,arr[left]);
         }
         while (left < right && !isChar(arr[right])){
            right--;
            console.log("when specialcharacters are there from right this loop is executed",right,arr[right]);
         }

         [arr[left],arr[right]] =[arr[right],arr[left]];
        console.log("left and right after swap",left,right,arr[left],arr[right]);

         left++;
         right--;



    }
    return arr.join("");
}
s = "a-bC-dEf-ghIj"
console.log("reverseOnlyLetters",reverseOnlyLetters(s))

// var reverseOnlyLetters = function (s) {
//     let revString = "";
//     const letters = [];
//     for (let i = 0; i < s.length; i++) {
//         if (/[a-zA-Z]/.test(s[i])) {
//             letters.push(s[i]);
//             console.log("letters", letters)
//         }
//     }

//     // Iterate through the original string and construct the result
//     let letterIndex = letters.length - 1;  // Start from the last letter
//     for (let i = 0; i < s.length; i++) {
//         if (/[a-zA-Z]/.test(s[i])) {
//             revString += letters[letterIndex];
//             letterIndex--;   // Use the next letter from the reversed list
//         } else {
//             revString += s[i];  // Add non-letter as is
//         }
//     }

//     return revString;
// };

// // ✅ Example Usage
// let s = "ab-cd";
// console.log("reverseOnlyLetters:", reverseOnlyLetters(s));  // Output: "dc-ba"

// let s2 = "a-bC-dEf-ghIj";
// console.log("reverseOnlyLetters:", reverseOnlyLetters(s2));  // Output: "j-Ih-gfE-dCba"

// let s3 = "Test1ng-Leet=code-Q!";
// console.log("reverseOnlyLetters:", reverseOnlyLetters(s3));  // Output: "Qedo1ct-eeLg=ntse-T!"