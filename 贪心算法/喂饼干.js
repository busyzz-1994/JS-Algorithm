/*
 * @Author: busyzz
 * @Date: 2022-03-29 22:15:20
 * @Description:
 */

// 孩子
const g = [1, 2, 3];
// 饼干
const s = [1, 1];

function func(g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => a - b);
  let count = 0;
  let index = s.length - 1;
  for (let i = 0; i < g.length; i++) {
    if (index < 0) return count;
    if (s[index] >= g[i]) {
      count++;
      index -= 1;
    }
  }
  return count;
}

console.log(func(g, s));
