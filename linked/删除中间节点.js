/*
 * @Author: busyzz
 * @Date: 2022-03-16 21:23:21
 * @Description:
 */
const Linked = require('../utils/linked');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const link = new Linked();
link.append(1);
link.append(2);
link.append(3);
link.append(4);
// link.append(5);

function remove(link) {
  const node = new Node();
  node.next = link.head;
  link.head = node;
  let fast = node;
  let low = node;
  let prevNode = null;
  while (fast && fast.next) {
    prevNode = low;
    fast = fast.next.next;
    low = low.next;
  }
  prevNode.next = low.next;
  link.head = link.head.next;
}

remove(link);
link.toString();
