/*
 * @Author: busyzz
 * @Date: 2022-03-29 15:57:00
 * @Description:
 */

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

function func(gas, cost) {
  const len = gas.length;
  let target = -1;
  for (let i = 0; i < len; i++) {
    let rest = gas[i] - cost[i];
    let nextIndex = (i + 1) % len;
    while (rest >= 0 && nextIndex !== i) {
      rest += gas[nextIndex] - cost[nextIndex];
      nextIndex = (nextIndex + 1) % len;
    }
    if (rest >= 0 && nextIndex === i) {
      target = i;
      break;
    }
  }
  return target;
}

console.log(func(gas, cost));
