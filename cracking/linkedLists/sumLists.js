const { SinglyLinkedList } = require('./SinglyLinkedList');
const linkedList = new SinglyLinkedList();
linkedList.insertNode(7);
linkedList.insertNode(1);
linkedList.insertNode(6);


const linkedList2 = new SinglyLinkedList();
linkedList2.insertNode(5);
linkedList2.insertNode(9);
linkedList2.insertNode(2);

const sumList = (list) => {
    let multiplyBy = 1;

    let sum = 0;
    let currentNode = list.root;

    while(currentNode) {
        sum += (currentNode.data * multiplyBy);
        multiplyBy*=10;
        currentNode = currentNode.next;
    }

    return sum;
}

//O(n + m) time , O(1) space
const sumLists = (list1, list2) => {
    return sumList(list1) + sumList(list2);
}


console.log(sumLists(linkedList, linkedList2));

//TODO: Solve the reverse