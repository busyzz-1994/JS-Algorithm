/*
 * @Author: busyzz
 * @Date: 2022-03-17 10:34:41
 * @Description: 1->2->3 + 8->8->8  变成 1->0->1->1
 */
const Linked = require('../utils/linked');
const Stack = require('../utils/stack');
const link_1 = new Linked();
link_1.append(1);
link_1.append(2);
link_1.append(3);
const link_2 = new Linked();
link_2.append(8);
link_2.append(8);
link_2.append(8);

function add(link_1, link_2) {
  const stack_1 = new Stack();
  const stack_2 = new Stack();
  const stack_3 = new Stack();
  const link_3 = new Linked();
  while (link_1.head) {
    stack_1.push(link_1.head);
    link_1.head = link_1.head.next;
  }
  while (link_2.head) {
    stack_2.push(link_2.head);
    link_2.head = link_2.head.next;
  }
  let prevNum = 0;
  while (!stack_1.isEmpty() || !stack_2.isEmpty()) {
    const node_1 = stack_1.pop();
    const node_2 = stack_2.pop();
    if (node_1 && node_2) {
      const total = node_1.value + node_2.value + prevNum;
      if (total >= 10) {
        prevNum = 1;
      } else {
        prevNum = 0;
      }
      const rest = total % 10;
      stack_3.push(rest);
    } else {
      if (node_1) {
        stack_3.push(node_1.value);
      }
      if (node_2) {
        stack_3.push(node_2.value);
      }
    }
  }
  if (prevNum === 1) {
    stack_3.push(1);
  }
  while (!stack_3.isEmpty()) {
    const val = stack_3.pop();
    link_3.append(val);
  }
  return link_3;
}
const link_3 = add(link_1, link_2);
link_3.toString();
