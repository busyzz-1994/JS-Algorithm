/*
 * @Author: busyzz
 * @Date: 2022-03-15 22:32:10
 * @Description: 将栈的顺序翻转 如 1->2->3  3->2->1
 */

const Stack = require('../utils/stack');

const stack = new Stack();

function getLastItem(stack) {
  const result = stack.pop();
  if (stack.isEmpty()) {
    return result;
  }
  const last = getLastItem(stack);
  stack.push(result);
  return last;
}

function reverse(stack) {
  if (stack.isEmpty()) {
    return;
  }
  const last = getLastItem(stack);
  reverse(stack);
  stack.push(last);
}
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.toString();
reverse(stack);
stack.toString();
