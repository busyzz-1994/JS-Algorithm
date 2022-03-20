/*
 * @Author: busyzz
 * @Date: 2022-03-19 22:10:19
 * @Description:
 */

const tree = require('../utils/tree');

// tree.midOrderTraverse();

function getHeight(node) {
  if (!node) return 0;
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

console.log(getHeight(tree.root));
