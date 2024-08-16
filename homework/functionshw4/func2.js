// function isPalindrome(str){
    
//     return str === str.split(' ').reverse().join('');

// }

// const originalstring = "Kayak";

// console.log(isPalindrome(originalstring);

//palindrome words :Kayak,MoM,Madam,Noon

function isPalindrome(str){
    //space: 
    //time: n+ n +

    let left =0;
    let right = str.length -1;
        while (left < right){
          if (str[left] !== str[right]) return false;
            left++;
            right--;
        }  
     return true;

}

const originalstring = "kayak";

console.log(isPalindrome(originalstring));