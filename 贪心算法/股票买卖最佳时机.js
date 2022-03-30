/*
 * @Author: busyzz
 * @Date: 2022-03-29 10:04:01
 * @Description:
 */

// 在于计算每天的正利润之和，第一天不算因为第一天没有利润
// arr = [7,1,5,3,6,4]
// 利润 = [-6,4,-2,3,-2] 对应的代码就是一旦后面数大于前面就累加
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function func(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    result += Math.max(arr[i] - arr[i - 1], 0);
  }
  return result;
}

console.log(func(arr));
