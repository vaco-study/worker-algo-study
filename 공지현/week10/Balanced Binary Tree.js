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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  const difference = getHeight(root.left) - getHeight(root.right);

  return (
    Math.abs(difference) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  );
};

var getHeight = function (root) {
  if (!root) return -1;

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};
