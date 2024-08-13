function countVowels(str) {

    // Define a string containing all vowels
    const vowels = 'aAeEiIoOuU';

    // Initialize a counter for vowels
    let vowelCount = 0;

    // Iterate through the string and check if each character is a vowel
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}


let inputString = "hello world";
console.log(countVowels(inputString));