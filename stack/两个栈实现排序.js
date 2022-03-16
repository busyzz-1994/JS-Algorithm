/*
 * @Author: busyzz
 * @Date: 2022-03-15 22:59:21
 * @Description: 通过两个栈实现排序，不申请额外的数据结构
 */

const Stack = require('../utils/stack');

const stack_1 = new Stack();
const stack_2 = new Stack();

stack_1.push(2);
stack_1.push(5);
stack_1.push(6);
stack_1.push(5);
stack_1.push(1);

function sort(stack_1, stack_2) {
  while (!stack_1.isEmpty()) {
    const a = stack_1.pop();
    while (!stack_2.isEmpty() && a < stack_2.peek()) {
      stack_1.push(stack_2.pop());
    }
    stack_2.push(a);
  }
  while (!stack_2.isEmpty()) {
    stack_1.push(stack_2.pop());
  }
}

sort(stack_1, stack_2);
stack_1.toString();
