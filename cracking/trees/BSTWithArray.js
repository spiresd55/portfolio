class BST {
    constructor() {
        this.nodes = [];
        this.size = 0;
    }

    insertNode(data) {
        if(!this.size) {
            this.nodes[0] = data;
            this.size++;
            return;
        }

        let n = 0;

        while(true) {
            let leftIndex = 2 * n + 1;
            let rightIndex = 2 * n + 2;

            let current = this.nodes[n];
            let left = this.nodes[leftIndex];
            let right = this.nodes[rightIndex];

            if(data <= current && !left) {
                this.nodes[leftIndex] = data;
                this.size++;
                break;
            } else if(data > current && !right) {
                this.nodes[rightIndex] = data;
                this.size++;
                break;
            } else if(data <= current && left) {
                n = leftIndex;
            } else if(data > current && right) {
                n = rightIndex
            }
        }
    }

    inOrderPrint(n = 0) {
        if(!this.nodes[n]) {
            return;
        }

        this.inOrderPrint(n * 2 + 1);
        console.log(this.nodes[n]);
        this.inOrderPrint(n * 2 + 2);
    }

    findSuccessor(n) {
        let successor, successorIndex;
        while(this.nodes[n] !== undefined) {
            successor = this.nodes[n];
            successorIndex = n;
            n = n * 2 + 2;
        }
        return {successor, successorIndex};
    }

    //TODO: Come back to this
    deleteNode(data) {
        let n = 0;

        while(this.nodes[n] !== undefined) {
            let leftIndex = n * 2 + 1;
            let rightIndex = n * 2 + 2;
            console.log(this.nodes[n], this.nodes[leftIndex], this.nodes[rightIndex])
            console.log(this.nodes[n] === data)
            if(data > this.nodes[n]) {
                n = rightIndex;
            } else if(data < this.nodes[n]) {
                n = leftIndex;
            // No Branches
            } else if(data === this.nodes[n] && !this.nodes[leftIndex] && !this.nodes[rightIndex]) {
                console.log('made it here1')
                this.nodes[n] = undefined;
            // One branch
            } else if(data === this.nodes[n] && this.nodes[leftIndex] && !this.nodes[rightIndex]) {
                console.log('made it here2')
                this.nodes[n] === this.nodes[leftIndex];
            // One branch
            } else if(data === this.nodes[n] && this.nodes[rightIndex] && !this.nodes[leftIndex]) {
                console.log('made it here3')
                this.nodes[n] = this.nodes[rightIndex];
            } else {
                // Find the successor of the left subtree
                const {successor, successorIndex} = this.findSuccessor(n * 2 + 1);
                // Replace node with successor value
                this.nodes[n] = successor;
                // Delete the successor from the tree
                this.nodes[successorIndex] = undefined;
            }
        }
    }
}

let bst = new BST();

bst.insertNode(10);
bst.insertNode(15);
bst.insertNode(20);
bst.insertNode(25);
bst.insertNode(5);
bst.insertNode(7);

console.log(bst, bst.nodes.length);

console.log('in Order print');
bst.deleteNode(15)
bst.inOrderPrint();

console.log(bst.nodes[3]);