var trap = function (height) {
  const queue = [height[0]];
  let sum = 0;

  for (let i = 1; i < height.length; i++) {
    if (queue[0] <= height[i]) {
      const shifted = queue.shift();

      while (queue.length) {
        sum += shifted - queue.pop();
      }
    }

    queue.push(height[i]);

    if (queue.length && i === height.length - 1) {
      i -= queue.length - 1;

      while (queue.length) {
        queue.pop();
      }
    }
  }

  return sum;
};
