function maxSum(arr, k) {
  let max = 0;
  let windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    console.log("i",i);
    windowSum += arr[i];
    console.log("windowsum",windowSum)
    
  }
  max = windowSum;
  console.log("max",max);

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; // remove left, add right
    console.log("ws",windowSum);
    max = Math.max(max, windowSum);
  }

  return max;
}

console.log(maxSum([1, 2, 3, 4, 5], 3));