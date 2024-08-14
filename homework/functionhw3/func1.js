function checkAge(age){

    if (age >= 65) {
        return "Special Discount" ;
    }     
    else {
        return "Not allowed" ;
}
}
//console.log(checkAge(65)); //“Special discount” ;
console.log(checkAge(-1)); //Not allowed

console.log(checkAge(64)); //Not allowed
