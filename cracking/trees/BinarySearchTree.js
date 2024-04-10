class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNodeHelper(node, data) {
        if(data > node.data && node.right === null) {
            node.right = new TreeNode(data);
            return;
        } else if(data <= node.data && node.left === null) {
            node.left = new TreeNode(data);
            return;
        } else if(data > node.data && node.right) {
            return this.insertNodeHelper(node.right, data);
        } else {
            return this.insertNodeHelper(node.left, data);
        }
    }

    insertNode(data) {
        if(!this.root) {
            this.root = new TreeNode(data);
            return;
        }

        this.insertNodeHelper(this.root, data);
    }

    printInOrder(node = this.root) {
        //Prints the tree in order
        if(node === null) {
            return;
        }

        this.printInOrder(node.left);
        console.log(node.data);
        this.printInOrder(node.right);
    }

    printPostOrder(node = this.root) {
        // Left subtree traversed
        // Right subtree traversed 
        // root node 
        if(node === null) {
            return;
        }

        this.printPostOrder(node.left);
        this.printPostOrder(node.right);
        console.log(node.data);
    }

    printPreOrder(node = this.root) {
        // The root node is visited first
        // Then the left subtree is traversed
        // Then the right subtree is traversed
        if(node === null) {
            return;
        }

        console.log(node.data);
        this.printPreOrder(node.left);
        this.printPreOrder(node.right);
    }
}

let bst = new BinarySearchTree();

bst.insertNode(10);
bst.insertNode(3);
bst.insertNode(4);
bst.insertNode(5);
bst.insertNode(1);
bst.insertNode(0);
bst.insertNode(20);

console.log('In Order');
bst.printInOrder();

console.log('Post Order');
bst.printPostOrder();

console.log('Pre Order');
bst.printPreOrder();