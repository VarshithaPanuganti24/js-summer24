// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false
//Anagram: if the strings are anangrams,then theirbcharacters will be the same just rearranged.
//approach1 :so we need to sort the strings to find if there are same frequency of char and 

function isAnagram(s,t){
    if(s.length !== t.length) return false;
    s=s.split('').sort().join('');
    
    console.log("s",s);
    t=t.split('').sort().join('');
    console.log("t",t);

    return s === t;

}
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s,t));

//output:true
//time complexity:
// split(''):O(n)
// sort(''):O(nlog n)
// join(''):O(n)
// === comparision:O(n)
// total time complexity: for both string:
// 2 * (O(n) + O(n log n) + O(n)) + O(n) = O(n log n)
// space:
// split('') creates an array of size n → O(n)
// sort() operates in-place but some implementation may use O(n) extra space
// join('') creates a new string O(n)
// Each string transformation (split → sort → join) creates temporary arrays and strings, not modifying the originals.
// O(n) for each string, i.e., O(n) overall.


// approach 2: Hash Map  or freq array
// Hash map: key and value first we check if the is there and then add valuess to it 
// eg: s= "abaccdeeb" so from index 0-n itakes  O(n)
// {
//     a:1+1
//     b:1+1
//     c:1+1
//     d:1
//     e:1+1
// }
// to check a string that has the same key or not we take O(1) so total is O(n)
// the string are only lowercase we have total 26 characters for hash map which is not more than O(26) as 26 is constant ~O(1)

// Frequency array: takes the an array and from char a-z it adds on the frequencies
  
//    [2,2,2,1,2 ]
//     a,b,c,d,e   so if we compare both string frequencies we know if they are isAnagram

function isAnagram(s1, t1) {
    if (s1.length !== t1.length) return false;
  
    const count = {};
  
    for (let char of s1) {
      if(count[char]){
        count[char] += 1
      }else {
        count[char] = 1; 
      }
       //O(m)
    }
  
    for (let char of t1) {
        if(count[char]){
        count[char] -= 1
      }else {
        return false;
      } //O(n)
    }
    for (let key in count) {
        if (count[key] !== 0) { 
          return false;   
        }
      }
  
    return true;
  }

  const s1 = "anagram";
  const t1 = "nagaram";
  console.log(isAnagram(s1,t1));


//   time complexity:O(m) +O(n) + O(26) -> O(m+n+26)-> O(m+n)
//   space:O(26)~O(1) as 26 char may be present




