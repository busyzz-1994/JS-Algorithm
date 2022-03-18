/*
 * @Author: busyzz
 * @Date: 2022-03-17 17:04:19
 * @Description:
 */
const Linked = require('../utils/linked');
const Stack = require('../utils/stack');

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
link.append(5);
link.append(5);
link.append(7);
link.append(8);

function remove(link, num) {
  if (link.head === null) return link;
  let firstNode = new Node();
  firstNode.next = link.head;
  let prevNode = firstNode;
  let currentNode = link.head;
  while (currentNode) {
    if (currentNode.value === num) {
      prevNode.next = currentNode.next;
    } else {
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  link.head = firstNode.next;
  return link;
}
remove(link, 1);
link.toString();
