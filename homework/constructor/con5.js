class Animal{
    //properties
    name;
    color;
    numOfEyes;
    numOfLegs;
    constructor(name,color, numOfEyes, numOfLegs){
        this.name = name;
        this.color = color;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
    }
    // Methods: eat, sleep - 

    eat(){
        console.log("Animal eats meat")
        }

    sleep(){
        console.log("Animal is sleeping") 
        }
    walk(){
        console.log("Animal is walking") 
        }

    run(){
        console.log("Animal is running") 
        }

}
class Dog extends Animal{
    breed;
    constructor(name,color, numOfEyes, numOfLegs,breed){
    super(name,color, numOfEyes, numOfLegs);
    this.breed = breed;
    }
    bark(){
        console.log("the barks")
    }
    dig(){
        console.log("this dog digs the ground")
    }
}

const Dog1 = new Dog("Sunny","brown","2","4","Bull dog");
const Dog2 = new Dog("Nandy","white","2","4","German shepherd");

Dog1.walk();
Dog1.bark();
Dog1.dig();
console.log(Dog1);
console.log(Dog2);

//
// Animal is walking
// the barks
// this dog digs the ground