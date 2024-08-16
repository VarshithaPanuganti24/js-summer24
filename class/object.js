const student1 = {
    firstName: "Varsha",
    email:"var@gamail.com",
    phone:{
        home: "467-878-976",
        office: "876-987-987",
    },
    age: 25,
    isActive:true,
    address:{
        mailingadd:"123 main street",
        shippingadd:"321 left street",

    },
    enrollment:["cs101","math1a", "chem2a"],
    gradYear:null,
    //methods
    getName:function(){
        return this.getName;
    },
    //
    getPhone(phoneType){
        return this.phone[phoneType];
    },
    addCourse:function(newcourse){
        if(newcourse ===  '' ) return false
        if(this.enrollment.includes(newcourse)) return false
        return this.enrollment.push(newcourse);
        return true 
    },
    removeCourse (courseToRemove){
        const index = this.enrollment.indexOf(courseToRemove)
        if (index > -1){
            this.enrollment.splice(index,1)
            return true
            
        }
        return false;
    },
    
};

student1.getName();
student1.getPhone([home]);
// student1.addCourse("lang04");
// student1.removeCourse("math1a");
// console.log(student1);

//console.log(([3]));
// console.log(student1.email);
// console.log(student1["email"]);

// console.log(student1.address.shippingadd);
// console.log(student1.enrollment[2]);
// console.log(student1["enrollment"][2]);

//update and can be done with > notation
student1.address.shippingadd ="4321 left street";
student1.enrollment[2] = "bio101";
//add
student1.gradYear = 2025 ;
student1.gpa = 4.0;
//console.log(student1);
//freeze entire function or object
//
//delete /remove
delete student1.gradYear;
//console.log(student1);

// student1.getEmail = function () {
//     returnthis.email;
// };

// write method to return mailing address
 student1.getmailingadds = function (){
    //console.log("this from student object", this);
    return this.address.mailingadd;
 };
 student1.address.getmailingadds = function (){
    ////console.log("this from student object", this);
    return this.mailingadd;
 };
 //
 // console.log("address: ", student1.getMailingAddress());
// student1.address.getMailingAddress();

// try "this" with arrow function
student1.getShippingAddress = () => {
	//console.log("this from arrow function: ", this);
	return this.address.shippingAddress;
};

//console.log(student1.getShippingAddress());

// globalThis and arrow functions
//Donot use "this in arrow functions ,if your code uses "this" use function declarion

student1.addCourse