/*
 * @Author: busyzz
 * @Date: 2022-03-20 11:52:21
 * @Description:
 */
const tree = require('../utils/tree');

function getLatestParent(node, p, q) {
  if (node === null || p === node.key || q === node.key) {
    return node;
  }
  let left = getLatestParent(node.left, p, q);
  let right = getLatestParent(node.right, p, q);
  if (left === null) return right;
  if (right === null) return left;
  return node;
}
function getPath(parent, childKey, number) {
  if (parent === null) {
    return 0;
  }
  if (parent.key === childKey) {
    return number;
  }
  let left = getPath(parent.left, childKey, number + 1);
  let right = getPath(parent.right, childKey, number + 1);
  return Math.max(left, right);
}
function getMinPath(node, p, q) {
  let latestParent = getLatestParent(node, p, q);
  let num_p = getPath(latestParent, p, 0);
  let num_q = getPath(latestParent, q, 0);
  return num_p + num_q;
}

console.log(getMinPath(tree.root, 2, 4));
