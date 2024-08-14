function arrayMultiplyByMapByEvenOrOdd(array){

    return array.map(function(num) {
            if (num % 2 === 0 ) return num * 100; //map used if we need to retrive a new action array and return it back.
            else console.log("Array number is odd  so returning originalArray element",num);
            return num ;
        }); 
} 
  

const originalArray1 = [1,2,4,6,7,8];
const newArray = arrayMultiplyByMapByEvenOrOdd(originalArray1);

console.log(newArray);// [ 1, 200, 400, 600, 7, 800 ]
console.log(originalArray1);// [1,2,4,6,7,8]

// output:
// Array number is odd  so returning originalArray element 1
// Array number is odd  so returning originalArray element 7
// [ 1, 200, 400, 600, 7, 800 ]
// [ 1, 2, 4, 6, 7, 8 ]