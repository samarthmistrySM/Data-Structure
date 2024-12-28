class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vexrtex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }

  removeEdges(shouldRemove){
    for (const vertex of Object.keys(this.adjacencyList)) {
        this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
            edge => edge !== shouldRemove
        );
    }
  }

  removVertex(vertex){
    this.removeEdges(vertex)
    delete this.adjacencyList[vertex];
  }

  displayMatrix() {
    let matrix = [];
    const keys = []

    for(let vertex in this.adjacencyList){
        keys.push(vertex)
    }

    matrix = Array.from({ length: keys.length }, () => Array(keys.length).fill(0));
    

    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < this.adjacencyList[keys[i]].length; j++) {
            const vertex2 = keys.indexOf(this.adjacencyList[keys[i]][j])
            matrix[i][vertex2] = 1;
        }        
    }
    
    console.log(matrix.join('\n'));
  }
}

module.exports = Graph;
