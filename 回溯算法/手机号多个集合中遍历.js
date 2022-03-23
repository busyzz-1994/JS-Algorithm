/*
 * @Author: busyzz
 * @Date: 2022-03-23 21:08:09
 * @Description:
 */

const str = '2356';
function func(str) {
  const k = str.length;
  const map = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  if (!k) return [];
  if (k === 1) return map[str];
  let result = [];
  let path = [];
  const dfs = (startIndex) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let item of map[str[startIndex]]) {
      path.push(item);
      dfs(startIndex + 1);
      path.pop();
    }
  };
  dfs(0);
  return result;
}

console.log(func(str));
