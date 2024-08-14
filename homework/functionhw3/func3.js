function arrayMultiplyByMap(array){

    if(array.length > 5){
        return array.map(function(num) {
            return num * 100; //map used if we need to retrive a new action array and return it back.
        }); 
    } else {
    console.log("Array length is less than 5 so returning originalArray");
    return array;
  }
}

// const originalArray1 = [1,2,4,6,7,8];
// const newArray = arrayMultiplyByMap(originalArray1);

// console.log(newArray);// [ 100, 200, 400, 600, 700, 800 ]
// console.log(originalArray1);// [1,2,4,6,7,8]

//or

const originalArray2 = [1,2,4,6];
const newArray2 = arrayMultiplyByMap(originalArray2);

console.log(originalArray2);// Array length is less than 5 so returning originalArray
//[ 1, 2, 4, 6 ]
