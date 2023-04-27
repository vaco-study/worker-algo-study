var isCousins = function(root, x, y) {
  const queue = [root];

  while (queue.length) {
      if (queue.filter(node => node.val === x).length && queue.filter(node => node.val === y).length) return true;

      const length = queue.length;

      for (let i = 0; i < length; i++) {
          const node = queue.shift();

          if (node.left && node.right) {
              if (node.left.val === x && node.right.val === y) return false;
              if (node.left.val === y && node.right.val === x) return false;
          }
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
  
  return false;
};
