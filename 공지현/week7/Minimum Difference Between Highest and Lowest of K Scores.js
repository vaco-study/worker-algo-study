/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const ascendingNums = nums.sort((a, b) => a - b);

  let minDiff = ascendingNums[ascendingNums.length - 1];

  for (let i = 0; i + k <= ascendingNums.length; i++) {
    const max = ascendingNums[i + k - 1];
    const min = ascendingNums[i];

    const diff = max - min;

    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
};
