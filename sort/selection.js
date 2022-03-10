const { createRandomList } = require('./util');
function selection(list) {
  let minIndex = 0;
  let len = list.length;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = minIndex + 1; j < len; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    let temp = list[minIndex];
    list[minIndex] = list[i];
    list[i] = temp;
  }
}
const list = createRandomList(5);
console.log(list);
selection(list);
console.log(list);
