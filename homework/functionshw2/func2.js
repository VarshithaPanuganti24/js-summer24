function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(numbers) {
        sum = sum + numbers;
        
    });
    // let i = 0;
    // while (i < arr.length) {
    //     sum+= arr[i];
    //     i++;
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     sum = sum + arr[i];
    // }
    return sum;
}


let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); //15