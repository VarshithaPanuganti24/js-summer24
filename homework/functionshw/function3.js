// function convertFunc(fahrenheit) {
    
//     let celsius = (fahrenheit - 32) * 5/9 ;
//     return celsius;
// }


// let celsiusValue = convertFunc(68); // we can use same name as arguments or different
// console.log("The celsius value of fahrenheit value is " + celsiusValue);

// //output

// // The celsius value of fahrenheit is 20
//given an array of fahrenheit 
const  fahrs = [0,20,40,60,80,100,120,140];
const celsius = fahrs.map(function (fahr){
    return ((fahr - 32) * 5 )/9 ;

});
//console.log("celcius ", celsius);
//call .map() with ananmyous arraow function

const cel2 = fahrs.map((fahr) => {  ((fahr - 32) * 5 )/9 ;})
console.log =(cel2);

