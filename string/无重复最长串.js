// 无重复字符的最长子串是 利用滑动窗口
const str = 'pwwkew';

function func(str) {
  const arr = str.split('');
  const slideWindow = [];
  let max = 0;
  for (let i of arr) {
    if (slideWindow.includes(i)) {
      let index = slideWindow.indexOf(i);
      if (slideWindow.length > max) {
        max = slideWindow.length;
      }
      slideWindow.splice(0, index + 1);
    }
    slideWindow.push(i);
  }
  return max;
}

console.log(func(str));
