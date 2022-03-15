/**
 *  堆需要满足的必要条件
 *  1、是一个完全二叉树
 *  2、必须符合 大顶堆 或者 小顶堆 的其中一种
 *  3、堆是可以用一个数组来表示，第一个元素为空元素， 满足 list[i] >= list[2i] || list[i] >= list[2i + 1] 可以通过这种规律来交换节点位置 构建一个堆
 * */

var items = [5, 2, 3, 4, 1];

// // 原地构建堆,将一个不是堆的数组构建成一个堆，需要注意的是数组前面需要加一个空元素
// // 因为堆顶是从 1 开始计算的，并且从左到右依次 +1
function buildHeap(items, len) {
  let n = 1;
  while (n < len) {
    n++;
    heapify(items, n);
  }
  return items;
}
function swap(items, i, j) {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}
function heapify(items, n) {
  if (n > 1 && items[n] > items[Math.floor(n / 2)]) {
    swap(items, n, Math.floor(n / 2));
    n = Math.floor(n / 2);
  }
}

const list = [2, 3, 434, 43, 57, 55];

// 通过 每次构建一个 大顶堆（正序） 小顶堆用于（倒序） 拿到最大的值即 位置为 1 的值 和数组最后一个交换
function heapSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  arr.unshift(null);
  const len = arr.length - 1;
  let n = len;
  while (n > 1) {
    buildHeap(arr, n);
    swap(arr, 1, n);
    n--;
  }
  arr.shift();
  return arr;
}
console.log(heapSort(list));
