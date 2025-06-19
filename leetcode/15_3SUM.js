function threeSum(nums) {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Need a larger number
      } else {
        right--; // Need a smaller number
      }
    }
  }

  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));