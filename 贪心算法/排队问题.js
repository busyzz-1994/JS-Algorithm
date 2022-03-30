/*
 * @Author: busyzz
 * @Date: 2022-03-29 17:42:24
 * @Description:
 * @see https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 */
// 存在两个变量的问题,可以先对一个变量进行排序，剩下的进行插入法，在这里先对身高进行排序

const people = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 2],
  [5, 0],
  [6, 1],
];

function func(people) {
  people.sort((a, b) => {
    const diff = b[0] - a[0];
    if (diff === 0) {
      return a[1] - b[1];
    } else {
      return diff;
    }
  });
  let result = [];
  while (people.length > 0) {
    let first = people.shift();
    if (result.length === 0) {
      result.push(first);
    } else {
      let count = first[1];
      result.splice(count, 0, first);
    }
  }
  return result;
}
