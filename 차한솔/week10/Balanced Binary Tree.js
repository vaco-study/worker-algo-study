var isBalanced = function (root) {
  if (!root) return true;

  let flag = true;

  const checkBalancedTree = (root) => {
    if (!root.left && !root.right) return 0;

    let leftHeight = 0;
    let rightHeight = 0;

    if (root.left) {
      leftHeight = checkBalancedTree(root.left) + 1;
    }

    if (root.right) {
      rightHeight = checkBalancedTree(root.right) + 1;
    }

    let actualHeight = Math.max(leftHeight, rightHeight);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      flag = false;
    }

    return actualHeight;
  };

  checkBalancedTree(root);

  return flag;
};
