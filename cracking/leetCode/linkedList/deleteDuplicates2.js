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
var deleteDuplicates = function(head) {
    if(!head) {
        return head;
    }

    let current = head;
    let prev = null;

    while(current && current.next) {
        //Does the next value equal the current
        if(current.val === current.next.val) {
            let next = current.next;

            //Keep iterating until a non duplicate is found
            while(current.val === next?.val) {
                next = next.next;
            }

            //If prev is null, then the head needs to be updated to non duplicate
            if(prev === null) {
                head = next;
            } else {
                //Otherwise update the next val of prev to the non dup
                prev.next = next;
            }
           
            //continue traversing 
            current = next;
        } else {
            //normal traversal
             prev = current;
             current = current.next;
        }
        
    }

    return head;
};