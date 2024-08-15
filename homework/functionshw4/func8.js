function reserveArray(array) {
    let left =0;
    let right = array.length -1;
    while (left < right){
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }  
    
    return array
}
const hello1  = [1,2,3,4,5];
const str = "Varsha"
const hello2 = str.split('');


console.log(reserveArray(hello1));
console.log(reserveArray(hello2));

// output:
// [ 5, 4, 3, 2, 1 ]
// [ 'a', 'h', 's', 'r', 'a', 'V' ]