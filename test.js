/*
 * @Author: busyzz
 * @Date: 2022-03-12 21:36:15
 * @Description:
 */
const Linked = require('./utils/linked');
const Stack = require('./utils/stack');
const tree = require('./utils/tree');

// const trust = [[1, 0]];

// console.log(canfinish(trust, 2));

const link = new Linked();

link.append(8);
link.append(5);
link.append(6);
link.append(4);
link.append(7);

function getMiddle(node) {
  let fast = node;
  let low = node;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    low = low.next;
  }
  return low;
}

function sort(node, link) {
  if (!node || !node.next) {
    return node;
  }
  const midNode = getMiddle(node);
  const next = midNode.next;
  midNode.next = null;
  const head = merge(sort(node), sort(next));
  if (link) {
    link.head = head;
  } else {
    return head;
  }
}

function merge(left, right) {
  let headNode = {};
  let currentNode = headNode;
  while (left && right) {
    if (left.value <= right.value) {
      currentNode.next = left;
      left = left.next;
    } else {
      currentNode.next = right;
      right = right.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = left || right;
  return headNode.next;
}
link.toString();
sort(link.head, link);
link.toString();
