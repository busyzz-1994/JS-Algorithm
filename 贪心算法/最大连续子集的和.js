/*
 * @Author: busyzz
 * @Date: 2022-03-28 21:32:52
 * @Description:
 */

// 拿一个 count来累加，一旦小于0 将count重置
// result 取 count 的最大值
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function func(arr) {
  let result = -Infinity;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    if (count > result) {
      result = count;
    }
    if (count < 0) {
      count = 0;
    }
  }
  return result;
}

console.log(func(arr));
