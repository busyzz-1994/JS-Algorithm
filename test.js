const Stack = require('../数据结构/stack.js');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

function func(stack) {
  const process = (stack) => {
    const result = stack.pop();
    if (stack.isEmpty()) {
      return result;
    } else {
      const last = process(stack);
      stack.push(result);
      return last;
    }
  };
  const reverse = (stack) => {
    if (stack.isEmpty()) {
      return;
    }
    const i = process(stack);
    reverse(stack);
    stack.push(i);
  };
  reverse(stack);
}
stack.toString();
func(stack);
stack.toString();
