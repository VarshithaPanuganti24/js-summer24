//Create an array
//const arrA =[];
 //console.log(arrA);

//update an array
// arrA[1] = 999;
// arrA[7] = 561;
// arrA.push(1000);
// arrA.push(1001,1002, 1003);
// arrA.push([1005,1006,1007]);
// //arrA[8] = {};

// console.log("using loop");
// const fruits =["gr","ap","ba"];

// function loopPrint(array){

//     for (let i=0 ;i < array.length;i++){
//     const element = array[i];
//     console.log('at index ${i}, the value is ${element}');
//      //console.log("the index is " + i + " element of array" + arrA[i]);
//     }
// }
// loopPrint(arrA);
// loopPrint(fruits);
//sum array and print the summ before function ennd
const nums = [1,2,3,4,5,6,7,8,9];

function sumList(array){
    let sum = 0;
    for (let i=0; i < array.length; i++){
        const element = array[i];
        sum = sum + element; 
    }
    console.log("sum of array elements: " + sum);
}
sumList(nums);
sumList([1,2,3,4,5,6,7,8,9,10])

//console.log(arrA);
// console.log(arrA[0]);
// console.log(arrA.length);




//build array,start a inndex 1, add new item 7 ,try pushing some items to the array

// const checkA =[];
// //console.log(checkA);

// checkA[1]= 76;
// checkA[7]=678;
// //console.log(checkA);
// checkA[4]= 432;
// checkA.push(444);
// checkA.push([2,7,899]);
// checkA[0]=88;
// checkA[8] =7654;
// //console.log(checkA);
// //console.log(checkA[5]);
// console.log(checkA);

//const itemRemoved =arrA.pop90;\
// arrA.unshift(8);
// console.log(arrA);

