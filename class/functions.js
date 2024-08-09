//console.log("hello world");

// function greet(salutation) { //(parameter)
//     console.log(salutation);
// }
//  greet("hi"); //(arguments)
//  greet("helloworld");



 //pass-by -value vs pass-by- reference values


function startHere(num){
   num = num + 5
   console.log("the inner Loop:" + num);
}

function checkNAMES(array) {
     
    array[0] = 5;
}

let a = "k";
startHere(a);
console.log(a);

const firstNames = ["Kay","jacob"];
checkNAMES(firstNames);
console.log(firstNames);

// function addfive(num){
//     num + 5
// }

// function modifyToFive(array) {
//     //let 
//     array[0] = 5;
// }

// let a = 5;
// addfive(a);
// console.log(a);

// let arrA = [200];
// modifyToFive(arrA);
// console.log(arrA);

// let num = 5;
// addfive(a);
// console.log(a);

// let arrA = [200];
// modifyToFive(arrA);
// console.log(arrA);

function printName(name) {
    const firstLetter = name.charAt(0);

    if (firstLetter === "A") {
        console.log("Name starts with letter A");
    } else if (firstLetter === "B") {
        console.log("Name starts with letter B");
    } else if(firstLetter === "C") {
        console.log("Name starts with letter C");
    } else {
        console.log("Name doesnot exit")
    }
    console.log("func ends");
}


printName("Zeta")

function altPrintName(name) {
	const firstLetter = name.charAt(0); // name[0]

	if (firstLetter !== "A") {
		console.log("name starts with something else");
		console.log("func ends");
		return;
	}

	console.log("name starts with letter A");
	console.log("func ends");
}

// altPrintName("Zeta");

// return a value
function add(num) {
	let b = [1, 2]; // '10000'
	let c = 1;
	return num + 5;
}

// const returnedValue = add(6);
// console.log(add(6));

// call stack
function print(val) {
	console.log(val);
}
const myLetterA = "A";
const myLetterB = "B";

console.log(myLetterA);
print(myLetterB);

print(add(5));

console.log("hello" + " " + "world");
console.log("hello".concat(" world"));
let i = 0;
let val = 100;
console.log("index is: " + i + ", value is: " + val); // <----- string concatenation with "+"
console.log(`index is: ${i}, value is: ${val} `); // <------ template string literals
console.log("index is: ".concat(i, ", value is: ", val)); // .concat method
console.log("hello".includes());