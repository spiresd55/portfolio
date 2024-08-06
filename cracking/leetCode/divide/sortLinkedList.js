/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {    
    if(!head || !head.next) {
        return head;
    }

    //Get the middle of the list so a merge sort can happen on the list
    let middle = getMid(head);

    //Break it up into 2 lists
    let right = middle.next;
    middle.next = null;
    let left = head;

    //Keep breaking down the list until a single node is left
    left = sortList(left);
    right = sortList(right);

    // Merge and sort the list as it bubbles up
    return merge(left, right);
};


const getMid = (head) => {
    let fast = head.next;
    let slow = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    return slow;
}

const merge = (left, right) =>{
    let head;
    let tail = head;

    // Merge sort a list, turn the lists into a sorted merged linked list
    while(left && right) {
        if(left.val > right.val) {
            if(!head) {
                head = right;
                tail = head;
            } else {
                tail.next = right;
                tail = tail.next;
            }

            right = right.next
        } else {
            if(!head) {
                head = left;
                tail = head;
            } else {
                tail.next = left;
                tail = tail.next;
            }
            left = left.next;
        }
    }

    if(left) {
        tail.next = left;
    }

    if(right) {
        tail.next = right;
    }
    //Return the head of the list
    return head;
}