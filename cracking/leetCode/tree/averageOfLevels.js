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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    if(!root) {
        return [];
    }

    return averageOfLevelsHelper([root])
};

const averageOfLevelsHelper = (nodes, result= []) => {
    if(!nodes.length) {
        return result;
    }

    let newNodes = [];

    result.push(nodes.reduce((prev, current, index, arr) => {
        prev += current.val;

        if(index === arr.length - 1) {
            prev /= arr.length;
        }

        return prev;
    }, 0))

    for(let i = 0; i < nodes.length; i++) {
        let node = nodes[i];

        if(node.left) {
            newNodes.push(node.left);
        }
        
        if(node.right) {
            newNodes.push(node.right);
        }
    }

    return averageOfLevelsHelper(newNodes, result);
}

//BFS or level search
const averageOfLevelsIterative = function(root) {
    if(!root) {
        return [];
    }

    let q = [root];
    let result = [];
    while(q.length > 0) {
        let currentSize = q.length;
        result.push(q.reduce((prev, current, index, arr) => {
            prev += current.val;
    
            if(index === arr.length - 1) {
                prev /= arr.length;
            }
    
            return prev;
        }, 0))

        while(currentSize > 0) {
            let node = q.shift();

            if(node.right) {
                q.push(node.right)
            }

            if(node.left) {
                q.push(node.left)
            }

            currentSize--;
        }
    }

    return result;
};