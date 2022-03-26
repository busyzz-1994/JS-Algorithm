/*
 * @Author: busyzz
 * @Date: 2022-03-26 15:16:39
 * @Description:
 */
// 将每个节点都 push 进 path
const arr = [1, 2, 3];

function func(arr) {
  let len = arr.length;
  let result = [];
  let path = [];
  const dfs = (startIndex) => {
    result.push([...path]);
    for (let i = startIndex; i < len; i++) {
      let item = arr[i];
      path.push(item);
      dfs(i + 1);
      path.pop();
    }
  };
  dfs(0);
  return result;
}

console.log(func(arr));
