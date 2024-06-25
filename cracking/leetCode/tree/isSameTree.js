/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // If both nodes are null return true
    if(q === null && p === null) {
        return true;
    }
    // If only one node is null reture false 
    else if(q === null || p === null) {
        return false;
    } 
    // If there are not equal in value, return false
    else if(p.val !== q.val) {
        return false;
    } 
    // Equal and value without any children, return true
    else if(p.val === q.val && !p.left && !p.right && !q.left && !q.right) {
        return true;
    } else {
        //Recursively call the left and right subtrees of each tree
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};