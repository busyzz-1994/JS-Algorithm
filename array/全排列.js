/*
 * @Author: busyzz
 * @Date: 2022-03-12 21:36:15
 * @Description:
 */

const arr = [1, 2, 3];

function func(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  let res = [];
  const len = arr.length;
  const process = (left, right) => {
    if (left.length === len) {
      res.push(left.join('-'));
    } else {
      right.forEach((item, index) => {
        let newLeft = [...left, item];
        let newRight = [...right];
        newRight.splice(index, 1);
        process(newLeft, newRight);
      });
    }
  };
  process([], arr);
  return res;
}

console.log(func(arr));
