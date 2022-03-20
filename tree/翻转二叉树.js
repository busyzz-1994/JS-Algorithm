/*
 * @Author: busyzz
 * @Date: 2022-03-20 12:09:51
 * @Description:
 */

const tree = require('../utils/tree');

function reverse(node) {
  if (node === null) {
    return null;
  }
  let left = reverse(node.left);
  let right = reverse(node.right);
  if (left || right) {
    node.left = right;
    node.right = left;
  }
  return node;
}

reverse(node.root);
