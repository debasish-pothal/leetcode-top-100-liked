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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const dfs = (node) => {
    if (!node) {
      return null;
    }

    const leftTail = dfs(node.left);
    const rightTail = dfs(node.right);

    if (node.left) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    }

    return rightTail || leftTail || node;
  };

  dfs(root);
};
