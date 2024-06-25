/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) {
        return [];
    }

    let rightNodes = rightSideViewHelper([root]);
    return rightNodes;
};

const rightSideViewHelper = (nodes, rightNodes = []) => {
    if(!nodes.length) {
        return rightNodes;
    }

    rightNodes.push(nodes[nodes.length - 1].val);

    let newNodes = [];

    for(let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if(node.left) {
            newNodes.push(node.left)
        }
        if(node.right) {
            newNodes.push(node.right)
        }
    }

    return rightSideViewHelper(newNodes, rightNodes);
}

//BFS uses a queue
const rightSideViewIterative = (root) => {
    if(!root) {
        return [];
    }
    let result = [];
    let q = [root];

    while(q.length > 0) {
        let currentSize = q.length;
        result.push(q[0].val);
  
        while(currentSize > 0) {
            let node = q.shift();

            if(node.right) {
                q.push(node.right);
            }

            if(node.left) {
                q.push(node.left)
            }

            currentSize--;
        }
    }

    return result;
}