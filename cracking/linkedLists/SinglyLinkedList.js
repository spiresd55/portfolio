class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insertNode(data) {
        if(!this.root) {
            this.root = new LinkedListNode(data);
            this.size++;
            return;
        }

        let current = this.root;

        while(current.next) {
            current = current.next;
        }

        current.next = new LinkedListNode(data);
        this.size++;
    }

    get(index) {
        if (index === 0) {
            return this.root;
        }

        if(index > this.size - 1 ) {
            console.log(`GET FAILED: Index ${index} is out of bounds`);
            return;
        }

        let current = this.root;
        let counter = 0;
        
        while(counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    print() {
        if(!this.root) {
            console.log('The tree is empty');
            return;
        }

        let strToOutput = this.root.data;
        let currentNode = this.root.next;

        while(currentNode) {
            strToOutput += `->${currentNode.data}`;
            currentNode = currentNode.next;
        }

        console.log(this.size, strToOutput);
    }

    delete(index) {
        if(!this.root) {
            console.log('DELETION FAILED: The Tree Is Empty');
            return;
        }

        if(index > this.size - 1 ) {
            console.log(`DELETION FAILED: Index ${index} is out of bounds`);
            return;
        }

        if(index === 0) {
            this.root = this.root.next;
            this.size--;
            return;
        }

        let counter = 0;
        let prev = this.root; 
        let current = this.root;

        while(counter < index) {
            prev = current;
            current = current.next;
            counter++;
        }

        prev.next = current?.next || null;
        this.size--;
        return current;
    }

    find(value) {
        if(!this.root) {
            return;
        }

        let current = this.root;

        while(current) {
            if(current.data === value) {
                return current;
            }
            current = current.next;
        }

        return;
    }

    removeDuplicates() {
        if(this.size < 2) {
            return this;
        }

    }
}


let linkedList = new SinglyLinkedList();
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);
linkedList.insertNode(5);
linkedList.print();

console.log('----------')
console.log(linkedList.get(0));
console.log(linkedList.get(4));
console.log(linkedList.get(10));

console.log('------DELETING--------');
console.log(linkedList.delete(0));
linkedList.print();

console.log('------FINDING-------');
console.log(linkedList.find(3));
console.log(linkedList.find(10));

console.log('-----Remove Dups------')
//console.log(linkedList.removeDuplicates())

module.exports = {
    SinglyLinkedList,
    LinkedListNode
}