var isBalanced = function(root) {
  const dfs = (tree) => {
      if (!tree) return 0;

      const left = 1 + dfs(tree.left);
      const right = 1 + dfs(tree.right);

      if (Math.abs(left - right) > 1) return Infinity;

      return Math.max(left, right);
  }

  return dfs(root) === Infinity ? false : true;
};
