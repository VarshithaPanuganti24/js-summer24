function divisibleBy55(num){
    return  num % 55 === 0

}
//divisibleBy55(100);
console.log(divisibleBy55(100)); //false
//or
let number1 = 110;
let number2 = 127;

console.log(divisibleBy55(number1)); //true
console.log(divisibleBy55(number2)); //false