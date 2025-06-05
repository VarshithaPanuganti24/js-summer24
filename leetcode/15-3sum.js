// function threeSum(nums){
//     const result = new Set();

//     for(i = 0;i < nums.length - 2 ;i++){
//         for(j = i + 1;j <nums.length -1 ;j++){
//             for(k = j + 1;k < nums.length; k++){
//                 if (nums[i] + nums[j] + nums[k] === 0){
//                     const triplet = [nums[i],nums[j],nums[k]].sort((a,b) => a - b);
//                     console.log("triplet",triplet);
//                     result.add(triplet.toString());
//                 }
//             }

//         }
//     }
//     return Array.from(result).map(str => str.split(',').map(Number));
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); 

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort first
  console.log("nums",nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        console.log("result",result);
        // Skip duplicates for left and right
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 

