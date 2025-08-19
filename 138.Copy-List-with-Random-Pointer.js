/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const map = new Map();
  let node = head;

  while (node) {
    map.set(node, new _Node(node.val, null, null));
    node = node.next;
  }

  node = head;

  while (node) {
    const copiedNode = map.get(node);
    copiedNode.next = node.next ? map.get(node.next) : null;
    copiedNode.random = node.random ? map.get(node.random) : null;
    node = node.next;
  }

  return map.get(head);
};
