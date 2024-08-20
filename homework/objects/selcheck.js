const user1 = {
    
    name: "Varshitha",
    email: "var@gmail.com",
    website: "www.javascript.com",
    age: 25,
    phone: {
        home: "467-878-976",
        cell: "876-987-987",
    },
    cart: ["grapes"],

// addToCart:function(newitem){
//     if(newitem ===  "" ) return false
//     if(this.cart.includes(newitem)) return false
//     this.cart.push(newitem);
//     return true ;
//},
addNewPhone(phoneType, phoneNumber){
    if((phoneType || phoneNumber) ===  " " ) return false

    if(phoneType && phoneNumber)) {

    
    this.phone.push(phoneType || phoneNumber);
    return true ;
    }
},
};
console.log(user1.addNewPhone("office","111-769-000"));