/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head) {
        return;
    }

    let current = head;
    let prev = null;
    let position = 1;

    while(position < left - 1 ) {
        //prev = current;
        current = current.next;
        position++;
    }

    current.next = reverse(current.next, right - left)
   
    return current;
};

const reverse = (head, swaps) => {
    let current = head;
    let prev = null;
    let count = 0

    while(current && count <= swaps) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    let node = prev;

    while(node && node.next) {
        node = node.next;
        if(node.next === null) {
            node.next = current;
            break;
        }
    }

    return prev;
}