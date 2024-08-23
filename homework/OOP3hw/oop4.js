class Employee {
    // Private properties
    #name;
    #id;
    #email;
  
    // Constructor 
    constructor(name, id, email) {
      this.#name = name;
      this.#id = id;
      this.#email = email;
    }
  
    // Methods to set and get the name
    setName(name) {
      this.#name = name;
    }
  
    getName() {
      return this.#name;
    }
  
    setId(id) {
      this.#id = id;
    }
  
    getId() {
      return this.#id;
    }

    setEmail(email) {
      this.#email = email;
    }
  
    getEmail() {
      return this.#email;
    }
    getbehaviour(){
        return "the employee is good";

    }
}
class CrewMember extends Employee {
    #manager;
  
    // Constructor 
    constructor(name, id, email,manager) {
      super(name, id, email);
       this.#manager = manager;
    }
  
    setManager(manager) {
      this.#manager = manager;
    }

    getManager() {
      return this.#manager;
    }
}
class Manager extends Employee {
    #subordinates = [];
  
    // Constructor 
    constructor(name, id, email) {
      super(name, id, email);
      //  this.#subordinates = subordinates;
    }
  
    addSubordinate(employee) {
      this.#subordinates.push(employee);
    }
  
    removeSubordinate(employee) {
      this.#subordinates = this.#subordinates.filter((sub)=>sub !== employee);
    }
  
    getSubordinates() {
      return this.#subordinates;
    }
}
const manager1 = new Manager("Mani", 1, "Mani@example.com");


const crewMember1 = new CrewMember("Akash", 2, "Aka@example.com",manager1);
const crewMember2 = new CrewMember("lisa", 3, "lisa@example.com",manager1);
const crewMember3 = new CrewMember("Davis", 4, "david@example.com",manager1);

//setting a manager to crew member
// crewMember1.setManager(manager1);
// crewMember2.setManager(manager2);
// crewMember3.setManager(manager1);

//console.log(manager1.getSubordinates());

manager1.addSubordinate(crewMember1);
manager1.addSubordinate(crewMember2);
manager1.addSubordinate(crewMember3);

console.log(manager1.getSubordinates());
console.log(manager1.getSubordinates().map(sub => sub.getName()));//getiing names of crew members

console.log(manager1.getSubordinates().map(sub => sub.getId())); //get id of crew members

//console.log(crewMember1.getManager().getName());
//crewMember1.setManager(manager3);
console.log(crewMember1.getManager().getName());
console.log(crewMember2.getManager().getName());

//manager1.removeSubordinate(crewMember3);

// console.log(manager1.getSubordinates());





  
  
  