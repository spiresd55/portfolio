class TreeNode {
    constructor(nodes, data) {
        this.nodes = nodes;
        this.data = data;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    print() {
        let nodes = [this.root];
        while(nodes.length) {
            let node = nodes.unshift();
            console.log(node.data);
            nodes = nodes.concat(node.nodes);
        }
    }
}


let node1 =  new TreeNode([], 1);
let node2 =  new TreeNode([], 2)
let node3 =  new TreeNode([ new TreeNode([], 4)], 3)
let rootNode = new TreeNode([node1, node2, node3], 0);

let tree = new Tree(rootNode);
tree.print();

