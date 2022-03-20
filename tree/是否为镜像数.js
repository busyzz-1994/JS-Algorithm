/*
 * @Author: busyzz
 * @Date: 2022-03-20 21:37:18
 * @Description:
 */

const tree = require('../utils/tree');

function isSymmetric(root) {
  if (root === null) return true;
  const isEqual = (left, right) => {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null) {
      return false;
    }
    return (
      left.key === right.key &&
      isEqual(left.left, right.right) &&
      isEqual(left.right, right.left)
    );
  };
  return isEqual(root.left, root.right);
}

console.log(isSymmetric(tree.root));
