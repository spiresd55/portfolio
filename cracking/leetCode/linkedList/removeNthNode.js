/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let prev = null;

    // Let fast travel n, amount of times, this will be used to find the nth element from the end
    for(let i = 0; i < n ; i++) {
        fast = fast.next;
    }

    let iterations = 0;
   
    //Iterate until fast reaches the end of the list
    while(fast) {
        fast = fast.next;
        prev = slow;
        slow = slow.next;
        iterations++;
    }

    // N is equal to length of linked list, remove the first element
    if(iterations === 0) {
        let tmp = head.next;
        head.next = null;
        return tmp
    }

    // If one one element exists
    if(prev && prev.next) {
        prev.next = slow?.next || null;
    } else {
        return null;
    }


    return head; 
};