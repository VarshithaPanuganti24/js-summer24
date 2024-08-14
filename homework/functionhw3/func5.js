const givenArray = [154, 657, 564, 561, 154, 678, 100, 154];

function filterForOcurance(target,array) {
    const count = array.filter((element) {
     return element === target; 
    //count++ 
    }); 
    return count;  
}



console.log(filterForOcurance(154, givenArray));

//or
//const givenArray = [154, 657, 564, 561, 154, 678, 100, 154];
function countOccurrences(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 154) {
            count++;
        }
    }
    
    return count;
}
console.log(countOccurrences(givenArray));

//3


