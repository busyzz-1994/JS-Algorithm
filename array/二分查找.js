const arr = [1, 2, 3, 4, 5, 6, 7];

function search(arr, number) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr[0] === number ? 0 : -1;
  }
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === number) {
      return mid;
    }
    if (number < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(search(arr, 1));
