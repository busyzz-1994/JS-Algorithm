/*
 * @Author: busyzz
 * @Date: 2022-03-21 10:26:50
 * @Description:
 */
// 通过索引值来对应上顶点
// 在这里是为 1 开始 所以在创建顶点的时候创建 N+1 一个，这样顶点里面的索引刚好对应上，顶点存在 out in 两属性
const trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];

function find(trust, N) {
  const graph = Array.from({ length: N + 1 }, () => ({ out: 0, in: 0 }));
  trust.forEach(([a, b]) => {
    graph[a].out++;
    graph[b].in++;
  });
  return graph.findIndex((node, index) => {
    return index !== 0 && node.in === N - 1 && node.out === 0;
  });
}
console.log(find(trust, 4));
