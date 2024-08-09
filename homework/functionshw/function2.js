function divide(num1, num2){
    if (num2 === 0) {

        return "Division by zero not allowed .";
    } 
    return num1 / num2;
    
}
let result = divide(10,2);
console.log("The Division of two numbers is " + result);

result = divide(12,0);
console.log("The Division of two numbers is " + result);

//output
// The Division of two numbers is 5
// The Division of two numbers is Division by zero not allowed
