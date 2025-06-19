// Given the head of a singly linked list, reverse the list, and return the reversed list.Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1] give me all the solutios

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

function arrayToLinkedList(arr){
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1 ; i < arr.length ;i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
//time:O(n) space: O(n)


function reverseList(head){
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;

    }
    return prev;
    
}
//space :o(1)

// function reverseListWithStack(head) {
//   if (!head) return null;

//   let stack = [];
//   let current = head;
//   while (current) {
//     stack.push(current);
//     current = current.next;
//   }

//   let newHead = stack.pop();
//   current = newHead;
//   while (stack.length > 0) {
//     current.next = stack.pop();
//     current = current.next;
//   }
//   current.next = null;
//   return newHead;
// }

// function linkedListToArray(head){
//     let result = [];
//     let current = head;
//     while (current) {
//         result.push(current.value);
//         current = current.next;
//     }
//     return result;
// }

//space o(n)

let arr = [1,2,3,4,5]
let linkedList = arrayToLinkedList(arr);
console.log("linkedList",linkedList);
let reversed = reverseList(linkedList);
console.log("ReversedList",reversed);
let result = linkedListToArray(reversed);
console.log(result);