/*
 * @Author: busyzz
 * @Date: 2022-03-26 10:32:50
 * @Description:
 */
// 条件一：设置startIndex ， 截取 substr(startIndex,j-startIndex+1)
// 条件二：发现不是回文就跳过，因为这个题是要保证每个都是回文
// 条件三: 结束条件为 i>=len return 然后 result.push([...path])
const str = 'aaa';

function func(str) {
  if (!str) {
    return [];
  }
  let result = [];
  let path = [];
  let len = str.length;
  const isReverse = (s, low, high) => {
    while (low < high) {
      if (s[low] !== s[high]) {
        return false;
      }
      low++;
      high--;
    }
    return true;
  };
  const dfs = (startIndex) => {
    if (startIndex >= len) {
      result.push([...path]);
      return;
    }
    for (let j = startIndex; j < len; j++) {
      if (!isReverse(str, startIndex, j)) continue;
      let substr = str.substr(startIndex, j - startIndex + 1);
      path.push(substr);
      dfs(j + 1);
      path.pop();
    }
  };
  dfs(0);
  return result;
}

console.log(func(str));
