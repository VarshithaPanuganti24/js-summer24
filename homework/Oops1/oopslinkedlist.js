// {1} -> {3} -> {5} -> {10} -> {12} -> null
// {} -> {12}
class Node {
	val; // data to store in each node
	// prev;
	next; // a pointer referencing the next Node
	constructor(val = undefined, next = null) {
		this.val = val;
		this.next = next;
	}
}

// const n1 = new Node(1);
// const n5 = new Node(5);
// const n10 = new Node(10);
// n1.next = n5;
// n5.next = n10;
// const n3 = new Node(3);
// // added n3 between n1 and n5 in constant time (2 operations)
// n1.next = n3;
// n3.next = n5;
// console.log(n1);

// create a LinkedList DS
class LinkedList {
	sentinel; // ptr to first node
	size;
	constructor(val) {
		this.sentinel = new Node(); // create sentinel node
		this.size = 0;
		if (val) this.addLast(val);
	}

	getHead() {
		return this.sentinel.next;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.val + " -> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	// if added, return true
	// {} -> {1} -> {3} -> {5} -> {10} -> {12} -> null
	// {} -> {1} -> {3} -> null
	addLast(val) {
		// adding when list is empty (sentinel does not count towards list size)
		if (this.size === 0) {
			this.sentinel.next = new Node(val);
			this.size++;
			return true;
		}

		// adding when list already has items
		let curr = this.getHead();
		while (curr.next != null) {
			curr = curr.next;
		}
		curr.next = new Node(val);
		this.size++;
		return true;
	}

	/**
	 * Remove the last item in the list and return it. Return null if list is empty.
     * time complexity O(n)
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removed = this.getHead().val;
			this.sentinel.next = null;
			this.size--;
			return removed;
		}

		let curr = this.getHead();
		while (curr.next.next !== null) {
			curr = curr.next;
		}
		const removed = curr.next.val;
		curr.next = null;
		this.size--;
		return removed;
	}

	// TODOS: Implement the methods below for the LinkedList class: addFirst, removeFirst, add, contains, get, indexOf, peekFirst, peekLast.
	// Provide the time complexity for each method.

	/**
	 * Add val to beginning of the list.
	 * @param {*} val
     * time complexity is :O(1)
	 */
	addFirst(val) {
        // const newnode = new Node(val);
        // newnode.next = this.sentinel.next;
        const newnode = new Node(val,this.getHead());
        this.sentinel.next = newnode;
        this.size++;
    }

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
     * time complexity is :O(1)
	 */
	removeFirst() {
        if (this.size === 0) return console.log("the list is empty",null); // list is empty
        
		const removed = this.getHead();
		this.sentinel.next = removed.next;
		this.size--;
		return console.log("the removed first item:",removed.val);
		

    }

	/**
	 * Add the value (val) at the specified index in the list
	 * @param {*} index
	 * @param {*} val
     * time complexity is :O(n)
	 */
	add(index, val) {
        if(index < 0 || index > this.size) return console.log("list is empty cannot insert  avalue at aparticular index",null);

        let curr = this.sentinel;
        for(let i = 0 ;i < index; i++){
            curr = curr.next ;
        }
        const newnode = new Node(val, curr.next);
        curr.next = newnode;
        this.size++;

    }

	/**
	 * Check list for the target value. Return true if list contains target, else return false.
	 * @param {*} target - The target value to search for.
     * time complexity is :O(n)
	 */
	contains(target) {
        let curr = this.getHead();
		while (curr !== null) {
			if(curr.val === target) return console.log("Target value found",true);
			curr = curr.next;
		}
        return console.log("Target value not found",false);
    }

	/**
	 * Return value at given index, else return undefined.
	 * @param {*} index
     * time complexity )(n)
	 */
	get(index) {
        if (index < 0 || index >= this.size) return null; 

        let curr = this.sentinel.next;
        for(let i = 0 ; i < index ;i++){
            curr = curr.next;
        }
        return console.log("the value at index is " ,curr.val);

        
    }

	/**
	 * Find the index of the target value. Return -1 if target is not found.
	 * @param {*} target
     * time complexity  :O(n)
	 */
	indexOf(target) {
        let curr = this.getHead();
        let index = 0;
        while (curr !== null) {
        if (curr.val === target) {
            return console.log("the index of target value is :",index);
        }
        curr = curr.next;
        index++;
    }
    return -1;
    }

	/**
	 * Return first item in list, without removing it.
     * O(1)
	 */
	peekFirst() {
        if (this.size === 0) return null;
        return console.log("the value at first node is",this.sentinel.next.val);
    }

	/**
	 * Return last item in list, without removing it.
     * O(n)
	 */
	peekLast() {
        if (this.size === 0) return null;

		let curr = this.getHead();
		while (curr.next !== null) {
			curr = curr.next;
		}
        return console.log("the value at last node is",curr.val)
    }
}

const list = new LinkedList(1);
 list.addLast(3);
 list.addLast(5);
 list.addLast(7);
 list.print();
 list.addFirst(4);
 list.print();
console.log(list.removeLast());
list.addFirst(9);
list.print();
list.removeFirst();
list.add(2,27);
 list.print();
 list.contains(7);
 list.get(2);
 list.indexOf(5);
 list.peekFirst();
 list.peekLast();
 list.print();