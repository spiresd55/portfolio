/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root, minDiff = Number.POSITIVE_INFINITY) {
    if(!root) {
        return minDiff;
    }

    if(root.left) {
        minDiff = Math.min(minDiff, Math.abs(root.val - root.left.val))
    }

    if(root.right) {
        minDiff = Math.min(minDiff, Math.abs(root.val - root.right.val))
    }

    return Math.min(getMinimumDifference(root.left, minDiff), getMinimumDifference(root.right, minDiff));
};

// The real solution
var getMinimumDifference2 = function(root) {
    let minDiff = Number.POSITIVE_INFINITY;
 
    if(!root) {
        return minDiff;
    }

    let nodes = [];
    //In Order (Sort the BST)
    inOrder(root, nodes)

    //Find difference between adjacent values (This can be solved in the inorder function as well)
    for(let i = 0; i < nodes.length - 1; i++) {
        minDiff = Math.min(minDiff, Math.abs(nodes[i] - nodes[i + 1]))
    }

    return minDiff;
};

const inOrder = (node, nodes = []) => {
    if(node === null) {
        return nodes;
    }
    if(node.left) {
        inOrder(node.left, nodes);
    }
    nodes.push(node.val);
    if(node.right) {
        inOrder(node.right, nodes)
    }
}