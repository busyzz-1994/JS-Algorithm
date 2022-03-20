/*
 * @Author: busyzz
 * @Date: 2022-03-04 21:58:45
 * @Description:
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  root = null;
  insert(key) {
    let node = new Node(key);
    if (!this.root) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }
  _insertNode(parentNode, newNode) {
    if (parentNode.key < newNode.key) {
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        this._insertNode(parentNode.right, newNode);
      }
    } else {
      if (parentNode.left === null) {
        parentNode.left = newNode;
      } else {
        this._insertNode(parentNode.left, newNode);
      }
    }
  }
  // 中序遍历 先左节点 后中 最后右节点 用于排序
  midOrderTraverse() {
    this._midOrderTraverseNode(this.root);
  }
  _midOrderTraverseNode(node) {
    if (node) {
      this._midOrderTraverseNode(node.left);
      console.log(node.key);
      this._midOrderTraverseNode(node.right);
    }
  }
  // 前序遍历
  preOrderTraverse() {
    this._preOrderTraverseNode(this.root);
  }
  _preOrderTraverseNode(node) {
    if (node) {
      console.log(node.key);
      this._preOrderTraverseNode(node.left);
      this._preOrderTraverseNode(node.right);
    }
  }
  max() {
    let currentNode = this.root;
    let key;
    while (currentNode) {
      key = currentNode.key;
      currentNode = currentNode.right;
    }
    return key;
  }
  min() {
    let currentNode = this.root;
    let key;
    while (currentNode) {
      key = currentNode.key;
      currentNode = currentNode.left;
    }
    return key;
  }
  // 通过 key 查询 node
  search(key) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.key > key) {
        currentNode = currentNode.left;
      } else if (currentNode.key < key) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return false;
  }
  // 删除分 3 种 情况, 1.叶子节点 2.只有一个子节点 3.有2个子节点 （注意根节点的处理）
  remove(key) {
    let currentNode = this.root;
    let parentNode = null;
    // 是否为左子节点
    let isLeftNode = true;
    let isFinded = false;
    while (currentNode) {
      if (currentNode.key > key) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        isLeftNode = true;
      } else if (currentNode.key < key) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        isLeftNode = false;
      } else {
        isFinded = true;
        break;
      }
    }
    // 如果没有找到对应节点直接返回
    if (!isFinded) return false;
    // 第一种情况 没有子节点
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode === this.root) {
        this.root = null;
      } else {
        if (isLeftNode) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      }
    }
    // 第二种情况 仅存在一个子节点
    else if (
      (currentNode.left && currentNode.right === null) ||
      (currentNode.left === null && currentNode.right)
    ) {
      if (currentNode === this.root) {
        this.root = this.root.right || this.root.left;
      } else {
        if (isLeftNode) {
          parentNode.left = currentNode.left || currentNode.right;
        } else {
          parentNode.right = currentNode.left || currentNode.right;
        }
      }
    }
    //  第 三 种情况 存在两个节点， 逻辑： 找到右边节点的最小节点替换掉当前节点，然后将这个最小节点删除掉，此时删除的逻辑就和前面的两种相同了
    else {
      let minNode = currentNode.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      let minKey = minNode.key;
      // 先删除后赋值 key
      this.remove(minNode.key);
      currentNode.key = minKey;
    }
    return true;
  }
}
const tree = new Tree();
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(4);
// tree.insert(20);
// tree.insert(4);
// tree.insert(3);
// tree.insert(50);
// tree.insert(19);
// tree.insert(14);
// tree.remove(15);
// tree.midOrderTraverse();
// console.log(tree.min());
// console.log(tree.search(15));

module.exports = tree;
