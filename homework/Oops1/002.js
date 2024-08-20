function updateInventory(inventory,newItems){
    
    newItems.forEach(item  => {
        if(item in inventory) {
            inventory[item]++;
        } else {
            inventory[item] = 1;
        }
    });
     return inventory;
}

const inventory = {"apples": 2, "bananas": 1};  
const newItems = ["apples", "oranges", "apples"];
console.log(updateInventory(inventory, newItems));



//output
// { apples: 4, bananas: 1, oranges: 1 }