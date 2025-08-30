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
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    const nextPtr = curr.next.next;
    const second = curr.next;

    // swap
    second.next = curr;
    curr.next = nextPtr;
    prev.next = second;

    prev = curr;
    curr = nextPtr;
  }

  return dummy.next;
};
