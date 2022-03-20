/*
 * @Author: busyzz
 * @Date: 2022-03-19 22:29:36
 * @Description:
 */
const tree = require('../utils/tree');

function lowestCommonAncestor(root, p, q) {
  if (root === null || root.key === p || root.key === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null) return right;
  if (right === null) return left;
  return root;
}

console.log(lowestCommonAncestor(tree.root, 2, 4));
