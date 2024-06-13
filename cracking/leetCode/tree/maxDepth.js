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

function TreeNode(val, left = null, right = null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right) 
}

let tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, 
    new TreeNode(15),
    new TreeNode(7),
),
 
)

const helper = (children, level) => {
    let newChildren = [];

    if(!children.length) {
        return level;
    }

    for(let i = 0 ; i < children.length; i++) {
        let child = children[i];

        if(child.left) {
            newChildren.push(child.left);
        }

        if(child.right) {
            newChildren.push(child.right);
        }
    }

   return helper(newChildren, level + 1)
}

const maxDepth = (root) => {
    if(!root) {
        return 0;
    }
    
    let level = helper([root], 0)
    return level;
};

console.log(maxDepth(tree))