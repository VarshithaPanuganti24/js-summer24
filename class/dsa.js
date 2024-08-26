const arr = [5, 8, 9, 5, 4, 7, 6, 1, 10];
function linearsearch(arr, target) {
    //return index of target if found
    //otherwise return -1 if doesnot exist
    let i = 0;
    while (i < arr.length) {
        const curr = arr[i];
        if (curr === target) return i;
        i++;
    }
    return -i;
}
//binary search
function binarySearch()

//class
// data structures and algo.

// search and time complexity of array vs object, MockMap class

// objects/map/hashmap read/search: O(1)
// objects/map/hashmap write/update: O(1)
class MockMap {
	array;
	arraySize;
	constructor() {
		this.array = [];
		this.arraySize = 10;
	}

	// O(1)
	set(key, value) {
		const hashIndex = this.keyToNumber(key) % this.arraySize; // 312 % 10 => 2
		console.log(`your value will be stored at index ${hashIndex}`);
		this.array[hashIndex] = value;
	}

	// O(1)
	get(key) {
		const hashIndex = this.keyToNumber(key) % this.arraySize; // 312 % 10 => 2
		console.log(`your value will be retrieved from index ${hashIndex}`);
		return this.array[hashIndex];
	}

	// return true if a key exist, false if it does not
	has(key) {}

	keyToNumber(key) {
		const chars = key.split(""); // ['c', 'a', 't'] | ['t', 'a', 'c'], // 97+99+116=312(cat)
		return chars.reduce((accu, char) => {
			const charCode = char.charCodeAt(0);
			return accu + charCode;
		}, 0);
	}
}

// const mockMap = new MockMap();
// mockMap.set("h", "my secret value 42");
// console.log(mockMap.get("h"));

// array read/search: O(1) if index is known - searching: O(N)
// array write/update: O(1) on update, O(N) (resize, copy old elements over then add new element -> O(N) + O(1) = O(N))
// insertion with proper capacity: arr[endindex] = itemtoadd: O(1)

// [{ value: 5, ...}, {value: 8, ...},...]
const arr = [5, 8, 9, 5, 4, 7, 6, 1, 10];
function linearSearch(arr, target) {
	let i = 0;
	while (i < arr.length) {
		const curr = arr[i];
		if (curr === target) {
			console.log(`Found at index: ${i} - took ${i + 1} iterations`);
			return;
		}
		i++;
	}
	console.log(`target does not exist - took ${i + 1} iterations`);
}

// console.log(linearSearch(arr, 1));

// binary search
// search: O(logN)
const bin = new Array(16384).fill(0).map((val, idx) => idx * 2);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...]

function binarySearch(sortedArr, target) {
	let left = 0;
	let right = sortedArr.length - 1;
	let iterCount = 0;

	while (left <= right) {
		iterCount++;
		const midIndex = Math.floor((right + left) / 2);
		const midVal = sortedArr[midIndex];

		if (midVal === target) {
			console.log(`Found at index: ${midIndex} - took ${iterCount} iterations`);
			return;
		} else if (midVal < target) {
			// move left ptr to mid + 1 (searching right half)
			left = midIndex + 1;
		} else {
			// (searching left half) move right ptr = mid - 1
			right = midIndex - 1;
		}
	}
	console.log(`target does not exist - took ${iterCount} iterations`);
}

// linearSearch(bin, 5000);
binarySearch(bin, 5000);

// listed list DS

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
    const newArray = new Array(this.capacity); // new array with
    
    double capacity
    
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
    * Consider beginning states: [4, 5, 6, _, _, _] or [4, 5, 6] then add
    capacity yields -> [4, 5, 6, _, _, _]
    */
    unshift(element) {
    this.addCapacity();
    // shift all existing element right by 1 then add new item in
    
    front
    
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
    // Think about various state of the array at the beginning of your method
    and how it will change after. Draw it out.
    // Also specify the time complexity for each of these 5 methods based on
    your implementation
    /**
    * Remove from front and return that element, shift all items left by 1.
    If list is empty, return undefined.
    * time complexity:
    */
    shift() {}
    /**
    * Return first element, but does not remove, or returns null if list is
    empty
    * time complexity:
    */
    peekFirst() {}
    /**
    * Return last element, but does nto remove, or returns null if list is
    empty
    * time complexity:
    */
    peekLast() {}
    /**
    * Return the element at the given index.
    * @param {*} index - The index at which the element reside.
    * time complexity:
    */
    get(index) {}
    /**
    
    * Returns the index of the target element. If target is not found,
    return -1
    * @param {*} target - The element to find the index of.
    * time complexity:
    */
    indexOf(target) {}
    }