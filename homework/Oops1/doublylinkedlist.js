class Node {
	data;
	prev;
	next;
	constructor(data = undefined, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
	sentinel; // ptr to first node (does not count toward size)
	tail; // ptr to last node
	size;
	constructor(data = undefined) {
		this.sentinel = new Node();
		this.tail = this.sentinel;
		this.size = 0;

		// add data if provided
		if (data !== undefined) this.addLast(data);
	}

	getHead() {
		return this.sentinel.next;
	}

	getTail() {
		return this.tail;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.data + " <-> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	printBackward() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "";
		let curr = this.getTail();
		while (curr.prev !== null && curr.prev.data !== undefined) {
			list = " <- " + curr.data + list;
			curr = curr.prev;
		}
		list = curr.data + list;
		list = "{ " + list + " }";
		console.log(list);
	}

	/**
	 * Add data to end of list.
	 * {} <-> {1} -> null
	 * {} <-> {1} <-> {2} -> null
	 * @param {*} data
	 * time: O(1)
	 */
	addLast(data) {
		const newNode = new Node(data, this.tail, null); // new node
		this.tail.next = newNode; // establish forward relationship
		this.tail = newNode; // maintain/reassign the last ptr to new node
		this.size++;
	}

	/**
	 *
	 * @returns
	 * time: O(1)
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removedNode = this.getHead();
			this.sentinel.next = null;
			this.tail = this.sentinel;
			this.size--;
			return removedNode.data;
		}

		const lastToRemove = this.getTail();
		const secondToLast = lastToRemove.prev;
		secondToLast.next = null;
		this.tail = secondToLast; // reassign new last node
		this.size--;
		return lastToRemove.data;
	}

	/**
	 * Add item to beginning of the list.
	 * @param {*} data
	 * {} <-> {N} <-> {1} <-> null
	 */
	addFirst(data) {
		if (this.size === 0) {
			this.addLast(data); // delegate to addLast to maintain last ptr
			return;
		}

		const currHead = this.getHead();
		const newNode = new Node(data, this.sentinel, currHead); // {} <-> {N} -> {1} <-> null
		this.sentinel.next = newNode;
		currHead.prev = newNode;
		this.size++;
	}

	// TODOS: Implement the methods below for the DoublyLinkedList class: removeFirst, remove, add, peekFirst, peekLast.
	// Provide the time complexity for each method.

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
	 * O(1)
	 */
	removeFirst() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) return this.removeLast();
		const head  = this.getHead();
		const newhead = head.next;

		this.sentinel.next = newhead; 
		newhead.prev = this.sentinel;// Update sentinel's next pointer
		this.size--; // Decrease size
	
		return console.log("the first removed node:",head.data);	
	}

	/**
	 * Remove item at the given index and return it if index is valid.
	 * @param {*} index
	 * first and last case are O(1)
	 * loopcase O(n)
	 */
	remove(index) {
		if (index < 0 || index >= this.size) return null; 
		if(index === 0){
			return this.removeFirst();
		}else if (index === this.size - 1) {
			return this.removeLast();
		}else{
			let curr = this.getHead();
			let i = 0
			while(i < index){
				curr = curr.next
				i++
			}
			// {} <-> {1}<-> {4}<-> {8} <-> {7} <-> null
				//{8}=curr.data

				const beforenode = curr.prev;
				const afternode = curr.next;

				beforenode.next = afternode;
				afternode.prev = beforenode;
        this.size--; 
        return removedNode.data;
		}

	}
	
	/**
	 * Add the data at the specified index in the list. Return boolean true if successful, else false.
	 * @param {*} index
	 * @param {*} data
	 * O(n)
	 */
	
	add(index, data) {
		if (index < 0 || index > this.size) return false
	
		if (index === this.size) {
			this.addLast(data);
			return true;
		} else {
			let curr = this.sentinel;
			let i = 0;
			while(i < index) {
				curr = curr.next;
				i++;
			}
			const newNode = new Node(data, curr, curr.next); //{} <-> {3},<->{5} {N} <-> null
			curr.next.prev = newNode; 
			curr.next = newNode; 
	
			this.size++; 
			return true;
		}
	}

	/**
	 * Return first item in list, without removing it.
	 */
	
	peekFirst() {
		if (this.size === 0) return undefined; // List is empty, so there's no first item to return
	
	
		return this.getHead().data; // Return the data of the first node
	}

	/**
	 * Return last item in list, without removing it.
	 */
	
	peekLast() {
		if (this.size === 0) return null;
		return this.getTail().data; // Return the data of the last node
	}
}

const lst = new DoublyLinkedList();
 lst.addLast(3);
 lst.addLast(5);
 lst.addLast(7);
// lst.addLast(8);
lst.print();
lst.printBackward();

//lst.addFirst(-1);
//lst.removeFirst();
//lst.print();
//lst.printBackward();

console.log(lst.remove(8));
//lst.print();
//console.log(lst.add(2,24));
lst.print();
lst.printBackward();
//console.log(lst.remove(2));
lst.print();

// console.log(lst.peekFirst());
// console.log(lst.peekLast());
// lst.print();