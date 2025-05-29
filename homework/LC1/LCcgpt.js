// Remove Duplicates from Array
let numbers = [1, 2, 2, 3, 4, 4, 5];
    let uniqueSet = new setInterval(arr);

    let uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray); 

//
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [];
for(let i=0;i<numbers.length;i++){
    isDuplicate=false;
    for(j=0;j<uniqueNumbers.length;j++){
        if(numbers[i]=== uniqueNumbers[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);