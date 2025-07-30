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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0;

  const dfs = (node, sum) => {
    if (!node) {
      return;
    }

    if (sum + node.val === targetSum) {
      count++;
    }

    dfs(node.left, node.val + sum);
    dfs(node.right, node.val + sum);
  };

  const startDFS = (node) => {
    if (!node) {
      return;
    }

    dfs(node, 0);
    startDFS(node.left);
    startDFS(node.right);
  };

  startDFS(root);

  return count;
};
