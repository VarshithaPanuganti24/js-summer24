function countWords(sentence){
    const words = sentence.split(' ');
    const wordCount = {};

    words.forEach(word => {
        if(word in wordCount){
            wordCount[word]++;
        }else {
            wordCount[word] = 1;

        }
        
    });
    return wordCount;
}
const sentence = "Hello World Welcome to Javascript to start";
console.log(countWords(sentence));

//output
//{ Hello: 1, World: 1, Welcome: 1, to: 2, Javascript: 1, start: 1 }


//another try
// function countWords(sentence) {
// 	const map = new Map();
//     const wordCount ={};
// 	const words = sentence.split("");

// 	words.forEach((word) => {

// 		if (map.has(word)) map.set(word, map.get(wordCount++) ); // increment letter count by 1
// 		else map.set(word, 1); // set a new letter for first time, init. to 1

// 		//map.set(words, (map.get(words) ) + 1);
// 	});

// 	return map.get(wordCount);
// }

// //console.log(countLetter("hello world", "l"));

// const sentence = "Hello World Welcome to Javascript to start";
// console.log(countWords(sentence));