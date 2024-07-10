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
 * @return {number[][]}
 */
var levelOrder = function(root, output) {
    if(!root) {
        return [];
    }
    
    return createLevelOrderOutput([root])
};

const createLevelOrderOutput = (nodes, level = 0, output = []) => {
    let newNodes = [];

    if(!nodes.length) {
        return output;
    }

    output[level] = [];
    for(let i = 0; i < nodes.length; i++) {
        output[level].push(nodes[i].val);

        if(nodes[i].left) {
            newNodes.push(nodes[i].left)
        }

        if(nodes[i].right){
            newNodes.push(nodes[i].right)
        }
    }

    return createLevelOrderOutput(newNodes, level + 1, output);
}