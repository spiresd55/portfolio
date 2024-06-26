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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false;
    }

    return helper(root, targetSum);
};

const helper = (root, targetSum, currentSum = 0) => {
    if(!root) {
        return false;
    }

    let newSum = currentSum + root.val; 
        console.log('currentSum', currentSum, newSum, targetSum, newSum === targetSum)

    if(newSum === targetSum && !root.left && !root.right) {
        return true;
    }

    if(newSum !== targetSum && !root.left && !root.right) {
        return false;
    }

    return helper(root.left,targetSum, newSum) || helper(root.right, targetSum,newSum);
}