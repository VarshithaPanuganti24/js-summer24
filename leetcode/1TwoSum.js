// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//approch 1: checking all possible pairs
// function twoSum(arr, target) {
//     let n = arr.length;

    
//     for (let i = 0; i < n; i++) {
    
//         for (let j = i + 1; j < n; j++) {
        
//             if (arr[i] + arr[j] === target) {
//                 console.log(i,j);
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Driver Code
// let arr = [0, -1, 2, -3, 1];
// let target = -2;
// console.log(twoSum(arr,target));

// time: nested loop O(n*n) O(nsquare)
// space: O(1) as we are not using any additional datastrucyures lke array,objects or maps that grow size ,using only i,j for loops


// approach 2  sorting and two point approach

// function twoSum1(arr, target) {
//  arr.sort()
//  console.log("arr",arr);

//     for (let i = 0, j = arr.length - 1; i < j;) {
//       const sum = arr[i] + arr[j];
//        console.log("sum values",i,j);
  
//       if (sum === target1) {
//         return [i, j]; 
        
//       } else if (sum < target1) {
//         i++; // Move the left pointer right
//       } else {
//         j--; // Move the right pointer left
//       }
//     }
//     return []; // Return an empty array if no solution is found
//   };
// let arr1=[3,2,4];
// let target1 = 6
  
  //console.log(twoSum1(arr1,target1));
//timeComplexity : O(n*log(n)) gor sorting
//space:O(1)

// this approach is is best for sorted array 

//Approach 3: hash map

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log("complement",complement);

    if (map.has(complement)) {
      console.log("Map",map);
      return [map.get(complement), i];
      
    }

    map.set(nums[i], i);
    //console.log("Map",map);
  }
}
let nums = [2,7,11,15];
let  target = 17
console.log(twoSum(nums,target));
// let nums1 = [3,2,4];
// let  target1 = 6

//console.log(twoSum(nums1,target1));
// using hashset the values are mapped with conditions like if it has a compliement it check in the array whether the same value exist in map already
//so the index vaue and map value equals the  target
//arr[]=[2,7,11,15] target = 17
//compliment =target - arr[i]    for every arr[i] if the compliment has values it check if map has alrady that value else it set to map
// for iteration =1 nums[i]=2
//compliment=17-2=15
// Console log: complement 15
// map.has(15) → false, because map is still empty.
// So we do: map.set(2, 0)
// Now: map = { 2 => 0 }
//for iteration =3
//nums[i] = 11
// complement = 17 - 11 = 6
// Console log: complement 6

// map.has(6) → false

// Set: map.set(11, 2)

// Now: map = { 2 => 0, 7 => 1, 11 => 2 }

//for iteration i=3
// nums[i] = 15
// complement = 17 - 15 = 2
// Console log: complement 2

// map.has(2) → ✅ true

// So we return: [map.get(2), 3] → [0, 3]

// Console log: Map Map(3) { 2 => 0, 7 => 1, 11 => 2 }
//time complexity:O(n) as we need to process each number once
//space :all n items are stored in map in least case O(n)
