// function reverseString(str) {

//     let newString = ""; // to reserve the sting we need to create a new string and add the elements from back to front  
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello world'));


//given sumarray

function reserveArray(array) {
    let left =0;
    let right = array.length -1;
    while (left < right){
        let temp = arr[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }  
    
    return array
}
const hello  = ["h", "e","l","l","0"]
console.log(reserveArray(hello));