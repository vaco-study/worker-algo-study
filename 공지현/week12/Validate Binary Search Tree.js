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
var isValidBST = function (root) {
  if (!root.left && !root.right) return true;

  let isLeftValid = false;
  let isRightValid = false;

  if (root.left)
    isLeftValid = root.val > root.left.val ? isValidBST(root.left) : false;
  else isLeftValid = true;

  if (root.right)
    isRightValid = root.val < root.right.val ? isValidBST(root.right) : false;
  else isRightValid = true;

  return !!isLeftValid && !!isRightValid;
};
