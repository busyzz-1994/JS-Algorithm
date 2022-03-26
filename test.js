/*
 * @Author: busyzz
 * @Date: 2022-03-12 21:36:15
 * @Description:
 */
const Linked = require('./utils/linked');
const Stack = require('./utils/stack');
const tree = require('./utils/tree');

const arr = [1, 2, 3];

function func(arr) {
  const len = arr.length;
  if (arr.length <= 1) {
    return arr;
  }
  let result = [];
  let path = [];
  let used = [];
  const dfs = () => {
    if (path.length === len) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        path.push(arr[i]);
        used[i] = true;
        dfs();
        used[i] = false;
        path.pop();
      }
    }
  };
  dfs();
  return result;
}

console.log(func(arr));
