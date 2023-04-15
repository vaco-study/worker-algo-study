var maxDepth = function (root) {
  if (!root) return 0;

  let depth = 0;

  const getMaxDepth = (root, count) => {
    if (!root) return;

    if (!root.left && !root.right) {
      depth = Math.max(depth, count);
      return;
    }

    getMaxDepth(root.left, count + 1);
    getMaxDepth(root.right, count + 1);
  };

  getMaxDepth(root, 1);

  return depth;
};
