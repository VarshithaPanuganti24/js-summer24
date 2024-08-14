function checkType(input) {
    if (Array.isArray(input)) { 
        return "object";
    } else {
        return "It’s something else";
    }
    
}

console.log(checkType([1, 2, 3]));    


// array.isarray(input) used to check array
//javascripts objects 


