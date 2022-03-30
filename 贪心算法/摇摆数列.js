/*
 * @Author: busyzz
 * @Date: 2022-03-30 10:23:06
 * @Description:
 */

// 取峰值 注意相等的地方
const arr = [1, 7, 7, 7, 4, 9, 2, 5];

function func(arr) {
  if (arr.length <= 1) {
    return true;
  }
  let result = [arr[0]];
  let deraction = null;
  let len = arr.length;
  const getDect = (a, b) => {
    let res = null;
    if (a > b) {
      res = 1;
    } else if (a < b) {
      res = -1;
    } else {
      res = 0;
    }
    return res;
  };
  for (let i = 1; i < arr.length; i++) {
    let der = getDect(arr[i], arr[i - 1]);
    if (deraction !== null && der !== 0 && deraction !== der) {
      result.push(arr[i - 1]);
    }
    deraction = der;
  }
  if (deraction !== 0) {
    result.push(arr[len - 1]);
  }
  return result.length;
}

console.log(func(arr));
