function Bird(name, color, ableToFly){
    this.name = name;
    this.color = color;
    this.ableToFly = ableToFly;
    // Methods eat, sleep, getName and setName for retrieving and setting the name property

    this.eat = function(){
        console.log("bird eats insects"); 
    };
    this.sleep = function(){
        console.log("Bird is sleeping");  
    };
    this.getName = function(){
        return this.name;
    };
    this.setName = function(newName){
        this.name = newName;
    };

}

const peacock = new Bird("Peacock","green and blue", "yes");
const penguin = new Bird("Penguin","black and white", "no");

console.log(peacock.color);
console.log(peacock);
peacock.eat();
peacock.sleep(); 
console.log(peacock.getName());   
peacock.setName("pecok");

console.log(peacock.getName());

console.log(penguin);
penguin.sleep();
penguin.eat();
penguin.setName("Cutie");

console.log(penguin.getName());


//output:
