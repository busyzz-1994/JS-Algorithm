/*
 * @Author: busyzz
 * @Date: 2022-03-23 11:46:04
 * @Description:
 */

const arr = [1, 2, 3, 4, 5, 6];

function func(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let result = [];
  let path = [];
  // 这里加入 k 是为了进行剪枝操作，减少递归函数的执行次数
  const dsf = (startIndex, k) => {
    if (path.length === 5) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < arr.length; i++) {
      if (k > arr.length - i) {
        return;
      }
      path.push(arr[i]);
      dsf(i + 1, k - 1);
      path.pop();
    }
  };
  dsf(0, 5);
  return result;
}

console.log(func(arr));
