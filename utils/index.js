// 击鼓传花 到哪个 哪个淘汰 最后剩下一个时返回 使用的 queue 的特性
function func(array, count) {
  const list = [...array];
  while (list.length > 1) {
    for (let i = 0; i < count; i++) {
      const firstNode = list.shift();
      if (i < count - 1) {
        list.push(firstNode);
      }
    }
  }
  return list;
}
/**
 * 数组的优缺点
 */

// 优点
// 1.查询速度快
// 缺点
// 1.在创建一个数组的时候申请的内存空间是固定且连续的，在添加元素的过程中有可能需要扩容，即申请一个更大的内存空间，然后将之前的元素拷贝过去，这个过程是很消耗时间的
// 2.数组在插入和删除的时候需要对其他的元素进行移动，很消耗时间

/**
 * 链表的优缺点
 */

// 优点
// 1.元素存在内存当中不必是连续的
// 2.插入和删除操作是O(1)
// 缺点
// 1.查询的时候从头访问

// 链表需要一个 head 属性指向第一个 node ，还有一个 length 或缺链表的长度
// 不需要用数组来实现《《《《《

function LinkedList() {
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  this.head = null;
  this.length = 0;
  LinkedList.prototype.checkPosition = function (position, method) {
    if (position < 0 || position > this.length) {
      throw new Error(`[[method : ${method}]] position is error`);
    }
  };
  LinkedList.prototype.insert = function (position, data) {
    this.checkPosition(position, 'insert');
    let newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return true;
    }
    let currentNode = this.head;
    let prevNode = null;
    let index = 0;
    while (index++ < position) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length += 1;
    return true;
  };
  LinkedList.prototype.toString = function () {
    let str = '';
    let currentNode = this.head;
    while (currentNode) {
      str += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    return str;
  };
}

const linkedList = new LinkedList();
linkedList.insert(0, 'a');
linkedList.insert(0, 'b');
linkedList.insert(1, 'k');
// console.log(linkedList.toString());

/**
 * 双向链表 可以双向遍历
 * 元素拥有 next 和 prev 两个属性 ，这样可以通过一个节点快速的找到上下的节点 ，单项只能找到一个
 * 多一个 tail 属性
 * node 节点多了 prev 属性
 */

function DoublyLinkedList() {
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  this.head = null;
  this.tail = null;
  this.length = 0;
  DoublyLinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) {
      throw new Error(`position : ${position} is error`);
    }
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      if (position === 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else if (position === this.length) {
        node.next = this.tail;
        this.tail.prev = node;
        this.tail = node;
      } else {
        let index = 0;
        let prevNode = null;
        let currentNode = this.head;
        while (index++ < position) {
          prevNode = currentNode;
          currentNode = currentNode.next();
        }
        node.next = currentNode;
        node.prev = prevNode;
        prevNode.next = node;
        currentNode.prev = node;
      }
    }
    this.length += 1;
  };
  DoublyLinkedList.prototype.toString = function () {
    let str = '';
    let currentNode = this.head;
    while (currentNode) {
      str += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    return str;
  };
  DoublyLinkedList.prototype.reverseToString = function () {
    let str = '';
    let currentNode = this.tail;
    while (currentNode) {
      str += currentNode.data + ' ';
      currentNode = currentNode.prev;
    }
    return str;
  };
}

const doubleLinked = new DoublyLinkedList();
doubleLinked.insert(0, 1);
doubleLinked.insert(0, 2);
doubleLinked.insert(0, 3);
// console.log(doubleLinked.toString());
// console.log(doubleLinked.reverseToString());

/*
 * 集合 <无序的，唯一的>
 */

/**
 * 哈希表
 * */

// 优势
// 1.查找速度快 O(1)
// 2.插入和删除的效率高
// 劣势
// 1.无序的

/**
 * BST 查找二叉树
 */
(() => {
  class Node {
    constructor(key) {
      // key 用于排序 可能还有 value 等属性
      this.left = null;
      this.right = null;
      this.key = key;
    }
  }
  class Tree {
    root = null;
    insert(key) {
      let node = new Node(key);
      if (this.root === null) {
        this.root = node;
      } else {
        this._insertNode(this.root, node);
      }
    }
    _insertNode(currentNode, newNode) {
      if (newNode.key < currentNode.key) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this._insertNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this._insertNode(currentNode.right, newNode);
        }
      }
    }
    // 中序遍历 即 先处理 左边节点 -> 父节点 -> 右边节点
    // 可以用来做排序
    midOrderTraverse() {
      this._midOrderTraverseNode(this.root);
    }
    _midOrderTraverseNode(node) {
      if (node !== null) {
        this._midOrderTraverseNode(node.left);
        console.log(node.key);
        this._midOrderTraverseNode(node.right);
      }
    }
    // 前序遍历 即 先处理 父节点 -> 左边节点 -> 右边节点
    preOrderTraverse() {
      this._preOrderTraverseNode(this.root);
    }
    _preOrderTraverseNode(node) {
      if (node !== null) {
        console.log(node.key);
        this._preOrderTraverseNode(node.left);
        this._preOrderTraverseNode(node.right);
      }
    }
    max() {
      let currentNode = this.root;
      let key = null;
      while (currentNode) {
        key = currentNode.key;
        currentNode = currentNode.right;
      }
      return key;
    }
    min() {
      let currentNode = this.root;
      let key = null;
      while (currentNode) {
        key = currentNode.key;
        currentNode = currentNode.left;
      }
      return key;
    }
    search(key) {
      let currentNode = this.root;
      while (currentNode) {
        if (key > currentNode.key) {
          currentNode = currentNode.right;
        } else if (key < currentNode.key) {
          currentNode = currentNode.left;
        } else {
          return currentNode;
        }
      }
      return false;
    }
  }
  const tree = new Tree();
  tree.insert(11);
  tree.insert(21);
  tree.insert(50);
  tree.insert(6);
  tree.insert(5);
  tree.insert(4);
  tree.insert(44);
  tree.insert(24);
  tree.insert(30);
  // console.log(tree.search(12));
  // tree.midOrderTraverse();
  // tree.preOrderTraverse();
  // console.log(tree.max());
  // console.log(tree.min());
})();
