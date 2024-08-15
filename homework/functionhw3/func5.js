const givenArray = [154, 657, 564, 561, 154, 678, 100, 154];

function filterForOcurance(array,target) {

    const count = array.filter((element) => element === target); 
 
    return count.length;  
}

console.log(filterForOcurance(givenArray,154));
//output: 3


//or
// function countOccurrences(arr, target) {
//     return arr.reduce((count, current) {
//         if (current === target) return count + 1;
//         } else {
//             return count;
//         }0;
//      // Start with a count of 0
// }


// const inputArray = [154, 657, 564, 561, 154, 678, 100, 154];
// const result = filterForOcurance(inputArray, 154);

// console.log(result);
//or
//const givenArray = [154, 657, 564, 561, 154, 678, 100, 154];
// function countOccurrences(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 154) {
//             count++;
//         }
//     }
    
//     return count;
// }
// console.log(countOccurrences(givenArray));

//3


