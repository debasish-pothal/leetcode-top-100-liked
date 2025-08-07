/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // move to middle of the list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse 2nd half of the list
  let prev = null;
  let next = null;
  let current = slow;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  slow = prev;

  // traverse with 2 pointers
  let node1 = head;
  let node2 = slow;

  while (node1 && node2) {
    if (node1.val !== node2.val) {
      return false;
    }

    node1 = node1.next;
    node2 = node2.next;
  }

  return true;
};
