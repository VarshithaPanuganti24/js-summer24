function calculateFactorial(n) {
    if (n < 0)  return  -1 //"Factorial is not defined for negative numbers";
    
    if (n === 0 || n === 1)  return 1;
    let factorial = 1;
    for (let i = n; i > 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}



//let factnum = 0 ; //  output : 1
//let factnum = 1 ; //  output : 1
//let factnum = -1; // output : Factorial is not defined for negative numbers
calculateFactorial(5);


