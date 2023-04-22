var isSameTree = function (p, q) {
  let isSame = true;

  const helper = (tree1, tree2) => {
    if (tree1?.val !== tree2?.val) {
      return (isSame = false);
    }

    if (tree1?.left && tree2?.left) {
      helper(tree1.left, tree2.left);
    } else if (tree1?.left && !tree2?.left) {
      return (isSame = false);
    } else if (!tree1?.left && tree2?.left) {
      return (isSame = false);
    }

    if (tree1?.right && tree2?.right) {
      helper(tree1.right, tree2.right);
    } else if (tree1?.right && !tree2?.right) {
      return (isSame = false);
    } else if (!tree1?.right && tree2?.right) {
      return (isSame = false);
    }
  };

  helper(p, q);

  return isSame;
};
