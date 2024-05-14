const Graph = require("./Graph");

let graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addNode('G');

graph.addUndirectedEdge('A', 'B');

graph.addDirectedEdge('B', 'E');

console.log(graph.vertices);