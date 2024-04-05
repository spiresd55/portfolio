const { SinglyLinkedList } = require('./SinglyLinkedList');

console.log(SinglyLinkedList)

const linkedList = new SinglyLinkedList();
linkedList.insertNode(0);
linkedList.insertNode(0);
linkedList.insertNode(1);
linkedList.insertNode(1);
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(3);

const otherList = new SinglyLinkedList();
otherList.insertNode(1);
otherList.insertNode(1);


//O(n) time O(n) space
const removeDups = (list) => {
    if (list.size < 2) {
        return list;
    }

    let buffer = {};
    let prev = list.root;
    let current = list.root;

    while(current) {
        let data = current.data;
        if(!buffer[data]) {
            buffer[data] = true;
        } else {
            prev.next = current.next;
            current = current.next;
            list.size--;
            continue;
        }
        prev = current;
        current = current.next;
    }

    return list;
} 

//O(n^2) time O(1) space
const removeDupsWithoutBuffer = (list) => {
    if (list.size < 2) {
        return list;
    }

    let current = list.root;

    // a current pointer is used, while a runner pointer goes and checks the rest of the list for duplicates
    // if a duplicate is found, the deletion happens in place
    // when the runner reaches the end of the list, the current pointer moves to the next position in the list
    // this continues to repeat until the current pointer is equal to null
    while(current) {
        let runner = current.next;
        let dataToCompare = current.data;
        let prevNode = current;
        while(runner) {
            if(runner.data === dataToCompare) {
                prevNode.next = runner.next;
                runner = runner.next;
                continue;
            }
            prevNode = runner;
            runner = runner.next;
        }
        current = current.next;
    }

    return list;
}

linkedList.print();
//removeDups(linkedList).print();
removeDupsWithoutBuffer(linkedList).print();

otherList.print();
//removeDups(otherList).print();
removeDupsWithoutBuffer(otherList).print();