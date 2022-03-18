/*
 * @Author: busyzz
 * @Date: 2022-03-16 21:19:40
 * @Description:
 */
/*
 * @Author: busyzz
 * @Date: 2022-03-12 21:36:15
 * @Description:
 */

const Linked = require('../utils/linked');

const link = new Linked();
link.append(1);
link.append(2);
link.append(3);
link.append(4);
link.append(5);

function remove(link, n) {
  let current = 1;
  let fastHead = link.head;
  let lowHead = link.head;
  let preNode = null;
  while (current < n) {
    fastHead = fastHead.next;
    current++;
  }
  while (fastHead.next) {
    preNode = lowHead;
    fastHead = fastHead.next;
    lowHead = lowHead.next;
  }
  preNode.next = lowHead.next;
}

remove(link, 2);
link.toString();
