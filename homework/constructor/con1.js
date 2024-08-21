function Animal(color, numOfEyes, numOfLegs){
    this.color = color;
    this.numOfEyes = numOfEyes;
    this.numOfLegs = numOfLegs;
    // Methods: eat, sleep - The methods can just console.log(<some message>).

    this.eat = function(){
        console.log("Animal eats meat"); 
    };
    this.sleep = function(){
        console.log("Animal is sleeping");  
    };
}


const Dog = new Animal("Black","two", "4");
const cat = new Animal("white","two", "4");
const cow = new Animal("Blackanf white","two", "4");

console.log(Dog.color);
Dog.eat();
Dog.sleep();

console.log(cat.numOfEyes);
cat.eat();
cat.sleep();

console.log(cow.numOfLegs);
cow.eat();
cow.sleep();


Animal.prototype.pet = function(){
    console.log("This is a pet Animal");
};

Dog.pet();

//output:
// Black
// Animal eats meat
// Animal is sleeping
// two
// Animal eats meat
// Animal is sleeping
// 4
// Animal eats meat
// Animal is sleeping
// This is a pet Animal