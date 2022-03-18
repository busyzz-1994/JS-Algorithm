/*
 * @Author: busyzz
 * @Date: 2022-03-17 23:15:30
 * @Description:
 */
const Linked = require('../utils/linked');
// const Stack = require('./utils/stack');

const link_1 = new Linked();
const link_2 = new Linked();

link_1.append(1);
link_1.append(3);
link_1.append(5);

link_2.append(2);
link_2.append(4);
link_2.append(6);

function merge(link_1, link_2) {
  const head_1 = link_1.head;
  const head_2 = link_2.head;
  if (head_1 === null || head_2 === null) {
    return head_1 === null ? head_2 : head_1;
  }
  const head = head_1.value < head_2.value ? head_1 : head_2;
  let current_1 = head === head_1 ? head_1 : head_2;
  let current_2 = head === head_1 ? head_2 : head_1;
  let prevNode = null;
  while (current_1 && current_2) {
    if (current_1.value < current_2.value) {
      prevNode = current_1;
      current_1 = current_1.next;
    } else {
      let next = current_2.next;
      prevNode.next = current_2;
      current_2.next = current_1;
      current_2 = next;
    }
  }
  prevNode.next = current_1 === null ? current_2 : current_1;
}

merge(link_1, link_2);
link_1.toString();
