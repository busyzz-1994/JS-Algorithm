/*
 * @Author: busyzz
 * @Date: 2022-03-22 22:38:10
 * @Description:
 */

const a = [1, 2, 3];

function getPath(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let res = [];
  let used = {};
  const dfs = (path) => {
    if (path.length === arr.length) {
      res.push([...path]);
      return;
    }
    for (let item of arr) {
      if (used[item]) {
        continue;
      }
      used[item] = true;
      path.push(item);
      dfs(path);
      used[item] = false;
      path.pop();
    }
  };
  dfs([]);
  return res;
}

console.log(getPath(a));
