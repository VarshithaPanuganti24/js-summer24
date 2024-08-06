//compare values
//one qual sign :assignment operator

// //double equal sign: convert into same type (if diff) then compare
// console.log("7" == 7);//true
// console.log(7==7);//true
// console.log(8===7);//false


// //triple equal sign:compare type(if diff type, returns false) then comares
// console.log("7" === 7);//false
// console.log(7===7);//true
// console.log(8===7);//false

// //other primitives
// console.log(0 === false);
// console.log (0 == false);

// //compare primitives
// let a = 5;
// let b = a; //5
// let c = 5 ;

// console.log("a=== c",a === c) ; //true
// console.log("a === b",a === b ) ;//true
// console.log("b === c",b === c) ;//true
// a = 10;
// console.log("a=== c",a === c) ;//10 === 5 false
// console.log("a === b",a === b ) ; //10 === 5 false (b is copied -by-value ONCE)
// console.log("b === c",b === c) ; // 5 === 5 true

//comparing arrays (copy -by-value, but copying the reference memory address copy -by -reference value)
 const arrA = [10]; // "adb457n"
 const arrB = arrA; // "adb457n"
 const arrC = [10]; // "efg156y"
 const arrD = [10]; // "fdsfh17"

 console.log(arrA === arrB);// memory address comparing "adb457n" === "adb457n" true
 console.log(arrA === arrC); // "adb457n" === 
 console.log(arrC === arrD);

 arrA[0] = 100;
 console.log(arrA); //[100]
 console.log(arrB);//[100]
 console.log(arrC);//[10]
 console.log(arrA === arrB);// "adb457n" === "adb457n" true
