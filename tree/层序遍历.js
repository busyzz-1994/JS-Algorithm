/*
 * @Author: busyzz
 * @Date: 2022-03-20 20:33:51
 * @Description:
 */
const tree = require('../utils/tree');

function levelOrder(node) {
  if (node === null) return [];
  let queue = [node];
  let result = [];
  while (queue.length) {
    let currentNode = queue.shift();
    result.push(currentNode.key);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return result;
}

console.log(levelOrder(tree.root));
