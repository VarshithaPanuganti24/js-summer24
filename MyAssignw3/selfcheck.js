// var x=3;
// console.log(x === undefined); // true
// //var x = 3;

// (function () {
    
//   console.log(x); // undefined
//   var x = "local value";
//   console.log(x);
// })();
// console.log(x);

// let a = 5;  // Primitive value stored in stack
// let b = a;   // Copy of the value is created

// console.log(a); // 5
// console.log(b); // 5

// a= 35;
// console.log(a); // 35
// console.log(b); // 5

// b = 20;       // Changing b doesn't affect a
// console.log(a); // 35
// console.log(b); // 20

// const arrA = [10]; 
// const arrB = arrA; 

//  console.log(arrA); //[10] //
//  console.log(arrB);//[10]

// arrA[0] = 100;

//  console.log(arrA); //[100]
//  console.log(arrB);//[100]

//  arrB[0] = 200;  //
// console.log("arrA",arrA);// 200 because both a and b have sam2 momery reference.
// console.log("arrB",arrB);

let str = "Hello, World!";

// Accessing a method
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.concat("welcome"));

// Accessing a property (length)
console.log(str.length); //13
console.log(str.); //  13

let num = 42;

// Accessing a method
console.log(num.toFixed(2)); // Output: "42.00"

// Accessing a property (though numbers don’t have standard properties like strings)
console.log(num.valueOf()); // Output: 42

let bool = true;

// Accessing a method
console.log(bool.toString()); // Output: "true"

