/*
 * @Author: busyzz
 * @Date: 2022-03-29 15:36:13
 * @Description:
 */

const arr = [2, -3, -1, 5, -4];
// 取绝对值从大到小排序
function func(arr, K) {
  arr.sort((a, b) => Math.abs(b) - Math.abs(a));
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] < 0 && K > 0) {
      arr[i] = -arr[i];
      K--;
    }
  }
  while (K > 0) {
    arr[len - 1] = -arr[len - 1];
    K--;
  }
  return arr.reduce((prev, curren) => prev + curren, 0);
}

console.log(func(arr, 2));
