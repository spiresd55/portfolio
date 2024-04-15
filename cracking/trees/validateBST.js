class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}


// Not entirely correct (doesnt consider out of place entires)
const helper = (root) => {
    let data = root.data;
    if (root.left) {
        if(data < root.left.data) {
            return false;
        }

        return helper(root.left);
    }

    if (root.right) {
        if(data > root.right.data) {
            return false;
        }
        return helper(root.right);
    }

    return true;
}

//O(n) time  O(n) space (Due to recursion)
const validateBST = (tree) => {
    if(tree.root === null) {
        return false;
    }

    return helper(tree.root);
}


let invalidTree = new Tree();

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

invalidTree.root = new TreeNode(10);
invalidTree.root.left = node2;
node2.right = node5;
node5.left = node6;

console.log(validateBST(invalidTree));

let validTree = new Tree();

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);

validTree.root = new TreeNode(10);
validTree.root.left = n6;

n6.left = n2;
n2.right = n4;
n2.left = n1;

console.log(validateBST(validTree));
