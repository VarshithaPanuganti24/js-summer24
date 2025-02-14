class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head= null;
    }
}
//Append: Insert  the new node at the end of linked list
append(data){
    const newNode = new Node(data);
    if(!this.head) {
        this.head = newNode;
    }else{
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const LinkedList = new LinkedList();
LinkedList.append(10);
LinkedList.append(20);
LinkedList.append(30);
