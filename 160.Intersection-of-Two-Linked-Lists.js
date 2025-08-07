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
  let node1 = headA;
  let node2 = headB;
  const visited = new Set();

  while (node1) {
    if (visited.has(node1)) {
      return node1;
    }

    visited.add(node1);

    node1 = node1.next;
  }

  while (node2) {
    if (visited.has(node2)) {
      return node2;
    }

    visited.add(node2);

    node2 = node2.next;
  }

  return null;
};
