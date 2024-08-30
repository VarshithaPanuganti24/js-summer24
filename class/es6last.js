const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	address: {
		// 10000
		mailingAddress: "123 Wall St.",
		shippingAddress: "321 Main St.",
	},
	courses: ["cs101", "math8"], // 10004
};
// array ,object destructuring

const shippingAddress = "444 right street";
const courses = ["biology","science"];
const { firstName:userfirstname,
        address:{mailingAddress: usermailingaddress,
            shippingAddress : usershippingaddress},
            //courses:[class1, class2],
} = user;
const [math8,cs101] = courses;

console.log(shippingAddress);
console.log(usershippingaddress);
// console.log(courses);
// console.log(class1,class2);