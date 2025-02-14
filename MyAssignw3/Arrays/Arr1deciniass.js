// 1Delcaration of a one-dimentional array

    // 1  Array constructor
let arr = new Array(5); //creates an array with 5 empty slots

    // 2 using brackets
let arr1 = [];
let numbers = [10,20,30,50,60,80];

// 2 initialiazation

    let fruits = ["apples","banana","grape"]; // 1 assigning values at declaration

    let colors =[];  // 2 assigining values after declaration
    colors[0] = "red";
    colors[1] = "green";
    colors[2] = "orange";

    //using Array.fill()
    let arr2 = new Array(5).fill(0); // creates an array with five elements ,all set to 0 
    console.log(arr2);

//  3 Accessing elemnts
 
//using indexing 

let fruits1 = ["Apple","Banana","Mango"];
console.log(fruits[0]);
console.log(fruits[1]);

//using for  loop

let numbers1 = [11,44,55,6,7,10];
for (let i = 0;i < numbers1.length; i++){
    console.log(numbers1[i]);
}

//usinng forEach()
numbers1.forEach((num)=>console.log(num));

//using map  to transform data
let squareNumbers = numbers.map(num => num*num);
console.log(squareNumbers);

//4 updating and moditification

let arr3 =[5,10,15,20];
arr3[2] = 56;
console.log(arr3);

//5 Array method of manipulation

let fruits2  = ["Pear","Guava","Banana"];
fruits2.push("orange"); //add to the end

console.log(fruits2); //[ 'Pear', 'Guava', 'Banana', 'orange' ] 

fruits2.unshift("Grapes"); //add to beginning
console.log(fruits2); //[ 'Grapes', 'Pear', 'Guava', 'Banana', 'orange' ]

fruits2.pop();  //removes last elemennt
console.log(fruits2); // [ 'Grapes', 'Pear', 'Guava', 'Banana' ]

fruits2.shift(); //removes first element  
console.log(fruits2); // [ 'Pear', 'Guava', 'Banana' ]

//finding element 
console.log(fruits2.indexOf("Banana")); //2
console.log(fruits2.includes("Pear")); //true

