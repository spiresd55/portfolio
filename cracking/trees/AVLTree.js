// Height Balanced Tree - Is a tree in which the left and right subtrees of every node,
// differ in height, by at most one

// Height: Is the longest path from our root node, to its farthest node
// Singe Node Height: 0
// Empty Tree -1

// AVL TREES Determine if a tree is balanced by using something called a balance factor
// Balance Factor = Height(left) - Height(right)
// Every node within the tree, must have a balance factor within the following set {-1, 0, 1}
// | Height(left) - Height(right) | <= 1

// AVL TREE ROTATIONS (7:18)

// Case 1: Left Left case
/* Insert 75, 50, 25
    Solve this with a right rotation ( 50 root, left 25, right 75)
*/

/* Case 2: Right Right Case - Insert 25, 50, 75
    Solve this with a left rotation (50 root, left 25, right 75)
*/

/* Case 3: Left Right Case - Insert 75, 50, 65
    Perform a left rotation, followed by a right rotation (65 root, 75 right, 50 left)
*/

/* Case 4: Right Left Case - Insert 25, 50, 35
    Perform a right rotation, followed by a left rotation (25 left, 35 root, 50 right)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
        this.height = 1; 
    }
}
// https://www.youtube.com/watch?v=jAB7itHeLDc
class AVLTree { // Fix the issues of skewed trees. This happens if you insert items in ascending or descending order
    constructor() {
        this.root = null;
    }

    insertNodeHelper(node, data) {
        //console.log(node)
        if (node == null)  {
            console.log('new node')
            return new Node(data);
        }
        if(data > node.data) {
            node.right = this.insertNodeHelper(node.right, data);
        } else if(data <= node.data) {
            node.left = this.insertNodeHelper(node.left, data);
        }

        // Update the height of ancestor node
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        // Get the balance of the node
        let balance = this.getBalance(node);

        console.log('made it here', node.height, balance, data, node.data)

        //Case 1: Left Left
        if(balance > 1 && data < node.left.data) {
            console.log('left left')
            return this.rightRotate(node);
        }

        //Case 2: Right Right
        if(balance < -1 && data > node.right.data) {
            console.log('right right')
            return this.leftRotate(node);
        }

        // Case 3: Left Right
        if(balance > 1 && data > node.left.data) {
            console.log('left right')
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Case 4: Right Left
        if(balance < -1 && data < node.right.data) {
            console.log('right left')
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node)
        }

        return node;
    }

    insertNode(data) {
       if(!this.root) {
            this.root = new Node(data);
            return;
        }

        this.root = this.insertNodeHelper(this.root, data);
    }

    getHeight(node) {
        return node === null ? 0: node.height;
    }

    getBalance(node) {
        if(node === null) return 0;

        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    leftRotate(node) {
        let rightNode = node.right;
        let rightNodeLeftChild = rightNode.left;

        rightNode.left = node;
        node.right = rightNodeLeftChild;

        // Recalculate Height
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        rightNode.height = Math.max(this.getHeight(rightNode.left), this.getHeight(rightNode.right)) + 1;
        return rightNode;
    }

    rightRotate(node) {
        let leftNode = node.left;
        let leftNodeRightChild = leftNode.right;

        leftNode.right = node;
        node.left = leftNodeRightChild;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        leftNode.height = Math.max(this.getHeight(leftNode.left), this.getHeight(leftNode.right)) + 1;

        //this.root = leftNode
        return leftNode;
    }

    levelOrderPrint() {
       let nodes = [[this.root]];

       while(nodes.length) {
            let levelNodes = nodes.pop();

            let newNodes = [];
            let level = '';
            for (let i = 0; i < levelNodes.length; i++) {
                let n = levelNodes[i];
                //console.log(nodes[i].data);
                level += `${n.data} `;
                
                if(n.left) {
                    newNodes.push(n.left);
                }

                if(n.right) {
                    newNodes.push(n.right);
                }
            }
            console.log(level);

            if(newNodes.length) {
                nodes.push(newNodes)
            }
       }
    }

    findSuccessor(node) {
        if(node.right === null) {
            return node;
        }
        return this.findSuccessor(node.right);
    }

    deleteNode(value, node = this.root) {
        if (node === null) {
            return node;
        }

        let nodeValue = node.data;

        if(value > nodeValue) {
            node.right = this.deleteNode(value, node.right);
            return node;
        } else if (value < nodeValue) {
            node.left = this.deleteNode(value, node.left);
            return node;
        }

        // Node found

        // Case 1: Leaf Node
        if( node.left === null && node.right === null) {
            return null;
        }

        // Case 2: One Child
        if(node.left && node.right === null) {
            return node.left;
        }

        if(node.right && node.left === null) {
            return node.right;
        }

        // Case 3: Both Children
        
        // Find the successor of the left sub tree
        let successor = this.findSuccessor(node.left);
        this.deleteNode(node.left.data, node.left); // Delete the successor node
        node.data = successor.data;
        return node;
    }
}

let avl = new AVLTree();

//left left 
//avl.insertNode(3);
//avl.insertNode(2);
//avl.insertNode(1);

// right right
//avl.insertNode(1);
//avl.insertNode(2);
//avl.insertNode(3);

//left right
//avl.insertNode(10);
//avl.insertNode(5);
//avl.insertNode(6);
//avl.insertNode(4);

//right left
avl.insertNode(10);
avl.insertNode(20);
avl.insertNode(15);
avl.insertNode(25);
avl.insertNode(30);
avl.insertNode(4);
avl.insertNode(2);
avl.insertNode(31);

//avl.insertNode(4);
//avl.insertNode(0);

avl.deleteNode(25)


console.log(avl)
avl.levelOrderPrint();