// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//appraoch:Floyd's cycle Detection algorithm(Tortoise and hare) time: o(n) space o(n)
//

function hasCycle(head){
    let slow = head;
    let fast = head;

    while (fast  && fast.next ){
        fast = fast.next.next
        if(fast === slow){
            return true
        }
        slow = slow.next 

    }
    return false
}
