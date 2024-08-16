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

    getName:function(){
        return this.name;
    },

    getPhone(phoneType) {
        return this.phone[phoneType];
    },
    getemail(){
        return this.email;
    },

    addToCart:function(newitem){
        if(newitem ===  "" ) return false
        if(this.cart.includes(newitem)) return false
        this.cart.push(newitem);
        return true ;
    },
    removeFromCart(itemToRemove) {
		const index = this.cart.indexOf(itemToRemove);
		if (index > -1) {
			this.cart.splice(index, 1);
			return true;
		}
		return false;
	},
    addNewPhone(phoneType, phoneNumber){
        if((phoneType || phoneNumber) ===  " " ) return false

        if((phoneType && phoneNumber)){
            this.phone[phoneType] = phoneNumber;
            return true;
        }

    },
    updateNewPhone(phoneType, newPhoneNumber){
        if((phoneType || newPhoneNumber) ===  " " ) return false;

        if(this.phone[phoneType]){
            this.phone[phoneType] = newPhoneNumber;
            return true;
        }
        
    },

 };

   
    console.log("Get the user name:",user1.getName());

    console.log("Get the user phone:",user1.getPhone("home"));

    console.log("get user gmail:",user1.getemail());

    console.log("Items in cart:",user1.cart);
    console.log("Add items to cart:",user1.addToCart("banana"));
    console.log("Items in cart after adding :",user1.cart);

    console.log("Remove items from cart:",user1.removeFromCart("grapes"));
    console.log(user1.cart);

    console.log(user1.removeFromCart("berries"));
    console.log(user1.cart);

    console.log("User phone types:",user1.phone);
    console.log("Adding new phonetype and phonemumber:",user1.addNewPhone("office","568-987-987"));
    console.log(user1.phone);
    console.log(user1.addNewPhone(" ","568-987-987"));

    console.log(user1.phone);
    console.log("After updating newphonenumber to exiting phone type:",user1.updateNewPhone("office","234-567-897"));
    console.log(user1.phone);

    console.log(user1.updateNewPhone(" ","111-555-999"));
    console.log("After updated  phonetype : ",user1.phone);


   //output
//    Get the user name: Varshitha
//    Get the user phone: 467-878-976
//    get user gmail: var@gmail.com
//    Items in cart: [ 'grapes' ]
//    Add items to cart: true
//    Items in cart after adding : [ 'grapes', 'banana' ]
//    Remove items from cart: true
//    [ 'banana' ]
//    false
//    [ 'banana' ]
//    User phone types: { home: '467-878-976', cell: '876-987-987' }
//    Adding new phonetype and phonemumber: true
//    { home: '467-878-976', cell: '876-987-987', office: '568-987-987' }
//    false
//    { home: '467-878-976', cell: '876-987-987', office: '568-987-987' }
//    After updating newphonenumber to exiting phone type: true
//    { home: '467-878-976', cell: '876-987-987', office: '234-567-897' }
//    false
//    After updated  phonetype :  { home: '467-878-976', cell: '876-987-987', office: '234-567-897' }