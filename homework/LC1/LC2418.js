
// You are given an array of strings names, and an array heights that consists of
// distinct positive integers. Both arrays are of length n. For each index i,
// names[i] and heights[i] denote the name and height of the ith person. Return
// names sorted in descending order by the people's heights.
// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second
// Bob.
const sortPeople = function(names, heights){

    //sort 
    //function(a,b) {returns a-b}
    const arr = names.map((name,idx) => ({name:name, height: heights[idx]}));

    arr.sort((a,b) => b.height -a.height) // o(n*logn)
    //time;n+n*logn+n =2n+nlogn=dropconstant=
    //space :n+n=2n=n
    //console.log(arr)
    return arr.map(element => element.name);

};

const names = ["Mary","John","Emma"]
const heights = [180,165,170];

console.log(sortPeople(names,heights));




