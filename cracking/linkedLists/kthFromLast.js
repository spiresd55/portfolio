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


const kthFromLast = (linkedList, k) => {
    let elements = [];
    let currentNode = linkedList.root;

    if(!currentNode) {
        return -1;
    } 

    do {
        elements.push(currentNode);
        currentNode = currentNode.next
    }while(currentNode);

    if(k > elements.length) {
        return -1;
    }

    return elements[elements.length - k];
}

const kthFromLastWithoutArray = (linkedList, k) => {
    let p1 = linkedList.root;
    let p2 = linkedList.root;

    for(let i =0; i < k; i++) {
        // reach end of the list (k is greater than linked list size)
        if(p1 === null) {
            return null;
        }
        p1 = p1.next;
    }

    //p1 is a runner k elements ahead of p2
    //once p1 is null, we know p2 is k elements away from the end of the linkedList
    while(p1 !== null) {
        p1 = p1.next;
        p2 = p2.next
    }

    return p2;
}

const kthFromLastRecursion = (node, k) => {
    //console.log('incrementing', node?.data)
    if(node === null) {
        return 0;
    }

    let index = kthFromLastRecursion(node.next, k) + 1;
    //console.log('index',index);
    if(index === k) {
        console.log('kth from element', k, index, node.data);
    }

    return index;
}

console.log(kthFromLast(linkedList, 3));
console.log(kthFromLast(linkedList, 8));
console.log(kthFromLast(linkedList, 20));

console.log('kth from array without array');
console.log(kthFromLastWithoutArray(linkedList, 3));
console.log(kthFromLastWithoutArray(linkedList, 8));
console.log(kthFromLastWithoutArray(linkedList, 20));

console.log('---------recursion-----');
console.log(kthFromLastRecursion(linkedList.root, 3))