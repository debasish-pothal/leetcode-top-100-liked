/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const invert = (node) => {
    if (!node) {
      return null;
    }

    const temp = node.left;
    node.left = invert(node.right);
    node.right = invert(temp);

    return node;
  };

  return invert(root);
};
