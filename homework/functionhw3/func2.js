function arrayMultiplyByMap(array){

    return array.map(function(num) {
        return num * 100; //map used if we need to retrive a new action array and return it back.
    });

}
const arr = [1,2,4,6,7];
const newArray = arrayMultiplyByMap(arr);

console.log(arr);// [1,2,4,6,7]
console.log(newArray);// [ 100, 200, 400, 600, 700 ]

// for each doent return new array. 

// function arrayMultiplyForEach(array){
//     return array.forEach(element => {
//         return element * 100;
//     });

// }
// const arr = [1,2,4,6,7];
// const newArray = arrayMultiplyForEach(arr);
// console.log(arr);// [1,2,4,6,7]
// console.log(newArray);//undefined

