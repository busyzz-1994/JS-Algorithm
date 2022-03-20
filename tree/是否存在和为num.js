/*
 * @Author: busyzz
 * @Date: 2022-03-20 11:06:45
 * @Description:
 */
const tree = require('../utils/tree');

function getResult(node, num) {
  if (node === null || num < 0) return false;
  // 保证为叶子节点
  if (node.key === num && node.left === null && node.right === null) {
    return true;
  }
  let childrenResult =
    getResult(node.left, num - node.key) ||
    getResult(node.right, num - node.key);
  return childrenResult;
}

console.log(getResult(tree.root, 8));
