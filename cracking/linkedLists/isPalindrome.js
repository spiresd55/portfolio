const { SinglyLinkedList } = require('./SinglyLinkedList');

const linkedList = new SinglyLinkedList();
linkedList.insertNode('r');
linkedList.insertNode('a');
linkedList.insertNode('c');
linkedList.insertNode('e');
linkedList.insertNode('c');
linkedList.insertNode('a');
linkedList.insertNode('r');

const linkedList2 = new SinglyLinkedList();
linkedList2.insertNode('r');
linkedList2.insertNode('a');
linkedList2.insertNode('c');
linkedList2.insertNode('e');
linkedList2.insertNode('c');
linkedList2.insertNode('a');
linkedList2.insertNode('r');
linkedList2.insertNode('s');

const reverseList = (list) => {
    if(!list.root) {
        return list;
    }

    let currentNode = list.root;
    let prev = null;

    while(currentNode) {
        let next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;

        //Set the new root
        if(!next) {
            list.root = prev;
        }
    }

    return list;
}

//TODO: Create a clone of the reverse list
const isLinkListAPalindrome = (linkedList) => {
    // Create a non reference copy of the linkedList
    let list = Object.create(linkedList);
    let reversedList = reverseList(linkedList);

    list.print();
    reversedList.print();

    let currentNodeList1 = list.root;
    let currentNodeList2 = reversedList.root;

    while(currentNodeList1 && currentNodeList2) {
        if(currentNodeList1.data !== currentNodeList2.data) {
            return false;
        }
        currentNodeList1 = currentNodeList1.next;
        currentNodeList2 = currentNodeList2.next;
    }


    if (currentNodeList1 !== null || currentNodeList2 !== null) {
        return false;
    }

    return true;
}

console.log(isLinkListAPalindrome(linkedList));
console.log(isLinkListAPalindrome(linkedList2));