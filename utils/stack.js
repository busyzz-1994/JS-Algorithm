/*
 * @Author: busyzz
 * @Date: 2022-03-15 20:27:40
 * @Description:
 */

class Stack {
  constructor() {
    this.values = [];
  }
  push(v) {
    this.values.push(v);
  }
  pop() {
    return this.values.pop();
  }
  peek() {
    return this.values[this.values.length - 1];
  }
  isEmpty() {
    return this.values.length === 0;
  }
  get length() {
    return this.values.length;
  }
  toString() {
    let str = '';
    this.values.forEach((item, index) => {
      if (index === 0) {
        str += '底部 ';
      }
      str += item + '-';
      if (index === this.values.length - 1) {
        str += item + ' 顶部 ';
      }
    });

    console.log(str);
  }
}

module.exports = Stack;
