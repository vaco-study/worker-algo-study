var isSameTree = function(p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};

var isSameTree = function(p, q) {
  let result = true;
  const dfs = (one, two) => {
      if (one?.val !== two?.val) return result = false;

      if (one?.left && two?.left) {
        dfs(one.left, two.left);
      } else if (!one?.left && two?.left) {
          result = false;
          return;
      } else if (one?.left && !two?.left) {
          result = false;
          return;
      }

      if (one?.right && two?.right) {
          dfs(one.right, two.right);
      } else if (!one?.right && two?.right) {
          result = false;
          return;
      } else if (one?.right && !two?.right) {
          result = false;
          return;
      }
  }

  dfs(p, q);

  return result;
};
