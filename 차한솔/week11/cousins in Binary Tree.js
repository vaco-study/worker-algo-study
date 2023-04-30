var isCousins = function (root, x, y) {
  let xHeight = 1;
  let xParent;
  let yHeight = 1;
  let yParent;

  const helper = (node, depth, parentNode) => {
    if (!node) return;

    helper(node.left, depth + 1, node);
    helper(node.right, depth + 1, node);

    if (node.val === x) {
      xHeight = depth;
      xParent = parentNode;
    }

    if (node.val === y) {
      yHeight = depth;
      yParent = parentNode;
    }
  };

  helper(root, 0);

  return xHeight === yHeight && xParent !== yParent ? true : false;
};
