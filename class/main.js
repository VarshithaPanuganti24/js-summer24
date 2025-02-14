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

//Intro to Java script
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
// let x = 6; // 'let' allows    for re-assignment -ES6
// const y =15 // 'const' doesnot allow re-assignment
// console.log(x);
// console.log(y);
// x = "Varsha";
// //y = "Hello";  //TypeError: Assignment to constant variable.
// console.log(x);
// console.log(y);
// let a; //declaring without assigninng value.
// console.log(a); // let also takes undefined if not assigned a value
// //const b; // declaring without assigning value

//re-declaring (using keyword var , let, connst again) vs reassignment


// 08/01/2024
// var	Declares a variable
// let	Declares a block variable
// const	Declares a block constant
// if	Marks a block of statements to be executed on a condition
// switch	Marks a block of statements to be executed in different cases
// for	Marks a block of statements to be executed in a loop
// function	Declares a function
// return	Exits a function
// try	Implements error handling to a block of statements

// Function-scoped: A var variable is scoped to the function in which it is declared. 
//If it is declared outside of a function, it is globally scoped.

// Scope: var is function-scoped; let is block-scoped.
// Hoisting: var variables are hoisted and initialized with undefined; let variables are hoisted but not initialized.
// Re-declaration: var allows re-declaration; let does not allow re-declaration within the same scope.
// Global Object: var declares global variables as properties of the global object; let does not.
// In modern JavaScript development, it is generally recommended to use let (or const for constants) instead of var to avoid the pitfalls associated with var.

// VAR IS FUNCTIONSCOPE LET AND CONST IS BLOCK SCOPE

// function testVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10
// }
// testVar();

// Block-scoped: A let variable is scoped to the block in which it is declared (a block is anything within {} braces).
function testLet() {
    if (true) {
        let y = 20;
        console.log(y);
    }
    //console.log(y); // ReferenceError: y is not defined AS LET IS A BLOCK SCOPE NOT FUNCTION SCOPE
}
testLet();

//lecture