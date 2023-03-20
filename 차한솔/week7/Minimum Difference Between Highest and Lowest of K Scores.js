/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length === 1) return 0;

  const sorted = nums.sort((a, b) => b - a);
  const scores = [];
  let min = Number.MAX_SAFE_INTEGER;
  let i = 0;

  while (i <= sorted.length) {
    if (scores.length === k) {
      const diff = scores[0] - scores[scores.length - 1];

      min = Math.min(min, diff);
      scores.shift();
    }

    scores.push(sorted[i]);
    i++;
  }

  return min;
};
