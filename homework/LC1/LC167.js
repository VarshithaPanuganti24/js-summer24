const twoSum = function (numbers, target) {

    for (let i = 0, j = numbers.length - 1; i < j;) {
      const sum = numbers[i] + numbers[j];
  
      if (sum === target) {
        return [i, j]; 
        
      } else if (sum < target) {
        i++; // Move the left pointer right
      } else {
        j--; // Move the right pointer left
      }
    }
    return []; // Return an empty array if no solution is found
  };
  
  console.log(twoSum([2, 7,11,15 ], 9));

  // output :[0,1]