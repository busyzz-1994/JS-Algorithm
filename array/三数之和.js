/*
 * @Author: busyzz
 * @Date: 2022-03-10 23:46:42
 * @Description:
 * 在一个数组中找到三数之和为 target 的索引
 */
const arr = [1, 2, 3, 4, 5];
const target = 7;

// 两数
function func(arr, target, parentIndex) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const restValue = target - arr[i];
    if (map.has(arr[i])) {
      const result = [map.get(arr[i]), i];
      if (result.includes(parentIndex)) {
        continue;
      }
      return result;
    } else {
      map.set(restValue, i);
    }
  }
  return [];
}
function func3(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const restValue = target - arr[i];
    const indexArr = func(arr, restValue, i);
    if (indexArr.length) {
      return [...indexArr, i];
    }
  }
}

console.log(func3(arr, target));
