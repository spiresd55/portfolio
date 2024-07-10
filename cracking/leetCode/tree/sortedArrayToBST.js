/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let tree = helper(nums, 0, nums.length - 1)
    return tree;
};

const helper = (nums, start, end) => {
    if(start > end) {
        return null;
    }

    let mid = Math.floor((end + start) / 2);

    let root = new TreeNode(nums[mid], null, null);

    root.left = helper(nums, start, mid - 1);
    root.right = helper(nums, mid + 1, end);

    return root;
}

const insert = (node, value) => {
   if(!node) {
        return new TreeNode(value, null, null)
   } 
    if(node.val >= value) {
        node.left = insert(node.left, value);
    } else if(node.val < value){
       node.right = insert(node.right, value);
    }

    return node
}