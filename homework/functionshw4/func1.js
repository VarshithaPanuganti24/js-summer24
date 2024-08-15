function findMaxValue(arr) {
    let max = arr[0];

    arr.forEach(function(num) {
        if (num > max) {
            max = num;
        }
    });

    return max;
}

// syntax is wrong
// function findMaxValue(arr){
//     return arr.reduce(
//                (prev, curr) => {
// 			 curr > prev  {
//                 return prev = curr;
//                 }
             
// 		},arr[0]);
//  }
const numbers = [12,77,45,67,34,88,60,99,45]
console.log(findMaxValue(numbers));

//output:99