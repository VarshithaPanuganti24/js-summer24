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