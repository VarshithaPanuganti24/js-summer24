function longestWord(sen){
    const words = sen.split(' ');
    return words.reduce((longword,currword) =>{
        return currword.length > longword.length 
         currword = longword;
    },'');

}

const sentence = " We are having the Javascript class";
console.log(longestWord(sentence));


