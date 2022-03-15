/*
 * @Author: busyzz
 * @Date: 2022-03-10 22:51:56
 * @Description: O(nlogn)
 *  随便找一个数为基准，比它小放左边比它大放右边
 */
const { createRandomList } = require('./util');
const list = createRandomList(10);
function quick(list) {
  if (list.length <= 1) {
    return list;
  }
  const first = list.shift();
  const min = [];
  const max = [];
  for (let item of list) {
    if (item <= first) {
      min.push(item);
    } else {
      max.push(item);
    }
  }
  min.push(first);
  return [...quick(min), ...quick(max)];
}
// console.log(quick(list));
