/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let length1 = 0;
  let length2 = 0;

  let node1 = headA;
  let node2 = headB;

  while (node1) {
    length1 += 1;
    node1 = node1.next;
  }

  while (node2) {
    length2 += 1;
    node2 = node2.next;
  }

  node1 = headA;
  node2 = headB;

  if (length1 > length2) {
    // pre iterate headA
    const diff = length1 - length2;
    for (let i = 0; i < diff; i++) {
      node1 = node1.next;
    }
  } else if (length1 < length2) {
    // pre iterate headB
    const diff = length2 - length1;
    for (let i = 0; i < diff; i++) {
      node2 = node2.next;
    }
  }

  while (node1 && node2) {
    if (node1 === node2) {
      return node1;
    }

    node1 = node1.next;
    node2 = node2.next;
  }

  return null;
};
