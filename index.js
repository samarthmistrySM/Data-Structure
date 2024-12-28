const graph = require('./Graph');

const g = new graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('D', 'A');
g.display()
// g.removeEdges('D');
g.removVertex('D')
console.log();

g.display()