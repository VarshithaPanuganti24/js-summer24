function longestWord(sen){
    const words = sen.split(' ');
    return words.reduce((longword,currword) =>{
        if(currword.length > longword.length) return currword;
         return longword;
    },'');

}

const sentence = " We are having the Javascript class";
console.log(longestWord(sentence));

//javascript
