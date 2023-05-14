var isValidBST = function(root, min, max) {
  if (!root) return true;
  if (min && min.val >= root.val) return false;
  if (max && max.val <= root.val) return false;

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
