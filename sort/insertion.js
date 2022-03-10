const { createRandomList } = require('./util');
// 将数组第一个元素看作已经排好序的，然后不断交换位置插入到合适的位置
function insertion(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i - 1;
    // 注意需要把 list[i] 保存起来 因为 list[i] 会发生变化 变成 list[j+1]
    let key = list[i];
    while (j >= 0 && key < list[j]) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = key;
  }
}

const list = createRandomList(5);

console.log(list);
insertion(list);
console.log(list);
