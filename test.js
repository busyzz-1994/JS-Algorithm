/*
 * @Author: busyzz
 * @Date: 2022-03-12 21:36:15
 * @Description:
 */
const Linked = require('./utils/linked');
const Stack = require('./utils/stack');
const tree = require('./utils/tree');

const candidates = [10, 1, 2, 7, 6, 1, 5];

function func(candidates, target) {
  if (candidates.length === 0) {
    return [];
  }
  if (candidates.length === 1) {
    return candidates[0] === target ? candidates : [];
  }
  candidates.sort((a, b) => a - b);
  let result = [];
  let path = [];
  const dfs = (startIndex, total) => {
    if (total >= target) {
      if (total === target) {
        result.push([...path]);
      }
      return;
    }
    let flag = -1;
    for (let i = startIndex; i < candidates.length; i++) {
      n = candidates[i];
      if (flag === n) {
        continue;
      }
      path.push(n);
      flag = n;
      dfs(i + 1, total + n);
      path.pop();
    }
  };
  dfs(0, 0);
  return result;
}

// func(candidates, 8);

console.log(func(candidates, 8));
