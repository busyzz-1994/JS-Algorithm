/*
 * @Author: busyzz
 * @Date: 2022-03-20 10:01:36
 * @Description:
 */
const tree = require('../utils/tree');

function isBalance(node) {
  return balance(node) !== -1;
}
function balance(node) {
  if (node === null) {
    return 0;
  }
  const left = balance(node.left);
  const right = balance(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > -1) {
    return -1;
  }
  return 1 + Math.max(left, right);
}

console.log(isBalance(tree.root));
