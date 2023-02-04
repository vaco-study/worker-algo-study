/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -Infinity;
  let [i, j] = [0, height.length - 1];

  while (true) {
    if (i === j) break;

    const [x, y] = [j - i, Math.min(height[i], height[j])];
    max = Math.max(max, x * y);

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return max;
};
