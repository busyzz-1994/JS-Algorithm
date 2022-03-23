/*
 * @Author: busyzz
 * @Date: 2022-03-22 16:14:01
 * @Description:
 */

const arr = [12, 2, 4, 5];

function binarySearch(arr, num) {
  if (arr.length <= 1) {
    return arr[0] === num ? 0 : -1;
  }
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] < num) {
      low = mid + 1;
    } else if (arr[mid] < num) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

binarySearch(arr, 4);
