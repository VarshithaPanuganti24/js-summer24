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

class Bird extends Animal{
    canFly;
    constructor(name,color, numOfEyes, numOfLegs,canFly =true){
        super(name,color, numOfEyes, numOfLegs);
        this.canFly = canFly;
    }
    //method
    fly (){
        if(this.canFly){
        console.log("Bird can fly");
        }else  console.log("Bird cannot fly")
    }
    peck(){
        console.log("Bird uses peck topick up some thing");
    }
}


//
const parrot = new Bird("paarot","green","2","2",true);
const penguin = new Bird("Penguin","black","2","4",false);


parrot.sleep();
parrot.fly();
parrot.eat();

penguin.walk();
penguin.run();
penguin.fly();


//output;
// Animal is sleeping
// Bird can fly
// Animal eats meat
// Animal is walking
// Animal is running
// Bird cannot fly