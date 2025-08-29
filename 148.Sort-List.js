/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const merge = (list1, list2) => {
  const temp = new ListNode(-Infinity);
  let prev = temp;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }

  if (list1) {
    prev.next = list1;
  }

  if (list2) {
    prev.next = list2;
  }

  return temp.next;
};

const getMid = (node) => {
  let slow = node;
  let fast = node.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let left = head;
  let right = getMid(head);
  const temp = right.next;
  right.next = null;
  right = temp;

  left = sortList(left);
  right = sortList(right);

  return merge(left, right);
};
