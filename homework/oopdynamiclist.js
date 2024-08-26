class DynamicList {
	array;
	capacity;
	size;

	constructor(capacity = 3) {
		this.capacity = capacity;
		this.array = new Array(capacity);
		this.size = 0;
	}

	print() {
		if (this.size === 0) {
			console.log("[]");
			return;
		}

		let str = "[";
		for (let i = 0; i < this.size; i++) {
			str += " " + this.array[i];
			if (i < this.size - 1) str += ",";
		}

		str += " ]";
		console.log(str);
	}

	addCapacity() {
		if (this.hasCapacity()) return;
		console.log("adding capacity");
		this.capacity = this.capacity * 2;

		// create new array then copy old into new
		const newArray = new Array(this.capacity); // new array with double capacity
		for (let i = 0; i < this.size; i++) {
			newArray[i] = this.array[i];
		}
		this.array = newArray;
	}

	hasCapacity() {
		if (this.size >= this.capacity) return false;
		return true;
	}

	push(element) {
		this.addCapacity();

		if (this.size === 0) {
			// if list is empty
			this.array[0] = element;
		} else {
			// else list has items already and size > 0
			this.array[this.size] = element;
		}

		this.size++;
		return true;
	}

	/**
	 * Add element to front of list.
	 * Consider beginning states: [4, 5, 6, _, _, _] or [4, 5, 6] then add capacity yields -> [4, 5, 6, _, _, _]
	 */
	unshift(element) {
		this.addCapacity();

		// shift all existing element right by 1 then add new item in front
		for (let i = this.size; i >= 0; i--) {
			if (i === 0) this.array[i] = element;
			else this.array[i] = this.array[i - 1];
		}

		this.size++;
		return true;
	}

	/**
	 * Remove last item from list.
	 */
	pop() {
		if (this.size === 0) return undefined;
		const itemRemoved = this.array[this.size - 1];
		this.array[this.size - 1] = undefined;
		this.size--;
		return itemRemoved;
	}

	// TODOS: Implement shift, peekFirst, peekLast, get, indexOf
	// Think about various state of the array at the beginning of your method and how it will change after. Draw it out.
	// Also specify the time complexity for each of these 5 methods based on your implementation

	/**
	 * Remove from front and return that element, shift all items left by 1. If list is empty, return undefined.
	 * time complexity:the loop runs O(n) to shift
	 */
	
    shift() {
        if (this.size === 0 ) return undefined;
        const removeItem = this.array[0];
    
            // remove first existing element left by 1 then 
            for (let i = 0; i < this.size - 1; i++) {
                 this.array[i] = this.array[i + 1];
            }
            this.array[this.size - 1] = undefined;
            this.size--;
            return console.log("the removed item from array",removeItem);
        }
    


	/**
	 * Return first element, but does not remove, or returns null if list is empty
	 * time complexity: checking first element O(1)
	 */
	peekFirst() {
        if (this.size === 0) return null;
        return console.log("first element in array",this.array[0]);
    }

	/**
	 * Return last element, but does nto remove, or returns null if list is empty
	 * time complexity:)  O(1)
	 */
	peekLast() {
        if (this.size === 0) return null;
        return console.log("last element in array",this.array[this.size -1]);

    }


	/**
	 * Return the element at the given index.
	 * @param {*} index - The index at which the element reside.
	 * time complexity: 0(1)
	 */
	get(index) {
        if (index < 0 || index >= this.size) return null; 
        return console.log("element at this index",this.array[index]);

    }

	/**
	 * Returns the index of the target element. If target is not found, return -1
	 * @param {*} target - The element to find the index of.
	 * time complexity:O(n)
	 */
	indexOf(target) {
        for(let i = 0;i < this.size; i++){
            if(this.array[i] === target){
                return console.log("Index of target element",i);
            }
        }
        return -1;
    }
}

 const dl = new DynamicList();
 dl.push(999);
 //dl.print();
 dl.push(1000);
 dl.push(1001);
 //dl.print();
 dl.push(1003);
 //dl.print();
 dl.pop();
// dl.print();
 dl.push(5000);
 dl.print();
 dl.unshift(888);
// dl.print();
 dl.shift();
// dl.print();
dl.peekFirst();
dl.peekLast();
dl.get(1);
dl.indexOf(1000);
dl.print();