
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n1;

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    if(!head) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while(fast && fast.next) {
        //if(slow.val === fast.val) { 
        //    return true;
       // }
        // Object equality check - same reference
       if(Object.is(fast, slow)) {
            return true;
       }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};


console.log(hasCycle(n1));