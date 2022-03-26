/*
 * @Author: busyzz
 * @Date: 2022-03-26 11:28:04
 * @Description:
 */

const str = '101023';

function func(str) {
  if (str.length < 4) {
    return [];
  }
  let len = str.length;
  let result = [];
  let path = [];
  const dsf = (startIndex) => {
    if (startIndex >= len || path.length >= 4) {
      if (path.length === 4 && startIndex >= len) {
        result.push(path.join('.'));
      }
      return;
    }
    for (let i = startIndex; i < len; i++) {
      let substr = str.substr(startIndex, i - startIndex + 1);
      let substrLen = substr.length;
      if (substrLen > 3 || (substrLen > 1 && substr.startsWith('0'))) {
        continue;
      }
      path.push(substr);
      dsf(i + 1);
      path.pop();
    }
  };
  dsf(0);
  return result;
}

console.log(func(str));
