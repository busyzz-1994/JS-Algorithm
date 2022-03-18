/*
 * @Author: busyzz
 * @Date: 2022-03-16 22:08:09
 * @Description:
 */
const Linked = require('../utils/linked');

const link = new Linked();
link.append(1);
link.append(2);
link.append(3);
link.append(4);
function reverse(link) {
  let currentNode = link.head;
  let prevNode = null;
  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = next;
  }
  link.head = prevNode;
}
reverse(link);
link.toString();
