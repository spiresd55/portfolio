const { SinglyLinkedList } = require('./SinglyLinkedList');
const linkedList = new SinglyLinkedList();
linkedList.insertNode(7);
linkedList.insertNode(1);
linkedList.insertNode(6);
linkedList.insertNode(0);
linkedList.insertNode(2);

//Turn into circular list
let currentNode = linkedList.root;
while(currentNode.next) {
    currentNode = currentNode.next;
}

currentNode.next = linkedList.root;

const isLoop = (linkedList) => {
    let p1 = linkedList.root;
    let p2 = linkedList.root.next;

    while(p1 || p2) {
        if(p1.data === p2?.data) {
            return true;
        }

        p1 = p1.next;
        p2 = p2?.next?.next;
    }

    return false;
}

console.log(isLoop(linkedList));


const linkedList2 = new SinglyLinkedList();
linkedList2.insertNode(7);
linkedList2.insertNode(1);
linkedList2.insertNode(6);
linkedList2.insertNode(0);

console.log(isLoop(linkedList2));