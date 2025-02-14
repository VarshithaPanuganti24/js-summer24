//Find the largest/smallest element in an array.

let numbers2 = [10,30,50,38,89];

let largest = numbers2[0];
let smallest = numbers2[0];

for(let i = 1; i <numbers2.length;i++ ){
    if(numbers2[i] > largest){
        largest = numbers2[i];
    }
    if(numbers2[i] < smallest ){
        smallest = numbers2[i];
    }
}
console.log("Largest:",largest);
console.log("smallest",smallest);


//complexity