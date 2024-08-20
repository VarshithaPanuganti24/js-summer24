// function groupPeopleByAge(people){
//     const groupByAge ={};


//     people.forEach(person => {
//         const { Name ,age} = person;

//         if(age in groupByAge){
//             groupByAge[age].push(Name);
//         }else {
//             groupByAge[age] = Name;
//         }
  
//     });
//     return groupByAge;


// }

// const people = [{ name: "John", age: 23 }, { name: "Amy", age: 25 }, { name: "Cameron", age: 23 }];
// console.log(groupPeopleByAge(people));


function groupPeopleByAge(people) {
    const groupedByAge = {}; 

    for (let i = 0; i < people.length; i++) {
        const person = people[i]; 
       
        const age = person.age; 
        const name = person.name; 

        if (!groupedByAge[age]) {
            groupedByAge[age] = []; 
        }

        groupedByAge[age].push(name);
    }

    return groupedByAge; // Return the grouped object
}

const people = [{ name: "John", age: 23 }, { name: "Amy", age: 25 }, { name: "Cameron", age: 23 }];
console.log(groupPeopleByAge(people));