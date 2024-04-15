class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// all left descendants  <= n < all right descendants
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

    findSuccessor(node) {
        if(node.right === null) {
            return node;
        }

        return this.findSuccessor(node.right);
    }

    deleteNode(data, node = this.root) {
        if(node === null) {
            return node;
        }


        let nodeValue = node.data;

        if(data > nodeValue) {
            node.right = this.deleteNode(data, node.right);
            return node;
        } else if (data < nodeValue) {
            node.left = this.deleteNode(data, node.left);
            return node;
        }

        // Case 1: No Children
        if(node.left === null && node.right === null) {
            return null; 
        }

        // Case 2: One Child
        if(node.right === null) {
            return node.left;
        } else if(node.left === null) {
            return node.right;
        }

        // Case 3: Both Children
        let maxNodeOfLeftSubtree = this.findSuccessor(node.left);
        node.data = maxNodeOfLeftSubtree.data;
        // Delete successor node
        this.deleteNode(maxNodeOfLeftSubtree.data, node.left);
        
        return node;
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

    // TODO: Implement Level Order 
}

let bst = new BinarySearchTree(); //A node is called a leaf if it has no children

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


console.log('Deleting Node');
bst.printInOrder();

bst.deleteNode(1);
bst.deleteNode(5);

console.log('After Deletion');
bst.printInOrder();
