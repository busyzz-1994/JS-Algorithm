/**
 * 图 由 顶点(vertex) 和边(edge) 组成
 */

class Graph {
  vertexs = [];
  edge = new Map();
  color = new Map();
  addVertex(v) {
    if (!this.vertexs.includes(v)) {
      this.vertexs.push(v);
      this.edge.set(v, []);
    }
  }
  addEdge(v1, v2) {
    if (this.vertexs.includes(v1) && this.vertexs.includes(v2)) {
      this.edge.get(v1).push(v2);
      this.edge.get(v2).push(v1);
    }
  }
  toString() {
    let str = '';
    for (let v of this.vertexs) {
      let edges = this.edge.get(v);
      str += `${v}: `;
      for (let e of edges) {
        str += `${e}`;
      }
      str += '\n';
    }
    return str;
  }
  initalColor() {
    for (let v of this.vertexs) {
      this.color.set(v, 'white');
    }
  }
  // 广度优先遍历 利用队列的特点遍历
  bfs(v, handler) {
    this.initalColor();
    let queue = [v];
    while (queue.length) {
      let firstNode = queue.shift();
      if (this.color.get(firstNode) === 'white') {
        this.color.set(firstNode, 'black');
      } else {
        continue;
      }
      handler(firstNode);
      let nodeList = this.edge.get(firstNode);
      for (let v of nodeList) {
        queue.push(v);
      }
    }
  }
  // 深度优先使用递归
  dfs(v, handler) {
    this.initalColor();
    this.dfsVertex(v, handler);
  }
  dfsVertex(v, handler) {
    if (this.color.get(v) === 'white') {
      this.color.set(v, 'black');
      handler(v);
      for (let item of this.edge.get(v)) {
        this.dfsVertex(item, handler);
      }
    }
  }
}

const graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addEdge('a', 'b');
graph.addEdge('a', 'd');
graph.addEdge('b', 'c');
console.log(graph.toString());
graph.bfs('a', (v) => {
  console.log(v, 'v----');
});
graph.dfs('a', (v) => {
  console.log(v, 'v----');
});
