/*
 * @Author: busyzz
 * @Date: 2022-03-10 22:30:57
 * @Description: O(nlogn)
 */
const { createRandomList } = require('./util');

const list = createRandomList(10);

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midLength = Math.floor(arr.length / 2);
  const left = arr.slice(0, midLength);
  const right = arr.slice(midLength);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(list));
