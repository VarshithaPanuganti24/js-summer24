//ES6
class Store{
    //properties
    name;
    isOpen;
    numberOfEmployees;
    yearOpen;

    // constructor
    constructor(name,numberOfEmployees,yearOpen) {
        this.numberOfEmployees =numberOfEmployees;
        this.yearOpen =yearOpen;
        this.isOpen =false;
    }
    //class method
    openStore(){
        this.openStore = true;
    }

    closeStore(){
        this.isOpen = false;
    }
    getIsOpen(){
        return this.isOpen;
    }
    getNumberOfEmployees(){
        return this.numberOfEmployees;
    }

}
const paneraBread =    new Store("panera Bread",10,"2024");
console.log(paneraBread);

class Vehicle{
    year;
    make;
    model;
    color;

    //constructor
    constructor(year,make,model,color){
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    //method for gets
    getYear(){
        return this.year;
    }
    getMake(){
        return this.makeake;
    }
    getModel(){
        return this.model;
    }
    getColor(){
        return this.color;
    }
    useHorn(){ 
        console.log("beep")
    }
    start(){
       console.log("start vehicle")
    }
    stop(){
        console.log("start off vehicle")
     }
    prep(){
        console.log("preparing to start vehicle")
     }
}
// child / derived class: SUV, Minivan, Sedan, Crossover
class SUV extends Vehicle {
	// properties unique to SUV
	seats;

	// SUV constructor
	constructor(year, make, model, color, seats) {
		super(year, make, model, color); // call parent class constructor and pass on arguments that it maintains - super() is the parent constructor function

		this.seats = seats; // this property we maintain in this class, so we set the value here
	}

	// SUV methods
	getSeats() {
		return this.seats;
	}

	// setSeats(num) {
	// 	if (typeof num !== "number") return;
	// 	this.seats = num;
	// }

	// overriding (polymorphism)
}
//
//polymorphism:
//override /overload