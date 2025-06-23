// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//appraoch:Floyd's cycle Detection algorithm(Tortoise and hare) time: o(n) space o(n)
//


class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function createCycleList(values,pos){
    let head = new ListNode(values[0]);
    let current = head;
    let cycleEntry = null;
    for (let i = 1;i < values.length ;i++){
        const newNode = new ListNode(values[i]);
        current.next = newNode;
        current = newNode;
        if (i === pos){
            cycleEntry = newNode;
        }
    }
    if (pos !== -1){
        current.next = pos === 0 ? head : cycleEntry;
        console.log(current.next);
    }
    return head;
}

function hasCycle(head){
    let slow = head;
    let fast = head;

    while (fast  && fast.next ){
        fast = fast.next.next
        slow = slow.next 
        if(fast === slow){
            return true
        }
        

    }
    return false
}
let head = createCycleList([3,2,0,-4],1);
console.log(hasCycle(head));