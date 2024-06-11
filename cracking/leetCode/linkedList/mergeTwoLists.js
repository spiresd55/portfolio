/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next = undefined) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) {
        return null;
    } 

    if(!list1) {
        return list2;
    }

    if(!list2) {
        return list1;
    }

    if(!list1.next && !list2.next) {
        if(list1.val >list2.val) {
            list2.next = list1;
            return list2;
        } else {
            list1.next = list2;
            return list1;
        }
    }

    let head = list1;
    //In Place
    let currentList1 = list1;
    let currentList2 = list2;
    let prev = currentList1;
    while(currentList1 || currentList2) {
       // console.log('debug', currentList1, currentList2)
        if(!currentList2) {
            break;
        }
        if(!currentList1) {
            prev.next = currentList2;
            break;
        }
        if(currentList2.val >= currentList1.val) {
            let List2TempNext = currentList2.next;
            let List1TempNext = currentList1.next;
            currentList1.next = currentList2;
            currentList2.next = List1TempNext;
            currentList2 = List2TempNext;
            prev = currentList1.next;
            currentList1 = currentList1.next.next;
        } else if(currentList2.val < currentList1.val && currentList1.next){
            prev.next = currentList2;
            let tmp = currentList2.next;
            currentList2.next = currentList1;
            prev = currentList2;
            currentList1 = currentList1.next;
            currentList2 = tmp;
        } else {

        }
        console.log(list1)
    }

    console.log('head of list')
    console.log(head);
    return head;
};

const mergeTwoLists2 = (list1, list2) => {
    if(!list1 && !list2) {
        return null;
    } 

    if(!list1) {
        return list2;
    }

    if(!list2) {
        return list1;
    }

    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists2(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists2(list1, list2.next);
        return list2;
    }
}

let list1 = new ListNode(1,
    new ListNode(2, 
        new ListNode(4, 
            new ListNode(10, 
                new ListNode(12)
            )
        )
    )
)

let list2 = new ListNode(1,
    new ListNode(3, 
        new ListNode(4,
            new ListNode(5,
                new ListNode(17, 
                    new ListNode(25)
                )
            )
        )
    )
)


let printList = (list) => {
    let current = list;
    let output = ''
    while(current) {
        output += current.val + '->';
        current = current.next;
    }
    console.log(output);
}
let list = mergeTwoLists(list1, list2)
let list_2 = mergeTwoLists(new ListNode(1), new ListNode(2))
let list_3 = mergeTwoLists(new ListNode(2), new ListNode(1))
let list_4 = mergeTwoLists2(new ListNode(5), new ListNode(1,
    new ListNode(2,
        new ListNode(4)
    )
))


printList(list)
printList(list_2)
printList(list_3)
printList(list_4)


//TODO: Solve this with an iterative approach approach