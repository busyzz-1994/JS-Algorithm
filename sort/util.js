/*
 * @Author: busyzz
 * @Date: 2022-03-07 10:02:53
 * @Description:
 */

function createRandomList(len) {
  return new Array(len).fill('').map(() => Math.floor(Math.random() * 50000));
}

module.exports = {
  createRandomList,
};
