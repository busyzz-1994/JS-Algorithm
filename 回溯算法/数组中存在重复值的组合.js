/*
 * @Author: busyzz
 * @Date: 2022-03-23 22:00:23
 * @Description:
 */

// 当存在相同的值，需要将同一层的相同值 continue 掉 ， 同一层的一个数只能使用一次
// 如何跳过相同值？ 先将数组排序，然后用一个 flag 记录上次的值，如果 flag 与当前的值相同就跳过
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
