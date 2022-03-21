/*
 * @Author: busyzz
 * @Date: 2022-03-21 15:00:56
 * @Description:
 */
// 输入一课程个数 N 以及约束调教判断是否能学习完
// 需要将 0 课程学习完才能学医 1课程
// 创建一个长度为 N 的入度数组，用于记录每个数的入度
// 创建一个 map 做为 edge 边，a:['b','c'] 表示有向的边 a->b a->c 不能为 c->a
// 通过图的广度优先遍历，先读取入度为 0 的课程，再获取 a 的边 遍历的时候 入度 -1 如果为 0 直接添加进队列
const trust = [[1, 0]];
function canFinish(numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    return true;
  }
  const inDegree = new Array(numCourses).fill(0);
  const map = new Map();
  for (let i of prerequisites) {
    inDegree[i[0]]++;
    if (!map.has(i[1])) {
      map.set(i[1], [i[0]]);
    } else {
      let edge = map.get(i[1]);
      edge.push(i[0]);
      map.set(i[1], edge);
    }
  }
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    numCourses--;
    const v = queue.shift();
    if (map.has(v)) {
      const edge = map.get(v);
      for (let e of edge) {
        inDegree[e]--;
        if (inDegree[e] === 0) {
          queue.push(e);
        }
      }
    }
  }
  return numCourses === 0;
}

console.log(canFinish(2, trust));
