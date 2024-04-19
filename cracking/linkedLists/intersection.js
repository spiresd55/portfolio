// Object.is
const { SinglyLinkedList, LinkedListNode } = require('./SinglyLinkedList');


const intersectionNode = new LinkedListNode(40000);

const linkedList = new SinglyLinkedList();
linkedList.insertNode(0);
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);

const linkedList2 = new SinglyLinkedList();
linkedList2.insertNode(10);
linkedList2.insertNode(11);
linkedList2.insertNode(12);
linkedList2.insertNode(13);
linkedList2.insertNode(14);

let currentNode = linkedList.root;
let currentNode2 = linkedList2.root;

while(currentNode.next) {
    currentNode = currentNode.next;
    currentNode2 = currentNode2.next;
}

currentNode.next = intersectionNode;
currentNode2.next = intersectionNode;

linkedList.insertNode(10000);
linkedList.insertNode(100000);
linkedList2.insertNode(2000000);

// These nodes intersect at the value 40000
linkedList.print();
linkedList2.print();


// Assumption (No Duplicates)
const findIntersectionNode = (list1, list2) => {
    let nodeReferences = {};

    let currentNode = list1.root;
   
    while(currentNode) {
        nodeReferences[currentNode.data] = currentNode;
        currentNode = currentNode.next;
    }

    let currentNode2 = list2.root;

    while(currentNode2) {
        if(nodeReferences[currentNode2.data]) {
            if(Object.is(currentNode2, nodeReferences[currentNode2.data])) {
                return currentNode2;
            }
        }
        currentNode2 = currentNode2.next;
    }

    return null;
}

console.log(findIntersectionNode(linkedList, linkedList2));

console.log(findIntersectionNode(new SinglyLinkedList(), new SinglyLinkedList()));

let listOne = new SinglyLinkedList();
listOne.insertNode(1);
listOne.insertNode(2);
listOne.insertNode(3);

let listTwo = new SinglyLinkedList();
listTwo.insertNode(1);
listTwo.insertNode(2);
listTwo.insertNode(3);

console.log(findIntersectionNode(listOne, listTwo));
