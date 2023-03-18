/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const ascendingNums = nums.sort((a, b) => a - b);

  let result = Math.max(...ascendingNums);

  for (let i = 0; i + k <= ascendingNums.length; i++) {
    const sliced = ascendingNums.slice(i, i + k);

    const max = Math.max(...sliced);
    const min = Math.min(...sliced);

    const diff = max - min;

    if (diff < result) result = diff;
  }

  return result;
};
