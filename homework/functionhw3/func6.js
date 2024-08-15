function checkType(input) {
    if (typeof input === 'object' || Array.isArray(input)) { 
        return "object";
    } else {
        return "It’s something else";
    }
    
}

console.log(checkType([1, 2, 3]));    
console.log(checkType("hello")); 
console.log(checkType(null)); 
console.log(checkType(123)); 

// array.isarray(input) used to check array
//javascripts objects 
//output:
// object
// It’s something else
// object
// It’s something else

