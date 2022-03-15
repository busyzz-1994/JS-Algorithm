/*
 * @Author: busyzz
 * @Date: 2022-03-10 23:39:15
 * @Description:
 * 在一个数组中找到两数之和为 target 的索引
 */

const arr = [1, 2, 3, 4, 5];
const target = 7;

function func(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const restValue = target - arr[i];
    if (map.has(arr[i])) {
      return [map.get(arr[i]), i];
    } else {
      map.set(restValue, i);
    }
  }
  return [];
}

// console.log(func(arr, target));

module.exports = func;
