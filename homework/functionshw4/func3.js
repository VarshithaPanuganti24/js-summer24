function countCharacters(str, char) {
    let count = 0;
    //spilt() method changes the string to chars so ifstead string .foreach we use str.spilt()
    str.split('').forEach(function(element) {
        if (element === char) {
            count++;
        }
    });

    return count;
}


console.log(countCharacters("Hai Varshitha ", "a")); 



output: 3