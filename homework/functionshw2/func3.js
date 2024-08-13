function reverseString(str) {

    let newString = ""; // to reserve the sting we need to create a new string and add the elements from back to front  
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello world'));


