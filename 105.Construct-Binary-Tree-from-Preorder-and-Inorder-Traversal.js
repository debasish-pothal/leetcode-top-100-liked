/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const build = (left, right) => {
    if (left > right) {
      return null;
    }

    const nodeVal = preorder.shift();
    const node = new TreeNode(nodeVal);

    const index = inorder.indexOf(nodeVal);

    node.left = build(left, index - 1);
    node.right = build(index + 1, right);

    return node;
  };

  return build(0, preorder.length - 1);
};
