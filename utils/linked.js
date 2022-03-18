/*
 * @Author: busyzz
 * @Date: 2022-03-16 19:47:46
 * @Description:
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  append(val) {
    this.insert(val, this.length);
  }
  insert(val, position) {
    if (position < 0 || position > this.length) return;
    const node = new Node(val);
    if (this.head) {
      if (position === 0) {
        const head = this.head;
        this.head = node;
        node.next = head;
      } else {
        let prevNode = null;
        let currentNode = this.head;
        let index = 0;
        while (index < position) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          index++;
        }
        prevNode.next = node;
        node.next = currentNode;
      }
    } else {
      this.head = node;
    }
    this.length++;
  }
  toString() {
    let str = '';
    let currentNode = this.head;
    while (currentNode) {
      str += `${currentNode.value} -`;
      currentNode = currentNode.next;
    }
    console.log(str);
    return str;
  }
}

module.exports = Linked;
