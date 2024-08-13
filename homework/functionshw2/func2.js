function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(numbers) {
        sum = sum + numbers;
        
    });
    // for (let i = 0; i < arr.length; i++) {
    //     sum = sum + arr[i];
    // }
    return sum;
}


let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); //15