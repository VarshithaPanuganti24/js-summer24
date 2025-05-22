// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

function groupAnagrams(strs){
    const map = new Map();

    for (const word of strs){

        const count = new Array(26).fill(0);

       for (let i = 0; i < word.length; i++) {
            const char = word[i];
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }

        const key = count.join("#");

        if (!map.has(key)){
            map.set(key,[]);

        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
}
strs = ["eat","tea","tan","ate","nat","bat"];
console.log("GroupAnangrams",groupAnagrams(strs));

//char.charCodeAt(0) gives the ASCII code of the character ('a' = 97).

// 'a'.charCodeAt(0) is used to shift 'a' to index 0, 'b' to 1, ..., 'z' to 25.

// So, for example:
// 'c'.charCodeAt(0) - 'a'.charCodeAt(0) = 99 - 97 = 2 → store at index 2