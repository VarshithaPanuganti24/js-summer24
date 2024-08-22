class Vehicle {
	make;
	model;
    year;
	

	// constructor
	constructor(make, model,year) {
		this.year = year;
		this.make = make;
		this.model = model;
		
	}
    getInfo(){
        return console.log(this.make,this.model,this.year);
        //return `${this.make},${this.model},${this.year}`;
    }
}

class Car extends Vehicle{
    numDoors;

    constructor(make, model,year,numDoors){
        super(make, model,year);
        this.numDoors = numDoors;

    }
    // getnumDoors(){
    //     return this.numDoors;
    // }
    getInfo(){
        return ("The Vehicle car type is ",super.getInfo(),"has",this.numDoors,"doors");
    }
   
}

class Trunk extends Vehicle{
    loadCapacity;

    constructor(make, model,year,loadCapacity){
        super (make, model,year);
        this.loadCapacity = loadCapacity;

    }
    // getLoadCapacity(){
    //     return this.loadCapacity;
    // }
    getInfo(){
        return (this.loadCapacity);//override
        //return console.log("The Vehicle Trunk type is ",super.getInfo(),"with",this.loadCapacity ,"tons");//overload
    }
   
}



const Vehicle1 = new Vehicle("Banz","zz",2009);
console.log(Vehicle1.getInfo());

const car1 = new Car("Toyato","corollo",2010,4);
console.log(car1.getInfo());

const trunk1 = new Trunk("Ford","F150",2010,100);
console.log(trunk1.getInfo());