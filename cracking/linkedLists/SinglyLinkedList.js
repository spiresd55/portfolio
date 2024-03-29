class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.root = null;
    }

    insertNode(data) {
        if(!this.root) {
            this.root = new LinkedListNode(data);
            return;
        }

        let current = this.root;

        while(current.next) {
            current = current.next;
        }

        current.next = new LinkedListNode(data);
    }

    print() {
        if(!this.root) {
            console.log('The tree is empty');
            return;
        }

        let strToOutput = this.root.data;
        let currentNode = this.root.next;

        while(currentNode.next) {
            strToOutput += `->${currentNode.data}`;
            currentNode = currentNode.next;
        }

        console.log(strToOutput);
    }
}


let linkedList = new SinglyLinkedList();
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);
linkedList.insertNode(5);
linkedList.print();
