class ListNode {
    val;
    next;
    constructor(val = undefined, next = undefined) {
    this.val = val === undefined ? 0 : val; // 0 if val is undefined
    this.next = next === undefined ? null : next; // null if next is undefined
    }
    }

    function reverseList(head) {
        let prev = null; // Initially, prev is null// listnode{1,2,3,4,5:null}_,now 1-head or curr,curr.next which is 2 stored in next,
        let curr = head; // Start with the head of the list
        while (curr !== null) {
            let next = curr.next; // Store the next node
            curr.next = prev; //  1->null,
            prev = curr; //   pre 1 curr is 2  so on last curr null pre is 4
            curr = next;
        }
        return prev; // 
    }

const n5 = new ListNode(5, null);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);

console.log(head);
console.log(printList(head));
const reverselist = new reverseList(head);
console.log(reverselist);

function printList(start) {
    let curr = start;
    const result = [];
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result);
}

// Print the reversed list
printList(reverselist);



