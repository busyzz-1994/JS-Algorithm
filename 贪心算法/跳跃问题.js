/*
 * @Author: busyzz
 * @Date: 2022-03-29 11:27:09
 * @Description:
 */
// 数组中的数组代表最多可以跳跃的长度，判断是否可以跳到最后一个元素
const arr = [1, 2, 3, 4];

function canJump(arr) {
  if (arr.length === 1) {
    return true;
  }
  let cover = 0;
  let len = arr.length;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + arr[i]);
    if (cover >= len - 1) {
      return true;
    }
  }
  return false;
}

console.log(canJump(arr));
