const student1 = {
    firstName: "Varsha",
    email:"var@gamail.com",
    phone:"467-878-976",
    age:25,
    isActive:true,
    address:{
        mailingadd:"123 main street",
        shippingadd:"321 left street",

    },
    enrollment:["cs101","math1a", "chem2a"],
    gradYear:null,
};

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
    console.log("this from student object", this);
    return this.address.mailingadd;
 };
 console.log(student1.getmailingadds());