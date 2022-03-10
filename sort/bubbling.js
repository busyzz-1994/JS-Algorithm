class List {
  constructor() {
    this.list = new Array(50000).fill('').map((_, index) => index);
  }
}
// 普通的冒泡排序 无优化
function case_1(list) {
  const len = list.length - 1;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len; i++) {
      if (list[i] > list[i + 1]) {
        let mid = list[i];
        list[i] = list[i + 1];
        list[i + 1] = mid;
      }
    }
  }
}
const list_1 = new List().list;
console.time('list_1');
case_1(list_1);
console.timeEnd('list_1');

// 优化 ，记录下最后一次交换的位置，下次遍历到对应位置就结束 (如果已经是排好序的就会非常快)
function case_2(list) {
  let lastIndex = list.length - 1;
  let isChanged = false;
  for (let j = 0; j < lastIndex; j++) {
    isChanged = false;
    for (let i = 0; i < lastIndex; i++) {
      if (list[i] > list[i + 1]) {
        let mid = list[i];
        list[i] = list[i + 1];
        list[i + 1] = mid;
        // 记录下最后一次交换的位置
        lastIndex = i;
        isChanged = true;
      }
    }
    if (!isChanged) break;
  }
}
const list_2 = new List().list;
console.time('list_2');
case_2(list_2);
console.timeEnd('list_2');
