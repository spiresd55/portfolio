//https://dev.to/niemet0502/how-to-implement-a-graph-adjacency-list-and-matrix-in-javascript-2i6g

/* 
    Adjancency List 
    A way to represent a graph using a linked list,
    each node will be linked to every node adjanct to them.
*/

class Graph {
    constructor() {
        this.vertices= new Map();
    }

    addNode(node) {
        //If unweighted use a set here
        this.vertices.set(node, new Map());
    }

    // Bi Directional - Undirected Graph 
    addUndirectedEdge(node1, node2, weight = 0) {
        this.vertices.get(node1).set(node2, weight);
        this.vertices.get(node2).set(node1, weight);
    }

    addDirectedEdge(node1, node2, weight = 0) {
        this.vertices.get(node1).set(node2, weight);
    }

    getNeighbors(node) {
        return this.vertices.get(node);
    }

    hasEdge(node1, node2) {
        return this.vertices.get(node1).has(node2); 
    }
}

module.exports = Graph;