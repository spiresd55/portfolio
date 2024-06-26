/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) {
        return 0;
    }
    
    let sequences = [];
    helper(root, '', sequences);

    return sequences.reduce((prev, current) => {
        return prev + parseInt(current);
    }, 0)
};

const helper = (root, currentSequence = '', sequences = []) => {
    if(!root) {
        return sequences;
    }

    currentSequence += `${root.val}`;

    if(!root.left && !root.right) {
        sequences.push(currentSequence);
    }

    if(root.left) {
        helper(root.left, currentSequence, sequences);
    }

    if(root.right) {
        helper(root.right, currentSequence, sequences);
    }
}