function productExceptSelf(nums) {
  
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j]; // Multiply all elements except nums[i]
        console.log("product",product,nums[j])
      }
    }
    answer[i] = product;
    console.log("answer",answer[i]);
  }

  return answer;
}


console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// T:O(n)+O (n)
// s:O(n) 