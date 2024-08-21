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



const Dog = new Animal("Puppy","Black","2", "4");
const cat = new Animal("Chiiti","white","2", "4");

const cow = new Animal("chanu","Black and white","2", "4");

console.log(Dog.color);
Dog.eat();
Dog.sleep();
Dog.walk();
Dog.run();

console.log(cat.numOfEyes);
cat.eat();
cat.sleep();
cat.walk();
cat.run();

console.log(cow.numOfLegs);
cow.eat();
cow.sleep();
cow.walk();
cow.run();
