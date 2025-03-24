// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

var maxSubArray = function(nums) {

    let maxSum = 0
    for(let i = 0; i < nums.length;i ++){
        let currentSum =0

        for(let j = i;j < nums.length; j++){
            
        
            currentSum = currentSum + nums[j];
            console.log("currentsum",currentSum,i,j);
            console.log("currentsum",currentSum,nums[i],nums[j]);
            
            maxSum = Math.max(maxSum, currentSum)
            console.log("maxsum",maxSum)

        }
    }
    return maxSum
    

};
const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums))

// const maxSubArray = (nums) => {
//     let maxSum = nums[0];
//     let currentSum = nums[0];

//     // To track the subarray with the largest sum
//     let start = 0, end = 0, tempStart = 0;

//     for (let i = 1; i < nums.length; i++) {
//         if (currentSum + nums[i] < nums[i]) {
//             currentSum = nums[i];
//             console.log("currentsum",currentSum,"nums[i]",nums[i])
//             tempStart = i; // Potential new start of max subarray
//             console.log("start",tempStart)
//         } else {
//             currentSum += nums[i];
//             console.log("currentsum if else is worked",currentSum);
//         }

//         if (currentSum > maxSum) {
//             maxSum = currentSum;
            
//             start = tempStart;
//             end = i;
//             console.log("if block", maxSum,currentSum,start,end);
//         }
//     }

//     const maxSubArray = nums.slice(start, end + 1);
//     console.log(`Max Sum: ${maxSum}`);
//     console.log(`Max Subarray: [${maxSubArray.join(', ')}]`);
    
//     return maxSum;
// };

// // Example usage
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// maxSubArray(nums);





