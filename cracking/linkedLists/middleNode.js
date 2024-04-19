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



const removeMiddleNode = (linkedList) => {
    if(!linkedList.root) {
        return linkedList;
    } else if(!linkedList.root.next) {
        linkedList.size--;
        linkedList.root = null;
        return;
    }

    let prev = linkedList.root;
    let p1 = linkedList.root;
    let p2 = linkedList.root.next;

    while(p2 !== null) {
        prev = p1;
        p1 = p1.next;
        p2 = p2.next?.next || null;
    }

    prev.next = p1.next;
    linkedList.size--;
    return linkedList;
}

console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
console.log(removeMiddleNode(linkedList));
linkedList.print();