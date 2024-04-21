const { SinglyLinkedList } = require('./SinglyLinkedList');

const linkedList = new SinglyLinkedList();
linkedList.insertNode(0);
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);
linkedList.insertNode(5);
linkedList.insertNode(6);
linkedList.insertNode(7);
linkedList.insertNode(8);
linkedList.insertNode(9);
linkedList.insertNode(10);
linkedList.insertNode(11);
linkedList.insertNode(12);

const reverseList = (linkedList) => {
    // Make a copy of the list
    let list = Object.create(linkedList);

    if(!list.root) {
        return 'The list is empty';
    }

    let prevNode = null;
    let currentNode = list.root;

    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;

        if(!nextNode) {
            list.root = prevNode;
        }
    }

    return list;
}

linkedList.print();
reverseList(linkedList).print();