function countVowels(str) {
    const vowels = 'aAeEiIoOuU';
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount = vowelCount +1;
        }
    }

    return vowelCount;
}


let inputString = "hello world";
console.log(countVowels(inputString));