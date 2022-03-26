/*
 * @Author: busyzz
 * @Date: 2022-03-26 16:06:59
 * @Description:
 */
// 关键在于 使用一个 used 数组存储使用过的数字
//  if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1])
//  if (!used[i])
const arr = [1, 1, 1];

function func(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let len = arr.length;
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
        used[i] = true;
        path.push(arr[i]);
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
