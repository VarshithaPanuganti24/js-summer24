// main.js
// camelCasing- camel casing (Main casing will be used in Javascript)
// kebob-casing- kebob casing
// snake_casing

//Compiler
// JS (interpreted language,interpreter program) -> interpreter executes the js code line by line
// garbage collection: for memory management

//  java/C# compiled /interpreted -> bytecode -> ported to different computer (JVM)
// -> executes intermediate bytecode or compiles into machie code -> runs it
// garbage collection

// C/C++ compiled-> machinne language -> cpu executes
// No garbage collection-manual memory management
// low  energy cost/highly efficient / fast runtime / lower memory

// ML Framework runs on python(Tensor flow,python,scilearn,Numpy,Pandas)

//Intro to Java scrit
//JS: Dynamically typed language
// java ,Typescript (superset of JS),C#,Golang,C/C++: Statically typed language

// var myFirstVariable = "Hello world" 
// console.log(typeof myFirstVariable);
// console.log(myFirstVariable);
 //A string is assigned to a variable
//single or double quotes work for string

//datatypes are data formats
//text -> string
//number -> number
//true/false values -> boolean
//an unassigned /unndeclared variable -> undefined
//explicit declartion of absence of value -> null

// myFirstVariable = 5; //reassign to a number (the 'var' reserved keyword is not used)
// console.log(typeof myFirstVariable);
// console.log(myFirstVariable);

// JS primitive datatype:string, number, boolean, undefined, null
// var myName ='Varsha'; //string
// var age =10; //number
// var active=true; //boolean(true.false)
// var membership; //declare variable ,but no assign value
// var dataCreated = null; // null is also a primitive type used as falsy/zero value for all data types,not just "objects" as in the case in other language.
// var undef = undefined;

// console.log(typeof active);
// console.log(typeof membership);
// console.log(typeof dataCreated);
// console.log(typeof undef);

//
let x = 6; // 'let' allows ffor re-assignment -ES6
const y =15 // 'const' doesnot allow re-assignment
console.log(x);
console.log(y);
x = "Varsha";
// y= "Hello";
console.log(x);
// console.log(y);
let a; //declaring without assigninng value.