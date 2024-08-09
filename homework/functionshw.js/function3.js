function convertFunc(fahrenheit) {
    
    let celsius = (fahrenheit - 32) * 5/9 ;
    return celsius;
}


let celsiusValue = convertFunc(68); // we can use same name as arguments or different
console.log("The celsius value of fahrenheit value is " + celsiusValue);

//output

// The celsius value of fahrenheit is 20