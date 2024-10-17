// const findWordsContaining = function(words, x){
    
// }

function findWordsContaining(words,x){
    const result_arr = [];
    const lowerCharx = x.toLowerCase();

    for (i = 0 ; i < words.length ;i++){

        if(words[i].toLowerCase().includes(lowerCharx)){
            result_arr.push(i);
        }

    }
    return result_arr

    // return words
   // .map()

}

let words = ["varsha", "arya" ,"harsha"];
let x = "A";

console.log(findWordsContaining(words,x));
